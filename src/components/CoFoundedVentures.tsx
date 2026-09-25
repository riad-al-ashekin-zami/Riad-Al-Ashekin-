import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Venture {
  name: string;
  role: string;
  focus: string;
  domain: string;
  url: string;
  code: string;
}

const VENTURES: Venture[] = [
  {
    name: 'SDO Custom Softwares',
    role: 'Co-Founder',
    focus: 'Custom Software & Scalable Backends',
    domain: 'softwaredevelopmentontario.ca',
    url: 'https://softwaredevelopmentontario.ca/',
    code: 'SDO'
  },
  {
    name: 'Website Maintenance Services',
    role: 'Co-Founder',
    focus: 'Managed Web Ops & Security Hardening',
    domain: 'websitemaintenanceservices.org',
    url: 'https://websitemaintenanceservices.org/',
    code: 'WMS'
  },
  {
    name: 'White Label Web Development',
    role: 'Co-Founder',
    focus: 'White-Label Engineering for Agencies',
    domain: 'whitelabelwebsitedevelopment.com',
    url: 'https://whitelabelwebsitedevelopment.com/',
    code: 'WLW'
  },
  {
    name: 'White Label Local SEO',
    role: 'Co-Founder',
    focus: 'Agency Local Search Fulfillment',
    domain: 'whitelabelseolocal.com',
    url: 'https://whitelabelseolocal.com/',
    code: 'WLL'
  },
  {
    name: 'Local SEO Connecticut',
    role: 'Co-Founder',
    focus: 'Connecticut Local Search & Google Maps 3-Pack',
    domain: 'localseoct.com',
    url: 'https://localseoct.com/',
    code: 'CT'
  },
  {
    name: 'Southampton SEO Agency',
    role: 'Co-Founder',
    focus: 'UK Technical Search & Entity Strategy',
    domain: 'southamptonseo.agency',
    url: 'https://southamptonseo.agency/',
    code: 'SSA'
  }
];

function VentureLogo({ venture }: { venture: Venture }) {
  const [errorStage, setErrorStage] = useState<number>(0);

  // Exact style and logo fetching source from "Verified Production Work" (Portfolio.tsx)
  const logoSrc = errorStage === 0
    ? `https://icon.horse/icon/${venture.domain}`
    : `https://www.google.com/s2/favicons?domain=${venture.domain}&sz=128`;

  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl border border-brand-200/70 p-1.5 flex items-center justify-center relative shadow-2xs group-hover:border-accent-200 transition-all shrink-0">
      {errorStage < 2 ? (
        <img
          src={logoSrc}
          alt={`${venture.name} logo`}
          className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
          onError={() => setErrorStage(prev => prev + 1)}
          loading="lazy"
        />
      ) : (
        <span className="font-mono font-bold text-xs text-brand-700 uppercase">
          {venture.code || venture.name.substring(0, 2)}
        </span>
      )}
    </div>
  );
}

export function CoFoundedVentures() {
  return (
    <section id="co-founded-ventures" className="py-12 sm:py-16 bg-white border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#6f42c1] mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span>Co-Founder</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-brand-950 tracking-tight">
              Companies Co-Founded by Riad Al Ashekin
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-500 max-w-md leading-relaxed">
            Direct operating ownership across software engineering, managed infrastructure, and search operations.
          </p>
        </div>

        {/* 6 Ventures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {VENTURES.map((v) => (
            <a
              key={v.domain}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#fafbfe] hover:bg-white border border-brand-200/80 hover:border-purple-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Logo & Co-Founder Badge + Action Arrow */}
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <VentureLogo venture={v} />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-100/90 shadow-2xs">
                      Co-Founder
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white border border-brand-200/80 group-hover:border-purple-200 group-hover:bg-purple-50 flex items-center justify-center text-brand-400 group-hover:text-[#6f42c1] transition-colors shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Company Name (Full Width, Never Truncated) */}
                <h3 className="text-base sm:text-lg font-bold text-brand-950 group-hover:text-[#6f42c1] transition-colors leading-snug">
                  {v.name}
                </h3>

                {/* Focus / Scope (Full Visibility) */}
                <p className="text-xs sm:text-sm text-brand-600 mt-1.5 leading-relaxed">
                  {v.focus}
                </p>
              </div>

              {/* Card Footer: Domain & Action */}
              <div className="mt-4 pt-3 border-t border-brand-100/80 flex items-center justify-between text-xs font-mono">
                <span className="text-brand-400">{v.domain}</span>
                <span className="text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                  Visit <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
