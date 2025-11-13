const JURUSAN_DATA = {
  animasi: {
    name: "Animasi",
    tagline: "Pipeline animasi 2D/3D dengan integrasi VR dan AR.",
    description:
      "Jurusan Animasi memadukan seni ilustrasi, storytelling, dan teknologi rendering untuk menghasilkan karya sinematik berkualitas industri.",
    image: "assets/images/jurusan/animasi.png",
    competencies: ["Storyboarding & concept art", "Modeling 3D & rigging", "Compositing & VFX"],
    curriculum: ["Animasi 2D Digital", "Animasi 3D & Rendering", "Sinema Animasi & Pipeline Produksi"],
    careers: ["Animator 2D/3D", "Layout Artist", "Technical Director", "VFX Artist"],
    highlights: ["Kolaborasi studio animasi nasional", "Laboratorium VR/AR", "Showreel tahunan di festival film pelajar"],
  },
  dkv: {
    name: "Desain Komunikasi Visual",
    tagline: "Desain yang komunikatif untuk kampanye kreatif multi-platform.",
    description:
      "Fokus pada brand identity, ilustrasi digital, motion graphic, dan UI/UX dengan pendekatan human-centered design.",
    image: "assets/images/jurusan/dkv.png",
    competencies: ["Branding & kampanye visual", "Motion graphic & typografi", "UI/UX & desain interaktif"],
    curriculum: ["Desain Grafis Lanjutan", "Motion & Broadcast Design", "UI/UX & Prototyping"],
    careers: ["Art Director", "Motion Designer", "UI/UX Designer", "Creative Strategist"],
    highlights: ["Studio printing & motion lab", "Kolaborasi agency kreatif", "Portofolio digital terkurasi"],
  },
  film: {
    name: "Produksi Film",
    tagline: "Belajar menyutradarai, merekam, dan menyunting film berkelas festival.",
    description:
      "Siswa mempraktikkan sinematografi, tata suara, penulisan naskah, sampai pascaproduksi dengan dukungan studio broadcast.",
    image: "assets/images/jurusan/film.png",
    competencies: ["Penulisan naskah & storyboard", "Sinematografi & lighting", "Editing & color grading"],
    curriculum: ["Produksi Film Pendek", "Broadcast & Live Production", "Sound Design"],
    careers: ["Sutradara", "Sinematografer", "Editor", "Produser Konten"],
    highlights: ["Studio film mini", "Kemitraan PH lokal", "Film go nasional"],
  },
  musik: {
    name: "Seni Musik",
    tagline: "Performa musik modern & tradisional dengan dukungan studio rekaman.",
    description:
      "Mengasah kemampuan instrument, vokal, aransemen, dan produksi audio untuk berbagai skena pertunjukan.",
    image: "assets/images/jurusan/musik.png",
    competencies: ["Instrument mayor & minor", "Arranging & composing", "Produksi audio digital"],
    curriculum: ["Teori Musik Terapan", "Ansambel & Orkestra", "Music Production"],
    careers: ["Musisi profesional", "Composer", "Sound Engineer", "Music Producer"],
    highlights: ["Studio rekaman 24 track", "Kolaborasi label musik", "Konser tahunan"],
  },
  tari: {
    name: "Seni Tari",
    tagline: "Eksplorasi tari tradisi, kontemporer, dan koreografi multimedia.",
    description:
      "Program Tari menekankan teknik tubuh, eksplorasi koreografi, serta pemanfaatan teknologi panggung.",
    image: "assets/images/jurusan/tari.jpg",
    competencies: ["Teknik tari tradisi", "Tari kontemporer", "Koreografi multimedia"],
    curriculum: ["Tari Nusantara", "Koreografi", "Produksi Pertunjukan"],
    careers: ["Penari profesional", "Koreografer", "Pengajar tari", "Creative movement director"],
    highlights: ["Studio tari spring floor", "Kostum & property workshop", "Festival internal tahunan"],
  },
  teater: {
    name: "Seni Teater",
    tagline: "Aktor, dramaturg, dan creative producer dalam satu paket.",
    description:
      "Mempelajari seni peran, tata panggung, tata cahaya, hingga manajemen produksi pertunjukan.",
    image: "assets/images/jurusan/teater.png",
    competencies: ["Akting", "Penulisan naskah", "Tata panggung & cahaya"],
    curriculum: ["Akting Kamera & Panggung", "Dramaturgi", "Produksi Teater"],
    careers: ["Aktor", "Sutradara teater", "Stage Manager", "Production Designer"],
    highlights: ["Black box theater", "Kolaborasi festival teater", "Produksi streaming"],
  },
  karawitan: {
    name: "Seni Karawitan",
    tagline: "Mengharmonikan gamelan klasik dengan inovasi modern.",
    description:
      "Memperdalam teknik karawitan Jawa & Bali, penulisan gending, serta kolaborasi lintas genre.",
    image: "assets/images/jurusan/karawitan.png",
    competencies: ["Gamelan Jawa & Bali", "Komposisi gending", "Vokal sinden"],
    curriculum: ["Instrumen Karawitan", "Komposisi Karawitan", "Pementasan Tradisi"],
    careers: ["Penabuh gamelan", "Komponis tradisi", "Pengajar karawitan"],
    highlights: ["Set gamelan lengkap", "Residensi maestro", "Tur budaya"],
  },
  pedalangan: {
    name: "Seni Pedalangan",
    tagline: "Dalang muda yang fasih tradisi dan multimedia.",
    description:
      "Menggabungkan pakeliran, sabetan, suluk, dan penggunaan multimedia untuk pedalangan kontemporer.",
    image: "assets/images/jurusan/pedalangan.png",
    competencies: ["Pakeliran & sabetan", "Suluk & narrating", "Multimedia wayang"],
    curriculum: ["Pedalangan Gaya Surabaya", "Tata Lampu Wayang", "Story Development"],
    careers: ["Dalang profesional", "Storyteller", "Budayawan"],
    highlights: ["Studio wayang", "Kolaborasi animasi wayang", "Festival pedalangan pelajar"],
  },
  kayu: {
    name: "Kriya Kayu",
    tagline: "Desain furnitur dan kriya kayu modern.",
    description:
      "Menghadirkan karya furnitur, ukir, dan instalasi kayu dengan pendekatan desain berkelanjutan.",
    image: "assets/images/jurusan/kayu.png",
    competencies: ["Desain furnitur", "Teknik ukir", "Finishing kreatif"],
    curriculum: ["CAD untuk Furnitur", "Teknik Produksi Kayu", "Studio Produk Kriya"],
    careers: ["Desainer furnitur", "Artisan kayu", "Wirausaha kriya"],
    highlights: ["Workshop CNC", "Kolaborasi interior", "Produk ekspor"],
  },
  kulit: {
    name: "Kriya Kulit",
    tagline: "Fashion & aksesori kulit premium.",
    description:
      "Belajar merancang dan membuat produk kulit dari tas, sepatu, hingga artwear eksperimental.",
    image: "assets/images/jurusan/kulit.png",
    competencies: ["Pattern making", "Teknik jahit kulit", "Surface treatment"],
    curriculum: ["Desain Produk Kulit", "Teknologi Kulit", "Branding Produk Kriya"],
    careers: ["Desainer aksesori", "Artisan kulit", "Wirausaha fashion"],
    highlights: ["Studio fashion kulit", "Kolaborasi brand lokal", "Marketplace showcase"],
  },
  logam: {
    name: "Kriya Logam dan Perhiasan",
    tagline: "Perhiasan, patung logam, hingga instalasi interaktif.",
    description:
      "Mengembangkan teknik logam modern seperti casting, soldering, dan digital sculpting untuk karya kriya.",
    image: "assets/images/jurusan/logam.png",
    competencies: ["Jewelry design", "Metal casting", "Metal sculpture"],
    curriculum: ["Teknik Logam", "Desain Perhiasan", "Studio Kriya Logam"],
    careers: ["Perancang perhiasan", "Pemahat logam", "Product developer"],
    highlights: ["Peralatan casting lengkap", "Kolaborasi UMKM perhiasan", "Eksposisi nasional"],
  },
  batik: {
    name: "Batik dan Tekstil",
    tagline: "Eksperimen motif khas Surabaya dengan teknologi ramah lingkungan.",
    description:
      "Menggabungkan batik tulis, cap, eco-print, dan digital printing untuk produk tekstil kontemporer.",
    image: "assets/images/jurusan/batik.png",
    competencies: ["Teknik batik tulis/cap", "Desain motif digital", "Pewarnaan alami"],
    curriculum: ["Studio Batik", "Teknologi Tekstil", "Fashion Surface Design"],
    careers: ["Desainer tekstil", "Pembatik profesional", "Entrepreneur craft"],
    highlights: ["Rumah batik mini", "Kemitraan desainer fashion", "Produk kurasi Kemenperin"],
  },
  lukis: {
    name: "Seni Lukis",
    tagline: "Studio seni rupa untuk eksperimen medium tanpa batas.",
    description:
      "Menyediakan ruang eksplorasi cat minyak, akrilik, mural, hingga mixed media berbasis teknologi.",
    image: "assets/images/jurusan/lukis.png",
    competencies: ["Teknik lukis tradisional", "Eksperimen media", "Kurasi pameran"],
    curriculum: ["Studio Painting", "Seni Kontemporer", "Manajemen Pameran"],
    careers: ["Pelukis profesional", "Kurator", "Visualizer"],
    highlights: ["Galeri internal", "Residensi seniman", "Art fair pelajar"],
  },
  ditf: {
    name: "Desain Interior dan Teknik Furnitur",
    tagline: "Merancang ruang imersif dengan simulasi 3D.",
    description:
      "Menggabungkan estetika interior, ergonomi, dan fabrikasi furnitur modern berbasis CAD/CAM.",
    image: "assets/images/jurusan/ditf.jpg",
    competencies: ["Interior 3D modeling", "Material exploration", "Furniture prototyping"],
    curriculum: ["Interior Visualization", "Teknik Furnitur", "Manajemen Proyek"],
    careers: ["Desainer interior junior", "Visualizer 3D", "Furniture engineer"],
    highlights: ["Lab VR interior", "Kolaborasi konsultan interior", "Project real client"],
  },
  pplg: {
    name: "Pengembangan Perangkat Lunak dan Gim",
    tagline: "Creative coding untuk seni digital dan gim interaktif.",
    description:
      "Menguatkan logika pemrograman, desain gim, dan integrasi multimedia untuk produk digital kreatif.",
    image: "assets/images/jurusan/pplg.jpg",
    competencies: ["Pemrograman web & mobile", "Game design", "Creative technology"],
    curriculum: ["Pengembangan Gim", "Web Interaktif", "Creative App Project"],
    careers: ["Game developer", "Front-end engineer", "Creative technologist"],
    highlights: ["Lab XR & IoT", "Hackathon internal", "Kolaborasi startup tech"],
  },
};

