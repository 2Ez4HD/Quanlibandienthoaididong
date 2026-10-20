document.addEventListener("DOMContentLoaded", function () {
        const nutGiaoDien = document.getElementById("nut-giao-dien");
        const iconGiaoDien = document.getElementById("icon-giao-dien");

        function capNhatIconGiaoDien() {
          if (!iconGiaoDien) return;
          const dangToi = document.body.classList.contains("che-do-toi");
          if (dangToi) {
            iconGiaoDien.className = "fa-solid fa-moon";
            if (nutGiaoDien) nutGiaoDien.title = "Chuyển sang chế độ sáng";
          } else {
            iconGiaoDien.className = "fa-solid fa-sun";
            if (nutGiaoDien) nutGiaoDien.title = "Chuyển sang chế độ tối";
          }
        }

        if (localStorage.getItem("che-do-toi") === "true") {
          document.body.classList.add("che-do-toi");
        }
        capNhatIconGiaoDien();

        if (nutGiaoDien) {
          nutGiaoDien.addEventListener("click", function () {
            document.body.classList.toggle("che-do-toi");
            localStorage.setItem(
              "che-do-toi",
              document.body.classList.contains("che-do-toi"),
            );
            capNhatIconGiaoDien();
          });
        }

        const track = document.querySelector(".duong-ray-slider");
        const slides = document.querySelectorAll(".slide");
        const fills = document.querySelectorAll(".thanh-tien-trinh");
        const dots = document.querySelectorAll(".dau-cham-slider .cham");
        const nutTruoc = document.getElementById("nut-truoc");
        const nutSau = document.getElementById("nut-sau");

        if (track && slides.length) {
          let currentSlide = 0;
          const PREVIEW_DURATION = 7000;
          let currentDuration = PREVIEW_DURATION;
          let startTime = null;
          let animationFrameId = null;

          function cancelProgress() {
            if (animationFrameId !== null) {
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            }
          }

          function updateProgress(timestamp) {
            if (startTime === null) {
              startTime = timestamp;
            }

            const elapsed = timestamp - startTime;
            const progress = Math.min((elapsed / currentDuration) * 100, 100);

            if (fills[currentSlide]) {
              fills[currentSlide].style.width = progress + "%";
            }

            if (elapsed < currentDuration) {
              animationFrameId = requestAnimationFrame(updateProgress);
            } else {
              animationFrameId = null;
              nextSlide();
            }
          }

          function updateDots() {
            dots.forEach(function (dot, index) {
              dot.classList.toggle("active", index === currentSlide);
            });
          }

          function resetWatchButtons() {
            document
              .querySelectorAll(".nut-xem-day-du")
              .forEach(function (button) {
                button.classList.remove("active");
                const text = button.querySelector("span");
                if (text) text.textContent = "Xem bản đầy đủ (49s)";
              });
          }

          function goToSlide(index, customDuration = null) {
            cancelProgress();

            const oldVideo = slides[currentSlide]
              ? slides[currentSlide].querySelector("video")
              : null;

            if (oldVideo) oldVideo.pause();

            fills.forEach(function (fill) {
              fill.style.width = "0%";
            });

            currentSlide = (index + slides.length) % slides.length;
            track.style.transform = "translateX(-" + currentSlide * 100 + "%)";
            updateDots();

            currentDuration = customDuration || PREVIEW_DURATION;
            startTime = null;

            const currentSlideElement = slides[currentSlide];
            const newVideo = currentSlideElement
              ? currentSlideElement.querySelector("video")
              : null;

            if (newVideo) {
              try {
                newVideo.currentTime = 0;
              } catch (error) {}

              const startVideo = function () {
                newVideo.play().catch(function () {});
                animationFrameId = requestAnimationFrame(updateProgress);
              };

              if (newVideo.readyState >= 1) {
                startVideo();
              } else {
                newVideo.addEventListener("loadedmetadata", startVideo, {
                  once: true,
                });
              }
            } else {
              animationFrameId = requestAnimationFrame(updateProgress);
            }
          }

          function nextSlide() {
            goToSlide(currentSlide + 1);
          }

          function prevSlide() {
            goToSlide(currentSlide - 1);
          }

          if (nutSau) nutSau.addEventListener("click", nextSlide);
          if (nutTruoc) nutTruoc.addEventListener("click", prevSlide);

          dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
              goToSlide(index);
            });
          });

          document
            .querySelectorAll(".nut-xem-day-du")
            .forEach(function (button) {
              button.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                const currentVideo = slides[currentSlide]
                  ? slides[currentSlide].querySelector("video")
                  : null;

                if (!currentVideo) return;

                const isFullMode = button.classList.contains("active");

                if (!isFullMode) {
                  const fullVideoDuration =
                    currentVideo.duration && !isNaN(currentVideo.duration)
                      ? currentVideo.duration * 1000
                      : 49000;

                  goToSlide(currentSlide, fullVideoDuration);

                  button.classList.add("active");
                  const text = button.querySelector("span");
                  if (text) text.textContent = "Đang phát bản đầy đủ";
                } else {
                  goToSlide(currentSlide, PREVIEW_DURATION);
                }
              });
            });

          goToSlide(0);
        }

        const voucherTrack = document.querySelector(".duong-ray-voucher");
        const voucherSlides = document.querySelectorAll(".slide-voucher");
        const voucherPrev = document.getElementById("nut-vc-truoc");
        const voucherNext = document.getElementById("nut-vc-sau");
        const voucherDots = document.querySelectorAll(".cham-vc");

        if (voucherTrack && voucherSlides.length) {
          let currentVoucher = 0;
          const totalVouchers = voucherSlides.length;

          function updateVoucherSlider(index) {
            currentVoucher = (index + totalVouchers) % totalVouchers;

            voucherTrack.style.transform =
              "translateX(-" + currentVoucher * 100 + "%)";

            voucherDots.forEach(function (dot, index) {
              dot.classList.toggle("active", index === currentVoucher);
            });
          }

          if (voucherNext) {
            voucherNext.addEventListener("click", function () {
              updateVoucherSlider(currentVoucher + 1);
            });
          }

          if (voucherPrev) {
            voucherPrev.addEventListener("click", function () {
              updateVoucherSlider(currentVoucher - 1);
            });
          }

          voucherDots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
              updateVoucherSlider(index);
            });
          });

          updateVoucherSlider(0);

          setInterval(function () {
            updateVoucherSlider(currentVoucher + 1);
          }, 5000);
        }

        const scrollToTopBtn = document.getElementById("nutLenDauTrang");

        if (scrollToTopBtn) {
          window.addEventListener("scroll", function () {
            scrollToTopBtn.classList.toggle("hien", window.scrollY > 100);
          });

          scrollToTopBtn.addEventListener("click", function () {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          });
        }

        const danhSachSanPham = [
          {
            ten: "iPhone Duo",
            hang: "Apple",
            tuKhoa: ["iphone", "duo", "apple"],
            icon: "fa-mobile-screen",
            link: "danhmuc.html?q=iPhone+Duo",
          },
          {
            ten: "iPhone 18 Pro",
            hang: "Apple",
            tuKhoa: ["iphone", "18", "pro", "apple"],
            icon: "fa-mobile-screen",
            link: "danhmuc.html?q=iPhone+18+Pro",
          },
          {
            ten: "AirPods 5",
            hang: "Apple",
            tuKhoa: ["airpod", "airpods", "tai nghe", "apple"],
            icon: "fa-headphones",
            link: "danhmuc.html?q=AirPods+5",
          },
          {
            ten: "Xiaomi 17 Ultra",
            hang: "Xiaomi",
            tuKhoa: ["xiaomi", "17", "ultra", "leica"],
            icon: "fa-mobile-screen",
            link: "danhmuc.html?q=Xiaomi+17+Ultra",
          },
          {
            ten: "OPPO Find X9 Ultra",
            hang: "OPPO",
            tuKhoa: ["oppo", "find", "x9", "ultra", "hasselblad"],
            icon: "fa-mobile-screen",
            link: "danhmuc.html?q=OPPO+Find+X9+Ultra",
          },
          {
            ten: "Galaxy S26 Ultra",
            hang: "Samsung",
            tuKhoa: ["samsung", "galaxy", "s26", "ultra", "s pen"],
            icon: "fa-mobile-screen",
            link: "danhmuc.html?q=Galaxy+S26+Ultra",
          },
          {
            ten: "Vivo X300 Ultra",
            hang: "Vivo",
            tuKhoa: ["vivo", "x300", "ultra", "zeiss"],
            icon: "fa-mobile-screen",
            link: "danhmuc.html?q=Vivo+X300+Ultra",
          },
          {
            ten: "Tai nghe",
            hang: "Phụ kiện",
            tuKhoa: ["tai nghe", "headphone", "earphone"],
            icon: "fa-headphones",
            link: "danhmuc.html?cat=phukien&loai=tainghe",
          },
          {
            ten: "Sạc & Cáp",
            hang: "Phụ kiện",
            tuKhoa: ["sạc", "cáp", "charger", "cable", "gan"],
            icon: "fa-plug",
            link: "danhmuc.html?cat=phukien&loai=sac-cap",
          },
          {
            ten: "Pin dự phòng",
            hang: "Phụ kiện",
            tuKhoa: ["pin", "sạc dự phòng", "powerbank"],
            icon: "fa-battery-full",
            link: "danhmuc.html?cat=phukien&loai=pin-du-phong",
          },
        ];

        const oTimKiem = document.getElementById("o-tim-kiem-input");
        const hopGoiY = document.getElementById("hop-goi-y");
        const nutXoaTim = document.getElementById("nut-xoa-tim");
        let chiSoDangChon = -1;

        function chuanHoa(str) {
          return (str || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d");
        }

        function locSanPham(tuKhoa) {
          const q = chuanHoa(tuKhoa).trim();
          if (!q) return [];

          return danhSachSanPham.filter(function (sp) {
            const tenChuan = chuanHoa(sp.ten);
            const hangChuan = chuanHoa(sp.hang);
            const tuKhoaChuan = sp.tuKhoa.map(chuanHoa);
            return (
              tenChuan.includes(q) ||
              hangChuan.includes(q) ||
              tuKhoaChuan.some(function (k) {
                return k.includes(q) || q.includes(k);
              })
            );
          });
        }

        function hienGoiY(danhSach, tuKhoaGoc) {
          if (!hopGoiY) return;

          if (!tuKhoaGoc.trim()) {
            hopGoiY.hidden = true;
            hopGoiY.innerHTML = "";
            chiSoDangChon = -1;
            return;
          }

          if (danhSach.length === 0) {
            hopGoiY.innerHTML =
              '<div class="khong-ket-qua">' +
              '<i class="fa-solid fa-magnifying-glass"></i>' +
              'Không tìm thấy kết quả cho "<b>' +
              tuKhoaGoc.replace(/</g, "&lt;") +
              '</b>"' +
              "</div>";
            hopGoiY.hidden = false;
            chiSoDangChon = -1;
            return;
          }

          let html = '<div class="goi-y-tieu-de">Gợi ý sản phẩm</div>';
          danhSach.forEach(function (sp, index) {
            html +=
              '<div class="muc-goi-y" data-index="' +
              index +
              '" role="option">' +
              '<i class="fa-solid ' +
              sp.icon +
              '"></i>' +
              "<div>" +
              '<div class="ten-sp">' +
              sp.ten +
              "</div>" +
              '<div class="hang-sp">' +
              sp.hang +
              "</div>" +
              "</div>" +
              "</div>";
          });
          hopGoiY.innerHTML = html;
          hopGoiY.hidden = false;
          chiSoDangChon = -1;

          hopGoiY.querySelectorAll(".muc-goi-y").forEach(function (el) {
            el.addEventListener("click", function () {
              const idx = parseInt(el.getAttribute("data-index"), 10);
              chonSanPham(danhSach[idx]);
            });
          });
        }

        function capNhatChonGoiY(danhSach) {
          const items = hopGoiY.querySelectorAll(".muc-goi-y");
          items.forEach(function (el, i) {
            el.classList.toggle("dang-chon", i === chiSoDangChon);
          });
          if (chiSoDangChon >= 0 && items[chiSoDangChon]) {
            items[chiSoDangChon].scrollIntoView({ block: "nearest" });
          }
        }

        function chonSanPham(sp) {
          if (!sp) return;

          if (oTimKiem) oTimKiem.value = sp.ten;
          if (nutXoaTim) nutXoaTim.hidden = false;
          if (hopGoiY) {
            hopGoiY.hidden = true;
            hopGoiY.innerHTML = "";
          }
          chiSoDangChon = -1;

          window.location.href = sp.link || "#";
        }

        function thucHienTimKiem() {
          if (!oTimKiem) return;
          const tuKhoa = oTimKiem.value.trim();
          if (!tuKhoa) return;

          window.location.href = "danhmuc.html?q=" + encodeURIComponent(tuKhoa);
        }

        if (oTimKiem && hopGoiY) {
          oTimKiem.addEventListener("input", function () {
            const val = oTimKiem.value;
            if (nutXoaTim) nutXoaTim.hidden = !val;

            const ketQua = locSanPham(val);
            hienGoiY(ketQua, val);
          });

          oTimKiem.addEventListener("keydown", function (e) {
            const ketQua = locSanPham(oTimKiem.value);
            const coGoiY = !hopGoiY.hidden && ketQua.length > 0;

            if (e.key === "ArrowDown" && coGoiY) {
              e.preventDefault();
              chiSoDangChon = Math.min(chiSoDangChon + 1, ketQua.length - 1);
              capNhatChonGoiY(ketQua);
            } else if (e.key === "ArrowUp" && coGoiY) {
              e.preventDefault();
              chiSoDangChon = Math.max(chiSoDangChon - 1, 0);
              capNhatChonGoiY(ketQua);
            } else if (e.key === "Enter") {
              e.preventDefault();
              if (coGoiY && chiSoDangChon >= 0) {
                chonSanPham(ketQua[chiSoDangChon]);
              } else {
                thucHienTimKiem();
              }
            } else if (e.key === "Escape") {
              hopGoiY.hidden = true;
              hopGoiY.innerHTML = "";
              chiSoDangChon = -1;
              oTimKiem.blur();
            }
          });

          oTimKiem.addEventListener("focus", function () {
            if (oTimKiem.value.trim()) {
              const ketQua = locSanPham(oTimKiem.value);
              hienGoiY(ketQua, oTimKiem.value);
            }
          });

          document.addEventListener("click", function (e) {
            const khung = document.querySelector(".khung-tim-kiem");
            if (khung && !khung.contains(e.target)) {
              hopGoiY.hidden = true;
            }
          });
        }

        if (nutXoaTim && oTimKiem) {
          nutXoaTim.addEventListener("click", function () {
            oTimKiem.value = "";
            nutXoaTim.hidden = true;
            hopGoiY.hidden = true;
            hopGoiY.innerHTML = "";
            chiSoDangChon = -1;
            oTimKiem.focus();
          });
        }

        const KHOA_EMAIL_DA_DANG_KY = "n1-email-dang-ky";
        const MA_GIAM_GIA = "N1WELCOME500";

        function hienThongBaoForm(input, thongBao, noiDung, loai) {
          thongBao.textContent = noiDung || "";
          thongBao.className = "thong-bao-form" + (loai ? " " + loai : "");
          input.classList.toggle("input-loi", loai === "loi");
          input.classList.toggle("input-ok", loai === "ok");
          input.setAttribute("aria-invalid", loai === "loi" ? "true" : "false");
        }

        function kiemTraEmail(giaTri) {
          const email = giaTri.trim();
          if (!email) {
            return { hopLe: false, loi: "Vui lòng nhập email của bạn." };
          }
          if (/\s/.test(email)) {
            return { hopLe: false, loi: "Email không được chứa khoảng trắng." };
          }
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

        function kiemTraSoDienThoai(giaTri) {
          let so = giaTri.replace(/[\s.\-()]/g, "");
          if (!so) {
            return { hopLe: false, loi: "Vui lòng nhập số điện thoại." };
          }
          if (so.startsWith("+84")) {
            so = "0" + so.slice(3);
          } else if (so.startsWith("84") && so.length === 11) {
            so = "0" + so.slice(2);
          }
          if (/\D/.test(so)) {
            return {
              hopLe: false,
              loi: "Số điện thoại chỉ được chứa chữ số.",
            };
          }
          if (so.length !== 10) {
            return {
              hopLe: false,
              loi: "Số điện thoại phải có đúng 10 chữ số.",
            };
          }
          if (!/^0(1|3|5|7|8|9)\d{8}$/.test(so)) {
            return {
              hopLe: false,
              loi: "Đầu số không hợp lệ (phải bắt đầu bằng 01,03, 05, 07, 08 hoặc 09).",
            };
          }
          return {
            hopLe: true,
            giaTri: so,
            hienThi: so.replace(/^(\d{4})(\d{3})(\d{3})$/, "$1 $2 $3"),
          };
        }

        function thietLapForm(form, input, kiemTra, khiHopLe) {
          const thongBao = form.querySelector(".thong-bao-form");
          if (!form || !input || !thongBao) return;
          let daBaoLoi = false;

          function baoLoi(kq) {
            daBaoLoi = true;
            hienThongBaoForm(input, thongBao, kq.loi, "loi");
          }

          form.addEventListener("submit", function (e) {
            e.preventDefault();
            const kq = kiemTra(input.value);
            if (!kq.hopLe) {
              baoLoi(kq);
              input.focus();
              return;
            }
            daBaoLoi = false;
            khiHopLe(kq, input, thongBao);
          });

          input.addEventListener("input", function () {
            if (!daBaoLoi) return;
            const kq = kiemTra(input.value);
            if (kq.hopLe) {
              daBaoLoi = false;
              hienThongBaoForm(input, thongBao, "", "");
            } else {
              baoLoi(kq);
            }
          });

          input.addEventListener("blur", function () {
            if (!input.value.trim()) return;
            const kq = kiemTra(input.value);
            if (!kq.hopLe) baoLoi(kq);
          });
        }

        function docDanhSachEmail() {
          try {
            const ds = JSON.parse(localStorage.getItem(KHOA_EMAIL_DA_DANG_KY));
            return Array.isArray(ds) ? ds : [];
          } catch (err) {
            return [];
          }
        }

        function luuDanhSachEmail(ds) {
          try {
            localStorage.setItem(KHOA_EMAIL_DA_DANG_KY, JSON.stringify(ds));
          } catch (err) {
          }
        }

        const formDangKy = document.getElementById("form-dang-ky");
        const oEmail = document.getElementById("email-dang-ky");
        if (formDangKy && oEmail) {
          thietLapForm(
            formDangKy,
            oEmail,
            kiemTraEmail,
            function (kq, input, thongBao) {
              const ds = docDanhSachEmail();
              if (ds.includes(kq.giaTri)) {
                hienThongBaoForm(
                  input,
                  thongBao,
                  "Email này đã đăng ký trước đó. Mã " +
                    MA_GIAM_GIA +
                    " vẫn còn hiệu lực.",
                  "ok",
                );
              } else {
                ds.push(kq.giaTri);
                luuDanhSachEmail(ds);
                hienThongBaoForm(
                  input,
                  thongBao,
                  "Đăng ký thành công! Mã giảm giá " +
                    MA_GIAM_GIA +
                    " đã được gửi tới " +
                    kq.giaTri +
                    ".",
                  "ok",
                );
              }
              input.value = "";
              input.classList.remove("input-ok");
            },
          );
        }

        const formTraCuu = document.getElementById("form-tra-cuu");
        const oSoDienThoai = document.getElementById("sdt-tra-cuu");
        if (formTraCuu && oSoDienThoai) {
          thietLapForm(
            formTraCuu,
            oSoDienThoai,
            kiemTraSoDienThoai,
            function (kq, input, thongBao) {
              hienThongBaoForm(
                input,
                thongBao,
                "Đã nhận số " +
                  kq.hienThi +
                  ". Hệ thống đang tra cứu đơn hàng của bạn...",
                "ok",
              );
            },
          );
        }
        
        function capNhatBadgeGioHangHeader() {
          try {
            const raw = localStorage.getItem("gioHang");
            if (raw) {
              const ds = JSON.parse(raw);
              if (Array.isArray(ds)) {
                const tong = ds.reduce((s, sp) => s + (sp.soLuong || 1), 0);
                document
                  .querySelectorAll(".so-luong, #badge-gio-hang")
                  .forEach(function (badge) {
                    badge.textContent = tong > 99 ? "99+" : tong;
                  });
              }
            }
          } catch (e) {}
        }
        capNhatBadgeGioHangHeader();
        window.addEventListener("storage", function (e) {
          if (e.key === "gioHang") capNhatBadgeGioHangHeader();
        });

        const thongTinMayAndroid = {
          "xiaomi-17-ultra": {
            id: "xiaomi-17-ultra",
            ten: "Xiaomi 17 Ultra Camera LEICA",
            gia: 30990000,
            anh: "mi17ultratrang.webp",
            thuocTinh: "Trắng - 16GB 512GB",
          },
          "oppo-find-x9-ultra": {
            id: "oppo-find-x9-ultra",
            ten: "OPPO Find X9 Ultra Hasselblad",
            gia: 28750000,
            anh: "oppofindx9ultratrang.webp",
            thuocTinh: "Trắng - 12GB 256GB",
          },
          "galaxy-s26-ultra": {
            id: "galaxy-s26-ultra",
            ten: "Samsung Galaxy S26 Ultra 5G",
            gia: 29490000,
            anh: "s26ultraxanh.webp",
            thuocTinh: "Xanh Dương - 12GB/256GB",
          },
          "vivo-x300-ultra": {
            id: "vivo-x300-ultra",
            ten: "Vivo X300 Ultra ZEISS Optics",
            gia: 26990000,
            anh: "vivox300ultra.jpg",
            thuocTinh: "Xanh Hoàng Gia - 512GB",
          },
        };

        document.querySelectorAll("[data-mua-nhanh]").forEach(function (btn) {
          btn.addEventListener("click", function (e) {
            e.preventDefault();
            const ma = btn.getAttribute("data-mua-nhanh");
            const sp = thongTinMayAndroid[ma];
            if (sp) {
              try {
                let ds = [];
                const raw = localStorage.getItem("gioHang");
                if (raw) ds = JSON.parse(raw) || [];
                const idItem = sp.id + "-" + sp.thuocTinh.replace(/\s+/g, "-");
                const tonTai = ds.find((x) => x.id === idItem || x.id === sp.id);
                if (tonTai) {
                  tonTai.soLuong = (tonTai.soLuong || 1) + 1;
                } else {
                  ds.push({
                    id: idItem,
                    ten: sp.ten,
                    thuocTinh: sp.thuocTinh,
                    gia: sp.gia,
                    soLuong: 1,
                    chon: true,
                    anh: sp.anh,
                  });
                }
                localStorage.setItem("gioHang", JSON.stringify(ds));
              } catch (err) {}
            }
            window.location.href = "giohang.html";
          });
        });
      });