import React, { useMemo } from 'react';
import { marked } from 'marked';

interface MarkdownArticleRendererProps {
  content: string;
  onNavigate?: (slug: string) => void;
}

// Check if a string contains Arabic script
export function containsArabic(text: string): boolean {
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return arabicRegex.test(text);
}

// Helper to generate slugified base string
export function slugifyText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

// Configure marked globally to NEVER output H1 tags - AST level demotion
marked.use({
  walkTokens(token) {
    if (token.type === 'heading' && token.depth === 1) {
      token.depth = 2; // Demote H1 to H2 so the page has strictly ONE H1
    }
  }
});

// Extract headings for Table of Contents with guaranteed unique IDs
export function extractHeadingsFromMarkdown(markdown: string): { id: string; title: string; level: number }[] {
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  const headings: { id: string; title: string; level: number }[] = [];
  const seenIds = new Map<string, number>();
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const rawLevel = match[1].length;
    // Demote H1 to H2
    const level = rawLevel === 1 ? 2 : rawLevel;
    const rawTitle = match[2].trim();
    // Strip markdown formatting from title
    const cleanTitle = rawTitle.replace(/[*_`~\[\]]/g, '').replace(/\(http[^)]+\)/g, '').trim();
    let baseId = slugifyText(cleanTitle);

    if (!baseId) {
      baseId = `heading-${headings.length + 1}`;
    }

    const count = seenIds.get(baseId) || 0;
    seenIds.set(baseId, count + 1);
    const id = count === 0 ? baseId : `${baseId}-${count + 1}`;

    headings.push({
      id,
      title: cleanTitle,
      level
    });
  }

  return headings;
}

export function MarkdownArticleRenderer({ content, onNavigate }: MarkdownArticleRendererProps) {
  // Configure marked options and generate HTML
  const parsedHtml = useMemo(() => {
    if (!content) return '';

    // 1. Standard marked parser with GFM
    let rawHtml = marked.parse(content, {
      gfm: true,
      breaks: false
    }) as string;

    // 2. Strict Single H1 Rule: Demote any <h1> in content to <h2>
    rawHtml = rawHtml.replace(/<h1\b([^>]*)>([\s\S]*?)<\/h1>/gi, '<h2$1>$2</h2>');

    // 3. Track seen heading IDs in document order for 100% unique IDs matching TOC
    const seenHeadingIds = new Map<string, number>();
    const generateUniqueId = (cleanText: string) => {
      let baseId = slugifyText(cleanText);
      if (!baseId) baseId = 'heading';
      const count = seenHeadingIds.get(baseId) || 0;
      seenHeadingIds.set(baseId, count + 1);
      return count === 0 ? baseId : `${baseId}-${count + 1}`;
    };

    // 4. Style H2 and H3 with domain-specific badges and distinctive typography
    rawHtml = rawHtml.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (_, levelStr, attrs, inner) => {
      const cleanText = inner.replace(/<[^>]+>/g, '').trim();
      const id = generateUniqueId(cleanText);
      const isArabic = containsArabic(cleanText);
      const arabicCls = isArabic ? ' font-serif text-right text-brand-950 font-bold leading-relaxed' : '';

      if (levelStr === '2') {
        // Detect section category for visual badge
        let badgeHtml = '';
        const lower = cleanText.toLowerCase();

        if (lower.includes('advantage') || lower.includes('benefit')) {
          badgeHtml = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300/80 mb-2.5">
            <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            Key Advantage
          </span>`;
        } else if (lower.includes('disadvantage') || lower.includes('unnecessary') || lower.includes('tradeoff') || lower.includes('consideration')) {
          badgeHtml = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300/80 mb-2.5">
            <svg class="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            Critical Consideration
          </span>`;
        } else if (lower.includes('seo') || lower.includes('google') || lower.includes('crawl')) {
          badgeHtml = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent-100 text-accent-900 border border-accent-300/80 mb-2.5">
            <svg class="w-3.5 h-3.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Technical SEO Directive
          </span>`;
        } else if (/^\d+[\.\–\-]/.test(cleanText)) {
          // Numbered architecture layer or pillar
          const numMatch = cleanText.match(/^(\d+)[\.\–\-]/);
          const numStr = numMatch ? String(numMatch[1]).padStart(2, '0') : '01';
          badgeHtml = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-brand-100 text-brand-900 border border-brand-300/80 mb-2.5">
            Architecture Pillar ${numStr}
          </span>`;
        } else if (lower.includes('faq') || lower.includes('frequently asked')) {
          badgeHtml = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-strategy-100 text-strategy-900 border border-strategy-300/80 mb-2.5">
            <svg class="w-3.5 h-3.5 text-strategy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Knowledge Base
          </span>`;
        } else if (lower.includes('vs') || lower.includes('comparison')) {
          badgeHtml = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent-100 text-accent-900 border border-accent-300/80 mb-2.5">
            Comparative Benchmark
          </span>`;
        }

        return `
          <div class="scroll-mt-28 pt-10 pb-4 first:pt-0 border-b border-brand-200/80 mb-6" id="${id}">
            ${badgeHtml}
            <h2 class="text-2xl sm:text-3xl lg:text-[1.85rem] font-extrabold text-brand-950 tracking-tight flex items-center justify-between gap-4${arabicCls}" ${attrs}>
              <span>${inner}</span>
              <a href="#${id}" class="text-brand-300 hover:text-accent-600 text-xl font-mono transition-colors not-prose shrink-0 opacity-70 hover:opacity-100" title="Direct section anchor">#</a>
            </h2>
          </div>
        `;
      } else {
        return `
          <div class="scroll-mt-24 pt-7 pb-2 mb-3" id="${id}">
            <h3 class="text-xl sm:text-2xl font-bold text-brand-900 tracking-tight flex items-center justify-between gap-3 border-l-4 border-accent-600 pl-3.5${arabicCls}" ${attrs}>
              <span>${inner}</span>
              <a href="#${id}" class="text-brand-300 hover:text-accent-600 text-base transition-colors not-prose shrink-0 opacity-60 hover:opacity-100" title="Direct anchor link">#</a>
            </h3>
          </div>
        `;
      }
    });

    rawHtml = rawHtml.replace(/<h4([^>]*)>([\s\S]*?)<\/h4>/gi, (_, attrs, inner) => {
      const cleanText = inner.replace(/<[^>]+>/g, '').trim();
      const isArabic = containsArabic(cleanText);
      const arabicCls = isArabic ? ' font-serif text-right text-brand-950' : '';
      return `<h4 class="text-lg font-bold text-brand-900 tracking-tight my-4 flex items-center gap-2${arabicCls}" ${attrs}>
        <span class="w-2 h-2 rounded-full bg-accent-500 shrink-0"></span>
        <span>${inner}</span>
      </h4>`;
    });

    // 5. Transform Workflow Pipelines (paragraphs containing → into eye-catching step sequence cards)
    rawHtml = rawHtml.replace(/<p>([\s\S]*?)<\/p>/gi, (orig, inner) => {
      if ((inner.includes('→') || inner.includes('->')) && !inner.includes('<table')) {
        const clean = inner.replace(/<\/?strong>/g, '').trim();
        const steps = clean.split(/→|->/).map(s => s.trim()).filter(Boolean);
        if (steps.length >= 2) {
          const stepsHtml = steps.map((s, idx) => `
            <div class="flex items-center gap-2">
              <div class="bg-white border border-accent-200/90 px-3.5 py-2 rounded-xl shadow-2xs text-xs sm:text-sm font-semibold text-brand-950 flex items-center gap-2 hover:border-accent-400 transition-colors">
                <span class="w-5 h-5 rounded-md bg-accent-100 text-accent-700 flex items-center justify-center text-[10px] font-mono font-bold shrink-0">${idx + 1}</span>
                <span>${s}</span>
              </div>
              ${idx < steps.length - 1 ? '<span class="text-accent-600 font-bold text-sm shrink-0 px-1">→</span>' : ''}
            </div>
          `).join('');

          return `
            <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-accent-50/80 via-brand-50 to-strategy-50/80 border border-accent-200/90 shadow-2xs">
              <div class="text-[11px] font-mono font-bold text-accent-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <span>Execution Pipeline Sequence</span>
              </div>
              <div class="flex flex-wrap items-center gap-2.5">
                ${stepsHtml}
              </div>
            </div>
          `;
        }
      }

      // Check if this paragraph is predominantly Arabic text
      const isArabic = containsArabic(inner);
      if (isArabic) {
        return `<p class="text-lg sm:text-xl font-serif text-brand-950 leading-loose text-right my-5 py-1" dir="rtl">${inner}</p>`;
      }

      return `<p class="text-base sm:text-[17px] text-brand-800 leading-relaxed my-5 font-normal">${inner}</p>`;
    });

    // 6. Style Comparison Tables (SPA vs MPA) with modern executive styling
    rawHtml = rawHtml.replace(/<table([^>]*)>/gi, `
      <div class="my-8 overflow-hidden rounded-2xl border border-brand-200/90 bg-white shadow-soft-purple">
        <div class="overflow-x-auto scrollbar-thin scrollbar-thumb-brand-200">
          <table class="min-w-full divide-y divide-brand-200 text-left text-sm" $1>
    `);
    rawHtml = rawHtml.replace(/<\/table>/gi, `
          </table>
        </div>
        <div class="px-5 py-3 bg-brand-50/60 border-t border-brand-200/70 text-xs text-brand-600 flex items-center justify-between">
          <span class="flex items-center gap-1.5 font-medium">
            <svg class="w-3.5 h-3.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Verified Architectural Specification
          </span>
          <span class="font-mono text-[11px] text-brand-500 sm:hidden">
            ← Scroll horizontally to inspect full table →
          </span>
        </div>
      </div>
    `);

    rawHtml = rawHtml.replace(/<thead([^>]*)>/gi, '<thead class="bg-gradient-to-r from-brand-950 via-brand-900 to-accent-950 text-white font-bold uppercase text-xs tracking-wider" $1>');
    rawHtml = rawHtml.replace(/<tbody([^>]*)>/gi, '<tbody class="divide-y divide-brand-100 bg-white text-brand-900" $1>');
    rawHtml = rawHtml.replace(/<th([^>]*)>/gi, '<th scope="col" class="px-5 py-4 font-bold text-white tracking-wide" $1>');
    rawHtml = rawHtml.replace(/<td([^>]*)>/gi, '<td class="px-5 py-4 text-sm text-brand-800 leading-relaxed font-normal" $1>');

    // 7. Style Blockquotes with rich quote accents and Arabic handling
    rawHtml = rawHtml.replace(/<blockquote([^>]*)>([\s\S]*?)<\/blockquote>/gi, (_, attrs, inner) => {
      const isArabic = containsArabic(inner);
      if (isArabic) {
        return `
          <blockquote class="my-7 relative border-r-4 border-emerald-600 bg-emerald-50/50 pr-7 pl-5 py-6 rounded-l-2xl text-right font-serif text-xl leading-loose text-brand-950 shadow-2xs" dir="rtl" ${attrs}>
            <div class="space-y-3 font-semibold">
              ${inner}
            </div>
          </blockquote>
        `;
      }
      return `
        <blockquote class="my-7 relative border-l-4 border-accent-600 bg-gradient-to-r from-accent-50/80 via-brand-50/50 to-white pl-6 pr-6 py-5 rounded-r-2xl text-brand-900 shadow-2xs" ${attrs}>
          <div class="flex items-start gap-3">
            <svg class="w-8 h-8 text-accent-500/30 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <div class="text-sm sm:text-base italic leading-relaxed text-brand-800">
              ${inner}
            </div>
          </div>
        </blockquote>
      `;
    });

    // 8. Style Lists with high-contrast spacing and custom checkmarks
    rawHtml = rawHtml.replace(/<ul([^>]*)>/gi, '<ul class="my-6 space-y-3 list-none pl-1" $1>');
    rawHtml = rawHtml.replace(/<ol([^>]*)>/gi, '<ol class="my-6 space-y-3 list-decimal pl-6 text-sm sm:text-base text-brand-800 marker:text-accent-700 marker:font-bold" $1>');
    rawHtml = rawHtml.replace(/<li([^>]*)>([\s\S]*?)<\/li>/gi, (_, attrs, inner) => {
      const isArabic = containsArabic(inner);
      if (isArabic) {
        return `<li dir="rtl" class="text-right font-serif text-lg leading-loose py-1" ${attrs}>${inner}</li>`;
      }
      return `
        <li class="flex items-start gap-3 text-sm sm:text-base text-brand-800 leading-relaxed" ${attrs}>
          <span class="w-2 h-2 rounded-full bg-accent-600 mt-2 shrink-0"></span>
          <span>${inner}</span>
        </li>
      `;
    });

    // 9. Style Code Blocks with dark terminal aesthetic and macOS dots
    rawHtml = rawHtml.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi, `
      <div class="my-7 rounded-2xl overflow-hidden bg-[#0e091b] border border-brand-800 shadow-lg">
        <div class="flex items-center justify-between px-4 py-2.5 bg-brand-950 border-b border-brand-800/80 text-xs text-brand-300 font-mono">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            <span class="ml-2 font-bold text-brand-200">Architecture Specification</span>
          </div>
          <span class="text-[11px] text-brand-400">TypeScript / Schema</span>
        </div>
        <pre class="p-5 overflow-x-auto text-xs sm:text-sm font-mono text-emerald-300/90 leading-relaxed scrollbar-thin scrollbar-thumb-brand-800"><code $1>$2</code></pre>
      </div>
    `);

    rawHtml = rawHtml.replace(/<code([^>]*)>([\s\S]*?)<\/code>/gi, '<code class="px-2 py-0.5 rounded-md bg-accent-50 text-accent-900 border border-accent-200/80 font-mono text-[13px] font-semibold" $1>$2</code>');

    // 10. Horizontal Rules with gradient divider
    rawHtml = rawHtml.replace(/<hr([^>]*)>/gi, '<div class="my-10 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" $1></div>');

    // 11. Links
    rawHtml = rawHtml.replace(/<a\s+(href="https?:\/\/[^"]+")([^>]*)>/gi, '<a $1 $2 target="_blank" rel="noopener noreferrer" class="text-accent-700 hover:text-accent-900 underline decoration-accent-300 underline-offset-2 hover:decoration-accent-700 font-semibold inline-flex items-center gap-1 transition-colors">');
    rawHtml = rawHtml.replace(/<a\s+(href="\/(?:[^"]+)?")([^>]*)>/gi, '<a $1 $2 class="text-accent-700 hover:text-accent-900 underline decoration-accent-300 underline-offset-2 hover:decoration-accent-700 font-semibold transition-colors">');

    return rawHtml;
  }, [content]);

  // Handle internal navigation for in-app links
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (href && (href.startsWith('/') || href.startsWith('https://riadalashekin.com/'))) {
      const localPath = href.replace('https://riadalashekin.com', '');
      if (!localPath.startsWith('#') && onNavigate) {
        e.preventDefault();
        onNavigate(localPath);
      }
    }
  };

  return (
    <div 
      className="markdown-article-content prose prose-brand max-w-none text-brand-900"
      dangerouslySetInnerHTML={{ __html: parsedHtml }}
      onClick={handleClick}
    />
  );
}
