import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { PageData } from '../../types';
import { 
  Clock, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Search, 
  ChevronRight, 
  X, 
  Award, 
  Compass, 
  Terminal, 
  Calendar,
  PhoneCall,
  UserCheck
} from 'lucide-react';
import { getOfficialBlogPosts } from '../../data/blogConfig';
import { SITE_AUTHOR, useAuthorPhoto } from '../../data/authorProfile';

interface Props {
  onNavigate: (slug: string) => void;
}

export type BlogSectionKey = 'technical' | 'industry' | 'publications' | 'biography';

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
 * Classifies an article into one of the 4 strict layout tiers:
 * 1. technical: Core Technical & Architecture SEO (at the top)
 * 2. industry: Industry Research, SaaS & Rankings (in the middle)
 * 3. publications: Call Publications, Checklists & FAQs (near bottom)
 * 4. biography: Biographical Profiles (at the very bottom)
 */
export function classifyArticle(article: PageData): BlogSectionKey {
  const slug = article.slug.toLowerCase();
  const badge = (article.badge || '').toLowerCase();
  
  // 4. Biography (at the very end)
  if (slug.includes('tarique-rahman') || badge.includes('biograph') || slug.includes('biography')) {
    return 'biography';
  }
  
  // 3. Call Publications (checklists, faqs, glossaries)
  if (
    slug.includes('checklist') || 
    slug.includes('faq') || 
    slug.includes('glossary') || 
    badge.includes('checklist') || 
    badge.includes('knowledge base') || 
    badge.includes('reference')
  ) {
    return 'publications';
  }
  
  // 1. Core Technical & Architecture (at the top)
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
  
  // 2. Other Sub-categories: Industry Rankings, SaaS & General Articles (middle)
  return 'industry';
}

