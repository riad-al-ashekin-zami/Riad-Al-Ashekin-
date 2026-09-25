import React from 'react';
import { 
  Megaphone, 
  Search, 
  Cpu, 
  Layers,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Workflow
} from 'lucide-react';

interface FunnelStage {
  step: string;
  name: string;
  focus: string;
  roleInEcosystem: string;
  intersection: {
    discipline: 'SEO' | 'Technology' | 'Automation' | 'Software';
    contribution: string;
  };
}

const FUNNEL_STAGES: FunnelStage[] = [
  {
    step: '01',
    name: 'Business Foundation',
    focus: 'Positioning & Unit Economics',
    roleInEcosystem: 'Define enterprise margin targets and customer payback windows before allocating traffic spend.',
    intersection: {
      discipline: 'Technology',
      contribution: 'Establishes clean data models and tech budgets aligned with unit economics.'
    }
  },
  {
    step: '02',
    name: 'Customer Definition',
    focus: 'ICP & Buyer Problem Clusters',
    roleInEcosystem: 'Pinpoint exact executive buyers, their friction triggers, and their evaluation criteria.',
    intersection: {
      discipline: 'SEO',
      contribution: 'Maps real user search language, intent clusters, and commercial problem queries.'
    }
  },
  {
    step: '03',
    name: 'High-Value Offer',
    focus: 'Packaging & Risk-Reversals',
    roleInEcosystem: 'Structure deliverables, pricing tiers, and service guarantees that remove sales friction.',
    intersection: {
      discipline: 'Software',
      contribution: 'Translates manual workflows into repeatable digital deliverables or client portals.'
    }
  },
  {
    step: '04',
    name: 'Acquisition Channels',
    focus: 'Compounding Organic Search',
    roleInEcosystem: 'Capture prospects at peak commercial intent without being held hostage to rising paid PPC costs.',
    intersection: {
      discipline: 'SEO',
      contribution: 'Builds defensible topical authority that ranks and compounds year-over-year.'
    }
  },
  {
    step: '05',
    name: 'Conversion Architecture',
    focus: 'Speed & Frictionless UX',
    roleInEcosystem: 'Transform visitors into pipeline through sub-second page speeds, clear UX, and transparent proof.',
    intersection: {
      discipline: 'Technology',
      contribution: 'Engineers sub-second Core Web Vitals and frictionless inquiry pathways.'
    }
  },
  {
    step: '06',
    name: 'Retention & Expansion',
    focus: 'LTV, Referrals & Payback',
    roleInEcosystem: 'Deliver consistent value post-sale to turn one-time engagements into multi-year partnerships.',
    intersection: {
      discipline: 'Automation',
      contribution: 'Automates client onboarding, telemetry reporting, and health checks.'
    }
  }
];

export function CustomerAcquisitionEcosystem() {
  return (
    <section className="py-10 sm:py-14 bg-white border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-500 mb-1">
              <Megaphone className="w-3.5 h-3.5 text-brand-600" />
              <span>Integrated Growth Systems</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-brand-950 tracking-tight">
              Marketing Positioned Within The Full Business Engine
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-500 max-w-md">
            Organic visibility only creates compounding enterprise value when directly connected to technical performance, conversion architecture, and client fulfillment.
          </p>
        </div>

        {/* 6-Stage Journey Chain (100% Mobile Natural Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
          {FUNNEL_STAGES.map((stage) => (
            <div 
              key={stage.step}
              className="bg-[#fafafc] hover:bg-white rounded-2xl p-4 sm:p-5 border border-brand-200/80 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-accent-700 bg-accent-50 px-2 py-0.5 rounded border border-accent-200/60">
                    Phase {stage.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase font-bold text-brand-400">
                    Funnel Core
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-brand-950">
                    {stage.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-brand-500 mt-0.5">
                    {stage.focus}
                  </div>
                </div>

                <p className="text-xs text-brand-600 leading-relaxed">
                  {stage.roleInEcosystem}
                </p>
              </div>

              {/* Discipline Integration Footnote */}
              <div className="pt-2.5 border-t border-brand-200/60 bg-white p-3 rounded-xl border border-brand-200/60 space-y-1">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-800 flex items-center justify-between">
                  <span>How {stage.intersection.discipline} Connects:</span>
                  <span className="text-accent-700 font-bold">Integrated</span>
                </div>
                <p className="text-[11px] sm:text-xs text-brand-700 leading-relaxed">
                  {stage.intersection.contribution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Disciplinary Synergy Matrix */}
        <div className="bg-[#fafafc] rounded-2xl p-4 sm:p-5 border border-brand-200/90 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-brand-200/70">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-700 block">
                Cross-Disciplinary Synergy
              </span>
              <h3 className="text-sm sm:text-base font-bold text-brand-950">
                Where SEO, Technology, Automation &amp; Software Interlock
              </h3>
            </div>
            <span className="text-[11px] font-mono text-brand-400">
              4 Reinforcing Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* SEO */}
            <div className="bg-white p-3.5 rounded-xl border border-brand-200/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-xs">
                <Search className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Search (SEO)</span>
              </div>
              <p className="text-[11px] text-brand-600 leading-relaxed">
                Acts as a durable, compounding customer discovery moat aligned with bottom-funnel commercial buying intent.
              </p>
            </div>

            {/* Technology */}
            <div className="bg-white p-3.5 rounded-xl border border-brand-200/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-purple-900 font-bold text-xs">
                <Cpu className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>Technology</span>
              </div>
              <p className="text-[11px] text-brand-600 leading-relaxed">
                Provides sub-second speed, clean DOM rendering, mobile responsiveness, and reliable data pipelines.
              </p>
            </div>

            {/* Automation */}
            <div className="bg-white p-3.5 rounded-xl border border-brand-200/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs">
                <Workflow className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Automation</span>
              </div>
              <p className="text-[11px] text-brand-600 leading-relaxed">
                Silently bridges marketing leads to sales pipelines, executes CRM tagging, and runs customer onboarding.
              </p>
            </div>

            {/* Software */}
            <div className="bg-white p-3.5 rounded-xl border border-brand-200/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-blue-900 font-bold text-xs">
                <Layers className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Software</span>
              </div>
              <p className="text-[11px] text-brand-600 leading-relaxed">
                Transforms one-off service engagements into scalable digital tools, client portals, and self-service assets.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
