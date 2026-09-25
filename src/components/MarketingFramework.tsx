import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, BarChart2, Target, Share2, Brain, Activity, ArrowRight, Play, RefreshCw, BarChart, Layers, Megaphone, Route } from 'lucide-react';

export function MarketingFramework() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const stages = [
    { id: 1, title: 'Understand', subtitle: 'PESTEL', color: 'brand' },
    { id: 2, title: 'Analyze', subtitle: 'SWOT', color: 'brand' },
    { id: 3, title: 'Define', subtitle: 'STP', color: 'strategy' },
    { id: 4, title: 'Strategize', subtitle: '7Ps', color: 'strategy' },
    { id: 5, title: 'Influence', subtitle: 'Psychology', color: 'strategy' },
    { id: 6, title: 'Execute', subtitle: 'Channels', color: 'accent' },
    { id: 7, title: 'Measure', subtitle: 'KPIs', color: 'accent' },
    { id: 8, title: 'Optimize', subtitle: 'PDCA', color: 'growth' },
    { id: 9, title: 'Grow', subtitle: 'Scale', color: 'growth' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 bg-strategy-100 text-strategy-700 rounded-2xl flex items-center justify-center mb-6">
            <Layers className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6 tracking-tight">My Marketing Framework</h2>
          <p className="text-brand-600 text-xl font-medium leading-relaxed">
            A connected way of thinking about markets, customers, strategy, execution and growth.
          </p>
        </div>

        {/* Master Framework Overview (Top Level) */}
        <div className="mb-20 lg:mb-32 overflow-x-auto pb-12 pt-4 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          <div className="min-w-[1100px] flex items-center justify-between relative px-4">
            <div className="absolute top-1/2 left-8 right-8 h-1.5 bg-gradient-to-r from-brand-200 via-strategy-300 to-growth-400 -z-10 rounded-full opacity-50" />
            
            {stages.map((stage, idx) => (
              <div 
                key={stage.id}
                className="flex flex-col items-center group cursor-pointer relative"
                onMouseEnter={() => setActiveStage(stage.id)}
                onMouseLeave={() => setActiveStage(null)}
              >
                <div className="text-sm font-bold text-brand-400 mb-4 transition-colors group-hover:text-brand-900 tracking-widest">
                  {String(stage.id).padStart(2, '0')}
                </div>
                <div 
                  className={`w-6 h-6 rounded-full border-[5px] border-white mb-4 shadow-md transition-all duration-300 ${
                    activeStage === stage.id ? 'scale-[1.8]' : ''
                  } ${
                    stage.color === 'brand' ? (activeStage === stage.id ? 'bg-brand-900' : 'bg-brand-400 group-hover:bg-brand-600') :
                    stage.color === 'strategy' ? (activeStage === stage.id ? 'bg-strategy-600' : 'bg-strategy-400 group-hover:bg-strategy-500') :
                    stage.color === 'accent' ? (activeStage === stage.id ? 'bg-accent-600' : 'bg-accent-400 group-hover:bg-accent-500') :
                    (activeStage === stage.id ? 'bg-growth-500' : 'bg-growth-400 group-hover:bg-growth-500')
                  }`} 
                />
                <div className={`font-serif font-bold transition-all duration-300 ${activeStage === stage.id ? 'text-brand-900 text-2xl -translate-y-1' : 'text-brand-600 text-base'}`}>
                  {stage.title}
                </div>
                <div className={`text-xs font-bold tracking-widest mt-1 transition-all duration-300 uppercase ${activeStage === stage.id ? 'text-brand-500 opacity-100' : 'text-transparent opacity-0'}`}>
                  {stage.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Stages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-32">
          
          {/* 01 UNDERSTAND */}
          <div className="bg-brand-50/50 rounded-[2.5rem] p-6 md:p-8 lg:p-10 border-2 border-brand-100 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all flex flex-col group">
            <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <span className="text-sm font-bold text-brand-400 tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">01</span>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Understand</h3>
            </div>
            
            <div className="relative flex-1 min-h-[250px] w-full flex items-center justify-center">
              <div className="absolute inset-0 max-w-[250px] max-h-[250px] mx-auto border-2 border-brand-200 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-6 max-w-[200px] max-h-[200px] mx-auto border border-brand-300 rounded-full animate-[spin_20s_linear_infinite_reverse] border-dashed" />
              
              <div className="text-center z-10 bg-white w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-brand-50 transform group-hover:scale-110 transition-transform">
                <div className="font-bold text-xl text-brand-900 mb-1 tracking-wide">MARKET</div>
                <div className="text-xs font-bold text-brand-500 uppercase tracking-widest">Context</div>
              </div>

              {/* PESTEL Nodes */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-brand-700 uppercase bg-white px-3 py-1 rounded-full shadow-sm border border-brand-100">Political</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-brand-700 uppercase bg-white px-3 py-1 rounded-full shadow-sm border border-brand-100">Legal</div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 text-xs font-bold text-brand-700 uppercase bg-white px-3 py-1 rounded-full shadow-sm border border-brand-100">Social</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-xs font-bold text-brand-700 uppercase bg-white px-3 py-1 rounded-full shadow-sm border border-brand-100">Tech</div>
            </div>
          </div>

          {/* 02 ANALYZE */}
          <div className="bg-brand-50/50 rounded-[2.5rem] p-6 md:p-8 lg:p-10 border-2 border-brand-100 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all flex flex-col">
            <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <span className="text-sm font-bold text-brand-400 tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">02</span>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Analyze</h3>
            </div>
            
            <div className="flex flex-col flex-1 min-h-[250px] justify-center relative bg-white rounded-3xl p-6 shadow-sm border border-brand-100">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-brand-500 bg-white px-4 py-1 rounded-full shadow-sm tracking-widest uppercase border border-brand-100">Internal</div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-brand-500 bg-white px-4 py-1 rounded-full shadow-sm tracking-widest uppercase border border-brand-100">External</div>
              
              <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                <div className="bg-brand-50 rounded-tl-2xl rounded-br flex flex-col items-center justify-center p-4 hover:bg-brand-100 transition-colors">
                  <span className="text-2xl font-serif text-brand-900/20 absolute top-2 left-3">S</span>
                  <span className="text-sm font-bold text-brand-900 tracking-wide z-10">STRENGTHS</span>
                </div>
                <div className="bg-brand-50 rounded-tr-2xl rounded-bl flex flex-col items-center justify-center p-4 hover:bg-brand-100 transition-colors">
                  <span className="text-2xl font-serif text-brand-900/20 absolute top-2 right-3">W</span>
                  <span className="text-sm font-bold text-brand-900 tracking-wide z-10">WEAKNESSES</span>
                </div>
                <div className="bg-brand-900 rounded-bl-2xl rounded-tr flex flex-col items-center justify-center p-4 hover:bg-brand-800 transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-800 to-transparent" />
                  <span className="text-3xl font-serif text-white/10 absolute bottom-1 left-2">O</span>
                  <span className="text-sm font-bold text-white tracking-wide z-10">OPPORTUNITIES</span>
                </div>
                <div className="bg-brand-100 rounded-br-2xl rounded-tl flex flex-col items-center justify-center p-4 hover:bg-brand-200 transition-colors">
                  <span className="text-2xl font-serif text-brand-900/10 absolute bottom-2 right-3">T</span>
                  <span className="text-sm font-bold text-brand-700 tracking-wide z-10">THREATS</span>
                </div>
              </div>
            </div>
          </div>

          {/* 03 DEFINE */}
          <div className="bg-strategy-50/50 rounded-[2.5rem] p-6 md:p-8 lg:p-10 border-2 border-strategy-100 shadow-sm hover:shadow-xl hover:border-strategy-300 transition-all flex flex-col">
            <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <span className="text-sm font-bold text-strategy-500 tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">03</span>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Define</h3>
            </div>
            
            <div className="flex flex-col gap-6 flex-1 min-h-[250px] justify-center bg-white p-8 rounded-3xl border border-strategy-100 shadow-sm">
              <div className="flex flex-col gap-3">
                <div className="bg-strategy-50 px-6 py-4 rounded-xl text-sm font-bold text-strategy-900 flex items-center justify-between group hover:bg-strategy-100 transition-colors">
                  <span>SEGMENT</span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-strategy-400 group-hover:text-strategy-600">S</div>
                </div>
                <div className="bg-strategy-50 px-6 py-4 rounded-xl text-sm font-bold text-strategy-900 flex items-center justify-between group hover:bg-strategy-100 transition-colors">
                  <span>TARGET</span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-strategy-400 group-hover:text-strategy-600">T</div>
                </div>
                <div className="bg-strategy-600 px-6 py-4 rounded-xl text-sm font-bold text-white flex items-center justify-between shadow-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-strategy-500 to-transparent" />
                  <span className="relative z-10">POSITION</span>
                  <div className="w-8 h-8 rounded-full bg-strategy-700 flex items-center justify-center shadow-inner text-white relative z-10 group-hover:scale-110 transition-transform">P</div>
                </div>
              </div>
              <div className="text-center mt-2 text-sm font-bold text-brand-500 leading-relaxed bg-brand-50 py-3 rounded-xl">
                Audience <span className="text-strategy-400 mx-1">+</span> Need <span className="text-strategy-400 mx-1">+</span> Value
              </div>
            </div>
          </div>

          {/* 04 STRATEGIZE */}
          <div className="bg-strategy-50/50 rounded-[2.5rem] p-6 md:p-8 lg:p-10 border-2 border-strategy-100 shadow-sm hover:shadow-xl hover:border-strategy-300 transition-all flex flex-col group">
            <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <span className="text-sm font-bold text-strategy-500 tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">04</span>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Strategize</h3>
            </div>
            
            <div className="relative flex-1 min-h-[250px] w-full flex items-center justify-center bg-white rounded-3xl border border-strategy-100 shadow-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-strategy-600 rounded-full flex flex-col items-center justify-center shadow-xl z-10 border-4 border-white group-hover:scale-110 transition-transform">
                  <span className="text-[10px] font-bold text-strategy-200 tracking-widest mb-1">THE</span>
                  <span className="text-lg font-black text-white leading-none">MIX</span>
                </div>
              </div>
              
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-strategy-50 px-4 py-2 rounded-lg text-xs font-bold text-strategy-800 shadow-sm border border-strategy-100">Product</div>
              <div className="absolute top-1/4 right-4 bg-strategy-50 px-4 py-2 rounded-lg text-xs font-bold text-strategy-800 shadow-sm border border-strategy-100">Price</div>
              <div className="absolute bottom-1/4 right-4 bg-strategy-50 px-4 py-2 rounded-lg text-xs font-bold text-strategy-800 shadow-sm border border-strategy-100">Place</div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-strategy-50 px-4 py-2 rounded-lg text-xs font-bold text-strategy-800 shadow-sm border border-strategy-100">Promotion</div>
              <div className="absolute bottom-1/4 left-4 bg-strategy-50 px-4 py-2 rounded-lg text-xs font-bold text-strategy-800 shadow-sm border border-strategy-100">People</div>
              <div className="absolute top-1/4 left-4 bg-strategy-50 px-4 py-2 rounded-lg text-xs font-bold text-strategy-800 shadow-sm border border-strategy-100">Process</div>
              
              <svg className="absolute inset-0 w-full h-full -z-10 opacity-30 pointer-events-none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" className="text-strategy-600" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" className="text-strategy-300" strokeWidth="0.5" />
              </svg>
            </div>
          </div>

          {/* 05 INFLUENCE */}
          <div className="bg-strategy-50/50 rounded-[2.5rem] p-6 md:p-8 lg:p-10 border-2 border-strategy-100 shadow-sm hover:shadow-xl hover:border-strategy-300 transition-all flex flex-col">
            <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <span className="text-sm font-bold text-strategy-500 tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">05</span>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Influence</h3>
            </div>
            
            <div className="flex flex-col flex-1 min-h-[250px] bg-white rounded-3xl p-8 border border-strategy-100 shadow-sm justify-between">
              <div className="flex items-center justify-between w-full mb-8 relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-strategy-100 -z-10" />
                <div className="w-16 h-16 bg-strategy-50 border-2 border-strategy-200 rounded-full flex flex-col items-center justify-center">
                  <Brain className="w-6 h-6 text-strategy-500 mb-1" />
                </div>
                <div className="w-16 h-16 bg-strategy-50 border-2 border-strategy-200 rounded-full flex flex-col items-center justify-center">
                  <Megaphone className="w-5 h-5 text-strategy-500 mb-1" />
                </div>
                <div className="w-16 h-16 bg-strategy-600 border-2 border-strategy-600 rounded-full flex flex-col items-center justify-center shadow-md">
                  <Target className="w-6 h-6 text-white mb-1" />
                </div>
              </div>
              
              <div className="flex items-center justify-between w-full mb-8 text-xs font-bold text-brand-700 tracking-wide uppercase px-2">
                <span>Psychology</span>
                <span>Message</span>
                <span className="text-strategy-700">Decision</span>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center mt-auto">
                <span className="text-xs font-bold bg-brand-50 px-3 py-1.5 rounded-lg text-brand-600 hover:bg-brand-100 transition-colors">Anchoring</span>
                <span className="text-xs font-bold bg-brand-50 px-3 py-1.5 rounded-lg text-brand-600 hover:bg-brand-100 transition-colors">Framing</span>
                <span className="text-xs font-bold bg-brand-50 px-3 py-1.5 rounded-lg text-brand-600 hover:bg-brand-100 transition-colors">Scarcity</span>
                <span className="text-xs font-bold bg-brand-50 px-3 py-1.5 rounded-lg text-brand-600 hover:bg-brand-100 transition-colors">Loss Aversion</span>
              </div>
            </div>
          </div>

          {/* 06 EXECUTE */}
          <div className="bg-accent-50/50 rounded-[2.5rem] p-6 md:p-8 lg:p-10 border-2 border-accent-100 shadow-sm hover:shadow-xl hover:border-accent-300 transition-all flex flex-col group">
            <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <span className="text-sm font-bold text-accent-500 tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">06</span>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Execute</h3>
            </div>
            
            <div className="relative flex-1 min-h-[250px] w-full flex items-center justify-center bg-white rounded-3xl border border-accent-100 shadow-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-accent-600 rounded-2xl flex items-center justify-center shadow-xl z-10 transform group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-sm font-black text-white tracking-widest text-center leading-tight">THE<br/>MARKET</span>
                </div>
              </div>
              
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border-2 border-accent-100 px-4 py-2 rounded-xl text-xs font-bold text-accent-700 shadow-sm z-20">SEO</div>
              <div className="absolute top-1/4 right-4 bg-white border-2 border-accent-100 px-4 py-2 rounded-xl text-xs font-bold text-accent-700 shadow-sm z-20">PPC</div>
              <div className="absolute bottom-1/4 right-4 bg-white border-2 border-accent-100 px-4 py-2 rounded-xl text-xs font-bold text-accent-700 shadow-sm z-20">Social</div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border-2 border-accent-100 px-4 py-2 rounded-xl text-xs font-bold text-accent-700 shadow-sm z-20">Content</div>
              <div className="absolute bottom-1/4 left-4 bg-white border-2 border-accent-100 px-4 py-2 rounded-xl text-xs font-bold text-accent-700 shadow-sm z-20">Email</div>
              <div className="absolute top-1/4 left-4 bg-white border-2 border-accent-100 px-4 py-2 rounded-xl text-xs font-bold text-accent-700 shadow-sm z-20">Video</div>
              
              <svg className="absolute inset-0 w-full h-full -z-10 opacity-20 pointer-events-none" viewBox="0 0 100 100">
                <line x1="50" y1="15" x2="50" y2="30" stroke="currentColor" className="text-accent-600" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="85" y1="50" x2="70" y2="50" stroke="currentColor" className="text-accent-600" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="50" y1="85" x2="50" y2="70" stroke="currentColor" className="text-accent-600" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="15" y1="50" x2="30" y2="50" stroke="currentColor" className="text-accent-600" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>

          {/* 07 MEASURE */}
          <div className="bg-accent-50/50 rounded-[2.5rem] p-6 md:p-8 lg:p-10 border-2 border-accent-100 shadow-sm hover:shadow-xl hover:border-accent-300 transition-all flex flex-col">
            <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <span className="text-sm font-bold text-accent-500 tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">07</span>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Measure</h3>
            </div>
            
            <div className="flex flex-col flex-1 min-h-[250px] justify-center gap-4 bg-white p-6 rounded-3xl border border-accent-100 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="bg-brand-50 p-4 rounded-xl flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">Traffic</span>
                    <span className="text-sm font-bold text-brand-900">142K</span>
                  </div>
                  <div className="w-full h-2 bg-brand-200 rounded-full overflow-hidden"><div className="w-3/4 h-full bg-brand-400" /></div>
                </div>
                <div className="bg-brand-50 p-4 rounded-xl flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">Leads</span>
                    <span className="text-sm font-bold text-brand-900">8.4K</span>
                  </div>
                  <div className="w-full h-2 bg-brand-200 rounded-full overflow-hidden"><div className="w-1/2 h-full bg-accent-400" /></div>
                </div>
                <div className="bg-accent-600 p-4 rounded-xl flex flex-col gap-2 shadow-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-transparent" />
                  <div className="flex justify-between items-end relative z-10">
                    <span className="text-xs font-bold text-accent-100 uppercase tracking-widest">Conv. Rate</span>
                    <span className="text-sm font-bold text-white">5.9%</span>
                  </div>
                  <div className="w-full h-2 bg-accent-800/50 rounded-full overflow-hidden relative z-10"><div className="w-[85%] h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" /></div>
                </div>
              </div>
            </div>
          </div>

          {/* 08 OPTIMIZE */}
          <div className="bg-growth-50/50 rounded-[2.5rem] p-6 md:p-8 lg:p-10 border-2 border-growth-100 shadow-sm hover:shadow-xl hover:border-growth-300 transition-all flex flex-col group">
            <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <span className="text-sm font-bold text-growth-500 tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">08</span>
              <h3 className="font-serif text-2xl font-bold text-brand-900">Optimize</h3>
            </div>
            
            <div className="flex flex-col flex-1 min-h-[250px] justify-center items-center relative bg-white rounded-3xl border border-growth-100 shadow-sm p-8">
              <RefreshCw className="w-16 h-16 text-growth-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 group-hover:rotate-180 transition-transform duration-1000" />
              
              <div className="grid grid-cols-2 grid-rows-2 gap-3 w-40 h-40 z-10">
                <div className="bg-growth-50 rounded-tl-2xl rounded-br-lg flex flex-col items-center justify-center border border-growth-100 shadow-sm">
                  <span className="text-sm font-bold text-growth-700 tracking-widest">PLAN</span>
                </div>
                <div className="bg-growth-100 rounded-tr-2xl rounded-bl-lg flex flex-col items-center justify-center border border-growth-200 shadow-sm">
                  <span className="text-sm font-bold text-growth-800 tracking-widest">DO</span>
                </div>
                <div className="bg-growth-600 rounded-bl-2xl rounded-tr-lg flex flex-col items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-white tracking-widest">ACT</span>
                </div>
                <div className="bg-growth-50 rounded-br-2xl rounded-tl-lg flex flex-col items-center justify-center border border-growth-100 shadow-sm">
                  <span className="text-sm font-bold text-growth-700 tracking-widest">CHECK</span>
                </div>
              </div>
              
              <div className="mt-8 flex items-center gap-3 text-xs font-bold text-brand-400 bg-brand-50 px-6 py-3 rounded-full uppercase tracking-widest">
                <span>Test</span>
                <ArrowRight className="w-4 h-4 text-growth-400" />
                <span>Learn</span>
                <ArrowRight className="w-4 h-4 text-growth-400" />
                <span className="text-growth-600">Improve</span>
              </div>
            </div>
          </div>

          {/* 09 GROW */}
          <div className="bg-growth-600 rounded-[2.5rem] p-6 md:p-8 lg:p-10 border-2 border-growth-500 shadow-2xl shadow-growth-900/20 text-white flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-growth-500 to-transparent" />
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <BarChart className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8 lg:mb-10">
                <span className="text-sm font-bold text-growth-700 tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">09</span>
                <h3 className="font-serif text-2xl font-bold text-white">Grow</h3>
              </div>
              
              <div className="flex flex-col flex-1 min-h-[250px] justify-center gap-4">
                <div className="bg-growth-700/50 backdrop-blur-sm border border-growth-500 p-4 rounded-xl flex items-center justify-between text-xs font-bold tracking-widest text-growth-100">
                  <span>VISIBILITY</span>
                  <ArrowRight className="w-4 h-4 text-growth-300" />
                </div>
                <div className="bg-growth-700/50 backdrop-blur-sm border border-growth-500 p-4 rounded-xl flex items-center justify-between text-sm font-bold tracking-widest text-growth-100 ml-4">
                  <span>TRAFFIC</span>
                  <ArrowRight className="w-4 h-4 text-growth-300" />
                </div>
                <div className="bg-growth-700/50 backdrop-blur-sm border border-growth-500 p-4 rounded-xl flex items-center justify-between text-base font-bold tracking-widest text-white ml-8 shadow-inner">
                  <span>CUSTOMERS</span>
                  <ArrowRight className="w-5 h-5 text-growth-300" />
                </div>
                <div className="bg-white p-5 rounded-xl flex items-center justify-between text-3xl font-serif font-black text-growth-700 ml-12 shadow-xl mt-2 transform group-hover:translate-x-2 transition-transform">
                  <span>SCALE</span>
                  <Activity className="w-8 h-8 text-growth-500" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Framework Toolbox */}
        <div className="max-w-5xl mx-auto border-t-2 border-brand-100 pt-20">
          <div className="text-center mb-12">
            <h4 className="text-base font-bold tracking-widest text-brand-400 uppercase mb-4">Framework Toolbox</h4>
            <p className="text-base text-brand-600 max-w-2xl mx-auto font-medium">Established mental models I use as thinking tools within the broader strategy and execution process.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <span className="px-6 py-3 bg-white border-2 border-brand-100 rounded-xl text-sm font-bold text-brand-600 hover:border-strategy-400 hover:text-strategy-600 hover:shadow-md transition-all cursor-default">PESTEL</span>
            <span className="px-6 py-3 bg-white border-2 border-brand-100 rounded-xl text-sm font-bold text-brand-600 hover:border-strategy-400 hover:text-strategy-600 hover:shadow-md transition-all cursor-default">SWOT</span>
            <span className="px-6 py-3 bg-white border-2 border-brand-100 rounded-xl text-sm font-bold text-brand-600 hover:border-strategy-400 hover:text-strategy-600 hover:shadow-md transition-all cursor-default">STP</span>
            <span className="px-6 py-3 bg-white border-2 border-brand-100 rounded-xl text-sm font-bold text-brand-600 hover:border-strategy-400 hover:text-strategy-600 hover:shadow-md transition-all cursor-default">7Ps</span>
            <span className="px-6 py-3 bg-white border-2 border-brand-100 rounded-xl text-sm font-bold text-brand-600 hover:border-accent-400 hover:text-accent-600 hover:shadow-md transition-all cursor-default">AIDA</span>
            <span className="px-6 py-3 bg-white border-2 border-brand-100 rounded-xl text-sm font-bold text-brand-600 hover:border-accent-400 hover:text-accent-600 hover:shadow-md transition-all cursor-default">Customer Journey</span>
            <span className="px-6 py-3 bg-white border-2 border-brand-100 rounded-xl text-sm font-bold text-brand-600 hover:border-growth-400 hover:text-growth-600 hover:shadow-md transition-all cursor-default">PDCA</span>
            <span className="px-6 py-3 bg-white border-2 border-brand-100 rounded-xl text-sm font-bold text-brand-600 hover:border-growth-400 hover:text-growth-600 hover:shadow-md transition-all cursor-default">SMART</span>
            <span className="px-6 py-3 bg-white border-2 border-brand-100 rounded-xl text-sm font-bold text-brand-600 hover:border-accent-400 hover:text-accent-600 hover:shadow-md transition-all cursor-default">RACE</span>
            <span className="px-6 py-3 bg-white border-2 border-brand-100 rounded-xl text-sm font-bold text-brand-600 hover:border-strategy-400 hover:text-strategy-600 hover:shadow-md transition-all cursor-default">BCG Matrix</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
             {/* AIDA Funnel Concept */}
            <div className="bg-brand-50/50 rounded-[2rem] p-6 md:p-8 lg:p-10 border-2 border-brand-100 flex flex-col items-center hover:border-accent-200 transition-colors">
              <h5 className="text-sm font-bold text-brand-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                  <Target className="w-4 h-4" />
                </div>
                AIDA Funnel
              </h5>
              <div className="w-full max-w-[280px] flex flex-col items-center gap-1.5">
                <div className="w-full bg-accent-50 text-accent-700 text-xs font-bold py-3 text-center rounded-t-2xl border border-accent-100">AWARENESS</div>
                <div className="w-[85%] bg-accent-100 text-accent-800 text-xs font-bold py-3 text-center border border-accent-200">INTEREST</div>
                <div className="w-[70%] bg-accent-200 text-accent-900 text-xs font-bold py-3 text-center border border-accent-300">DESIRE</div>
                <div className="w-[55%] bg-accent-600 text-white text-sm font-black py-4 text-center rounded-b-2xl shadow-lg">ACTION</div>
              </div>
            </div>

            {/* Customer Journey Concept */}
            <div className="bg-brand-50/50 rounded-[2rem] p-6 md:p-8 lg:p-10 border-2 border-brand-100 flex flex-col items-center hover:border-strategy-200 transition-colors">
              <h5 className="text-sm font-bold text-brand-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-strategy-100 flex items-center justify-center text-strategy-600">
                  <Route className="w-4 h-4" />
                </div>
                Customer Journey
              </h5>
              <div className="flex flex-col w-full max-w-[300px] gap-3">
                <div className="flex items-center justify-between bg-white px-6 py-3 rounded-xl border border-brand-200 shadow-sm">
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Awareness</span>
                  <div className="w-2 h-2 rounded-full bg-strategy-300" />
                </div>
                <div className="flex items-center justify-between bg-white px-6 py-3 rounded-xl border border-brand-200 shadow-sm ml-4">
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Consideration</span>
                  <div className="w-2 h-2 rounded-full bg-strategy-400" />
                </div>
                <div className="flex items-center justify-between bg-strategy-600 px-6 py-4 rounded-xl border border-strategy-500 shadow-md ml-8 transform scale-105">
                  <span className="text-sm font-black text-white uppercase tracking-wider">Purchase</span>
                  <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>
                <div className="flex items-center justify-between bg-white px-6 py-3 rounded-xl border border-brand-200 shadow-sm ml-12">
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Experience</span>
                  <div className="w-2 h-2 rounded-full bg-growth-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
