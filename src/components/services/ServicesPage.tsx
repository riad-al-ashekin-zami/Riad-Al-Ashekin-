import React from 'react';
import { 
  Briefcase, 
  Search, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Calendar, 
  TrendingUp, 
  Cpu, 
  HelpCircle,
  Check,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  onNavigate: (slug: string) => void;
}

const CORE_SERVICES = [
  {
    id: 'business-consultancy',
    step: 'ENGAGEMENT 01',
    title: 'Business Consultancy',
    focus: 'Commercial Strategy & Tech Evaluation',
    badge: 'EXECUTIVE ADVISORY',
    icon: Briefcase,
    description: 'Direct strategic partnership with leadership teams to evaluate technology investments, unit economics, and operational scaling.',
    scope: [
      'Business model & margin diagnosis',
      'Technology stack evaluation (Build vs. Buy)',
      'Workflow automation & bottleneck elimination',
      'Actionable milestone KPI roadmaps'
    ],
    bestFor: 'Founders and operators facing operational complexity or technology decisions.',
    deliverableSummary: 'Bi-weekly executive strategy sprints, architectural reviews, and prioritized decision matrix.'
  },
  {
    id: 'seo-consultancy',
    step: 'ENGAGEMENT 02',
    title: 'SEO Consultancy',
    focus: 'Strategic Search Advisory Retainer',
    badge: 'ADVISORY RETAINER',
    icon: Search,
    description: 'Senior oversight, architectural audits, algorithmic resilience, and search engineering guidance for established digital assets.',
    scope: [
      'Technical architecture & Core Web Vitals audits',
      'Entity-based semantic search & schema modeling',
      'Zero-downtime CMS migration oversight',
      'Direct strategic alignment for engineering teams'
    ],
    bestFor: 'Engineering teams, digital brands, and platforms needing search governance.',
    deliverableSummary: 'Monthly technical audit checkpoints, sprint ticketing for developers, and algorithmic protection.'
  },
  {
    id: 'seo-strategy-building',
    step: 'ENGAGEMENT 03',
    title: 'SEO Strategy Building',
    focus: 'End-to-End Growth Engine',
    badge: 'GROWTH BLUEPRINT',
    icon: Compass,
    badgeColor: 'text-purple-700 bg-purple-100',
    description: 'A bespoke 6-to-12 month strategic search engine engineered around your specific market, user intent, and revenue goals.',
    scope: [
      'High-intent commercial keyword mapping',
      'Topic cluster architecture & internal linking',
      'Programmatic SEO scalability blueprints',
      'Revenue attribution and tracking setup'
    ],
    bestFor: 'B2B SaaS and digital platforms building a compounding organic acquisition moat.',
    deliverableSummary: 'Comprehensive 12-month keyword taxonomy, content velocity calendar, and tracking infrastructure.'
  }
];

