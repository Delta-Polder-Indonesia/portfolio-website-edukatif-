/**
 * ============================================
 * 📁 src/components/ui/Image.tsx
 * ============================================
 * 
 * KOMPONEN IMAGE REUSABLE DENGAN FALLBACK
 * 
 * Komponen ini menangani semua gambar di portfolio dengan:
 * - Lazy loading untuk performa
 * - Fallback image jika gambar tidak ditemukan
 * - Alt text untuk accessibility
 * - Responsive sizing
 * - Loading state
 * 
 * CARA MENGGUNAKAN:
 * <Image 
 *   src="/images/skills/react.png"
 *   alt="React Logo"
 *   className="w-8 h-8"
 * />
 */

import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface ImageProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  showFallback?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallback = '/images/fallback.svg',
  className,
  showFallback = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Tentukan src yang akan ditampilkan
  const displaySrc = hasError ? fallback : src;

  return (
    <div className={cn('relative inline-block overflow-hidden', className)}>
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-dark-800 animate-pulse rounded-lg" />
      )}
      
      {/* Fallback placeholder jika error dan showFallback false */}
      {hasError && !showFallback && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg" />
      )}
      
      {/* Image - tampilkan fallback jika error dan showFallback true, atau src asli */}
      {(!hasError || showFallback) && (
        <img
          src={displaySrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
        />
      )}
    </div>
  );
};

export default Image;
