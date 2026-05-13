/**
 * ============================================
 * 📁 src/components/sections/BlogSection.tsx
 * ============================================
 * 
 * ⚠️ PANDUAN MENGGANTI GAMBAR BLOG DI SINI ⚠️
 * 
 * Lokasi file gambar blog:
 * public/images/blog/
 * 
 * Daftar file yang digunakan (edit di portfolio-data.ts):
 * - react-server.jpg, typescript.jpg, tailwind.jpg
 * 
 * CARA MENGGANTI GAMBAR BLOG:
 * 1. Siapkan featured image untuk artikel
 * 2. Ukuran disarankan: 800x400px (2:1 aspect ratio)
 * 3. Simpan di public/images/blog/[nama].jpg
 * 4. Update path di src/data/portfolio-data.ts
 *    Contoh: image: '/images/blog/my-article.jpg'
 * 5. Refresh browser
 * 
 * TIPS GAMBAR BLOG:
 * - Gunakan gambar yang relevan dengan konten artikel
 * - Sumber gratis: unsplash.com, pexels.com, pixabay.com
 * - Buat custom: canva.com (template blog featured image)
 * - Compress: tinypng.com, squoosh.app
 * - Ukuran file: < 300KB per gambar
 * - Tambahkan text overlay untuk branding (opsional)
 * 
 * ALTERNATIF:
 * Komponen sudah handle gradient fallback jika gambar tidak ada
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { blogPosts } from '../../data/portfolio-data';
import Image from '../ui/Image';

const blogGradients: Record<string, string> = {
  react: 'from-cyan-500 to-blue-600',
  typescript: 'from-blue-500 to-indigo-600',
  tailwind: 'from-teal-500 to-cyan-600',
};

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Blog"
          title="Artikel Terbaru"
          subtitle="Sharing pengetahuan dan pengalaman dalam dunia teknologi"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => {
            const gradient = blogGradients[post.category.toLowerCase()] || 'from-primary-600 to-primary-500';

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl glass overflow-hidden group hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                {/* Thumbnail dengan Gradient Fallback */}
                <div className="relative h-48 overflow-hidden">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                      showFallback={false}
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-xl text-white text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-dark-400 mb-3">
                    <span className="flex items-center gap-1">
                      <BookOpen size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-dark-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 group-hover:text-primary-300 transition-colors">
                    Baca Selengkapnya
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
