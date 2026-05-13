# 🚀 Quick Start Guide

Panduan cepat untuk menjalankan dan deploy portfolio ini!

---

## ⚡ 5 Menit Setup & Run

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/modern-portfolio-advanced.git
cd modern-portfolio-advanced
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Buka browser: **http://localhost:3000**

---

## 🎨 10 Menit Kustomisasi

### 1. Update Data Pribadi

Edit file: `src/data/portfolio-data.ts`

```typescript
export const personalInfo = {
  name: 'Nama Anda',
  title: 'Full Stack Developer',
  email: 'email@anda.com',
  // ... update semua data
};
```

### 2. Ganti Gambar

- Avatar: `public/images/avatar.jpg`
- Skills: `public/images/skills/`
- Projects: `public/images/projects/`

Lihat **IMAGE_GUIDE.md** untuk detail.

### 3. Update Warna (Opsional)

Edit file: `src/index.css`

```css
@theme {
  --color-primary-500: #warna-anda;
  --color-accent-500: #warna-anda;
}
```

---

## 📤 15 Menit Deploy ke GitHub Pages

### 1. Buat Repository di GitHub

- Nama: `portfolio` (atau nama lain)
- Visibility: Public atau Private
- **JANGAN** initialize dengan README

### 2. Update Konfigurasi

Edit file: `vite.config.ts`

```typescript
const REPOSITORY_NAME = 'portfolio'; // Ganti dengan nama repo Anda
```

Edit file: `package.json`

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/portfolio/"
}
```

### 3. Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 4. Deploy

```bash
# Install gh-pages (jika belum)
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

### 5. Enable GitHub Pages

1. Buka repository di GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` → `/ (root)`
5. Save

**Website live dalam 1-2 menit!**

URL: `https://YOUR_USERNAME.github.io/portfolio/`

---

## 📚 Dokumentasi Lengkap

| Dokumen | Isi | Baca Jika |
|---------|-----|-----------|
| **README.md** | Overview & features | Pertama kali |
| **DEPLOYMENT.md** | Panduan deploy lengkap | Mau deploy |
| **IMAGE_GUIDE.md** | Panduan ganti gambar | Mau custom gambar |
| **ANIMATION_GUIDE.md** | Panduan animasi | Mau custom animasi |
| **CONTRIBUTING.md** | Cara berkontribusi | Mau contribute |
| **QUICK_START.md** | Panduan cepat (ini) | Butuh cepat |

---

## 🛠️ Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build untuk production
npm run preview      # Preview build
npm run deploy       # Deploy ke GitHub Pages

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code dengan Prettier

# Git
git init             # Initialize git
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to remote
```

---

## 📁 Struktur Folder Penting

```
modern-portfolio-advanced/
├── src/
│   ├── data/
│   │   └── portfolio-data.ts    ← UPDATE DATA DI SINI
│   ├── components/
│   │   ├── sections/            ← Section components
│   │   ├── ui/                  ← UI components
│   │   └── animations/          ← Animation components
│   └── index.css                ← Custom styles
│
├── public/
│   └── images/                  ← UPLOAD GAMBAR DI SINI
│       ├── avatar.jpg
│       ├── skills/
│       ├── projects/
│       └── ...
│
├── vite.config.ts               ← Konfigurasi Vite
├── package.json                 ← Dependencies & scripts
└── README.md                    ← Dokumentasi utama
```

---

## ✅ Checklist Sebelum Deploy

- [ ] Update data pribadi di `portfolio-data.ts`
- [ ] Ganti avatar dan gambar
- [ ] Test di local (`npm run dev`)
- [ ] Build berhasil (`npm run build`)
- [ ] Update `vite.config.ts` base path
- [ ] Update `package.json` homepage
- [ ] Push ke GitHub
- [ ] Deploy (`npm run deploy`)
- [ ] Enable GitHub Pages di Settings
- [ ] Test website live

---

## 🆘 Troubleshooting Cepat

### Build Error
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deploy Error
```bash
# Force deploy
npm run deploy -- -f
```

### Blank Page
- Cek console browser (F12)
- Pastikan base path benar di `vite.config.ts`
- Clear cache browser

### Images Not Loading
- Pastikan ada di folder `public/images/`
- Cek path di `portfolio-data.ts`
- Restart dev server

---

## 🎯 Next Steps

1. ✅ Setup & Run → **DONE**
2. 🎨 Kustomisasi data & gambar
3. 📤 Deploy ke GitHub Pages
4. 🌐 Setup custom domain (opsional)
5. 📊 Add analytics (opsional)
6. 🔄 Update konten secara berkala

---

## 📞 Butuh Bantuan?

- 📖 Baca dokumentasi lengkap
- 🐛 Buat issue di GitHub
- 💬 Contact author: alex@portfolio.dev

---

**Selamat! Portfolio Anda siap digunakan!** 🎉

**Happy Coding!** 💻✨
