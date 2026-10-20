
(function () {
  "use strict";

  const KHOA_TAI_KHOAN = "n1-tai-khoan";

  function docDanhSachTaiKhoan() {
    try {
      const ds = JSON.parse(localStorage.getItem(KHOA_TAI_KHOAN));
      return Array.isArray(ds) ? ds : [];
    } catch (err) {
      return [];
    }
  }

  function luuDanhSachTaiKhoan(ds) {
    try {
      localStorage.setItem(KHOA_TAI_KHOAN, JSON.stringify(ds));
      return true;
    } catch (err) {
      return false;
    }
  }

  function docPhien() {
    return N1.layPhien();
  }

  function luuPhien(id, ghiNho) {
    N1.luuPhien(id, ghiNho);
  }

  function xoaPhien() {
    N1.xoaPhien();
  }

  function taoId() {
    return (
      "tk_" +
      Date.now().toString(36) +
      "_" +
      Math.random().toString(36).slice(2, 8)
    );
  }

  function taoMuoi() {
    const kyTu =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let muoi = "";
    for (let i = 0; i < 16; i++) {
      muoi += kyTu.charAt(Math.floor(Math.random() * kyTu.length));
    }
    return muoi;
  }

  async function bamSha256(text) {
    if (
      window.crypto &&
      window.crypto.subtle &&
      typeof window.crypto.subtle.digest === "function"
    ) {
      const buffer = new TextEncoder().encode(text);
      const hash = await window.crypto.subtle.digest("SHA-256", buffer);
      const mang = Array.from(new Uint8Array(hash));
      return mang
        .map(function (b) {
          return b.toString(16).padStart(2, "0");
        })
        .join("");
    }
    let hash1 = 0x811c9dc5;
    let hash2 = 0xdeadbeef;
    for (let i = 0; i < text.length; i++) {
      const c = text.charCodeAt(i);
      hash1 ^= c;
      hash1 = (hash1 * 0x01000193) >>> 0;
      hash2 = ((hash2 << 5) + hash2 + c) >>> 0;
    }
    return (
      hash1.toString(16).padStart(8, "0") +
      hash2.toString(16).padStart(8, "0")
    );
  }

  function chuanHoaEmail(s) {
    return String(s || "")
      .trim()
      .toLowerCase();
  }

  function chuanHoaSdt(s) {
    let so = String(s || "").replace(/[\s.\-()]/g, "");
    if (so.startsWith("+84")) so = "0" + so.slice(3);
    else if (so.startsWith("84") && so.length === 11) so = "0" + so.slice(2);
    return so;
  }

  function kiemTraHoTen(giaTri) {
    const ten = String(giaTri || "").trim();
    if (!ten) return { hopLe: false, loi: "Vui lòng nhập họ và tên." };
    if (ten.length < 2)
      return { hopLe: false, loi: "Họ tên phải có ít nhất 2 ký tự." };
    if (ten.length > 60)
      return { hopLe: false, loi: "Họ tên không được vượt quá 60 ký tự." };
    if (!/^[A-Za-zÀ-ỹ\s]+$/.test(ten))
      return {
        hopLe: false,
        loi: "Họ tên chỉ được chứa chữ cái và khoảng trắng.",
      };
    return { hopLe: true, giaTri: ten };
  }

  function kiemTraEmailDK(giaTri) {
    const email = String(giaTri || "").trim();
    if (!email) return { hopLe: false, loi: "Vui lòng nhập email." };
    if (/\s/.test(email))
      return { hopLe: false, loi: "Email không được chứa khoảng trắng." };
    const mau =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
    if (email.length > 254 || email.includes("..") || !mau.test(email)) {
      return {
        hopLe: false,
        loi: "Email không hợp lệ. Ví dụ: tenban@gmail.com",
      };
    }
    return { hopLe: true, giaTri: email.toLowerCase() };
  }

  function kiemTraSdt(giaTri) {
    let so = chuanHoaSdt(giaTri);
    if (!so) return { hopLe: false, loi: "Vui lòng nhập số điện thoại." };
    if (/\D/.test(so))
      return { hopLe: false, loi: "Số điện thoại chỉ được chứa chữ số." };
    if (so.length !== 10)
      return { hopLe: false, loi: "Số điện thoại phải có đúng 10 chữ số." };
    if (!/^0(3|5|7|8|9)\d{8}$/.test(so))
      return {
        hopLe: false,
        loi: "Đầu số không hợp lệ (03, 05, 07, 08, 09).",
      };
    return {
      hopLe: true,
      giaTri: so,
      hienThi: so.replace(/^(\d{4})(\d{3})(\d{3})$/, "$1 $2 $3"),
    };
  }

  function tinhDoManhMatKhau(mk) {
    const s = String(mk || "");
    if (!s) return { diem: 0, muc: "yeu", chu: "" };
    let diem = 0;
    if (s.length >= 8) diem++;
    if (s.length >= 12) diem++;
    if (/[a-z]/.test(s) && /[A-Z]/.test(s)) diem++;
    if (/\d/.test(s)) diem++;
    if (/[^A-Za-z0-9]/.test(s)) diem++;
    let muc = "yeu";
    let chu = "Yếu";
    if (diem >= 4) {
      muc = "manh";
      chu = "Mạnh";
    } else if (diem >= 2) {
      muc = "trung-binh";
      chu = "Trung bình";
    }
    return { diem: diem, muc: muc, chu: chu };
  }

  function kiemTraMatKhauDK(giaTri) {
    const mk = String(giaTri || "");
    if (!mk) return { hopLe: false, loi: "Vui lòng nhập mật khẩu." };
    if (mk.length < 8)
      return { hopLe: false, loi: "Mật khẩu phải có ít nhất 8 ký tự." };
    if (mk.length > 64)
      return { hopLe: false, loi: "Mật khẩu không được vượt quá 64 ký tự." };
    if (!/[A-Za-z]/.test(mk) || !/\d/.test(mk))
      return {
        hopLe: false,
        loi: "Mật khẩu phải chứa cả chữ cái và chữ số.",
      };
    return { hopLe: true, giaTri: mk };
  }

  function kiemTraMatKhauDN(giaTri) {
    const mk = String(giaTri || "");
    if (!mk) return { hopLe: false, loi: "Vui lòng nhập mật khẩu." };
    return { hopLe: true, giaTri: mk };
  }

  function kiemTraDangNhap(giaTri) {
    const v = String(giaTri || "").trim();
    if (!v)
      return { hopLe: false, loi: "Vui lòng nhập email hoặc số điện thoại." };
    return { hopLe: true, giaTri: v };
  }

  async function dangKyTaiKhoan(thongTin) {
    const ds = docDanhSachTaiKhoan();
    if (ds.some((tk) => tk.email === thongTin.email)) {
      return {
        ok: false,
        loi: "Email này đã được sử dụng. Vui lòng đăng nhập hoặc dùng email khác.",
      };
    }
    const sdt = chuanHoaSdt(thongTin.soDienThoai);
    if (ds.some((tk) => tk.soDienThoai === sdt)) {
      return {
        ok: false,
        loi: "Số điện thoại này đã được sử dụng. Vui lòng kiểm tra lại.",
      };
    }
    const muoi = taoMuoi();
    const matKhauHash = await bamSha256(muoi + ":" + thongTin.matKhau);

    const tkMoi = {
      id: taoId(),
      hoTen: thongTin.hoTen,
      email: chuanHoaEmail(thongTin.email),
      soDienThoai: sdt,
      soDienThoaiHienThi: sdt.replace(
        /^(\d{4})(\d{3})(\d{3})$/,
        "$1 $2 $3",
      ),
      matKhauHash: matKhauHash,
      muoi: muoi,
      diem: 100,
      diaChi: "",
      voucherRieng: [],
      lichSuDiem: [
        {
          luc: new Date().toISOString(),
          soDiem: 100,
          moTa: "Quà chào mừng thành viên mới",
        },
      ],
      ngayTao: new Date().toISOString(),
    };

    ds.push(tkMoi);
    if (!luuDanhSachTaiKhoan(ds)) {
      return {
        ok: false,
        loi: "Không thể lưu tài khoản (trình duyệt chặn bộ nhớ). Vui lòng thử lại.",
      };
    }
    return { ok: true, taiKhoan: tkMoi };
  }

  async function dangNhap(tenDangNhap, matKhau, ghiNho) {
    const ds = docDanhSachTaiKhoan();
    if (ds.length === 0) {
      return {
        ok: false,
        loi: "Chưa có tài khoản nào được đăng ký. Vui lòng tạo tài khoản trước.",
      };
    }
    const v = String(tenDangNhap || "").trim();
    const emailThu = chuanHoaEmail(v);
    const sdtThu = chuanHoaSdt(v);

    const tk = ds.find(
      (t) => t.email === emailThu || t.soDienThoai === sdtThu,
    );
    if (!tk) {
      return {
        ok: false,
        loi: "Tài khoản không tồn tại. Vui lòng kiểm tra lại hoặc đăng ký mới.",
      };
    }
    const hashNhap = await bamSha256(tk.muoi + ":" + matKhau);
    if (hashNhap !== tk.matKhauHash) {
      return {
        ok: false,
        loi: "Mật khẩu không chính xác. Vui lòng thử lại.",
      };
    }
    luuPhien(tk.id, ghiNho);
    return { ok: true, taiKhoan: tk };
  }

  function layNguoiDungHienTai() {
    const phien = docPhien();
    if (!phien || !phien.id) return null;
    const ds = docDanhSachTaiKhoan();
    return ds.find((t) => t.id === phien.id) || null;
  }

  function dangXuat() {
    xoaPhien();
  }

  function hienThongBaoInput(oInput, loiEl, noiDung, loai) {
    loiEl.textContent = noiDung || "";
    oInput.classList.toggle("input-loi", loai === "loi");
    oInput.classList.toggle("input-ok", loai === "ok");
    if (loai === "loi") {
      oInput.querySelector("input").setAttribute("aria-invalid", "true");
    } else {
      oInput.querySelector("input").removeAttribute("aria-invalid");
    }
  }

  function hienThongBaoTong(el, noiDung, loai) {
    el.textContent = noiDung || "";
    el.className = "thong-bao-tong" + (loai ? " " + loai : "");
  }
  function diTiepNeuCo() {
    const next = N1.layNextHopLe();
    if (next) window.location.href = next;
  }

  function formatNgay(iso) {
    if (!iso) return "—";
    try {
      const d = new Date(iso);
      const ngay = String(d.getDate()).padStart(2, "0");
      const thang = String(d.getMonth() + 1).padStart(2, "0");
      const nam = d.getFullYear();
      return ngay + "/" + thang + "/" + nam;
    } catch (err) {
      return "—";
    }
  }

  function chuyenTab(tenTab) {
    document.querySelectorAll(".tab-tai-khoan-muc").forEach(function (nut) {
      const active = nut.getAttribute("data-tab") === tenTab;
      nut.classList.toggle("active", active);
      nut.setAttribute("aria-selected", active ? "true" : "false");
    });
    document.querySelectorAll(".form-tai-khoan").forEach(function (form) {
      form.classList.remove("active");
    });
    const formCanHien =
      tenTab === "dang-nhap"
        ? document.getElementById("form-dang-nhap")
        : tenTab === "quen-mat-khau"
          ? document.getElementById("form-quen-mk")
          : document.getElementById("form-dang-ky-tk");
    if (formCanHien) formCanHien.classList.add("active");
  }

  function hienProfile(tk) {
    const khoiAuth = document.getElementById("khoi-xac-thuc");
    const khoiProfile = document.getElementById("khoi-profile");
    if (!khoiAuth || !khoiProfile) return;

    khoiAuth.style.display = "none";
    khoiAuth.hidden = true;
    khoiProfile.hidden = false;
    khoiProfile.style.display = "block";

    const viet = String(tk.hoTen || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toUpperCase();
    const avatar = viet.charAt(0) || "N";
    const tenHien = tk.hoTen || "Người dùng";

    const avatarEl = document.getElementById("profile-avatar");
    const tenEl = document.getElementById("profile-ten");
    const emailEl = document.getElementById("profile-email");
    const sdtEl = document.getElementById("profile-sdt");
    const ngayTaoEl = document.getElementById("profile-ngay-tao");
    const diemEl = document.getElementById("profile-diem");

    if (avatarEl) avatarEl.textContent = avatar;
    if (tenEl) tenEl.textContent = tenHien;
    if (emailEl) emailEl.textContent = tk.email || "—";
    if (sdtEl) sdtEl.textContent = tk.soDienThoaiHienThi || tk.soDienThoai || "—";
    if (ngayTaoEl) ngayTaoEl.textContent = formatNgay(tk.ngayTao);
    if (diemEl) diemEl.textContent = tk.diem != null ? tk.diem : 0;
    const diaChiEl = document.getElementById("profile-dia-chi");
    if (diaChiEl) diaChiEl.textContent = tk.diaChi ? tk.diaChi : "Chưa cập nhật";
    capNhatProfileDong(tk);
  }

  function hienFormAuth() {
    const khoiAuth = document.getElementById("khoi-xac-thuc");
    const khoiProfile = document.getElementById("khoi-profile");
    if (!khoiAuth || !khoiProfile) return;

    khoiAuth.hidden = false;
    khoiAuth.style.display = "grid";
    khoiProfile.hidden = true;
    khoiProfile.style.display = "none";
  }

  function capNhatSoTaiKhoan() {
    const el = document.getElementById("so-tai-khoan");
    if (el) el.textContent = docDanhSachTaiKhoan().length.toLocaleString("vi-VN");
  }

  function ganSuKien() {
    document.querySelectorAll(".tab-tai-khoan-muc").forEach(function (nut) {
      nut.addEventListener("click", function () {
        chuyenTab(nut.getAttribute("data-tab"));
        hienThongBaoTong(document.getElementById("thong-bao-dang-nhap"), "", "");
        hienThongBaoTong(document.getElementById("thong-bao-dang-ky"), "", "");
      });
    });

    document.querySelectorAll(".nut-hien-mk").forEach(function (nut) {
      nut.addEventListener("click", function () {
        const id = nut.getAttribute("data-target");
        const o = document.getElementById(id);
        if (!o) return;
        const icon = nut.querySelector("i");
        if (o.type === "password") {
          o.type = "text";
          if (icon) {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
          }
        } else {
          o.type = "password";
          if (icon) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
          }
        }
      });
    });

    const oHoTen = document.getElementById("dk-ho-ten");
    const oEmail = document.getElementById("dk-email");
    const oSdt = document.getElementById("dk-so-dien-thoai");
    const oMk = document.getElementById("dk-mat-khau");
    const oXacNhan = document.getElementById("dk-xac-nhan-mk");
    const oDnEmail = document.getElementById("dn-email");
    const oDnMk = document.getElementById("dn-mat-khau");

    function nhapInput(input, loiEl, kiemTra) {
      if (!input || !loiEl) return;
      let daBaoLoi = false;
      input.addEventListener("input", function () {
        const kq = kiemTra(input.value);
        const wrapper = input.closest(".o-input");
        if (!kq.hopLe) {
          daBaoLoi = true;
          hienThongBaoInput(wrapper, loiEl, kq.loi, "loi");
        } else if (daBaoLoi) {
          daBaoLoi = false;
          hienThongBaoInput(wrapper, loiEl, "", "");
        }
      });
      input.addEventListener("blur", function () {
        if (!input.value.trim()) return;
        const kq = kiemTra(input.value);
        const wrapper = input.closest(".o-input");
        if (!kq.hopLe) {
          daBaoLoi = true;
          hienThongBaoInput(wrapper, loiEl, kq.loi, "loi");
        } else if (kq.giaTri && kq.giaTri.length > 0) {
          hienThongBaoInput(wrapper, loiEl, "", "ok");
        }
      });
    }

    if (oHoTen) nhapInput(oHoTen, document.getElementById("dk-ho-ten-loi"), kiemTraHoTen);
    if (oEmail) nhapInput(oEmail, document.getElementById("dk-email-loi"), kiemTraEmailDK);
    if (oSdt) nhapInput(oSdt, document.getElementById("dk-so-dien-thoai-loi"), kiemTraSdt);
    if (oXacNhan) {
      nhapInput(oXacNhan, document.getElementById("dk-xac-nhan-mk-loi"), function (v) {
        const kqMk = kiemTraMatKhauDK(oMk ? oMk.value : "");
        if (!kqMk.hopLe) return kqMk;
        if (String(v) !== String(oMk ? oMk.value : "")) {
          return { hopLe: false, loi: "Mật khẩu xác nhận không khớp." };
        }
        return { hopLe: true };
      });
    }
    if (oDnEmail) nhapInput(oDnEmail, document.getElementById("dn-email-loi"), kiemTraDangNhap);
    if (oDnMk) nhapInput(oDnMk, document.getElementById("dn-mat-khau-loi"), kiemTraMatKhauDN);

    const thanhDoManh = document.getElementById("do-manh-muc");
    const chuDoManh = document.getElementById("do-manh-chu");
    if (oMk && thanhDoManh && chuDoManh) {
      oMk.addEventListener("input", function () {
        const kq = tinhDoManhMatKhau(oMk.value);
        thanhDoManh.classList.remove("do-yeu", "do-trung-binh", "do-manh");
        chuDoManh.classList.remove("do-yeu", "do-trung-binh", "do-manh");
        if (oMk.value) {
          thanhDoManh.classList.add("do-" + kq.muc);
          chuDoManh.classList.add("do-" + kq.muc);
          chuDoManh.textContent = kq.chu;
        } else {
          chuDoManh.textContent = "";
        }
      });
    }

    const formDn = document.getElementById("form-dang-nhap");
    const tbDn = document.getElementById("thong-bao-dang-nhap");
    if (formDn && tbDn) {
      formDn.addEventListener("submit", async function (e) {
        e.preventDefault();
        hienThongBaoTong(tbDn, "", "");

        const kqTen = kiemTraDangNhap(oDnEmail.value);
        if (!kqTen.hopLe) {
          hienThongBaoInput(
            oDnEmail.closest(".o-input"),
            document.getElementById("dn-email-loi"),
            kqTen.loi,
            "loi"
          );
          oDnEmail.focus();
          return;
        }
        const kqMk = kiemTraMatKhauDN(oDnMk.value);
        if (!kqMk.hopLe) {
          hienThongBaoInput(
            oDnMk.closest(".o-input"),
            document.getElementById("dn-mat-khau-loi"),
            kqMk.loi,
            "loi"
          );
          oDnMk.focus();
          return;
        }
        hienThongBaoTong(tbDn, "Đang kiểm tra tài khoản...", "");
        const nut = formDn.querySelector(".nut-chinh-tai-khoan");
        if (nut) {
          nut.disabled = true;
          nut.querySelector("span").textContent = "Đang đăng nhập...";
        }

        try {
          const ghiNho = !!document.getElementById("dn-ghi-nho") &&
            document.getElementById("dn-ghi-nho").checked;
          const kq = await dangNhap(oDnEmail.value, oDnMk.value, ghiNho);
          if (!kq.ok) {
            hienThongBaoTong(tbDn, kq.loi, "loi");
            if (nut) {
              nut.disabled = false;
              nut.querySelector("span").textContent = "Đăng nhập";
            }
            return;
          }

          hienProfile(kq.taiKhoan);
          formDn.reset();
          diTiepNeuCo();
          if (nut) {
            nut.disabled = false;
            nut.querySelector("span").textContent = "Đăng nhập";
          }
        } catch (err) {
          hienThongBaoTong(
            tbDn,
            "Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại.",
            "loi"
          );
          if (nut) {
            nut.disabled = false;
            nut.querySelector("span").textContent = "Đăng nhập";
          }
        }
      });
    }

    const formDk = document.getElementById("form-dang-ky-tk");
    const tbDk = document.getElementById("thong-bao-dang-ky");
    if (formDk && tbDk) {
      formDk.addEventListener("submit", async function (e) {
        e.preventDefault();
        hienThongBaoTong(tbDk, "", "");

        const kqTen = kiemTraHoTen(oHoTen.value);
        if (!kqTen.hopLe) {
          hienThongBaoInput(
            oHoTen.closest(".o-input"),
            document.getElementById("dk-ho-ten-loi"),
            kqTen.loi,
            "loi"
          );
          oHoTen.focus();
          return;
        }
        const kqEmail = kiemTraEmailDK(oEmail.value);
        if (!kqEmail.hopLe) {
          hienThongBaoInput(
            oEmail.closest(".o-input"),
            document.getElementById("dk-email-loi"),
            kqEmail.loi,
            "loi"
          );
          oEmail.focus();
          return;
        }
        const kqSdt = kiemTraSdt(oSdt.value);
        if (!kqSdt.hopLe) {
          hienThongBaoInput(
            oSdt.closest(".o-input"),
            document.getElementById("dk-so-dien-thoai-loi"),
            kqSdt.loi,
            "loi"
          );
          oSdt.focus();
          return;
        }
        const kqMk = kiemTraMatKhauDK(oMk.value);
        if (!kqMk.hopLe) {
          hienThongBaoInput(
            oMk.closest(".o-input"),
            document.getElementById("dk-mat-khau-loi"),
            kqMk.loi,
            "loi"
          );
          oMk.focus();
          return;
        }
        if (String(oXacNhan.value) !== String(oMk.value)) {
          hienThongBaoInput(
            oXacNhan.closest(".o-input"),
            document.getElementById("dk-xac-nhan-mk-loi"),
            "Mật khẩu xác nhận không khớp.",
            "loi"
          );
          oXacNhan.focus();
          return;
        }
        const dongY = document.getElementById("dk-dong-y");
        if (dongY && !dongY.checked) {
          hienThongBaoTong(
            tbDk,
            "Vui lòng đồng ý với Điều khoản sử dụng trước khi tạo tài khoản.",
            "loi"
          );
          return;
        }

        const nut = formDk.querySelector(".nut-chinh-tai-khoan");
        if (nut) {
          nut.disabled = true;
          nut.querySelector("span").textContent = "Đang tạo tài khoản...";
        }
        hienThongBaoTong(tbDk, "Đang xử lý...", "");

        try {
          const kq = await dangKyTaiKhoan({
            hoTen: kqTen.giaTri,
            email: kqEmail.giaTri,
            soDienThoai: kqSdt.giaTri,
            matKhau: kqMk.giaTri,
          });
          if (!kq.ok) {
            hienThongBaoTong(tbDk, kq.loi, "loi");
            if (nut) {
              nut.disabled = false;
              nut.querySelector("span").textContent = "Tạo tài khoản";
            }
            return;
          }
          capNhatSoTaiKhoan();
          luuPhien(kq.taiKhoan.id, true);

          hienProfile(kq.taiKhoan);
          formDk.reset();
          diTiepNeuCo();
          if (nut) {
            nut.disabled = false;
            nut.querySelector("span").textContent = "Tạo tài khoản";
          }
        } catch (err) {
          hienThongBaoTong(
            tbDk,
            "Đã xảy ra lỗi trong quá trình đăng ký. Vui lòng thử lại.",
            "loi"
          );
          if (nut) {
            nut.disabled = false;
            nut.querySelector("span").textContent = "Tạo tài khoản";
          }
        }
      });
    }

    const nutDangXuat = document.getElementById("nut-dang-xuat");
    if (nutDangXuat) {
      nutDangXuat.addEventListener("click", function () {
        if (!confirm("Bạn có chắc chắn muốn đăng xuất?")) return;
        dangXuat();
        dongPanel();
        hienFormAuth();
      });
    }
  }

  const fmtTien = function (n) {
    return N1.fmtTien(n);
  };
  const esc = function (s) {
    return N1.esc(s);
  };

  let tkToastTimer = null;
  function hienToastTk(msg, loai) {
    let t = document.getElementById("tk-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "tk-toast";
      t.setAttribute("role", "status");
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.className = "tk-toast hien" + (loai === "loi" ? " loi" : "");
    clearTimeout(tkToastTimer);
    tkToastTimer = setTimeout(function () {
      t.classList.remove("hien");
    }, 2600);
  }

  function formatNgayGio(iso) {
    try {
      const d = new Date(iso);
      const p = function (n) {
        return String(n).padStart(2, "0");
      };
      return p(d.getDate()) + "/" + p(d.getMonth() + 1) + "/" + d.getFullYear() + " " + p(d.getHours()) + ":" + p(d.getMinutes());
    } catch (err) {
      return "—";
    }
  }

  function lamMoiProfile() {
    const tk = N1.layNguoiDung();
    if (tk) hienProfile(tk);
  }

  function moPanel(ten) {
    const panel = document.getElementById("profile-panel");
    if (!panel) return;
    panel.hidden = false;
    panel.querySelectorAll(".pp-muc").forEach(function (m) {
      m.hidden = m.id !== "pp-" + ten;
    });
    document.querySelectorAll("[data-mo-panel]").forEach(function (b) {
      b.classList.toggle("dang-mo", b.getAttribute("data-mo-panel") === ten);
    });
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function dongPanel() {
    const panel = document.getElementById("profile-panel");
    if (panel) panel.hidden = true;
    document.querySelectorAll("[data-mo-panel]").forEach(function (b) {
      b.classList.remove("dang-mo");
    });
  }

  function renderDonHang(ds) {
    const el = document.getElementById("pp-ds-don");
    if (!el) return;
    if (!ds.length) {
      el.innerHTML =
        '<div class="pp-rong"><i class="fa-solid fa-box-open"></i><p>Bạn chưa có đơn hàng nào.</p>' +
        '<a href="danhmuc.html" class="pp-nut-vien">Mua sắm ngay</a></div>';
      return;
    }
    el.innerHTML = ds
      .map(function (d) {
        const items = (d.items || [])
          .map(function (it) {
            return (
              '<div class="pp-sp"><img src="' + esc(it.anh) + '" alt="" />' +
              '<div class="pp-sp-ten"><strong>' + esc(it.ten) + "</strong><span>" + esc(it.thuocTinh || "") + "</span></div>" +
              '<div class="pp-sp-gia">' + (it.soLuong || 1) + " × " + fmtTien(it.gia) + "</div></div>"
            );
          })
          .join("");
        const huy = d.trangThai === "Đã hủy";
        const diem = d.diemCong > 0 && !huy ? ' <em class="pp-diem-cong">(+' + d.diemCong + " điểm)</em>" : "";
        const nutHuy =
          d.trangThai === "Đang xử lý"
            ? '<button type="button" class="pp-nut-vien nguy-hiem" data-huy-don="' + esc(d.ma) + '"><i class="fa-solid fa-ban"></i> Hủy đơn</button>'
            : "";
        return (
          '<article class="pp-don">' +
          '<div class="pp-don-dau"><div><strong>Đơn ' + esc(d.ma) + "</strong><span>" + formatNgayGio(d.luc) + "</span></div>" +
          '<span class="pp-trang-thai ' + (huy ? "huy" : "xu-ly") + '">' + esc(d.trangThai) + "</span></div>" +
          items +
          '<div class="pp-don-cuoi"><div class="pp-don-tong">Tổng cộng: <strong>' + fmtTien(d.tong) + "</strong>" + diem + "</div>" +
          '<div class="pp-don-nut"><button type="button" class="pp-nut-vien" data-mua-lai="' + esc(d.ma) + '"><i class="fa-solid fa-rotate-right"></i> Mua lại</button>' +
          nutHuy + "</div></div></article>"
        );
      })
      .join("");
  }

  function renderDiem(tk) {
    const diem = tk.diem || 0;
    const soEl = document.getElementById("pp-diem-so");
    const tienEl = document.getElementById("pp-diem-tien");
    if (soEl) soEl.textContent = diem.toLocaleString("vi-VN");
    if (tienEl) tienEl.textContent = fmtTien(diem * N1.GIA_TRI_DIEM);

    document.querySelectorAll("[data-doi-voucher]").forEach(function (b) {
      b.disabled = diem < Number(b.getAttribute("data-doi-voucher")) / N1.GIA_TRI_DIEM;
    });

    const vcEl = document.getElementById("pp-ds-voucher");
    if (vcEl) {
      const dsVc = tk.voucherRieng || [];
      vcEl.innerHTML = dsVc.length
        ? dsVc
            .map(function (v) {
              return (
                '<div class="pp-voucher' + (v.daDung ? " da-dung" : "") + '">' +
                "<div><strong>" + esc(v.ma) + "</strong><span>Giảm " + fmtTien(v.giaTri) + "</span></div>" +
                (v.daDung
                  ? '<span class="pp-chip">Đã dùng</span>'
                  : '<button type="button" class="pp-nut-vien" data-chep-ma="' + esc(v.ma) + '"><i class="fa-regular fa-copy"></i> Sao chép</button>') +
                "</div>"
              );
            })
            .join("")
        : '<p class="pp-ghi-chu">Bạn chưa có voucher nào. Đổi điểm ở phía trên để nhận mã.</p>';
    }

    const lsEl = document.getElementById("pp-lich-su");
    if (lsEl) {
      const ls = tk.lichSuDiem || [];
      lsEl.innerHTML = ls.length
        ? ls
            .map(function (m) {
              return (
                "<li><div><span>" + esc(m.moTa) + "</span><time>" + formatNgayGio(m.luc) + "</time></div>" +
                '<b class="' + (m.soDiem >= 0 ? "cong" : "tru") + '">' + (m.soDiem > 0 ? "+" : "") + m.soDiem + "</b></li>"
              );
            })
            .join("")
        : '<li class="pp-ghi-chu">Chưa có giao dịch điểm nào.</li>';
    }
  }

  function dienFormHoSo(tk) {
    const g = function (id) {
      return document.getElementById(id);
    };
    if (g("hs-ho-ten")) g("hs-ho-ten").value = tk.hoTen || "";
    if (g("hs-email")) g("hs-email").value = tk.email || "";
    if (g("hs-sdt")) g("hs-sdt").value = tk.soDienThoaiHienThi || tk.soDienThoai || "";
    if (g("hs-dia-chi")) g("hs-dia-chi").value = tk.diaChi || "";
  }

function capNhatProfileDong(tk) {
    const dsDon = N1.donHang.cuaToi();
    const moTaDon = document.getElementById("profile-mo-ta-don");
    if (moTaDon) {
      const dangXuLy = dsDon.filter(function (d) {
        return d.trangThai === "Đang xử lý";
      }).length;
      moTaDon.textContent = dsDon.length
        ? "Bạn có " + dsDon.length + " đơn hàng" + (dangXuLy ? ", " + dangXuLy + " đơn đang xử lý." : ".")
        : "Bạn chưa có đơn hàng nào.";
    }
    const moTaYt = document.getElementById("profile-mo-ta-yt");
    if (moTaYt) {
      const n = N1.yeuThich.dem();
      moTaYt.textContent = n ? "Bạn đã lưu " + n + " sản phẩm để mua sau." : "Bạn chưa lưu sản phẩm nào.";
    }
    renderDonHang(dsDon);
    renderDiem(tk);
    renderYeuThichPanel(); 
    dienFormHoSo(tk);
  }

  function renderYeuThichPanel() {
    const el = document.getElementById("pp-ds-yeu-thich");
    const toolbarEl = document.getElementById("pp-yt-toolbar");
    const demEl = document.getElementById("pp-yt-dem");
    if (!el) return;

    const ds = N1.yeuThich.lay();
    if (demEl) demEl.textContent = ds.length;
    if (toolbarEl) toolbarEl.style.display = ds.length ? "flex" : "none";

    if (!ds.length) {
      el.innerHTML =
        '<div class="pp-rong"><i class="fa-regular fa-heart"></i><p>Bạn chưa lưu sản phẩm yêu thích nào.</p>' +
        '<a href="danhmuc.html" class="pp-nut-vien">Khám phá sản phẩm</a></div>';
      return;
    }

    el.innerHTML =
      '<div class="pp-yt-luoi">' +
      ds.map(function (sp) {
        const link = "danhmuc.html?id=" + encodeURIComponent(sp.id);
        return (
          '<article class="pp-yt-the" data-id="' + esc(sp.id) + '">' +
          '<button type="button" class="pp-yt-bo-tim" data-bo-yt="' + esc(sp.id) + '" title="Bỏ yêu thích"><i class="fa-solid fa-heart"></i></button>' +
          '<a class="pp-yt-anh" href="' + link + '"><img src="' + esc(sp.anh) + '" alt="" /></a>' +
          '<h3 class="pp-yt-ten"><a href="' + link + '">' + esc(sp.ten) + '</a></h3>' +
          '<div class="pp-yt-gia">' + fmtTien(sp.gia) + '</div>' +
          '<div class="pp-yt-hanh-dong">' +
          '<button type="button" class="pp-nut-vien" data-them-gio-yt="' + esc(sp.id) + '"><i class="fa-solid fa-cart-plus"></i> Thêm giỏ</button>' +
          '<a class="pp-yt-anh-xem pp-nut-vien" href="' + link + '" title="Xem"><i class="fa-regular fa-eye"></i></a>' +
          '</div></article>'
        );
      }).join("") +
      '</div>';
  }

    const ppYtEl = document.getElementById("pp-yeu-thich");
    if (ppYtEl) {
      ppYtEl.addEventListener("click", function (e) {
        const nutBo = e.target.closest("[data-bo-yt]");
        if (nutBo) {
          N1.yeuThich.xoa(nutBo.getAttribute("data-bo-yt"));
          hienToastTk("Đã bỏ khỏi danh sách yêu thích");
          lamMoiProfile();
          return;
        }
        const nutThem = e.target.closest("[data-them-gio-yt]");
        if (nutThem) {
          const id = nutThem.getAttribute("data-them-gio-yt");
          const sp = N1.yeuThich.lay().find(function (x) { return x.id === id; });
          if (sp) {
            let gio = [];
            try { gio = JSON.parse(localStorage.getItem("gioHang")) || []; } catch (err) { gio = []; }
            const thuocTinh = sp.macDinh || "Tiêu chuẩn - Mặc định";
            const idItem = (sp.id + "-" + thuocTinh).replace(/\s+/g, "-");
            const ton = gio.find(function (x) { return x.id === idItem || x.id === sp.id; });
            if (ton) {
              ton.soLuong = Math.min(99, (ton.soLuong || 1) + 1);
            } else {
              gio.push({ id: idItem, ten: sp.ten, thuocTinh: thuocTinh, gia: sp.gia, soLuong: 1, chon: true, anh: sp.anh });
            }
            localStorage.setItem("gioHang", JSON.stringify(gio));
            N1.capNhatBadgeGio();
            hienToastTk('Đã thêm "' + sp.ten + '" vào giỏ hàng');
          }
          return;
        }
        if (e.target.closest("#pp-yt-xoa-het")) {
          if (!confirm("Xóa toàn bộ sản phẩm khỏi danh sách yêu thích?")) return;
          N1.yeuThich.xoaHet();
          hienToastTk("Đã xóa tất cả sản phẩm yêu thích");
          lamMoiProfile();
        }
      });
    }

  function themVaoGioTuDon(items) {
    let gio = [];
    try {
      gio = JSON.parse(localStorage.getItem("gioHang")) || [];
    } catch (err) {
      gio = [];
    }
    items.forEach(function (it) {
      const t = gio.find(function (x) {
        return x.id === it.id;
      });
      if (t) t.soLuong = Math.min(99, (t.soLuong || 1) + (it.soLuong || 1));
      else
        gio.push({
          id: it.id,
          ten: it.ten,
          thuocTinh: it.thuocTinh,
          gia: it.gia,
          soLuong: it.soLuong || 1,
          chon: true,
          anh: it.anh,
        });
    });
    localStorage.setItem("gioHang", JSON.stringify(gio));
    N1.capNhatBadgeGio();
  }

  async function doiMatKhauTaiKhoan(id, matKhauMoi) {
    const muoi = taoMuoi();
    const hash = await bamSha256(muoi + ":" + matKhauMoi);
    N1.capNhatTaiKhoan(id, function (t) {
      t.muoi = muoi;
      t.matKhauHash = hash;
    });
  }

  function khoiTaoProfile() {
    document.querySelectorAll("[data-mo-panel]").forEach(function (b) {
      b.addEventListener("click", function () {
        moPanel(b.getAttribute("data-mo-panel"));
      });
    });
    document.querySelectorAll("[data-dong-panel]").forEach(function (b) {
      b.addEventListener("click", dongPanel);
    });

    const dsDonEl = document.getElementById("pp-ds-don");
    if (dsDonEl) {
      dsDonEl.addEventListener("click", function (e) {
        const nutLai = e.target.closest("[data-mua-lai]");
        if (nutLai) {
          const don = N1.donHang.cuaToi().find(function (d) {
            return d.ma === nutLai.getAttribute("data-mua-lai");
          });
          if (!don) return;
          themVaoGioTuDon(don.items || []);
          hienToastTk("Đã thêm sản phẩm của đơn " + don.ma + " vào giỏ hàng");
          setTimeout(function () {
            window.location.href = "giohang.html";
          }, 700);
          return;
        }
        const nutHuy = e.target.closest("[data-huy-don]");
        if (nutHuy) {
          const ma = nutHuy.getAttribute("data-huy-don");
          if (!confirm("Bạn có chắc muốn hủy đơn " + ma + "?")) return;
          const kq = N1.donHang.huy(ma);
          hienToastTk(kq.ok ? "Đã hủy đơn " + ma : kq.loi, kq.ok ? "" : "loi");
          lamMoiProfile();
        }
      });
    }

    const tbDiem = document.getElementById("pp-tb-diem");
    document.querySelectorAll("[data-doi-voucher]").forEach(function (b) {
      b.addEventListener("click", function () {
        const kq = N1.doiDiemLayVoucher(Number(b.getAttribute("data-doi-voucher")));
        if (!kq.ok) {
          hienThongBaoTong(tbDiem, kq.loi, "loi");
          return;
        }
        hienThongBaoTong(tbDiem, "Đổi thành công! Mã của bạn: " + kq.ma + " (nhập tại bước giỏ hàng).", "ok");
        lamMoiProfile();
      });
    });
    const dsVcEl = document.getElementById("pp-ds-voucher");
    if (dsVcEl) {
      dsVcEl.addEventListener("click", function (e) {
        const nut = e.target.closest("[data-chep-ma]");
        if (!nut) return;
        const ma = nut.getAttribute("data-chep-ma");
        const xong = function () {
          hienToastTk("Đã sao chép mã " + ma);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(ma).then(xong, xong);
        } else {
          xong();
        }
      });
    }

    const formHs = document.getElementById("form-sua-ho-so");
    const tbHs = document.getElementById("tb-sua-ho-so");
    if (formHs && tbHs) {
      formHs.addEventListener("submit", function (e) {
        e.preventDefault();
        const tk = N1.layNguoiDung();
        if (!tk) return;
        const kqTen = kiemTraHoTen(document.getElementById("hs-ho-ten").value);
        if (!kqTen.hopLe) return hienThongBaoTong(tbHs, kqTen.loi, "loi");
        const kqSdt = kiemTraSdt(document.getElementById("hs-sdt").value);
        if (!kqSdt.hopLe) return hienThongBaoTong(tbHs, kqSdt.loi, "loi");
        const diaChi = document.getElementById("hs-dia-chi").value.trim();
        if (diaChi.length > 200) return hienThongBaoTong(tbHs, "Địa chỉ không được vượt quá 200 ký tự.", "loi");
        const trung = N1.docTaiKhoan().some(function (t) {
          return t.id !== tk.id && t.soDienThoai === kqSdt.giaTri;
        });
        if (trung) return hienThongBaoTong(tbHs, "Số điện thoại này đã được tài khoản khác sử dụng.", "loi");

        N1.capNhatTaiKhoan(tk.id, function (t) {
          t.hoTen = kqTen.giaTri;
          t.soDienThoai = kqSdt.giaTri;
          t.soDienThoaiHienThi = kqSdt.hienThi;
          t.diaChi = diaChi;
        });
        hienThongBaoTong(tbHs, "Đã lưu thay đổi.", "ok");
        N1.capNhatHeader();
        lamMoiProfile();
      });
    }

    const formMk = document.getElementById("form-doi-mk");
    const tbMk = document.getElementById("tb-doi-mk");
    if (formMk && tbMk) {
      formMk.addEventListener("submit", async function (e) {
        e.preventDefault();
        const tk = N1.layNguoiDung();
        if (!tk) return;
        const cu = document.getElementById("dm-cu").value;
        const moi = document.getElementById("dm-moi").value;
        const xn = document.getElementById("dm-xac-nhan").value;
        if (!cu) return hienThongBaoTong(tbMk, "Vui lòng nhập mật khẩu hiện tại.", "loi");
        const kq = kiemTraMatKhauDK(moi);
        if (!kq.hopLe) return hienThongBaoTong(tbMk, kq.loi, "loi");
        if (moi !== xn) return hienThongBaoTong(tbMk, "Mật khẩu xác nhận không khớp.", "loi");
        if (moi === cu) return hienThongBaoTong(tbMk, "Mật khẩu mới phải khác mật khẩu hiện tại.", "loi");
        const hashCu = await bamSha256(tk.muoi + ":" + cu);
        if (hashCu !== tk.matKhauHash) return hienThongBaoTong(tbMk, "Mật khẩu hiện tại không chính xác.", "loi");
        await doiMatKhauTaiKhoan(tk.id, moi);
        formMk.reset();
        hienThongBaoTong(tbMk, "Đã đổi mật khẩu thành công.", "ok");
      });
    }
  }

  function khoiTaoQuenMatKhau() {
    const lienKet = document.getElementById("lien-ket-quen-mk");
    if (lienKet) {
      lienKet.addEventListener("click", function (e) {
        e.preventDefault();
        chuyenTab("quen-mat-khau");
      });
    }
    const quayLai = document.getElementById("qmk-quay-lai");
    if (quayLai) {
      quayLai.addEventListener("click", function () {
        chuyenTab("dang-nhap");
      });
    }

    const form = document.getElementById("form-quen-mk");
    const tb = document.getElementById("thong-bao-quen-mk");
    if (!form || !tb) return;
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      hienThongBaoTong(tb, "", "");
      const kqEmail = kiemTraEmailDK(document.getElementById("qmk-email").value);
      if (!kqEmail.hopLe) return hienThongBaoTong(tb, kqEmail.loi, "loi");
      const kqSdt = kiemTraSdt(document.getElementById("qmk-sdt").value);
      if (!kqSdt.hopLe) return hienThongBaoTong(tb, kqSdt.loi, "loi");
      const moi = document.getElementById("qmk-mat-khau").value;
      const kqMk = kiemTraMatKhauDK(moi);
      if (!kqMk.hopLe) return hienThongBaoTong(tb, kqMk.loi, "loi");
      if (moi !== document.getElementById("qmk-xac-nhan").value) {
        return hienThongBaoTong(tb, "Mật khẩu xác nhận không khớp.", "loi");
      }
      const tk = docDanhSachTaiKhoan().find(function (t) {
        return t.email === kqEmail.giaTri && t.soDienThoai === kqSdt.giaTri;
      });
      if (!tk) {
        return hienThongBaoTong(tb, "Email và số điện thoại không khớp với tài khoản nào.", "loi");
      }
      await doiMatKhauTaiKhoan(tk.id, moi);
      form.reset();
      hienThongBaoTong(tb, "Đã đặt lại mật khẩu. Đang chuyển về đăng nhập...", "ok");
      setTimeout(function () {
        chuyenTab("dang-nhap");
        const o = document.getElementById("dn-email");
        if (o) o.value = tk.email;
        hienThongBaoTong(tb, "", "");
        const m = document.getElementById("dn-mat-khau");
        if (m) m.focus();
      }, 1200);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    ganSuKien();
    capNhatSoTaiKhoan();
    khoiTaoTrungTamHoTro();
    khoiTaoProfile();
    khoiTaoQuenMatKhau();

    const tk = layNguoiDungHienTai();
    if (tk) {
      hienProfile(tk);
    } else {
      hienFormAuth();
    }
  });

  

  function khoiTaoTrungTamHoTro() {
    const sidebar = document.getElementById("ht-sidebar-menu");
    const khoHoTro = document.getElementById("khoi-ho-tro");
    if (!sidebar || !khoHoTro) return;

    const mucSidebar = sidebar.querySelectorAll(".ht-sidebar-muc");
    const baiViet = khoHoTro.querySelectorAll(".ht-bai-viet");

    mucSidebar.forEach(function (muc) {
      muc.addEventListener("click", function (e) {
        const id = muc.getAttribute("data-muc");
        if (!id) return;
        const mucCanDen = document.getElementById(id);
        if (!mucCanDen) return;
        e.preventDefault();
        const dauTrang =
          mucCanDen.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({
          top: dauTrang,
          behavior: "smooth",
        });
        if (history.replaceState) {
          history.replaceState(null, "", "#" + id);
        }
      });
    });

    function capNhatMucDangDoc() {
      const viTriCuon = window.pageYOffset + 120;
      let mucHienTai = null;
      baiViet.forEach(function (bv) {
        if (bv.offsetTop <= viTriCuon) mucHienTai = bv.id;
      });
      if (!mucHienTai && baiViet.length > 0) mucHienTai = baiViet[0].id;
      mucSidebar.forEach(function (muc) {
        if (muc.getAttribute("data-muc") === mucHienTai) {
          muc.classList.add("active");
        } else {
          muc.classList.remove("active");
        }
      });
    }

    let dangCuonTimeout;
    window.addEventListener("scroll", function () {
      if (dangCuonTimeout) return;
      dangCuonTimeout = requestAnimationFrame(function () {
        capNhatMucDangDoc();
        dangCuonTimeout = null;
      });
    });

    function xuLyHash() {
      const hash = (window.location.hash || "").replace("#", "");
      if (!hash) {
        capNhatMucDangDoc();
        return;
      }
      const mucCanDen = document.getElementById(hash);
      if (!mucCanDen) {
        capNhatMucDangDoc();
        return;
      }
      setTimeout(function () {
        const dauTrang =
          mucCanDen.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: dauTrang, behavior: "smooth" });
        mucSidebar.forEach(function (muc) {
          if (muc.getAttribute("data-muc") === hash) {
            muc.classList.add("active");
          } else {
            muc.classList.remove("active");
          }
        });
      }, 120);
    }

    xuLyHash();
    window.addEventListener("hashchange", xuLyHash);
  }
})();