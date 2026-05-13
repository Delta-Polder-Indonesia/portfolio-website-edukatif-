/**
 * ============================================
 * 📁 src/hooks/useCountUp.ts
 * ============================================
 * 
 * Custom hook untuk animasi count up angka.
 * Digunakan di stats section untuk menampilkan
 * angka yang naik dari 0 ke target secara animated.
 * 
 * Menggunakan requestAnimationFrame untuk smooth animation.
 */

import { useState, useEffect, useRef } from 'react';

export function useCountUp(end: number, duration = 2000, startOnMount = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const frameRef = useRef<number>(0);

  const start = () => {
    setHasStarted(true);
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount && !hasStarted) {
      start();
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startOnMount]);

  return { count, start, hasStarted };
}
