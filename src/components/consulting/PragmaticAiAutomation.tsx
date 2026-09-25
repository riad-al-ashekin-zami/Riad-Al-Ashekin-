import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Lock, 
  UserCheck, 
  Coins, 
  Activity,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Database,
  FileCode2,
  Workflow,
  Search,
  Scale,
  XCircle,
  HelpCircle,
  Layers
} from 'lucide-react';

interface Blueprint {
  id: string;
  title: string;
  badge: string;
  icon: any;
  problem: string;
  architectureFlow: { step: string; label: string }[];
  technicalSpecs: string;
  economicPayoff: string;
}

const BLUEPRINTS: Blueprint[] = [
  {
    id: 'workflow',
    title: 'Event-Driven Workflow Automation',
    badge: 'Operations & ERP',
    icon: Workflow,
    problem: 'Manual data handoffs and human delay across CRM, invoicing, and team messaging.',
    architectureFlow: [
      { step: '01 Event', label: 'Stripe webhook triggers on checkout' },
      { step: '02 Filter', label: 'Deterministic payload validation' },
      { step: '03 Routing', label: 'CRM provisioned & client workspace created' },
      { step: '04 Telemetry', label: 'Audit logged & Slack notification dispatched' }
    ],
    technicalSpecs: 'Stateless webhook consumers, idempotent queue workers, zero LLM hallucination risk.',
    economicPayoff: 'Recovers 15-20 engineering/admin hours weekly with sub-second execution.'
  },
  {
    id: 'extraction',
    title: 'Schema-Strict Document Parsing',
    badge: 'Zero Manual Entry',
    icon: FileCode2,
    problem: 'Staff manually transcribing messy vendor invoices, PDF contracts, and complex RFP documents.',
    architectureFlow: [
      { step: '01 Ingest', label: 'Unstructured PDF/OCR text ingestion' },
      { step: '02 Extract', label: 'Constrained LLM extraction to typed JSON' },
      { step: '03 Validate', label: 'Zod/Pydantic schema verification against DB' },
      { step: '04 Commit', label: 'Database insertion or exception queue' }
    ],
    technicalSpecs: 'Strict temperature 0.0, output JSON schema enforcement, regex checksum validation.',
    economicPayoff: 'Cuts invoice entry error rate from 8% to <0.1% while processing documents in seconds.'
  },
  {
    id: 'rag',
    title: 'Enterprise Knowledge Retrieval (RAG)',
    badge: 'Internal Intelligence',
    icon: Database,
    problem: 'Company know-how scattered across disparate Google Docs, Notion pages, and past proposals.',
    architectureFlow: [
      { step: '01 Vectorize', label: 'Private docs chunked & embedded locally' },
      { step: '02 Search', label: 'Hybrid dense/sparse semantic retrieval' },
      { step: '03 Ground', label: 'Model constrained to retrieved context only' },
      { step: '04 Source', label: 'Response served with exact doc citations' }
    ],
    technicalSpecs: 'Private zero-data-retention APIs, authenticated RBAC, source citation required on every claim.',
    economicPayoff: 'New hires access 5+ years of verified institutional knowledge without interrupting senior staff.'
  },
  {
    id: 'schema',
    title: 'Programmatic Schema & Metadata Engines',
    badge: 'Search & Scale',
    icon: Search,
    problem: 'Large catalog platforms lacking deep entity-level schema and structured search visibility.',
    architectureFlow: [
      { step: '01 Audit', label: 'Catalog database queried for missing entities' },
      { step: '02 Synthesize', label: 'Entity mapping with Wikidata & Schema.org' },
      { step: '03 Validate', label: 'Google Rich Results validator automated test' },
      { step: '04 Deploy', label: 'JSON-LD injected into static SSR pipeline' }
    ],
    technicalSpecs: 'Automated CI/CD schema regression checks, zero runtime latency impact.',
    economicPayoff: 'Powers thousands of programmatic search landing pages with verified rich snippet eligibility.'
  }
];

interface Guardrail {
  id: string;
  name: string;
  icon: any;
  riskIfIgnored: string;
  engineeringFix: string;
  passCriteria: string;
}

