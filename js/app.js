// =========================================================================
    // 1. DEFAULT MENU DATA (NO PORTION GRAMS SHOWN TO CUSTOMERS)
    // =========================================================================
    const __memStore = {};
    function safeGetStorage(key) {
      try { return window.localStorage.getItem(key); } catch { return Object.prototype.hasOwnProperty.call(__memStore, key) ? __memStore[key] : null; }
    }
    function safeSetStorage(key, val) {
      __memStore[key] = String(val);
      try { window.localStorage.setItem(key, val); return true; } catch { return false; }
    }
    function safeRemoveStorage(key) {
      delete __memStore[key];
      try { window.localStorage.removeItem(key); } catch {}
    }
    function safeGetSession(key) {
      try { return window.sessionStorage.getItem(key); } catch { return Object.prototype.hasOwnProperty.call(__memStore, "s_" + key) ? __memStore["s_" + key] : null; }
    }
    function safeSetSession(key, val) {
      __memStore["s_" + key] = String(val);
      try { window.sessionStorage.setItem(key, val); } catch {}
    }
    function safeRemoveSession(key) {
      delete __memStore["s_" + key];
      try { window.sessionStorage.removeItem(key); } catch {}
    }

    const MOTION_CHAPTERS = [
      {
        title: "Bún Thịt Nướng",
        price: 25000,
        unit: "phần",
        id: "bun-thit-nuong",
        texId: "tex-bun-tn",
        image: "assets/images/opt_ed_bun_thit_nuong.jpg",
        desc: "Thịt ba rọi ướp sả tỏi nướng trên lửa than vừa xém cạnh, ăn cùng bún tươi, rau sống lặt sạch, đồ chua nhà làm và đậu phộng rang giòn."
      },
      {
        title: "Bánh Tằm Bì Xíu Mại",
        price: 25000,
        unit: "phần",
        id: "banh-tam-bi-xiu-mai",
        texId: "tex-banh-tam",
        image: "assets/images/opt_ed_banh_tam_bi_xiu_mai.jpg",
        desc: "Sợi bánh tằm mềm dẻo chan nước cốt dừa thắng béo mặn ngọt, ăn kèm bì heo trộn thính thơm bùi, viên xíu mại mềm ngọt và nước mắm tỏi ớt."
      },
      {
        title: "Bánh Hỏi Thịt Nướng",
        price: 35000,
        unit: "phần",
        id: "banh-hoi-thit-nuong",
        texId: "tex-banh-hoi",
        image: "assets/images/opt_ed_banh_hoi_thit_nuong.jpg",
        desc: "Xấp bánh hỏi mịn thoa lớp mỡ hành xanh óng, dùng kèm thịt ba rọi nướng than thơm phức, đồ chua giòn và nước mắm pha kẹo."
      },
      {
        title: "Bún Bì Thịt Khìa",
        price: 25000,
        unit: "phần",
        id: "bun-bi-thit-khia",
        texId: "tex-bun-ken",
        image: "assets/images/opt_ed_bun_bi_thit_khia.jpg",
        desc: "Thịt heo khìa chậm trong nước dừa tươi mềm ngọt tự nhiên, kết hợp bì thính thơm bùi, bún tươi, rau thơm và nước mắm chua ngọt."
      },
      {
        title: "Bánh Chuối",
        price: 10000,
        unit: "phần",
        id: "banh-chuoi",
        texId: "tex-banh-chuoi",
        image: "assets/images/opt_ed_banh_chuoi.jpg",
        desc: "Chuối sứ chín hấp dẻo mềm màu vàng ươm tự nhiên, cắt miếng vừa ăn, chan nước cốt dừa thắng béo ngậy và rắc mè rang thơm lừng."
      }
    ];

    const DEFAULT_MENU_ITEMS = [
      { id: "bun-thit-nuong", name: "Bún Thịt Nướng", category: "bun", categoryLabel: "Bún", price: 25000, unit: "phần", available: true, image: "assets/images/opt_ed_bun_thit_nuong.jpg", shortDesc: "Thịt ba rọi ướp sả tỏi nướng than thơm phức, ăn cùng bún tươi, rau sống lặt sạch, đồ chua giòn và đậu phộng rang." },
      { id: "banh-tam-bi-xiu-mai", name: "Bánh Tằm Bì Xíu Mại", category: "banh_tam", categoryLabel: "Bánh tằm", price: 25000, unit: "phần", available: true, image: "assets/images/opt_ed_banh_tam_bi_xiu_mai.jpg", shortDesc: "Sợi bánh tằm mềm dẻo chan nước cốt dừa thắng béo dịu, ăn kèm bì thính, viên xíu mại mềm ngọt và nước mắm tỏi ớt." },
      { id: "bun-bi-thit-khia", name: "Bún Bì Thịt Khìa", category: "bun", categoryLabel: "Bún", price: 25000, unit: "phần", available: true, image: "assets/images/opt_ed_bun_bi_thit_khia.jpg", shortDesc: "Thịt heo khìa nước dừa tươi mềm thấm vị, trộn cùng bì thính thơm bùi, rau thơm, đồ chua và nước mắm pha kẹo." },
      { id: "banh-hoi-thit-khia", name: "Bánh Hỏi Thịt Khìa", category: "banh_hoi", categoryLabel: "Bánh hỏi", price: 35000, unit: "phần", available: true, image: "assets/images/opt_ed_banh_hoi_thit_khia.jpg", shortDesc: "Xấp bánh hỏi mịn thoa mỡ hành xanh óng, ăn kèm thịt khìa nước dừa mềm ngọt, rau sống và nước mắm chua ngọt." },
      { id: "banh-hoi-thit-nuong", name: "Bánh Hỏi Thịt Nướng", category: "banh_hoi", categoryLabel: "Bánh hỏi", price: 35000, unit: "phần", available: true, image: "assets/images/opt_ed_banh_hoi_thit_nuong.jpg", shortDesc: "Bánh hỏi thoa mỡ hành thơm dịu, dùng kèm thịt ba rọi nướng lửa than vàng ươm, đồ chua giòn và nước mắm pha." },
      { id: "bun-thit-xao", name: "Bún Thịt Xào", category: "bun", categoryLabel: "Bún", price: 25000, unit: "phần", available: true, image: "assets/images/opt_ed_bun_thit_xao.jpg", shortDesc: "Thịt ba rọi xào sả hành nóng hổi trên lửa lớn cho dậy mùi thơm, xếp lên tô bún tươi đầy rau sống, giá giòn và đậu phộng." },
      { id: "bun-cha-gio", name: "Bún Chả Giò", category: "bun", categoryLabel: "Bún", price: 25000, unit: "phần", available: true, image: "assets/images/opt_ed_bun_cha_gio.jpg", shortDesc: "Chả giò cuốn nhân thịt khoai môn chiên vàng giòn rụm, ăn cùng bún tươi, rau sống, đồ chua và nước mắm chua ngọt." },
      { id: "banh-bo", name: "Bánh Bò", category: "banh_dan_gian", categoryLabel: "Bánh dân gian", price: 10000, unit: "phần", available: true, image: "assets/images/opt_ed_banh_bo.jpg", shortDesc: "Bánh bò hấp rễ tre bông xốp, vị ngọt thanh không gắt, chấm hoặc chan ngập nước cốt dừa thắng béo kèm mè rang." },
      { id: "banh-chuoi", name: "Bánh Chuối", category: "banh_dan_gian", categoryLabel: "Bánh dân gian", price: 10000, unit: "phần", available: true, image: "assets/images/opt_ed_banh_chuoi.jpg", shortDesc: "Chuối sứ chín hấp dẻo thơm, cắt miếng vừa ăn, chan nước cốt dừa thắng mặn ngọt và rắc mè vàng thơm bùi." }
    ];


    // 34 Đơn vị hành chính cấp tỉnh Việt Nam (Nghị quyết 202/2025/QH15)
    const VN_34_PROVINCES = [
      "TP. Cần Thơ", "TP. Hồ Chí Minh", "TP. Hà Nội", "TP. Hải Phòng", "TP. Huế", "TP. Đà Nẵng",
      "An Giang", "Bắc Ninh", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Điện Biên", "Đồng Nai", "Đồng Tháp",
      "Gia Lai", "Hà Tĩnh", "Hưng Yên", "Khánh Hòa", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai",
      "Nghệ An", "Ninh Bình", "Phú Thọ", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sơn La",
      "Tây Ninh", "Thái Nguyên", "Thanh Hóa", "Tuyên Quang", "Vĩnh Long"
    ];

    // 103 Phường / Xã của TP. Cần Thơ mới (Nghị quyết 1668/NQ-UBTVQH15)
    const CAN_THO_103_WARDS = [
      "Phường Bình Thủy", "Phường Ninh Kiều", "Phường Cái Khế", "Phường Tân An", "Phường An Bình",
      "Phường Thới An Đông", "Phường Long Tuyền", "Phường Cái Răng", "Phường Hưng Phú", "Phường Ô Môn",
      "Phường Phước Thới", "Phường Thới Long", "Phường Trung Nhứt", "Phường Thuận Hưng", "Phường Thốt Nốt",
      "Phường Tân Lộc", "Phường Vị Thanh", "Phường Vị Tân", "Phường Long Bình", "Phường Long Mỹ",
      "Phường Long Phú 1", "Phường Đại Thành", "Phường Ngã Bảy", "Phường Phú Lợi", "Phường Sóc Trăng",
      "Phường Mỹ Xuyên", "Phường Vĩnh Phước", "Phường Vĩnh Châu", "Phường Khánh Hòa", "Phường Ngã Năm",
      "Phường Mỹ Quới", "Xã Phong Điền", "Xã Nhơn Ái", "Xã Trường Long", "Xã Thới Lai",
      "Xã Đông Thuận", "Xã Trường Xuân", "Xã Trường Thành", "Xã Cờ Đỏ", "Xã Đông Hiệp",
      "Xã Trung Hưng", "Xã Thạnh Phú", "Xã Thới Hưng", "Xã Vĩnh Thạnh", "Xã Vĩnh Trinh",
      "Xã Thạnh An", "Xã Thạnh Quới", "Xã Hỏa Lựu", "Xã Vị Thủy", "Xã Vĩnh Thuận Đông",
      "Xã Vị Thanh 1", "Xã Vĩnh Tường", "Xã Vĩnh Viễn", "Xã Xà Phiên", "Xã Lương Tâm",
      "Xã Thạnh Xuân", "Xã Tân Hòa", "Xã Trường Long Tây", "Xã Châu Thành", "Xã Đông Phước",
      "Xã Phú Hữu", "Xã Tân Bình", "Xã Hòa An", "Xã Phương Bình", "Xã Tân Phước Hưng",
      "Xã Hiệp Hưng", "Xã Phụng Hiệp", "Xã Thạnh Hòa", "Xã Hòa Tú", "Xã Gia Hòa",
      "Xã Nhu Gia", "Xã Ngọc Tố", "Xã Trường Khánh", "Xã Đại Ngãi", "Xã Tân Thạnh",
      "Xã Long Phú", "Xã Nhơn Mỹ", "Xã An Lạc Thôn", "Xã Kế Sách", "Xã Thới An Hội",
      "Xã Đại Hải", "Xã Phú Tâm", "Xã An Ninh", "Xã Thuận Hòa", "Xã Hồ Đắc Kiện",
      "Xã Mỹ Tú", "Xã Long Hưng", "Xã Mỹ Hương", "Xã Tân Long", "Xã Phú Lộc",
      "Xã Vĩnh Lợi", "Xã Lâm Tân", "Xã Thạnh Thới An", "Xã Tài Văn", "Xã Liêu Tú",
      "Xã Lịch Hội Thượng", "Xã Trần Đề", "Xã An Thạnh", "Xã Cù Lao Dung", "Xã Phong Nẫm",
      "Xã Mỹ Phước", "Xã Lai Hòa", "Xã Vĩnh Hải"
    ];

    const DEFAULT_CONTENT = {
      heroTitle: "Món Ngon Bếp Nhà, Đậm Đà Vị Miền Tây",
      heroSubtitle: "Bếp đỏ lửa từ 6 giờ sáng mỗi ngày tại 37 Phạm Ngọc Hưng với bún thịt nướng than, bánh tằm bì xíu mại, bánh hỏi thịt khìa và bánh quê cốt dừa. Bạn chọn món vào giỏ rồi bấm gửi qua Zalo để bếp chuẩn bị liền tay nhé.",
      storyTitle: "Làm Kỹ Từng Phần Ăn Như Nấu Cho Người Nhà",
      storyDesc: "Ở Bếp Nhà Bam, tụi mình chuẩn bị nguyên liệu từ sáng sớm mỗi ngày. Thịt ba rọi ướp sả nướng từng mẻ trên lửa than, thịt khìa rim chậm với nước dừa tươi, còn nước cốt dừa thắng tay để giữ trọn vị béo thơm miền Tây.",
      takeawayTitle: "Gói Ghém Sạch Sẽ, Giao Tới Nơi Vẫn Nóng Giòn",
      takeawayDesc: "Phần ăn mang về được bếp đựng trong tô giấy giữ nhiệt và hộp cài nắp chắc chắn. Nước cốt dừa, nước mắm và rau sống luôn để túi riêng để bún bánh không bị nở hay ỉu khi di chuyển.",
      logoImg: "",
      heroBg: ""
    };

    function getSiteContent() {
      try {
        return { ...DEFAULT_CONTENT, ...(JSON.parse(safeGetStorage("bam_content_v2") || "null") || {}) };
      } catch {
        return { ...DEFAULT_CONTENT };
      }
    }

    function applySiteContentToUI() {
      const c = getSiteContent();
      const setTxt = (id, val) => { const el = document.getElementById(id); if (el && val) el.textContent = val; };
      setTxt("site-hero-title", c.heroTitle);
      setTxt("site-hero-subtitle", c.heroSubtitle);
      setTxt("site-story-title", c.storyTitle);
      setTxt("site-story-desc", c.storyDesc);
      setTxt("site-takeaway-title", c.takeawayTitle);
      setTxt("site-takeaway-desc", c.takeawayDesc);
      if (c.logoImg) { const el = document.getElementById("site-logo-img"); if (el) el.src = c.logoImg; }
      if (c.heroBg) { const el = document.getElementById("site-hero-bg"); if (el) el.src = c.heroBg; }
    }

    let locationSelectorsBound = false;
    function initLocationSelectors() {
      const provSel = document.getElementById("cust-province");
      const wardSel = document.getElementById("cust-ward-select");
      const wardInp = document.getElementById("cust-ward-input");
      const typeSel = document.getElementById("cust-type");
      const locBox = document.getElementById("cust-location-fields");
      if (!provSel || !wardSel) return;

      provSel.innerHTML = VN_34_PROVINCES.map((p) => `<option value="${p}" ${p === "TP. Cần Thơ" ? "selected" : ""}>${p}</option>`).join("");
      wardSel.innerHTML = CAN_THO_103_WARDS.map((w) => `<option value="${w}" ${w === "Phường Bình Thủy" ? "selected" : ""}>${w}</option>`).join("");

      function syncWardMode() {
        const isCanTho = provSel.value === "TP. Cần Thơ";
        wardSel.classList.toggle("hidden", !isCanTho);
        wardInp.classList.toggle("hidden", isCanTho);
      }
      const distSel = document.getElementById("cust-distance-tier");
      if (locationSelectorsBound) return;
      locationSelectorsBound = true;
      provSel.addEventListener("change", () => {
        syncWardMode();
        updateCartTotalsUI();
      });
      syncWardMode();

      wardSel.addEventListener("change", () => {
        const w = wardSel.value;
        if (!distSel) return;
        if (w === "Phường Bình Thủy") distSel.value = "0";
        else if (["Phường Cái Khế", "Phường Ninh Kiều"].includes(w)) distSel.value = "22000";
        else if (["Phường Tân An", "Phường An Bình", "Phường Thới An Đông", "Phường Long Tuyền", "Phường Cái Răng", "Phường Hưng Phú"].includes(w)) distSel.value = "33000";
        else distSel.value = "tbd";
        updateCartTotalsUI();
      });

      distSel?.addEventListener("change", updateCartTotalsUI);

      typeSel?.addEventListener("change", () => {
        locBox.classList.toggle("hidden", typeSel.value === "Ghé quán lấy");
        updateCartTotalsUI();
      });

      document.getElementById("btn-gps-distance")?.addEventListener("click", () => {
        const noteEl = document.getElementById("gps-distance-note");
        if (!navigator.geolocation) {
          showToast("Trình duyệt không hỗ trợ định vị GPS.");
          return;
        }
        if (noteEl) noteEl.textContent = "Đang xác định vị trí của bạn...";
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const straightKm = haversineKm(SHOP_LAT, SHOP_LNG, pos.coords.latitude, pos.coords.longitude);
            const roadKm = straightKm * 1.25;
            const fee = calcCanThoShipFee(roadKm);
            const val = `gps:${roadKm.toFixed(2)}:${fee}`;
            if (distSel) {
              let opt = distSel.querySelector("option[data-gps='1']");
              if (!opt) {
                opt = document.createElement("option");
                opt.setAttribute("data-gps", "1");
                distSel.prepend(opt);
              }
              opt.value = val;
              opt.textContent = fee === 0
                ? `Vị trí GPS: ~${roadKm.toFixed(2)} km (< 1 km) — Miễn phí ship`
                : `Vị trí GPS: ~${roadKm.toFixed(1)} km — ${formatVND(fee)}`;
              distSel.value = val;
            }
            if (noteEl) noteEl.textContent = fee === 0
              ? `Cách quán khoảng ${roadKm.toFixed(2)} km (dưới 1 km) — được miễn phí ship.`
              : `Cách quán khoảng ${roadKm.toFixed(1)} km — phí ship dự kiến ${formatVND(fee)}.`;
            updateCartTotalsUI();
          },
          () => {
            if (noteEl) noteEl.textContent = "Không lấy được GPS. Bạn vui lòng chọn khoảng cách thủ công ở ô trên.";
            showToast("Vui lòng cấp quyền vị trí hoặc chọn khoảng cách thủ công.");
          },
          { enableHighAccuracy: true, timeout: 8000 }
        );
      });
    }

    function readImageAsCompressedDataURL(file, maxW, callback) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const scale = Math.min(1, maxW / img.width);
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(img.width * scale);
          canvas.height = Math.round(img.height * scale);
          canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
          callback(canvas.toDataURL("image/jpeg", 0.82));
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    }

    const DEFAULT_SETTINGS = {
      zaloPhone: "0901724414",
      address: "37 Phạm Ngọc Hưng, Phường Bình Thủy, TP. Cần Thơ",
      hours: "06:00 – 13:30 & 15:00 – 20:00"
    };

    const DEFAULT_ORDERS = [
      {
        id: "BAM-1001",
        createdAt: "18/11/2026 07:45",
        customerName: "Anh Minh",
        customerPhone: "0907 112 334",
        orderType: "Giao tận nơi",
        address: "120 Cách Mạng Tháng 8, Bình Thủy",
        items: [{ name: "Bún Thịt Nướng", qty: 2, price: 25000 }, { name: "Bánh Bò", qty: 1, price: 10000 }],
        total: 60000,
        status: "Hoàn thành"
      },
      {
        id: "BAM-1002",
        createdAt: "18/11/2026 08:20",
        customerName: "Chị Thảo",
        customerPhone: "0939 445 667",
        orderType: "Ghé quán lấy",
        address: "Ghé quán lấy lúc 8h45",
        items: [{ name: "Bánh Tằm Bì Xíu Mại", qty: 2, price: 25000 }, { name: "Bánh Chuối", qty: 3, price: 10000 }],
        total: 80000,
        status: "Đang chuẩn bị"
      }
    ];

    // =========================================================================
    // 2. LOCALSTORAGE SYNC (MENU, ORDERS, SETTINGS, ADMIN AUTH)
    // =========================================================================
    const ADMIN_CREDENTIALS = { id: "adminbam", pass: "BamCanTho@2026" };

    function getSettings() {
      try {
        const saved = JSON.parse(safeGetStorage("bam_settings_v1") || "null");
        return { ...DEFAULT_SETTINGS, ...(saved || {}) };
      } catch {
        return { ...DEFAULT_SETTINGS };
      }
    }

    function getMenuItems() {
      try {
        const overrides = JSON.parse(safeGetStorage("bam_menu_overrides_v2") || "{}");
        return DEFAULT_MENU_ITEMS.map((item) => ({
          ...item,
          ...(overrides[item.id] || {})
        }));
      } catch {
        return DEFAULT_MENU_ITEMS.map((item) => ({ ...item }));
      }
    }

    function getOrders() {
      try {
        const saved = JSON.parse(safeGetStorage("bam_orders_v1") || "null");
        return Array.isArray(saved) ? saved : [...DEFAULT_ORDERS];
      } catch {
        return [...DEFAULT_ORDERS];
      }
    }

    function saveOrders(list) {
      safeSetStorage("bam_orders_v1", JSON.stringify(list));
    }

    function escapeHtml(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }



    const savedTheme = safeGetStorage("bam_theme_v1");
    let savedCart = {};
    try {
      savedCart = JSON.parse(safeGetStorage("bam_cart_v1") || "{}");
    } catch { savedCart = {}; }

    const state = {
      category: "all",
      searchQuery: "",
      darkMode: savedTheme !== null ? savedTheme === "dark" : false,
      cart: savedCart && typeof savedCart === "object" ? savedCart : {}
    };

    function applyThemeState() {
      document.body.classList.toggle("theme-dark", state.darkMode);
      document.documentElement.classList.toggle("dark", state.darkMode);
      const toggleBtn = document.getElementById("theme-toggle");
      const iconEl = document.getElementById("theme-icon");
      if (iconEl) iconEl.textContent = state.darkMode ? "Nền Sáng" : "Nền Tối";
      if (toggleBtn) toggleBtn.setAttribute("aria-pressed", String(state.darkMode));
      try { safeSetStorage("bam_theme_v1", state.darkMode ? "dark" : "light"); } catch {}
    }

    function formatVND(amount) {
      return Number(amount || 0).toLocaleString("vi-VN") + "đ";
    }

    function showToast(msg) {
      const banner = document.getElementById("toast-banner");
      const text = document.getElementById("toast-message");
      if (!banner || !text) return;
      text.textContent = msg;
      banner.classList.remove("hidden");
      if (window._toastTimer) clearTimeout(window._toastTimer);
      window._toastTimer = setTimeout(() => banner.classList.add("hidden"), 2800);
    }

    // =========================================================================
    // 3. THREE.JS 2.5D CURVED PHOTO SHOWCASE (TOUCH-SAFE)
    // =========================================================================
    let scene3dState = {
      autoRotate: true,
      cameraMode: "arc",
      activeSlide: 0,
      slideTimer: 0,
      pointerX: 0,
      pointerY: 0,
      isHeroVisible: true
    };

    function createDishCanvasTexture(renderer, imgEl, chapter) {
      const BASE_W = 720, BASE_H = 540;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const canvas = document.createElement("canvas");
      canvas.width = BASE_W * dpr;
      canvas.height = BASE_H * dpr;
      const ctx = canvas.getContext("2d");

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;

      function renderCardContent() {
        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        ctx.fillStyle = "#18130f";
        ctx.fillRect(0, 0, BASE_W, BASE_H);

        // Draw 4:3 photo at exact 4:3 ratio (672x504) so zero food detail is cropped
        if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
          ctx.drawImage(imgEl, 24, 18, 672, 504);
        } else {
          ctx.fillStyle = "#261d17";
          ctx.fillRect(24, 18, 672, 504);
        }

        // Translucent gradient bar at bottom of photo
        const grad = ctx.createLinearGradient(0, 420, 0, 522);
        grad.addColorStop(0, "rgba(20, 16, 13, 0)");
        grad.addColorStop(0.35, "rgba(20, 16, 13, 0.85)");
        grad.addColorStop(1, "rgba(20, 16, 13, 0.96)");
        ctx.fillStyle = grad;
        ctx.fillRect(24, 420, 672, 102);

        ctx.strokeStyle = "#c89d54";
        ctx.lineWidth = 3;
        ctx.strokeRect(24, 18, 672, 504);

        ctx.fillStyle = "#f4efe6";
        ctx.font = 'bold 28px "Cormorant Garamond", Georgia, serif';
        ctx.fillText(chapter.title, 44, 488, 620);

        ctx.fillStyle = "#c89d54";
        ctx.font = 'bold 22px "Be Vietnam Pro", sans-serif';
        ctx.textAlign = "right";
        ctx.fillText(formatVND(chapter.price), 672, 488);
        ctx.textAlign = "left";

        ctx.restore();
        texture.needsUpdate = true;
      }

      renderCardContent();
      if (imgEl && (!imgEl.complete || imgEl.naturalWidth === 0)) {
        imgEl.addEventListener("load", renderCardContent, { once: true });
      }
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(renderCardContent);
      }
      return texture;
    }

    function createDishCurvedMesh(canvasTexture) {
      const geometry = new THREE.PlaneGeometry(2.55, 1.91, 32, 32);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: canvasTexture },
          uTime: { value: 0 },
          uCurveStrength: { value: 0.16 }
        },
        vertexShader: `
          varying vec2 vUv;
          uniform float uCurveStrength;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(uv.x * 3.14159265) * uCurveStrength;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          uniform sampler2D uTexture;
          void main() {
            gl_FragColor = texture2D(uTexture, vUv);
          }
        `,
        transparent: true
      });
      return new THREE.Mesh(geometry, material);
    }

    function initThreeJSShowcase() {
      const canvas = document.getElementById("hero-3d-canvas");
      if (!canvas || typeof THREE === "undefined") return;

      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      } catch (e) {
        canvas.style.display = "none";
        return;
      }
      canvas.addEventListener("webglcontextlost", (e) => {
        e.preventDefault();
        scene3dState.autoRotate = false;
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0b0908, 0.055);
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.set(0, 0.15, 4.65);

      function resizeRenderer() {
        const parent = canvas.parentElement;
        if (!parent) return;
        const w = parent.clientWidth || 720;
        const h = parent.clientHeight || 440;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      resizeRenderer();
      window.addEventListener("resize", resizeRenderer);

      const heroObserver = new IntersectionObserver(
        (entries) => { scene3dState.isHeroVisible = entries[0]?.isIntersecting ?? true; },
        { threshold: 0.05 }
      );
      heroObserver.observe(canvas);

      scene.add(new THREE.AmbientLight(0xfff5e4, 0.9));
      const galleryGroup = new THREE.Group();
      scene.add(galleryGroup);

      const cardGroups = [];
      const radius = 4.2;

      MOTION_CHAPTERS.forEach((chapter) => {
        const station = new THREE.Group();
        const imgEl = document.getElementById(chapter.texId);
        const cardTex = createDishCanvasTexture(renderer, imgEl, chapter);
        const photoMesh = createDishCurvedMesh(cardTex);
        station.add(photoMesh);
        galleryGroup.add(station);
        cardGroups.push({ station });
      });

      let isPointerDown = false, startX = 0, startY = 0, lastX = 0, gestureAxis = null;
      canvas.addEventListener("pointerdown", (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        isPointerDown = true; gestureAxis = null; startX = lastX = e.clientX; startY = e.clientY;
      }, { passive: true });

      window.addEventListener("pointermove", (e) => {
        if (e.pointerType === "mouse") {
          const rect = canvas.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            scene3dState.pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            scene3dState.pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
          }
        }
        if (!isPointerDown) return;
        const dx = e.clientX - startX, dy = e.clientY - startY;
        if (!gestureAxis) {
          if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
          gestureAxis = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
          if (gestureAxis === "y") { isPointerDown = false; return; }
        }
        if (gestureAxis === "x") lastX = e.clientX;
      }, { passive: true });

      const endDrag = () => {
        if (!isPointerDown) return;
        const totalDx = lastX - startX;
        isPointerDown = false;
        if (gestureAxis === "x" && Math.abs(totalDx) > 40) {
          goToMotionSlide((scene3dState.activeSlide + (totalDx < 0 ? 1 : -1) + MOTION_CHAPTERS.length) % MOTION_CHAPTERS.length);
        }
        gestureAxis = null;
      };
      window.addEventListener("pointerup", endDrag, { passive: true });
      window.addEventListener("pointercancel", endDrag, { passive: true });

      let clockTime = 0, currentCarouselOffset = 0, lastFrameMs = performance.now();
      const progressBar = document.getElementById("motion-progress-bar");
      const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) scene3dState.autoRotate = false;

      function animate(nowMs) {
        requestAnimationFrame(animate);
        const dt = Math.min(0.05, Math.max(0.001, ((nowMs || performance.now()) - lastFrameMs) / 1000));
        lastFrameMs = nowMs || performance.now();
        if (!scene3dState.isHeroVisible || document.hidden) return;

        clockTime += dt;
        if (scene3dState.autoRotate && !isPointerDown) {
          scene3dState.slideTimer += dt;
          if (progressBar) {
            const pct = Math.min(100, ((scene3dState.activeSlide + scene3dState.slideTimer / 5.5) / MOTION_CHAPTERS.length) * 100);
            progressBar.style.width = pct.toFixed(1) + "%";
          }
          if (scene3dState.slideTimer >= 5.5) {
            scene3dState.slideTimer = 0;
            goToMotionSlide((scene3dState.activeSlide + 1) % MOTION_CHAPTERS.length);
          }
        }

        currentCarouselOffset += (scene3dState.activeSlide - currentCarouselOffset) * 0.075;
        cardGroups.forEach((item, idx) => {
          const rel = idx - currentCarouselOffset;
          const theta = rel * 0.62;
          const x = Math.sin(theta) * radius * 0.92;
          const z = Math.cos(theta) * radius - radius + 1.85;
          const y = Math.sin(clockTime * 1.3 + idx) * 0.04;
          item.station.position.set(x, y, z);
          item.station.rotation.y = -theta * 0.85 + scene3dState.pointerX * 0.07;
          item.station.rotation.x = -scene3dState.pointerY * 0.04;
          const scale = Math.max(0.72, 1.12 - Math.abs(rel) * 0.22);
          item.station.scale.setScalar(scale);
        });

        let targetCamZ = scene3dState.cameraMode === "closeup" ? 3.6 : 4.65;
        camera.position.x += (scene3dState.pointerX * 0.3 - camera.position.x) * 0.06;
        camera.position.y += (0.15 - scene3dState.pointerY * 0.2 - camera.position.y) * 0.06;
        camera.position.z += (targetCamZ - camera.position.z) * 0.06;
        camera.lookAt(0, 0.02, 1.2);

        renderer.render(scene, camera);
      }
      animate();
    }

    function goToMotionSlide(index) {
      scene3dState.activeSlide = index;
      scene3dState.slideTimer = 0;
      const chapter = MOTION_CHAPTERS[index];
      if (!chapter) return;

      document.getElementById("scene-focus-badge").textContent = chapter.title;
      document.getElementById("spotlight-price").textContent = `${formatVND(chapter.price)} / ${chapter.unit}`;
      document.getElementById("spotlight-img").src = chapter.image;
      document.getElementById("spotlight-title").textContent = chapter.title;
      document.getElementById("spotlight-desc").textContent = chapter.desc;
      document.getElementById("motion-progress-bar").style.width = (((index + 1) / MOTION_CHAPTERS.length) * 100).toFixed(0) + "%";

      document.querySelectorAll(".motion-tab-btn").forEach((btn, idx) => {
        btn.className = idx === index
          ? "motion-tab-btn text-left p-2 rounded border border-[#c89d54] bg-white/15 transition"
          : "motion-tab-btn text-left p-2 rounded border border-white/10 bg-black/40 hover:bg-white/10 transition";
      });
    }

    // =========================================================================
    // 4. SCROLL-DRIVEN 3D STORYBOARD
    // =========================================================================
    const STORY_LAYERS = [
      { img: "assets/images/opt_poster_exploded.jpg", badge: "Bên Trong Tô Bún Thịt Nướng" },
      { img: "assets/images/opt_ed_bun_bi_thit_khia.jpg", badge: "Thịt Khìa Nước Dừa & Bì Thính" },
      { img: "assets/images/opt_ed_banh_tam_bi_xiu_mai.jpg", badge: "Bánh Tằm Bì Xíu Mại · Nước Cốt Dừa" }
    ];

    function initStoryMotion() {
      const storySection = document.getElementById("story-exploded-section");
      const posterImg = document.getElementById("story-exploded-poster");
      const posterBadge = document.getElementById("story-exploded-badge");
      const posterCard = posterImg ? posterImg.parentElement : null;
      const stepBtns = document.querySelectorAll(".story-step-btn");
      let manualIdx = null;
      let currentShownIdx = 0;

      function applyStoryState(idx, progress) {
        if (posterCard) {
          const tiltX = (4 - progress * 8).toFixed(1);
          const tiltY = (-6 + progress * 12).toFixed(1);
          posterCard.style.transform = `translate3d(0, 0, 24px) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;
        }
        const layer = STORY_LAYERS[idx] || STORY_LAYERS[0];
        if (idx !== currentShownIdx && posterImg && layer) {
          currentShownIdx = idx;
          posterImg.src = layer.img;
          if (posterBadge) posterBadge.textContent = layer.badge;
        }
        stepBtns.forEach((b, bIdx) => b.classList.toggle("is-active", bIdx === idx));
      }

      stepBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          manualIdx = Number(btn.getAttribute("data-story") || 0);
          applyStoryState(manualIdx, 0.25 + manualIdx * 0.35);
        });
      });

      window.addEventListener("scroll", () => {
        if (!storySection) return;
        const rect = storySection.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh * 0.4)));
        const autoIdx = progress < 0.38 ? 0 : progress < 0.68 ? 1 : 2;
        applyStoryState(manualIdx !== null ? manualIdx : autoIdx, progress);
      }, { passive: true });
    }

    // =========================================================================
    // 5. MENU RENDERING (CUSTOMER-FACING, CLEAN, DIRECT ADD TO CART)
    // =========================================================================
    function renderMenuGrid() {
      const grid = document.getElementById("menu-grid");
      if (!grid) return;

      const items = getMenuItems().filter((m) => m.available !== false);
      const categoryLabels = { all: "Tất cả", bun: "Bún", banh_hoi: "Bánh hỏi", banh_tam: "Bánh tằm", banh_dan_gian: "Bánh dân gian" };
  const categoryCounts = { all: items.length, bun: items.filter((m) => m.category === "bun").length, banh_hoi: items.filter((m) => m.category === "banh_hoi").length, banh_tam: items.filter((m) => m.category === "banh_tam").length, banh_dan_gian: items.filter((m) => m.category === "banh_dan_gian").length };
  document.querySelectorAll("#category-filter-bar [data-cat]").forEach((btn) => { const cat = btn.getAttribute("data-cat"); if (cat && categoryLabels[cat]) btn.textContent = categoryLabels[cat] + " (" + (categoryCounts[cat] ?? 0) + ")"; });
  const q = state.searchQuery.trim().toLowerCase();
      const filtered = items.filter((item) => {
        const matchCat = state.category === "all" || item.category === state.category;
        const matchQuery = !q || item.name.toLowerCase().includes(q) || item.shortDesc.toLowerCase().includes(q);
        return matchCat && matchQuery;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full theme-card border rounded-xl p-10 text-center text-sm theme-text-muted">Không tìm thấy món phù hợp với "${state.searchQuery}".</div>`;
        return;
      }

      grid.innerHTML = filtered.map((item, idx) => {
        const qtyInCart = state.cart[item.id] || 0;
        return `
          <article class="bam-dish-card shadow-sm hover:shadow-lg">
            <div>
              <div class="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                <img src="${item.image}" loading="lazy" alt="${item.name}" class="w-full h-full object-cover transition duration-500 hover:scale-105 cursor-pointer" data-action="lightbox" data-id="${item.id}" />
                <div class="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-md bg-[#16120e]/90 border border-[#c89d54]/50 text-[#f4efe6] font-editorial text-xl font-bold shadow">
                  ${formatVND(item.price)} <span class="text-xs font-sans font-normal text-[#c89d54]">/ ${item.unit}</span>
                </div>
              </div>

              <div class="p-4 sm:p-5 space-y-1.5">
                <div class="text-[11px] theme-text-muted">${item.categoryLabel}</div>
                <h3 class="font-editorial text-2xl font-bold leading-snug">${item.name}</h3>
                <p class="text-xs sm:text-sm theme-text-muted leading-relaxed">${item.shortDesc}</p>
              </div>
            </div>

            <div class="px-4 sm:px-5 pb-4 sm:pb-5 pt-2">
              ${qtyInCart > 0 ? `
                <div class="flex items-center justify-between gap-2 p-1 rounded-lg theme-surface border">
                  <button type="button" data-action="dec-cart" data-id="${item.id}" class="w-9 h-9 rounded-md theme-card border font-bold text-sm">−</button>
                  <span class="text-xs font-bold">${qtyInCart} ${item.unit} trong giỏ</span>
                  <button type="button" data-action="inc-cart" data-id="${item.id}" class="w-9 h-9 rounded-md bg-[#b84a27] text-white font-bold text-sm">+</button>
                </div>
              ` : `
                <button type="button" data-action="inc-cart" data-id="${item.id}" class="w-full py-2.5 rounded-lg bg-[#1c1613] hover:bg-[#b84a27] text-[#f4efe6] dark:bg-[#c89d54] dark:text-[#16120e] dark:hover:bg-[#d8b068] text-xs font-semibold transition">
                  Thêm vào giỏ
                </button>
              `}
            </div>
          </article>
        `;
      }).join("");
    }

    // =========================================================================
    // 6. CART & DIRECT ZALO ORDER SUBMISSION
    // =========================================================================

    // Tọa độ Bếp Nhà Bam: 37 Phạm Ngọc Hưng, Phường Bình Thủy, TP. Cần Thơ
    const SHOP_LAT = 10.0592;
    const SHOP_LNG = 105.7645;
    let lastGeneratedZaloMsg = "";

    function haversineKm(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    function calcCanThoShipFee(km) {
      if (km < 1) return 0;
      if (km <= 3) return 15000;
      return Math.round((15000 + (km - 3) * 4500) / 1000) * 1000;
    }

    function getCurrentShippingInfo() {
      const custType = document.getElementById("cust-type")?.value || "Giao tận nơi";
      if (custType === "Ghé quán lấy") {
        return { fee: 0, label: "Miễn phí (Ghé quán lấy)" };
      }
      const prov = document.getElementById("cust-province")?.value || "TP. Cần Thơ";
      if (prov !== "TP. Cần Thơ") {
        return { fee: null, label: "Báo phí thực tế qua Zalo" };
      }
      const tier = document.getElementById("cust-distance-tier")?.value || "0";
      if (tier === "tbd") {
        return { fee: null, label: "Trên 8 km — Báo phí qua Zalo" };
      }
      if (tier.startsWith("gps:")) {
        const parts = tier.split(":");
        const km = parseFloat(parts[1]);
        const fee = parseInt(parts[2], 10);
        return { fee, label: fee === 0 ? `Miễn phí (${km.toFixed(2)} km < 1 km)` : `${formatVND(fee)} (~${km.toFixed(1)} km)` };
      }
      const feeNum = parseInt(tier, 10) || 0;
      return { fee: feeNum, label: feeNum === 0 ? "Miễn phí (< 1 km)" : formatVND(feeNum) };
    }

    function updateCartTotalsUI() {
      const items = getMenuItems();
      const subtotal = Object.entries(state.cart).reduce((s, [id, q]) => {
        if (q <= 0) return s;
        const m = items.find((x) => x.id === id);
        return s + (m ? m.price * q : 0);
      }, 0);
      const ship = getCurrentShippingInfo();
      const subEl = document.getElementById("cart-subtotal-price");
      const shipEl = document.getElementById("cart-ship-fee");
      const grandEl = document.getElementById("cart-total-price");
      if (subEl) subEl.textContent = formatVND(subtotal);
      if (shipEl) {
        shipEl.textContent = ship.label;
        shipEl.className = "font-semibold " + (ship.fee === 0 ? "text-emerald-500" : "text-amber-500");
      }
      if (grandEl) {
        grandEl.textContent = ship.fee === null ? `${formatVND(subtotal)} + ship` : formatVND(subtotal + ship.fee);
      }
      const mobTotalEl = document.getElementById("mobile-cart-total");
      if (mobTotalEl) {
        mobTotalEl.textContent = Object.values(state.cart).some((q) => q > 0)
          ? (ship.fee === null ? formatVND(subtotal) : formatVND(subtotal + ship.fee))
          : "0đ";
      }
    }

    function renderCart() {
      const items = getMenuItems();
      const entries = Object.entries(state.cart).filter(([, q]) => q > 0);
      const totalQty = entries.reduce((acc, [, q]) => acc + q, 0);

      let grandTotal = 0;
      const listEl = document.getElementById("cart-items-list");

      if (entries.length === 0) {
        if (listEl) listEl.innerHTML = `<div class="text-center py-8 text-xs theme-text-muted">Giỏ hàng đang trống. Hãy chọn món từ thực đơn bên dưới nhé.</div>`;
      } else if (listEl) {
        listEl.innerHTML = entries.map(([id, qty]) => {
          const item = items.find((m) => m.id === id);
          if (!item) return "";
          grandTotal += item.price * qty;
          return `
            <div class="p-3 rounded-lg theme-surface border flex items-center justify-between gap-3">
              <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded object-cover shrink-0" />
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-xs sm:text-sm truncate">${item.name}</div>
                <div class="text-xs theme-text-muted">${formatVND(item.price)} / ${item.unit}</div>
              </div>
              <div class="flex items-center gap-1.5">
                <button type="button" data-cart-action="dec" data-id="${item.id}" class="w-7 h-7 rounded theme-card border font-bold text-xs">−</button>
                <span class="w-6 text-center text-xs font-bold">${qty}</span>
                <button type="button" data-cart-action="inc" data-id="${item.id}" class="w-7 h-7 rounded bg-[#c89d54] text-[#16120e] font-bold text-xs">+</button>
              </div>
            </div>
          `;
        }).join("");
      }

      document.getElementById("cart-count-badge").textContent = String(totalQty);
      updateCartTotalsUI();
      const shipNow = getCurrentShippingInfo();
      const totalWithShip = shipNow.fee === null ? grandTotal : grandTotal + shipNow.fee;
      document.getElementById("mobile-cart-count").textContent = String(totalQty);
      document.getElementById("mobile-cart-total").textContent = totalQty > 0 ? formatVND(totalWithShip) : "0đ";
      try { safeSetStorage("bam_cart_v1", JSON.stringify(state.cart)); } catch {}
    }

    async function sendOrderToZalo() {
      const items = getMenuItems();
      const entries = Object.entries(state.cart).filter(([, q]) => q > 0);
      if (entries.length === 0) {
        showToast("Bạn hãy chọn ít nhất 1 món vào giỏ hàng nhé.");
        return;
      }

      const custName = document.getElementById("cust-name").value.trim();
      const custPhone = document.getElementById("cust-phone").value.trim();
      const custType = document.getElementById("cust-type").value;
      const custStreet = document.getElementById("cust-address").value.trim();
      const custProv = document.getElementById("cust-province")?.value || "TP. Cần Thơ";
      const custWard = custProv === "TP. Cần Thơ"
        ? (document.getElementById("cust-ward-select")?.value || "Phường Bình Thủy")
        : (document.getElementById("cust-ward-input")?.value.trim() || "");
      const custAddr = custType === "Ghé quán lấy"
        ? "Ghé quán lấy (37 Phạm Ngọc Hưng, P. Bình Thủy, TP. Cần Thơ)"
        : [custStreet, custWard, custProv].filter(Boolean).join(", ");
      const custNote = document.getElementById("cust-note").value.trim();

      const cleanCustPhone = custPhone.replace(/\D/g, "");
      const phoneErrEl = document.getElementById("cust-phone-error");
      if (!custName) {
        showToast("Vui lòng nhập tên của bạn để quán ghi nhận đơn.");
        return;
      }
      if (!/^0\d{9}$/.test(cleanCustPhone)) {
        phoneErrEl?.classList.remove("hidden");
        showToast("Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng số 0.");
        return;
      }
      phoneErrEl?.classList.add("hidden");
      if (custType === "Giao tận nơi" && !custStreet) {
        showToast("Vui lòng nhập số nhà, tên đường để quán giao tận nơi chính xác.");
        document.getElementById("cust-address")?.focus();
        return;
      }
      const policyAgreeEl = document.getElementById("cust-policy-agree");
      if (policyAgreeEl && !policyAgreeEl.checked) {
        showToast("Bạn vui lòng tích đồng ý Chính sách giao nhận & Bảo vệ dữ liệu trước khi gửi đơn.");
        policyAgreeEl.focus();
        return;
      }

      let total = 0;
      const orderItems = [];
      const itemLines = entries.map(([id, qty], i) => {
        const m = items.find((x) => x.id === id && x.available !== false);
        if (!m) return null;
        const sub = m.price * qty;
        total += sub;
        orderItems.push({ name: m.name, qty, price: m.price });
        return `${i + 1}. ${m.name} x${qty} (${formatVND(sub)})`;
      }).filter(Boolean);
      if (orderItems.length === 0) {
        showToast("Các món trong giỏ hiện đã tạm hết, vui lòng chọn món khác.");
        return;
      }
      const custPayment = document.getElementById("cust-payment")?.value || "Thanh toán tiền mặt (COD)";

      const orderId = "BAM-" + String(Math.floor(1000 + Math.random() * 9000));
      const nowStr = new Date().toLocaleString("vi-VN", { hour12: false });

      const shipInfo = getCurrentShippingInfo();
      const grandTotal = shipInfo.fee === null ? total : total + shipInfo.fee;

      // Save order to Admin Dashboard storage
      const existingOrders = getOrders();
      existingOrders.unshift({
        id: orderId,
        createdAt: nowStr,
        customerName: custName,
        customerPhone: cleanCustPhone,
        orderType: custType,
        address: custAddr || (custType === "Ghé quán lấy" ? "Ghé 37 Phạm Ngọc Hưng" : "Cần Thơ"),
        items: orderItems,
        shipLabel: shipInfo.label,
        total: grandTotal,
        status: "Chờ xác nhận"
      });
      saveOrders(existingOrders);

      const zaloText = [
        `ĐƠN ĐẶT MÓN - BẾP NHÀ BAM (${orderId})`,
        `Khách hàng: ${custName} - ${cleanCustPhone}`,
        `Hình thức: ${custType}${custAddr ? " (" + custAddr + ")" : ""}`,
        "----------------",
        ...itemLines,
        "----------------",
        `Tạm tính món: ${formatVND(total)}`,
        `Phí ship: ${shipInfo.label}`,
        `Tổng thanh toán: ${shipInfo.fee === null ? formatVND(total) + " (+ phí ship báo sau)" : formatVND(grandTotal)}`,
        `Thanh toán: ${custPayment}`,
        custNote ? `Ghi chú: ${custNote}` : ""
      ].filter(Boolean).join("\n");

      lastGeneratedZaloMsg = zaloText;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try { await navigator.clipboard.writeText(zaloText); } catch {}
      }

      const settings = getSettings();
      const cleanZalo = (settings.zaloPhone || "0901724414").replace(/\D/g, "");
      const zaloUrl = `https://zalo.me/${cleanZalo}`;
      const fallbackBox = document.getElementById("zalo-fallback-box");
      const directLink = document.getElementById("direct-zalo-link");
      if (directLink) directLink.href = zaloUrl;
      fallbackBox?.classList.remove("hidden");

      window.open(zaloUrl, "_blank", "noopener,noreferrer");
      showToast("Đã ghi nhận đơn & sao chép nội dung! Đang mở Zalo...");

      state.cart = {};
      renderCart();
      renderMenuGrid();
      if (!document.getElementById("admin-app").classList.contains("hidden")) {
        renderAdminDashboard();
      }
    }


    const POLICY_CONTENTS = {
      shipping: {
        title: "1. Chính Sách Vận Chuyển & Giao Nhận",
        html: `
          <p><strong>Phạm vi giao hàng:</strong> Bếp Nhà Bam nhận giao món ăn trong ngày tại khu vực TP. Cần Thơ, xuất phát từ địa chỉ <strong>37 Phạm Ngọc Hưng, Phường Bình Thủy, TP. Cần Thơ</strong>.</p>
          <p><strong>Khung giờ giao hàng:</strong> Sáng 06:00 – 13:30 và Chiều 15:00 – 20:00 tất cả các ngày trong tuần. Thời gian giao dự kiến từ 15 – 40 phút tùy khoảng cách và tình trạng giao thông.</p>
          <p><strong>Biểu phí giao hàng minh bạch:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Ghé quán lấy:</strong> Miễn phí (0đ).</li>
            <li><strong>Dưới 1 km:</strong> Miễn phí ship (0đ).</li>
            <li><strong>Từ 1 – 3 km (Nội ô Bình Thủy):</strong> 15.000đ.</li>
            <li><strong>Từ 3 – 5 km (Ninh Kiều / Cái Khế):</strong> 22.000đ.</li>
            <li><strong>Từ 5 – 8 km (Cái Răng / An Bình / Long Tuyền):</strong> 33.000đ.</li>
            <li><strong>Trên 8 km hoặc ngoại thành:</strong> Báo phí thực tế theo cước xe công nghệ trước khi xác nhận đơn qua Zalo.</li>
          </ul>
        `
      },
      refund: {
        title: "2. Chính Sách Kiểm Hàng, Đổi Trả & Hoàn Tiền",
        html: `
          <p><strong>Quyền kiểm tra khi nhận hàng (Đồng kiểm):</strong> Khách hàng được mở túi ni-lông kiểm tra số lượng phần ăn, tên món, nước chấm/nước cốt kèm theo ngay tại thời điểm nhận hàng từ nhân viên giao nhận.</p>
          <p><strong>Điều kiện đổi món hoặc hoàn tiền:</strong> Do đặc thù là thực phẩm chế biến nóng dùng ngay trong ngày, quán không nhận trả lại món đã sử dụng hoặc đổi ý sau khi đã nhận đúng đơn. Tuy nhiên, Bếp Nhà Bam cam kết <strong>đổi bù món mới miễn phí hoặc hoàn tiền 100%</strong> giá trị phần ăn lỗi trong các trường hợp:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Giao sai món, thiếu món hoặc thiếu nước chấm/topping so với tin nhắn xác nhận trên Zalo.</li>
            <li>Hộp đựng bị đổ vỡ, hư hỏng nặng trong quá trình vận chuyển dẫn đến không thể sử dụng.</li>
            <li>Món ăn có dấu hiệu bất thường về chất lượng hoặc vệ sinh an toàn thực phẩm.</li>
          </ul>
          <p><strong>Thời hạn &amp; Cách yêu cầu:</strong> Quý khách vui lòng chụp ảnh phần ăn và nhắn tin qua Zalo <strong>0901 724 414</strong> trong vòng <strong>30 phút</strong> kể từ lúc nhận hàng để bếp xử lý ngay lập tức.</p>
        `
      },
      payment: {
        title: "3. Chính Sách Thanh Toán & Bảo Mật Giao Dịch",
        html: `
          <p><strong>Phương thức thanh toán hiện hành:</strong> Website Bếp Nhà Bam hoạt động theo hình thức trưng bày thực đơn và tạo đơn gửi trực tiếp qua Zalo, <strong>không tích hợp cổng thanh toán trực tuyến và không thu thập số thẻ ngân hàng/mã OTP trên website</strong>.</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Thanh toán khi nhận hàng (COD):</strong> Khách hàng thanh toán tiền mặt trực tiếp cho nhân viên giao hàng hoặc tại quầy khi ghé lấy.</li>
            <li><strong>Chuyển khoản ngân hàng:</strong> Khách hàng chỉ chuyển khoản theo đúng thông tin tài khoản do Zalo chính thức <strong>0901 724 414</strong> của Bếp Nhà Bam xác nhận sau khi chốt đơn.</li>
          </ul>
          <p><strong>Cam kết bảo mật giao dịch:</strong> Mọi thông tin xác nhận thanh toán qua Zalo được giữ kín tuyệt đối, không sử dụng cho mục đích ngoài đơn hàng.</p>
        `
      },
      privacy: {
        title: "4. Chính Sách Bảo Vệ Dữ Liệu Cá Nhân",
        html: `
          <p>Tuân thủ quy định về bảo vệ dữ liệu cá nhân tại Việt Nam (Nghị định 13/2023/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân), Bếp Nhà Bam công khai minh bạch việc xử lý thông tin của khách hàng như sau:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Dữ liệu thu thập:</strong> Họ tên, số điện thoại liên hệ, địa chỉ giao hàng và ghi chú món ăn do khách tự nhập tại giỏ hàng.</li>
            <li><strong>Mục đích sử dụng:</strong> Chỉ dùng để tạo nội dung đơn đặt món gửi qua Zalo và phục vụ giao nhận đúng địa chỉ.</li>
            <li><strong>Lưu trữ &amp; Chia sẻ:</strong> Website không lưu trữ dữ liệu khách hàng trên máy chủ từ xa (chỉ lưu tạm trên trình duyệt của thiết bị). Quán không bán, không trao đổi dữ liệu với bên thứ ba, ngoại trừ cung cấp số điện thoại và địa chỉ cho đối tác giao hàng để hoàn tất chuyến giao.</li>
            <li><strong>Quyền của khách hàng:</strong> Quý khách có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin liên hệ/đơn hàng đã gửi bất kỳ lúc nào qua Zalo <strong>0901 724 414</strong>.</li>
          </ul>
        `
      },
      owner: {
        title: "5. Thông Tin Cơ Sở Kinh Doanh & Giải Quyết Khiếu Nại",
        html: `
          <p><strong>Tên cơ sở:</strong> Bếp Nhà Bam</p>
          <p><strong>Địa chỉ kinh doanh:</strong> 37 Phạm Ngọc Hưng, Phường Bình Thủy, TP. Cần Thơ</p>
          <p><strong>Điện thoại / Zalo tiếp nhận đơn &amp; khiếu nại:</strong> <a href="https://zalo.me/0901724414" target="_blank" rel="noopener noreferrer" class="underline font-semibold">0901 724 414</a></p>
          <p><strong>Giờ làm việc:</strong> 06:00 – 13:30 &amp; 15:00 – 20:00 (Thứ 2 – Chủ Nhật)</p>
          <p><strong>Quy trình tiếp nhận khiếu nại:</strong> Mọi góp ý về chất lượng món ăn, thái độ phục vụ hoặc phí giao hàng sẽ được chủ quán tiếp nhận trực tiếp qua số <strong>0901 724 414</strong> và phản hồi giải quyết trong ngày trên tinh thần cầu thị, bảo vệ quyền lợi người tiêu dùng.</p>
        `
      }
    };

    function openPolicyModal(tabKey = "shipping") {
      const modal = document.getElementById("policy-modal");
      const titleEl = document.getElementById("policy-modal-title");
      const bodyEl = document.getElementById("policy-modal-body");
      const data = POLICY_CONTENTS[tabKey] || POLICY_CONTENTS.shipping;
      if (titleEl) titleEl.textContent = data.title;
      if (bodyEl) { bodyEl.innerHTML = data.html; bodyEl.scrollTop = 0; }
      document.querySelectorAll(".policy-tab").forEach((btn) => {
        const active = btn.getAttribute("data-policy-tab") === tabKey;
        btn.className = "policy-tab px-3 py-1.5 rounded-lg font-semibold transition " +
          (active ? "bg-[#234230] text-[#f4efe6]" : "theme-card border hover:border-[#c89d54]");
      });
      modal?.classList.remove("hidden");
    }

    // =========================================================================
    // 7. MAP & ADMIN DASHBOARD LOGIC (/admin & #/admin)
    // =========================================================================
    let canthoMap = null;
    const BAM_COORDS = [10.0592, 105.7645];

    function initMap() {
      const mapEl = document.getElementById("cantho-map");
      if (!mapEl || typeof L === "undefined") return;
      canthoMap = L.map("cantho-map", { center: BAM_COORDS, zoom: 16, scrollWheelZoom: false });
      L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "&copy; Esri &mdash; Bếp Nhà Bam",
        maxZoom: 19
      }).addTo(canthoMap);
      L.marker(BAM_COORDS).addTo(canthoMap).bindPopup("<b>Bếp Nhà Bam</b><br>37 Phạm Ngọc Hưng, Bình Thủy, Cần Thơ").openPopup();
    }

    function applyShopSettingsToUI() {
      const s = getSettings();
      const topAddr = document.getElementById("topbar-address");
      const topHrs = document.getElementById("topbar-hours");
      const locAddr = document.getElementById("location-address");
      if (topAddr) topAddr.textContent = s.address;
      if (topHrs) topHrs.textContent = `Zalo đặt món: ${s.zaloPhone} • Mở cửa: ${s.hours}`;
      if (locAddr) locAddr.textContent = s.address;
    }

    function checkRoute() {
      const isAdminRoute = window.location.hash.startsWith("#/admin") || window.location.search.includes("admin=1") || /\/admin\/?$/.test(window.location.pathname);
      const storeEl = document.getElementById("storefront-app");
      const adminEl = document.getElementById("admin-app");
      if (isAdminRoute) {
        storeEl.classList.add("hidden");
        adminEl.classList.remove("hidden");
        initAdminAuthView();
      } else {
        adminEl.classList.add("hidden");
        storeEl.classList.remove("hidden");
        if (canthoMap) setTimeout(() => canthoMap.invalidateSize(), 150);
      }
    }

    function initAdminAuthView() {
      const isAuthed = safeGetSession("bam_admin_authed") === "1";
      document.getElementById("admin-login-screen").classList.toggle("hidden", isAuthed);
      document.getElementById("admin-dashboard-shell").classList.toggle("hidden", !isAuthed);
      if (isAuthed) renderAdminDashboard();
    }

    window.switchAdminTab = function(tabName) {
      ["overview", "orders", "menu", "content", "settings"].forEach((t) => {
        document.getElementById(`admin-tab-${t}`)?.classList.toggle("hidden", t !== tabName);
      });
      document.querySelectorAll(".admin-nav-item").forEach((btn) => {
        const active = btn.getAttribute("data-admin-tab") === tabName;
        btn.classList.toggle("is-active", active);
        btn.classList.toggle("text-slate-300", !active);
      });
      document.querySelectorAll(".admin-mobile-tab").forEach((btn) => {
        const active = btn.getAttribute("data-admin-tab") === tabName;
        btn.className = active
          ? "admin-mobile-tab px-3 py-1.5 rounded bg-blue-600 text-white font-medium shrink-0"
          : "admin-mobile-tab px-3 py-1.5 rounded bg-slate-800 text-slate-300 shrink-0";
      });
    };

    function renderAdminDashboard() {
      const orders = getOrders();
      const menu = getMenuItems();
      const settings = getSettings();

      const totalRev = orders.filter((o) => o.status !== "Đã hủy").reduce((acc, o) => acc + (o.total || 0), 0);
      const pending = orders.filter((o) => o.status === "Chờ xác nhận").length;
      const prep = orders.filter((o) => o.status === "Đang chuẩn bị").length;
      const done = orders.filter((o) => o.status === "Hoàn thành").length;
      const validOrders = orders.filter((o) => o.status !== "Đã hủy");
      const activeTotal = Math.max(1, validOrders.length);
      const donePct = Math.round((done / activeTotal) * 100);

      document.getElementById("kpi-total-revenue").textContent = formatVND(totalRev);
      document.getElementById("kpi-total-orders").textContent = String(orders.length);
      document.getElementById("kpi-avg-order").textContent = formatVND(Math.round(totalRev / activeTotal));
      document.getElementById("kpi-active-items").textContent = String(menu.filter((m) => m.available !== false).length);
      document.getElementById("kpi-pending-count").textContent = `${pending} chờ`;
      document.getElementById("kpi-completion-rate").textContent = `${donePct}%`;
      document.getElementById("admin-pending-badge").textContent = String(pending);

      document.getElementById("donut-percent-label").textContent = `${donePct}%`;
      document.getElementById("stat-done-count").textContent = String(done);
      document.getElementById("stat-prep-count").textContent = String(prep);
      document.getElementById("stat-wait-count").textContent = String(pending);

      // Orders Table
      const ordersTbody = document.getElementById("admin-orders-tbody");
      ordersTbody.innerHTML = orders.length === 0
        ? `<tr><td colspan="5" class="p-6 text-center text-slate-400">Chưa có đơn hàng nào.</td></tr>`
        : orders.map((o, idx) => `
          <tr class="hover:bg-white/[0.02]">
            <td class="p-3.5 font-mono text-blue-400">${o.id}<div class="text-[10px] text-slate-500">${o.createdAt}</div></td>
            <td class="p-3.5"><div class="font-semibold">${o.customerName}</div><div class="text-slate-400">${o.customerPhone} • ${o.orderType}</div></td>
            <td class="p-3.5 text-slate-300">${(o.items || []).map((it) => `${it.name} x${it.qty}`).join(", ")}</td>
            <td class="p-3.5 font-bold text-amber-400">${formatVND(o.total)}</td>
            <td class="p-3.5">
              <select data-order-idx="${idx}" class="admin-order-status bg-[#0f121a] border border-slate-700 rounded px-2 py-1 text-xs text-white">
                <option ${o.status === "Chờ xác nhận" ? "selected" : ""}>Chờ xác nhận</option>
                <option ${o.status === "Đang chuẩn bị" ? "selected" : ""}>Đang chuẩn bị</option>
                <option ${o.status === "Hoàn thành" ? "selected" : ""}>Hoàn thành</option>
                <option ${o.status === "Đã hủy" ? "selected" : ""}>Đã hủy</option>
              </select>
            </td>
          </tr>
        `).join("");

      // Menu Manager Table (Name, Desc, Image Upload, Price, Availability)
      const menuTbody = document.getElementById("admin-menu-tbody");
      menuTbody.innerHTML = menu.map((m) => `
        <tr class="hover:bg-white/[0.02] align-top">
          <td class="p-3 w-32">
            <img src="${m.image}" alt="${m.name}" class="w-24 aspect-[4/3] object-cover rounded border border-slate-700 mb-1.5" />
            <label class="inline-block px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-slate-200 cursor-pointer">
              Đổi ảnh
              <input type="file" accept="image/*" data-menu-img="${m.id}" class="admin-menu-img-input hidden" />
            </label>
          </td>
          <td class="p-3 space-y-1.5 min-w-[240px]">
            <input type="text" value="${m.name}" data-menu-name="${m.id}" class="admin-name-input w-full px-2.5 py-1 rounded bg-[#0f121a] border border-slate-700 text-white text-xs font-semibold" />
            <textarea rows="2" data-menu-desc="${m.id}" class="admin-desc-input w-full px-2.5 py-1 rounded bg-[#0f121a] border border-slate-700 text-slate-300 text-[11px]">${m.shortDesc}</textarea>
          </td>
          <td class="p-3">
            <input type="number" step="1000" value="${m.price}" data-menu-price="${m.id}" class="admin-price-input w-28 px-2.5 py-1 rounded bg-[#0f121a] border border-slate-700 text-white text-xs" />
          </td>
          <td class="p-3">
            <button type="button" data-menu-toggle="${m.id}" class="admin-avail-btn px-2.5 py-1 rounded text-xs font-medium ${m.available !== false ? "bg-emerald-500/15 text-emerald-400" : "bg-rose-500/15 text-rose-400"}">
              ${m.available !== false ? "Đang bán" : "Tạm hết"}
            </button>
          </td>
        </tr>
      `).join("");

      // Populate Content Editor fields
      const c = getSiteContent();
      if (document.getElementById("edit-hero-title")) {
        document.getElementById("edit-hero-title").value = c.heroTitle;
        document.getElementById("edit-hero-subtitle").value = c.heroSubtitle;
        document.getElementById("edit-story-title").value = c.storyTitle;
        document.getElementById("edit-story-desc").value = c.storyDesc;
        document.getElementById("edit-takeaway-title").value = c.takeawayTitle;
        document.getElementById("edit-takeaway-desc").value = c.takeawayDesc;
      }

      // Settings Form
      document.getElementById("set-zalo-phone").value = settings.zaloPhone || "";
      document.getElementById("set-address").value = settings.address || "";
      document.getElementById("set-hours").value = settings.hours || "";
    }

    // =========================================================================
    // 8. WIRE EVENT LISTENERS
    // =========================================================================
    window.addEventListener("DOMContentLoaded", () => {
      applyShopSettingsToUI();
      applySiteContentToUI();
      initLocationSelectors();
      renderMenuGrid();
      renderCart();
      initThreeJSShowcase();
      initStoryMotion();
      initMap();
      checkRoute();
      window.addEventListener("hashchange", checkRoute);

      document.getElementById("motion-chapter-tabs")?.addEventListener("click", (e) => {
        const btn = e.target.closest(".motion-tab-btn");
        if (btn) goToMotionSlide(Number(btn.getAttribute("data-slide") || 0));
      });
      document.getElementById("prev-slide-btn")?.addEventListener("click", () => goToMotionSlide((scene3dState.activeSlide - 1 + MOTION_CHAPTERS.length) % MOTION_CHAPTERS.length));
      document.getElementById("next-slide-btn")?.addEventListener("click", () => goToMotionSlide((scene3dState.activeSlide + 1) % MOTION_CHAPTERS.length));
      document.getElementById("spotlight-add-btn")?.addEventListener("click", () => {
        const ch = MOTION_CHAPTERS[scene3dState.activeSlide];
        if (!ch) return;
        state.cart[ch.id] = (state.cart[ch.id] || 0) + 1;
        renderCart();
        renderMenuGrid();
        showToast(`Đã thêm "${ch.title}" vào giỏ hàng`);
      });

      document.getElementById("cam-overview-btn")?.addEventListener("click", () => { scene3dState.cameraMode = "arc"; });
      document.getElementById("cam-bowl-btn")?.addEventListener("click", () => { scene3dState.cameraMode = "closeup"; });
      document.getElementById("toggle-autorotate-btn")?.addEventListener("click", (e) => {
        scene3dState.autoRotate = !scene3dState.autoRotate;
        e.target.textContent = scene3dState.autoRotate ? "Tự chuyển" : "Tạm dừng";
      });

      document.getElementById("category-filter-bar")?.addEventListener("click", (e) => {
        const btn = e.target.closest(".cat-btn");
        if (!btn) return;
        state.category = btn.getAttribute("data-cat") || "all";
        document.querySelectorAll(".cat-btn").forEach((b) => {
          b.className = b === btn
            ? "cat-btn px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#1c1613] text-[#f4efe6] dark:bg-[#c89d54] dark:text-[#16120e] transition"
            : "cat-btn px-3.5 py-2 rounded-lg text-xs font-medium theme-surface border hover:border-[#c89d54] transition";
        });
        renderMenuGrid();
      });

      document.getElementById("menu-search")?.addEventListener("input", (e) => {
        state.searchQuery = e.target.value || "";
        renderMenuGrid();
      });

      document.getElementById("menu-grid")?.addEventListener("click", (e) => {
        const el = e.target.closest("[data-action]");
        if (!el) return;
        const action = el.getAttribute("data-action");
        const id = el.getAttribute("data-id");
        const item = getMenuItems().find((m) => m.id === id);
        if (!item) return;

        if (action === "inc-cart") {
          state.cart[id] = (state.cart[id] || 0) + 1;
          renderCart();
          renderMenuGrid();
          showToast(`Đã thêm "${item.name}" vào giỏ`);
        } else if (action === "dec-cart") {
          state.cart[id] = Math.max(0, (state.cart[id] || 0) - 1);
          if (state.cart[id] === 0) delete state.cart[id];
          renderCart();
          renderMenuGrid();
        } else if (action === "lightbox") {
          document.getElementById("lightbox-img").src = item.image;
          document.getElementById("lightbox-title").textContent = item.name;
          document.getElementById("lightbox-caption").textContent = item.shortDesc;
          document.getElementById("lightbox-modal").classList.remove("hidden");
        }
      });

      applyThemeState();
      document.getElementById("theme-toggle")?.addEventListener("click", () => {
        state.darkMode = !state.darkMode;
        applyThemeState();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          document.getElementById("cart-modal")?.classList.add("hidden");
          document.getElementById("lightbox-modal")?.classList.add("hidden");
          document.getElementById("policy-modal")?.classList.add("hidden");
          document.body.style.overflow = "";
        }
      });
      document.getElementById("lightbox-modal")?.addEventListener("click", (e) => {
        if (e.target.id === "lightbox-modal") {
          document.getElementById("lightbox-modal")?.classList.add("hidden");
        }
      });

      // Cart Drawer
      const cartModal = document.getElementById("cart-modal");
      document.getElementById("open-cart-btn")?.addEventListener("click", () => cartModal.classList.remove("hidden"));
      document.getElementById("mobile-open-cart-btn")?.addEventListener("click", () => cartModal.classList.remove("hidden"));
      document.getElementById("close-cart-btn")?.addEventListener("click", () => cartModal.classList.add("hidden"));
      cartModal?.addEventListener("click", (e) => { if (e.target === cartModal) cartModal.classList.add("hidden"); });

      document.getElementById("cart-items-list")?.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-cart-action]");
        if (!btn) return;
        const act = btn.getAttribute("data-cart-action");
        const id = btn.getAttribute("data-id");
        if (act === "inc") state.cart[id] = (state.cart[id] || 0) + 1;
        else {
          state.cart[id] = Math.max(0, (state.cart[id] || 0) - 1);
          if (state.cart[id] === 0) delete state.cart[id];
        }
        renderCart();
        renderMenuGrid();
      });

      ["cust-phone", "set-zalo-phone"].forEach((pid) => {
        document.getElementById(pid)?.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
          if (pid === "cust-phone" && /^0\d{9}$/.test(e.target.value)) {
            document.getElementById("cust-phone-error")?.classList.add("hidden");
          }
        });
      });
      document.getElementById("clear-cart-btn")?.addEventListener("click", () => {
        state.cart = {};
        renderCart();
        renderMenuGrid();
      });
      document.getElementById("send-zalo-btn")?.addEventListener("click", sendOrderToZalo);

      document.addEventListener("click", (e) => {
        const trigger = e.target.closest("[data-open-policy]");
        if (trigger) {
          e.preventDefault();
          openPolicyModal(trigger.getAttribute("data-open-policy"));
          return;
        }
        const tabBtn = e.target.closest("[data-policy-tab]");
        if (tabBtn) {
          openPolicyModal(tabBtn.getAttribute("data-policy-tab"));
        }
      });
      document.getElementById("close-policy-btn")?.addEventListener("click", () => {
        document.getElementById("policy-modal")?.classList.add("hidden");
      });
      document.getElementById("policy-backdrop")?.addEventListener("click", () => {
        document.getElementById("policy-modal")?.classList.add("hidden");
      });

      document.getElementById("copy-zalo-msg-btn")?.addEventListener("click", () => {
        if (!lastGeneratedZaloMsg) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(lastGeneratedZaloMsg).then(() => {
            showToast("Đã sao chép nội dung đơn! Bạn mở Zalo và bấm Dán để gửi.");
          }).catch(() => showToast("Trình duyệt không cho phép tự sao chép."));
        }
      });

      // Lightbox & Takeaway
      document.querySelectorAll(".takeaway-preview-card").forEach((card) => {
        card.addEventListener("click", () => {
          document.getElementById("lightbox-img").src = card.getAttribute("data-img");
          document.getElementById("lightbox-title").textContent = "Đóng gói mang về — Bếp Nhà Bam";
          document.getElementById("lightbox-caption").textContent = card.getAttribute("data-caption");
          document.getElementById("lightbox-modal").classList.remove("hidden");
        });
      });
      document.getElementById("close-lightbox-btn")?.addEventListener("click", () => document.getElementById("lightbox-modal").classList.add("hidden"));

      document.getElementById("copy-address-btn")?.addEventListener("click", () => {
        const addr = getSettings().address;
        if (navigator.clipboard) navigator.clipboard.writeText(addr).catch(() => {});
        showToast("Đã sao chép địa chỉ quán");
      });
      document.getElementById("recenter-map-btn")?.addEventListener("click", () => canthoMap?.setView(BAM_COORDS, 17, { animate: true }));

      // Admin Login & Events
      document.getElementById("admin-login-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const uid = document.getElementById("admin-login-id").value.trim();
        const pwd = document.getElementById("admin-login-pass").value;
        if (uid === ADMIN_CREDENTIALS.id && pwd === ADMIN_CREDENTIALS.pass) {
          safeSetSession("bam_admin_authed", "1");
          document.getElementById("admin-login-error").classList.add("hidden");
          initAdminAuthView();
        } else {
          document.getElementById("admin-login-error").classList.remove("hidden");
        }
      });

      document.getElementById("admin-logout-btn")?.addEventListener("click", () => {
        safeRemoveSession("bam_admin_authed");
        initAdminAuthView();
      });

      document.querySelectorAll("[data-admin-tab]").forEach((btn) => {
        btn.addEventListener("click", () => switchAdminTab(btn.getAttribute("data-admin-tab")));
      });

      document.getElementById("admin-orders-tbody")?.addEventListener("change", (e) => {
        const sel = e.target.closest(".admin-order-status");
        if (!sel) return;
        const orders = getOrders();
        const idx = Number(sel.getAttribute("data-order-idx"));
        if (orders[idx]) {
          orders[idx].status = sel.value;
          saveOrders(orders);
          renderAdminDashboard();
          showToast("Đã cập nhật trạng thái đơn hàng");
        }
      });

      document.getElementById("admin-mobile-menu-btn")?.addEventListener("click", () => {
        const sb = document.getElementById("admin-sidebar");
        if (sb) {
          sb.classList.toggle("hidden");
          sb.classList.toggle("fixed");
          sb.classList.toggle("inset-y-0");
          sb.classList.toggle("left-0");
          sb.classList.toggle("z-50");
          sb.classList.toggle("flex");
        }
      });
      let clearOrdersArmed = false;
      let clearOrdersTimer = null;
      document.getElementById("admin-clear-orders-btn")?.addEventListener("click", (e) => {
        const btn = e.currentTarget;
        if (!clearOrdersArmed) {
          clearOrdersArmed = true;
          btn.textContent = "Nhấn lại để xác nhận xóa";
          clearTimeout(clearOrdersTimer);
          clearOrdersTimer = setTimeout(() => {
            clearOrdersArmed = false;
            btn.textContent = "Xóa đơn mẫu";
          }, 4000);
          return;
        }
        clearOrdersArmed = false;
        clearTimeout(clearOrdersTimer);
        btn.textContent = "Xóa đơn mẫu";
        saveOrders([]);
        renderAdminDashboard();
        showToast("Đã xóa danh sách đơn");
      });

      document.getElementById("admin-menu-tbody")?.addEventListener("change", (e) => {
        const inp = e.target.closest(".admin-price-input");
        if (!inp) return;
        const id = inp.getAttribute("data-menu-price");
        const overrides = JSON.parse(safeGetStorage("bam_menu_overrides_v2") || "{}");
        overrides[id] = { ...(overrides[id] || {}), price: Number(inp.value || 0) };
        safeSetStorage("bam_menu_overrides_v2", JSON.stringify(overrides));
        renderMenuGrid();
        showToast("Đã cập nhật giá món");
      });

      document.getElementById("admin-menu-tbody")?.addEventListener("click", (e) => {
        const btn = e.target.closest(".admin-avail-btn");
        if (!btn) return;
        const id = btn.getAttribute("data-menu-toggle");
        const current = getMenuItems().find((m) => m.id === id);
        const overrides = JSON.parse(safeGetStorage("bam_menu_overrides_v2") || "{}");
        overrides[id] = { ...(overrides[id] || {}), available: current?.available === false };
        safeSetStorage("bam_menu_overrides_v2", JSON.stringify(overrides));
        renderAdminDashboard();
        renderMenuGrid();
        showToast("Đã cập nhật trạng thái món");
      });


      document.getElementById("admin-menu-tbody")?.addEventListener("change", (e) => {
        const nameInp = e.target.closest(".admin-name-input");
        const descInp = e.target.closest(".admin-desc-input");
        const imgInp = e.target.closest(".admin-menu-img-input");
        const overrides = JSON.parse(safeGetStorage("bam_menu_overrides_v2") || "{}");

        if (nameInp) {
          const id = nameInp.getAttribute("data-menu-name");
          overrides[id] = { ...(overrides[id] || {}), name: nameInp.value.trim() };
          safeSetStorage("bam_menu_overrides_v2", JSON.stringify(overrides));
          renderMenuGrid();
          showToast("Đã cập nhật tên món");
        } else if (descInp) {
          const id = descInp.getAttribute("data-menu-desc");
          overrides[id] = { ...(overrides[id] || {}), shortDesc: descInp.value.trim() };
          safeSetStorage("bam_menu_overrides_v2", JSON.stringify(overrides));
          renderMenuGrid();
          showToast("Đã cập nhật mô tả món");
        } else if (imgInp && imgInp.files && imgInp.files[0]) {
          const id = imgInp.getAttribute("data-menu-img");
          readImageAsCompressedDataURL(imgInp.files[0], 640, (dataUrl) => {
            const ov = JSON.parse(safeGetStorage("bam_menu_overrides_v2") || "{}");
            ov[id] = { ...(ov[id] || {}), image: dataUrl };
            safeSetStorage("bam_menu_overrides_v2", JSON.stringify(ov));
            renderAdminDashboard();
            renderMenuGrid();
            showToast("Đã cập nhật ảnh món mới");
          });
        }
      });

      document.getElementById("edit-logo-file")?.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
          readImageAsCompressedDataURL(e.target.files[0], 420, (dataUrl) => {
            const c = getSiteContent();
            c.logoImg = dataUrl;
            safeSetStorage("bam_content_v2", JSON.stringify(c));
            applySiteContentToUI();
            showToast("Đã cập nhật logo quán");
          });
        }
      });

      document.getElementById("edit-hero-file")?.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
          readImageAsCompressedDataURL(e.target.files[0], 1024, (dataUrl) => {
            const c = getSiteContent();
            c.heroBg = dataUrl;
            safeSetStorage("bam_content_v2", JSON.stringify(c));
            applySiteContentToUI();
            showToast("Đã cập nhật ảnh nền Hero");
          });
        }
      });

      document.getElementById("admin-content-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const c = getSiteContent();
        c.heroTitle = document.getElementById("edit-hero-title").value.trim() || DEFAULT_CONTENT.heroTitle;
        c.heroSubtitle = document.getElementById("edit-hero-subtitle").value.trim() || DEFAULT_CONTENT.heroSubtitle;
        c.storyTitle = document.getElementById("edit-story-title").value.trim() || DEFAULT_CONTENT.storyTitle;
        c.storyDesc = document.getElementById("edit-story-desc").value.trim() || DEFAULT_CONTENT.storyDesc;
        c.takeawayTitle = document.getElementById("edit-takeaway-title").value.trim() || DEFAULT_CONTENT.takeawayTitle;
        c.takeawayDesc = document.getElementById("edit-takeaway-desc").value.trim() || DEFAULT_CONTENT.takeawayDesc;
        safeSetStorage("bam_content_v2", JSON.stringify(c));
        applySiteContentToUI();
        showToast("Đã lưu nội dung website");
      });

      document.getElementById("admin-reset-content-btn")?.addEventListener("click", () => {
        safeRemoveStorage("bam_content_v2");
        applySiteContentToUI();
        renderAdminDashboard();
        showToast("Đã khôi phục nội dung gốc");
      });

      document.getElementById("admin-reset-menu-btn")?.addEventListener("click", () => {
        safeRemoveStorage("bam_menu_overrides_v2");
        renderAdminDashboard();
        renderMenuGrid();
        showToast("Đã khôi phục giá gốc");
      });

      document.getElementById("admin-settings-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const rawZalo = document.getElementById("set-zalo-phone").value.replace(/\D/g, "");
        if (rawZalo && !/^0\d{9}$/.test(rawZalo)) {
          showToast("Số Zalo phải gồm đúng 10 chữ số và bắt đầu bằng số 0.");
          return;
        }
        const newSettings = {
          zaloPhone: rawZalo,
          address: document.getElementById("set-address").value.trim() || DEFAULT_SETTINGS.address,
          hours: document.getElementById("set-hours").value.trim() || DEFAULT_SETTINGS.hours
        };
        safeSetStorage("bam_settings_v1", JSON.stringify(newSettings));
        applyShopSettingsToUI();
      applySiteContentToUI();
      initLocationSelectors();
        showToast("Đã lưu cài đặt Zalo & Quán");
      });
    });

    // =========================================================================
    // BANNER CAROUSEL & DESSERT SHORTCUT
    // =========================================================================
    (function initBannerShowcase() {
      const slides = document.querySelectorAll('#banner-carousel-track .banner-slide');
      const dots = document.querySelectorAll('#banner-dots .banner-dot');
      const prevBtn = document.getElementById('banner-prev-btn');
      const nextBtn = document.getElementById('banner-next-btn');
      const posterOrderBtn = document.getElementById('poster-order-btn');
      if (!slides.length) return;

      let activeIdx = 0;
      let timer = null;

      function showBanner(idx) {
        activeIdx = (idx + slides.length) % slides.length;
        slides.forEach((s, i) => {
          const isActive = i === activeIdx;
          s.classList.toggle('opacity-100', isActive);
          s.classList.toggle('opacity-0', !isActive);
          s.classList.toggle('pointer-events-none', !isActive);
           s.classList.toggle('z-10', isActive);
           s.classList.toggle('z-0', !isActive); 
        });
        dots.forEach((d, i) => {
          const isActive = i === activeIdx;
          d.classList.toggle('w-5', isActive);
          d.classList.toggle('bg-[#c89d54]', isActive);
          d.classList.toggle('w-2', !isActive);
          d.classList.toggle('bg-white/50', !isActive);
        });
      }

      function startAuto() {
        stopAuto();
        timer = setInterval(() => showBanner(activeIdx + 1), 5500);
      }
      function stopAuto() {
        if (timer) { clearInterval(timer); timer = null; }
      }

      if (prevBtn) prevBtn.addEventListener('click', () => { showBanner(activeIdx - 1); startAuto(); });
      if (nextBtn) nextBtn.addEventListener('click', () => { showBanner(activeIdx + 1); startAuto(); });
      dots.forEach((d) => {
        d.addEventListener('click', () => {
          showBanner(Number(d.dataset.dot || 0));
          startAuto();
        });
      });

      const track = document.getElementById('banner-carousel-track');
      if (track) {
        track.addEventListener('mouseenter', stopAuto);
        track.addEventListener('mouseleave', startAuto);
      }

      window.addToCart = function(itemId) {
        const item = getMenuItems().find((m) => m.id === itemId);
        if (!item) return;
        state.cart[itemId] = (state.cart[itemId] || 0) + 1;
        renderCart();
        renderMenuGrid();
        showToast(`Đã thêm "${item.name}" vào giỏ hàng`);
      };

      if (posterOrderBtn) {
        posterOrderBtn.addEventListener('click', () => {
          window.addToCart('bun-thit-nuong');
        });
      }

      const sweetJumpBtn = document.getElementById('banner-sweet-jump');
      if (sweetJumpBtn) {
        sweetJumpBtn.addEventListener('click', () => {
          const sweetCatBtn = document.querySelector('.cat-btn[data-cat="banh_dan_gian"]');
          if (sweetCatBtn) sweetCatBtn.click();
        });
      }

      startAuto();
    })();
