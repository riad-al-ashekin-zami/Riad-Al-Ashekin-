import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { PageData, PageSection } from '../../types';
import { 
  ChevronRight, 
  Clock, 
  Calendar, 
  Share2, 
  Copy, 
  Check, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  ExternalLink,
  BookOpen,
  FileText,
  List,
  ChevronDown,
  User,
  Star,
  Award,
  Cpu,
  Layers,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Bookmark,
  Briefcase,
  Compass,
  Camera,
  Upload,
  RotateCcw
} from 'lucide-react';
import { getPageBySlug } from '../../data/pagesRegistry';
import { FeaturedImage } from './FeaturedImage';
import { SITE_AUTHOR, useAuthorPhoto } from '../../data/authorProfile';
import { getRelatedBlogPosts, BLOG_FEATURED_IMAGES } from '../../data/blogConfig';

interface Props {
  page: PageData;
  onNavigate: (slug: string) => void;
}

interface TocItem {
  id: string;
  title: string;
  level: number;
  subItems?: { id: string; title: string }[];
}

export function BlogPostLayout({ page, onNavigate }: Props) {
  const [copied, setCopied] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('intro');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [readProgress, setReadProgress] = useState(0);
  const [aiSummaryModal, setAiSummaryModal] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Author Photo Management (supports instant real-time photo replacement)
  const { avatar: authorAvatar, updatePhoto, resetPhoto } = useAuthorPhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === 'string') {
          updatePhoto(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Build dynamic TOC items from page data
  const tocItems: TocItem[] = [
    { id: 'intro-section', title: 'Executive Overview', level: 1 },
    ...(page.sections?.map((section, idx) => ({
      id: `section-${idx}`,
      title: section.title,
      level: 1,
      // If section is a company or ranked item, we can extract sub-titles if present
      subItems: section.bullets?.slice(0, 2).map((bullet, bIdx) => ({
        id: `section-${idx}-b${bIdx}`,
        title: bullet.split(':')[0] || bullet.slice(0, 30) + '...'
      }))
    })) || []),
    ...(page.keyTakeaways && page.keyTakeaways.length > 0 ? [{ id: 'key-takeaways-section', title: 'Key Insights & Takeaways', level: 1 }] : []),
    ...(page.faqs && page.faqs.length > 0 ? [{ id: 'faqs-section', title: 'Frequently Asked Questions', level: 1 }] : []),
    { id: 'author-bio-section', title: 'About the Author', level: 1 },
  ];

  // Track scroll reading progress and active section
  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setReadProgress(currentProgress);
      }

      // Detect active section via offset
      const allIds = [
        'intro-section',
        ...(page.sections?.map((_, idx) => `section-${idx}`) || []),
        'key-takeaways-section',
        'faqs-section',
        'author-bio-section'
      ];

      const scrollPos = window.scrollY + 160;

      for (let i = allIds.length - 1; i >= 0; i--) {
        const id = allIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSectionId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(id);
      setIsMobileTocOpen(false);
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(page.canonicalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`${page.headline} by Riad Al Ashekin`);
    const url = encodeURIComponent(page.canonicalUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(page.canonicalUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenAiPrompt = (platform: string) => {
    setAiSummaryModal(platform);
  };

  const copyPromptText = () => {
    const prompt = `Please provide a concise, high-value executive summary of this in-depth guide by Riad Al Ashekin: "${page.headline}". Focus on key architectural decisions, data benchmarks, and strategic recommendations from: ${page.canonicalUrl}`;
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  // Find active section title for mobile header
  const currentActiveTitle = tocItems.find(t => t.id === activeSectionId)?.title || 'Table of Contents';

  return (
    <div className="min-h-screen bg-[#f9f8fc] text-brand-950">
      {/* Top Reading Progress Bar (Fixed beneath top navbar) */}
      <div 
        role="progressbar"
        aria-valuenow={readProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Article reading progress"
        className="fixed top-[52px] sm:top-[60px] left-0 right-0 h-1 bg-brand-200/50 z-40"
      >
        <div 
          className="h-full bg-gradient-to-r from-accent-600 via-strategy-500 to-accent-500 transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Article Header Hero - Matching Homepage Brand Palette & Style (#150d28) */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80">
        
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
            className="absolute -top-20 left-1/10 w-[500px] h-[500px] bg-accent-600/25 rounded-full blur-[130px]"
          />
          <motion.div 
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 30, -15, 0],
              scale: [1, 1.15, 0.95, 1],
              opacity: [0.18, 0.3, 0.18]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/4 -right-16 w-[550px] h-[550px] bg-brand-700/25 rounded-full blur-[140px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-brand-300 mb-6 sm:mb-8">
            <button 
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors font-medium cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
            <button
              onClick={() => onNavigate('/blog/')}
              className="hover:text-white transition-colors font-medium cursor-pointer"
            >
              Blog
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
            <span className="text-white font-semibold truncate max-w-[240px] sm:max-w-md">
              {page.headline}
            </span>
          </nav>

          {/* Article Header (Full Width) */}
          <header className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold tracking-wide text-accent-300 uppercase backdrop-blur-xs">
                <Bookmark className="w-3 h-3 text-accent-300" />
                {page.badge}
              </span>
              {page.readingTime && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-300 bg-brand-900/60 px-2.5 py-1 rounded-full border border-brand-800">
                  <Clock className="w-3.5 h-3.5 text-brand-400" />
                  {page.readingTime}
                </span>
              )}
              {page.lastUpdated && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-300 bg-brand-900/60 px-2.5 py-1 rounded-full border border-brand-800">
                  <Calendar className="w-3.5 h-3.5 text-brand-400" />
                  Updated {page.lastUpdated}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight leading-[1.15] max-w-5xl">
              {page.headline}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-brand-200 font-normal leading-relaxed max-w-4xl">
              {page.subtitle}
            </p>

            {/* Author Byline & Social Share Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-brand-800/80">
              {/* Author details */}
              <div className="flex items-center gap-3.5">
                <div 
                  className="relative group cursor-pointer w-11 h-11 rounded-full overflow-hidden border-2 border-accent-400/90 shadow-sm shrink-0" 
                  onClick={() => fileInputRef.current?.click()} 
                  title="Click to update author photo"
                >
                  <img 
                    src={authorAvatar}
                    alt={SITE_AUTHOR.name}
                    className="w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-950/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-3.5 h-3.5 text-accent-300" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">
                      {SITE_AUTHOR.name}
                    </span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-brand-800 text-brand-200 border border-brand-700">
                      {SITE_AUTHOR.badge}
                    </span>
                  </div>
                  <p className="text-xs text-brand-300">
                    {SITE_AUTHOR.role}
                  </p>
                </div>
              </div>

              {/* Quick Share buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-900/80 hover:bg-brand-800 border border-brand-700/80 text-xs font-semibold text-brand-200 transition-colors shadow-2xs cursor-pointer"
                  title="Copy canonical link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-brand-400" />}
                  <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>

                <button
                  onClick={handleShareLinkedIn}
                  className="p-1.5 rounded-lg bg-brand-900/80 hover:bg-brand-800 border border-brand-700/80 text-brand-200 transition-colors shadow-2xs cursor-pointer"
                  title="Share on LinkedIn"
                >
                  <Share2 className="w-4 h-4 text-blue-400" />
                </button>

                <button
                  onClick={handleShareTwitter}
                  className="p-1.5 rounded-lg bg-brand-900/80 hover:bg-brand-800 border border-brand-700/80 text-brand-200 transition-colors shadow-2xs cursor-pointer"
                  title="Share on X (Twitter)"
                >
                  <span className="font-bold text-xs px-1 text-white">𝕏</span>
                </button>
              </div>
            </div>
          </header>

        </div>
      </section>

      {/* Main Container */}
      <div className="py-10 sm:py-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Featured Image - Dedicated High-Fidelity Artwork */}
        <FeaturedImage
          imageUrl={page.featuredImage || BLOG_FEATURED_IMAGES[page.slug] || BLOG_FEATURED_IMAGES[page.slug.endsWith('/') ? page.slug : `${page.slug}/`]}
          alt={page.featuredImageAlt || page.headline}
          caption={page.featuredImageCaption}
          badge={page.badge}
          headline={page.headline}
          category={page.category}
        />

        {/* Mobile Sticky TOC Drawer Button (Visible on screens < lg) */}
        <div className="lg:hidden sticky top-[56px] sm:top-[64px] z-30 mb-8 bg-white/95 backdrop-blur-md border border-brand-200 rounded-xl p-2.5 shadow-sm">
          <button
            onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
            className="w-full flex items-center justify-between text-xs font-semibold text-brand-900 px-2 cursor-pointer"
          >
            <div className="flex items-center gap-2 truncate">
              <List className="w-4 h-4 text-accent-600 shrink-0" />
              <span className="text-brand-500">On this page:</span>
              <span className="font-bold text-brand-950 truncate max-w-[200px]">{currentActiveTitle}</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[11px] font-mono text-accent-700 bg-accent-50 px-2 py-0.5 rounded-full border border-accent-200">
                {readProgress}%
              </span>
              <ChevronDown className={`w-4 h-4 text-brand-400 transition-transform duration-200 ${isMobileTocOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {/* Mobile TOC Dropdown */}
          {isMobileTocOpen && (
            <div className="mt-3 pt-3 border-t border-brand-100 max-h-80 overflow-y-auto space-y-1">
              {tocItems.map((item, index) => {
                const isActive = activeSectionId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                      isActive 
                        ? 'bg-accent-100/80 text-accent-900 font-bold border-l-2 border-accent-600' 
                        : 'text-brand-700 hover:bg-brand-50'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-brand-400 w-5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="truncate">{item.title}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Two-Column Editorial Grid: Left Sticky TOC + Right Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start relative">
          
          {/* =========================================================================
              LEFT COLUMN: FIXED / STICKY TABLE OF CONTENTS (Desktop)
             ========================================================================= */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3.5 sticky top-24 self-start">
            <div className="bg-white rounded-2xl border border-brand-200/90 shadow-soft-purple p-5 space-y-5 max-h-[calc(100vh-7.5rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-brand-200">
              
              {/* Header with Title & Read Progress */}
              <div className="border-b border-brand-100 pb-3">
                <div className="flex items-center justify-between text-xs font-bold text-brand-950 uppercase tracking-wider mb-2">
                  <span className="flex items-center gap-2">
                    <List className="w-4 h-4 text-accent-600" />
                    On This Page
                  </span>
                  <span className="text-[11px] font-mono text-accent-700 bg-accent-50 px-2 py-0.5 rounded-full border border-accent-200">
                    {readProgress}%
                  </span>
                </div>
                {/* Visual mini progress bar */}
                <div className="w-full bg-brand-100 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-accent-600 h-full rounded-full transition-all duration-200"
                    style={{ width: `${readProgress}%` }}
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <nav aria-label="Table of Contents" className="space-y-1 text-xs">
                {tocItems.map((item, index) => {
                  const isActive = activeSectionId === item.id;
                  return (
                    <div key={item.id} className="group">
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left py-2 px-2.5 rounded-lg transition-all duration-150 flex items-start gap-2.5 cursor-pointer leading-snug ${
                          isActive
                            ? 'bg-accent-50 text-accent-800 font-bold border-l-3 border-accent-600 shadow-2xs'
                            : 'text-brand-600 hover:text-brand-950 hover:bg-brand-50/80 font-medium'
                        }`}
                      >
                        <span className={`font-mono text-[10px] shrink-0 mt-0.5 ${isActive ? 'text-accent-700 font-bold' : 'text-brand-400'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="line-clamp-2">{item.title}</span>
                      </button>

                      {/* Sub-items (if present and section is active) */}
                      {isActive && item.subItems && item.subItems.length > 0 && (
                        <div className="ml-6 pl-2 border-l border-brand-200 space-y-1 my-1">
                          {item.subItems.map((sub) => (
                            <div
                              key={sub.id}
                              className="text-[11px] text-brand-500 py-0.5 pl-1 truncate hover:text-brand-900 transition-colors"
                            >
                              • {sub.title}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Sticky Sidebar CTA Card */}
              <div className="mt-6 pt-5 border-t border-brand-100">
                <div className="bg-gradient-to-br from-brand-950 to-brand-900 text-white rounded-xl p-4 space-y-3 relative overflow-hidden shadow-md">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-accent-500/20 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-accent-300 uppercase tracking-wider">
                    <Briefcase className="w-3.5 h-3.5 text-accent-400" />
                    Strategic Advisory
                  </div>
                  
                  <h4 className="text-xs font-bold leading-snug text-white">
                    Need High-Impact SaaS Architecture or SEO Growth?
                  </h4>
                  
                  <p className="text-[11px] text-brand-300 leading-relaxed">
                    Work directly with Riad Al Ashekin to optimize systems and dominate search.
                  </p>
                  
                  <button
                    onClick={() => onNavigate('/seo-pricing/')}
                    className="w-full py-2 px-3 bg-accent-600 hover:bg-accent-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Pricing &amp; Retainers</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Quick Prompt Copier / AI Summarizer Widget */}
              <div className="p-3 bg-brand-50/70 border border-brand-200/70 rounded-xl space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand-800">
                  <FileText className="w-3.5 h-3.5 text-accent-600" />
                  <span>AI Prompt Ready</span>
                </div>
                <p className="text-[10px] text-brand-600 leading-normal">
                  Want ChatGPT or Claude to summarize this guide?
                </p>
                <button
                  onClick={copyPromptText}
                  className="w-full py-1.5 px-2 bg-white hover:bg-brand-100 border border-brand-200 text-brand-800 rounded-md text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedPrompt ? <Check className="w-3 h-3 text-growth-600" /> : <Copy className="w-3 h-3 text-brand-500" />}
                  <span>{copiedPrompt ? 'Prompt Copied!' : 'Copy Summary Prompt'}</span>
                </button>
              </div>

            </div>
          </aside>

          {/* =========================================================================
              RIGHT COLUMN: ARTICLE MAIN CONTENT
             ========================================================================= */}
          <main className="lg:col-span-8 xl:col-span-8.5 space-y-12">
            
            {/* Quick AI Summarizer Bar (Prominently styled like the reference screenshot) */}
            <div className="bg-white border border-brand-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-accent-100 text-accent-700 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-950">Quick AI Summarizer</h4>
                  <p className="text-[11px] text-brand-500">Instant synthesis for busy executives &amp; founders</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => handleOpenAiPrompt('ChatGPT')}
                  className="px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 border border-brand-200 text-[11px] font-bold text-brand-800 transition-colors cursor-pointer"
                >
                  ChatGPT
                </button>
                <button
                  onClick={() => handleOpenAiPrompt('Perplexity')}
                  className="px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 border border-brand-200 text-[11px] font-bold text-brand-800 transition-colors cursor-pointer"
                >
                  Perplexity
                </button>
                <button
                  onClick={() => handleOpenAiPrompt('Claude')}
                  className="px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 border border-brand-200 text-[11px] font-bold text-brand-800 transition-colors cursor-pointer"
                >
                  Claude
                </button>
              </div>
            </div>

            {/* AI Summary Modal / Notification */}
            {aiSummaryModal && (
              <div className="p-4 bg-accent-50 border border-accent-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-accent-900 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-accent-600" />
                    Prompt for {aiSummaryModal}
                  </span>
                  <button 
                    onClick={() => setAiSummaryModal(null)}
                    className="text-xs text-brand-400 hover:text-brand-900"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-xs text-brand-700 font-mono bg-white p-3 rounded-lg border border-accent-200/60 leading-relaxed">
                  "Summarize this guide on {page.headline} by Riad Al Ashekin. Extract the top 5 key takeaways, architecture best practices, and decision framework from: {page.canonicalUrl}"
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={copyPromptText}
                    className="px-3 py-1.5 bg-accent-600 hover:bg-accent-500 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPrompt ? 'Copied to Clipboard!' : 'Copy Prompt'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Executive Overview / Intro Box (Section Anchor: intro-section) */}
            <section id="intro-section" className="scroll-mt-28 space-y-4">
              <div className="p-6 sm:p-8 bg-white border border-brand-200/90 rounded-2xl shadow-soft-purple text-brand-800 text-base sm:text-lg leading-relaxed relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-600" />
                <h3 className="text-xs font-bold text-accent-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-accent-600" /> Executive Overview
                </h3>
                <p className="font-normal text-brand-800 leading-relaxed">
                  {page.intro}
                </p>
              </div>
            </section>

            {/* Dynamic Article Sections (Section Anchors: section-0, section-1, etc.) */}
            {page.sections && page.sections.length > 0 && (
              <div className="space-y-12">
                {page.sections.map((section, idx) => {
                  const sectionId = `section-${idx}`;
                  // Detect if section title is a company profile e.g. "1. Company Name"
                  const isNumberedItem = /^\d+[\.\–\-]/.test(section.title);

                  return (
                    <article 
                      key={idx} 
                      id={sectionId} 
                      className="scroll-mt-28 space-y-5 bg-white border border-brand-200/80 rounded-2xl p-6 sm:p-8 shadow-2xs transition-all hover:border-brand-300"
                    >
                      {/* Section Title & Anchor Link */}
                      <div className="flex items-start justify-between gap-4 border-b border-brand-100 pb-4">
                        <div className="space-y-1">
                          {isNumberedItem && (
                            <span className="text-[11px] font-mono font-bold text-accent-700 uppercase tracking-wider bg-accent-50 px-2 py-0.5 rounded border border-accent-200">
                              Ranked Analysis
                            </span>
                          )}
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                            {section.title}
                          </h2>
                        </div>
                        <button
                          onClick={() => scrollToSection(sectionId)}
                          className="p-1.5 text-brand-300 hover:text-accent-600 transition-colors shrink-0"
                          title="Anchor link"
                        >
                          #
                        </button>
                      </div>

                      {/* Main Paragraph Content */}
                      <p className="text-base text-brand-700 leading-relaxed font-normal">
                        {section.content}
                      </p>

                      {/* Highlighted Bullets / Strengths / Key Attributes */}
                      {section.bullets && section.bullets.length > 0 && (
                        <div className="pt-2">
                          <div className="bg-brand-50/60 border border-brand-200/60 rounded-xl p-4 sm:p-5 space-y-3">
                            <h4 className="text-xs font-bold text-brand-900 uppercase tracking-wider flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-accent-600" />
                              Key Specifications &amp; Core Highlights
                            </h4>
                            <ul className="space-y-2.5">
                              {section.bullets.map((bullet, bIdx) => {
                                const parts = bullet.split(':');
                                const hasColon = parts.length > 1;

                                return (
                                  <li key={bIdx} className="flex items-start gap-3 text-sm text-brand-800 leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                                    <span>
                                      {hasColon ? (
                                        <>
                                          <strong className="text-brand-950 font-semibold">{parts[0]}:</strong>
                                          <span className="text-brand-700"> {parts.slice(1).join(':')}</span>
                                        </>
                                      ) : (
                                        <span className="text-brand-700">{bullet}</span>
                                      )}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Interactive Section CTA / Consultation Link */}
                      <div className="pt-2 flex items-center justify-between text-xs text-brand-500 border-t border-brand-100">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-500" />
                          Verified Technical Insight
                        </span>
                        <button
                          onClick={() => onNavigate('/seo-pricing/')}
                          className="font-bold text-accent-700 hover:text-accent-900 inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>Pricing &amp; Retainers</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Key Insights & Takeaways Box (Section Anchor: key-takeaways-section) */}
            {page.keyTakeaways && page.keyTakeaways.length > 0 && (
              <section 
                id="key-takeaways-section" 
                className="scroll-mt-28 bg-strategy-50/70 border-2 border-strategy-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-2 text-strategy-900">
                  <div className="w-8 h-8 rounded-lg bg-strategy-200 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-strategy-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-strategy-950">
                      Key Insights &amp; Strategic Takeaways
                    </h3>
                    <p className="text-xs text-strategy-700">Core action items for implementation</p>
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  {page.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-brand-900 leading-relaxed bg-white/70 p-3 rounded-xl border border-strategy-100">
                      <div className="w-5 h-5 rounded-full bg-strategy-100 text-strategy-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span className="font-medium text-brand-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Interactive FAQs Accordion (Section Anchor: faqs-section) */}
            {page.faqs && page.faqs.length > 0 && (
              <section 
                id="faqs-section" 
                className="scroll-mt-28 space-y-6 pt-4 border-t border-brand-200/80"
              >
                <div className="space-y-1">
                  <span className="text-xs font-bold text-accent-700 uppercase tracking-wider">
                    Frequently Asked Questions
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-950 tracking-tight flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-accent-600" /> 
                    Everything You Need to Know
                  </h3>
                </div>

                <div className="space-y-3">
                  {page.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div 
                        key={idx} 
                        className="bg-white border border-brand-200 rounded-xl overflow-hidden shadow-2xs transition-all"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-brand-50/50 transition-colors"
                        >
                          <span className="text-base font-bold text-brand-950">
                            {faq.question}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-brand-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-accent-600' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm text-brand-700 leading-relaxed border-t border-brand-100 bg-brand-50/30">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* About the Author Card (Section Anchor: author-bio-section) */}
            <section 
              id="author-bio-section" 
              className="scroll-mt-28 bg-white border border-brand-200/90 rounded-2xl p-6 sm:p-8 shadow-soft-purple space-y-6"
            >
              {/* Hidden file input for photo upload */}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handlePhotoUpload} 
                accept="image/*" 
                className="hidden" 
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div 
                  className="relative group cursor-pointer shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 border-accent-400 shadow-md"
                  onClick={() => fileInputRef.current?.click()}
                  title="Click to update author photo"
                >
                  <img 
                    src={authorAvatar}
                    alt={SITE_AUTHOR.name}
                    className="w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-950/60 rounded-2xl flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-5 h-5 text-accent-300" />
                    <span className="text-[9px] font-bold text-white uppercase tracking-wider">Change</span>
                  </div>
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-brand-950">
                        {SITE_AUTHOR.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-accent-100 text-accent-800 border border-accent-200">
                        Verified Consultant
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand-50 hover:bg-brand-100 border border-brand-200 text-[11px] font-bold text-brand-700 transition-colors cursor-pointer shadow-2xs"
                        title="Upload a new author photo"
                      >
                        <Camera className="w-3.5 h-3.5 text-accent-600" />
                        <span>Update Photo</span>
                      </button>
                      {authorAvatar !== SITE_AUTHOR.avatarUrl && (
                        <button
                          onClick={resetPhoto}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-brand-100 text-[11px] font-semibold text-brand-500 transition-colors cursor-pointer"
                          title="Reset to default photo"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Reset</span>
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-brand-600">
                    {SITE_AUTHOR.subRole}
                  </p>
                  <p className="text-xs text-brand-500 leading-relaxed max-w-xl">
                    {SITE_AUTHOR.bio}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 text-[11px] font-medium text-brand-600">
                  <span className="bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-md">
                    Multi-Tenant SaaS
                  </span>
                  <span className="bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-md">
                    Entity SEO
                  </span>
                  <span className="bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-md">
                    Enterprise Scaling
                  </span>
                </div>

                <button
                  onClick={() => onNavigate('/seo-pricing/')}
                  className="px-4 py-2 bg-brand-950 hover:bg-brand-800 text-white rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Pricing &amp; Retainers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </section>

            {/* Related Official Blog Posts */}
            {(() => {
              const otherPosts = getRelatedBlogPosts(page.slug);
              if (otherPosts.length === 0) return null;

              return (
                <section className="pt-6 border-t border-brand-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-brand-950 uppercase tracking-wider">
                      More Articles from Riad Al Ashekin
                    </h3>
                    <button
                      onClick={() => onNavigate('/blog/')}
                      className="text-xs font-bold text-accent-700 hover:text-accent-900 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>View all 4 blog posts</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {otherPosts.map((relPage) => (
                      <button
                        key={relPage.slug}
                        onClick={() => onNavigate(relPage.slug)}
                        className="text-left p-3.5 rounded-2xl border border-brand-200 hover:border-accent-400 hover:bg-white transition-all bg-white/70 group shadow-2xs cursor-pointer flex flex-col justify-between"
                      >
                        <div className="space-y-2.5">
                          {relPage.featuredImage && (
                            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-brand-950 border border-brand-800/40">
                              <img 
                                src={relPage.featuredImage} 
                                alt={relPage.headline}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div>
                            <span className="text-[10px] font-bold text-accent-700 uppercase tracking-wider block mb-1">
                              {relPage.badge || 'Blog Post'}
                            </span>
                            <p className="text-xs font-bold text-brand-900 line-clamp-2 group-hover:text-accent-700 transition-colors">
                              {relPage.headline}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 pt-2 border-t border-brand-100 flex items-center justify-between text-[10px] text-brand-400 font-mono">
                          <span className="truncate">{relPage.readingTime || 'Read post'}</span>
                          <span className="text-accent-600 font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              );
            })()}

            {/* Strategic Advisory Banner (Bottom High-Conversion CTA) */}
            <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-[#150d28] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-4 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-300 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" /> Direct Advisory
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                  Build Scalable Software &amp; Dominate Search
                </h3>
                <p className="text-sm text-brand-300 leading-relaxed font-normal">
                  Connect 1-on-1 with Riad Al Ashekin to audit your application architecture, uncover high-ROI search opportunities, and execute with precision.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('/seo-pricing/')}
                    className="px-6 py-3 bg-white hover:bg-brand-100 text-brand-950 rounded-full font-bold text-xs transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Pricing &amp; Retainers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate('/contact/')}
                    className="px-6 py-3 bg-transparent border border-brand-700 hover:border-brand-500 text-white rounded-full font-bold text-xs transition-all cursor-pointer"
                  >
                    Send an Inquiry
                  </button>
                </div>
              </div>
            </section>

          </main>

        </div>

      </div>
    </div>
  );
}
