import React, { useState } from 'react';
import { Link2, CheckCircle2, AlertTriangle, ShieldAlert } from 'lucide-react';

export function UrlTester() {
  const [urlInput, setUrlInput] = useState('https://riadalashekin.com/best-8-seo-experts-in-sylhet/');

  let pathname = '';
  try {
    pathname = new URL(urlInput.startsWith('http') ? urlInput : `https://${urlInput}`).pathname;
  } catch {
    pathname = urlInput;
  }

  // Diagnostics
  const isHttps = urlInput.startsWith('https://');
  const hasUppercase = /[A-Z]/.test(pathname);
  const hasUnderscores = /_/.test(pathname);
  const hasSpecialChars = /[%?&=#]/.test(pathname);
  const length = pathname.length;
  const subfolderCount = pathname.split('/').filter(Boolean).length;
  const isClean = !hasUppercase && !hasUnderscores && !hasSpecialChars && length <= 80;

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div>
        <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-2">
          Enter Website URL to Analyze
        </label>
        <div className="relative">
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="w-full px-4 py-3 bg-brand-50/50 border border-brand-200 rounded-xl font-mono text-xs text-brand-900 focus:bg-white focus:ring-2 focus:ring-accent-500 focus:outline-none"
            placeholder="https://example.com/clean-seo-slug/"
          />
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wider">Diagnostic Checklist</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${isHttps ? 'bg-growth-50 border-growth-200 text-growth-900' : 'bg-red-50 border-red-200 text-red-900'}`}>
            {isHttps ? <CheckCircle2 className="w-4 h-4 text-growth-600 shrink-0" /> : <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />}
            <span>{isHttps ? 'Enforces Secure HTTPS Protocol' : 'Missing HTTPS encryption'}</span>
          </div>

          <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${!hasUppercase ? 'bg-growth-50 border-growth-200 text-growth-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
            {!hasUppercase ? <CheckCircle2 className="w-4 h-4 text-growth-600 shrink-0" /> : <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />}
            <span>{!hasUppercase ? 'All Lowercase Characters' : 'Contains uppercase letters (causes duplicate indexing)'}</span>
          </div>

          <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${!hasUnderscores ? 'bg-growth-50 border-growth-200 text-growth-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
            {!hasUnderscores ? <CheckCircle2 className="w-4 h-4 text-growth-600 shrink-0" /> : <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />}
            <span>{!hasUnderscores ? 'Uses Hyphens, Not Underscores' : 'Contains underscores (_) instead of hyphens (-)'}</span>
          </div>

          <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${length <= 75 ? 'bg-growth-50 border-growth-200 text-growth-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
            {length <= 75 ? <CheckCircle2 className="w-4 h-4 text-growth-600 shrink-0" /> : <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />}
            <span>Length: {length} chars ({length <= 75 ? 'Concise and optimal' : 'Lengthy, consider shortening'})</span>
          </div>
        </div>
      </div>

      <div className={`p-4 rounded-xl border text-xs ${isClean ? 'bg-growth-50/60 border-growth-200 text-growth-900' : 'bg-brand-50 border-brand-200 text-brand-800'}`}>
        <p className="font-bold mb-1">
          {isClean ? 'URL Structure Status: 100% SEO-Friendly' : 'Optimization Recommendations:'}
        </p>
        <p className="opacity-90 leading-relaxed">
          {isClean
            ? 'This slug adheres cleanly to Google’s webmaster recommendations: lowercase, hyphenated, free of dynamic tracking parameters, and high readability.'
            : 'Consider rewriting this slug to use pure lowercase alphanumeric characters separated solely by hyphens.'}
        </p>
      </div>
    </div>
  );
}
