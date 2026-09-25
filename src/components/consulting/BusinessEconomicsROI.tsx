import React from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Scale, 
  Clock, 
  ShieldCheck, 
  Layers,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

interface EconomicMetric {
  title: string;
  concept: string;
  icon: any;
  evaluationModel: string;
  typicalMisstep: string;
  advisoryOutcome: string;
}

const ECONOMIC_METRICS: EconomicMetric[] = [
  {
    title: 'CAC vs. Lifetime Value (LTV)',
    concept: 'CAC : LTV & Payback Velocity',
    icon: TrendingUp,
    evaluationModel: 'Evaluating whether organic search, content assets, and conversion paths recover acquisition costs within a healthy 6–12 month window.',
    typicalMisstep: 'Over-spending on auction-based PPC ads with shrinking margins while neglecting organic compounding assets that reduce blended CAC.',
    advisoryOutcome: 'Establish durable organic channels that systematically bring down blended CAC and insulate the business from ad inflation.'
  },
  {
    title: 'Total Cost of Ownership (TCO)',
    concept: '3-Year TCO & Subscription Creep',
    icon: Layers,
    evaluationModel: 'Calculating the full cost of software: recurring SaaS licenses + internal maintenance hours + integration friction + future switching costs.',
    typicalMisstep: 'Stacking 15 distinct micro-SaaS tools at $200–$800/mo each, creating bloated recurring expenses and fragmented data silos.',
    advisoryOutcome: 'Audit and consolidate redundant subscriptions into unified core systems, cutting ongoing overhead.'
  },
  {
    title: 'Gross Margin Protection',
    concept: 'Unit Economics & Delivery Efficiency',
    icon: DollarSign,
    evaluationModel: 'Ensuring that as sales and client volume increase, service delivery costs do not scale 1:1 with operational payroll.',
    typicalMisstep: 'Assuming top-line revenue growth equals enterprise value, only to find operating margins collapsing from manual labor bottlenecks.',
    advisoryOutcome: 'Deploy automated workflow bridges and self-service touchpoints that protect gross margins as volume scales.'
  },
  {
    title: 'Operational Capacity & Labor Hours',
    concept: 'Human Capital Reallocation',
    icon: Clock,
    evaluationModel: 'Quantifying the exact weekly payroll hours recovered when manual data entry, report compilation, and status checks are automated.',
    typicalMisstep: 'Treating internal team hours as "free" while highly-paid specialists spend 30% of their week copy-pasting spreadsheet records.',
    advisoryOutcome: 'Free up 100+ specialist hours per quarter, redirecting high-value talent toward revenue generation and client delight.'
  },
  {
    title: 'Capital Payback & Efficiency',
    concept: 'Breakeven on Strategic Investments',
    icon: Scale,
    evaluationModel: 'Defining strict timeframes where every dollar invested in consulting, technology, or SEO must be recouped in net gross profit.',
    typicalMisstep: 'Committing to multi-year custom software builds that consume capital for 18 months before delivering validated customer feedback.',
    advisoryOutcome: 'Phase initiatives into 60-to-90-day deliverable sprints with early validation checkpoints, avoiding sunk-cost traps.'
  },
  {
    title: 'Downside Risk & Asset Preservation',
    concept: 'Enterprise Asset Safeguards',
    icon: ShieldCheck,
    evaluationModel: 'Protecting existing organic traffic revenue, customer databases, and search authority during major platform overhauls.',
    typicalMisstep: 'Executing website redesigns without 1:1 URL redirects, schema preservation, or indexing audits, causing catastrophic traffic collapses.',
    advisoryOutcome: 'Architect airtight migration protocols that preserve search equity, domain authority, and uninterrupted customer checkout flows.'
  }
];

export function BusinessEconomicsROI() {
  return (
    <section className="py-10 sm:py-14 bg-[#fafafc] border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-500 mb-1">
              <Calculator className="w-3.5 h-3.5 text-brand-600" />
              <span>Commercial Discipline</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-brand-950 tracking-tight">
              Technology Evaluated Through Business Economics
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-500 max-w-md">
            Software architecture and search optimization are not vanity projects. Every technical decision must justify its allocation on the profit &amp; loss statement.
          </p>
        </div>

        {/* 6 Economic Metrics Grid (100% Mobile Natural) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-5">
          {ECONOMIC_METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-200/90 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-200 text-brand-900 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-brand-500 bg-brand-50 px-2 py-0.5 rounded border border-brand-200/60 truncate">
                      {metric.concept}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-brand-950">
                    {metric.title}
                  </h3>

                  <p className="text-xs text-brand-600 leading-relaxed">
                    {metric.evaluationModel}
                  </p>
                </div>

                <div className="space-y-2 pt-2.5 border-t border-brand-100">
                  {/* Trap */}
                  <div className="text-xs bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/60 space-y-0.5">
                    <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800">
                      <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" />
                      <span>Commercial Trap:</span>
                    </div>
                    <p className="text-amber-950 leading-snug text-[11px] sm:text-xs">
                      {metric.typicalMisstep}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="text-xs bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/60 space-y-0.5">
                    <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>Advisory Outcome:</span>
                    </div>
                    <p className="text-emerald-950 font-medium leading-snug text-[11px] sm:text-xs">
                      {metric.advisoryOutcome}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Advisory Principle Strip */}
        <div className="bg-white border border-brand-200/90 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-xs font-bold text-brand-900 uppercase tracking-wide">
              Pragmatic Metric Philosophy:
            </span>
            <span className="text-xs text-brand-600 hidden sm:inline">
              Zero vanity metrics. We measure progress against unit economics, payback horizons, and verified P&amp;L impact.
            </span>
          </div>
          <p className="text-xs text-brand-600 sm:hidden">
            Zero vanity metrics. We measure progress against unit economics, payback horizons, and verified P&amp;L impact.
          </p>
          <div className="shrink-0 text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 self-start sm:self-auto">
            Zero Vanity Metrics
          </div>
        </div>

      </div>
    </section>
  );
}
