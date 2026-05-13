/**
 * ============================================
 * 📁 src/components/ui/ParticleBackground.tsx
 * ============================================
 * 
 * Background dekoratif dengan floating dots/particles.
 * Menggunakan CSS animation untuk performa optimal.
 * Diletakkan sebagai background di seluruh halaman.
 */

import React from 'react';

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 10,
  opacity: Math.random() * 0.3 + 0.05,
}));

const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary-400"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
