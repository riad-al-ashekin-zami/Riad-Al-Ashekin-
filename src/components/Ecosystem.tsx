import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Network } from 'lucide-react';

const ECOSYSTEM_COMPANIES = [
  { name: 'SDO Custom Softwares', url: 'https://softwaredevelopmentontario.ca/', domain: 'softwaredevelopmentontario.ca' },
  { name: 'Website Maintenance Services', url: 'https://websitemaintenanceservices.org/', domain: 'websitemaintenanceservices.org' },
  { name: 'White Label Web Development', url: 'https://whitelabelwebsitedevelopment.com/', domain: 'whitelabelwebsitedevelopment.com' },
  { name: 'White Label Local SEO', url: 'https://whitelabelseolocal.com/', domain: 'whitelabelseolocal.com' },
  { name: 'Local SEO Connecticut', url: 'https://localseoct.com/', domain: 'localseoct.com' },
  { name: 'Southampton SEO Agency', url: 'https://southamptonseo.agency/', domain: 'southamptonseo.agency' },
];

function CompanyLogo({ domain, name }: { domain: string; name: string }) {
  const [error, setError] = useState(false);

  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-3xl shadow-sm border border-brand-200 flex items-center justify-center p-4 relative group-hover:shadow-soft-purple group-hover:border-accent-200 transition-all duration-300">
      {!error ? (
        <img
          src={`https://icon.horse/icon/${domain}`}
          alt={`${name} logo`}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          onError={() => setError(true)}
        />
      ) : (
        <div className="text-brand-900 font-sans font-bold text-2xl uppercase tracking-tighter">
          {name.substring(0, 2)}
        </div>
      )}
      <div className="absolute -top-3 -right-3 bg-accent-600 text-white p-1.5 rounded-full opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-glow">
        <ExternalLink className="w-4 h-4" />
      </div>
    </div>
  );
}

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-16 lg:py-24 bg-brand-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="absolute inset-0 bg-radial-purple opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 bg-accent-100 text-accent-700 rounded-2xl flex items-center justify-center mb-6">
            <Network className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-900 mb-6 tracking-tight">Companies I’m Building &amp; Partnered With</h2>
          <p className="text-brand-600 text-xl font-medium leading-relaxed">
            Businesses and ventures I’m connected with through partnership, collaboration and ongoing work.
          </p>
        </div>

        {/* Visual Ecosystem Diagram */}
        <div className="relative max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-12 lg:p-20 shadow-soft-purple border border-white/50">
          {/* Conceptual Connector Lines (Hidden on small mobile) */}
          <div className="hidden sm:block absolute top-[120px] left-1/2 w-1.5 h-16 bg-gradient-to-b from-brand-900 to-accent-200 transform -translate-x-1/2 rounded-full" />
          <div className="hidden sm:block absolute top-[180px] left-[15%] right-[15%] h-1.5 bg-accent-200 rounded-full" />
          
          <div className="flex flex-col items-center">
            {/* Center Node */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold tracking-widest text-sm md:text-xl shadow-glow mb-12 md:mb-20 z-10 border-4 border-white text-center"
            >
              RIAD AL ASHEKIN
            </motion.div>

            {/* Grid of Partner Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-16 w-full relative z-10">
              {ECOSYSTEM_COMPANIES.map((company, index) => (
                <motion.a
                  key={company.domain}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="hidden sm:block absolute -top-12 w-1.5 h-12 bg-accent-200 rounded-full group-hover:bg-accent-400 transition-colors" />
                  <CompanyLogo domain={company.domain} name={company.name} />
                  <span className="mt-5 text-lg font-bold text-brand-700 group-hover:text-brand-900 transition-colors">
                    {company.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
