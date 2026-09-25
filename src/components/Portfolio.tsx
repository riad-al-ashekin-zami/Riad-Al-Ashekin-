import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Store, 
  Plane, 
  ArrowRight,
  Search,
  Building2
} from 'lucide-react';

interface Props {
  onNavigate?: (slug: string) => void;
}

export interface Project {
  name: string;
  url: string;
  domain: string;
  category: string;
  group: 'SaaS & Tech' | 'Finance & Property' | 'Local & Dining' | 'Travel & Leisure' | 'E-commerce & Retail';
  specialBadge?: 'Sister Concern' | 'Proprietary Product';
}

export const PROJECTS: Project[] = [
  // Sister Concerns & Proprietary Products
  { 
    name: 'Commerdo', 
    url: 'https://commerdo.com/', 
    domain: 'commerdo.com', 
    category: 'Commerce & Tech', 
    group: 'E-commerce & Retail',
    specialBadge: 'Sister Concern'
  },
  { 
    name: 'Next.js Development Agency', 
    url: 'https://nextjsdevelopment.agency/', 
    domain: 'nextjsdevelopment.agency', 
    category: 'Development', 
    group: 'SaaS & Tech',
    specialBadge: 'Sister Concern'
  },
  { 
    name: 'Estatyc', 
    url: 'https://www.estatyc.com/', 
    domain: 'estatyc.com', 
    category: 'PropTech & AI', 
    group: 'Finance & Property',
    specialBadge: 'Proprietary Product'
  },

  // Finance & Property
  { name: 'MOAR Mortgages', url: 'https://www.moarmortgages.ca/', domain: 'moarmortgages.ca', category: 'Mortgage', group: 'Finance & Property' },
  { name: 'MiPropertyPortal', url: 'https://www.mipropertyportal.com/', domain: 'mipropertyportal.com', category: 'PropTech', group: 'Finance & Property' },

  // SaaS, Technology & Digital Platforms
  { name: 'SDO Custom Softwares', url: 'https://softwaredevelopmentontario.ca/', domain: 'softwaredevelopmentontario.ca', category: 'Software', group: 'SaaS & Tech' },
  { name: 'Website Maintenance Services', url: 'https://websitemaintenanceservices.org/', domain: 'websitemaintenanceservices.org', category: 'Web Services', group: 'SaaS & Tech' },
  { name: 'White Label Local SEO', url: 'https://whitelabelseolocal.com/', domain: 'whitelabelseolocal.com', category: 'SEO', group: 'SaaS & Tech' },
  { name: 'White Label Web Development', url: 'https://whitelabelwebsitedevelopment.com/', domain: 'whitelabelwebsitedevelopment.com', category: 'Development', group: 'SaaS & Tech' },
  { name: 'SEO Course in Bangladesh', url: 'https://seocourseinbangladesh.com/', domain: 'seocourseinbangladesh.com', category: 'Education', group: 'SaaS & Tech' },
  { name: 'CyberShieldBD', url: 'https://cybershieldbd.com/', domain: 'cybershieldbd.com', category: 'Cybersecurity', group: 'SaaS & Tech' },
  { name: 'UnitScale Digital', url: 'https://unitscaledigital.com/', domain: 'unitscaledigital.com', category: 'Digital', group: 'SaaS & Tech' },
  { name: 'Zaaag System Ltd', url: 'https://zaagsys.com/', domain: 'zaagsys.com', category: 'Technology', group: 'SaaS & Tech' },
  { name: 'Southampton SEO Agency', url: 'https://southamptonseo.agency/', domain: 'southamptonseo.agency', category: 'SEO', group: 'SaaS & Tech' },
  { name: 'That SaaS', url: 'https://thatsaas.com/', domain: 'thatsaas.com', category: 'SaaS', group: 'SaaS & Tech' },
  { name: 'IslamArc', url: 'https://islamarc.com/', domain: 'islamarc.com', category: 'Platform', group: 'SaaS & Tech' },
  { name: 'Launch Craftar', url: 'https://launchcraftar.com/', domain: 'launchcraftar.com', category: 'Digital', group: 'SaaS & Tech' },
  { name: 'Socanalyst', url: 'https://socanalyst.pro/', domain: 'socanalyst.pro', category: 'Analytics', group: 'SaaS & Tech' },
  { name: 'What Generation Am I', url: 'https://whatgenerationami.fun/', domain: 'whatgenerationami.fun', category: 'Platform', group: 'SaaS & Tech' },
  { name: 'Thanavimadani', url: 'https://thanavimadani.org/', domain: 'thanavimadani.org', category: 'Organization', group: 'SaaS & Tech' },
  { name: 'Riad Al Ashekin', url: 'https://riadalashekin.com/', domain: 'riadalashekin.com', category: 'Professional', group: 'SaaS & Tech' },

  // Local Business, Dining & Healthcare
  { name: 'Dhaka Kitchen', url: 'https://dhakakitchen.ca/', domain: 'dhakakitchen.ca', category: 'Food', group: 'Local & Dining' },
  { name: 'Glamhair Studio UK', url: 'https://www.glamhairstudio.uk/', domain: 'glamhairstudio.uk', category: 'Beauty', group: 'Local & Dining' },
  { name: 'Woodward Barber', url: 'https://woodwardbarbers.com/', domain: 'woodwardbarbers.com', category: 'Local Business', group: 'Local & Dining' },
  { name: 'Premium Shawarma', url: 'https://premiumshawarma.com/', domain: 'premiumshawarma.com', category: 'Food', group: 'Local & Dining' },
  { name: 'Galaviz Barber Shop', url: 'https://galavizbarbershop.com/', domain: 'galavizbarbershop.com', category: 'Local Business', group: 'Local & Dining' },
  { name: 'Amco', url: 'https://aqsaalmadena.com/', domain: 'aqsaalmadena.com', category: 'Business', group: 'Local & Dining' },
  { name: 'Dermatology Website Design', url: 'https://dermatologywebsitedesign.com/', domain: 'dermatologywebsitedesign.com', category: 'Healthcare', group: 'Local & Dining' },
  { name: 'Leeren Beauty Salon', url: 'https://leerenbeautysalon.com/', domain: 'leerenbeautysalon.com', category: 'Beauty', group: 'Local & Dining' },
  { name: 'AltitudeCare.net', url: 'https://altitudecare.net/', domain: 'altitudecare.net', category: 'Care Services', group: 'Local & Dining' },

  // Travel & Transportation
  { name: 'St. Lucia Taxi and Tours', url: 'https://stluciantaxiandtours.com/', domain: 'stluciantaxiandtours.com', category: 'Tourism', group: 'Travel & Leisure' },
  { name: 'Marcs Taxi Service Tours', url: 'https://marcstaxiservicetours.com/', domain: 'marcstaxiservicetours.com', category: 'Transportation', group: 'Travel & Leisure' },
  { name: 'Marius Taxi and Tours', url: 'http://mariustaxiandtours.com/', domain: 'mariustaxiandtours.com', category: 'Transportation', group: 'Travel & Leisure' },

  // E-commerce & Retail
  { name: 'Dhaka Bazar', url: 'https://www.dhakabazar.ca/', domain: 'dhakabazar.ca', category: 'Retail', group: 'E-commerce & Retail' },
  { name: 'Nannu Group', url: 'https://nannugroup.com/', domain: 'nannugroup.com', category: 'Apparel', group: 'E-commerce & Retail' },
];

