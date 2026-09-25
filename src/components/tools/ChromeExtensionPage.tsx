import React, { useState } from 'react';
import { 
  Chrome, 
  Download, 
  CheckCircle2, 
  Search, 
  ExternalLink, 
  ArrowRight, 
  Code, 
  Copy, 
  Check, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import { MetaTagChecker } from './MetaTagChecker';

interface Props {
  onNavigate: (slug: string) => void;
}

export function ChromeExtensionPage({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive'>('overview');
  const [copiedScript, setCopiedScript] = useState(false);

  const bookmarkletCode = `javascript:(function(){
    const title = document.title || 'No Title Found';
    const desc = document.querySelector('meta[name="description"]')?.content || 'No description found';
    const canonical = document.querySelector('link[rel="canonical"]')?.href || 'No canonical tag';
    const robots = document.querySelector('meta[name="robots"]')?.content || 'index, follow (default)';
    alert('SEO Meta Quick Audit:\\n\\nTitle (' + title.length + ' chars): ' + title + '\\n\\nDescription (' + desc.length + ' chars): ' + desc + '\\n\\nCanonical: ' + canonical + '\\n\\nRobots: ' + robots);
  })();`;

  const handleCopyBookmarklet = () => {
    navigator.clipboard.writeText(bookmarkletCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-white text-brand-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-brand-500 mb-6">
          <button 
            type="button" 
            onClick={() => onNavigate('/seo-tools/')} 
            className="hover:text-accent-700 cursor-pointer"
          >
            My SEO Tools
          </button>
          <span>/</span>
          <span className="text-brand-950 font-semibold">Chrome Extension</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[#120b22] text-white rounded-3xl p-8 sm:p-10 border border-brand-800 shadow-xl relative overflow-hidden mb-10">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-400/30 text-accent-300 text-xs font-bold mb-4">
              <Chrome className="w-4 h-4 text-accent-400" />
              <span>Free Webmaster Extension</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Meta Data Checker Chrome Extension
            </h1>

            <p className="text-sm sm:text-base text-brand-200 leading-relaxed font-normal mb-6">
              A lightweight, 1-click Chrome extension that instantly reveals meta titles, descriptions, canonical URLs, robots tags, and OpenGraph social previews for any webpage without opening DevTools.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('interactive')}
                className="px-5 py-2.5 bg-accent-600 hover:bg-accent-500 text-white rounded-xl text-xs font-bold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Try Live Web Previewer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleCopyBookmarklet}
                className="px-5 py-2.5 bg-brand-900/90 hover:bg-brand-800 text-brand-200 rounded-xl text-xs font-bold border border-brand-700 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                {copiedScript ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedScript ? 'Bookmarklet Copied!' : 'Copy 1-Click Bookmarklet'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 border-b border-brand-200 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-accent-600 text-accent-700'
                : 'border-transparent text-brand-600 hover:text-brand-950'
            }`}
          >
            Extension Features &amp; Setup
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('interactive')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'interactive'
                ? 'border-accent-600 text-accent-700'
                : 'border-transparent text-brand-600 hover:text-brand-950'
            }`}
          >
            In-Browser Meta Checker
          </button>
        </div>

        {/* Tab 1: Overview & Features */}
        {activeTab === 'overview' ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#f2faf7] border border-[#dcf0ea]">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-brand-950 text-sm mb-1">Instant SERP Metrics</h3>
                <p className="text-xs text-brand-600 leading-relaxed">
                  Real-time character and pixel measurements with Google snippet truncation warnings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f2faf7] border border-[#dcf0ea]">
                <Layers className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-brand-950 text-sm mb-1">Canonical &amp; Indexation</h3>
                <p className="text-xs text-brand-600 leading-relaxed">
                  Verify rel=canonical alignment and detect noindex/nofollow directives in milliseconds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f2faf7] border border-[#dcf0ea]">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-brand-950 text-sm mb-1">100% Client-Side Privacy</h3>
                <p className="text-xs text-brand-600 leading-relaxed">
                  Zero external server tracking. All inspection is computed in local browser memory.
                </p>
              </div>
            </div>

            {/* Quick 1-Click Bookmarklet Guide */}
            <div className="p-6 sm:p-7 rounded-2xl bg-brand-50 border border-brand-200">
              <h3 className="font-bold text-brand-950 text-base mb-2 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent-600" />
                Quick 1-Click Browser Bookmarklet (No Install Required)
              </h3>
              <p className="text-xs sm:text-sm text-brand-700 leading-relaxed mb-4">
                Want instant metadata checking right now on any webpage without installing an extension? Drag or paste this bookmarklet into your browser bookmarks bar:
              </p>

              <div className="p-3 bg-brand-950 text-brand-200 rounded-xl font-mono text-xs overflow-x-auto flex items-center justify-between gap-4">
                <code className="truncate">{bookmarkletCode}</code>
                <button
                  type="button"
                  onClick={handleCopyBookmarklet}
                  className="px-3 py-1 bg-brand-800 hover:bg-brand-700 text-white rounded-lg text-[11px] font-bold shrink-0 transition-colors cursor-pointer"
                >
                  {copiedScript ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Link back to all tools */}
            <div className="pt-4 text-center">
              <button
                type="button"
                onClick={() => onNavigate('/seo-tools/')}
                className="text-xs font-bold text-accent-700 hover:underline inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>← Back to All SEO Tools</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-brand-950 mb-1">Live In-Browser Meta Checker</h2>
              <p className="text-xs text-brand-600">Simulate search snippets and test title and description tags in real time.</p>
            </div>
            <MetaTagChecker />
          </div>
        )}

      </div>
    </div>
  );
}
