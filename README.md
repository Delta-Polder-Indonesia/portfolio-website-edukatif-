# 🚀 Portfolio Modern - Full Stack Developer

> ⚡ **UPGRADE: ADVANCED ANIMATIONS EDITION** ⚡
>
> Portfolio website dengan animasi level **SEGESTA** dan **PowerPoint professional**. 
> Dibangun dengan **React**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer)

---

## 🎬 Animasi Advanced (BARU!)

> ⚡ Portfolio ini sekarang menggunakan **15+ animasi advanced** seperti website SEGESTA dan presentasi PowerPoint professional!

### 📖 Panduan Lengkap: [**ANIMATION_GUIDE.md**](ANIMATION_GUIDE.md)

**Animasi yang Tersedia:**

| Kategori | Animasi | Komponen |
|----------|---------|----------|
| **Entrance** | Fade In, Scale, Rotate | `AnimatedSection` |
| **Text** | Text Reveal, Gradient | `TextReveal` |
| **Background** | Morphing Blob, Parallax | `MorphingShape`, `ParallaxScroll` |
| **Grid** | Stagger Animation | `StaggerGrid` |
| **Interactive** | Card Flip, Hover | `CardFlip` |
| **Numbers** | Count Up | `NumberCounter` |

**Quick Start:**
```typescript
// Import komponen animasi
import TextReveal from './components/animations/TextReveal';
import NumberCounter from './components/animations/NumberCounter';
import StaggerGrid from './components/animations/StaggerGrid';
import MorphingShape from './components/animations/MorphingShape';

// Text reveal
<TextReveal text="Hello World" mode="word" gradient={true} />

// Number counter
<NumberCounter end={100} suffix="+" duration={2} />

// Stagger grid
<StaggerGrid items={projects} columns={3} staggerDelay={0.1} />

// Morphing background
<MorphingShape variant="blob1" size="xl" duration={10} />
```

**Timing Guide:**
- Background: 0s
- Avatar/Logo: 0.2s
- Title: 0.4s
- Subtitle: 0.6s
- Content: 0.8s
- Buttons: 1.0s
- Stats: 1.2s (staggered)

---

## 🖼️ Panduan Gambar

## 🖼️ Panduan Gambar (PENTIG!)

> ⚠️ **Portfolio ini sekarang menggunakan GAMBAR, bukan emoji!**

Untuk mengganti semua gambar (foto profil, icon skills, screenshot proyek, dll), baca panduan lengkap di:

### 📖 [**IMAGE_GUIDE.md**](IMAGE_GUIDE.md) ← KLIK DI SINI

Panduan ini mencakup:
- ✅ Lokasi setiap file gambar
- ✅ Spesifikasi ukuran dan format
- ✅ Cara mengganti step-by-step
- ✅ Tools & resources gratis
- ✅ Optimasi untuk web performance
- ✅ Troubleshooting

**Struktur folder gambar:**
```
public/images/
├── avatar.jpg              # Foto profil Anda
├── skills/                 # Icon teknologi (React, Node.js, dll)
├── projects/               # Screenshot proyek
├── testimonials/           # Foto klien
├── blog/                   # Gambar artikel
└── services/               # Icon layanan
```

---

## ✨ Fitur Lengkap

### 🎯 Section Portfolio
| # | Section | Deskripsi |
|---|---------|-----------|
| 1 | **Hero** | Landing section dengan typewriter effect, animated stats, gradient background, availability badge |
| 2 | **About** | Bio lengkap, avatar dengan glow effect, floating tech badges, quick facts cards |
| 3 | **Skills** | Filter by category, animated progress bars, skill level percentage, emoji icons |
| 4 | **Projects** | Filter proyek, hover overlay, detail modal popup, featured badge, tech tags |
| 5 | **Experience** | Timeline vertikal, achievement list, technology tags per posisi |
| 6 | **Services** | Layanan cards, feature list, gradient icons, CTA links |
| 7 | **Testimonials** | Client quotes, star rating, avatar with initials, quote icon |
| 8 | **Blog** | Article cards, category badge, read time, thumbnail gradients |
| 9 | **Contact** | Form kontak lengkap, validasi, send animation, info cards, map placeholder |

