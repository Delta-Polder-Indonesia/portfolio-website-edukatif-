/**
 * ============================================
 * 📁 src/components/ui/IconImage.tsx
 * ============================================
 * 
 * KOMPONEN ICON DENGAN GAMBAR ATAU SVG
 * 
 * Komponen ini menampilkan icon untuk:
 * - Skills (React, Node.js, dll)
 * - Projects (E-commerce, Dashboard, dll)
 * - Services (Web Dev, UI/UX, dll)
 * - Blog categories
 * 
 * FITUR:
 * - Image fallback dengan React state (bukan DOM manipulation)
 * - Lazy loading
 * - Multiple sizes
 * - Custom styling
 * 
 * CARA MENGGUNAKAN:
 * <IconImage 
 *   icon="react"
 *   alt="React"
 *   size="md"
 * />
 */

import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface IconImageProps {
  icon: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showLabel?: boolean;
}

const IconImage: React.FC<IconImageProps> = ({
  icon,
  alt,
  size = 'md',
  className,
  showLabel = false,
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-6 h-6 text-sm',
    md: 'w-8 h-8 text-base',
    lg: 'w-10 h-10 text-lg',
    xl: 'w-12 h-12 text-xl',
  };

  // Mapping icon names ke file paths
  const iconPaths: Record<string, string> = {
    // Skills - Frontend
    'react': '/images/skills/react.svg',
    'typescript': '/images/skills/typescript.svg',
    'tailwind': '/images/skills/tailwind.svg',
    'vue': '/images/skills/vue.svg',
    'html': '/images/skills/html.svg',
    'javascript': '/images/skills/javascript.svg',
    
    // Skills - Backend
    'nodejs': '/images/skills/nodejs.svg',
    'python': '/images/skills/python.svg',
    'postgresql': '/images/skills/postgresql.svg',
    'mongodb': '/images/skills/mongodb.svg',
    'graphql': '/images/skills/graphql.svg',
    'rest': '/images/skills/rest.svg',
    
    // Skills - Tools
    'git': '/images/skills/git.svg',
    'docker': '/images/skills/docker.svg',
    'aws': '/images/skills/aws.svg',
    'cicd': '/images/skills/cicd.svg',
    'linux': '/images/skills/linux.svg',
    'vercel': '/images/skills/vercel.svg',
    
    // Skills - Design
    'figma': '/images/skills/figma.svg',
    'adobexd': '/images/skills/adobexd.svg',
    'uiux': '/images/skills/uiux.svg',
    'prototyping': '/images/skills/prototyping.svg',
    
    // Projects
    'ecommerce': '/images/projects/ecommerce.svg',
    'dashboard': '/images/projects/dashboard.svg',
    'social': '/images/projects/social.svg',
    'ai': '/images/projects/ai.svg',
    'task': '/images/projects/task.svg',
    'crypto': '/images/projects/crypto.svg',
    
    // Blog
    'react-blog': '/images/blog/react.svg',
    'typescript-blog': '/images/blog/typescript.svg',
    'tailwind-blog': '/images/blog/tailwind.svg',
    
    // Services
    'webdev': '/images/services/webdev.svg',
    'design': '/images/services/design.svg',
    'mobile': '/images/services/mobile.svg',
    'consulting': '/images/services/consulting.svg',
  };

  const iconPath = iconPaths[icon.toLowerCase()] || `/images/icons/${icon}.svg`;
  
  // Get initial letter for fallback
  const fallbackLetter = alt.charAt(0).toUpperCase();

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn(
        'flex items-center justify-center rounded-lg bg-primary-500/10 text-primary-400',
        sizeClasses[size]
      )}>
        {hasError ? (
          // Fallback: tampilkan huruf pertama
          <span className="font-bold">{fallbackLetter}</span>
        ) : (
          // Image dengan lazy loading
          <img
            src={iconPath}
            alt={alt}
            className="w-full h-full object-contain p-1"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      {showLabel && (
        <span className="text-dark-300">{alt}</span>
      )}
    </div>
  );
};

export default IconImage;
