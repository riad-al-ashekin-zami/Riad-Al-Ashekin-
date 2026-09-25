import React, { useState } from 'react';
import { Monitor, Smartphone, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export function MetaTagChecker() {
  const [title, setTitle] = useState('Riad Al Ashekin | SEO Consultant & Search Strategist');
  const [description, setDescription] = useState('Strategic SEO consulting for venture-backed SaaS and enterprise brands. Turn organic search into compounding revenue through technical rigor and entity architecture.');
  const [url, setUrl] = useState('https://riadalashekin.com/services/');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);

  // Character calculations
  const titleLength = title.length;
  const descLength = description.length;

  // Approximate pixel estimation (Google averages ~9-10px per character for Arial/Roboto 18-20px title font)
  const titlePixelApprox = Math.round(title.split('').reduce((acc, char) => {
    if (['W', 'M', 'O', 'Q', 'G', 'D', 'C'].includes(char)) return acc + 12;
    if (['i', 'l', 'j', 't', 'f', 'r', ' ', '.', ',', '|'].includes(char)) return acc + 5;
    if (char === char.toUpperCase() && char.match(/[A-Z]/)) return acc + 10;
    return acc + 8.5;
  }, 0));

  const maxTitlePixels = 580;
  const titleIsTruncated = titlePixelApprox > maxTitlePixels || titleLength > 60;
  const descIsTruncated = descLength > 160;

  const handleCopySnippet = () => {
    const code = `<title>${title}</title>\n<meta name="description" content="${description}" />`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-100">
        <div>
          <h3 className="text-xl font-bold text-brand-950">Live SERP Snippet Simulator</h3>
          <p className="text-sm text-brand-600">Test title tags and descriptions against Google search preview thresholds</p>
        </div>
        <div className="flex items-center gap-2 bg-brand-50 p-1.5 rounded-xl border border-brand-200">
          <button
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${device === 'desktop' ? 'bg-brand-950 text-white shadow-sm' : 'text-brand-600 hover:text-brand-950'}`}
          >
            <Monitor className="w-3.5 h-3.5" /> Desktop
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${device === 'mobile' ? 'bg-brand-950 text-white shadow-sm' : 'text-brand-600 hover:text-brand-950'}`}
          >
            <Smartphone className="w-3.5 h-3.5" /> Mobile
          </button>
        </div>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-brand-700 uppercase tracking-wider">Meta Title Tag</label>
            <span className={`text-xs font-mono font-medium ${titleLength > 60 ? 'text-amber-600 font-bold' : 'text-brand-500'}`}>
              {titleLength} / 60 chars (~{titlePixelApprox}px / 580px)
            </span>
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 bg-brand-50/50 border border-brand-200 rounded-xl text-brand-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white text-sm"
            placeholder="e.g. SEO Consultant & Strategist | Riad Al Ashekin"
          />
          <div className="w-full bg-brand-100 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className={`h-full transition-all ${titlePixelApprox > 580 ? 'bg-amber-500' : 'bg-growth-500'}`}
              style={{ width: `${Math.min(100, (titlePixelApprox / 580) * 100)}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-brand-700 uppercase tracking-wider">Meta Description</label>
            <span className={`text-xs font-mono font-medium ${descLength > 160 ? 'text-amber-600 font-bold' : 'text-brand-500'}`}>
              {descLength} / 160 chars
            </span>
          </div>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 bg-brand-50/50 border border-brand-200 rounded-xl text-brand-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white text-sm"
            placeholder="Write a clear, compelling description under 160 characters..."
          />
          <div className="w-full bg-brand-100 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className={`h-full transition-all ${descLength > 160 ? 'bg-amber-500' : 'bg-growth-500'}`}
              style={{ width: `${Math.min(100, (descLength / 160) * 100)}%` }}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-2">Canonical URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 bg-brand-50/50 border border-brand-200 rounded-xl text-brand-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white text-sm"
            placeholder="https://riadalashekin.com/..."
          />
        </div>
      </div>

      {/* Google Preview Container */}
      <div className="pt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">Google Search Result Preview</span>
          <button
            onClick={handleCopySnippet}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 hover:text-accent-900 bg-accent-50 px-3 py-1.5 rounded-lg border border-accent-200 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-growth-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied HTML Tags' : 'Copy HTML Tags'}
          </button>
        </div>

        <div className={`p-6 rounded-2xl border transition-all ${device === 'mobile' ? 'max-w-md mx-auto bg-[#ffffff] shadow-md border-brand-200' : 'bg-[#ffffff] shadow-sm border-brand-200'}`}>
          {/* SERP header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-full bg-brand-900 text-white flex items-center justify-center font-bold text-xs">
              R
            </div>
            <div className="truncate">
              <p className="text-[13px] font-medium text-[#202124] leading-tight truncate">riadalashekin.com</p>
              <p className="text-[12px] text-[#4d5156] leading-tight truncate">{url}</p>
            </div>
          </div>

          {/* Title */}
          <h4 className="text-[19px] font-normal text-[#1a0dab] hover:underline cursor-pointer leading-[1.3] mb-1 font-sans">
            {titleIsTruncated ? `${title.slice(0, 58)}...` : title || 'Your Meta Title Here'}
          </h4>

          {/* Snippet */}
          <p className="text-[14px] text-[#4d5156] leading-[1.58] line-clamp-2">
            {descIsTruncated ? `${description.slice(0, 155)}...` : description || 'Your meta description summary will appear here in Google SERP snippets.'}
          </p>
        </div>
      </div>

      {/* Health Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className={`p-4 rounded-xl border flex items-start gap-3 ${!titleIsTruncated ? 'bg-growth-50/50 border-growth-200 text-growth-900' : 'bg-amber-50/50 border-amber-200 text-amber-900'}`}>
          {!titleIsTruncated ? <CheckCircle2 className="w-5 h-5 text-growth-600 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-0.5">Title Tag Health</p>
            <p className="text-xs leading-relaxed">{!titleIsTruncated ? 'Title pixel length is optimal and will not truncate on Google.' : 'Warning: Title exceeds 580px and may get cut off with ellipses (...).'}</p>
          </div>
        </div>

        <div className={`p-4 rounded-xl border flex items-start gap-3 ${!descIsTruncated ? 'bg-growth-50/50 border-growth-200 text-growth-900' : 'bg-amber-50/50 border-amber-200 text-amber-900'}`}>
          {!descIsTruncated ? <CheckCircle2 className="w-5 h-5 text-growth-600 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-0.5">Description Length Health</p>
            <p className="text-xs leading-relaxed">{!descIsTruncated ? 'Description is within the 160-character desktop display threshold.' : 'Description exceeds 160 characters and will likely be truncated on mobile.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
