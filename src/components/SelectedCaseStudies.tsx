import React from 'react';
import { ArrowRight, ArrowDown, Building2, Scissors, Plane, Code2, Home, CheckCircle2 } from 'lucide-react';

const caseStudies = [
  {
    id: "mipropertyportal",
    title: "MiPropertyPortal",
    category: "Real Estate / Property Management Tech",
    icon: Building2,
    color: "accent",
    story: ['Business Model', 'Real Estate Search Demand', 'Website Architecture', 'Technical SEO', 'Content Opportunities', 'Organic Growth System'],
    details: {
      context: "A growing property management software platform looking to expand its reach.",
      problem: "Needed to establish visibility in a highly competitive software market dominated by established players.",
      role: "SEO Strategy & Technical Implementation",
      thinking: "Align the platform's technical capabilities with the specific search intents of property managers and landlords.",
      work: "Comprehensive site architecture restructure, technical SEO improvements, and targeted content clusters.",
      outcome: "Established a robust organic growth engine capturing high-intent software buyers."
    }
  },
  {
    id: "woodwardbarbers",
    title: "Woodward Barbers",
    category: "Local Business",
    icon: Scissors,
    color: "brand",
    story: ['Location', 'Search Intent', 'Local Landing Pages', 'Google Visibility', 'Website Experience', 'Enquiry / Booking'],
    details: {
      context: "A premium local barber shop needing to dominate local search.",
      problem: "High local competition and poor visibility for non-branded search terms.",
      role: "Local SEO & Website Optimization",
      thinking: "Local search isn't just about maps; it's about connecting geographical relevance with service intent.",
      work: "Optimized Google Business Profile, built dedicated service-area pages, and improved mobile conversion experience.",
      outcome: "Significant increase in local map pack visibility and direct booking conversions."
    }
  },
  {
    id: "stluciataxi",
    title: "St. Lucia Taxi & Tours",
    category: "Travel / Transportation",
    icon: Plane,
    color: "strategy",
    story: ['International Visitors', 'Search Demand', 'Airport Transfer', 'Tours', 'Travel Experience'],
    details: {
      context: "A premier island transportation and tour service.",
      problem: "Needed to capture tourists at the planning stage before they arrived on the island.",
      role: "Search Strategy & Content Architecture",
      thinking: "Travelers search for experiences and logistics weeks in advance. We need to be the answer to their itinerary questions.",
      work: "Created comprehensive island guides, optimized booking flows, and structured service offerings for search.",
      outcome: "Captured early-stage travel planning traffic, leading to advanced bookings."
    }
  },
  {
    id: "zaagsystems",
    title: "ZAAG Systems",
    category: "Software / Technology",
    icon: Code2,
    color: "growth",
    story: ['Software Company', 'Digital Presence', 'Website', 'Technical Foundation', 'Search Strategy'],
    details: {
      context: "A custom software development agency.",
      problem: "Technical expertise wasn't translating into organic search visibility for development services.",
      role: "Technical Foundation & SEO Strategy",
      thinking: "A software company's website must have flawless technical SEO to signal competence to both engines and users.",
      work: "Resolved crawling issues, improved site speed, and structured service pages around specific tech stacks.",
      outcome: "A technically sound platform ready for aggressive content marketing."
    }
  },
  {
    id: "estatyc",
    title: "Estatyc",
    category: "Real Estate Tech / Social Platform",
    icon: Home,
    color: "accent",
    story: ['Product', 'Market', 'Audience', 'Search Opportunity', 'Growth'],
    details: {
      context: "An innovative real estate networking platform.",
      problem: "Introducing a new concept to a traditional market requires educating the audience while capturing existing demand.",
      role: "Market & Search Analysis",
      thinking: "Map the product's unique features to the pain points real estate professionals are actively searching to solve.",
      work: "Audience intent mapping and foundational search strategy for product launch.",
      outcome: "Clear roadmap connecting product features to market search behavior."
    }
  }
];

