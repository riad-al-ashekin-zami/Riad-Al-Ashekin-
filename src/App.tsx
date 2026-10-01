import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ecosystem } from './components/Ecosystem';
import { Portfolio } from './components/Portfolio';
import { MarketingStarts } from './components/MarketingStarts';
import { ProductToMarket } from './components/ProductToMarket';
import { MarketingFramework } from './components/MarketingFramework';
import { MeasurementOptimization } from './components/MeasurementOptimization';
import { ThingsIveBuilt } from './components/ThingsIveBuilt';
import { CoFoundedVentures } from './components/CoFoundedVentures';
import { ConsultingHomepage } from './components/consulting/ConsultingHomepage';
import { PageRenderer } from './components/PageRenderer';
import { SitemapPage } from './components/pages/SitemapPage';
import { Footer } from './components/Footer';
import { UrlSlugDirectoryModal } from './components/UrlSlugDirectoryModal';
import { getPageBySlug, normalizePath } from './data/pagesRegistry';

function updateHeadMetadata(meta: {
  title: string;
  description?: string;
  canonical: string;
  url: string;
}) {
  if (typeof document === 'undefined') return;

  document.title = meta.title;

  const setAttr = (selector: string, attr: string, val: string, createTag?: { name: string; attrName: string; attrVal: string }) => {
    let el = document.querySelector(selector);
    if (!el && createTag) {
      el = document.createElement(createTag.name);
      el.setAttribute(createTag.attrName, createTag.attrVal);
      document.head.appendChild(el);
    }
    if (el) {
      el.setAttribute(attr, val);
    }
  };

  if (meta.description) {
    setAttr('meta[name="description"]', 'content', meta.description, { name: 'meta', attrName: 'name', attrVal: 'description' });
    setAttr('meta[property="og:description"]', 'content', meta.description, { name: 'meta', attrName: 'property', attrVal: 'og:description' });
    setAttr('meta[name="twitter:description"]', 'content', meta.description, { name: 'meta', attrName: 'name', attrVal: 'twitter:description' });
  }

  setAttr('meta[property="og:title"]', 'content', meta.title, { name: 'meta', attrName: 'property', attrVal: 'og:title' });
  setAttr('meta[name="twitter:title"]', 'content', meta.title, { name: 'meta', attrName: 'name', attrVal: 'twitter:title' });
  setAttr('link[rel="canonical"]', 'href', meta.canonical, { name: 'link', attrName: 'rel', attrVal: 'canonical' });
  setAttr('meta[property="og:url"]', 'content', meta.url, { name: 'meta', attrName: 'property', attrVal: 'og:url' });
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  // Sync with browser history (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const cleanCurrentPath = (currentPath.split('?')[0] || '/').split('#')[0];
  const normalizedCurrent = normalizePath(cleanCurrentPath);
  const currentPage = normalizedCurrent === '/' ? null : (getPageBySlug(normalizedCurrent) || getPageBySlug(currentPath));

  // Update document title, canonical meta, and social tags on route change
  // If unknown route (404), immediately redirect to Homepage
  useEffect(() => {
    if (normalizedCurrent === '/' || normalizedCurrent === '/consulting-preview') {
      updateHeadMetadata({
        title: 'Riad Al Ashekin | Business & Technology Consultant & Strategist',
        description: 'Business & Technology Consultant and Strategist advising founders and executives on software architecture, commercial growth, AI automation, and search.',
        canonical: 'https://riadalashekin.com/',
        url: 'https://riadalashekin.com/'
      });
      return;
    }

    if (normalizedCurrent === '/sitemap' || normalizedCurrent === '/sitemap/') {
      updateHeadMetadata({
        title: 'HTML & XML Sitemap Indexation Directory | Riad Al Ashekin',
        description: 'Explore the complete sitemap and indexation catalog of 148+ published URLs, tactical guides, SEO utilities, and advisory services for riadalashekin.com.',
        canonical: 'https://riadalashekin.com/sitemap/',
        url: 'https://riadalashekin.com/sitemap/'
      });
      return;
    }

    if (normalizedCurrent === '/seo-legacy-homepage' || normalizedCurrent === '/seo-home') {
      updateHeadMetadata({
        title: 'Riad Al Ashekin | SEO Consultant & Strategist (Archive)',
        description: 'SEO Consultant & Strategist legacy ecosystem and portfolio archive.',
        canonical: 'https://riadalashekin.com/seo-home/',
        url: 'https://riadalashekin.com/seo-home/'
      });
      return;
    }

    if (currentPage) {
      const pageTitle = currentPage.title 
        ? (currentPage.title.includes('Riad Al Ashekin') ? currentPage.title : `${currentPage.title} | Riad Al Ashekin`)
        : `${currentPage.headline} | Riad Al Ashekin`;
      const pageDesc = currentPage.metaDescription || currentPage.subtitle || currentPage.intro || '';
      const canonical = currentPage.canonicalUrl || `https://riadalashekin.com${normalizedCurrent.endsWith('/') ? normalizedCurrent : normalizedCurrent + '/'}`;

      updateHeadMetadata({
        title: pageTitle,
        description: pageDesc,
        canonical: canonical,
        url: canonical
      });
    } else {
      // Automatic 404 Redirect to Homepage
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, '', '/');
        setCurrentPath('/');
      }
    }
  }, [currentPath, normalizedCurrent, currentPage]);

  const handleNavigate = (slug: string) => {
    const normalized = slug.startsWith('/') ? slug : `/${slug}`;
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentPath(normalized);
  };

  return (
    <div className="min-h-screen bg-brand-50 text-brand-950 selection:bg-brand-900 selection:text-white flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar 
        currentSlug={normalizedCurrent} 
        onNavigate={handleNavigate}
        onOpenDirectory={() => setIsDirectoryOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {normalizedCurrent === '/' ? (
          <ConsultingHomepage onNavigate={handleNavigate} />
        ) : normalizedCurrent === '/consulting-preview' ? (
          <ConsultingHomepage onNavigate={handleNavigate} isPreview />
        ) : normalizedCurrent === '/sitemap' || normalizedCurrent === '/sitemap/' ? (
          <SitemapPage onNavigate={handleNavigate} />
        ) : normalizedCurrent === '/seo-legacy-homepage' || normalizedCurrent === '/seo-home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <Ecosystem />
            <Portfolio onNavigate={handleNavigate} />
            <CoFoundedVentures />
            <MarketingStarts />
            <ProductToMarket />
            <MarketingFramework />
            <MeasurementOptimization />
            <ThingsIveBuilt onNavigate={handleNavigate} />
          </>
        ) : currentPage ? (
          <PageRenderer page={currentPage} onNavigate={handleNavigate} />
        ) : (
          /* Auto-fallback to Homepage on any 404 Error */
          <ConsultingHomepage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Comprehensive Site Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenDirectory={() => setIsDirectoryOpen(true)}
      />

      {/* 65 URL Slugs Search & Quick Jump Modal */}
      <UrlSlugDirectoryModal
        isOpen={isDirectoryOpen}
        onClose={() => setIsDirectoryOpen(false)}
        onSelectPage={handleNavigate}
        currentSlug={normalizedCurrent}
      />
    </div>
  );
}
