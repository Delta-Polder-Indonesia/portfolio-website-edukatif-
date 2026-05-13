/**
 * ============================================
 * 📁 src/components/animations/CardFlip.tsx
 * ============================================
 * 
 * 3D CARD FLIP ANIMATION
 * 
 * Efek flip 3D seperti kartu yang dibalik.
 * Cocok untuk project cards, team members,
 * atau feature highlights.
 * 
 * FITUR:
 * - 3D flip animation
 * - Front & back content
 * - Trigger on hover
 * - Custom flip direction
 * - Perspective control
 * 
 * CARA MENGGUNAKAN:
 * <CardFlip
 *   front={<FrontContent />}
 *   back={<BackContent />}
 * />
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardFlipProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  flipDirection?: 'horizontal' | 'vertical';
  perspective?: number;
  duration?: number;
}

const CardFlip: React.FC<CardFlipProps> = ({
  front,
  back,
  className,
  flipDirection = 'horizontal',
  perspective = 1000,
  duration = 0.6,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipAxis = flipDirection === 'horizontal' ? 'Y' : 'X';

  return (
    <div
      className={cn('relative cursor-pointer', className)}
      style={{ perspective: `${perspective}px` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotate: isFlipped ? 180 : 0 }}
        transition={{ duration, ease: 'easeInOut' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: 'hidden',
            transform: `rotate${flipAxis}(180deg)`,
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