### 🎨 Fitur UI/UX
- ✅ **Glassmorphism** - Efek kaca transparan dengan blur
- ✅ **Dark Mode** - Full dark theme yang nyaman di mata
- ✅ **Responsive** - Mobile-first, tampil sempurna di semua device
- ✅ **Scroll Animations** - Animasi muncul saat scroll (Framer Motion)
- ✅ **Typewriter Effect** - Teks mengetik otomatis di hero
- ✅ **Scroll Spy** - Navbar highlight section aktif
- ✅ **Smooth Scroll** - Navigasi halus antar section
- ✅ **Floating Particles** - Background dekoratif animasi
- ✅ **Gradient Glow** - Efek cahaya gradient pada elemen
- ✅ **Progress Bars** - Animasi bar keahlian
- ✅ **Modal Popup** - Detail proyek dalam modal
- ✅ **Form Validation** - Validasi form kontak
- ✅ **Loading States** - Animasi kirim pesan
- ✅ **Scroll to Top** - Tombol kembali ke atas
- ✅ **Custom Scrollbar** - Scrollbar yang match dengan theme
- ✅ **Selection Color** - Warna text selection custom

### ⚡ Fitur Teknis
- ✅ **TypeScript** - Full type safety
- ✅ **Component-Based** - Arsitektur modular
- ✅ **Custom Hooks** - Reusable logic (useTypewriter, useScrollSpy, useCountUp)
- ✅ **Data Separation** - Data terpisah dari komponen
- ✅ **Reusable UI** - Button, Card, SectionTitle components
- ✅ **Tree Shaking** - Import hanya yang dibutuhkan
- ✅ **CSS Utility First** - Tailwind CSS v4

---

## 🛠 Tech Stack

| Teknologi | Kegunaan | Penjelasan |
|-----------|----------|------------|
| **React 19** | UI Library | Library untuk membangun user interface berbasis komponen |
| **TypeScript 5.9** | Type Safety | Superset JavaScript yang menambahkan tipe data statis |
| **Tailwind CSS 4** | Styling | Framework CSS utility-first untuk styling cepat |
| **Vite 7** | Build Tool | Build tool modern yang sangat cepat untuk development |
| **Framer Motion** | Animasi | Library animasi deklaratif untuk React |
| **Lucide React** | Icons | Library icon SVG yang ringan dan tree-shakable |
| **clsx + tailwind-merge** | Class Utility | Menggabungkan class CSS secara kondisional |

---

## 📁 Struktur Folder

```
portfolio/
│
├── 📄 index.html              # Entry point HTML (titik masuk browser)
├── 📄 package.json             # Daftar dependencies & scripts
├── 📄 vite.config.ts           # Konfigurasi Vite build tool
├── 📄 tsconfig.json            # Konfigurasi TypeScript compiler
├── 📄 README.md                # Dokumentasi ini!
│
└── 📂 src/                     # Source code utama
    │
    ├── 📄 main.tsx             # Entry point React (render App ke DOM)
    ├── 📄 index.css            # Global styles & Tailwind config
    ├── 📄 App.tsx              # Root component (menyusun semua section)
    │
    ├── 📂 utils/               # Fungsi utility
    │   └── 📄 cn.ts            # Class name merger (clsx + tailwind-merge)
    │
    ├── 📂 data/                # Data statis
    │   └── 📄 portfolio-data.ts # Semua data portfolio (projects, skills, dll)
    │
    ├── 📂 hooks/               # Custom React hooks
    │   ├── 📄 useTypewriter.ts  # Hook efek mengetik
    │   ├── 📄 useScrollSpy.ts   # Hook deteksi section aktif
    │   └── 📄 useCountUp.ts     # Hook animasi angka naik
    │
    └── 📂 components/          # React components
        │
        ├── 📂 ui/              # Komponen UI reusable (atoms)
        │   ├── 📄 Button.tsx           # Tombol dengan variants
        │   ├── 📄 Card.tsx             # Card glassmorphism
        │   ├── 📄 SectionTitle.tsx     # Judul section konsisten
        │   ├── 📄 ScrollToTopButton.tsx # Tombol scroll ke atas
        │   └── 📄 ParticleBackground.tsx # Background dekoratif
        │
        ├── 📂 layout/          # Komponen layout (organism)
        │   ├── 📄 Navbar.tsx    # Navigation bar sticky
        │   └── 📄 Footer.tsx    # Footer dengan links & info
        │
        └── 📂 sections/        # Section-section halaman
            ├── 📄 HeroSection.tsx        # Section hero/landing
            ├── 📄 AboutSection.tsx       # Section tentang saya
            ├── 📄 SkillsSection.tsx      # Section keahlian
            ├── 📄 ProjectsSection.tsx    # Section portfolio proyek
            ├── 📄 ExperienceSection.tsx  # Section pengalaman kerja
            ├── 📄 ServicesSection.tsx    # Section layanan
            ├── 📄 TestimonialsSection.tsx # Section testimoni
            ├── 📄 BlogSection.tsx        # Section artikel blog
            └── 📄 ContactSection.tsx     # Section form kontak
```

