(function () {
  'use strict';

  const articles = [
    {
      id: 1,
      featured: true,
      category: 'Đánh giá',
      title: 'Đánh giá chi tiết iPhone mới: Liệu có đáng để nâng cấp?',
      desc: 'Phân tích camera, hiệu năng A-series, thời lượng pin và giá bán để giúp bạn quyết định có nên đổi máy cũ lấy iPhone đời mới.',
      date: '2026-10-18',
      readTime: 10,
      views: 18640,
      icon: '📱',
      color: '#dbeafe',
      sections: [
        {
          h2: 'Những điểm nổi bật của thế hệ mới',
          html:
            '<p>iPhone mới mang đến chip xử lý mạnh hơn, camera cải tiến rõ rệt và thời lượng pin ổn định hơn so với thế hệ trước. Thiết kế vẫn giữ khung nhôm/thép quen thuộc, nhưng màn hình sáng hơn và hỗ trợ tần số quét cao giúp cuộn mượt khi xem mạng xã hội hay chơi game.</p>' +
            '<p>Điểm cộng lớn nhất nằm ở phần mềm: hệ điều hành được tối ưu sâu, cập nhật bảo mật dài hạn và hệ sinh thái phụ kiện MagSafe, AirPods vẫn đồng bộ mượt.</p>',
        },
        {
          h2: 'Camera và trải nghiệm chụp ảnh',
          html:
            '<p>Cảm biến chính và tele được nâng cấp, chụp đêm sạch nhiễu hơn, zoom quang học giữ chi tiết tốt trong điều kiện ánh sáng vừa phải. Video ổn định hơn nhờ chống rung điện tử kết hợp quang học.</p>' +
            '<ul><li>Chế độ Portrait xử lý nền tự nhiên hơn, ít “cắt tóc” hơn đời cũ.</li><li>Quay 4K ổn định, phù hợp quay vlog hoặc nội dung mạng xã hội.</li><li>Chụp macro và siêu rộng vẫn là điểm mạnh khi đi du lịch.</li></ul>',
        },
        {
          h2: 'Hiệu năng, pin và nhiệt độ',
          html:
            '<p>Chip A-series mới dư sức cho hầu hết nhu cầu: chơi game nặng, chỉnh video 4K, đa nhiệm nhiều tab. Trong thực tế, máy ít nóng hơn khi sạc nhanh và chơi game dài, nhờ tối ưu phần mềm và khung tản nhiệt.</p>' +
            '<p>Pin dùng một ngày đầy đủ với mức sử dụng trung bình (mạng xã hội, gọi điện, xem video). Nếu bạn dùng liên tục từ sáng đến tối muộn, sạc một lần vào buổi tối là đủ.</p>',
        },
        {
          h2: 'Có nên nâng cấp từ đời cũ?',
          html:
            '<p><strong>Nên cân nhắc nâng cấp nếu:</strong> bạn đang dùng iPhone từ 3–4 năm trước, camera kém trong điều kiện thiếu sáng, hoặc cần hiệu năng ổn định cho công việc/media.</p>' +
            '<p><strong>Có thể chờ thêm nếu:</strong> máy hiện tại vẫn mượt, pin còn trên 85%, và ngân sách đang ưu tiên phụ kiện hoặc laptop.</p>' +
            '<p>Tại N1 Mobile, chương trình thu cũ – lên đời thường giúp giảm đáng kể chi phí đổi máy. Bạn nên mang máy đến cửa hàng để được định giá và so sánh chênh lệch thực tế.</p>',
        },
      ],
      endNote:
        'Cần tư vấn cấu hình hoặc chương trình thu cũ? Liên hệ hotline hoặc ghé N1 Mobile để được hỗ trợ trực tiếp.',
    },
    {
      id: 2,
      category: 'Củ/Cáp sạc',
      title: 'Top 5 củ sạc nhanh GaN chuẩn PD đáng mua nhất hiện nay',
      desc: 'Tổng hợp các củ sạc GaN 30W–65W hỗ trợ Power Delivery, nhỏ gọn, ít nóng và an toàn cho iPhone, Samsung lẫn laptop mỏng.',
      date: '2026-10-16',
      readTime: 8,
      views: 15220,
      icon: '🔌',
      color: '#fde68a',
      sections: [
        {
          h2: 'Vì sao nên chọn củ sạc GaN chuẩn PD?',
          html:
            '<p>Công nghệ GaN (Gallium Nitride) giúp củ sạc nhỏ hơn, nóng ít hơn so với củ silicon truyền thống cùng công suất. Chuẩn USB Power Delivery (PD) tương thích rộng với iPhone, iPad, laptop USB-C và nhiều máy Android hỗ trợ sạc nhanh.</p>' +
            '<p>Khi mua, hãy ưu tiên củ có chứng nhận an toàn, nhiều cổng (nếu cần sạc đồng thời) và công suất phù hợp thiết bị lớn nhất bạn dùng.</p>',
        },
        {
          h2: 'Tiêu chí chọn củ sạc trong danh sách',
          html:
            '<ul>' +
            '<li><strong>Công suất:</strong> 30W đủ cho điện thoại; 45–65W phù hợp laptop mỏng và sạc nhiều thiết bị.</li>' +
            '<li><strong>Chuẩn PD / PPS:</strong> sạc nhanh ổn định trên iPhone và Samsung.</li>' +
            '<li><strong>Kích thước &amp; nhiệt:</strong> GaN giúp củ gọn, ít nóng khi sạc lâu.</li>' +
            '<li><strong>Bảo vệ:</strong> chống quá dòng, quá áp, ngắn mạch.</li>' +
            '</ul>',
        },
        {
          h2: 'Gợi ý 5 nhóm củ sạc đáng cân nhắc',
          html:
            '<p><strong>1. Củ 30W 1 cổng PD</strong> – Nhỏ gọn, đủ sạc nhanh iPhone/Android, dễ mang theo.</p>' +
            '<p><strong>2. Củ 45W 2 cổng</strong> – Sạc điện thoại + tai nghe/pin dự phòng cùng lúc.</p>' +
            '<p><strong>3. Củ 65W GaN 2–3 cổng</strong> – Phù hợp laptop USB-C và điện thoại; một củ cho cả nhà.</p>' +
            '<p><strong>4. Củ mini 20–25W</strong> – Giá mềm, đủ dùng hàng ngày nếu bạn không cần sạc siêu nhanh.</p>' +
            '<p><strong>5. Bộ củ + cáp PD chính hãng / uy tín</strong> – Tránh chai pin do cáp kém chất lượng; nên dùng cáp đạt chuẩn PD.</p>',
        },
        {
          h2: 'Lưu ý khi sử dụng',
          html:
            '<p>Không dùng củ công suất quá thấp kéo dài (sạc chậm, nóng máy). Tránh cắm củ trên ổ điện ẩm hoặc dùng kèm ổ chia kém chất lượng. Nếu củ có mùi khét, nóng bất thường hoặc vỏ phồng, ngừng dùng ngay.</p>' +
            '<p>Tại N1 Mobile, các củ sạc GaN chính hãng được bảo hành rõ ràng và hỗ trợ đổi trả theo chính sách cửa hàng.</p>',
        },
      ],
      endNote:
        'Cần chọn củ sạc theo máy cụ thể (iPhone, Samsung, laptop)? Nhân viên N1 Mobile sẽ tư vấn công suất và chuẩn phù hợp.',
    },
    {
      id: 3,
      category: 'Tai nghe',
      title: 'Hướng dẫn chọn tai nghe AirPods phù hợp với nhu cầu',
      desc: 'So sánh AirPods, AirPods Pro và các dòng liên quan theo chống ồn, pin, cảm biến và ngân sách để chọn đúng mẫu.',
      date: '2026-10-14',
      readTime: 7,
      views: 12890,
      icon: '🎧',
      color: '#e9d5ff',
      sections: [
        {
          h2: 'Xác định nhu cầu trước khi chọn',
          html:
            '<p>AirPods phù hợp người dùng iPhone nhờ kết nối nhanh, chuyển thiết bị mượt và tích hợp Siri. Trước khi mua, hãy trả lời: bạn cần chống ồn không? Nghe nhạc bao lâu mỗi ngày? Có hay tập gym / đi máy bay?</p>' +
            '<ul>' +
            '<li><strong>Nghe nhạc, gọi điện cơ bản:</strong> dòng AirPods tiêu chuẩn thường đủ.</li>' +
            '<li><strong>Đi tàu xe, máy bay, văn phòng ồn:</strong> ưu tiên bản Pro có chống ồn chủ động (ANC).</li>' +
            '<li><strong>Tập thể thao:</strong> chọn mẫu có fit chắc, kháng nước/mồ hôi tốt.</li>' +
            '</ul>',
        },
        {
          h2: 'So sánh nhanh các dòng phổ biến',
          html:
            '<p><strong>AirPods (bản tiêu chuẩn):</strong> thiết kế open-ear, đeo lâu ít bí, kết nối nhanh với iPhone. Không có chống ồn chủ động mạnh như Pro.</p>' +
            '<p><strong>AirPods Pro:</strong> nút silicon thay được, chống ồn ANC, xuyên âm (Transparency), chất âm chi tiết hơn. Phù hợp môi trường ồn và người muốn cách âm.</p>' +
            '<p><strong>Các bản cao cấp hơn (Max / phiên bản sau):</strong> pin lâu, chống ồn mạnh, đeo over-ear – phù hợp nghe lâu tại nhà hoặc làm việc.</p>',
        },
        {
          h2: 'Pin, kết nối và phụ kiện',
          html:
            '<p>Hộp sạc quyết định tổng thời lượng dùng trong ngày. Nên kiểm tra hỗ trợ sạc MagSafe / USB-C tùy đời máy. Kết nối multipoint hoặc chuyển nhanh giữa iPhone – Mac – iPad là lợi thế lớn của hệ Apple.</p>' +
            '<p>Nên mua kèm case bảo vệ hộp sạc và tránh để hộp nơi ẩm, nóng. Thay nút tai (với Pro) đúng size giúp chống ồn và bass tốt hơn.</p>',
        },
        {
          h2: 'Gợi ý theo ngân sách',
          html:
            '<p>Nếu ngân sách hạn chế và chủ yếu nghe nhạc + gọi điện trên iPhone: bản AirPods tiêu chuẩn là lựa chọn hợp lý. Nếu thường xuyên di chuyển nơi ồn hoặc muốn trải nghiệm “đóng” hơn: AirPods Pro đáng đầu tư hơn.</p>' +
            '<p>N1 Mobile cung cấp hàng chính hãng, bảo hành rõ ràng và hỗ trợ kiểm tra máy trước khi mua.</p>',
        },
      ],
      endNote:
        'Bạn đang phân vân giữa hai mẫu AirPods? Mang iPhone đến N1 Mobile để thử đeo và nghe trực tiếp trước khi quyết định.',
    },
    {
      id: 4,
      category: 'Củ/Cáp sạc',
      title: 'Cách chọn cáp sạc Type-C không làm chai pin điện thoại',
      desc: 'Cáp kém chất lượng có thể làm sạc chậm, nóng máy và giảm tuổi thọ pin. Đây là các dấu hiệu nhận biết cáp tốt.',
      date: '2026-10-11',
      readTime: 5,
      views: 9730,
      icon: '🔌',
      color: '#fed7aa',
      sections: [
        {
          h2: 'Vì sao cáp ảnh hưởng đến pin?',
          html:
            '<p>Cáp không đạt chuẩn có thể gây sụt áp, nhiễu tín hiệu đàm phán công suất giữa máy và củ sạc. Hệ quả là sạc chậm, máy nóng hơn mức cần thiết và chu kỳ pin bị ảnh hưởng lâu dài.</p>',
        },
        {
          h2: 'Dấu hiệu cáp Type-C đáng tin',
          html:
            '<ul>' +
            '<li>Hỗ trợ đúng chuẩn USB-IF / PD nếu bạn sạc nhanh.</li>' +
            '<li>Đầu cắm chắc, không lỏng sau vài tuần dùng.</li>' +
            '<li>Dây bọc bền, không gãy gập ngay gần đầu cắm.</li>' +
            '<li>Truyền dữ liệu ổn định (nếu cáp hỗ trợ data), không chỉ sạc.</li>' +
            '</ul>',
        },
        {
          h2: 'Mẹo sử dụng lâu bền',
          html:
            '<p>Tránh bẻ gập 90 độ sát đầu cắm, không rút cáp bằng cách giật dây. Khi sạc qua đêm, ưu tiên củ công suất phù hợp và mặt phẳng thoáng khí. Thay cáp ngay khi thấy lớp vỏ nứt hoặc đầu cắm bị oxy hóa.</p>',
        },
      ],
      endNote: 'N1 Mobile có sẵn cáp Type-C chính hãng và chuẩn PD, bảo hành đổi mới theo chính sách cửa hàng.',
    },
    {
      id: 5,
      category: 'Ốp lưng',
      title: 'Ốp lưng chống sốc: loại nào bảo vệ máy tốt nhất?',
      desc: 'So sánh ốp cứng, ốp dẻo và ốp hybrid chống sốc để chọn theo thói quen mang máy hàng ngày.',
      date: '2026-10-08',
      readTime: 6,
      views: 7215,
      icon: '📱',
      color: '#fbcfe8',
      sections: [
        {
          h2: 'Các loại ốp phổ biến',
          html:
            '<p><strong>Ốp dẻo (TPU):</strong> ôm sát, chống trầy tốt, giá mềm nhưng chống sốc góc hạn chế.</p>' +
            '<p><strong>Ốp cứng (PC):</strong> giữ form máy, ít ố vàng, chống sốc trung bình.</p>' +
            '<p><strong>Ốp hybrid / chống sốc:</strong> kết hợp TPU + khung cứng, góc gia cố – phù hợp người hay làm rơi máy.</p>',
        },
        {
          h2: 'Tiêu chí chọn',
          html:
            '<ul>' +
            '<li>Độ dày góc và viền camera.</li>' +
            '<li>Hỗ trợ sạc không dây / MagSafe nếu bạn dùng.</li>' +
            '<li>Lỗ loa, mic không bị che.</li>' +
            '<li>Chất liệu khó ố vàng theo thời gian.</li>' +
            '</ul>',
        },
      ],
      endNote: 'Đến N1 Mobile để thử ốp trên đúng model máy của bạn trước khi mua.',
    },
    {
      id: 6,
      category: 'Pin dự phòng',
      title: 'Mang pin dự phòng lên máy bay: quy định cần biết',
      desc: 'Dung lượng tối đa được phép mang theo hành lý xách tay và cách xếp để qua cửa an ninh thuận lợi.',
      date: '2026-10-05',
      readTime: 5,
      views: 11260,
      icon: '🔋',
      color: '#bbf7d0',
      sections: [
        {
          h2: 'Quy định chung',
          html:
            '<p>Pin dự phòng thường phải để trong hành lý xách tay, không ký gửi. Dung lượng phổ biến được chấp nhận dưới khoảng 100Wh; trên mức đó có thể cần xin phép hãng bay. Luôn kiểm tra quy định cụ thể của hãng trước chuyến đi.</p>',
        },
        {
          h2: 'Mẹo thực tế',
          html:
            '<ul>' +
            '<li>Chọn pin có ghi rõ mAh / Wh trên nhãn.</li>' +
            '<li>Không mang pin phồng, trầy nặng hoặc tự chế.</li>' +
            '<li>Để pin dễ lấy khi soi chiếu hành lý.</li>' +
            '</ul>',
        },
      ],
      endNote: 'Cần pin dự phòng đạt chuẩn để đi máy bay? Hỏi nhân viên N1 Mobile để chọn mức dung lượng phù hợp.',
    },
  ];


  const $ = (sel) => document.querySelector(sel);
  const viewList = $('#tt-view-list');
  const viewDetail = $('#tt-view-detail');
  const featuredEl = $('#tt-featured');
  const listEl = $('#tt-list');
  const popularEl = $('#tt-popular');
  const breadcrumbEl = document.querySelector('.tt-breadcrumb');
  const catsEl = $('#tt-cats');
  const searchInput = $('#tt-search');
  const searchXoa = $('#tt-search-xoa');
  const ketQuaEl = $('#tt-ket-qua');
  const rongEl = $('#tt-rong');
  const savedEl = $('#tt-saved');
  const savedRongEl = $('#tt-saved-rong');
  const progressEl = $('#tt-progress');
  const progressBar = $('#tt-progress-bar');

  const CART_KEY = 'gioHang';
  const EMAIL_KEY = 'n1-email-dang-ky';
  const SAVED_KEY = 'n1-tin-da-luu';
  let toastTimer = null;
  let currentCat = 'all';
  let currentQuery = '';
  let progressBound = false;

  const formatViews = (n) => n.toLocaleString('vi-VN') + ' lượt xem';
  function formatDate(iso) {
    const [y, m, d] = iso.split('-');
    return d + '/' + m + '/' + y;
  }
  function readJSON(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem(key));
      return v == null ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }
  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  function loadCart() {
    const c = readJSON(CART_KEY, []);
    return Array.isArray(c) ? c : [];
  }
  function updateBadge() {
    const badge = $('#badge-gio-hang');
    if (!badge) return;
    const total = loadCart().reduce((s, sp) => s + (sp.soLuong || 0), 0);
    badge.textContent = total > 99 ? '99+' : String(total);
    badge.style.display = total > 0 ? 'flex' : 'none';
  }

  function getSaved() {
    const s = readJSON(SAVED_KEY, []);
    return Array.isArray(s) ? s.map(Number) : [];
  }
  function isSaved(id) {
    return getSaved().includes(Number(id));
  }
  function toggleSaved(id) {
    id = Number(id);
    let s = getSaved();
    if (s.includes(id)) s = s.filter((x) => x !== id);
    else s.unshift(id);
    writeJSON(SAVED_KEY, s.slice(0, 20));
    renderSaved();
    return s.includes(id);
  }
  function renderSaved() {
    if (!savedEl) return;
    const ids = getSaved();
    const items = ids
      .map((id) => articles.find((a) => a.id === id))
      .filter(Boolean);
    if (!items.length) {
      savedEl.innerHTML = '';
      if (savedRongEl) savedRongEl.hidden = false;
      return;
    }
    if (savedRongEl) savedRongEl.hidden = true;
    savedEl.innerHTML = items
      .map(
        (a) =>
          '<li><a href="#bai-' +
          a.id +
          '" data-bai="' +
          a.id +
          '">' +
          a.icon +
          ' ' +
          a.title +
          '</a></li>'
      )
      .join('');
  }

  function showToast(msg, nhe) {
    let toast = $('#tt-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'tt-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.className = 'tt-toast hien' + (nhe ? ' nhe' : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('hien'), 2200);
  }

  function metaHTML(a) {
    return (
      '<div class="tt-meta">' +
      '<span><i class="fa-regular fa-calendar"></i> <time datetime="' +
      a.date +
      '">' +
      formatDate(a.date) +
      '</time></span>' +
      '<span><i class="fa-regular fa-clock"></i> ' +
      a.readTime +
      ' phút đọc</span>' +
      '<span><i class="fa-regular fa-eye"></i> ' +
      formatViews(a.views) +
      '</span>' +
      '</div>'
    );
  }

  function getCategories() {
    const set = new Set(articles.map((a) => a.category));
    return ['all', ...Array.from(set)];
  }

  function renderCats() {
    if (!catsEl) return;
    const cats = getCategories();
    catsEl.innerHTML = cats
      .map((c) => {
        const label = c === 'all' ? 'Tất cả' : c;
        const active = c === currentCat ? ' active' : '';
        return (
          '<button type="button" class="tt-cat-btn' +
          active +
          '" data-cat="' +
          c +
          '" role="tab" aria-selected="' +
          (c === currentCat) +
          '">' +
          label +
          '</button>'
        );
      })
      .join('');
  }

  function filteredArticles() {
    const q = currentQuery.trim().toLowerCase();
    return articles.filter((a) => {
      if (currentCat !== 'all' && a.category !== currentCat) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.desc.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      );
    });
  }

  function renderFeatured(a) {
    if (!featuredEl || !a) {
      if (featuredEl) featuredEl.innerHTML = '';
      return;
    }
    featuredEl.innerHTML =
      '<a class="tt-featured" href="#bai-' +
      a.id +
      '" data-bai="' +
      a.id +
      '">' +
      '<div class="tt-featured-media" style="background:' +
      a.color +
      '"><span style="font-size:5rem;position:relative;z-index:1">' +
      a.icon +
      '</span></div>' +
      '<div class="tt-featured-caption">' +
      '<span class="tt-tag">NỔI BẬT</span>' +
      '<h2>' +
      a.title +
      '</h2>' +
      '<p>' +
      a.desc +
      '</p>' +
      metaHTML(a) +
      '</div>' +
      '</a>';
  }

  function postHTML(a) {
    return (
      '<a class="tt-post" href="#bai-' +
      a.id +
      '" data-bai="' +
      a.id +
      '">' +
      '<div class="tt-thumb" style="background:' +
      a.color +
      '"><span style="font-size:3rem;position:relative;z-index:1">' +
      a.icon +
      '</span></div>' +
      '<div class="tt-post-body">' +
      '<span class="tt-cat">' +
      a.category +
      '</span>' +
      '<h3 class="tt-post-title">' +
      a.title +
      '</h3>' +
      '<p class="tt-post-desc">' +
      a.desc +
      '</p>' +
      metaHTML(a) +
      '</div>' +
      '</a>'
    );
  }

  function renderPopular() {
    if (!popularEl) return;
    const top = articles.slice().sort((a, b) => b.views - a.views).slice(0, 5);
    popularEl.innerHTML = top
      .map(
        (a, i) =>
          '<li><a href="#bai-' +
          a.id +
          '" data-bai="' +
          a.id +
          '">' +
          '<span class="tt-rank">' +
          (i + 1) +
          '</span>' +
          '<span><span class="tt-popular-title">' +
          a.title +
          '</span>' +
          '<span class="tt-popular-views"><i class="fa-regular fa-eye"></i> ' +
          formatViews(a.views) +
          '</span></span>' +
          '</a></li>'
      )
      .join('');
  }

  function renderList() {
    const ds = filteredArticles();
    const isFiltering = currentCat !== 'all' || currentQuery.trim() !== '';

    if (!isFiltering) {
      const noiBat = articles.find((a) => a.featured) || articles[0];
      renderFeatured(noiBat);
      if (featuredEl) featuredEl.hidden = false;
      listEl.innerHTML = articles
        .filter((a) => a !== noiBat)
        .map(postHTML)
        .join('');
      if (ketQuaEl) ketQuaEl.textContent = '';
      if (rongEl) rongEl.hidden = true;
    } else {
      if (featuredEl) {
        featuredEl.innerHTML = '';
        featuredEl.hidden = true;
      }
      listEl.innerHTML = ds.map(postHTML).join('');
      if (ketQuaEl) {
        ketQuaEl.textContent = ds.length ? '(' + ds.length + ' bài)' : '';
      }
      if (rongEl) rongEl.hidden = ds.length > 0;
    }
    renderPopular();
  }

  function setBreadcrumb(article) {
    if (!breadcrumbEl) return;
    if (!article) {
      breadcrumbEl.innerHTML =
        '<a href="index.html"><i class="fa-solid fa-house"></i> Trang chủ</a>' +
        '<i class="fa-solid fa-chevron-right"></i>' +
        '<strong>Tin tức</strong>';
      return;
    }
    breadcrumbEl.innerHTML =
      '<a href="index.html"><i class="fa-solid fa-house"></i> Trang chủ</a>' +
      '<i class="fa-solid fa-chevron-right"></i>' +
      '<a href="tintuc.html" id="tt-bc-list">Tin tức</a>' +
      '<i class="fa-solid fa-chevron-right"></i>' +
      '<strong>' +
      article.category +
      '</strong>';
  }

  function sectionsHTML(a) {
    return (a.sections || [])
      .map(
        (s) =>
          '<section class="tt-article-section">' +
          '<h2>' +
          s.h2 +
          '</h2>' +
          s.html +
          '</section>'
      )
      .join('');
  }

  function relatedHTML(a) {
    const related = articles
      .filter((x) => x.id !== a.id && x.category === a.category)
      .slice(0, 3);
    if (!related.length) {
      const others = articles.filter((x) => x.id !== a.id).slice(0, 3);
      if (!others.length) return '';
      return relatedBlock(others);
    }
    return relatedBlock(related);
  }

  function relatedBlock(list) {
    return (
      '<div class="tt-related-block">' +
      '<h3><i class="fa-solid fa-book-open"></i> Bài viết liên quan</h3>' +
      '<div class="tt-related-list">' +
      list
        .map(
          (x) =>
            '<a class="tt-related-item" href="#bai-' +
            x.id +
            '" data-bai="' +
            x.id +
            '">' +
            '<div class="tt-related-icon" style="background:' +
            x.color +
            '">' +
            x.icon +
            '</div>' +
            '<div><strong>' +
            x.title +
            '</strong><span>' +
            x.category +
            ' · ' +
            x.readTime +
            ' phút đọc</span></div>' +
            '</a>'
        )
        .join('') +
      '</div></div>'
    );
  }

  function updateProgress() {
    if (!progressBar || !viewDetail || viewDetail.hidden) return;
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const pct = height > 0 ? Math.min(100, Math.round((scrollTop / height) * 100)) : 0;
    progressBar.style.width = pct + '%';
  }

  function bindProgress(on) {
    if (on && !progressBound) {
      window.addEventListener('scroll', updateProgress, { passive: true });
      progressBound = true;
    }
    if (!on && progressBound) {
      window.removeEventListener('scroll', updateProgress);
      progressBound = false;
    }
    if (progressEl) progressEl.hidden = !on;
    if (progressBar) progressBar.style.width = '0%';
    if (on) updateProgress();
  }

  function showDetail(id) {
    const a = articles.find((x) => x.id === Number(id));
    if (!a) {
      showList();
      return;
    }

    const saved = isSaved(a.id);

    viewDetail.innerHTML =
      '<a href="tintuc.html" class="tt-back-link" id="tt-back">' +
      '<i class="fa-solid fa-arrow-left"></i> Quay lại danh sách tin</a>' +
      '<header class="tt-article-header">' +
      '<span class="tt-cat">' +
      a.category +
      '</span>' +
      '<h1>' +
      a.title +
      '</h1>' +
      '<p class="tt-article-intro">' +
      a.desc +
      '</p>' +
      metaHTML(a) +
      '<div class="tt-actions">' +
      '<button type="button" class="tt-action-btn' +
      (saved ? ' da-luu' : '') +
      '" id="tt-btn-luu" data-id="' +
      a.id +
      '">' +
      '<i class="fa-solid fa-bookmark"></i> <span>' +
      (saved ? 'Đã lưu' : 'Lưu bài') +
      '</span></button>' +
      '<button type="button" class="tt-action-btn" id="tt-btn-chia-se">' +
      '<i class="fa-solid fa-link"></i> <span>Sao chép link</span></button>' +
      '</div>' +
      '</header>' +
      '<div class="tt-article-hero" style="background:' +
      a.color +
      '"><span>' +
      a.icon +
      '</span></div>' +
      '<div class="tt-article-content">' +
      sectionsHTML(a) +
      '<div class="tt-article-end">' +
      '<strong>Kết luận</strong>' +
      '<p>' +
      (a.endNote || '') +
      '</p>' +
      '<a href="danhmuc.html"><i class="fa-solid fa-store"></i> Xem sản phẩm tại N1 Mobile</a>' +
      '</div>' +
      relatedHTML(a) +
      '</div>';

    viewList.hidden = true;
    viewDetail.hidden = false;
    setBreadcrumb(a);
    bindProgress(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const back = $('#tt-back');
    if (back) {
      back.addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState(null, '', 'tintuc.html');
        showList();
      });
    }
    const bc = $('#tt-bc-list');
    if (bc) {
      bc.addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState(null, '', 'tintuc.html');
        showList();
      });
    }

    const btnLuu = $('#tt-btn-luu');
    if (btnLuu) {
      btnLuu.addEventListener('click', () => {
        const now = toggleSaved(a.id);
        btnLuu.classList.toggle('da-luu', now);
        btnLuu.querySelector('span').textContent = now ? 'Đã lưu' : 'Lưu bài';
        showToast(now ? 'Đã lưu bài viết' : 'Đã bỏ lưu', true);
      });
    }
    const btnShare = $('#tt-btn-chia-se');
    if (btnShare) {
      btnShare.addEventListener('click', async () => {
        const url = location.origin + location.pathname + '#bai-' + a.id;
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(url);
            showToast('Đã sao chép link bài viết');
          } else {
            showToast(url, true);
          }
        } catch (err) {
          showToast('Không thể sao chép. Hãy copy từ thanh địa chỉ.', true);
        }
      });
    }
  }

  function showList() {
    viewDetail.hidden = true;
    viewDetail.innerHTML = '';
    viewList.hidden = false;
    setBreadcrumb(null);
    bindProgress(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openFromHash() {
    const m = location.hash.match(/^#bai-(\d+)$/);
    if (m) showDetail(m[1]);
    else showList();
  }

  if (catsEl) {
    catsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-cat]');
      if (!btn) return;
      currentCat = btn.getAttribute('data-cat');
      renderCats();
      renderList();
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentQuery = searchInput.value;
      if (searchXoa) searchXoa.hidden = !currentQuery;
      renderList();
    });
  }
  if (searchXoa) {
    searchXoa.addEventListener('click', () => {
      searchInput.value = '';
      currentQuery = '';
      searchXoa.hidden = true;
      renderList();
      searchInput.focus();
    });
  }
  
  const formEmail = $('#tt-form-email');
  const inputEmail = $('#tt-email');
  const tbEmail = $('#tt-email-tb');

  function bao(noiDung, loai) {
    if (!tbEmail || !inputEmail) return;
    tbEmail.textContent = noiDung || '';
    tbEmail.className = 'thong-bao-form' + (loai ? ' ' + loai : '');
    inputEmail.classList.toggle('input-loi', loai === 'loi');
    inputEmail.classList.toggle('input-ok', loai === 'ok');
    inputEmail.setAttribute('aria-invalid', loai === 'loi' ? 'true' : 'false');
  }
  function kiemTraEmail(giaTri) {
    const email = giaTri.trim();
    if (!email) return { hopLe: false, loi: 'Vui lòng nhập email của bạn.' };
    if (/\s/.test(email)) return { hopLe: false, loi: 'Email không được chứa khoảng trắng.' };
    const mau = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
    if (email.length > 254 || email.includes('..') || !mau.test(email)) {
      return { hopLe: false, loi: 'Email không hợp lệ. Ví dụ: tenban@gmail.com' };
    }
    return { hopLe: true, giaTri: email.toLowerCase() };
  }

  if (formEmail && inputEmail && tbEmail) {
    formEmail.addEventListener('submit', (e) => {
      e.preventDefault();
      const kq = kiemTraEmail(inputEmail.value);
      if (!kq.hopLe) {
        bao(kq.loi, 'loi');
        inputEmail.focus();
        return;
      }
      const ds = readJSON(EMAIL_KEY, []);
      const danhSach = Array.isArray(ds) ? ds : [];
      if (danhSach.includes(kq.giaTri)) {
        bao('Email này đã đăng ký nhận tin rồi.', 'ok');
        return;
      }
      danhSach.push(kq.giaTri);
      writeJSON(EMAIL_KEY, danhSach);
      formEmail.reset();
      bao('Đăng ký thành công! Hãy kiểm tra hộp thư của bạn.', 'ok');
    });
    inputEmail.addEventListener('input', () => {
      if (tbEmail.classList.contains('loi')) bao('', '');
    });
  }

  document.addEventListener('click', (e) => {
    const bai = e.target.closest('[data-bai]');
    if (!bai) return;
    e.preventDefault();
    const id = bai.getAttribute('data-bai');
    history.pushState(null, '', '#bai-' + id);
    showDetail(id);
  });

  window.addEventListener('popstate', openFromHash);
  window.addEventListener('hashchange', openFromHash);

  window.addEventListener('storage', (e) => {
    if (e.key === CART_KEY) updateBadge();
    if (e.key === SAVED_KEY) renderSaved();
  });

  renderCats();
  renderList();
  renderSaved();
  updateBadge();
  openFromHash();
})();
