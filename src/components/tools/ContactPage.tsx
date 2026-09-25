import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Calendar, 
  ShieldAlert, 
  MessageSquare, 
  Briefcase, 
  Compass, 
  Search, 
  HelpCircle, 
  Clock, 
  ArrowRight,
  ChevronRight,
  Globe,
  Building2,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  onNavigate: (slug: string) => void;
}

type InquiryType = 'advisory' | 'general';

export function ContactPage({ onNavigate }: Props) {
  // Toggle between Advisory Booking vs General Inquiry
  const [inquiryType, setInquiryType] = useState<InquiryType>('advisory');

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  
  // Specific to Strategic Advisory / Retainer
  const [serviceEngagement, setServiceEngagement] = useState('Business Consultancy (Commercial & Tech)');
  const [primaryObjective, setPrimaryObjective] = useState('Architectural Review & Code Bottlenecks');
  const [approxTimeline, setApproxTimeline] = useState('Within the next 2-4 weeks');
  
  // Specific to General Inquiry
  const [generalSubject, setGeneralSubject] = useState('General Discussion / Question');
  
  // Shared Message
  const [message, setMessage] = useState('');
  
  // Confirmation state
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-50 flex flex-col">
      
      {/* 1. Header Banner matching Homepage style & palette (Dark #150d28) */}
      <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80">
        
        {/* Dynamic Animated Ambient Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{
              x: [0, 25, -20, 0],
              y: [0, -20, 15, 0],
              scale: [1, 1.12, 0.96, 1],
              opacity: [0.22, 0.35, 0.22]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 left-1/10 w-[520px] h-[520px] bg-accent-600/30 rounded-full blur-[140px]"
          />
          <motion.div 
            animate={{
              x: [0, -35, 20, 0],
              y: [0, 30, -15, 0],
              scale: [1, 1.15, 0.95, 1],
              opacity: [0.18, 0.32, 0.18]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/4 -right-16 w-[560px] h-[560px] bg-brand-700/30 rounded-full blur-[150px]"
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
            <span className="text-white font-medium">Direct Inquiries &amp; Advisory</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold text-accent-300 uppercase tracking-wider backdrop-blur-md">
              <MessageSquare className="w-3.5 h-3.5 text-accent-300" />
              <span>Direct Communication Channel</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Get in Touch with Riad Al Ashekin
            </h1>

            <p className="text-base sm:text-lg text-brand-200 leading-relaxed font-normal max-w-2xl">
              Connect directly for strategic advisory retainers, technology evaluations, or general inquiries. Every submission is personally reviewed without junior account delegation.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Main Content Grid: Direct Info + Comprehensive Dual-Purpose Form */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Access Details & FAQ (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl border border-brand-200/90 p-6 sm:p-7 shadow-2xs space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-400 block">
                  Direct Verification
                </span>
                <h3 className="text-lg font-bold text-brand-950">Official Channels</h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-50/70 border border-brand-100">
                  <Mail className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-bold text-brand-950">Personal Primary Email</p>
                    <a 
                      href="mailto:riad.al.ashekin@gmail.com" 
                      className="text-accent-700 hover:text-accent-800 font-medium break-all"
                    >
                      riad.al.ashekin@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-50/70 border border-brand-100">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-bold text-brand-950">Base of Operations</p>
                    <p className="text-brand-600">Sylhet &amp; Dhaka, Bangladesh</p>
                    <p className="text-[11px] text-brand-400">Advising global clients across US, UK, EU, and APAC</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-50/70 border border-brand-100">
                  <Linkedin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-bold text-brand-950">Professional Network</p>
                    <a 
                      href="https://www.linkedin.com/in/riadalashekin" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent-700 hover:text-accent-800 font-medium break-all"
                    >
                      linkedin.com/in/riadalashekin
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-50/70 border border-brand-100">
                  <Clock className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-bold text-brand-950">Response Time</p>
                    <p className="text-brand-600">Under 24 hours on business days</p>
                  </div>
                </div>
              </div>

              {/* Pricing & Retainers Alternative */}
              <div className="pt-4 border-t border-brand-100">
                <p className="text-xs text-brand-600 mb-3 leading-relaxed">
                  Reviewing engagement tiers, hourly advisory rates, or custom scopes?
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('/seo-pricing/')}
                  className="w-full py-2.5 px-4 bg-brand-100 hover:bg-brand-200 text-brand-900 rounded-xl text-xs font-bold transition-all inline-flex items-center justify-center gap-2 cursor-pointer border border-brand-200"
                >
                  <span>Explore Pricing &amp; Retainers</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent-700" />
                </button>
              </div>
            </div>

            {/* Quick Consultation FAQ Card */}
            <div className="bg-white rounded-3xl border border-brand-200/90 p-6 sm:p-7 shadow-2xs space-y-4">
              <h4 className="text-sm font-bold text-brand-950 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent-600 shrink-0" />
                Inquiry Guidelines
              </h4>
              <ul className="space-y-3 text-xs text-brand-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                  <span><strong>Advisory Retainers:</strong> Ideal for SaaS founders, CTOs, and tech directors needing high-level search and architecture oversight.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                  <span><strong>General Inquiries:</strong> Suitable for speaking invitations, research interviews, podcast appearances, or simple technical questions.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Intelligent Adaptive Contact & Inquiry Form (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-brand-200/90 p-6 sm:p-9 shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5 max-w-lg mx-auto">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Message Dispatched
                    </span>
                    <h3 className="text-2xl font-extrabold text-brand-950 tracking-tight">
                      Thank you for reaching out, {fullName || 'there'}!
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                      Your inquiry regarding <strong className="text-brand-900">{inquiryType === 'advisory' ? serviceEngagement : generalSubject}</strong> has been received. Riad Al Ashekin personally reviews all messages and will respond to <strong className="text-brand-900">{workEmail}</strong> within 24 business hours.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-brand-100 hover:bg-brand-200 text-brand-900 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                    <button
                      onClick={() => onNavigate('/services/')}
                      className="px-5 py-2.5 bg-brand-950 hover:bg-brand-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      View Services &amp; Advisory Tiers
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Form Header */}
                  <div className="border-b border-brand-100 pb-5 space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent-700">
                      Direct Communication Form
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-brand-950 tracking-tight">
                      How Can I Help You?
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-500">
                      Select your inquiry category below so your message is routed with maximum clarity.
                    </p>
                  </div>

                  {/* Purpose Selector Tabs */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider">
                      Inquiry Nature <span className="text-accent-600">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setInquiryType('advisory')}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                          inquiryType === 'advisory'
                            ? 'bg-accent-50/80 border-accent-400 shadow-2xs ring-2 ring-accent-400/20'
                            : 'bg-brand-50/50 border-brand-200 hover:bg-brand-50 text-brand-700'
                        }`}
                      >
                        <div className={`p-2 rounded-xl mt-0.5 ${inquiryType === 'advisory' ? 'bg-accent-600 text-white' : 'bg-brand-200 text-brand-700'}`}>
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-brand-950 block">
                            Strategic Advisory / Retainer
                          </span>
                          <span className="text-[11px] text-brand-500 block leading-tight">
                            Business consultancy, SEO audit, or strategy roadmap.
                          </span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setInquiryType('general')}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                          inquiryType === 'general'
                            ? 'bg-accent-50/80 border-accent-400 shadow-2xs ring-2 ring-accent-400/20'
                            : 'bg-brand-50/50 border-brand-200 hover:bg-brand-50 text-brand-700'
                        }`}
                      >
                        <div className={`p-2 rounded-xl mt-0.5 ${inquiryType === 'general' ? 'bg-accent-600 text-white' : 'bg-brand-200 text-brand-700'}`}>
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-brand-950 block">
                            General Inquiry / Question
                          </span>
                          <span className="text-[11px] text-brand-500 block leading-tight">
                            Speaking, media, quick technical question, or partnership.
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Standard Identity Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-accent-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g., Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 bg-brand-50/40 border border-brand-200 rounded-xl text-xs text-brand-950 placeholder-brand-400 focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-400/20 outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider mb-1.5">
                        Work / Official Email <span className="text-accent-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="e.g., s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 bg-brand-50/40 border border-brand-200 rounded-xl text-xs text-brand-950 placeholder-brand-400 focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-400/20 outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Optional Organization / Domain Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider mb-1.5">
                        Company / Venture Name
                      </label>
                      <div className="relative">
                        <Building2 className="w-3.5 h-3.5 text-brand-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="e.g., Acme Cloud Inc."
                          className="w-full pl-9 pr-3.5 py-2.5 bg-brand-50/40 border border-brand-200 rounded-xl text-xs text-brand-950 placeholder-brand-400 focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-400/20 outline-hidden transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider mb-1.5">
                        Website or Platform URL
                      </label>
                      <div className="relative">
                        <Globe className="w-3.5 h-3.5 text-brand-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          placeholder="e.g., https://yourdomain.com"
                          className="w-full pl-9 pr-3.5 py-2.5 bg-brand-50/40 border border-brand-200 rounded-xl text-xs text-brand-950 placeholder-brand-400 focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-400/20 outline-hidden transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ADVISORY-SPECIFIC CONDITIONAL FIELDS */}
                  {inquiryType === 'advisory' && (
                    <div className="p-5 bg-brand-50/60 rounded-2xl border border-brand-200/80 space-y-4">
                      
                      <div className="flex items-center gap-2 pb-2 border-b border-brand-200/60">
                        <Briefcase className="w-4 h-4 text-accent-600" />
                        <span className="text-xs font-bold text-brand-950 uppercase tracking-wider">
                          Strategic Engagement Parameters
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                            Advisory Engagement
                          </label>
                          <select
                            value={serviceEngagement}
                            onChange={(e) => setServiceEngagement(e.target.value)}
                            className="w-full px-3 py-2.5 bg-white border border-brand-200 rounded-xl text-xs text-brand-900 focus:border-accent-500 focus:ring-2 focus:ring-accent-400/20 outline-hidden cursor-pointer"
                          >
                            <option value="Business Consultancy (Commercial & Tech)">
                              Business Consultancy (Commercial &amp; Tech Evaluation)
                            </option>
                            <option value="SEO Consultancy (Search Advisory Retainer)">
                              SEO Consultancy (Strategic Search Advisory Retainer)
                            </option>
                            <option value="SEO Strategy Building (Growth Engine Blueprint)">
                              SEO Strategy Building (End-to-End Growth Engine)
                            </option>
                            <option value="Not Sure / Needs Diagnostic Recommendation">
                              Not Sure / Need Diagnostic Recommendation
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                            Primary Bottleneck / Focus
                          </label>
                          <select
                            value={primaryObjective}
                            onChange={(e) => setPrimaryObjective(e.target.value)}
                            className="w-full px-3 py-2.5 bg-white border border-brand-200 rounded-xl text-xs text-brand-900 focus:border-accent-500 focus:ring-2 focus:ring-accent-400/20 outline-hidden cursor-pointer"
                          >
                            <option value="Architectural Review & Code Bottlenecks">
                              Architectural Review &amp; Code Bottlenecks
                            </option>
                            <option value="Algorithmic Update Impact / Recovery">
                              Algorithmic Update Resilience / Traffic Drops
                            </option>
                            <option value="Venture / Technology Investment Evaluation">
                              Venture / Technology Evaluation (Build vs. Buy)
                            </option>
                            <option value="Programmatic SEO Scalability Blueprint">
                              Programmatic SEO Scalability Blueprint
                            </option>
                            <option value="Zero-Downtime CMS Migration Oversight">
                              Zero-Downtime Migration Oversight
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Explicit acknowledgment box */}
                      <div className="p-3 bg-amber-500/10 border border-amber-400/40 rounded-xl text-[11px] text-amber-900 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span>
                          <strong>Confirmed:</strong> I understand that this service provides high-leverage strategic guidance and architectural roadmaps for my in-house/contract engineering and growth teams, rather than outsourced hands-on code development.
                        </span>
                      </div>

                    </div>
                  )}

                  {/* GENERAL INQUIRY CONDITIONAL FIELDS */}
                  {inquiryType === 'general' && (
                    <div className="p-5 bg-brand-50/60 rounded-2xl border border-brand-200/80 space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                          Subject / Topic of Discussion
                        </label>
                        <select
                          value={generalSubject}
                          onChange={(e) => setGeneralSubject(e.target.value)}
                          className="w-full px-3 py-2.5 bg-white border border-brand-200 rounded-xl text-xs text-brand-900 focus:border-accent-500 focus:ring-2 focus:ring-accent-400/20 outline-hidden cursor-pointer"
                        >
                          <option value="General Discussion / Question">General Question or Discussion</option>
                          <option value="Keynote Speaking / Webinar / Podcast">Keynote Speaking / Webinar / Podcast</option>
                          <option value="Press & Industry Research Interview">Press &amp; Industry Research Interview</option>
                          <option value="SEO Community & Tool Collaboration">SEO Community &amp; Tool Feedback</option>
                          <option value="Other Inquiries">Other Inquiries</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Detailed Message Textarea */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider">
                        {inquiryType === 'advisory' ? 'Project Context & Strategic Objectives' : 'Your Message / Inquiry'} <span className="text-accent-600">*</span>
                      </label>
                      <span className="text-[10px] text-brand-400">Be as detailed as possible</span>
                    </div>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        inquiryType === 'advisory'
                          ? "Briefly describe your business model, current search or technical bottlenecks, existing tech stack, and what success looks like in 6 to 12 months..."
                          : "Please share the details of your inquiry, event date (if speaking), or what you would like to discuss..."
                      }
                      className="w-full p-3.5 bg-brand-50/40 border border-brand-200 rounded-xl text-xs text-brand-950 placeholder-brand-400 focus:bg-white focus:border-accent-500 focus:ring-2 focus:ring-accent-400/20 outline-hidden transition-all leading-relaxed"
                    />
                  </div>

                  {/* Submit Button & Assurance Strip */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-brand-100">
                    <button
                      type="submit"
                      className="px-7 py-3.5 bg-brand-950 hover:bg-accent-600 text-white rounded-xl text-xs font-bold transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      <span>{inquiryType === 'advisory' ? 'Submit Strategic Advisory Inquiry' : 'Send General Message'}</span>
                    </button>

                    <span className="text-[11px] text-brand-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-400" />
                      Personal response within 24 business hours
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. Bottom Scope & Capacity Notice (Moved from Hero to Bottom) */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#180f2d] border border-amber-500/50 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-amber-500/20 border border-amber-500/40 rounded-xl text-amber-400 shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/30">
                  IMPORTANT SCOPE NOTICE
                </span>
                <span className="text-xs text-brand-300 hidden sm:inline">• Active Capacity Policy</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-200 leading-relaxed max-w-5xl">
                <strong className="text-amber-300 font-semibold">Strictly NOT accepting hands-on project access or freelance dev contracts.</strong> Availability is strictly reserved for <span className="text-white font-semibold underline decoration-accent-400 underline-offset-2">Executive Business Consultancy</span>, <span className="text-white font-semibold underline decoration-accent-400 underline-offset-2">SEO Architectural Retainers</span>, and <span className="text-white font-semibold underline decoration-accent-400 underline-offset-2">Strategic Roadmaps</span> to guide your leadership and engineering teams. For non-service questions or speaking inquiries, please select "General Inquiry" in the form above.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
