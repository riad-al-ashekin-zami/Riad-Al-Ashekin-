import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BrandLogo } from './common/BrandLogo';
import { handleLinkClick } from '../utils/navigation';

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
            <a
              href="/contact/"
              onClick={(e) => handleLinkClick(e, '/contact/', onNavigate)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-lg cursor-pointer group no-underline"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs">
          {/* Col 1: Popular SEO Tools */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-200 uppercase tracking-wider text-[11px]">Free SEO Tools</h4>
            <ul className="space-y-2 text-brand-400">
              <li>
                <a href="/meta-title-description-checker/" onClick={(e) => handleLinkClick(e, '/meta-title-description-checker/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Meta Title &amp; SERP Checker
                </a>
              </li>
              <li>
                <a href="/character-counter/" onClick={(e) => handleLinkClick(e, '/character-counter/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Character &amp; Word Counter
                </a>
              </li>
              <li>
                <a href="/comma-separator/" onClick={(e) => handleLinkClick(e, '/comma-separator/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  List to Comma Separator
                </a>
              </li>
              <li>
                <a href="/robots-txt-tester/" onClick={(e) => handleLinkClick(e, '/robots-txt-tester/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Robots.txt Tester
                </a>
              </li>
              <li>
                <a href="/free-robots-txt-generator/" onClick={(e) => handleLinkClick(e, '/free-robots-txt-generator/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Robots.txt Generator
                </a>
              </li>
              <li>
                <a href="/free-llms-txt-generator/" onClick={(e) => handleLinkClick(e, '/free-llms-txt-generator/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  /llms.txt Generator (AI)
                </a>
              </li>
              <li>
                <a href="/seo-roi-calculator/" onClick={(e) => handleLinkClick(e, '/seo-roi-calculator/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  SEO ROI Calculator
                </a>
              </li>
              <li>
                <a href="/seo-tools/" onClick={(e) => handleLinkClick(e, '/seo-tools/', onNavigate)} className="text-accent-400 hover:underline transition-colors text-left font-semibold block">
                  View All Tools →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-200 uppercase tracking-wider text-[11px]">Consulting &amp; Services</h4>
            <ul className="space-y-2 text-brand-400">
              <li>
                <a href="/services/" onClick={(e) => handleLinkClick(e, '/services/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  All SEO Services
                </a>
              </li>
              <li>
                <a href="/seo-pricing/" onClick={(e) => handleLinkClick(e, '/seo-pricing/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  SEO Pricing Retainers
                </a>
              </li>
              <li>
                <a href="/local-seo-services/" onClick={(e) => handleLinkClick(e, '/local-seo-services/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Local SEO Services
                </a>
              </li>
              <li>
                <a href="/saas-seo-services/" onClick={(e) => handleLinkClick(e, '/saas-seo-services/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  B2B SaaS SEO Services
                </a>
              </li>
              <li>
                <a href="/laravel-website-seo-services/" onClick={(e) => handleLinkClick(e, '/laravel-website-seo-services/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Laravel Website SEO
                </a>
              </li>
              <li>
                <a href="/seo-audit-services/" onClick={(e) => handleLinkClick(e, '/seo-audit-services/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Technical Site Audits
                </a>
              </li>
              <li>
                <a href="/white-label-seo-services/" onClick={(e) => handleLinkClick(e, '/white-label-seo-services/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  White Label Agency SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Blog Posts */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-200 uppercase tracking-wider text-[11px]">Official Blog Posts</h4>
            <ul className="space-y-2 text-brand-400">
              <li>
                <a href="/best-8-seo-experts-in-sylhet/" onClick={(e) => handleLinkClick(e, '/best-8-seo-experts-in-sylhet/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Top 8 SEO Experts in Sylhet
                </a>
              </li>
              <li>
                <a href="/20-best-seo-experts-in-bangladesh/" onClick={(e) => handleLinkClick(e, '/20-best-seo-experts-in-bangladesh/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  20 Best Experts in Bangladesh
                </a>
              </li>
              <li>
                <a href="/top-10-seo-agencies-in-bangladesh/" onClick={(e) => handleLinkClick(e, '/top-10-seo-agencies-in-bangladesh/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Top 10 Agencies in Bangladesh
                </a>
              </li>
              <li>
                <a href="/how-to-create-perfect-meta-titles-a-step-by-step-guide-for-seo/" onClick={(e) => handleLinkClick(e, '/how-to-create-perfect-meta-titles-a-step-by-step-guide-for-seo/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Crafting Perfect Meta Titles
                </a>
              </li>
              <li>
                <a href="/blog/" onClick={(e) => handleLinkClick(e, '/blog/', onNavigate)} className="hover:text-white text-accent-300 font-semibold transition-colors text-left flex items-center gap-1">
                  <span>Browse All Articles &amp; Guides</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Strategic Pages & Guides */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-200 uppercase tracking-wider text-[11px]">Architecture &amp; Pages</h4>
            <ul className="space-y-2 text-brand-400">
              <li>
                <a href="/ultimate-guide-robots-txt/" onClick={(e) => handleLinkClick(e, '/ultimate-guide-robots-txt/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Robots.txt Architecture Page
                </a>
              </li>
              <li>
                <a href="/an-in-depth-analysis-of-search-engine-optimization/" onClick={(e) => handleLinkClick(e, '/an-in-depth-analysis-of-search-engine-optimization/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Search Analysis Whitepaper
                </a>
              </li>
              <li>
                <a href="/roi-of-seo-how-to-measure-calculate-maximize-seo-roi/" onClick={(e) => handleLinkClick(e, '/roi-of-seo-how-to-measure-calculate-maximize-seo-roi/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Measuring ROI of SEO Framework
                </a>
              </li>
              <li>
                <a href="/seo-checklist/" onClick={(e) => handleLinkClick(e, '/seo-checklist/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  45-Point SEO Audit Checklist
                </a>
              </li>
              <li>
                <a href="/top-10-saas-development-companies-usa/" onClick={(e) => handleLinkClick(e, '/top-10-saas-development-companies-usa/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Top 10 SaaS Companies USA
                </a>
              </li>
              <li>
                <a href="/best-seo-experts-in-sri-lanka/" onClick={(e) => handleLinkClick(e, '/best-seo-experts-in-sri-lanka/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Best Experts in Sri Lanka
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <h4 className="font-bold text-brand-200 uppercase tracking-wider text-[11px]">Company &amp; Legal</h4>
            <ul className="space-y-2 text-brand-400">
              <li>
                <a href="/about-me/" onClick={(e) => handleLinkClick(e, '/about-me/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  About Riad Al Ashekin
                </a>
              </li>
              <li>
                <a href="/seo-portfolio/" onClick={(e) => handleLinkClick(e, '/seo-portfolio/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Portfolio &amp; Results
                </a>
              </li>
              <li>
                <a href="/contact/" onClick={(e) => handleLinkClick(e, '/contact/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Contact / Inquiries
                </a>
              </li>
              <li>
                <a href="/privacy-policy/" onClick={(e) => handleLinkClick(e, '/privacy-policy/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service/" onClick={(e) => handleLinkClick(e, '/terms-of-service/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookie-policy/" onClick={(e) => handleLinkClick(e, '/cookie-policy/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/refund-policy/" onClick={(e) => handleLinkClick(e, '/refund-policy/', onNavigate)} className="hover:text-white transition-colors text-left block">
                  Refund Policy
                </a>
              </li>
              <li className="pt-2 border-t border-brand-900">
                <a href="/sitemap/" onClick={(e) => handleLinkClick(e, '/sitemap/', onNavigate)} className="text-accent-400 hover:text-accent-300 font-semibold transition-colors text-left flex items-center gap-1">
                  <span>HTML Sitemap Directory</span>
                  <span>→</span>
                </a>
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
            <a href="/sitemap/" onClick={(e) => handleLinkClick(e, '/sitemap/', onNavigate)} className="hover:text-brand-300 font-medium text-brand-400">
              Sitemap
            </a>
            <span>•</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-brand-300 font-medium text-brand-400">
              XML
            </a>
            <span>•</span>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-brand-300 font-medium text-brand-400">
              Robots.txt
            </a>
            <span>•</span>
            <a href="/wp-content/uploads/2025/12/Full-Performance.pdf" onClick={(e) => handleLinkClick(e, '/wp-content/uploads/2025/12/Full-Performance.pdf', onNavigate)} className="hover:text-brand-300">
              Audit PDF
            </a>
            <span>•</span>
            <a href="/seo-faqs/" onClick={(e) => handleLinkClick(e, '/seo-faqs/', onNavigate)} className="hover:text-brand-300">
              SEO FAQs
            </a>
            <span>•</span>
            <a href="/seo-glossary/" onClick={(e) => handleLinkClick(e, '/seo-glossary/', onNavigate)} className="hover:text-brand-300">
              SEO Glossary
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
