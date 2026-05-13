# 🎬 PANDUAN ANIMASI ADVANCED - SEGESTA/PowerPoint Style

> Panduan lengkap menggunakan animasi level production untuk membuat portfolio yang **stand out** seperti website award-winning.

---

## 📋 Daftar Isi

1. [Intro: Animasi yang Tersedia](#-intro-animasi-yang-tersedia)
2. [Komponen Animasi](#-komponen-animasi)
3. [Cara Menggunakan](#-cara-menggunakan)
4. [Best Practices](#-best-practices)
5. [Performance Tips](#-performance-tips)
6. [Contoh Implementasi](#-contoh-implementasi)

---

## 🎯 Intro: Animasi yang Tersedia

Portfolio ini sekarang dilengkapi dengan **15+ animasi advanced** yang biasa digunakan di website SEGESTA, Awwwards winners, dan presentasi PowerPoint professional.

### Kategori Animasi

| Kategori | Animasi | Digunakan Di |
|----------|---------|--------------|
| **Entrance** | Fade In Up, Fade In Right, Scale In | Semua section |
| **Text** | Text Reveal, Typewriter, Gradient | Hero, Titles |
| **Background** | Morphing Blob, Parallax, Particles | Hero, About |
| **Grid** | Stagger Animation | Projects, Skills, Blog |
| **Interactive** | Card Flip, Hover Effects | Projects, Cards |
| **Numbers** | Count Up Animation | Stats, Pricing |
| **Micro** | Button Press, Icon Bounce | Buttons, Icons |

---

## 🎨 Komponen Animasi

### 1. AnimatedSection

Wrapper untuk animasi section dengan scroll trigger.

```typescript
import AnimatedSection from './components/animations/AnimatedSection';

<AnimatedSection 
  delay={0.2}
  variant="fade-up"
  duration={0.8}
  once={true}
>
  <YourContent />
</AnimatedSection>
```

**Props:**
| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `delay` | number | 0 | Delay sebelum animasi mulai |
| `variant` | string | 'fade-up' | fade-up, fade-right, fade-left, scale, rotate |
| `duration` | number | 0.8 | Durasi animasi (detik) |
| `once` | boolean | true | Animasi hanya sekali atau repeat |
| `staggerChildren` | boolean | false | Stagger animation untuk children |

---

### 2. TextReveal

Animasi teks karakter/kata per karakter.

```typescript
import TextReveal from './components/animations/TextReveal';

<TextReveal 
  text="Hello World"
  mode="word"
  delay={0.5}
  gradient={true}
/>
```

**Props:**
| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `text` | string | required | Teks yang akan di-animate |
| `mode` | string | 'word' | char, word, atau line |
| `delay` | number | 0 | Delay sebelum mulai |
| `duration` | number | 0.5 | Durasi per karakter/kata |
| `gradient` | boolean | false | Enable gradient text |

**Modes:**
- `char` - Muncul per huruf (lebih dramatis)
- `word` - Muncul per kata (recommended)
- `line` - Muncul per baris

---

### 3. NumberCounter

Animasi angka naik dengan smooth easing.

```typescript
import NumberCounter from './components/animations/NumberCounter';

<NumberCounter 
  end={100}
  start={0}
  duration={2}
  suffix="+"
  prefix="$"
  decimals={0}
/>
```

**Props:**
| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `end` | number | required | Angka target |
| `start` | number | 0 | Angka awal |
| `duration` | number | 2 | Durasi animasi (detik) |
| `suffix` | string | '' | Suffix setelah angka (contoh: '+', '%') |
| `prefix` | string | '' | Prefix sebelum angka (contoh: '$', 'Rp') |
| `decimals` | number | 0 | Jumlah desimal |

**Contoh Penggunaan:**
```typescript
// Stats: 5+
<NumberCounter end={5} suffix="+" />

// Price: $99
<NumberCounter end={99} prefix="$" />

// Percentage: 95.5%
<NumberCounter end={95.5} suffix="%" decimals={1} />
```

---

### 4. StaggerGrid

Grid dengan stagger animation per item.

```typescript
import StaggerGrid from './components/animations/StaggerGrid';

<StaggerGrid
  items={projects}
  columns={3}
  animation="fade-up"
  staggerDelay={0.1}
>
  {(project) => <ProjectCard key={project.id} {...project} />}
</StaggerGrid>
```

**Props:**
| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `items` | array | required | Array data untuk di-render |
| `columns` | number | 3 | Jumlah kolom (1-6) |
| `gap` | string | 'md' | sm, md, lg |
| `animation` | string | 'fade-up' | fade-up, scale, flip |
| `staggerDelay` | number | 0.1 | Delay antar item (detik) |
| `duration` | number | 0.5 | Durasi animasi per item |

---

### 5. MorphingShape

Background blob yang morphing (berubah bentuk).

```typescript
import MorphingShape from './components/animations/MorphingShape';

<MorphingShape
  variant="blob1"
  size="lg"
  colors={['#6366f1', '#ec4899']}
  duration={10}
  blur={true}
/>
```

**Props:**
| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `variant` | string | 'blob1' | blob1, blob2, blob3, circle, square |
| `size` | string | 'lg' | sm, md, lg, xl |
| `colors` | array | ['#6366f1', '#ec4899'] | Gradient colors |
| `duration` | number | 8 | Durasi morphing (detik) |
| `blur` | boolean | true | Enable blur effect |

**Variants:**
- `blob1` - Organic blob shape
- `blob2` - Different organic shape
- `blob3` - Another variation
- `circle` - Simple circle
- `square` - Rounded square

---

### 6. ParallaxScroll

Efek parallax saat scroll.

```typescript
import ParallaxScroll from './components/animations/ParallaxScroll';

<ParallaxScroll
  speed={0.5}
  direction="up"
>
  <YourContent />
</ParallaxScroll>
```

**Props:**
| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `speed` | number | 0.5 | Kecepatan parallax (0-1) |
| `direction` | string | 'up' | up, down, left, right |
| `startOffset` | number | 0 | Start scroll offset (0-1) |
| `endOffset` | number | 1 | End scroll offset (0-1) |

---

### 7. CardFlip

3D flip animation untuk cards.

```typescript
import CardFlip from './components/animations/CardFlip';

<CardFlip
  front={<FrontContent />}
  back={<BackContent />}
  flipDirection="horizontal"
  duration={0.6}
/>
```

**Props:**
| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `front` | ReactNode | required | Konten depan card |
| `back` | ReactNode | required | Konten belakang card |
| `flipDirection` | string | 'horizontal' | horizontal atau vertical |
| `perspective` | number | 1000 | 3D perspective depth |
| `duration` | number | 0.6 | Durasi flip (detik) |

---

## 🚀 Cara Menggunakan

### Step 1: Import Komponen

```typescript
// Di bagian atas file component
import AnimatedSection from './components/animations/AnimatedSection';
import TextReveal from './components/animations/TextReveal';
import NumberCounter from './components/animations/NumberCounter';
import StaggerGrid from './components/animations/StaggerGrid';
import MorphingShape from './components/animations/MorphingShape';
```

### Step 2: Gunakan di Section

**Contoh: Hero Section dengan Multiple Animations**

```typescript
import { motion } from 'framer-motion';
import TextReveal from './components/animations/TextReveal';
import NumberCounter from './components/animations/NumberCounter';
import MorphingShape from './components/animations/MorphingShape';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background: Morphing Blob */}
      <MorphingShape 
        variant="blob1" 
        size="xl" 
        className="absolute top-0 left-0"
      />
      
      {/* Title: Text Reveal */}
      <TextReveal 
        text="Hello, I'm a Developer"
        mode="word"
        delay={0.5}
        gradient={true}
      />
      
      {/* Stats: Number Counter */}
      <div className="grid grid-cols-4 gap-4">
        <NumberCounter end={50} suffix="+" />
        <NumberCounter end={100} suffix="%" />
        <NumberCounter end={30} suffix="+" />
        <NumberCounter end={5} suffix=" Years" />
      </div>
      
      {/* Content: Animated Section */}
      <AnimatedSection delay={0.8} variant="fade-up">
        <p>My bio content here...</p>
      </AnimatedSection>
    </section>
  );
};
```

### Step 3: Customize Timing

```typescript
// Timeline animasi yang baik:
// 0.0s - Background elements
// 0.2s - Avatar/Logo
// 0.4s - Main title
// 0.6s - Subtitle
// 0.8s - Content
// 1.0s - CTA buttons
// 1.2s - Stats (staggered)

<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} delay={0.2} />
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} delay={0.4} />
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} delay={0.6} />
```

---

## 💡 Best Practices

### 1. Timing & Pacing

**✅ GOOD:**
```typescript
// Stagger dengan delay konsisten
<AnimatedSection delay={0.1} />
<AnimatedSection delay={0.2} />
<AnimatedSection delay={0.3} />
```

**❌ BAD:**
```typescript
// Delay tidak konsisten
<AnimatedSection delay={0.1} />
<AnimatedSection delay={0.7} /> // Terlalu lama
<AnimatedSection delay={0.15} /> // Tidak konsisten
```

### 2. Performance

**✅ GOOD:**
```typescript
// Gunakan once: true untuk animasi entrance
<AnimatedSection once={true} />

// Gunakan transform untuk performa lebih baik
<motion.div animate={{ x: 100 }} /> // ✅ GPU accelerated
```

**❌ BAD:**
```typescript
// Animasi repeat terus menerus
<AnimatedSection once={false} /> // ❌ Dapat performa hit

// Animasi properties yang mahal
<motion.div animate={{ width: 100 }} /> // ❌ Layout thrashing
```

### 3. Accessibility

**✅ GOOD:**
```typescript
// Respect user preferences
const prefersReducedMotion = useReducedMotion();

<motion.div
  animate={prefersReducedMotion ? {} : { opacity: 1 }}
/>
```

**❌ BAD:**
```typescript
// Animasi untuk semua user tanpa exception
<motion.div animate={{ opacity: 1 }} /> // Tidak ada check
```

### 4. User Experience

**✅ GOOD:**
- Animasi duration: 0.3s - 0.8s (tidak terlalu cepat/lambat)
- Easing: easeOut untuk entrance, easeInOut untuk loops
- Stagger delay: 0.05s - 0.2s antar items

**❌ BAD:**
- Animasi terlalu cepat (< 0.2s) - user tidak notice
- Animasi terlalu lambat (> 1.5s) - user menunggu
- Semua animasi bersamaan - tidak ada hierarchy

---

## ⚡ Performance Tips

### 1. Animate Only What's Necessary

```typescript
// ✅ GOOD: Animate opacity + transform (GPU)
<motion.div
  animate={{ opacity: 1, y: 0 }}
/>

// ❌ BAD: Animate width, height, margin (CPU)
<motion.div
  animate={{ width: 100, height: 200, margin: 20 }}
/>
```

### 2. Use will-change Sparingly

```typescript
// ✅ GOOD: Only on animated elements
<motion.div className="will-change-transform" />

// ❌ BAD: On every element
<div className="will-change-transform" /> // Overuse
```

### 3. Limit Concurrent Animations

```typescript
// ✅ GOOD: Stagger animations
items.map((item, i) => (
  <motion.div key={i} delay={i * 0.1} />
));

// ❌ BAD: All at once
items.map((item) => (
  <motion.div key={item.id} /> // Semua animasi bersamaan
));
```

### 4. Use once: true for Entrance

```typescript
// ✅ GOOD: Animate once on enter
<AnimatedSection once={true} />

// ❌ BAD: Animate every time
<AnimatedSection once={false} /> // Dapat performance hit
```

---

## 📖 Contoh Implementasi

### Contoh 1: Projects Section dengan Stagger

```typescript
import StaggerGrid from './components/animations/StaggerGrid';

const ProjectsSection = () => {
  return (
    <section>
      <SectionTitle title="My Projects" />
      
      <StaggerGrid
        items={projects}
        columns={3}
        gap="lg"
        animation="scale"
        staggerDelay={0.15}
      >
        {(project) => (
          <ProjectCard
            key={project.id}
            {...project}
            whileHover={{ y: -10 }}
          />
        )}
      </StaggerGrid>
    </section>
  );
};
```

### Contoh 2: Stats dengan Number Counter

```typescript
import NumberCounter from './components/animations/NumberCounter';
import AnimatedSection from './components/animations/AnimatedSection';

const StatsSection = () => {
  return (
    <AnimatedSection>
      <div className="grid grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-400">
            <NumberCounter end={50} suffix="+" duration={2.5} />
          </div>
          <p className="text-dark-400">Projects Completed</p>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-400">
            <NumberCounter end={100} suffix="%" duration={2} />
          </div>
          <p className="text-dark-400">Client Satisfaction</p>
        </div>
        
        {/* ... more stats */}
      </div>
    </AnimatedSection>
  );
};
```

### Contoh 3: Hero dengan Multiple Animations

```typescript
import TextReveal from './components/animations/TextReveal';
import MorphingShape from './components/animations/MorphingShape';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <MorphingShape variant="blob1" size="xl" className="absolute -top-32 -left-32" />
      <MorphingShape variant="blob2" size="xl" className="absolute -bottom-32 -right-32" />
      
      <div className="relative z-10">
        {/* Title with Text Reveal */}
        <TextReveal 
          text="Building Digital Experiences"
          mode="word"
          delay={0.5}
          gradient={true}
          className="text-5xl font-bold"
        />
        
        {/* Subtitle with Fade */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Full Stack Developer & Designer
        </motion.p>
        
        {/* CTA with Stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, staggerChildren: 0.2 }}
        >
          <Button>View Work</Button>
          <Button variant="outline">Contact Me</Button>
        </motion.div>
      </div>
    </section>
  );
};
```

---

## 🎯 Animation Timing Guide

### Entrance Animations

| Element | Delay | Duration | Easing |
|---------|-------|----------|--------|
| Background | 0s | 1s | easeOut |
| Logo/Avatar | 0.2s | 0.6s | easeOut |
| Main Title | 0.4s | 0.8s | easeOut |
| Subtitle | 0.6s | 0.6s | easeOut |
| Body Text | 0.8s | 0.6s | easeOut |
| Buttons | 1.0s | 0.5s | easeOut |
| Stats | 1.2s | 2s | easeOut |

### Stagger Delays

| Grid Size | Delay Per Item |
|-----------|----------------|
| 3 items | 0.1s |
| 6 items | 0.08s |
| 9+ items | 0.05s |

### Hover Animations

| Element | Duration | Scale |
|---------|----------|-------|
| Button | 0.2s | 1.05 |
| Card | 0.3s | 1.02 |
| Icon | 0.2s | 1.1 |

---

## 🔧 Troubleshooting

### Animasi Tidak Jalan

**Cek:**
1. ✅ Framer Motion terinstall? `npm list framer-motion`
2. ✅ Import component dengan benar?
3. ✅ Initial & animate props ada?
4. ✅ Browser support? (Chrome, Firefox, Safari modern)

### Animasi Terlalu Cepat/Lambat

**Solusi:**
```typescript
// Adjust duration
<motion.div transition={{ duration: 0.5 }} /> // Faster
<motion.div transition={{ duration: 1.5 }} /> // Slower

// Adjust easing
<motion.div transition={{ ease: 'easeInOut' }} /> // Smooth
<motion.div transition={{ ease: 'linear' }} /> // Constant
```

### Performance Buruk

**Solusi:**
1. Kurangi jumlah concurrent animations
2. Gunakan `once={true}` untuk entrance
3. Animate hanya `opacity` dan `transform`
4. Gunakan React.memo untuk component berat

---

## 📚 Resources

### Dokumentasi
- [Framer Motion Docs](https://www.framer.com/motion/)
- [MDN Animation Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

### Inspirasi
- [Awwwards](https://www.awwwards.com/) - Website award-winning
- [Codepen Animations](https://codepen.io/tag/animations) - Community examples
- [SEGESTA](https://segesta.co/) - Reference design

### Tools
- [Easing Functions](https://easings.net/) - Visual easing reference
- [Cubic Bezier](https://cubic-bezier.com/) - Custom easing generator

---

> 💡 **Senior Tip:**
> 
> "Animasi yang baik adalah yang tidak terlihat. 
> User harus merasa smooth, bukan terganggu.
> Less is more."
> 
> — 20 years experience

---

**Created:** 2024
**Version:** 1.0
**Status:** Production Ready ✅