---

## 📝 Penjelasan Setiap File

### 📂 Root Files

#### `index.html`
```
Fungsi  : Entry point utama yang dibuka browser
Isi     : Tag HTML dasar, meta tags SEO, Google Fonts link
Penting : <div id="root"> adalah tempat React me-render seluruh app
```
- **Meta tags** untuk SEO (description, keywords, author)
- **Google Fonts** Inter (body text) dan JetBrains Mono (code/mono)
- Element `<div id="root">` yang menjadi mount point React

#### `package.json`
```
Fungsi  : Manifest proyek Node.js
Isi     : Nama proyek, versi, scripts, dan daftar dependencies
```
- `dependencies` = Library yang dibutuhkan saat production
- `devDependencies` = Library yang hanya dibutuhkan saat development
- `scripts` = Command yang bisa dijalankan (dev, build, preview)

#### `vite.config.ts`
```
Fungsi  : Konfigurasi Vite build tool
Isi     : Plugin React, Tailwind, dan pengaturan build
```

#### `tsconfig.json`
```
Fungsi  : Konfigurasi TypeScript compiler
Isi     : Target output, module system, strict mode, path alias
```

---

### 📂 src/ (Source Code)

#### `src/main.tsx`
```
Fungsi  : Entry point React
Tugas   : Merender komponen <App /> ke dalam DOM
```
- `createRoot()` = API React 18+ untuk concurrent rendering
- `StrictMode` = Mode yang mendeteksi masalah di development
- Import `index.css` di sini agar style berlaku global

#### `src/index.css`
```
Fungsi  : Global stylesheet & Tailwind CSS configuration
Isi     : Custom theme, base styles, utility classes, animations
```
**Bagian-bagian:**
1. `@import "tailwindcss"` - Import Tailwind CSS v4
2. `@theme {}` - Define custom colors (primary, accent, dark)
3. `@layer base {}` - Style dasar (body, scrollbar, selection)
4. `@layer utilities {}` - Custom utility classes (glass, glow, text-gradient)
5. `@keyframes` - Definisi animasi custom (float, pulse-glow)

#### `src/App.tsx`
```
Fungsi  : Root component yang menyusun seluruh halaman
Tugas   : Import dan render semua section dalam urutan yang benar
```
Menyusun: ParticleBackground → Navbar → Sections → Footer → ScrollToTop

---

### 📂 src/utils/

#### `src/utils/cn.ts`
```
Fungsi  : Utility untuk menggabungkan CSS class names
Library : clsx + tailwind-merge
```
**Mengapa dibutuhkan?**
- `clsx` → Menggabungkan class secara kondisional
- `tailwind-merge` → Menghapus class Tailwind yang konflik
- Contoh: `cn('px-4', condition && 'px-8')` → hanya satu `px` yang berlaku

---

### 📂 src/data/

#### `src/data/portfolio-data.ts`
```
Fungsi  : Single source of truth untuk semua data portfolio
Isi     : TypeScript interfaces + data arrays
```

**Interfaces yang didefinisikan:**
| Interface | Digunakan di |
|-----------|-------------|
| `NavItem` | Navbar |
| `Skill` | SkillsSection |
| `Project` | ProjectsSection |
| `Experience` | ExperienceSection |
| `Testimonial` | TestimonialsSection |
| `BlogPost` | BlogSection |
| `Service` | ServicesSection |
| `SocialLink` | Footer |
| `Stats` | HeroSection |