const GUARDRAILS: Guardrail[] = [
  {
    id: 'hallucination',
    name: 'Hallucination & Data Integrity',
    icon: ShieldAlert,
    riskIfIgnored: 'Unchecked models invent facts, quote invalid prices, or corrupt relational database records.',
    engineeringFix: 'Enforce deterministic schemas (Zod/Pydantic), low temperature (0.0-0.2), and strict verification gates before saving.',
    passCriteria: 'Zero unverified LLM output written directly to production database.'
  },
  {
    id: 'privacy',
    name: 'Confidentiality & Data Sovereignty',
    icon: Lock,
    riskIfIgnored: 'Proprietary source code, customer PII, or financial margins leaked into public foundation model training corpuses.',
    engineeringFix: 'Enforce enterprise zero-data-retention API contracts, private VPC endpoints, and client-side token scrubbing.',
    passCriteria: 'Legal audit confirms enterprise data exclusion and role-based access tokens.'
  },
  {
    id: 'human',
    name: 'Human-in-the-Loop Governance',
    icon: UserCheck,
    riskIfIgnored: 'Fully autonomous agents execute high-consequence irreversible actions (billing, client email, legal commitments).',
    engineeringFix: 'Structure AI as a drafter and compiler that prepares state transitions; human reviews and confirms execution.',
    passCriteria: 'Irreversible operations require explicit human cryptographic sign-off.'
  },
  {
    id: 'cost',
    name: 'Economic Utility vs Compute Cost',
    icon: Coins,
    riskIfIgnored: 'Escalating monthly token bills, vector DB hosting, and latency spikes with no measurable gross margin expansion.',
    engineeringFix: 'Audit every AI ticket against pure code. If a $0 SQL query or regex solves it, ban LLM usage.',
    passCriteria: 'Demonstrable 5x+ ROI over compute costs or direct reduction in payroll hours.'
  },
  {
    id: 'resilience',
    name: 'System Resilience & Fallback Paths',
    icon: Activity,
    riskIfIgnored: 'Third-party API downtime, rate limits, or slow response times breaking customer-facing applications.',
    engineeringFix: 'Implement asynchronous message queues, circuit breakers, timeout limits, and deterministic fallback modes.',
    passCriteria: 'Application functions gracefully even if third-party AI APIs become 100% unavailable.'
  }
];

const COMPARISONS = [
  {
    hype: 'Replacing entire teams with "Autonomous AI Agents"',
    reality: 'Empowering specialized humans with deterministic workflow automation'
  },
  {
    hype: 'Deploying expensive open-ended chat widgets with hallucination risk',
    reality: 'Strictly structured JSON extraction and internal knowledge retrieval with citations'
  },
  {
    hype: 'Building custom LLM models for simple search and filtering tasks',
    reality: 'Fast, free, 100% reliable SQL queries, caching, and clean schema architecture'
  }
];

