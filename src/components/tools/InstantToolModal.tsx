import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Copy, 
  Check, 
  Wrench, 
  Code, 
  ExternalLink, 
  Play, 
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  FileText,
  Layers,
  Search,
  Sliders
} from 'lucide-react';
import { SeoToolItem } from '../../data/allSeoToolsData';

interface InstantToolModalProps {
  tool: SeoToolItem | null;
  onClose: () => void;
  onNavigate?: (slug: string) => void;
}

export const InstantToolModal: React.FC<InstantToolModalProps> = ({ tool, onClose, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  // Generic inputs for tools
  const [inputText, setInputText] = useState('');
  const [secondaryText, setSecondaryText] = useState('');
  const [urlInput, setUrlInput] = useState('https://example.com');
  const [utmSource, setUtmSource] = useState('newsletter');
  const [utmMedium, setUtmMedium] = useState('email');
  const [utmCampaign, setUtmCampaign] = useState('summer_launch');
  const [utmTerm, setUtmTerm] = useState('');
  const [utmContent, setUtmContent] = useState('');

  // Calculator inputs
  const [calcVolume, setCalcVolume] = useState<number>(10000);
  const [calcCtr, setCalcCtr] = useState<number>(28);
  const [calcConvRate, setCalcConvRate] = useState<number>(3.5);
  const [calcAov, setCalcAov] = useState<number>(150);

  // Schema builder inputs
  const [schemaQ1, setSchemaQ1] = useState('What is SEO consultancy?');
  const [schemaA1, setSchemaA1] = useState('SEO consultancy provides strategic oversight, technical audits, and organic search roadmaps for digital platforms.');
  const [schemaQ2, setSchemaQ2] = useState('How long does SEO take to show results?');
  const [schemaA2, setSchemaA2] = useState('Typically 3 to 6 months depending on competition, technical health, and content execution.');
  const [businessName, setBusinessName] = useState('Al Ashekin SEO Consultancy');
  const [businessCity, setBusinessCity] = useState('London');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Compute tool-specific outputs
  const toolOutput = useMemo(() => {
    if (!tool) return '';

    // 1. UTM Builder
    if (tool.id === 'utm-builder') {
      try {
        const u = new URL(urlInput.startsWith('http') ? urlInput : `https://${urlInput}`);
        if (utmSource) u.searchParams.set('utm_source', utmSource);
        if (utmMedium) u.searchParams.set('utm_medium', utmMedium);
        if (utmCampaign) u.searchParams.set('utm_campaign', utmCampaign);
        if (utmTerm) u.searchParams.set('utm_term', utmTerm);
        if (utmContent) u.searchParams.set('utm_content', utmContent);
        return u.toString();
      } catch {
        return `${urlInput}?utm_source=${encodeURIComponent(utmSource)}&utm_medium=${encodeURIComponent(utmMedium)}&utm_campaign=${encodeURIComponent(utmCampaign)}`;
      }
    }

    // 2. SEO Slug Generator
    if (tool.id === 'seo-slug-generator') {
      const source = inputText || 'How to Build a High-Performance SEO Engine in 2026';
      return source
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    }

    // 3. URL Encoder / Decoder / Cleaner
    if (tool.id === 'url-encoder') {
      return encodeURIComponent(inputText || 'https://example.com/search?q=seo consultancy & strategy=growth');
    }
    if (tool.id === 'url-decoder') {
      try {
        return decodeURIComponent(inputText || 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dseo%20consultancy');
      } catch {
        return 'Invalid encoded URL string';
      }
    }
    if (tool.id === 'url-cleaner') {
      try {
        const u = new URL(inputText || 'https://example.com/product?id=102&utm_source=facebook&fbclid=IwAR394&gclid=CjwKCA');
        const trackingParams = ['fbclid', 'gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref', 'mc_cid'];
        trackingParams.forEach(p => u.searchParams.delete(p));
        return u.toString();
      } catch {
        return inputText.split('?')[0];
      }
    }

    // 4. Schema Generators
    if (tool.id === 'faq-schema-generator') {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": schemaQ1,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": schemaA1
            }
          },
          {
            "@type": "Question",
            "name": schemaQ2,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": schemaA2
            }
          }
        ]
      }, null, 2);
    }

    if (tool.id === 'local-business-schema') {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": businessName,
        "image": "https://riadalashekin.com/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": businessCity,
          "addressCountry": "UK"
        },
        "url": "https://riadalashekin.com",
        "priceRange": "$$$"
      }, null, 2);
    }

    if (tool.id === 'organization-schema-generator' || tool.id === 'schema-markup-generator') {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": businessName,
        "url": "https://riadalashekin.com",
        "logo": "https://riadalashekin.com/brand-icon.png",
        "sameAs": [
          "https://twitter.com/riadalashekin",
          "https://linkedin.com/in/riadalashekin",
          "https://github.com/riadalashekin"
        ]
      }, null, 2);
    }

    // 5. Code Minifiers & Formatters
    if (tool.id === 'html-minifier') {
      const src = inputText || '<div class="hero">\n  <h1>Hello World</h1>\n  <!-- Comment -->\n  <p>Test snippet</p>\n</div>';
      return src.replace(/<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ').replace(/> </g, '><').trim();
    }
    if (tool.id === 'css-minifier') {
      const src = inputText || '.header {\n  color: #fff;\n  background: #150d28;\n  /* comment */\n  padding: 10px 20px;\n}';
      return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/ ?([{:;,]) ?/g, '$1').trim();
    }
    if (tool.id === 'json-formatter') {
      try {
        const parsed = JSON.parse(inputText || '{"site":"riadalashekin.com","status":"active","tools":94,"features":["seo","crawlers"]}');
        return JSON.stringify(parsed, null, 2);
      } catch (err: any) {
        return `JSON Syntax Error: ${err.message}`;
      }
    }
    if (tool.id === 'json-validator') {
      try {
        JSON.parse(inputText || '{"valid": true, "name": "SEO Suite"}');
        return ' Valid JSON: No syntax errors detected.';
      } catch (err: any) {
        return `❌ Invalid JSON:\n${err.message}`;
      }
    }

    // 6. Sitemap Generator
    if (tool.id === 'sitemap-generator') {
      const urls = (inputText || 'https://riadalashekin.com/\nhttps://riadalashekin.com/seo-tools/\nhttps://riadalashekin.com/blog/').split('\n').map(u => u.trim()).filter(Boolean);
      const today = new Date().toISOString().split('T')[0];
      const items = urls.map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');
      return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
    }

    // 7. Sitemap URL Extractor
    if (tool.id === 'sitemap-url-extractor') {
      const matches = inputText.match(/<loc>(.*?)<\/loc>/gi);
      if (matches && matches.length > 0) {
        return matches.map(m => m.replace(/<\/?loc>/gi, '').trim()).join('\n');
      }
      const rawUrls = inputText.match(/https?:\/\/[^\s"'<>]+/gi);
      return rawUrls ? Array.from(new Set(rawUrls)).join('\n') : 'No URLs detected in input text.';
    }

    // 8. Keyword Combiner
    if (tool.id === 'keyword-combiner' || tool.id === 'city-service-keyword-generator') {
      const listA = (inputText || 'SEO Services\nContent Strategy\nTechnical Audit').split('\n').map(s => s.trim()).filter(Boolean);
      const listB = (secondaryText || 'London\nNew York\nRemote\nAgencies').split('\n').map(s => s.trim()).filter(Boolean);
      const results: string[] = [];
      listA.forEach(a => {
        listB.forEach(b => {
          results.push(`${a} ${b}`);
        });
      });
      return results.join('\n');
    }

    return '';
  }, [tool, inputText, secondaryText, urlInput, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, schemaQ1, schemaA1, schemaQ2, schemaA2, businessName, businessCity]);

  // Heading & Alt parser stats
  const htmlStats = useMemo(() => {
    if (!inputText) return null;
    const h1s = inputText.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    const h2s = inputText.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
    const h3s = inputText.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi) || [];
    const imgs = inputText.match(/<img[^>]+>/gi) || [];
    const missingAlt = imgs.filter(img => !img.includes('alt=') || /alt=["']\s*["']/.test(img));
    
    // Words & char stats
    const cleanText = inputText.replace(/<[^>]*>/g, ' ');
    const words = cleanText.trim().split(/\s+/).filter(Boolean);
    const charCount = cleanText.length;

    return {
      h1Count: h1s.length,
      h2Count: h2s.length,
      h3Count: h3s.length,
      imgCount: imgs.length,
      missingAltCount: missingAlt.length,
      wordCount: words.length,
      charCount
    };
  }, [inputText]);

  if (!tool) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-950/75 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-brand-200 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-[#150d28] text-white px-6 py-5 flex items-center justify-between border-b border-brand-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-500/20 border border-accent-400/30 flex items-center justify-center text-accent-300">
                <Wrench className="w-4 h-4 text-accent-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  {tool.title}
                </h3>
                <span className="text-xs text-brand-300 font-mono">
                  {tool.badge || 'Client-Side Utility'} • Instant Execution
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-brand-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-brand-950">
            <p className="text-xs sm:text-sm text-brand-700 leading-relaxed font-normal bg-brand-50 p-3.5 rounded-xl border border-brand-100">
              {tool.description}
            </p>

            {/* 1. UTM Builder Specific Interface */}
            {tool.id === 'utm-builder' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-900 mb-1">Target Website URL *</label>
                  <input
                    type="text"
                    value={urlInput}
                    onChange={e => setUrlInput(e.target.value)}
                    placeholder="https://example.com/landing-page"
                    className="w-full px-3.5 py-2 text-xs border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-brand-900 mb-1">Campaign Source (utm_source) *</label>
                    <input
                      type="text"
                      value={utmSource}
                      onChange={e => setUtmSource(e.target.value)}
                      placeholder="e.g. google, newsletter, linkedin"
                      className="w-full px-3 py-2 text-xs border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-900 mb-1">Campaign Medium (utm_medium) *</label>
                    <input
                      type="text"
                      value={utmMedium}
                      onChange={e => setUtmMedium(e.target.value)}
                      placeholder="e.g. cpc, email, banner, organic_social"
                      className="w-full px-3 py-2 text-xs border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-900 mb-1">Campaign Name (utm_campaign) *</label>
                    <input
                      type="text"
                      value={utmCampaign}
                      onChange={e => setUtmCampaign(e.target.value)}
                      placeholder="e.g. q3_growth_audit"
                      className="w-full px-3 py-2 text-xs border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-900 mb-1">Campaign Content (utm_content)</label>
                    <input
                      type="text"
                      value={utmContent}
                      onChange={e => setUtmContent(e.target.value)}
                      placeholder="e.g. top_cta_button"
                      className="w-full px-3 py-2 text-xs border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2. Keyword Combiner Interface */}
            {(tool.id === 'keyword-combiner' || tool.id === 'city-service-keyword-generator') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-900 mb-1">Seed List A (one per line)</label>
                  <textarea
                    rows={4}
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    placeholder="SEO Consultant&#10;Technical Audit&#10;Search Strategy"
                    className="w-full p-3 text-xs border border-brand-200 rounded-xl bg-white font-mono focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-900 mb-1">Modifiers / Cities List B (one per line)</label>
                  <textarea
                    rows={4}
                    value={secondaryText}
                    onChange={e => setSecondaryText(e.target.value)}
                    placeholder="London&#10;Manchester&#10;Birmingham&#10;Remote"
                    className="w-full p-3 text-xs border border-brand-200 rounded-xl bg-white font-mono focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
                  />
                </div>
              </div>
            )}

            {/* 3. HTML Paste Checkers Interface */}
            {tool.category === 'serp' && tool.id.includes('checker') && (
              <div>
                <label className="block text-xs font-bold text-brand-900 mb-1">Paste HTML Source Code</label>
                <textarea
                  rows={5}
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                  placeholder="Paste your <html> source, <head> markup, or content snippet here to inspect..."
                  className="w-full p-3 text-xs border border-brand-200 rounded-xl bg-white font-mono focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
                />

                {htmlStats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-center">
                    <div className="p-2.5 bg-brand-50 border border-brand-200 rounded-xl">
                      <span className="block text-xs font-bold text-brand-600">H1 Tags</span>
                      <span className={`text-base font-extrabold ${htmlStats.h1Count === 1 ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {htmlStats.h1Count}
                      </span>
                    </div>
                    <div className="p-2.5 bg-brand-50 border border-brand-200 rounded-xl">
                      <span className="block text-xs font-bold text-brand-600">H2 / H3 Tags</span>
                      <span className="text-base font-extrabold text-brand-900">
                        {htmlStats.h2Count} / {htmlStats.h3Count}
                      </span>
                    </div>
                    <div className="p-2.5 bg-brand-50 border border-brand-200 rounded-xl">
                      <span className="block text-xs font-bold text-brand-600">Total Images</span>
                      <span className="text-base font-extrabold text-brand-900">
                        {htmlStats.imgCount}
                      </span>
                    </div>
                    <div className="p-2.5 bg-brand-50 border border-brand-200 rounded-xl">
                      <span className="block text-xs font-bold text-brand-600">Missing Alt</span>
                      <span className={`text-base font-extrabold ${htmlStats.missingAltCount === 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {htmlStats.missingAltCount}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 4. Default Text Input for slug, minifiers, encoders, etc. */}
            {tool.id !== 'utm-builder' && tool.id !== 'keyword-combiner' && tool.id !== 'city-service-keyword-generator' && !tool.id.includes('checker') && (
              <div>
                <label className="block text-xs font-bold text-brand-900 mb-1">Input Data / Code / Content</label>
                <textarea
                  rows={4}
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                  placeholder="Enter text, URLs, code, or article content to process..."
                  className="w-full p-3 text-xs border border-brand-200 rounded-xl bg-white font-mono focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
                />
              </div>
            )}

            {/* Live Result Output */}
            {toolOutput && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-brand-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Processed Output / Validated Code</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => handleCopy(toolOutput)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-accent-700 hover:bg-accent-50 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Result'}</span>
                  </button>
                </div>
                <div className="relative">
                  <pre className="p-4 bg-brand-950 text-emerald-400 rounded-2xl text-xs font-mono overflow-x-auto max-h-56 select-all border border-brand-800">
                    {toolOutput}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="bg-brand-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-brand-100">
            <div className="text-xs text-brand-600">
              ⚡ 100% Client-Side • No data leaves your browser
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2 text-xs font-bold text-brand-700 bg-white border border-brand-200 rounded-xl hover:bg-brand-100/80 transition-colors cursor-pointer"
              >
                Close
              </button>
              {toolOutput && (
                <button
                  type="button"
                  onClick={() => handleCopy(toolOutput)}
                  className="flex-1 sm:flex-none px-6 py-2 text-xs font-bold text-white bg-accent-600 hover:bg-accent-500 rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Output'}</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
