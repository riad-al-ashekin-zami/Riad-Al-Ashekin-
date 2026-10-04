import React, { useState, useMemo } from 'react';
import { PageData } from '../../types';
import { 
  Clock, 
  ArrowRight, 
  Search, 
  ChevronRight, 
  X, 
  Calendar,
  Compass,
  CheckCircle2,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { getOfficialBlogPosts } from '../../data/blogConfig';
import { SITE_AUTHOR, useAuthorPhoto } from '../../data/authorProfile';
import { handleLinkClick } from '../../utils/navigation';

interface Props {
  onNavigate: (slug: string) => void;
}

export type BlogSectionKey = 'all' | 'technical' | 'rankings' | 'guides' | 'biography';

/**
 * Parses human-readable dates into a numeric sort score for descending sort
 * e.g. "October 2026" -> 202610, "September 2026" -> 202609, "September 2025" -> 202509
 */
export function parseDateScore(dateStr?: string): number {
  if (!dateStr) return 0;
  const str = dateStr.toLowerCase();
  
  let year = 2025;
  const yearMatch = str.match(/\b(202[0-9])\b/);
  if (yearMatch) {
    year = parseInt(yearMatch[1], 10);
  }
  
  const months: Record<string, number> = {
    jan: 1, january: 1,
    feb: 2, february: 2,
    mar: 3, march: 3,
    apr: 4, april: 4,
    may: 5,
    jun: 6, june: 6,
    jul: 7, july: 7,
    aug: 8, august: 8,
    sep: 9, september: 9,
    oct: 10, october: 10,
    nov: 11, november: 11,
    dec: 12, december: 12
  };
  
  let month = 1;
  for (const [mName, mNum] of Object.entries(months)) {
    if (str.includes(mName)) {
      month = mNum;
      break;
    }
  }
  
  return year * 100 + month;
}

/**
 * Clean category classification for filtering
 */
export function classifyArticle(article: PageData): BlogSectionKey {
  const slug = article.slug.toLowerCase();
  const badge = (article.badge || '').toLowerCase();
  
  // Biography
  if (slug.includes('tarique-rahman') || badge.includes('biograph')) {
    return 'biography';
  }
  
  // Guides, checklists, glossaries, FAQs
  if (
    slug.includes('checklist') || 
    slug.includes('faq') || 
    slug.includes('glossary') || 
    badge.includes('checklist') || 
    badge.includes('knowledge base') || 
    badge.includes('reference')
  ) {
    return 'guides';
  }
  
  // Technical & architecture
  if (
    slug.includes('single-page-application') ||
    slug.includes('static-website') ||
    slug.includes('robots-txt') ||
    slug.includes('meta-title') ||
    slug.includes('analysis-of-search-engine-optimization') ||
    badge.includes('technical') ||
    badge.includes('on-page') ||
    badge.includes('architecture')
  ) {
    return 'technical';
  }
  
  // Industry & rankings
  return 'rankings';
}

export function BlogIndexHub({ onNavigate }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<BlogSectionKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { avatar: authorAvatar } = useAuthorPhoto();

  // All blog posts & publications dynamically from registry
  const allArticles: PageData[] = useMemo(() => {
    const raw = getOfficialBlogPosts();
    // Sort all articles chronologically: newest update first
    return [...raw].sort((a, b) => {
      const scoreB = parseDateScore(b.lastUpdated);
      const scoreA = parseDateScore(a.lastUpdated);
      if (scoreB !== scoreA) {
        return scoreB - scoreA;
      }
      return a.headline.localeCompare(b.headline);
    });
  }, []);

  // Filter categories definition
  const categories: { id: BlogSectionKey; label: string }[] = [
    { id: 'all', label: 'All Articles' },
    { id: 'technical', label: 'Technical SEO' },
    { id: 'rankings', label: 'Industry & Rankings' },
    { id: 'guides', label: 'Guides & Checklists' },
    { id: 'biography', label: 'Biography' },
  ];

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<BlogSectionKey, number> = {
      all: allArticles.length,
      technical: 0,
      rankings: 0,
      guides: 0,
      biography: 0
    };

    allArticles.forEach(article => {
      const cat = classifyArticle(article);
      if (cat !== 'all') {
        counts[cat]++;
      }
    });

    return counts;
  }, [allArticles]);

  // Filtered list when search query is active or a single category is selected
  const filteredArticles = useMemo(() => {
    let list = allArticles;

    if (selectedCategory !== 'all') {
      list = list.filter(article => classifyArticle(article) === selectedCategory);
    }

    if (!searchQuery.trim()) {
      return list;
    }

    const q = searchQuery.toLowerCase().trim();
    return list.filter(article => {
      return (
        article.headline.toLowerCase().includes(q) ||
        (article.subtitle && article.subtitle.toLowerCase().includes(q)) ||
        (article.intro && article.intro.toLowerCase().includes(q)) ||
        (article.badge && article.badge.toLowerCase().includes(q)) ||
        article.slug.toLowerCase().includes(q)
      );
    });
  }, [allArticles, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#fcfbfe] flex flex-col font-sans text-brand-950">
      
      {/* Clean, Plain Editorial Header */}
      <header className="relative pt-28 pb-12 sm:pb-16 bg-[#150d28] text-white border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-300 mb-6 font-medium">
            <a 
              href="/"
              onClick={(e) => handleLinkClick(e, '/', onNavigate)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
            <span className="text-white font-semibold">Blog</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Blog &amp; Publications
            </h1>
            <p className="text-base sm:text-lg text-brand-200 font-normal leading-relaxed">
              Authoritative guides on technical search architecture, single page applications, industry benchmarks, and strategic research by Riad Al Ashekin.
            </p>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 w-full space-y-8">
        
        {/* Search & Category Filter Section */}
        <section aria-label="Search and category filters" className="bg-white rounded-2xl border border-brand-200/90 p-4 sm:p-5 shadow-2xs space-y-4">
          
          {/* Dedicated Full-Width Search Input */}
          <div className="relative w-full">
            <Search className="w-4 h-4 text-brand-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input 
              type="text"
              placeholder={`Search across ${allArticles.length} publications by title, keyword, or topic...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 text-sm bg-brand-50/70 hover:bg-brand-50 focus:bg-white border border-brand-200 focus:border-accent-500 rounded-xl focus:outline-none transition-all text-brand-950 placeholder:text-brand-400 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-400 hover:text-brand-800 p-1 rounded-md transition-colors"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Tabs - Wrapping gracefully, 100% visible on all screen sizes */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-brand-100">
            <span className="text-xs font-semibold text-brand-500 mr-1 hidden sm:inline">
              Category:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = categoryCounts[cat.id];

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-brand-950 text-white shadow-xs'
                      : 'bg-brand-50/80 text-brand-700 hover:bg-brand-100 hover:text-brand-950 border border-brand-200/60'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${
                    isActive ? 'bg-accent-600 text-white' : 'bg-brand-200/80 text-brand-800'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active filter count / reset bar */}
          {(selectedCategory !== 'all' || searchQuery) && (
            <div className="flex items-center justify-between text-xs text-brand-600 pt-2 border-t border-brand-100">
              <div className="flex items-center gap-2 flex-wrap">
                <span>Showing <strong>{filteredArticles.length}</strong> of {allArticles.length} articles</span>
                {selectedCategory !== 'all' && (
                  <span className="text-brand-500">
                    in <strong>{categories.find(c => c.id === selectedCategory)?.label}</strong>
                  </span>
                )}
                {searchQuery && (
                  <span className="text-brand-500">
                    for "<strong>{searchQuery}</strong>"
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-accent-700 hover:text-accent-900 font-bold hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}

        </section>

        {/* Unified, Plain Article Grid (Chronologically Sorted, No Numbered Tiers) */}
        {filteredArticles.length > 0 ? (
          <section aria-label="Articles list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredArticles.map((article, idx) => {
              return (
                <article
                  key={`blog-article-${article.slug}-${idx}`}
                  className="relative bg-white rounded-2xl border border-brand-200/85 hover:border-accent-500/60 shadow-2xs hover:shadow-md transition-all p-5 flex flex-col justify-between group text-left"
                >
                  {/* Primary full-card anchor for smooth SPA left-click, and native browser right-click / middle-click / Ctrl+click */}
                  <a
                    href={article.slug}
                    onClick={(e) => handleLinkClick(e, article.slug, onNavigate)}
                    className="absolute inset-0 z-10 rounded-2xl cursor-pointer"
                    aria-label={`Read article: ${article.headline}`}
                  />

                  <div className="space-y-3.5 pointer-events-none">
                    
                    {/* Featured Image */}
                    {article.featuredImage ? (
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-brand-950 border border-brand-800/50 group-hover:border-accent-500/40 transition-all">
                        <img 
                          src={article.featuredImage} 
                          alt={article.featuredImageAlt || article.headline}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300 pointer-events-none"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-[#1b1030] border border-brand-800/60 p-4 flex flex-col justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-300 bg-white/10 px-2 py-0.5 rounded w-fit">
                          {article.badge || 'Editorial Guide'}
                        </span>
                        <BookOpen className="w-6 h-6 text-accent-400 self-end" />
                      </div>
                    )}

                    {/* Metadata: Category · Date · Reading Time (Clean typography, zero-pill discipline) */}
                    <div className="flex items-center gap-1.5 text-xs text-brand-500 font-medium">
                      <span className="font-semibold text-accent-700">
                        {article.badge || 'Guide'}
                      </span>
                      {article.lastUpdated && (
                        <>
                          <span className="text-brand-300">·</span>
                          <span className="flex items-center gap-1 text-brand-600">
                            <Calendar className="w-3 h-3 text-brand-400" />
                            {article.lastUpdated}
                          </span>
                        </>
                      )}
                      {article.readingTime && (
                        <>
                          <span className="text-brand-300">·</span>
                          <span className="flex items-center gap-1 text-brand-500">
                            <Clock className="w-3 h-3 text-brand-400" />
                            {article.readingTime}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Headline */}
                    <h2 className="text-lg font-bold text-brand-950 tracking-tight group-hover:text-accent-700 transition-colors line-clamp-2 leading-snug">
                      {article.headline}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-brand-600 font-normal leading-relaxed line-clamp-3">
                      {article.subtitle || article.intro}
                    </p>

                  </div>

                  {/* Card Footer: Author + Open in New Tab Button + Read Link */}
                  <div className="pt-4 mt-4 border-t border-brand-100 flex items-center justify-between text-xs relative z-20">
                    <div className="flex items-center gap-2 text-brand-700 pointer-events-none">
                      <img 
                        src={authorAvatar} 
                        alt={SITE_AUTHOR.name}
                        className="w-5 h-5 rounded-full object-cover border border-brand-200 pointer-events-none"
                      />
                      <span className="font-medium text-brand-800">{SITE_AUTHOR.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Explicit Open in New Tab action link */}
                      <a
                        href={article.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-brand-600 hover:text-accent-700 bg-brand-50 hover:bg-accent-50 border border-brand-200/80 hover:border-accent-300 transition-all shadow-2xs cursor-pointer no-underline"
                        title="Open article in a new tab"
                        aria-label={`Open "${article.headline}" in a new tab`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>New Tab</span>
                      </a>

                      <span className="inline-flex items-center gap-1.5 font-bold text-accent-700 group-hover:text-accent-900 group-hover:translate-x-0.5 transition-all pointer-events-none">
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </article>
              );
            })}
          </section>
        ) : (
          <div className="bg-white rounded-2xl border border-brand-200 p-12 text-center space-y-4 max-w-md mx-auto shadow-2xs">
            <h3 className="text-lg font-bold text-brand-950">No articles found</h3>
            <p className="text-xs sm:text-sm text-brand-600">
              No publications matched your search query. Try searching with a different keyword or reset the filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-brand-950 text-white rounded-xl text-xs font-bold hover:bg-brand-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Website Architecture & Utility Hub Navigation */}
        <section className="bg-white rounded-2xl border border-brand-200/90 p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-700 font-mono">
                Website Utilities
              </span>
              <h3 className="text-xl font-bold text-brand-950 tracking-tight">
                Looking for Tools, Checklists, or Advisory?
              </h3>
              <p className="text-xs sm:text-sm text-brand-600 mt-1">
                Explore interactive browser-based SEO tools, 45-point technical audit checklists, and executive retainers.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="/seo-tools/"
                onClick={(e) => handleLinkClick(e, '/seo-tools/', onNavigate)}
                className="px-4 py-2 bg-brand-950 hover:bg-brand-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs inline-block"
              >
                SEO Tools Hub
              </a>
              <a
                href="/seo-checklist/"
                onClick={(e) => handleLinkClick(e, '/seo-checklist/', onNavigate)}
                className="px-4 py-2 bg-brand-50 hover:bg-brand-100 border border-brand-200 text-brand-900 rounded-xl text-xs font-bold transition-all cursor-pointer inline-block"
              >
                SEO Checklist
              </a>
              <a
                href="/seo-pricing/"
                onClick={(e) => handleLinkClick(e, '/seo-pricing/', onNavigate)}
                className="px-4 py-2 bg-accent-600 hover:bg-accent-500 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs inline-block"
              >
                Pricing &amp; Retainers
              </a>
            </div>
          </div>
        </section>

        {/* Clean Advisory Callout */}
        <section className="bg-gradient-to-br from-[#150d28] via-brand-950 to-[#180f2d] text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-lg border border-brand-800">
          <div className="relative z-10 space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-300 font-mono flex items-center gap-2">
              <Compass className="w-4 h-4 text-accent-300" />
              Strategic Search &amp; Software Advisory
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Need Custom Architecture or Search Strategy?
            </h3>
            <p className="text-xs sm:text-sm text-brand-200 leading-relaxed font-normal">
              Collaborate 1-on-1 with Riad Al Ashekin to audit your application stack, unblock organic growth bottlenecks, and architect sustainable digital ecosystems.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/contact/"
                onClick={(e) => handleLinkClick(e, '/contact/', onNavigate)}
                className="px-5 py-2.5 bg-accent-600 hover:bg-accent-500 text-white rounded-xl font-bold text-xs transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>Schedule Direct Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/seo-pricing/"
                onClick={(e) => handleLinkClick(e, '/seo-pricing/', onNavigate)}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold text-xs transition-all cursor-pointer inline-block"
              >
                <span>View Pricing &amp; Retainers</span>
              </a>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
