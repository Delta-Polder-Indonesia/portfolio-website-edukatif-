/**
 * ============================================
 * 📁 src/components/sections/ExperienceSection.tsx
 * ============================================
 * 
 * Section pengalaman kerja dengan timeline vertikal.
 * 
 * Fitur:
 * - Timeline vertikal dengan garis penghubung
 * - Card untuk setiap pengalaman
 * - Daftar pencapaian dengan checkmark
 * - Tags teknologi yang digunakan
 * - Animasi scroll reveal
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../data/portfolio-data';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Pengalaman"
          title="Perjalanan Karir"
          subtitle="Timeline pengalaman profesional saya di dunia teknologi"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950 z-10 mt-8" />
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-16 md:ml-0 md:w-1/2">
                <div className="p-6 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300 group">
                  {/* Period Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={16} className="text-primary-400" />
                    <span className="text-sm font-mono text-primary-400">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-dark-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-dark-400 text-sm mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-dark-300">
                        <CheckCircle2 size={16} className="text-green-400 mt-0.5 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
