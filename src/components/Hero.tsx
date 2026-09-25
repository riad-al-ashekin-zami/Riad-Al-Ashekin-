import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, Target, LineChart, TrendingUp } from 'lucide-react';

interface HeroProps {
  onNavigate?: (slug: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const handlePricing = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/seo-pricing/');
    }
  };

  const handleWork = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/seo-portfolio/');
    }
  };

  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fafafc] px-4 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Soft gradient orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-accent-200/30 to-strategy-100/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-growth-200/30 to-brand-100/30 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[85rem] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left: Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-200 text-sm font-bold tracking-widest text-brand-700 mb-8 shadow-sm uppercase">
              <TrendingUp className="w-4 h-4 text-accent-600" />
              <span>Smarter SEO Strategy</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-sans font-bold text-brand-950 leading-[1.05] tracking-tight mb-8">
              Turn Business Goals Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-strategy-500">Search Growth.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-brand-600 leading-relaxed mb-10 max-w-xl font-medium">
              I help businesses make smarter SEO decisions and build strategies around their market, audience, competition, and revenue goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="/seo-pricing/" 
                onClick={handlePricing}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-brand-950 text-white rounded-full font-bold text-lg hover:bg-brand-900 transition-colors shadow-lg group cursor-pointer"
              >
                Explore Pricing &amp; Retainers <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/seo-portfolio/" 
                onClick={handleWork}
                className="inline-flex justify-center items-center px-8 py-4 bg-white border border-brand-200 text-brand-900 rounded-full font-bold text-lg hover:border-brand-300 hover:shadow-soft-purple transition-all duration-300 cursor-pointer"
              >
                View My Work
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm font-bold text-brand-500">
              <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-brand-200 border-2 border-white"></div>
                 <div className="w-8 h-8 rounded-full bg-accent-200 border-2 border-white"></div>
                 <div className="w-8 h-8 rounded-full bg-strategy-200 border-2 border-white"></div>
              </div>
              <p>Trusted by 50+ businesses globally.</p>
            </div>
          </motion.div>

          {/* Right: Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[600px] flex items-center justify-center lg:justify-end"
          >
            {/* Background connecting lines (hidden on mobile) */}
            <svg className="absolute inset-0 w-full h-full hidden md:block" style={{ zIndex: 0 }}>
              <path d="M 150 200 C 250 200, 200 400, 350 400" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 350 150 C 350 250, 200 100, 150 100" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Central Main Card */}
            <div className="relative z-10 bg-white rounded-[2rem] p-4 shadow-2xl border border-brand-100 w-full max-w-sm mx-auto lg:mr-8 transform lg:translate-x-8 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 shadow-soft-purple">
              <div className="bg-brand-950 rounded-2xl overflow-hidden shadow-inner text-white h-[400px] flex flex-col relative">
                {/* Dark glow inside */}
                <div className="absolute inset-0 bg-radial-purple-strong opacity-40 mix-blend-screen pointer-events-none" />
                
                <div className="p-4 border-b border-brand-800 flex items-center justify-between relative z-10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-800" />
                    <div className="w-3 h-3 rounded-full bg-brand-800" />
                    <div className="w-3 h-3 rounded-full bg-brand-800" />
                  </div>
                  <div className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">Growth Engine</div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-center relative z-10">
                  <div className="text-sm font-medium text-brand-400 mb-2">Organic Traffic</div>
                  <div className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-strategy-400">124K+</div>
                  
                  <div className="space-y-4">
                    <div className="bg-glass-dark border border-brand-800/50 p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400">
                           <Target className="w-4 h-4" />
                         </div>
                         <div className="text-sm font-medium">Search Intent</div>
                      </div>
                      <div className="text-sm font-bold text-accent-400">98%</div>
                    </div>
                    
                    <div className="bg-glass-dark border border-brand-800/50 p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-strategy-500/20 flex items-center justify-center text-strategy-400">
                           <LineChart className="w-4 h-4" />
                         </div>
                         <div className="text-sm font-medium">Conversion</div>
                      </div>
                      <div className="text-sm font-bold text-strategy-400">+24%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Left Widget */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 md:top-20 left-0 md:-left-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-brand-100 flex items-center gap-4 hover:shadow-soft-purple transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-accent-50 flex items-center justify-center text-2xl shadow-inner border border-accent-100">
                🏆
              </div>
              <div>
                <div className="text-lg font-bold text-brand-900">#1 Ranking</div>
                <div className="text-xs text-brand-500 font-medium">Dominate local & global search</div>
              </div>
            </motion.div>

            {/* Floating Bottom Left Widget */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 md:bottom-20 left-4 md:-left-8 z-20 bg-brand-950 p-5 rounded-2xl shadow-2xl border border-brand-800"
            >
              <div className="flex items-center justify-between mb-4 gap-6">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent-400" /> Performance
                </div>
              </div>
              <svg width="120" height="40" viewBox="0 0 120 40" className="drop-shadow-lg">
                <path d="M0 40 Q 20 10, 40 30 T 80 10 T 120 20" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
                <path d="M0 40 Q 20 10, 40 30 T 80 10 T 120 20 L 120 40 L 0 40 Z" fill="url(#grad)" opacity="0.3" />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mt-2 text-3xl font-bold text-white">4.8x</div>
              <div className="text-xs font-medium text-brand-400">ROI Increase</div>
            </motion.div>

            {/* Floating Bottom Right Widget */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-2 md:bottom-12 right-0 md:-right-4 z-20 bg-white p-5 rounded-2xl shadow-xl border border-brand-100 flex flex-col items-center"
            >
              <div className="flex -space-x-3 mb-3">
                 <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-brand-200"></div>
                 <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-accent-200"></div>
                 <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-strategy-200"></div>
              </div>
              <div className="text-xl font-bold text-brand-900">300%</div>
              <div className="text-[10px] font-bold text-brand-500 uppercase tracking-widest mt-1">Lead Growth</div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
