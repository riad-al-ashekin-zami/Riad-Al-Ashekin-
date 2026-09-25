import React from 'react';
import { PageData } from '../types';
import { BlogPostLayout } from './blog/BlogPostLayout';
import { BlogIndexHub } from './blog/BlogIndexHub';
import { ServicesPage } from './services/ServicesPage';
import { PricingPage } from './pricing/PricingPage';
import { AboutMePage } from './about/AboutMePage';
import { SeoToolsHub } from './tools/SeoToolsHub';
import { ChromeExtensionPage } from './tools/ChromeExtensionPage';
import { ContactPage } from './tools/ContactPage';
import { DedicatedToolPage } from './tools/DedicatedToolPage';
import { StandardPageLayout } from './pages/StandardPageLayout';
import { getToolById, getToolByPath, getToolBySlug } from '../data/toolDetails';
import { isBlogPost } from '../data/blogConfig';

interface Props {
  page: PageData;
  onNavigate: (slug: string) => void;
}

export function PageRenderer({ page, onNavigate }: Props) {
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

  // 4. Dedicated Blog Index / Editorial Hub (shows only the 4 official blog posts)
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

  // 9. If and ONLY IF this is one of the 4 official blog posts, render the dedicated BlogPostLayout:
  // - https://riadalashekin.com/best-8-seo-experts-in-sylhet/
  // - https://riadalashekin.com/top-10-seo-agencies-in-bangladesh/
  // - https://riadalashekin.com/20-best-seo-experts-in-bangladesh/
  // - https://riadalashekin.com/how-to-create-perfect-meta-titles-a-step-by-step-guide-for-seo/
  if (isBlogPost(page.slug)) {
    return <BlogPostLayout page={page} onNavigate={onNavigate} />;
  }

  // 10. ALL OTHER URLs are standard/executive website PAGES:
  // Technical documentation, checklists, audits, market analysis, resource blueprints, legal disclosures, etc.
  return <StandardPageLayout page={page} onNavigate={onNavigate} />;
}
