import React, { useState } from 'react';
import { 
  Briefcase, 
  Cpu, 
  TrendingUp, 
  Search, 
  Workflow, 
  Layers, 
  ArrowRight, 
  GitMerge,
  Code2,
  Check
} from 'lucide-react';

interface Discipline {
  id: string;
  name: string;
  role: string;
  icon: any;
  color: string;
  description: string;
  bridgesTo: string[];
  practicalSynergy: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: 'business',
    name: 'Business Strategy',
    role: 'The Commercial Foundation',
    icon: Briefcase,
    color: 'accent',
    description: 'Auditing revenue models, unit economics, payback periods, and core competitive advantages.',
    bridgesTo: ['tech-strategy', 'marketing', 'seo'],
    practicalSynergy: 'Ensures that engineering and search campaigns serve real gross-margin and profit milestones rather than vanity metrics.'
  },
  {
    id: 'tech-strategy',
    name: 'Technology Strategy',
    role: 'Architectural Direction',
    icon: Cpu,
    color: 'strategy',
    description: 'Evaluating build vs. buy, cloud infrastructures, API capabilities, and scalable framework choices.',
    bridgesTo: ['business', 'software', 'ai-automation'],
    practicalSynergy: 'Aligns software investments directly with company runway, operational bandwidth, and maintainability.'
  },
  {
    id: 'marketing',
    name: 'Marketing Strategy',
    role: 'Customer Acquisition & Positioning',
    icon: TrendingUp,
    color: 'growth',
    description: 'Framing market positioning, value propositions, buyer journeys, and multichannel discovery.',
    bridgesTo: ['business', 'seo', 'software'],
    practicalSynergy: 'Transforms technical platform features into compelling buyer narratives that shorten sales cycles.'
  },
  {
    id: 'seo',
    name: 'SEO Consultancy',
    role: 'Intent-Driven Search Engine Demand',
    icon: Search,
    color: 'accent',
    description: 'Engineering semantic topic clusters, technical crawl efficiency, and programmatic search architecture.',
    bridgesTo: ['business', 'marketing', 'software'],
    practicalSynergy: 'Harvests verified search demand from high-intent buyers, feeding predictable qualified pipeline into the business.'
  },
  {
    id: 'ai-automation',
    name: 'AI Integration & Automation',
    role: 'Workflow Multiplication',
    icon: Workflow,
    color: 'strategy',
    description: 'Designing bespoke AI integrations, smart scrapers, LLM-based data pipelines, and internal automations.',
    bridgesTo: ['tech-strategy', 'software', 'business'],
    practicalSynergy: 'Removes repetitive operational bottlenecks and scales content or data processing without ballooning headcount.'
  },
  {
    id: 'software',
    name: 'Software & Digital Solutions',
    role: 'Functional Execution',
    icon: Code2,
    color: 'brand',
    description: 'Deep knowledge of Next.js, Laravel, WordPress, and web apps from hands-on engineering background.',
    bridgesTo: ['tech-strategy', 'seo', 'ai-automation'],
    practicalSynergy: 'Allows strategic recommendations to be technically feasible, audit-ready, and directly implementable by engineering teams.'
  }
];

export function ExpertiseConnectionMap() {
  const [activeId, setActiveId] = useState<string>('business');

  const selected = DISCIPLINES.find(d => d.id === activeId) || DISCIPLINES[0];
  const SelectedIcon = selected.icon;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-brand-200/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 border border-brand-200 text-xs font-bold uppercase tracking-wider text-brand-800">
            <GitMerge className="w-3.5 h-3.5 text-accent-700" />
            <span>Cross-Disciplinary Synergy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-brand-950 tracking-tight">
            How My Core Disciplines Intersect
          </h2>
          <p className="text-base sm:text-lg text-brand-600 leading-relaxed">
            Real business challenges rarely fit neatly into a single bucket. By operating across business, technology, search, and software, I bridge the gap between executive strategy and technical execution.
          </p>
        </div>

        {/* Interactive Matrix / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {DISCIPLINES.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === activeId;
            const isBridged = selected.bridgesTo.includes(item.id);

            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`p-6 rounded-2xl text-left transition-all border flex flex-col justify-between relative ${
                  isSelected 
                    ? 'bg-brand-950 text-white border-brand-950 shadow-soft-purple ring-2 ring-accent-500/30' 
                    : isBridged
                    ? 'bg-accent-50/40 hover:bg-white text-brand-900 border-accent-200'
                    : 'bg-brand-50/60 hover:bg-white text-brand-900 border-brand-200/80 hover:border-brand-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected 
                        ? 'bg-brand-800 text-accent-300' 
                        : 'bg-white border border-brand-200 text-brand-700 shadow-2xs'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-accent-600/30 text-accent-300 px-2 py-0.5 rounded-full border border-accent-400/30">
                        Selected Focus
                      </span>
                    )}
                    {!isSelected && isBridged && (
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-accent-100 text-accent-800 px-2 py-0.5 rounded-full font-bold">
                        Direct Connection
                      </span>
                    )}
                  </div>

                  <div className={`text-xs font-mono mb-1 ${isSelected ? 'text-brand-400' : 'text-brand-500'}`}>
                    {item.role}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isSelected ? 'text-white' : 'text-brand-950'}`}>
                    {item.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-brand-300' : 'text-brand-600'}`}>
                    {item.description}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t text-[11px] font-bold flex items-center justify-between ${
                  isSelected ? 'border-brand-800 text-accent-300' : 'border-brand-200/60 text-brand-500'
                }`}>
                  <span>Click to view connections</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Discipline Synergy Spotlight */}
        <div className="bg-brand-50 rounded-3xl border border-brand-200 p-6 md:p-8 lg:p-10 shadow-2xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-brand-200/80 mb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-brand-950 text-white flex items-center justify-center shadow-sm">
                <SelectedIcon className="w-6 h-6 text-accent-300" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-accent-700 uppercase tracking-wider">
                  Active Discipline Anchor
                </span>
                <h3 className="text-2xl font-bold text-brand-950">
                  {selected.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="text-brand-500 font-semibold">Direct Cross-Connections:</span>
              {selected.bridgesTo.map(bridgeId => {
                const target = DISCIPLINES.find(d => d.id === bridgeId);
                if (!target) return null;
                return (
                  <button
                    key={bridgeId}
                    onClick={() => setActiveId(bridgeId)}
                    className="px-2.5 py-1 rounded-lg bg-white border border-brand-200 text-brand-800 hover:border-accent-400 font-medium transition-colors"
                  >
                    + {target.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                The Practical Commercial Impact:
              </span>
              <p className="text-sm md:text-base text-brand-800 leading-relaxed font-medium">
                {selected.practicalSynergy}
              </p>
            </div>
            <div className="md:col-span-4 bg-white rounded-2xl p-4 border border-brand-200 shadow-2xs text-xs text-brand-600 space-y-2">
              <div className="font-bold text-brand-950 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-growth-600" />
                Why This Matters to Clients
              </div>
              <p className="text-[11px] leading-relaxed">
                You never have to translate between a high-level strategist and an engineering agency. Recommendations are both commercially strategic and technically viable.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
