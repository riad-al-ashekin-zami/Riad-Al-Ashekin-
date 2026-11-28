import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { allPages, getPageBySlug, normalizePath } from '../src/data/pagesRegistry';
import { ALL_TOOL_DETAILS, getRelatedTools, getToolById, getToolByPath, getToolBySlug, ToolRegistryItem } from '../src/data/toolDetails';
import { PageData } from '../src/types';

const DOMAIN = 'https://riadalashekin.com';
const distDir = path.resolve(process.cwd(), 'dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Please run vite build first.');
  process.exit(0);
}

const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found.');
  process.exit(0);
}

// Ensure .well-known (ignored by default by Vite) is copied to dist/
const wellKnownPublic = path.resolve(process.cwd(), 'public/.well-known');
const wellKnownDist = path.join(distDir, '.well-known');
if (fs.existsSync(wellKnownPublic)) {
  if (!fs.existsSync(wellKnownDist)) fs.mkdirSync(wellKnownDist, { recursive: true });
  for (const file of fs.readdirSync(wellKnownPublic)) {
    fs.copyFileSync(path.join(wellKnownPublic, file), path.join(wellKnownDist, file));
  }
  console.log('Successfully copied .well-known directory to dist/');
}

let baseTemplate = fs.readFileSync(templatePath, 'utf8');

// Inline compiled CSS directly into <style> to eliminate the 670ms render-blocking stylesheet request
const cssLinkRegex = /<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+\.css)["'][^>]*>|<link\s+[^>]*href=["']([^"']+\.css)["'][^>]*rel=["']stylesheet["'][^>]*>/gi;
baseTemplate = baseTemplate.replace(cssLinkRegex, (match, p1, p2) => {
  const cssHref = p1 || p2;
  if (!cssHref) return match;
  try {
    const cssRelPath = cssHref.startsWith('/') ? cssHref.slice(1) : cssHref;
    const cssFilePath = path.join(distDir, cssRelPath);
    if (fs.existsSync(cssFilePath)) {
      const cssContent = fs.readFileSync(cssFilePath, 'utf8');
      console.log(`Inlined ${cssRelPath} (${(cssContent.length / 1024).toFixed(1)} KiB) directly into HTML head`);
      return `<style id="app-critical-css">\n${cssContent}\n</style>`;
    }
  } catch (err) {
    console.warn('Failed to inline CSS file:', err);
  }
  return match;
});

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const PRERENDER_HEADER = `<header class="fixed top-0 left-0 right-0 z-50 bg-[#150d28]/95 backdrop-blur-xl border-b border-brand-800/80 py-3.5"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-12 sm:h-14"><a href="/" class="text-left flex items-center gap-3 no-underline"><div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 border border-brand-600/60 flex items-center justify-center font-bold text-white shadow-md"><span>RA</span></div><div class="flex flex-col"><span class="text-sm sm:text-base font-extrabold text-white tracking-tight">RIAD AL ASHEKIN</span><span class="text-[10px] font-mono font-medium text-brand-300 hidden sm:block">Business &amp; Tech Consultant</span></div></a><nav aria-label="Primary Navigation" class="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1 rounded-full bg-brand-900/60 border border-brand-800/80"><a href="/" class="px-3 py-1.5 rounded-full text-xs font-medium text-brand-300 hover:text-white no-underline">Home</a><a href="/about-me/" class="px-3 py-1.5 rounded-full text-xs font-medium text-brand-300 hover:text-white no-underline">About</a><a href="/services/" class="px-3 py-1.5 rounded-full text-xs font-medium text-brand-300 hover:text-white no-underline">Services</a><a href="/seo-pricing/" class="px-3 py-1.5 rounded-full text-xs font-medium text-brand-300 hover:text-white no-underline">Pricing</a><a href="/seo-tools/" class="px-3 py-1.5 rounded-full text-xs font-medium text-brand-300 hover:text-white no-underline">Tools</a><a href="/blog/" class="px-3 py-1.5 rounded-full text-xs font-medium text-brand-300 hover:text-white no-underline">Blog</a><a href="/contact/" class="px-3 py-1.5 rounded-full text-xs font-medium text-brand-300 hover:text-white no-underline">Contact</a></nav><div class="hidden lg:flex items-center gap-2.5"><a href="/contact/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-600 text-white text-xs font-bold shadow-md no-underline"><span>Contact Me</span></a></div></div></div></header>`;

