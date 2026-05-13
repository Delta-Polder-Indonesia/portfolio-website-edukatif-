/**
 * ============================================
 * 📁 src/data/portfolio-data.ts
 * ============================================
 * 
 * ⚠️ PANDUAN MENGGANTI GAMBAR DI FILE INI ⚠️
 * 
 * File ini berisi SEMUA data portfolio termasuk referensi gambar.
 * Untuk mengganti gambar, edit field yang berakhiran:
 * - icon: path ke file icon (untuk skills, services)
 * - image: path ke file gambar (untuk projects, blog)
 * - avatar: path ke file foto (untuk testimonials)
 * 
 * STRUKTUR FOLDER GAMBAR:
 * public/
 * └── images/
 *     ├── skills/        → Icon teknologi (react.svg, nodejs.svg, dll)
 *     ├── projects/      → Thumbnail proyek (ecommerce.jpg, dashboard.jpg, dll)
 *     ├── blog/          → Thumbnail artikel
 *     ├── services/      → Icon layanan
 *     ├── avatar.jpg     → Foto profil Anda
 *     └── fallback.svg   → Gambar default jika file tidak ditemukan
 * 
 * CARA MENGGANTI:
 * 1. Siapkan gambar Anda (format: SVG, PNG, JPG)
 * 2. Upload ke folder public/images/[kategori]/
 * 3. Update path di file ini
 * 4. Refresh browser
 * 
 * CONTOH:
 * icon: '/images/skills/react.svg'  ← path relatif dari public/
 * image: '/images/projects/app.jpg'
 * avatar: '/images/avatar.jpg'
 */

// ===== TYPE DEFINITIONS =====
export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'design';
  icon: string; // Path ke file icon, contoh: '/images/skills/react.svg'
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string; // Path ke thumbnail proyek
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string; // Path ke foto testimoni atau inisial
  content: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string; // Path ke thumbnail artikel
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Path ke icon layanan
  features: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stats {
  label: string;
  value: string;
  suffix: string;
}

// ===== PERSONAL INFO =====
export const personalInfo = {
  name: 'Alex Pratama',
  title: 'Full Stack Developer',
  subtitle: 'UI/UX Designer & Creative Technologist',
  bio: `Seorang developer berpengalaman 5+ tahun yang passionate dalam membangun 
        aplikasi web modern dan scalable. Menguasai ekosistem React, Node.js, dan 
        cloud technologies. Selalu bersemangat mempelajari teknologi baru dan 
        berbagi pengetahuan dengan komunitas.`,
  email: 'alex@portfolio.dev',
  phone: '+62 812-3456-7890',
  location: 'Jakarta, Indonesia',
  availability: 'Tersedia untuk Freelance',
  resumeUrl: '#',
  // ⚠️ GANTI FOTO PROFIL DI SINI
  avatar: '/images/avatar.jpg', // Upload foto Anda ke public/images/avatar.jpg
};

// ===== STATS =====
export const stats: Stats[] = [
  { label: 'Tahun Pengalaman', value: '5', suffix: '+' },
  { label: 'Proyek Selesai', value: '50', suffix: '+' },
  { label: 'Klien Puas', value: '30', suffix: '+' },
  { label: 'Kontribusi Open Source', value: '200', suffix: '+' },
];

// ===== NAVIGATION DATA =====
export const navItems: NavItem[] = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Layanan', href: '#services' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Kontak', href: '#contact' },
];

