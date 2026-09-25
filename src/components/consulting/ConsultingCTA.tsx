import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Mail, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Compass
} from 'lucide-react';

interface Props {
  onNavigate?: (slug: string) => void;
}

export function ConsultingCTA({ onNavigate }: Props) {
  const handlePricing = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate('/seo-pricing/');
  };

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate('/contact/');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#fafafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Container */}
        <div className="bg-brand-950 text-white rounded-[2.5rem] p-8 md:p-14 lg:p-20 relative overflow-hidden border border-brand-800 shadow-2xl">
          
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-purple-strong opacity-35 pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-radial-purple opacity-20 pointer-events-none translate-y-1/3 -translate-x-1/4" />

          <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-900 border border-brand-800 text-xs font-bold uppercase tracking-wider text-accent-300">
              <Compass className="w-3.5 h-3.5 text-accent-400" />
              <span>Direct Strategic Advisory</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
              Have a Business or Digital Challenge? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-brand-200 to-strategy-300">
                Let’s Explore the Right Strategic Direction.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-brand-200 leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you are evaluating a technical architecture decision, de-risking an organic search expansion, or scaling operations, let’s diagnose the bottlenecks and chart an actionable path forward.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handlePricing}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold text-base transition-all shadow-glow group cursor-pointer"
              >
                <span>View Consulting Packages &amp; Pricing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-900 hover:bg-brand-850 text-white rounded-xl font-bold text-base border border-brand-800 transition-all cursor-pointer"
              >
                <Mail className="w-5 h-5 text-brand-300" />
                <span>Send a Direct Inquiry</span>
              </button>
            </div>

            {/* Assurance Badges */}
            <div className="pt-8 border-t border-brand-800/80 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-growth-400" />
                No high-pressure sales pitches
              </span>
              <span className="hidden sm:inline text-brand-700">•</span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-400" />
                Direct 1-on-1 advisor review
              </span>
              <span className="hidden sm:inline text-brand-700">•</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-strategy-400" />
                Diagnostic focus on unit economics
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
