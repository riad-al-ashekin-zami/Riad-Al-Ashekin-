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
      token.depth = 2; // Demote any H1 in markdown to H2 so the page has strictly ONE H1
    }
  }
});

// Extract headings for Table of Contents with guaranteed unique IDs
// For long-form guides, extracts major H2 chapters to keep TOC clean, readable, and professional (no 100+ headings)
export function extractHeadingsFromMarkdown(markdown: string): { id: string; title: string; level: number }[] {
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  const allHeadings: { id: string; title: string; level: number }[] = [];
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
      baseId = `heading-${allHeadings.length + 1}`;
    }

    const count = seenIds.get(baseId) || 0;
    seenIds.set(baseId, count + 1);
    const id = count === 0 ? baseId : `${baseId}-${count + 1}`;

    allHeadings.push({
      id,
      title: cleanTitle,
      level
    });
  }

  // Filter for major H2 chapters so the Table of Contents remains focused, authoritative, and uncluttered
  const h2Headings = allHeadings.filter(h => h.level === 2);
  if (h2Headings.length >= 3) {
    return h2Headings;
  }

  // Fallback for short articles with few headings
  return allHeadings.slice(0, 20);
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

    let chapterIndex = 0;

    // 4. Style H2 with responsive typography, chapter kicker, and clean anchor
    rawHtml = rawHtml.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_, attrs, inner) => {
      const cleanText = inner.replace(/<[^>]+>/g, '').trim();
      const id = generateUniqueId(cleanText);
      const isArabic = containsArabic(cleanText);
      const arabicCls = isArabic ? ' font-serif text-right text-brand-950 font-bold leading-relaxed' : '';
      chapterIndex++;

      // Contextual kicker for section
      const lower = cleanText.toLowerCase();
      let kicker = `Section ${String(chapterIndex).padStart(2, '0')}`;
      if (lower.includes('faq') || lower.includes('frequently asked')) {
        kicker = 'Frequently Asked Questions & Answers';
      } else if (lower.includes('seo') || lower.includes('google') || lower.includes('crawl')) {
        kicker = 'Technical SEO & Search Architecture';
      } else if (lower.includes('architecture') || lower.includes('component')) {
        kicker = 'Core System Architecture';
      } else if (lower.includes('advantage') || lower.includes('benefit')) {
        kicker = 'Strategic Advantages & Benefits';
      } else if (lower.includes('disadvantage') || lower.includes('tradeoff') || lower.includes('drawback')) {
        kicker = 'Architectural Trade-offs & Limitations';
      } else if (lower.includes('vs') || lower.includes('comparison')) {
        kicker = 'Comparative Benchmark';
      } else if (lower.includes('performance') || lower.includes('vitals')) {
        kicker = 'Performance & Latency Engineering';
      } else if (lower.includes('final') || lower.includes('conclusion')) {
        kicker = 'Executive Summary & Next Steps';
      }

      return `
        <div class="scroll-mt-24 sm:scroll-mt-28 pt-7 pb-3 sm:pt-10 sm:pb-4 first:pt-0 border-b border-brand-200/80 mb-5 sm:mb-6" id="${id}">
          <div class="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-accent-700 mb-1 sm:mb-1.5 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-600"></span>
            <span>${kicker}</span>
          </div>
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-950 tracking-tight leading-snug flex items-baseline justify-between gap-3${arabicCls}" ${attrs}>
            <span>${inner}</span>
            <a href="#${id}" class="text-brand-300 hover:text-accent-600 text-base sm:text-lg font-mono transition-colors not-prose shrink-0 opacity-60 hover:opacity-100" title="Direct section anchor">#</a>
          </h2>
        </div>
      `;
    });

    // 5. Style H3 (Subsections & FAQ Q&A cards)
    rawHtml = rawHtml.replace(/<h3([^>]*)>([\s\S]*?)<\/h3>/gi, (_, attrs, inner) => {
      const cleanText = inner.replace(/<[^>]+>/g, '').trim();
      const id = generateUniqueId(cleanText);
      const isArabic = containsArabic(cleanText);
      const arabicCls = isArabic ? ' font-serif text-right text-brand-950' : '';

      // Check if this is an FAQ question
      const isQuestion = cleanText.endsWith('?') || 
        cleanText.toLowerCase().startsWith('what is') || 
        cleanText.toLowerCase().startsWith('how do') || 
        cleanText.toLowerCase().startsWith('can ') || 
        cleanText.toLowerCase().startsWith('is ') || 
        cleanText.toLowerCase().startsWith('which ') || 
        cleanText.toLowerCase().startsWith('are ') || 
        cleanText.toLowerCase().startsWith('do ');

      if (isQuestion) {
        return `
          <div class="scroll-mt-20 pt-4 pb-1 mb-2.5" id="${id}">
            <div class="bg-brand-50/70 border border-brand-200/90 rounded-xl p-3.5 sm:p-4 hover:border-accent-400 transition-colors">
              <h3 class="text-sm sm:text-base md:text-[17px] font-bold text-brand-950 flex items-start gap-2.5${arabicCls}" ${attrs}>
                <span class="w-5 h-5 rounded-md bg-accent-100 text-accent-700 flex items-center justify-center text-[11px] font-mono font-bold shrink-0 mt-0.5">Q</span>
                <span class="flex-1">${inner}</span>
                <a href="#${id}" class="text-brand-300 hover:text-accent-600 text-xs font-mono transition-colors not-prose shrink-0 ml-1 opacity-60 hover:opacity-100" title="Anchor link">#</a>
              </h3>
            </div>
          </div>
        `;
      }

      return `
        <div class="scroll-mt-20 pt-5 pb-2 mb-3" id="${id}">
          <h3 class="text-base sm:text-lg lg:text-xl font-bold text-brand-900 tracking-tight flex items-center justify-between gap-2.5 border-l-3 border-accent-600 pl-3 sm:pl-3.5${arabicCls}" ${attrs}>
            <span>${inner}</span>
            <a href="#${id}" class="text-brand-300 hover:text-accent-600 text-sm font-mono transition-colors not-prose shrink-0 opacity-60 hover:opacity-100" title="Direct anchor link">#</a>
          </h3>
        </div>
      `;
    });

    // 6. Style H4 (Minor items)
    rawHtml = rawHtml.replace(/<h4([^>]*)>([\s\S]*?)<\/h4>/gi, (_, attrs, inner) => {
      const cleanText = inner.replace(/<[^>]+>/g, '').trim();
      const isArabic = containsArabic(cleanText);
      const arabicCls = isArabic ? ' font-serif text-right text-brand-950' : '';
      return `<h4 class="text-sm sm:text-base font-bold text-brand-900 tracking-tight my-3 flex items-center gap-2${arabicCls}" ${attrs}>
        <span class="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0"></span>
        <span>${inner}</span>
      </h4>`;
    });

    // 7. Regular Paragraph Styling (Arabic aware, clean typography, no synthetic injected banners)
    rawHtml = rawHtml.replace(/<p>([\s\S]*?)<\/p>/gi, (orig, inner) => {
      // Check if this paragraph is predominantly Arabic text
      const isArabic = containsArabic(inner);
      if (isArabic) {
        return `<p class="text-base sm:text-xl font-serif text-brand-950 leading-loose text-right my-4 sm:my-5 py-1" dir="rtl">${inner}</p>`;
      }

      return `<p class="text-[15px] sm:text-base md:text-[17px] text-brand-800 leading-relaxed my-3.5 sm:my-5 font-normal">${inner}</p>`;
    });

    // 8. Style Comparison Tables:
    // Desktop View (hidden md:block): Premium, clean light-themed table with high-contrast slate-900 column headers (NEVER white).
    // Mobile View (block md:hidden): Responsive vertical cards so readers NEVER need horizontal side scrolling!
    // Zero unwanted banners above or below the table.
    rawHtml = rawHtml.replace(/<div\s+style=["'][^"']*overflow-x:\s*auto;?[^"']*["']>\s*(<table\b)/gi, '$1');
    rawHtml = rawHtml.replace(/(<\/table>)\s*<\/div>/gi, '$1');

    rawHtml = rawHtml.replace(/<table\b[^>]*>([\s\S]*?)<\/table>/gi, (originalTable, inner) => {
      // Extract headers from thead or tr
      const headerMatches = [...inner.matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

      // Extract rows from tbody or tr
      const tbodyMatch = inner.match(/<tbody\b[^>]*>([\s\S]*?)<\/tbody>/gi);
      const rowsContent = tbodyMatch ? tbodyMatch[0] : inner;
      const rowMatches = [...rowsContent.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)];
      
      const rows: string[][] = [];
      for (const r of rowMatches) {
        // Only take rows that contain <td> (exclude header row)
        const cells = [...r[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(m => m[1].trim());
        if (cells.length > 0) {
          rows.push(cells);
        }
      }

      if (headerMatches.length === 0 || rows.length === 0) {
        return originalTable;
      }

      // 1. Desktop View (hidden md:block):
      // Clean light slate-100 header background, DEEP DARK text-slate-900 column names (100% visible, NEVER white), crisp border
      const desktopHtml = `
        <div class="hidden md:block my-6 sm:my-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-slate-200 text-left text-sm bg-white">
              <thead class="bg-slate-100 text-slate-900 border-b-2 border-slate-300">
                <tr>
                  ${headerMatches.map((h, hIdx) => `
                    <th scope="col" class="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 border-b border-slate-300 ${hIdx === 0 ? 'font-extrabold text-slate-950' : ''}">
                      ${h}
                    </th>
                  `).join('')}
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white text-slate-800">
                ${rows.map((r, rIdx) => `
                  <tr class="transition-colors hover:bg-slate-50/80 ${rIdx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}">
                    ${r.map((cell, cIdx) => `
                      <td class="px-5 py-3.5 text-sm text-slate-800 leading-relaxed border-b border-slate-100 ${cIdx === 0 ? 'font-semibold text-slate-950' : ''}">
                        ${cell}
                      </td>
                    `).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

      // 2. Mobile View (block md:hidden):
      // Vertical stacked cards — zero horizontal side scrolling!
      // No synthetic banners or extra headers on top of the table.
      const mobileHtml = `
        <div class="block md:hidden my-6 space-y-3 not-prose">
          ${rows.map((r) => {
            const itemName = r[0] || '';
            const specs = r.slice(1);
            return `
              <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                <div class="font-bold text-base text-slate-950 leading-snug pb-2 border-b border-slate-100">
                  ${itemName}
                </div>
                <div class="space-y-2 text-xs">
                  ${specs.map((val, cIdx) => {
                    const headerLabel = headerMatches[cIdx + 1] || '';
                    const isYes = val.toLowerCase() === 'yes';
                    const isNo = val.toLowerCase() === 'no';
                    return `
                      <div class="flex flex-col gap-0.5 py-1 border-b border-slate-50 last:border-b-0">
                        <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          ${headerLabel}
                        </span>
                        <span class="text-sm font-medium ${isYes ? 'text-emerald-700 font-bold' : isNo ? 'text-rose-600 font-semibold' : 'text-slate-800'} leading-relaxed">
                          ${val}
                        </span>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;

      return desktopHtml + mobileHtml;
    });

    // 9. Style Blockquotes with rich quote accents and responsive padding
    rawHtml = rawHtml.replace(/<blockquote([^>]*)>([\s\S]*?)<\/blockquote>/gi, (_, attrs, inner) => {
      const isArabic = containsArabic(inner);
      if (isArabic) {
        return `
          <blockquote class="my-5 sm:my-7 relative border-r-3 sm:border-r-4 border-emerald-600 bg-emerald-50/50 pr-5 sm:pr-7 pl-4 sm:pl-5 py-4 sm:py-6 rounded-l-xl sm:rounded-l-2xl text-right font-serif text-lg sm:text-xl leading-loose text-brand-950 shadow-2xs" dir="rtl" ${attrs}>
            <div class="space-y-3 font-semibold">
              ${inner}
            </div>
          </blockquote>
        `;
      }
      return `
        <blockquote class="my-5 sm:my-7 relative border-l-3 sm:border-l-4 border-accent-600 bg-gradient-to-r from-accent-50/70 via-brand-50/40 to-white pl-4 sm:pl-6 pr-4 sm:pr-6 py-3.5 sm:py-5 rounded-r-xl sm:rounded-r-2xl text-brand-900 shadow-2xs" ${attrs}>
          <div class="flex items-start gap-2.5 sm:gap-3">
            <svg class="w-6 h-6 sm:w-8 sm:h-8 text-accent-500/30 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <div class="text-xs sm:text-sm md:text-base italic leading-relaxed text-brand-800">
              ${inner}
            </div>
          </div>
        </blockquote>
      `;
    });

    // 10. Style Lists with high-contrast spacing and custom checkmarks
    rawHtml = rawHtml.replace(/<ul([^>]*)>/gi, '<ul class="my-4 sm:my-6 space-y-2 sm:space-y-2.5 list-none pl-0.5" $1>');
    rawHtml = rawHtml.replace(/<ol([^>]*)>/gi, '<ol class="my-4 sm:my-6 space-y-2 sm:space-y-2.5 list-decimal pl-5 text-sm sm:text-base text-brand-800 marker:text-accent-700 marker:font-bold" $1>');
    rawHtml = rawHtml.replace(/<li([^>]*)>([\s\S]*?)<\/li>/gi, (_, attrs, inner) => {
      const isArabic = containsArabic(inner);
      if (isArabic) {
        return `<li dir="rtl" class="text-right font-serif text-base sm:text-lg leading-loose py-1" ${attrs}>${inner}</li>`;
      }
      return `
        <li class="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-brand-800 leading-relaxed" ${attrs}>
          <span class="w-1.5 h-1.5 rounded-full bg-accent-600 mt-2 shrink-0"></span>
          <span class="leading-relaxed">${inner}</span>
        </li>
      `;
    });

    // 11. Style Code Blocks with dark terminal aesthetic and macOS dots
    rawHtml = rawHtml.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi, `
      <div class="my-5 sm:my-7 rounded-xl sm:rounded-2xl overflow-hidden bg-[#0e091b] border border-brand-800 shadow-lg">
        <div class="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-brand-950 border-b border-brand-800/80 text-[11px] sm:text-xs text-brand-300 font-mono">
          <div class="flex items-center gap-1.5 sm:gap-2">
            <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            <span class="ml-1 sm:ml-2 font-bold text-brand-200">Architecture Specification</span>
          </div>
          <span class="text-[10px] sm:text-[11px] text-brand-400">TypeScript / Schema</span>
        </div>
        <pre class="p-3.5 sm:p-5 overflow-x-auto text-[11px] sm:text-xs md:text-sm font-mono text-emerald-300/90 leading-relaxed scrollbar-thin scrollbar-thumb-brand-800"><code $1>$2</code></pre>
      </div>
    `);

    rawHtml = rawHtml.replace(/<code([^>]*)>([\s\S]*?)<\/code>/gi, '<code class="px-1.5 sm:px-2 py-0.5 rounded-md bg-accent-50 text-accent-900 border border-accent-200/80 font-mono text-xs sm:text-[13px] font-semibold break-words" $1>$2</code>');

    // 12. Horizontal Rules with gradient divider
    rawHtml = rawHtml.replace(/<hr([^>]*)>/gi, '<div class="my-8 sm:my-10 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" $1></div>');

    // 13. Links
    rawHtml = rawHtml.replace(/<a\s+(href="https?:\/\/[^"]+")([^>]*)>/gi, '<a $1 $2 target="_blank" rel="noopener noreferrer" class="text-accent-700 hover:text-accent-900 underline decoration-accent-300 underline-offset-2 hover:decoration-accent-700 font-semibold inline-flex items-center gap-1 transition-colors">');
    rawHtml = rawHtml.replace(/<a\s+(href="\/(?:[^"]+)?")([^>]*)>/gi, '<a $1 $2 class="text-accent-700 hover:text-accent-900 underline decoration-accent-300 underline-offset-2 hover:decoration-accent-700 font-semibold transition-colors">');

    return rawHtml;
  }, [content]);

  // Handle internal navigation for in-app links
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If user held Ctrl, Cmd, Shift, Alt or clicked with a non-primary mouse button, let browser open in new tab
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (!anchor) return;

    if (anchor.getAttribute('target') === '_blank') {
      return;
    }

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
