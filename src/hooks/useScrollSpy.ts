/**
 * ============================================
 * 📁 src/hooks/useScrollSpy.ts
 * ============================================
 * 
 * Custom hook untuk mendeteksi section mana yang
 * sedang terlihat di viewport (scroll spy).
 * 
 * Digunakan oleh Navbar untuk highlight link aktif
 * berdasarkan posisi scroll user.
 * 
 * Menggunakan Intersection Observer API yang lebih
 * performant daripada scroll event listener.
 */

import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
