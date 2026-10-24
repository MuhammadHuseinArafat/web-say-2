# 🚀 Website Pribadi Bertema Angkasa

Website portofolio sederhana tentang diri saya dengan tema luar angkasa. Dibuat hanya menggunakan **HTML**, **CSS**, dan **Vanilla JavaScript**, tanpa framework dan tanpa proses build.

## ✨ Fitur

- Latar belakang bintang berkelap-kelip dan bintang jatuh (HTML Canvas)
- Hero dengan planet, bulan yang mengorbit, dan astronaut melayang
- Efek mengetik otomatis pada judul peran
- Navbar responsif dengan menu hamburger di layar kecil
- Animasi muncul saat scroll, skill bar, dan counter angka
- Form kontak yang membuka aplikasi email
- Tombol "kembali ke atas"
- Mendukung pengguna yang memilih pengurangan animasi (`prefers-reduced-motion`)

## 📁 Struktur Proyek

```
.
├── index.html   # Struktur halaman
├── style.css    # Tampilan dan animasi
├── script.js    # Interaksi dan efek
└── README.md    # Dokumentasi
```

## ▶️ Cara Menjalankan

1. Unduh atau salin semua file ke satu folder.
2. Buka `index.html` dengan browser (klik dua kali).
3. Selesai! Tidak perlu instalasi apa pun.

Opsional, jalankan dengan server lokal (misalnya ekstensi *Live Server* di VS Code) agar perubahan langsung terlihat.

## 🛠️ Cara Mengubah Konten

### Data diri
Buka `index.html`, lalu ganti teks berikut:

| Bagian | Yang diganti |
| --- | --- |
| `<title>` dan logo | "Nama Kamu" |
| Section `#beranda` | Nama dan deskripsi singkat |
| Section `#tentang` | Cerita tentang diri, angka statistik (`data-target`) |
| Section `#skill` | Nama skill dan persentase (`data-width` dan teks %) |
| Section `#proyek` | Judul, deskripsi, dan link proyek |
| Section `#kontak` | Link GitHub, Instagram, LinkedIn |

### Teks mengetik
Di `script.js`, ubah array `roles`:

```js
const roles = ["Penjelajah Digital", "Web Developer", "Pecinta Astronomi"];
```

### Email tujuan form kontak
Di `script.js`, ganti nilai `EMAIL_TUJUAN`:

```js
const EMAIL_TUJUAN = "emailkamu@example.com";
```

### Warna tema
Di `style.css`, ubah variabel pada `:root`:

```css
:root {
  --primary: #7c5cff;
  --secondary: #00d4ff;
  --accent: #ff7ad9;
}
```

## 🌐 Cara Mempublikasikan (Gratis)

- **GitHub Pages**: unggah ke repositori GitHub, lalu aktifkan di *Settings → Pages*.
- **Netlify** atau **Vercel**: seret dan lepas folder proyek ke dashboard mereka.

## 🧰 Teknologi

- HTML5
- CSS3 (Grid, Flexbox, Animation, Backdrop Filter)
- JavaScript ES6+ (Canvas API, IntersectionObserver)
- Font: [Orbitron](https://fonts.google.com/specimen/Orbitron) dan [Poppins](https://fonts.google.com/specimen/Poppins) dari Google Fonts

## 📄 Lisensi

Bebas digunakan dan dimodifikasi untuk keperluan pribadi.
