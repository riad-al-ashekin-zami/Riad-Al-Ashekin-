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

// Extract headings for Table of Contents with guaranteed unique IDs
export function extractHeadingsFromMarkdown(markdown: string): { id: string; title: string; level: number }[] {
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  const headings: { id: string; title: string; level: number }[] = [];
  const seenIds = new Map<string, number>();
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const rawLevel = match[1].length;
    // Single # is demoted to H2 in article body
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

    // Standard marked parser
    let rawHtml = marked.parse(content, {
      gfm: true,
      breaks: false
    }) as string;

    // Post-process HTML for enhanced design, mobile tables, single-H1 enforcement, and Arabic support
    // 1. Demote any <h1> in content to <h2> to maintain single H1 rule
    rawHtml = rawHtml.replace(/<h1([^>]*)>(.*?)<\/h1>/gi, '<h2$1>$2</h2>');

    // 2. Add IDs, anchors, and styling to H2, H3 in document order with guaranteed unique IDs
    const seenHeadingIds = new Map<string, number>();
    const generateUniqueId = (cleanText: string) => {
      let baseId = slugifyText(cleanText);
      if (!baseId) baseId = 'heading';
      const count = seenHeadingIds.get(baseId) || 0;
      seenHeadingIds.set(baseId, count + 1);
      return count === 0 ? baseId : `${baseId}-${count + 1}`;
    };

    rawHtml = rawHtml.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi, (_, levelStr, attrs, inner) => {
      const cleanText = inner.replace(/<[^>]+>/g, '').trim();
      const id = generateUniqueId(cleanText);
      const isArabic = containsArabic(cleanText);
      const arabicCls = isArabic ? ' font-serif text-right text-brand-950 font-bold leading-relaxed' : '';

      if (levelStr === '2') {
        return `
          <div class="scroll-mt-28 pt-8 pb-3 first:pt-0 border-b border-brand-100 mb-5" id="${id}">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight flex items-center justify-between gap-3${arabicCls}" ${attrs}>
              <span>${inner}</span>
              <a href="#${id}" class="text-brand-300 hover:text-accent-600 text-lg transition-colors not-prose" title="Direct section link">#</a>
            </h2>
          </div>
        `;
      } else {
        return `
          <div class="scroll-mt-24 pt-6 pb-2 mb-3" id="${id}">
            <h3 class="text-xl sm:text-2xl font-bold text-brand-900 tracking-tight flex items-center justify-between gap-3${arabicCls}" ${attrs}>
              <span>${inner}</span>
              <a href="#${id}" class="text-brand-300 hover:text-accent-600 text-base transition-colors not-prose" title="Direct section link">#</a>
            </h3>
          </div>
        `;
      }
    });

    rawHtml = rawHtml.replace(/<h4([^>]*)>(.*?)<\/h4>/gi, (_, attrs, inner) => {
      const cleanText = inner.replace(/<[^>]+>/g, '').trim();
      const isArabic = containsArabic(cleanText);
      const arabicCls = isArabic ? ' font-serif text-right text-brand-950' : '';
      return `<h4 class="text-lg font-bold text-brand-850 tracking-tight my-3${arabicCls}" ${attrs}>${inner}</h4>`;
    });

    // 3. Make all tables mobile-friendly with responsive wrapper and styling
    rawHtml = rawHtml.replace(/<table([^>]*)>/gi, `
      <div class="my-8 overflow-hidden rounded-xl border border-brand-200 bg-white shadow-xs">
        <div class="overflow-x-auto scrollbar-thin scrollbar-thumb-brand-200">
          <table class="min-w-full divide-y divide-brand-200 text-left text-sm" $1>
    `);
    rawHtml = rawHtml.replace(/<\/table>/gi, `
          </table>
        </div>
        <div class="px-4 py-2 bg-brand-50/40 border-t border-brand-100 text-[11px] text-brand-500 text-right sm:hidden">
          ← Scroll horizontally to view full table →
        </div>
      </div>
    `);

    // Style table headers and cells
    rawHtml = rawHtml.replace(/<thead([^>]*)>/gi, '<thead class="bg-brand-50/90 text-brand-950 font-bold uppercase text-[11px] tracking-wider" $1>');
    rawHtml = rawHtml.replace(/<tbody([^>]*)>/gi, '<tbody class="divide-y divide-brand-100 bg-white text-brand-800" $1>');
    rawHtml = rawHtml.replace(/<th([^>]*)>/gi, '<th scope="col" class="px-4 py-3 font-bold text-brand-950" $1>');
    rawHtml = rawHtml.replace(/<td([^>]*)>/gi, '<td class="px-4 py-3.5 text-sm text-brand-700 leading-relaxed" $1>');

    // 4. Style blockquotes and citations (handle Arabic and English)
    rawHtml = rawHtml.replace(/<blockquote([^>]*)>([\s\S]*?)<\/blockquote>/gi, (_, attrs, inner) => {
      const isArabic = containsArabic(inner);
      if (isArabic) {
        return `
          <blockquote class="my-6 relative border-r-4 border-accent-600 bg-emerald-50/40 pr-6 pl-4 py-5 rounded-l-xl text-right font-serif text-xl leading-loose text-brand-950 shadow-2xs" dir="rtl" ${attrs}>
            <div class="space-y-3">
              ${inner}
            </div>
          </blockquote>
        `;
      }
      return `
        <blockquote class="my-6 relative border-l-4 border-accent-600 bg-accent-50/40 pl-6 pr-4 py-5 rounded-r-xl text-brand-900 shadow-2xs" ${attrs}>
          <div class="text-sm sm:text-base italic leading-relaxed space-y-2 text-brand-800">
            ${inner}
          </div>
        </blockquote>
      `;
    });

    // 5. Enhance Arabic paragraphs with RTL and typography
    rawHtml = rawHtml.replace(/<p([^>]*)>([\s\S]*?)<\/p>/gi, (_, attrs, inner) => {
      const isArabic = containsArabic(inner);
      if (isArabic) {
        return `<p class="text-lg sm:text-xl font-serif text-brand-950 leading-loose text-right my-4 py-1" dir="rtl" ${attrs}>${inner}</p>`;
      }
      return `<p class="text-base text-brand-700 leading-relaxed my-4 font-normal" ${attrs}>${inner}</p>`;
    });

    // 6. Style lists
    rawHtml = rawHtml.replace(/<ul([^>]*)>/gi, '<ul class="my-5 space-y-2.5 list-disc pl-6 text-sm sm:text-base text-brand-700 marker:text-accent-600" $1>');
    rawHtml = rawHtml.replace(/<ol([^>]*)>/gi, '<ol class="my-5 space-y-2.5 list-decimal pl-6 text-sm sm:text-base text-brand-700 marker:text-accent-700 marker:font-bold" $1>');
    rawHtml = rawHtml.replace(/<li([^>]*)>([\s\S]*?)<\/li>/gi, (_, attrs, inner) => {
      const isArabic = containsArabic(inner);
      const rtlAttr = isArabic ? ' dir="rtl" class="text-right font-serif text-base leading-loose pl-1"' : ' class="leading-relaxed pl-1"';
      return `<li${rtlAttr} ${attrs}>${inner}</li>`;
    });

    // 7. Make links secure and styled
    rawHtml = rawHtml.replace(/<a\s+(href="https?:\/\/[^"]+")([^>]*)>/gi, '<a $1 $2 target="_blank" rel="noopener noreferrer" class="text-accent-700 hover:text-accent-800 underline decoration-accent-300 underline-offset-2 hover:decoration-accent-600 font-semibold inline-flex items-center gap-1 transition-colors">');
    rawHtml = rawHtml.replace(/<a\s+(href="\/(?:[^"]+)?")([^>]*)>/gi, '<a $1 $2 class="text-accent-700 hover:text-accent-800 underline decoration-accent-300 underline-offset-2 hover:decoration-accent-600 font-semibold transition-colors">');

    // 8. Style code blocks and inline code
    rawHtml = rawHtml.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi, `
      <div class="my-6 rounded-xl overflow-hidden bg-brand-950 text-brand-100 shadow-md border border-brand-800">
        <pre class="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed"><code $1>$2</code></pre>
      </div>
    `);
    rawHtml = rawHtml.replace(/<code([^>]*)>([\s\S]*?)<\/code>/gi, '<code class="px-1.5 py-0.5 rounded bg-brand-100/80 text-brand-900 font-mono text-[13px] border border-brand-200" $1>$2</code>');

    // 9. Horizontal rule
    rawHtml = rawHtml.replace(/<hr([^>]*)>/gi, '<hr class="my-8 border-t border-brand-200" $1>');

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
      className="markdown-article-content prose prose-brand max-w-none text-brand-800"
      dangerouslySetInnerHTML={{ __html: parsedHtml }}
      onClick={handleClick}
    />
  );
}