**Data yang disimpan:**
- `navItems` - Menu navigasi
- `personalInfo` - Info personal (nama, email, bio, dll)
- `stats` - Angka statistik (tahun pengalaman, proyek, dll)
- `skills` - Daftar keahlian dengan level & kategori
- `projects` - Daftar proyek portfolio
- `experiences` - Riwayat pekerjaan
- `services` - Layanan yang ditawarkan
- `testimonials` - Testimoni klien
- `blogPosts` - Artikel blog terbaru
- `socialLinks` - Link media sosial

---

### 📂 src/hooks/

#### `src/hooks/useTypewriter.ts`
```
Fungsi  : Efek mengetik otomatis
Input   : Array kata, kecepatan mengetik, kecepatan menghapus, durasi pause
Output  : String yang berubah-ubah (simulasi mengetik)
```
**Cara kerja:**
1. Menambahkan karakter satu per satu (mengetik)
2. Pause setelah kata lengkap
3. Menghapus karakter satu per satu
4. Pindah ke kata berikutnya
5. Loop selamanya

#### `src/hooks/useScrollSpy.ts`
```
Fungsi  : Mendeteksi section mana yang terlihat di viewport
Input   : Array section IDs, offset
Output  : ID section yang sedang aktif/terlihat
```
**Menggunakan Intersection Observer API** yang lebih performant dibanding scroll event listener.

#### `src/hooks/useCountUp.ts`
```
Fungsi  : Animasi angka naik dari 0 ke target
Input   : Angka target, durasi animasi
Output  : Angka yang sedang di-animate + fungsi start
```
**Menggunakan requestAnimationFrame** dengan easing function easeOutCubic.

---

### 📂 src/components/ui/ (Komponen Reusable)

#### `Button.tsx`
```
Props   : variant, size, icon, iconPosition, href, children
Variants: primary (gradient), secondary, outline, ghost
Sizes   : sm, md, lg
```

#### `Card.tsx`
```
Props   : children, className, hover, glow, delay
Fitur   : Glassmorphism, hover animation, scroll reveal
```

#### `SectionTitle.tsx`
```
Props   : title, subtitle, badge, align
Fitur   : Scroll animation, decorative dots, consistent style
```

#### `ScrollToTopButton.tsx`
```
Fitur   : Muncul setelah scroll 500px, smooth scroll ke atas
```

#### `ParticleBackground.tsx`
```
Fitur   : 30 titik floating random dengan CSS animation
```

---

### 📂 src/components/layout/

#### `Navbar.tsx`
```
Fitur:
- Sticky di atas halaman
- Glassmorphism saat scroll (transparan → blur)
- Scroll spy highlight link aktif
- Responsive hamburger menu di mobile
- Logo dengan gradient icon
- CTA button "Hubungi Saya"
- Smooth scroll ke section saat klik link
```

#### `Footer.tsx`
```
Fitur:
- Logo dan deskripsi brand
- Quick links navigasi
- Info kontak
- Social media icons (custom SVG)
- Availability badge (green dot)
- Copyright notice
- Back to top button
- Gradient line di atas
```

---

### 📂 src/components/sections/

#### `HeroSection.tsx`
```
Fitur:
- Typewriter effect judul (custom hook)
- Animated gradient orbs di background
- Grid pattern background
- Availability badge (green ping)
- Nama dengan text gradient
- Typewriter terminal style (> text|)
- Bio dan lokasi
- CTA: Download CV + Lihat Proyek
- Stats grid (tahun, proyek, klien, kontribusi)
- Scroll down indicator animasi
```

#### `AboutSection.tsx`
```
Fitur:
- Avatar besar dengan gradient ring glow
- Floating tech badges (React, Node.js, TypeScript)
- Bio panjang 2 paragraf
- Info grid (email, lokasi, pengalaman, availability)
- Download CV button
- Quick Facts cards (Clean Code, Lifelong Learner, dll)
- Animasi slide in dari kiri/kanan
```

