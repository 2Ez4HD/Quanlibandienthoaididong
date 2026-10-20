(function () {
  'use strict';

  const STORAGE_KEY = 'gioHang';
  const SHIP_PHI = 30000;
  const SHIP_NGUONG = 500000;
  const MAX_SL = 99;

  const VOUCHERS = {
    N1MOBILE500: { loai: 'tien', giaTri: 500000, moTa: 'Giảm 500.000₫' },
    N1WELCOME500: { loai: 'tien', giaTri: 500000, moTa: 'Giảm 500.000₫' },
    GIAM10: { loai: 'phantram', giaTri: 10, toiDa: 2000000, moTa: 'Giảm 10% (tối đa 2 triệu)' },
    FREESHIP: { loai: 'freeship', giaTri: 0, moTa: 'Miễn phí vận chuyển' },
  };

  let gioHang = [];
  let voucherDangAp = null;
  let thongTinGiaoHang = null;
  let toastTimer = null;

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  const fmt = (n) => new Intl.NumberFormat('vi-VN', { style: 'decimal', maximumFractionDigits: 0 }).format(Math.round(n)) + '₫';

  function loadGioHang() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {}
    return [];
  }

  function luuGioHang() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gioHang));
  }

  function capNhatBadge() {
    const tong = gioHang.reduce((s, sp) => s + sp.soLuong, 0);
    const badge = $('#badge-gio-hang');
    if (badge) {
      badge.textContent = tong > 99 ? '99+' : tong;
      badge.style.display = tong > 0 ? 'flex' : 'none';
    }
  }

  function hienToast(msg, type = 'ok') {
    let toast = $('#toast-global');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-global';
      toast.className = 'toast-global';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.className = 'toast-global hien ' + (type === 'loi' ? 'toast-loi' : 'toast-ok');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('hien'), 2600);
  }

  function tinhToan() {
    const dsChon = gioHang.filter((sp) => sp.chon);
    const tamTinh = dsChon.reduce((s, sp) => s + sp.gia * sp.soLuong, 0);
    const soLuong = dsChon.reduce((s, sp) => s + sp.soLuong, 0);
    let giamGia = 0;
    let phiShip = tamTinh > 0 && tamTinh < SHIP_NGUONG ? SHIP_PHI : 0;

    if (voucherDangAp && tamTinh > 0 && VOUCHERS[voucherDangAp]) {
      const v = VOUCHERS[voucherDangAp];
      if (v.loai === 'tien') giamGia = Math.min(v.giaTri, tamTinh);
      else if (v.loai === 'phantram') giamGia = Math.min((tamTinh * v.giaTri) / 100, v.toiDa || Infinity);
      else if (v.loai === 'freeship') phiShip = 0;
    }

    const tong = Math.max(0, tamTinh - giamGia) + phiShip;
    return { dsChon, tamTinh, soLuong, giamGia, phiShip, tong };
  }

  function dienThongTinTuTaiKhoan() {
    if (!window.N1) return;
    const tk = window.N1.layNguoiDung();
    const f = $('#form-giao-hang');
    if (!tk || !f) return;
    const dien = (ten, giaTri) => {
      if (f[ten] && !f[ten].value && giaTri) f[ten].value = giaTri;
    };
    dien('hoTen', tk.hoTen);
    dien('sdt', tk.soDienThoai);
    dien('email', tk.email);
    dien('diaChi', tk.diaChi);
  }

  function chuyenBuoc(buoc) {
    const khuGio = $('#khu-vuc-gio');
    const khuB2 = $('#khu-vuc-buoc-2');
    const khuB3 = $('#khu-vuc-buoc-3');
    const khuHoanTat = $('#khu-vuc-hoan-tat');

    if (khuGio) khuGio.hidden = true;
    if (khuB2) khuB2.hidden = true;
    if (khuB3) khuB3.hidden = true;
    if (khuHoanTat) khuHoanTat.hidden = true;

    if (buoc === 1 && khuGio) khuGio.hidden = false;
    if (buoc === 2 && khuB2) {
      dienThongTinTuTaiKhoan();
      renderBuoc2();
      khuB2.hidden = false;
    }
    if (buoc === 3 && khuB3) {
      renderBuoc3();
      khuB3.hidden = false;
    }

    const steppers = $$('.buoc-stepper');
    steppers.forEach((el) => {
      const step = parseInt(el.dataset.step);
      el.classList.remove('dang-hien-tai', 'da-xong');
      const icon = el.querySelector('.so-buoc');
      if (step < buoc) {
        el.classList.add('da-xong');
        if (icon) icon.innerHTML = '<i class="fa-solid fa-check"></i>';
      } else if (step === buoc) {
        el.classList.add('dang-hien-tai');
        if (icon) icon.textContent = step;
      } else {
        if (icon) icon.textContent = step;
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderGioHang() {
    const wrap = $('#danh-sach-san-pham');
    const empty = $('#gio-trong');
    const thanhChon = $('.thanh-chon-tat-ca');
    const title = $('#so-mon-gio');

    if (!wrap) return;

    const tongSL = gioHang.reduce((s, sp) => s + sp.soLuong, 0);
    if (title) title.textContent = `(${tongSL} sản phẩm)`;
    capNhatBadge();

    if (gioHang.length === 0) {
      wrap.innerHTML = '';
      if (empty) empty.hidden = false;
      if (thanhChon) thanhChon.style.display = 'none';
      tinhTien();
      return;
    }

    if (empty) empty.hidden = true;
    if (thanhChon) thanhChon.style.display = 'flex';

    wrap.innerHTML = gioHang.map((sp) => `
      <div class="the-san-pham-gio ${sp.chon ? 'dang-chon' : ''}" data-id="${sp.id}">
        <label class="o-checkbox">
          <input type="checkbox" class="chon-sp" ${sp.chon ? 'checked' : ''} />
          <span class="dau-check"><i class="fa-solid fa-check"></i></span>
        </label>
        <button class="nut-xoa-sp" data-xoa="${sp.id}"><i class="fa-regular fa-trash-can"></i></button>
        <div class="anh-sp-gio"><img src="${sp.anh}" alt="${sp.ten}" /></div>
        <div class="thong-tin-sp-gio">
          <h3 class="ten-sp-gio">${sp.ten}</h3>
          <p class="thuoc-tinh-sp-gio">${sp.thuocTinh}</p>
          <div class="hang-duoi-sp">
            <div class="gia-sp-gio">${fmt(sp.gia)}</div>
            <div class="bo-dem">
              <button data-giam="${sp.id}" ${sp.soLuong <= 1 ? 'disabled' : ''}><i class="fa-solid fa-minus"></i></button>
              <input type="number" value="${sp.soLuong}" readonly />
              <button data-tang="${sp.id}" ${sp.soLuong >= MAX_SL ? 'disabled' : ''}><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    $$('.chon-sp').forEach((cb) => cb.addEventListener('change', (e) => {
      const id = e.target.closest('.the-san-pham-gio').dataset.id;
      const sp = gioHang.find((x) => x.id === id);
      if (sp) {
        sp.chon = e.target.checked;
        e.target.closest('.the-san-pham-gio').classList.toggle('dang-chon', sp.chon);
        luuGioHang();
        tinhTien();
        capNhatChonTatCa();
      }
    }));

    $$('[data-xoa]').forEach((btn) => btn.addEventListener('click', () => {
      gioHang = gioHang.filter((x) => x.id !== btn.dataset.xoa);
      luuGioHang();
      renderGioHang();
      hienToast('Đã xóa sản phẩm', 'ok');
    }));

    $$('[data-tang]').forEach((btn) => btn.addEventListener('click', () => {
      const sp = gioHang.find((x) => x.id === btn.dataset.tang);
      if (sp && sp.soLuong < MAX_SL) {
        sp.soLuong++;
        luuGioHang();
        renderGioHang();
      }
    }));

    $$('[data-giam]').forEach((btn) => btn.addEventListener('click', () => {
      const sp = gioHang.find((x) => x.id === btn.dataset.giam);
      if (sp && sp.soLuong > 1) {
        sp.soLuong--;
        luuGioHang();
        renderGioHang();
      }
    }));

    tinhTien();
    capNhatChonTatCa();
  }

  function capNhatChonTatCa() {
    const cb = $('#chon-tat-ca');
    if (!cb) return;
    const soChon = gioHang.filter((sp) => sp.chon).length;
    if ($('#tong-so-chon')) $('#tong-so-chon').textContent = soChon;
    if (gioHang.length === 0) {
      cb.checked = false;
      cb.indeterminate = false;
    } else {
      cb.checked = soChon === gioHang.length;
      cb.indeterminate = soChon > 0 && soChon < gioHang.length;
    }
  }

  function tinhTien() {
    const { dsChon, tamTinh, soLuong, giamGia, phiShip, tong } = tinhToan();

    if ($('#so-luong-tam-tinh')) $('#so-luong-tam-tinh').textContent = soLuong;
    if ($('#tam-tinh')) $('#tam-tinh').textContent = fmt(tamTinh);
    if ($('#giam-gia')) $('#giam-gia').textContent = giamGia > 0 ? '-' + fmt(giamGia) : '-0₫';
    if ($('#phi-van-chuyen')) {
      $('#phi-van-chuyen').textContent = phiShip > 0 ? fmt(phiShip) : 'Miễn phí';
      $('#phi-van-chuyen').className = phiShip > 0 ? '' : 'mau-mien-phi';
    }
    if ($('#tong-cong')) $('#tong-cong').textContent = fmt(tong);

    const nut = $('#nut-thanh-toan');
    if (nut) {
      nut.disabled = dsChon.length === 0;
      nut.innerHTML = dsChon.length === 0 ? '<i class="fa-solid fa-lock"></i> Vui lòng chọn sản phẩm' : '<i class="fa-solid fa-lock"></i> Tiến hành thanh toán';
    }
  }

  function renderBuoc2() {
    const khuB2 = $('#khu-vuc-buoc-2');
    if (!khuB2) return;

    const { dsChon, tamTinh, soLuong, giamGia, phiShip, tong } = tinhToan();

    const dsEl = $('#danh-sach-sp-buoc-2');
    if (dsEl) {
      dsEl.innerHTML = dsChon.map((sp) => `
        <div class="dong-sp-buoc">
          <img src="${sp.anh}" alt="${sp.ten}" class="anh-sp-buoc" />
          <div class="thong-tin-sp-buoc">
            <div class="ten-sp-buoc">${sp.ten}</div>
            <div class="thuoc-tinh-sp-buoc">${sp.thuocTinh}</div>
            <div class="so-luong-sp-buoc">x${sp.soLuong}</div>
          </div>
          <div class="gia-sp-buoc">${fmt(sp.gia * sp.soLuong)}</div>
        </div>
      `).join('');
    }

    if ($('#so-luong-buoc-2')) $('#so-luong-buoc-2').textContent = soLuong;
    if ($('#tam-tinh-buoc-2')) $('#tam-tinh-buoc-2').textContent = fmt(tamTinh);
    if ($('#giam-gia-buoc-2')) $('#giam-gia-buoc-2').textContent = giamGia > 0 ? '-' + fmt(giamGia) : '-0₫';
    if ($('#phi-van-chuyen-buoc-2')) {
      $('#phi-van-chuyen-buoc-2').textContent = phiShip > 0 ? fmt(phiShip) : 'Miễn phí';
      $('#phi-van-chuyen-buoc-2').className = phiShip > 0 ? '' : 'mau-mien-phi';
    }
    if ($('#tong-cong-buoc-2')) $('#tong-cong-buoc-2').textContent = fmt(tong);

    if (thongTinGiaoHang) {
      const f = $('#form-giao-hang');
      if (f) {
        if (f.hoTen) f.hoTen.value = thongTinGiaoHang.hoTen || '';
        if (f.sdt) f.sdt.value = thongTinGiaoHang.sdt || '';
        if (f.email) f.email.value = thongTinGiaoHang.email || '';
        if (f.diaChi) f.diaChi.value = thongTinGiaoHang.diaChi || '';
        if (f.ghiChu) f.ghiChu.value = thongTinGiaoHang.ghiChu || '';
      }
    }
  }

  function renderBuoc3() {
    const khuB3 = $('#khu-vuc-buoc-3');
    if (!khuB3) return;

    const { dsChon, tamTinh, soLuong, giamGia, phiShip, tong } = tinhToan();

    const dsEl = $('#danh-sach-sp-buoc-3');
    if (dsEl) {
      dsEl.innerHTML = dsChon.map((sp) => `
        <div class="dong-sp-buoc">
          <img src="${sp.anh}" alt="${sp.ten}" class="anh-sp-buoc" />
          <div class="thong-tin-sp-buoc">
            <div class="ten-sp-buoc">${sp.ten}</div>
            <div class="thuoc-tinh-sp-buoc">${sp.thuocTinh}</div>
            <div class="so-luong-sp-buoc">x${sp.soLuong}</div>
          </div>
          <div class="gia-sp-buoc">${fmt(sp.gia * sp.soLuong)}</div>
        </div>
      `).join('');
    }

    if ($('#so-luong-buoc-3')) $('#so-luong-buoc-3').textContent = soLuong;
    if ($('#tam-tinh-buoc-3')) $('#tam-tinh-buoc-3').textContent = fmt(tamTinh);
    if ($('#giam-gia-buoc-3')) $('#giam-gia-buoc-3').textContent = giamGia > 0 ? '-' + fmt(giamGia) : '-0₫';
    if ($('#phi-van-chuyen-buoc-3')) {
      $('#phi-van-chuyen-buoc-3').textContent = phiShip > 0 ? fmt(phiShip) : 'Miễn phí';
      $('#phi-van-chuyen-buoc-3').className = phiShip > 0 ? '' : 'mau-mien-phi';
    }
    if ($('#tong-cong-buoc-3')) $('#tong-cong-buoc-3').textContent = fmt(tong);

    if (thongTinGiaoHang) {
      if ($('#tt-ho-ten')) $('#tt-ho-ten').textContent = thongTinGiaoHang.hoTen || '';
      if ($('#tt-sdt')) $('#tt-sdt').textContent = thongTinGiaoHang.sdt || '';
      if ($('#tt-email')) $('#tt-email').textContent = thongTinGiaoHang.email || 'Chưa cung cấp';
      if ($('#tt-dia-chi')) $('#tt-dia-chi').textContent = thongTinGiaoHang.diaChi || '';
      if ($('#tt-ghi-chu')) $('#tt-ghi-chu').textContent = thongTinGiaoHang.ghiChu || 'Không có';
    }
    if ($('#tt-voucher')) {
      if (voucherDangAp && VOUCHERS[voucherDangAp]) {
        $('#tt-voucher').textContent = voucherDangAp + ' — ' + VOUCHERS[voucherDangAp].moTa;
      } else {
        $('#tt-voucher').textContent = 'Không áp dụng';
      }
    }
  }

  function apDungVoucher(ma, tbEl, inputEl) {
    const maCheck = (ma || '').trim().toUpperCase();
    if (!maCheck) return tbEl ? (tbEl.textContent = 'Vui lòng nhập mã.', tbEl.className = 'thong-bao-form loi') : 0;
    if (!VOUCHERS[maCheck]) return tbEl ? (tbEl.textContent = 'Mã không hợp lệ.', tbEl.className = 'thong-bao-form loi') : 0;

    const dsChon = gioHang.filter((sp) => sp.chon);
    const tamTinh = dsChon.reduce((s, sp) => s + sp.gia * sp.soLuong, 0);

    if (dsChon.length === 0) return tbEl ? (tbEl.textContent = 'Vui lòng chọn sản phẩm.', tbEl.className = 'thong-bao-form loi') : 0;
    if (VOUCHERS[maCheck].loai === 'tien' && !VOUCHERS[maCheck].rieng && tamTinh < 2000000) {
      return tbEl ? (tbEl.textContent = 'Mã áp dụng cho đơn từ 2 triệu.', tbEl.className = 'thong-bao-form loi') : 0;
    }

    voucherDangAp = maCheck;
    if (inputEl) inputEl.value = maCheck;
    if (tbEl) {
      tbEl.textContent = `Đã áp dụng: ${VOUCHERS[maCheck].moTa}`;
      tbEl.className = 'thong-bao-form ok';
    }

    const tbGio = $('#thong-bao-voucher');
    if (tbGio && tbEl !== tbGio) {
      tbGio.textContent = `Đã áp dụng: ${VOUCHERS[maCheck].moTa}`;
      tbGio.className = 'thong-bao-form ok';
    }

    hienToast('Áp dụng mã thành công!', 'ok');
    tinhTien();
    if (!$('#khu-vuc-buoc-2') || !$('#khu-vuc-buoc-2').hidden) renderBuoc2();
    if (!$('#khu-vuc-buoc-3') || !$('#khu-vuc-buoc-3').hidden) renderBuoc3();
  }

  function validateGiaoHang(data) {
    if (!data.hoTen || data.hoTen.trim().length < 2) return 'Vui lòng nhập họ tên.';
    if (!data.sdt || !/^[0-9]{9,11}$/.test(data.sdt.replace(/\s/g, ''))) return 'Số điện thoại không hợp lệ.';
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Email không hợp lệ.';
    if (!data.diaChi || data.diaChi.trim().length < 5) return 'Vui lòng nhập địa chỉ giao hàng.';
    return null;
  }

  function khoiTaoSuKien() {
    if ($('#chon-tat-ca')) {
      $('#chon-tat-ca').addEventListener('change', (e) => {
        gioHang.forEach((sp) => (sp.chon = e.target.checked));
        luuGioHang();
        renderGioHang();
      });
    }
    if ($('#xoa-da-chon')) {
      $('#xoa-da-chon').addEventListener('click', () => {
        const soXoa = gioHang.filter((sp) => sp.chon).length;
        if (soXoa === 0) return hienToast('Chưa chọn sản phẩm', 'loi');
        if (confirm(`Xóa ${soXoa} sản phẩm đã chọn?`)) {
          gioHang = gioHang.filter((sp) => !sp.chon);
          luuGioHang();
          renderGioHang();
          hienToast(`Đã xóa ${soXoa} sản phẩm`, 'ok');
        }
      });
    }

    if ($('#ap-dung-voucher')) {
      $('#ap-dung-voucher').addEventListener('click', () => {
        apDungVoucher($('#ma-voucher').value, $('#thong-bao-voucher'), $('#ma-voucher'));
      });
    }

    if ($('#form-voucher-footer')) {
      $('#form-voucher-footer').addEventListener('submit', (e) => {
        e.preventDefault();
        apDungVoucher($('#ma-voucher-footer').value, $('#thong-bao-voucher-footer'), $('#ma-voucher-footer'));
      });
    }

    if ($('#nut-thanh-toan')) {
      $('#nut-thanh-toan').addEventListener('click', () => {
        if (gioHang.filter((sp) => sp.chon).length === 0) return hienToast('Vui lòng chọn sản phẩm', 'loi');
        chuyenBuoc(2);
      });
    }

    if ($('#form-giao-hang')) {
      $('#form-giao-hang').addEventListener('submit', (e) => {
        e.preventDefault();
        const f = e.target;
        const data = {
          hoTen: f.hoTen ? f.hoTen.value.trim() : '',
          sdt: f.sdt ? f.sdt.value.trim() : '',
          email: f.email ? f.email.value.trim() : '',
          diaChi: f.diaChi ? f.diaChi.value.trim() : '',
          ghiChu: f.ghiChu ? f.ghiChu.value.trim() : '',
        };
        const loi = validateGiaoHang(data);
        if (loi) {
          hienToast(loi, 'loi');
          return;
        }
        thongTinGiaoHang = data;
        chuyenBuoc(3);
      });
    }

    if ($('#huy-buoc-2')) $('#huy-buoc-2').addEventListener('click', () => chuyenBuoc(1));
    if ($('#quay-lai-buoc-2')) $('#quay-lai-buoc-2').addEventListener('click', () => chuyenBuoc(2));

    if ($('#hoan-tat')) {
      $('#hoan-tat').addEventListener('click', () => {
        const { dsChon, tamTinh, giamGia, phiShip, tong } = tinhToan();
        if (dsChon.length === 0) return hienToast('Không có sản phẩm để đặt hàng', 'loi');
        if (!thongTinGiaoHang) return hienToast('Thiếu thông tin giao hàng', 'loi');

        const maDon = 'DH' + Date.now().toString().slice(-8);
        let diemCong = 0;
        if (window.N1) {
          const don = window.N1.donHang.them({
            ma: maDon,
            items: dsChon.map((sp) => ({
              id: sp.id,
              ten: sp.ten,
              thuocTinh: sp.thuocTinh,
              gia: sp.gia,
              soLuong: sp.soLuong,
              anh: sp.anh,
            })),
            tamTinh: tamTinh,
            giamGia: giamGia,
            phiShip: phiShip,
            tong: tong,
            voucher: voucherDangAp,
            voucherRieng:
              voucherDangAp && VOUCHERS[voucherDangAp] && VOUCHERS[voucherDangAp].rieng ? voucherDangAp : null,
            giaoHang: thongTinGiaoHang,
          });
          diemCong = don.diemCong || 0;
        }
        const hoanTatEl = $('#khu-vuc-hoan-tat');
        const khuB3 = $('#khu-vuc-buoc-3');
        if ($('#ma-don-hang')) $('#ma-don-hang').textContent = maDon;
        if (hoanTatEl) hoanTatEl.hidden = false;
        if (khuB3) khuB3.hidden = true;

        gioHang = gioHang.filter((sp) => !sp.chon);
        luuGioHang();
        voucherDangAp = null;
        thongTinGiaoHang = null;
        capNhatBadge();
        hienToast('Đặt hàng thành công!' + (diemCong > 0 ? ' Bạn được cộng ' + diemCong + ' điểm.' : ''), 'ok');
      });
    }

    if ($('#tiep-tuc-mua-sam')) {
      $('#tiep-tuc-mua-sam').addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }

    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY) {
        gioHang = loadGioHang();
        renderGioHang();
      }
    });
  }

  function khoiTao() {
    if (window.N1) {
      window.N1.voucherChuaDung().forEach((v) => {
        VOUCHERS[v.ma] = {
          loai: 'tien',
          giaTri: v.giaTri,
          moTa: 'Giảm ' + fmt(v.giaTri) + ' (voucher điểm thưởng)',
          rieng: true,
        };
      });
    }
    gioHang = loadGioHang();
    khoiTaoSuKien();
    renderGioHang();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', khoiTao);
  } else {
    khoiTao();
  }
})();