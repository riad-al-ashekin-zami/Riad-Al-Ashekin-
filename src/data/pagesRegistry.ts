import { PageData } from '../types';
import { rankingsPages } from './rankingsPages';
import { toolsPages } from './toolsPages';
import { servicesPages } from './servicesPages';
import { guidesAndBlogPages } from './guidesAndBlogPages';
import { companyAndCategoriesPages } from './companyAndCategoriesPages';
import { legalPages } from './legalPages';
import { ALL_TOOL_DETAILS, getToolByPath, getToolBySlug, ToolRegistryItem } from './toolDetails';

export function convertToolToPageData(tool: ToolRegistryItem): PageData {
  return {
    slug: tool.path,
    canonicalUrl: tool.canonicalUrl,
    title: tool.seoTitle,
    metaDescription: tool.metaDescription,
    badge: tool.badge || 'SEO Utility',
    category: 'tools',
    headline: tool.h1,
    subtitle: tool.intro,
    intro: tool.intro,
    sections: tool.technicalExplanation ? [
      {
        title: tool.technicalExplanation.heading,
        content: tool.technicalExplanation.body,
        bullets: tool.technicalExplanation.points
      }
    ] : [],
    faqs: tool.faqs,
    toolDetailId: tool.id
  };
}

// Convert all tool detail items into page data entries for the master catalog
const generatedToolPages: PageData[] = ALL_TOOL_DETAILS.map(convertToolToPageData);

export const allPages: PageData[] = [
  ...rankingsPages,
  ...toolsPages,
  ...generatedToolPages,
  ...servicesPages,
  ...guidesAndBlogPages,
  ...companyAndCategoriesPages,
  ...legalPages,
];

// Helper to normalize path for matching
export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  // preserve leading slash
  let clean = path.trim();
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }
  return clean;
}

// Dedicated featured image lookup for the 4 official blog posts
const BLOG_FEATURED_IMAGE_MAP: Record<string, { image: string; alt: string }> = {
  '/best-website-design-companies-in-bangladesh/': {
    image: '/images/featured-web-design-companies-bangladesh.svg',
    alt: 'Best Website Design Companies in Bangladesh: How to Choose the Right Web Design & Development Partner'
  },
  '/best-software-companies-in-bangladesh/': {
    image: '/images/featured-software-companies-bangladesh.svg',
    alt: 'Best Software Companies in Bangladesh: Top Software Development Companies to Know in 2026'
  },
  '/tarique-rahman/': {
    image: '/images/featured-tarique-rahman.svg',
    alt: 'Tarique Rahman Prime Minister of Bangladesh and BNP Chairman'
  },
  '/seo-for-static-websites/': {
    image: '/images/featured-spa-guide.svg',
    alt: 'SEO for Static Websites: How to Optimize a Static Site for Search'
  },
  '/seo-for-single-page-applications/': {
    image: '/images/featured-spa-seo-guide.svg',
    alt: 'SEO for Single Page Applications: How to Optimize SPAs for Google'
  },
  '/what-is-a-single-page-application/': {
    image: '/images/featured-spa-guide.svg',
    alt: 'What Is a Single Page Application (SPA) Architecture and Technical SEO Blueprint'
  },
  '/what-is-a-single-page-application-spa/': {
    image: '/images/featured-spa-guide.svg',
    alt: 'What Is a Single Page Application (SPA) Architecture and Technical SEO Blueprint'
  },
  '/best-8-seo-experts-in-sylhet/': {
    image: '/images/featured-sylhet-seo-experts.svg',
    alt: 'Best 8 SEO Experts in Sylhet, Bangladesh - Local Search & Technical Authority'
  },
  '/top-10-seo-agencies-in-bangladesh/': {
    image: '/images/featured-top-10-seo-agencies-bangladesh.svg',
    alt: 'Top 10 SEO Agencies in Bangladesh - Enterprise Growth & Technical Scale'
  },
  '/20-best-seo-experts-in-bangladesh/': {
    image: '/images/featured-20-best-seo-experts-bangladesh.svg',
    alt: '20 Best SEO Experts in Bangladesh - Practitioner Profiles & Audit Depth'
  },
  '/how-to-create-perfect-meta-titles-a-step-by-step-guide-for-seo/': {
    image: '/images/featured-meta-titles-guide.svg',
    alt: 'How to Create Perfect Meta Titles for SEO - SERP Width & CTR Blueprint'
  }
};

