# SMKN 12 Surabaya – The Real Arts School

Website statis multi-halaman untuk mempresentasikan SMK Negeri 12 Surabaya sebagai pusat keunggulan seni dan industri kreatif. Seluruh konten dari profil sekolah, daftar jurusan, galeri multimedia, berita, hingga PPDB dirancang dengan antarmuka modern, animasi halus, serta dukungan mode terang/gelap.

## Sorotan Utama
- Landing page hero dengan video profil YouTube, statistik singkat, dan CTA profil + pendaftaran.
- Cerita perjalanan sekolah, visi-misi, struktur organisasi, fasilitas, dan daftar prestasi tersaji lengkap di halaman Profil.
- 15 program keahlian dikategorikan (Pertunjukan, Rupa/Kriya, Teknologi) dengan filter interaktif dan halaman detail dinamis berisi kompetensi, kurikulum, prospek karier.
- Galeri foto/video bertabs dengan lightbox dan pemutar video embedded.
- Portal berita + pengumuman dengan filter tipe konten dan halaman detail artikel yang dibangun dari data JSON.
- Halaman PPDB berisi alur langkah demi langkah, formulir FormSubmit, serta FAQ accordion.
- Halaman Kontak memuat informasi alamat, form pesan, dan peta Google Maps langsung.
- Navigasi mobile-friendly, animasi saat scroll (IntersectionObserver), toggle tema dengan penyimpanan `localStorage`, dan komponen UI reusable (tabs, accordion, lightbox).

## Struktur Halaman
- `index.html` – Beranda, highlight jurusan, berita terkini, galeri mini, CTA pendaftaran.
- `profil.html` – Sejarah, visi-misi, kebijakan mutu, struktur organisasi, fasilitas, prestasi.
- `jurusan.html` & `jurusan-detail.html` – Grid jurusan dengan filter dan detail program berbasis data.
- `galeri.html` – Dokumentasi foto/video dengan lightbox.
- `berita.html` & `berita-detail.html` – Arsip berita/pengumuman dengan filter tipe artikel.
- `pendaftaran.html` – Informasi PPDB, langkah pendaftaran, formulir internal, FAQ.
- `kontak.html` – Kontak sekolah, form email, dan peta lokasi.

## Teknologi
- HTML5 semantik, CSS custom (glassmorphism, grid, responsive layout), Google Fonts Space Grotesk & Plus Jakarta Sans.
- Vanilla JavaScript untuk tema gelap/terang, menu mobile, animasi scroll, filter kartu, tabs, lightbox, accordion, serta rendering data jurusan & berita.
- Integrasi pihak ketiga: embed YouTube, Google Maps iframe, FormSubmit untuk pengiriman form.

## Cara Menjalankan
1. Clone repo: `git clone https://github.com/rifkyfaturpuloo/MyRolas/<repo>.git`
2. Buka folder proyek: `cd smkn12-surabaya`
3. Jalankan secara lokal lewat server statis (opsional) `python -m http.server 8000` lalu akses `http://localhost:8000`
   - Atau cukup buka `index.html` langsung di browser modern.

## Pengembangan Lanjut
- Menambahkan CMS/headless backend agar berita & data jurusan bisa diperbarui non-teknis.
- Mengintegrasikan Google Form/PPDB resmi untuk sinkronisasi otomatis.
- Menyisipkan dokumentasi kontribusi dan panduan deployment (GitHub Pages/Vercel).

Silakan sesuaikan nama repo atau bagian lain jika diperlukan.
