import React, { useState } from 'react';
import { 
  Hammer, 
  Code2, 
  Rocket, 
  Search, 
  Globe, 
  Wrench, 
  Lightbulb, 
  Repeat, 
  ExternalLink,
  ArrowRight,
  Layers,
  Cpu,
  CheckCircle2,
  Terminal
} from 'lucide-react';

interface Props {
  onNavigate?: (slug: string) => void;
}

interface ProductShowcase {
  name: string;
  type: string;
  desc: string;
  stack: string[];
  status: string;
  domain?: string;
  url?: string;
}

const DIGITAL_PRODUCTS: ProductShowcase[] = [
  {
    name: 'Estatyc',
    type: 'PropTech & AI Platform',
    desc: 'Commercial real estate and property intelligence platform with cross-platform sync.',
    stack: ['PropTech', 'Full-Stack', 'AI Engine'],
    status: 'Live & Scaling',
    domain: 'estatyc.com',
    url: 'https://www.estatyc.com/'
  },
  {
    name: 'Riad Al Ashekin',
    type: 'Executive Advisory Hub',
    desc: 'Executive advisory platform and digital knowledge architecture.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    status: 'Active',
    domain: 'riadalashekin.com',
    url: 'https://riadalashekin.com/'
  },
  {
    name: 'St. Lucia Taxi and Tours',
    type: 'Fleet Dispatch & Booking',
    desc: 'High-conversion travel booking engine and automated fleet dispatch system.',
    stack: ['Booking Engine', 'Payments', 'Local SEO'],
    status: 'High Volume',
    domain: 'stluciantaxiandtours.com',
    url: 'https://stluciantaxiandtours.com/'
  },
  {
    name: 'SEO Course in Bangladesh',
    type: 'Educational LMS Platform',
    desc: 'Technical search engineering training portal and digital course platform.',
    stack: ['LMS', 'Video Delivery', 'Schema'],
    status: 'Active Community',
    domain: 'seocourseinbangladesh.com',
    url: 'https://seocourseinbangladesh.com/'
  },
  {
    name: 'IslamArc',
    type: 'Knowledge Platform',
    desc: 'Structured digital encyclopedia and discovery search engine.',
    stack: ['Content Architecture', 'SSR', 'Search'],
    status: 'Global Reach',
    domain: 'islamarc.com',
    url: 'https://islamarc.com/'
  },
  {
    name: 'What Generation Am I',
    type: 'Interactive Viral App',
    desc: 'High-concurrency viral web application with real-time demographic calculation.',
    stack: ['React', 'Algorithmic Logic', 'Edge CDN'],
    status: 'Viral Audience',
    domain: 'whatgenerationami.fun',
    url: 'https://whatgenerationami.fun/'
  }
];

const SEO_TOOLS = [
  { name: 'Meta Title & Description Checker', category: 'Audit' },
  { name: 'Robots.txt Tester & Validator', category: 'Crawling' },
  { name: 'Automated Robots.txt Generator', category: 'Generation' },
  { name: 'SEO Commercial ROI Calculator', category: 'Analytics' },
  { name: 'Local SEO Pricing Calculator', category: 'Finance' },
  { name: 'Meta Data Chrome Extension', category: 'Browser Tool' }
];

const EXPERIMENT_CYCLE = [
  { step: '01', title: 'Market Hypothesis', desc: 'Identify verified search intent or commercial friction.', icon: Lightbulb },
  { step: '02', title: 'Lean Prototype', desc: 'Build the simplest functional codebase without bloated overhead.', icon: Hammer },
  { step: '03', title: 'Production Launch', desc: 'Deploy to live edge infrastructure with automated telemetry.', icon: Rocket },
  { step: '04', title: 'Empirical Telemetry', desc: 'Measure real user conversion, crawl velocity, and latency.', icon: Search },
  { step: '05', title: 'Codify Learnings', desc: 'Distill findings into repeatable advisory blueprints.', icon: Code2 },
  { step: '06', title: 'Continuous Leverage', desc: 'Feed insights back into enterprise client solutions.', icon: Repeat }
];

