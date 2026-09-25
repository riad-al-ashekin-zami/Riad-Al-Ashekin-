import React, { useState } from 'react';
import { 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface DiagnosticCase {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  analysis: string;
  strategicOptions: string[];
  evaluation: string;
  chosenDirection: string;
  measurementPlan: string;
  takeaway: string;
}

const CASES: DiagnosticCase[] = [
  {
    id: 'b2b-saas',
    title: 'High Customer Acquisition Cost (CAC)',
    industry: 'B2B Software Platform',
    challenge: 'Paid ad CPCs doubled while demo conversion rates declined, threatening burn rate.',
    analysis: 'High-intent decision makers were searching for technical comparison terms ("Vendor A vs Vendor B") where the company had zero organic presence.',
    strategicOptions: [
      'Option 1: Double down on outbound sales reps (High payroll overhead)',
      'Option 2: Build custom interactive product calculator app (High dev cost)',
      'Option 3: Systematic Programmatic Comparison Architecture & Semantic SEO (High leverage)'
    ],
    evaluation: 'The business did not need another software tool. It needed organic search presence at the exact moment prospects compare vendors.',
    chosenDirection: 'Engineered 120+ targeted comparison and integration landing pages with structured schema, cutting reliance on paid search.',
    measurementPlan: 'Tracking Organic Qualified Demo Pipeline, Assisted Conversion Rates, and Blended CAC payback.',
    takeaway: 'Not every growth bottleneck needs code. Understanding buyer intent patterns unlocked sustainable organic acquisition.'
  },
  {
    id: 'agency-workflow',
    title: 'Operational Overload & Margin Erosion',
    industry: 'Regional Professional Services',
    challenge: 'Staff spending 25+ hours weekly copying data between spreadsheets, emails, and invoicing portals, capping client capacity.',
    analysis: 'Diagnostic review revealed 80% of data tasks followed deterministic rule sets that did not require human judgment.',
    strategicOptions: [
      'Option 1: Hire additional junior operations staff (Recurring payroll burden)',
      'Option 2: Rebuild an expensive enterprise custom ERP (High capital risk)',
      'Option 3: Automated webhook & LLM ingestion pipeline with existing SaaS (Optimal balance)'
    ],
    evaluation: 'Hiring more staff would mask process defects. An intelligent automation pipeline solved the bottleneck at 1/10th the cost.',
    chosenDirection: 'Constructed automated Zapier/Make and AI data extraction pipelines linking incoming inquiries directly to client dashboards.',
    measurementPlan: 'Hours saved per client on-boarding, error rate reduction, and gross margin expansion per account.',
    takeaway: 'Before adding headcount or rewriting core software, audit repetitive friction points that automation can eliminate instantly.'
  },
  {
    id: 'legacy-platform',
    title: 'Legacy Monolith vs. Headless Transition',
    industry: 'Multi-Location Marketplace',
    challenge: 'Slow page speed and fragile deployments holding back local Google rankings across 40+ regional markets.',
    analysis: '90% of back-end APIs were stable; only the frontend delivery and crawl rendering were flawed by legacy plugins.',
    strategicOptions: [
      'Option 1: Complete multi-year full platform rebuild from zero (Dangerous migration risk)',
      'Option 2: Patch legacy WordPress monolith with third-party speed plugins (Band-aid solution)',
      'Option 3: Incremental Headless Frontend (Next.js) preserving existing database (De-risked)'
    ],
    evaluation: 'A complete rebuild would freeze feature development for 12 months. An incremental headless layer solved speed and SEO without database risk.',
    chosenDirection: 'Decoupled presentation layer using Next.js for sub-second Core Web Vitals, feeding directly into local search dominance.',
    measurementPlan: 'Core Web Vitals "Good" ratio, crawl error rates, and organic local map pack impressions.',
    takeaway: 'Pragmatic technology strategy avoids dogmatic rewrites. Fix the bottleneck where value is lost, not where code is easiest to replace.'
  }
];

export function ProblemSolutionThinking() {
  const [selectedCase, setSelectedCase] = useState<string>('b2b-saas');

  const activeCase = CASES.find(c => c.id === selectedCase) || CASES[0];

  return (
    <section className="py-10 sm:py-14 bg-[#fafafc] border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-500 mb-1">
              <Lightbulb className="w-3.5 h-3.5 text-brand-600" />
              <span>Consulting Mindset in Action</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-brand-950 tracking-tight">
              Problem-First Diagnostics &amp; Strategic Paths
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-500 max-w-md">
            Real consulting means avoiding cookie-cutter prescriptions. Explore how three distinct business challenges were broken down from diagnosis to measurement.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
          {CASES.map((c) => {
            const isSelected = selectedCase === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCase(c.id)}
                className={`p-3 sm:p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected 
                    ? 'bg-brand-950 text-white border-brand-950 shadow-xs' 
                    : 'bg-white hover:bg-brand-50/60 text-brand-800 border-brand-200/80 hover:border-brand-300'
                }`}
              >
                <div className={`text-[10px] font-mono uppercase tracking-wider mb-0.5 ${isSelected ? 'text-accent-300' : 'text-brand-500'}`}>
                  {c.industry}
                </div>
                <div className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-white' : 'text-brand-950'} truncate`}>
                  {c.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Diagnostic Flow Visualizer Container */}
        <div className="bg-white rounded-2xl border border-brand-200/90 p-4 sm:p-6 shadow-2xs space-y-5">
          
          {/* Top Active Case Context */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-brand-100">
            <div>
              <span className="text-[10px] font-mono font-bold text-accent-700 uppercase tracking-wider block">
                {activeCase.industry}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-brand-950">
                {activeCase.title}
              </h3>
            </div>
            <span className="text-[10px] font-mono text-brand-500 bg-brand-50 px-2 py-0.5 rounded border border-brand-200/60 self-start sm:self-auto">
              Diagnostic Case Walkthrough
            </span>
          </div>

          {/* 6-Stage Grid (100% Mobile Natural) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            
            {/* 1. Challenge */}
            <div className="bg-[#fafafc] rounded-xl p-3.5 border border-brand-200/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 uppercase tracking-wide">
                <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-mono text-[9px]">1</span>
                <span>The Challenge</span>
              </div>
              <p className="text-xs text-brand-700 leading-relaxed">
                {activeCase.challenge}
              </p>
            </div>

            {/* 2. Analysis */}
            <div className="bg-[#fafafc] rounded-xl p-3.5 border border-brand-200/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-accent-700 uppercase tracking-wide">
                <span className="w-4 h-4 rounded-full bg-accent-100 text-accent-800 flex items-center justify-center font-mono text-[9px]">2</span>
                <span>Research &amp; Analysis</span>
              </div>
              <p className="text-xs text-brand-700 leading-relaxed">
                {activeCase.analysis}
              </p>
            </div>

            {/* 3. Strategic Options */}
            <div className="bg-[#fafafc] rounded-xl p-3.5 border border-brand-200/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-brand-600 uppercase tracking-wide">
                <span className="w-4 h-4 rounded-full bg-brand-200 text-brand-800 flex items-center justify-center font-mono text-[9px]">3</span>
                <span>Strategic Options</span>
              </div>
              <ul className="text-[11px] text-brand-700 space-y-1">
                {activeCase.strategicOptions.map((opt, oIdx) => (
                  <li key={oIdx} className="leading-snug">• {opt}</li>
                ))}
              </ul>
            </div>

            {/* 4. Evaluation Mindset */}
            <div className="bg-[#fafafc] rounded-xl p-3.5 border border-brand-200/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wide">
                <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-mono text-[9px]">4</span>
                <span>Evaluation Mindset</span>
              </div>
              <p className="text-xs text-brand-700 leading-relaxed">
                {activeCase.evaluation}
              </p>
            </div>

            {/* 5. Implementation Direction */}
            <div className="bg-[#fafafc] rounded-xl p-3.5 border border-brand-200/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wide">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono text-[9px]">5</span>
                <span>Implementation Direction</span>
              </div>
              <p className="text-xs text-brand-800 leading-relaxed font-medium">
                {activeCase.chosenDirection}
              </p>
            </div>

            {/* 6. Measurement Plan */}
            <div className="bg-[#fafafc] rounded-xl p-3.5 border border-brand-200/70 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
                <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-mono text-[9px]">6</span>
                <span>Measurement Telemetry</span>
              </div>
              <p className="text-xs text-brand-700 leading-relaxed">
                {activeCase.measurementPlan}
              </p>
            </div>

          </div>

          {/* Bottom Strategic Principle Callout */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70 flex items-start sm:items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
            <div className="text-xs text-emerald-950">
              <span className="font-bold">Strategic Principle: </span>
              {activeCase.takeaway}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
