
(function () {
  "use strict";

  const K_TAI_KHOAN = "n1-tai-khoan";
  const K_PHIEN = "n1-phien-hien-tai";
  const K_GHI_NHO = "n1-ghi-nho-dang-nhap";
  const K_GIO = "gioHang";
  const K_GIO_CHU = "n1-gio-chu"; 
  const K_GIO_TK = "n1-gio-hang:";
  const K_YEU_THICH = "n1-yeu-thich:";
  const K_DON_HANG = "n1-don-hang";

  const GIA_TRI_DIEM = 1000; 
  const MAX_SL = 99;

  const ss = (function () {
    try {
      return window.sessionStorage;
    } catch (e) {
      return null;
    }
  })();

  function doc(kho, key, macDinh) {
    try {
      const v = JSON.parse(kho.getItem(key));
      return v == null ? macDinh : v;
    } catch (e) {
      return macDinh;
    }
  }
  function ghi(kho, key, val) {
    try {
      kho.setItem(key, JSON.stringify(val));
      return true;
    } catch (e) {
      return false;
    }
  }
  function fmtTien(n) {
    return new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 }).format(Math.round(n)) + "₫";
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function bao(ten) {
    try {
      window.dispatchEvent(new Event(ten));
    } catch (e) {}
  }

  function docTaiKhoan() {
    const ds = doc(localStorage, K_TAI_KHOAN, []);
    return Array.isArray(ds) ? ds : [];
  }
  function luuTaiKhoan(ds) {
    return ghi(localStorage, K_TAI_KHOAN, ds);
  }
  function capNhatTaiKhoan(id, fn) {
    const ds = docTaiKhoan();
    const tk = ds.find(function (t) {
      return t.id === id;
    });
    if (!tk) return null;
    fn(tk);
    luuTaiKhoan(ds);
    return tk;
  }

  function layPhien() {
    const p = (ss && doc(ss, K_PHIEN, null)) || doc(localStorage, K_PHIEN, null);
    return p && typeof p === "object" && p.id ? p : null;
  }
  function layNguoiDung() {
    const p = layPhien();
    if (!p) return null;
    return (
      docTaiKhoan().find(function (t) {
        return t.id === p.id;
      }) || null
    );
  }
  function luuPhien(id, ghiNho) {
    const duLieu = { id: id, luc: Date.now() };
    try {
      if (ghiNho || !ss) {
        ghi(localStorage, K_PHIEN, duLieu);
        if (ss) ss.removeItem(K_PHIEN);
        if (ghiNho) localStorage.setItem(K_GHI_NHO, "true");
      } else {
        localStorage.removeItem(K_PHIEN);
        localStorage.removeItem(K_GHI_NHO);
        ghi(ss, K_PHIEN, duLieu);
      }
    } catch (e) {}
    dongBoGio();
    capNhatHeader();
  }
  function xoaPhien() {
    try {
      localStorage.removeItem(K_PHIEN);
      localStorage.removeItem(K_GHI_NHO);
      if (ss) ss.removeItem(K_PHIEN);
    } catch (e) {}
    dongBoGio();
    capNhatHeader();
  }

  function gopGio(a, b) {
    const kq = (a || []).map(function (x) {
      return Object.assign({}, x);
    });
    (b || []).forEach(function (x) {
      const t = kq.find(function (y) {
        return y.id === x.id;
      });
      if (t) t.soLuong = Math.min(MAX_SL, (t.soLuong || 1) + (x.soLuong || 1));
      else kq.push(Object.assign({}, x));
    });
    return kq;
  }

  function dongBoGio() {
    try {
      const phien = layPhien();
      const idMoi = phien ? phien.id : "";
      const chu = localStorage.getItem(K_GIO_CHU) || "";
      if (chu === idMoi) return;

      const gioHienTai = doc(localStorage, K_GIO, []);
      if (chu) ghi(localStorage, K_GIO_TK + chu, gioHienTai);

      let gioMoi = [];
      if (idMoi) {
        const daLuu = doc(localStorage, K_GIO_TK + idMoi, []);
        gioMoi = chu ? daLuu : gopGio(daLuu, gioHienTai);
      }
      ghi(localStorage, K_GIO, gioMoi);
      localStorage.setItem(K_GIO_CHU, idMoi);
      capNhatBadgeGio();
    } catch (e) {}
  }
  function capNhatBadgeGio() {
    const gio = doc(localStorage, K_GIO, []);
    const tong = (Array.isArray(gio) ? gio : []).reduce(function (s, sp) {
      return s + (sp.soLuong || 1);
    }, 0);
    document.querySelectorAll(".so-luong, #badge-gio-hang").forEach(function (b) {
      b.textContent = tong > 99 ? "99+" : tong;
    });
  }

  const yeuThich = {
    lay: function () {
      const tk = layNguoiDung();
      if (!tk) return [];
      const ds = doc(localStorage, K_YEU_THICH + tk.id, []);
      return Array.isArray(ds) ? ds : [];
    },
    co: function (idSp) {
      return yeuThich.lay().some(function (x) {
        return x.id === idSp;
      });
    },
    dem: function () {
      return yeuThich.lay().length;
    },
    doi: function (sp) {
      const tk = layNguoiDung();
      if (!tk) return { ok: false, canDangNhap: true };
      const ds = yeuThich.lay();
      const i = ds.findIndex(function (x) {
        return x.id === sp.id;
      });
      let dangThich;
      if (i >= 0) {
        ds.splice(i, 1);
        dangThich = false;
      } else {
        ds.unshift(Object.assign({}, sp, { luc: Date.now() }));
        dangThich = true;
      }
      ghi(localStorage, K_YEU_THICH + tk.id, ds);
      bao("n1:yeu-thich");
      capNhatHeader();
      return { ok: true, dangThich: dangThich };
    },
    xoa: function (idSp) {
      const tk = layNguoiDung();
      if (!tk) return;
      ghi(
        localStorage,
        K_YEU_THICH + tk.id,
        yeuThich.lay().filter(function (x) {
          return x.id !== idSp;
        })
      );
      bao("n1:yeu-thich");
      capNhatHeader();
    },
    xoaHet: function () {
      const tk = layNguoiDung();
      if (!tk) return;
      ghi(localStorage, K_YEU_THICH + tk.id, []);
      bao("n1:yeu-thich");
      capNhatHeader();
    },
  };

  function diemTuDon(tong) {
    return Math.floor(tong / (GIA_TRI_DIEM * 100)); 
  }
  function congDiem(id, soDiem, moTa) {
    return capNhatTaiKhoan(id, function (tk) {
      const thucTe = Math.max(-(tk.diem || 0), soDiem);
      tk.diem = (tk.diem || 0) + thucTe;
      tk.lichSuDiem = tk.lichSuDiem || [];
      tk.lichSuDiem.unshift({ luc: new Date().toISOString(), soDiem: thucTe, moTa: moTa });
      tk.lichSuDiem = tk.lichSuDiem.slice(0, 50);
    });
  }
  function taoMaVoucher() {
    const kt = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let s = "";
    for (let i = 0; i < 6; i++) s += kt.charAt(Math.floor(Math.random() * kt.length));
    return "N1P-" + s;
  }
  function doiDiemLayVoucher(menhGia) {
    const tk = layNguoiDung();
    if (!tk) return { ok: false, loi: "Vui lòng đăng nhập." };
    const can = menhGia / GIA_TRI_DIEM;
    if ((tk.diem || 0) < can) {
      return { ok: false, loi: "Bạn cần " + can + " điểm để đổi voucher này (hiện có " + (tk.diem || 0) + ")." };
    }
    const ma = taoMaVoucher();
    capNhatTaiKhoan(tk.id, function (t) {
      t.diem = (t.diem || 0) - can;
      t.voucherRieng = t.voucherRieng || [];
      t.voucherRieng.unshift({ ma: ma, giaTri: menhGia, luc: new Date().toISOString(), daDung: false });
      t.lichSuDiem = t.lichSuDiem || [];
      t.lichSuDiem.unshift({
        luc: new Date().toISOString(),
        soDiem: -can,
        moTa: "Đổi voucher giảm " + fmtTien(menhGia),
      });
    });
    return { ok: true, ma: ma, giaTri: menhGia };
  }
  function voucherChuaDung() {
    const tk = layNguoiDung();
    if (!tk) return [];
    return (tk.voucherRieng || []).filter(function (v) {
      return !v.daDung;
    });
  }
  function datTrangThaiVoucher(ma, daDung) {
    const tk = layNguoiDung();
    if (!tk) return;
    capNhatTaiKhoan(tk.id, function (t) {
      (t.voucherRieng || []).forEach(function (v) {
        if (v.ma === ma) v.daDung = daDung;
      });
    });
  }

  const donHang = {
    tatCa: function () {
      const ds = doc(localStorage, K_DON_HANG, []);
      return Array.isArray(ds) ? ds : [];
    },
    cuaToi: function () {
      const tk = layNguoiDung();
      if (!tk) return [];
      return donHang.tatCa().filter(function (d) {
        return d.taiKhoanId === tk.id;
      });
    },
    them: function (don) {
      const tk = layNguoiDung();
      const diem = tk ? diemTuDon(don.tong) : 0;
      const moi = Object.assign({}, don, {
        taiKhoanId: tk ? tk.id : null,
        luc: new Date().toISOString(),
        trangThai: "Đang xử lý",
        diemCong: diem,
      });
      const ds = donHang.tatCa();
      ds.unshift(moi);
      ghi(localStorage, K_DON_HANG, ds);
      if (tk) {
        if (diem > 0) congDiem(tk.id, diem, "Tích điểm đơn hàng " + don.ma);
        if (don.voucherRieng) datTrangThaiVoucher(don.voucherRieng, true);
      }
      return moi;
    },
    huy: function (ma) {
      const tk = layNguoiDung();
      if (!tk) return { ok: false, loi: "Vui lòng đăng nhập." };
      const ds = donHang.tatCa();
      const d = ds.find(function (x) {
        return x.ma === ma && x.taiKhoanId === tk.id;
      });
      if (!d) return { ok: false, loi: "Không tìm thấy đơn hàng." };
      if (d.trangThai !== "Đang xử lý") return { ok: false, loi: "Đơn này không thể hủy nữa." };
      d.trangThai = "Đã hủy";
      d.ngayHuy = new Date().toISOString();
      ghi(localStorage, K_DON_HANG, ds);
      if (d.diemCong > 0) congDiem(tk.id, -d.diemCong, "Thu hồi điểm do hủy đơn " + d.ma);
      if (d.voucherRieng) datTrangThaiVoucher(d.voucherRieng, false);
      return { ok: true };
    },
  };

  function layNextHopLe() {
    try {
      const n = new URLSearchParams(window.location.search).get("next");
      return n && /^[A-Za-z0-9_-]+\.html([?#][^\s]*)?$/.test(n) ? n : null;
    } catch (e) {
      return null;
    }
  }
  function urlDangNhap() {
    const trang = (window.location.pathname.split("/").pop() || "index.html") + window.location.search + window.location.hash;
    return "taikhoan.html?next=" + encodeURIComponent(trang);
  }

  function chenStyle() {
    if (document.getElementById("n1-nguoidung-style")) return;
    const st = document.createElement("style");
    st.id = "n1-nguoidung-style";
    st.textContent =
      ".so-yeu-thich{position:absolute;top:2px;right:1px;min-width:17px;height:17px;padding:0 4px;display:flex;align-items:center;justify-content:center;background:#e53935;color:#fff;border-radius:50%;font-size:10px;font-weight:700;line-height:1}" +
      ".so-yeu-thich[hidden]{display:none}" +
      "@media (max-width:480px){#icon-yeu-thich{display:none}}";
    document.head.appendChild(st);
  }
  function capNhatHeader() {
    if (!document.body) return;
    const cum = document.querySelector(".cum-ben-phai");
    if (!cum) return;
    chenStyle();

    const linkTk = cum.querySelector('a[href="taikhoan.html"]');


    if (linkTk) {
      const tk = layNguoiDung();
      linkTk.title = tk ? "Tài khoản của " + tk.hoTen : "Đăng nhập / Tài khoản";
      const ic = linkTk.querySelector("i");
      if (ic) ic.className = tk ? "fa-solid fa-circle-user" : "fa-regular fa-circle-user";
    }
  }

  dongBoGio();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      capNhatHeader();
      capNhatBadgeGio();
    });
  } else {
    capNhatHeader();
  }

  window.addEventListener("storage", function (e) {
    if (!e.key) return;
    if (e.key.indexOf(K_YEU_THICH) === 0 || e.key === K_PHIEN || e.key === K_TAI_KHOAN) {
      capNhatHeader();
      bao("n1:yeu-thich");
    }
  });

  window.N1 = {
    GIA_TRI_DIEM: GIA_TRI_DIEM,
    fmtTien: fmtTien,
    esc: esc,
    docTaiKhoan: docTaiKhoan,
    luuTaiKhoan: luuTaiKhoan,
    capNhatTaiKhoan: capNhatTaiKhoan,
    layPhien: layPhien,
    layNguoiDung: layNguoiDung,
    luuPhien: luuPhien,
    xoaPhien: xoaPhien,
    dongBoGio: dongBoGio,
    capNhatBadgeGio: capNhatBadgeGio,
    capNhatHeader: capNhatHeader,
    yeuThich: yeuThich,
    donHang: donHang,
    diemTuDon: diemTuDon,
    congDiem: congDiem,
    doiDiemLayVoucher: doiDiemLayVoucher,
    voucherChuaDung: voucherChuaDung,
    datTrangThaiVoucher: datTrangThaiVoucher,
    layNextHopLe: layNextHopLe,
    urlDangNhap: urlDangNhap,
  };
})();
