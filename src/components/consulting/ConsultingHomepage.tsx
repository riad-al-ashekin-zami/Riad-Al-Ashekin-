import React from 'react';
import { ConsultingHero } from './ConsultingHero';
import { WhoIHelp } from './WhoIHelp';
import { BusinessProblemsMatrix } from './BusinessProblemsMatrix';
import { PragmaticAiAutomation } from './PragmaticAiAutomation';
import { ConsultingServicesMatrix } from './ConsultingServicesMatrix';
import { VerifiedExperience } from './VerifiedExperience';
import { StrategicInsights } from './StrategicInsights';
import { ConsultingCTA } from './ConsultingCTA';

// Proven Client Proof & Production Foundation
import { Portfolio } from '../Portfolio';
import { CoFoundedVentures } from '../CoFoundedVentures';
import { ThingsIveBuilt } from '../ThingsIveBuilt';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (slug: string) => void;
  isPreview?: boolean;
}

export function ConsultingHomepage({ onNavigate, isPreview = false }: Props) {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* If accessed via legacy /consulting-preview route, show a subtle banner */}
      {isPreview && (
        <div className="bg-brand-950 text-white border-b border-brand-800 py-3 px-4 sticky top-16 md:top-20 z-30 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold font-mono text-[10px] uppercase border border-emerald-400/30">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Live Homepage
              </span>
              <span className="text-brand-200">
                <strong className="text-white">Business &amp; Technology Consulting</strong> is now live as the main homepage at <code className="font-mono text-accent-300 bg-brand-900 px-1.5 py-0.5 rounded">/</code>.
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onNavigate('/')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-600 hover:bg-accent-500 text-white font-bold transition-colors cursor-pointer"
              >
                <span>Go to Home (/)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 1. Hero: Strategic Value Proposition & Positioning */}
      <ConsultingHero onNavigate={onNavigate} onScrollToSection={scrollToSection} />

      {/* 2. Direct Operating Proof: Companies Co-Founded by Riad Al Ashekin (Directly After Hero) */}
      <CoFoundedVentures />

      {/* 3. Immediate Proof: Businesses I've Helped (35+ Projects & Ventures) */}
      <Portfolio onNavigate={onNavigate} />

      {/* 4. Core Strategic Engagements: Dedicated Retainers & Offerings */}
      <ConsultingServicesMatrix onNavigate={onNavigate} />

      {/* 5. Target Audience: Who I Work With */}
      <WhoIHelp />

      {/* 6. Problem Diagnosis: 4 Deconstructed Problem Spaces */}
      <BusinessProblemsMatrix />

      {/* 7. Execution Methodology: Pragmatic AI & Workflow Automation */}
      <PragmaticAiAutomation />

      {/* 8. Production Foundation: Things I've Built (Tools, Platforms, Builder Mindset) */}
      <ThingsIveBuilt onNavigate={onNavigate} />

      {/* 9. Operational Leadership: CTO & Lead SEO Strategist Track Record */}
      <VerifiedExperience onNavigate={onNavigate} />

      {/* 10. Strategic Principles: Executive Mental Models */}
      <StrategicInsights />

      {/* 11. Call to Action: Schedule a Consultation */}
      <ConsultingCTA onNavigate={onNavigate} />
    </div>
  );
}