export function BlogIndexHub({ onNavigate }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { avatar: authorAvatar } = useAuthorPhoto();

  // All blog posts & publications dynamically from registry
  const allArticles: PageData[] = useMemo(() => {
    return getOfficialBlogPosts();
  }, []);

  // Filter categories definition matching the layout plan
  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'technical', label: 'Core Technical SEO' },
    { id: 'industry', label: 'Industry Research & Rankings' },
    { id: 'publications', label: 'Call Publications & Checklists' },
    { id: 'biography', label: 'Biography' },
  ];

  // Group and sort articles per section by Recent / Updated Date (Descending)
  const sectionsData = useMemo(() => {
    const grouped: Record<BlogSectionKey, PageData[]> = {
      technical: [],
      industry: [],
      publications: [],
      biography: []
    };

    allArticles.forEach(article => {
      const section = classifyArticle(article);
      grouped[section].push(article);
    });

    // Sort every section by date descending: newest update first
    (Object.keys(grouped) as BlogSectionKey[]).forEach(key => {
      grouped[key].sort((a, b) => {
        const scoreB = parseDateScore(b.lastUpdated);
        const scoreA = parseDateScore(a.lastUpdated);
        if (scoreB !== scoreA) {
          return scoreB - scoreA;
        }
        // Deterministic fallback: tie-break by title
        return a.headline.localeCompare(b.headline);
      });
    });

    return grouped;
  }, [allArticles]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    return {
      all: allArticles.length,
      technical: sectionsData.technical.length,
      industry: sectionsData.industry.length,
      publications: sectionsData.publications.length,
      biography: sectionsData.biography.length
    };
  }, [allArticles, sectionsData]);

  // Filtered list when search query is active or a single category is selected
  const filteredArticles = useMemo(() => {
    let list: PageData[] = [];

    if (selectedCategory === 'all') {
      list = [
        ...sectionsData.technical,
        ...sectionsData.industry,
        ...sectionsData.publications,
        ...sectionsData.biography
      ];
    } else {
      const key = selectedCategory as BlogSectionKey;
      list = sectionsData[key] || [];
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
  }, [sectionsData, selectedCategory, searchQuery]);

  // Fallback visual header for cards if image fails
  const renderFallbackCover = (article: PageData) => {
    const sec = classifyArticle(article);
    let icon = <Terminal className="w-7 h-7 text-accent-400" />;
    let gradient = 'from-[#180f2d] via-brand-900 to-[#120a22]';
    let topicText = 'Technical Guide';

    if (sec === 'industry') {
      icon = <Award className="w-7 h-7 text-amber-400" />;
      gradient = 'from-[#2a1b12] via-brand-950 to-[#180f2d]';
      topicText = 'Industry Research';
    } else if (sec === 'publications') {
      icon = <BookOpen className="w-7 h-7 text-emerald-400" />;
      gradient = 'from-[#0d2218] via-brand-950 to-[#120a22]';
      topicText = 'Call Publication';
    } else if (sec === 'biography') {
      icon = <UserCheck className="w-7 h-7 text-blue-400" />;
      gradient = 'from-[#081e28] via-brand-950 to-[#0e1629]';
      topicText = 'Biography';
    }

    return (
      <div className={`relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} border border-brand-800/60 p-4 flex flex-col justify-between group-hover:border-accent-400/50 transition-all`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between z-10">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-300/90 bg-white/10 border border-white/10 px-2 py-0.5 rounded-md backdrop-blur-xs">
            {topicText}
          </span>
          <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-xs border border-white/10 shadow-xs">
            {icon}
          </div>
        </div>
        <div className="z-10">
          <span className="text-xs font-bold text-white/90 line-clamp-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            {article.badge}
          </span>
        </div>
      </div>
    );
  };

  // Card component renderer
  const renderArticleCard = (article: PageData, idx: number) => {
    return (
      <article
        key={`blog-card-${article.slug}-${idx}`}
        onClick={() => onNavigate(article.slug)}
        className="bg-white rounded-3xl border border-brand-200/85 hover:border-accent-400 shadow-2xs hover:shadow-lg transition-all p-5 sm:p-6 flex flex-col justify-between group cursor-pointer"
      >
        <div className="space-y-4">
          {/* Featured Image */}
          {article.featuredImage ? (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-brand-950 border border-brand-800/60 group-hover:border-accent-400/50 transition-all shadow-sm">
              <img 
                src={article.featuredImage} 
                alt={article.featuredImageAlt || article.headline}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ) : (
            renderFallbackCover(article)
          )}

          {/* Metadata Header with Date & Reading Time */}
          <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-brand-500 pt-1">
            <span className="font-bold text-accent-700 bg-accent-50 px-2.5 py-0.5 rounded-md border border-accent-200/60 uppercase tracking-wider text-[10px] truncate max-w-[190px]">
              {article.badge || 'Editorial Guide'}
            </span>
            <div className="flex items-center gap-2 shrink-0 text-brand-400">
              {article.lastUpdated && (
                <span className="flex items-center gap-1 text-[10px] text-brand-600 font-semibold bg-brand-100/70 px-2 py-0.5 rounded">
                  <Calendar className="w-3 h-3 text-accent-600" />
                  {article.lastUpdated}
                </span>
              )}
              {article.readingTime && (
                <span className="hidden sm:flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-400" />
                  {article.readingTime}
                </span>
              )}
            </div>
          </div>

          {/* Headline */}
          <h3 className="text-lg sm:text-xl font-bold text-brand-950 tracking-tight group-hover:text-accent-700 transition-colors line-clamp-2 leading-snug">
            {article.headline}
          </h3>

          {/* Subtitle / Excerpt */}
          <p className="text-xs sm:text-sm text-brand-600 font-normal leading-relaxed line-clamp-3">
            {article.subtitle || article.intro}
          </p>

          {/* Key Sections Preview */}
          {article.sections && article.sections.length > 0 && (
            <div className="pt-3 border-t border-brand-100 flex flex-wrap gap-1.5 text-xs text-brand-700">
              {article.sections.slice(0, 2).map((s, sIdx) => (
                <span key={sIdx} className="bg-brand-50 border border-brand-200/80 px-2 py-0.5 rounded-lg font-medium flex items-center gap-1 text-[11px] truncate max-w-full">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="truncate">{s.title}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer */}
        <div className="pt-4 mt-5 border-t border-brand-100 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-brand-700 font-medium">
            <img 
              src={authorAvatar} 
              alt={SITE_AUTHOR.name}
              className="w-5 h-5 rounded-full object-cover border border-brand-200"
            />
            <span className="text-xs font-semibold text-brand-800">{SITE_AUTHOR.name}</span>
          </div>

          <span className="inline-flex items-center gap-1.5 font-bold text-accent-700 group-hover:text-accent-900 group-hover:translate-x-0.5 transition-all text-xs">
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </article>
    );
  };

  const isBrowsingAll = selectedCategory === 'all' && !searchQuery.trim();

  return (
    <div className="min-h-screen bg-[#f9f8fc] flex flex-col font-sans text-brand-950">
      
      {/* Editorial Hub Hero Header - Royal Midnight Theme (#150d28) */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80">
        
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
          <nav className="flex items-center gap-2 text-xs text-brand-300 mb-6 font-medium">
            <button 
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
            <span className="text-white font-semibold">Official Blog Archive ({allArticles.length} Publications)</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold tracking-wide text-accent-300 uppercase backdrop-blur-xs">
              <BookOpen className="w-3.5 h-3.5 text-accent-300" />
              <span>Official Blog Archive • {allArticles.length} Published Articles &amp; Guides</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Curated Playbooks &amp; Industry Research
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-brand-200 font-normal leading-relaxed max-w-3xl">
              Tactical search architecture, single page application engineering, vetted practitioner rankings, and public leadership profiles authored by Riad Al Ashekin.
            </p>

            {/* Quick Stream Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-brand-300 font-mono">
              <span className="bg-brand-900/80 px-3 py-1 rounded-lg border border-brand-800 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent-400" />
                Technical Core ({sectionsData.technical.length})
              </span>
              <span className="bg-brand-900/80 px-3 py-1 rounded-lg border border-brand-800 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Industry Research ({sectionsData.industry.length})
              </span>
              <span className="bg-brand-900/80 px-3 py-1 rounded-lg border border-brand-800 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                Call Publications ({sectionsData.publications.length})
              </span>
              <span className="bg-brand-900/80 px-3 py-1 rounded-lg border border-brand-800 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                Biography ({sectionsData.biography.length})
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex-1 w-full space-y-12">
        
        {/* Search & Category Filter Control Hub */}
        <div className="space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3 bg-white rounded-3xl border border-brand-200/90 shadow-sm">
            
            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = categoryCounts[cat.id as keyof typeof categoryCounts] ?? 0;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-brand-950 text-white shadow-sm'
                        : 'bg-brand-50 text-brand-700 hover:bg-brand-100 hover:text-brand-950'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                      isActive ? 'bg-accent-600 text-white' : 'bg-brand-200/70 text-brand-800'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input Bar */}
            <div className="relative md:w-80 shrink-0">
              <Search className="w-4 h-4 text-brand-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input 
                type="text"
                placeholder={`Search across ${allArticles.length} publications...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 text-xs bg-brand-50 border border-brand-200 rounded-xl focus:outline-none focus:border-accent-500 focus:bg-white transition-all text-brand-900 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 hover:text-brand-800"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Active filter / search indicator */}
          {(selectedCategory !== 'all' || searchQuery) && (
            <div className="flex items-center justify-between text-xs text-brand-600 px-2">
              <div className="flex items-center gap-2">
                <span>Showing <strong>{filteredArticles.length}</strong> of {allArticles.length} publications</span>
                {selectedCategory !== 'all' && (
                  <span className="bg-brand-200/60 px-2 py-0.5 rounded text-brand-800 font-semibold">
                    Category: {categories.find(c => c.id === selectedCategory)?.label}
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-brand-200/60 px-2 py-0.5 rounded text-brand-800 font-semibold">
                    Query: "{searchQuery}"
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-accent-700 font-bold hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}

        </div>

        {/* =========================================================================
            STRUCTURED ARCHIVE LAYOUT (TOP TO BOTTOM SEQUENCE)
            1. Core Technical & Architecture SEO (at top)
            2. Industry Research, SaaS & Rankings (middle)
            3. Call Publications, Checklists & Audits (near bottom)
            4. Biographical Profiles (at the very bottom)
           ========================================================================= */}
        {isBrowsingAll ? (
          <div className="space-y-16">
            
            {/* -------------------------------------------------------------
                SECTION 1: Core Technical & Architecture SEO
                Sorted by: Recent / Updated Date (Descending)
               ------------------------------------------------------------- */}
            <section className="space-y-6">
              <div className="border-b border-brand-200/90 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-accent-700 uppercase tracking-wider font-mono mb-1">
                      <Terminal className="w-4 h-4 text-accent-600" />
                      <span>1. Core Technical &amp; Architecture SEO</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                      Single Page Applications, Crawl Engineering &amp; Modern Frameworks
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-600 mt-1 max-w-3xl">
                      JavaScript execution pipelines, client-side routing, hybrid SSR/SSG rendering, and technical crawlability (sorted by recent update).
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-600 bg-brand-100 px-3 py-1 rounded-full shrink-0">
                    {sectionsData.technical.length} Articles
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {sectionsData.technical.map((article, idx) => renderArticleCard(article, idx))}
              </div>
            </section>

            {/* -------------------------------------------------------------
                SECTION 2: Industry Research, SaaS & Rankings
                Sorted by: Recent / Updated Date (Descending)
               ------------------------------------------------------------- */}
            <section className="space-y-6">
              <div className="border-b border-brand-200/90 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider font-mono mb-1">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>2. Industry Research, SaaS &amp; Benchmarks</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                      Enterprise Rankings, SaaS Development &amp; Practitioner Audits
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-600 mt-1 max-w-3xl">
                      Vetted expert rosters, agency velocity benchmarking, US SaaS development firms, and organic ROI calculations.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-600 bg-brand-100 px-3 py-1 rounded-full shrink-0">
                    {sectionsData.industry.length} Reports
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {sectionsData.industry.map((article, idx) => renderArticleCard(article, idx))}
              </div>
            </section>

            {/* -------------------------------------------------------------
                SECTION 3: Call Publications & Strategic Playbooks
                Sorted by: Recent / Updated Date (Descending)
               ------------------------------------------------------------- */}
            <section className="space-y-6">
              <div className="border-b border-brand-200/90 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono mb-1">
                      <PhoneCall className="w-4 h-4 text-emerald-600" />
                      <span>3. Call Publications &amp; Strategic Playbooks</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                      Actionable Audits, Checklists, FAQs &amp; Consultation Playbooks
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-600 mt-1 max-w-3xl">
                      Operational audit checklists, authoritative acronym glossaries, core FAQs, and 1-on-1 strategic advisory booking.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-600 bg-brand-100 px-3 py-1 rounded-full shrink-0">
                    {sectionsData.publications.length} Publications
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
                {sectionsData.publications.map((article, idx) => renderArticleCard(article, idx))}

                {/* Call Publication Integrated Advisory Booking Card */}
                <div className="bg-gradient-to-br from-[#120a22] via-[#1a0f30] to-[#0c0617] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-accent-500/40 shadow-soft-purple relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="space-y-4 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/30 text-[10px] font-mono font-bold tracking-wider text-accent-300 uppercase">
                      <PhoneCall className="w-3 h-3 text-accent-300" />
                      <span>Direct Advisory Call</span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white leading-snug">
                      Book a Strategic Technical Advisory Call
                    </h3>

                    <p className="text-xs text-brand-200 leading-relaxed">
                      Facing complex SPA indexing issues, headless hydration bottlenecks, or organic drops? Schedule a confidential 1-on-1 technical advisory session directly with Riad Al Ashekin.
                    </p>

                    <div className="space-y-2 pt-2 text-[11px] text-brand-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Audit Architecture &amp; WRS Crawlability</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Actionable 90-Day Organic Engineering Roadmap</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Retainers, Enterprise Pricing &amp; Scopes</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 relative z-10">
                    <button
                      onClick={() => onNavigate('/seo-pricing/')}
                      className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-500 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.02]"
                    >
                      <span>Explore Pricing &amp; Book Retainer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------------------------------------------------
                SECTION 4: Biographical Profiles (at the very bottom)
                Sorted by: Recent / Updated Date (Descending)
               ------------------------------------------------------------- */}
            <section className="space-y-6">
              <div className="border-b border-brand-200/90 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider font-mono mb-1">
                      <UserCheck className="w-4 h-4 text-blue-600" />
                      <span>4. Biographical Profiles &amp; Documented Records</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                      Documented Leadership Profiles &amp; Public Records
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-600 mt-1 max-w-3xl">
                      Factual biographical dossiers, verified election affidavits, family lineages, and political milestones.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-600 bg-brand-100 px-3 py-1 rounded-full shrink-0">
                    {sectionsData.biography.length} Profile
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {sectionsData.biography.map((article, idx) => renderArticleCard(article, idx))}
              </div>
            </section>

          </div>
        ) : (
          /* Filtered or Searched Grid */
          <div>
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredArticles.map((article, idx) => renderArticleCard(article, idx))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-brand-200 p-12 text-center space-y-4 max-w-xl mx-auto shadow-sm">
                <h3 className="text-xl font-bold text-brand-950">No publications matched your search</h3>
                <p className="text-xs sm:text-sm text-brand-600">
                  Try searching with another term or clear the filter.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 bg-brand-950 text-white rounded-xl text-xs font-bold hover:bg-brand-800 transition-all cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Website Architecture & Utility Hub Navigation */}
        <section className="bg-white rounded-3xl border border-brand-200/90 p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-700 font-mono">
                Website Architecture &amp; Utilities
              </span>
              <h3 className="text-xl font-bold text-brand-950 tracking-tight">
                Looking for Tools, Checklists, or Retainers?
              </h3>
              <p className="text-xs sm:text-sm text-brand-600 mt-1">
                Explore our full suite of free browser-based SEO tools, 45-point technical audit checklists, and executive advisory retainers.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => onNavigate('/seo-tools/')}
                className="px-4 py-2 bg-brand-950 hover:bg-brand-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs"
              >
                SEO Tools Hub
              </button>
              <button
                onClick={() => onNavigate('/seo-checklist/')}
                className="px-4 py-2 bg-brand-50 hover:bg-brand-100 border border-brand-200 text-brand-900 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                SEO Checklist
              </button>
              <button
                onClick={() => onNavigate('/seo-pricing/')}
                className="px-4 py-2 bg-accent-600 hover:bg-accent-500 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs"
              >
                Pricing &amp; Retainers
              </button>
            </div>
          </div>
        </section>

        {/* High-Conversion Bottom Advisory Callout */}
        <section className="bg-gradient-to-br from-[#150d28] via-brand-950 to-[#180f2d] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-brand-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-300 font-mono flex items-center gap-2">
              <Compass className="w-4 h-4 text-accent-300" />
              Strategic Search &amp; Software Advisory
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Need Custom Architecture or Search Engineering Strategy?
            </h3>
            <p className="text-sm sm:text-base text-brand-200 leading-relaxed font-normal">
              Collaborate 1-on-1 with Riad Al Ashekin to audit your application stack, unblock organic growth bottlenecks, and architect sustainable digital ecosystems.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <button
                onClick={() => onNavigate('/contact/')}
                className="px-6 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-xl font-bold text-xs transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>Schedule Direct Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('/seo-pricing/')}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold text-xs transition-all cursor-pointer"
              >
                <span>View Pricing &amp; Retainers</span>
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