#### `SkillsSection.tsx`
```
Fitur:
- Filter tabs (Semua, Frontend, Backend, Tools, Design)
- Animated skill cards
- Progress bar per skill dengan gradient
- Skill level percentage
- Emoji icons
- AnimatePresence untuk smooth filter transition
- Color-coded berdasarkan level (90+, 80+, <80)
```

#### `ProjectsSection.tsx`
```
Fitur:
- Filter tabs (Semua, Fullstack, Frontend, AI/ML)
- Project cards dengan gradient thumbnail
- Emoji project icons
- Featured badge (bintang)
- Hover overlay dengan 3 tombol (lihat, live, GitHub)
- Category badge
- Tech tags
- Detail modal popup dengan:
  - Gradient header
  - Deskripsi panjang
  - Semua tech tags
  - Live demo + Source code buttons
  - Close button & click outside to close
```

#### `ExperienceSection.tsx`
```
Fitur:
- Timeline vertikal dengan garis gradient
- Alternating layout (kiri-kanan) di desktop
- Timeline dot pada garis
- Period badge (font mono)
- Role, company, description
- Achievement list dengan check icon
- Technology tags
- Scroll reveal animation per card
```

#### `ServicesSection.tsx`
```
Fitur:
- 4 service cards (2x2 grid)
- Gradient icon boxes (berbeda warna)
- Judul, deskripsi, feature list
- Arrow icon per feature
- "Pelajari Lebih Lanjut" link
- Hover: icon shadow + judul warna
```

#### `TestimonialsSection.tsx`
```
Fitur:
- Testimoni cards (2x2 grid)
- Quote icon dekoratif
- Star rating (5 bintang)
- Quoted text italic
- Avatar dengan inisial + gradient
- Nama, role, company
```

#### `BlogSection.tsx`
```
Fitur:
- Article cards (3 kolom)
- Gradient thumbnail + emoji icon
- Category badge overlay
- Date + read time
- Title + excerpt
- "Baca Selengkapnya" link
- Hover effect
```

#### `ContactSection.tsx`
```
Fitur:
- Contact info cards (email, telepon, lokasi)
- Map placeholder
- Form lengkap:
  - Nama + Email (2 kolom)
  - Subject (dropdown select)
  - Pesan (textarea)
  - Submit button dengan 3 state:
    - idle: "Kirim Pesan" (Send icon)
    - sending: "Mengirim..." (spinner)
    - sent: "Pesan Terkirim!" (check icon)
- Input focus effects
- Disabled state saat mengirim
```

---

## 🏗 Arsitektur & Pola Desain

### Component Architecture

```
App (Root)
├── ParticleBackground (dekorasi global)
├── Navbar (layout - sticky)
├── Main Content
│   ├── HeroSection
│   ├── AboutSection
│   ├── SkillsSection
│   ├── ProjectsSection
│   ├── ExperienceSection
│   ├── ServicesSection
│   ├── TestimonialsSection
│   ├── BlogSection
│   └── ContactSection
├── Footer (layout)
└── ScrollToTopButton (floating UI)
```

### Design Patterns yang Digunakan

| Pattern | Penjelasan | Contoh |
|---------|-----------|--------|
| **Atomic Design** | Komponen dibagi berdasarkan ukuran (atoms → molecules → organisms) | Button (atom) → Card (molecule) → Section (organism) |
| **Data-Driven** | Data dipisahkan dari UI, komponen hanya me-render data | `portfolio-data.ts` → semua section |
| **Custom Hooks** | Logic di-extract ke hooks reusable | useTypewriter, useScrollSpy |
| **Compound Components** | Section terdiri dari sub-komponen kecil | SectionTitle + Cards + Filter |
| **Prop Variants** | Satu komponen bisa tampil berbeda via props | Button(variant="primary/secondary/outline") |

### Data Flow

```
portfolio-data.ts (data)
        ↓
   Section Components (render)
        ↓
   UI Components (display)
        ↓
   Tailwind CSS (styling)
```

---

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js 18+
- npm atau yarn

### Development

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka di browser
# http://localhost:5173
```

### Production Build

```bash
# Build untuk production
npm run build