const NEWS_DATA = {
  "festival-film": {
    title: "Festival Film Pelajar Nasional",
    tag: "Berita",
    date: "2025-08-12",
    excerpt: "Tim produksi film SMKN 12 menyabet juara umum dengan karya 'Rhapsody of Motion'.",
    body: [
      "Film pendek garapan siswa jurusan Produksi Film berhasil meraih tiga penghargaan sekaligus pada Festival Film Pelajar Nasional 2025.",
      "Proyek ini melibatkan kolaborasi lintas jurusan: Animasi untuk motion graphic, Musik untuk scoring orkestra, dan Desain Komunikasi Visual untuk desain poster.",
      "Kemenangan tersebut membuktikan kekuatan kurikulum kolaboratif dan fasilitas studio yang dimiliki SMKN 12 Surabaya.",
    ],
    prev: "konser-kolaborasi",
    next: "ppdb-2025",
  },
  "ppdb-2025": {
    title: "PPDB 2025/2026 Resmi Dibuka",
    tag: "Pengumuman",
    date: "2025-06-01",
    excerpt: "Simak jadwal, persyaratan, dan tautan resmi pendaftaran peserta didik baru.",
    body: [
      "PPDB daring berlangsung melalui portal PPDB Jatim. Calon siswa diimbau menyiapkan rapor, akta, KK, dan portofolio seni.",
      "SMKN 12 juga membuka formulir internal untuk mempermudah penjadwalan tes minat bakat.",
      "Hubungi tim admisi melalui halaman kontak jika memerlukan bantuan teknis.",
    ],
    prev: "festival-film",
    next: "magang-kreatif",
  },
  "konser-kolaborasi": {
    title: "Konser Kolaborasi Musik & Tari",
    tag: "Berita",
    date: "2025-05-18",
    excerpt: "Kolaborasi besar lintas jurusan menghadirkan pertunjukan imersif di auditorium sekolah.",
    body: [
      "Konser ini menampilkan karya orisinal siswa Musik, Tari, Teater, dan Karawitan dengan dukungan multimedia dari Pengembangan Perangkat Lunak dan Gim.",
      "Pertunjukan memanfaatkan panggung 3D mapping sehingga memberi pengalaman futuristik bagi penonton.",
    ],
    prev: null,
    next: "festival-film",
  },
  "magang-kreatif": {
    title: "Program Magang Industri Kreatif",
    tag: "Pengumuman",
    date: "2025-04-30",
    excerpt: "Slot magang tersedia untuk siswa kelas XII di studio animasi, rumah produksi, dan rumah mode.",
    body: [
      "Program magang berlangsung selama 3 bulan bekerja sama dengan lebih dari 20 mitra industri kreatif.",
      "Seleksi mengutamakan kesiapan portofolio dan nilai sikap. Pendaftaran ditutup pada 20 Mei 2025.",
    ],
    prev: "ppdb-2025",
    next: null,
  },
};

