import { PageData } from '../types';
import { rankingsPages } from './rankingsPages';
import { guidesAndBlogPages } from './guidesAndBlogPages';
import { normalizePath } from './pagesRegistry';

/**
 * The ONLY 4 official blog posts on the site as designated by the user:
 * 1. https://riadalashekin.com/best-8-seo-experts-in-sylhet/
 * 2. https://riadalashekin.com/top-10-seo-agencies-in-bangladesh/
 * 3. https://riadalashekin.com/20-best-seo-experts-in-bangladesh/
 * 4. https://riadalashekin.com/how-to-create-perfect-meta-titles-a-step-by-step-guide-for-seo/
 *
 * ALL other URLs are standard/executive static and content PAGES.
 */
export const OFFICIAL_BLOG_SLUGS = [
  '/best-8-seo-experts-in-sylhet/',
  '/top-10-seo-agencies-in-bangladesh/',
  '/20-best-seo-experts-in-bangladesh/',
  '/how-to-create-perfect-meta-titles-a-step-by-step-guide-for-seo/'
] as const;

export type OfficialBlogSlug = typeof OFFICIAL_BLOG_SLUGS[number];

/**
 * Dedicated custom featured images for the 4 official blog posts
 */
export const BLOG_FEATURED_IMAGES: Record<string, string> = {
  '/best-8-seo-experts-in-sylhet/': '/images/featured-sylhet-seo-experts.svg',
  '/top-10-seo-agencies-in-bangladesh/': '/images/featured-top-10-seo-agencies-bangladesh.svg',
  '/20-best-seo-experts-in-bangladesh/': '/images/featured-20-best-seo-experts-bangladesh.svg',
  '/how-to-create-perfect-meta-titles-a-step-by-step-guide-for-seo/': '/images/featured-meta-titles-guide.svg'
};

/**
 * Checks if a given slug is one of the 4 official blog posts
 */
export function isBlogPost(slug: string): boolean {
  if (!slug) return false;
  const norm = normalizePath(slug);
  const withSlash = norm.endsWith('/') ? norm : `${norm}/`;
  return (OFFICIAL_BLOG_SLUGS as readonly string[]).includes(withSlash);
}

/**
 * Returns the exact 4 official blog posts as PageData objects
 */
export function getOfficialBlogPosts(): PageData[] {
  const allCandidates = [...rankingsPages, ...guidesAndBlogPages];
  const posts: PageData[] = [];

  for (const officialSlug of OFFICIAL_BLOG_SLUGS) {
    const found = allCandidates.find(p => {
      const pNorm = normalizePath(p.slug);
      const targetNorm = normalizePath(officialSlug);
      return pNorm === targetNorm || p.slug === officialSlug;
    });

    if (found) {
      const featuredImage = BLOG_FEATURED_IMAGES[officialSlug] || found.featuredImage;
      // Ensure category is explicitly marked as blog with high-fidelity featured image
      posts.push({
        ...found,
        featuredImage,
        category: 'guides' // Keep valid PageData category type
      });
    }
  }

  return posts;
}

/**
 * Helper to get the other 3 official blog posts (for Related Posts on a blog page)
 */
export function getRelatedBlogPosts(currentSlug: string): PageData[] {
  const normCurrent = normalizePath(currentSlug);
  const allPosts = getOfficialBlogPosts();
  return allPosts.filter(p => normalizePath(p.slug) !== normCurrent);
}
