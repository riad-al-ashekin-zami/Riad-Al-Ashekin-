import React, { useState } from 'react';
import { Type, FileText, Clock, AlignLeft, RotateCcw, Copy, Check } from 'lucide-react';

export function CharacterCounter() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const charWithSpaces = text.length;
  const charWithoutSpaces = text.replace(/\s/g, '').length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  const paragraphs = text.trim() ? text.split(/\n+/).filter(Boolean).length : 0;
  const readingTimeMin = Math.ceil(words / 200);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
        <div className="bg-brand-50 p-4 rounded-xl border border-brand-100">
          <div className="flex items-center gap-1.5 text-xs text-brand-600 font-bold mb-1">
            <Type className="w-4 h-4 text-accent-600" /> Characters
          </div>
          <div className="text-2xl font-bold text-brand-950 font-mono">{charWithSpaces}</div>
          <div className="text-[11px] text-brand-500 mt-0.5">({charWithoutSpaces} no spaces)</div>
        </div>

        <div className="bg-brand-50 p-4 rounded-xl border border-brand-100">
          <div className="flex items-center gap-1.5 text-xs text-brand-600 font-bold mb-1">
            <FileText className="w-4 h-4 text-strategy-500" /> Words
          </div>
          <div className="text-2xl font-bold text-brand-950 font-mono">{words}</div>
          <div className="text-[11px] text-brand-500 mt-0.5">Total words</div>
        </div>

        <div className="bg-brand-50 p-4 rounded-xl border border-brand-100">
          <div className="flex items-center gap-1.5 text-xs text-brand-600 font-bold mb-1">
            <AlignLeft className="w-4 h-4 text-growth-600" /> Sentences
          </div>
          <div className="text-2xl font-bold text-brand-950 font-mono">{sentences}</div>
          <div className="text-[11px] text-brand-500 mt-0.5">Syntactic units</div>
        </div>

        <div className="bg-brand-50 p-4 rounded-xl border border-brand-100">
          <div className="flex items-center gap-1.5 text-xs text-brand-600 font-bold mb-1">
            <AlignLeft className="w-4 h-4 text-purple-600" /> Paragraphs
          </div>
          <div className="text-2xl font-bold text-brand-950 font-mono">{paragraphs}</div>
          <div className="text-[11px] text-brand-500 mt-0.5">Block sections</div>
        </div>

        <div className="bg-brand-50 p-4 rounded-xl border border-brand-100 col-span-2 sm:col-span-1">
          <div className="flex items-center gap-1.5 text-xs text-brand-600 font-bold mb-1">
            <Clock className="w-4 h-4 text-amber-600" /> Read Time
          </div>
          <div className="text-2xl font-bold text-brand-950 font-mono">~{readingTimeMin}m</div>
          <div className="text-[11px] text-brand-500 mt-0.5">@ 200 WPM</div>
        </div>
      </div>

      {/* Editor box */}
      <div className="relative">
        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here to count characters, words, sentences, and measure readability..."
          className="w-full p-4 bg-brand-50/40 border border-brand-200 rounded-xl text-brand-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white text-base leading-relaxed placeholder:text-brand-400"
        />
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setText('')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-950 px-3 py-1.5 rounded-lg border border-brand-200 hover:bg-brand-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear
            </button>
            <button
              onClick={() => setText('Search Engine Optimization (SEO) is the science and craft of improving a website to increase its organic visibility in search engines like Google, Bing, and AI search interfaces.')}
              className="text-xs font-semibold text-accent-700 hover:text-accent-900 px-3 py-1.5 rounded-lg bg-accent-50 border border-accent-200 transition-colors"
            >
              Insert Sample Text
            </button>
          </div>

          <button
            onClick={handleCopy}
            disabled={!text}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brand-950 hover:bg-brand-800 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-growth-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied to Clipboard' : 'Copy Text'}
          </button>
        </div>
      </div>
    </div>
  );
}