export function ThingsIveBuilt({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'tools' | 'mindset'>('all');

  return (
    <section id="built" className="py-12 sm:py-16 bg-white border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-500 mb-1.5">
              <Hammer className="w-3.5 h-3.5 text-brand-600" />
              <span>Technical Foundations &amp; Products</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-brand-950 tracking-tight">
              Things I’ve Built
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-500 max-w-md leading-relaxed">
            “My work doesn’t stop at strategy. I architect, build, and deploy production tools, web platforms, and digital experiments from the ground up.”
          </p>
        </div>

        {/* 01 & 03: TOP ROW (SEO Tools & Technical Foundation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 mb-8">
          
          {/* 01 — SEO & MARKETING TOOLS (Span 7) */}
          <div className="lg:col-span-7 bg-brand-950 rounded-2xl p-5 sm:p-6 border border-brand-800 text-white flex flex-col justify-between space-y-5 shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-accent-400 flex items-center gap-1.5">
                  <Wrench className="w-4 h-4" />
                  <span>01 — SEO &amp; Marketing Tools</span>
                </span>
                <span className="text-xs font-mono bg-white/10 px-2.5 py-0.5 rounded text-brand-300">
                  Functional SEO Ecosystem
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Custom Algorithmic &amp; Analytical Tooling
              </h3>
              <p className="text-sm text-brand-300 leading-relaxed">
                Purpose-built utilities designed to solve technical crawling bottlenecks, meta data validation, and commercial ROI projections.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {SEO_TOOLS.map((tool) => (
                <div 
                  key={tool.name} 
                  className="bg-white/5 hover:bg-white/10 border border-brand-800/80 rounded-xl px-3.5 py-2.5 flex items-center justify-between text-sm transition-colors"
                >
                  <span className="font-medium text-brand-100 truncate mr-2">
                    {tool.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-accent-300 bg-accent-950/80 px-2 py-0.5 rounded border border-accent-800/50 shrink-0">
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 03 — SOFTWARE & WEB FOUNDATION (Span 5) */}
          <div className="lg:col-span-5 bg-[#fafafc] rounded-2xl p-5 sm:p-6 border border-brand-200/80 flex flex-col justify-between space-y-4 shadow-2xs">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-accent-700 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" />
                  <span>03 — Software &amp; Web</span>
                </span>
                <span className="text-xs font-mono bg-brand-100 px-2.5 py-0.5 rounded text-brand-700 font-medium">
                  Engineering Baseline
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-950 mb-1.5">
                The Technical Foundation
              </h3>
              <blockquote className="text-sm text-brand-700 italic bg-white p-3.5 rounded-xl border border-brand-200/70 leading-relaxed">
                “I understand how digital products are built — which helps me understand how they need to be positioned, discovered and marketed.”
              </blockquote>
            </div>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-wider block">
                Production Stack &amp; Environments:
              </span>
              <div className="flex flex-wrap gap-2">
                {['WordPress Core', 'Next.js & React', 'TypeScript', 'Node.js APIs', 'Chrome Extensions', 'Schema & JSON-LD', 'Edge CDN', 'PostgreSQL / SQL'].map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-mono font-semibold px-2.5 py-1 bg-white border border-brand-200/80 text-brand-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 02 — WEBSITES & DIGITAL PRODUCTS: Production & Launch */}
        <div className="bg-[#fafafc] rounded-2xl border border-brand-200/90 p-5 sm:p-6 mb-8 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-brand-200/70">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-accent-700 mb-1">
                <Globe className="w-3.5 h-3.5 text-accent-600" />
                <span>02 — Websites &amp; Digital Products</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-950">
                Production &amp; Launch
              </h3>
              <p className="text-sm text-brand-500 mt-0.5">
                Worked on, architected, and launched complete web platforms, digital systems, and commercial properties.
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                6 Featured Launches
              </span>
            </div>
          </div>

          {/* 6 Grid Cards (100% Mobile Natural) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIGITAL_PRODUCTS.map((prod) => (
              <div 
                key={prod.name}
                className="bg-white rounded-xl p-4 sm:p-5 border border-brand-200/80 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-3.5 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-xs font-mono font-bold text-accent-700 uppercase">
                      {prod.type}
                    </span>
                    <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-bold">
                      {prod.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-brand-950 group-hover:text-accent-700 transition-colors flex items-center justify-between">
                    <span>{prod.name}</span>
                    {prod.url && (
                      <a 
                        href={prod.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-400 hover:text-brand-900 p-1"
                        title="Visit site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </h4>

                  <p className="text-sm text-brand-600 leading-relaxed line-clamp-2">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-brand-100 flex flex-wrap gap-1.5 items-center">
                  {prod.stack.map((s) => (
                    <span key={s} className="text-xs font-mono bg-brand-50 text-brand-700 px-2 py-0.5 rounded border border-brand-200/60">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 04 — IDEAS & EXPERIMENTS: The Builder's Mindset */}
        <div className="bg-[#fafafc] rounded-2xl border border-brand-200/90 p-5 sm:p-6 shadow-2xs space-y-5">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-brand-200/70">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-strategy-700 mb-1">
                <Lightbulb className="w-3.5 h-3.5 text-strategy-600" />
                <span>04 — Ideas &amp; Experiments</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-950">
                The Builder's Mindset
              </h3>
              <p className="text-sm text-brand-500 mt-0.5">
                Creating focused experiments, niche platforms, and product concepts to constantly test the boundaries of search, user behavior, and technical execution.
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <span className="text-xs font-mono font-bold text-brand-700 bg-white px-2.5 py-1 rounded-md border border-brand-200">
                The Creative &amp; Empirical Cycle
              </span>
            </div>
          </div>

          {/* 6-Step Execution Flow (100% Mobile Natural) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {EXPERIMENT_CYCLE.map((cycle) => {
              const StepIcon = cycle.icon;
              return (
                <div 
                  key={cycle.step}
                  className="bg-white rounded-xl p-3.5 border border-brand-200/70 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-bold text-accent-700">
                        {cycle.step}
                      </span>
                      <StepIcon className="w-4 h-4 text-brand-400" />
                    </div>
                    <div className="text-sm font-bold text-brand-950 leading-tight mb-1">
                      {cycle.title}
                    </div>
                  </div>
                  <p className="text-xs text-brand-500 leading-snug">
                    {cycle.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Builder Philosophy Strip */}
          <div className="bg-white rounded-xl p-4 border border-brand-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-brand-800 font-medium">
                Why continuous experimentation matters: <span className="text-brand-950 font-bold">You cannot advise with authority on what you do not build yourself.</span>
              </span>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs font-mono text-brand-500 bg-brand-50 px-2.5 py-1 rounded border border-brand-200">
                Code • Measure • Advise
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