const HOMEPAGE_SHELL = `<div class="min-h-screen bg-brand-50 text-brand-950 flex flex-col font-sans">${PRERENDER_HEADER}<main class="flex-1"><section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"><div class="w-full lg:w-7/12 flex flex-col items-start text-left space-y-6"><div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-900/90 border border-brand-700/80 text-xs font-semibold text-brand-200"><span class="flex h-2 w-2 rounded-full bg-emerald-500"></span><span>Available for Strategic Advisory &amp; Architecture</span></div><div class="space-y-2"><div class="text-xs font-mono font-bold tracking-widest text-accent-300 uppercase"><span>Business &amp; Technology Consultant</span></div><h1 class="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white leading-[1.05] tracking-tight">RIAD AL ASHEKIN</h1><p class="text-2xl sm:text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-accent-300">Business Strategy. Modern Tech. Real Growth.</p></div><p class="text-base sm:text-lg text-brand-200/90 leading-relaxed max-w-2xl font-normal">I advise founders, high-growth startups, and technical leadership teams on connecting commercial objectives with scalable software architecture, pragmatic AI workflow automation, and search dominance.</p><div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2"><a href="/seo-pricing/" class="inline-flex justify-center items-center gap-2.5 px-7 py-3.5 bg-accent-600 text-white rounded-xl font-bold text-sm shadow-lg no-underline"><span>Pricing &amp; Retainers</span></a><a href="/services/" class="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-brand-900/90 border border-brand-800 text-brand-200 rounded-xl font-bold text-sm no-underline"><span>Explore Retainers &amp; Proof</span></a></div></div><div class="w-full lg:w-5/12 flex justify-center lg:justify-end"><div class="relative w-full max-w-md mx-auto"><div class="relative bg-[#1a1133] rounded-3xl border border-brand-800/90 overflow-hidden shadow-2xl"><div class="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden flex items-end justify-center bg-[#1d143a]"><picture class="w-full h-full"><source media="(max-width: 640px)" srcset="/images/riad-booking-portrait-mobile.webp" type="image/webp"><source srcset="/images/riad-booking-portrait.webp" type="image/webp"><img src="/images/riad-booking-portrait.jpg" alt="Riad Al Ashekin - Business &amp; Technology Consultant" width="640" height="800" loading="eager" fetchpriority="high" decoding="async" class="w-full h-full object-cover object-[center_top]"></picture></div></div></div></div></div></div></section></main></div>`;

// Update dist/index.html with inlined CSS and pre-rendered homepage shell for instant FCP/LCP
const homepageHtml = baseTemplate.replace('<div id="root"></div>', `<div id="root">${HOMEPAGE_SHELL}</div>`);
fs.writeFileSync(templatePath, homepageHtml, 'utf8');

function getSubpageShell(title: string, description: string, relatedSlugs?: string[]): string {
  const relatedLinks = (relatedSlugs || [])
    .map(rs => {
      const p = getPageBySlug(rs);
      if (!p) return null;
      const href = p.slug.endsWith('/') || p.slug.includes('.') ? p.slug : `${p.slug}/`;
      return `<li class="p-4 bg-white rounded-xl border border-brand-200"><a href="${escapeHtml(href)}" class="font-bold text-sm text-brand-950 hover:text-accent-700 no-underline">${escapeHtml(p.headline || p.title || href)}</a><p class="text-xs text-brand-600 mt-1">${escapeHtml(p.metaDescription || p.subtitle || '')}</p></li>`;
    })
    .filter(Boolean)
    .join('');

  const relatedSection = relatedLinks
    ? `<section class="mt-10 space-y-4"><h2 class="text-xl font-bold text-brand-950">Related tools and resources</h2><ul class="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none p-0 m-0">${relatedLinks}</ul></section>`
    : '';

  return `<div class="min-h-screen bg-brand-50 text-brand-950 flex flex-col font-sans">${PRERENDER_HEADER}<main class="flex-1 pt-28 pb-16"><div class="max-w-4xl mx-auto px-4 sm:px-6"><h1 class="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight mb-4">${escapeHtml(title)}</h1><p class="text-base sm:text-lg text-brand-700 leading-relaxed">${escapeHtml(description)}</p>${relatedSection}</div></main></div>`;
}

