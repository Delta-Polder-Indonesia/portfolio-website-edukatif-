# 🤝 Panduan Kontribusi

Terima kasih atas minat Anda untuk berkontribusi pada proyek **Modern Portfolio Advanced**! 🎉

Panduan ini akan membantu Anda memahami cara berkontribusi dengan efektif.

---

## 📋 Daftar Isi

1. [Code of Conduct](#-code-of-conduct)
2. [Cara Berkontribusi](#-cara-berkontribusi)
3. [Setup Development](#-setup-development)
4. [Pull Request Process](#-pull-request-process)
5. [Coding Standards](#-coding-standards)
6. [Commit Message Guidelines](#-commit-message-guidelines)
7. [Bug Reports](#-bug-reports)
8. [Feature Requests](#-feature-requests)

---

## 📜 Code of Conduct

### Our Pledge

Kami berkomitmen untuk membuat partisipasi dalam proyek ini sebagai pengalaman yang bebas dari pelecehan untuk semua orang.

### Our Standards

Contoh perilaku yang **positif**:
- ✅ Menggunakan bahasa yang ramah dan inklusif
- ✅ Menghormati sudut pandang dan pengalaman yang berbeda
- ✅ Menerima kritik konstruktif dengan baik
- ✅ Fokus pada apa yang terbaik untuk komunitas
- ✅ Menunjukkan empati terhadap anggota komunitas lainnya

Contoh perilaku yang **tidak dapat diterima**:
- ❌ Penggunaan bahasa atau imagery seksual
- ❌ Trolling, komentar menghina/merendahkan
- ❌ Pelecehan publik atau pribadi
- ❌ Memublikasikan informasi pribadi orang lain tanpa izin
- ❌ Perilaku tidak etis atau tidak profesional

---

## 🚀 Cara Berkontribusi

### 1. Fork & Clone

```bash
# Fork repository ini di GitHub
# Kemudian clone ke lokal
git clone https://github.com/YOUR_USERNAME/modern-portfolio-advanced.git
cd modern-portfolio-advanced
```

### 2. Buat Branch

```bash
# Buat branch untuk feature/fix Anda
git checkout -b feature/nama-feature-anda
# atau
git checkout -b fix/nama-bug-fix
```

**Naming convention:**
- `feature/` - Untuk fitur baru
- `fix/` - Untuk bug fixes
- `docs/` - Untuk dokumentasi
- `style/` - Untuk formatting, missing semi colons, etc
- `refactor/` - Untuk code refactoring
- `test/` - Untuk adding tests
- `chore/` - Untuk build process or auxiliary tools changes

### 3. Make Changes

Lakukan perubahan sesuai dengan kontribusi Anda:
- Tambahkan fitur baru
- Perbaiki bug
- Update dokumentasi
- Improve performance
- dll

### 4. Test Changes

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

### 5. Commit Changes

```bash
# Add changes
git add .

# Commit dengan message yang jelas
git commit -m "feat: tambah animasi baru untuk hero section"
```

### 6. Push & Create PR

```bash
# Push ke branch Anda
git push origin feature/nama-feature-anda

# Kemudian buat Pull Request di GitHub
```

---

## 🛠️ Setup Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/modern-portfolio-advanced.git

# Masuk ke folder
cd modern-portfolio-advanced

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open browser di http://localhost:3000
```

### Build

```bash
# Build untuk production
npm run build

# Preview build
npm run preview
```

---

## 📝 Pull Request Process

### PR Checklist

Sebelum submit PR, pastikan:

- [ ] Code mengikuti coding standards
- [ ] Tidak ada console.log() di production code
- [ ] Build berhasil (`npm run build`)
- [ ] Tidak ada TypeScript errors
- [ ] Dokumentasi diupdate (jika perlu)
- [ ] Tested di local
- [ ] Commit message mengikuti guidelines

### PR Template

```markdown
## Deskripsi
Jelaskan perubahan yang Anda buat

## Tipe Perubahan
- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update

## Testing
- [ ] Tested di local
- [ ] Build berhasil
- [ ] No console errors

## Screenshots (jika ada)
Tambahkan screenshots jika perubahan visual

## Related Issues
Link ke issue yang terkait (jika ada)
```

### Review Process

1. **Automated Checks** - Build dan tests akan jalan otomatis
2. **Code Review** - Maintainer akan review code Anda
3. **Feedback** - Jika ada perubahan yang diminta, update PR
4. **Approval** - Setelah approved, PR akan di-merge
5. **Deploy** - Changes akan di-deploy ke GitHub Pages

---

## 💻 Coding Standards

### TypeScript

```typescript
// ✅ GOOD: Type definitions yang jelas
interface Props {
  name: string;
  age: number;
  email?: string; // Optional
}

// ❌ BAD: Any type
const data: any = {}; // Jangan gunakan any!
```

### React Components

```typescript
// ✅ GOOD: Functional component dengan types
const MyComponent: React.FC<Props> = ({ name, age }) => {
  return <div>{name}</div>;
};

// ❌ BAD: Arrow function tanpa types
const MyComponent = (props) => {
  return <div>{props.name}</div>;
};
```

### CSS/Tailwind

```typescript
// ✅ GOOD: Consistent class ordering
<div className="flex items-center justify-center gap-4 p-6 bg-white rounded-lg shadow" />

// ❌ BAD: Random ordering
<div className="bg-white p-6 flex rounded-lg items-center shadow justify-center gap-4" />
```

### File Naming

```
✅ GOOD:
- PascalCase untuk components: MyComponent.tsx
- camelCase untuk utils: myUtility.ts
- kebab-case untuk files lain: my-file.md

❌ BAD:
- mycomponent.tsx
- My_Utility.ts
- My File.md
```

---

## 📝 Commit Message Guidelines

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only changes
- `style` - Changes that do not affect the meaning (white-space, formatting, etc)
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `perf` - Performance improvement
- `test` - Adding missing tests or correcting existing tests
- `chore` - Changes to the build process or auxiliary tools

### Examples

```bash
# Feature
feat(hero): tambah animasi morphing blob

# Bug fix
fix(projects): perbaiki modal tidak menutup

# Documentation
docs(readme): update instalasi guide

# Refactor
refactor(components): extract reusable button component

# Style
style(css): improve class ordering
```

---

## 🐛 Bug Reports

### Template Bug Report

```markdown
**Describe the bug**
Deskripsi jelas tentang bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
Apa yang seharusnya terjadi

**Screenshots**
Jika ada, tambahkan screenshots

**Environment:**
- OS: [e.g. Windows, macOS]
- Browser: [e.g. Chrome, Safari]
- Version: [e.g. 22]

**Additional context**
Informasi tambahan
```

### Where to Report

- Buat issue di GitHub: https://github.com/YOUR_USERNAME/modern-portfolio-advanced/issues
- Gunakan label: `bug`

---

## 💡 Feature Requests

### Template Feature Request

```markdown
**Is your feature request related to a problem? Please describe.**
Deskripsi masalah

**Describe the solution you'd like**
Solusi yang diinginkan

**Describe alternatives you've considered**
Alternatif yang sudah dipertimbangkan

**Additional context**
Informasi tambahan
```

### Where to Request

- Buat issue di GitHub dengan label: `enhancement`

---

## 📚 Resources

### Documentation

- [README.md](README.md) - Main documentation
- [IMAGE_GUIDE.md](IMAGE_GUIDE.md) - Image guide
- [ANIMATION_GUIDE.md](ANIMATION_GUIDE.md) - Animation guide
- [SENIOR_REVIEW.md](SENIOR_REVIEW.md) - Code review

### Learning

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

## 🏆 Recognition

Contributors akan diakui di:

1. **README.md** - Contributors section
2. **GitHub Contributors** - Otomatis track oleh GitHub
3. **Release Notes** - Mentioned di changelog

---

## ❓ Questions?

Jika ada pertanyaan:

1. Check dokumentasi yang ada
2. Search existing issues
3. Buat new issue dengan label `question`
4. Contact maintainer via email

---

## 📄 License

Dengan berkontribusi, Anda setuju bahwa kontribusi Anda akan di-lisensikan di bawah [MIT License](LICENSE).

---

Terima kasih atas kontribusi Anda! 🙏

Setiap kontribusi, sekecil apapun, sangat berarti untuk proyek ini! ❤️
