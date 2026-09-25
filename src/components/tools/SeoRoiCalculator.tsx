import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, ShoppingCart, Percent } from 'lucide-react';

export function SeoRoiCalculator() {
  const [currentTraffic, setCurrentTraffic] = useState(15000);
  const [projectedGrowthPct, setProjectedGrowthPct] = useState(75);
  const [conversionRatePct, setConversionRatePct] = useState(2.2);
  const [averageDealValue, setAverageDealValue] = useState(180);
  const [monthlyRetainer, setMonthlyRetainer] = useState(2500);
  const [campaignMonths, setCampaignMonths] = useState(12);

  // Math
  const newVisitsMonthly = Math.round(currentTraffic * (projectedGrowthPct / 100));
  const newTotalVisits = currentTraffic + newVisitsMonthly;
  const newMonthlyConversions = (newVisitsMonthly * (conversionRatePct / 100));
  const newMonthlyRevenue = newMonthlyConversions * averageDealValue;
  const totalAnnualIncrementalRevenue = newMonthlyRevenue * campaignMonths;
  const totalSeoCost = monthlyRetainer * campaignMonths;
  const netProfit = totalAnnualIncrementalRevenue - totalSeoCost;
  const roiPct = totalSeoCost > 0 ? Math.round((netProfit / totalSeoCost) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5">
          <h4 className="text-sm font-bold text-brand-950 uppercase tracking-wider">Campaign Parameters</h4>

          <div>
            <div className="flex justify-between text-xs font-semibold text-brand-700 mb-1.5">
              <span>Current Monthly Organic Visitors</span>
              <span className="font-mono text-brand-950">{currentTraffic.toLocaleString()} / mo</span>
            </div>
            <input
              type="range"
              min="1000"
              max="200000"
              step="1000"
              value={currentTraffic}
              onChange={(e) => setCurrentTraffic(Number(e.target.value))}
              className="w-full accent-accent-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-brand-700 mb-1.5">
              <span>Expected Organic Growth (% over current)</span>
              <span className="font-mono text-brand-950">+{projectedGrowthPct}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="300"
              step="5"
              value={projectedGrowthPct}
              onChange={(e) => setProjectedGrowthPct(Number(e.target.value))}
              className="w-full accent-accent-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-brand-700 mb-1.5">
              <span>Website Conversion Rate (%)</span>
              <span className="font-mono text-brand-950">{conversionRatePct}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={conversionRatePct}
              onChange={(e) => setConversionRatePct(Number(e.target.value))}
              className="w-full accent-accent-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-brand-700 mb-1.5">
              <span>Average Order Value / Customer LTV ($)</span>
              <span className="font-mono text-brand-950">${averageDealValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="20"
              max="5000"
              step="20"
              value={averageDealValue}
              onChange={(e) => setAverageDealValue(Number(e.target.value))}
              className="w-full accent-accent-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-brand-700 mb-1.5">
              <span>Monthly SEO Budget / Retainer ($)</span>
              <span className="font-mono text-brand-950">${monthlyRetainer.toLocaleString()} / mo</span>
            </div>
            <input
              type="range"
              min="500"
              max="15000"
              step="250"
              value={monthlyRetainer}
              onChange={(e) => setMonthlyRetainer(Number(e.target.value))}
              className="w-full accent-accent-600"
            />
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-brand-50/80 p-6 rounded-2xl border border-brand-200 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-accent-700 uppercase tracking-wider">12-Month Financial Forecast</span>
            <div className="mt-4 mb-6">
              <div className="text-4xl font-extrabold text-brand-950 font-mono tracking-tight">
                {roiPct > 0 ? `+${roiPct}%` : `${roiPct}%`}
              </div>
              <p className="text-xs text-brand-600 font-medium mt-1">Projected Return on Investment (ROI)</p>
            </div>

            <div className="space-y-3 border-t border-brand-200/60 pt-4 text-xs">
              <div className="flex justify-between py-1 border-b border-brand-100">
                <span className="text-brand-600">New Monthly Organic Traffic:</span>
                <span className="font-bold text-brand-900 font-mono">+{newVisitsMonthly.toLocaleString()} visits/mo</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-100">
                <span className="text-brand-600">Incremental Monthly Revenue:</span>
                <span className="font-bold text-growth-700 font-mono">+${Math.round(newMonthlyRevenue).toLocaleString()} / mo</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-100">
                <span className="text-brand-600">Total 12-Month Gross Return:</span>
                <span className="font-bold text-brand-900 font-mono">${Math.round(totalAnnualIncrementalRevenue).toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-100">
                <span className="text-brand-600">Total Annual SEO Investment:</span>
                <span className="font-bold text-brand-900 font-mono">${totalSeoCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1.5 font-bold">
                <span className="text-brand-950">Net Annual Profit:</span>
                <span className={`font-mono text-sm ${netProfit >= 0 ? 'text-growth-600' : 'text-red-600'}`}>
                  ${Math.round(netProfit).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-white rounded-xl border border-brand-200 text-[11px] text-brand-600 leading-relaxed">
            Unlike pay-per-click ad spending which disappears the moment budgets stop, high-ranking organic content continues compounding traffic into subsequent fiscal years.
          </div>
        </div>
      </div>
    </div>
  );
}
