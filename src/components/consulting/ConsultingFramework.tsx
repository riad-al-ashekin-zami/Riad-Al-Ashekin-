import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Search, 
  AlertCircle, 
  Compass, 
  Cpu, 
  Route, 
  BarChart3, 
  ArrowRight,
  Layers
} from 'lucide-react';

const FRAMEWORK_STEPS = [
  {
    step: '01',
    title: 'Understand the Business',
    subtitle: 'Business Model & Unit Economics',
    icon: Search,
    description: 'Immersion into revenue architecture, gross margins, customer acquisition cycles, and competitive moat.',
    coreQuestions: [
      'What is the true cost structure and customer payback window?',
      'Who is the highest-value ideal customer profile (ICP)?',
      'Where is the business losing velocity or capital?'
    ]
  },
  {
    step: '02',
    title: 'Identify the Core Bottleneck',
    subtitle: 'Diagnostic Isolation',
    icon: AlertCircle,
    description: 'Separating superficial operational complaints from the underlying systemic bottleneck limiting growth.',
    coreQuestions: [
      'Is the constraint top-of-funnel discovery, operational friction, or conversion leakage?',
      'Are current tools creating manual overhead instead of leverage?',
      'What is preventing existing customer retention or referral?'
    ]
  },
  {
    step: '03',
    title: 'Research Opportunities & Feasibility',
    subtitle: 'Market & Technical Discovery',
    icon: Compass,
    description: 'Assessing competitor moats, search demand landscapes, API integrations, and workflow viability.',
    coreQuestions: [
      'Where does underserved organic search or customer intent exist?',
      'What off-the-shelf software or APIs can be utilized without reinventing the wheel?',
      'What are realistic time-to-value expectations?'
    ]
  },
  {
    step: '04',
    title: 'Evaluate Strategic Options',
    subtitle: 'Trade-off Modeling',
    icon: Layers,
    description: 'Comparing alternatives with clear pros, cons, capital requirements, and internal bandwidth constraints.',
    coreQuestions: [
      'Build vs. Buy vs. Optimize existing systems?',
      'Immediate quick-win vs. scalable architectural foundation?',
      'What are the risk profiles of each candidate approach?'
    ]
  },
  {
    step: '05',
    title: 'Assess Tech & Marketing Solutions',
    subtitle: 'Solution Matching',
    icon: Cpu,
    description: 'Determining the precise balance between marketing reach (SEO, content) and technology infrastructure (AI, software).',
    coreQuestions: [
      'Does this challenge require organic search acquisition or sales enablement?',
      'Can an AI or automation pipeline eliminate repetitive labor?',
      'How does the tech stack affect performance and future scale?'
    ]
  },
  {
    step: '06',
    title: 'Develop Actionable Direction',
    subtitle: 'Roadmap & Specs',
    icon: Route,
    description: 'Formulating modular, prioritized roadmaps with exact deliverables, resource needs, and timeline milestones.',
    coreQuestions: [
      'What is the 30-60-90 day deployment schedule?',
      'Who has accountability for each technical and marketing sprint?',
      'What are the minimum viable milestones before capital commitment?'
    ]
  },
  {
    step: '07',
    title: 'Define Measurement Considerations',
    subtitle: 'Governance & KPIs',
    icon: BarChart3,
    description: 'Establishing commercial telemetry—tracking lead pipeline, unit margins, crawl health, and productivity gains.',
    coreQuestions: [
      'What primary metrics confirm whether the hypothesis was correct?',
      'How do we measure payback without vanity dashboard noise?',
      'What is the scheduled cadence for review and course-correction?'
    ]
  }
];

