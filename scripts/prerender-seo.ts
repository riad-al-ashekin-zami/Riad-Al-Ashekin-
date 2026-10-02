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

const baseTemplate = fs.readFileSync(templatePath, 'utf8');

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateHtmlForPage(slug: string, title: string, description: string, canonicalUrl: string, imageUrl?: string): string {
  let html = baseTemplate;

  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeUrl = escapeHtml(canonicalUrl);

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
