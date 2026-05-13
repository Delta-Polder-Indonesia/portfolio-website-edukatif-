/**
 * ============================================
 * 📁 src/components/sections/AboutSection.tsx
 * ============================================
 * 
 * ⚠️ PANDUAN MENGGANTI GAMBAR DI ABOUT SECTION ⚠️
 * 
 * Gambar yang digunakan:
 * 1. Avatar/foto profil besar - Edit di src/data/portfolio-data.ts
 *    Field: personalInfo.avatar = '/images/avatar.jpg'
 * 
 * CARA MENGGANTI:
 * 1. Siapkan foto profil berkualitas tinggi (disarankan 500x500px)
 * 2. Simpan di public/images/avatar.jpg (overwrite yang lama)
 * 3. Refresh browser
 * 
 * TIPS FOTO PROFIL:
 * - Gunakan foto profesional dengan pencahayaan baik
 * - Background polos atau blur lebih baik
 * - Ekspresi ramah dan profesional
 * - Ukuran file < 300KB untuk performa
 * - Format: JPG untuk foto, PNG untuk transparan
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Coffee, Lightbulb, Rocket, Download, Mail, MapPin, Calendar } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo } from '../../data/portfolio-data';
import Avatar from '../ui/Avatar';
import IconImage from '../ui/IconImage';

const quickFacts = [
  { icon: <Code2 size={24} />, title: 'Clean Code', desc: 'Menulis kode yang bersih, readable, dan maintainable' },
  { icon: <Coffee size={24} />, title: 'Lifelong Learner', desc: 'Selalu belajar teknologi & framework baru' },
  { icon: <Lightbulb size={24} />, title: 'Problem Solver', desc: 'Menikmati tantangan dan mencari solusi kreatif' },
  { icon: <Rocket size={24} />, title: 'Fast Delivery', desc: 'Fokus pada delivery berkualitas tepat waktu' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Tentang Saya"
          title="Mengenal Lebih Dekat"
          subtitle="Passionate developer yang mencintai teknologi dan selalu berusaha membuat dampak melalui kode"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Avatar & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 animate-pulse-glow" />
              <div className="absolute inset-1 rounded-3xl bg-dark-950" />
              
              {/* Avatar/Foto Profil Besar */}
              <div className="absolute inset-3 rounded-2xl overflow-hidden">
                <Avatar
                  src={personalInfo.avatar}
                  name={personalInfo.name}
                  className="w-full h-full"
                  gradient="from-primary-500/20 to-accent-500/20"
                />
              </div>

              {/* Floating tech badges - GANTI ICON DI SINI jika mau */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl glass text-sm font-semibold text-primary-400 flex items-center gap-2"
              >
                <IconImage icon="react" alt="React" size="sm" />
                React
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl glass text-sm font-semibold text-green-400 flex items-center gap-2"
              >
                <IconImage icon="nodejs" alt="Node.js" size="sm" />
                Node.js
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-xl glass text-sm font-semibold text-blue-400 flex items-center gap-2"
              >
                <IconImage icon="typescript" alt="TypeScript" size="sm" />
                TypeScript
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Developer dengan Passion untuk{' '}
              <span className="text-gradient">User Experience</span>
            </h3>
            <p className="text-dark-400 leading-relaxed mb-6">
              Saya adalah seorang Full Stack Developer dengan pengalaman lebih dari 5 tahun
              dalam membangun aplikasi web modern. Saya memiliki keahlian dalam React, Node.js,
              TypeScript, dan berbagai teknologi cloud. Saya percaya bahwa teknologi terbaik
              adalah yang tidak terlihat - yang membuat pengalaman pengguna menjadi mulus dan
              menyenangkan.
            </p>
            <p className="text-dark-400 leading-relaxed mb-8">
              Di luar coding, saya aktif berkontribusi ke komunitas open source, menulis blog
              teknis, dan menjadi mentor untuk developer pemula. Saya selalu excited untuk
              berkolaborasi dalam proyek yang menantang dan meaningful.
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-dark-300">
                <Mail size={18} className="text-primary-400" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-dark-300">
                <MapPin size={18} className="text-primary-400" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-dark-300">
                <Calendar size={18} className="text-primary-400" />
                <span className="text-sm">5+ Tahun Pengalaman</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative rounded-full h-3 w-3 bg-green-400" />
                </span>
                <span className="text-sm text-green-400">{personalInfo.availability}</span>
              </div>
            </div>

            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {quickFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                {fact.icon}
              </div>
              <h4 className="text-white font-semibold mb-2">{fact.title}</h4>
              <p className="text-dark-400 text-sm">{fact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
