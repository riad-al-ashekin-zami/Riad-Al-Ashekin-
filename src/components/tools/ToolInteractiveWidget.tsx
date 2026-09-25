import React, { useState, useMemo } from 'react';
import { 
  Copy, 
  Check, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  Link2, 
  Download, 
  Layers, 
  Sliders, 
  Search,
  Code,
  FileText,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Percent,
  DollarSign
} from 'lucide-react';
import { ToolRegistryItem } from '../../data/toolDetails/types';
import { MetaTagChecker } from './MetaTagChecker';
import { CharacterCounter } from './CharacterCounter';
import { CommaSeparator } from './CommaSeparator';
import { RobotsTxtTool } from './RobotsTxtTool';
import { LlmsTxtTool } from './LlmsTxtTool';
import { SeoRoiCalculator } from './SeoRoiCalculator';
import { LocalSeoCalculator } from './LocalSeoCalculator';
import { ImageConverterTool } from './ImageConverterTool';
import { StructuredDataTester } from './StructuredDataTester';
import { UrlTester } from './UrlTester';
import { SitemapTester } from './SitemapTester';

interface ToolInteractiveWidgetProps {
  tool: ToolRegistryItem;
}

export const ToolInteractiveWidget: React.FC<ToolInteractiveWidgetProps> = ({ tool }) => {
  const [copied, setCopied] = useState(false);

  // General inputs
  const [inputText, setInputText] = useState('');
  const [secondaryText, setSecondaryText] = useState('');
  const [targetKeyword, setTargetKeyword] = useState('');

  // URL & UTM inputs
  const [urlInput, setUrlInput] = useState('https://example.com/landing-page');
  const [utmSource, setUtmSource] = useState('newsletter');
  const [utmMedium, setUtmMedium] = useState('email');
  const [utmCampaign, setUtmCampaign] = useState('growth_audit');
  const [utmTerm, setUtmTerm] = useState('');
  const [utmContent, setUtmContent] = useState('');

  // Calculator states
  const [calcVisitors, setCalcVisitors] = useState(25000);
  const [calcRankPos, setCalcRankPos] = useState(1);
  const [calcSearchVol, setCalcSearchVol] = useState(15000);
  const [calcCTR, setCalcCTR] = useState(31.5);
  const [calcConversions, setCalcConversions] = useState(625);
  const [calcRevenue, setCalcRevenue] = useState(125000);
  const [calcAdSpend, setCalcAdSpend] = useState(25000);
  const [calcProfitMargin, setCalcProfitMargin] = useState(30);
  const [calcMonthlyPub, setCalcMonthlyPub] = useState(8);
  const [calcGrowthRate, setCalcGrowthRate] = useState(8);

  // Security / Password states
  const [passLength, setPassLength] = useState(18);
  const [passUpper, setPassUpper] = useState(true);
  const [passNums, setPassNums] = useState(true);
  const [passSymbols, setPassSymbols] = useState(true);
  const [generatedPass, setGeneratedPass] = useState('');

  // Lorem states
  const [loremCount, setLoremCount] = useState(3);
  const [loremType, setLoremType] = useState<'paragraphs' | 'sentences' | 'words'>('paragraphs');

  // Schema builder states
  const [faqQuestions, setFaqQuestions] = useState([
    { q: 'What is technical SEO optimization?', a: 'Technical SEO ensures search engines can crawl, render, index, and interpret website architecture efficiently.' },
    { q: 'How quickly does Google update search snippets?', a: 'Typically within 3 to 14 days after Googlebot recrawls the updated HTML header tags.' }
  ]);
  const [entityName, setEntityName] = useState('Riad Al Ashekin Advisory');
  const [entityUrl, setEntityUrl] = useState('https://riadalashekin.com');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Password generator helper
  const handleGeneratePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (passUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (passNums) charset += '0123456789';
    if (passSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let res = '';
    const array = new Uint32Array(passLength);
    if (typeof window !== 'undefined' && window.crypto) {
      window.crypto.getRandomValues(array);
      for (let i = 0; i < passLength; i++) {
        res += charset[array[i] % charset.length];
      }
    } else {
      for (let i = 0; i < passLength; i++) {
        res += charset.charAt(Math.floor(Math.random() * charset.length));
      }
    }
    setGeneratedPass(res);
  };

  // 1. Delegate to existing standalone widgets if available
  if (tool.id === 'meta-checker' || tool.id === 'meta-length-checker') {
    return <MetaTagChecker />;
  }
  if (tool.id === 'character-counter') {
    return <CharacterCounter />;
  }
  if (tool.id === 'comma-separator') {
    return <CommaSeparator />;
  }
  if (tool.id === 'robots-tester') {
    return <RobotsTxtTool mode="tester" />;
  }
  if (tool.id === 'robots-generator') {
    return <RobotsTxtTool mode="generator" />;
  }
  if (tool.id === 'llms-checker') {
    return <LlmsTxtTool mode="checker" />;
  }
  if (tool.id === 'llms-generator') {
    return <LlmsTxtTool mode="generator" />;
  }
  if (tool.id === 'seo-roi-calc') {
    return <SeoRoiCalculator />;
  }
  if (tool.id === 'local-seo-calc') {
    return <LocalSeoCalculator />;
  }
  if (tool.id === 'structured-data' || tool.id === 'schema-validator') {
    return <StructuredDataTester />;
  }
  if (tool.id === 'url-test' || tool.id === 'seo-friendly-url-test') {
    return <UrlTester />;
  }
  if (tool.id === 'sitemap-tester' || tool.id === 'xml-sitemap-validator') {
    return <SitemapTester />;
  }
  if (tool.id === 'webp-to-jpg') {
    return <ImageConverterTool targetFormat="image/jpeg" ext="jpg" title="WebP to JPG Converter" />;
  }
  if (tool.id === 'webp-to-png') {
    return <ImageConverterTool targetFormat="image/png" ext="png" title="WebP to PNG Converter" />;
  }
  if (tool.id === 'image-to-jpg') {
    return <ImageConverterTool targetFormat="image/jpeg" ext="jpg" title="Image to JPG Converter" />;
  }
  if (tool.id === 'image-to-png') {
    return <ImageConverterTool targetFormat="image/png" ext="png" title="Image to PNG Converter" />;
  }
  if (tool.id === 'jpg-to-webp' || tool.id === 'png-to-webp') {
    return <ImageConverterTool targetFormat="image/webp" ext="webp" title="Image to WebP Converter" />;
  }
  if (tool.id === 'jpg-to-avif' || tool.id === 'png-to-avif' || tool.id === 'avif-converter') {
    return <ImageConverterTool targetFormat="image/webp" ext="webp" title="AVIF / WebP Converter" />;
  }

  // --- Dynamic Specialized Widget Handlers ---

  // 2. UTM Builder
  if (tool.id === 'utm-builder') {
    let builtUtm = '';
    try {
      const u = new URL(urlInput.startsWith('http') ? urlInput : `https://${urlInput}`);
      if (utmSource) u.searchParams.set('utm_source', utmSource.toLowerCase());
      if (utmMedium) u.searchParams.set('utm_medium', utmMedium.toLowerCase());
      if (utmCampaign) u.searchParams.set('utm_campaign', utmCampaign.toLowerCase().replace(/\s+/g, '_'));
      if (utmTerm) u.searchParams.set('utm_term', utmTerm.toLowerCase().replace(/\s+/g, '+'));
      if (utmContent) u.searchParams.set('utm_content', utmContent.toLowerCase().replace(/\s+/g, '_'));
      builtUtm = u.toString();
    } catch {
      builtUtm = `${urlInput}?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;
    }

    return (
      <div className="bg-white rounded-2xl border border-brand-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="border-b border-brand-100 pb-4">
          <h3 className="text-lg font-bold text-brand-950 flex items-center gap-2">
            <Link2 className="w-4 h-4 text-accent-600" />
            <span>Generate GA4 Campaign Tracking Link</span>
          </h3>
          <p className="text-xs text-brand-600 mt-1">Configure standard UTM parameters to measure exact channel performance.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-brand-900 mb-1.5">Destination URL *</label>
            <input
              type="text"
              value={urlInput}
              onChange={e => setUrlInput(e.target.value)}
              placeholder="https://yourdomain.com/landing-page"
              className="w-full px-4 py-2.5 text-xs bg-brand-50 border border-brand-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-brand-900 mb-1.5">Campaign Source (utm_source) *</label>
              <input
                type="text"
                value={utmSource}
                onChange={e => setUtmSource(e.target.value)}
                placeholder="e.g. newsletter, linkedin, google"
                className="w-full px-4 py-2 text-xs bg-brand-50 border border-brand-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-900 mb-1.5">Campaign Medium (utm_medium) *</label>
              <input
                type="text"
                value={utmMedium}
                onChange={e => setUtmMedium(e.target.value)}
                placeholder="e.g. email, cpc, organic_social"
                className="w-full px-4 py-2 text-xs bg-brand-50 border border-brand-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-900 mb-1.5">Campaign Name (utm_campaign) *</label>
              <input
                type="text"
                value={utmCampaign}
                onChange={e => setUtmCampaign(e.target.value)}
                placeholder="e.g. spring_promo_2026"
                className="w-full px-4 py-2 text-xs bg-brand-50 border border-brand-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-900 mb-1.5">Campaign Content (utm_content)</label>
              <input
                type="text"
                value={utmContent}
                onChange={e => setUtmContent(e.target.value)}
                placeholder="e.g. hero_banner_cta"
                className="w-full px-4 py-2 text-xs bg-brand-50 border border-brand-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-brand-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-brand-900">Generated Campaign URL</span>
            <button
              onClick={() => handleCopy(builtUtm)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-600 hover:bg-accent-500 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
          <div className="p-4 bg-brand-950 text-emerald-400 rounded-xl font-mono text-xs break-all border border-brand-800">
            {builtUtm}
          </div>
        </div>
      </div>
    );
  }

  // 3. SEO Slug Generator
  if (tool.id === 'seo-slug-generator') {
    const rawInput = inputText || 'How to Design High-Converting SEO Landing Pages in 2026!';
    const generatedSlug = rawInput
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

    return (
      <div className="bg-white rounded-2xl border border-brand-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <label className="block text-xs font-bold text-brand-900 mb-1.5">Enter Article Title or Heading</label>
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="e.g. 15 Actionable Ways to Improve Core Web Vitals Faster"
            className="w-full px-4 py-2.5 text-xs bg-brand-50 border border-brand-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
          />
        </div>

        <div className="p-5 bg-brand-50/70 border border-brand-200 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Clean SEO Permalink Slug</span>
            <button
              onClick={() => handleCopy(generatedSlug)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-600 text-white rounded-lg text-xs font-bold hover:bg-accent-500 transition-colors"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy Slug'}</span>
            </button>
          </div>
          <div className="p-3 bg-white border border-brand-200 rounded-xl font-mono text-xs sm:text-sm text-brand-900 font-bold select-all">
            /{generatedSlug}/
          </div>
          <p className="text-[11.5px] text-brand-500">
            Lowercase, hyphen-separated, special characters and punctuation removed according to Google URL guidelines.
          </p>
        </div>
      </div>
    );
  }

  // 4. Keyword Density & Prominence Checker
  if (tool.id === 'keyword-density-checker' || tool.id === 'keyword-frequency-checker' || tool.id === 'keyword-prominence-checker') {
    const sampleText = inputText || 'Search engine optimization (SEO) is a core discipline of digital marketing. Technical SEO and content strategy work together to attract organic search traffic. When doing keyword research, prioritize user search intent over raw keyword density. Clean on-page SEO includes optimizing title tags, headings, and internal links.';
    const words = sampleText.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').trim().split(/\s+/).filter(Boolean);
    const totalWords = words.length;

    const freqMap: Record<string, number> = {};
    const stopWords = new Set(['the', 'is', 'at', 'which', 'on', 'and', 'a', 'an', 'in', 'to', 'of', 'for', 'with', 'as', 'by', 'that', 'this', 'it', 'or', 'are', 'be']);
    
    words.forEach(w => {
      if (!stopWords.has(w) && w.length > 2) {
        freqMap[w] = (freqMap[w] || 0) + 1;
      }
    });

    const sortedWords = Object.entries(freqMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    return (
      <div className="bg-white rounded-2xl border border-brand-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <label className="block text-xs font-bold text-brand-900 mb-1.5">Paste Article Content / Copy</label>
          <textarea
            rows={5}
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="Paste your drafted article or webpage text here to analyze keyword frequencies..."
            className="w-full p-4 text-xs bg-brand-50 border border-brand-200 rounded-xl font-sans focus:bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 bg-brand-50 border border-brand-200 rounded-xl text-center">
            <span className="block text-[11px] font-bold text-brand-500 uppercase">Total Words</span>
            <span className="text-xl font-extrabold text-brand-950">{totalWords}</span>
          </div>
          <div className="p-3 bg-brand-50 border border-brand-200 rounded-xl text-center">
            <span className="block text-[11px] font-bold text-brand-500 uppercase">Unique Terms</span>
            <span className="text-xl font-extrabold text-brand-950">{Object.keys(freqMap).length}</span>
          </div>
          <div className="p-3 bg-brand-50 border border-brand-200 rounded-xl text-center">
            <span className="block text-[11px] font-bold text-brand-500 uppercase">Reading Time</span>
            <span className="text-xl font-extrabold text-accent-700">{Math.ceil(totalWords / 225)} min</span>
          </div>
          <div className="p-3 bg-brand-50 border border-brand-200 rounded-xl text-center">
            <span className="block text-[11px] font-bold text-brand-500 uppercase">Stuffing Risk</span>
            <span className="text-xl font-extrabold text-emerald-600">Low</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-brand-900 uppercase tracking-wider mb-3">Top Keyword Frequencies &amp; Density</h4>
          <div className="space-y-2">
            {sortedWords.map(([w, count]) => {
              const pct = totalWords > 0 ? ((count / totalWords) * 100).toFixed(1) : '0';
              return (
                <div key={w} className="flex items-center justify-between p-2.5 bg-brand-50/60 rounded-xl border border-brand-100 text-xs">
                  <span className="font-semibold text-brand-900 capitalize">{w}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-brand-500 font-mono">{count} times</span>
                    <span className={`font-mono font-bold px-2 py-0.5 rounded-md ${parseFloat(pct) > 3 ? 'bg-amber-100 text-amber-800' : 'bg-brand-200/70 text-brand-900'}`}>
                      {pct}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 5. Code Minifiers & Formatters (HTML, CSS, JS, JSON, XML)
  if (tool.id === 'html-minifier' || tool.id === 'css-minifier' || tool.id === 'js-minifier' || tool.id === 'json-formatter' || tool.id === 'xml-formatter') {
    let processedCode = '';
    let errorMessage = '';

    const defaultCode = tool.id === 'html-minifier'
      ? '<div class="banner">\n  <h1>Modern Technical SEO</h1>\n  <!-- Google Analytics Tracking -->\n  <p>Deliver faster Core Web Vitals.</p>\n</div>'
      : tool.id === 'css-minifier'
      ? '.header-nav {\n  background-color: #150d28;\n  color: #ffffff;\n  /* navbar padding */\n  padding: 12px 24px;\n}'
      : tool.id === 'json-formatter'
      ? '{"service":"SEO Audit","client":{"name":"Acme Corp","status":"active"},"metrics":{"traffic":50000,"growth":24.5}}'
      : tool.id === 'xml-formatter'
      ? '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://example.com/</loc><lastmod>2026-03-01</lastmod></url></urlset>'
      : 'function calculateROI(traffic, convRate, aov) {\n  // ROI calculation logic\n  return traffic * (convRate / 100) * aov;\n}';

    const source = inputText || defaultCode;

    if (tool.id === 'html-minifier') {
      processedCode = source.replace(/<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ').replace(/> </g, '><').trim();
    } else if (tool.id === 'css-minifier') {
      processedCode = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/ ?([{:;,]) ?/g, '$1').trim();
    } else if (tool.id === 'js-minifier') {
      processedCode = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '').replace(/\s+/g, ' ').trim();
    } else if (tool.id === 'json-formatter') {
      try {
        const parsed = JSON.parse(source);
        processedCode = JSON.stringify(parsed, null, 2);
      } catch (err: any) {
        errorMessage = `Invalid JSON: ${err.message}`;
      }
    } else if (tool.id === 'xml-formatter') {
      let formatted = '';
      let indent = '';
      source.split(/>\s*</).forEach(node => {
        if (node.match(/^\/\w/)) indent = indent.substring(2);
        formatted += indent + '<' + node + '>\r\n';
        if (node.match(/^<?\w[^>]*[^\/]$/)) indent += '  ';
      });
      processedCode = formatted.trim();
    }

    const byteSavings = source.length > processedCode.length
      ? Math.round(((source.length - processedCode.length) / source.length) * 100)
      : 0;

    return (
      <div className="bg-white rounded-2xl border border-brand-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <label className="block text-xs font-bold text-brand-900 mb-1.5">Input Raw Code</label>
          <textarea
            rows={6}
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder={defaultCode}
            className="w-full p-4 text-xs font-mono bg-brand-50 border border-brand-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
          />
        </div>

        {errorMessage ? (
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs font-mono">
            {errorMessage}
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-brand-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Processed Output {byteSavings > 0 && `(${byteSavings}% smaller)`}</span>
              </span>
              <button
                onClick={() => handleCopy(processedCode)}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-600 text-white rounded-lg text-xs font-bold hover:bg-accent-500 transition-colors"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy Output'}</span>
              </button>
            </div>
            <pre className="p-4 bg-brand-950 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto max-h-60 border border-brand-800">
              {processedCode}
            </pre>
          </div>
        )}
      </div>
    );
  }

  // 6. Schema Generators (FAQ, Local Business, Article, etc.)
  if (tool.id === 'faq-schema-generator') {
    const faqJson = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqQuestions.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };
    const schemaCode = `<script type="application/ld+json">\n${JSON.stringify(faqJson, null, 2)}\n</script>`;

    return (
      <div className="bg-white rounded-2xl border border-brand-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="space-y-4">
          {faqQuestions.map((item, idx) => (
            <div key={idx} className="p-4 bg-brand-50 border border-brand-200 rounded-xl space-y-2">
              <span className="text-xs font-bold text-accent-700">Question #{idx + 1}</span>
              <input
                type="text"
                value={item.q}
                onChange={e => {
                  const updated = [...faqQuestions];
                  updated[idx].q = e.target.value;
                  setFaqQuestions(updated);
                }}
                className="w-full px-3 py-1.5 text-xs bg-white border border-brand-200 rounded-lg outline-none"
              />
              <textarea
                rows={2}
                value={item.a}
                onChange={e => {
                  const updated = [...faqQuestions];
                  updated[idx].a = e.target.value;
                  setFaqQuestions(updated);
                }}
                className="w-full px-3 py-1.5 text-xs bg-white border border-brand-200 rounded-lg outline-none"
              />
            </div>
          ))}
          <button
            onClick={() => setFaqQuestions([...faqQuestions, { q: 'New Question?', a: 'Answer description...' }])}
            className="px-4 py-1.5 bg-brand-100 hover:bg-brand-200 text-brand-900 rounded-lg text-xs font-bold transition-colors"
          >
            + Add Another Question
          </button>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-brand-900">Valid JSON-LD Output</span>
            <button
              onClick={() => handleCopy(schemaCode)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-600 text-white rounded-lg text-xs font-bold hover:bg-accent-500 transition-colors"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy JSON-LD'}</span>
            </button>
          </div>
          <pre className="p-4 bg-brand-950 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto max-h-60 border border-brand-800">
            {schemaCode}
          </pre>
        </div>
      </div>
    );
  }

  // 7. Random Password Generator
  if (tool.id === 'random-password-generator') {
    return (
      <div className="bg-white rounded-2xl border border-brand-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="p-4 bg-brand-50 border border-brand-200 rounded-2xl flex items-center justify-between">
          <div className="font-mono text-lg sm:text-xl font-extrabold text-brand-950 tracking-wider break-all select-all">
            {generatedPass || 'Click Generate Password'}
          </div>
          {generatedPass && (
            <button
              onClick={() => handleCopy(generatedPass)}
              className="ml-3 shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 bg-accent-600 text-white rounded-xl text-xs font-bold hover:bg-accent-500 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-bold text-brand-900 mb-1">
              <span>Password Length</span>
              <span>{passLength} characters</span>
            </div>
            <input
              type="range"
              min={8}
              max={64}
              value={passLength}
              onChange={e => setPassLength(parseInt(e.target.value, 10))}
              className="w-full accent-accent-600"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <label className="flex items-center gap-2 text-xs font-semibold text-brand-800 cursor-pointer">
              <input type="checkbox" checked={passUpper} onChange={e => setPassUpper(e.target.checked)} className="rounded text-accent-600" />
              <span>Uppercase (A-Z)</span>
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold text-brand-800 cursor-pointer">
              <input type="checkbox" checked={passNums} onChange={e => setPassNums(e.target.checked)} className="rounded text-accent-600" />
              <span>Numbers (0-9)</span>
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold text-brand-800 cursor-pointer">
              <input type="checkbox" checked={passSymbols} onChange={e => setPassSymbols(e.target.checked)} className="rounded text-accent-600" />
              <span>Symbols (!@#$)</span>
            </label>
          </div>

          <button
            onClick={handleGeneratePassword}
            className="w-full py-3 bg-brand-950 hover:bg-brand-900 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-accent-400" />
            <span>Generate Cryptographic Password</span>
          </button>
        </div>
      </div>
    );
  }

  // 8. Default Interactive Text Processor (Keyword Combiner, URL Encoder/Decoder/Cleaner, HTML Cleaner)
  return (
    <div className="bg-white rounded-2xl border border-brand-200/90 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="border-b border-brand-100 pb-3">
        <h3 className="text-base font-bold text-brand-950 flex items-center gap-2">
          <Play className="w-4 h-4 text-accent-600" />
          <span>Interactive {tool.name}</span>
        </h3>
        <p className="text-xs text-brand-600 mt-1">Execute this utility client-side with zero data transmission.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-brand-900 mb-1.5">Input Text / Code / URLs</label>
          <textarea
            rows={5}
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder={`Enter input for ${tool.name}...`}
            className="w-full p-4 text-xs font-mono bg-brand-50 border border-brand-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
          />
        </div>

        {tool.category === 'content' && (tool.id.includes('combiner') || tool.id.includes('service')) && (
          <div>
            <label className="block text-xs font-bold text-brand-900 mb-1.5">Modifiers / Secondary List (one per line)</label>
            <textarea
              rows={3}
              value={secondaryText}
              onChange={e => setSecondaryText(e.target.value)}
              placeholder="London&#10;Manchester&#10;Remote"
              className="w-full p-3 text-xs font-mono bg-brand-50 border border-brand-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 outline-none"
            />
          </div>
        )}

        <div className="pt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-brand-900">Output Results</span>
            {inputText && (
              <button
                onClick={() => {
                  let out = inputText;
                  if (tool.id === 'url-encoder') out = encodeURIComponent(inputText);
                  if (tool.id === 'url-decoder') out = decodeURIComponent(inputText);
                  if (tool.id === 'url-cleaner') out = inputText.split('?')[0];
                  handleCopy(out);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-600 text-white rounded-lg text-xs font-bold hover:bg-accent-500 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy Output'}</span>
              </button>
            )}
          </div>
          <div className="p-4 bg-brand-950 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto max-h-48 border border-brand-800">
            {tool.id === 'url-encoder' ? encodeURIComponent(inputText || 'https://example.com/test?q=hello world') :
             tool.id === 'url-decoder' ? decodeURIComponent(inputText || 'https%3A%2F%2Fexample.com%2Ftest%3Fq%3Dhello%20world') :
             tool.id === 'url-cleaner' ? (inputText || 'https://example.com/page?utm_source=fb&fbclid=123').split('?')[0] :
             inputText || 'Enter data above to view processed output.'}
          </div>
        </div>
      </div>
    </div>
  );
};