const THEME_STORAGE_KEY = "smkn12-theme";

function applyTheme(theme) {
  const target = document.body;
  if (!target) return;
  const resolved = theme === "dark" ? "dark" : "light";
  target.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.setAttribute("aria-label", resolved === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap");
  }
}

function initTheme() {
  if (!document.body) return;
  let theme = null;
  try {
    theme = localStorage.getItem(THEME_STORAGE_KEY);
  } catch (err) {
    theme = null;
  }
  if (!theme) {
    const prefersDark = typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme = prefersDark ? "dark" : "light";
  }
  applyTheme(theme);
}

function watchSystemTheme() {
  if (typeof window.matchMedia !== "function") {
    return;
  }

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const listener = (event) => {
    try {
      if (localStorage.getItem(THEME_STORAGE_KEY)) {
        return;
      }
    } catch (err) {
      // ignore storage errors and continue
    }
    applyTheme(event.matches ? "dark" : "light");
  };

  if (media.addEventListener) {
    media.addEventListener("change", listener);
  } else if (media.addListener) {
    media.addListener(listener);
  }
}

function setupThemeToggle() {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (err) {
      console.error(err);
    }
  });
}

function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.addEventListener("click", (evt) => {
    if (!nav.contains(evt.target) && !toggle.contains(evt.target)) {
      nav.classList.remove("open");
    }
  });
}

