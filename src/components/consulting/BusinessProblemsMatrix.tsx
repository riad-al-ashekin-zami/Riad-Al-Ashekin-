import React, { useState } from 'react';
import { 
  Briefcase, 
  Cpu, 
  TrendingUp, 
  Workflow, 
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Layers
} from 'lucide-react';

interface ProblemDimension {
  id: string;
  category: string;
  shortLabel: string;
  icon: any;
  color: string;
  badgeColor: string;
  headline: string;
  coreFrictions: {
    friction: string;
    fix: string;
  }[];
}

const PROBLEM_DIMENSIONS: ProblemDimension[] = [
  {
    id: 'business',
    category: 'Business & Operations',
    shortLabel: 'Business Ops',
    icon: Briefcase,
    color: 'text-blue-600',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    headline: 'Operational drag, margin leakage & manual processes',
    coreFrictions: [
      {
        friction: 'Manual data transfers and fragmented tool stacks',
        fix: 'Unified workflow architecture with single-source-of-truth protocols.'
      },
      {
        friction: 'Top-line growth while net profit margins shrink',
        fix: 'Unit economic audit & automated service delivery handoffs.'
      },
      {
        friction: 'Client drop-off during onboarding phases',
        fix: 'Streamlined milestone tracking with automated task triggers.'
      }
    ]
  },
  {
    id: 'technology',
    category: 'Technology & Systems',
    shortLabel: 'Tech & Systems',
    icon: Cpu,
    color: 'text-purple-600',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    headline: 'Technical debt, premature architecture & vendor lock-in',
    coreFrictions: [
      {
        friction: 'Uncertainty around custom development vs. off-the-shelf SaaS',
        fix: 'Objective 3-year TCO audit assessing maintenance risk and IP value.'
      },
      {
        friction: 'Web systems degrading under load with poor Core Web Vitals',
        fix: 'Database query refactoring, edge caching, and asset optimization.'
      },
      {
        friction: 'Agency lock-in with unmaintainable proprietary codebases',
        fix: 'Architecture audit and securing full client repository ownership.'
      }
    ]
  },
  {
    id: 'marketing',
    category: 'Marketing & Organic Growth',
    shortLabel: 'Organic Search',
    icon: TrendingUp,
    color: 'text-emerald-600',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    headline: 'Paid ad dependency, vanity traffic & missing funnels',
    coreFrictions: [
      {
        friction: 'Lead volume drops immediately when paid ads pause',
        fix: 'Durable semantic search assets that compound organic demand.'
      },
      {
        friction: 'High website traffic that fails to produce sales inquiries',
        fix: 'Restructuring keywords around high-converting commercial intent.'
      },
      {
        friction: 'Search traffic wiped out after algorithmic core updates',
        fix: 'Re-engineering site architecture, schema markup, and entity authority.'
      }
    ]
  },
  {
    id: 'automation',
    category: 'AI & Workflow Automation',
    shortLabel: 'AI & Automations',
    icon: Workflow,
    color: 'text-amber-600',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    headline: 'Repetitive labor & ungrounded, hallucinating AI pilots',
    coreFrictions: [
      {
        friction: 'Staff spending 15+ hours weekly copying data across apps',
        fix: 'Deterministic webhook pipelines with automated error monitoring.'
      },
      {
        friction: 'AI chatbots that hallucinate and compromise company trust',
        fix: 'Grounded retrieval pipelines (RAG) with verified citations.'
      },
      {
        friction: 'Paying for redundant, unused AI SaaS subscriptions',
        fix: 'Tool consolidation based on measurable productivity benchmarks.'
      }
    ]
  }
];

export function BusinessProblemsMatrix() {
  const [activeTab, setActiveTab] = useState<string>('business');

  const activeDimension = PROBLEM_DIMENSIONS.find(d => d.id === activeTab) || PROBLEM_DIMENSIONS[0];
  const Icon = activeDimension.icon;

  return (
    <section className="py-12 sm:py-16 bg-[#fafafc] border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-500 mb-1.5">
              <Layers className="w-3.5 h-3.5 text-brand-600" />
              <span>Problem Diagnosis</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-brand-950 tracking-tight">
              Problems I Solve
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-500 max-w-md leading-relaxed">
            Most business challenges intersect across departments: a marketing drop is often technical; a tech delay is frequently an unmapped process.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
          {PROBLEM_DIMENSIONS.map((dim) => {
            const TabIcon = dim.icon;
            const isActive = activeTab === dim.id;
            return (
              <button
                key={dim.id}
                onClick={() => setActiveTab(dim.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                  isActive
                    ? 'bg-white border-brand-300 shadow-xs ring-1 ring-brand-300'
                    : 'bg-white/60 border-brand-200/70 hover:bg-white text-brand-600'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-brand-950 text-white' : 'bg-brand-100 text-brand-600'
                }`}>
                  <TabIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className={`text-sm font-bold truncate ${isActive ? 'text-brand-950' : 'text-brand-700'}`}>
                    {dim.shortLabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel - Crisp 3-Row List */}
        <div className="bg-white rounded-2xl border border-brand-200/90 p-5 sm:p-7 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-brand-100">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${activeDimension.badgeColor}`}>
                {activeDimension.category}
              </span>
              <span className="text-sm text-brand-400 hidden sm:inline">•</span>
              <span className="text-sm sm:text-base font-semibold text-brand-800">{activeDimension.headline}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeDimension.coreFrictions.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#fafafc] rounded-xl p-4 border border-brand-200/70 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-rose-700 text-xs font-bold uppercase font-mono">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Bottleneck</span>
                  </div>
                  <p className="text-sm font-medium text-brand-950 leading-snug">
                    {item.friction}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-200/60 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold uppercase font-mono">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Strategic Fix</span>
                  </div>
                  <p className="text-sm text-brand-600 leading-snug">
                    {item.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
