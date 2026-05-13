/**
 * ============================================
 * 📁 src/components/ui/SectionTitle.tsx
 * ============================================
 * 
 * Komponen reusable untuk judul section.
 * Setiap section di portfolio menggunakan komponen
 * ini agar style konsisten.
 * 
 * Props:
 * - title: Judul utama section
 * - subtitle: Sub-judul / deskripsi singkat
 * - badge: Label kecil di atas judul
 * - align: Rata text (center/left)
 */

import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'center' | 'left';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  badge,
  align = 'center',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-dark-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex gap-1 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="w-8 h-1 rounded-full bg-primary-500" />
        <div className="w-3 h-1 rounded-full bg-accent-500" />
        <div className="w-1.5 h-1 rounded-full bg-primary-400" />
      </div>
    </motion.div>
  );
};

export default SectionTitle;
