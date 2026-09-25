import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Megaphone, Laptop, Layers, Activity, Route } from 'lucide-react';

export function ProductToMarket() {
  return (
    <section className="py-16 lg:py-24 bg-brand-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="absolute inset-0 bg-radial-purple opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 bg-accent-100 text-accent-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-accent-200/50">
            <Route className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-900 mb-6 tracking-tight">From Product to Market</h2>
          <p className="text-brand-600 text-xl font-medium leading-relaxed">
            Building something is only the beginning. The real challenge is getting the right people to discover it, understand it and choose it.
          </p>
        </div>

        {/* Large Horizontal Journey Diagram */}
        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-6 lg:p-20 mb-16 lg:mb-24 border border-white shadow-soft-purple overflow-x-auto relative" style={{ scrollbarWidth: 'none' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-50 via-transparent to-accent-50 opacity-50 rounded-[3rem] pointer-events-none" />
          
          <div className="min-w-[900px] flex items-center justify-between relative z-10">
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-200 via-accent-300 to-growth-400 -z-10 rounded-full" />
            
            <div className="flex flex-col items-center bg-transparent px-2 py-4">
              <span className="text-sm font-bold text-brand-400 mb-4 tracking-widest">01</span>
              <div className="w-4 h-4 rounded-full bg-brand-300 mb-4 border-4 border-white shadow-sm" />
              <span className="text-base font-sans font-bold text-brand-900">Idea</span>
            </div>
            
            <div className="flex flex-col items-center bg-transparent px-2 py-4">
              <span className="text-sm font-bold text-brand-400 mb-4 tracking-widest">02</span>
              <div className="w-5 h-5 rounded-full bg-brand-400 mb-4 border-4 border-white shadow-sm" />
              <span className="text-base font-sans font-bold text-brand-900">Product</span>
            </div>
            
            <div className="flex flex-col items-center bg-transparent px-2 py-4">
              <span className="text-sm font-bold text-accent-400 mb-4 tracking-widest">03</span>
              <div className="w-5 h-5 rounded-full bg-accent-400 mb-4 border-4 border-white shadow-sm" />
              <span className="text-base font-sans font-bold text-accent-900">Positioning</span>
            </div>
            
            <div className="flex flex-col items-center bg-white px-4 py-4 rounded-2xl border-2 border-accent-200 shadow-glow transform -translate-y-2">
              <span className="text-sm font-bold text-accent-600 mb-3 tracking-widest">04</span>
              <div className="w-6 h-6 rounded-full bg-accent-600 mb-3 border-[4px] border-white shadow-md" />
              <span className="text-xl font-bold font-sans text-accent-900 tracking-wide">Market</span>
            </div>
            
            <div className="flex flex-col items-center bg-transparent px-2 py-4">
              <span className="text-sm font-bold text-accent-500 mb-4 tracking-widest">05</span>
              <div className="w-5 h-5 rounded-full bg-accent-500 mb-4 border-4 border-white shadow-sm" />
              <span className="text-base font-sans font-bold text-accent-900">Discovery</span>
            </div>
            
            <div className="flex flex-col items-center bg-transparent px-2 py-4">
              <span className="text-sm font-bold text-accent-600 mb-4 tracking-widest">06</span>
              <div className="w-5 h-5 rounded-full bg-accent-600 mb-4 border-4 border-white shadow-sm" />
              <span className="text-base font-sans font-bold text-accent-900">Traffic</span>
            </div>
            
            <div className="flex flex-col items-center bg-transparent px-2 py-4">
              <span className="text-sm font-bold text-growth-400 mb-4 tracking-widest">07</span>
              <div className="w-5 h-5 rounded-full bg-growth-400 mb-4 border-4 border-white shadow-sm" />
              <span className="text-base font-sans font-bold text-growth-900">Leads</span>
            </div>
            
            <div className="flex flex-col items-center bg-transparent px-2 py-4">
              <span className="text-sm font-bold text-growth-500 mb-4 tracking-widest">08</span>
              <div className="w-5 h-5 rounded-full bg-growth-500 mb-4 border-4 border-white shadow-sm" />
              <span className="text-base font-sans font-bold text-growth-900">Customers</span>
            </div>

            <div className="flex flex-col items-center bg-growth-50 px-6 py-4 rounded-2xl border-2 border-growth-200 shadow-lg transform -translate-y-2">
              <span className="text-sm font-bold text-growth-600 mb-3 tracking-widest">09</span>
              <div className="w-8 h-8 rounded-full bg-growth-500 mb-3 flex items-center justify-center shadow-md border-4 border-white">
                <div className="w-2.5 h-2.5 bg-white rounded-full" />
              </div>
              <span className="text-xl font-bold font-sans text-growth-900 tracking-wide">Growth</span>
            </div>
          </div>
        </div>

        {/* Visual Contrast: Build vs Market */}
        <div className="mb-16 lg:mb-24 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4 relative">
            
            {/* LEFT: BUILDING */}
            <div className="bg-white border border-brand-100 rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-soft-purple relative overflow-hidden group hover:border-brand-300 transition-colors flex-1 w-full">
              <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] transform group-hover:scale-110 transition-transform duration-700">
                <Code className="w-64 h-64 text-brand-900" />
              </div>
              <h3 className="text-base font-bold tracking-widest text-brand-400 uppercase mb-8">Phase 1 // Building</h3>
              
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-5 py-2.5 bg-brand-50 rounded-xl text-sm font-bold text-brand-600 tracking-wide">Developers</span>
                <span className="px-5 py-2.5 bg-brand-50 rounded-xl text-sm font-bold text-brand-600 tracking-wide">Designers</span>
                <span className="px-5 py-2.5 bg-brand-50 rounded-xl text-sm font-bold text-brand-600 tracking-wide">Technology</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shadow-sm shrink-0">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-xl text-brand-900 mb-1">Product</div>
                    <div className="text-sm font-medium text-brand-500">Creating the solution</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shadow-sm shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-xl text-brand-900 mb-1">Website</div>
                    <div className="text-sm font-medium text-brand-500">Building the platform</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shadow-sm shrink-0">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-xl text-brand-900 mb-1">Application</div>
                    <div className="text-sm font-medium text-brand-500">Engineering the features</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER: MARKETING DIVIDER */}
            <div className="hidden lg:flex shrink-0 z-10 -mx-8 relative items-center justify-center">
              <div className="bg-white text-accent-600 px-6 py-4 rounded-2xl font-sans font-bold shadow-soft-purple border border-accent-100 tracking-widest text-lg flex items-center gap-3 relative before:absolute before:inset-0 before:shadow-[0_0_30px_rgba(255,255,255,1)] before:-z-10 before:rounded-2xl">
                MARKETING
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* RIGHT: GOING TO MARKET */}
            <div className="bg-[#150d28] border border-[#291a4b] rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-white group flex-1 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#291a4b]/50 to-transparent" />
              <div className="absolute -top-10 -right-10 p-8 opacity-[0.05] transform group-hover:scale-110 transition-transform duration-700">
                <Megaphone className="w-64 h-64 text-white" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-base font-bold tracking-widest text-accent-300 uppercase mb-8">Phase 2 // Going To Market</h3>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  <span className="px-5 py-2.5 bg-glass-dark border border-[#7839ee]/20 rounded-xl text-sm font-bold text-accent-100 tracking-wide backdrop-blur-sm">Positioning</span>
                  <span className="px-5 py-2.5 bg-glass-dark border border-[#7839ee]/20 rounded-xl text-sm font-bold text-accent-100 tracking-wide backdrop-blur-sm">Audience</span>
                  <span className="px-5 py-2.5 bg-glass-dark border border-[#7839ee]/20 rounded-xl text-sm font-bold text-accent-100 tracking-wide backdrop-blur-sm">Search</span>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-glass-dark border border-[#7839ee]/30 flex items-center justify-center text-accent-300 shadow-inner backdrop-blur-sm">
                      <Megaphone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-xl text-white mb-1">Content &amp; PPC</div>
                      <div className="text-sm font-medium text-accent-300">Generating awareness</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-glass-dark border border-[#7839ee]/30 flex items-center justify-center text-accent-300 shadow-inner backdrop-blur-sm">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-xl text-white mb-1">Conversion</div>
                      <div className="text-sm font-medium text-accent-300">Turning traffic into action</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-growth-600/20 border border-growth-500/30 flex items-center justify-center text-growth-300 shadow-inner backdrop-blur-sm">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-xl text-white mb-1">Retention &amp; Growth</div>
                      <div className="text-sm font-medium text-accent-300">Scaling the business</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Position Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24 bg-white/80 backdrop-blur-md p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-soft-purple border border-white relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center border border-accent-100 shadow-sm">
            <div className="w-4 h-4 bg-accent-500 rounded-full" />
          </div>
          <p className="text-2xl md:text-3xl font-sans font-medium text-brand-900 leading-relaxed mb-8">
            “My technical background helps me understand how digital products are built. My marketing experience helps me understand how those products reach the market.”
          </p>
          <p className="inline-block px-6 py-2 bg-brand-50 text-brand-700 font-bold tracking-widest uppercase text-sm rounded-full border border-brand-100">
            That intersection shapes how I approach SEO.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-sans text-3xl font-bold text-brand-900">Building vs. Taking to Market</h3>
          </div>
          
          <div className="bg-white border border-brand-100 rounded-3xl overflow-hidden shadow-soft-purple overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-brand-100 bg-brand-50">
                  <th className="py-6 px-8 text-left text-base font-bold tracking-widest text-brand-500 uppercase w-1/2 border-r border-brand-100">Phase 1: Build</th>
                  <th className="py-6 px-8 text-left text-base font-bold tracking-widest text-accent-600 uppercase w-1/2 bg-accent-50/50">Phase 2: Take to Market</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr className="hover:bg-brand-50/50 transition-colors group">
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl border-r border-brand-100">Product</td>
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl group-hover:bg-accent-50/50 transition-colors">Audience</td>
                </tr>
                <tr className="hover:bg-brand-50/50 transition-colors group">
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl border-r border-brand-100">Technology</td>
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl group-hover:bg-accent-50/50 transition-colors">Positioning</td>
                </tr>
                <tr className="hover:bg-brand-50/50 transition-colors group">
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl border-r border-brand-100">Features</td>
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl group-hover:bg-accent-50/50 transition-colors">Value Proposition</td>
                </tr>
                <tr className="hover:bg-brand-50/50 transition-colors group">
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl border-r border-brand-100">Website</td>
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl group-hover:bg-accent-50/50 transition-colors">Discovery</td>
                </tr>
                <tr className="hover:bg-brand-50/50 transition-colors group">
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl border-r border-brand-100">Functionality</td>
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl group-hover:bg-accent-50/50 transition-colors">Demand</td>
                </tr>
                <tr className="hover:bg-brand-50/50 transition-colors group">
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl border-r border-brand-100">Development</td>
                  <td className="py-5 px-8 text-brand-900 font-sans font-medium text-xl group-hover:bg-accent-50/50 transition-colors">Acquisition</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-brand-600 font-sans text-2xl italic font-medium">Both matter. The opportunity is in connecting them.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
