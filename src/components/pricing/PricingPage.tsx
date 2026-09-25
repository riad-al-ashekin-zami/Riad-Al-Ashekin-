import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  HelpCircle, 
  Laptop, 
  Users, 
  Compass, 
  Briefcase, 
  ChevronRight, 
  DollarSign, 
  FileText, 
  Building2, 
  CheckCircle2, 
  ShieldAlert,
  TrendingUp,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  onNavigate: (slug: string) => void;
}

export function PricingPage({ onNavigate }: Props) {
  // Mode selection for calculator: 'seo-consulting' | 'seo-strategy' | 'biz-consulting'
  const [activeTab, setActiveTab] = useState<'all' | 'seo-consulting' | 'seo-strategy' | 'biz-consulting'>('all');

  // Interactive Estimator state
  const [selectedService, setSelectedService] = useState<'seo-consulting' | 'seo-strategy' | 'biz-consulting'>('seo-consulting');
  const [deliveryFormat, setDeliveryFormat] = useState<'remote' | 'onsite'>('remote');
  const [remoteHours, setRemoteHours] = useState<number>(3);
  const [onsiteSessions, setOnsiteSessions] = useState<number>(1);
  const [strategyTier, setStrategyTier] = useState<'startup' | 'growth' | 'enterprise'>('startup');

  // Compute estimate
  const calculateEstimate = () => {
    if (selectedService === 'seo-consulting') {
      if (deliveryFormat === 'remote') {
        return {
          rateText: '$49 / hour',
          total: remoteHours * 49,
          detail: `${remoteHours} Remote Consulting Hour${remoteHours > 1 ? 's' : ''} × $49/hr`
        };
      } else {
        return {
          rateText: '$300 / Session (up to 3 hrs)',
          total: onsiteSessions * 300,
          detail: `${onsiteSessions} Intensive Onsite Session${onsiteSessions > 1 ? 's' : ''} (up to 3 hrs each) × $300`
        };
      }
    } else if (selectedService === 'biz-consulting') {
      if (deliveryFormat === 'remote') {
        return {
          rateText: '$99 / hour',
          total: remoteHours * 99,
          detail: `${remoteHours} Executive Remote Hour${remoteHours > 1 ? 's' : ''} × $99/hr`
        };
      } else {
        return {
          rateText: '$500 / Session (up to 3 hrs)',
          total: onsiteSessions * 500,
          detail: `${onsiteSessions} Executive Onsite Leadership Session${onsiteSessions > 1 ? 's' : ''} (up to 3 hrs each) × $500`
        };
      }
    } else {
      // SEO Strategy Building
      const strategyCosts = {
        startup: { base: 300, label: 'Single Domain / Early-Stage Venture' },
        growth: { base: 600, label: 'Mid-Market / Competitive Niche' },
        enterprise: { base: 1200, label: 'High-Competition / Multi-Market or Programmatic' }
      };
      const tierData = strategyCosts[strategyTier];
      return {
        rateText: `Starting from $${tierData.base}`,
        total: tierData.base,
        detail: `Custom Roadmap Blueprint: ${tierData.label}`
      };
    }
  };

  const estimate = calculateEstimate();

  const handleBookSession = (subject?: string) => {
    onNavigate('/contact/');
  };

  const handleCustomQuote = () => {
    onNavigate('/contact/');
  };

  return (
    <div className="min-h-screen bg-brand-50 flex flex-col">
      
      {/* 1. Page Hero Header - Matching Homepage Theme (#150d28) */}
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
              className="hover:text-white transition-colors cursor-pointer font-medium"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-brand-600" />
            <span className="text-white font-medium">Pricing &amp; Engagements</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold text-accent-300 uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-300" />
              <span>Transparent Advisory &amp; Strategy Pricing</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Direct Strategic Rates &amp; Packages
            </h1>

            <p className="text-base sm:text-lg text-brand-200 leading-relaxed font-normal max-w-2xl">
              Transparent, predictable investment tiers engineered for startups, engineering leadership, and digital enterprises. No hidden fees or junior account delegation.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Core 3 Pricing Tiers Cards */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-6 relative z-20">
        
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Tier 1: SEO Consultancy */}
          <div className="bg-white rounded-3xl border border-brand-200 shadow-sm p-7 sm:p-8 flex flex-col justify-between relative hover:border-accent-400 transition-all hover:shadow-md">
            <div className="space-y-6">
              
              {/* Top Meta Header */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-brand-100">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
                  <Compass className="w-3.5 h-3.5 text-blue-600" />
                  <span>Strategic Search Retainer</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-brand-400 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200/60">
                  Sprint / Hourly
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-brand-950 tracking-tight">
                  SEO Consultancy
                </h3>
                <p className="text-xs text-brand-600 leading-relaxed">
                  Senior oversight, crawl architecture reviews, algorithmic resilience, and search engineering guidance for internal dev teams.
                </p>
              </div>

              {/* Price Display Boxes */}
              <div className="space-y-3 pt-2">
                {/* Remote Rate */}
                <div className="p-4 rounded-2xl bg-brand-50/80 border border-brand-200/80 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-brand-700">
                      <Laptop className="w-3.5 h-3.5 text-accent-600" />
                      <span>Remote Advisory</span>
                    </div>
                    <p className="text-[11px] text-brand-500">Live 1-on-1 video working session</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-brand-950">$49</span>
                    <span className="text-xs text-brand-500 font-medium"> / hour</span>
                  </div>
                </div>

                {/* Onsite Rate */}
                <div className="p-4 rounded-2xl bg-accent-50/50 border border-accent-200/60 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent-900">
                      <Users className="w-3.5 h-3.5 text-accent-700" />
                      <span>Onsite Session</span>
                    </div>
                    <p className="text-[11px] text-accent-700/80">In-person workshop (up to 3 hrs)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-brand-950">$300</span>
                    <span className="text-xs text-brand-600 font-medium"> / session</span>
                  </div>
                </div>
              </div>

              {/* Scope Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-900 block">
                  Included Capabilities:
                </span>
                <ul className="space-y-2.5 text-xs text-brand-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>Technical architecture &amp; Core Web Vitals diagnosis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>Algorithmic update volatility &amp; recovery inspection</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>Entity modeling, Knowledge Graph &amp; Schema review</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>Direct engineering sprint tickets &amp; priority roadmap</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>Session recording, transcript &amp; action checklist</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-8 mt-6 border-t border-brand-100">
              <button
                type="button"
                onClick={() => handleBookSession('SEO Consultancy')}
                className="w-full py-3.5 px-4 bg-brand-950 hover:bg-brand-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request SEO Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Tier 2: SEO Strategy Building (Featured Flagship) */}
          <div className="bg-[#180f2d] text-white rounded-3xl border border-accent-500/70 shadow-[0_20px_50px_rgba(24,15,45,0.4)] p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Top ambient lighting accent bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-500 via-purple-400 to-accent-600" />
            
            {/* Background subtle radial glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-accent-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Integrated Top Header with Badge */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-brand-800/80">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/40 text-xs font-bold text-accent-300">
                  <TrendingUp className="w-3.5 h-3.5 text-accent-300" />
                  <span>Full Growth Engine</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-accent-200 bg-accent-600/40 border border-accent-400/40 px-2.5 py-1 rounded-lg">
                  Flagship
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  SEO Strategy Building
                </h3>
                <p className="text-xs text-brand-300 leading-relaxed">
                  A bespoke 6-to-12 month strategic search engine engineered around your specific commercial market, user search intent, and revenue goals.
                </p>
              </div>

              {/* Pricing Display */}
              <div className="p-5 rounded-2xl bg-brand-900/90 border border-accent-400/30 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-brand-300 uppercase font-mono font-semibold">Starting from</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">$300</span>
                </div>
                <p className="text-[11px] text-accent-300 font-medium leading-normal">
                  *Custom quote structured based on your business size, domain scope, and industry competition level.
                </p>
              </div>

              {/* Scope Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-300 block">
                  Comprehensive Deliverables:
                </span>
                <ul className="space-y-2.5 text-xs text-brand-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                    <span>High-intent commercial keyword mapping &amp; gap audit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                    <span>Topic cluster hierarchy &amp; internal linking topology</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                    <span>Programmatic SEO scalability blueprints (for SaaS &amp; directories)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                    <span>Revenue attribution model &amp; KPI tracking framework</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                    <span>Complete 6–12 month developer-ready execution backlog</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-8 mt-6 border-t border-brand-800 relative z-10">
              <button
                type="button"
                onClick={handleCustomQuote}
                className="w-full py-3.5 px-4 bg-accent-600 hover:bg-accent-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-accent-600/30 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request Strategy Proposal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Tier 3: Business Consultancy */}
          <div className="bg-white rounded-3xl border border-brand-200 shadow-sm p-7 sm:p-8 flex flex-col justify-between relative hover:border-accent-400 transition-all hover:shadow-md">
            <div className="space-y-6">
              
              {/* Top Meta Header */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-brand-100">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700">
                  <Briefcase className="w-3.5 h-3.5 text-purple-600" />
                  <span>Executive Leadership</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-brand-400 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200/60">
                  Advisory
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-brand-950 tracking-tight">
                  Business Consultancy
                </h3>
                <p className="text-xs text-brand-600 leading-relaxed">
                  Direct strategic advisory with leadership teams to evaluate commercial viability, tech investments, unit economics, and operational scaling.
                </p>
              </div>

              {/* Price Display Boxes */}
              <div className="space-y-3 pt-2">
                {/* Remote Rate */}
                <div className="p-4 rounded-2xl bg-brand-50/80 border border-brand-200/80 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-brand-700">
                      <Laptop className="w-3.5 h-3.5 text-accent-600" />
                      <span>Remote Advisory</span>
                    </div>
                    <p className="text-[11px] text-brand-500">Confidential 1-on-1 strategy call</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-brand-950">$99</span>
                    <span className="text-xs text-brand-500 font-medium"> / hour</span>
                  </div>
                </div>

                {/* Onsite Rate */}
                <div className="p-4 rounded-2xl bg-accent-50/50 border border-accent-200/60 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent-900">
                      <Users className="w-3.5 h-3.5 text-accent-700" />
                      <span>Onsite Session</span>
                    </div>
                    <p className="text-[11px] text-accent-700/80">Executive boardroom (up to 3 hrs)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-brand-950">$500</span>
                    <span className="text-xs text-brand-600 font-medium"> / session</span>
                  </div>
                </div>
              </div>

              {/* Scope Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-900 block">
                  Included Capabilities:
                </span>
                <ul className="space-y-2.5 text-xs text-brand-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Business model, pricing tiers &amp; margin diagnosis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Technology stack evaluation (Build vs. Buy analysis)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Workflow automation &amp; bottleneck elimination</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Product-led growth (PLG) &amp; go-to-market roadmaps</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Milestone KPI frameworks for executive accountability</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-8 mt-6 border-t border-brand-100">
              <button
                type="button"
                onClick={() => handleBookSession('Business Consultancy')}
                className="w-full py-3.5 px-4 bg-brand-950 hover:bg-brand-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request Business Advisory</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Pricing & Budget Estimator */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl border border-brand-200/90 p-6 sm:p-10 shadow-sm">
          
          <div className="max-w-2xl space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-xs font-bold text-accent-700 uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-accent-600" />
              <span>Investment Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
              Customize Your Engagement Estimate
            </h2>
            <p className="text-xs sm:text-sm text-brand-600">
              Calculate projected investments based on required consulting hours, onsite workshop sessions, or comprehensive growth strategy blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Configuration Controls (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Select Service */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider">
                  1. Select Strategic Engagement
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService('seo-consulting')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedService === 'seo-consulting'
                        ? 'bg-accent-50 border-accent-500 shadow-2xs ring-2 ring-accent-400/20'
                        : 'bg-brand-50/50 border-brand-200 hover:bg-brand-50 text-brand-700'
                    }`}
                  >
                    <span className="text-xs font-bold text-brand-950 block">SEO Consultancy</span>
                    <span className="text-[11px] text-accent-700 font-semibold block">$49/hr or $300 onsite</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService('seo-strategy')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedService === 'seo-strategy'
                        ? 'bg-accent-50 border-accent-500 shadow-2xs ring-2 ring-accent-400/20'
                        : 'bg-brand-50/50 border-brand-200 hover:bg-brand-50 text-brand-700'
                    }`}
                  >
                    <span className="text-xs font-bold text-brand-950 block">Strategy Building</span>
                    <span className="text-[11px] text-accent-700 font-semibold block">Starting $300</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService('biz-consulting')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedService === 'biz-consulting'
                        ? 'bg-accent-50 border-accent-500 shadow-2xs ring-2 ring-accent-400/20'
                        : 'bg-brand-50/50 border-brand-200 hover:bg-brand-50 text-brand-700'
                    }`}
                  >
                    <span className="text-xs font-bold text-brand-950 block">Business Advisory</span>
                    <span className="text-[11px] text-accent-700 font-semibold block">$99/hr or $500 onsite</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Format & Quantity for Hourly Services */}
              {selectedService !== 'seo-strategy' ? (
                <div className="space-y-4 p-5 bg-brand-50/60 rounded-2xl border border-brand-200/80">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider">
                      2. Delivery Format
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setDeliveryFormat('remote')}
                        className={`py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                          deliveryFormat === 'remote'
                            ? 'bg-brand-950 text-white border-brand-950 shadow-xs'
                            : 'bg-white text-brand-700 border-brand-200 hover:bg-brand-50'
                        }`}
                      >
                        <Laptop className="w-3.5 h-3.5" />
                        <span>Remote (Hourly)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDeliveryFormat('onsite')}
                        className={`py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                          deliveryFormat === 'onsite'
                            ? 'bg-brand-950 text-white border-brand-950 shadow-xs'
                            : 'bg-white text-brand-700 border-brand-200 hover:bg-brand-50'
                        }`}
                      >
                        <Users className="w-3.5 h-3.5" />
                        <span>Onsite (Per Session)</span>
                      </button>
                    </div>
                  </div>

                  {/* Quantity Slider / Stepper */}
                  {deliveryFormat === 'remote' ? (
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center text-xs font-bold text-brand-800">
                        <span>Consulting Hours Required:</span>
                        <span className="text-accent-700 font-mono text-sm">{remoteHours} Hours</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={remoteHours}
                        onChange={(e) => setRemoteHours(Number(e.target.value))}
                        className="w-full h-2 bg-brand-200 rounded-lg appearance-none cursor-pointer accent-accent-600"
                      />
                      <div className="flex justify-between text-[11px] text-brand-400 font-mono">
                        <span>1 Hour (Quick Diagnostic)</span>
                        <span>5 Hours</span>
                        <span>10 Hours</span>
                        <span>20 Hours</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center text-xs font-bold text-brand-800">
                        <span>Onsite Sessions (Up to 3 hours each):</span>
                        <span className="text-accent-700 font-mono text-sm">{onsiteSessions} Session{onsiteSessions > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setOnsiteSessions(num)}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              onsiteSessions === num
                                ? 'bg-accent-600 text-white border-accent-600 shadow-xs'
                                : 'bg-white text-brand-700 border-brand-200 hover:bg-brand-50'
                            }`}
                          >
                            {num} {num === 1 ? 'Session' : 'Sessions'}
                          </button>
                        ))}
                      </div>
                      <p className="text-[11px] text-brand-500 pt-1">
                        *Onsite sessions are held in Sylhet or Dhaka. Out-of-city travel arrangements are quoted separately.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Strategy Tier Selector */
                <div className="space-y-4 p-5 bg-brand-50/60 rounded-2xl border border-brand-200/80">
                  <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider">
                    2. Business Size &amp; Market Competition Tier
                  </label>
                  <div className="space-y-2.5">
                    {[
                      { key: 'startup', title: 'Single Domain / Early-Stage Venture', desc: 'Focus on core keyword topology, setup validation, and initial 6-month roadmap.', price: '$300' },
                      { key: 'growth', title: 'Mid-Market / Competitive Niche', desc: 'Detailed competitor gap analysis, topic clusters, and content scaling blueprint.', price: '$600' },
                      { key: 'enterprise', title: 'High-Competition / Multi-Market or SaaS', desc: 'Programmatic SEO architecture, international schema, and complex dev backlog.', price: '$1,200+' }
                    ].map((tier) => (
                      <button
                        key={tier.key}
                        type="button"
                        onClick={() => setStrategyTier(tier.key as any)}
                        className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          strategyTier === tier.key
                            ? 'bg-white border-accent-500 shadow-xs ring-2 ring-accent-400/20'
                            : 'bg-white/60 border-brand-200 hover:bg-white text-brand-700'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-brand-950 block">{tier.title}</span>
                          <span className="text-[11px] text-brand-500 block">{tier.desc}</span>
                        </div>
                        <span className="text-sm font-extrabold text-accent-700 font-mono ml-4 shrink-0">
                          {tier.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Estimate Summary Box (5 Cols) */}
            <div className="lg:col-span-5 bg-[#180f2d] text-white rounded-3xl p-6 sm:p-7 border border-accent-400/30 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-300 block">
                  Projected Investment
                </span>
                <h3 className="text-xl font-extrabold text-white">Estimated Quote</h3>
              </div>

              <div className="p-5 rounded-2xl bg-brand-900/80 border border-brand-700/80 space-y-2">
                <div className="text-xs text-brand-300 font-medium">Official Rate Basis:</div>
                <div className="text-sm font-bold text-accent-300 font-mono">{estimate.rateText}</div>
                <div className="pt-3 border-t border-brand-800 flex items-baseline justify-between">
                  <span className="text-xs text-brand-300">Total Investment:</span>
                  <span className="text-3xl font-extrabold text-white font-mono">${estimate.total}</span>
                </div>
                <p className="text-[11px] text-brand-400 pt-1 leading-relaxed">
                  {estimate.detail}
                </p>
              </div>

              <div className="space-y-3 text-xs text-brand-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                  <span>Direct delivery by senior strategist Riad Al Ashekin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                  <span>Detailed actionable summary and developer sprint tasks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                  <span>Full session recordings and structured artifacts</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCustomQuote}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-500 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Custom Enterprise Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Format Comparison: Remote vs. Onsite Breakdown */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-700">
            Format Breakdown
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
            Remote vs. Onsite Engagement Models
          </h2>
          <p className="text-xs sm:text-sm text-brand-600">
            Choose the delivery dynamic that best matches your team's operational rhythm and decision-making structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Remote Working Session Card */}
          <div className="bg-white rounded-3xl border border-brand-200 p-6 sm:p-8 space-y-5 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-2xl text-blue-700">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-950">Remote Advisory Working Sessions</h3>
                <span className="text-xs font-bold text-accent-700">$49/hr (SEO) • $99/hr (Business)</span>
              </div>
            </div>

            <p className="text-xs text-brand-600 leading-relaxed">
              High-velocity, focused screen-sharing sessions conducted over Google Meet or Zoom. Ideal for code-level inspection, quick diagnostic audits, and recurring weekly advisory sprints.
            </p>

            <ul className="space-y-2.5 text-xs text-brand-700 pt-2 border-t border-brand-100">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-accent-600 shrink-0 mt-0.5" />
                <span><strong>Flexible Scheduling:</strong> Book in single or multi-hour blocks across global time zones.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-accent-600 shrink-0 mt-0.5" />
                <span><strong>Live Code &amp; Search Console Analysis:</strong> Real-time screen review of repository, logs, and indexing.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-accent-600 shrink-0 mt-0.5" />
                <span><strong>Recorded Artifacts:</strong> Full HD video recording, searchable transcript, and Notion checklist provided.</span>
              </li>
            </ul>
          </div>

          {/* Onsite Working Session Card */}
          <div className="bg-white rounded-3xl border border-brand-200 p-6 sm:p-8 space-y-5 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-50 border border-purple-200 rounded-2xl text-purple-700">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-950">Onsite Leadership &amp; Boardroom Sessions</h3>
                <span className="text-xs font-bold text-accent-700">$300/session (SEO) • $500/session (Business)</span>
              </div>
            </div>

            <p className="text-xs text-brand-600 leading-relaxed">
              Intensive, in-person collaborative workshops (up to 3 hours). Designed for founding teams, department heads, and cross-functional engineering meetings to resolve core bottlenecks.
            </p>

            <ul className="space-y-2.5 text-xs text-brand-700 pt-2 border-t border-brand-100">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-accent-600 shrink-0 mt-0.5" />
                <span><strong>Up to 3 Hours Duration:</strong> Deep immersion without the fatigue of fragmented virtual calls.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-accent-600 shrink-0 mt-0.5" />
                <span><strong>Cross-Department Alignment:</strong> Bring your developers, marketers, and product managers into one room.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-accent-600 shrink-0 mt-0.5" />
                <span><strong>Locations:</strong> Primary availability in Sylhet &amp; Dhaka. Out-of-region travel arranged on request.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-700">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
            Engagement &amp; Billing FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How does the hourly billing work for Remote Advisory?",
              a: "Remote sessions are booked in advance and billed based on exact time blocks ($49/hr for SEO, $99/hr for Business Consultancy). Sessions are conducted via Google Meet with full screen sharing and video recording provided immediately afterward."
            },
            {
              q: "What is included in an Onsite Session (up to 3 hours)?",
              a: "An onsite session is an intensive in-person workshop at your office or designated meeting space in Sylhet or Dhaka. It covers deep-dive diagnosis, architectural whiteboarding, and team Q&A. A structured action roadmap is delivered within 48 hours following the session."
            },
            {
              q: "What determines the price for 'SEO Strategy Building' (starting from $300)?",
              a: "The baseline price of $300 covers early-stage ventures or single-market domains. The cost scales based on the size of your website, total business lines, competitive market difficulty, and whether programmatic SEO templates and multi-regional architecture are required."
            },
            {
              q: "Can my engineering team participate in the sessions?",
              a: "Yes, in fact, this is encouraged. Because I do not take direct hands-on code access, working directly with your developers and engineering leads ensures that architectural recommendations are understood and executed smoothly in your existing sprints."
            },
            {
              q: "What payment methods are accepted?",
              a: "Invoicing is issued via Stripe, direct bank wire transfer, or Payoneer for international clients. Local bank transfer is also supported for clients in Bangladesh."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-brand-200/90 p-5 sm:p-6 shadow-2xs space-y-2">
              <h4 className="text-sm font-bold text-brand-950 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-brand-600 leading-relaxed pl-6.5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Advisory Scope Notice (Consistent placement at bottom of page) */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#180f2d] border border-amber-500/50 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-amber-500/20 border border-amber-500/40 rounded-xl text-amber-400 shrink-0 mt-0.5">
                <ShieldAlert className="w-5 h-5" />
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
                onClick={handleCustomQuote}
                className="w-full sm:w-auto px-5 py-2.5 bg-accent-600 hover:bg-accent-500 text-white rounded-xl text-xs font-bold transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Submit Engagement Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
