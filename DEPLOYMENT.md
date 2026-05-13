# 🚀 Panduan Deployment ke GitHub Pages

Panduan lengkap untuk deploy portfolio Anda ke GitHub Pages secara gratis!

---

## 📋 Daftar Isi

1. [Prerequisites](#-prerequisites)
2. [Setup Repository](#-setup-repository)
3. [Konfigurasi Vite](#-konfigurasi-vite)
4. [Deploy Manual](#-deploy-manual)
5. [Deploy dengan GitHub Actions](#-deploy-dengan-github-actions)
6. [Custom Domain](#-custom-domain)
7. [Troubleshooting](#-troubleshooting)

---

## ✅ Prerequisites

Sebelum deploy, pastikan:

- ✅ GitHub account
- ✅ Git terinstall di komputer
- ✅ Node.js >= 18.0.0
- ✅ Project sudah di-build tanpa errors

---

## 🛠️ Setup Repository

### Step 1: Buat Repository di GitHub

1. Login ke GitHub
2. Klik "+" di pojok kanan atas
3. Pilih "New repository"
4. Isi nama repository (contoh: `portfolio`)
5. Pilih **Public** atau **Private**
6. **JANGAN** centang "Initialize with README"
7. Klik "Create repository"

### Step 2: Initialize Git di Local

```bash
# Masuk ke folder project
cd modern-portfolio-advanced

# Initialize git
git init

# Add semua files
git add .

# Commit pertama
git commit -m "Initial commit: Modern Portfolio v2.0"
```

### Step 3: Connect ke GitHub

```bash
# Add remote repository
# Ganti YOUR_USERNAME dengan username GitHub Anda
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push ke GitHub
git push -u origin main

# Jika branch Anda 'master' bukan 'main'
git branch -M main
git push -u origin main
```

---

## ⚙️ Konfigurasi Vite

### Update vite.config.ts

File `vite.config.ts` sudah dikonfigurasi untuk GitHub Pages:

```typescript
// Ganti dengan nama repository Anda
const REPOSITORY_NAME = 'portfolio';

// Base path otomatis: /portfolio/
const base = `/${REPOSITORY_NAME}/`;
```

**PENTING:** Jika nama repository berbeda, update di `vite.config.ts`:

```typescript
const REPOSITORY_NAME = 'nama-repository-anda';
```

### Update package.json

Pastikan `package.json` memiliki scripts untuk deploy:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/portfolio/"
}
```

**Update `homepage`** dengan URL GitHub Pages Anda:
```
https://YOUR_USERNAME.github.io/NAMA_REPOSITORY/
```

---

## 📤 Deploy Manual

### Method 1: Menggunakan gh-pages (Recommended)

```bash
# Install gh-pages (sudah terinstall)
npm install --save-dev gh-pages

# Build project
npm run build

# Deploy ke GitHub Pages
npm run deploy
```

**Apa yang terjadi:**
1. `predeploy` script akan build project
2. `deploy` script akan push folder `dist` ke branch `gh-pages`
3. GitHub akan serve dari branch `gh-pages`

### Method 2: Manual Push

```bash
# Build
npm run build

# Masuk ke folder dist
cd dist

# Initialize git di folder dist
git init

# Add semua files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Add remote (ganti YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push ke branch gh-pages
git push -u origin main:gh-pages
```

---

## 🔄 Deploy dengan GitHub Actions (Auto Deploy)

### Step 1: Buat Workflow File

Buat file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Deploy setiap push ke branch main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          publish_branch: gh-pages
```

### Step 2: Push Workflow File

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Buka repository di GitHub
2. Klik tab "Settings"
3. Scroll ke "Pages" di sidebar kiri
4. Di "Source", pilih:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Klik "Save"

### Step 4: Auto Deploy

Setiap kali Anda push ke branch `main`:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Actions akan otomatis:
1. Build project
2. Deploy ke GitHub Pages
3. Update website dalam 1-2 menit

---

## 🌐 Custom Domain

### Step 1: Beli Domain

Beli domain dari provider (Namecheap, GoDaddy, dll).

### Step 2: Setup DNS

**Option A: Subdomain (portfolio.yourdomain.com)**

```
Type: CNAME
Name: portfolio
Value: YOUR_USERNAME.github.io
TTL: Automatic
```

**Option B: Root Domain (yourdomain.com)**

```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### Step 3: Update CNAME File

Buat file `public/CNAME`:

```
yourdomain.com
```

Atau untuk subdomain:
```
portfolio.yourdomain.com
```

### Step 4: Update vite.config.ts

```typescript
// Untuk custom domain, base bisa kosong
const base = '/'; // atau ''
```

### Step 5: Update GitHub Pages Settings

1. Settings → Pages
2. Di "Custom domain", masukkan domain Anda
3. Centang "Enforce HTTPS"
4. Klik "Save"

---

## 🔧 Troubleshooting

### Problem 1: 404 Not Found

**Penyebab:**
- Base path salah
- Files tidak ter-deploy

**Solusi:**
```bash
# Cek vite.config.ts
const base = '/nama-repository/';

# Re-build dan re-deploy
npm run build
npm run deploy
```

### Problem 2: Blank Page

**Penyebab:**
- JavaScript error
- Assets path salah

**Solusi:**
1. Buka browser console (F12)
2. Cek error messages
3. Fix errors
4. Re-deploy

### Problem 3: Images Not Loading

**Penyebab:**
- Image path salah
- Images tidak ter-include di build

**Solusi:**
```typescript
// ✅ GOOD: Import images
import avatar from './images/avatar.jpg';
<img src={avatar} alt="Avatar" />

// ✅ GOOD: Use public folder
<img src="/images/avatar.jpg" alt="Avatar" />

// ❌ BAD: Relative path yang salah
<img src="./images/avatar.jpg" alt="Avatar" />
```

### Problem 4: CSS Not Loading

**Penyebab:**
- CSS import hilang
- Build error

**Solusi:**
```typescript
// Pastikan import di main.tsx
import './index.css';
```

### Problem 5: Deploy Gagal

**Penyebab:**
- Build error
- Permission issue

**Solusi:**
```bash
# Clear cache
npm cache clean --force

# Re-install dependencies
rm -rf node_modules package-lock.json
npm install

# Re-build
npm run build

# Force deploy
npm run deploy -- -f
```

---

## 📊 Deployment Checklist

Sebelum deploy, pastikan:

- [ ] Build berhasil tanpa errors
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] Tested di local
- [ ] Tested responsive
- [ ] Images optimized
- [ ] vite.config.ts base path benar
- [ ] package.json homepage benar
- [ ] .gitignore tidak exclude files penting
- [ ] License dan dokumentasi lengkap

---

## 🎯 Post-Deployment

### Verify Deployment

1. Buka URL: `https://YOUR_USERNAME.github.io/portfolio/`
2. Test semua halaman
3. Test semua links
4. Test di mobile
5. Test di multiple browsers

### Monitor Performance

Tools untuk monitor:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
- [WebPageTest](https://www.webpagetest.org/)

### Analytics (Optional)

Tambahkan Google Analytics:

```html
<!-- Di index.html, sebelum </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 📈 Update Website

### Manual Update

```bash
# Make changes
# ...

# Commit
git add .
git commit -m "Update: tambah section baru"

# Push (auto deploy jika pakai GitHub Actions)
git push origin main

# Atau manual deploy
npm run deploy
```

### Check Deploy Status

1. Buka repository di GitHub
2. Klik tab "Actions"
3. Lihat workflow run terakhir
4. Jika ✅ green, deploy berhasil
5. Jika ❌ red, klik untuk lihat error

---

## 🔗 Useful Links

- [GitHub Pages Documentation](https://pages.github.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 🎉 Success!

Jika deployment berhasil, website Anda akan live di:

```
https://YOUR_USERNAME.github.io/portfolio/
```

**Selamat!** Portfolio Anda sekarang online dan bisa diakses dari mana saja! 🚀

---

**Last Updated:** 2024
**Version:** 2.0
