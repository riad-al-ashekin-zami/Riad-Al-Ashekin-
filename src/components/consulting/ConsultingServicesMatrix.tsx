import React from 'react';
import { 
  Briefcase, 
  Search, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface Props {
  onNavigate?: (slug: string) => void;
}

const CORE_SERVICES = [
  {
    id: 'business-consultancy',
    step: '01',
    name: 'Business Consultancy',
    focus: 'Commercial Strategy & Tech Evaluation',
    icon: Briefcase,
    badge: 'Executive Advisory',
    description: 'Direct strategic partnership with leadership teams to evaluate technology investments, unit economics, and operational scaling.',
    deliverables: [
      'Business model & margin diagnosis',
      'Technology stack evaluation (Build vs. Buy)',
      'Workflow automation & bottleneck elimination',
      'Actionable milestone KPI roadmaps'
    ],
    bestFor: 'Founders and operators facing operational complexity or technology decisions.'
  },
  {
    id: 'seo-consultancy',
    step: '02',
    name: 'SEO Consultancy',
    focus: 'Strategic Search Advisory Retainer',
    icon: Search,
    badge: 'Advisory Retainer',
    description: 'Senior oversight, architectural audits, algorithmic resilience, and search engineering guidance for established digital assets.',
    deliverables: [
      'Technical architecture & Core Web Vitals audits',
      'Entity-based semantic search & schema modeling',
      'Zero-downtime CMS migration oversight',
      'Direct strategic alignment for engineering teams'
    ],
    bestFor: 'Engineering teams, digital brands, and platforms needing search governance.'
  },
  {
    id: 'seo-strategy-building',
    step: '03',
    name: 'SEO Strategy Building',
    focus: 'End-to-End Growth Engine',
    icon: Compass,
    badge: 'Growth Blueprint',
    description: 'A bespoke 6-to-12 month strategic search engine engineered around your specific market, user intent, and revenue goals.',
    deliverables: [
      'High-intent commercial keyword mapping',
      'Topic cluster architecture & internal linking',
      'Programmatic SEO scalability blueprints',
      'Revenue attribution and tracking setup'
    ],
    bestFor: 'B2B SaaS and digital platforms building a compounding organic acquisition moat.'
  }
];

export function ConsultingServicesMatrix({ onNavigate }: Props) {
  const handleInquire = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate('/contact/');
  };

  return (
    <section id="consulting-services" className="py-12 sm:py-16 bg-[#fafafc] border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-500 mb-1.5">
              <Briefcase className="w-3.5 h-3.5 text-brand-600" />
              <span>Dedicated Retainers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-brand-950 tracking-tight">
              Core Strategic Engagements
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-500 max-w-md leading-relaxed">
            Personal advisory structured around three high-leverage strategic offerings.
          </p>
        </div>

        {/* 3 Core Services Grid (100% Mobile Natural) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {CORE_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-6 border border-brand-200/90 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5 text-accent-700" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-brand-50 border border-brand-200/70 font-bold text-brand-700">
                      {srv.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-wider">
                      Engagement {srv.step}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-950">
                      {srv.name}
                    </h3>
                    <p className="text-sm font-semibold text-accent-700 mt-0.5">
                      {srv.focus}
                    </p>
                  </div>

                  <p className="text-sm text-brand-600 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="pt-3 border-t border-brand-100 space-y-2">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                      Scope:
                    </div>
                    {srv.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-sm text-brand-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-brand-100 flex items-center justify-between text-xs sm:text-sm text-brand-500">
                  <span className="truncate pr-2">Best for: <strong className="text-brand-800">{srv.bestFor.split(' ')[0]} {srv.bestFor.split(' ')[1]}</strong></span>
                  <button
                    onClick={handleInquire}
                    className="inline-flex items-center gap-1 font-bold text-accent-700 hover:text-accent-800 shrink-0 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
