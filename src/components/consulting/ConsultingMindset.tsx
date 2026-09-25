import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  FileCheck2, 
  SlidersHorizontal, 
  GitPullRequest, 
  HeartHandshake, 
  BarChart2, 
  Minimize2
} from 'lucide-react';

interface AdvisoryPrinciple {
  id: string;
  number: string;
  title: string;
  icon: any;
  coreRule: string;
  explanation: string;
}

const PRINCIPLES: AdvisoryPrinciple[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Understand The Business Before Technology',
    icon: Target,
    coreRule: 'Commercial diagnosis precedes any software discussion.',
    explanation: 'Never recommend tools until completely mapping customer journey, cash conversion cycle, and operating model.'
  },
  {
    id: 'p2',
    number: '02',
    title: 'Business Objective Comes Before The Tool',
    icon: SlidersHorizontal,
    coreRule: 'Tools serve goals; goals never serve tools.',
    explanation: 'Never adopt a tool because it is trendy. The business metric to be moved dictates stack additions.'
  },
  {
    id: 'p3',
    number: '03',
    title: 'Empirical Evidence Before Assumptions',
    icon: FileCheck2,
    coreRule: 'Logs and telemetry over boardroom hunches.',
    explanation: 'Decisions are grounded in server logs, real user query data, conversion drop-off events, and unit economics.'
  },
  {
    id: 'p4',
    number: '04',
    title: 'Context Before Standard Playbooks',
    icon: ShieldCheck,
    coreRule: 'Cookie-cutter strategies destroy competitive advantage.',
    explanation: 'What works for a venture-backed SaaS can bankrupt a regional firm. Strategy must fit capital and operational reality.'
  },
  {
    id: 'p5',
    number: '05',
    title: 'Build vs Buy on Requirements, Not Hype',
    icon: GitPullRequest,
    coreRule: 'Software is a liability until it generates verified leverage.',
    explanation: 'Only build custom platforms when off-the-shelf software compromises proprietary moats or unit economics.'
  },
  {
    id: 'p6',
    number: '06',
    title: 'Automate Tasks, Preserve Human Touch',
    icon: HeartHandshake,
    coreRule: 'Machines for deterministic tasks; humans for trust.',
    explanation: 'Automate invoice entry and webhook routing. Keep high-trust customer advisory and strategic counsel human.'
  },
  {
    id: 'p7',
    number: '07',
    title: 'Measure Business Impact, Not Vanity Numbers',
    icon: BarChart2,
    coreRule: 'Profit and pipeline over raw impressions.',
    explanation: 'A million impressions mean nothing if conversion is zero. Track qualified sales pipeline and organic gross margin.'
  },
  {
    id: 'p8',
    number: '08',
    title: 'Ruthlessly Eliminate Unnecessary Complexity',
    icon: Minimize2,
    coreRule: 'Elegance is the simplest system that solves the problem.',
    explanation: 'Every extra microservice or complex workflow adds maintenance risk. High-leverage moves strip away bloat.'
  }
];

export function ConsultingMindset() {
  return (
    <section className="py-10 sm:py-14 bg-white border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-500 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
              <span>Advisory Philosophy</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-brand-950 tracking-tight">
              The 8 Non-Negotiable Consulting Principles
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-500 max-w-md">
            Guiding principles governing every audit, strategic evaluation, and architectural recommendation delivered to founders and executives.
          </p>
        </div>

        {/* 8 Principles Grid (100% Mobile Natural) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {PRINCIPLES.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.id}
                className="bg-[#fafafc] hover:bg-white rounded-2xl p-4 sm:p-5 border border-brand-200/80 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-accent-700 bg-accent-50 px-2 py-0.5 rounded border border-accent-200/60">
                      Rule {p.number}
                    </span>
                    <Icon className="w-4 h-4 text-brand-400" />
                  </div>

                  <h3 className="text-sm font-bold text-brand-950 leading-snug">
                    {p.title}
                  </h3>

                  <div className="text-[11px] font-mono text-brand-800 font-semibold bg-white p-2 rounded-lg border border-brand-200/60 leading-snug">
                    "{p.coreRule}"
                  </div>
                </div>

                <p className="text-xs text-brand-600 leading-relaxed pt-2 border-t border-brand-100">
                  {p.explanation}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
