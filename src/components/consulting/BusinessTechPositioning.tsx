import React, { useState } from 'react';
import { 
  Briefcase, 
  Compass, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Search,
  Settings,
  Target
} from 'lucide-react';

const PILLARS = [
  {
    id: 'business',
    step: '01',
    name: 'Business Understanding',
    category: 'Foundational Diagnostics',
    icon: Briefcase,
    headline: 'Grounded in Commercial Reality',
    summary: 'Every effective solution begins with dissecting the business model, unit margins, customer lifetime value, and organizational constraints.',
    deliverables: [
      'Unit economics & CAC-to-LTV feasibility audit',
      'Operational capacity & team bandwidth review',
      'Identification of revenue bottlenecks vs. superficial symptoms'
    ],
    accent: 'brand'
  },
  {
    id: 'strategy',
    step: '02',
    name: 'Strategy Formulation',
    category: 'Objective Analysis',
    icon: Compass,
    headline: 'Defining Where and How to Win',
    summary: 'Before selecting tools or launching campaigns, we clarify the strategic priorities that provide the highest leverage for capital and effort.',
    deliverables: [
      'Strategic priority matrices (High-impact vs. low-friction)',
      'Competitive differentiation and positioning architecture',
      'Build vs. buy vs. partner opportunity evaluation'
    ],
    accent: 'accent'
  },
  {
    id: 'tech-marketing',
    step: '03',
    name: 'Technology & Marketing Assessment',
    category: 'Leverage Exploration',
    icon: Cpu,
    headline: 'Selecting the Exact Engine for the Job',
    summary: 'Evaluating whether the challenge requires custom software, automated workflow pipelines, or intent-driven organic search acquisition.',
    deliverables: [
      'Custom software vs. off-the-shelf SaaS appraisal',
      'AI & automation feasibility (eliminating manual bottlenecks)',
      'Organic search taxonomy & high-intent buyer journey mapping'
    ],
    accent: 'strategy'
  },
  {
    id: 'implementation',
    step: '04',
    name: 'Practical Implementation Direction',
    category: 'Execution & Governance',
    icon: Target,
    headline: 'Actionable Roadmaps, Not Shelfware',
    summary: 'Delivering clear technical architectures, vendor specifications, sprint roadmaps, and measurable KPIs that teams can execute reliably.',
    deliverables: [
      'Step-by-step phased deployment milestones',
      'Vendor-agnostic technical specification docs',
      'Continuous measurement, telemetry, and feedback loops'
    ],
    accent: 'growth'
  }
];

export function BusinessTechPositioning() {
  const [activeTab, setActiveTab] = useState(0);

  const activePillar = PILLARS[activeTab];
  const Icon = activePillar.icon;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-brand-200/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-xs font-bold uppercase tracking-wider text-accent-800">
            <Compass className="w-3.5 h-3.5 text-accent-600" />
            <span>Integrated Consulting Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-brand-950 tracking-tight">
            How Business, Strategy &amp; Technology Connect
          </h2>
          <p className="text-base sm:text-lg text-brand-600 leading-relaxed">
            I don’t prescribe software tools or marketing tactics in a vacuum. Every recommendation flows logically from understanding your commercial goals to formulating strategic leverage.
          </p>
        </div>

        {/* 4-Step Horizontal Process Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PILLARS.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-2xl text-left transition-all border relative flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-brand-950 text-white border-brand-950 shadow-soft-purple ring-2 ring-accent-500/20' 
                    : 'bg-brand-50/70 hover:bg-white text-brand-900 border-brand-200 hover:border-accent-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold tracking-widest ${isSelected ? 'text-accent-300' : 'text-brand-400'}`}>
                      STAGE {pillar.step}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isSelected ? 'bg-brand-800 text-accent-300' : 'bg-white border border-brand-200 text-brand-700'}`}>
                      <PillarIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className={`text-base font-bold mb-1.5 ${isSelected ? 'text-white' : 'text-brand-950'}`}>
                    {pillar.name}
                  </h3>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${isSelected ? 'text-brand-300' : 'text-brand-500'}`}>
                    {pillar.summary}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-[11px] font-bold flex items-center justify-between ${isSelected ? 'border-brand-800 text-accent-300' : 'border-brand-200/60 text-brand-500'}`}>
                  <span>{pillar.category}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-accent-300' : 'text-brand-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="bg-brand-50/60 rounded-3xl border border-brand-200 p-6 md:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-brand-200 text-xs font-mono font-bold text-brand-700">
                <span>Phase {activePillar.step} of 04</span>
                <span className="text-brand-300">•</span>
                <span className="text-accent-700">{activePillar.name}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-950">
                {activePillar.headline}
              </h3>
              
              <p className="text-sm sm:text-base text-brand-600 leading-relaxed">
                {activePillar.summary}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-3">
                  Key Deliverables &amp; Inquiries:
                </div>
                <div className="space-y-2">
                  {activePillar.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-brand-700">
                      <CheckCircle2 className="w-4 h-4 text-growth-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 border border-brand-200/80 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-brand-100">
                  <span className="text-xs font-bold text-brand-900 uppercase tracking-wider">
                    Diagnostic Contrast
                  </span>
                  <span className="text-[11px] font-semibold text-accent-700 bg-accent-50 px-2 py-0.5 rounded">
                    Consulting Mindset
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-red-50/50 border border-red-100 space-y-1.5">
                    <div className="font-bold text-red-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      The Fragmented Approach
                    </div>
                    <p className="text-brand-600 text-[11px] leading-relaxed">
                      Jumping directly to hiring an SEO vendor or coding custom apps before verifying whether the core proposition or workflow makes commercial sense.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-growth-50/60 border border-growth-200 space-y-1.5">
                    <div className="font-bold text-growth-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-growth-600" />
                      The Integrated Approach
                    </div>
                    <p className="text-brand-600 text-[11px] leading-relaxed">
                      Diagnosing unit economics and operating friction first. Recommending technology or marketing only when it genuinely delivers compounding business value.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-brand-400 font-medium">
                    “Never let a tool or channel dictate a business strategy.”
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
