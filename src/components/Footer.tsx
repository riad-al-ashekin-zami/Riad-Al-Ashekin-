import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BrandLogo } from './common/BrandLogo';

interface Props {
  onNavigate: (slug: string) => void;
  onOpenDirectory?: () => void;
}

export function Footer({ onNavigate }: Props) {
  return (
    <footer className="bg-brand-950 text-white pt-16 pb-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-12">
        {/* Top brand row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-brand-900">
          <div className="flex items-start gap-3.5">
            <BrandLogo size="lg" />
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">
                RIAD AL ASHEKIN
              </span>
              <p className="text-xs text-brand-400 mt-1 max-w-md">
                Business &amp; Technology Consultant &amp; SEO Strategist. Advising founders and leadership teams on software architecture, commercial strategy, AI automation, and organic search growth.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('/contact/')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-lg cursor-pointer group"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs">
          {/* Col 1: Popular SEO Tools */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-200 uppercase tracking-wider text-[11px]">Free SEO Tools</h4>
            <ul className="space-y-2 text-brand-400">
              <li>
                <button onClick={() => onNavigate('/meta-title-description-checker/')} className="hover:text-white transition-colors text-left">
                  Meta Title & SERP Checker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/character-counter/')} className="hover:text-white transition-colors text-left">
                  Character & Word Counter
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/comma-separator/')} className="hover:text-white transition-colors text-left">
                  List to Comma Separator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/robots-txt-tester/')} className="hover:text-white transition-colors text-left">
                  Robots.txt Tester
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/free-robots-txt-generator/')} className="hover:text-white transition-colors text-left">
                  Robots.txt Generator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/free-llms-txt-generator/')} className="hover:text-white transition-colors text-left">
                  /llms.txt Generator (AI)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/seo-roi-calculator/')} className="hover:text-white transition-colors text-left">
                  SEO ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/seo-tools/')} className="text-accent-400 hover:underline transition-colors text-left font-semibold">
                  View All Tools →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-200 uppercase tracking-wider text-[11px]">Consulting & Services</h4>
            <ul className="space-y-2 text-brand-400">
              <li>
                <button onClick={() => onNavigate('/services/')} className="hover:text-white transition-colors text-left">
                  All SEO Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/seo-pricing/')} className="hover:text-white transition-colors text-left">
                  SEO Pricing Retainers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/local-seo-services/')} className="hover:text-white transition-colors text-left">
                  Local SEO Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/saas-seo-services/')} className="hover:text-white transition-colors text-left">
                  B2B SaaS SEO Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/laravel-website-seo-services/')} className="hover:text-white transition-colors text-left">
                  Laravel Website SEO
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/seo-audit-services/')} className="hover:text-white transition-colors text-left">
                  Technical Site Audits
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/white-label-seo-services/')} className="hover:text-white transition-colors text-left">
                  White Label Agency SEO
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Blog Posts */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-200 uppercase tracking-wider text-[11px]">Official Blog Posts</h4>
            <ul className="space-y-2 text-brand-400">
              <li>
                <button onClick={() => onNavigate('/best-8-seo-experts-in-sylhet/')} className="hover:text-white transition-colors text-left">
                  Top 8 SEO Experts in Sylhet
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/20-best-seo-experts-in-bangladesh/')} className="hover:text-white transition-colors text-left">
                  20 Best Experts in Bangladesh
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/top-10-seo-agencies-in-bangladesh/')} className="hover:text-white transition-colors text-left">
                  Top 10 Agencies in Bangladesh
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/how-to-create-perfect-meta-titles-a-step-by-step-guide-for-seo/')} className="hover:text-white transition-colors text-left">
                  Crafting Perfect Meta Titles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/blog/')} className="hover:text-white text-accent-300 font-semibold transition-colors text-left flex items-center gap-1">
                  <span>Browse All 4 Blog Posts</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Strategic Pages & Guides */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-200 uppercase tracking-wider text-[11px]">Architecture &amp; Pages</h4>
            <ul className="space-y-2 text-brand-400">
              <li>
                <button onClick={() => onNavigate('/ultimate-guide-robots-txt/')} className="hover:text-white transition-colors text-left">
                  Robots.txt Architecture Page
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/an-in-depth-analysis-of-search-engine-optimization/')} className="hover:text-white transition-colors text-left">
                  Search Analysis Whitepaper
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/roi-of-seo-how-to-measure-calculate-maximize-seo-roi/')} className="hover:text-white transition-colors text-left">
                  Measuring ROI of SEO Framework
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/seo-checklist/')} className="hover:text-white transition-colors text-left">
                  45-Point SEO Audit Checklist
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/top-10-saas-development-companies-usa/')} className="hover:text-white transition-colors text-left">
                  Top 10 SaaS Companies USA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/best-seo-experts-in-sri-lanka/')} className="hover:text-white transition-colors text-left">
                  Best Experts in Sri Lanka
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <h4 className="font-bold text-brand-200 uppercase tracking-wider text-[11px]">Company & Legal</h4>
            <ul className="space-y-2 text-brand-400">
              <li>
                <button onClick={() => onNavigate('/about-me/')} className="hover:text-white transition-colors text-left">
                  About Riad Al Ashekin
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/seo-portfolio/')} className="hover:text-white transition-colors text-left">
                  Portfolio & Results
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact/')} className="hover:text-white transition-colors text-left">
                  Contact / Inquiries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/privacy-policy/')} className="hover:text-white transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms-of-service/')} className="hover:text-white transition-colors text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/cookie-policy/')} className="hover:text-white transition-colors text-left">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/refund-policy/')} className="hover:text-white transition-colors text-left">
                  Refund Policy
                </button>
              </li>
              <li className="pt-2 border-t border-brand-900">
                <button onClick={() => onNavigate('/sitemap/')} className="text-accent-400 hover:text-accent-300 font-semibold transition-colors text-left flex items-center gap-1">
                  <span>HTML Sitemap Directory</span>
                  <span>→</span>
                </button>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-left block text-brand-400">
                  XML Sitemap (Index)
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-left block text-brand-400">
                  Robots.txt Directive
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-500">
          <p>© {new Date().getFullYear()} Riad Al Ashekin (riadalashekin.com). All rights reserved.</p>
          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={() => onNavigate('/sitemap/')} className="hover:text-brand-300 font-medium text-brand-400">
              Sitemap
            </button>
            <span>•</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-brand-300 font-medium text-brand-400">
              XML
            </a>
            <span>•</span>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-brand-300 font-medium text-brand-400">
              Robots.txt
            </a>
            <span>•</span>
            <button onClick={() => onNavigate('/wp-content/uploads/2025/12/Full-Performance.pdf')} className="hover:text-brand-300">
              Audit PDF
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/seo-faqs/')} className="hover:text-brand-300">
              SEO FAQs
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/seo-glossary/')} className="hover:text-brand-300">
              SEO Glossary
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