export function PragmaticAiAutomation() {
  const [activeTab, setActiveTab] = useState<'blueprints' | 'guardrails' | 'decision'>('blueprints');
  const [selectedBlueprint, setSelectedBlueprint] = useState<string>('workflow');

  const currentBlueprint = BLUEPRINTS.find(b => b.id === selectedBlueprint) || BLUEPRINTS[0];
  const CurrentIcon = currentBlueprint.icon;

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-brand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-brand-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              <Cpu className="w-3.5 h-3.5 text-amber-600" />
              <span>Pragmatic Leverage • Zero Hype</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-brand-950 tracking-tight">
              AI &amp; Automation as Disciplined Architecture
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-500 max-w-md leading-relaxed">
            AI is an algorithmic component in a broader system architecture. It delivers real commercial value only when backed by clean data, deterministic safeguards, and economic utility.
          </p>
        </div>

        {/* Hype vs Reality Executive Barometer */}
        <div className="bg-[#fafafc] rounded-2xl p-4 sm:p-5 border border-brand-200/80 mb-7 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-brand-900 uppercase tracking-wider mb-3">
            <Scale className="w-4 h-4 text-accent-700" />
            <span>The Reality Barometer: Commercial Pragmatism vs Tech Hype</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {COMPARISONS.map((comp, idx) => (
              <div key={idx} className="bg-white rounded-xl p-3.5 border border-brand-200/70 space-y-2.5">
                <div className="flex items-start gap-2 text-sm text-rose-700 leading-snug">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="line-through opacity-85">{comp.hype}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-emerald-800 font-medium leading-snug pt-2 border-t border-brand-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{comp.reality}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Mode Switcher Tabs (3 Lenses) */}
        <div className="flex flex-wrap items-center gap-2.5 mb-7">
          <button
            onClick={() => setActiveTab('blueprints')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'blueprints'
                ? 'bg-brand-950 text-white shadow-xs'
                : 'bg-[#fafafc] hover:bg-brand-50 text-brand-700 border border-brand-200/80'
            }`}
          >
            <Workflow className="w-4 h-4" />
            <span>1. High-ROI Blueprints (Where It Works)</span>
          </button>

          <button
            onClick={() => setActiveTab('guardrails')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'guardrails'
                ? 'bg-brand-950 text-white shadow-xs'
                : 'bg-[#fafafc] hover:bg-brand-50 text-brand-700 border border-brand-200/80'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>2. Production Guardrails (Risk Control)</span>
          </button>

          <button
            onClick={() => setActiveTab('decision')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'decision'
                ? 'bg-brand-950 text-white shadow-xs'
                : 'bg-[#fafafc] hover:bg-brand-50 text-brand-700 border border-brand-200/80'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>3. When NOT to Use AI (Decision Tree)</span>
          </button>
        </div>

        {/* TAB 1: HIGH-ROI BLUEPRINTS */}
        {activeTab === 'blueprints' && (
          <div className="space-y-4">
            {/* Blueprint Selector Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
              {BLUEPRINTS.map((b) => {
                const isSelected = selectedBlueprint === b.id;
                const BIcon = b.icon;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBlueprint(b.id)}
                    className={`p-3 rounded-xl text-left transition-all border cursor-pointer flex flex-col justify-between space-y-2 ${
                      isSelected
                        ? 'bg-brand-950 text-white border-brand-950 shadow-xs'
                        : 'bg-[#fafafc] hover:bg-white text-brand-800 border-brand-200/80 hover:border-brand-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-white/10 text-white' : 'bg-white border border-brand-200 text-accent-700'
                      }`}>
                        <BIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-white/15 text-accent-300' : 'bg-brand-100 text-brand-700'
                      }`}>
                        {b.badge}
                      </span>
                    </div>
                    <div className="text-xs font-bold leading-tight line-clamp-2">
                      {b.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Blueprint Detail Container */}
            <div className="bg-[#fafafc] rounded-2xl border border-brand-200/90 p-4 sm:p-6 shadow-2xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-brand-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-950 text-white flex items-center justify-center">
                    <CurrentIcon className="w-4 h-4 text-accent-300" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-brand-950">
                      {currentBlueprint.title}
                    </h3>
                    <p className="text-xs text-brand-500">
                      Target Friction: {currentBlueprint.problem}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 self-start sm:self-auto font-bold">
                  Verified In Production
                </span>
              </div>

              {/* Visual Pipeline Flow (100% Mobile Natural) */}
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-400 uppercase tracking-wider block mb-2">
                  Deterministic Execution Pipeline:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {currentBlueprint.architectureFlow.map((step, sIdx) => (
                    <div key={sIdx} className="bg-white rounded-xl p-3 border border-brand-200/80 space-y-1 relative">
                      <div className="text-[10px] font-mono font-bold text-accent-700">
                        {step.step}
                      </div>
                      <div className="text-xs text-brand-800 font-medium leading-snug">
                        {step.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications & Economic Payoff */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="bg-white rounded-xl p-3.5 border border-brand-200/70 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-400">
                    Engineering Architecture:
                  </span>
                  <p className="text-xs text-brand-700 leading-relaxed">
                    {currentBlueprint.technicalSpecs}
                  </p>
                </div>

                <div className="bg-emerald-50/60 rounded-xl p-3.5 border border-emerald-200/70 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                    Verified Economic Payoff:
                  </span>
                  <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                    {currentBlueprint.economicPayoff}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTION GUARDRAILS */}
        {activeTab === 'guardrails' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {GUARDRAILS.map((g) => {
              const GIcon = g.icon;
              return (
                <div 
                  key={g.id}
                  className="bg-[#fafafc] hover:bg-white rounded-2xl p-4 border border-brand-200/80 hover:border-brand-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-brand-100 text-brand-900 flex items-center justify-center">
                        <GIcon className="w-3.5 h-3.5 text-accent-700" />
                      </div>
                      <h3 className="text-xs font-bold text-brand-950">
                        {g.name}
                      </h3>
                    </div>

                    <div className="text-[11px] text-rose-900 bg-rose-50/70 p-2 rounded-lg border border-rose-200/60 leading-snug">
                      <span className="font-bold uppercase text-[9px] font-mono block text-rose-800">
                        Unchecked Danger:
                      </span>
                      {g.riskIfIgnored}
                    </div>

                    <div className="text-[11px] text-brand-800 bg-white p-2 rounded-lg border border-brand-200/70 leading-snug">
                      <span className="font-bold uppercase text-[9px] font-mono block text-brand-600">
                        Engineering Guardrail:
                      </span>
                      {g.engineeringFix}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-brand-200/60 text-[10px] font-mono text-emerald-700 flex items-start gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Pass: {g.passCriteria}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 3: DECISION TREE (WHEN NOT TO USE AI) */}
        {activeTab === 'decision' && (
          <div className="bg-[#fafafc] rounded-2xl border border-brand-200/90 p-4 sm:p-6 shadow-2xs space-y-4">
            <div className="max-w-2xl space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-brand-950">
                The Golden Filter: When NOT to Deploy Artificial Intelligence
              </h3>
              <p className="text-xs text-brand-600 leading-relaxed">
                Before approving budget or writing code for an LLM integration, apply this deterministic 3-question filter. If any condition is met, use traditional software instead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-3.5 border border-brand-200/80 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-950">
                  <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-mono text-[10px]">1</span>
                  <span>Can code solve it?</span>
                </div>
                <p className="text-xs text-brand-600 leading-relaxed">
                  If regular expressions, database indexing, or deterministic script logic can handle the task, <span className="font-bold text-brand-900">never use an LLM</span>. Code is 100% predictable, costs $0 in tokens, and runs in milliseconds.
                </p>
                <span className="text-[10px] font-mono text-accent-700 bg-accent-50 px-2 py-0.5 rounded block text-center font-bold">
                  Rule: Code &gt; Models
                </span>
              </div>

              <div className="bg-white rounded-xl p-3.5 border border-brand-200/80 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-950">
                  <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-mono text-[10px]">2</span>
                  <span>Is error acceptable?</span>
                </div>
                <p className="text-xs text-brand-600 leading-relaxed">
                  If a single hallucination causes financial loss, compliance penalties, or client breach of trust, the model must be strictly gated by human verification before executing.
                </p>
                <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded block text-center font-bold">
                  Rule: Zero Irreversible Actions
                </span>
              </div>

              <div className="bg-white rounded-xl p-3.5 border border-brand-200/80 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-950">
                  <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-mono text-[10px]">3</span>
                  <span>Does unit margin hold?</span>
                </div>
                <p className="text-xs text-brand-600 leading-relaxed">
                  Calculate token and vector compute costs at 10x your current volume. If compute growth outpaces client revenue or gross margin, re-architect with caching or rule engines.
                </p>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded block text-center font-bold">
                  Rule: Margin Before Novelty
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Advisory Mandate */}
        <div className="mt-5 bg-[#fafafc] border border-brand-200/90 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-700 block">
              Architectural Mandate
            </span>
            <p className="text-xs text-brand-700 leading-snug">
              Never implement an AI model where a simple SQL query, regex, or automated webhook pipeline delivers 100% accuracy at zero recurring inference cost.
            </p>
          </div>
          <span className="shrink-0 text-[11px] font-mono font-bold text-brand-900 bg-white px-2.5 py-1 rounded-lg border border-brand-200 self-start sm:self-auto">
            Deterministic Systems First
          </span>
        </div>

      </div>
    </section>
  );
}
