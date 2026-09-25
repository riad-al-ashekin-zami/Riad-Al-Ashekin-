import React, { useState } from 'react';
import { MapPin, Building, ShieldCheck, ArrowRight } from 'lucide-react';

export function LocalSeoCalculator() {
  const [locations, setLocations] = useState(1);
  const [competition, setCompetition] = useState<'low' | 'medium' | 'high'>('medium');
  const [includeCitations, setIncludeCitations] = useState(true);
  const [includeReviews, setIncludeReviews] = useState(true);
  const [includeGeoPages, setIncludeGeoPages] = useState(true);

  // Compute pricing
  const basePerLocation = competition === 'low' ? 350 : competition === 'medium' ? 550 : 850;
  let subtotal = locations * basePerLocation;
  if (locations > 3) subtotal *= 0.85; // bulk multi-location discount
  if (includeCitations) subtotal += (locations * 120);
  if (includeReviews) subtotal += (locations * 100);
  if (includeGeoPages) subtotal += (locations * 180);

  const finalEst = Math.round(subtotal);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-2">
              Number of Physical Locations or Service Areas
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="25"
                value={locations}
                onChange={(e) => setLocations(Number(e.target.value))}
                className="flex-1 accent-accent-600"
              />
              <span className="font-mono font-bold text-base bg-brand-50 px-3 py-1.5 rounded-lg border border-brand-200">
                {locations} {locations === 1 ? 'Location' : 'Locations'}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-2">
              Local Market Competition Density
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['low', 'medium', 'high'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setCompetition(lvl)}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold capitalize transition-all ${
                    competition === lvl 
                      ? 'bg-brand-950 text-white border-brand-950 shadow-sm' 
                      : 'bg-brand-50 text-brand-700 border-brand-200 hover:bg-brand-100'
                  }`}
                >
                  {lvl} Market
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Service Add-Ons</span>
            
            <label className="flex items-center justify-between p-3 rounded-xl border border-brand-100 bg-brand-50/50 cursor-pointer text-xs">
              <span className="font-semibold text-brand-900">National Citation Syndicate & Aggregator Sync</span>
              <input
                type="checkbox"
                checked={includeCitations}
                onChange={(e) => setIncludeCitations(e.target.checked)}
                className="rounded text-accent-600 focus:ring-accent-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl border border-brand-100 bg-brand-50/50 cursor-pointer text-xs">
              <span className="font-semibold text-brand-900">Automated 5-Star Review Acquisition Pipeline</span>
              <input
                type="checkbox"
                checked={includeReviews}
                onChange={(e) => setIncludeReviews(e.target.checked)}
                className="rounded text-accent-600 focus:ring-accent-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl border border-brand-100 bg-brand-50/50 cursor-pointer text-xs">
              <span className="font-semibold text-brand-900">Geo-Targeted City Service Area Landing Pages</span>
              <input
                type="checkbox"
                checked={includeGeoPages}
                onChange={(e) => setIncludeGeoPages(e.target.checked)}
                className="rounded text-accent-600 focus:ring-accent-500"
              />
            </label>
          </div>
        </div>

        {/* Estimation Output Card */}
        <div className="bg-brand-50/80 p-6 rounded-2xl border border-brand-200 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-accent-700 uppercase tracking-wider">Estimated Monthly Investment</span>
            <div className="mt-4 mb-4">
              <div className="text-4xl font-extrabold text-brand-950 font-mono">
                ${finalEst.toLocaleString()} <span className="text-base font-normal text-brand-500">/ month</span>
              </div>
              <p className="text-xs text-brand-600 mt-1">Recommended retainer for {locations} {locations === 1 ? 'storefront' : 'storefronts'} in a {competition}-density market.</p>
            </div>

            <div className="space-y-2.5 border-t border-brand-200/60 pt-4 text-xs">
              <div className="flex items-center gap-2 text-brand-700">
                <ShieldCheck className="w-4 h-4 text-growth-600" />
                <span>Google Business Profile (GBP) category & weekly post management</span>
              </div>
              <div className="flex items-center gap-2 text-brand-700">
                <ShieldCheck className="w-4 h-4 text-growth-600" />
                <span>Local map pack geo-grid radius tracking report</span>
              </div>
              <div className="flex items-center gap-2 text-brand-700">
                <ShieldCheck className="w-4 h-4 text-growth-600" />
                <span>LocalBusiness JSON-LD schema verification</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-200">
            <a
              href="/seo-pricing/"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-brand-950 hover:bg-brand-900 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
            >
              View Pricing &amp; Retainers <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