// ===== SKILLS =====
// ⚠️ GANTI ICON SKILLS DI SINI
// Setiap skill punya icon yang merujuk ke file di public/images/skills/
export const skills: Skill[] = [
  // Frontend
  { name: 'React / Next.js', level: 95, category: 'frontend', icon: '/images/skills/react.svg' },
  { name: 'TypeScript', level: 90, category: 'frontend', icon: '/images/skills/typescript.svg' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend', icon: '/images/skills/tailwind.svg' },
  { name: 'Vue.js', level: 75, category: 'frontend', icon: '/images/skills/vue.svg' },
  { name: 'HTML5 / CSS3', level: 98, category: 'frontend', icon: '/images/skills/html.svg' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'frontend', icon: '/images/skills/javascript.svg' },
  
  // Backend
  { name: 'Node.js', level: 90, category: 'backend', icon: '/images/skills/nodejs.svg' },
  { name: 'Python / Django', level: 80, category: 'backend', icon: '/images/skills/python.svg' },
  { name: 'PostgreSQL', level: 85, category: 'backend', icon: '/images/skills/postgresql.svg' },
  { name: 'MongoDB', level: 80, category: 'backend', icon: '/images/skills/mongodb.svg' },
  { name: 'GraphQL', level: 75, category: 'backend', icon: '/images/skills/graphql.svg' },
  { name: 'REST API', level: 92, category: 'backend', icon: '/images/skills/rest.svg' },
  
  // Tools
  { name: 'Git / GitHub', level: 92, category: 'tools', icon: '/images/skills/git.svg' },
  { name: 'Docker', level: 80, category: 'tools', icon: '/images/skills/docker.svg' },
  { name: 'AWS / GCP', level: 75, category: 'tools', icon: '/images/skills/aws.svg' },
  { name: 'CI/CD', level: 78, category: 'tools', icon: '/images/skills/cicd.svg' },
  { name: 'Linux', level: 82, category: 'tools', icon: '/images/skills/linux.svg' },
  { name: 'Vercel / Netlify', level: 90, category: 'tools', icon: '/images/skills/vercel.svg' },
  
  // Design
  { name: 'Figma', level: 88, category: 'design', icon: '/images/skills/figma.svg' },
  { name: 'Adobe XD', level: 72, category: 'design', icon: '/images/skills/adobexd.svg' },
  { name: 'UI/UX Design', level: 85, category: 'design', icon: '/images/skills/uiux.svg' },
  { name: 'Prototyping', level: 80, category: 'design', icon: '/images/skills/prototyping.svg' },
];

// ===== PROJECTS =====
// ⚠️ GANTI GAMBAR PROYEK DI SINI
// Setiap proyek punya image yang merujuk ke file di public/images/projects/
export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur real-time inventory dan payment gateway.',
    longDescription: 'Membangun platform e-commerce full-stack dengan React, Node.js, dan Stripe. Fitur termasuk manajemen produk, keranjang belanja, checkout, dan dashboard admin.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
    image: '/images/projects/ecommerce.jpg', // Ganti dengan screenshot proyek Anda
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Fullstack',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Dashboard analitik real-time dengan visualisasi data interaktif.',
    longDescription: 'Dashboard berbasis React dengan chart library D3.js, menampilkan data real-time menggunakan WebSocket. Terintegrasi dengan berbagai API untuk aggregasi data.',
    tags: ['React', 'D3.js', 'WebSocket', 'TypeScript', 'PostgreSQL'],
    image: '/images/projects/dashboard.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Social Media App',
    description: 'Aplikasi sosial media dengan fitur real-time chat dan story.',
    longDescription: 'Platform media sosial lengkap dengan fitur feed, chat real-time, stories, notifikasi push, dan sistem following/followers.',
    tags: ['Next.js', 'Socket.io', 'Redis', 'S3', 'Prisma'],
    image: '/images/projects/social.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Fullstack',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'Tool AI untuk generate konten marketing dan copywriting.',
    longDescription: 'Aplikasi SaaS yang memanfaatkan OpenAI API untuk menghasilkan konten marketing berkualitas tinggi. Dilengkapi template, history, dan team collaboration.',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'Supabase', 'Vercel'],
    image: '/images/projects/ai.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'AI/ML',
  },
  {
    id: 5,
    title: 'Task Management System',
    description: 'Sistem manajemen tugas dengan Kanban board dan timeline view.',
    longDescription: 'Aplikasi project management dengan drag-and-drop Kanban, Gantt chart, time tracking, dan integrasi dengan Slack dan GitHub.',
    tags: ['React', 'DnD Kit', 'Node.js', 'PostgreSQL', 'Docker'],
    image: '/images/projects/task.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'Fullstack',
  },
  {
    id: 6,
    title: 'Crypto Portfolio Tracker',
    description: 'Aplikasi tracking portofolio cryptocurrency real-time.',
    longDescription: 'Tracker portofolio crypto dengan data real-time dari CoinGecko API, chart harga historis, alert notifikasi, dan analisis profit/loss.',
    tags: ['React', 'Chart.js', 'CoinGecko API', 'Firebase', 'PWA'],
    image: '/images/projects/crypto.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'Frontend',
  },
];