function enrichPageData(page: PageData): PageData {
  const norm = normalizePath(page.slug);
  const withSlash = norm.endsWith('/') ? norm : `${norm}/`;
  const blogMeta = BLOG_FEATURED_IMAGE_MAP[withSlash];

  if (blogMeta) {
    return {
      ...page,
      featuredImage: blogMeta.image,
      featuredImageAlt: blogMeta.alt,
    };
  }
  return page;
}

// Find a page by exact slug or normalized slug
export function getPageBySlug(slug: string): PageData | undefined {
  if (!slug) return undefined;
  
  // Clean query params or hash fragments if passed
  const cleanSlug = slug.split('?')[0].split('#')[0].trim();
  const norm = normalizePath(cleanSlug);
  const withSlash = norm.endsWith('/') ? norm : `${norm}/`;
  const withoutSlash = norm.endsWith('/') ? norm.slice(0, -1) : norm;

  // Variants to check
  const variants = [
    slug,
    cleanSlug,
    norm,
    withSlash,
    withoutSlash
  ];

  // If path starts with /tools/, also check the root-level version
  if (norm.startsWith('/tools/')) {
    const stripped = norm.replace(/^\/tools\//, '/');
    variants.push(stripped);
    variants.push(stripped.endsWith('/') ? stripped : `${stripped}/`);
    variants.push(stripped.endsWith('/') ? stripped.slice(0, -1) : stripped);
  } else {
    // If path is root-level, also check /tools/ version as alias
    const withTools = `/tools${norm.startsWith('/') ? norm : '/' + norm}`;
    variants.push(withTools);
    variants.push(withTools.endsWith('/') ? withTools : `${withTools}/`);
  }

  // Check known aliases
  if (
    withoutSlash === '/what-is-a-single-page-application-spa' ||
    withoutSlash === '/single-page-application' ||
    withoutSlash === '/spa'
  ) {
    variants.push('/what-is-a-single-page-application/');
    variants.push('/what-is-a-single-page-application');
  }

  // 1. Direct match across all registered pages
  const foundPage = allPages.find(p => variants.includes(p.slug));
  if (foundPage) {
    return enrichPageData(foundPage);
  }

  // 2. Check dedicated Tool Details registry
  for (const v of variants) {
    const tool = getToolByPath(v) || getToolBySlug(v);
    if (tool) {
      return convertToolToPageData(tool);
    }
  }

  return undefined;
}

// Get pages by category
export function getPagesByCategory(category: PageData['category']): PageData[] {
  return allPages.filter(p => p.category === category);
}

// Category display labels
export const categoryMeta: Record<PageData['category'], { label: string; count: number; description: string }> = {
  tools: {
    label: 'SEO Tools & Utilities',
    count: toolsPages.length,
    description: 'Free browser-based tools for snippet optimization, robots.txt, schema, and ROI forecasting.'
  },
  services: {
    label: 'SEO Services & Solutions',
    count: servicesPages.length,
    description: 'Technical audits, SaaS search acquisition, platform SEO, and local map dominance.'
  },
  rankings: {
    label: 'Industry Rankings & Lists',
    count: rankingsPages.length,
    description: 'Verified rankings of top SEO experts, consultants, and agencies.'
  },
  guides: {
    label: 'In-Depth Guides & Blog',
    count: guidesAndBlogPages.length,
    description: 'Tactical playbooks, algorithmic analyses, checklist audits, and strategic articles.'
  },
  'about-contact': {
    label: 'About & Inquiries',
    count: companyAndCategoriesPages.filter(p => p.category === 'about-contact').length,
    description: 'Direct contact channels, portfolio case studies, and consultation booking.'
  },
  categories: {
    label: 'Taxonomy Archives',
    count: companyAndCategoriesPages.filter(p => p.category === 'categories').length,
    description: 'Curated knowledge archives for learning SEO, agency trends, and practitioner profiles.'
  },
  legal: {
    label: 'Policies & Legal',
    count: legalPages.length,
    description: 'Privacy disclosures, terms of service, cookie handling, and tool data protections.'
  },
  downloads: {
    label: 'Downloads & Assets',
    count: companyAndCategoriesPages.filter(p => p.category === 'downloads').length,
    description: 'Verified enterprise performance case studies and PDF telemetry documents.'
  }
};
