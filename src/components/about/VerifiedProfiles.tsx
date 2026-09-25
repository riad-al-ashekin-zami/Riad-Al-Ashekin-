import React, { useState, useMemo } from 'react';
import { ExternalLink, Globe, Search } from 'lucide-react';

export interface VerifiedProfile {
  id: string;
  name: string;
  url: string;
  domain: string;
  handle: string;
  category: 'Core' | 'Engineering' | 'Business' | 'Writing' | 'Design' | 'Social';
  tag: string;
}

export const VERIFIED_PROFILES: VerifiedProfile[] = [
  {
    id: 'website',
    name: 'Official Website',
    url: 'https://riadalashekin.com/',
    domain: 'riadalashekin.com',
    handle: 'riadalashekin.com',
    category: 'Core',
    tag: 'Primary Domain'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/riad-al-ashekin-zami',
    domain: 'linkedin.com',
    handle: 'in/riad-al-ashekin-zami',
    category: 'Business',
    tag: 'Professional Network'
  },
  {
    id: 'clutch',
    name: 'Clutch',
    url: 'https://clutch.co/profile/riad-al-ashekin',
    domain: 'clutch.co',
    handle: 'profile/riad-al-ashekin',
    category: 'Business',
    tag: 'B2B Client Reviews'
  },
  {
    id: 'calendly',
    name: 'Calendly',
    url: 'https://calendly.com/riad-al-ashekin',
    domain: 'calendly.com',
    handle: 'riad-al-ashekin',
    category: 'Business',
    tag: 'Direct Advisory Booking'
  },
  {
    id: 'google-maps',
    name: 'Google Maps Location',
    url: 'https://maps.app.goo.gl/9HgLNw81BR7yxp5c8',
    domain: 'google.com',
    handle: 'Business & Office Location',
    category: 'Business',
    tag: 'Verified Entity'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/riad-al-ashekin-zami',
    domain: 'github.com',
    handle: '@riad-al-ashekin-zami',
    category: 'Engineering',
    tag: 'Open Source & Repositories'
  },
  {
    id: 'stackoverflow',
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/11641870/riad-al-ashekin-zami',
    domain: 'stackoverflow.com',
    handle: 'users/11641870',
    category: 'Engineering',
    tag: 'Technical Q&A'
  },
  {
    id: 'codepen',
    name: 'CodePen',
    url: 'https://codepen.io/Riad-al-Ashekin',
    domain: 'codepen.io',
    handle: '@Riad-al-Ashekin',
    category: 'Engineering',
    tag: 'Interactive Labs'
  },
  {
    id: 'devto',
    name: 'DEV Community',
    url: 'https://dev.to/riad_al-ashekin',
    domain: 'dev.to',
    handle: '@riad_al-ashekin',
    category: 'Engineering',
    tag: 'Developer Articles'
  },
  {
    id: 'hashnode',
    name: 'Hashnode',
    url: 'https://hashnode.com/@RiadAlAshekin',
    domain: 'hashnode.com',
    handle: '@RiadAlAshekin',
    category: 'Writing',
    tag: 'Tech Weblog'
  },
  {
    id: 'medium',
    name: 'Medium',
    url: 'https://medium.com/@riad-al-ashekin',
    domain: 'medium.com',
    handle: '@riad-al-ashekin',
    category: 'Writing',
    tag: 'Tech & SEO Essays'
  },
  {
    id: 'substack',
    name: 'Substack',
    url: 'https://substack.com/@riadalashekin',
    domain: 'substack.com',
    handle: '@riadalashekin',
    category: 'Writing',
    tag: 'Strategic Newsletter'
  },
  {
    id: 'scribd',
    name: 'Scribd',
    url: 'https://www.scribd.com/user/320627378/Riad-Al-Ashekin',
    domain: 'scribd.com',
    handle: 'user/320627378',
    category: 'Writing',
    tag: 'Presentations & Docs'
  },
  {
    id: 'quora',
    name: 'Quora',
    url: 'https://www.quora.com/profile/Riad-Al-Ashekin-Zami-1',
    domain: 'quora.com',
    handle: 'Riad-Al-Ashekin-Zami-1',
    category: 'Writing',
    tag: 'Expert Answers'
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    url: 'https://dribbble.com/riad-al-ashekin',
    domain: 'dribbble.com',
    handle: '@riad-al-ashekin',
    category: 'Design',
    tag: 'Product & UI Design'
  },
  {
    id: 'behance',
    name: 'Behance',
    url: 'https://www.behance.net/riad_al_ashekin',
    domain: 'behance.net',
    handle: 'riad_al_ashekin',
    category: 'Design',
    tag: 'Creative Case Studies'
  },
  {
    id: 'shutterstock',
    name: 'Shutterstock',
    url: 'https://www.shutterstock.com/g/riad+al+ashekin',
    domain: 'shutterstock.com',
    handle: 'g/riad+al+ashekin',
    category: 'Design',
    tag: 'Visual Assets'
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    url: 'https://www.pinterest.com/riadalashekin/',
    domain: 'pinterest.com',
    handle: '@riadalashekin',
    category: 'Design',
    tag: 'Visual Research'
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    url: 'https://x.com/RiadAlAshekin',
    domain: 'x.com',
    handle: '@RiadAlAshekin',
    category: 'Social',
    tag: 'Industry Commentary'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@RiadAlAshekinZami',
    domain: 'youtube.com',
    handle: '@RiadAlAshekinZami',
    category: 'Social',
    tag: 'Video & Keynotes'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/riadalashekinzami',
    domain: 'instagram.com',
    handle: '@riadalashekinzami',
    category: 'Social',
    tag: 'Personal & Lifestyle'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/riad.al.zami/',
    domain: 'facebook.com',
    handle: 'riad.al.zami',
    category: 'Social',
    tag: 'Social Profile'
  },
  {
    id: 'reddit',
    name: 'Reddit',
    url: 'https://www.reddit.com/user/riad_al_ashekin/',
    domain: 'reddit.com',
    handle: 'u/riad_al_ashekin',
    category: 'Social',
    tag: 'Community Engagement'
  }
];