# Preview build
npm run preview
```

---

## 🎨 Panduan Kustomisasi

### 🖼️ Mengganti Gambar (PENTING!)

**Opsi 1: Generate Placeholder Otomatis**

Jalankan script untuk membuat placeholder SVG:

```bash
# Linux/Mac
chmod +x generate-placeholders.sh
./generate-placeholders.sh

# Windows (Git Bash)
bash generate-placeholders.sh
```

**Opsi 2: Upload Gambar Asli**

Ikuti panduan lengkap di [**IMAGE_GUIDE.md**](IMAGE_GUIDE.md)

---

### 1. Mengganti Data Personal

Edit file `src/data/portfolio-data.ts`:

```typescript
// Ganti info personal
export const personalInfo = {
  name: 'Nama Anda',
  title: 'Your Title',
  bio: 'Bio Anda...',
  email: 'email@anda.com',
  // ... dst
};
```

### 2. Mengganti Warna Theme

Edit file `src/index.css` pada bagian `@theme`:

```css
@theme {
  --color-primary-500: #your-color;
  --color-accent-500: #your-accent;
}
```

### 3. Menambah Skill Baru

Tambahkan ke array `skills` di `portfolio-data.ts`:

```typescript
{ name: 'Rust', level: 60, category: 'backend', icon: '🦀' }
```

### 4. Menambah Proyek Baru

Tambahkan ke array `projects` di `portfolio-data.ts`:

```typescript
{
  id: 7,
  title: 'Proyek Baru',
  description: 'Deskripsi...',
  // ... semua field
}
```

### 5. Menambah Section Baru

1. Buat file `src/components/sections/NewSection.tsx`
2. Import dan tambahkan di `src/App.tsx`
3. Tambahkan nav item di `portfolio-data.ts`

---

## 💡 Tips & Best Practices

### Performance
- ✅ Gunakan `viewport={{ once: true }}` di Framer Motion agar animasi hanya jalan sekali
- ✅ Lazy load gambar yang berat
- ✅ Gunakan Intersection Observer daripada scroll event
- ✅ Tree-shake icon imports (import spesifik, bukan semua)

### Accessibility
- ✅ Gunakan semantic HTML (`nav`, `main`, `section`, `footer`)
- ✅ Tambahkan `aria-label` pada tombol icon-only
- ✅ Pastikan contrast ratio cukup (teks vs background)
- ✅ Keyboard navigable (focus states)

### SEO
- ✅ Meta tags lengkap di `index.html`
- ✅ Heading hierarchy (h1 → h2 → h3)
- ✅ Alt text untuk gambar
- ✅ Semantic markup

### Code Quality
- ✅ TypeScript strict mode
- ✅ Interfaces untuk semua data
- ✅ Consistent naming convention
- ✅ Komentar penjelasan di setiap file
- ✅ Pisahkan concerns (data, logic, UI)

---

## 📖 Konsep yang Digunakan

### React Concepts
| Konsep | File | Penjelasan |
|--------|------|-----------|
| **Functional Components** | Semua `.tsx` | Komponen berbasis fungsi (bukan class) |
| **useState** | ContactSection, SkillsSection | Menyimpan state lokal komponen |
| **useEffect** | Navbar, ScrollToTop | Side effects (scroll listener, dll) |
| **useCallback** | useTypewriter | Memoize function agar tidak re-create |
| **useRef** | useCountUp | Menyimpan reference tanpa re-render |
| **Props** | Button, Card, SectionTitle | Data yang dikirim dari parent ke child |
| **Conditional Rendering** | Navbar, ProjectsSection | Render berdasarkan kondisi |
| **List Rendering** | Semua section | Map array ke JSX elements |
| **Event Handling** | ContactSection, Navbar | onClick, onChange, onSubmit |

### CSS Concepts
| Konsep | Lokasi | Penjelasan |
|--------|--------|-----------|
| **Utility-First CSS** | Semua komponen | Class-class kecil (px-4, text-white, dll) |
| **Glassmorphism** | `index.css` (.glass) | Efek kaca: transparent + backdrop-blur |
| **CSS Grid** | Sections | Layout grid responsive |
| **Flexbox** | Navbar, Cards | Layout satu dimensi |
| **CSS Variables** | `@theme` | Custom properties untuk warna |
| **Gradient** | Hero, Cards | Background linear/radial gradient |
| **Animation** | `@keyframes` | CSS animation untuk float, pulse |
| **Responsive** | Media queries via Tailwind | sm:, md:, lg: breakpoints |

### TypeScript Concepts
| Konsep | Contoh | Penjelasan |
|--------|--------|-----------|
| **Interface** | `Project`, `Skill` | Definisi bentuk/shape data |
| **Generic Types** | `React.FC<Props>` | Tipe yang bisa diisi tipe lain |
| **Union Types** | `'primary' \| 'secondary'` | Nilai yang bisa salah satu |
| **Type Narrowing** | `status === 'sent'` | Mempersempit tipe di runtime |
| **Export/Import** | Semua file | Module system ES6 |

### Framer Motion Concepts
| Konsep | Contoh | Penjelasan |
|--------|--------|-----------|
| **initial/animate** | Hero elements | State awal → state akhir |
| **whileInView** | Cards, Sections | Animasi saat terlihat di viewport |
| **whileHover** | Cards, Buttons | Animasi saat di-hover |
| **AnimatePresence** | Filter, Modal | Animasi keluar (exit) |
| **layout** | Skill/Project grid | Animasi perubahan layout |
| **transition** | Semua animasi | Durasi, delay, easing |

---

## 📄 Lisensi

MIT License - Bebas digunakan untuk proyek personal maupun komersial.

---

## 🙏 Kredit

- **Icons**: [Lucide Icons](https://lucide.dev)
- **Fonts**: [Google Fonts](https://fonts.google.com) (Inter, JetBrains Mono)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **CSS**: [Tailwind CSS](https://tailwindcss.com)

---

> 💬 **Dibuat untuk edukasi** - Setiap file memiliki komentar penjelasan di bagian atas. Pelajari, modifikasi, dan jadikan milik Anda!

---

## 🚀 Deployment ke GitHub Pages

### Quick Deploy

```bash
# 1. Update vite.config.ts dengan nama repository Anda
# 2. Build
npm run build

