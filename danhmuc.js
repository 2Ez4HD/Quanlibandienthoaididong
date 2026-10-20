
(function () {
  "use strict";

  const DANH_SACH_SAN_PHAM = [
    {
      id: "iphone-duo",
      ten: "iPhone Duo Chính Hãng VN/A",
      hang: "Apple",
      danhMuc: "dienthoai",
      gia: 54990000,
      giaGoc: 59990000,
      giaTheoDungLuong: {
        "256GB": { gia: 54990000, giaGoc: 59990000 },
        "512GB": { gia: 61490000, giaGoc: 66990000 },
        "1TB": { gia: 74490000, giaGoc: 79990000 },
        "2TB": { gia: 93990000, giaGoc: 99990000 },
      },
      anh: "iphoneduodanhmuc.webp",
      anhTheoMau: {
        "Trắng Ánh Sao": "iphoneduodanhmuc.webp",
        "Trời Đêm": "iphoneduodendanhmuc.webp",
      },
      traGop: true,
      hot: true,
      moi: true,
      danhGia: 5.0,
      soDanhGia: 48,
      thongSo: {
        manHinh: "6.9 inches Super Retina XDR",
        chip: "Apple A19 Bionic Dual",
        ram: "16 GB",
        boNho: "256 GB - 2 TB",
        pin: "5.200 mAh, Sạc nhanh 45W",
      },
      mauSac: ["Trắng Ánh Sao", "Trời Đêm"],
      dungLuong: ["256GB", "512GB", "1TB", "2TB"],
      moTa: "Đỉnh cao đột phá công nghệ tương lai từ Apple với màn hình kép siêu nét và sức mạnh xử lý AI vượt trội.",
    },
    {
      id: "iphone-18-pro",
      ten: "iPhone 18 Pro Chính Hãng VN/A",
      hang: "Apple",
      danhMuc: "dienthoai",
      gia: 38490000,
      giaGoc: 41990000,
      giaTheoDungLuong: {
        "256GB": { gia: 38490000, giaGoc: 41990000 },
        "512GB": { gia: 44990000, giaGoc: 48990000 },
        "1TB": { gia: 57990000, giaGoc: 62990000 },
        "2TB": { gia: 77590000, giaGoc: 82990000 },
      },
      anh: "iphone18prodo.webp",
      anhTheoMau: {
        "Đỏ Burgundy": "iphone18prodo.webp",
        "Băng Thanh": "iphone18probang.webp",
        "Bạc": "iphone18probac.webp",
        "Đen": "iphone18proden.webp",
      },
      traGop: true,
      hot: true,
      moi: true,
      danhGia: 4.9,
      soDanhGia: 124,
      thongSo: {
        manHinh: "6.9 inches OLED 120Hz ProMotion",
        chip: "Apple A19 Pro 3nm",
        ram: "12 GB",
        boNho: "256 GB - 2 TB",
        pin: "4.350 mAh, Sạc không dây MagSafe",
      },
      mauSac: ["Đỏ Burgundy", "Băng Thanh", "Bạc", "Đen"],
      dungLuong: ["256GB", "512GB", "1TB", "2TB"],
      moTa: "Hiệu năng dẫn đầu phân khúc cùng camera tiềm vọng 5x thế hệ mới, hỗ trợ quay video Spatial Pro Audio.",
    },
    {
      id: "galaxy-s26-ultra",
      ten: "Samsung Galaxy S26 Ultra 5G",
      hang: "Samsung",
      danhMuc: "dienthoai",
      gia: 29490000,
      giaGoc: 33990000,
      giaTheoDungLuong: {
        "12GB 256GB": { gia: 29490000, giaGoc: 33990000 },
        "12GB 512GB": { gia: 35990000, giaGoc: 39990000 },
        "16GB 1TB": { gia: 41990000, giaGoc: 46990000 },
      },
      anh: "s26ultraxanh.webp",
      anhTheoMau: {
        "Xanh Dương": "s26ultraxanh.webp",
        "Trắng": "s26ultratrang.webp",
        "Đen": "s26ultraden.webp",
      },
      traGop: true,
      hot: true,
      moi: true,
      danhGia: 4.9,
      soDanhGia: 86,
      thongSo: {
        manHinh: "6.8 inches Dynamic AMOLED 2X 120Hz",
        chip: "Snapdragon 8 Elite for Galaxy",
        ram: "12 GB - 16 GB",
        boNho: "256 GB - 1 TB",
        pin: "5.500 mAh, Sạc nhanh 65W",
      },
      mauSac: ["Xanh Dương", "Trắng", "Đen"],
      dungLuong: ["12GB 256GB", "12GB 512GB", "16GB 1TB"],
      moTa: "Siêu phẩm Android mạnh mẽ bậc nhất với bút S-Pen tích hợp, camera 200MP và Galaxy AI thế hệ 3.",
    },
    {
      id: "galaxy-s25-ultra",
      ten: "Samsung Galaxy S25 Ultra 5G",
      hang: "Samsung",
      danhMuc: "dienthoai",
      gia: 21500000,
      giaGoc: 24990000,
      giaTheoDungLuong: {
        "12GB 256GB": { gia: 21500000, giaGoc: 24990000 },
        "12GB 512GB": { gia: 25100000, giaGoc: 28990000 },
        "12GB 1TB": { gia: 31500000, giaGoc: 35990000 },
      },
      anh: "s25ultraxanh.webp",
      anhTheoMau: {
        "Xanh": "s25ultraxanh.webp",
        "Xám": "s25ultraxam.webp",
        "Đen": "s25ultraden.webp",
        "Bạc": "s25ultrabac.webp",
      },
      traGop: true,
      hot: true,
      moi: true,
      danhGia: 4.8,
      soDanhGia: 215,
      thongSo: {
        manHinh: "6.8 inches Dynamic AMOLED 2X 120Hz",
        chip: "Snapdragon 8 Gen 3 for Galaxy",
        ram: "12 GB",
        boNho: "256 GB - 1 TB",
        pin: "5.000 mAh, Sạc nhanh 45W",
      },
      mauSac: ["Xanh", "Xám", "Đen", "Bạc"],
      dungLuong: ["12GB 256GB", "12GB 512GB", "12GB 1TB"],
      moTa: "Thiết kế viền phẳng titan thời thượng, màn hình chống chói độc quyền cùng hệ thống zoom quang học 100x đỉnh cao.",
    },
    {
      id: "xiaomi-17-ultra",
      ten: "Xiaomi 17 Ultra",
      hang: "Xiaomi",
      danhMuc: "dienthoai",
      gia: 30990000,
      giaGoc: 34990000,
      giaTheoDungLuong: {
        "16GB 512GB": { gia: 30990000, giaGoc: 34990000 },
        "16GB 1TB": { gia: 35990000, giaGoc: 39990000 },
      },
      anh: "mi17ultratrang.webp",
      anhTheoMau: {
        "Trắng": "mi17ultratrang.webp",
        "Xanh lá": "mi17ultraxanh.webp",
        "Đen": "mi17ultraden.webp",
      },
      traGop: true,
      hot: true,
      moi: true,
      danhGia: 4.9,
      soDanhGia: 62,
      thongSo: {
        manHinh: "6.83 inches LTPO OLED 2K 120Hz",
        chip: "Snapdragon 8 Elite",
        ram: "16 GB",
        boNho: "512 GB - 1 TB",
        pin: "5.400 mAh, Sạc siêu tốc 90W",
      },
      mauSac: ["Trắng", "Xanh lá", "Đen"],
      dungLuong: ["16GB 512GB", "16GB 1TB"],
      moTa: "Ống kính máy ảnh chuyên nghiệp Leica Summilux kết hợp cảm biến 1-inch, đưa nhiếp ảnh di động lên tầm cao mới.",
    },
    {
      id: "oppo-find-x9-ultra",
      ten: "OPPO Find X9 Ultra",
      hang: "OPPO",
      danhMuc: "dienthoai",
      gia: 28750000,
      giaGoc: 32990000,
      giaTheoDungLuong: {
        "12GB 256GB": { gia: 28750000, giaGoc: 32990000 },
        "16GB 256GB": { gia: 31750000, giaGoc: 35990000 },
        "12GB 512GB": { gia: 31750000, giaGoc: 35990000 },
        "16GB 1TB": { gia: 36750000, giaGoc: 41990000 },
      },
      anh: "oppofindx9ultratrang.webp",
      anhTheoMau: {
        "Trắng": "oppofindx9ultratrang.webp",
        "Cam": "oppofindx9ultracam.webp",
        "Đen": "oppofindx9ultraden.webp",
      },
      traGop: true,
      hot: true,
      moi: true,
      danhGia: 4.8,
      soDanhGia: 54,
      thongSo: {
        manHinh: "6.83 inches ProXDR AMOLED 120Hz",
        chip: "Snapdragon 8 Elite",
        ram: "12 GB - 16 GB",
        boNho: "256 GB - 1 TB",
        pin: "5.400 mAh, SuperVOOC 100W",
      },
      mauSac: ["Trắng", "Cam", "Đen"],
      dungLuong: ["12GB 256GB", "16GB 256GB", "12GB 512GB", "16GB 1TB"],
      moTa: "Hệ thống 4 camera chính 50MP tinh chỉnh bởi Hasselblad mang đến màu sắc chuẩn điện ảnh chân thực và sống động.",
    },
    {
      id: "vivo-x300-ultra",
      ten: "Vivo X300 Ultra",
      hang: "Vivo",
      danhMuc: "dienthoai",
      gia: 26750000,
      giaGoc: 30990000,
      giaTheoDungLuong: {
        "12GB 256GB": { gia: 26750000, giaGoc: 30990000 },
        "16GB 256GB": { gia: 28650000, giaGoc: 32990000 },
        "16GB 512GB": { gia: 30550000, giaGoc: 34990000 },
        "16GB 1TB": { gia: 34350000, giaGoc: 38990000 },
      },
      anh: "vivox300ultrabac.webp",
      anhTheoMau: {
        "Bạc": "vivox300ultrabac.webp",
        "Xanh": "vivox300ultraxanh.webp",
        "Titan": "vivox300ultratitan.webp",
      },
      traGop: true,
      hot: true,
      moi: true,
      danhGia: 4.8,
      soDanhGia: 39,
      thongSo: {
        manHinh: "6.78 inches AMOLED 1.5K 120Hz",
        chip: "Dimensity 9400+",
        ram: "12 GB - 16 GB",
        boNho: "256 GB - 1 TB",
        pin: "5.800 mAh, FlashCharge 100W",
      },
      mauSac: ["Bạc", "Xanh", "Titan"],
      dungLuong: ["12GB 256GB", "16GB 256GB", "16GB 512GB", "16GB 1TB"],
      moTa: "Ống kính ZEISS phủ lớp chống lóa T* độc quyền, chip xử lý hình ảnh V3+ chuyên dụng cho chụp đêm siêu nét.",
    },
    {
      id: "oppo-a7-pro",
      ten: "OPPO A7 Pro 5G",
      hang: "OPPO",
      danhMuc: "dienthoai",
      gia: 8550000,
      giaTheoDungLuong: {
        "6GB 256GB": { gia: 8550000},
        "8GB 256GB": { gia: 9550000},
      },
      anh: "oppoa7proxanh.webp",
      anhTheoMau: {
        "Xanh Dương": "oppoa7proxanh.webp",
        "Nâu Sa Mạc": "oppoa7pronau.webp",
        "Hồng": "oppoa7prohong.webp",
      },
      traGop: true,
      hot: false,
      moi: true,
      danhGia: 4.7,
      soDanhGia: 112,
      thongSo: {
        manHinh: "6.7 inches AMOLED 120Hz",
        chip: "Dimensity 7050 5G",
        ram: "8 GB",
        boNho: "256 GB",
        pin: "5.000 mAh, SuperVOOC 67W",
      },
      mauSac: ["Xanh Dương", "Nâu Sa Mạc", "Hồng"],
      dungLuong: ["6GB 256GB", "8GB 256GB"],
      moTa: "Kháng nước và bụi chuẩn IP69 cao nhất, thân máy siêu mỏng nhẹ, pin khỏe thoải mái sử dụng suốt cả ngày.",
    },
    {
      id: "samsung-galaxy-a08",
      ten: "Samsung Galaxy A08 4GB 64GB",
      hang: "Samsung",
      danhMuc: "dienthoai",
      gia: 4590000,
      giaGoc: 4790000,
      giaTheoDungLuong: {
        "4GB 64GB": { gia: 4590000},
      },
      anh: "ssa08bac.webp",
      anhTheoMau: {
        "Xanh Lá": "ssa08xanhla.webp",
        "Bạc": "ssa08bac.webp",
        "Xanh Dương": "ssa08xanhduong.webp",
      },
      traGop: false,
      hot: false,
      moi: true,
      danhGia: 4.6,
      soDanhGia: 178,
      thongSo: {
        manHinh: "6.5 inches PLS LCD 90Hz",
        chip: "MediaTek Dimensity 6100+",
        ram: "6 GB",
        boNho: "128 GB",
        pin: "5.000 mAh, Sạc 25W",
      },
      mauSac: ["Xanh Lá", "Xanh Dương", "Bạc"],
      dungLuong: ["4GB 64GB"],
      moTa: "Lựa chọn số 1 phân khúc phổ thông với kết nối 5G tốc độ cao, camera 50MP sắc nét và pin dùng 2 ngày.",
    },
    {
      id: "galaxy-zfold8-ultra",
      ten: "Samsung Galaxy Z Fold8 Ultra 5G",
      hang: "Samsung",
      danhMuc: "dienthoai",
      gia: 48990000,
      giaGoc: 52990000,
      giaTheoDungLuong: {
        "12GB 256GB": { gia: 48990000, giaGoc: 52990000 },
        "12GB 512GB": { gia: 54790000, giaGoc: 58990000 },
        "16GB 1TB": { gia: 63990000, giaGoc: 70990000 },
      },
      anh: "zfold8trang.webp",
      anhTheoMau: {
        "Tím": "zfold8tim.webp",
        "Trắng": "zfold8trang.webp",
        "Đen": "zfold8den.webp",
      },
      traGop: true,
      hot: true,
      moi: true,
      danhGia: 5.0,
      soDanhGia: 5,
      thongSo: {
        manHinh: "8.0 inches, Dynamic AMOLED 2X",
        chip: "Snapdragon® 8 Elite Gen 5",
        ram: "12 GB - 16 GB",
        boNho: "256 GB - 1 TB",
        pin: "5000 mAh, Sạc 45W",
      },
      mauSac: ["Tím", "Trắng", "Đen"],
      dungLuong: ["12GB 256GB", "12GB 512GB", "16GB 1TB"],
      moTa: "Đỉnh cao trí tuệ đa nhiệm với Galaxy AI & One UI 9.",
    },
    {
      id: "airpods-5",
      ten: "Tai nghe Bluetooth Apple AirPods 5 2026 Sạc Có Dây",
      hang: "Apple",
      danhMuc: "phukien",
      loaiPhuKien: "tainghe",
      gia: 3790000,
      giaGoc: 4290000,
      anh: "airpods5.webp",
      traGop: true,
      hot: true,
      moi: true,
      danhGia: 4.9,
      soDanhGia: 204,
      thongSo: {
        pin: "Lên đến 30 giờ kèm hộp sạc",
      },
      mauSac: ["Trắng"],
      moTa: "Chủ động khử tiếng ồn hiệu quả gấp 1.5 lần, âm thanh không gian được cá nhân hóa cùng cổng sạc USB-C hiện đại.",
    },
    {
      id: "galaxy-buds-4-pro",
      ten: "Tai nghe Samsung Galaxy Buds 4 Pro",
      hang: "Samsung",
      danhMuc: "phukien",
      loaiPhuKien: "tainghe",
      gia: 5490000,
      giaGoc: 6790000,
      anh: "ssbuds4pro.webp",
      anhTheoMau: {
        "Đen": "ssbuds4proden.webp",
        "Trắng": "ssbuds4pro.webp",
      },
      traGop: true,
      hot: false,
      moi: false,
      danhGia: 4.5,
      soDanhGia: 100,
      thongSo: {
        pin: "Lên đến 30 giờ kèm hộp sạc",
      },
      mauSac: ["Trắng","Đen"],
      moTa: "Samsung Galaxy Buds 4 Pro là tai nghe chống ồn ANC cao cấp với nhiều nâng cấp đáng giá, mang đến trải nghiệm âm thanh vượt trội trong phân khúc.",
    },
    {
      id: "tai-nghe-oppo-enco-buds",
      ten: "Tai nghe OPPO Enco Buds3s",
      hang: "OPPO",
      danhMuc: "phukien",
      loaiPhuKien: "tainghe",
      gia: 790000,
      giaGoc: 890000,
      anh: "encobudtrang.webp",
      anhTheoMau: {
        "Đen": "encobudden.webp",
        "Trắng": "encobudtrang.webp",
      },
      traGop: false,
      hot: false,
      moi: false,
      danhGia: 4.7,
      soDanhGia: 95,
      thongSo: {
        pin: "28 giờ nghe nhạc",
      },
      mauSac: ["Trắng", "Đen"],
      moTa: "Chất âm sống động với âm trầm uy lực, kết nối tức thì và micro đàm thoại khử ồn AI thông minh.",
    },

        {
      id: "Redmi-K80-Ultra",
      ten: "Xiaomi REDMI K80 Ultra",
      hang: "Xiaomi",
      danhMuc: "dienthoai",
      gia: 9550000,
      giaGoc: 10550000,
      giaTheoDungLuong: {
        "12GB 256GB": { gia: 9550000},
        "12GB 512GB": { gia: 10950000},
        "16GB 256GB": { gia: 10250000},
        "16GB 512GB": { gia: 12100000},
        "16GB 1TB": { gia: 13950000},

      },
      anh: "k80uxam.webp",
      anhTheoMau: {
        "Xanh Dương": "k80uduong.webp",
        "Xanh Lá": "k80uxanh.webp",
        "Xám": "k80uxam.webp",
        "Trắng": "k80utrang.webp"
      },
      
      traGop: true,
      hot: true,
      moi: true,
      danhGia: 4.7,
      soDanhGia: 95,
      thongSo: {
        manHinh: "OLED, 68 tỷ màu, 144Hz",
        chip: "Dimensity 9400+",
        ram: "16GB",
        boNho: "1TB",
        pin: "7410mAh, Sạc nhanh 100W",
      },
      mauSac: ["Trắng", "Xám","Xanh Lá","Xanh Dương"],
      dungLuong: ["12GB 256GB","16GB 256GB","12GB 512GB","16GB 512GB","16GB 1TB"],
      moTa: "Mẫu smartphone hiệu năng cao nổi bật của Xiaomi, trang bị vi xử lý MediaTek Dimensity 9400+ và viên pin dung lượng lớn 7410 mAh.",
    },

    {
      id: "cu-sac-anker-gan-65w",
      ten: "Củ sạc nhanh Anker MagGo 2 Pro",
      hang: "Phụ kiện",
      danhMuc: "phukien",
      loaiPhuKien: "sac-cap",
      gia: 2850000,
      giaGoc: 2950000,
      anh: "ankertrang.webp",
      anhTheoMau: {
        "Xanh Dương": "ankerxanh.webp",
        "Trắng": "ankertrang.webp",
        "Đỏ": "ankerdo.webp",
        "Đen": "ankerden.webp",
      },
      traGop: false,
      hot: true,
      moi: false,
      danhGia: 4.9,
      soDanhGia: 310,
      thongSo: {
        pin: "Công suất tối đa 65W",
      },
      mauSac: ["Xanh Dương", "Trắng", "Đỏ", "Đen"],
      moTa: "Sạc nhanh tối ưu cùng lúc cho laptop MacBook, iPad và iPhone với kích thước siêu nhỏ bỏ túi.",
    },
    {
      id: "pin-du-phong-anker-a1695",
      ten: "Pin sạc dự phòng Anker A1695 25.000mAh 165W tích hợp cáp rút gọn",
      hang: "Phụ kiện",
      danhMuc: "phukien",
      loaiPhuKien: "sac-cap",
      gia: 1450000,
      giaGoc: 2850000,
      anh: "anker2trang.webp",
      anhTheoMau: {
        "Trắng": "anker2trang.webp",
        "Đen": "anker2den.webp",
      },
      traGop: false,
      hot: true,
      moi: false,
      danhGia: 4.7,
      soDanhGia: 12,
      thongSo: {
        pin: "Sạc nhanh, chống cháy nổ, chập điện, có hiển thị thông số sạc",
      },
      mauSac: ["Trắng", "Đen"],
      moTa: "Pin sạc dự phòng Anker A1695 25000mAh 165W kèm cáp rút gọn sở hữu dung lượng 25,000mAh, mang đến khả năng cung cấp năng lượng dài lâu cho người dùng. ",
    },
    {
      id: "pin-du-phong-ugreen-145w",
      ten: "Pin sạc dự phòng Ugreen 90597A 25000mAh 145W 2 chiều 2C1A",
      hang: "Phụ kiện",
      danhMuc: "phukien",
      loaiPhuKien: "pin-du-phong",
      gia: 1390000,
      giaGoc: 2490000,
      anh: "ugreen.webp",
      anhTheoMau: {
        "Xám": "ugreen.webp",
      },
      traGop: false,
      hot: true,
      moi: false,
      danhGia: 4.9,
      soDanhGia: 142,
      thongSo: {
        pin: "Sạc đồng thời 3 thiết bị",
      },
      mauSac: ["Xám"],
      moTa: "Nguồn năng lượng di động tối thượng đủ sức sạc đầy laptop, điện thoại nhiều lần cho mọi chuyến công tác xa.",
    },
    {
      id: "bo-sac-samsung-45w",
      ten: "Củ sạc Samsung Type-C 45W kèm cáp C-C 5A 1.8M EP-T4511X",
      hang: "Samsung",
      danhMuc: "phukien",
      loaiPhuKien: "sac-cap",
      gia: 850000,
      giaGoc: 1090000,
      anh: "sacss.webp",
      traGop: false,
      hot: false,
      moi: false,
      danhGia: 4.8,
      soDanhGia: 280,
      thongSo: {
        pin: "Công suất tối đa 45W",
      },
      mauSac: ["Đen"],
      moTa: "Củ sạc chính hãng Samsung tối ưu riêng cho dòng Galaxy S26, S25 Ultra giúp đầy 70% pin chỉ sau 30 phút.",
    },
  ];

  const trangThai = {
    danhMuc: "tatca", 
    hang: "tatca", 
    loaiPhuKien: "tatca",
    khoangGia: "tatca",
    giaMinTuyChinh: null,
    giaMaxTuyChinh: null,
    tinhNang: [], 
    sapXep: "mac-dinh",
    tuKhoa: "",
    trangHienTai: 1,
    soMoiTrang: 9,
    cheDoXem: "luoi", 
  };

  const STORAGE_GIO_HANG = "gioHang";

  const fmt = (n) =>
    new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(Math.round(n)) + "₫";

  function layGioHang() {
    try {
      const raw = localStorage.getItem(STORAGE_GIO_HANG);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
      }
    } catch (e) {}
    return [];
  }

  function luuGioHang(ds) {
    localStorage.setItem(STORAGE_GIO_HANG, JSON.stringify(ds));
    capNhatBadge();
  }

  function capNhatBadge() {
    const ds = layGioHang();
    const tong = ds.reduce((s, sp) => s + (sp.soLuong || 1), 0);
    const badges = document.querySelectorAll(
      ".so-luong, #badge-gio-hang, .badge-gio"
    );
    badges.forEach((b) => {
      b.textContent = tong > 99 ? "99+" : tong;
    });
  }
  let toastTimer = null;
  function hienToast(msg, loai = "ok") {
    let toast = document.getElementById("toast-global");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast-global";
      toast.className = "toast-global";
      document.body.appendChild(toast);
    }
    const icon =
      loai === "loi"
        ? '<i class="fa-solid fa-triangle-exclamation"></i>'
        : '<i class="fa-solid fa-circle-check"></i>';
    toast.innerHTML = `${icon} <span>${msg}</span>`;
    toast.className = `toast-global hien ${loai === "loi" ? "toast-loi" : "toast-ok"}`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("hien"), 3000);
  }

  function themVaoGio(sp, options = {}) {
    const ds = layGioHang();
    const thuocTinh =
      options.thuocTinh ||
      `${options.mau || (sp.mauSac ? sp.mauSac[0] : "Tiêu chuẩn")} - ${options.dungLuong || (sp.dungLuong ? sp.dungLuong[0] : "Mặc định")}`;
    const idItem = `${sp.id}-${thuocTinh}`.replace(/\s+/g, "-");
    const anhLuu =
      options.anh ||
      (sp.anhTheoMau && options.mau && sp.anhTheoMau[options.mau]) ||
      sp.anh;
    const giaLuu = options.gia !== undefined ? options.gia : sp.gia;

    const tonTai = ds.find((x) => x.id === idItem || x.id === sp.id);
    if (tonTai) {
      tonTai.soLuong = (tonTai.soLuong || 1) + (options.soLuong || 1);
      tonTai.gia = giaLuu;
    } else {
      ds.push({
        id: idItem,
        ten: sp.ten,
        thuocTinh: thuocTinh,
        gia: giaLuu,
        soLuong: options.soLuong || 1,
        chon: true,
        anh: anhLuu,
      });
    }

    luuGioHang(ds);
    hienToast(`Đã thêm "${sp.ten}" vào giỏ hàng!`, "ok");
  }

  function docThamSoURL() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("cat")) {
      const cat = urlParams.get("cat");
      if (cat === "dienthoai" || cat === "phukien") {
        trangThai.danhMuc = cat;
      }
    }

    if (urlParams.has("hang")) {
      trangThai.hang = urlParams.get("hang");
    }

    if (urlParams.has("loai")) {
      trangThai.loaiPhuKien = urlParams.get("loai");
    }

    if (urlParams.has("q")) {
      trangThai.tuKhoa = urlParams.get("q").trim();
      const oTim = document.getElementById("o-tim-kiem-input");
      if (oTim) oTim.value = trangThai.tuKhoa;
    }

    if (urlParams.has("gia")) {
      trangThai.khoangGia = urlParams.get("gia");
    }
  }

  function chuanHoaChuoi(str) {
    return (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d");
  }

  function locDanhSach() {
    let ketQua = [...DANH_SACH_SAN_PHAM];

    if (trangThai.danhMuc !== "tatca") {
      ketQua = ketQua.filter((sp) => sp.danhMuc === trangThai.danhMuc);
    }

    if (trangThai.hang !== "tatca") {
      ketQua = ketQua.filter(
        (sp) => sp.hang.toLowerCase() === trangThai.hang.toLowerCase()
      );
    }

    if (trangThai.loaiPhuKien !== "tatca") {
      ketQua = ketQua.filter((sp) => sp.loaiPhuKien === trangThai.loaiPhuKien);
    }

    if (trangThai.khoangGia !== "tatca") {
      switch (trangThai.khoangGia) {
        case "duoi-2tr":
          ketQua = ketQua.filter((sp) => sp.gia < 2000000);
          break;
        case "2-5tr":
          ketQua = ketQua.filter((sp) => sp.gia >= 2000000 && sp.gia < 5000000);
          break;
        case "5-10tr":
          ketQua = ketQua.filter(
            (sp) => sp.gia >= 5000000 && sp.gia < 10000000
          );
          break;
        case "10-20tr":
          ketQua = ketQua.filter(
            (sp) => sp.gia >= 10000000 && sp.gia < 20000000
          );
          break;
        case "tren-20tr":
          ketQua = ketQua.filter((sp) => sp.gia >= 20000000);
          break;
        case "tuy-chinh":
          if (trangThai.giaMinTuyChinh !== null) {
            ketQua = ketQua.filter((sp) => sp.gia >= trangThai.giaMinTuyChinh);
          }
          if (trangThai.giaMaxTuyChinh !== null) {
            ketQua = ketQua.filter((sp) => sp.gia <= trangThai.giaMaxTuyChinh);
          }
          break;
      }
    }

    if (trangThai.tinhNang.includes("tragop")) {
      ketQua = ketQua.filter((sp) => sp.traGop === true);
    }
    if (trangThai.tinhNang.includes("hot")) {
      ketQua = ketQua.filter((sp) => sp.hot === true);
    }
    if (trangThai.tinhNang.includes("moi")) {
      ketQua = ketQua.filter((sp) => sp.moi === true);
    }

    if (trangThai.tuKhoa) {
      const q = chuanHoaChuoi(trangThai.tuKhoa);
      ketQua = ketQua.filter((sp) => {
        const ten = chuanHoaChuoi(sp.ten);
        const hang = chuanHoaChuoi(sp.hang);
        const moTa = chuanHoaChuoi(sp.moTa || "");
        return ten.includes(q) || hang.includes(q) || moTa.includes(q);
      });
    }

    switch (trangThai.sapXep) {
      case "gia-tang":
        ketQua.sort((a, b) => a.gia - b.gia);
        break;
      case "gia-giam":
        ketQua.sort((a, b) => b.gia - a.gia);
        break;
      case "giam-nhieu":
        ketQua.sort(
          (a, b) => (1 - b.gia / b.giaGoc) - (1 - a.gia / a.giaGoc)
        );
        break;
      case "danh-gia":
        ketQua.sort((a, b) => b.danhGia - a.danhGia);
        break;
      case "moi-nhat":
        ketQua.sort((a, b) => (b.moi === a.moi ? 0 : b.moi ? 1 : -1));
        break;
      default:
        ketQua.sort((a, b) => {
          if (a.hot && !b.hot) return -1;
          if (!a.hot && b.hot) return 1;
          return 0;
        });
        break;
    }

    return ketQua;
  }

  function renderDanhSach() {
    const luoiSP = document.getElementById("luoi-san-pham");
    const demEl = document.getElementById("dem-so-luong");
    const containerTags = document.getElementById("the-tag-dang-loc");
    const phanTrangEl = document.getElementById("khung-phan-trang");

    if (!luoiSP) return;

    const danhSach = locDanhSach();
    const tongSo = danhSach.length;

    if (demEl) demEl.textContent = `${tongSo} sản phẩm`;

    renderActiveFilterTags(containerTags);

    const tongSoTrang = Math.ceil(tongSo / trangThai.soMoiTrang) || 1;
    if (trangThai.trangHienTai > tongSoTrang) {
      trangThai.trangHienTai = tongSoTrang;
    }

    const batDau = (trangThai.trangHienTai - 1) * trangThai.soMoiTrang;
    const ketThuc = batDau + trangThai.soMoiTrang;
    const sanPhamTrang = danhSach.slice(batDau, ketThuc);

    if (sanPhamTrang.length === 0) {
      luoiSP.innerHTML = `
        <div class="khong-co-san-pham">
          <i class="fa-solid fa-box-open"></i>
          <h3>Không tìm thấy sản phẩm phù hợp</h3>
          <p>Hãy thử xóa một số tiêu chí bộ lọc hoặc tìm kiếm bằng từ khóa khác</p>
          <button type="button" class="nut-mua-ngay" id="nut-reset-loc-empty" style="display:inline-flex; width:auto; padding:0 24px;">
            <i class="fa-solid fa-rotate-left"></i> Xóa tất cả bộ lọc
          </button>
        </div>
      `;
      if (phanTrangEl) phanTrangEl.innerHTML = "";
      const btnEmptyReset = document.getElementById("nut-reset-loc-empty");
      if (btnEmptyReset) btnEmptyReset.addEventListener("click", xoaTatCaBoLoc);
      return;
    }

    luoiSP.className =
      "luoi-san-pham" +
      (trangThai.cheDoXem === "danh-sach" ? " dang-danh-sach" : "");

    luoiSP.innerHTML = sanPhamTrang
      .map((sp) => taoHtmlTheSanPham(sp))
      .join("");

    renderPhanTrang(phanTrangEl, tongSoTrang);

    ganSuKienTheSanPham();
  }

  function taoBanChupYeuThich(sp) {
    const mau = sp.mauSac && sp.mauSac.length ? sp.mauSac[0] : "Tiêu chuẩn";
    const dl = sp.dungLuong && sp.dungLuong.length ? sp.dungLuong[0] : "Mặc định";
    return {
      id: sp.id,
      ten: sp.ten,
      hang: sp.hang,
      danhMuc: sp.danhMuc,
      gia: sp.gia,
      giaGoc: sp.giaGoc,
      anh: sp.anh,
      macDinh: mau + " - " + dl,
    };
  }

  function laYeuThich(id) {
    return !!(window.N1 && window.N1.yeuThich.co(id));
  }

  function veTimDaThich(btn, daThich) {
    btn.classList.toggle("da-thich", daThich);
    btn.setAttribute("aria-pressed", daThich ? "true" : "false");
    btn.title = daThich ? "Bỏ khỏi yêu thích" : "Thêm vào yêu thích";
    const icon = btn.querySelector("i");
    if (icon) icon.className = (daThich ? "fa-solid" : "fa-regular") + " fa-heart";
    const nhan = btn.querySelector(".nhan-tim");
    if (nhan) nhan.textContent = daThich ? "Đã yêu thích" : "Yêu thích";
  }

  function doiYeuThich(sp) {
    if (!window.N1) return;
    const kq = window.N1.yeuThich.doi(taoBanChupYeuThich(sp));
    if (kq.canDangNhap) {
      hienToast("Vui lòng đăng nhập để lưu sản phẩm yêu thích", "loi");
      setTimeout(() => {
        window.location.href = window.N1.urlDangNhap();
      }, 1100);
      return;
    }
    document
      .querySelectorAll(`[data-thich="${sp.id}"], [data-modal-thich="${sp.id}"]`)
      .forEach((b) => veTimDaThich(b, kq.dangThich));
    hienToast(
      kq.dangThich
        ? "Đã thêm vào danh sách yêu thích!"
        : "Đã bỏ khỏi danh sách yêu thích",
      "ok"
    );
  }

  function taoHtmlTheSanPham(sp) {
    const daThich = laYeuThich(sp.id);
    const phanTramGiam = Math.round((1 - sp.gia / sp.giaGoc) * 100);

    let badgesHtml = "";
    if (sp.traGop)
      badgesHtml += `<span class="huy-hieu hh-tra-gop"><i class="fa-solid fa-credit-card"></i> Trả góp 0%</span>`;
    if (phanTramGiam > 0)
      badgesHtml += `<span class="huy-hieu hh-giam">-${phanTramGiam}%</span>`;
    if (sp.hot)
      badgesHtml += `<span class="huy-hieu hh-hot"><i class="fa-solid fa-fire"></i> Hot</span>`;
    if (sp.moi)
      badgesHtml += `<span class="huy-hieu hh-moi"><i class="fa-solid fa-sparkles"></i> Mới</span>`;

    let thongSoHtml = "";
    if (sp.thongSo) {
      if (sp.thongSo.chip)
        thongSoHtml += `<span class="thong-so-item"><i class="fa-solid fa-microchip"></i> ${sp.thongSo.chip}</span>`;
      if (sp.thongSo.manHinh)
        thongSoHtml += `<span class="thong-so-item"><i class="fa-solid fa-mobile-screen"></i> ${sp.thongSo.manHinh}</span>`;
    }

    return `
      <article class="the-san-pham" data-id="${sp.id}">
        <div class="hang-huy-hieu">${badgesHtml}</div>
        <button type="button" class="nut-yeu-thich${daThich ? " da-thich" : ""}" title="${daThich ? "Bỏ khỏi yêu thích" : "Thêm vào yêu thích"}" aria-pressed="${daThich}" data-thich="${sp.id}">
          <i class="${daThich ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>

        <div class="khung-anh-sp" data-xem-nhanh="${sp.id}" role="button" tabindex="0" aria-label="Xem chi tiết ${sp.ten}">
          <img src="${sp.anh}" alt="${sp.ten}" loading="lazy" />
          <button type="button" class="nut-xem-nhanh-overlay" data-xem-nhanh="${sp.id}">
            <i class="fa-regular fa-eye"></i> Xem nhanh
          </button>
        </div>

        <div class="thong-tin-sp">
          <div class="hang-va-danh-gia">
            <span class="ten-hang-sp">${sp.hang}</span>
            <div class="danh-gia-sao">
              <i class="fa-solid fa-star"></i>
              <span>${sp.danhGia}</span>
              <span class="luot-danh-gia">(${sp.soDanhGia})</span>
            </div>
          </div>

          <h3 class="ten-san-pham">
            <a href="danhmuc.html?id=${encodeURIComponent(sp.id)}" data-xem-nhanh="${sp.id}">${sp.ten}</a>
          </h3>

          <div class="thong-so-nhanh">${thongSoHtml}</div>

          <div class="khung-gia-sp">
            <span class="gia-hien-tai">${fmt(sp.gia)}</span>
            ${sp.giaGoc > sp.gia ? `<span class="gia-goc">${fmt(sp.giaGoc)}</span>` : ""}
          </div>

          <div class="hang-nut-hanh-dong">
            <button type="button" class="nut-them-gio" title="Thêm vào giỏ hàng" data-them="${sp.id}">
              <i class="fa-solid fa-cart-plus"></i>
            </button>
            <button type="button" class="nut-mua-ngay" data-mua-ngay="${sp.id}">
              <i class="fa-solid fa-bolt"></i> Mua ngay
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function ganSuKienTheSanPham() {
    document.querySelectorAll("[data-xem-nhanh]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = el.getAttribute("data-xem-nhanh");
        const sp = DANH_SACH_SAN_PHAM.find((x) => x.id === id);
        if (sp) moModalXemNhanh(sp);
      });

      if (el.matches(".khung-anh-sp")) {
        el.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const id = el.getAttribute("data-xem-nhanh");
            const sp = DANH_SACH_SAN_PHAM.find((x) => x.id === id);
            if (sp) moModalXemNhanh(sp);
          }
        });
      }
    });

    document.querySelectorAll("[data-mua-ngay]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-mua-ngay");
        const sp = DANH_SACH_SAN_PHAM.find((x) => x.id === id);
        if (sp) {
          themVaoGio(sp);
          setTimeout(() => {
            window.location.href = "giohang.html";
          }, 300);
        }
      });
    });

    document.querySelectorAll("[data-them]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const sp = DANH_SACH_SAN_PHAM.find((x) => x.id === btn.getAttribute("data-them"));
        if (sp) themVaoGio(sp);
      });
    });

    document.querySelectorAll("[data-thich]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const sp = DANH_SACH_SAN_PHAM.find((x) => x.id === btn.getAttribute("data-thich"));
        if (sp) doiYeuThich(sp);
      });
    });
  }
  

  function renderActiveFilterTags(container) {
    if (!container) return;
    let html = "";

    if (trangThai.danhMuc !== "tatca") {
      const label =
        trangThai.danhMuc === "dienthoai" ? "Điện thoại" : "Phụ kiện";
      html += `<span class="tag-loc-active" data-xoa-tag="danhMuc">${label} <i class="fa-solid fa-xmark"></i></span>`;
    }

    if (trangThai.hang !== "tatca") {
      html += `<span class="tag-loc-active" data-xoa-tag="hang">Hãng: ${trangThai.hang} <i class="fa-solid fa-xmark"></i></span>`;
    }

    if (trangThai.loaiPhuKien !== "tatca") {
      html += `<span class="tag-loc-active" data-xoa-tag="loaiPhuKien">${trangThai.loaiPhuKien} <i class="fa-solid fa-xmark"></i></span>`;
    }

    if (trangThai.khoangGia !== "tatca") {
      let lblGia = "";
      if (trangThai.khoangGia === "duoi-2tr") lblGia = "Dưới 2 triệu";
      else if (trangThai.khoangGia === "2-5tr") lblGia = "Từ 2 - 5 triệu";
      else if (trangThai.khoangGia === "5-10tr") lblGia = "Từ 5 - 10 triệu";
      else if (trangThai.khoangGia === "10-20tr") lblGia = "Từ 10 - 20 triệu";
      else if (trangThai.khoangGia === "tren-20tr") lblGia = "Trên 20 triệu";
      else if (trangThai.khoangGia === "tuy-chinh") lblGia = "Khoảng giá tùy chỉnh";
      html += `<span class="tag-loc-active" data-xoa-tag="khoangGia">${lblGia} <i class="fa-solid fa-xmark"></i></span>`;
    }

    trangThai.tinhNang.forEach((tn) => {
      let lbl = tn === "tragop" ? "Trả góp 0%" : tn === "hot" ? "Hot" : "Mới";
      html += `<span class="tag-loc-active" data-xoa-tag-tinhnang="${tn}">${lbl} <i class="fa-solid fa-xmark"></i></span>`;
    });

    if (trangThai.tuKhoa) {
      html += `<span class="tag-loc-active" data-xoa-tag="tuKhoa">"${trangThai.tuKhoa}" <i class="fa-solid fa-xmark"></i></span>`;
    }

    container.innerHTML = html;

    container.querySelectorAll("[data-xoa-tag]").forEach((el) => {
      el.addEventListener("click", () => {
        const loai = el.getAttribute("data-xoa-tag");
        if (loai === "danhMuc") trangThai.danhMuc = "tatca";
        if (loai === "hang") trangThai.hang = "tatca";
        if (loai === "loaiPhuKien") trangThai.loaiPhuKien = "tatca";
        if (loai === "khoangGia") {
          trangThai.khoangGia = "tatca";
          trangThai.giaMinTuyChinh = null;
          trangThai.giaMaxTuyChinh = null;
        }
        if (loai === "tuKhoa") {
          trangThai.tuKhoa = "";
          const oTim = document.getElementById("o-tim-kiem-input");
          if (oTim) oTim.value = "";
        }
        dongBoFormBoLoc();
        renderDanhSach();
      });
    });

    container.querySelectorAll("[data-xoa-tag-tinhnang]").forEach((el) => {
      el.addEventListener("click", () => {
        const tn = el.getAttribute("data-xoa-tag-tinhnang");
        trangThai.tinhNang = trangThai.tinhNang.filter((x) => x !== tn);
        dongBoFormBoLoc();
        renderDanhSach();
      });
    });
  }

  function renderPhanTrang(container, tongSoTrang) {
    if (!container) return;
    if (tongSoTrang <= 1) {
      container.innerHTML = "";
      return;
    }

    let html = `
      <button type="button" class="nut-trang" id="nut-trang-truoc" ${trangThai.trangHienTai === 1 ? "disabled" : ""}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    `;

    for (let i = 1; i <= tongSoTrang; i++) {
      html += `
        <button type="button" class="nut-trang ${i === trangThai.trangHienTai ? "active" : ""}" data-trang="${i}">
          ${i}
        </button>
      `;
    }

    html += `
      <button type="button" class="nut-trang" id="nut-trang-sau" ${trangThai.trangHienTai === tongSoTrang ? "disabled" : ""}>
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    `;

    container.innerHTML = html;

    container.querySelectorAll("[data-trang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        trangThai.trangHienTai = parseInt(btn.getAttribute("data-trang"), 10);
        renderDanhSach();
        cuonLenDauDanhSach();
      });
    });

    const btnTruoc = document.getElementById("nut-trang-truoc");
    if (btnTruoc) {
      btnTruoc.addEventListener("click", () => {
        if (trangThai.trangHienTai > 1) {
          trangThai.trangHienTai--;
          renderDanhSach();
          cuonLenDauDanhSach();
        }
      });
    }

    const btnSau = document.getElementById("nut-trang-sau");
    if (btnSau) {
      btnSau.addEventListener("click", () => {
        if (trangThai.trangHienTai < tongSoTrang) {
          trangThai.trangHienTai++;
          renderDanhSach();
          cuonLenDauDanhSach();
        }
      });
    }
  }

  function cuonLenDauDanhSach() {
    const el = document.querySelector(".khung-trang-danh-muc");
    if (el) {
      const topPos = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  }

  function moModalXemNhanh(sp) {
    let modal = document.getElementById("modal-xem-nhanh");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "modal-xem-nhanh";
      modal.className = "modal-xem-nhanh";
      modal.innerHTML = `
        <div class="khung-modal-xem-nhanh">
          <button type="button" class="nut-dong-modal" id="dong-modal-xem-nhanh" aria-label="Đóng">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div class="noi-dung-modal-sp" id="noi-dung-modal-sp"></div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener("click", (e) => {
        if (e.target === modal) dongModalXemNhanh();
      });

      document
        .getElementById("dong-modal-xem-nhanh")
        .addEventListener("click", dongModalXemNhanh);
    }

    const container = document.getElementById("noi-dung-modal-sp");
    let mauDaChon = sp.mauSac ? sp.mauSac[0] : "";
    let dungLuongDaChon = sp.dungLuong ? sp.dungLuong[0] : "";
    let giaHienTai = sp.gia;
    let giaGocHienTai = sp.giaGoc;

    if (sp.giaTheoDungLuong && sp.giaTheoDungLuong[dungLuongDaChon]) {
      giaHienTai = sp.giaTheoDungLuong[dungLuongDaChon].gia;
      giaGocHienTai = sp.giaTheoDungLuong[dungLuongDaChon].giaGoc;
    }

    let mauHtml = "";
    if (sp.mauSac && sp.mauSac.length) {
      mauHtml = `
        <div class="modal-lua-chon-nhom">
          <div class="modal-tieu-de-chon">Màu sắc: <b id="lbl-mau-chon">${mauDaChon}</b></div>
          <div class="modal-danh-sach-nut-chon">
            ${sp.mauSac
              .map(
                (m, idx) => `
              <button type="button" class="modal-nut-option ${idx === 0 ? "active" : ""}" data-chon-mau="${m}">
                ${m}
              </button>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    let dungLuongHtml = "";
    if (sp.dungLuong && sp.dungLuong.length) {
      dungLuongHtml = `
        <div class="modal-lua-chon-nhom">
          <div class="modal-tieu-de-chon">Phiên bản / Bộ nhớ: <b id="lbl-dung-luong-chon">${dungLuongDaChon}</b></div>
          <div class="modal-danh-sach-nut-chon">
            ${sp.dungLuong
              .map(
                (d, idx) => `
              <button type="button" class="modal-nut-option ${idx === 0 ? "active" : ""}" data-chon-dl="${d}">
                ${d}
              </button>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    let bangThongSo = "";
    if (sp.thongSo) {
      bangThongSo = `
        <div class="modal-thong-so-bang">
          ${sp.thongSo.manHinh ? `<div class="modal-thong-so-dong"><span>Màn hình</span><span>${sp.thongSo.manHinh}</span></div>` : ""}
          ${sp.thongSo.chip ? `<div class="modal-thong-so-dong"><span>Vi xử lý (CPU)</span><span>${sp.thongSo.chip}</span></div>` : ""}
          ${sp.thongSo.ram ? `<div class="modal-thong-so-dong"><span>Bộ nhớ RAM</span><span>${sp.thongSo.ram}</span></div>` : ""}
          ${sp.thongSo.boNho ? `<div class="modal-thong-so-dong"><span>Bộ nhớ trong</span><span>${sp.thongSo.boNho}</span></div>` : ""}
          ${sp.thongSo.pin ? `<div class="modal-thong-so-dong"><span>Pin & Sạc</span><span>${sp.thongSo.pin}</span></div>` : ""}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="modal-cot-anh">
        <img id="modal-anh-sp" src="${(sp.anhTheoMau && sp.anhTheoMau[mauDaChon]) || sp.anh}" alt="${sp.ten}" />
      </div>
      <div class="modal-cot-thong-tin">
        <span class="modal-hang-sp">${sp.hang}</span>
        <h2 class="modal-ten-sp">${sp.ten}</h2>

        <div class="modal-gia-hang">
          <span class="modal-gia-hien-tai" id="modal-gia-hien-tai">${fmt(giaHienTai)}</span>
          <span class="modal-gia-goc" id="modal-gia-goc">${giaGocHienTai > giaHienTai ? fmt(giaGocHienTai) : ""}</span>
        </div>

        <p style="font-size:14px; color:var(--text-sub, #666); line-height:1.5; margin-bottom:16px;">${sp.moTa}</p>

        ${mauHtml}
        ${dungLuongHtml}
        ${bangThongSo}

        <div class="modal-nhom-nut-mua">
          <button type="button" class="modal-nut-them" id="btn-modal-them">
            <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
          </button>
          <button type="button" class="modal-nut-mua" id="btn-modal-mua">
            <i class="fa-solid fa-bolt"></i> Mua ngay
          </button>
          <button type="button" class="modal-nut-tim${laYeuThich(sp.id) ? " da-thich" : ""}" id="btn-modal-tim" data-modal-thich="${sp.id}" aria-pressed="${laYeuThich(sp.id)}">
            <i class="${laYeuThich(sp.id) ? "fa-solid" : "fa-regular"} fa-heart"></i> <span class="nhan-tim">${laYeuThich(sp.id) ? "Đã yêu thích" : "Yêu thích"}</span>
          </button>
        </div>
      </div>
    `;

    container.querySelectorAll("[data-chon-mau]").forEach((btn) => {
      btn.addEventListener("click", () => {
        container
          .querySelectorAll("[data-chon-mau]")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        mauDaChon = btn.getAttribute("data-chon-mau");
        const lbl = document.getElementById("lbl-mau-chon");
        if (lbl) lbl.textContent = mauDaChon;

        const imgEl = document.getElementById("modal-anh-sp");
        if (imgEl) {
          if (sp.anhTheoMau && sp.anhTheoMau[mauDaChon]) {
            imgEl.src = sp.anhTheoMau[mauDaChon];
          } else {
            imgEl.src = sp.anh;
          }
        }
      });
    });

    container.querySelectorAll("[data-chon-dl]").forEach((btn) => {
      btn.addEventListener("click", () => {
        container
          .querySelectorAll("[data-chon-dl]")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        dungLuongDaChon = btn.getAttribute("data-chon-dl");
        const lbl = document.getElementById("lbl-dung-luong-chon");
        if (lbl) lbl.textContent = dungLuongDaChon;

        if (sp.giaTheoDungLuong && sp.giaTheoDungLuong[dungLuongDaChon]) {
          giaHienTai = sp.giaTheoDungLuong[dungLuongDaChon].gia;
          giaGocHienTai = sp.giaTheoDungLuong[dungLuongDaChon].giaGoc;
        } else {
          giaHienTai = sp.gia;
          giaGocHienTai = sp.giaGoc;
        }

        const elGia = document.getElementById("modal-gia-hien-tai");
        const elGiaGoc = document.getElementById("modal-gia-goc");
        if (elGia) elGia.textContent = fmt(giaHienTai);
        if (elGiaGoc) {
          elGiaGoc.textContent =
            giaGocHienTai > giaHienTai ? fmt(giaGocHienTai) : "";
        }
      });
    });

    const btnThem = document.getElementById("btn-modal-them");
    if (btnThem) {
      btnThem.addEventListener("click", () => {
        const anhChon = (sp.anhTheoMau && sp.anhTheoMau[mauDaChon]) || sp.anh;
        themVaoGio(sp, {
          mau: mauDaChon,
          dungLuong: dungLuongDaChon,
          gia: giaHienTai,
          anh: anhChon,
        });
      });
    }

    const btnTim = document.getElementById("btn-modal-tim");
    if (btnTim) btnTim.addEventListener("click", () => doiYeuThich(sp));

    const btnMua = document.getElementById("btn-modal-mua");
    if (btnMua) {
      btnMua.addEventListener("click", () => {
        const anhChon = (sp.anhTheoMau && sp.anhTheoMau[mauDaChon]) || sp.anh;
        themVaoGio(sp, {
          mau: mauDaChon,
          dungLuong: dungLuongDaChon,
          gia: giaHienTai,
          anh: anhChon,
        });
        setTimeout(() => {
          window.location.href = "giohang.html";
        }, 200);
      });
    }

    modal.classList.add("hien");
    document.body.style.overflow = "hidden";
  }

  function dongModalXemNhanh() {
    const modal = document.getElementById("modal-xem-nhanh");
    if (modal) {
      modal.classList.remove("hien");
      document.body.style.overflow = "";
    }
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") dongModalXemNhanh();
  });

  function khoiTaoBoLoc() {
    const chips = document.querySelectorAll(".chip-hang");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const hang = chip.getAttribute("data-hang");
        if (trangThai.hang === hang) {
          trangThai.hang = "tatca";
        } else {
          trangThai.hang = hang;
        }
        dongBoFormBoLoc();
        renderDanhSach();
      });
    });

    document
      .querySelectorAll('input[name="loc-danh-muc"]')
      .forEach((input) => {
        input.addEventListener("change", (e) => {
          trangThai.danhMuc = e.target.value;
          dongBoFormBoLoc();
          renderDanhSach();
        });
      });

    document.querySelectorAll('input[name="loc-hang"]').forEach((input) => {
      input.addEventListener("change", (e) => {
        trangThai.hang = e.target.value;
        dongBoFormBoLoc();
        renderDanhSach();
      });
    });

    document.querySelectorAll('input[name="loc-gia"]').forEach((input) => {
      input.addEventListener("change", (e) => {
        trangThai.khoangGia = e.target.value;
        dongBoFormBoLoc();
        renderDanhSach();
      });
    });

    const btnGiaTuyChinh = document.getElementById("nut-ap-dung-gia");
    const minInput = document.getElementById("gia-min-input");
    const maxInput = document.getElementById("gia-max-input");
    if (btnGiaTuyChinh && minInput && maxInput) {
      btnGiaTuyChinh.addEventListener("click", () => {
        const minVal = parseFloat(minInput.value);
        const maxVal = parseFloat(maxInput.value);

        if (isNaN(minVal) && isNaN(maxVal)) {
          hienToast("Vui lòng nhập khoảng giá cần lọc", "loi");
          return;
        }

        trangThai.khoangGia = "tuy-chinh";
        trangThai.giaMinTuyChinh = !isNaN(minVal) ? minVal : null;
        trangThai.giaMaxTuyChinh = !isNaN(maxVal) ? maxVal : null;

        document
          .querySelectorAll('input[name="loc-gia"]')
          .forEach((r) => (r.checked = false));

        renderDanhSach();
      });
    }
    document
      .querySelectorAll('input[name="loc-tinh-nang"]')
      .forEach((input) => {
        input.addEventListener("change", () => {
          const arr = [];
          document
            .querySelectorAll('input[name="loc-tinh-nang"]:checked')
            .forEach((c) => arr.push(c.value));
          trangThai.tinhNang = arr;
          renderDanhSach();
        });
      });

    const selectSapXep = document.getElementById("lua-chon-sap-xep");
    if (selectSapXep) {
      selectSapXep.addEventListener("change", (e) => {
        trangThai.sapXep = e.target.value;
        renderDanhSach();
      });
    }

    const btnXemLuoi = document.getElementById("nut-xem-luoi");
    const btnXemDS = document.getElementById("nut-xem-danh-sach");
    if (btnXemLuoi && btnXemDS) {
      btnXemLuoi.addEventListener("click", () => {
        trangThai.cheDoXem = "luoi";
        btnXemLuoi.classList.add("active");
        btnXemDS.classList.remove("active");
        renderDanhSach();
      });

      btnXemDS.addEventListener("click", () => {
        trangThai.cheDoXem = "danh-sach";
        btnXemDS.classList.add("active");
        btnXemLuoi.classList.remove("active");
        renderDanhSach();
      });
    }

    const btnXoaLoc = document.getElementById("nut-xoa-loc");
    if (btnXoaLoc) {
      btnXoaLoc.addEventListener("click", xoaTatCaBoLoc);
    }

    const btnMoMobile = document.getElementById("nut-mo-loc-mobile");
    const sidebar = document.querySelector(".cot-bo-loc");
    let manChe = document.querySelector(".man-che-loc");
    if (!manChe) {
      manChe = document.createElement("div");
      manChe.className = "man-che-loc";
      document.body.appendChild(manChe);
    }

    if (btnMoMobile && sidebar) {
      btnMoMobile.addEventListener("click", () => {
        sidebar.classList.add("mo-mobile");
        manChe.classList.add("hien");
      });

      manChe.addEventListener("click", () => {
        sidebar.classList.remove("mo-mobile");
        manChe.classList.remove("hien");
      });
    }
  }

  function dongBoFormBoLoc() {
    document.querySelectorAll(".chip-hang").forEach((chip) => {
      chip.classList.toggle(
        "active",
        chip.getAttribute("data-hang").toLowerCase() ===
          trangThai.hang.toLowerCase()
      );
    });

    document
      .querySelectorAll('input[name="loc-danh-muc"]')
      .forEach((input) => {
        input.checked = input.value === trangThai.danhMuc;
      });

    document.querySelectorAll('input[name="loc-hang"]').forEach((input) => {
      input.checked = input.value.toLowerCase() === trangThai.hang.toLowerCase();
    });

    document.querySelectorAll('input[name="loc-gia"]').forEach((input) => {
      input.checked = input.value === trangThai.khoangGia;
    });

    document
      .querySelectorAll('input[name="loc-tinh-nang"]')
      .forEach((input) => {
        input.checked = trangThai.tinhNang.includes(input.value);
      });
  }

  function xoaTatCaBoLoc() {
    trangThai.danhMuc = "tatca";
    trangThai.hang = "tatca";
    trangThai.loaiPhuKien = "tatca";
    trangThai.khoangGia = "tatca";
    trangThai.giaMinTuyChinh = null;
    trangThai.giaMaxTuyChinh = null;
    trangThai.tinhNang = [];
    trangThai.tuKhoa = "";
    trangThai.sapXep = "mac-dinh";
    trangThai.trangHienTai = 1;

    const minInput = document.getElementById("gia-min-input");
    const maxInput = document.getElementById("gia-max-input");
    if (minInput) minInput.value = "";
    if (maxInput) maxInput.value = "";

    const oTim = document.getElementById("o-tim-kiem-input");
    if (oTim) oTim.value = "";

    const selectSapXep = document.getElementById("lua-chon-sap-xep");
    if (selectSapXep) selectSapXep.value = "mac-dinh";

    dongBoFormBoLoc();
    renderDanhSach();
    hienToast("Đã đặt lại tất cả bộ lọc", "ok");
  }

  function khoiTaoTrang() {
    docThamSoURL();
    khoiTaoBoLoc();
    dongBoFormBoLoc();
    renderDanhSach();
    capNhatBadge();

    const idSanPham = new URLSearchParams(window.location.search).get("id");
    if (idSanPham) {
      const spCanMo = DANH_SACH_SAN_PHAM.find((sp) => sp.id === idSanPham);
      if (spCanMo) {
        window.setTimeout(() => moModalXemNhanh(spCanMo), 0);
      }
    }

    window.addEventListener("storage", (e) => {
      if (e.key === STORAGE_GIO_HANG) {
        capNhatBadge();
      }
    });

    window.addEventListener("n1:yeu-thich", () => {
      document
        .querySelectorAll("[data-thich]")
        .forEach((b) => veTimDaThich(b, laYeuThich(b.getAttribute("data-thich"))));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", khoiTaoTrang);
  } else {
    khoiTaoTrang();
  }
})();

