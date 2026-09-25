import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { PageData } from '../../types';
import { 
  Clock, 
  ArrowRight, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  TrendingUp, 
  Search,
  ChevronRight,
  X,
  Award,
  Compass,
  CheckSquare,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { getOfficialBlogPosts } from '../../data/blogConfig';
import { SITE_AUTHOR, useAuthorPhoto } from '../../data/authorProfile';

interface Props {
  onNavigate: (slug: string) => void;
}

export function BlogIndexHub({ onNavigate }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { avatar: authorAvatar } = useAuthorPhoto();

  // STRICTLY and ONLY the 4 official blog posts
  const allArticles: PageData[] = useMemo(() => {
    return getOfficialBlogPosts();
  }, []);

  // Helper to categorize the 4 articles accurately
  const getCategoryForArticle = (article: PageData): string => {
    const slug = article.slug.toLowerCase();
    if (slug.includes('ranking') || slug.includes('best-') || slug.includes('agencies') || slug.includes('experts')) {
      return 'rankings';
    }
    return 'seo';
  };

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'rankings', label: 'Industry Rankings' },
    { id: 'seo', label: 'Technical SEO Guides' },
  ];

  // Calculate article counts per category (out of the 4)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allArticles.length };
    categories.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = allArticles.filter(a => getCategoryForArticle(a) === cat.id).length;
      }
    });
    return counts;
  }, [allArticles]);

  const filteredArticles = useMemo(() => {
    return allArticles.filter(article => {
      // Search query filter
      const matchesSearch = searchQuery === '' || 
        article.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.subtitle && article.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (article.intro && article.intro.toLowerCase().includes(searchQuery.toLowerCase())) ||
        article.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.slug.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      // Category filter
      if (selectedCategory === 'all') return true;
      return getCategoryForArticle(article) === selectedCategory;
    });
  }, [allArticles, searchQuery, selectedCategory]);

  // Visual header helper with original aesthetic gradient covers
  const renderFallbackCover = (article: PageData) => {
    const cat = getCategoryForArticle(article);
    let icon = <Compass className="w-7 h-7 text-accent-400" />;
    let gradient = 'from-[#180f2d] via-brand-900 to-[#120a22]';
    let topicText = 'Technical SEO Guide';

    if (cat === 'rankings') {
      icon = <Award className="w-7 h-7 text-amber-400" />;
      gradient = 'from-[#2a1b12] via-brand-950 to-[#180f2d]';
      topicText = 'Vetted Industry Rankings';
    }

    return (
      <div className={`relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} border border-brand-800/60 p-4 flex flex-col justify-between group-hover:border-accent-400/50 transition-all`}>
        {/* Subtle decorative mesh */}
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
            <span className="text-white font-semibold">Official Blog (4 Posts)</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold tracking-wide text-accent-300 uppercase backdrop-blur-xs">
              <BookOpen className="w-3.5 h-3.5 text-accent-300" />
              <span>Official Blog Posts • Exactly 4 Curated Publications</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Curated Playbooks &amp; Industry Research
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-brand-200 font-normal leading-relaxed max-w-3xl">
              Tactical search architecture, deep algorithmic analysis, and verified practitioner rankings authored by Riad Al Ashekin.
            </p>

            {/* Author Attribution Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-3">
                <img 
                  src={authorAvatar} 
                  alt={SITE_AUTHOR.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-accent-400 shadow-md"
                />
                <div className="text-xs">
                  <p className="font-bold text-white flex items-center gap-1.5 text-sm">
                    <span>{SITE_AUTHOR.name}</span>
                    <ShieldCheck className="w-4 h-4 text-accent-400" />
                  </p>
                  <p className="text-brand-300 font-medium">
                    Principal Consultant • B.Sc. in Computer Science &amp; Engineering
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-brand-800" />

              <div className="flex items-center gap-3 text-xs text-brand-300 font-mono">
                <span className="bg-brand-900/80 px-3 py-1 rounded-lg border border-brand-800">
                  4 Official Blog Posts
                </span>
                <span className="bg-brand-900/80 px-3 py-1 rounded-lg border border-brand-800">
                  Verified Insights
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex-1 w-full space-y-10">
        
        {/* Search & Category Filter Control Hub */}
        <div className="space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3 bg-white rounded-3xl border border-brand-200/90 shadow-sm">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = categoryCounts[cat.id] ?? 0;

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
                placeholder="Search the 4 blog posts..."
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

          {/* Active filter / search indicator if active */}
          {(selectedCategory !== 'all' || searchQuery) && (
            <div className="flex items-center justify-between text-xs text-brand-600 px-2">
              <div className="flex items-center gap-2">
                <span>Showing <strong>{filteredArticles.length}</strong> of 4 posts</span>
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

        {/* The 4 Blog Posts Grid (3 Posts Per Row on Desktop) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredArticles.map((article) => {
              const cat = getCategoryForArticle(article);

              return (
                <article
                  key={article.slug}
                  onClick={() => onNavigate(article.slug)}
                  className="bg-white rounded-3xl border border-brand-200/85 hover:border-accent-400 shadow-2xs hover:shadow-lg transition-all p-5 sm:p-6 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Dedicated High-Resolution Featured Image */}
                    {article.featuredImage ? (
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-brand-950 border border-brand-800/60 group-hover:border-accent-400/50 transition-all shadow-sm">
                        <img 
                          src={article.featuredImage} 
                          alt={article.headline}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      renderFallbackCover(article)
                    )}

                    {/* Metadata Header */}
                    <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-brand-500 pt-1">
                      <span className="font-bold text-accent-700 bg-accent-50 px-2.5 py-0.5 rounded-md border border-accent-200/60 uppercase tracking-wider text-[10px]">
                        {cat === 'rankings' ? 'Industry Rankings' : 'Technical SEO Guide'}
                      </span>
                      {article.readingTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-brand-400" />
                          {article.readingTime}
                        </span>
                      )}
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
                        {article.sections.slice(0, 2).map((s, idx) => (
                          <span key={idx} className="bg-brand-50 border border-brand-200/80 px-2 py-0.5 rounded-lg font-medium flex items-center gap-1 text-[11px] truncate max-w-full">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span className="truncate">{s.title}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Article Card Footer */}
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
            })}
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

        {/* Seamless Navigation to Non-Blog Static Pages & Tools */}
        <section className="bg-white rounded-3xl border border-brand-200/90 p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-700 font-mono">
                Website Architecture &amp; Utilities
              </span>
              <h3 className="text-xl font-bold text-brand-950 tracking-tight">
                Looking for Tools, Checklists, or Consulting?
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