function getMarkdownBlogShell(page: PageData): string {
  let rendered = marked.parse(page.markdownContent || '', { gfm: true, breaks: false }) as string;
  rendered = rendered.replace(/<h1\b([^>]*)>([\s\S]*?)<\/h1>/gi, '<h2$1>$2</h2>');
  const introBlock = page.intro ? `<p class="text-base sm:text-lg text-brand-800 leading-relaxed">${escapeHtml(page.intro)}</p>` : '';
  return `<div class="min-h-screen bg-[#f9f8fc] text-brand-950 flex flex-col font-sans">${PRERENDER_HEADER}<main class="flex-1 pt-28 pb-16"><article class="max-w-4xl mx-auto px-4 sm:px-6 bg-white rounded-3xl border border-brand-200 p-6 sm:p-10 space-y-6"><h1 class="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">${escapeHtml(page.headline)}</h1>${introBlock}${rendered}</article></main></div>`;
}

function getSeoToolsHubShell(): string {
  const categoryGroups: Array<{ id: ToolRegistryItem['category']; heading: string }> = [
    { id: 'serp', heading: 'Meta & SERP Tools' },
    { id: 'crawler', heading: 'Technical SEO & Crawler Tools' },
    { id: 'schema', heading: 'Schema & Structured Data Tools' },
    { id: 'url', heading: 'URL & UTM Tracking Tools' },
    { id: 'content', heading: 'Content & Keyword Tools' },
    { id: 'calculator', heading: 'SEO & Business Calculators' },
    { id: 'image', heading: 'Image & Media Tools' },
    { id: 'dev', heading: 'Developer & Formatting Tools' },
    { id: 'utility', heading: 'Utility tools' }
  ];

  // Include every unique working tool page from ALL_TOOL_DETAILS (verified non-404 routes)
  const validTools = ALL_TOOL_DETAILS.filter(tool => {
    const cleanPath = tool.path.startsWith('/') ? tool.path : `/${tool.path}`;
    return Boolean(getPageBySlug(cleanPath));
  });

  const sectionsHtml = categoryGroups
    .map(group => {
      const items = validTools.filter(t => t.category === group.id);
      if (items.length === 0) return '';
      const listHtml = items
        .map(t => `<li class="bg-white border border-brand-200/80 rounded-2xl p-5 flex flex-col justify-between shadow-2xs"><h3 class="text-base font-bold text-brand-950"><a href="${escapeHtml(t.path)}" class="text-brand-950 hover:text-accent-700 no-underline">${escapeHtml(t.name)}</a></h3><p class="text-xs text-brand-700 mt-2 leading-relaxed">${escapeHtml(t.shortDescription)}</p></li>`)
        .join('');
      return `<section class="space-y-4"><h2 class="text-xl sm:text-2xl font-bold text-brand-950 border-b border-brand-200 pb-2">${escapeHtml(group.heading)}</h2><ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">${listHtml}</ul></section>`;
    })
    .filter(Boolean)
    .join('');

  return `<div class="w-full min-h-screen bg-[#f9f8fc] text-brand-950 flex flex-col font-sans">${PRERENDER_HEADER}<section class="relative pt-28 pb-14 lg:pt-36 lg:pb-20 bg-[#150d28] text-white border-b border-brand-800/80"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs text-brand-300 mb-6"><a href="/" class="hover:text-white no-underline">Home</a><span>/</span><span class="text-white font-medium">SEO Tools</span></nav><div class="max-w-3xl space-y-4"><h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">My SEO Tools</h1><p class="text-base sm:text-lg text-brand-200 leading-relaxed font-normal">Explore ${validTools.length} free browser-based SEO, technical crawling, schema, keyword, calculator, image, and developer tools.</p></div></div></section><main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1 space-y-12">${sectionsHtml}</main></div>`;
}

