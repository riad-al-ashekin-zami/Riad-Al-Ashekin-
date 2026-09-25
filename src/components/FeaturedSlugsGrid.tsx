import React, { useState } from 'react';
import { 
  ArrowRight, 
  Compass, 
  Wrench, 
  Briefcase, 
  Award, 
  BookOpen, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { getPageBySlug } from '../data/pagesRegistry';

interface Props {
  onNavigate: (slug: string) => void;
  onOpenDirectory: () => void;
}

const FEATURED_SLUG_GROUPS = [
  {
    title: 'Rankings & Regional Authorities',
    icon: Award,
    description: 'Independent evaluation of search talent and enterprise agency benchmarks.',
    slugs: [
      '/best-8-seo-experts-in-sylhet/',
      '/top-10-seo-agencies-in-bangladesh/',
      '/20-best-seo-experts-in-bangladesh/',
      '/best-seo-experts-in-sri-lanka/'
    ]
  },
  {
    title: 'Free Client-Side SEO Utilities',
    icon: Wrench,
    description: 'Real-time tools for metadata validation, character counting, and crawler rules.',
    slugs: [
      '/meta-title-description-checker/',
      '/character-counter/',
      '/comma-separator/',
      '/robots-txt-tester/',
      '/free-robots-txt-generator/',
      '/free-llms-txt-generator/',
      '/seo-roi-calculator/',
      '/local-seo-pricing-calculator/'
    ]
  },
  {
    title: 'Commercial Search Services',
    icon: Briefcase,
    description: 'Advisory retainers, technical audits, and specialized platform optimization.',
    slugs: [
      '/services/',
      '/seo-pricing/',
      '/local-seo-services/',
      '/saas-seo-services/',
      '/laravel-website-seo-services/'
    ]
  },
  {
    title: 'Master Guides & Case Studies',
    icon: BookOpen,
    description: 'Actionable documentation, performance verification reports, and growth frameworks.',
    slugs: [
      '/ultimate-guide-robots-txt/',
      '/roi-of-seo-how-to-measure-calculate-maximize-seo-roi/',
      '/seo-checklist/',
      '/seo-portfolio/',
      '/wp-content/uploads/2025/12/Full-Performance.pdf'
    ]
  }
];

export function FeaturedSlugsGrid({ onNavigate, onOpenDirectory }: Props) {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white border-y border-brand-200/60">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-xs font-bold uppercase tracking-wider text-accent-800">
              <Compass className="w-3.5 h-3.5 text-accent-600" />
              <span>Full Site Index • 65 Top URL Slugs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-950 tracking-tight">
              Explore Every Core Pillar & Dedicated Page
            </h2>
            <p className="text-base text-brand-600">
              Every single requested slug on <span className="font-semibold text-brand-900">riadalashekin.com</span> is fully built with exact URLs, rich research-backed content, interactive webmaster tools, and structured FAQs.
            </p>
          </div>

          <button
            onClick={onOpenDirectory}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-950 hover:bg-brand-800 text-white text-xs font-bold transition-all shrink-0 shadow-sm"
          >
            <span>Open All 65 Slugs Directory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Category Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_SLUG_GROUPS.map((group, gIdx) => {
            const Icon = group.icon;
            return (
              <div
                key={gIdx}
                className="bg-brand-50/50 rounded-3xl border border-brand-200/80 p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-brand-300 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white border border-brand-200 flex items-center justify-center text-accent-700 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-950">
                      {group.title}
                    </h3>
                  </div>
                  <p className="text-xs text-brand-600 mb-6">
                    {group.description}
                  </p>

                  {/* Slug rows */}
                  <div className="space-y-2.5">
                    {group.slugs.map((slug) => {
                      const page = getPageBySlug(slug);
                      if (!page) return null;
                      return (
                        <div
                          key={slug}
                          onClick={() => onNavigate(page.slug)}
                          className="p-3 bg-white rounded-xl border border-brand-200 hover:border-accent-300 hover:bg-accent-50/30 transition-all flex items-center justify-between gap-3 cursor-pointer group shadow-2xs"
                        >
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-brand-900 truncate group-hover:text-accent-700 transition-colors">
                              {page.headline}
                            </div>
                            <div className="text-[11px] font-mono text-brand-400 truncate">
                              https://riadalashekin.com{page.slug}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={(e) => handleCopy(e, page.canonicalUrl)}
                              className="p-1.5 rounded-lg text-brand-400 hover:text-brand-900 hover:bg-brand-100 transition-colors"
                              title="Copy exact canonical URL"
                            >
                              {copiedUrl === page.canonicalUrl ? (
                                <Check className="w-3.5 h-3.5 text-growth-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                            <ExternalLink className="w-3.5 h-3.5 text-brand-300 group-hover:text-brand-700 transition-colors" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenDirectory}
                    className="text-xs font-bold text-accent-700 hover:text-accent-900 inline-flex items-center gap-1"
                  >
                    View more in this category →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
