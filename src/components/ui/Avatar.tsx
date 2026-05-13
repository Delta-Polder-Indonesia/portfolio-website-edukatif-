/**
 * ============================================
 * 📁 src/components/ui/Avatar.tsx
 * ============================================
 * 
 * KOMPONEN AVATAR UNTUK FOTO PROFIL
 * 
 * Digunakan untuk:
 * - Foto profil di About section
 * - Avatar testimoni
 * - Author blog posts
 * 
 * FITUR:
 * - Menampilkan gambar atau inisial jika tidak ada
 * - Gradient background untuk inisial
 * - Size variants
 * - Border/outline options
 * 
 * CARA MENGGUNAKAN:
 * <Avatar 
 *   src="/images/avatar.jpg"
 *   name="Alex Pratama"
 *   size="lg"
 * />
 */

import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  showBorder?: boolean;
  gradient?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  name = 'User',
  size = 'md',
  className,
  showBorder = false,
  gradient = 'from-primary-500 to-accent-500',
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
    '2xl': 'w-24 h-24 text-2xl',
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={cn(
        'relative rounded-xl overflow-hidden flex items-center justify-center font-bold text-white shrink-0',
        sizeClasses[size],
        showBorder && 'border-2 border-white/20',
        className
      )}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <div className={cn('w-full h-full bg-gradient-to-br', gradient)}>
          <span className="flex items-center justify-center w-full h-full">
            {getInitials(name)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