function ProfileLogo({ domain, name }: { domain: string; name: string }) {
  const [errorStage, setErrorStage] = useState(0);

  const src = errorStage === 0
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
    : `https://icon.horse/icon/${domain}`;

  return (
    <div className="w-10 h-10 rounded-xl bg-white border border-brand-200/80 p-1.5 flex items-center justify-center relative shadow-2xs group-hover:border-purple-200 transition-all shrink-0">
      {errorStage < 2 ? (
        <img
          src={src}
          alt={`${name} icon`}
          className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110"
          onError={() => setErrorStage(prev => prev + 1)}
          loading="lazy"
        />
      ) : (
        <span className="font-mono font-bold text-xs text-brand-700 uppercase">
          {name.substring(0, 2)}
        </span>
      )}
    </div>
  );
}

export function VerifiedProfiles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core', 'Business', 'Engineering', 'Writing', 'Design', 'Social'];

  const filteredProfiles = useMemo(() => {
    return VERIFIED_PROFILES.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        p.name.toLowerCase().includes(q) || 
        p.handle.toLowerCase().includes(q) || 
        p.tag.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="official-profiles" className="pt-10 sm:pt-14 pb-4 border-t border-brand-200/80">
      <div className="space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#6f42c1]">
              <Globe className="w-3.5 h-3.5 text-[#6f42c1]" />
              <span>Official Profiles &amp; Web Presence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
              Verified Digital Footprint &amp; Social Channels
            </h3>
            <p className="text-xs sm:text-sm text-brand-600 max-w-2xl">
              Authentic public accounts, technical repositories, publications, and verified profiles of Riad Al Ashekin across the web.
            </p>
          </div>

          {/* Search Filter */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-brand-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter profiles..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-brand-200 rounded-xl text-brand-900 placeholder:text-brand-400 focus:outline-hidden focus:border-[#6f42c1] focus:ring-1 focus:ring-[#6f42c1] transition-all"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? VERIFIED_PROFILES.length 
              : VERIFIED_PROFILES.filter(p => p.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer text-xs ${
                  isActive
                    ? 'bg-[#180f2d] text-white shadow-xs'
                    : 'bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200/80'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-brand-200/80 text-brand-800'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredProfiles.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white hover:bg-[#fafbfe] border border-brand-200/80 hover:border-purple-300 hover:shadow-xs transition-all flex items-start justify-between gap-3 text-left"
            >
              <div className="flex items-start gap-3 min-w-0">
                <ProfileLogo domain={p.domain} name={p.name} />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-brand-950 truncate group-hover:text-[#6f42c1] transition-colors">
                      {p.name}
                    </h4>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-100/90 shrink-0">
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-brand-500 truncate mt-1">
                    {p.handle}
                  </p>
                  <p className="text-[11px] text-brand-400 truncate mt-0.5">
                    {p.domain}
                  </p>
                </div>
              </div>

              <div className="w-6 h-6 rounded-md bg-brand-50 group-hover:bg-purple-50 flex items-center justify-center text-brand-400 group-hover:text-[#6f42c1] transition-colors shrink-0 mt-0.5">
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="p-8 text-center bg-brand-50/50 rounded-2xl border border-brand-200">
            <p className="text-sm text-brand-600">
              No profiles found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-2 text-xs font-bold text-[#6f42c1] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
