import React from 'react';
import { motion } from 'motion/react';
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
      
      {/* Dynamic Animated Ambient Mesh - Rich Royal Purple & Midnight Violet (Footer Theme) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Floating Orb 1: Royal Violet / Accent-600 Glow (Top Left) */}
        <motion.div 
          animate={{
            x: [0, 40, -25, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.18, 0.92, 1],
            opacity: [0.25, 0.4, 0.28, 0.25]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-20 left-1/10 w-[600px] h-[600px] bg-accent-600/30 rounded-full blur-[150px]"
        />

        {/* Floating Orb 2: Deep Brand-800 Glow (Center Right) */}
        <motion.div 
          animate={{
            x: [0, -45, 30, 0],
            y: [0, 45, -20, 0],
            scale: [1, 1.2, 0.95, 1],
            opacity: [0.2, 0.35, 0.22, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute top-1/4 -right-16 w-[650px] h-[650px] bg-brand-700/35 rounded-full blur-[160px]"
        />

        {/* Floating Orb 3: Soft Lavender / Accent-400 Subtle Accent (Bottom Left) */}
        <motion.div 
          animate={{
            x: [0, 30, -35, 0],
            y: [0, -25, 35, 0],
            scale: [0.9, 1.15, 0.95, 0.9],
            opacity: [0.15, 0.28, 0.18, 0.15]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4
          }}
          className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-accent-500/22 rounded-full blur-[140px]"
        />

        {/* Glowing Horizon Accent Line */}
        <motion.div 
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.9, 1.1, 0.9]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[2px] bg-gradient-to-r from-transparent via-accent-500/40 to-transparent blur-xs"
        />

        {/* Precision Matrix Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#49337e_1.3px,transparent_1.3px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Strategic Content with Staggered Animations */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full lg:w-7/12 flex flex-col items-start text-left space-y-6"
          >
            
            {/* Top Status Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-900/90 border border-brand-700/80 text-xs font-semibold text-brand-200 backdrop-blur-xl shadow-lg hover:border-accent-500/80 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Strategic Advisory &amp; Architecture</span>
            </motion.div>

            {/* Display Headline */}
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs font-mono font-bold tracking-widest text-accent-300 uppercase flex items-center gap-2"
              >
                <Briefcase className="w-3.5 h-3.5 text-accent-400" />
                <span>Business &amp; Technology Consultant</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white leading-[1.05] tracking-tight"
              >
                RIAD AL ASHEKIN
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-2xl sm:text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-accent-300"
              >
                Business Strategy. Modern Tech. Real Growth.
              </motion.p>
            </div>

            {/* Value Proposition */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg text-brand-200/90 leading-relaxed max-w-2xl font-normal"
            >
              I advise founders, high-growth startups, and technical leadership teams on connecting commercial objectives with scalable software architecture, pragmatic AI workflow automation, and search dominance.
            </motion.p>

            {/* 4 Performance Metric Counters - Styled in Rich Footer Brand-900 Glass */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-1 pb-1"
            >
              {[
                { value: '35+', label: 'Ventures Advised', sub: 'Client & Co-Founded' },
                { value: '4', label: 'Companies Co-Founded', sub: 'Operating Equity' },
                { value: '10+', label: 'Years in Tech & SEO', sub: 'Engineering Depth' },
                { value: '100%', label: 'Direct Founder Access', sub: 'Zero Agency Layers' }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-3.5 rounded-2xl bg-brand-900/70 border border-brand-800/90 backdrop-blur-md hover:border-accent-500/80 hover:shadow-[0_0_25px_rgba(120,57,238,0.25)] transition-all cursor-default group"
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
                </motion.div>
              ))}
            </motion.div>

            {/* Core Strategic Pillars Row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full"
            >
              {[
                { label: 'Business Strategy', icon: Briefcase },
                { label: 'Tech Architecture', icon: Cpu },
                { label: 'SEO Dominance', icon: TrendingUp },
                { label: 'AI Automation', icon: Layers }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.15 }}
                    className="px-3 py-2 rounded-xl bg-brand-900/90 border border-brand-800 flex items-center gap-2 text-xs font-semibold text-brand-200 hover:border-accent-500 hover:text-white transition-colors cursor-default shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* High-Contrast Action Buttons Matching Footer Aesthetics */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2"
            >
              {/* Primary CTA - Exact Footer Accent-600 Purple with Shimmer */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePricing}
                className="relative inline-flex justify-center items-center gap-2.5 px-7 py-3.5 bg-accent-600 hover:bg-accent-500 text-white rounded-xl font-bold text-sm transition-all shadow-[0_0_25px_rgba(120,57,238,0.4)] hover:shadow-[0_0_35px_rgba(120,57,238,0.6)] group cursor-pointer overflow-hidden"
              >
                <motion.div 
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                />
                <span className="z-10">Pricing &amp; Retainers</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform z-10" />
              </motion.button>
              
              {/* Secondary CTA - Matching Footer "Browse All URLs" button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleServices}
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-brand-900/90 border border-brand-800 text-brand-200 hover:text-white hover:bg-brand-800 rounded-xl font-bold text-sm transition-all cursor-pointer backdrop-blur-md hover:border-brand-700 shadow-sm"
              >
                <Layers className="w-4 h-4 text-accent-400" />
                <span>Explore Retainers &amp; Proof</span>
                <ArrowUpRight className="w-4 h-4 text-brand-400" />
              </motion.button>
            </motion.div>

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

          </motion.div>

          {/* Right: Studio Portrait Card with Matching Brand Ambient Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="w-full lg:w-5/12 flex justify-center lg:justify-end"
          >
            <ExecutivePortrait onBookingClick={handlePricing} />
          </motion.div>

        </div>

        {/* Problem-First Advisory Engine Diagnostics Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-brand-800/80"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-accent-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-200">
                Problem-First Advisory Engine
              </span>
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
        </motion.div>

      </div>
    </section>
  );
}
