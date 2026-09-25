import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, Activity, LineChart, Target, Mail, Settings, Search, Users, Globe, ChevronRight } from 'lucide-react';

export function MeasurementOptimization() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-radial-purple opacity-20 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-radial-purple-strong opacity-10 pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-50 rounded-2xl shadow-sm mb-6 border border-brand-100">
            <div className="w-10 h-10 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center">
              <RefreshCw className="w-5 h-5" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-sans font-bold text-brand-950 mb-8 tracking-tight">Measure <span className="text-accent-500">→</span> Learn <span className="text-strategy-500">→</span> Optimize</h2>
          <p className="text-brand-600 text-xl md:text-2xl font-medium leading-relaxed italic max-w-3xl">
            “A strategy is only useful when the results change the next decision.”
          </p>
        </div>

        {/* 1. Main Visual: The Optimization Loop */}
        <div className="relative w-full max-w-6xl mx-auto mb-20 lg:mb-32 bg-brand-950 rounded-[3rem] p-6 md:p-10 lg:p-16 shadow-2xl overflow-hidden border border-brand-800">
          <div className="absolute inset-0 bg-radial-purple-strong opacity-40 mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
          
          <div className="relative z-10 mb-16 text-center">
            <h3 className="text-2xl font-bold text-white tracking-widest uppercase mb-4">The Continuous SEO Process</h3>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 mb-20">
            
            {/* Cycle Steps */}
            <div className="flex items-center gap-4 w-full overflow-x-auto pb-6 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
              {['Strategy', 'Execution', 'Measurement', 'Insight', 'Adjustment', 'New Execution'].map((step, index, arr) => (
                <React.Fragment key={step}>
                  <div className="shrink-0 w-[150px] md:flex-1 bg-glass-dark border border-brand-700/50 p-5 rounded-2xl flex flex-col items-center text-center shadow-lg relative group hover:border-accent-500/50 transition-colors snap-center">
                    <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center mb-3 text-brand-300 font-bold group-hover:bg-accent-600 group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <span className="font-bold text-white text-sm tracking-wide">{step}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <div className="shrink-0 flex items-center justify-center text-accent-400">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
          </div>

          {/* Surrounding Measurement Areas */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Search Visibility', icon: Globe },
              { label: 'Organic Traffic', icon: Users },
              { label: 'Search Intent Coverage', icon: Target },
              { label: 'Content Performance', icon: LineChart },
              { label: 'Rankings', icon: Activity },
              { label: 'Leads / Enquiries', icon: Mail },
              { label: 'Conversion Behaviour', icon: RefreshCw },
              { label: 'Technical Health', icon: Settings },
              { label: 'Local Visibility', icon: Search },
              { label: 'User Behaviour', icon: Users }
            ].map((metric, i) => (
              <div key={i} className="bg-brand-900/50 border border-brand-800/50 backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center hover:bg-brand-800 transition-colors">
                <metric.icon className="w-6 h-6 text-accent-400 mb-2 opacity-80" />
                <span className="text-xs font-bold text-brand-200 uppercase tracking-wider">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. PDCA Loop connecting with SEO */}
        <div className="max-w-6xl mx-auto mb-20 lg:mb-32">
          <div className="bg-white rounded-[3rem] p-6 md:p-10 lg:p-16 shadow-soft-purple border border-brand-100 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0">
              {/* PDCA Circle Visual */}
              <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-dashed border-brand-200 animate-[spin_60s_linear_infinite] flex items-center justify-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-3 md:px-4 py-1.5 md:py-2 border-2 border-brand-200 rounded-full font-bold text-brand-900 tracking-widest text-sm md:text-lg">PLAN</div>
                <div className="absolute top-1/2 -right-8 md:-right-10 -translate-y-1/2 bg-white px-3 md:px-4 py-1.5 md:py-2 border-2 border-brand-200 rounded-full font-bold text-accent-600 tracking-widest text-sm md:text-lg transform rotate-90 origin-center">DO</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-3 md:px-4 py-1.5 md:py-2 border-2 border-brand-200 rounded-full font-bold text-strategy-600 tracking-widest text-sm md:text-lg">CHECK</div>
                <div className="absolute top-1/2 -left-10 md:-left-12 -translate-y-1/2 bg-white px-3 md:px-4 py-1.5 md:py-2 border-2 border-brand-200 rounded-full font-bold text-growth-600 tracking-widest text-sm md:text-lg transform -rotate-90 origin-center">ACT</div>
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-50 border border-brand-100 shadow-inner flex items-center justify-center p-4 md:p-6 text-center">
                  <span className="font-bold text-brand-900 uppercase tracking-widest text-sm leading-relaxed">PDCA<br/>SEO<br/>Loop</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <h3 className="text-3xl font-bold text-brand-950 mb-8 tracking-tight">The SEO Operational Framework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                  <div className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-2">Plan</div>
                  <div className="text-brand-900 font-medium">Audit current performance, analyze gaps, and define strategic priorities.</div>
                </div>
                <div className="bg-accent-50 p-6 rounded-2xl border border-accent-100">
                  <div className="text-sm font-bold text-accent-600 tracking-widest uppercase mb-2">Do</div>
                  <div className="text-brand-900 font-medium">Execute technical fixes, create content, and deploy on-page optimizations.</div>
                </div>
                <div className="bg-strategy-50 p-6 rounded-2xl border border-strategy-100">
                  <div className="text-sm font-bold text-strategy-600 tracking-widest uppercase mb-2">Check</div>
                  <div className="text-brand-900 font-medium">Measure ranking movements, traffic changes, and behavioral metrics.</div>
                </div>
                <div className="bg-growth-50 p-6 rounded-2xl border border-growth-100">
                  <div className="text-sm font-bold text-growth-600 tracking-widest uppercase mb-2">Act</div>
                  <div className="text-brand-900 font-medium">Refine strategy based on data, double down on what works, pivot if needed.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Second Visual Layer: What I Evaluate */}
        <div className="max-w-6xl mx-auto mb-20 lg:mb-32">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-4xl font-sans font-bold text-brand-900 mb-6 tracking-tight">What Gets Evaluated</h3>
            <p className="text-xl text-brand-600 font-medium max-w-2xl mx-auto">
              Measurement isn't just about rankings. It spans the entire business ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Business', desc: 'Are we targeting the right business opportunity?', icon: Target, color: 'brand' },
              { title: 'Market', desc: 'Is search demand changing?', icon: Globe, color: 'accent' },
              { title: 'Audience', desc: 'Are we answering what people actually need?', icon: Users, color: 'strategy' },
              { title: 'Search', desc: 'Are we gaining visibility for valuable searches?', icon: Search, color: 'growth' },
              { title: 'Content', desc: 'Which pages and topics are working?', icon: LineChart, color: 'brand' },
              { title: 'Conversion', desc: 'Is traffic turning into meaningful actions?', icon: Activity, color: 'accent' },
              { title: 'Technical', desc: 'Is the website helping or limiting growth?', icon: Settings, color: 'strategy' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white rounded-3xl p-8 border border-${item.color}-100 shadow-sm hover:shadow-soft-purple transition-all duration-300 relative overflow-hidden group`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-50 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 text-${item.color}-600 flex items-center justify-center mb-6 border border-${item.color}-100 shadow-sm`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-900 mb-3">{item.title}</h4>
                  <p className="text-brand-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            {/* Empty space filler for grid if needed, or visual connector */}
            <div className="hidden lg:flex bg-gradient-to-br from-brand-900 to-accent-900 rounded-3xl p-8 text-white flex-col justify-center items-center text-center col-span-1 md:col-span-2 lg:col-span-2 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-radial-purple opacity-50 mix-blend-screen" />
               <h4 className="text-3xl font-bold tracking-tight mb-4 relative z-10">Holistic Evaluation</h4>
               <p className="text-accent-100 font-medium max-w-md relative z-10">Data points are isolated. True insight comes from understanding how they connect.</p>
            </div>
          </div>
        </div>

        {/* 4. Strong Ending Statement */}
        <div className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 lg:p-20 rounded-[3rem] border border-brand-100 shadow-soft-purple relative overflow-hidden">
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-brand-100 z-10">
             <div className="w-4 h-4 bg-brand-900 rounded-full" />
           </div>
           
           <h3 className="text-3xl md:text-5xl font-sans font-bold text-brand-950 leading-tight mb-8">
             SEO is not publish and wait.
           </h3>
           <p className="text-xl md:text-2xl text-brand-600 font-medium leading-relaxed">
             It is a continuous process of learning from <span className="text-accent-600 font-bold">search</span>, <span className="text-strategy-600 font-bold">users</span> and the <span className="text-growth-600 font-bold">market</span>.
           </p>
        </div>

      </div>
    </section>
  );
}