function setupScrollAnimations() {
  const animated = document.querySelectorAll("[data-animate]");
  if (!animated.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animated.forEach((el) => observer.observe(el));
}

function setupMajorFilter() {
  if (!document.body.classList.contains("page-major")) return;

  const buttons = document.querySelectorAll(".major-filter .filter-btn");
  const cards = document.querySelectorAll(".major-card");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const category = card.dataset.category;
        const show = filter === "all" || category === filter;
        card.style.display = show ? "flex" : "none";
      });
    });
  });
}

function setupNewsFilter() {
  if (!document.body.classList.contains("page-news")) return;

  const buttons = document.querySelectorAll(".news-filters .filter-btn");
  const cards = document.querySelectorAll(".news-card");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.type === filter;
        card.style.display = show ? "grid" : "none";
      });
    });
  });
}

function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  if (!tabButtons.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === `tab-${tab}`);
      });
    });
  });
}

function setupLightbox() {
  const lightbox = document.querySelector(".media-lightbox");
  if (!lightbox) return;

  const imgEl = lightbox.querySelector("img");
  const iframe = lightbox.querySelector("iframe");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  function openImage(src, alt) {
    iframe.classList.remove("active");
    iframe.src = "";
    imgEl.src = src;
    imgEl.alt = alt;
    imgEl.classList.add("active");
    lightbox.classList.add("active");
  }

  function openVideo(url) {
    imgEl.classList.remove("active");
    imgEl.src = "";
    iframe.src = url;
    iframe.classList.add("active");
    lightbox.classList.add("active");
  }

  document.querySelectorAll(".masonry-grid figure").forEach((figure) => {
    figure.addEventListener("click", () => {
      openImage(figure.dataset.full, figure.querySelector("img").alt);
    });
  });

  document.querySelectorAll(".video-card").forEach((card) => {
    card.addEventListener("click", () => {
      openVideo(card.dataset.video);
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    iframe.src = "";
  }

  closeBtn?.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("media-backdrop")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closeLightbox();
    }
  });
}