function FlowDiagram({ steps, color }: { steps: string[], color: string }) {
  return (
    <div className={`mt-6 md:mt-10 p-6 md:p-8 rounded-3xl bg-${color}-50/50 border border-${color}-100 flex flex-col md:flex-row flex-wrap items-center justify-center gap-4`}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`px-6 py-3 bg-white rounded-xl shadow-sm border border-${color}-200 font-bold text-brand-900 text-sm text-center`}>
            {step}
          </div>
          {index < steps.length - 1 && (
            <div className={`hidden md:block text-${color}-400`}>
              <ArrowRight className="w-5 h-5" />
            </div>
          )}
          {index < steps.length - 1 && (
            <div className={`md:hidden text-${color}-400`}>
              <ArrowDown className="w-5 h-5" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export function SelectedCaseStudies() {
  return (
    <section className="py-16 lg:py-24 bg-brand-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-sans font-bold text-brand-950 mb-8 tracking-tight">Selected Case Studies</h2>
          <p className="text-xl md:text-2xl text-brand-600 font-medium leading-relaxed italic max-w-3xl mx-auto">
            “Real projects reveal more than claims ever can.”
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-200 text-xs font-bold tracking-widest text-brand-500 uppercase shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-accent-500" />
            Selected work — not a complete client list
          </div>
        </div>

        {/* Stacked Case Studies */}
        <div className="space-y-12 lg:space-y-24">
          {caseStudies.map((study, idx) => (
            <div key={study.id} className="bg-white rounded-[3rem] p-6 md:p-10 lg:p-16 shadow-soft-purple border border-brand-100 relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className={`absolute -top-32 -right-32 w-96 h-96 bg-${study.color}-100 rounded-full blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10">
                {/* Study Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 border-b border-brand-100 pb-10">
                  <div className={`w-20 h-20 rounded-3xl bg-${study.color}-50 flex items-center justify-center border border-${study.color}-100 shadow-sm shrink-0`}>
                    <study.icon className={`w-10 h-10 text-${study.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-4xl font-sans font-bold text-brand-950 mb-2">{study.title}</h3>
                    <p className={`text-lg font-bold text-${study.color}-600 tracking-wide`}>{study.category}</p>
                  </div>
                </div>

                {/* Editorial Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
                  <div>
                    <div className="text-sm font-bold text-brand-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                      <span className="text-brand-300">01</span> Context
                    </div>
                    <p className="text-brand-800 font-medium leading-relaxed">{study.details.context}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-bold text-brand-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                      <span className="text-brand-300">02</span> Problem / Opportunity
                    </div>
                    <p className="text-brand-800 font-medium leading-relaxed">{study.details.problem}</p>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-brand-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                      <span className="text-brand-300">03</span> My Role
                    </div>
                    <p className="text-brand-800 font-medium leading-relaxed">{study.details.role}</p>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-brand-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                      <span className="text-brand-300">04</span> Strategic Thinking
                    </div>
                    <p className="text-brand-800 font-medium leading-relaxed">{study.details.thinking}</p>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-brand-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                      <span className="text-brand-300">05</span> Work
                    </div>
                    <p className="text-brand-800 font-medium leading-relaxed">{study.details.work}</p>
                  </div>

                  <div className={`bg-${study.color}-50/50 p-6 rounded-2xl border border-${study.color}-100`}>
                    <div className="text-sm font-bold text-brand-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                      <span className="text-brand-300">06</span> Outcome / Learning
                    </div>
                    <p className="text-brand-900 font-bold leading-relaxed">{study.details.outcome}</p>
                  </div>
                </div>

                {/* Large Flow Diagram */}
                <div className="mt-12 pt-12 border-t border-brand-100">
                  <div className="text-sm font-bold text-brand-400 tracking-widest uppercase mb-6 text-center">The Visual Story</div>
                  <FlowDiagram steps={study.story} color={study.color} />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
