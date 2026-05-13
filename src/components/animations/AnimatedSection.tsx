/**
 * ============================================
 * 📁 src/components/animations/AnimatedSection.tsx
 * ============================================
 * 
 * ANIMATED SECTION WRAPPER
 * 
 * Komponen wrapper untuk animasi section yang konsisten.
 * Setiap section akan muncul dengan animasi smooth saat
 * di-scroll ke viewport.
 * 
 * FITUR ANIMASI:
 * - Fade in + slide up
 * - Stagger animation untuk children
 * - Custom easing curves
 * - Trigger on viewport enter
 * - Once atau repeat animation
 * 
 * CARA MENGGUNAKAN:
 * <AnimatedSection delay={0.2}>
 *   <Content />
 * </AnimatedSection>
 */

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  variant?: 'fade-up' | 'fade-right' | 'fade-left' | 'scale' | 'rotate';
  staggerChildren?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.8,
  once = true,
  variant = 'fade-up',
  staggerChildren = false,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    'fade-right': {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    'fade-left': {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10, scale: 0.9 },
      visible: { opacity: 1, rotate: 0, scale: 1 },
    },
  };

  const childVariants = staggerChildren
    ? {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: delay + i * 0.1,
            duration: 0.5,
          },
        }),
      }
    : {};

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing seperti PowerPoint
      }}
      className={cn('w-full', className)}
    >
      {staggerChildren && React.Children.count(children) > 0 ? (
        <motion.div
          variants={{
            hidden: {},
            visible: {},
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
        >
          {React.Children.map(children, (child, index) =>
            React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<any>, {
                  variants: childVariants,
                  custom: index,
                })
              : child
          )}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default AnimatedSection;