# 3. Deploy
npm run deploy
```

### Panduan Lengkap

Baca **[DEPLOYMENT.md](DEPLOYMENT.md)** untuk panduan lengkap:
- ✅ Setup repository GitHub
- ✅ Konfigurasi Vite untuk GitHub Pages
- ✅ Deploy manual dan otomatis (GitHub Actions)
- ✅ Custom domain setup
- ✅ Troubleshooting

### Auto Deploy dengan GitHub Actions

Setiap push ke `main` akan auto-deploy:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
# → Auto deploy dalam 1-2 menit!
```

---

## 🤝 Berkontribusi

Kami sangat terbuka untuk kontribusi! Baca **[CONTRIBUTING.md](CONTRIBUTING.md)** untuk:
- 🍴 Cara fork & clone
- 🐛 Melaporkan bug
- 💡 Mengajukan fitur
- 📝 Pull request process
- 💻 Coding standards
- 📜 Code of Conduct

### Quick Contribute

```bash
# 1. Fork repository
# 2. Clone
git clone https://github.com/YOUR_USERNAME/modern-portfolio-advanced.git

# 3. Buat branch
git checkout -b feature/my-feature

# 4. Make changes & commit
git add .
git commit -m "feat: tambah fitur baru"

# 5. Push & Create PR
git push origin feature/my-feature
# → Buat Pull Request di GitHub
```

---

## 📄 License

Proyek ini di-lisensikan di bawah **MIT License** - lihat **[LICENSE](LICENSE)** untuk detail.

**Intinya:** Bebas digunakan untuk personal & commercial projects! 🎉

---

## 👨‍💻 Author

**Alex Pratama**

- 🌐 Portfolio: https://alexportfolio.dev
- 💼 LinkedIn: https://linkedin.com/in/alexpratama
- 🐙 GitHub: https://github.com/alexpratama
- 📧 Email: alex@portfolio.dev

---

## 🙏 Acknowledgments

Terima kasih untuk:
- **React Team** - UI library yang amazing
- **Framer** - Animasi yang smooth
- **Tailwind Labs** - CSS framework yang powerful
- **Vite Team** - Build tool yang super cepat
- **Semua contributors** - Yang telah membantu project ini

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/modern-portfolio-advanced?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/yourusername/modern-portfolio-advanced?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/yourusername/modern-portfolio-advanced?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/yourusername/modern-portfolio-advanced?style=for-the-badge)

