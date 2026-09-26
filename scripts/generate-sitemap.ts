import fs from 'fs';
import path from 'path';
import { allPages, getPageBySlug, normalizePath } from '../src/data/pagesRegistry';

const DOMAIN = 'https://riadalashekin.com';
const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
  category: string;
  title: string;
  image?: {
    loc: string;
    title: string;
  };
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

function getPriorityAndFreq(category: string, slug: string): { priority: string; changefreq: SitemapEntry['changefreq'] } {
  if (slug === '/' || slug === '') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  if (slug === '/sitemap' || slug === '/sitemap/') {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  if (slug === '/blog' || slug === '/blog/') {
    return { priority: '0.9', changefreq: 'daily' };
  }
  if (slug === '/seo-tools' || slug === '/seo-tools/') {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  if (slug === '/services' || slug === '/services/') {
    return { priority: '0.9', changefreq: 'weekly' };
  }

  switch (category) {
    case 'rankings':
      return { priority: '0.9', changefreq: 'weekly' };
    case 'guides':
      return { priority: '0.9', changefreq: 'weekly' };
    case 'tools':
      return { priority: '0.8', changefreq: 'weekly' };
    case 'services':
      return { priority: '0.8', changefreq: 'monthly' };
    case 'about-contact':
      return { priority: '0.8', changefreq: 'monthly' };
    case 'categories':
      return { priority: '0.6', changefreq: 'monthly' };
    case 'downloads':
      return { priority: '0.6', changefreq: 'monthly' };
    case 'legal':
      return { priority: '0.4', changefreq: 'yearly' };
    default:
      return { priority: '0.7', changefreq: 'monthly' };
  }
}

export function buildSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const seenLocs = new Set<string>();

  // 1. Homepage
  entries.push({
    loc: `${DOMAIN}/`,
    lastmod: TODAY,
    changefreq: 'daily',
    priority: '1.0',
    category: 'Home & Executive',
    title: 'Riad Al Ashekin | Business & Technology Consultant & Strategist',
    image: {
      loc: `${DOMAIN}/images/riad-booking-portrait.jpg`,
      title: 'Riad Al Ashekin - Business and Technology Consultant'
    }
  });
  seenLocs.add(`${DOMAIN}/`);

  // 2. Dedicated HTML Sitemap page
  entries.push({
    loc: `${DOMAIN}/sitemap/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.8',
    category: 'Sitemap',
    title: 'HTML & XML Sitemap Directory | Riad Al Ashekin'
  });
  seenLocs.add(`${DOMAIN}/sitemap/`);

  // 3. All registered pages
  for (const rawPage of allPages) {
    const page = getPageBySlug(rawPage.slug) || rawPage;
    let norm = normalizePath(page.slug);
    if (!norm.endsWith('/') && !norm.includes('.')) {
      norm = `${norm}/`;
    }
    const fullLoc = page.canonicalUrl && page.canonicalUrl.startsWith('http')
      ? page.canonicalUrl
      : `${DOMAIN}${norm}`;

    if (seenLocs.has(fullLoc)) continue;
    seenLocs.add(fullLoc);

    const { priority, changefreq } = getPriorityAndFreq(page.category, norm);
    const pageTitle = page.title || page.headline || 'Riad Al Ashekin Page';

    let imageObj: { loc: string; title: string } | undefined;
    if (page.featuredImage) {
      const imgPath = page.featuredImage.startsWith('http')
        ? page.featuredImage
        : `${DOMAIN}${page.featuredImage.startsWith('/') ? '' : '/'}${page.featuredImage}`;
      imageObj = {
        loc: imgPath,
        title: page.featuredImageAlt || pageTitle
      };
    }

    entries.push({
      loc: fullLoc,
      lastmod: TODAY,
      changefreq,
      priority,
      category: page.category,
      title: pageTitle,
      image: imageObj
    });
  }

  return entries;
}

export function generateSitemapXml(entries: SitemapEntry[]): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n`;
  xml += `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n`;
  xml += `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n`;
  xml += `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\n`;
  xml += `        http://www.google.com/schemas/sitemap-image/1.1\n`;
  xml += `        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">\n`;

  for (const entry of entries) {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(entry.loc)}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;

    if (entry.image) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(entry.image.loc)}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(entry.image.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }

    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  return xml;
}

// Generate the files
const entries = buildSitemapEntries();
const xmlContent = generateSitemapXml(entries);

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xmlContent, 'utf-8');
console.log(`Successfully generated sitemap.xml with ${entries.length} URLs in ${publicDir}/sitemap.xml`);