function getSitemapShell(): string {
  const xmlPath = path.resolve(process.cwd(), 'public/sitemap.xml');
  const xmlContent = fs.existsSync(xmlPath) ? fs.readFileSync(xmlPath, 'utf8') : '';
  const locs = [...xmlContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

  const rowsHtml = locs
    .map((loc, idx) => {
      let pathname = '/';
      try {
        pathname = new URL(loc).pathname || '/';
      } catch {
        pathname = loc;
      }
      const matchedPage = pathname === '/'
        ? { title: 'Riad Al Ashekin | Business & Technology Consultant & Strategist', category: 'Homepage' }
        : pathname === '/sitemap/'
        ? { title: 'HTML & XML Sitemap Directory | Riad Al Ashekin', category: 'Sitemap' }
        : getPageBySlug(pathname);
      const label = matchedPage?.title || (matchedPage as PageData | undefined)?.headline || pathname;
      const category = matchedPage?.category || 'page';
      return `<tr class="border-b border-brand-100"><td class="py-2.5 px-4 font-mono text-xs text-brand-400">${idx + 1}</td><td class="py-2.5 px-4"><a href="${escapeHtml(pathname)}" class="font-bold text-xs text-brand-950 hover:text-accent-700 no-underline">${escapeHtml(label)}</a><div class="font-mono text-[11px] text-brand-500">${escapeHtml(pathname)}</div></td><td class="py-2.5 px-4 text-xs text-brand-700">${escapeHtml(category)}</td></tr>`;
    })
    .join('');

  return `<div class="min-h-screen bg-brand-50 text-brand-950 flex flex-col font-sans">${PRERENDER_HEADER}<main class="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8"><div class="flex items-center gap-2 text-xs text-brand-500 font-medium"><a href="/" class="hover:text-brand-900 no-underline">Home</a><span>/</span><span class="text-brand-900 font-semibold">Sitemap &amp; Indexation Directory</span></div><header class="bg-white border border-brand-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-4"><h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 font-serif">Complete Sitemap &amp; Indexation Directory</h1><p class="text-sm sm:text-base text-brand-600 leading-relaxed">Full HTML index of all ${locs.length} URLs published in <a href="/sitemap.xml" class="text-accent-700 underline">sitemap.xml</a> on riadalashekin.com.</p><div class="flex flex-wrap gap-3 text-xs font-bold"><a href="/sitemap.xml" class="px-4 py-2 rounded-xl bg-brand-950 text-white no-underline">Open XML Sitemap</a><a href="/robots.txt" class="px-4 py-2 rounded-xl bg-white border border-brand-200 text-brand-800 no-underline">View robots.txt</a></div></header><section class="bg-white border border-brand-200 rounded-2xl overflow-hidden shadow-sm"><table class="w-full text-left text-xs"><thead><tr class="bg-brand-100/70 border-b border-brand-200 text-brand-700 uppercase font-bold"><th class="py-3 px-4 w-12">#</th><th class="py-3 px-4">Page Title &amp; Target URL</th><th class="py-3 px-4 w-36">Category</th></tr></thead><tbody>${rowsHtml}</tbody></table></section></main></div>`;
}

function getToolShell(tool: ToolRegistryItem): string {
  const cleanH1 = tool.h1.replace(/\s*\|\s*Riad Al Ashekin$/i, '');
  const relatedTools = getRelatedTools(tool, 4);
  const relatedHtml = relatedTools
    .map(rel => `<a href="${escapeHtml(rel.path)}" class="group bg-white hover:bg-brand-50/50 border border-brand-200/80 hover:border-accent-400 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 shadow-2xs no-underline block"><div><h3 class="text-sm font-bold text-brand-950">${escapeHtml(rel.name)}</h3><p class="text-xs text-brand-600 mt-1.5 mb-4 leading-relaxed">${escapeHtml(rel.shortDescription)}</p></div><div class="pt-2 border-t border-brand-100 flex items-center text-xs font-bold text-accent-700"><span>Open Tool</span></div></a>`)
    .join('');

  const howToHtml = (tool.howToUse || [])
    .map((step, idx) => `<li class="flex gap-4 p-4 rounded-2xl bg-brand-50/70 border border-brand-100/90"><span class="w-7 h-7 shrink-0 rounded-full bg-accent-600 text-white font-bold text-xs flex items-center justify-center">${idx + 1}</span><span class="text-xs sm:text-sm text-brand-800 leading-relaxed font-medium pt-0.5">${escapeHtml(step)}</span></li>`)
    .join('');

  const featuresHtml = (tool.features || [])
    .map(f => `<li class="flex items-start gap-3 p-3.5 rounded-xl bg-brand-50/50 border border-brand-100"><span class="text-xs sm:text-sm text-brand-800 font-medium leading-relaxed">${escapeHtml(f)}</span></li>`)
    .join('');

  return `<div class="w-full min-h-screen bg-[#f9f8fc] text-brand-950 flex flex-col font-sans">${PRERENDER_HEADER}<section class="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80"><div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-2 text-xs text-brand-300 mb-6"><a href="/" class="hover:text-white no-underline">Home</a><span>/</span><a href="/seo-tools/" class="hover:text-white no-underline">SEO Tools</a><span>/</span><span class="text-accent-300 font-semibold">${escapeHtml(tool.name)}</span></nav><header class="space-y-4"><h1 class="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight leading-[1.15]">${escapeHtml(cleanH1)}</h1><p class="text-base sm:text-lg text-brand-200 font-normal leading-relaxed max-w-3xl">${escapeHtml(tool.intro)}</p></header></div></section><main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full flex-1 space-y-12"><section aria-label="Interactive Tool" class="bg-white rounded-2xl border border-brand-200/90 shadow-sm p-6 sm:p-8 text-xs sm:text-sm text-brand-600">${escapeHtml(tool.name)}</section>${howToHtml ? `<section class="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-5"><h2 class="text-xl sm:text-2xl font-bold text-brand-950 border-b border-brand-100 pb-4">How to Use the ${escapeHtml(tool.name)}</h2><ol class="space-y-3 list-none p-0 m-0">${howToHtml}</ol></section>` : ''}${featuresHtml ? `<section class="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-5"><h2 class="text-xl sm:text-2xl font-bold text-brand-950 border-b border-brand-100 pb-4">Core Features &amp; Capabilities</h2><ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">${featuresHtml}</ul></section>` : ''}${relatedHtml ? `<section class="space-y-5 pt-2"><div class="flex items-center justify-between"><h2 class="text-xl sm:text-2xl font-bold text-brand-950">Related SEO Tools</h2><a href="/seo-tools/" class="text-xs font-bold text-accent-700 no-underline">View All Tools</a></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">${relatedHtml}</div></section>` : ''}</main></div>`;
}

function getToolGuideShell(tool: ToolRegistryItem): string {
  const guide = tool.belowSectionGuide!;
  const cleanH1 = tool.h1.replace(/\s*\|\s*Riad Al Ashekin$/i, '');
  const relatedTools = guide.relatedSlugs
    .map(slug => getToolBySlug(slug) || getToolById(slug))
    .filter((item): item is ToolRegistryItem => Boolean(item))
    .slice(0, 3);

  const stepsHtml = guide.howToUseSteps
    .map((step, idx) => `<li class="flex gap-4 p-4 rounded-2xl bg-brand-50/70 border border-brand-100/90"><span class="w-7 h-7 shrink-0 rounded-full bg-accent-600 text-white font-bold text-xs flex items-center justify-center">${idx + 1}</span><span class="text-xs sm:text-sm text-brand-800 leading-relaxed font-medium pt-0.5">${escapeHtml(step)}</span></li>`)
    .join('');

  const pointsHtml = guide.checksOrShowsPoints
    .map(pt => `<li class="flex items-start gap-3 p-3.5 rounded-xl bg-brand-50/50 border border-brand-100"><span class="text-xs sm:text-sm text-brand-800 font-medium leading-relaxed">${escapeHtml(pt)}</span></li>`)
    .join('');

  const faqsHtml = guide.faqs
    .map(faq => `<div class="border border-brand-200/80 rounded-2xl overflow-hidden bg-white"><h3 class="px-5 py-3.5 text-xs sm:text-sm font-bold text-brand-950 bg-brand-50/50 border-b border-brand-100">${escapeHtml(faq.question)}</h3><p class="px-5 py-4 text-xs sm:text-sm text-brand-700 leading-relaxed font-normal">${escapeHtml(faq.answer)}</p></div>`)
    .join('');

  const relatedHtml = relatedTools
    .map(rel => `<a href="${escapeHtml(rel.path)}" class="group bg-white hover:bg-brand-50/50 border border-brand-200/80 hover:border-accent-400 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 shadow-2xs no-underline block"><div><h3 class="text-sm font-bold text-brand-950">${escapeHtml(rel.name)}</h3><p class="text-xs text-brand-600 mt-1.5 mb-4 leading-relaxed">${escapeHtml(rel.shortDescription)}</p></div><div class="pt-2 border-t border-brand-100 flex items-center text-xs font-bold text-accent-700"><span>Open Tool</span></div></a>`)
    .join('');

  return `<div class="w-full min-h-screen bg-[#f9f8fc] text-brand-950 flex flex-col font-sans">${PRERENDER_HEADER}<section class="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80"><div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-2 text-xs text-brand-300 mb-6"><a href="/" class="hover:text-white no-underline">Home</a><span>/</span><a href="/seo-tools/" class="hover:text-white no-underline">SEO Tools</a><span>/</span><span class="text-accent-300 font-semibold">${escapeHtml(tool.name)}</span></nav><header class="space-y-4"><h1 class="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight leading-[1.15]">${escapeHtml(cleanH1)}</h1><p class="text-base sm:text-lg text-brand-200 font-normal leading-relaxed max-w-3xl">${escapeHtml(tool.intro)}</p></header></div></section><main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full flex-1 space-y-12"><section aria-label="Interactive Tool" class="bg-white rounded-2xl border border-brand-200/90 shadow-sm p-6 sm:p-8 text-xs sm:text-sm text-brand-600">${escapeHtml(tool.name)}</section><div class="space-y-10"><section class="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-5"><div class="border-b border-brand-100 pb-4"><h2 class="text-xl sm:text-2xl font-bold text-brand-950">${escapeHtml(guide.howToUseHeading)}</h2></div><ol class="space-y-3 list-none p-0 m-0">${stepsHtml}</ol></section><section class="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-5"><div class="border-b border-brand-100 pb-4"><h2 class="text-xl sm:text-2xl font-bold text-brand-950">${escapeHtml(guide.checksOrShowsHeading)}</h2></div><p class="text-xs sm:text-sm text-brand-800 leading-relaxed">${escapeHtml(guide.checksOrShowsIntro)}</p><ul class="space-y-3 list-none p-0 m-0">${pointsHtml}</ul></section><section class="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-5"><h2 class="text-xl sm:text-2xl font-bold text-brand-950 border-b border-brand-100 pb-4">${escapeHtml(guide.exampleHeading)}</h2><div class="space-y-4"><div><span class="block text-xs font-bold text-brand-600 uppercase mb-1.5">${escapeHtml(guide.exampleInputLabel || 'Sample input')}</span><pre class="p-4 bg-brand-50 border border-brand-200 rounded-xl text-xs font-mono text-brand-900 whitespace-pre-wrap break-words overflow-x-auto">${escapeHtml(guide.exampleInput)}</pre></div><div><span class="block text-xs font-bold text-emerald-700 uppercase mb-1.5">${escapeHtml(guide.exampleOutputLabel || 'Returned output')}</span><pre class="p-4 bg-brand-950 border border-brand-800 rounded-xl text-xs font-mono text-emerald-400 whitespace-pre-wrap break-words overflow-x-auto">${escapeHtml(guide.exampleOutput)}</pre></div>${guide.exampleNote ? `<p class="text-xs sm:text-sm text-brand-700 leading-relaxed bg-brand-50/60 p-3.5 rounded-xl border border-brand-100">${escapeHtml(guide.exampleNote)}</p>` : ''}</div></section><section class="bg-white rounded-3xl border border-brand-200/90 shadow-sm p-6 sm:p-10 space-y-5"><div class="border-b border-brand-100 pb-4"><h2 class="text-xl sm:text-2xl font-bold text-brand-950">${escapeHtml(guide.faqHeading)}</h2></div><div class="space-y-4 pt-1">${faqsHtml}</div></section><section class="space-y-5 pt-2"><div class="flex items-center justify-between"><h2 class="text-xl sm:text-2xl font-bold text-brand-950">${escapeHtml(guide.relatedHeading)}</h2><a href="/seo-tools/" class="text-xs font-bold text-accent-700 no-underline">View All Tools</a></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4">${relatedHtml}</div></section></div></main></div>`;
}

function generateHtmlForPage(slug: string, title: string, description: string, canonicalUrl: string, imageUrl?: string, tool?: ToolRegistryItem, relatedSlugs?: string[], page?: PageData): string {
  let html = baseTemplate;

  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeUrl = escapeHtml(canonicalUrl);

  // Inject server-rendered shell for instant FCP and full crawlable internal links without JS
  if (slug === '/seo-tools/') {
    html = html.replace('<div id="root"></div>', `<div id="root">${getSeoToolsHubShell()}</div>`);
  } else if (slug === '/sitemap/') {
    html = html.replace('<div id="root"></div>', `<div id="root">${getSitemapShell()}</div>`);
  } else if (tool && tool.belowSectionGuide) {
    html = html.replace('<div id="root"></div>', `<div id="root">${getToolGuideShell(tool)}</div>`);

    const appSchema = tool.schemaType === 'SoftwareApplication'
      ? {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: tool.name,
          url: tool.canonicalUrl,
          applicationCategory: tool.softwareApplicationCategory || 'UtilitiesApplication',
          operatingSystem: 'Any (web browser)',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          description: tool.metaDescription
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: tool.name,
          url: tool.canonicalUrl,
          applicationCategory: 'SEOApplication',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          description: tool.metaDescription
        };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: tool.belowSectionGuide.faqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer
        }
      }))
    };

    const safeAppJson = JSON.stringify(appSchema).replace(/</g, '\\u003c');
    const safeFaqJson = JSON.stringify(faqSchema).replace(/</g, '\\u003c');
    html = html.replace(
      '</head>',
      `  <script type="application/ld+json" data-prerender-tool-schema="true">${safeAppJson}</script>\n  <script type="application/ld+json" data-prerender-tool-schema="true">${safeFaqJson}</script>\n</head>`
    );
  } else if (tool) {
    html = html.replace('<div id="root"></div>', `<div id="root">${getToolShell(tool)}</div>`);

    const appSchema = tool.schemaType === 'SoftwareApplication'
      ? {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: tool.name,
          url: tool.canonicalUrl,
          applicationCategory: tool.softwareApplicationCategory || 'UtilitiesApplication',
          operatingSystem: 'Any (web browser)',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          description: tool.metaDescription
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: tool.name,
          url: tool.canonicalUrl,
          applicationCategory: 'SEOApplication',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          description: tool.metaDescription
        };
    const safeAppJson = JSON.stringify(appSchema).replace(/</g, '\\u003c');
    html = html.replace(
      '</head>',
      `  <script type="application/ld+json" data-prerender-tool-schema="true">${safeAppJson}</script>\n</head>`
    );
  } else if (page?.markdownContent) {
    html = html.replace('<div id="root"></div>', `<div id="root">${getMarkdownBlogShell(page)}</div>`);
    if (page.faqs && page.faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer
          }
        }))
      };
      const safeFaqJson = JSON.stringify(faqSchema).replace(/</g, '\\u003c');
      html = html.replace(
        '</head>',
        `  <script type="application/ld+json" data-prerender-faq-schema="true">${safeFaqJson}</script>\n</head>`
      );
    }
  } else {
    html = html.replace('<div id="root"></div>', `<div id="root">${getSubpageShell(title, description, relatedSlugs)}</div>`);
  }

  // Replace <title>
  html = html.replace(/<title>.*?<\/title>/i, `<title>${safeTitle}</title>`);

  // Replace or insert meta description
  if (html.includes('name="description"')) {
    html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${safeDesc}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${safeDesc}" />\n</head>`);
  }

  // Replace or insert canonical link
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${safeUrl}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${safeUrl}" />\n</head>`);
  }

  // Replace og:title
  if (html.includes('property="og:title"')) {
    html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, `<meta property="og:title" content="${safeTitle}" />`);
  }

  // Replace og:description
  if (html.includes('property="og:description"')) {
    html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, `<meta property="og:description" content="${safeDesc}" />`);
  }

  // Replace og:url
  if (html.includes('property="og:url"')) {
    html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${safeUrl}" />`);
  }

  // Replace og:image and twitter:image if custom image provided
  if (imageUrl) {
    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${DOMAIN}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
    const safeImg = escapeHtml(fullImageUrl);

    if (html.includes('property="og:image"')) {
      html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, `<meta property="og:image" content="${safeImg}" />`);
    }
    if (html.includes('name="twitter:image"')) {
      html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:image" content="${safeImg}" />`);
    }
  }

  // Replace twitter:title
  if (html.includes('name="twitter:title"')) {
    html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${safeTitle}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="twitter:title" content="${safeTitle}" />\n</head>`);
  }

  // Replace twitter:description
  if (html.includes('name="twitter:description"')) {
    html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${safeDesc}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="twitter:description" content="${safeDesc}" />\n</head>`);
  }

  return html;
}

