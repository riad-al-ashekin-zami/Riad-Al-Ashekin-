import React, { useState, useEffect } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogo({ className = '', size = 'md' }: BrandLogoProps) {
  const [logoSrc, setLogoSrc] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('riad_site_logo') || '/images/logo.svg';
    }
    return '/images/logo.svg';
  });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleUpdate = () => {
      const stored = localStorage.getItem('riad_site_logo') || '/images/logo.svg';
      setLogoSrc(stored);
      setHasError(false);
    };
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('site-logo-updated', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('site-logo-updated', handleUpdate);
    };
  }, []);

  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg text-xs',
    md: 'w-9 h-9 rounded-xl text-xs',
    lg: 'w-11 h-11 rounded-2xl text-sm',
  };

  if (!hasError && logoSrc) {
    return (
      <div className={`relative flex items-center justify-center shrink-0 overflow-hidden shadow-sm border border-brand-700/60 group-hover:border-accent-400/80 transition-all ${sizeClasses[size]} ${className}`}>
        <img
          src={logoSrc}
          alt="Riad Al Ashekin Logo"
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  // Fallback to stylized monogram brandmark
  return (
    <div 
      className={`${sizeClasses[size]} bg-gradient-to-br from-brand-800 to-brand-900 border border-brand-700/80 flex items-center justify-center font-bold text-white tracking-wider shadow-inner group-hover:border-accent-500 transition-colors shrink-0 ${className}`}
    >
      RA
    </div>
  );
}
