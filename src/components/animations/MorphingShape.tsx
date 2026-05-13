/**
 * ============================================
 * 📁 src/components/animations/MorphingShape.tsx
 * ============================================
 * 
 * MORPHING BLOB ANIMATION
 * 
 * Shape organik yang berubah-ubah (morphing)
 * seperti liquid/blob. Efek ini sangat popular
 * di website modern dan award-winning designs.
 * 
 * FITUR:
 * - Organic morphing animation
 * - Custom colors & gradients
 * - Multiple shape variants
 * - Slow, smooth animation
 * - Blur effect for soft look
 * 
 * CARA MENGGUNAKAN:
 * <MorphingShape variant="blob1" className="absolute" />
 */

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface MorphingShapeProps {
  className?: string;
  variant?: 'blob1' | 'blob2' | 'blob3' | 'circle' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  colors?: string[];
  blur?: boolean;
  duration?: number;
}

const MorphingShape: React.FC<MorphingShapeProps> = ({
  className,
  variant = 'blob1',
  size = 'lg',
  colors = ['#6366f1', '#ec4899'],
  blur = true,
  duration = 8,
}) => {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[600px] h-[600px]',
  };

  const variants = {
    blob1: {
      borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%'],
    },
    blob2: {
      borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
    },
    blob3: {
      borderRadius: ['40% 60% 50% 50% / 30% 60% 40% 70%', '60% 40% 50% 50% / 70% 40% 60% 30%', '40% 60% 50% 50% / 30% 60% 40% 70%'],
    },
    circle: {
      borderRadius: ['50%', '50%', '50%'],
    },
    square: {
      borderRadius: ['20%', '50%', '20%'],
    },
  };

  return (
    <motion.div
      className={cn(
        sizes[size],
        'absolute',
        blur && 'blur-3xl',
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
        opacity: 0.3,
      }}
      animate={{
        borderRadius: variants[variant].borderRadius,
        rotate: variant === 'circle' ? 360 : 0,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default MorphingShape;
