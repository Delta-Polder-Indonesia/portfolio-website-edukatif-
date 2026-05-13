# 🔒 Security Policy

Keamanan proyek ini adalah prioritas utama. Panduan ini menjelaskan cara melaporkan kerentanan keamanan dan praktik terbaik untuk menjaga keamanan.

---

## 📋 Supported Versions

Versi yang saat ini menerima update keamanan:

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | ✅ Yes             |
| 1.x.x   | ❌ No              |

---

## 🚨 Reporting a Vulnerability

Kami sangat menghargai upaya untuk mengungkapkan kerentanan keamanan secara bertanggung jawab.

### Cara Melaporkan

**JANGAN** buat issue publik untuk kerentanan keamanan!

**LAKUKAN:**

1. **Email** ke: [security@yourdomain.com]
2. **GitHub Private Vulnerability Reporting** (jika tersedia)
3. Sertakan informasi detail tentang kerentanan

### Informasi yang Harus Disertakan

- Deskripsi kerentanan
- Langkah untuk mereproduksi
- Dampak potensial
- Versi yang terdampak
- Solusi yang disarankan (jika ada)

### Timeline Respon

- **Acknowledgment:** Dalam 48 jam
- **Initial Assessment:** Dalam 5 hari kerja
- **Resolution:** Tergantung kompleksitas (biasanya 30 hari)

### Proses

```
1. Report diterima
   ↓
2. Acknowledgment (48 jam)
   ↓
3. Assessment & verification
   ↓
4. Fix development
   ↓
5. Testing
   ↓
6. Release patch
   ↓
7. Public disclosure (setelah fix tersedia)
```

---

## 🛡️ Security Best Practices

### Untuk Developer

#### 1. Dependencies

```bash
# Audit dependencies secara berkala
npm audit

# Update dependencies
npm update

# Check for vulnerabilities
npm audit --audit-level=high
```

#### 2. Environment Variables

```bash
# ✅ GOOD: Gunakan .env untuk sensitive data
VITE_API_KEY=your_api_key
VITE_API_URL=https://api.example.com

# ❌ BAD: Hardcode sensitive data di code
const API_KEY = 'sk-1234567890'; // Jangan pernah lakukan ini!
```

#### 3. Input Validation

```typescript
// ✅ GOOD: Validate semua input
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ❌ BAD: Trust user input
function processEmail(email: string) {
  // Langsung digunakan tanpa validation
}
```

#### 4. XSS Prevention

```typescript
// ✅ GOOD: React automatically escapes content
<div>{userInput}</div> // Aman

// ❌ BAD: Dangerous HTML injection
<div dangerouslySetInnerHTML={{ __html: userInput }} /> // Berbahaya!
```

#### 5. CSRF Protection

- Gunakan token CSRF untuk form
- Implementasikan SameSite cookies
- Validate origin header

---

## 🔐 Security Features

### Implemented

- ✅ **HTTPS Only** - Enforced di production
- ✅ **Content Security Policy (CSP)** - Prevent XSS
- ✅ **X-Frame-Options** - Prevent clickjacking
- ✅ **X-Content-Type-Options** - Prevent MIME sniffing
- ✅ **Strict-Transport-Security** - HSTS enabled
- ✅ **Input Sanitization** - All user inputs sanitized
- ✅ **Dependency Scanning** - Automated security audits

### Recommended

- [ ] **Rate Limiting** - Untuk API endpoints
- [ ] **Authentication** - Jika ada user system
- [ ] **Authorization** - Role-based access control
- [ ] **Logging & Monitoring** - Security event logging

---

## 📚 Security Resources

### Learning

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Web Security Academy](https://portswigger.net/web-security)
- [Security Headers](https://securityheaders.com/)

### Tools

- [npm audit](https://docs.npmjs.com/cli/commands/npm-audit)
- [Snyk](https://snyk.io/)
- [GitHub Security Advisories](https://github.com/advisories)

---

## 🏆 Security Hall of Fame

Kami mengakui dan menghargai peneliti keamanan yang melaporkan kerentanan secara bertanggung jawab.

### Contributors

*(Akan ditambahkan setelah ada report yang valid)*

---

## 📞 Contact

**Security Team:**

- 📧 Email: security@yourdomain.com
- 🔐 PGP Key: [Link ke PGP key jika ada]
- 💬 Response Time: 48 jam

---

## ⚖️ Legal

### Responsible Disclosure Policy

Kami mengikuti prinsip responsible disclosure:

1. Peneliti memberikan waktu yang cukup untuk kami memperbaiki kerentanan
2. Kami tidak akan mengambil tindakan hukum terhadap peneliti yang bertindak sesuai kebijakan ini
3. Kami menghargai privasi peneliti
4. Kami memberikan kredit kepada peneliti (dengan izin)

### Scope

**In Scope:**

- Aplikasi web utama
- API endpoints
- Authentication system
- User data handling

**Out of Scope:**

- Third-party services
- Denial of Service (DoS) attacks
- Social engineering
- Physical security

---

**Terima kasih telah membantu menjaga proyek ini tetap aman!** 🔒
