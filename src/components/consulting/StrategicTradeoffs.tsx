import React, { useState } from 'react';
import { 
  Scale, 
  Check, 
  AlertTriangle, 
  ShieldCheck,
  Cpu,
  Workflow,
  TrendingUp,
  Gauge,
  DollarSign
} from 'lucide-react';

interface Tradeoff {
  id: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  icon: any;
  sideA: {
    label: string;
    bestWhen: string[];
    riskIfMisapplied: string;
  };
  sideB: {
    label: string;
    bestWhen: string[];
    riskIfMisapplied: string;
  };
  strategicVerdict: string;
}

const TRADEOFFS: Tradeoff[] = [
  {
    id: 'build-vs-saas',
    shortLabel: 'Build vs SaaS',
    title: 'Custom Software vs. Off-the-Shelf SaaS',
    subtitle: 'Architecture & Capital Allocation',
    icon: Cpu,
    sideA: {
      label: 'Custom Software (Build)',
      bestWhen: [
        'Workflow is your core proprietary competitive moat',
        'Existing SaaS tools demand 6-figure recurring subscriptions with rigid caps',
        'You have in-house engineering or a trusted technical partner'
      ],
      riskIfMisapplied: 'High upfront capital expenditure and ongoing maintenance debt for non-core features.'
    },
    sideB: {
      label: 'Off-the-Shelf SaaS (Subscribe)',
      bestWhen: [
        'The function is a standard commodity (CRM, accounting, basic helpdesk)',
        'Immediate time-to-market is critical to preserve cash runway',
        'Internal workflow patterns are still evolving rapidly'
      ],
      riskIfMisapplied: 'Fragmented data silos, vendor lock-in, and unpredictable per-seat pricing inflation.'
    },
    strategicVerdict: 'Build your core differentiator; buy your commodities. Never build custom software to solve a problem an API already handles reliably.'
  },
  {
    id: 'automation-vs-manual',
    shortLabel: 'AI vs Manual',
    title: 'Intelligent Automation vs. Manual Human Workflow',
    subtitle: 'Operational Scaling & Margin Health',
    icon: Workflow,
    sideA: {
      label: 'AI & Scripted Automation',
      bestWhen: [
        'Process is high-volume, structured, and rules-based (data ingestion, reporting)',
        'Human error rates directly affect customer SLA or billing accuracy',
        'Scaling volume would otherwise require linear headcount expansion'
      ],
      riskIfMisapplied: 'Automating a broken process creates high-speed chaos. Fragile automations break silently.'
    },
    sideB: {
      label: 'Deliberate Manual Workflow',
      bestWhen: [
        'Nuance, empathy, and high-context judgment are required (high-ticket sales, disputes)',
        'The process is too young to have stable business logic',
        'Volume is low enough that building custom automation costs more than human time'
      ],
      riskIfMisapplied: 'Employee burnout, slow turnaround times, and severe margin compression as volume grows.'
    },
    strategicVerdict: 'Stabilize the workflow manually first. Once patterns repeat consistently, automate ruthlessly to protect operating margins.'
  },
  {
    id: 'seo-vs-paid',
    shortLabel: 'SEO vs Paid PPC',
    title: 'Organic Search (SEO) vs. Paid Acquisition (PPC)',
    subtitle: 'Customer Acquisition Economics',
    icon: TrendingUp,
    sideA: {
      label: 'Organic Search (SEO & Topical Authority)',
      bestWhen: [
        'Customers actively research high-intent problem phrases on Google',
        'You want compounding pipeline where customer acquisition cost decreases over time',
        'You have the cash runway to support a 4-to-9 month compounding horizon'
      ],
      riskIfMisapplied: 'Targeting zero-intent vanity keywords that inflate traffic numbers without generating revenue.'
    },
    sideB: {
      label: 'Paid Acquisition (PPC & Performance Ads)',
      bestWhen: [
        'Instant validation of new positioning, pricing, or product landing pages is needed',
        'Targeting hyper-specific account lists (ABM / LinkedIn ads)',
        'Promoting time-sensitive events or seasonal campaigns'
      ],
      riskIfMisapplied: 'Addictive treadmill where pipeline vanishes the exact second ad spend pauses.'
    },
    strategicVerdict: 'Use paid ads for rapid hypothesis validation and immediate demand; invest in technical SEO to build an enduring, defensible acquisition asset.'
  },
  {
    id: 'short-vs-long',
    shortLabel: 'Quick-Win vs Scale',
    title: 'Tactical Quick-Win vs. Scalable System',
    subtitle: 'Technical Debt & Runway Balance',
    icon: Gauge,
    sideA: {
      label: 'Tactical Quick-Win',
      bestWhen: [
        'Cash runway demands immediate revenue within 30 to 60 days',
        'Testing whether customer demand exists before investing in infrastructure',
        'Removing a critical operational bottleneck right now'
      ],
      riskIfMisapplied: 'Accumulating crippling technical debt that slows down all future product velocity.'
    },
    sideB: {
      label: 'Scalable System & Architecture',
      bestWhen: [
        'The business model is proven and entering multi-year expansion',
        'Multiple teams or stakeholders depend on database consistency',
        'Customer trust and compliance require enterprise stability'
      ],
      riskIfMisapplied: 'Over-engineering for hypothetical scale that the business may never survive to see.'
    },
    strategicVerdict: 'Deploy quick wins with intentional expiration dates. Document the debt, set a trigger metric, and transition to scalable systems when product-market fit is proven.'
  },
  {
    id: 'cost-vs-value',
    shortLabel: 'Low Cost vs Value',
    title: 'Technology Cost vs. True Commercial Value',
    subtitle: 'Total Cost of Ownership (TCO) Appraisal',
    icon: DollarSign,
    sideA: {
      label: 'Low Direct Upfront Cost',
      bestWhen: [
        'Bootstrap stage with minimal capital reserves',
        'Experimenting with disposable prototypes',
        'Simple static marketing sites'
      ],
      riskIfMisapplied: 'Hidden downstream costs in developer hours, fragile plugins, slow load times, and poor security.'
    },
    sideB: {
      label: 'High Direct Value Architecture',
      bestWhen: [
        'High transaction volume where a 1% conversion increase yields 6-figure gross margin',
        'Organic search revenue is sensitive to sub-second Core Web Vitals performance',
        'Enterprise security and data governance are mandatory'
      ],
      riskIfMisapplied: 'Spending precious capital on enterprise-grade tools when simpler setups would suffice.'
    },
    strategicVerdict: 'Measure technology not by its license fee or invoice price, but by its net commercial contribution to gross margin and operational leverage.'
  }
];

