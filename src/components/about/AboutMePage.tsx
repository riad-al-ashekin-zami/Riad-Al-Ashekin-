import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Calendar, 
  Clock,
  BookOpen, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Cpu, 
  Code2, 
  Briefcase, 
  Building2, 
  Users, 
  Globe, 
  Compass, 
  Target, 
  Award, 
  GraduationCap, 
  ChevronRight, 
  Check, 
  ExternalLink,
  Laptop,
  Network,
  Share2,
  Workflow,
  Search,
  MessageSquare,
  ShieldCheck,
  FileText,
  PackageCheck,
  Camera,
  Upload,
  RefreshCw
} from 'lucide-react';
import { VerifiedProfiles } from './VerifiedProfiles';
import { DevelopedProducts } from './DevelopedProducts';
import { useAuthorPhoto, PORTRAIT_OPTIONS, SITE_AUTHOR } from '../../data/authorProfile';

interface Props {
  onNavigate: (slug: string) => void;
}

export function AboutMePage({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'journey' | 'agencies' | 'framework' | 'responsibilities'>('overview');
  const { avatar: authorAvatar, updatePhoto, resetPhoto } = useAuthorPhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        updatePhoto(result);
      }
    };
    reader.readAsDataURL(file);
  };

  // Timeline Milestone data
  const timelineMilestones = [
    {
      year: '2013',
      phase: 'Foundational Learning Phase',
      title: 'Initial Entry into Technology & Digital Marketing',
      description: 'Began building foundational knowledge in technology, digital marketing principles, web mechanics, and online business ecosystems. This formative period established a passion for understanding how software, search engines, and commerce intersect.',
      skills: ['Digital Marketing Fundamentals', 'Online Business Mechanics', 'Early Web Technologies', 'Digital Asset Research'],
      icon: <BookOpen className="w-5 h-5 text-accent-400" />
    },
    {
      year: '2015',
      phase: 'Career Beginning — Freelance Marketplaces',
      title: 'Professional Freelance Work & Graphic Design',
      description: 'Entered professional freelance service delivery on global marketplaces including Fiverr and Upwork. Initially focused on graphic design and visual brand communication, learning early client communication, deadline discipline, and deliverable execution.',
      skills: ['Fiverr & Upwork Freelancing', 'Graphic Design & Visual Identity', 'Client Communication', 'Asset Production'],
      icon: <Laptop className="w-5 h-5 text-blue-400" />
    },
    {
      year: '2016 – 2018',
      phase: 'Cross-Sector Digital Expansion',
      title: 'Affiliate, CPA Marketing & Multi-Platform Web Development',
      description: 'Expanded technical capabilities across diverse online business models. Built and managed digital properties across WordPress, Shopify, Magento, and Drupal. Hands-on involvement in affiliate marketing, performance CPA campaigns, and conversion optimization.',
      skills: ['WordPress', 'Shopify', 'Magento', 'Drupal', 'Affiliate Marketing', 'CPA Campaigns', 'Conversion Funnels'],
      icon: <Globe className="w-5 h-5 text-emerald-400" />
    },
    {
      year: 'Academic Milestone',
      phase: 'Technical Formalization',
      title: 'Computer Science & Engineering Education',
      description: 'Enrolled in Computer Science to strengthen and formalize technical engineering foundations. The curriculum modernized practical skills with structured knowledge in software engineering, database design, algorithms, system architecture, and scalable web technologies.',
      skills: ['Software Architecture', 'Algorithms & Data Structures', 'Database Design', 'Web Engineering', 'System Modeling'],
      icon: <GraduationCap className="w-5 h-5 text-purple-400" />
    },
    {
      year: 'Growth Era',
      phase: 'Client Service & Business Systems',
      title: 'Domestic & International Business Consulting',
      description: 'Post-graduation, transitioned to dedicated client service for businesses in Bangladesh and internationally. Focused on helping companies build sustainable digital infrastructure, organic search visibility, customer acquisition funnels, and measurable growth systems.',
      skills: ['Search Engine Optimization', 'Organic Customer Acquisition', 'Technical Auditing', 'Infrastructure Development', 'Lead Generation'],
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />
    },
    {
      year: 'Present',
      phase: 'Agency Operations & Co-Founding',
      title: 'Co-Founder & Multi-Agency Strategic Leadership',
      description: 'Progressed away from transactional freelance marketplaces into an agency-based business model. Currently co-founding and guiding six agency operations across software development, web maintenance, and specialized SEO architecture in collaboration with strategic business partners.',
      skills: ['Co-Founder Leadership', 'Client Relationship Management', 'Business Development', 'Agency Operations', 'Strategic Advisory'],
      icon: <Building2 className="w-5 h-5 text-accent-400" />
    }
  ];

  // Six Agencies Ecosystem
  const agencies = [
    {
      type: 'Web Development & Maintenance Firm',
      focus: 'Enterprise Web Engineering & Support',
      description: 'Provides end-to-end web development, CMS architecture, performance optimization, and continuous technical maintenance for growth-stage businesses.',
      location: 'Bangladesh & Canada Branch',
      role: 'Co-Founder & Strategy',
      deliverables: ['Custom Web Applications', 'WordPress & Headless CMS', '24/7 SLA Maintenance', 'Security Hardening'],
      badge: 'International Branch (Canada)'
    },
    {
      type: 'Software Development Firm',
      focus: 'Bespoke Software Engineering & SaaS Architecture',
      description: 'Specializes in tailored business software, API integrations, cloud architectures, and scalable digital product engineering.',
      location: 'Operational Base',
      role: 'Co-Founder',
      deliverables: ['SaaS Product Engineering', 'Custom Backend Systems', 'API Ecosystems', 'Database Architecture'],
      badge: 'Core Software Firm'
    },
    {
      type: 'Specialized Development Firm (A)',
      focus: 'Front-End Platforms & E-Commerce Systems',
      description: 'Engineers high-conversion e-commerce storefronts, Shopify Plus stores, and reactive web applications optimized for speed and conversion.',
      location: 'Operational Base',
      role: 'Co-Founder',
      deliverables: ['Shopify Plus Architectures', 'Next.js / React Front-Ends', 'Checkout Optimization', 'Omnichannel Commerce'],
      badge: 'Development Firm'
    },
    {
      type: 'Specialized Development Firm (B)',
      focus: 'Full-Stack Web Solutions & Portal Engineering',
      description: 'Delivers custom client portals, internal workflow management tools, and database-driven business applications.',
      location: 'Operational Base',
      role: 'Co-Founder',
      deliverables: ['Client & Partner Portals', 'Internal Workflow Tools', 'Legacy Modernization', 'Data Migration'],
      badge: 'Development Firm'
    },
    {
      type: 'Dedicated SEO Strategy & Search Architecture Firm',
      focus: 'Technical Search Architecture & Organic Growth',
      description: 'Executes high-level technical audits, entity-based topical authority modeling, programmatic SEO, and crawl optimization for enterprise brands.',
      location: 'Strategic Operations',
      role: 'Co-Founder & Lead SEO Strategist',
      deliverables: ['Crawl & Indexation Engineering', 'Entity & Schema Architecture', 'Core Web Vitals Remediation', 'Penalty Recovery'],
      badge: 'SEO Agency Operation'
    },
    {
      type: 'Sister Companies & Digital Initiatives',
      focus: 'Digital Presence & Lead Generation Incubation',
      description: 'Incubates specialized digital initiatives, lead generation workflows, and cross-discipline collaboration platforms with business partners.',
      location: 'Network Operations',
      role: 'Co-Founder & Strategic Partner',
      deliverables: ['Lead Generation Systems', 'Commercial Funnel Testing', 'Partner Collaborations', 'Digital Asset Incubation'],
      badge: 'Related Initiatives'
    }
  ];

  // International Footprint
  const businessLocations = [
    {
      region: 'Connecticut, USA',
      role: 'Business & Agency Associate Operations',
      description: 'Collaborative business presence and client relationship outreach across North American markets.',
      highlight: 'US Regional Associate'
    },
    {
      region: 'Southampton, UK',
      role: 'European Business & Agency Associate Presence',
      description: 'Operational network and strategic partner collaboration serving UK and European commercial engagements.',
      highlight: 'UK Regional Associate'
    },
    {
      region: 'Canada',
      role: 'Web Development & Software Company Branch',
      description: 'Official corporate branch dedicated to web engineering, technical maintenance, and North American client service delivery.',
      highlight: 'Dedicated Branch'
    },
    {
      region: 'Bangladesh',
      role: 'Engineering Base & Central Operations',
      description: 'Core engineering, development infrastructure, technical implementation, and multi-agency executive management.',
      highlight: 'Engineering Hub'
    }
  ];

  // Business Growth & Digital Acquisition Framework Pipeline
  const frameworkSteps = [
    {
      step: '01',
      name: 'Digital Strategy',
      tagline: 'Market & Technical Discovery',
      details: 'Assessing competitive landscape, target audience intent, unit economics, and technology requirements to establish a clear commercial roadmap.',
      icon: <Compass className="w-5 h-5 text-accent-400" />
    },
    {
      step: '02',
      name: 'Website & Online Presence',
      tagline: 'Digital Infrastructure',
      details: 'Building high-performance, mobile-responsive web platforms that reflect brand credibility, fast loading speeds, and frictionless user experiences.',
      icon: <Laptop className="w-5 h-5 text-blue-400" />
    },
    {
      step: '03',
      name: 'SEO & Paid Acquisition',
      tagline: 'High-Intent Traffic Generation',
      details: 'Deploying technical search architecture and targeted campaigns to capture demand from prospective buyers actively searching for solutions.',
      icon: <Search className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '04',
      name: 'Lead Generation',
      tagline: 'Commercial Capture Points',
      details: 'Creating contextual conversion opportunities, valuation calculators, resource inquiries, and clear inquiry triggers.',
      icon: <Target className="w-5 h-5 text-amber-400" />
    },
    {
      step: '05',
      name: 'Lead Nurturing',
      tagline: 'Engagement & Education',
      details: 'Supporting prospect evaluation through structured email sequences, value-driven case studies, and transparent service information.',
      icon: <Workflow className="w-5 h-5 text-purple-400" />
    },
    {
      step: '06',
      name: 'Customer Conversion',
      tagline: 'Commercial Agreement',
      details: 'Turning qualified inquiries into active engagements through structured proposals, transparent scopes, and consultative discovery.',
      icon: <CheckCircle2 className="w-5 h-5 text-accent-400" />
    },
    {
      step: '07',
      name: 'Service Delivery',
      tagline: 'Operational Execution',
      details: 'Executing engineering sprints, technical audits, development milestones, and ongoing deliverables through dedicated agency teams.',
      icon: <Layers className="w-5 h-5 text-blue-400" />
    },
    {
      step: '08',
      name: 'Client Relationship Development',
      tagline: 'Long-Term Retention & Growth',
      details: 'Maintaining proactive communication, executive reporting, strategic roadmap updates, and long-term business advisory.',
      icon: <Users className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-brand-50 flex flex-col">
      
      {/* 1. Executive Hero Header (#150d28 royal theme) */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80">
        
        {/* Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -25, 20, 0],
              scale: [1, 1.15, 0.95, 1],
              opacity: [0.25, 0.38, 0.25]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 left-1/12 w-[550px] h-[550px] bg-accent-600/30 rounded-full blur-[140px]"
          />
          <motion.div 
            animate={{
              x: [0, -35, 25, 0],
              y: [0, 25, -20, 0],
              scale: [1, 1.12, 0.96, 1],
              opacity: [0.2, 0.32, 0.2]
            }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-brand-700/30 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-300 mb-8">
            <button 
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors font-medium cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-brand-600" />
            <span className="text-white font-medium">About Me</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold tracking-wide text-accent-300 uppercase backdrop-blur-xs">
                <Briefcase className="w-3.5 h-3.5 text-accent-300" />
                <span>Executive Profile &amp; Background</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Riad Al Ashekin Zami
                </h1>
                <p className="text-lg sm:text-xl font-medium text-accent-300 tracking-wide">
                  Computer Science Engineer • Co-Founder • Lead SEO Strategist • Business Consultant
                </p>
              </div>

              <p className="text-base sm:text-lg text-brand-200 leading-relaxed font-normal">
                I am a technology and digital strategy professional with over a decade of hands-on experience spanning web development, software engineering, search engine architecture, and multi-agency operations. As a Co-Founder across six specialized technology and digital agencies, my daily focus centers on bridging engineering precision with sustainable commercial growth.
              </p>

              {/* Core Pillars Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Co-Founder & Agency Leadership',
                  'Client Relationship Management',
                  'Business Development & GTM',
                  'SEO Strategy & Architecture',
                  'Technology & Business Integration'
                ].map((pill, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 text-brand-200 border border-white/10"
                  >
                    <Check className="w-3 h-3 text-accent-400" />
                    {pill}
                  </span>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('/seo-pricing/')}
                  className="px-6 py-3.5 bg-accent-600 hover:bg-accent-500 text-white rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-lg shadow-accent-950/40 cursor-pointer"
                >
                  <span>Pricing &amp; Retainers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/contact/')}
                  className="px-6 py-3.5 bg-brand-900/90 hover:bg-brand-800 text-brand-100 hover:text-white rounded-xl font-semibold text-xs sm:text-sm transition-all border border-brand-700/80 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Contact for Advisory</span>
                </button>
              </div>

            </div>

            {/* Right Visual Card Column - 1:1 Author Portrait Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                
                {/* Decorative ambient backdrop */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent-500/30 via-brand-600/20 to-purple-500/30 rounded-3xl blur-lg" />
                
                <div className="relative bg-[#180f2d] border border-brand-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-5">
                  
                  {/* Hidden file input for uploading custom photo */}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handlePhotoUpload} 
                    accept="image/*" 
                    className="hidden" 
                  />

                  {/* 1:1 Author Square Portrait Frame */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-brand-700/90 shadow-xl bg-brand-950 group">
                    <img 
                      src={authorAvatar} 
                      alt="Riad Al Ashekin Zami - Computer Science Engineer, Co-Founder & Lead SEO Strategist"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105" 
                    />
                    
                    {/* Hover Camera Overlay to quickly Change/Upload Photo */}
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-brand-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 cursor-pointer z-20 backdrop-blur-xs"
                      title="Click to upload/change photo"
                    >
                      <div className="p-3 rounded-full bg-accent-600 text-white shadow-lg">
                        <Camera className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider bg-brand-900/90 px-3 py-1 rounded-full border border-brand-700">
                        Upload / Change Photo
                      </span>
                    </button>

                    {/* Top Floating Status Pill */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono font-bold text-emerald-300 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active Co-Founder &amp; Strategist</span>
                      </div>
                    </div>

                    {/* Subtle bottom gradient overlay with quick nameplate */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#150d28] via-[#150d28]/70 to-transparent p-4 pt-10 z-10 pointer-events-none">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                        Riad Al Ashekin Zami
                      </h3>
                      <p className="text-xs text-accent-300 font-medium">
                        B.Sc. in Computer Science &amp; Engineering
                      </p>
                    </div>
                  </div>

                  {/* Photo Controls: Quick Upload & Preset Switcher */}
                  <div className="flex items-center justify-between gap-2 p-2 bg-brand-950/60 rounded-xl border border-brand-800/60 text-xs">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-600/30 hover:bg-accent-600/50 text-accent-200 hover:text-white border border-accent-500/40 font-semibold transition-all cursor-pointer text-[11px]"
                      title="Upload new image from your device"
                    >
                      <Upload className="w-3.5 h-3.5 text-accent-400" />
                      <span>Upload Photo</span>
                    </button>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => updatePhoto(PORTRAIT_OPTIONS.formal)}
                        className={`px-2 py-1 rounded-md text-[10px] font-mono font-semibold transition-all cursor-pointer ${
                          authorAvatar === PORTRAIT_OPTIONS.formal
                            ? 'bg-accent-600 text-white shadow-xs'
                            : 'text-brand-400 hover:text-white hover:bg-white/5'
                        }`}
                        title="Switch to Formal Studio Portrait"
                      >
                        Formal
                      </button>
                      <button
                        type="button"
                        onClick={() => updatePhoto(PORTRAIT_OPTIONS.casual)}
                        className={`px-2 py-1 rounded-md text-[10px] font-mono font-semibold transition-all cursor-pointer ${
                          authorAvatar === PORTRAIT_OPTIONS.casual
                            ? 'bg-accent-600 text-white shadow-xs'
                            : 'text-brand-400 hover:text-white hover:bg-white/5'
                        }`}
                        title="Switch to Casual Headshot"
                      >
                        Casual
                      </button>
                      {authorAvatar !== PORTRAIT_OPTIONS.formal && authorAvatar !== PORTRAIT_OPTIONS.casual && (
                        <button
                          type="button"
                          onClick={() => resetPhoto()}
                          className="px-2 py-1 rounded-md text-[10px] font-mono text-brand-400 hover:text-rose-400 hover:bg-white/5 transition-all cursor-pointer"
                          title="Reset to default portrait"
                        >
                          <RefreshCw className="w-3 h-3 inline mr-1" />
                          Reset
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Fact Sheet Grid */}
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-brand-400 font-mono text-[10px] uppercase">Experience</span>
                      <p className="font-bold text-white text-sm">Since 2013</p>
                      <p className="text-[11px] text-brand-300">10+ Years in Tech</p>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-brand-400 font-mono text-[10px] uppercase">Agency Network</span>
                      <p className="font-bold text-accent-300 text-sm">6 Agencies</p>
                      <p className="text-[11px] text-brand-300">Co-Founder &amp; Partner</p>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-brand-400 font-mono text-[10px] uppercase">Academic Core</span>
                      <p className="font-bold text-white text-sm">CS Engineer</p>
                      <p className="text-[11px] text-brand-300">Formal CS Degree</p>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-brand-400 font-mono text-[10px] uppercase">Global Branches</span>
                      <p className="font-bold text-white text-sm">US • UK • CA</p>
                      <p className="text-[11px] text-brand-300">International Presence</p>
                    </div>
                  </div>

                  {/* Positioning micro-quote */}
                  <div className="pt-2 border-t border-brand-800/80">
                    <p className="text-xs text-brand-300/90 leading-relaxed italic">
                      "I view search architecture, web development, and digital marketing not as isolated silos, but as interconnected systems that serve measurable business economics."
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Page Section Navigation Tabs */}
      <section className="bg-white border-b border-brand-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {[
              { id: 'overview', label: 'Strategic Positioning', icon: <Compass className="w-4 h-4" /> },
              { id: 'products', label: 'Developed Products (9)', icon: <PackageCheck className="w-4 h-4" /> },
              { id: 'journey', label: 'Career Journey (Timeline)', icon: <Clock className="w-4 h-4" /> },
              { id: 'agencies', label: 'Agencies & Presence', icon: <Building2 className="w-4 h-4" /> },
              { id: 'responsibilities', label: 'Core Responsibilities', icon: <Briefcase className="w-4 h-4" /> },
              { id: 'framework', label: 'Business Growth Framework', icon: <Workflow className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-brand-950 text-white shadow-xs'
                    : 'bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200/80'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 w-full">
        
        {/* TAB: DEVELOPED PRODUCTS (Dedicated Tab View) */}
        {activeTab === 'products' && (
          <DevelopedProducts />
        )}

        {/* TAB 1: STRATEGIC POSITIONING & IDENTITY */}
        {(activeTab === 'overview' || activeTab === 'all') && (
          <section className="space-y-10">
            
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-700 font-mono">
                [ 01. Personal Brand Positioning ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                Beyond Generic Titles: Technology, Strategy &amp; Business Operations
              </h2>
              <p className="text-sm sm:text-base text-brand-600 leading-relaxed">
                Rather than an isolated freelancer or traditional SEO consultant, my professional background brings together technical computer science rigor, executive co-founder leadership, and multi-disciplinary digital growth experience.
              </p>
            </div>

            {/* 3 Core Identity Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              <div className="bg-white border border-brand-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-accent-300 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-100/70 border border-accent-200 flex items-center justify-center text-accent-700">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-950">
                    Co-Founder &amp; Agency Leadership
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                    Active Co-Founder involved in six technology and digital operations. Deeply engaged in strategic decision-making, team alignment, client onboarding, and building sustainable service infrastructure across multiple companies.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-brand-100 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-brand-50 text-brand-700">
                    Cross-Firm Governance
                  </span>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-brand-50 text-brand-700">
                    Partner Alignment
                  </span>
                </div>
              </div>

              <div className="bg-white border border-brand-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-accent-300 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center text-blue-700">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-950">
                    Computer Science Engineering
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                    Trained with a formal Computer Science engineering background. This technical grounding allows me to inspect code-level architectures, analyze complex algorithms, design resilient database schemas, and converse fluently with development teams.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-brand-100 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-brand-50 text-brand-700">
                    B.Sc. in CSE
                  </span>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-brand-50 text-brand-700">
                    System Architecture
                  </span>
                </div>
              </div>

              <div className="bg-white border border-brand-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-accent-300 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-950">
                    Lead SEO &amp; Growth Strategist
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                    Approaching search visibility as a commercial and financial asset. Specializing in high-intent customer acquisition, semantic topical clustering, Core Web Vitals optimization, and multi-channel lead generation frameworks.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-brand-100 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-brand-50 text-brand-700">
                    Crawl Architecture
                  </span>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-brand-50 text-brand-700">
                    Revenue Attribution
                  </span>
                </div>
              </div>

            </div>

            {/* Credibility & Reality Statement Box */}
            <div className="bg-white rounded-2xl border border-brand-200 p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center gap-3 text-brand-950">
                <ShieldCheck className="w-5 h-5 text-accent-600" />
                <h3 className="text-base sm:text-lg font-bold">
                  Professional Discipline &amp; Honest Positioning
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                I do not make exaggerated claims, promise guaranteed #1 search rankings, or promote overnight transformation formulas. Sustainable business development is the outcome of rigorous engineering, methodical user experience design, sound market positioning, and persistent execution. My role is to help leadership and technical teams eliminate friction, engineer defensible digital assets, and connect digital presence with real revenue.
              </p>
            </div>

          </section>
        )}

        {/* TAB 2: CHRONOLOGICAL CAREER JOURNEY */}
        {(activeTab === 'journey' || activeTab === 'all') && (
          <section className="space-y-10">
            
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-700 font-mono">
                [ 02. Chronological Timeline ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                The Career Journey: From Foundational Learning to Agency Operations
              </h2>
              <p className="text-sm sm:text-base text-brand-600 leading-relaxed">
                A structured overview of how over a decade of continuous learning, freelance marketplace delivery, formal engineering education, and agency co-founding formed my comprehensive digital background.
              </p>
            </div>

            {/* Vertical Interactive Timeline */}
            <div className="relative border-l-2 border-brand-200 ml-4 sm:ml-6 space-y-10 py-4">
              {timelineMilestones.map((item, index) => (
                <div key={index} className="relative pl-7 sm:pl-10 group">
                  
                  {/* Timeline Bullet Marker */}
                  <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white border-2 border-accent-600 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  {/* Card Content */}
                  <div className="bg-white border border-brand-200/90 rounded-2xl p-5 sm:p-7 shadow-xs hover:border-accent-300 transition-all space-y-3">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-700 bg-accent-50 border border-accent-200/70 px-2.5 py-0.5 rounded-full">
                        {item.year}
                      </span>
                      <span className="text-xs font-semibold text-brand-400">
                        {item.phase}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-brand-950">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-brand-100 flex flex-wrap gap-1.5">
                      {item.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-200/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              ))}
            </div>

            {/* Multi-Sector Technical Ecosystem Highlights */}
            <div className="bg-brand-900 text-white rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent-300 text-xs font-mono font-bold uppercase">
                  <Layers className="w-4 h-4" />
                  <span>Platform &amp; Ecosystem Fluency</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Multi-CMS &amp; Web Platform Experience
                </h3>
                <p className="text-xs sm:text-sm text-brand-200 leading-relaxed max-w-3xl">
                  Throughout my career, I have worked directly on diverse website architectures, e-commerce systems, and content management platforms. This gives me practical insight into how different CMS engines handle rendering, caching, indexing, and customer checkout journeys.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: 'WordPress', type: 'Custom Themes, ACF, Headless', tag: 'High Fluency' },
                  { name: 'Shopify', type: 'Shopify Plus, Liquid, Headless', tag: 'E-Commerce' },
                  { name: 'Magento', type: 'Multi-Store, Enterprise Catalog', tag: 'Enterprise' },
                  { name: 'Drupal', type: 'Structured Taxonomy, Enterprise CMS', tag: 'Architecture' },
                ].map((cms, cIdx) => (
                  <div key={cIdx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <span className="text-[10px] font-mono text-accent-300 uppercase tracking-wide">{cms.tag}</span>
                    <h4 className="font-bold text-white text-base">{cms.name}</h4>
                    <p className="text-[11px] text-brand-300">{cms.type}</p>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* TAB 3: AGENCY ECOSYSTEM & GLOBAL PRESENCE */}
        {(activeTab === 'agencies' || activeTab === 'all') && (
          <section className="space-y-10">
            
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-700 font-mono">
                [ 03. Agency Operations &amp; Co-Founder Involvement ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                Co-Founder of Six Specialized Technology &amp; Digital Agencies
              </h2>
              <p className="text-sm sm:text-base text-brand-600 leading-relaxed">
                The transition from individual freelancing to an agency-based business model enabled strategic partnerships, specialized service delivery, and collaborative client engagements. I work with business partners across six specialized corporate entities.
              </p>
            </div>

            {/* 6 Agencies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agencies.map((agency, aIdx) => (
                <div 
                  key={aIdx}
                  className="bg-white border border-brand-200/90 rounded-2xl p-6 shadow-xs hover:border-accent-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-700 bg-accent-50 border border-accent-200/70 px-2 py-0.5 rounded">
                        {agency.badge}
                      </span>
                      <span className="text-[11px] font-medium text-brand-500">
                        {agency.role}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-brand-950 leading-snug">
                      {agency.type}
                    </h3>

                    <p className="text-xs font-semibold text-brand-700">
                      Focus: {agency.focus}
                    </p>

                    <p className="text-xs text-brand-600 leading-relaxed">
                      {agency.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-brand-100">
                      <span className="text-[10px] font-mono uppercase text-brand-400 font-semibold">Capabilities</span>
                      <div className="flex flex-wrap gap-1">
                        {agency.deliverables.map((item, dIdx) => (
                          <span 
                            key={dIdx}
                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-brand-100 flex items-center justify-between text-xs text-brand-500">
                    <span className="text-[11px] font-medium flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-accent-600" />
                      {agency.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* International Footprint & Locations */}
            <div className="space-y-6 pt-4">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2 text-accent-700 text-xs font-mono font-bold uppercase">
                  <Network className="w-4 h-4" />
                  <span>Business Presence &amp; Operational Branches</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-950">
                  Regional Operations &amp; Company Footprint
                </h3>
                <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                  Our business and agency involvement encompasses operational connections, associate presence, and dedicated corporate branches across multiple international territories.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {businessLocations.map((loc, lIdx) => (
                  <div 
                    key={lIdx}
                    className="bg-white border border-brand-200 rounded-2xl p-5 shadow-xs hover:border-brand-300 transition-all space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 bg-brand-100/70 px-2 py-0.5 rounded">
                        {loc.highlight}
                      </span>
                      <Globe className="w-4 h-4 text-accent-600" />
                    </div>
                    <h4 className="text-base font-bold text-brand-950">
                      {loc.region}
                    </h4>
                    <p className="text-xs font-semibold text-accent-800">
                      {loc.role}
                    </p>
                    <p className="text-xs text-brand-600 leading-relaxed">
                      {loc.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* TAB 4: CURRENT PROFESSIONAL RESPONSIBILITIES */}
        {(activeTab === 'responsibilities' || activeTab === 'all') && (
          <section className="space-y-10">
            
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-700 font-mono">
                [ 04. Current Professional Responsibilities ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                Executive Focus: Client Relationships, Business Development &amp; Administration
              </h2>
              <p className="text-sm sm:text-base text-brand-600 leading-relaxed">
                As a Co-Founder across multiple entities, my day-to-day involvement connects strategic business vision with seamless team execution, long-term client engagements, and sustainable partnership development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Responsibility 1: Client Relationship Management */}
              <div className="bg-white border border-brand-200/90 rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
                <div className="w-11 h-11 rounded-xl bg-accent-100 flex items-center justify-center text-accent-700">
                  <Users className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-brand-950">
                    Client Relationship Management
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                    Cultivating long-term partnerships through deep discovery, clear expectations, and regular executive touchpoints.
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-brand-700 border-t border-brand-100 pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>Engaging with executive leadership to understand underlying commercial priorities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>Facilitating communication between client stakeholders and internal engineering teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>Ensuring service delivery matches stated contractual roadmaps and quality standards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>Conducting quarterly strategic reviews to identify new areas for digital growth.</span>
                  </li>
                </ul>
              </div>

              {/* Responsibility 2: Business Development */}
              <div className="bg-white border border-brand-200/90 rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-brand-950">
                    Business Development &amp; Partnerships
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                    Expanding company capabilities and market reach by identifying opportunities and creating collaborative ventures.
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-brand-700 border-t border-brand-100 pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Identifying high-growth market segments across SaaS, e-commerce, and enterprise web.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Structuring strategic partnerships with technology vendors and agency collaborators.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Evaluating incoming enterprise opportunities to ensure alignment with our core delivery capacity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Representing our agencies in strategic negotiations and partnership discussions.</span>
                  </li>
                </ul>
              </div>

              {/* Responsibility 3: Business Administration */}
              <div className="bg-white border border-brand-200/90 rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-brand-950">
                    Business Administration &amp; Operations
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                    Overseeing how strategic decisions, service delivery, and company resources interconnect across ventures.
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-brand-700 border-t border-brand-100 pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Maintaining operational visibility over cross-company development pipelines.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Fostering continuous learning and engineering standards across development teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Aligning operational overhead and project pricing with fair market unit economics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Observing operational synergies between our software, web, and SEO teams.</span>
                  </li>
                </ul>
              </div>

            </div>

          </section>
        )}

        {/* TAB 5: DIGITAL STRATEGY & BUSINESS GROWTH FRAMEWORK */}
        {(activeTab === 'framework' || activeTab === 'all') && (
          <section className="space-y-10">
            
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-700 font-mono">
                [ 05. Digital Strategy &amp; Growth Framework ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                The End-to-End Business Growth &amp; Customer Acquisition Pipeline
              </h2>
              <p className="text-sm sm:text-base text-brand-600 leading-relaxed">
                Rather than treating SEO or web development as disconnected tasks, we view client acquisition as an integrated system. Below is our general business process framework for transforming digital presence into durable customer relationships.
              </p>
            </div>

            {/* Strategic Distinction Box */}
            <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-5 sm:p-6 text-xs sm:text-sm text-amber-900 leading-relaxed flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">A Clear Operational Distinction:</strong> This framework illustrates a generalized, holistic business growth methodology. My personal engagement focuses on <em>high-level digital strategy, technical auditing, and strategic roadmaps</em>; technical development, code implementation, and multi-channel campaign execution are delivered collaboratively through the specialized engineering and marketing teams across our agency network.
              </div>
            </div>

            {/* Interactive Step-by-Step Flow Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {frameworkSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-brand-200 rounded-2xl p-5 shadow-xs hover:border-accent-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-lg bg-brand-950 text-white font-mono text-xs font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                      <div className="p-1.5 rounded-lg bg-brand-50 border border-brand-100 group-hover:bg-accent-50 transition-colors">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-brand-950">
                      {step.name}
                    </h3>

                    <p className="text-xs font-mono font-semibold text-accent-700">
                      {step.tagline}
                    </p>

                    <p className="text-xs text-brand-600 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {idx < frameworkSteps.length - 1 && (
                    <div className="pt-3 mt-3 border-t border-brand-100 flex items-center gap-1 text-[11px] font-mono text-brand-400">
                      <span>Proceeds to step {frameworkSteps[idx + 1].step}</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Process Flow Diagram Representation */}
            <div className="bg-[#150d28] text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-brand-800/80">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-400 font-bold">
                  System Architecture
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  The Complete Strategic Workflow
                </h3>
              </div>

              {/* Responsive Flow Path */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono font-bold text-center">
                <div className="px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white">Digital Strategy</div>
                <ChevronRight className="w-4 h-4 text-accent-400 shrink-0" />
                <div className="px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white">Website Presence</div>
                <ChevronRight className="w-4 h-4 text-accent-400 shrink-0" />
                <div className="px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white">SEO &amp; Paid Ads</div>
                <ChevronRight className="w-4 h-4 text-accent-400 shrink-0" />
                <div className="px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white">Lead Generation</div>
                <ChevronRight className="w-4 h-4 text-accent-400 shrink-0" />
                <div className="px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white">Lead Nurturing</div>
                <ChevronRight className="w-4 h-4 text-accent-400 shrink-0" />
                <div className="px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white">Conversion</div>
                <ChevronRight className="w-4 h-4 text-accent-400 shrink-0" />
                <div className="px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white">Service Delivery</div>
                <ChevronRight className="w-4 h-4 text-accent-400 shrink-0" />
                <div className="px-3 py-2 rounded-xl bg-accent-600 text-white font-bold shadow-md">Client Relationship</div>
              </div>
            </div>

          </section>
        )}

        {/* 6. Professional Philosophy & Standards Section */}
        <section className="bg-white rounded-3xl border border-brand-200/90 p-8 sm:p-10 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-700">
              Professional Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
              A Culture of Technical Rigor &amp; Transparent Partnership
            </h3>
            <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
              True digital success is rarely born from shortcut hacks or aggressive marketing slogans. It is built upon solid engineering principles, honest communication, and continuous incremental improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-brand-50/70 border border-brand-200/80 space-y-2.5">
              <h4 className="text-base font-bold text-brand-950 flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-700" />
                Code-Level Understanding
              </h4>
              <p className="text-xs text-brand-600 leading-relaxed">
                Because I write code and understand system architecture, my recommendations can be practically implemented by software developers without ambiguous hand-waving or unrealistic specs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-50/70 border border-brand-200/80 space-y-2.5">
              <h4 className="text-base font-bold text-brand-950 flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-700" />
                Accountability to Business Outcomes
              </h4>
              <p className="text-xs text-brand-600 leading-relaxed">
                Organic traffic is only meaningful if it generates qualified pipeline, reduces customer acquisition costs, or supports commercial enterprise valuation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-50/70 border border-brand-200/80 space-y-2.5">
              <h4 className="text-base font-bold text-brand-950 flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-700" />
                Long-Term Relationship Model
              </h4>
              <p className="text-xs text-brand-600 leading-relaxed">
                By moving away from transactional one-off gigs to agency partnerships, our teams invest deeply in understanding the unique competitive dynamics of our clients' industries.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-50/70 border border-brand-200/80 space-y-2.5">
              <h4 className="text-base font-bold text-brand-950 flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-700" />
                Direct Communication &amp; Integrity
              </h4>
              <p className="text-xs text-brand-600 leading-relaxed">
                No middle-manager telephone games. Straightforward diagnostic feedback on what is working, what needs improvement, and where commercial investment will yield the highest return.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Real-Life Software Products & Standalone Utilities */}
        {activeTab === 'overview' && (
          <DevelopedProducts />
        )}

        {/* 8. Strategic Advisory & Collaboration CTA Box */}
        <section className="bg-[#180f2d] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-accent-400/30">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-600/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold tracking-wide text-accent-300 uppercase">
                <Compass className="w-3.5 h-3.5 text-accent-300" />
                <span>Executive Collaboration</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Interested in Strategic Advisory, Consultancy, or Agency Partnership?
              </h3>
              <p className="text-xs sm:text-sm text-brand-200 leading-relaxed">
                Whether you need an independent technical audit, executive SEO consulting, a multi-year digital roadmap, or full-scale engineering delivery through our agency network, let's schedule an initial discussion.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3.5">
              <button
                onClick={() => onNavigate('/seo-pricing/')}
                className="px-6 py-3.5 bg-accent-600 hover:bg-accent-500 text-white rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-accent-950/40 cursor-pointer whitespace-nowrap"
              >
                <span>View Pricing &amp; Retainers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/contact/')}
                className="px-6 py-3.5 bg-brand-900 hover:bg-brand-800 text-brand-100 hover:text-white rounded-xl font-semibold text-xs sm:text-sm transition-all border border-brand-700/90 inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Direct Message</span>
              </button>
            </div>
          </div>

        </section>

        {/* 9. Official Web & Social Footprint */}
        <VerifiedProfiles />

      </main>

    </div>
  );
}
