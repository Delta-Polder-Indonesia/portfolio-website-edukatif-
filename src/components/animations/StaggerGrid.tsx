/**
 * ============================================
 * 📁 src/components/animations/StaggerGrid.tsx
 * ============================================
 * 
 * STAGGER GRID ANIMATION
 * 
 * Animasi grid dimana setiap item muncul
 * secara berurutan dengan delay yang berbeda.
 * Efek ini sangat smooth dan professional.
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

interface StaggerGridProps {
  items: any[];
  children: (item: any, index: number) => React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  animation?: 'fade-up' | 'scale' | 'flip';
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
}

const StaggerGrid: React.FC<StaggerGridProps> = ({
  items,
  children,
  className,
  columns = 3,
  gap = 'md',
  animation = 'fade-up',
  staggerDelay = 0.1,
  duration = 0.5,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  const getInitial = () => {
    if (animation === 'scale') return { opacity: 0, scale: 0.8 };
    if (animation === 'flip') return { opacity: 0, rotateX: -90 };
    return { opacity: 0, y: 40 };
  };

  const getAnimate = () => {
    if (animation === 'scale') return { opacity: 1, scale: 1 };
    if (animation === 'flip') return { opacity: 1, rotateX: 0 };
    return { opacity: 1, y: 0 };
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ staggerChildren: staggerDelay }}
      className={cn(
        'grid',
        columnClasses[columns],
        gapClasses[gap],
        className
      )}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={getInitial()}
          animate={isInView ? getAnimate() : getInitial()}
          transition={{ duration, ease: 'easeOut', delay: index * staggerDelay }}
        >
          {children(item, index)}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerGrid;
