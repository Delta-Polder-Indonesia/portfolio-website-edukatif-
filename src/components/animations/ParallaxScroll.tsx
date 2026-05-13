/**
 * ============================================
 * 📁 src/components/animations/ParallaxScroll.tsx
 * ============================================
 * 
 * PARALLAX SCROLL ANIMATION
 * 
 * Efek parallax dimana elemen bergerak dengan
 * kecepatan berbeda saat scroll. Memberikan
 * depth dan dimensi pada halaman.
 * 
 * FITUR:
 * - Scroll-based parallax
 * - Custom speed & direction
 * - Multiple layers support
 * - Smooth interpolation
 * - Performance optimized
 * 
 * CARA MENGGUNAKAN:
 * <ParallaxScroll speed={0.5}>
 *   <Content />
 * </ParallaxScroll>
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ParallaxScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  startOffset?: number;
  endOffset?: number;
}

const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  className,
  speed = 0.5,
  direction = 'up',
  startOffset = 0,
  endOffset = 1,
}) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${startOffset * 100}%`, `${endOffset * 100}%`],
  });

  const transforms = {
    up: useTransform(scrollYProgress, [0, 1], [0, -100 * speed]),
    down: useTransform(scrollYProgress, [0, 1], [0, 100 * speed]),
    left: useTransform(scrollYProgress, [0, 1], [0, -100 * speed]),
    right: useTransform(scrollYProgress, [0, 1], [0, 100 * speed]),
  };

  const transform = transforms[direction];

  return (
    <motion.div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={{ y: direction === 'up' || direction === 'down' ? transform : undefined, x: direction === 'left' || direction === 'right' ? transform : undefined }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxScroll;
