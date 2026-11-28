import React, { useState, useMemo, useRef } from 'react';
import { Volume2, Square, Shuffle, Sparkles, Plus, Trash2 } from 'lucide-react';
import {
  CopyButton,
  ClearButton,
  ErrorBanner,
  inputCls,
  textareaCls,
  primaryBtnCls,
  secondaryBtnCls,
  cryptoRandomInt,
} from './shared';

/* ============================================================================
 * 1) Case Converter (/case-converter/)
 * ========================================================================== */
type CaseMode = 'upper' | 'lower' | 'title' | 'sentence' | 'camel' | 'snake' | 'kebab';

function splitWordsForIdentifier(input: string): string[] {
  return input
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_\-]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function convertCase(input: string, mode: CaseMode): string {
  if (!input) return '';
  switch (mode) {
    case 'upper':
      return input.toUpperCase();
    case 'lower':
      return input.toLowerCase();
    case 'title': {
      const smallWords = new Set(['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet']);
      return input
        .toLowerCase()
        .replace(/\b([a-z0-9']+)\b/g, (word, _g, offset) => {
          if (offset > 0 && smallWords.has(word)) return word;
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
    }
    case 'sentence':
      return input
        .toLowerCase()
        .replace(/(^\s*[a-z]|[.!?]\s+[a-z]|\n\s*[a-z])/g, (ch) => ch.toUpperCase());
    case 'camel':
      return input
        .split('\n')
        .map((line) => {
          const words = splitWordsForIdentifier(line);
          return words
            .map((w, idx) => {
              const lower = w.toLowerCase();
              return idx === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
            })
            .join('');
        })
        .join('\n');
    case 'snake':
      return input
        .split('\n')
        .map((line) =>
          splitWordsForIdentifier(line)
            .map((w) => w.toLowerCase())
            .join('_')
        )
        .join('\n');
    case 'kebab':
      return input
        .split('\n')
        .map((line) =>
          splitWordsForIdentifier(line)
            .map((w) => w.toLowerCase())
            .join('-')
        )
        .join('\n');
  }
}

export function CaseConverterWidget() {
  const [input, setInput] = useState('Welcome to the quick case converter tool 2026');
  const [mode, setMode] = useState<CaseMode>('title');

  const result = useMemo(() => convertCase(input, mode), [input, mode]);

  const modes: Array<{ id: CaseMode; label: string }> = [
    { id: 'upper', label: 'UPPERCASE' },
    { id: 'lower', label: 'lowercase' },
    { id: 'title', label: 'Title Case' },
    { id: 'sentence', label: 'Sentence case' },
    { id: 'camel', label: 'camelCase' },
    { id: 'snake', label: 'snake_case' },
    { id: 'kebab', label: 'kebab-case' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="space-y-2">
        <label htmlFor="case-input" className="block text-xs font-bold text-brand-900">
          Input Text
        </label>
        <textarea
          id="case-input"
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste or type your text here..."
          className={textareaCls}
        />
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Case conversion options">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
              mode === m.id
                ? 'bg-accent-600 text-white shadow-xs'
                : 'bg-brand-50 text-brand-800 border border-brand-200 hover:bg-brand-100'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="case-output" className="text-xs font-bold text-brand-900">
            Result ({modes.find((m) => m.id === mode)?.label})
          </label>
          <span className="text-xs font-mono tabular-nums text-brand-600">
            Characters: {result.length}
          </span>
        </div>
        <textarea
          id="case-output"
          rows={5}
          readOnly
          value={result}
          className={`${textareaCls} bg-brand-50/70`}
        />
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <ClearButton onClick={() => setInput('')} />
          <CopyButton text={result} />
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 2) Remove Duplicate Lines (/remove-duplicate-lines/)
 * ========================================================================== */
export function RemoveDuplicateLinesWidget() {
  const [input, setInput] = useState('Apple\nBanana\napple\nOrange\nBanana\n  Orange  \n\nPear');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [trimSpaces, setTrimSpaces] = useState(true);
  const [removeEmpty, setRemoveEmpty] = useState(true);
  const [keepFirst, setKeepFirst] = useState(true);

  const { output, linesBefore, linesAfter, duplicatesRemoved } = useMemo(() => {
    if (!input) {
      return { output: '', linesBefore: 0, linesAfter: 0, duplicatesRemoved: 0 };
    }
    const rawLines = input.split(/\r?\n/);
    const linesBeforeCount = rawLines.length;
    const processed = rawLines.map((l) => (trimSpaces ? l.trim() : l));
    const filtered = removeEmpty ? processed.filter((l) => l.length > 0) : processed;

    const resultLines: string[] = [];
    if (keepFirst) {
      const seen = new Set<string>();
      for (const line of filtered) {
        const key = caseSensitive ? line : line.toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          resultLines.push(line);
        }
      }
    } else {
      const seen = new Set<string>();
      const reversed: string[] = [];
      for (let i = filtered.length - 1; i >= 0; i--) {
        const line = filtered[i];
        const key = caseSensitive ? line : line.toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          reversed.push(line);
        }
      }
      resultLines.push(...reversed.reverse());
    }

    return {
      output: resultLines.join('\n'),
      linesBefore: linesBeforeCount,
      linesAfter: resultLines.length,
      duplicatesRemoved: Math.max(0, filtered.length - resultLines.length),
    };
  }, [input, caseSensitive, trimSpaces, removeEmpty, keepFirst]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="dedupe-input" className="block text-xs font-bold text-brand-900">
            Input Lines
          </label>
          <textarea
            id="dedupe-input"
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste one item per line..."
            className={textareaCls}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="dedupe-output" className="block text-xs font-bold text-brand-900">
            Clean Output
          </label>
          <textarea
            id="dedupe-output"
            rows={8}
            readOnly
            value={output}
            className={`${textareaCls} bg-brand-50/70`}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 p-4 rounded-xl bg-brand-50/60 border border-brand-200/80 text-xs sm:text-sm">
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="w-4 h-4 accent-accent-600 rounded"
          />
          <span className="font-medium text-brand-900">Case-sensitive</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={trimSpaces}
            onChange={(e) => setTrimSpaces(e.target.checked)}
            className="w-4 h-4 accent-accent-600 rounded"
          />
          <span className="font-medium text-brand-900">Trim leading/trailing spaces</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={removeEmpty}
            onChange={(e) => setRemoveEmpty(e.target.checked)}
            className="w-4 h-4 accent-accent-600 rounded"
          />
          <span className="font-medium text-brand-900">Remove empty lines</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={keepFirst}
            onChange={(e) => setKeepFirst(e.target.checked)}
            className="w-4 h-4 accent-accent-600 rounded"
          />
          <span className="font-medium text-brand-900">Keep first occurrence (uncheck to keep last)</span>
        </label>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-xl bg-brand-50 border border-brand-100">
          <div className="text-[11px] font-bold text-brand-600 uppercase">Lines Before</div>
          <div className="text-xl font-bold font-mono tabular-nums text-brand-950">{linesBefore}</div>
        </div>
        <div className="p-3 rounded-xl bg-brand-50 border border-brand-100">
          <div className="text-[11px] font-bold text-brand-600 uppercase">Lines After</div>
          <div className="text-xl font-bold font-mono tabular-nums text-brand-950">{linesAfter}</div>
        </div>
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
          <div className="text-[11px] font-bold text-emerald-700 uppercase">Duplicates Removed</div>
          <div className="text-xl font-bold font-mono tabular-nums text-emerald-800">{duplicatesRemoved}</div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => setInput('')} />
        <CopyButton text={output} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 3) Sort Lines (/sort-lines/)
 * ========================================================================== */
type SortMode = 'az' | 'za' | 'num-asc' | 'num-desc' | 'len-asc' | 'len-desc' | 'shuffle';

export function SortLinesWidget() {
  const [input, setInput] = useState('Zebra\napple\nBanana\n10\n2\n35');
  const [sortMode, setSortMode] = useState<SortMode>('az');
  const [caseInsensitive, setCaseInsensitive] = useState(true);
  const [removeEmpty, setRemoveEmpty] = useState(true);
  const [removeDuplicates, setRemoveDuplicates] = useState(false);
  const [shuffleTick, setShuffleTick] = useState(0);

  const output = useMemo(() => {
    if (!input) return '';
    let lines = input.split(/\r?\n/);
    if (removeEmpty) {
      lines = lines.filter((l) => l.trim().length > 0);
    }
    if (removeDuplicates) {
      const seen = new Set<string>();
      lines = lines.filter((l) => {
        const key = caseInsensitive ? l.toLowerCase() : l;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    const sorted = [...lines];
    if (sortMode === 'az' || sortMode === 'za') {
      sorted.sort((a, b) => {
        const av = caseInsensitive ? a.toLowerCase() : a;
        const bv = caseInsensitive ? b.toLowerCase() : b;
        const cmp = av.localeCompare(bv);
        return sortMode === 'az' ? cmp : -cmp;
      });
    } else if (sortMode === 'num-asc' || sortMode === 'num-desc') {
      const getNum = (s: string) => {
        const m = s.trim().match(/^-?\d+(?:\.\d+)?/);
        return m ? parseFloat(m[0]) : NaN;
      };
      sorted.sort((a, b) => {
        const na = getNum(a);
        const nb = getNum(b);
        if (Number.isNaN(na) && Number.isNaN(nb)) return a.localeCompare(b);
        if (Number.isNaN(na)) return 1;
        if (Number.isNaN(nb)) return -1;
        return sortMode === 'num-asc' ? na - nb : nb - na;
      });
    } else if (sortMode === 'len-asc') {
      sorted.sort((a, b) => a.length - b.length || a.localeCompare(b));
    } else if (sortMode === 'len-desc') {
      sorted.sort((a, b) => b.length - a.length || a.localeCompare(b));
    } else if (sortMode === 'shuffle') {
      void shuffleTick;
      for (let i = sorted.length - 1; i > 0; i--) {
        const j = cryptoRandomInt(i + 1);
        [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
      }
    }

    return sorted.join('\n');
  }, [input, sortMode, caseInsensitive, removeEmpty, removeDuplicates, shuffleTick]);

  const modes: Array<{ id: SortMode; label: string }> = [
    { id: 'az', label: 'A to Z' },
    { id: 'za', label: 'Z to A' },
    { id: 'num-asc', label: 'Numeric (Low–High)' },
    { id: 'num-desc', label: 'Numeric (High–Low)' },
    { id: 'len-asc', label: 'Shortest First' },
    { id: 'len-desc', label: 'Longest First' },
    { id: 'shuffle', label: 'Random Shuffle' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => {
              setSortMode(m.id);
              if (m.id === 'shuffle') setShuffleTick((t) => t + 1);
            }}
            className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
              sortMode === m.id
                ? 'bg-accent-600 text-white'
                : 'bg-brand-50 text-brand-800 border border-brand-200 hover:bg-brand-100'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 p-4 rounded-xl bg-brand-50/60 border border-brand-200/80 text-xs sm:text-sm">
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={caseInsensitive}
            onChange={(e) => setCaseInsensitive(e.target.checked)}
            className="w-4 h-4 accent-accent-600 rounded"
          />
          <span className="font-medium text-brand-900">Case-insensitive</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={removeEmpty}
            onChange={(e) => setRemoveEmpty(e.target.checked)}
            className="w-4 h-4 accent-accent-600 rounded"
          />
          <span className="font-medium text-brand-900">Remove empty lines</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={removeDuplicates}
            onChange={(e) => setRemoveDuplicates(e.target.checked)}
            className="w-4 h-4 accent-accent-600 rounded"
          />
          <span className="font-medium text-brand-900">Remove duplicates</span>
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="sort-input" className="block text-xs font-bold text-brand-900">Input Lines</label>
          <textarea
            id="sort-input"
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste lines to sort..."
            className={textareaCls}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="sort-output" className="block text-xs font-bold text-brand-900">Sorted Output</label>
          <textarea
            id="sort-output"
            rows={8}
            readOnly
            value={output}
            className={`${textareaCls} bg-brand-50/70`}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => setInput('')} />
        <CopyButton text={output} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 4) Remove Line Breaks (/remove-line-breaks/)
 * ========================================================================== */
type LineBreakMode = 'remove-all' | 'keep-paragraphs' | 'custom';

export function RemoveLineBreaksWidget() {
  const [input, setInput] = useState(
    'This sentence was copied\nfrom a PDF file with\nhard line breaks.\n\nThis is a second\nparagraph with line breaks.'
  );
  const [mode, setMode] = useState<LineBreakMode>('keep-paragraphs');
  const [customSep, setCustomSep] = useState(', ');

  const output = useMemo(() => {
    if (!input) return '';
    const normalized = input.replace(/\r\n/g, '\n');
    if (mode === 'remove-all') {
      return normalized.replace(/\n+/g, ' ').replace(/ {2,}/g, ' ').trim();
    }
    if (mode === 'keep-paragraphs') {
      return normalized
        .split(/\n{2,}/)
        .map((para) => para.replace(/\n+/g, ' ').replace(/ {2,}/g, ' ').trim())
        .filter(Boolean)
        .join('\n\n');
    }
    return normalized.replace(/\n+/g, customSep);
  }, [input, mode, customSep]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'keep-paragraphs' as const, label: 'Keep Paragraph Breaks' },
          { id: 'remove-all' as const, label: 'Remove All Line Breaks' },
          { id: 'custom' as const, label: 'Replace with Custom Separator' },
        ].map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
              mode === m.id
                ? 'bg-accent-600 text-white'
                : 'bg-brand-50 text-brand-800 border border-brand-200 hover:bg-brand-100'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === 'custom' && (
        <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-brand-50/60 border border-brand-200">
          <label htmlFor="lb-sep" className="text-xs font-bold text-brand-900">
            Separator:
          </label>
          <input
            id="lb-sep"
            type="text"
            value={customSep}
            onChange={(e) => setCustomSep(e.target.value)}
            className={`${inputCls} max-w-[180px]`}
          />
          <button type="button" onClick={() => setCustomSep(' ')} className={secondaryBtnCls}>Space</button>
          <button type="button" onClick={() => setCustomSep(', ')} className={secondaryBtnCls}>Comma</button>
          <button type="button" onClick={() => setCustomSep(' | ')} className={secondaryBtnCls}>Pipe</button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="lb-input" className="block text-xs font-bold text-brand-900">Input Text</label>
          <textarea id="lb-input" rows={7} value={input} onChange={(e) => setInput(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="lb-output" className="block text-xs font-bold text-brand-900">Clean Text</label>
          <textarea id="lb-output" rows={7} readOnly value={output} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => setInput('')} />
        <CopyButton text={output} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 5) Remove Extra Spaces (/remove-extra-spaces/)
 * ========================================================================== */
export function RemoveExtraSpacesWidget() {
  const [input, setInput] = useState('  Hello\t\tworld   from   this\u00A0tool!  \n\n\n   Clean   spaces   now.  ');
  const [collapseSpaces, setCollapseSpaces] = useState(true);
  const [trimLines, setTrimLines] = useState(true);
  const [tabsToSpaces, setTabsToSpaces] = useState(true);
  const [removeBlankLines, setRemoveBlankLines] = useState(true);
  const [removeNbsp, setRemoveNbsp] = useState(true);
  const [removeAllSpaces, setRemoveAllSpaces] = useState(false);

  const output = useMemo(() => {
    if (!input) return '';
    let res = input.replace(/\r\n/g, '\n');
    if (removeNbsp) {
      res = res.replace(/\u00A0/g, ' ');
    }
    if (tabsToSpaces) {
      res = res.replace(/\t+/g, ' ');
    }
    if (removeAllSpaces) {
      res = res.replace(/[ \t\u00A0]+/g, '');
    } else {
      if (collapseSpaces) {
        res = res.replace(/ {2,}/g, ' ');
      }
      if (trimLines) {
        res = res
          .split('\n')
          .map((line) => line.trim())
          .join('\n');
      }
    }
    if (removeBlankLines) {
      res = res
        .split('\n')
        .filter((line) => line.trim().length > 0)
        .join('\n');
    }
    return res;
  }, [input, collapseSpaces, trimLines, tabsToSpaces, removeBlankLines, removeNbsp, removeAllSpaces]);

  const charsRemoved = Math.max(0, input.length - output.length);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-4 p-4 rounded-xl bg-brand-50/60 border border-brand-200/80 text-xs sm:text-sm">
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={collapseSpaces} disabled={removeAllSpaces} onChange={(e) => setCollapseSpaces(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">Collapse multiple spaces</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={trimLines} disabled={removeAllSpaces} onChange={(e) => setTrimLines(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">Trim each line</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={tabsToSpaces} onChange={(e) => setTabsToSpaces(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">Convert tabs to spaces</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={removeNbsp} onChange={(e) => setRemoveNbsp(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">Clean non-breaking spaces</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={removeBlankLines} onChange={(e) => setRemoveBlankLines(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">Remove blank lines</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={removeAllSpaces} onChange={(e) => setRemoveAllSpaces(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">Remove all spaces</span>
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="spaces-input" className="block text-xs font-bold text-brand-900">Input Text</label>
          <textarea id="spaces-input" rows={7} value={input} onChange={(e) => setInput(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="spaces-output" className="block text-xs font-bold text-brand-900">Cleaned Output</label>
            <span className="text-xs font-mono tabular-nums text-emerald-700 font-semibold">
              {charsRemoved} characters removed
            </span>
          </div>
          <textarea id="spaces-output" rows={7} readOnly value={output} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => setInput('')} />
        <CopyButton text={output} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 6) Find and Replace Text (/find-and-replace-text/)
 * ========================================================================== */
export function FindAndReplaceWidget() {
  const [input, setInput] = useState('The quick brown fox jumps over the lazy fox. Another FOX appeared.');
  const [findText, setFindText] = useState('fox');
  const [replaceText, setReplaceText] = useState('cat');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(true);
  const [useRegex, setUseRegex] = useState(false);

  const { output, matchCount, error } = useMemo(() => {
    if (!findText) return { output: input, matchCount: 0, error: null };
    try {
      const escaped = useRegex ? findText : findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = wholeWord ? `\\b(?:${escaped})\\b` : escaped;
      const flags = caseSensitive ? 'g' : 'gi';
      const re = new RegExp(pattern, flags);
      const matches = input.match(re);
      const replaced = input.replace(re, replaceText);
      return { output: replaced, matchCount: matches ? matches.length : 0, error: null };
    } catch (e) {
      return {
        output: input,
        matchCount: 0,
        error: e instanceof Error ? `Invalid regular expression: ${e.message}` : 'Invalid pattern',
      };
    }
  }, [input, findText, replaceText, caseSensitive, wholeWord, useRegex]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="fr-find" className="block text-xs font-bold text-brand-900">Find</label>
          <input id="fr-find" type="text" value={findText} onChange={(e) => setFindText(e.target.value)} placeholder="Text or regex to find..." className={inputCls} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="fr-replace" className="block text-xs font-bold text-brand-900">Replace With</label>
          <input id="fr-replace" type="text" value={replaceText} onChange={(e) => setReplaceText(e.target.value)} placeholder="Replacement text..." className={inputCls} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-brand-50/60 border border-brand-200/80 text-xs sm:text-sm">
        <div className="flex flex-wrap gap-4">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
            <span className="font-medium text-brand-900">Case-sensitive</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={wholeWord} onChange={(e) => setWholeWord(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
            <span className="font-medium text-brand-900">Whole word</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={useRegex} onChange={(e) => setUseRegex(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
            <span className="font-medium text-brand-900">Use regular expression</span>
          </label>
        </div>
        <span className="text-xs font-mono tabular-nums font-bold text-accent-700">
          Matches replaced: {matchCount}
        </span>
      </div>

      <ErrorBanner message={error} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="fr-input" className="block text-xs font-bold text-brand-900">Source Text</label>
          <textarea id="fr-input" rows={7} value={input} onChange={(e) => setInput(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="fr-output" className="block text-xs font-bold text-brand-900">Updated Text</label>
          <textarea id="fr-output" rows={7} readOnly value={output} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <ClearButton onClick={() => setInput('')} />
          <button type="button" onClick={() => setInput(output)} disabled={Boolean(error)} className={secondaryBtnCls}>
            Apply Output as New Input
          </button>
        </div>
        <CopyButton text={output} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 7) Reverse Text (/reverse-text/)
 * ========================================================================== */
type ReverseMode = 'chars' | 'words-order' | 'lines-order' | 'each-word';

export function ReverseTextWidget() {
  const [input, setInput] = useState('Hello world!\nReverse these lines.');
  const [mode, setMode] = useState<ReverseMode>('chars');

  const output = useMemo(() => {
    if (!input) return '';
    if (mode === 'chars') {
      return Array.from(input).reverse().join('');
    }
    if (mode === 'words-order') {
      return input
        .split('\n')
        .map((line) => line.trim().split(/\s+/).reverse().join(' '))
        .join('\n');
    }
    if (mode === 'lines-order') {
      return input.split(/\r?\n/).reverse().join('\n');
    }
    return input.replace(/\S+/g, (w) => Array.from(w).reverse().join(''));
  }, [input, mode]);

  const modes: Array<{ id: ReverseMode; label: string }> = [
    { id: 'chars', label: 'Reverse Characters' },
    { id: 'words-order', label: 'Reverse Word Order' },
    { id: 'lines-order', label: 'Reverse Line Order' },
    { id: 'each-word', label: 'Reverse Each Word' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
              mode === m.id
                ? 'bg-accent-600 text-white'
                : 'bg-brand-50 text-brand-800 border border-brand-200 hover:bg-brand-100'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="rev-input" className="block text-xs font-bold text-brand-900">Input Text</label>
          <textarea id="rev-input" rows={6} value={input} onChange={(e) => setInput(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="rev-output" className="block text-xs font-bold text-brand-900">Reversed Output</label>
          <textarea id="rev-output" rows={6} readOnly value={output} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => setInput('')} />
        <CopyButton text={output} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 8) Text to Binary Converter (/text-to-binary/)
 * ========================================================================== */
export function TextToBinaryWidget() {
  const [direction, setDirection] = useState<'text-to-bin' | 'bin-to-text'>('text-to-bin');
  const [input, setInput] = useState('Hello');
  const [spaceSeparated, setSpaceSeparated] = useState(true);

  const { output, error } = useMemo(() => {
    if (!input) return { output: '', error: null };
    if (direction === 'text-to-bin') {
      const bytes = new TextEncoder().encode(input);
      const bits = Array.from(bytes).map((b) => b.toString(2).padStart(8, '0'));
      return { output: bits.join(spaceSeparated ? ' ' : ''), error: null };
    }
    const cleaned = input.trim();
    if (!/^[01\s]+$/.test(cleaned)) {
      return { output: '', error: 'Invalid binary input. Only 0, 1, and spaces are allowed.' };
    }
    const compact = cleaned.replace(/\s+/g, '');
    if (compact.length === 0) return { output: '', error: null };
    const tokens = cleaned.includes(' ') ? cleaned.split(/\s+/) : compact.match(/.{1,8}/g) || [];
    for (const t of tokens) {
      if (t.length !== 8) {
        return {
          output: '',
          error: `Each binary byte must be 8 bits long (found "${t}" with ${t.length} bits).`,
        };
      }
    }
    try {
      const bytes = new Uint8Array(tokens.map((b) => parseInt(b, 2)));
      const decoded = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
      return { output: decoded, error: null };
    } catch {
      return { output: '', error: 'Binary sequence does not represent valid UTF-8 text.' };
    }
  }, [direction, input, spaceSeparated]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setDirection('text-to-bin')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer ${
              direction === 'text-to-bin' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            Text to Binary
          </button>
          <button
            type="button"
            onClick={() => setDirection('bin-to-text')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer ${
              direction === 'bin-to-text' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            Binary to Text
          </button>
        </div>

        {direction === 'text-to-bin' && (
          <label className="inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={spaceSeparated}
              onChange={(e) => setSpaceSeparated(e.target.checked)}
              className="w-4 h-4 accent-accent-600 rounded"
            />
            <span className="font-medium text-brand-900">Space-separated 8-bit bytes</span>
          </label>
        )}
      </div>

      <ErrorBanner message={error} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="bin-input" className="block text-xs font-bold text-brand-900">
            {direction === 'text-to-bin' ? 'Plain Text (UTF-8)' : 'Binary Input (8-bit bytes)'}
          </label>
          <textarea id="bin-input" rows={6} value={input} onChange={(e) => setInput(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="bin-output" className="block text-xs font-bold text-brand-900">
            {direction === 'text-to-bin' ? 'Binary Output' : 'Decoded Text'}
          </label>
          <textarea id="bin-output" rows={6} readOnly value={output} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <ClearButton onClick={() => setInput('')} />
          <button
            type="button"
            disabled={!output || Boolean(error)}
            onClick={() => {
              const nextDir = direction === 'text-to-bin' ? 'bin-to-text' : 'text-to-bin';
              setInput(output);
              setDirection(nextDir);
            }}
            className={secondaryBtnCls}
          >
            Swap Input &amp; Output
          </button>
        </div>
        <CopyButton text={output} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 9) Morse Code Translator (/morse-code-translator/)
 * ========================================================================== */
const MORSE_MAP: Record<string, string> = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....',
  I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.',
  Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
  Y: '-.--', Z: '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
  '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
  ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
  '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
};

const REVERSE_MORSE: Record<string, string> = Object.fromEntries(
  Object.entries(MORSE_MAP).map(([k, v]) => [v, k])
);

export function MorseCodeTranslatorWidget() {
  const [direction, setDirection] = useState<'text-to-morse' | 'morse-to-text'>('text-to-morse');
  const [input, setInput] = useState('SOS HELP');
  const [wpm, setWpm] = useState(18);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const stopFlagRef = useRef(false);

  const { output, warning } = useMemo(() => {
    if (!input.trim()) return { output: '', warning: null };
    if (direction === 'text-to-morse') {
      const words = input.trim().toUpperCase().split(/\s+/);
      const unsupported: string[] = [];
      const encodedWords = words.map((word) =>
        word.split('')
          .map((ch) => {
            if (MORSE_MAP[ch]) return MORSE_MAP[ch];
            unsupported.push(ch);
            return '';
          })
          .filter(Boolean)
          .join(' ')
      );
      return {
        output: encodedWords.filter(Boolean).join(' / '),
        warning:
          unsupported.length > 0
            ? `Unsupported characters skipped: ${Array.from(new Set(unsupported)).join(' ')}`
            : null,
      };
    }
    const clean = input.trim();
    if (!/^[.\-\s/]+$/.test(clean)) {
      return { output: '', warning: 'Invalid Morse code. Use dots (.), dashes (-), spaces, and "/" for word breaks.' };
    }
    const unknown: string[] = [];
    const words = clean.split(/\s*\/\s*/).map((word) =>
      word
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((code) => {
          if (REVERSE_MORSE[code]) return REVERSE_MORSE[code];
          unknown.push(code);
          return '?';
        })
        .join('')
    );
    return {
      output: words.join(' '),
      warning: unknown.length > 0 ? `Unrecognized Morse sequences replaced with "?": ${unknown.join(', ')}` : null,
    };
  }, [direction, input]);

  const stopAudio = () => {
    stopFlagRef.current = true;
    setIsPlaying(false);
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  };

  const playMorse = async () => {
    const morseText = direction === 'text-to-morse' ? output : input;
    if (!morseText.trim()) return;
    stopAudio();
    stopFlagRef.current = false;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    audioCtxRef.current = ctx;
    setIsPlaying(true);

    const dotMs = Math.round(1200 / wpm);
    const playBeep = (durationMs: number) =>
      new Promise<void>((resolve) => {
        if (stopFlagRef.current) return resolve();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 640;
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        setTimeout(() => {
          try {
            osc.stop();
          } catch {
            // ignore
          }
          resolve();
        }, durationMs);
      });

    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    for (const ch of morseText) {
      if (stopFlagRef.current) break;
      if (ch === '.') {
        await playBeep(dotMs);
        await sleep(dotMs);
      } else if (ch === '-') {
        await playBeep(dotMs * 3);
        await sleep(dotMs);
      } else if (ch === ' ') {
        await sleep(dotMs * 2);
      } else if (ch === '/') {
        await sleep(dotMs * 4);
      }
    }
    setIsPlaying(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setDirection('text-to-morse')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer ${
              direction === 'text-to-morse' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            Text to Morse
          </button>
          <button
            type="button"
            onClick={() => setDirection('morse-to-text')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer ${
              direction === 'morse-to-text' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            Morse to Text
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="morse-wpm" className="text-xs font-bold text-brand-800">
            Audio Speed: {wpm} WPM
          </label>
          <input
            id="morse-wpm"
            type="range"
            min={8}
            max={30}
            value={wpm}
            onChange={(e) => setWpm(Number(e.target.value))}
            className="w-28 accent-accent-600"
          />
          {isPlaying ? (
            <button type="button" onClick={stopAudio} className={secondaryBtnCls}>
              <Square className="w-3.5 h-3.5 text-red-600" />
              <span>Stop Audio</span>
            </button>
          ) : (
            <button type="button" onClick={playMorse} disabled={!output} className={primaryBtnCls}>
              <Volume2 className="w-4 h-4" />
              <span>Play Audio</span>
            </button>
          )}
        </div>
      </div>

      <ErrorBanner message={warning} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="morse-in" className="block text-xs font-bold text-brand-900">
            {direction === 'text-to-morse' ? 'Plain Text' : 'Morse Code (. - and /)'}
          </label>
          <textarea id="morse-in" rows={6} value={input} onChange={(e) => setInput(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="morse-out" className="block text-xs font-bold text-brand-900">
            {direction === 'text-to-morse' ? 'Morse Code Output' : 'Translated Text'}
          </label>
          <textarea id="morse-out" rows={6} readOnly value={output} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => setInput('')} />
        <CopyButton text={output} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 10) Random Name Picker (/random-name-picker/)
 * ========================================================================== */
export function RandomNamePickerWidget() {
  const [namesText, setNamesText] = useState('Alice\nBob\nCharlie\nDiana\nEthan\nFatima');
  const [winnerCount, setWinnerCount] = useState(1);
  const [removePicked, setRemovePicked] = useState(true);
  const [currentWinners, setCurrentWinners] = useState<string[]>([]);
  const [history, setHistory] = useState<string[][]>([]);
  const [error, setError] = useState<string | null>(null);

  const availableNames = useMemo(
    () => namesText.split(/\r?\n/).map((n) => n.trim()).filter(Boolean),
    [namesText]
  );

  const handlePick = () => {
    setError(null);
    if (availableNames.length === 0) {
      setError('Enter at least one name (one per line) before drawing.');
      return;
    }
    const count = Math.max(1, Math.min(winnerCount, availableNames.length));
    if (winnerCount > availableNames.length) {
      setError(`Requested ${winnerCount} winners, but only ${availableNames.length} names are in the list.`);
      return;
    }

    const pool = [...availableNames];
    const picked: string[] = [];
    for (let i = 0; i < count; i++) {
      const idx = cryptoRandomInt(pool.length);
      picked.push(pool[idx]);
      pool.splice(idx, 1);
    }

    setCurrentWinners(picked);
    setHistory((prev) => [picked, ...prev]);
    if (removePicked) {
      setNamesText(pool.join('\n'));
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="picker-names" className="block text-xs font-bold text-brand-900">
              Entries (one name per line)
            </label>
            <span className="text-xs font-mono tabular-nums text-brand-600">{availableNames.length} names</span>
          </div>
          <textarea
            id="picker-names"
            rows={8}
            value={namesText}
            onChange={(e) => setNamesText(e.target.value)}
            placeholder="Paste one name per line..."
            className={textareaCls}
          />
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="picker-count" className="block text-xs font-bold text-brand-900">
                Number of Winners
              </label>
              <input
                id="picker-count"
                type="number"
                min={1}
                max={Math.max(1, availableNames.length)}
                value={winnerCount}
                onChange={(e) => setWinnerCount(Math.max(1, Number(e.target.value) || 1))}
                className={inputCls}
              />
            </div>

            <div className="flex items-end pb-1">
              <label className="inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={removePicked}
                  onChange={(e) => setRemovePicked(e.target.checked)}
                  className="w-4 h-4 accent-accent-600 rounded"
                />
                <span className="font-medium text-brand-900">Remove picked names</span>
              </label>
            </div>
          </div>

          <button type="button" onClick={handlePick} className={`${primaryBtnCls} w-full`}>
            <Shuffle className="w-4 h-4" />
            <span>Pick Random Winner{winnerCount > 1 ? 's' : ''}</span>
          </button>

          <ErrorBanner message={error} />

          {currentWinners.length > 0 && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Selected Result
                </span>
                <CopyButton text={currentWinners.join('\n')} />
              </div>
              <ul className="space-y-1 list-none p-0 m-0">
                {currentWinners.map((w, i) => (
                  <li key={i} className="text-base font-bold text-brand-950 font-mono">
                    {i + 1}. {w}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {history.length > 0 && (
            <div className="p-4 rounded-xl bg-brand-50/70 border border-brand-200 space-y-2 max-h-44 overflow-y-auto">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-700 uppercase">Session Pick History</span>
                <button
                  type="button"
                  onClick={() => setHistory([])}
                  className="text-xs text-brand-500 hover:text-brand-900 inline-flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" /> Clear History
                </button>
              </div>
              <ol className="space-y-1 text-xs font-mono text-brand-800 list-decimal pl-5 m-0">
                {history.map((round, idx) => (
                  <li key={idx}>{round.join(', ')}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => { setNamesText(''); setCurrentWinners([]); setError(null); }} />
        <button
          type="button"
          onClick={() => {
            setNamesText('Alice\nBob\nCharlie\nDiana\nEthan\nFatima');
            setError(null);
          }}
          className={secondaryBtnCls}
        >
          <Plus className="w-3.5 h-3.5" /> Load Sample Names
        </button>
      </div>
    </div>
  );
}
