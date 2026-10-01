import { PageData } from '../types';
import { rankingsPages } from './rankingsPages';
import { guidesAndBlogPages } from './guidesAndBlogPages';
import { normalizePath } from './pagesRegistry';

/**
 * Featured custom cover images mapped to specific canonical slugs
 */
export const BLOG_FEATURED_IMAGES: Record<string, string> = {
  '/best-website-design-companies-in-bangladesh/': '/images/featured-web-design-companies-bangladesh.svg',
  '/best-software-companies-in-bangladesh/': '/images/featured-software-companies-bangladesh.svg',
  '/tarique-rahman/': '/images/featured-tarique-rahman.svg',
  '/seo-for-static-websites/': '/images/featured-spa-guide.svg',
  '/seo-for-single-page-applications/': '/images/featured-spa-seo-guide.svg',
  '/what-is-a-single-page-application/': '/images/featured-spa-guide.svg',
  '/what-is-a-single-page-application-spa/': '/images/featured-spa-guide.svg',
  '/single-page-application/': '/images/featured-spa-guide.svg',
  '/best-8-seo-experts-in-sylhet/': '/images/featured-sylhet-seo-experts.svg',
  '/top-10-seo-agencies-in-bangladesh/': '/images/featured-top-10-seo-agencies-bangladesh.svg',
  '/20-best-seo-experts-in-bangladesh/': '/images/featured-20-best-seo-experts-bangladesh.svg',
  '/how-to-create-perfect-meta-titles-a-step-by-step-guide-for-seo/': '/images/featured-meta-titles-guide.svg',
  '/top-10-saas-development-companies-usa/': '/images/saas-architecture-cover.svg'
};

/**
 * Initial core flagship slugs
 */
export const OFFICIAL_BLOG_SLUGS = [
  '/best-website-design-companies-in-bangladesh/',
  '/best-software-companies-in-bangladesh/',
  '/tarique-rahman/',
  '/seo-for-static-websites/',
  '/seo-for-single-page-applications/',
  '/what-is-a-single-page-application/',
  '/best-8-seo-experts-in-sylhet/',
  '/top-10-seo-agencies-in-bangladesh/',
  '/20-best-seo-experts-in-bangladesh/',
  '/how-to-create-perfect-meta-titles-a-step-by-step-guide-for-seo/',
  '/top-10-saas-development-companies-usa/',
  '/ultimate-guide-robots-txt/',
  '/an-in-depth-analysis-of-search-engine-optimization/',
  '/roi-of-seo-how-to-measure-calculate-maximize-seo-roi/',
  '/seo-checklist/',
  '/best-seo-experts-in-sri-lanka/'
] as const;

export type OfficialBlogSlug = typeof OFFICIAL_BLOG_SLUGS[number] | string;

/**
 * Returns ALL blog posts, editorial essays, and in-depth rankings dynamically.
 * Automatically picks up this article, all existing articles, and any future articles added to the system.
 */
export function getAllBlogPosts(): PageData[] {
  const allCandidates = [...rankingsPages, ...guidesAndBlogPages];
  const seenSlugs = new Set<string>();
  const posts: PageData[] = [];

  for (const page of allCandidates) {
    const norm = normalizePath(page.slug);
    const withSlash = norm.endsWith('/') ? norm : `${norm}/`;

    // Skip the /blog/ index itself
    if (withSlash === '/blog/') continue;

    if (seenSlugs.has(withSlash)) continue;
    seenSlugs.add(withSlash);

    const featuredImage = BLOG_FEATURED_IMAGES[withSlash] || page.featuredImage;

    posts.push({
      ...page,
      featuredImage: featuredImage || page.featuredImage,
      category: page.category || 'guides'
    });
  }

  return posts;
}

/**
 * Alias for backward compatibility with existing components
 */
export function getOfficialBlogPosts(): PageData[] {
  return getAllBlogPosts();
}

/**
 * Checks if a given slug is a blog post / editorial guide.
 * Automatically returns true for any article in guidesAndBlogPages or rankingsPages,
 * or any page with markdown content, ensuring dynamic routing to BlogPostLayout.
 */
export function isBlogPost(slug: string): boolean {
  if (!slug) return false;
  const norm = normalizePath(slug);
  const withSlash = norm.endsWith('/') ? norm : `${norm}/`;

  // /blog/ is the directory hub itself, not an article
  if (withSlash === '/blog/') return false;

  const allPosts = getAllBlogPosts();
  return allPosts.some(p => {
    const pNorm = normalizePath(p.slug);
    const pWithSlash = pNorm.endsWith('/') ? pNorm : `${pNorm}/`;
    return pWithSlash === withSlash;
  });
}

/**
 * Helper to get related blog posts excluding the currently viewed slug
 */
export function getRelatedBlogPosts(currentSlug: string): PageData[] {
  const normCurrent = normalizePath(currentSlug);
  const withSlash = normCurrent.endsWith('/') ? normCurrent : `${normCurrent}/`;
  const allPosts = getAllBlogPosts();
  return allPosts.filter(p => {
    const pNorm = normalizePath(p.slug);
    const pWithSlash = pNorm.endsWith('/') ? pNorm : `${pNorm}/`;
    return pWithSlash !== withSlash;
  });
}
