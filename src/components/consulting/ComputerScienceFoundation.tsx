import React from 'react';
import { 
  Terminal, 
  Layers, 
  Database, 
  Network, 
  Cpu, 
  ShieldCheck, 
  GitBranch, 
  CheckCircle2, 
  ShieldAlert
} from 'lucide-react';

interface TechPillar {
  title: string;
  concept: string;
  icon: any;
  depth: string;
  executiveImpact: string;
}

const TECH_PILLARS: TechPillar[] = [
  {
    title: 'Systems & Architecture',
    concept: 'Monolithic, Serverless & Edge',
    icon: Layers,
    depth: 'Evaluating modern web stacks (Next.js, decoupled APIs, micro-services) against true operating needs.',
    executiveImpact: 'Prevents premature re-architectures and stops teams from adopting trendy, high-cost tech stacks.'
  },
  {
    title: 'Databases & Schemas',
    concept: 'PostgreSQL, Normalization & Caching',
    icon: Database,
    depth: 'Relational data integrity, Redis caching, indexing, and query optimization for high concurrency.',
    executiveImpact: 'Guarantees critical transaction, attribution, and customer data never get locked in vendor silos.'
  },
  {
    title: 'APIs & Webhook Pipelines',
    concept: 'REST, GraphQL & Idempotency',
    icon: Network,
    depth: 'Deterministic API synchronization, rate-limiting buffers, and robust failure recovery between apps.',
    executiveImpact: 'Eliminates repetitive manual CSV transfers with automated, zero-error data handoffs.'
  },
  {
    title: 'Performance & Core Web Vitals',
    concept: 'TTFB, LCP, SSR & Edge Caching',
    icon: Cpu,
    depth: 'DOM optimization, edge asset delivery, critical rendering path tuning, and database profiling.',
    executiveImpact: 'Directly lifts organic search crawlability, Google rankings, and visitor checkout conversion rates.'
  },
  {
    title: 'Security & Governance',
    concept: 'RBAC, Secret Hygiene & OWASP',
    icon: ShieldCheck,
    depth: 'Strict authentication, role-based access, API key governance, and data privacy safeguards.',
    executiveImpact: 'Protects valuation and enterprise trust by eliminating security vulnerabilities before audits.'
  },
  {
    title: 'Technical Debt Control',
    concept: 'CI/CD, Code Hygiene & Modularity',
    icon: GitBranch,
    depth: 'Automated regression tests, dependency deprecation schedules, and modular code reviews.',
    executiveImpact: 'Protects engineering velocity over years 2–5, preventing costly "burn it down and restart" rewrites.'
  }
];

const EXECUTIVE_PROTECTIONS = [
  {
    num: '01',
    title: 'Spotting Agency Overselling',
    detail: 'Detect when vendors pitch expensive custom builds when an API integration solves it at a fraction of the cost.'
  },
  {
    num: '02',
    title: 'Feasibility & True Scoping',
    detail: 'Assess whether complex technical features or programmatic SEO can genuinely be shipped and maintained on budget.'
  },
  {
    num: '03',
    title: 'Bilingual Dialogue',
    detail: 'Translate strategic board goals (EBITDA, CAC, LTV) into technical execution for engineering teams.'
  },
  {
    num: '04',
    title: 'Preventing Bad Schemas',
    detail: 'Stop faulty data schemas and brittle software designs before permanent technical debt is committed.'
  }
];

export function ComputerScienceFoundation() {
  return (
    <section className="py-10 sm:py-14 bg-[#fafafc] border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-500 mb-1">
              <Terminal className="w-3.5 h-3.5 text-brand-600" />
              <span>Underneath The Interface</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-brand-950 tracking-tight">
              The Computer Science Foundation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-500 max-w-md">
            I don’t treat technology as a black box. A computer science grounding ensures every strategic recommendation is technically feasible and engineered for scale.
          </p>
        </div>

        {/* 6 Technical Pillars Grid (100% Mobile Natural) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
          {TECH_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-200/90 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-200 text-brand-900 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent-700" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-500 bg-brand-50 px-2 py-0.5 rounded border border-brand-200/60 truncate">
                      {pillar.concept}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-brand-950">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-brand-600 leading-relaxed">
                    {pillar.depth}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-brand-100 space-y-0.5 bg-brand-50/50 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-3 sm:p-3.5 rounded-b-2xl">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Executive Impact:</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-brand-800 font-medium leading-normal">
                    {pillar.executiveImpact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Executive Protection Strip */}
        <div className="bg-white rounded-2xl border border-brand-200/90 p-4 sm:p-5 shadow-2xs">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-brand-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-xs font-bold text-brand-900 uppercase tracking-wide">
              Why This Protects Founders &amp; Executive Leadership:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {EXECUTIVE_PROTECTIONS.map((item) => (
              <div key={item.num} className="bg-[#fafafc] p-3 rounded-xl border border-brand-200/60 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs font-bold text-accent-700 bg-accent-50 px-1.5 py-0.2 rounded border border-accent-200/60">
                    {item.num}
                  </span>
                  <span className="text-xs font-bold text-brand-900 truncate">
                    {item.title}
                  </span>
                </div>
                <p className="text-[11px] text-brand-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
