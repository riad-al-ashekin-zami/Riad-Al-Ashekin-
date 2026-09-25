import React from 'react';
import { FileText, Download, ShieldCheck, CheckCircle2, TrendingUp, BarChart2 } from 'lucide-react';

export function PdfViewerPage() {
  const handleDownload = () => {
    // Generate text/pdf simulated payload
    const content = `RIAD AL ASHEKIN - FULL PERFORMANCE AUDIT REPORT\n================================================\nDate: December 2025\nStatus: Verified\n\nExecutive Metrics:\n- Organic Traffic: +340% YoY\n- Technical Crawl Errors Resolved: 99.8%\n- Core Web Vitals Pass Rate: 98.4%\n- Pipeline Attributed: $1,240,000 USD\n\nMethodologies Applied:\n1. Semantic Entity Clustering\n2. Programmatic URL Architecture\n3. Core Web Vitals Optimization\n4. Digital PR & Authority Citation Building\n\nOfficial Website: https://riadalashekin.com`;
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Full-Performance-Riad-Al-Ashekin.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center border border-red-200 shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-brand-950">Full-Performance.pdf</h3>
            <p className="text-xs text-brand-500 font-mono">Adobe PDF Document • 2.4 MB • Verified Telemetry</p>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-950 hover:bg-brand-900 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
        >
          <Download className="w-4 h-4" /> Download PDF Report
        </button>
      </div>

      {/* Simulated Document Reader / Teaser */}
      <div className="bg-brand-50/70 border border-brand-200 rounded-2xl p-6 space-y-6">
        <div className="flex items-center justify-between text-xs font-bold text-brand-600 uppercase tracking-wider pb-3 border-b border-brand-200">
          <span>Executive Audit Summary & Milestones</span>
          <span className="text-growth-600 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified Client Data
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-brand-200">
            <div className="text-xs text-brand-500 font-semibold mb-1">Organic Demo Growth</div>
            <div className="text-2xl font-bold text-growth-600 font-mono">+340%</div>
            <div className="text-[11px] text-brand-400 mt-1">9-Month Implementation</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-brand-200">
            <div className="text-xs text-brand-500 font-semibold mb-1">Crawl Bloat Reduced</div>
            <div className="text-2xl font-bold text-brand-950 font-mono">-92%</div>
            <div className="text-[11px] text-brand-400 mt-1">Faceted Navigation Fix</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-brand-200">
            <div className="text-xs text-brand-500 font-semibold mb-1">Pipeline Attributed</div>
            <div className="text-2xl font-bold text-accent-700 font-mono">$1.24M</div>
            <div className="text-[11px] text-brand-400 mt-1">B2B SaaS Organic Inbound</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-brand-200 space-y-2 text-xs text-brand-700 leading-relaxed">
          <p className="font-bold text-brand-950">Key Audit Interventions Included in this Report:</p>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>Re-architected category taxonomies eliminating 45,000 orphan and duplicate URLs</li>
            <li>Deployed 120 programmatic SaaS integration comparison landing pages</li>
            <li>Optimized Mobile Core Web Vitals to achieve 100% "Good" status across all key revenue templates</li>
            <li>Executed high-authority white-hat digital PR acquisition across premier tech publications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
