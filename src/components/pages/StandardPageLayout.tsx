import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageData } from '../../types';
import { 
  ChevronRight, 
  Copy, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  Compass, 
  Layers, 
  ListFilter,
  Share2,
  ExternalLink,
  Briefcase,
  FileCheck2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { MetaTagChecker } from '../tools/MetaTagChecker';
import { CharacterCounter } from '../tools/CharacterCounter';
import { CommaSeparator } from '../tools/CommaSeparator';
import { RobotsTxtTool } from '../tools/RobotsTxtTool';
import { LlmsTxtTool } from '../tools/LlmsTxtTool';
import { SeoRoiCalculator } from '../tools/SeoRoiCalculator';
import { LocalSeoCalculator } from '../tools/LocalSeoCalculator';
import { ImageConverterTool } from '../tools/ImageConverterTool';
import { StructuredDataTester } from '../tools/StructuredDataTester';
import { UrlTester } from '../tools/UrlTester';
import { SitemapTester } from '../tools/SitemapTester';
import { ContactPage } from '../tools/ContactPage';
import { PdfViewerPage } from '../tools/PdfViewerPage';
import { getPageBySlug } from '../../data/pagesRegistry';

interface Props {
  page: PageData;
  onNavigate: (slug: string) => void;
}

export function StandardPageLayout({ page, onNavigate }: Props) {
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  
  // Interactive checklist state if on /seo-checklist/
  const isChecklistPage = page.slug.includes('checklist');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleChecklistItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyUrl = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(page.canonicalUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderTool = () => {
    switch (page.interactiveToolType) {
      case 'meta-checker':
        return <MetaTagChecker />;
      case 'character-counter':
        return <CharacterCounter />;
      case 'comma-separator':
        return <CommaSeparator />;
      case 'robots-tester':
        return <RobotsTxtTool mode="tester" />;
      case 'robots-generator':
        return <RobotsTxtTool mode="generator" />;
      case 'llms-checker':
        return <LlmsTxtTool mode="checker" />;
      case 'llms-generator':
        return <LlmsTxtTool mode="generator" />;
      case 'seo-roi-calculator':
        return <SeoRoiCalculator />;
      case 'local-seo-calculator':
        return <LocalSeoCalculator />;
      case 'image-converter':
        return (
          <ImageConverterTool
            targetFormat={(page.toolConfig?.targetFormat as any) || 'image/png'}
            ext={(page.toolConfig?.ext as any) || 'png'}
            title={(page.toolConfig?.title as any) || page.headline}
          />
        );
      case 'structured-data-test':
        return <StructuredDataTester />;
      case 'url-test':
        return <UrlTester />;
      case 'sitemap-tester':
        return <SitemapTester />;
      case 'contact':
        return <ContactPage onNavigate={onNavigate} />;
      case 'pdf-viewer':
        return <PdfViewerPage />;
      default:
        return null;
    }
  };

  // Determine section navigation links
  const navSections = [
    ...(page.intro ? [{ id: 'page-overview', title: 'Executive Overview' }] : []),
    ...(page.sections?.map((s, idx) => ({ id: `section-${idx}`, title: s.title })) || []),
    ...(page.keyTakeaways && page.keyTakeaways.length > 0 ? [{ id: 'key-takeaways', title: 'Strategic Takeaways' }] : []),
    ...(page.faqs && page.faqs.length > 0 ? [{ id: 'frequently-asked-questions', title: 'Common Questions' }] : []),
    ...(page.relatedSlugs && page.relatedSlugs.length > 0 ? [{ id: 'related-resources', title: 'Related Resources' }] : [])
  ];

  return (
    <div className="min-h-screen bg-brand-50 flex flex-col font-sans">
      {/* Executive Page Hero Banner - Royal Midnight Background (#150d28) */}
      <section className="relative pt-28 pb-14 sm:pb-16 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80">
        
        {/* Ambient Glow Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.25, 0.4, 0.25]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 left-1/10 w-[550px] h-[550px] bg-accent-600/30 rounded-full blur-[140px]"
          />
          <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-brand-700/20 rounded-full blur-[130px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-xs text-brand-300 mb-6">
            <button 
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors cursor-pointer font-medium"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-brand-600" />
            <span className="capitalize text-brand-300 font-medium">
              {page.category === 'guides' ? 'Documentation' : page.category.replace('-', ' ')}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-brand-600" />
            <span className="text-white font-semibold truncate max-w-xs sm:max-w-md">
              {page.headline}
            </span>
          </nav>

          {/* Hero Header Body */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold tracking-wide text-accent-300 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-300" />
                {page.badge || 'Official Resource'}
              </span>
              
              <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-300 bg-brand-900/70 px-2.5 py-1 rounded-full border border-brand-800">
                <FileCheck2 className="w-3.5 h-3.5 text-brand-400" />
                Verified Reference Page
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
              {page.headline}
            </h1>

            {page.subtitle && (
              <p className="text-base sm:text-lg text-brand-200 font-normal leading-relaxed max-w-3xl pt-1">
                {page.subtitle}
              </p>
            )}

            {/* Quick Actions & URL Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onNavigate('/contact/')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Consult with Riad</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('/seo-pricing/')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-900 hover:bg-brand-800 border border-brand-700 text-brand-200 hover:text-white text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Pricing &amp; Retainers</span>
              </button>

              <button
                onClick={handleCopyUrl}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-900/80 hover:bg-brand-800 border border-brand-700/80 text-xs font-semibold text-brand-300 hover:text-white transition-colors cursor-pointer"
                title="Copy Canonical URL"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-brand-400" />}
                <span>{copied ? 'Copied URL!' : 'Share Page'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Page Layout Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 w-full flex-1">
        
        {/* Interactive Tool Area if applicable */}
        {page.interactiveToolType && (
          <section className="mb-12">
            {renderTool()}
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content Column */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Executive Overview Box */}
            {page.intro && (
              <section id="page-overview" className="p-6 sm:p-7 bg-white rounded-2xl border border-brand-200/90 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-600" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-accent-700 font-mono mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-600" /> Executive Overview
                </h2>
                <p className="text-base text-brand-800 leading-relaxed font-normal">
                  {page.intro}
                </p>
              </section>
            )}

            {/* Main Content Sections */}
            {page.sections && page.sections.length > 0 && (
              <div className="space-y-8">
                {page.sections.map((section, idx) => (
                  <section 
                    key={idx} 
                    id={`section-${idx}`}
                    className="p-6 sm:p-8 bg-white rounded-2xl border border-brand-200/80 shadow-2xs space-y-4 scroll-mt-28"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-brand-100 text-brand-800 font-mono text-xs font-bold flex items-center justify-center shrink-0 border border-brand-200">
                        {idx + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-brand-950 tracking-tight">
                        {section.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-brand-700 leading-relaxed">
                      {section.content}
                    </p>

                    {/* Section Bullets or Interactive Checklist Items */}
                    {section.bullets && section.bullets.length > 0 && (
                      <div className="pt-2 space-y-2.5">
                        {section.bullets.map((bullet, bIdx) => {
                          const itemId = `sec-${idx}-item-${bIdx}`;
                          const isChecked = checkedItems[itemId] || false;

                          if (isChecklistPage) {
                            return (
                              <div
                                key={bIdx}
                                onClick={() => toggleChecklistItem(itemId)}
                                className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                                  isChecked 
                                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900' 
                                    : 'bg-brand-50/60 border-brand-200/80 text-brand-800 hover:bg-brand-100/50'
                                }`}
                              >
                                <div className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                                  isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-brand-400 bg-white'
                                }`}>
                                  {isChecked && <Check className="w-3.5 h-3.5" />}
                                </div>
                                <span className={`text-sm leading-relaxed ${isChecked ? 'line-through opacity-75' : ''}`}>
                                  {bullet}
                                </span>
                              </div>
                            );
                          }

                          return (
                            <div key={bIdx} className="flex items-start gap-3 text-sm text-brand-700 leading-relaxed bg-brand-50/50 p-3 rounded-xl border border-brand-100">
                              <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            )}

            {/* Strategic Insights & Key Takeaways Card */}
            {page.keyTakeaways && page.keyTakeaways.length > 0 && (
              <section id="key-takeaways" className="bg-[#180f2d] text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden border border-brand-800/80 scroll-mt-28">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent-300" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent-300 font-mono">
                      Strategic Takeaways &amp; Execution Principles
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {page.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-brand-200 leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-accent-500/20 text-accent-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-accent-400/30">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* FAQs Accordion */}
            {page.faqs && page.faqs.length > 0 && (
              <section id="frequently-asked-questions" className="space-y-4 pt-4 scroll-mt-28">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-accent-600" />
                  <h3 className="text-xl font-bold text-brand-950 tracking-tight">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-3">
                  {page.faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div 
                        key={idx} 
                        className="bg-white border border-brand-200 rounded-xl overflow-hidden shadow-2xs transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-brand-900 hover:text-accent-700 transition-colors cursor-pointer"
                        >
                          <span className="text-sm sm:text-base">{faq.question}</span>
                          <span className="text-lg font-mono text-brand-400 shrink-0">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-5 pt-1 text-sm text-brand-600 leading-relaxed border-t border-brand-100 bg-brand-50/30">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Related Pages Grid */}
            {page.relatedSlugs && page.relatedSlugs.length > 0 && (
              <section id="related-resources" className="pt-6 border-t border-brand-200 scroll-mt-28">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-brand-950 uppercase tracking-wider">
                    Related Architecture &amp; Strategic Pages
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {page.relatedSlugs.map((slug) => {
                    const rel = getPageBySlug(slug);
                    if (!rel) return null;
                    return (
                      <button
                        key={slug}
                        onClick={() => onNavigate(rel.slug)}
                        className="text-left p-4 rounded-xl border border-brand-200 hover:border-accent-400 bg-white hover:bg-brand-50/50 transition-all group shadow-2xs cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-bold text-accent-700 uppercase tracking-wider block mb-1">
                            {rel.badge || 'Page'}
                          </span>
                          <p className="text-xs font-bold text-brand-900 line-clamp-2 group-hover:text-accent-700 transition-colors">
                            {rel.headline}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-brand-400 mt-3 block truncate">
                          {rel.slug}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {/* High-Conversion Bottom Advisory Callout */}
            <section className="bg-[#150d28] text-white rounded-3xl p-7 sm:p-9 relative overflow-hidden shadow-xl border border-brand-800">
              <div className="absolute top-0 right-0 w-60 h-60 bg-accent-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-4 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-300 font-mono flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" /> High-Stakes Technology Advisory
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Need Help Architecting or Executing This?
                </h3>
                <p className="text-sm text-brand-200 leading-relaxed font-normal">
                  Work directly with Riad Al Ashekin to audit your software stack, optimize search revenue models, and scale with engineering confidence.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('/contact/')}
                    className="px-5 py-2.5 bg-accent-600 hover:bg-accent-500 text-white rounded-xl font-bold text-xs transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Send Project Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate('/seo-pricing/')}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold text-xs transition-all cursor-pointer"
                  >
                    <span>View Pricing &amp; Retainers</span>
                  </button>
                </div>
              </div>
            </section>

          </main>

          {/* Right Sidebar - Sticky Navigation & Quick Jump */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Table of Contents / On-Page Navigation */}
            {navSections.length > 1 && (
              <div className="bg-white rounded-2xl border border-brand-200/90 p-5 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-brand-100">
                  <ListFilter className="w-4 h-4 text-accent-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-900 font-mono">
                    Page Navigation
                  </span>
                </div>
                <nav className="space-y-1">
                  {navSections.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-brand-600 hover:text-accent-700 hover:bg-brand-50 transition-colors truncate block cursor-pointer"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Quick Strategic Consultation Card */}
            <div className="bg-gradient-to-br from-[#180f2d] to-[#120a22] text-white rounded-2xl p-5 border border-brand-800 space-y-3 shadow-md">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-300">
                Principal Consultant
              </span>
              <h4 className="text-base font-bold text-white tracking-tight">
                Riad Al Ashekin
              </h4>
              <p className="text-xs text-brand-300 leading-relaxed font-normal">
                B.Sc. in Computer Science &amp; Engineering. Advising tech startups, growth agencies, and global enterprises.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/contact/')}
                  className="w-full py-2 px-3 bg-accent-600 hover:bg-accent-500 text-white rounded-xl text-xs font-bold transition-all text-center block cursor-pointer shadow-sm"
                >
                  Contact Riad
                </button>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white rounded-2xl border border-brand-200/80 p-5 shadow-2xs space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-500 font-mono block">
                Quick Shortcuts
              </span>
              <div className="space-y-1.5 text-xs font-medium text-brand-700">
                <button 
                  onClick={() => onNavigate('/seo-tools/')}
                  className="w-full text-left p-1.5 hover:bg-brand-50 hover:text-accent-700 rounded-md transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>All Free SEO Tools</span>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                </button>
                <button 
                  onClick={() => onNavigate('/blog/')}
                  className="w-full text-left p-1.5 hover:bg-brand-50 hover:text-accent-700 rounded-md transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Official Blog Posts (4)</span>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                </button>
                <button 
                  onClick={() => onNavigate('/about-me/')}
                  className="w-full text-left p-1.5 hover:bg-brand-50 hover:text-accent-700 rounded-md transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>About &amp; Credentials</span>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                </button>
              </div>
            </div>

          </aside>

        </div>

      </div>

    </div>
  );
}
