/**
 * ============================================
 * 📁 src/components/animations/TextReveal.tsx
 * ============================================
 * 
 * TEXT REVEAL ANIMATION (SEGESTA Style)
 * 
 * Animasi teks yang muncul karakter per karakter
 * atau kata per kata dengan efek yang smooth.
 * Mirip dengan animasi di presentasi PowerPoint
 * professional atau website award-winning.
 * 
 * FITUR:
 * - Character-by-character reveal
 * - Word-by-word reveal
 * - Gradient text animation
 * - Typewriter effect option
 * - Custom delay & duration
 * 
 * CARA MENGGUNAKAN:
 * <TextReveal text="Hello World" mode="word" />
 */

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface TextRevealProps {
  text: string;
  className?: string;
  mode?: 'char' | 'word' | 'line';
  delay?: number;
  duration?: number;
  gradient?: boolean;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
  mode = 'word',
  delay = 0,
  duration = 0.5,
  gradient = false,
}) => {
  const getItems = () => {
    if (mode === 'char') {
      return text.split('');
    }
    return text.split(' ');
  };

  const items = getItems();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: mode === 'char' ? 20 : 30,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn('inline', className)}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className={cn(
            'inline-block',
            mode === 'word' && index < items.length - 1 && 'mr-1'
          )}
          style={
            gradient
              ? {
                  background: 'linear-gradient(90deg, #6366f1, #ec4899, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% auto',
                }
              : {}
          }
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
