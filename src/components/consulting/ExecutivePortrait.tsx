import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';

// Dedicated Homepage Executive Portrait - Full vertical studio portrait with natural headroom and executive presence
const HOMEPAGE_PORTRAIT = '/images/riad-booking-portrait.jpg';

interface Props {
  className?: string;
  onBookingClick?: () => void;
}

export function ExecutivePortrait({ className = '', onBookingClick }: Props) {
  // Use the full high-resolution vertical executive portrait (or custom uploaded portrait if explicitly configured)
  const imageSrc = HOMEPAGE_PORTRAIT;

  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      {/* Background ambient glow matching Footer Royal Midnight Theme with subtle breathing pulse */}
      <motion.div 
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -inset-3 bg-gradient-to-tr from-accent-600/30 via-brand-600/20 to-brand-800/30 rounded-3xl blur-2xl pointer-events-none" 
      />

      {/* Main Studio Portrait Card - Clean, Crisp & Minimalist in Royal Dark Glass */}
      <div className="relative bg-[#1a1133] rounded-3xl border border-brand-800/90 overflow-hidden shadow-[0_20px_50px_rgba(21,13,40,0.8)]">
        
        {/* Top Verified Status Pill */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950/90 backdrop-blur-md border border-brand-800 text-[11px] font-semibold text-brand-200 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-400" />
            <span>Riad Al Ashekin</span>
          </div>
        </div>

        {/* Image Container - Crystal Clear, High Definition & Unblurred */}
        <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden flex items-end justify-center bg-[#1d143a]">
          
          {/* Portrait Image with Pure Sharpness and Natural Clarity */}
          <img 
            src={imageSrc} 
            alt="Riad Al Ashekin - Business & Technology Consultant" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[center_top] transition-transform duration-700 hover:scale-[1.01]"
          />

          {/* Clean Bottom Text Readability Gradient - Only at the very bottom, face stays 100% untouched & clear */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#150d28] via-[#150d28]/75 to-transparent pointer-events-none" />

          {/* Bottom Identity Overlay Banner */}
          <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex flex-col justify-end text-left">
            <div className="mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-300 font-mono">
                Principal Consultant &amp; Advisor
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Riad Al Ashekin
              </h2>
            </div>

            <p className="text-xs text-brand-200 leading-relaxed line-clamp-2 mb-3 font-normal">
              Advising founders and leadership teams on high-stakes software architecture, commercial scaling, and SEO dominance.
            </p>

            {/* Micro Stats / Credentials Bar */}
            <div className="flex items-center gap-2 pt-2.5 border-t border-brand-800/80 text-[11px] font-mono text-accent-200/90">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent-400" />
                <span>Global Practice</span>
              </div>
              <span className="text-brand-600">•</span>
              <span>10+ Yrs Track Record</span>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-accent-400/40 rounded-tr-2xl pointer-events-none" />
      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-accent-400/40 rounded-bl-2xl pointer-events-none" />
    </div>
  );
}
