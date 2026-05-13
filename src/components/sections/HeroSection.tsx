/**
 * ============================================
 * 📁 src/components/sections/HeroSection.tsx
 * ============================================
 * 
 * HERO SECTION dengan ADVANCED ANIMATIONS
 * 
 * Fitur Animasi Baru:
 * - Morphing blob backgrounds
 * - Parallax floating elements
 * - Text reveal animations
 * - Stagger animations untuk stats
 * - Smooth entrance animations
 * - Gradient orb animations
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Sparkles, MapPin } from 'lucide-react';
import { personalInfo, stats } from '../../data/portfolio-data';
import { useTypewriter } from '../../hooks/useTypewriter';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import MorphingShape from '../animations/MorphingShape';
import NumberCounter from '../animations/NumberCounter';

const HeroSection: React.FC = () => {
  const typewriterText = useTypewriter(
    ['Full Stack Developer', 'UI/UX Designer', 'Creative Technologist', 'Open Source Contributor'],
    80,
    40,
    2500
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Animated Backgrounds */}
      <div className="absolute inset-0">
        {/* Morphing Blobs */}
        <MorphingShape
          variant="blob1"
          size="xl"
          colors={['#6366f1', '#8b5cf6']}
          className="top-1/4 -left-32 opacity-30"
          duration={12}
        />
        <MorphingShape
          variant="blob2"
          size="xl"
          colors={['#ec4899', '#f43f5e']}
          className="bottom-1/4 -right-32 opacity-20"
          duration={15}
        />
        <MorphingShape
          variant="blob3"
          size="lg"
          colors={['#06b6d4', '#3b82f6']}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
          duration={10}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating particles with parallax */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="text-center">
          {/* Availability Badge - Bounce In */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-sm text-dark-300">{personalInfo.availability}</span>
          </motion.div>

          {/* Avatar/Foto Profil - Scale + Rotate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 blur-xl opacity-50 animate-pulse" />
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(99, 102, 241, 0.4)',
                    '0 0 0 20px rgba(99, 102, 241, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Avatar
                  src={personalInfo.avatar}
                  name={personalInfo.name}
                  size="2xl"
                  showBorder
                  className="relative z-10"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Name - Text Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Halo, Saya{' '}
            <motion.span
              className="text-gradient"
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ 
                backgroundSize: '100% 100%',
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 1, 
                delay: 0.8,
                backgroundPosition: { duration: 5, repeat: Infinity }
              }}
              style={{
                background: 'linear-gradient(90deg, #6366f1, #ec4899, #6366f1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
              }}
            >
              {personalInfo.name}
            </motion.span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-dark-300 mb-6 h-10"
          >
            <span className="font-mono text-primary-400 ">{'> '}</span>
            <span className="text-primary-400">{typewriterText}</span>
            <span className="animate-pulse text-primary-400 ml-0.5">|</span>
          </motion.div>

          {/* Bio - Fade Up */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-dark-400 text-lg leading-relaxed mb-4"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center justify-center gap-1.5 text-dark-500 mb-8"
          >
            <MapPin size={14} />
            <span className="text-sm">{personalInfo.location}</span>
          </motion.div>

          {/* CTA Buttons - Stagger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={<Download size={20} />}
                href={personalInfo.resumeUrl}
              >
                Download CV
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                icon={<Sparkles size={20} />}
                href="#projects"
              >
                Lihat Proyek
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats - Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center cursor-pointer"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <NumberCounter
                    end={parseInt(stat.value)}
                    suffix={stat.suffix}
                    duration={2}
                    className="text-primary-400"
                  />
                </div>
                <div className="text-sm text-dark-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors cursor-pointer z-10"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