function setupAccordion() {
  document.querySelectorAll(".accordion article").forEach((article) => {
    const button = article.querySelector("button");
    const content = article.querySelector(".accordion-content");
    if (!button || !content) return;

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      article.classList.toggle("active", !expanded);
      content.style.maxHeight = expanded ? null : `${content.scrollHeight}px`;
    });
  });
}

function renderMajorDetail() {
  if (!document.body.classList.contains("page-major-detail")) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = id ? JURUSAN_DATA[id] : null;
  const titleEl = document.getElementById("major-title");
  const taglineEl = document.getElementById("major-tagline");
  const container = document.getElementById("major-detail");

  if (!data || !titleEl || !taglineEl || !container) return;

  titleEl.textContent = data.name;
  taglineEl.textContent = data.tagline;

  container.innerHTML = `
    <div class="major-detail-grid">
      <div class="detail-visual">
        <img class="jurusan-logo" src="${data.image}" alt="${data.name}" loading="lazy" />
        <div class="chip-list">
          ${data.highlights.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
      <div class="detail-body">
        <section>
          <h2>Deskripsi Program</h2>
          <p>${data.description}</p>
        </section>
        <section class="detail-card">
          <h3>Kompetensi</h3>
          <ul>${data.competencies.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="detail-card">
          <h3>Mata Pelajaran Unggulan</h3>
          <ul>${data.curriculum.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="detail-card">
          <h3>Prospek Karier</h3>
          <ul>${data.careers.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <div class="detail-cta">
          <a class="btn primary" href="pendaftaran.html">Daftar Jurusan Ini</a>
          <a class="btn ghost" href="jurusan.html">Kembali ke daftar jurusan</a>
        </div>
      </div>
    </div>
  `;
}

function renderArticleDetail() {
  if (!document.body.classList.contains("page-news-detail")) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = id ? NEWS_DATA[id] : null;
  if (!data) return;

  const titleEl = document.getElementById("article-title");
  const tagEl = document.getElementById("article-tag");
  const excerptEl = document.getElementById("article-excerpt");
  const dateEl = document.getElementById("article-date");
  const contentEl = document.getElementById("article-content");
  const prevLink = document.getElementById("prev-article");
  const nextLink = document.getElementById("next-article");

  if (!titleEl || !tagEl || !excerptEl || !dateEl || !contentEl) return;

  titleEl.textContent = data.title;
  tagEl.textContent = data.tag;
  excerptEl.textContent = data.excerpt;
  dateEl.textContent = new Date(data.date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  dateEl.setAttribute("datetime", data.date);

  contentEl.innerHTML = data.body.map((paragraph) => `<p>${paragraph}</p>`).join("");

  if (prevLink) {
    if (data.prev) {
      prevLink.href = `berita-detail.html?id=${data.prev}`;
    } else {
      prevLink.style.visibility = "hidden";
    }
  }

  if (nextLink) {
    if (data.next) {
      nextLink.href = `berita-detail.html?id=${data.next}`;
    } else {
      nextLink.style.visibility = "hidden";
    }
  }
}

function init() {
  initTheme();
  watchSystemTheme();
  setupThemeToggle();
  setupNavToggle();
  setupScrollAnimations();
  setupMajorFilter();
  setupNewsFilter();
  setupTabs();
  setupLightbox();
  setupAccordion();
  renderMajorDetail();
  renderArticleDetail();
}

document.addEventListener("DOMContentLoaded", init);
