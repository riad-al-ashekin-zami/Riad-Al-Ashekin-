import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  Search, 
  ShieldCheck, 
  Mail, 
  Timer, 
  Sparkles, 
  FileCode, 
  Lock, 
  Activity, 
  Ruler, 
  SearchCode, 
  PackageCheck
} from 'lucide-react';

export interface DevelopedProduct {
  id: string;
  name: string;
  url: string;
  tagline: string;
  category: 'SEO & Dev' | 'Productivity' | 'Security & Privacy' | 'Specialized Calculators' | 'Themes';
  iconType: 'shield' | 'mail' | 'timer' | 'theme' | 'lorem' | 'password' | 'medical' | 'stud' | 'seo';
  badge: string;
}

export const DEVELOPED_PRODUCTS: DevelopedProduct[] = [
  {
    id: 'ad-blocker',
    name: 'Advanced Ad Blocker',
    url: 'https://chromewebstore.google.com/detail/advanced-ad-blocker/ccamgfighllnbeknggchlgfnllmpfclh?authuser=0&hl=en',
    tagline: 'High-speed web ad, popup & telemetry blocker',
    category: 'Security & Privacy',
    iconType: 'shield',
    badge: 'Privacy'
  },
  {
    id: 'meta-seo-checker',
    name: 'Meta Title & Description Checker',
    url: 'https://chromewebstore.google.com/detail/meta-title-description-ch/ammogonjgjnnijonikkannkhdbjgahfo?authuser=0&hl=en',
    tagline: 'Real-time on-page SEO SERP & tag inspector',
    category: 'SEO & Dev',
    iconType: 'seo',
    badge: 'SEO Diagnostic'
  },
  {
    id: 'gmail-checker',
    name: 'Gmail Email Checker Plus',
    url: 'https://chromewebstore.google.com/detail/gmail-email-checker-plus/fmckhhhejglenijfibccciogccpafjmi?authuser=0&hl=en',
    tagline: 'Instant inbox push alerts & unread badge counter',
    category: 'Productivity',
    iconType: 'mail',
    badge: 'Productivity'
  },
  {
    id: 'timer-stopwatch',
    name: 'Timer, Alarm, Countdown & Stopwatch',
    url: 'https://chromewebstore.google.com/detail/timer-alarm-countdown-and/kobhcmmiecdmfbjdldaeegifmeofgpfb?authuser=0&hl=en',
    tagline: 'Multi-mode interval productivity timer suite',
    category: 'Productivity',
    iconType: 'timer',
    badge: 'Timer'
  },
  {
    id: 'password-generator',
    name: 'Random Password Generator',
    url: 'https://chromewebstore.google.com/detail/random-password-generator/phocoaffebnkhkpnkcgabeadniickljc?authuser=0&hl=en',
    tagline: 'Cryptographic high-entropy client-side generator',
    category: 'Security & Privacy',
    iconType: 'password',
    badge: 'Security'
  },
  {
    id: 'prostate-calculator',
    name: 'Prostate Volume Calculator',
    url: 'https://chromewebstore.google.com/detail/prostate-volume-calculato/ldicochgjaenckedhdngeopcphnilpji?authuser=0&hl=en',
    tagline: 'Clinical ultrasound ellipsoid volumetric calculator',
    category: 'Specialized Calculators',
    iconType: 'medical',
    badge: 'Clinical Tool'
  },
  {
    id: 'wall-stud-calculator',
    name: 'Wall Stud Calculator',
    url: 'https://chromewebstore.google.com/detail/wall-stud-calculator/iebpngognoookpbhbobapphacefmamfl?authuser=0&hl=en',
    tagline: 'Precision 16" & 24" framing & lumber estimator',
    category: 'Specialized Calculators',
    iconType: 'stud',
    badge: 'Lumber Math'
  },
  {
    id: 'lorem-generator',
    name: 'Lorem Ipsum Generator',
    url: 'https://chromewebstore.google.com/detail/lorem-ipsum-generator/oofedggipbhjghibmdakbcbkbaejjgkn?authuser=0&hl=en',
    tagline: 'Rapid placeholder text generator for designers',
    category: 'SEO & Dev',
    iconType: 'lorem',
    badge: 'Design'
  },
  {
    id: 'neon-amethyst-theme',
    name: 'Neon Amethyst Futuristic Theme',
    url: 'https://chromewebstore.google.com/detail/neon-amethyst-futuristic/kpjkgegpoddmgdjfcjkbhfechdmapjef?authuser=0&hl=en',
    tagline: 'High-contrast cyberpunk dark browser theme',
    category: 'Themes',
    iconType: 'theme',
    badge: 'Theme'
  }
];

