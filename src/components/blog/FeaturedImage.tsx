import React, { useState, useEffect } from 'react';
import { Maximize2, X, Image as ImageIcon, ShieldCheck, Cpu, Layers } from 'lucide-react';

interface Props {
  imageUrl?: string;
  alt: string;
  caption?: string;
  badge?: string;
  headline: string;
  category?: string;
}

export function FeaturedImage({
  imageUrl,
  alt,
  caption,
  badge,
  headline,
  category
}: Props) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Reset error when imageUrl prop changes
  useEffect(() => {
    setImageError(false);
  }, [imageUrl]);

  // If no imageUrl or image fails to load, render the smart generative editorial graphic
  const hasValidImage = Boolean(imageUrl && !imageError);

  return (
    <figure className="w-full my-8 sm:my-10 space-y-2.5">
      {/* Main Image Frame */}
      <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-brand-200/90 bg-brand-950 shadow-soft-purple">
        
        {hasValidImage && imageUrl ? (
          <div className="relative aspect-[16/9] sm:aspect-[1200/630] w-full overflow-hidden bg-brand-950 flex items-center justify-center">
            <img
              src={imageUrl}
              alt={alt}
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover sm:object-contain object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              loading="eager"
            />
          </div>
        ) : (
          /* Smart Modern Editorial Tech Graphic Fallback */
          <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[480px] w-full bg-gradient-to-br from-[#0c0717] via-[#160e29] to-[#0c0819] p-6 sm:p-12 flex flex-col justify-between overflow-hidden">
            {/* Ambient Lighting Circles */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            
            {/* Subtle Grid Lines */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(to right, #49287c 1px, transparent 1px), linear-gradient(to bottom, #49287c 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />

            {/* Top Row: Category & Badges */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/40 text-[11px] font-bold text-accent-200 uppercase tracking-wider backdrop-blur-md">
                <Cpu className="w-3.5 h-3.5 text-accent-300" />
                <span>{badge || 'Technical Architecture'}</span>
              </div>
              <span className="text-[11px] font-mono text-brand-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                Riad Al Ashekin Advisory
              </span>
            </div>

            {/* Center Visual: Headline & Technology Nodes */}
            <div className="relative z-10 py-6 max-w-2xl space-y-3">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
                {headline}
              </h3>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-brand-200 border border-white/10 font-mono">
                  Multi-Tenant
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-brand-200 border border-white/10 font-mono">
                  Postgres RLS
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-brand-200 border border-white/10 font-mono">
                  Dedicated Pods
                </span>
                <span className="px-2.5 py-1 rounded-md bg-accent-500/20 text-accent-300 border border-accent-400/30 font-mono">
                  SOC2 Compliance
                </span>
              </div>
            </div>

            {/* Bottom Row: Verification Info */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-brand-400 border-t border-white/10 pt-3">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Vetted Engineering Blueprint
              </span>
              <span className="font-mono text-brand-400">
                1200 × 630 High Density
              </span>
            </div>
          </div>
        )}

        {/* Top Badges & Action Buttons Overlay */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none">
          {badge && (
            <span className="pointer-events-auto px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
              {badge}
            </span>
          )}

          {hasValidImage && (
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="pointer-events-auto p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all shadow-md cursor-pointer group-hover:scale-105"
              title="Expand High-Resolution Image"
            >
              <Maximize2 className="w-4 h-4 text-white" />
            </button>
          )}
        </div>

      </div>

      {/* Editorial Caption Bar */}
      <figcaption className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1 text-xs text-brand-500">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-3.5 h-3.5 text-accent-600 shrink-0" />
          <span className="font-medium text-brand-700">
            {caption || `Featured Visual: ${alt}`}
          </span>
        </div>
        <span className="text-[11px] text-brand-400 font-mono sm:text-right">
          riadalashekin.com
        </span>
      </figcaption>

      {/* High-Resolution Lightbox Modal */}
      {isLightboxOpen && hasValidImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              title="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={imageUrl}
              alt={alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            {caption && (
              <p className="mt-3 text-xs sm:text-sm text-center text-brand-300 max-w-2xl font-medium">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}

    </figure>
  );
}
