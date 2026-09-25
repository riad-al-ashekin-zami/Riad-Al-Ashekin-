import React from 'react';
import { 
  Compass, 
  Target, 
  Layers, 
  Workflow, 
  BarChart3, 
  ArrowDown, 
  CheckCircle2 
} from 'lucide-react';

interface FrameworkPhase {
  phaseNumber: string;
  title: string;
  badge: string;
  badgeColor: string;
  icon: any;
  objective: string;
  steps: {
    number: string;
    name: string;
    detail: string;
  }[];
  deliverable: string;
}

const FRAMEWORK_PHASES: FrameworkPhase[] = [
  {
    phaseNumber: 'PHASE 01',
    title: 'Commercial Foundation',
    badge: 'Business First',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: Target,
    objective: 'Align every technical initiative with bottom-line revenue, profit margins, and actual customer demand.',
    steps: [
      { number: '01', name: 'Business Objective', detail: 'Define revenue targets, payback horizons, and margin thresholds.' },
      { number: '02', name: 'Process Audit', detail: 'Map internal handoffs, spreadsheet traps, and manual operational drag.' },
      { number: '03', name: 'Customer & User Reality', detail: 'Identify buyer drop-off points, search triggers, and time-to-value.' }
    ],
    deliverable: 'Objective Benchmark & Commercial Blueprint'
  },
  {
    phaseNumber: 'PHASE 02',
    title: 'Technical Architecture',
    badge: 'Systems & Data',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: Layers,
    objective: 'Design scalable, low-maintenance infrastructure without vendor lock-in or premature engineering.',
    steps: [
      { number: '04', name: 'Data & Systems Schema', detail: 'Unify CRM, database records, and single-source-of-truth pipelines.' },
      { number: '05', name: 'Tech Selection (Build vs Buy)', detail: 'Evaluate 3-year TCO between off-the-shelf SaaS and custom code.' }
    ],
    deliverable: 'System Architecture & Build-vs-Buy Evaluation'
  },
  {
    phaseNumber: 'PHASE 03',
    title: 'Growth & Automation',
    badge: 'Leverage',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: Workflow,
    objective: 'Replace expensive ad reliance and repetitive human labor with compounding organic assets and automations.',
    steps: [
      { number: '06', name: 'Organic Search Moat', detail: 'Build high-intent topical authority that generates inbound leads.' },
      { number: '07', name: 'Workflow Automations & AI', detail: 'Deploy deterministic pipelines and guarded AI to eliminate manual data entry.' }
    ],
    deliverable: 'Inbound Acquisition Engine & Operational Automation'
  },
  {
    phaseNumber: 'PHASE 04',
    title: 'Execution & Telemetry',
    badge: 'Impact & ROI',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: BarChart3,
    objective: 'Turn strategy into delivered code and measure continuous financial payback.',
    steps: [
      { number: '08', name: 'Strategic Roadmap', detail: 'Sequence high-impact milestones against budget and capacity.' },
      { number: '09', name: 'Engineering Oversight', detail: 'Supervise technical implementation with strict code quality gates.' },
      { number: '10', name: 'ROI & Telemetry', detail: 'Track actual revenue contribution, cost savings, and unit economics.' }
    ],
    deliverable: 'Milestone Delivery & Continuous Telemetry'
  }
];

export function BusinessTechFrameworkVisual() {
  return (
    <section id="framework" className="py-10 sm:py-14 bg-white border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-500 mb-1">
              <Compass className="w-3.5 h-3.5 text-brand-600" />
              <span>The End-to-End Alignment Framework</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-brand-950 tracking-tight">
              How Business Strategy &amp; Technology Connect
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-500 max-w-md">
            A 4-phase sequential framework ensuring every technical line of code and marketing dollar drives verifiable commercial return.
          </p>
        </div>

        {/* 100% Mobile Natural Flow: 4 Open Connected Phase Cards */}
        {/* On mobile: vertical stack with clear flow. On desktop: 2x2 grid or 4-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FRAMEWORK_PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.phaseNumber}
                className="bg-[#fafafc] hover:bg-white rounded-2xl border border-brand-200/80 hover:border-brand-300 p-4 sm:p-5 flex flex-col justify-between transition-all shadow-2xs hover:shadow-xs relative group"
              >
                <div>
                  {/* Phase Top Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold text-brand-400">
                      {phase.phaseNumber}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${phase.badgeColor}`}>
                      {phase.badge}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-brand-900 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-accent-300" />
                    </div>
                    <h3 className="text-base font-bold text-brand-950 leading-snug">
                      {phase.title}
                    </h3>
                  </div>

                  {/* Objective */}
                  <p className="text-xs text-brand-600 mb-4 leading-relaxed">
                    {phase.objective}
                  </p>

                  {/* Steps List */}
                  <div className="space-y-2 pt-3 border-t border-brand-200/60 mb-4">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-400">
                      Sequential Steps:
                    </div>
                    {phase.steps.map((st) => (
                      <div key={st.number} className="flex items-start gap-2 text-xs">
                        <span className="font-mono text-[11px] font-bold text-brand-900 shrink-0 bg-white px-1 rounded border border-brand-200/60 mt-0.5">
                          {st.number}
                        </span>
                        <div className="min-w-0">
                          <span className="font-semibold text-brand-900 block leading-tight">
                            {st.name}
                          </span>
                          <span className="text-[11px] text-brand-500 leading-tight block mt-0.5">
                            {st.detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Deliverable Pill */}
                <div className="pt-3 border-t border-brand-200/60 mt-auto">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-800 bg-emerald-50/70 border border-emerald-200/60 rounded-lg px-2.5 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{phase.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Flow Connector Indicator */}
        <div className="mt-4 pt-3 border-t border-brand-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-brand-500 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-brand-700">Non-linear agility:</span>
            <span>Phases iterate continuously based on live telemetry and real customer feedback.</span>
          </div>
          <span className="font-mono text-[11px] text-brand-400">
            Strategy → Architecture → Leverage → ROI
          </span>
        </div>

      </div>
    </section>
  );
}