---

## 🔗 Share This Project

Suka project ini? Share ke teman-teman!

- [Share di Twitter](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20portfolio%20template!)
- [Share di LinkedIn](https://www.linkedin.com/sharing/share-offsite/)
- [Share di Facebook](https://www.facebook.com/sharer/sharer.php)

---

## 📬 Contact

Punya pertanyaan atau ingin kolaborasi?

- 📧 Email: alex@portfolio.dev
- 💬 GitHub Issues: [Buat issue baru](https://github.com/yourusername/modern-portfolio-advanced/issues)
- 💼 LinkedIn: [Connect dengan saya](https://linkedin.com/in/alexpratama)

---

**Made with ❤️ by Alex Pratama & Contributors**

**Star ⭐ project ini jika Anda suka!**

---

## 📋 Complete File List

### Documentation Files
| File | Description | Lines |
|------|-------------|-------|
| `README.md` | Main documentation | 900+ |
| `QUICK_START.md` | 5-minute setup guide | 200+ |
| `DEPLOYMENT.md` | GitHub Pages deployment | 500+ |
| `IMAGE_GUIDE.md` | Image replacement guide | 600+ |
| `ANIMATION_GUIDE.md` | Animation customization | 600+ |
| `CONTRIBUTING.md` | Contribution guidelines | 400+ |
| `CODE_OF_CONDUCT.md` | Community guidelines | 200+ |
| `SECURITY.md` | Security policy | 300+ |
| `CODE_REVIEW.md` | Senior developer review | 500+ |
| `LICENSE` | MIT License | 21 |

### Source Code Files
| File | Description |
|------|-------------|
| `src/App.tsx` | Root component |
| `src/main.tsx` | Entry point |
| `src/index.css` | Global styles + animations |
| `src/data/portfolio-data.ts` | All portfolio data |
| **Components (34 files)** | |
| `src/components/ErrorBoundary.tsx` | Error handling |
| `src/components/layout/Navbar.tsx` | Navigation |
| `src/components/layout/Footer.tsx` | Footer |
| `src/components/sections/*.tsx` | 9 section components |
| `src/components/ui/*.tsx` | 7 UI components |
| `src/components/animations/*.tsx` | 7 animation components |
| **Hooks (3 files)** | |
| `src/hooks/useTypewriter.ts` | Typing effect |
| `src/hooks/useScrollSpy.ts` | Active section detection |
| `src/hooks/useCountUp.ts` | Number animation |
| **Utils (1 file)** | |
| `src/utils/cn.ts` | Class name utility |

### Configuration Files
| File | Description |
|------|-------------|
| `vite.config.ts` | Vite + GitHub Pages config |
| `package.json` | Dependencies & scripts |
| `tsconfig.json` | TypeScript config |
| `index.html` | HTML entry point |

### GitHub Files
| File | Description |
|------|-------------|
| `.github/ISSUE_TEMPLATE/bug_report.md` | Bug report template |
| `.github/ISSUE_TEMPLATE/feature_request.md` | Feature request template |
| `.github/PULL_REQUEST_TEMPLATE.md` | PR template |

### Asset Files
| Folder | Description |
|--------|-------------|
| `public/images/` | All images (placeholder) |
| `public/images/skills/` | Skill icons |
| `public/images/projects/` | Project screenshots |
| `public/images/testimonials/` | Client photos |
| `public/images/blog/` | Blog thumbnails |
| `public/images/services/` | Service icons |

---

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| **Total Files** | 50+ |
| **Lines of Code** | 5,000+ |
| **Documentation** | 4,000+ lines |
| **Components** | 34 |
| **Animations** | 15+ |
| **Build Size** | 477 KB (gzip: 138 KB) |
| **Build Time** | ~7 seconds |
| **Dependencies** | 8 |
| **Dev Dependencies** | 12 |

---

**Last Updated:** 2024
**Version:** 2.0.0
**Status:** ✅ Production Ready
**Code Review:** ✅ Approved by Senior Developer
