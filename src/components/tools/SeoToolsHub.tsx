import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Search, 
  Heart, 
  Coffee, 
  Share2, 
  Check, 
  X, 
  MessageSquare, 
  Wrench, 
  ExternalLink, 
  ChevronRight,
  CheckCircle2,
  Play
} from 'lucide-react';
import { ALL_SEO_TOOLS_DATA, SeoToolItem } from '../../data/allSeoToolsData';
import { getToolById, getToolBySlug } from '../../data/toolDetails';
import { InstantToolModal } from './InstantToolModal';

export { ALL_SEO_TOOLS_DATA };
export const SEO_TOOLS_DATA = ALL_SEO_TOOLS_DATA;
export type { SeoToolItem };

interface SeoToolsHubProps {
  onNavigate: (slug: string) => void;
}

export function SeoToolsHub({ onNavigate }: SeoToolsHubProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeModalTool, setActiveModalTool] = useState<SeoToolItem | null>(null);

  const filteredTools = ALL_SEO_TOOLS_DATA.filter(tool => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !query ||
      tool.title.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      (tool.badge && tool.badge.toLowerCase().includes(query));
    
    if (selectedCategory === 'all') return matchesSearch;
    return matchesSearch && tool.category === selectedCategory;
  });

  const handleToolClick = (tool: SeoToolItem) => {
    const detail = getToolById(tool.id) || getToolBySlug(tool.slug) || getToolBySlug(tool.id);
    const targetPath = detail ? detail.path : (tool.slug.startsWith('/') ? tool.slug : `/tools/${tool.slug.replace(/^tool:/, '')}/`);
    onNavigate(targetPath);
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText('https://riadalashekin.com/seo-tools/');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const CATEGORIES = [
    { id: 'all', label: `All Tools (${ALL_SEO_TOOLS_DATA.length})` },
    { id: 'schema', label: 'Schema & Rich Snippets' },
    { id: 'content', label: 'Content & Keywords' },
    { id: 'serp', label: 'SERP & On-Page Meta' },
    { id: 'crawler', label: 'Crawlers & Sitemaps' },
    { id: 'url', label: 'URLs & UTM Tracking' },
    { id: 'calculator', label: 'Calculators & ROI' },
    { id: 'image', label: 'Images & Media' },
    { id: 'dev', label: 'Code & Formatters' }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f9f8fc] text-brand-950 flex flex-col">
      
      {/* 1. Hero Header Section - Seamless connection with dark royal Navbar (#150d28) */}
      <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80">
        
        {/* Dynamic Animated Ambient Mesh Glow */}
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
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-300 mb-6">
            <button 
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors font-medium cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-brand-600" />
            <span className="text-white font-medium">SEO Tools</span>
          </nav>

          {/* Hero Header Content */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/20 border border-accent-400/30 text-xs font-bold text-accent-300 uppercase tracking-wider backdrop-blur-md">
              <Wrench className="w-3.5 h-3.5 text-accent-300" />
              <span>Full Webmaster &amp; SEO Suite • {ALL_SEO_TOOLS_DATA.length} Free Tools</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              My SEO Tools
            </h1>

            <p className="text-base sm:text-lg text-brand-200 leading-relaxed font-normal">
              I&apos;ve built over {ALL_SEO_TOOLS_DATA.length} powerful SEO tools to help you optimize your website, boost rankings, and save time. From meta checkers and schema builders to ROI calculators and code minifiers, each tool is designed for accuracy, speed, and results. Explore these free resources and take control of your SEO strategy like a pro—no guesswork needed.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Main Tool Explorer & Directory Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full flex-1">

        {/* Real-time Filter & Quick Search Controls */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 sm:mb-10">
          
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none flex-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-accent-600 text-white shadow-xs'
                    : 'bg-white border border-brand-200 text-brand-700 hover:bg-brand-100/80 hover:text-brand-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80 shrink-0">
            <Search className="w-4 h-4 text-brand-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={`Search ${ALL_SEO_TOOLS_DATA.length} tools by name or keyword...`}
              className="w-full pl-9 pr-8 py-2 bg-white border border-brand-200 rounded-xl text-xs text-brand-950 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-400 hover:text-brand-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 4-Column Grid: Clean Brand Card Styling */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-brand-200 max-w-md mx-auto shadow-sm">
            <Wrench className="w-8 h-8 text-accent-600 mx-auto mb-2" />
            <p className="text-sm font-bold text-brand-950">No tools match your query</p>
            <p className="text-xs text-brand-600 mt-1">Try clearing the search query or selecting &quot;All Tools&quot;</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-1.5 bg-brand-950 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-brand-900 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredTools.map((tool) => {
              const isFullPage = tool.slug.startsWith('/');
              return (
                <motion.div
                  key={tool.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleToolClick(tool)}
                  className="group bg-white hover:bg-brand-50/50 border border-brand-200/80 hover:border-accent-400/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(21,13,40,0.03)] hover:shadow-[0_12px_24px_rgba(120,57,238,0.08)]"
                >
                  <div>
                    {/* Badge */}
                    {tool.badge && (
                      <span className="inline-block px-2 py-0.5 rounded-md bg-accent-50 text-accent-700 border border-accent-200/80 text-[10.5px] font-bold uppercase tracking-wider mb-2.5">
                        {tool.badge}
                      </span>
                    )}

                    {/* Tool Title */}
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-brand-950 leading-snug group-hover:text-accent-700 transition-colors">
                      {tool.title}
                    </h3>

                    {/* Tool Description */}
                    <p className="text-[12px] sm:text-[12.5px] text-brand-700 leading-relaxed mt-2.5 mb-5 font-normal line-clamp-3">
                      {tool.description}
                    </p>
                  </div>

                  {/* Explore Dedicated Tool Page CTA */}
                  <div className="pt-2.5 border-t border-brand-100/80 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 group-hover:text-accent-600 transition-colors">
                      <span>Open Dedicated Tool</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-400 group-hover:text-accent-600">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Free Tool</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* The "Find These Tools Helpful?" Support Banner (Royal Midnight Brand Theme) */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-14 text-center shadow-[0_20px_50px_rgba(21,13,40,0.35)] bg-gradient-to-br from-[#1b1035] via-[#241547] to-[#140b26] border border-brand-800">
            
            {/* Ambient Purple Glow */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent-600/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-600/30 rounded-full blur-3xl pointer-events-none" />

            {/* Concentric Circle Visual Rings in subtle royal purple */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-[850px] h-[850px] rounded-full border border-accent-400/30 flex items-center justify-center">
                <div className="w-[650px] h-[650px] rounded-full border border-accent-400/35 flex items-center justify-center">
                  <div className="w-[450px] h-[450px] rounded-full border border-white/30 flex items-center justify-center">
                    <div className="w-[280px] h-[280px] rounded-full border border-white/40" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
                Find These Tools Helpful?
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-brand-200 leading-relaxed font-normal mb-7 sm:mb-8">
                I&apos;ve built over {ALL_SEO_TOOLS_DATA.length} Free SEO tools to make your work easier and more effective—all for free. If you&apos;ve found value in them, consider supporting this project and keeping it growing.
              </p>

              {/* Support Button: Royal Accent Pill Button */}
              <button
                type="button"
                onClick={() => setShowSupportModal(true)}
                className="px-8 sm:px-10 py-2.5 sm:py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-full font-bold text-xs sm:text-sm transition-all shadow-[0_8px_25px_rgba(120,57,238,0.4)] hover:shadow-[0_12px_30px_rgba(120,57,238,0.6)] hover:scale-105 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Support</span>
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* Interactive Tool Modal Runner */}
      <InstantToolModal
        tool={activeModalTool}
        onClose={() => setActiveModalTool(null)}
        onNavigate={onNavigate}
      />

      {/* Support Project Dialog / Modal */}
      <AnimatePresence>
        {showSupportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/70 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-200"
            >
              <button
                type="button"
                onClick={() => setShowSupportModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-100 text-brand-500 hover:text-brand-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-accent-100 text-accent-700 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-accent-600 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-brand-950">Support the Project</h3>
                  <p className="text-xs text-brand-600">Keep these tools free, independent, and continuously updated.</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-brand-700 leading-relaxed mb-6">
                All {ALL_SEO_TOOLS_DATA.length} tools on this website are 100% free with no paywalls, subscriptions, or aggressive ads. Your contribution directly funds hosting, research, and new tool development.
              </p>

              <div className="space-y-3">
                <a
                  href="https://buymeacoffee.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#FFDD00] text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#FACC15] transition-all shadow-xs"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Buy Me a Coffee</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyShare}
                  className="w-full py-3 px-4 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-brand-200 transition-all cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-accent-600" />
                      <span className="text-accent-600">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-brand-600" />
                      <span>Share Tools Hub with Others</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-100 text-center">
                <button
                  type="button"
                  onClick={() => setShowSupportModal(false)}
                  className="text-xs text-brand-500 hover:text-brand-900 font-medium cursor-pointer"
                >
                  Maybe later, take me back
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
