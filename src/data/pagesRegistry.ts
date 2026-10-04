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

import { normalizePath } from '../utils/pathUtils';
export { normalizePath };

// Dedicated featured image lookup for the 4 official blog posts
const BLOG_FEATURED_IMAGE_MAP: Record<string, { image: string; alt: string }> = {
  '/best-erp-software-in-bangladesh/': {
    image: '/images/featured-erp-software-bangladesh.svg',
    alt: '10 Best ERP Software in Bangladesh (2026)'
  },
  '/10-best-erp-software-in-bangladesh/': {
    image: '/images/featured-erp-software-bangladesh.svg',
    alt: '10 Best ERP Software in Bangladesh (2026)'
  },
  '/best-pos-software-in-bangladesh/': {
    image: '/images/featured-pos-software-bangladesh.svg',
    alt: '10 Best POS Software in Bangladesh (2026)'
  },
  '/10-best-pos-software-in-bangladesh/': {
    image: '/images/featured-pos-software-bangladesh.svg',
    alt: '10 Best POS Software in Bangladesh (2026)'
  },
  '/best-hr-software-in-bangladesh/': {
    image: '/images/featured-hr-software-bangladesh.svg',
    alt: '10 Best HR Software in Bangladesh (2026)'
  },
  '/10-best-hr-software-in-bangladesh/': {
    image: '/images/featured-hr-software-bangladesh.svg',
    alt: '10 Best HR Software in Bangladesh (2026)'
  },
  '/best-pharmacy-management-software-in-bangladesh/': {
    image: '/images/featured-pharmacy-management-software-bangladesh.svg',
    alt: '10 Best Pharmacy Management Software in Bangladesh (2026)'
  },
  '/10-best-pharmacy-management-software-in-bangladesh/': {
    image: '/images/featured-pharmacy-management-software-bangladesh.svg',
    alt: '10 Best Pharmacy Management Software in Bangladesh (2026)'
  },
  '/best-hospital-management-software-in-bangladesh/': {
    image: '/images/featured-hospital-management-software-bangladesh.svg',
    alt: '10 Best Hospital Management Software in Bangladesh (2026)'
  },
  '/10-best-hospital-management-software-in-bangladesh/': {
    image: '/images/featured-hospital-management-software-bangladesh.svg',
    alt: '10 Best Hospital Management Software in Bangladesh (2026)'
  },
  '/best-school-management-software-in-bangladesh/': {
    image: '/images/featured-school-management-software-bangladesh.svg',
    alt: '10 Best School Management Software in Bangladesh (2026)'
  },
  '/10-best-school-management-software-in-bangladesh/': {
    image: '/images/featured-school-management-software-bangladesh.svg',
    alt: '10 Best School Management Software in Bangladesh (2026)'
  },
  '/best-inventory-management-software-in-bangladesh/': {
    image: '/images/featured-inventory-management-software-bangladesh.svg',
    alt: '10 Best Inventory Management Software in Bangladesh (2026)'
  },
  '/10-best-inventory-management-software-in-bangladesh/': {
    image: '/images/featured-inventory-management-software-bangladesh.svg',
    alt: '10 Best Inventory Management Software in Bangladesh (2026)'
  },
  '/best-hotel-management-software-in-bangladesh/': {
    image: '/images/featured-hotel-management-software-bangladesh.svg',
    alt: '10 Best Hotel Management Software in Bangladesh (2026)'
  },
  '/10-best-hotel-management-software-in-bangladesh/': {
    image: '/images/featured-hotel-management-software-bangladesh.svg',
    alt: '10 Best Hotel Management Software in Bangladesh (2026)'
  },
  '/best-digital-marketing-agencies-in-bangladesh/': {
    image: '/images/featured-digital-marketing-agencies-bangladesh.svg',
    alt: 'Best Digital Marketing Agencies in Bangladesh: How to Choose the Right Agency'
  },
  '/best-advertising-agencies-in-bangladesh/': {
    image: '/images/featured-advertising-agencies-bangladesh.svg',
    alt: 'Best Advertising Agencies in Bangladesh: How to Choose the Right Advertising Partner'
  },
  '/multinational-companies-in-bangladesh/': {
    image: '/images/featured-multinational-companies-bangladesh.svg',
    alt: 'Multinational Companies in Bangladesh: Top MNCs, Industries, Jobs and Career Guide'
  },
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
    image: '/images/featured-static-website-seo.svg',
    alt: 'SEO for Static Websites: How to Optimize a Static Site for Search'
  },
  '/seo-for-single-page-applications/': {
    image: '/images/featured-spa-seo-guide.svg',
    alt: 'SEO for Single Page Applications: How to Optimize SPAs for Google'
  },
  '/what-is-a-single-page-application/': {
    image: '/images/featured-single-page-application-guide.svg',
    alt: 'What Is a Single Page Application (SPA)? Complete Guide to SPA Apps, JavaScript, Architecture, SEO & Examples'
  },
  '/what-is-a-single-page-application-spa/': {
    image: '/images/featured-single-page-application-guide.svg',
    alt: 'What Is a Single Page Application (SPA)? Complete Guide to SPA Apps, JavaScript, Architecture, SEO & Examples'
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

  if (
    withoutSlash === '/10-best-erp-software-in-bangladesh' ||
    withoutSlash === '/erp-software-in-bangladesh'
  ) {
    variants.push('/best-erp-software-in-bangladesh/');
    variants.push('/best-erp-software-in-bangladesh');
  }

  if (
    withoutSlash === '/10-best-pos-software-in-bangladesh' ||
    withoutSlash === '/pos-software-in-bangladesh'
  ) {
    variants.push('/best-pos-software-in-bangladesh/');
    variants.push('/best-pos-software-in-bangladesh');
  }

  if (
    withoutSlash === '/10-best-hr-software-in-bangladesh' ||
    withoutSlash === '/hr-software-in-bangladesh'
  ) {
    variants.push('/best-hr-software-in-bangladesh/');
    variants.push('/best-hr-software-in-bangladesh');
  }

  if (
    withoutSlash === '/10-best-pharmacy-management-software-in-bangladesh' ||
    withoutSlash === '/pharmacy-management-software-in-bangladesh'
  ) {
    variants.push('/best-pharmacy-management-software-in-bangladesh/');
    variants.push('/best-pharmacy-management-software-in-bangladesh');
  }

  if (
    withoutSlash === '/10-best-hospital-management-software-in-bangladesh' ||
    withoutSlash === '/hospital-management-software-in-bangladesh'
  ) {
    variants.push('/best-hospital-management-software-in-bangladesh/');
    variants.push('/best-hospital-management-software-in-bangladesh');
  }

  if (
    withoutSlash === '/10-best-hotel-management-software-in-bangladesh' ||
    withoutSlash === '/hotel-management-software-in-bangladesh'
  ) {
    variants.push('/best-hotel-management-software-in-bangladesh/');
    variants.push('/best-hotel-management-software-in-bangladesh');
  }

  if (
    withoutSlash === '/10-best-school-management-software-in-bangladesh' ||
    withoutSlash === '/school-management-software-in-bangladesh'
  ) {
    variants.push('/best-school-management-software-in-bangladesh/');
    variants.push('/best-school-management-software-in-bangladesh');
  }

  if (
    withoutSlash === '/10-best-inventory-management-software-in-bangladesh' ||
    withoutSlash === '/inventory-management-software-in-bangladesh'
  ) {
    variants.push('/best-inventory-management-software-in-bangladesh/');
    variants.push('/best-inventory-management-software-in-bangladesh');
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
