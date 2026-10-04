import React, { Suspense, useEffect } from 'react';
import { PageData } from '../types';
import { getToolById, getToolByPath, getToolBySlug } from '../data/toolDetails';
import { isBlogPost } from '../data/blogConfig';
import { getPageBySlug } from '../data/pagesRegistry';
import { ConsultingHomepage } from './consulting/ConsultingHomepage';
import { updateHeadMetadata } from '../utils/seoUtils';

// Code-split each dedicated page view for maximum performance and minimum initial bundle size
const ServicesPage = React.lazy(() => import('./services/ServicesPage').then(m => ({ default: m.ServicesPage })));
const PricingPage = React.lazy(() => import('./pricing/PricingPage').then(m => ({ default: m.PricingPage })));
const ContactPage = React.lazy(() => import('./tools/ContactPage').then(m => ({ default: m.ContactPage })));
const BlogIndexHub = React.lazy(() => import('./blog/BlogIndexHub').then(m => ({ default: m.BlogIndexHub })));
const AboutMePage = React.lazy(() => import('./about/AboutMePage').then(m => ({ default: m.AboutMePage })));
const SeoToolsHub = React.lazy(() => import('./tools/SeoToolsHub').then(m => ({ default: m.SeoToolsHub })));
const ChromeExtensionPage = React.lazy(() => import('./tools/ChromeExtensionPage').then(m => ({ default: m.ChromeExtensionPage })));
const DedicatedToolPage = React.lazy(() => import('./tools/DedicatedToolPage').then(m => ({ default: m.DedicatedToolPage })));
const BlogPostLayout = React.lazy(() => import('./blog/BlogPostLayout').then(m => ({ default: m.BlogPostLayout })));
const StandardPageLayout = React.lazy(() => import('./pages/StandardPageLayout').then(m => ({ default: m.StandardPageLayout })));

interface Props {
  page?: PageData;
  slug?: string;
  onNavigate: (slug: string) => void;
}

const PageLoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-7 h-7 border-2 border-accent-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

export function PageRenderer({ page: propPage, slug, onNavigate }: Props) {
  const page = propPage || (slug ? getPageBySlug(slug) : null);

  useEffect(() => {
    if (page) {
      const pageTitle = page.title 
        ? (page.title.includes('Riad Al Ashekin') ? page.title : `${page.title} | Riad Al Ashekin`)
        : `${page.headline} | Riad Al Ashekin`;
      const pageDesc = page.metaDescription || page.subtitle || page.intro || '';
      const canonical = page.canonicalUrl || `https://riadalashekin.com${page.slug.endsWith('/') ? page.slug : page.slug + '/'}`;

      updateHeadMetadata({
        title: pageTitle,
        description: pageDesc,
        canonical: canonical,
        url: canonical
      });
    }
  }, [page]);

  if (!page) {
    return <ConsultingHomepage onNavigate={onNavigate} />;
  }

  return (
    <Suspense fallback={<PageLoadingFallback />}>
      {(() => {
        // 1. Dedicated Services & Advisory Page
        if (page.slug === '/services/' || page.slug === '/services') {
          return <ServicesPage onNavigate={onNavigate} />;
        }

        // 2. Dedicated Pricing & Retainers Page
        if (
          page.slug === '/seo-pricing/' || 
          page.slug === '/seo-pricing' || 
          page.slug === '/pricing/' || 
          page.slug === '/pricing'
        ) {
          return <PricingPage onNavigate={onNavigate} />;
        }

        // 3. Dedicated Contact & Inquiry Page
        if (page.slug === '/contact/' || page.slug === '/contact') {
          return <ContactPage onNavigate={onNavigate} />;
        }

        // 4. Dedicated Blog Index / Editorial Hub
        if (page.slug === '/blog/' || page.slug === '/blog') {
          return <BlogIndexHub onNavigate={onNavigate} />;
        }

        // 5. Dedicated About Me & Executive Profile Page
        if (
          page.slug === '/about-me/' || 
          page.slug === '/about-me' || 
          page.slug === '/about/' || 
          page.slug === '/about'
        ) {
          return <AboutMePage onNavigate={onNavigate} />;
        }

        // 6. Dedicated SEO Tools Hub
        if (page.slug === '/seo-tools/' || page.slug === '/seo-tools') {
          return <SeoToolsHub onNavigate={onNavigate} />;
        }

        // 7. Dedicated Meta Data Checker Chrome Extension Page
        if (
          page.slug === '/meta-data-checker-chrome-extension/' || 
          page.slug === '/meta-data-checker-chrome-extension'
        ) {
          return <ChromeExtensionPage onNavigate={onNavigate} />;
        }

        // 8. Dedicated Interactive SEO Tool with specialized visual utility
        const toolItem = page.toolDetailId 
          ? getToolById(page.toolDetailId) 
          : (getToolByPath(page.slug) || getToolBySlug(page.slug));

        if (toolItem) {
          return <DedicatedToolPage tool={toolItem} onNavigate={onNavigate} />;
        }

        // 9. Editorial guides and official blog posts
        if (isBlogPost(page.slug)) {
          return <BlogPostLayout page={page} onNavigate={onNavigate} />;
        }

        // 10. Standard / Strategic website pages
        return <StandardPageLayout page={page} onNavigate={onNavigate} />;
      })()}
    </Suspense>
  );
}
