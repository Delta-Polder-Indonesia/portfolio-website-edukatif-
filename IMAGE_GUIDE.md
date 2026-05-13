# 🖼️ PANDUAN LENGKAP MENGGANTI GAMBAR DI PORTFOLIO

> Panduan edukatif ini menjelaskan **setiap lokasi gambar** di portfolio dan **cara menggantinya** dengan gambar Anda sendiri.

---

## 📋 Daftar Isi

1. [Struktur Folder Gambar](#-struktur-folder-gambar)
2. [Foto Profil](#-foto-profil)
3. [Icon Skills](#-icon-skills)
4. [Gambar Proyek](#-gambar-proyek)
5. [Foto Testimoni](#-foto-testimoni)
6. [Gambar Blog](#-gambar-blog)
7. [Icon Layanan](#-icon-layanan)
8. [Tools & Resources](#-tools--resources)
9. [Optimasi Gambar](#-optimasi-gambar)
10. [Troubleshooting](#-troubleshooting)

---

## 📁 Struktur Folder Gambar

Semua gambar disimpan di folder `public/images/` dengan struktur:

```
public/
└── images/
    ├── avatar.jpg              ← Foto profil utama
    ├── fallback.svg            ← Fallback jika gambar tidak ditemukan
    │
    ├── skills/                 ← Icon teknologi
    │   ├── react.svg
    │   ├── typescript.svg
    │   ├── tailwind.svg
    │   ├── nodejs.svg
    │   └── ... (20 icon lainnya)
    │
    ├── projects/               ← Screenshot proyek
    │   ├── ecommerce.jpg
    │   ├── dashboard.jpg
    │   ├── social.jpg
    │   ├── ai.jpg
    │   ├── task.jpg
    │   └── crypto.jpg
    │
    ├── testimonials/           ← Foto klien/kolega
    │   ├── budi.jpg
    │   ├── sarah.jpg
    │   ├── michael.jpg
    │   └── dewi.jpg
    │
    ├── blog/                   ← Featured image artikel
    │   ├── react-server.jpg
    │   ├── typescript.jpg
    │   └── tailwind.jpg
    │
    └── services/               ← Icon layanan
        ├── webdev.svg
        ├── design.svg
        ├── mobile.svg
        └── consulting.svg
```

---

## 👤 Foto Profil

### 📍 Lokasi File
- **Path di kode:** `src/data/portfolio-data.ts`
- **Field:** `personalInfo.avatar`
- **Default:** `/images/avatar.jpg`

### 📏 Spesifikasi
| Property | Nilai |
|----------|-------|
| Ukuran ideal | 500x500 px (square) |
| Aspect ratio | 1:1 |
| Format | JPG atau PNG |
| Max size | 300 KB |
| Background | Polos atau blur |

### 🔧 Cara Mengganti

1. **Siapkan foto Anda**
   - Foto profesional dengan pencahayaan baik
   - Background polos lebih baik
   - Ekspresi ramah

2. **Simpan file**
   ```bash
   # Simpan di folder public/images/
   public/images/avatar.jpg
   ```

3. **Update kode** (jika nama file berbeda)
   ```typescript
   // src/data/portfolio-data.ts
   export const personalInfo = {
     avatar: '/images/avatar.jpg', // ← Update path di sini
     // ...
   };
   ```

4. **Refresh browser**

### 💡 Tips
- Gunakan foto LinkedIn profile sebagai referensi
- Crop menjadi square dengan tools: crop-circle-image.com
- Compress dengan: tinypng.com

---

## 🎨 Icon Skills

### 📍 Lokasi File
- **Path di kode:** `src/data/portfolio-data.ts`
- **Field:** `skills[].icon`
- **Folder:** `/public/images/skills/`

### 📋 Daftar Icon yang Digunakan

| Skill | File Path | Sumber Icon |
|-------|-----------|-------------|
| React | `/images/skills/react.svg` | https://cdn.simpleicons.org/react |
| TypeScript | `/images/skills/typescript.svg` | https://cdn.simpleicons.org/typescript |
| Tailwind CSS | `/images/skills/tailwind.svg` | https://cdn.simpleicons.org/tailwindcss |
| Vue.js | `/images/skills/vue.svg` | https://cdn.simpleicons.org/vuedotjs |
| HTML5 | `/images/skills/html.svg` | https://cdn.simpleicons.org/html5 |
| JavaScript | `/images/skills/javascript.svg` | https://cdn.simpleicons.org/javascript |
| Node.js | `/images/skills/nodejs.svg` | https://cdn.simpleicons.org/nodedotjs |
| Python | `/images/skills/python.svg` | https://cdn.simpleicons.org/python |
| PostgreSQL | `/images/skills/postgresql.svg` | https://cdn.simpleicons.org/postgresql |
| MongoDB | `/images/skills/mongodb.svg` | https://cdn.simpleicons.org/mongodb |
| Docker | `/images/skills/docker.svg` | https://cdn.simpleicons.org/docker |
| Git | `/images/skills/git.svg` | https://cdn.simpleicons.org/git |
| Figma | `/images/skills/figma.svg` | https://cdn.simpleicons.org/figma |

### 🔧 Cara Mengganti

**Opsi 1: Download dari Simple Icons (Recommended)**
```bash
# Contoh download icon React
curl https://cdn.simpleicons.org/react -o public/images/skills/react.svg
```

**Opsi 2: Buat SVG Manual**
```svg
<!-- public/images/skills/react.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <!-- Your SVG content here -->
</svg>
```

**Opsi 3: Update Path di portfolio-data.ts**
```typescript
// src/data/portfolio-data.ts
export const skills: Skill[] = [
  { 
    name: 'React / Next.js', 
    icon: '/images/skills/react.svg' // ← Ganti path di sini
  },
  // ...
];
```

### 💡 Tips
- Gunakan format SVG untuk kualitas terbaik
- Ukuran viewBox: 64x64 atau 128x128
- Hapus attribute `fill` agar bisa di-style dengan CSS
- Consistent style: semua outline atau semua filled

---

## 💼 Gambar Proyek

### 📍 Lokasi File
- **Path di kode:** `src/data/portfolio-data.ts`
- **Field:** `projects[].image`
- **Folder:** `/public/images/projects/`

### 📋 Daftar Proyek

| Proyek | File Path | Ukuran Ideal |
|--------|-----------|--------------|
| E-Commerce | `/images/projects/ecommerce.jpg` | 800x600 px |
| Dashboard | `/images/projects/dashboard.jpg` | 800x600 px |
| Social Media | `/images/projects/social.jpg` | 800x600 px |
| AI Content | `/images/projects/ai.jpg` | 800x600 px |
| Task Management | `/images/projects/task.jpg` | 800x600 px |
| Crypto Tracker | `/images/projects/crypto.jpg` | 800x600 px |

### 🔧 Cara Mengganti

1. **Ambil Screenshot Proyek**
   - Buka aplikasi/proyek Anda
   - Screenshot area utama (full page screenshot lebih baik)
   - Tools: Lightshot, Nimbus Screenshot

2. **Buat Mockup (Opsional tapi Recommended)**
   - Kunjungi: shots.so, mockupworld.co, ls.graphics
   - Upload screenshot
   - Pilih template browser/device
   - Download hasil mockup

3. **Simpan File**
   ```bash
   public/images/projects/nama-proyek.jpg
   ```

4. **Update Kode**
   ```typescript
   // src/data/portfolio-data.ts
   {
     title: 'Nama Proyek Anda',
     image: '/images/projects/nama-proyek.jpg', // ← Update di sini
     // ...
   }
   ```

### 💡 Tips
- Gunakan mockup untuk presentasi lebih profesional
- Tools mockup gratis:
  - shots.so (paling mudah)
  - mockupworld.co (banyak template)
  - ls.graphics (premium quality)
- Aspect ratio: 4:3 atau 16:9
- Compress dengan: squoosh.app

---

## 👥 Foto Testimoni

### 📍 Lokasi File
- **Path di kode:** `src/data/portfolio-data.ts`
- **Field:** `testimonials[].avatar`
- **Folder:** `/public/images/testimonials/`

### 🔧 Cara Mengganti

1. **Minta Foto dari Klien**
   - Minta foto profesional
   - Atau gunakan foto LinkedIn

2. **Crop menjadi Square**
   - Gunakan: crop-circle-image.com
   - Atau: canva.com (create 1:1 design)

3. **Simpan File**
   ```bash
   public/images/testimonials/nama-klien.jpg
   ```

4. **Update Kode**
   ```typescript
   // src/data/portfolio-data.ts
   {
     name: 'Nama Klien',
     avatar: '/images/testimonials/nama-klien.jpg', // ← Update di sini
     // ...
   }
   ```

### 💡 Tips
- Jika tidak ada foto, komponen akan otomatis menampilkan inisial dengan gradient
- Ukuran ideal: 200x200 px
- Format: JPG atau PNG
- Max size: 100 KB

---

## 📝 Gambar Blog

### 📍 Lokasi File
- **Path di kode:** `src/data/portfolio-data.ts`
- **Field:** `blogPosts[].image`
- **Folder:** `/public/images/blog/`

### 🔧 Cara Mengganti

1. **Siapkan Featured Image**
   - Ukuran: 800x400 px (2:1 ratio)
   - Relevan dengan konten artikel
   - Sumber gratis: unsplash.com, pexels.com

2. **Buat Custom (Recommended)**
   - Canva: search "blog featured image"
   - Tambahkan judul artikel
   - Tambahkan branding/nama Anda

3. **Simpan File**
   ```bash
   public/images/blog/nama-artikel.jpg
   ```

4. **Update Kode**
   ```typescript
   // src/data/portfolio-data.ts
   {
     title: 'Judul Artikel',
     image: '/images/blog/nama-artikel.jpg', // ← Update di sini
     // ...
   }
   ```

### 💡 Tips
- Gunakan template konsisten untuk semua artikel
- Tambahkan text overlay untuk branding
- Compress untuk web: tinypng.com

---

## 🛠️ Icon Layanan

### 📍 Lokasi File
- **Path di kode:** `src/data/portfolio-data.ts`
- **Field:** `services[].icon`
- **Folder:** `/public/images/services/`

### 📋 Daftar Layanan

| Layanan | File Path |
|---------|-----------|
| Web Development | `/images/services/webdev.svg` |
| UI/UX Design | `/images/services/design.svg` |
| Mobile Development | `/images/services/mobile.svg` |
| Consulting | `/images/services/consulting.svg` |

### 🔧 Cara Mengganti

1. **Download Icon**
   - Heroicons: https://heroicons.com
   - Lucide: https://lucide.dev
   - Phosphor: https://phosphoricons.com

2. **Simpan sebagai SVG**
   ```bash
   public/images/services/webdev.svg
   ```

3. **Update Kode**
   ```typescript
   // src/data/portfolio-data.ts
   {
     title: 'Web Development',
     icon: '/images/services/webdev.svg', // ← Update di sini
     // ...
   }
   ```

---

## 🛠️ Tools & Resources

### 📸 Sumber Gambar Gratis

| Website | Jenis | Lisensi |
|---------|-------|---------|
| Unsplash | Foto | Free |
| Pexels | Foto & Video | Free |
| Pixabay | Foto, Vektor, Ilustrasi | Free |
| Burst | Foto | Free |

### 🎨 Sumber Icon

| Website | Format | Lisensi |
|---------|--------|---------|
| Simple Icons | SVG | CC0 |
| Heroicons | SVG | MIT |
| Lucide | SVG | ISC |
| Phosphor Icons | SVG | MIT |
| Devicon | SVG | MIT |

### 🖼️ Tools Edit Gambar

| Tool | Fungsi | Harga |
|------|--------|-------|
| Canva | Design & Mockup | Free/Paid |
| Figma | Design UI | Free |
| Photopea | Photoshop alternative | Free |
| GIMP | Photo editor | Free |

### 🗜️ Tools Compress Gambar

| Tool | Format | Max Reduction |
|------|--------|---------------|
| TinyPNG | PNG, JPG | ~70% |
| Squoosh | Multiple | ~80% |
| Compressor.io | PNG, JPG, GIF, SVG | ~90% |

### 📐 Tools Mockup

| Tool | Tipe | Harga |
|------|------|-------|
| shots.so | Browser/Device | Free |
| Mockup World | Various | Free |
| LS Graphics | Premium | Paid |
| Smartmockups | Various | Free/Paid |

---

## ⚡ Optimasi Gambar

### Best Practices

1. **Ukuran File**
   - Avatar: < 300 KB
   - Projects: < 500 KB
   - Blog: < 300 KB
   - Icons: < 10 KB (SVG)

2. **Format File**
   - Foto: JPG (lebih kecil)
   - Icon/Logo: SVG (scalable)
   - Transparan: PNG

3. **Dimensi**
   - Jangan upload gambar lebih besar dari yang ditampilkan
   - Responsive images akan di-handle browser

4. **Lazy Loading**
   - Sudah otomatis di komponen Image
   - Gambar hanya load saat terlihat

### 📊 Checklist Optimasi

- [ ] Compress semua gambar JPG/PNG
- [ ] Convert icon ke SVG
- [ ] Resize ke dimensi yang tepat
- [ ] Remove metadata (EXIF)
- [ ] Gunakan WebP untuk foto (opsional)

---

## 🔧 Troubleshooting

### ❌ Gambar Tidak Muncul

**Ceklist:**
1. ✅ File ada di folder yang benar?
2. ✅ Path di portfolio-data.ts benar?
3. ✅ Nama file case-sensitive (huruf besar/kecil)?
4. ✅ Sudah restart dev server?

**Solusi:**
```bash
# Restart dev server
npm run dev

# Clear cache browser
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

### ❌ Gambar Pecah/Buram

**Penyebab:**
- Gambar terlalu kecil untuk ukuran display

**Solusi:**
- Upload gambar dengan resolusi lebih tinggi
- Minimal 2x dari ukuran display

### ❌ Gambar Terlalu Besar (Lambat)

**Solusi:**
```bash
# Compress dengan CLI (jika punya imagemagick)
convert input.jpg -quality 80% output.jpg

# Atau gunakan online tools
# - tinypng.com
# - squoosh.app
```

### ❌ Icon SVG Tidak Berwarna

**Penyebab:**
- SVG punya attribute `fill` hardcoded

**Solusi:**
```svg
<!-- Sebelum -->
<svg fill="#000000" ...>

<!-- Sesudah -->
<svg fill="currentColor" ...>
<!-- atau hapus attribute fill -->
```

---

## 📚 Referensi Tambahan

### 📖 Dokumentasi

- [React Image Component](https://react.dev/learn/images)
- [Tailwind CSS Background Images](https://tailwindcss.com/docs/background-image)
- [SVG Best Practices](https://www.w3.org/TR/SVG/)
- [Web Performance Image Optimization](https://web.dev/fast/#optimize-your-images)

### 🎥 Video Tutorial

- [Image Optimization for Web](https://www.youtube.com/results?search_query=image+optimization+web)
- [SVG Icons Best Practices](https://www.youtube.com/results?search_query=svg+icons+best+practices)

---

## 📞 Bantuan

Jika masih ada pertanyaan:
1. Cek file ini lagi
2. Lihat komentar di setiap komponen
3. Inspect element di browser
4. Cek console untuk error messages

---

> 💡 **Tips Senior Developer:**
> 
> "Gambar adalah aset paling berat di website. Selalu optimasi sebelum deploy. 
> Pengguna tidak akan menunggu website yang lambat hanya karena gambar 5MB."
> 
> — 20 tahun pengalaman web development

---

**Terakhir Update:** 2024
**Versi:** 1.0