export function ConsultingFramework() {
  const [activeStep, setActiveStep] = useState(0);

  const current = FRAMEWORK_STEPS[activeStep];
  const Icon = current.icon;

  return (
    <section className="py-20 lg:py-28 bg-[#fafafc] relative overflow-hidden border-b border-brand-200/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-strategy-50 border border-strategy-200 text-xs font-bold uppercase tracking-wider text-strategy-800">
            <Compass className="w-3.5 h-3.5 text-strategy-600" />
            <span>Structured Advisory Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-brand-950 tracking-tight">
            Consulting Approach &amp; Engagement Flow
          </h2>
          <p className="text-base sm:text-lg text-brand-600 leading-relaxed">
            A methodical, phased approach to de-risking decisions. We identify constraints, evaluate viable paths, and chart realistic execution paths without empty promises or silver bullets.
          </p>
        </div>

        {/* 7-Step Navigation Bar */}
        <div className="bg-white rounded-2xl p-2 border border-brand-200/80 shadow-2xs mb-8 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-1.5 min-w-[760px]">
            {FRAMEWORK_STEPS.map((s, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 py-3 px-3 rounded-xl text-left transition-all flex items-center gap-2.5 ${
                    isSelected 
                      ? 'bg-brand-950 text-white shadow-2xs' 
                      : 'hover:bg-brand-50 text-brand-700'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-brand-800 text-accent-300' : 'bg-brand-100 text-brand-600'
                  }`}>
                    {s.step}
                  </span>
                  <span className="text-xs font-bold truncate">
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-white rounded-3xl border border-brand-200 p-6 md:p-10 lg:p-12 shadow-soft-purple">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step summary */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-accent-50 border border-accent-200/80 text-accent-700 flex items-center justify-center shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-accent-700 uppercase tracking-wider">
                    Step {current.step} of 07 • {current.subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-950">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-brand-600 leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Critical Inquiries Evaluated:
                </div>
                <div className="space-y-2.5">
                  {current.coreQuestions.map((q, qIdx) => (
                    <div key={qIdx} className="flex items-start gap-3 p-3 rounded-xl bg-brand-50/70 border border-brand-100 text-xs sm:text-sm text-brand-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Practical takeaway box */}
            <div className="lg:col-span-5 bg-brand-950 text-white rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg border border-brand-800">
              <div className="flex items-center justify-between pb-3 border-b border-brand-800">
                <span className="text-xs font-mono text-accent-300 font-bold uppercase tracking-wider">
                  Advisory Insight
                </span>
                <span className="text-[10px] bg-brand-800 text-brand-300 px-2 py-0.5 rounded font-mono">
                  Phase {current.step}
                </span>
              </div>

              <div className="text-sm font-serif italic text-brand-200 leading-relaxed">
                {activeStep === 0 && "“If a business has weak product-market fit or broken unit economics, generating more traffic will only burn cash faster.”"}
                {activeStep === 1 && "“Most businesses treat symptoms. A sudden drop in organic leads is often an indexing or messaging problem, not a failure of budget.”"}
                {activeStep === 2 && "“Premature software development is the most expensive mistake a growing company can make. Validate before writing code.”"}
                {activeStep === 3 && "“Strategy is as much about choosing what NOT to do as choosing what to prioritize. Clarity prevents scope fatigue.”"}
                {activeStep === 4 && "“Technology should automate workflows; marketing should harvest intent. Mixing the two up creates unnecessary complexity.”"}
                {activeStep === 5 && "“A roadmap is worthless if the in-house team cannot execute it. We calibrate roadmaps to your actual team capacity.”"}
                {activeStep === 6 && "“Measurement is not about staring at 50 dashboards. It is about watching the 3 metrics that confirm commercial health.”"}
              </div>

              <div className="pt-4 border-t border-brand-800/80 flex items-center justify-between text-xs text-brand-400">
                <span>Next Step in Flow:</span>
                <button
                  onClick={() => setActiveStep((activeStep + 1) % FRAMEWORK_STEPS.length)}
                  className="font-bold text-accent-300 hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Step {activeStep === 6 ? '01' : String(activeStep + 2).padStart(2, '0')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
