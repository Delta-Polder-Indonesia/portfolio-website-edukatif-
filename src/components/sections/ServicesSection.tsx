/**
 * ============================================
 * 📁 src/components/sections/ServicesSection.tsx
 * ============================================
 * 
 * ⚠️ PANDUAN MENGGANTI ICON LAYANAN DI SINI ⚠️
 * 
 * Lokasi file icon layanan:
 * public/images/services/
 * 
 * Daftar file yang digunakan (edit di portfolio-data.ts):
 * - webdev.svg, design.svg, mobile.svg, consulting.svg
 * 
 * CARA MENGGANTI ICON LAYANAN:
 * 1. Download icon SVG yang sesuai
 * 2. Ukuran: 64x64px atau 128x128px
 * 3. Simpan di public/images/services/[nama].svg
 * 4. Update path di src/data/portfolio-data.ts
 *    Contoh: icon: '/images/services/my-service.svg'
 * 5. Refresh browser
 * 
 * SUMBER ICON:
 * - Heroicons: https://heroicons.com
 * - Lucide: https://lucide.dev
 * - Phosphor Icons: https://phosphoricons.com
 * - IconScout: https://iconscout.com (premium)
 * 
 * TIPS:
 * - Gunakan style icon yang konsisten (outline atau filled)
 * - SVG lebih baik untuk skalabilitas
 * - Pastikan kontras warna baik
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data/portfolio-data';
import IconImage from '../ui/IconImage';

const gradients = [
  'from-violet-500 to-indigo-500',
  'from-pink-500 to-rose-500',
  'from-cyan-500 to-blue-500',
  'from-emerald-500 to-teal-500',
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Layanan"
          title="Apa yang Saya Tawarkan"
          subtitle="Layanan profesional untuk membantu mewujudkan ide digital Anda"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            // Extract service key from icon path
            const serviceKey = service.icon.split('/').pop()?.replace('.svg', '') || 'code';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300 group"
              >
                {/* Icon dengan gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  <IconImage
                    icon={serviceKey}
                    alt={service.title}
                    size="lg"
                    className="text-white"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-dark-400 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark-300">
                      <ArrowRight size={14} className="text-primary-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors group/link"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