export function ServicesPage({ onNavigate }: Props) {
  const handleInquire = (serviceName?: string) => {
    onNavigate('/contact/');
  };

  return (
    <div className="min-h-screen bg-brand-50 flex flex-col">
      
      {/* 1. Header Banner matching Homepage style & palette (Dark #150d28) */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80">
        
        {/* Dynamic Animated Ambient Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -25, 20, 0],
              scale: [1, 1.15, 0.95, 1],
              opacity: [0.25, 0.38, 0.25]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 left-1/10 w-[550px] h-[550px] bg-accent-600/30 rounded-full blur-[140px]"
          />
          <motion.div 
            animate={{
              x: [0, -35, 25, 0],
              y: [0, 35, -15, 0],
              scale: [1, 1.18, 0.96, 1],
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/4 -right-16 w-[600px] h-[600px] bg-brand-700/30 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-brand-400 mb-6">
            <button 
              onClick={() => onNavigate('/')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-brand-600" />
            <span className="text-white font-medium">Services &amp; Advisory</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold text-accent-300 uppercase tracking-wider backdrop-blur-md">
              <Briefcase className="w-3.5 h-3.5 text-accent-300" />
              <span>Dedicated Retainers &amp; Strategic Advisory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Core Strategic Engagements
            </h1>

            <p className="text-base sm:text-lg text-brand-200 leading-relaxed font-normal max-w-2xl">
              High-leverage personal advisory structured around three strategic pillars: commercial business diagnosis, search engineering governance, and compounding organic growth architecture.
            </p>
          </div>

        </div>
      </section>

      {/* 2. The 3 Core Strategic Offerings Matrix (Directly from User Screenshot) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-brand-200/80">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-500 mb-1.5">
              <Layers className="w-3.5 h-3.5 text-brand-600" />
              <span>Tailored Advisory Tiers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
              Three High-Leverage Strategic Offerings
            </h2>
          </div>
          <p className="text-sm text-brand-600 max-w-md leading-relaxed">
            Select the engagement structure aligned with your current stage, from executive tech decisions to complete organic market blueprints.
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white border border-brand-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-soft-purple hover:border-accent-400 transition-all flex flex-col justify-between group relative"
              >
                <div className="space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-accent-700 group-hover:bg-accent-50 group-hover:text-accent-800 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-100 text-brand-800 border border-brand-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Focus */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-400 block">
                      {service.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-brand-950 tracking-tight group-hover:text-accent-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-accent-700">
                      {service.focus}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Scope List */}
                  <div className="pt-2 border-t border-brand-100 space-y-3">
                    <span className="text-[11px] font-mono font-bold text-brand-400 uppercase tracking-widest block">
                      SCOPE:
                    </span>
                    <ul className="space-y-2.5">
                      {service.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-700 leading-normal">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverable Summary */}
                  <div className="p-3.5 bg-brand-50/80 rounded-xl border border-brand-100 text-xs text-brand-600">
                    <strong className="text-brand-900 block mb-1 font-semibold">Strategic Output:</strong>
                    {service.deliverableSummary}
                  </div>

                </div>

                {/* Footer: Target Audience & Inquire Action */}
                <div className="pt-6 mt-6 border-t border-brand-100 flex items-center justify-between gap-3">
                  <div className="text-xs text-brand-500 leading-tight">
                    <span className="text-brand-400 block text-[10px] uppercase font-mono">Best For</span>
                    <span className="font-semibold text-brand-800 line-clamp-1">{service.bestFor}</span>
                  </div>

                  <button
                    onClick={() => handleInquire(service.title)}
                    className="px-4 py-2 bg-brand-950 hover:bg-brand-800 text-white rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-sm shrink-0 cursor-pointer group-hover:bg-accent-600"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* 3. Why Advisory & Strategy Only (Realistic, High-Value Perspective) */}
      <section className="py-16 bg-white border-y border-brand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-700 bg-accent-50 px-3 py-1 rounded-full border border-accent-200">
              The Advisory Model
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-950 tracking-tight mt-3">
              Why I Focus Strictly on Strategy &amp; Architecture Over Implementation
            </h2>
            <p className="text-sm sm:text-base text-brand-600 mt-2 leading-relaxed">
              Most digital ventures and software platforms do not fail from a lack of code or content velocity—they fail from flawed architecture, inaccurate unit economics, and uncoordinated strategic bets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-3 p-6 rounded-2xl bg-brand-50/60 border border-brand-100">
              <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-800 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-brand-950">
                Preventing 12–18 Month Architectural Traps
              </h3>
              <p className="text-xs text-brand-600 leading-relaxed">
                Implementing the wrong CMS framework, faulty database schema isolation, or brittle programmatic URL patterns costs months in engineering debt. Strategic consulting guarantees your foundation is rock solid before writing a single line of production code.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-brand-50/60 border border-brand-100">
              <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-800 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-brand-950">
                Direct Co-Founder &amp; CTO-Level Guidance
              </h3>
              <p className="text-xs text-brand-600 leading-relaxed">
                Agencies assign your account to junior account coordinators. Under this retainer model, you interface directly with Riad Al Ashekin—leveraging first-hand co-founder experience across 35+ technology ventures and international search systems.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-brand-50/60 border border-brand-100">
              <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-800 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-brand-950">
                Empowering In-House Teams with Clear Roadmaps
              </h3>
              <p className="text-xs text-brand-600 leading-relaxed">
                Instead of billing endless developer hours, I equip your existing software engineers and product managers with prioritized tickets, Core Web Vitals remediation criteria, and algorithmic resilience playbooks they execute with 100% clarity.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Strategic Engagement Workflow */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-500">
            Engagement Flow
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950">
            How an Advisory Partnership Works
          </h2>
          <p className="text-xs sm:text-sm text-brand-600">
            A frictionless, high-leverage process designed to deliver actionable answers within 14 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div className="bg-white border border-brand-200 rounded-2xl p-6 relative">
            <span className="text-2xl font-extrabold text-accent-600 mb-2 block font-mono">Step 1</span>
            <h3 className="text-sm font-bold text-brand-950 mb-1.5">Discovery &amp; Diagnosis</h3>
            <p className="text-xs text-brand-600 leading-relaxed">
              30-minute alignment call to review your current tech stack, search performance, unit economics, and strategic roadblocks.
            </p>
          </div>

          <div className="bg-white border border-brand-200 rounded-2xl p-6 relative">
            <span className="text-2xl font-extrabold text-accent-600 mb-2 block font-mono">Step 2</span>
            <h3 className="text-sm font-bold text-brand-950 mb-1.5">Deep Architectural Audit</h3>
            <p className="text-xs text-brand-600 leading-relaxed">
              Systematic inspection of entity models, crawl budgets, code bottlenecks, and commercial keyword intent matrices.
            </p>
          </div>

          <div className="bg-white border border-brand-200 rounded-2xl p-6 relative">
            <span className="text-2xl font-extrabold text-accent-600 mb-2 block font-mono">Step 3</span>
            <h3 className="text-sm font-bold text-brand-950 mb-1.5">Bespoke Strategy Blueprint</h3>
            <p className="text-xs text-brand-600 leading-relaxed">
              Delivery of a concrete 6-to-12 month roadmap with prioritized sprints, developer specifications, and KPI targets.
            </p>
          </div>

          <div className="bg-white border border-brand-200 rounded-2xl p-6 relative">
            <span className="text-2xl font-extrabold text-accent-600 mb-2 block font-mono">Step 4</span>
            <h3 className="text-sm font-bold text-brand-950 mb-1.5">Ongoing Retainer Oversight</h3>
            <p className="text-xs text-brand-600 leading-relaxed">
              Bi-weekly or monthly cadence with executive checkpoints, algorithm protection, and technical validation.
            </p>
          </div>

        </div>
      </section>

      {/* 5. FAQs about Advisory and Non-Access Policy */}
      <section className="py-16 bg-brand-100/50 border-t border-brand-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-brand-600">
              Clear answers regarding scope, deliverables, and engagement terms.
            </p>
          </div>

          <div className="space-y-4">
            
            <div className="bg-white rounded-2xl p-5 border border-brand-200 shadow-2xs space-y-2">
              <h3 className="text-sm font-bold text-brand-950 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent-600 shrink-0" />
                Why are you not accepting hands-on project access or dev work?
              </h3>
              <p className="text-xs text-brand-600 leading-relaxed pl-6">
                To provide maximum strategic leverage, I do not act as an outsourced freelancer or implementation agency. My time is concentrated on diagnosing commercial bottlenecks, auditing code architecture, evaluating build-vs-buy decisions, and architecting SEO growth engines. Your internal or contract developers execute the code from the blueprint provided.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-brand-200 shadow-2xs space-y-2">
              <h3 className="text-sm font-bold text-brand-950 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent-600 shrink-0" />
                What happens during an Advisory Retainer?
              </h3>
              <p className="text-xs text-brand-600 leading-relaxed pl-6">
                We establish a recurring bi-weekly or monthly strategic cadence. I review developer PRs impacting SEO, audit server logs, review Google Core Updates impacting your industry, and provide direct async guidance via private Slack/Teams channels.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-brand-200 shadow-2xs space-y-2">
              <h3 className="text-sm font-bold text-brand-950 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent-600 shrink-0" />
                How do we initiate a consultation?
              </h3>
              <p className="text-xs text-brand-600 leading-relaxed pl-6">
                You can book an exploratory discovery session directly via the appointment booking page. We will discuss your current platform, your core objectives, and determine if an advisory partnership is the right strategic fit.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Advisory Capacity & Engagement Notice (Moved from Hero to Bottom) */}
      <section className="pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#180f2d] border border-amber-500/50 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-amber-500/20 border border-amber-500/40 rounded-xl text-amber-400 shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/30">
                    ADVISORY CAPACITY NOTICE
                  </span>
                  <span className="text-xs text-brand-300 hidden sm:inline">• Active Policy</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Pure Consultancy &amp; Strategy Building Bookings Only
                </h2>
                <p className="text-xs sm:text-sm text-brand-200 leading-relaxed max-w-4xl">
                  I am <strong className="text-amber-300 font-semibold">strictly NOT accepting hands-on project execution, freelance dev contracts, or outsourced agency implementation work</strong> at this time. Services are exclusively open for <span className="text-white font-semibold underline decoration-accent-400 underline-offset-2">Executive Business Consultancy</span>, <span className="text-white font-semibold underline decoration-accent-400 underline-offset-2">Technical SEO Advisory</span>, and <span className="text-white font-semibold underline decoration-accent-400 underline-offset-2">Growth Strategy Building</span> to guide your leadership and engineering teams.
                </p>
              </div>
            </div>

            <div className="shrink-0 pt-2 lg:pt-0">
              <button
                onClick={() => handleInquire()}
                className="w-full sm:w-auto px-5 py-2.5 bg-accent-600 hover:bg-accent-500 text-white rounded-xl text-xs font-bold transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Request Advisory Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Strategic Bottom CTA */}
      <section className="bg-brand-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-brand-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-300">
            Direct Partnership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Build an Unassailable Strategic Advantage?
          </h2>
          <p className="text-sm sm:text-base text-brand-300 max-w-2xl mx-auto leading-relaxed">
            Collaborate with Riad Al Ashekin to review your technical architecture, solve search visibility bottlenecks, and establish high-margin compounding growth.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('/seo-pricing/')}
              className="px-7 py-3.5 bg-accent-600 hover:bg-accent-500 text-white rounded-full text-xs font-bold transition-all inline-flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <span>View Pricing &amp; Retainers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('/contact/')}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full text-xs font-bold transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Send Direct Inquiry</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
