import React, { useState } from 'react';
import { Copy, Check, RotateCcw, AlertCircle } from 'lucide-react';

export const inputCls =
  'w-full px-3.5 py-2.5 bg-brand-50/50 border border-brand-200 rounded-xl text-sm text-brand-950 placeholder:text-brand-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus:border-accent-500 transition-colors';

export const textareaCls =
  'w-full p-4 bg-brand-50/40 border border-brand-200 rounded-xl text-sm text-brand-950 font-mono leading-relaxed placeholder:text-brand-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus:border-accent-500 transition-colors';

export const selectCls =
  'px-3.5 py-2.5 min-h-[40px] bg-white border border-brand-200 rounded-xl text-sm text-brand-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus:border-accent-500';

export const primaryBtnCls =
  'inline-flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 rounded-xl bg-accent-600 hover:bg-accent-700 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2';

export const darkBtnCls =
  'inline-flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 rounded-xl bg-brand-950 hover:bg-brand-800 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2';

export const secondaryBtnCls =
  'inline-flex items-center justify-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-xl bg-white hover:bg-brand-50 border border-brand-200 text-brand-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500';

export function CopyButton({
  text,
  label = 'Copy',
  copiedLabel = 'Copied',
  className = '',
  disabled = false,
}: {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  disabled?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={disabled || !text}
      className={`${darkBtnCls} ${className}`}
    >
      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}

export function ClearButton({ onClick, label = 'Clear' }: { onClick: () => void; label?: string }) {
  return (
    <button type="button" onClick={onClick} className={secondaryBtnCls}>
      <RotateCcw className="w-3.5 h-3.5" />
      <span>{label}</span>
    </button>
  );
}

export function ErrorBanner({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div
      role="alert"
      className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-800"
    >
      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
      <span>{message}</span>
    </div>
  );
}

export function FormulaBox({ title = 'Formula Used', formula }: { title?: string; formula: string }) {
  return (
    <div className="p-4 rounded-xl bg-brand-50/70 border border-brand-200/80 space-y-1">
      <div className="text-xs font-bold text-brand-600 uppercase tracking-wide">{title}</div>
      <div className="text-xs sm:text-sm font-mono text-brand-950 break-words">{formula}</div>
    </div>
  );
}

export function cryptoRandomInt(maxExclusive: number): number {
  if (maxExclusive <= 1) return 0;
  const maxUint32 = 0xffffffff;
  const limit = maxUint32 - (maxUint32 % maxExclusive);
  const buf = new Uint32Array(1);
  let val = 0;
  do {
    window.crypto.getRandomValues(buf);
    val = buf[0];
  } while (val >= limit);
  return val % maxExclusive;
}

export function downloadTextFile(filename: string, content: string, mime = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