export function StrategicTradeoffs() {
  const [selectedTradeoff, setSelectedTradeoff] = useState<string>('build-vs-saas');

  const current = TRADEOFFS.find(t => t.id === selectedTradeoff) || TRADEOFFS[0];

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-500 mb-1">
              <Scale className="w-3.5 h-3.5 text-brand-600" />
              <span>Strategic Trade-Off Analysis</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-brand-950 tracking-tight">
              Navigating Critical Business &amp; Tech Decisions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-500 max-w-md">
            There are no universal silver bullets—only trade-offs. I help founders evaluate these dilemmas objectively based on runway, team, and unit economics.
          </p>
        </div>

        {/* 100% Mobile Scannable Dilemma Selector (Clean Grid on Mobile & Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-5">
          {TRADEOFFS.map((item) => {
            const isSelected = selectedTradeoff === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedTradeoff(item.id)}
                className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                  isSelected 
                    ? 'bg-brand-950 text-white border-brand-950 shadow-2xs' 
                    : 'bg-[#fafafc] hover:bg-white text-brand-800 border-brand-200/80 hover:border-brand-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-accent-300' : 'text-brand-500'}`} />
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-brand-300' : 'text-brand-400'}`}>
                    Trade-Off
                  </span>
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-2">
                  {item.shortLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Tradeoff Board */}
        <div className="bg-[#fafafc] rounded-2xl border border-brand-200/90 p-4 sm:p-6 shadow-2xs space-y-4">
          
          {/* Top Detail Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-3 border-b border-brand-200/70">
            <div>
              <span className="text-[10px] font-mono font-bold text-accent-700 uppercase tracking-wider block">
                {current.subtitle}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-brand-950">
                {current.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-brand-400">
              Objective Comparison
            </span>
          </div>

          {/* Side-by-Side Comparison (Stacked on Mobile, 2 Columns on Tablet/Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            
            {/* Side A */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-brand-200/80 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-brand-100 mb-3">
                  <h4 className="font-bold text-brand-950 text-sm sm:text-base">
                    {current.sideA.label}
                  </h4>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200/60">
                    Option A
                  </span>
                </div>

                <div className="space-y-1.5 mb-3">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-500">
                    Best Suited When:
                  </div>
                  {current.sideA.bestWhen.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-brand-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 border-t border-brand-100 text-xs bg-rose-50/60 p-2.5 rounded-lg border border-rose-200/60">
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-800 mb-0.5">
                  <AlertTriangle className="w-3 h-3 text-rose-500" />
                  <span>Key Risk If Misapplied:</span>
                </div>
                <p className="text-rose-900 leading-snug">
                  {current.sideA.riskIfMisapplied}
                </p>
              </div>
            </div>

            {/* Side B */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-brand-200/80 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-brand-100 mb-3">
                  <h4 className="font-bold text-brand-950 text-sm sm:text-base">
                    {current.sideB.label}
                  </h4>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200/60">
                    Option B
                  </span>
                </div>

                <div className="space-y-1.5 mb-3">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-500">
                    Best Suited When:
                  </div>
                  {current.sideB.bestWhen.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-brand-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 border-t border-brand-100 text-xs bg-rose-50/60 p-2.5 rounded-lg border border-rose-200/60">
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-800 mb-0.5">
                  <AlertTriangle className="w-3 h-3 text-rose-500" />
                  <span>Key Risk If Misapplied:</span>
                </div>
                <p className="text-rose-900 leading-snug">
                  {current.sideB.riskIfMisapplied}
                </p>
              </div>
            </div>

          </div>

          {/* Strategic Verdict Strip */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-brand-950 text-white flex items-start sm:items-center gap-3 border border-brand-900 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-accent-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="flex-1 text-xs sm:text-sm leading-relaxed">
              <span className="font-bold text-accent-300 uppercase tracking-wider mr-1.5 font-mono text-[10px] sm:text-[11px] block sm:inline">
                Strategic Verdict:
              </span>
              <span className="text-brand-100 font-medium">
                {current.strategicVerdict}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