const CATEGORIES = [
  'All', 
  'SaaS & Tech', 
  'Finance & Property', 
  'Local & Dining', 
  'Travel & Leisure', 
  'E-commerce & Retail'
] as const;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-[#fafafc] hover:bg-white rounded-xl p-3 border border-brand-200/80 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col items-center text-center justify-between relative space-y-2"
    >
      {/* Optional Top Tag for Sister Concerns or Proprietary Products */}
      {project.specialBadge && (
        <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border mb-0.5 ${
          project.specialBadge === 'Proprietary Product' 
            ? 'bg-purple-50 text-purple-700 border-purple-200' 
            : 'bg-accent-50 text-accent-700 border-accent-200'
        }`}>
          {project.specialBadge}
        </span>
      )}

      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl border border-brand-200/70 p-1.5 flex items-center justify-center relative shadow-2xs group-hover:border-accent-200 transition-all">
        {!imgError ? (
          <img
            src={`https://icon.horse/icon/${project.domain}`}
            alt={`${project.name} logo`}
            className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <span className="font-mono font-bold text-xs text-brand-700 uppercase">
            {project.name.substring(0, 2)}
          </span>
        )}

        <div className="absolute -top-1 -right-1 bg-brand-900 text-white p-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-2.5 h-2.5" />
        </div>
      </div>

      <div className="w-full space-y-0.5">
        <h4 className="text-sm sm:text-base font-bold text-brand-900 group-hover:text-accent-700 transition-colors truncate">
          {project.name}
        </h4>
        <span className="text-xs font-mono text-brand-400 uppercase tracking-wide block truncate">
          {project.category}
        </span>
      </div>
    </a>
  );
};

