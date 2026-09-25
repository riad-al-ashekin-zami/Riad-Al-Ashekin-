import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './common/BrandLogo';

interface Props {
  currentSlug: string;
  onNavigate: (slug: string) => void;
  onOpenDirectory?: () => void;
}

export function Navbar({ currentSlug, onNavigate, onOpenDirectory }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (slug: string) => {
    onNavigate(slug);
    setIsOpen(false);
  };

  const navLinks: Array<{ label: string; slug: string; action?: () => void }> = [
    { label: 'Home', slug: '/' },
    { label: 'About', slug: '/about-me/' },
    { label: 'Services', slug: '/services/' },
    { label: 'Pricing', slug: '/seo-pricing/' },
    { label: 'Tools', slug: '/seo-tools/' },
    { label: 'Blogs', slug: '/blog/' },
    { label: 'Contact', slug: '/contact/' },
  ];

  const isLinkActive = (slug: string) => {
    if (slug === '/' && currentSlug === '/') return true;
    if (slug === '/about-me/' && currentSlug.startsWith('/about')) return true;
    if (slug === '/services/' && currentSlug.startsWith('/services')) return true;
    if (slug === '/seo-pricing/' && currentSlug.startsWith('/seo-pricing')) return true;
    if (slug === '/seo-tools/' && (currentSlug.startsWith('/seo-tools') || currentSlug.startsWith('/tools/'))) return true;
    if (slug === '/blog/' && (currentSlug.startsWith('/blog') || currentSlug.includes('guide') || currentSlug.includes('saas') || currentSlug.includes('checklist') || currentSlug.includes('ranking') || currentSlug.includes('best-8'))) return true;
    if (slug === '/contact/' && currentSlug.startsWith('/contact')) return true;
    if (slug !== '/' && currentSlug.startsWith(slug)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#150d28]/95 backdrop-blur-xl border-b border-brand-800/80 shadow-2xl py-2.5' 
          : 'bg-[#150d28]/85 backdrop-blur-md border-b border-brand-900/90 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          
          {/* Logo / Personal Brandmark */}
          <button 
            onClick={() => handleNavClick('/')}
            className="text-left flex items-center gap-3 group cursor-pointer"
          >
            {/* Minimalist Monogram / Logo Mark with Royal Brand Hue */}
            <BrandLogo />

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-extrabold text-white tracking-tight group-hover:text-brand-200 transition-colors">
                  RIAD AL ASHEKIN
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] font-mono font-medium text-brand-300 hidden sm:block">
                Business &amp; Tech Consultant
              </span>
            </div>
          </button>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1 rounded-full bg-brand-900/60 border border-brand-800/80 backdrop-blur-md">
            {navLinks.map((item) => {
              const active = isLinkActive(item.slug);
              return (
                <button
                  key={item.label}
                  onClick={item.action ? item.action : () => handleNavClick(item.slug)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    active 
                      ? 'text-white font-semibold bg-brand-800/90 shadow-xs' 
                      : 'text-brand-300 hover:text-white hover:bg-brand-800/40'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-accent-400 via-accent-300 to-accent-400 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Contact CTA Button */}
            <button 
              onClick={() => handleNavClick('/contact/')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-all duration-200 shadow-[0_0_20px_rgba(120,57,238,0.35)] hover:shadow-[0_0_28px_rgba(120,57,238,0.5)] cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-accent-100" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              className="p-2 text-brand-200 hover:text-white rounded-lg bg-brand-900 border border-brand-800 transition-colors cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Smooth Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-brand-800 bg-[#150d28]/98 backdrop-blur-2xl px-5 py-6 space-y-4 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-brand-200">
              <button 
                onClick={() => handleNavClick('/')} 
                className="text-left p-3 rounded-xl bg-brand-900/90 border border-brand-800 text-white font-bold flex items-center justify-between"
              >
                <span>Home</span>
                <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
              </button>
              <button 
                onClick={() => handleNavClick('/about-me/')} 
                className="text-left p-3 rounded-xl hover:bg-brand-900/60 flex items-center justify-between"
              >
                <span>About</span>
                <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
              </button>
              <button 
                onClick={() => handleNavClick('/services/')} 
                className="text-left p-3 rounded-xl hover:bg-brand-900/60 flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
              </button>
              <button 
                onClick={() => handleNavClick('/seo-pricing/')} 
                className="text-left p-3 rounded-xl hover:bg-brand-900/60 flex items-center justify-between"
              >
                <span>Pricing</span>
                <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
              </button>
              <button 
                onClick={() => handleNavClick('/seo-tools/')} 
                className="text-left p-3 rounded-xl hover:bg-brand-900/60 flex items-center justify-between"
              >
                <span>Tools</span>
                <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
              </button>
              <button 
                onClick={() => handleNavClick('/blog/')} 
                className="text-left p-3 rounded-xl hover:bg-brand-900/60 flex items-center justify-between"
              >
                <span>Blogs</span>
                <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
              </button>
              <button 
                onClick={() => handleNavClick('/contact/')} 
                className="text-left p-3 rounded-xl hover:bg-brand-900/60 flex items-center justify-between col-span-2"
              >
                <span>Contact</span>
                <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
              </button>
            </div>

            <div className="pt-3 border-t border-brand-800 flex flex-col gap-2.5">
              <button 
                onClick={() => handleNavClick('/contact/')}
                className="w-full py-3 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-xl text-xs text-center flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
