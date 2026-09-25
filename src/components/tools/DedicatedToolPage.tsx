import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ShieldCheck, 
  Copy, 
  Check, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  ExternalLink, 
  BookOpen, 
  Layers, 
  Sliders, 
  Share2, 
  ChevronDown 
} from 'lucide-react';
import { ToolRegistryItem } from '../../data/toolDetails/types';
import { getRelatedTools } from '../../data/toolDetails';
import { ToolInteractiveWidget } from './ToolInteractiveWidget';

interface DedicatedToolPageProps {
  tool: ToolRegistryItem;
  onNavigate: (slug: string) => void;
}

export const DedicatedToolPage: React.FC<DedicatedToolPageProps> = ({ tool, onNavigate }) => {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  const relatedTools = getRelatedTools(tool, 4);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(tool.canonicalUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  // Structured Data Schema for FAQ and WebApplication
  const faqSchema = tool.faqs && tool.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tool.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.name,
    "url": tool.canonicalUrl,
    "applicationCategory": "SEOApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": tool.metaDescription
  };

  return (
    <div className="w-full min-h-screen bg-[#f9f8fc] text-brand-950 flex flex-col">
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* 1. Hero Header Section - Royal Midnight (#150d28) matching homepage */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80">
        
        {/* Ambient Mesh Glow */}
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-brand-300 mb-6">
            <button 
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors cursor-pointer font-medium"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-brand-600" />
            <button 
              onClick={() => onNavigate('/seo-tools/')}
              className="hover:text-white transition-colors cursor-pointer font-medium"
            >
              SEO Tools
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-brand-600" />
            <span className="text-accent-300 font-semibold truncate max-w-xs">{tool.name}</span>
          </nav>

          {/* Header Content */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold tracking-wide text-accent-300 uppercase backdrop-blur-xs">
                <ShieldCheck className="w-3 h-3 text-accent-300" />
                {tool.badge || 'Verified SEO Utility'}
              </span>
              <span className="text-xs text-brand-400 bg-brand-900/60 px-3 py-1 rounded-full border border-brand-800">
                100% Free &amp; Client-Side
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight leading-[1.15]">
              {tool.h1}
            </h1>

            <p className="text-base sm:text-lg text-brand-200 font-normal leading-relaxed max-w-3xl">
              {tool.intro}
            </p>

            {/* Canonical Slug & Quick Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-900/80 border border-brand-700/80 text-xs font-mono text-brand-200">
                <span className="text-brand-400 select-none">URL:</span>
                <span className="font-semibold text-white truncate max-w-xs sm:max-w-md">{tool.canonicalUrl}</span>
              </div>
              <button
                onClick={handleCopyUrl}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-900/80 hover:bg-brand-800 border border-brand-700/80 text-xs font-semibold text-brand-200 transition-colors shadow-2xs cursor-pointer"
                title="Copy canonical URL"
              >
                {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-brand-400" />}
                <span>{copiedUrl ? 'Copied URL!' : 'Copy Link'}</span>
              </button>
            </div>
          </header>

        </div>
      </section>

      {/* 2. Main Content Body - The Tool itself is featured high on the page */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full flex-1 space-y-12">
        
        {/* Interactive Tool Widget Container */}
        <section aria-label="Interactive Tool" className="scroll-mt-24">
          <ToolInteractiveWidget tool={tool} />
        </section>

        {/* How to Use Step-by-Step */}
        {tool.howToUse && tool.howToUse.length > 0 && (
          <section className="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-6">
            <div className="flex items-center gap-3 border-b border-brand-100 pb-4">
              <div className="w-9 h-9 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-950">
                  How to Use the {tool.name}
                </h2>
                <p className="text-xs sm:text-sm text-brand-600">Follow these steps to analyze or generate your assets</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
              {tool.howToUse.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-brand-50/70 border border-brand-100/90">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-accent-600 text-white font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-brand-800 leading-relaxed font-medium pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Features & Core Capabilities Grid */}
        {tool.features && tool.features.length > 0 && (
          <section className="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-6">
            <div className="flex items-center gap-3 border-b border-brand-100 pb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-950">
                  Core Features &amp; Capabilities
                </h2>
                <p className="text-xs sm:text-sm text-brand-600">Engineered for search professionals, developers, and founders</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {tool.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-50/50 border border-brand-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-brand-800 font-medium leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* In-depth Technical Explanation / Search Architecture */}
        {tool.technicalExplanation && (
          <section className="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-6">
            <div className="flex items-center gap-3 border-b border-brand-100 pb-4">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-950">
                  {tool.technicalExplanation.heading}
                </h2>
                <p className="text-xs sm:text-sm text-brand-600">Technical insights, Google guidelines, and architectural considerations</p>
              </div>
            </div>

            <div className="prose prose-sm text-brand-800 max-w-none space-y-4 text-xs sm:text-sm leading-relaxed">
              <p>{tool.technicalExplanation.body}</p>
              
              {tool.technicalExplanation.points && (
                <ul className="space-y-2 list-none p-0 mt-4">
                  {tool.technicalExplanation.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2 bg-brand-50/70 rounded-lg border border-brand-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-2 shrink-0" />
                      <span className="text-brand-900 font-medium">{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

        {/* Real-World Examples / Benchmarks */}
        {tool.examples && (
          <section className="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-950 border-b border-brand-100 pb-4">
              {tool.examples.title}
            </h2>

            <div className="space-y-4">
              <div>
                <span className="block text-xs font-bold text-brand-600 uppercase mb-1.5">Input Sample:</span>
                <pre className="p-4 bg-brand-50 border border-brand-200 rounded-xl text-xs font-mono text-brand-900 overflow-x-auto">
                  {tool.examples.input}
                </pre>
              </div>

              <div>
                <span className="block text-xs font-bold text-emerald-700 uppercase mb-1.5">Expected Output:</span>
                <pre className="p-4 bg-brand-950 border border-brand-800 rounded-xl text-xs font-mono text-emerald-400 overflow-x-auto">
                  {tool.examples.output}
                </pre>
              </div>

              {tool.examples.notes && (
                <p className="text-xs text-brand-600 italic bg-brand-50/60 p-3 rounded-xl border border-brand-100">
                  Note: {tool.examples.notes}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Frequently Asked Questions (FAQ) Accordion */}
        {tool.faqs && tool.faqs.length > 0 && (
          <section className="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-6">
            <div className="flex items-center gap-3 border-b border-brand-100 pb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-950">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs sm:text-sm text-brand-600">Everything you need to know about this tool</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {tool.faqs.map((faq, idx) => {
                const isOpen = openFaqIndices.includes(idx);
                return (
                  <div 
                    key={idx} 
                    className="border border-brand-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-brand-50/40 hover:bg-brand-50 transition-colors cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-brand-950">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-brand-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 bg-white border-t border-brand-100 text-xs sm:text-sm text-brand-700 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Tools Navigation Cards */}
        {relatedTools.length > 0 && (
          <section className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950">
                Related SEO Tools
              </h2>
              <button
                onClick={() => onNavigate('/seo-tools/')}
                className="text-xs font-bold text-accent-700 hover:text-accent-800 flex items-center gap-1 transition-colors"
              >
                <span>View All Tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onNavigate(rel.path)}
                  className="group bg-white hover:bg-brand-50/50 border border-brand-200/80 hover:border-accent-400 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md"
                >
                  <div>
                    {rel.badge && (
                      <span className="inline-block px-2 py-0.5 rounded-md bg-accent-50 text-accent-700 border border-accent-200 text-[10px] font-bold uppercase mb-2">
                        {rel.badge}
                      </span>
                    )}
                    <h3 className="text-sm font-bold text-brand-950 group-hover:text-accent-700 transition-colors line-clamp-2">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-brand-600 line-clamp-2 mt-1.5 mb-4">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-brand-100 flex items-center text-xs font-bold text-accent-700 group-hover:text-accent-600">
                    <span>Open Tool</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Advisory / Consulting Banner */}
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-br from-[#1b1035] via-[#241547] to-[#140b26] text-white border border-brand-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold text-accent-300 uppercase">
              Need Custom Technical SEO Advisory?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Accelerate Organic Growth &amp; Infrastructure
            </h3>
            <p className="text-xs sm:text-sm text-brand-200 leading-relaxed font-normal">
              Book a strategic consultation with Riad Al Ashekin for enterprise audit roadmaps, Core Web Vitals remediation, and organic search architecture.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => onNavigate('/contact/')}
                className="px-6 py-2.5 bg-accent-600 hover:bg-accent-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => onNavigate('/seo-tools/')}
                className="px-6 py-2.5 bg-brand-900/80 hover:bg-brand-800 text-brand-200 border border-brand-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Explore More Tools
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};
