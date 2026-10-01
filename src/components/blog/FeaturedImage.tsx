import React, { useState, useEffect } from 'react';
import { Maximize2, X, Image as ImageIcon, ShieldCheck, Cpu, Layers, Activity, Database, Network, Globe } from 'lucide-react';

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

  // Reset error state when imageUrl changes
  useEffect(() => {
    setImageError(false);
  }, [imageUrl]);

  const hasValidImage = Boolean(imageUrl && !imageError);

  return (
    <figure className="w-full my-8 sm:my-10 space-y-2.5">
      {/* Main Image / Architecture Schematic Frame */}
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
          /* High-Density System Architecture & Data Flow Schematic (Figure 1.0) */
          <div className="relative w-full bg-gradient-to-br from-[#0c0717] via-[#160e29] to-[#0c0819] p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            
            {/* Subtle Engineering Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(to right, #49287c 1px, transparent 1px), linear-gradient(to bottom, #49287c 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />

            {/* Top Schematic Header Bar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono text-xs font-bold text-accent-300 uppercase tracking-wider">
                  Figure 1.0 • Technical Architecture Blueprint
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-brand-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  Riad Al Ashekin Advisory
                </span>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>

            {/* Visual 4-Layer Architecture Pipeline Diagram */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-2">
              {/* Layer 1: Client Application Shell */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2.5 backdrop-blur-xs hover:border-accent-400/50 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-brand-400">
                  <span className="text-accent-400 font-bold">LAYER 01</span>
                  <Globe className="w-4 h-4 text-accent-400" />
                </div>
                <div className="text-sm font-bold text-white">
                  Client App Shell
                </div>
                <p className="text-xs text-brand-300 leading-relaxed">
                  Single HTML document shell, Virtual DOM diffing &amp; dynamic component tree hydration.
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-[10px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Instant Navigation</span>
                </div>
              </div>

              {/* Layer 2: Client Router & History API */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2.5 backdrop-blur-xs hover:border-accent-400/50 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-brand-400">
                  <span className="text-cyan-400 font-bold">LAYER 02</span>
                  <Network className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-sm font-bold text-white">
                  Client-Side Router
                </div>
                <p className="text-xs text-brand-300 leading-relaxed">
                  History API pushState routing, canonical deep-links &amp; scroll position management.
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Deep Link Ready</span>
                </div>
              </div>

              {/* Layer 3: State & Async API Gateway */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2.5 backdrop-blur-xs hover:border-accent-400/50 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-brand-400">
                  <span className="text-amber-400 font-bold">LAYER 03</span>
                  <Database className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm font-bold text-white">
                  State &amp; API Layer
                </div>
                <p className="text-xs text-brand-300 leading-relaxed">
                  Global reactive stores, cached server data &amp; asynchronous JSON API endpoints.
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-[10px] font-mono text-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Background Sync</span>
                </div>
              </div>

              {/* Layer 4: Crawler & Search Indexation Pipeline */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2.5 backdrop-blur-xs hover:border-accent-400/50 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-brand-400">
                  <span className="text-purple-400 font-bold">LAYER 04</span>
                  <Layers className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-sm font-bold text-white">
                  SEO &amp; Prerender
                </div>
                <p className="text-xs text-brand-300 leading-relaxed">
                  Static snapshots, dynamic server-side pre-rendering &amp; Google crawler discoverability.
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-[10px] font-mono text-purple-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  <span>100% Indexable</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Specifications */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-brand-400 border-t border-white/10 pt-4 mt-6">
              <div className="flex items-center gap-3">
                <span className="text-brand-300 font-medium">
                  Architecture Specifications:
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">
                  History API
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">
                  REST/JSON
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">
                  Prerender SEO
                </span>
              </div>
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
