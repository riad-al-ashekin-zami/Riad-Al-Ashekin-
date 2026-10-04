import fs from 'fs';
import path from 'path';
import { allPages, getPageBySlug, normalizePath } from '../src/data/pagesRegistry';

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

const HOMEPAGE_SHELL = `<div class="min-h-screen bg-brand-50 text-brand-950 flex flex-col font-sans"><header class="fixed top-0 left-0 right-0 z-50 bg-[#150d28]/95 backdrop-blur-xl border-b border-brand-800/80 py-3.5"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-12 sm:h-14"><a href="/" class="text-left flex items-center gap-3"><div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 border border-brand-600/60 flex items-center justify-center font-bold text-white shadow-md"><span>RA</span></div><div class="flex flex-col"><span class="text-sm sm:text-base font-extrabold text-white tracking-tight">RIAD AL ASHEKIN</span><span class="text-[10px] font-mono font-medium text-brand-300 hidden sm:block">Business &amp; Tech Consultant</span></div></a><div class="hidden lg:flex items-center gap-2.5"><a href="/contact/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-600 text-white text-xs font-bold shadow-md"><span>Contact Me</span></a></div></div></div></header><main class="flex-1"><section class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#150d28] text-white border-b border-brand-800/80"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"><div class="w-full lg:w-7/12 flex flex-col items-start text-left space-y-6"><div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-900/90 border border-brand-700/80 text-xs font-semibold text-brand-200"><span class="flex h-2 w-2 rounded-full bg-emerald-500"></span><span>Available for Strategic Advisory &amp; Architecture</span></div><div class="space-y-2"><div class="text-xs font-mono font-bold tracking-widest text-accent-300 uppercase"><span>Business &amp; Technology Consultant</span></div><h1 class="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white leading-[1.05] tracking-tight">RIAD AL ASHEKIN</h1><p class="text-2xl sm:text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-accent-300">Business Strategy. Modern Tech. Real Growth.</p></div><p class="text-base sm:text-lg text-brand-200/90 leading-relaxed max-w-2xl font-normal">I advise founders, high-growth startups, and technical leadership teams on connecting commercial objectives with scalable software architecture, pragmatic AI workflow automation, and search dominance.</p><div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2"><a href="/seo-pricing/" class="inline-flex justify-center items-center gap-2.5 px-7 py-3.5 bg-accent-600 text-white rounded-xl font-bold text-sm shadow-lg"><span>Pricing &amp; Retainers</span></a><a href="/services/" class="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-brand-900/90 border border-brand-800 text-brand-200 rounded-xl font-bold text-sm"><span>Explore Retainers &amp; Proof</span></a></div></div><div class="w-full lg:w-5/12 flex justify-center lg:justify-end"><div class="relative w-full max-w-md mx-auto"><div class="relative bg-[#1a1133] rounded-3xl border border-brand-800/90 overflow-hidden shadow-2xl"><div class="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden flex items-end justify-center bg-[#1d143a]"><picture class="w-full h-full"><source media="(max-width: 640px)" srcset="/images/riad-booking-portrait-mobile.webp" type="image/webp"><source srcset="/images/riad-booking-portrait.webp" type="image/webp"><img src="/images/riad-booking-portrait.jpg" alt="Riad Al Ashekin - Business &amp; Technology Consultant" width="640" height="800" loading="eager" fetchpriority="high" decoding="async" class="w-full h-full object-cover object-[center_top]"></picture></div></div></div></div></div></div></section></main></div>`;

// Update dist/index.html with inlined CSS and pre-rendered homepage shell for instant FCP/LCP
const homepageHtml = baseTemplate.replace('<div id="root"></div>', `<div id="root">${HOMEPAGE_SHELL}</div>`);
fs.writeFileSync(templatePath, homepageHtml, 'utf8');

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getSubpageShell(title: string, description: string): string {
  return `<div class="min-h-screen bg-brand-50 text-brand-950 flex flex-col font-sans"><header class="fixed top-0 left-0 right-0 z-50 bg-[#150d28]/95 backdrop-blur-xl border-b border-brand-800/80 py-3.5"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-12 sm:h-14"><a href="/" class="text-left flex items-center gap-3"><div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 border border-brand-600/60 flex items-center justify-center font-bold text-white shadow-md"><span>RA</span></div><div class="flex flex-col"><span class="text-sm sm:text-base font-extrabold text-white tracking-tight">RIAD AL ASHEKIN</span><span class="text-[10px] font-mono font-medium text-brand-300 hidden sm:block">Business &amp; Tech Consultant</span></div></a><div class="hidden lg:flex items-center gap-2.5"><a href="/contact/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-600 text-white text-xs font-bold shadow-md"><span>Contact Me</span></a></div></div></div></header><main class="flex-1 pt-28 pb-16"><div class="max-w-4xl mx-auto px-4 sm:px-6"><h1 class="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight mb-4">${escapeHtml(title)}</h1><p class="text-base sm:text-lg text-brand-700 leading-relaxed">${escapeHtml(description)}</p></div></main></div>`;
}

function generateHtmlForPage(slug: string, title: string, description: string, canonicalUrl: string, imageUrl?: string): string {
  let html = baseTemplate;

  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeUrl = escapeHtml(canonicalUrl);

  // Inject subpage shell for instant FCP on deep links
  html = html.replace('<div id="root"></div>', `<div id="root">${getSubpageShell(title, description)}</div>`);

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
  'Explore the complete sitemap and indexation catalog of 148+ published URLs, tactical guides, SEO utilities, and advisory services for riadalashekin.com.',
  `${DOMAIN}/sitemap/`
);
const sitemapDir = path.join(distDir, 'sitemap');
if (!fs.existsSync(sitemapDir)) fs.mkdirSync(sitemapDir, { recursive: true });
fs.writeFileSync(path.join(sitemapDir, 'index.html'), sitemapHtml, 'utf8');
generatedCount++;
processedSlugs.add('/sitemap/');

// 2. Generate for each page in allPages
for (const rawPage of allPages) {
  const page = getPageBySlug(rawPage.slug) || rawPage;
  const norm = normalizePath(page.slug);
  const cleanSlug = norm.replace(/^\/+|\/+$/g, '');

  if (!cleanSlug || processedSlugs.has(cleanSlug)) continue;
  processedSlugs.add(cleanSlug);

  const pageTitle = page.title 
    ? (page.title.includes('Riad Al Ashekin') ? page.title : `${page.title} | Riad Al Ashekin`)
    : `${page.headline} | Riad Al Ashekin`;

  const pageDesc = page.metaDescription || page.subtitle || page.intro || '';
  const canonical = page.canonicalUrl || `${DOMAIN}/${cleanSlug}/`;

  const pageHtml = generateHtmlForPage(norm, pageTitle, pageDesc, canonical, page.featuredImage);

  const targetFolder = path.join(distDir, cleanSlug);
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  fs.writeFileSync(path.join(targetFolder, 'index.html'), pageHtml, 'utf8');
  generatedCount++;
}

console.log(`Successfully pre-rendered SEO static HTML snapshots for ${generatedCount} URLs in dist/`);
