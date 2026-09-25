import React, { useState } from 'react';
import { ArrowRightLeft, Copy, Check, Trash2 } from 'lucide-react';

export function CommaSeparator() {
  const [input, setInput] = useState(`technical seo audit\nkeyword research\non page optimization\nschema markup\ncore web vitals`);
  const [delimiter, setDelimiter] = useState<',' | ';' | '|' | ' '>(',');
  const [wrapQuotes, setWrapQuotes] = useState(false);
  const [removeDuplicates, setRemoveDuplicates] = useState(true);
  const [copied, setCopied] = useState(false);

  // Process output
  const rawItems = input
    .split(/\r?\n|,|;/)
    .map(s => s.trim())
    .filter(Boolean);

  const processedItems = removeDuplicates 
    ? Array.from(new Set(rawItems))
    : rawItems;

  const output = processedItems
    .map(item => wrapQuotes ? `"${item}"` : item)
    .join(delimiter === ' ' ? ' ' : `${delimiter} `);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-brand-100 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-brand-700">Delimiter:</span>
          <select
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value as any)}
            className="px-2.5 py-1.5 bg-brand-50 border border-brand-200 rounded-lg text-brand-900 font-medium"
          >
            <option value=",">Comma (,)</option>
            <option value=";">Semicolon (;)</option>
            <option value="|">Pipe (|)</option>
            <option value=" ">Space ( )</option>
          </select>
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-brand-700 font-medium">
          <input
            type="checkbox"
            checked={wrapQuotes}
            onChange={(e) => setWrapQuotes(e.target.checked)}
            className="rounded border-brand-300 text-accent-600 focus:ring-accent-500"
          />
          Wrap with quotes ("item")
        </label>

        <label className="flex items-center gap-2 cursor-pointer text-brand-700 font-medium">
          <input
            type="checkbox"
            checked={removeDuplicates}
            onChange={(e) => setRemoveDuplicates(e.target.checked)}
            className="rounded border-brand-300 text-accent-600 focus:ring-accent-500"
          />
          Remove duplicates
        </label>

        <div className="ml-auto text-brand-500 font-mono">
          {processedItems.length} items formatted
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Column */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-brand-700 uppercase tracking-wider">Input Items (Column or List)</label>
            <button
              onClick={() => setInput('')}
              className="text-brand-400 hover:text-brand-700 p-1"
              title="Clear input"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
          <textarea
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste list of items, one per line..."
            className="w-full p-3.5 bg-brand-50/50 border border-brand-200 rounded-xl font-mono text-xs text-brand-900 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white"
          />
        </div>

        {/* Output Column */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-brand-700 uppercase tracking-wider">Separated Result</label>
            <button
              onClick={handleCopy}
              disabled={!output}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 hover:text-accent-900 bg-accent-50 px-2.5 py-1 rounded-lg border border-accent-200 transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-growth-600" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <textarea
            readOnly
            rows={8}
            value={output}
            placeholder="Formatted comma separated output will appear here..."
            className="w-full p-3.5 bg-white border border-brand-200 rounded-xl font-mono text-xs text-brand-900 select-all"
          />
        </div>
      </div>
    </div>
  );
}
