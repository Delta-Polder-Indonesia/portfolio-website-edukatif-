/**
 * ============================================
 * 📁 src/components/ui/Card.tsx
 * ============================================
 * 
 * Komponen card dengan efek glassmorphism.
 * Digunakan sebagai container di berbagai section.
 * 
 * Fitur:
 * - Efek glass (transparent + blur)
 * - Hover animation
 * - Glow effect opsional
 * - Padding yang konsisten
 */

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  glow = false,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'rounded-2xl p-6 glass transition-all duration-300',
        hover && 'hover:bg-white/[0.08] hover:border-white/20',
        glow && 'hover:glow',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
