/**
 * ============================================
 * 📁 src/components/sections/ProjectsSection.tsx
 * ============================================
 * 
 * ⚠️ PANDUAN MENGGANTI GAMBAR PROYEK DI SINI ⚠️
 * 
 * Lokasi file gambar proyek:
 * public/images/projects/
 * 
 * Daftar file yang digunakan (edit di portfolio-data.ts):
 * - ecommerce.jpg, dashboard.jpg, social.jpg
 * - ai.jpg, task.jpg, crypto.jpg
 * 
 * CARA MENGGANTI GAMBAR PROYEK:
 * 1. Siapkan screenshot proyek Anda
 * 2. Ukuran disarankan: 800x600px atau 1200x800px (landscape)
 * 3. Simpan di public/images/projects/[nama].jpg
 * 4. Update path di src/data/portfolio-data.ts
 *    Contoh: image: '/images/projects/my-app.jpg'
 * 5. Refresh browser
 * 
 * TIPS SCREENSHOT PROYEK:
 * - Gunakan mockup browser/device untuk presentasi lebih baik
 * - Tools: shots.so, mockupworld.co, ls.graphics (gratis)
 * - Compress gambar: tinypng.com, squoosh.app
 * - Ukuran file: < 500KB per gambar
 * - Format: JPG untuk foto, PNG untuk grafik dengan transparan
 * 
 * ALTERNATIF: Gunakan gradient jika belum ada screenshot
 * (komponen sudah handle fallback otomatis)
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, Star, Eye, X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/portfolio-data';
import type { Project } from '../../data/portfolio-data';
import Image from '../ui/Image';

const projectCategories = ['Semua', 'Fullstack', 'Frontend', 'AI/ML'];

// Gradient fallback untuk setiap proyek (digunakan jika gambar tidak ada)
const projectGradients: Record<string, string> = {
  ecommerce: 'from-violet-600 to-indigo-600',
  dashboard: 'from-cyan-600 to-blue-600',
  social: 'from-pink-600 to-rose-600',
  ai: 'from-emerald-600 to-teal-600',
  task: 'from-orange-600 to-amber-600',
  crypto: 'from-yellow-600 to-lime-600',
};

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === 'Semua'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Extract project key from image path
  const getProjectKey = (imagePath: string) => {
    const fileName = imagePath.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
    return fileName;
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Portfolio"
          title="Proyek Terbaru"
          subtitle="Beberapa proyek terbaik yang pernah saya kerjakan"
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'glass text-dark-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const projectKey = getProjectKey(project.image);
              const gradient = projectGradients[projectKey] || 'from-primary-600 to-primary-500';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group rounded-2xl glass overflow-hidden hover:border-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image dengan Gradient Fallback */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Gradient background sebagai fallback */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                    
                    {/* Image overlay */}
                    <div className="absolute inset-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                        showFallback={false}
                      />
                    </div>
                  
                    {project.featured && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 text-yellow-400 text-xs font-semibold flex items-center gap-1 z-10">
                        <Star size={12} className="fill-yellow-400" />
                        Featured
                      </div>
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
                      <button className="p-3 rounded-xl bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 transition-colors cursor-pointer">
                        <Eye size={20} />
                      </button>
                      <a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-xl bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-xl bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 transition-colors"
                      >
                        <FolderGit2 size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-md bg-dark-800/80 text-dark-400 border border-dark-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-lg w-full rounded-2xl glass-strong p-8 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl hover:bg-white/10 text-dark-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className={`w-full h-48 rounded-xl overflow-hidden mb-6 relative`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${projectGradients[getProjectKey(selectedProject.image)] || 'from-primary-600 to-primary-500'}`} />
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-70"
                  showFallback={false}
                />
              </div>

              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
                {selectedProject.category}
              </span>

              <h3 className="text-2xl font-bold text-white mt-3 mb-3">{selectedProject.title}</h3>
              <p className="text-dark-400 leading-relaxed mb-6">{selectedProject.longDescription}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-lg bg-dark-800 text-dark-300 border border-dark-700/50">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedProject.liveUrl}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-400 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass text-dark-300 font-semibold hover:bg-white/10 hover:text-white transition-colors"
                >
                  <FolderGit2 size={18} />
                  Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