function ProductIcon({ type }: { type: DevelopedProduct['iconType'] }) {
  switch (type) {
    case 'shield':
      return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
    case 'seo':
      return <SearchCode className="w-4 h-4 text-purple-600" />;
    case 'mail':
      return <Mail className="w-4 h-4 text-red-500" />;
    case 'timer':
      return <Timer className="w-4 h-4 text-amber-600" />;
    case 'password':
      return <Lock className="w-4 h-4 text-blue-600" />;
    case 'medical':
      return <Activity className="w-4 h-4 text-rose-600" />;
    case 'stud':
      return <Ruler className="w-4 h-4 text-orange-600" />;
    case 'lorem':
      return <FileCode className="w-4 h-4 text-indigo-600" />;
    case 'theme':
      return <Sparkles className="w-4 h-4 text-fuchsia-600" />;
  }
}

export function DevelopedProducts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'SEO & Dev', 'Productivity', 'Security & Privacy', 'Specialized Calculators', 'Themes'];

  const filteredProducts = useMemo(() => {
    return DEVELOPED_PRODUCTS.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.name.toLowerCase().includes(q) || 
        item.tagline.toLowerCase().includes(q) || 
        item.badge.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="real-life-products" className="pt-8 sm:pt-10 pb-2 border-t border-brand-200/80 space-y-5">
      
      {/* Compact Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-800 uppercase tracking-wider">
            <PackageCheck className="w-3.5 h-3.5 text-purple-700" />
            <span>Chrome Web Store • 9 Published Tools</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-brand-950 tracking-tight">
            Published Chrome Extensions &amp; Standalone Utilities
          </h3>
          <p className="text-xs text-brand-600">
            Real-life software products and lightweight browser extensions built for practitioners.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-56 shrink-0">
          <Search className="w-3.5 h-3.5 text-brand-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 9 extensions..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-brand-200 rounded-xl text-brand-900 placeholder:text-brand-400 focus:outline-hidden focus:border-[#6f42c1] focus:ring-1 focus:ring-[#6f42c1] transition-all"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
        {categories.map((cat) => {
          const count = cat === 'All' 
            ? DEVELOPED_PRODUCTS.length 
            : DEVELOPED_PRODUCTS.filter(p => p.category === cat).length;
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                isActive
                  ? 'bg-[#180f2d] text-white shadow-2xs'
                  : 'bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200/80'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1 py-0.2 rounded-full font-mono ${
                isActive ? 'bg-white/20 text-white' : 'bg-brand-200/80 text-brand-800'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Compact 3-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredProducts.map((prod) => (
          <a
            key={prod.id}
            href={prod.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3.5 rounded-xl bg-white hover:bg-[#fafbfe] border border-brand-200/80 hover:border-purple-300 hover:shadow-xs transition-all flex items-start justify-between gap-3 text-left"
          >
            <div className="flex items-start gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-brand-50 group-hover:bg-purple-50 border border-brand-200/70 group-hover:border-purple-200 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                <ProductIcon type={prod.iconType} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-brand-950 truncate group-hover:text-[#6f42c1] transition-colors">
                    {prod.name}
                  </h4>
                  <span className="text-[9px] font-mono font-medium px-1.5 py-0.2 rounded bg-purple-50 text-purple-700 border border-purple-100/90 shrink-0">
                    {prod.badge}
                  </span>
                </div>
                <p className="text-[11px] text-brand-500 truncate mt-0.5">
                  {prod.tagline}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Chrome Web Store</span>
                </div>
              </div>
            </div>

            <div className="w-6 h-6 rounded-md bg-brand-50 group-hover:bg-purple-50 flex items-center justify-center text-brand-400 group-hover:text-[#6f42c1] transition-colors shrink-0 mt-0.5">
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="p-6 text-center bg-brand-50 rounded-xl border border-brand-200">
          <p className="text-xs text-brand-600">
            No products match &quot;{searchQuery}&quot;.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="mt-1 text-xs font-bold text-[#6f42c1] hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

    </section>
  );
}
