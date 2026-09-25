import React, { useState, useMemo } from 'react';
import { allPages, categoryMeta } from '../data/pagesRegistry';
import { PageCategory } from '../types';
import { Search, X, ExternalLink, Copy, Check, Filter, Layers } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (slug: string) => void;
  currentSlug: string;
}

export function UrlSlugDirectoryModal({ isOpen, onClose, onSelectPage, currentSlug }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const filteredPages = useMemo(() => {
    return allPages.filter((p) => {
      const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesQuery = 
        p.slug.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.headline.toLowerCase().includes(q) ||
        p.badge.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopy = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedSlug(url);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl border border-brand-200 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-brand-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-accent-50 text-accent-700 flex items-center justify-center border border-accent-200">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-950">Top URL Slugs Directory</h3>
              <p className="text-xs text-brand-600">
                All 65 exact page routes for <span className="font-mono font-bold text-brand-900">riadalashekin.com</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-brand-400 hover:text-brand-900 hover:bg-brand-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 border-b border-brand-100 bg-brand-50/50 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-brand-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by URL slug, tool name, ranking, or topic..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-brand-200 rounded-xl text-xs text-brand-900 focus:outline-none focus:ring-2 focus:ring-accent-500 font-medium"
            />
          </div>

          {/* Categories Pill Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs hide-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand-950 text-white shadow-2xs'
                  : 'bg-white text-brand-600 border border-brand-200 hover:bg-brand-100'
              }`}
            >
              All Pages ({allPages.length + 1})
            </button>
            {(Object.keys(categoryMeta) as PageCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-950 text-white shadow-2xs'
                    : 'bg-white text-brand-600 border border-brand-200 hover:bg-brand-100'
                }`}
              >
                {categoryMeta[cat].label} ({categoryMeta[cat].count})
              </button>
            ))}
          </div>
        </div>

        {/* List of Pages */}
        <div className="p-4 overflow-y-auto divide-y divide-brand-100 space-y-1">
          {/* Home Link */}
          {(selectedCategory === 'all' || searchQuery.toLowerCase().includes('home')) && (
            <div
              onClick={() => {
                onSelectPage('/');
                onClose();
              }}
              className={`p-3 rounded-xl flex items-center justify-between gap-4 cursor-pointer hover:bg-brand-50 transition-colors ${
                currentSlug === '/' ? 'bg-accent-50/70 border border-accent-200' : ''
              }`}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-700 bg-accent-100 px-2 py-0.5 rounded-md">
                    Home Page
                  </span>
                  <span className="text-xs font-bold text-brand-950 truncate">
                    Riad Al Ashekin | SEO Consultant & Strategist
                  </span>
                </div>
                <div className="font-mono text-[11px] text-brand-500 truncate">
                  https://riadalashekin.com/
                </div>
              </div>
              <button
                onClick={(e) => handleCopy(e, 'https://riadalashekin.com/')}
                className="p-1.5 text-brand-400 hover:text-brand-900 shrink-0"
                title="Copy URL"
              >
                {copiedSlug === 'https://riadalashekin.com/' ? <Check className="w-4 h-4 text-growth-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          )}

          {filteredPages.map((page) => {
            const isCurrent = currentSlug === page.slug;
            return (
              <div
                key={page.slug}
                onClick={() => {
                  onSelectPage(page.slug);
                  onClose();
                }}
                className={`p-3 rounded-xl flex items-center justify-between gap-4 cursor-pointer hover:bg-brand-50 transition-colors ${
                  isCurrent ? 'bg-accent-50/70 border border-accent-200' : ''
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-100 px-2 py-0.5 rounded-md">
                      {page.badge}
                    </span>
                    <span className="text-xs font-bold text-brand-950 truncate">
                      {page.headline}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-brand-500 truncate">
                    {page.canonicalUrl}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={(e) => handleCopy(e, page.canonicalUrl)}
                    className="p-1.5 text-brand-400 hover:text-brand-900 rounded-lg hover:bg-brand-100 transition-colors"
                    title="Copy exact canonical URL"
                  >
                    {copiedSlug === page.canonicalUrl ? (
                      <Check className="w-4 h-4 text-growth-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <ExternalLink className="w-4 h-4 text-brand-400" />
                </div>
              </div>
            );
          })}

          {filteredPages.length === 0 && (
            <div className="text-center py-12 text-xs text-brand-500">
              No matching pages found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-brand-100 bg-brand-50 flex items-center justify-between text-xs text-brand-600">
          <span>Showing {filteredPages.length} of 65 requested pages</span>
          <span className="font-mono text-[11px]">Exact Slugs Guaranteed</span>
        </div>
      </div>
    </div>
  );
}
