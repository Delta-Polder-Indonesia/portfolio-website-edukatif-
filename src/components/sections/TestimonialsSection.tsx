/**
 * ============================================
 * 📁 src/components/sections/TestimonialsSection.tsx
 * ============================================
 * 
 * ⚠️ PANDUAN MENGGANTI FOTO TESTIMONIAL DI SINI ⚠️
 * 
 * Lokasi file foto testimoni:
 * public/images/testimonials/
 * 
 * Daftar file yang digunakan (edit di portfolio-data.ts):
 * - budi.jpg, sarah.jpg, michael.jpg, dewi.jpg
 * 
 * CARA MENGGANTI FOTO TESTIMONIAL:
 * 1. Minta foto dari klien/kolega yang memberi testimoni
 * 2. Ukuran disarankan: 200x200px (square)
 * 3. Simpan di public/images/testimonials/[nama].jpg
 * 4. Update path di src/data/portfolio-data.ts
 *    Contoh: avatar: '/images/testimonials/client.jpg'
 * 5. Refresh browser
 * 
 * ALTERNATIF:
 * Jika tidak ada foto, komponen akan otomatis menampilkan
 * inisial nama dengan gradient background (sudah handle otomatis)
 * 
 * TIPS:
 * - Gunakan foto profesional atau LinkedIn profile photo
 * - Crop menjadi square (1:1 aspect ratio)
 * - Ukuran file: < 100KB per foto
 * - Format: JPG atau PNG
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { testimonials } from '../../data/portfolio-data';
import Avatar from '../ui/Avatar';

const avatarGradients = [
  'from-violet-500 to-indigo-500',
  'from-pink-500 to-rose-500',
  'from-cyan-500 to-blue-500',
  'from-emerald-500 to-teal-500',
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Testimoni"
          title="Kata Mereka"
          subtitle="Pendapat klien dan kolega tentang pengalaman bekerja dengan saya"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <Quote size={40} className="absolute top-6 right-6 text-primary-500/10 group-hover:text-primary-500/20 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-dark-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author dengan Avatar */}
              <div className="flex items-center gap-3">
                {/* Avatar Component - otomatis show inisial jika foto tidak ada */}
                <Avatar
                  src={testimonial.avatar}
                  name={testimonial.name}
                  size="lg"
                  gradient={avatarGradients[index % avatarGradients.length]}
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-dark-400">
                    {testimonial.role} di {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
