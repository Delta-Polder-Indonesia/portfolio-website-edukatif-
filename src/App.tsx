/**
 * ============================================
 * 📁 src/App.tsx
 * ============================================
 * 
 * ⚠️ UPGRADE: ADVANCED ANIMATIONS EDITION ⚠️
 * 
 * Komponen utama dengan animasi level SEGESTA/PowerPoint:
 * - Morphing blob backgrounds
 * - Parallax scroll effects
 * - Text reveal animations
 * - Stagger grid animations
 * - 3D card flips
 * - Number counters
 * - Smooth entrance animations
 * 
 * Semua section sekarang menggunakan Framer Motion
 * advanced features untuk animasi yang smooth dan
 * professional.
 */

import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import ParticleBackground from './components/ui/ParticleBackground';

// Animation Components (import untuk digunakan di sections)
// import AnimatedSection from './components/animations/AnimatedSection';
// import TextReveal from './components/animations/TextReveal';
// import NumberCounter from './components/animations/NumberCounter';
// import StaggerGrid from './components/animations/StaggerGrid';
// import MorphingShape from './components/animations/MorphingShape';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background particles */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default App;
