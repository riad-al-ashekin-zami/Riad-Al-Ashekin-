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
import { Footer } from './components/Footer';
import { UrlSlugDirectoryModal } from './components/UrlSlugDirectoryModal';
import { getPageBySlug, normalizePath } from './data/pagesRegistry';

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

  // Update document title and canonical meta on route change
  useEffect(() => {
    const norm = normalizePath(currentPath);
    if (norm === '/' || norm === '/consulting-preview') {
      document.title = 'Riad Al Ashekin | Business & Technology Consultant & Strategist';
    } else if (norm === '/seo-legacy-homepage' || norm === '/seo-home') {
      document.title = 'Riad Al Ashekin | SEO Consultant & Strategist (Archive)';
    } else {
      const page = getPageBySlug(currentPath);
      if (page) {
        document.title = page.title ? `${page.title} | Riad Al Ashekin` : `${page.headline} | Riad Al Ashekin`;
        // Update meta description
        const metaDescEl = document.querySelector('meta[name="description"]');
        if (metaDescEl && page.metaDescription) {
          metaDescEl.setAttribute('content', page.metaDescription);
        }
      } else {
        document.title = 'Page Not Found | Riad Al Ashekin';
      }
    }
  }, [currentPath]);

  const handleNavigate = (slug: string) => {
    const normalized = slug.startsWith('/') ? slug : `/${slug}`;
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentPath(normalized);
  };

  const normalizedCurrent = normalizePath(currentPath);
  const currentPage = normalizedCurrent === '/' ? null : getPageBySlug(currentPath);

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
          /* 404 Not Found Page */
          <div className="pt-36 pb-24 px-4 max-w-2xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-700 bg-accent-50 px-3 py-1 rounded-full border border-accent-200">
              404 • Page Not Found
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-950">
              The requested slug could not be located.
            </h1>
            <p className="text-sm text-brand-600 font-mono bg-brand-100 p-2.5 rounded-xl">
              Path: {currentPath}
            </p>
            <div className="flex justify-center gap-3 pt-4">
              <button
                onClick={() => handleNavigate('/')}
                className="px-6 py-2.5 bg-brand-950 text-white rounded-xl text-xs font-bold hover:bg-brand-800 transition-colors"
              >
                Return to Homepage
              </button>
              <button
                onClick={() => setIsDirectoryOpen(true)}
                className="px-6 py-2.5 bg-white border border-brand-200 text-brand-900 rounded-xl text-xs font-bold hover:bg-brand-50 transition-colors"
              >
                Browse All 65 Slugs
              </button>
            </div>
          </div>
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