// ===== EXPERIENCE =====
export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2023 - Sekarang',
    description: 'Memimpin tim development dalam membangun platform SaaS enterprise-grade.',
    achievements: [
      'Meningkatkan performa aplikasi sebesar 40% melalui optimasi React dan caching strategy',
      'Memimpin tim 5 developer dalam migrasi dari monolith ke microservices',
      'Mengimplementasikan CI/CD pipeline yang mengurangi deployment time 60%',
      'Mentoring junior developer dan mengadakan tech talk mingguan',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Digital Creative Agency',
    period: '2021 - 2023',
    description: 'Membangun web application dan landing page untuk berbagai klien.',
    achievements: [
      'Menyelesaikan 20+ proyek klien dengan tingkat kepuasan 98%',
      'Mengembangkan design system internal yang digunakan seluruh tim',
      'Meningkatkan konversi landing page rata-rata 25% melalui A/B testing',
      'Memperkenalkan TypeScript ke tim dan menulis dokumentasi best practices',
    ],
    technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2019 - 2021',
    description: 'Berkontribusi dalam pengembangan MVP untuk berbagai startup.',
    achievements: [
      'Membangun 5 MVP dari scratch yang berhasil mendapat funding',
      'Belajar dan mengimplementasikan React Native untuk mobile app',
      'Berkontribusi ke 3 proyek open source populer',
      'Mengikuti dan memenangkan 2 hackathon nasional',
    ],
    technologies: ['JavaScript', 'React', 'PHP', 'Laravel', 'MySQL'],
  },
];

// ===== SERVICES =====
// ⚠️ GANTI ICON LAYANAN DI SINI
export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Membangun web application modern dengan teknologi terkini. Responsive, cepat, dan SEO-friendly.',
    icon: '/images/services/webdev.svg',
    features: ['Single Page Application (SPA)', 'Server-Side Rendering (SSR)', 'Progressive Web App (PWA)', 'API Development & Integration'],
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Mendesain antarmuka yang intuitif dan menarik. Fokus pada user experience dan conversion.',
    icon: '/images/services/design.svg',
    features: ['User Interface Design', 'User Research & Testing', 'Wireframing & Prototyping', 'Design System Development'],
  },
  {
    id: 3,
    title: 'Mobile Development',
    description: 'Mengembangkan aplikasi mobile cross-platform yang smooth dan native-like.',
    icon: '/images/services/mobile.svg',
    features: ['React Native', 'Cross-Platform Development', 'App Store Optimization', 'Push Notification'],
  },
  {
    id: 4,
    title: 'Consulting & Mentoring',
    description: 'Konsultasi teknis dan mentoring untuk tim development Anda.',
    icon: '/images/services/consulting.svg',
    features: ['Code Review & Audit', 'Architecture Planning', 'Team Training', 'Best Practices Workshop'],
  },
];

// ===== TESTIMONIALS =====
// ⚠️ GANTI FOTO TESTIMONIAL DI SINI
// Gunakan path ke foto atau biarkan inisial (akan tampil gradient dengan inisial nama)
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'CTO',
    company: 'TechVenture',
    avatar: '/images/testimonials/budi.jpg', // Ganti dengan foto asli atau hapus untuk pakai inisial
    content: 'Alex adalah developer luar biasa yang selalu memberikan hasil di atas ekspektasi. Proyek e-commerce kami selesai tepat waktu dengan kualitas excellent.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Wijaya',
    role: 'Product Manager',
    company: 'InnovateCo',
    avatar: '/images/testimonials/sarah.jpg',
    content: 'Bekerja dengan Alex sangat menyenangkan. Dia tidak hanya technical tapi juga memahami business requirement dengan baik. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupX',
    avatar: '/images/testimonials/michael.jpg',
    content: 'MVP kami selesai dalam 3 minggu dan langsung mendapat traction. Alex membantu kami dari concept sampai deployment. Komunikasi sangat baik.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Dewi Anggraini',
    role: 'Design Lead',
    company: 'CreativeStudio',
    avatar: '/images/testimonials/dewi.jpg',
    content: 'Sebagai designer, saya sangat mengapresiasi perhatian Alex terhadap detail UI. Implementasi pixel-perfect dan selalu terbuka untuk feedback.',
    rating: 5,
  },
];

// ===== BLOG POSTS =====
// ⚠️ GANTI GAMBAR BLOG DI SINI
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Memahami React Server Components di 2024',
    excerpt: 'Panduan lengkap tentang React Server Components dan bagaimana cara menggunakannya untuk meningkatkan performa aplikasi.',
    date: '15 Jan 2024',
    readTime: '8 min',
    category: 'React',
    image: '/images/blog/react-server.jpg',
  },
  {
    id: 2,
    title: 'Best Practices TypeScript untuk Production',
    excerpt: 'Tips dan trik TypeScript yang akan membuat kode Anda lebih robust dan maintainable di production.',
    date: '28 Dec 2023',
    readTime: '12 min',
    category: 'TypeScript',
    image: '/images/blog/typescript.jpg',
  },
  {
    id: 3,
    title: 'Design System dari Nol dengan Tailwind CSS',
    excerpt: 'Cara membangun design system yang konsisten menggunakan Tailwind CSS dan React components.',
    date: '10 Dec 2023',
    readTime: '10 min',
    category: 'CSS',
    image: '/images/blog/tailwind.jpg',
  },
];

// ===== SOCIAL LINKS =====
export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
];
