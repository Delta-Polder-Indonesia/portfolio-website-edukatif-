/**
 * ============================================
 * 📁 src/components/sections/SkillsSection.tsx
 * ============================================
 * 
 * ⚠️ PANDUAN MENGGANTI ICON SKILLS DI SINI ⚠️
 * 
 * Lokasi file icon skills:
 * public/images/skills/
 * 
 * Daftar file yang digunakan (edit path di portfolio-data.ts):
 * - react.svg, typescript.svg, tailwind.svg, vue.svg
 * - html.svg, javascript.svg
 * - nodejs.svg, python.svg, postgresql.svg, mongodb.svg
 * - graphql.svg, rest.svg
 * - git.svg, docker.svg, aws.svg, cicd.svg, linux.svg, vercel.svg
 * - figma.svg, adobexd.svg, uiux.svg, prototyping.svg
 * 
 * CARA MENGGANTI ICON:
 * 1. Download icon SVG dari sumber resmi (brandfolder.com, simpleicons.org)
 * 2. Simpan di public/images/skills/[nama].svg
 * 3. Update path di src/data/portfolio-data.ts
 *    Contoh: icon: '/images/skills/react.svg'
 * 4. Refresh browser
 * 
 * SUMBER ICON GRATIS:
 * - Simple Icons: https://simpleicons.org (SVG brand icons)
 * - Devicon: https://devicon.dev (Icon teknologi)
 * - World Vector Logo: https://worldvectorlogo.com
 * 
 * TIPS:
 * - Gunakan format SVG untuk kualitas terbaik
 * - Ukuran file < 10KB per icon
 * - Consistent size (disarankan 64x64px viewBox)
 * - Remove fill attribute agar bisa di-style dengan CSS
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/portfolio-data';
import IconImage from '../ui/IconImage';

const categories = [
  { key: 'all', label: 'Semua' },
  { key: 'frontend', label: '🌐 Frontend' },
  { key: 'backend', label: '⚙️ Backend' },
  { key: 'tools', label: '🛠️ Tools' },
  { key: 'design', label: '🎨 Design' },
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  // Extract skill key from path for IconImage
  const getSkillKey = (iconPath: string) => {
    const fileName = iconPath.split('/').pop()?.replace('.svg', '') || '';
    return fileName;
  };

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Keahlian"
          title="Tech Stack & Skills"
          subtitle="Teknologi dan tools yang saya kuasai untuk membangun solusi digital berkualitas"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'glass text-dark-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Icon Image Component */}
                    <IconImage
                      icon={getSkillKey(skill.icon)}
                      alt={skill.name}
                      size="md"
                    />
                    <span className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-primary-400">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className={`h-full rounded-full ${
                      skill.level >= 90
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                        : skill.level >= 80
                        ? 'bg-gradient-to-r from-primary-500 to-primary-400'
                        : 'bg-primary-500/70'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
