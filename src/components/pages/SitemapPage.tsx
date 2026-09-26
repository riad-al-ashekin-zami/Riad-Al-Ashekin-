import React, { useState, useMemo } from 'react';
import { 
  FileCode2, 
  ExternalLink, 
  Check, 
  Copy, 
  Search, 
  Globe, 
  Layers, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  FileText, 
  Wrench, 
  Award, 
  Briefcase, 
  HelpCircle,
  Image as ImageIcon,
  ArrowRight
} from 'lucide-react';
import { allPages, getPageBySlug, normalizePath } from '../../data/pagesRegistry';
import { PageData } from '../../types';

interface Props {
  onNavigate: (slug: string) => void;
}

interface SitemapItem {
  slug: string;
  fullUrl: string;
  title: string;
  category: string;
  categoryLabel: string;
  priority: string;
  changefreq: string;
  lastmod: string;
  hasImage: boolean;
  imageTitle?: string;
}

const CATEGORY_NAMES: Record<string, string> = {
  all: 'All Pages',
  guides: 'Guides & Articles',
  tools: 'SEO Tools',
  rankings: 'Rankings',
  services: 'Services',
  'about-contact': 'Company & About',
  legal: 'Legal & Policies',
  categories: 'Taxonomies'
};

export function SitemapPage({ onNavigate }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copied, setCopied] = useState(false);
  const [copiedXml, setCopiedXml] = useState(false);

  const DOMAIN = 'https://riadalashekin.com';
  const TODAY = '2026-09-26';

  // Build the complete list of sitemap items
  const sitemapItems: SitemapItem[] = useMemo(() => {
    const list: SitemapItem[] = [];
    const seen = new Set<string>();

    // 1. Homepage
    list.push({
      slug: '/',
      fullUrl: `${DOMAIN}/`,
      title: 'Riad Al Ashekin | Business & Technology Consultant & Strategist',
      category: 'about-contact',
      categoryLabel: 'Homepage',
      priority: '1.0',
      changefreq: 'daily',
      lastmod: TODAY,
      hasImage: true,
      imageTitle: 'Executive Portrait'
    });
    seen.add('/');

    // 2. HTML Sitemap
    list.push({
      slug: '/sitemap/',
      fullUrl: `${DOMAIN}/sitemap/`,
      title: 'HTML & XML Sitemap Indexation Directory',
      category: 'about-contact',
      categoryLabel: 'Sitemap',
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: TODAY,
      hasImage: false
    });
    seen.add('/sitemap/');

    // 3. Registered pages
    for (const rawPage of allPages) {
      const page = getPageBySlug(rawPage.slug) || rawPage;
      const norm = normalizePath(page.slug);
      const withSlash = norm.endsWith('/') || norm.includes('.') ? norm : `${norm}/`;

      if (seen.has(withSlash)) continue;
      seen.add(withSlash);

      let priority = '0.8';
      let changefreq = 'monthly';

      if (page.category === 'rankings' || page.category === 'guides') {
        priority = '0.9';
        changefreq = 'weekly';
      } else if (page.category === 'tools') {
        priority = '0.8';
        changefreq = 'weekly';
      } else if (page.category === 'services' || page.category === 'about-contact') {
        priority = '0.8';
        changefreq = 'monthly';
      } else if (page.category === 'legal') {
        priority = '0.4';
        changefreq = 'yearly';
      }

      list.push({
        slug: withSlash,
        fullUrl: page.canonicalUrl || `${DOMAIN}${withSlash}`,
        title: page.title || page.headline || withSlash,
        category: page.category,
        categoryLabel: CATEGORY_NAMES[page.category] || page.category,
        priority,
        changefreq,
        lastmod: TODAY,
        hasImage: !!page.featuredImage,
        imageTitle: page.featuredImageAlt
      });
    }

    return list;
  }, []);

  // Filtered items
  const filteredItems = useMemo(() => {
    return sitemapItems.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) || 
        item.slug.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [sitemapItems, selectedCategory, searchQuery]);

  const handleCopySitemapUrl = () => {
    navigator.clipboard.writeText(`${DOMAIN}/sitemap.xml`);
    setCopiedXml(true);
    setTimeout(() => setCopiedXml(false), 2500);
  };

  const countsByCategory = useMemo(() => {
    const counts: Record<string, number> = { all: sitemapItems.length };
    sitemapItems.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [sitemapItems]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-brand-500 mb-6 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-brand-900 transition-colors">Home</button>
        <span>/</span>
        <span className="text-brand-900 font-semibold">Sitemap & Indexation Directory</span>
      </div>

      {/* Main Header Hero */}
      <div className="bg-white border border-brand-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-800 border border-brand-200">
                <Globe className="w-3.5 h-3.5" />
                Sitemap Protocol 0.9 & Google Indexing
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {sitemapItems.length} URLs Ready
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-950 font-serif">
              Complete Sitemap &amp; Indexation Directory
            </h1>

            <p className="text-sm sm:text-base text-brand-600 leading-relaxed">
              Every authoritative page on <span className="font-semibold text-brand-900">riadalashekin.com</span> mapped 
              with crawl priorities, change frequencies, Google Image extensions, and canonical references for search engine indexation.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto shrink-0">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-950 hover:bg-brand-900 text-white text-xs font-bold transition-all shadow hover:shadow-md"
            >
              <FileCode2 className="w-4 h-4 text-emerald-400" />
              <span>Open XML Sitemap (Browser View)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <button
              onClick={handleCopySitemapUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-100 hover:bg-brand-200 text-brand-900 text-xs font-bold transition-all border border-brand-300"
            >
              {copiedXml ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Sitemap URL Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-brand-600" />
                  <span>Copy GSC Sitemap URL</span>
                </>
              )}
            </button>

            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-brand-50 text-brand-700 text-xs font-semibold transition-all border border-brand-200"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
              <span>View robots.txt</span>
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
          </div>
        </div>

        {/* Indexation Checklist Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-brand-100">
          <div className="p-3.5 bg-brand-50 rounded-2xl border border-brand-100">
            <span className="text-[11px] font-bold text-brand-500 uppercase tracking-wider block">Total URLs</span>
            <span className="text-xl sm:text-2xl font-bold text-brand-950 mt-1 block">{sitemapItems.length}</span>
            <span className="text-[11px] text-emerald-700 font-medium">100% Crawlable</span>
          </div>

          <div className="p-3.5 bg-brand-50 rounded-2xl border border-brand-100">
            <span className="text-[11px] font-bold text-brand-500 uppercase tracking-wider block">SEO Tools</span>
            <span className="text-xl sm:text-2xl font-bold text-brand-950 mt-1 block">{countsByCategory['tools'] || 0}</span>
            <span className="text-[11px] text-brand-600">Client-Side Utilities</span>
          </div>

          <div className="p-3.5 bg-brand-50 rounded-2xl border border-brand-100">
            <span className="text-[11px] font-bold text-brand-500 uppercase tracking-wider block">Articles & Guides</span>
            <span className="text-xl sm:text-2xl font-bold text-brand-950 mt-1 block">{countsByCategory['guides'] || 0}</span>
            <span className="text-[11px] text-accent-700 font-medium">With Featured SVGs</span>
          </div>

          <div className="p-3.5 bg-brand-50 rounded-2xl border border-brand-100">
            <span className="text-[11px] font-bold text-brand-500 uppercase tracking-wider block">Google Images</span>
            <span className="text-xl sm:text-2xl font-bold text-brand-950 mt-1 block">Indexed</span>
            <span className="text-[11px] text-emerald-700 font-medium">&lt;image:image&gt; Tags</span>
          </div>
        </div>
      </div>

      {/* Google Search Console Submission Guide */}
      <div className="bg-accent-50/70 border border-accent-200/80 rounded-2xl p-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent-600 text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-sm">
            GSC
          </div>
          <div>
            <h4 className="text-sm font-bold text-accent-950">
              Submit to Google Search Console for Fast Indexing
            </h4>
            <p className="text-xs text-accent-800 mt-0.5 max-w-2xl">
              Go to <strong>Google Search Console &gt; Sitemaps</strong>, paste <code className="bg-accent-100 text-accent-900 px-1.5 py-0.5 rounded font-mono text-[11px]">sitemap.xml</code>, and click <strong>Submit</strong>. Google will automatically crawl all 168+ URLs and prioritize the longform guides.
            </p>
          </div>
        </div>
        <button
          onClick={handleCopySitemapUrl}
          className="px-4 py-2 bg-accent-700 hover:bg-accent-800 text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-sm"
        >
          {copiedXml ? 'Copied https://riadalashekin.com/sitemap.xml' : 'Copy Sitemap Path'}
        </button>
      </div>

      {/* Filter and Search Controls */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-brand-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all 168 URLs by title or slug..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-brand-200 rounded-xl text-xs font-medium text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-brand-900 transition-colors shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-brand-400 hover:text-brand-700"
              >
                Clear
              </button>
            )}
          </div>

          <span className="text-xs text-brand-500 font-medium text-right">
            Showing <strong className="text-brand-900">{filteredItems.length}</strong> of {sitemapItems.length} URLs
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'All Pages' },
            { id: 'guides', label: 'Guides & Blog' },
            { id: 'tools', label: 'SEO Tools' },
            { id: 'rankings', label: 'Rankings' },
            { id: 'services', label: 'Services' },
            { id: 'about-contact', label: 'Company & About' },
            { id: 'legal', label: 'Legal & Policies' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-brand-950 text-white shadow-sm'
                  : 'bg-white border border-brand-200 text-brand-700 hover:bg-brand-50'
              }`}
            >
              {tab.label} ({countsByCategory[tab.id] || 0})
            </button>
          ))}
        </div>
      </div>

      {/* Directory Table */}
      <div className="bg-white border border-brand-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-brand-100/70 border-b border-brand-200 text-brand-700 uppercase tracking-wider font-bold text-[11px]">
                <th className="py-3 px-4 w-12 text-center">#</th>
                <th className="py-3 px-4">Page Title &amp; Target URL</th>
                <th className="py-3 px-4 w-32">Category</th>
                <th className="py-3 px-4 w-20 text-center">Priority</th>
                <th className="py-3 px-4 w-24 text-center">Frequency</th>
                <th className="py-3 px-4 w-20 text-center">Images</th>
                <th className="py-3 px-4 w-28 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100">
              {filteredItems.map((item, idx) => (
                <tr key={item.slug} className="hover:bg-brand-50/70 transition-colors">
                  <td className="py-3 px-4 text-center font-mono text-brand-400 text-[11px]">
                    {idx + 1}
                  </td>

                  <td className="py-3 px-4 space-y-0.5">
                    <button
                      onClick={() => onNavigate(item.slug)}
                      className="font-bold text-brand-950 hover:text-accent-600 transition-colors text-left block text-xs"
                    >
                      {item.title}
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-brand-500">
                        {item.slug}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-100 text-brand-700">
                      {item.categoryLabel}
                    </span>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold font-mono ${
                      Number(item.priority) >= 0.9 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : Number(item.priority) >= 0.8
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-brand-100 text-brand-600'
                    }`}>
                      {item.priority}
                    </span>
                  </td>

                  <td className="py-3 px-4 text-center text-brand-600 capitalize text-[11px]">
                    {item.changefreq}
                  </td>

                  <td className="py-3 px-4 text-center">
                    {item.hasImage ? (
                      <span 
                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800"
                        title={item.imageTitle || 'Featured Image Attached'}
                      >
                        <ImageIcon className="w-3 h-3" />
                        <span>1</span>
                      </span>
                    ) : (
                      <span className="text-brand-300">-</span>
                    )}
                  </td>

                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => onNavigate(item.slug)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-800 font-semibold text-[11px] transition-colors"
                    >
                      <span>Visit</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredItems.length === 0 && (
          <div className="py-16 text-center text-brand-500 text-xs">
            No pages match "{searchQuery}". Try a different keyword or reset filters.
          </div>
        )}
      </div>
    </div>
  );
}
