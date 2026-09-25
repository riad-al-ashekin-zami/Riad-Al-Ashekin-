import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Scale
} from 'lucide-react';

interface Insight {
  id: string;
  tag: string;
  number: string;
  title: string;
  quote: string;
  body: string;
  impactRule: string;
  domain: string;
}

const INSIGHTS: Insight[] = [
  {
    id: 'tech-enabler',
    number: '01',
    tag: 'Technology Strategy',
    domain: 'Software Architecture',
    title: 'Technology as an Enabler, Never the Objective',
    quote: '“The best software is the smallest amount of code that reliably delivers a commercial outcome.”',
    body: 'A technology stack should be judged by how fast it unlocks customer iteration, not how complex its architecture appears.',
    impactRule: 'Never deploy complex microservices where a clean monolithic architecture or standard API integration suffices.'
  },
  {
    id: 'search-demand',
    number: '02',
    tag: 'SEO & Market Research',
    domain: 'Search Analytics',
    title: 'Search Intent as Unvarnished Market Feedback',
    quote: '“People lie in surveys, but they tell Google the exact problems they are desperate to solve.”',
    body: 'Analyzing search queries reveals what customers lack, what pricing models confuse them, and how they evaluate competitors.',
    impactRule: 'Use verified search intent and query demand to validate product features before writing code.'
  },
  {
    id: 'automation-first',
    number: '03',
    tag: 'AI & Automation',
    domain: 'Operations & Workflow',
    title: 'Automate Repeatable Logic Before Scaling Headcount',
    quote: '“Hiring staff to do robotic copy-paste work is an expensive way to mask broken systems.”',
    body: 'If a workflow follows predictable, rule-based logic, deterministic automations execute it 24/7 without error or human fatigue.',
    impactRule: 'Codify processes first; automate deterministic steps; deploy human talent only where strategic judgment matters.'
  },
  {
    id: 'digital-compounding',
    number: '04',
    tag: 'Business Strategy',
    domain: 'Enterprise Capital',
    title: 'The Architecture of Sustainable Compounding',
    quote: '“Paid advertising is rented land. Owned search authority and software infrastructure are equity assets.”',
    body: 'Paid ads vanish when budget stops. Semantic entity authority and proprietary digital tools compound value over years.',
    impactRule: 'Allocate capital toward building durable digital equity, not solely short-term ad sprints.'
  }
];

export function StrategicInsights() {
  return (
    <section id="insights" className="py-12 sm:py-16 bg-[#fafafc] border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-brand-200/70">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-accent-700 mb-1.5">
              <BookOpen className="w-3.5 h-3.5 text-accent-600" />
              <span>Strategic Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-brand-950 tracking-tight">
              Executive Mental Models
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-500 max-w-md leading-relaxed">
            Core principles developed through advising businesses, building software, and steering search operations.
          </p>
        </div>

        {/* 4 Mental Model Cards (Clean 2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
          {INSIGHTS.map((insight) => (
            <div
              key={insight.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-200/80 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Meta Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800">
                      {insight.tag}
                    </span>
                    <span className="text-xs font-mono text-brand-400">
                      • {insight.domain}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold text-accent-700">
                    Model {insight.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-brand-950 leading-snug">
                  {insight.title}
                </h3>

                {/* Quote Callout */}
                <blockquote className="text-sm font-serif italic text-accent-900 bg-accent-50/60 p-3 rounded-xl border border-accent-200/60 leading-relaxed">
                  {insight.quote}
                </blockquote>

                {/* Explanatory Body */}
                <p className="text-sm text-brand-600 leading-relaxed">
                  {insight.body}
                </p>
              </div>

              {/* Actionable Rule Definition */}
              <div className="pt-3 border-t border-brand-100 flex items-start gap-2.5 bg-brand-50/50 p-3 rounded-xl border border-brand-200/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm text-brand-900 leading-snug">
                  <span className="font-bold text-brand-950 uppercase text-xs font-mono block text-emerald-800 mb-0.5">
                    Executive Rule:
                  </span>
                  {insight.impactRule}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Synthesis Advisory Strip */}
        <div className="bg-white border border-brand-200/90 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-accent-600 shrink-0" />
            <span className="text-sm font-semibold text-brand-900">
              Grounded in execution: Every model is tested in real software builds, search deployments, and P&amp;L outcomes.
            </span>
          </div>
          <span className="text-xs font-mono text-brand-500 bg-brand-50 px-3 py-1 rounded-lg border border-brand-200 shrink-0 font-medium">
            Pragmatic Strategy
          </span>
        </div>

      </div>
    </section>
  );
}
