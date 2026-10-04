import React, { useState, useEffect, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { ConsultingHomepage } from './components/consulting/ConsultingHomepage';
import { Footer } from './components/Footer';
import { normalizePath } from './utils/pathUtils';
import { updateHeadMetadata } from './utils/seoUtils';

// Lazy-load non-homepage components so the initial page bundle remains ultra-lightweight
const PageRenderer = React.lazy(() => import('./components/PageRenderer').then(m => ({ default: m.PageRenderer })));
const SitemapPage = React.lazy(() => import('./components/pages/SitemapPage').then(m => ({ default: m.SitemapPage })));
const LegacyHomepage = React.lazy(() => import('./components/LegacyHomepage'));
const UrlSlugDirectoryModal = React.lazy(() => import('./components/UrlSlugDirectoryModal').then(m => ({ default: m.UrlSlugDirectoryModal })));

const RouteLoadingSpinner = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-accent-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

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

  // Update document title, canonical meta, and social tags on route change
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
  }, [currentPath, normalizedCurrent]);

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
        ) : (
          <Suspense fallback={<RouteLoadingSpinner />}>
            {normalizedCurrent === '/sitemap' || normalizedCurrent === '/sitemap/' ? (
              <SitemapPage onNavigate={handleNavigate} />
            ) : normalizedCurrent === '/seo-legacy-homepage' || normalizedCurrent === '/seo-home' ? (
              <LegacyHomepage onNavigate={handleNavigate} />
            ) : (
              <PageRenderer slug={normalizedCurrent} onNavigate={handleNavigate} />
            )}
          </Suspense>
        )}
      </main>

      {/* Comprehensive Site Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenDirectory={() => setIsDirectoryOpen(true)}
      />

      {/* 65 URL Slugs Search & Quick Jump Modal (Only loaded when opened) */}
      {isDirectoryOpen && (
        <Suspense fallback={null}>
          <UrlSlugDirectoryModal
            isOpen={isDirectoryOpen}
            onClose={() => setIsDirectoryOpen(false)}
            onSelectPage={handleNavigate}
            currentSlug={normalizedCurrent}
          />
        </Suspense>
      )}
    </div>
  );
}