let generatedCount = 0;
const processedSlugs = new Set<string>();

// 1. Generate for /sitemap/
const sitemapHtml = generateHtmlForPage(
  '/sitemap/',
  'HTML & XML Sitemap Indexation Directory | Riad Al Ashekin',
  'Explore the complete sitemap and indexation catalog of 165 published URLs, tactical guides, SEO utilities, and advisory services for riadalashekin.com.',
  `${DOMAIN}/sitemap/`
);
const sitemapDir = path.join(distDir, 'sitemap');
if (!fs.existsSync(sitemapDir)) fs.mkdirSync(sitemapDir, { recursive: true });
fs.writeFileSync(path.join(sitemapDir, 'index.html'), sitemapHtml, 'utf8');
generatedCount++;
processedSlugs.add('sitemap');

// 2. Generate for each page in allPages
for (const rawPage of allPages) {
  const page = getPageBySlug(rawPage.slug) || rawPage;
  const norm = normalizePath(page.slug);
  const cleanSlug = norm.replace(/^\/+|\/+$/g, '');

  if (!cleanSlug || processedSlugs.has(cleanSlug)) continue;
  processedSlugs.add(cleanSlug);

  const pageTitle = page.exactSeoTitle && page.title
    ? page.title
    : page.title
      ? (page.title.includes('Riad Al Ashekin') ? page.title : `${page.title} | Riad Al Ashekin`)
      : `${page.headline} | Riad Al Ashekin`;

  const pageDesc = page.metaDescription || page.subtitle || page.intro || '';
  const canonical = page.canonicalUrl || `${DOMAIN}/${cleanSlug}/`;
  const toolItem = page.toolDetailId
    ? getToolById(page.toolDetailId)
    : (getToolByPath(page.slug) || getToolBySlug(page.slug));

  const pageHtml = generateHtmlForPage(norm, pageTitle, pageDesc, canonical, page.featuredImage, toolItem, page.relatedSlugs, page);

  const targetFolder = path.join(distDir, cleanSlug);
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  fs.writeFileSync(path.join(targetFolder, 'index.html'), pageHtml, 'utf8');
  generatedCount++;
}

console.log(`Successfully pre-rendered SEO static HTML snapshots for ${generatedCount} URLs in dist/`);
