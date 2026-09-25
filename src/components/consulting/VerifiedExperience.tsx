import React from 'react';
import { 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Building
} from 'lucide-react';

interface Props {
  onNavigate?: (slug: string) => void;
}

export function VerifiedExperience({ onNavigate }: Props) {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-500 mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-700" />
              <span>Operational Background</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-brand-950 tracking-tight">
              Dual Technical &amp; Strategic Track Record
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-500 max-w-md leading-relaxed">
            Hands-on technical executive experience combined with proven search strategy leadership.
          </p>
        </div>

        {/* 2 Flagship Operational Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          
          {/* Role 1: Co-Founder & CTO Experience */}
          <div className="bg-[#fafafc] hover:bg-white rounded-2xl p-6 border border-brand-200/90 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-brand-950 text-white flex items-center justify-center shadow-xs">
                  <Cpu className="w-4.5 h-4.5 text-accent-300" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-white border border-brand-200/80 text-brand-700">
                  Technical Leadership
                </span>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-950">
                  Co-Founder &amp; Chief Technology Officer (CTO)
                </h3>
                <p className="text-sm text-brand-600 mt-1 leading-relaxed">
                  Directing software architecture, web platforms, and engineering governance across digital ventures and client systems.
                </p>
              </div>

              <div className="pt-3 border-t border-brand-100 space-y-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                  Core Responsibilities:
                </div>
                {[
                  'Designing web systems with Next.js, TypeScript, and modern headless stacks',
                  'Evaluating vendor software, database integrity, and webhook pipelines',
                  'Translating commercial objectives into precise technical architecture',
                  'Overseeing code quality, performance audits, and secure deployment'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-brand-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-brand-200/70 flex items-center justify-between text-xs sm:text-sm text-brand-500">
              <span>Domain: Technical Architecture</span>
              <span className="font-mono font-bold text-brand-800">Production Leadership</span>
            </div>
          </div>

          {/* Role 2: Lead SEO Strategist Experience */}
          <div className="bg-[#fafafc] hover:bg-white rounded-2xl p-6 border border-brand-200/90 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-brand-950 text-white flex items-center justify-center shadow-xs">
                  <TrendingUp className="w-4.5 h-4.5 text-emerald-300" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-white border border-brand-200/80 text-emerald-800">
                  Search &amp; Growth Leadership
                </span>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-950">
                  Lead SEO Strategist &amp; Advisory Director
                </h3>
                <p className="text-sm text-brand-600 mt-1 leading-relaxed">
                  Steering organic acquisition, programmatic expansion, and technical migrations for SaaS platforms and enterprise properties.
                </p>
              </div>

              <div className="pt-3 border-t border-brand-100 space-y-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                  Core Responsibilities:
                </div>
                {[
                  'Auditing high-scale platforms for crawlability, indexation, and Core Web Vitals',
                  'Developing semantic entity models resistant to core search updates',
                  'Aligning search intent clusters directly with pipeline demo requests and sales',
                  'Architecting custom SEO analytics utilities and webmaster tools'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-brand-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-brand-200/70 flex items-center justify-between text-xs sm:text-sm text-brand-500">
              <span>Domain: Search Strategy &amp; Discovery</span>
              <span className="font-mono font-bold text-brand-800">6+ Years Advisory</span>
            </div>
          </div>

        </div>

        {/* Transparency Strip */}
        <div className="bg-[#fafafc] rounded-xl border border-brand-200/80 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2 text-sm text-brand-700">
            <Building className="w-4 h-4 text-accent-700 shrink-0" />
            <span>
              <strong className="text-brand-950">Operational Clarity:</strong> Independent consulting clients receive unbiased software and strategy guidance without agency markups.
            </span>
          </div>
          <span className="text-xs font-mono text-brand-500 bg-white px-2.5 py-1 rounded border border-brand-200 shrink-0">
            Fiduciary Independence
          </span>
        </div>

      </div>
    </section>
  );
}
