import React from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  Cpu, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Calendar,
  ArrowUpRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { ExecutivePortrait } from './ExecutivePortrait';
import { handleLinkClick } from '../../utils/navigation';

interface Props {
  onNavigate?: (slug: string) => void;
  onScrollToSection?: (sectionId: string) => void;
}

export function ConsultingHero({ onNavigate, onScrollToSection }: Props) {
  const handlePricing = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate('/seo-pricing/');
  };

  const handleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToSection) {
      onScrollToSection('consulting-services');
    } else if (onNavigate) {
      onNavigate('/services/');
    }
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80">
      
      {/* Dynamic Animated Ambient Mesh - GPU Accelerated without JS thread blocking */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Floating Orb 1: Royal Violet / Accent-600 Glow (Top Left) */}
        <div 
          className="absolute -top-20 left-1/10 w-[600px] h-[600px] bg-accent-600/30 rounded-full blur-[140px] ambient-orb-1"
        />

        {/* Floating Orb 2: Deep Brand-700 Glow (Center Right) */}
        <div 
          className="absolute top-1/4 -right-16 w-[650px] h-[650px] bg-brand-700/30 rounded-full blur-[150px] ambient-orb-2"
        />

        {/* Floating Orb 3: Soft Lavender / Accent-400 Subtle Accent (Bottom Left) */}
        <div 
          className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[130px] ambient-orb-3"
        />

        {/* Glowing Horizon Accent Line */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[2px] bg-gradient-to-r from-transparent via-accent-500/40 to-transparent blur-xs opacity-50"
        />

        {/* Precision Matrix Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#49337e_1.3px,transparent_1.3px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Strategic Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-start text-left space-y-6">
            
            {/* Top Status Pill */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-900/90 border border-brand-700/80 text-xs font-semibold text-brand-200 backdrop-blur-xl shadow-lg hover:border-accent-500/80 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Strategic Advisory &amp; Architecture</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <div 
                className="text-xs font-mono font-bold tracking-widest text-accent-300 uppercase flex items-center gap-2"
              >
                <Briefcase className="w-3.5 h-3.5 text-accent-400" />
                <span>Business &amp; Technology Consultant</span>
              </div>

              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white leading-[1.05] tracking-tight"
              >
                RIAD AL ASHEKIN
              </h1>

              <p 
                className="text-2xl sm:text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-accent-300"
              >
                Business Strategy. Modern Tech. Real Growth.
              </p>
            </div>

            {/* Value Proposition (Immediate Visual Paint for 100% Core Web Vitals LCP Score) */}
            <p 
              className="text-base sm:text-lg text-brand-200/90 leading-relaxed max-w-2xl font-normal"
            >
              I advise founders, high-growth startups, and technical leadership teams on connecting commercial objectives with scalable software architecture, pragmatic AI workflow automation, and search dominance.
            </p>

            {/* 4 Performance Metric Counters - Styled in Rich Footer Brand-900 Glass */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-1 pb-1">
              {[
                { value: '35+', label: 'Ventures Advised', sub: 'Client & Co-Founded' },
                { value: '4', label: 'Companies Co-Founded', sub: 'Operating Equity' },
                { value: '10+', label: 'Years in Tech & SEO', sub: 'Engineering Depth' },
                { value: '100%', label: 'Direct Founder Access', sub: 'Zero Agency Layers' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl bg-brand-900/70 border border-brand-800/90 backdrop-blur-md hover:border-accent-500/80 hover:shadow-[0_0_25px_rgba(120,57,238,0.25)] hover:-translate-y-1 transition-all duration-200 cursor-default group"
                >
                  <div className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight group-hover:text-accent-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-brand-200 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-brand-400 font-mono">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Strategic Pillars Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
              {[
                { label: 'Business Strategy', icon: Briefcase },
                { label: 'Tech Architecture', icon: Cpu },
                { label: 'SEO Dominance', icon: TrendingUp },
                { label: 'AI Automation', icon: Layers }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="px-3 py-2 rounded-xl bg-brand-900/90 border border-brand-800 flex items-center gap-2 text-xs font-semibold text-brand-200 hover:border-accent-500 hover:text-white transition-all hover:scale-[1.02] cursor-default shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* High-Contrast Action Buttons Matching Footer Aesthetics */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              {/* Primary CTA - Exact Footer Accent-600 Purple with Shimmer */}
              <a 
                href="/seo-pricing/"
                onClick={(e) => handleLinkClick(e, '/seo-pricing/', onNavigate)}
                className="relative inline-flex justify-center items-center gap-2.5 px-7 py-3.5 bg-accent-600 hover:bg-accent-500 text-white rounded-xl font-bold text-sm transition-all shadow-[0_0_25px_rgba(120,57,238,0.4)] hover:shadow-[0_0_35px_rgba(120,57,238,0.6)] hover:-translate-y-0.5 group cursor-pointer overflow-hidden no-underline"
              >
                <div 
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse pointer-events-none"
                />
                <span className="z-10">Pricing &amp; Retainers</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform z-10" />
              </a>
              
              {/* Secondary CTA - Matching Footer "Browse All URLs" button */}
              <a 
                href="/services/"
                onClick={(e) => {
                  if (onScrollToSection) {
                    e.preventDefault();
                    onScrollToSection('consulting-services');
                  } else {
                    handleLinkClick(e, '/services/', onNavigate);
                  }
                }}
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-brand-900/90 border border-brand-800 text-brand-200 hover:text-white hover:bg-brand-800 rounded-xl font-bold text-sm transition-all cursor-pointer backdrop-blur-md hover:border-brand-700 hover:-translate-y-0.5 shadow-sm no-underline"
              >
                <Layers className="w-4 h-4 text-accent-400" />
                <span>Explore Retainers &amp; Proof</span>
                <ArrowUpRight className="w-4 h-4 text-brand-400" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-brand-800/80 flex flex-wrap items-center gap-4 text-xs text-brand-400">
              <span className="flex items-center gap-1.5 text-brand-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Co-Founder &amp; CTO Experience
              </span>
              <span className="text-brand-700">•</span>
              <span>Direct 1-on-1 Founder Advisory</span>
              <span className="text-brand-700">•</span>
              <span>Pragmatic ROI Focus</span>
            </div>

          </div>

          {/* Right: Studio Portrait Card with Matching Brand Ambient Glow */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <ExecutivePortrait onBookingClick={handlePricing} />
          </div>

        </div>

        {/* Problem-First Advisory Engine Diagnostics Strip */}
        <div className="mt-16 pt-8 border-t border-brand-800/80">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-accent-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-200">
                Problem-First Advisory Engine
              </h3>
            </div>
            <span className="text-xs text-brand-400 italic">
              “Diagnostics before prescriptions. Architecture before marketing.”
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                step: '01',
                title: 'Commercial Reality & Margins',
                desc: 'Unit economics, CAC vs LTV, and true revenue bottlenecks before touching software.'
              },
              {
                step: '02',
                title: 'Strategic Options Formulation',
                desc: 'Clarifying if the solution requires custom code, workflow automation, or search architecture.'
              },
              {
                step: '03',
                title: 'Modern Software & Search',
                desc: 'Next.js architectures, headless CMS, technical SEO infrastructure, and pragmatic AI.'
              },
              {
                step: '04',
                title: 'Implementation & Governance',
                desc: 'Milestones with measurable financial impact, KPIs, and clear engineering ownership.'
              }
            ].map((st, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-brand-900/60 border border-brand-800/80 flex items-start gap-3 hover:border-accent-500/70 hover:bg-brand-900/90 transition-all"
              >
                <span className="font-mono text-xs font-bold text-accent-300 bg-brand-950 px-2 py-1 rounded-lg border border-brand-800 shrink-0">
                  {st.step}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">{st.title}</h4>
                  <p className="text-[11px] text-brand-300 leading-snug">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
