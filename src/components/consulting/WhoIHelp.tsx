import React from 'react';
import { Users2, ArrowRight } from 'lucide-react';

interface AudienceGroup {
  id: string;
  badge: string;
  title: string;
  situation: string;
  keyChallenges: string[];
}

const AUDIENCE_GROUPS: AudienceGroup[] = [
  {
    id: 'founders-saas',
    badge: 'Tech & B2B SaaS',
    title: 'Founders & Product Leadership',
    situation: 'Scaling companies ($1M–$15M ARR) navigating rising CAC and technology architecture choices.',
    keyChallenges: [
      'Build vs. buy architecture decisions',
      'Defensible organic customer acquisition moats',
      'Database and platform scalability'
    ]
  },
  {
    id: 'scaling-operators',
    badge: 'Established Enterprises',
    title: 'Managing Directors & Owners',
    situation: 'Established firms ($3M–$30M revenue) bottlenecked by disconnected software and manual workflows.',
    keyChallenges: [
      'Eliminating manual workflow friction',
      'CRM, ERP & sales funnel integration',
      'Pragmatic software selection without bias'
    ]
  },
  {
    id: 'digital-brands',
    badge: 'Digital Brands & Platforms',
    title: 'CMOs & Heads of Digital',
    situation: 'High-traffic platforms and consumer brands undergoing CMS migrations or organic traffic recovery.',
    keyChallenges: [
      'Zero-downtime CMS & platform migrations',
      'Core Web Vitals & technical crawl speed',
      'High-intent search revenue attribution'
    ]
  }
];

export function WhoIHelp() {
  return (
    <section className="py-12 sm:py-16 bg-[#fcfcfd] border-b border-brand-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-500 mb-1.5">
              <Users2 className="w-3.5 h-3.5 text-brand-600" />
              <span>Target Audience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-brand-950 tracking-tight">
              Who I Work With
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-500 max-w-md leading-relaxed">
            Direct advisory for decision-makers at the intersection of business growth, software selection, and operational scale.
          </p>
        </div>

        {/* 3 Streamlined Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {AUDIENCE_GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-2xl p-6 border border-brand-200/90 shadow-2xs hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-200/60">
                  {group.badge}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-brand-950">
                  {group.title}
                </h3>

                <p className="text-sm text-brand-600 leading-relaxed">
                  {group.situation}
                </p>

                <div className="pt-3 border-t border-brand-100 space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-400 uppercase tracking-wider">
                    Core Focus:
                  </div>
                  {group.keyChallenges.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-brand-700">
                      <span className="text-accent-600 font-bold leading-none mt-1">•</span>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
