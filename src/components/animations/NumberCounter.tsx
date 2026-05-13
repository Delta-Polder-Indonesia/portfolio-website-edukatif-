/**
 * ============================================
 * 📁 src/components/animations/NumberCounter.tsx
 * ============================================
 * 
 * ANIMATED NUMBER COUNTER
 * 
 * Animasi angka yang naik dari 0 ke target dengan
 * easing yang smooth. Cocok untuk stats, counter,
 * pricing, atau angka penting lainnya.
 * 
 * FITUR:
 * - Smooth count up animation
 * - Custom duration & easing
 * - Suffix/prefix support
 * - Decimal precision
 * - Trigger on viewport
 * 
 * CARA MENGGUNAKAN:
 * <NumberCounter end={100} suffix="+" duration={2} />
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';
import { cn } from '../../utils/cn';

interface NumberCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  once?: boolean;
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  end,
  start = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const [displayValue, setDisplayValue] = useState(start);

  const springValue = useSpring(start, {
    stiffness: 100,
    damping: 30,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(end);
      
      const unsubscribe = springValue.on('change', (value) => {
        setDisplayValue(Number(value.toFixed(decimals)));
      });

      return unsubscribe;
    }
  }, [isInView, springValue, end, decimals]);

  return (
    <motion.span
      ref={ref}
      className={cn('inline-block tabular-nums', className)}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
};

export default NumberCounter;