export function Portfolio({ onNavigate }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.group === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="work" className="py-12 sm:py-16 bg-white border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-500 mb-1.5">
              <Briefcase className="w-3.5 h-3.5 text-brand-600" />
              <span>Verified Production Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-brand-950 tracking-tight">
              Businesses I’ve Helped ({PROJECTS.length} Companies &amp; Projects)
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-500 max-w-md leading-relaxed">
            Explore the companies, technology brands, products, and digital businesses connected with my growing international ecosystem.
          </p>
        </div>

        {/* 4-Pillar Cross-Industry Foundation Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-[#fafafc] rounded-xl p-3.5 sm:p-4 border border-brand-200/70 space-y-1">
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-brand-900">
              <Cpu className="w-4 h-4 text-accent-600 shrink-0" />
              <span>SaaS &amp; Technology</span>
            </div>
            <p className="text-sm text-brand-500 leading-relaxed">
              Multi-tenant SaaS, software agencies, and analytics.
            </p>
          </div>

          <div className="bg-[#fafafc] rounded-xl p-3.5 sm:p-4 border border-brand-200/70 space-y-1">
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-brand-900">
              <Building2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Finance &amp; PropTech</span>
            </div>
            <p className="text-sm text-brand-500 leading-relaxed">
              Mortgage brokerages, property portals, and real estate tools.
            </p>
          </div>

          <div className="bg-[#fafafc] rounded-xl p-3.5 sm:p-4 border border-brand-200/70 space-y-1">
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-brand-900">
              <Store className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Local &amp; Dining</span>
            </div>
            <p className="text-sm text-brand-500 leading-relaxed">
              Restaurants, salons, local businesses, and care services.
            </p>
          </div>

          <div className="bg-[#fafafc] rounded-xl p-3.5 sm:p-4 border border-brand-200/70 space-y-1">
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-brand-900">
              <Plane className="w-4 h-4 text-strategy-600 shrink-0" />
              <span>Travel &amp; Retail</span>
            </div>
            <p className="text-sm text-brand-500 leading-relaxed">
              Tourism, taxi fleets, retail brands, and apparel groups.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-3.5 mb-6 pb-4 border-b border-brand-100">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Real-time search bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-brand-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 35+ partners, domains, or categories..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#fafafc] border border-brand-200/80 rounded-xl focus:bg-white focus:outline-none focus:border-brand-400 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-brand-400 hover:text-brand-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results counter */}
            <div className="text-xs font-mono text-brand-500 self-end sm:self-center">
              Showing <span className="font-bold text-brand-900">{filteredProjects.length}</span> of {PROJECTS.length}
            </div>
          </div>

          {/* Category Filter Pills (Mobile Natural Wrap) */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-brand-950 text-white shadow-2xs font-semibold' 
                      : 'bg-[#fafafc] hover:bg-brand-50 text-brand-700 border border-brand-200/70'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid (100% Mobile Natural) */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-3.5 mb-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.domain} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#fafafc] rounded-2xl border border-brand-200/60 p-6 mb-8">
            <p className="text-sm text-brand-600 mb-2">No companies found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-sm font-bold text-accent-700 underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Section Transition Card */}
        <div className="bg-[#fafafc] border border-brand-200/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-base sm:text-lg font-bold text-brand-950">
              35+ Businesses Across Diverse Sectors &amp; Geographies
            </h3>
            <p className="text-sm text-brand-600 leading-relaxed">
              From high-growth SaaS platforms and regional brokerages to international local businesses, every engagement was built on empirical diagnosis and strategic execution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start sm:self-auto">
            {onNavigate && (
              <>
                <button
                  onClick={() => onNavigate('/seo-portfolio/')}
                  className="px-3.5 py-2 bg-white border border-brand-200/80 hover:bg-brand-50 text-brand-900 rounded-lg text-xs font-bold transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Detailed Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                </button>
                <button
                  onClick={() => onNavigate('/seo-pricing/')}
                  className="px-3.5 py-2 bg-brand-950 hover:bg-brand-800 text-white rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Pricing &amp; Retainers</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
