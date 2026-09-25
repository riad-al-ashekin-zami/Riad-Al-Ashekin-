import React from 'react';
import { ArrowRight, Users, Target, Crosshair, MessageSquare, Megaphone, UserCheck, Play, BrainCircuit, Activity, BarChart, Globe, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

function GlowingCard({ 
  title, 
  subtitle, 
  icon: Icon, 
  children,
  className = ""
}: { 
  title: string, 
  subtitle: string, 
  icon: any, 
  children?: React.ReactNode,
  className?: string
}) {
  return (
    <div className={`relative group h-full bg-white rounded-[2rem] p-8 shadow-soft-purple border border-white/50 overflow-hidden flex flex-col ${className}`}>
      <div className="absolute inset-0 bg-radial-purple opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Floating internal structure (glassmorphic pill) */}
      <div className="relative z-10 flex-1">
        {children}
      </div>

      <div className="relative z-10 mt-8">
        <h3 className="font-sans text-2xl font-bold text-brand-900 mb-2">{title}</h3>
        <p className="text-sm font-medium text-brand-500 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}

export function MarketingStarts() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-brand-50">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-strategy-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-soft-purple mb-6 border border-brand-100">
            <div className="w-10 h-10 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-950 mb-6 tracking-tight">How Marketing Starts</h2>
          <p className="text-brand-600 text-lg md:text-xl font-medium leading-relaxed">
            Marketing doesn’t start with promotion. It starts with data-driven understanding.
          </p>
        </div>

        {/* Bento Grid Layout - Glassy SaaS Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Segmentation */}
          <GlowingCard 
            title="Market Segmentation" 
            subtitle="Divide the broader market into distinct, targetable groups based on shared characteristics."
            icon={Users}
          >
            <div className="relative h-48 bg-brand-50 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 border border-brand-100/50">
               {/* Abstract floating UI elements */}
               <div className="w-full space-y-3">
                 <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm flex items-center justify-between border border-white transform hover:scale-105 transition-transform cursor-default">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center"><Users className="w-4 h-4 text-accent-600" /></div>
                     <span className="text-sm font-bold text-brand-700">Demographics</span>
                   </div>
                   <span className="text-xs font-bold text-brand-400">42%</span>
                 </div>
                 <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm flex items-center justify-between border border-white transform hover:scale-105 transition-transform cursor-default ml-6">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-strategy-100 flex items-center justify-center"><Globe className="w-4 h-4 text-strategy-600" /></div>
                     <span className="text-sm font-bold text-brand-700">Geographics</span>
                   </div>
                   <span className="text-xs font-bold text-brand-400">28%</span>
                 </div>
                 <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm flex items-center justify-between border border-white transform hover:scale-105 transition-transform cursor-default ml-12">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-growth-100 flex items-center justify-center"><BrainCircuit className="w-4 h-4 text-growth-600" /></div>
                     <span className="text-sm font-bold text-brand-700">Psychographics</span>
                   </div>
                   <span className="text-xs font-bold text-brand-400">30%</span>
                 </div>
               </div>
            </div>
          </GlowingCard>

          {/* Card 2: Targeting */}
          <GlowingCard 
            title="Strategic Targeting" 
            subtitle="Identify and prioritize the specific segments that represent the highest value and clearest fit."
            icon={Target}
          >
            <div className="relative h-48 bg-brand-50 rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-brand-100/50">
              {/* Concentric rings with floating target */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border border-accent-200" />
                <div className="absolute w-28 h-28 rounded-full border border-accent-300" />
                <div className="absolute w-16 h-16 rounded-full bg-accent-500 shadow-glow flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                {/* Floating dots */}
                <div className="absolute top-10 left-10 w-3 h-3 bg-strategy-400 rounded-full shadow-sm" />
                <div className="absolute bottom-12 right-12 w-2 h-2 bg-brand-400 rounded-full shadow-sm" />
                <div className="absolute top-1/2 right-8 w-4 h-4 bg-growth-400 rounded-full shadow-sm" />
              </div>
            </div>
          </GlowingCard>

          {/* Card 3: Positioning */}
          <GlowingCard 
            title="Brand Positioning" 
            subtitle="Establish a unique, defendable space in the customer's mind relative to the competition."
            icon={Crosshair}
          >
            <div className="relative h-48 bg-brand-50 rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-brand-100/50">
              <div className="w-full bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-strategy-500 flex items-center justify-center shadow-glow">
                    <Crosshair className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-900">Value Proposition</div>
                    <div className="text-xs text-brand-500">Why choose us?</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1.5 bg-brand-50 rounded-lg text-xs font-bold text-brand-600 border border-brand-100">Differentiation</span>
                  <span className="px-3 py-1.5 bg-brand-50 rounded-lg text-xs font-bold text-brand-600 border border-brand-100">Relevance</span>
                </div>
              </div>
            </div>
          </GlowingCard>

          {/* Card 4: Execution Pipeline (Spans 3 cols on large screens) */}
          <div className="lg:col-span-3 relative group bg-white rounded-[2rem] p-8 lg:p-12 shadow-soft-purple border border-white/50 overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="absolute inset-0 bg-radial-purple opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* The Pipeline */}
            <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center w-full gap-4 lg:gap-8">
              
              {/* Message */}
              <div className="flex-1 w-full bg-brand-50 p-6 rounded-3xl border border-brand-100/50 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-brand-700" />
                </div>
                <h4 className="font-bold text-lg text-brand-900 mb-1">Message</h4>
                <p className="text-xs font-medium text-brand-500">What we communicate</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-brand-300 shrink-0" />
              <div className="md:hidden w-6 h-6 text-brand-300 shrink-0 flex items-center justify-center rotate-90">
                <ArrowRight className="w-6 h-6" />
              </div>

              {/* Channels */}
              <div className="flex-1 w-full bg-brand-50 p-6 rounded-3xl border border-brand-100/50 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-100/30 to-transparent pointer-events-none" />
                <div className="relative z-10 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                  <Megaphone className="w-5 h-5 text-accent-600" />
                </div>
                <h4 className="relative z-10 font-bold text-lg text-brand-900 mb-3">Channels</h4>
                <div className="relative z-10 flex gap-2">
                  <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-accent-600 border border-brand-100 shadow-sm uppercase">SEO</span>
                  <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-accent-600 border border-brand-100 shadow-sm uppercase">PPC</span>
                  <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-accent-600 border border-brand-100 shadow-sm uppercase">Content</span>
                </div>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-brand-300 shrink-0" />
              <div className="md:hidden w-6 h-6 text-brand-300 shrink-0 flex items-center justify-center rotate-90">
                <ArrowRight className="w-6 h-6" />
              </div>

              {/* Customer */}
              <div className="flex-1 w-full bg-gradient-to-br from-accent-600 to-strategy-600 p-6 rounded-3xl shadow-glow flex flex-col items-center text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="relative z-10 font-bold text-lg text-white mb-1">Customer</h4>
                <p className="relative z-10 text-xs font-medium text-accent-100">The Response</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
