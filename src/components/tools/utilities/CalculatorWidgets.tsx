import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Maximize2, Volume2, ArrowLeftRight } from 'lucide-react';
import {
  CopyButton,
  ErrorBanner,
  FormulaBox,
  inputCls,
  selectCls,
  primaryBtnCls,
  secondaryBtnCls,
} from './shared';

const fmt = (n: number, dec = 2) => (Number.isFinite(n) ? n.toLocaleString(undefined, { maximumFractionDigits: dec }) : '—');

/* ============================================================================
 * 26) Percentage Calculator (/percentage-calculator/)
 * ========================================================================== */
export function PercentageCalculatorWidget() {
  const [a1, setA1] = useState(15);
  const [b1, setB1] = useState(240);
  const [a2, setA2] = useState(45);
  const [b2, setB2] = useState(180);
  const [a3, setA3] = useState(80);
  const [b3, setB3] = useState(100);

  const r1 = (a1 / 100) * b1;
  const r2 = b2 !== 0 ? (a2 / b2) * 100 : NaN;
  const r3 = a3 !== 0 ? ((b3 - a3) / a3) * 100 : NaN;

  const summary = `1) ${a1}% of ${b1} = ${fmt(r1, 4)}\n2) ${a2} is ${fmt(r2, 4)}% of ${b2}\n3) Change from ${a3} to ${b3} = ${r3 >= 0 ? '+' : ''}${fmt(r3, 4)}%`;

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      {/* Mode 1 */}
      <div className="p-4 rounded-xl bg-brand-50/60 border border-brand-200 space-y-3">
        <div className="text-xs font-bold text-brand-700 uppercase">1. What is X% of Y?</div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>What is</span>
          <input type="number" aria-label="Percentage X" value={a1} onChange={(e) => setA1(Number(e.target.value))} className={`${inputCls} w-28 font-mono`} />
          <span>% of</span>
          <input type="number" aria-label="Base number Y" value={b1} onChange={(e) => setB1(Number(e.target.value))} className={`${inputCls} w-32 font-mono`} />
          <span>=</span>
          <span className="text-lg font-mono font-bold tabular-nums text-accent-700">{fmt(r1, 4)}</span>
          <CopyButton text={String(Number(r1.toFixed(6)))} />
        </div>
        <div className="text-xs font-mono text-brand-600">Formula: (X / 100) × Y = ({a1} / 100) × {b1} = {fmt(r1, 4)}</div>
      </div>

      {/* Mode 2 */}
      <div className="p-4 rounded-xl bg-brand-50/60 border border-brand-200 space-y-3">
        <div className="text-xs font-bold text-brand-700 uppercase">2. X is what percent of Y?</div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <input type="number" aria-label="Part value X" value={a2} onChange={(e) => setA2(Number(e.target.value))} className={`${inputCls} w-28 font-mono`} />
          <span>is what % of</span>
          <input type="number" aria-label="Total value Y" value={b2} onChange={(e) => setB2(Number(e.target.value))} className={`${inputCls} w-32 font-mono`} />
          <span>=</span>
          <span className="text-lg font-mono font-bold tabular-nums text-accent-700">{Number.isFinite(r2) ? `${fmt(r2, 4)}%` : 'Undefined (Y = 0)'}</span>
          <CopyButton text={Number.isFinite(r2) ? `${Number(r2.toFixed(6))}%` : ''} disabled={!Number.isFinite(r2)} />
        </div>
        <div className="text-xs font-mono text-brand-600">Formula: (X / Y) × 100 = ({a2} / {b2}) × 100</div>
      </div>

      {/* Mode 3 */}
      <div className="p-4 rounded-xl bg-brand-50/60 border border-brand-200 space-y-3">
        <div className="text-xs font-bold text-brand-700 uppercase">3. Percentage Increase or Decrease</div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>From</span>
          <input type="number" aria-label="Starting value X" value={a3} onChange={(e) => setA3(Number(e.target.value))} className={`${inputCls} w-28 font-mono`} />
          <span>to</span>
          <input type="number" aria-label="New value Y" value={b3} onChange={(e) => setB3(Number(e.target.value))} className={`${inputCls} w-32 font-mono`} />
          <span>=</span>
          <span className="text-lg font-mono font-bold tabular-nums text-accent-700">
            {Number.isFinite(r3) ? `${r3 > 0 ? '+' : ''}${fmt(r3, 4)}%` : 'Undefined (start = 0)'}
          </span>
          <CopyButton text={Number.isFinite(r3) ? `${r3 > 0 ? '+' : ''}${Number(r3.toFixed(6))}%` : ''} disabled={!Number.isFinite(r3)} />
        </div>
        <div className="text-xs font-mono text-brand-600">Formula: ((New - Old) / Old) × 100 = (({b3} - {a3}) / {a3}) × 100</div>
      </div>

      <div className="flex justify-end">
        <CopyButton text={summary} label="Copy All Results" />
      </div>
    </div>
  );
}

/* ============================================================================
 * 27) Age Calculator (/age-calculator/)
 * ========================================================================== */
function todayIsoDate() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function AgeCalculatorWidget() {
  const [dob, setDob] = useState('1996-05-15');
  const [targetDate, setTargetDate] = useState(todayIsoDate);

  const calc = useMemo(() => {
    if (!dob || !targetDate) return { error: 'Select both a date of birth and an age-at date.', data: null };
    const [by, bm, bd] = dob.split('-').map(Number);
    const [ty, tm, td] = targetDate.split('-').map(Number);
    const start = new Date(Date.UTC(by, bm - 1, bd));
    const end = new Date(Date.UTC(ty, tm - 1, td));
    if (end < start) return { error: 'The "Age at" date must be on or after the date of birth.', data: null };

    let years = ty - by;
    let months = tm - bm;
    let days = td - bd;

    if (days < 0) {
      const prevMonthDays = new Date(Date.UTC(ty, tm - 1, 0)).getUTCDate();
      days += prevMonthDays;
      months -= 1;
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    const totalDays = Math.round((end.getTime() - start.getTime()) / 86400000);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    let nextBdayYear = ty;
    let nextBday = new Date(Date.UTC(nextBdayYear, bm - 1, bd));
    if (nextBday <= end) {
      nextBdayYear++;
      nextBday = new Date(Date.UTC(nextBdayYear, bm - 1, bd));
    }
    const daysToNext = Math.round((nextBday.getTime() - end.getTime()) / 86400000);

    return {
      error: null,
      data: { years, months, days, totalMonths, totalWeeks, totalDays, daysToNext },
    };
  }, [dob, targetDate]);

  const resultSummary = calc.data
    ? `${calc.data.years} years, ${calc.data.months} months, ${calc.data.days} days (${calc.data.totalDays} total days; ${calc.data.daysToNext} days until next birthday)`
    : '';

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="age-dob" className="block text-xs font-bold text-brand-900">Date of Birth</label>
          <input id="age-dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} className={inputCls} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="age-at" className="block text-xs font-bold text-brand-900">Calculate Age At Date</label>
          <input id="age-at" type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} className={inputCls} />
        </div>
      </div>

      <ErrorBanner message={calc.error} />

      {calc.data && (
        <>
          <div className="p-5 rounded-xl bg-brand-950 text-white flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-brand-300 uppercase">Exact Age</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums mt-1">
                {calc.data.years}y {calc.data.months}m {calc.data.days}d
              </div>
            </div>
            <CopyButton text={resultSummary} label="Copy Result" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Total Months</div>
              <div className="text-xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.totalMonths, 0)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Total Weeks</div>
              <div className="text-xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.totalWeeks, 0)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Total Days</div>
              <div className="text-xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.totalDays, 0)}</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-[11px] font-bold text-emerald-700 uppercase">Next Birthday</div>
              <div className="text-xl font-mono font-bold tabular-nums text-emerald-900">{calc.data.daysToNext} days</div>
            </div>
          </div>
        </>
      )}

      <FormulaBox formula="Exact calendar breakdown borrows days from the preceding calendar month (28, 29, 30, or 31 days) and counts exact elapsed UTC days / 86,400,000 ms." />
    </div>
  );
}

/* ============================================================================
 * 28) Date Difference Calculator (/date-difference-calculator/)
 * ========================================================================== */
export function DateDifferenceWidget() {
  const [startDate, setStartDate] = useState('2026-01-01');
  const [endDate, setEndDate] = useState('2026-04-15');
  const [includeEnd, setIncludeEnd] = useState(false);
  const [baseDate, setBaseDate] = useState(todayIsoDate);
  const [offsetDays, setOffsetDays] = useState(30);
  const [offsetOp, setOffsetOp] = useState<'add' | 'sub'>('add');

  const diff = useMemo(() => {
    if (!startDate || !endDate) return { error: 'Select both start and end dates.', data: null };
    const [sy, sm, sd] = startDate.split('-').map(Number);
    const [ey, em, ed] = endDate.split('-').map(Number);
    let d1 = new Date(Date.UTC(sy, sm - 1, sd));
    let d2 = new Date(Date.UTC(ey, em - 1, ed));
    if (d2 < d1) [d1, d2] = [d2, d1];

    const rawDays = Math.round((d2.getTime() - d1.getTime()) / 86400000);
    const totalDays = rawDays + (includeEnd ? 1 : 0);

    // Mon-Fri count between d1 and d2
    let businessDays = 0;
    const cur = new Date(d1.getTime());
    const limit = includeEnd ? d2.getTime() : d2.getTime() - 86400000;
    while (cur.getTime() <= limit) {
      const dow = cur.getUTCDay();
      if (dow !== 0 && dow !== 6) businessDays++;
      cur.setUTCDate(cur.getUTCDate() + 1);
    }

    // Calendar Y/M/D
    const effEnd = new Date(d2.getTime() + (includeEnd ? 86400000 : 0));
    let y = effEnd.getUTCFullYear() - d1.getUTCFullYear();
    let m = effEnd.getUTCMonth() - d1.getUTCMonth();
    let d = effEnd.getUTCDate() - d1.getUTCDate();
    if (d < 0) {
      d += new Date(Date.UTC(effEnd.getUTCFullYear(), effEnd.getUTCMonth(), 0)).getUTCDate();
      m--;
    }
    if (m < 0) {
      m += 12;
      y--;
    }

    return {
      error: null,
      data: {
        totalDays,
        weeks: Math.floor(totalDays / 7),
        remDays: totalDays % 7,
        y, m, d,
        businessDays,
      },
    };
  }, [startDate, endDate, includeEnd]);

  const shiftedDate = useMemo(() => {
    if (!baseDate) return '';
    const [y, m, d] = baseDate.split('-').map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    dt.setUTCDate(dt.getUTCDate() + (offsetOp === 'add' ? offsetDays : -offsetDays));
    return dt.toISOString().split('T')[0];
  }, [baseDate, offsetDays, offsetOp]);

  const summary = diff.data
    ? `${diff.data.totalDays} days (${diff.data.y}y ${diff.data.m}m ${diff.data.d}d) | ${diff.data.businessDays} business days (Mon–Fri)`
    : '';

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="dd-start" className="block text-xs font-bold text-brand-900">Start Date</label>
          <input id="dd-start" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={inputCls} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="dd-end" className="block text-xs font-bold text-brand-900">End Date</label>
          <input id="dd-end" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={inputCls} />
        </div>
      </div>

      <label className="inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
        <input type="checkbox" checked={includeEnd} onChange={(e) => setIncludeEnd(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
        <span className="font-medium text-brand-900">Include end date (+1 day)</span>
      </label>

      <ErrorBanner message={diff.error} />

      {diff.data && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-brand-950 text-white">
              <div className="text-[11px] font-bold text-brand-300 uppercase">Total Days</div>
              <div className="text-2xl font-mono font-bold tabular-nums">{diff.data.totalDays}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Weeks + Days</div>
              <div className="text-xl font-mono font-bold tabular-nums text-brand-950">{diff.data.weeks}w {diff.data.remDays}d</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Years / Months / Days</div>
              <div className="text-lg font-mono font-bold tabular-nums text-brand-950">{diff.data.y}y {diff.data.m}m {diff.data.d}d</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-[11px] font-bold text-emerald-700 uppercase">Business Days (M–F)</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-emerald-900">{diff.data.businessDays}</div>
            </div>
          </div>
          <div className="flex justify-end">
            <CopyButton text={summary} label="Copy Summary" />
          </div>
        </>
      )}

      <div className="p-4 rounded-xl bg-brand-50/70 border border-brand-200 space-y-3">
        <div className="text-xs font-bold text-brand-800 uppercase">Add or Subtract Days from a Date</div>
        <div className="flex flex-wrap items-center gap-3">
          <input type="date" aria-label="Base date" value={baseDate} onChange={(e) => setBaseDate(e.target.value)} className={`${inputCls} w-auto`} />
          <select aria-label="Operation" value={offsetOp} onChange={(e) => setOffsetOp(e.target.value as 'add' | 'sub')} className={selectCls}>
            <option value="add">+ Add</option>
            <option value="sub">- Subtract</option>
          </select>
          <input type="number" aria-label="Number of days" value={offsetDays} onChange={(e) => setOffsetDays(Number(e.target.value) || 0)} className={`${inputCls} w-28 font-mono`} />
          <span className="text-sm font-bold text-brand-950 font-mono">= {shiftedDate}</span>
          <CopyButton text={shiftedDate} disabled={!shiftedDate} />
        </div>
      </div>

      <FormulaBox formula="Days = (End UTC Date - Start UTC Date) / 86,400,000 + (Include End Date ? 1 : 0); Business Days counts weekdays Monday–Friday." />
    </div>
  );
}

/* ============================================================================
 * 29) Loan EMI Calculator (/emi-calculator/)
 * ========================================================================== */
export function EmiCalculatorWidget() {
  const [principal, setPrincipal] = useState(50000);
  const [annualRate, setAnnualRate] = useState(8.5);
  const [tenure, setTenure] = useState(36);
  const [unit, setUnit] = useState<'months' | 'years'>('months');

  const calc = useMemo(() => {
    const months = unit === 'years' ? Math.round(tenure * 12) : Math.round(tenure);
    if (principal <= 0 || annualRate < 0 || months <= 0) {
      return { error: 'Enter a positive loan amount, non-negative interest rate, and positive tenure.', data: null };
    }
    const r = annualRate / 12 / 100;
    const emi = r === 0 ? principal / months : (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    const schedule: Array<{ month: number; payment: number; principalPaid: number; interestPaid: number; balance: number }> = [];
    let balance = principal;
    for (let m = 1; m <= months; m++) {
      const interestPaid = balance * r;
      const principalPaid = Math.min(balance, emi - interestPaid);
      balance = Math.max(0, balance - principalPaid);
      schedule.push({ month: m, payment: principalPaid + interestPaid, principalPaid, interestPaid, balance });
    }

    return { error: null, data: { emi, totalInterest, totalPayment, months, schedule } };
  }, [principal, annualRate, tenure, unit]);

  const copyStr = calc.data
    ? `Monthly EMI: ${fmt(calc.data.emi)} | Total Interest: ${fmt(calc.data.totalInterest)} | Total Payment: ${fmt(calc.data.totalPayment)} (${calc.data.months} months)`
    : '';

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="emi-p" className="block text-xs font-bold text-brand-900">Loan Amount</label>
          <input id="emi-p" type="number" min={1} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="emi-r" className="block text-xs font-bold text-brand-900">Annual Interest Rate (%)</label>
          <input id="emi-r" type="number" min={0} step={0.1} value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="emi-t" className="block text-xs font-bold text-brand-900">Loan Tenure</label>
          <div className="flex gap-2">
            <input id="emi-t" type="number" min={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className={`${inputCls} font-mono`} />
            <select aria-label="Tenure unit" value={unit} onChange={(e) => setUnit(e.target.value as 'months' | 'years')} className={selectCls}>
              <option value="months">Months</option>
              <option value="years">Years</option>
            </select>
          </div>
        </div>
      </div>

      <ErrorBanner message={calc.error} />

      {calc.data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-brand-950 text-white">
              <div className="text-[11px] font-bold text-brand-300 uppercase">Monthly EMI</div>
              <div className="text-2xl font-mono font-bold tabular-nums">{fmt(calc.data.emi)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Total Interest</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.totalInterest)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Total Payment</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.totalPayment)}</div>
            </div>
          </div>

          <div className="flex justify-end">
            <CopyButton text={copyStr} label="Copy Summary" />
          </div>

          <div className="overflow-x-auto max-h-72 border border-brand-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-brand-50 border-b border-brand-200 sticky top-0 text-brand-700 font-bold">
                <tr>
                  <th className="py-2.5 px-3">Month</th>
                  <th className="py-2.5 px-3">Payment</th>
                  <th className="py-2.5 px-3">Principal</th>
                  <th className="py-2.5 px-3">Interest</th>
                  <th className="py-2.5 px-3">Remaining Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100 font-mono tabular-nums">
                {calc.data.schedule.map((row) => (
                  <tr key={row.month}>
                    <td className="py-2 px-3">{row.month}</td>
                    <td className="py-2 px-3">{fmt(row.payment)}</td>
                    <td className="py-2 px-3 text-emerald-700">{fmt(row.principalPaid)}</td>
                    <td className="py-2 px-3 text-brand-700">{fmt(row.interestPaid)}</td>
                    <td className="py-2 px-3">{fmt(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <FormulaBox formula="EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1], where r = Annual Rate / (12 × 100) and n = total months (if r = 0, EMI = P / n)." />
    </div>
  );
}

/* ============================================================================
 * 30) Compound Interest Calculator (/compound-interest-calculator/)
 * ========================================================================== */
export function CompoundInterestWidget() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(10);
  const [freq, setFreq] = useState<1 | 4 | 12 | 365>(12);
  const [monthlyContrib, setMonthlyContrib] = useState(200);

  const calc = useMemo(() => {
    if (principal < 0 || rate < 0 || years < 1 || years > 100 || monthlyContrib < 0) {
      return { error: 'Enter non-negative amounts and years between 1 and 100.', data: null };
    }
    const r = rate / 100;
    const rows: Array<{ year: number; deposits: number; interestEarned: number; endBalance: number }> = [];
    let balance = principal;
    let totalDeposits = principal;

    for (let yr = 1; yr <= years; yr++) {
      // Simulate month by month with compounding factor matched to selected frequency
      for (let m = 1; m <= 12; m++) {
        balance += monthlyContrib;
        totalDeposits += monthlyContrib;
        if (freq === 12) {
          balance *= 1 + r / 12;
        } else if (freq === 365) {
          balance *= Math.pow(1 + r / 365, 365 / 12);
        } else if (freq === 4 && m % 3 === 0) {
          balance *= 1 + r / 4;
        } else if (freq === 1 && m === 12) {
          balance *= 1 + r;
        }
      }
      rows.push({
        year: yr,
        deposits: totalDeposits,
        interestEarned: balance - totalDeposits,
        endBalance: balance,
      });
    }

    const futureValue = rows[rows.length - 1]?.endBalance ?? principal;
    const totalInterest = futureValue - totalDeposits;
    return { error: null, data: { futureValue, totalDeposits, totalInterest, rows } };
  }, [principal, rate, years, freq, monthlyContrib]);

  const summary = calc.data
    ? `Future Value: ${fmt(calc.data.futureValue)} | Total Contributions: ${fmt(calc.data.totalDeposits)} | Total Interest: ${fmt(calc.data.totalInterest)}`
    : '';

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="ci-p" className="block text-xs font-bold text-brand-900">Starting Principal</label>
          <input id="ci-p" type="number" min={0} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="ci-c" className="block text-xs font-bold text-brand-900">Monthly Contribution</label>
          <input id="ci-c" type="number" min={0} value={monthlyContrib} onChange={(e) => setMonthlyContrib(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="ci-r" className="block text-xs font-bold text-brand-900">Annual Rate (%)</label>
          <input id="ci-r" type="number" min={0} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="ci-y" className="block text-xs font-bold text-brand-900">Years</label>
          <input id="ci-y" type="number" min={1} max={100} value={years} onChange={(e) => setYears(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="ci-f" className="block text-xs font-bold text-brand-900">Compounding</label>
          <select id="ci-f" value={freq} onChange={(e) => setFreq(Number(e.target.value) as 1 | 4 | 12 | 365)} className={`${selectCls} w-full`}>
            <option value={1}>Yearly (1×)</option>
            <option value={4}>Quarterly (4×)</option>
            <option value={12}>Monthly (12×)</option>
            <option value={365}>Daily (365×)</option>
          </select>
        </div>
      </div>

      <ErrorBanner message={calc.error} />

      {calc.data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-brand-950 text-white">
              <div className="text-[11px] font-bold text-brand-300 uppercase">Future Value</div>
              <div className="text-2xl font-mono font-bold tabular-nums">{fmt(calc.data.futureValue)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Total Contributions</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.totalDeposits)}</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-[11px] font-bold text-emerald-700 uppercase">Total Interest</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-emerald-900">{fmt(calc.data.totalInterest)}</div>
            </div>
          </div>

          <div className="flex justify-end">
            <CopyButton text={summary} label="Copy Summary" />
          </div>

          <div className="overflow-x-auto max-h-64 border border-brand-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-brand-50 border-b border-brand-200 sticky top-0 font-bold text-brand-700">
                <tr>
                  <th className="py-2.5 px-3">Year</th>
                  <th className="py-2.5 px-3">Total Contributed</th>
                  <th className="py-2.5 px-3">Cumulative Interest</th>
                  <th className="py-2.5 px-3">Ending Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100 font-mono tabular-nums">
                {calc.data.rows.map((r) => (
                  <tr key={r.year}>
                    <td className="py-2 px-3">{r.year}</td>
                    <td className="py-2 px-3">{fmt(r.deposits)}</td>
                    <td className="py-2 px-3 text-emerald-700">{fmt(r.interestEarned)}</td>
                    <td className="py-2 px-3 font-bold">{fmt(r.endBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <FormulaBox formula="Base formula: A = P × (1 + r / n)^(n × t), compounded per period n with optional monthly contributions added before each period's interest." />
    </div>
  );
}

/* ============================================================================
 * 31) Profit Margin Calculator (/profit-margin-calculator/)
 * ========================================================================== */
export function ProfitMarginWidget() {
  const [mode, setMode] = useState<'cost-price' | 'cost-margin' | 'cost-markup'>('cost-price');
  const [cost, setCost] = useState(60);
  const [price, setPrice] = useState(100);
  const [targetMargin, setTargetMargin] = useState(40);
  const [targetMarkup, setTargetMarkup] = useState(50);

  const calc = useMemo(() => {
    if (cost < 0) return { error: 'Cost cannot be negative.', data: null };
    if (mode === 'cost-price') {
      if (price <= 0) return { error: 'Selling price must be greater than 0.', data: null };
      const profit = price - cost;
      const margin = (profit / price) * 100;
      const markup = cost > 0 ? (profit / cost) * 100 : 0;
      return { error: null, data: { sellPrice: price, profit, margin, markup }, formula: 'Profit = Price - Cost | Margin % = (Profit / Price) × 100 | Markup % = (Profit / Cost) × 100' };
    }
    if (mode === 'cost-margin') {
      if (targetMargin >= 100 || targetMargin < 0) return { error: 'Gross margin must be between 0% and 99.99%.', data: null };
      const sellPrice = cost / (1 - targetMargin / 100);
      const profit = sellPrice - cost;
      const markup = cost > 0 ? (profit / cost) * 100 : 0;
      return { error: null, data: { sellPrice, profit, margin: targetMargin, markup }, formula: 'Selling Price = Cost / (1 - Margin / 100)' };
    }
    if (targetMarkup < 0) return { error: 'Markup cannot be negative.', data: null };
    const sellPrice = cost * (1 + targetMarkup / 100);
    const profit = sellPrice - cost;
    const margin = sellPrice > 0 ? (profit / sellPrice) * 100 : 0;
    return { error: null, data: { sellPrice, profit, margin, markup: targetMarkup }, formula: 'Selling Price = Cost × (1 + Markup / 100)' };
  }, [mode, cost, price, targetMargin, targetMarkup]);

  const copyStr = calc.data ? `Selling Price: ${fmt(calc.data.sellPrice)} | Profit: ${fmt(calc.data.profit)} | Gross Margin: ${fmt(calc.data.margin)}% | Markup: ${fmt(calc.data.markup)}%` : '';

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'cost-price' as const, label: 'Cost + Selling Price' },
          { id: 'cost-margin' as const, label: 'Cost + Target Margin %' },
          { id: 'cost-markup' as const, label: 'Cost + Target Markup %' },
        ].map((m) => (
          <button key={m.id} type="button" onClick={() => setMode(m.id)} className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${mode === m.id ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'}`}>
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="pm-cost" className="block text-xs font-bold text-brand-900">Cost of Goods</label>
          <input id="pm-cost" type="number" min={0} step="any" value={cost} onChange={(e) => setCost(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        {mode === 'cost-price' && (
          <div className="space-y-1.5">
            <label htmlFor="pm-price" className="block text-xs font-bold text-brand-900">Selling Price</label>
            <input id="pm-price" type="number" min={0} step="any" value={price} onChange={(e) => setPrice(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        )}
        {mode === 'cost-margin' && (
          <div className="space-y-1.5">
            <label htmlFor="pm-margin" className="block text-xs font-bold text-brand-900">Target Gross Margin (%)</label>
            <input id="pm-margin" type="number" min={0} max={99.99} step="any" value={targetMargin} onChange={(e) => setTargetMargin(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        )}
        {mode === 'cost-markup' && (
          <div className="space-y-1.5">
            <label htmlFor="pm-markup" className="block text-xs font-bold text-brand-900">Target Markup (%)</label>
            <input id="pm-markup" type="number" min={0} step="any" value={targetMarkup} onChange={(e) => setTargetMarkup(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        )}
      </div>

      <ErrorBanner message={calc.error} />

      {calc.data && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-brand-950 text-white">
              <div className="text-[11px] font-bold text-brand-300 uppercase">Selling Price</div>
              <div className="text-xl font-mono font-bold tabular-nums">{fmt(calc.data.sellPrice)}</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-[11px] font-bold text-emerald-700 uppercase">Gross Profit</div>
              <div className="text-xl font-mono font-bold tabular-nums text-emerald-900">{fmt(calc.data.profit)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Gross Margin</div>
              <div className="text-xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.margin)}%</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Markup</div>
              <div className="text-xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.markup)}%</div>
            </div>
          </div>
          <div className="flex justify-end"><CopyButton text={copyStr} label="Copy Result" /></div>
          <FormulaBox formula={calc.formula} />
        </>
      )}
    </div>
  );
}

/* ============================================================================
 * 32) Discount Calculator (/discount-calculator/)
 * ========================================================================== */
export function DiscountCalculatorWidget() {
  const [price, setPrice] = useState(120);
  const [discType, setDiscType] = useState<'percent' | 'fixed'>('percent');
  const [discVal, setDiscVal] = useState(20);
  const [extraPercent, setExtraPercent] = useState(10);
  const [taxRate, setTaxRate] = useState(8);
  const [taxTiming, setTaxTiming] = useState<'after' | 'before'>('after');

  const calc = useMemo(() => {
    if (price < 0 || discVal < 0 || extraPercent < 0 || taxRate < 0) {
      return { error: 'Enter non-negative values for price, discounts, and tax.', data: null };
    }
    const afterFirst = discType === 'percent' ? Math.max(0, price * (1 - discVal / 100)) : Math.max(0, price - discVal);
    const discountedPrice = Math.max(0, afterFirst * (1 - extraPercent / 100));
    const totalSavings = Math.max(0, price - discountedPrice);
    const taxAmount = taxTiming === 'after' ? discountedPrice * (taxRate / 100) : price * (taxRate / 100);
    const finalPrice = discountedPrice + taxAmount;
    return { error: null, data: { discountedPrice, totalSavings, taxAmount, finalPrice } };
  }, [price, discType, discVal, extraPercent, taxRate, taxTiming]);

  const summary = calc.data
    ? `Sale Price (before tax): ${fmt(calc.data.discountedPrice)} | Total Saved: ${fmt(calc.data.totalSavings)} | Tax: ${fmt(calc.data.taxAmount)} | Final Price: ${fmt(calc.data.finalPrice)}`
    : '';

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="dc-price" className="block text-xs font-bold text-brand-900">Original Price</label>
          <input id="dc-price" type="number" min={0} step="any" value={price} onChange={(e) => setPrice(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="dc-val" className="block text-xs font-bold text-brand-900">First Discount</label>
          <div className="flex gap-2">
            <input id="dc-val" type="number" min={0} step="any" value={discVal} onChange={(e) => setDiscVal(Number(e.target.value))} className={`${inputCls} font-mono`} />
            <select aria-label="Discount type" value={discType} onChange={(e) => setDiscType(e.target.value as 'percent' | 'fixed')} className={selectCls}>
              <option value="percent">%</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="dc-extra" className="block text-xs font-bold text-brand-900">Extra Stacked Discount (%)</label>
          <input id="dc-extra" type="number" min={0} max={100} step="any" value={extraPercent} onChange={(e) => setExtraPercent(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="dc-tax" className="block text-xs font-bold text-brand-900">Sales Tax (%)</label>
          <input id="dc-tax" type="number" min={0} step="any" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
        <span className="font-bold text-brand-900">Apply sales tax:</span>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input type="radio" name="tax-timing" checked={taxTiming === 'after'} onChange={() => setTaxTiming('after')} className="accent-accent-600" />
          <span>After discount</span>
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input type="radio" name="tax-timing" checked={taxTiming === 'before'} onChange={() => setTaxTiming('before')} className="accent-accent-600" />
          <span>On original price (before discount)</span>
        </label>
      </div>

      <ErrorBanner message={calc.error} />

      {calc.data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-brand-950 text-white">
              <div className="text-[11px] font-bold text-brand-300 uppercase">Final Price</div>
              <div className="text-2xl font-mono font-bold tabular-nums">{fmt(calc.data.finalPrice)}</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-[11px] font-bold text-emerald-700 uppercase">You Save</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-emerald-900">{fmt(calc.data.totalSavings)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Tax Added</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.taxAmount)}</div>
            </div>
          </div>
          <div className="flex justify-end"><CopyButton text={summary} label="Copy Result" /></div>
        </>
      )}

      <FormulaBox formula="Sale Price = (Price after 1st discount) × (1 - Extra% / 100); Tax = (Tax after ? Sale Price : Original Price) × (Tax% / 100); Final = Sale Price + Tax." />
    </div>
  );
}

/* ============================================================================
 * 33) Sales Tax & VAT Calculator (/sales-tax-calculator/)
 * ========================================================================== */
export function SalesTaxWidget() {
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [amount, setAmount] = useState(100);
  const [rate, setRate] = useState(20);

  const calc = useMemo(() => {
    if (amount < 0 || rate < 0) return { error: 'Amount and tax rate must be non-negative.', data: null };
    if (mode === 'add') {
      const net = amount;
      const tax = net * (rate / 100);
      const gross = net + tax;
      return { error: null, data: { net, tax, gross }, formula: 'Tax = Net × (Rate / 100) | Gross = Net × (1 + Rate / 100)' };
    }
    const gross = amount;
    const net = gross / (1 + rate / 100);
    const tax = gross - net;
    return { error: null, data: { net, tax, gross }, formula: 'Net = Gross / (1 + Rate / 100) | Tax = Gross - Net' };
  }, [mode, amount, rate]);

  const copyStr = calc.data ? `Net: ${fmt(calc.data.net)} | Tax (${rate}%): ${fmt(calc.data.tax)} | Gross: ${fmt(calc.data.gross)}` : '';

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setMode('add')} className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${mode === 'add' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'}`}>
          Add Tax / VAT (Net to Gross)
        </button>
        <button type="button" onClick={() => setMode('remove')} className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${mode === 'remove' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'}`}>
          Remove Tax / VAT (Gross to Net)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="st-amt" className="block text-xs font-bold text-brand-900">
            {mode === 'add' ? 'Net Amount (Before Tax)' : 'Gross Amount (Tax Included)'}
          </label>
          <input id="st-amt" type="number" min={0} step="any" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="st-rate" className="block text-xs font-bold text-brand-900">Tax Rate (%)</label>
          <input id="st-rate" type="number" min={0} step="any" value={rate} onChange={(e) => setRate(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
      </div>

      <ErrorBanner message={calc.error} />

      {calc.data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Net Price</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.net)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Tax Amount</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-accent-700">{fmt(calc.data.tax)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-950 text-white">
              <div className="text-[11px] font-bold text-brand-300 uppercase">Gross Price</div>
              <div className="text-2xl font-mono font-bold tabular-nums">{fmt(calc.data.gross)}</div>
            </div>
          </div>
          <div className="flex justify-end"><CopyButton text={copyStr} label="Copy Result" /></div>
          <FormulaBox formula={calc.formula} />
        </>
      )}
    </div>
  );
}

/* ============================================================================
 * 34) Break-Even Calculator (/break-even-calculator/)
 * ========================================================================== */
export function BreakEvenWidget() {
  const [fixedCosts, setFixedCosts] = useState(5000);
  const [unitPrice, setUnitPrice] = useState(50);
  const [varCost, setVarCost] = useState(20);
  const [targetProfit, setTargetProfit] = useState(3000);

  const calc = useMemo(() => {
    const contribMargin = unitPrice - varCost;
    if (fixedCosts < 0 || unitPrice < 0 || varCost < 0 || targetProfit < 0) {
      return { error: 'All cost, price, and profit values must be non-negative.', data: null };
    }
    if (contribMargin <= 0) {
      return { error: 'Selling price per unit must be greater than variable cost per unit to reach break-even.', data: null };
    }
    const beUnits = Math.ceil(fixedCosts / contribMargin);
    const exactUnits = fixedCosts / contribMargin;
    const beRevenue = exactUnits * unitPrice;
    const targetUnits = Math.ceil((fixedCosts + targetProfit) / contribMargin);
    return { error: null, data: { contribMargin, beUnits, exactUnits, beRevenue, targetUnits } };
  }, [fixedCosts, unitPrice, varCost, targetProfit]);

  const copyStr = calc.data
    ? `Break-Even Units: ${calc.data.beUnits} | Break-Even Revenue: ${fmt(calc.data.beRevenue)} | Contribution Margin/Unit: ${fmt(calc.data.contribMargin)} | Units for Target Profit: ${calc.data.targetUnits}`
    : '';

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="be-fixed" className="block text-xs font-bold text-brand-900">Total Fixed Costs</label>
          <input id="be-fixed" type="number" min={0} value={fixedCosts} onChange={(e) => setFixedCosts(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="be-price" className="block text-xs font-bold text-brand-900">Price per Unit</label>
          <input id="be-price" type="number" min={0} step="any" value={unitPrice} onChange={(e) => setUnitPrice(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="be-var" className="block text-xs font-bold text-brand-900">Variable Cost / Unit</label>
          <input id="be-var" type="number" min={0} step="any" value={varCost} onChange={(e) => setVarCost(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="be-prof" className="block text-xs font-bold text-brand-900">Target Profit (Optional)</label>
          <input id="be-prof" type="number" min={0} value={targetProfit} onChange={(e) => setTargetProfit(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
      </div>

      <ErrorBanner message={calc.error} />

      {calc.data && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-brand-950 text-white">
              <div className="text-[11px] font-bold text-brand-300 uppercase">Break-Even Units</div>
              <div className="text-2xl font-mono font-bold tabular-nums">{fmt(calc.data.beUnits, 0)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Break-Even Sales</div>
              <div className="text-xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.beRevenue)}</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Contribution / Unit</div>
              <div className="text-xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.contribMargin)}</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-[11px] font-bold text-emerald-700 uppercase">Units for Target Profit</div>
              <div className="text-xl font-mono font-bold tabular-nums text-emerald-900">{fmt(calc.data.targetUnits, 0)}</div>
            </div>
          </div>

          {/* Simple SVG Break-Even Chart */}
          <div className="p-4 rounded-xl bg-brand-50/60 border border-brand-200">
            <div className="text-xs font-bold text-brand-800 mb-2">Revenue vs. Total Cost Chart (0 to 2× Break-Even Units)</div>
            <svg viewBox="0 0 500 180" className="w-full h-44" role="img" aria-label="Break-even revenue versus total cost chart">
              <line x1="40" y1="150" x2="480" y2="150" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="40" y1="20" x2="40" y2="150" stroke="#cbd5e1" strokeWidth="1" />
              {/* Total Cost Line */}
              <line x1="40" y1={150 - (fixedCosts / (calc.data.beRevenue * 2 || 1)) * 120} x2="480" y2={150 - ((fixedCosts + varCost * calc.data.exactUnits * 2) / (calc.data.beRevenue * 2 || 1)) * 120} stroke="#dc2626" strokeWidth="2.5" />
              {/* Revenue Line */}
              <line x1="40" y1="150" x2="480" y2="30" stroke="#16a34a" strokeWidth="2.5" />
              {/* Break-even point */}
              <circle cx="260" cy="90" r="5" fill="#7839ee" />
              <text x="268" y="84" fontSize="11" fill="#150d28" fontWeight="bold">Break-even ({calc.data.beUnits} units)</text>
              <text x="410" y="26" fontSize="10" fill="#16a34a" fontWeight="bold">Revenue</text>
              <text x="400" y="68" fontSize="10" fill="#dc2626" fontWeight="bold">Total Cost</text>
            </svg>
          </div>

          <div className="flex justify-end"><CopyButton text={copyStr} label="Copy Result" /></div>
        </>
      )}

      <FormulaBox formula="Break-Even Units = Fixed Costs / (Price per Unit - Variable Cost per Unit); Target Profit Units = (Fixed Costs + Target Profit) / Contribution Margin." />
    </div>
  );
}

/* ============================================================================
 * 35) CPM Calculator (/cpm-calculator/)
 * ========================================================================== */
export function CpmCalculatorWidget() {
  const [solveFor, setSolveFor] = useState<'cpm' | 'cost' | 'impressions'>('cpm');
  const [cost, setCost] = useState(500);
  const [impressions, setImpressions] = useState(100000);
  const [cpm, setCpm] = useState(5);

  const calc = useMemo(() => {
    if (solveFor === 'cpm') {
      if (cost < 0 || impressions <= 0) return { error: 'Impressions must be greater than 0 and cost non-negative.', val: null };
      return { error: null, val: (cost / impressions) * 1000, label: 'Calculated CPM', unit: '' };
    }
    if (solveFor === 'cost') {
      if (cpm < 0 || impressions < 0) return { error: 'CPM and impressions must be non-negative.', val: null };
      return { error: null, val: (cpm * impressions) / 1000, label: 'Total Ad Cost', unit: '' };
    }
    if (cost < 0 || cpm <= 0) return { error: 'CPM must be greater than 0 and cost non-negative.', val: null };
    return { error: null, val: (cost / cpm) * 1000, label: 'Total Impressions', unit: ' impressions' };
  }, [solveFor, cost, impressions, cpm]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'cpm' as const, label: 'Solve for CPM' },
          { id: 'cost' as const, label: 'Solve for Total Cost' },
          { id: 'impressions' as const, label: 'Solve for Impressions' },
        ].map((m) => (
          <button key={m.id} type="button" onClick={() => setSolveFor(m.id)} className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${solveFor === m.id ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'}`}>
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {solveFor !== 'cost' && (
          <div className="space-y-1.5">
            <label htmlFor="cpm-cost" className="block text-xs font-bold text-brand-900">Total Ad Cost</label>
            <input id="cpm-cost" type="number" min={0} step="any" value={cost} onChange={(e) => setCost(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        )}
        {solveFor !== 'impressions' && (
          <div className="space-y-1.5">
            <label htmlFor="cpm-imp" className="block text-xs font-bold text-brand-900">Total Impressions</label>
            <input id="cpm-imp" type="number" min={0} step="1" value={impressions} onChange={(e) => setImpressions(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        )}
        {solveFor !== 'cpm' && (
          <div className="space-y-1.5">
            <label htmlFor="cpm-val" className="block text-xs font-bold text-brand-900">CPM (Cost per 1,000)</label>
            <input id="cpm-val" type="number" min={0} step="any" value={cpm} onChange={(e) => setCpm(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        )}
      </div>

      <ErrorBanner message={calc.error} />

      {calc.val !== null && (
        <div className="p-5 rounded-xl bg-brand-950 text-white flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-brand-300 uppercase">{calc.label}</div>
            <div className="text-2xl sm:text-3xl font-mono font-bold tabular-nums mt-1">{fmt(calc.val)}{calc.unit}</div>
          </div>
          <CopyButton text={`${calc.label}: ${fmt(calc.val)}${calc.unit}`} />
        </div>
      )}

      <FormulaBox formula="CPM = (Total Cost / Impressions) × 1,000 | Total Cost = (CPM × Impressions) / 1,000 | Impressions = (Total Cost / CPM) × 1,000" />
    </div>
  );
}

/* ============================================================================
 * 36) CPC Calculator (/cpc-calculator/)
 * ========================================================================== */
export function CpcCalculatorWidget() {
  const [solveFor, setSolveFor] = useState<'cpc' | 'cost' | 'clicks'>('cpc');
  const [cost, setCost] = useState(400);
  const [clicks, setClicks] = useState(250);
  const [cpc, setCpc] = useState(1.6);
  const [impressions, setImpressions] = useState(12500);

  const calc = useMemo(() => {
    let computedVal = 0;
    let finalClicks = clicks;
    if (solveFor === 'cpc') {
      if (cost < 0 || clicks <= 0) return { error: 'Clicks must be greater than 0 and cost non-negative.', data: null };
      computedVal = cost / clicks;
    } else if (solveFor === 'cost') {
      if (cpc < 0 || clicks < 0) return { error: 'CPC and clicks must be non-negative.', data: null };
      computedVal = cpc * clicks;
    } else {
      if (cost < 0 || cpc <= 0) return { error: 'CPC must be greater than 0 and cost non-negative.', data: null };
      computedVal = cost / cpc;
      finalClicks = computedVal;
    }
    const ctr = impressions > 0 ? (finalClicks / impressions) * 100 : null;
    return { error: null, data: { computedVal, ctr } };
  }, [solveFor, cost, clicks, cpc, impressions]);

  const label = solveFor === 'cpc' ? 'Cost per Click (CPC)' : solveFor === 'cost' ? 'Total Ad Spend' : 'Total Clicks';
  const copyStr = calc.data
    ? `${label}: ${fmt(calc.data.computedVal, 4)}${calc.data.ctr !== null ? ` | CTR: ${fmt(calc.data.ctr)}%` : ''}`
    : '';

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'cpc' as const, label: 'Solve for CPC' },
          { id: 'cost' as const, label: 'Solve for Ad Spend' },
          { id: 'clicks' as const, label: 'Solve for Clicks' },
        ].map((m) => (
          <button key={m.id} type="button" onClick={() => setSolveFor(m.id)} className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${solveFor === m.id ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'}`}>
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {solveFor !== 'cost' && (
          <div className="space-y-1.5">
            <label htmlFor="cpc-cost" className="block text-xs font-bold text-brand-900">Total Ad Spend</label>
            <input id="cpc-cost" type="number" min={0} step="any" value={cost} onChange={(e) => setCost(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        )}
        {solveFor !== 'clicks' && (
          <div className="space-y-1.5">
            <label htmlFor="cpc-clicks" className="block text-xs font-bold text-brand-900">Clicks</label>
            <input id="cpc-clicks" type="number" min={0} step="1" value={clicks} onChange={(e) => setClicks(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        )}
        {solveFor !== 'cpc' && (
          <div className="space-y-1.5">
            <label htmlFor="cpc-val" className="block text-xs font-bold text-brand-900">Cost per Click (CPC)</label>
            <input id="cpc-val" type="number" min={0} step="any" value={cpc} onChange={(e) => setCpc(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        )}
        <div className="space-y-1.5">
          <label htmlFor="cpc-imp" className="block text-xs font-bold text-brand-900">Impressions (Optional for CTR)</label>
          <input id="cpc-imp" type="number" min={0} step="1" value={impressions} onChange={(e) => setImpressions(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
      </div>

      <ErrorBanner message={calc.error} />

      {calc.data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-brand-950 text-white flex items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-bold text-brand-300 uppercase">{label}</div>
              <div className="text-2xl font-mono font-bold tabular-nums">{fmt(calc.data.computedVal, 4)}</div>
            </div>
            <CopyButton text={copyStr} />
          </div>
          <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
            <div className="text-[11px] font-bold text-brand-600 uppercase">Click-Through Rate (CTR)</div>
            <div className="text-2xl font-mono font-bold tabular-nums text-brand-950">
              {calc.data.ctr !== null ? `${fmt(calc.data.ctr)}%` : 'Enter impressions > 0'}
            </div>
          </div>
        </div>
      )}

      <FormulaBox formula="CPC = Total Cost / Clicks | Total Cost = CPC × Clicks | Clicks = Total Cost / CPC | CTR (%) = (Clicks / Impressions) × 100" />
    </div>
  );
}

/* ============================================================================
 * 37) Freelance Hourly Rate Calculator (/freelance-rate-calculator/)
 * ========================================================================== */
export function FreelanceRateWidget() {
  const [targetIncome, setTargetIncome] = useState(80000);
  const [expenses, setExpenses] = useState(6000);
  const [taxRate, setTaxRate] = useState(25);
  const [workingWeeks, setWorkingWeeks] = useState(46);
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25);
  const [profitBuffer, setProfitBuffer] = useState(10);
  const [projectHours, setProjectHours] = useState(40);

  const calc = useMemo(() => {
    if (targetIncome < 0 || expenses < 0 || taxRate < 0 || taxRate >= 100 || workingWeeks <= 0 || billableHoursPerWeek <= 0 || profitBuffer < 0) {
      return { error: 'Check your inputs: working weeks and billable hours must be above 0, and tax % below 100%.', data: null };
    }
    const grossNeededForTakeHome = targetIncome / (1 - taxRate / 100);
    const totalAnnualTarget = (grossNeededForTakeHome + expenses) * (1 + profitBuffer / 100);
    const annualBillableHours = workingWeeks * billableHoursPerWeek;
    const hourlyRate = totalAnnualTarget / annualBillableHours;
    const dailyRate = hourlyRate * 8;
    const projectEstimate = hourlyRate * projectHours;
    return { error: null, data: { totalAnnualTarget, annualBillableHours, hourlyRate, dailyRate, projectEstimate } };
  }, [targetIncome, expenses, taxRate, workingWeeks, billableHoursPerWeek, profitBuffer, projectHours]);

  const copyStr = calc.data
    ? `Hourly Rate: ${fmt(calc.data.hourlyRate)} | Daily Rate (8h): ${fmt(calc.data.dailyRate)} | Project Estimate (${projectHours}h): ${fmt(calc.data.projectEstimate)}`
    : '';

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="fr-inc" className="block text-xs font-bold text-brand-900">Target Yearly Take-Home</label>
          <input id="fr-inc" type="number" min={0} value={targetIncome} onChange={(e) => setTargetIncome(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="fr-exp" className="block text-xs font-bold text-brand-900">Yearly Expenses</label>
          <input id="fr-exp" type="number" min={0} value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="fr-tax" className="block text-xs font-bold text-brand-900">Tax Estimate (%)</label>
          <input id="fr-tax" type="number" min={0} max={99} value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="fr-buf" className="block text-xs font-bold text-brand-900">Profit Buffer (%)</label>
          <input id="fr-buf" type="number" min={0} value={profitBuffer} onChange={(e) => setProfitBuffer(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="fr-wks" className="block text-xs font-bold text-brand-900">Working Weeks / Year</label>
          <input id="fr-wks" type="number" min={1} max={52} value={workingWeeks} onChange={(e) => setWorkingWeeks(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="fr-hrs" className="block text-xs font-bold text-brand-900">Billable Hours / Week</label>
          <input id="fr-hrs" type="number" min={1} max={80} value={billableHoursPerWeek} onChange={(e) => setBillableHoursPerWeek(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="fr-proj" className="block text-xs font-bold text-brand-900">Project Hours Estimate</label>
          <input id="fr-proj" type="number" min={1} value={projectHours} onChange={(e) => setProjectHours(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
      </div>

      <ErrorBanner message={calc.error} />

      {calc.data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-brand-950 text-white">
              <div className="text-[11px] font-bold text-brand-300 uppercase">Hourly Rate</div>
              <div className="text-2xl font-mono font-bold tabular-nums">{fmt(calc.data.hourlyRate)}/hr</div>
            </div>
            <div className="p-4 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Daily Rate (8 Hours)</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-brand-950">{fmt(calc.data.dailyRate)}/day</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-[11px] font-bold text-emerald-700 uppercase">Project ({projectHours}h)</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-emerald-900">{fmt(calc.data.projectEstimate)}</div>
            </div>
          </div>
          <div className="flex justify-end"><CopyButton text={copyStr} label="Copy Rates" /></div>
        </>
      )}

      <FormulaBox formula="Hourly Rate = [((Target Income / (1 - Tax% / 100)) + Yearly Expenses) × (1 + Buffer% / 100)] / (Working Weeks × Billable Hours/Week)" />
    </div>
  );
}

/* ============================================================================
 * 38) Aspect Ratio Calculator (/aspect-ratio-calculator/)
 * ========================================================================== */
function gcd(a: number, b: number): number {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

export function AspectRatioWidget() {
  const [rw, setRw] = useState(16);
  const [rh, setRh] = useState(9);
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);

  const handleWidthChange = (newW: number) => {
    setWidth(newW);
    if (rw > 0 && rh > 0 && newW > 0) {
      setHeight(Math.round((newW * rh) / rw));
    }
  };

  const handleHeightChange = (newH: number) => {
    setHeight(newH);
    if (rw > 0 && rh > 0 && newH > 0) {
      setWidth(Math.round((newH * rw) / rh));
    }
  };

  const applyRatio = (newRw: number, newRh: number) => {
    setRw(newRw);
    setRh(newRh);
    if (width > 0) {
      setHeight(Math.round((width * newRh) / newRw));
    }
  };

  const d = width > 0 && height > 0 ? gcd(width, height) : 1;
  const simplifiedW = Math.round(width / d);
  const simplifiedH = Math.round(height / d);
  const error = width <= 0 || height <= 0 || rw <= 0 || rh <= 0 ? 'All width, height, and ratio values must be greater than 0.' : null;

  const previewScale = useMemo(() => {
    const safeW = Math.max(1, rw);
    const safeH = Math.max(1, rh);
    const maxBox = 140;
    if (safeW >= safeH) {
      return { w: maxBox, h: Math.max(24, Math.round((maxBox * safeH) / safeW)) };
    }
    return { w: Math.max(24, Math.round((maxBox * safeW) / safeH)), h: maxBox };
  }, [rw, rh]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { label: '16:9 Widescreen', w: 16, h: 9 },
          { label: '4:3 Classic', w: 4, h: 3 },
          { label: '1:1 Square', w: 1, h: 1 },
          { label: '9:16 Vertical', w: 9, h: 16 },
          { label: '21:9 Ultrawide', w: 21, h: 9 },
          { label: '3:2 Photo', w: 3, h: 2 },
        ].map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => applyRatio(p.w, p.h)}
            className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer ${
              rw === p.w && rh === p.h ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="ar-rw" className="block text-xs font-bold text-brand-900">Ratio Width</label>
            <input id="ar-rw" type="number" min={1} value={rw} onChange={(e) => applyRatio(Number(e.target.value), rh)} className={`${inputCls} font-mono`} />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="ar-rh" className="block text-xs font-bold text-brand-900">Ratio Height</label>
            <input id="ar-rh" type="number" min={1} value={rh} onChange={(e) => applyRatio(rw, Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="ar-w" className="block text-xs font-bold text-brand-900">Pixel Width</label>
            <input id="ar-w" type="number" min={1} value={width} onChange={(e) => handleWidthChange(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="ar-h" className="block text-xs font-bold text-brand-900">Pixel Height</label>
            <input id="ar-h" type="number" min={1} value={height} onChange={(e) => handleHeightChange(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 rounded-xl bg-brand-50 border border-brand-200 min-h-[170px]">
          <div
            className="bg-accent-600/15 border-2 border-accent-600 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-brand-950"
            style={{ width: previewScale.w, height: previewScale.h }}
          >
            {rw}:{rh}
          </div>
        </div>
      </div>

      <ErrorBanner message={error} />

      {!error && (
        <div className="p-4 rounded-xl bg-brand-950 text-white flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs sm:text-sm font-mono">
            Dimensions: <strong>{width} × {height} px</strong> · Simplified Ratio from Pixels: <strong>{simplifiedW}:{simplifiedH}</strong>
          </div>
          <CopyButton text={`${width}x${height} (${simplifiedW}:${simplifiedH})`} />
        </div>
      )}

      <FormulaBox formula="Height = Math.round(Width × RatioHeight / RatioWidth) | Width = Math.round(Height × RatioWidth / RatioHeight) | Simplified Ratio = (W / GCD(W,H)) : (H / GCD(W,H))" />
    </div>
  );
}

/* ============================================================================
 * 39) Time Zone Converter (/time-zone-converter/)
 * ========================================================================== */
const FALLBACK_ZONES = [
  'UTC', 'America/New_York', 'America/Chicago', 'America/Los_Angeles', 'Europe/London',
  'Europe/Paris', 'Europe/Berlin', 'Asia/Dhaka', 'Asia/Dubai', 'Asia/Kolkata',
  'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney',
];

function getUtcOffsetLabel(date: Date, timeZone: string): string {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'shortOffset',
    }).formatToParts(date);
    return parts.find((p) => p.type === 'timeZoneName')?.value || 'UTC';
  } catch {
    return '';
  }
}

export function TimeZoneConverterWidget() {
  const allZones = useMemo(() => {
    try {
      const intlAny = Intl as unknown as { supportedValuesOf?: (k: string) => string[] };
      if (typeof intlAny.supportedValuesOf === 'function') {
        const list = intlAny.supportedValuesOf('timeZone');
        if (!list.includes('UTC')) list.unshift('UTC');
        return list;
      }
    } catch {
      // ignore
    }
    return FALLBACK_ZONES;
  }, []);

  const [dateTimeLocal, setDateTimeLocal] = useState(() => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  });
  const [sourceZone, setSourceZone] = useState('America/New_York');
  const [targetZones, setTargetZones] = useState(['UTC', 'Europe/London', 'Asia/Dhaka', 'Asia/Tokyo']);
  const [newZone, setNewZone] = useState('Australia/Sydney');

  // Convert sourceZone local YYYY-MM-DDTHH:mm into exact UTC Date
  const utcInstant = useMemo(() => {
    if (!dateTimeLocal) return null;
    const [datePart, timePart] = dateTimeLocal.split('T');
    if (!datePart || !timePart) return null;
    const [y, m, d] = datePart.split('-').map(Number);
    const [hh, mm] = timePart.split(':').map(Number);
    const approxUtc = new Date(Date.UTC(y, m - 1, d, hh, mm, 0));

    // Calculate offset of sourceZone at approxUtc
    const fmtParts = new Intl.DateTimeFormat('en-US', {
      timeZone: sourceZone,
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).formatToParts(approxUtc);
    const get = (t: string) => Number(fmtParts.find((p) => p.type === t)?.value || 0);
    const zonedWallAsUtc = Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), 0);
    const offsetMs = zonedWallAsUtc - approxUtc.getTime();
    return new Date(approxUtc.getTime() - offsetMs);
  }, [dateTimeLocal, sourceZone]);

  const setNow = () => {
    if (!utcInstant) return;
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: sourceZone,
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).formatToParts(now);
    const g = (t: string) => parts.find((p) => p.type === t)?.value || '00';
    setDateTimeLocal(`${g('year')}-${g('month')}-${g('day')}T${g('hour')}:${g('minute')}`);
  };

  const formattedRows = useMemo(() => {
    if (!utcInstant) return [];
    return targetZones.map((tz) => ({
      tz,
      offset: getUtcOffsetLabel(utcInstant, tz),
      formatted: new Intl.DateTimeFormat(undefined, {
        timeZone: tz,
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(utcInstant),
    }));
  }, [utcInstant, targetZones]);

  const copyText = formattedRows.map((r) => `${r.tz} (${r.offset}): ${r.formatted}`).join('\n');

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
        <div className="sm:col-span-4 space-y-1.5">
          <label htmlFor="tz-dt" className="block text-xs font-bold text-brand-900">Date &amp; Time</label>
          <input id="tz-dt" type="datetime-local" value={dateTimeLocal} onChange={(e) => setDateTimeLocal(e.target.value)} className={inputCls} />
        </div>
        <div className="sm:col-span-5 space-y-1.5">
          <label htmlFor="tz-src" className="block text-xs font-bold text-brand-900">
            Source Time Zone ({utcInstant ? getUtcOffsetLabel(utcInstant, sourceZone) : ''})
          </label>
          <select id="tz-src" value={sourceZone} onChange={(e) => setSourceZone(e.target.value)} className={`${selectCls} w-full`}>
            {allZones.map((z) => <option key={z} value={z}>{z}</option>)}
          </select>
        </div>
        <div className="sm:col-span-3 flex gap-2">
          <button type="button" onClick={setNow} className={`${primaryBtnCls} flex-1`}>Now</button>
          <button
            type="button"
            title="Swap source with first target"
            onClick={() => {
              if (targetZones.length > 0) {
                const first = targetZones[0];
                setTargetZones((prev) => [sourceZone, ...prev.slice(1)]);
                setSourceZone(first);
              }
            }}
            className={secondaryBtnCls}
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {formattedRows.map((r) => (
          <div key={r.tz} className="p-4 rounded-xl bg-brand-50/70 border border-brand-200 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-brand-700">{r.tz} <span className="font-mono text-brand-500">({r.offset})</span></div>
              <div className="text-base font-mono font-bold text-brand-950 mt-0.5">{r.formatted}</div>
            </div>
            <div className="flex items-center gap-2">
              <CopyButton text={`${r.tz}: ${r.formatted} (${r.offset})`} />
              <button
                type="button"
                onClick={() => setTargetZones((prev) => prev.filter((z) => z !== r.tz))}
                className={secondaryBtnCls}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-brand-100">
        <div className="flex flex-wrap items-center gap-2">
          <select aria-label="Add target time zone" value={newZone} onChange={(e) => setNewZone(e.target.value)} className={selectCls}>
            {allZones.map((z) => <option key={z} value={z}>{z}</option>)}
          </select>
          <button
            type="button"
            onClick={() => {
              if (!targetZones.includes(newZone)) setTargetZones((prev) => [...prev, newZone]);
            }}
            className={secondaryBtnCls}
          >
            + Add Time Zone
          </button>
        </div>
        <CopyButton text={copyText} label="Copy All Zones" disabled={!copyText} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 40) Countdown Timer (/countdown-timer/)
 * ========================================================================== */
export function CountdownTimerWidget() {
  const [mode, setMode] = useState<'timer' | 'date'>('timer');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [targetIso, setTargetIso] = useState(() => {
    const d = new Date(Date.now() + 3600 * 1000);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  });
  const [running, setRunning] = useState(false);
  const [remainingMs, setRemainingMs] = useState(5 * 60 * 1000);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [finished, setFinished] = useState(false);

  const endTimestampRef = useRef<number | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const playAlarm = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      [0, 0.28, 0.56].forEach((offset) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.2, ctx.currentTime + offset);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + offset);
        osc.stop(ctx.currentTime + offset + 0.2);
      });
    } catch {
      // ignore audio restrictions
    }
  };

  useEffect(() => {
    if (!running) return;
    const tick = () => {
      if (mode === 'date') {
        const target = new Date(targetIso).getTime();
        const diff = Math.max(0, target - Date.now());
        setRemainingMs(diff);
        if (diff === 0) {
          setRunning(false);
          setFinished(true);
          playAlarm();
        }
      } else if (endTimestampRef.current !== null) {
        const diff = Math.max(0, endTimestampRef.current - Date.now());
        setRemainingMs(diff);
        if (diff === 0) {
          setRunning(false);
          setFinished(true);
          endTimestampRef.current = null;
          playAlarm();
        }
      }
    };
    tick();
    const id = setInterval(tick, 200);
    return () => clearInterval(id);
  }, [running, mode, targetIso, soundEnabled]);

  const handleStart = () => {
    setFinished(false);
    if (mode === 'timer') {
      const baseMs = remainingMs > 0 && endTimestampRef.current === null && running === false
        ? remainingMs
        : ((hours * 3600 + minutes * 60 + seconds) * 1000);
      if (baseMs <= 0) return;
      endTimestampRef.current = Date.now() + baseMs;
    }
    setRunning(true);
  };

  const handlePause = () => {
    if (mode === 'timer' && endTimestampRef.current !== null) {
      setRemainingMs(Math.max(0, endTimestampRef.current - Date.now()));
    }
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setFinished(false);
    endTimestampRef.current = null;
    if (mode === 'timer') {
      setRemainingMs((hours * 3600 + minutes * 60 + seconds) * 1000);
    } else {
      const target = new Date(targetIso).getTime();
      setRemainingMs(Number.isFinite(target) ? Math.max(0, target - Date.now()) : 0);
    }
  };

  const totalSec = Math.ceil(remainingMs / 1000);
  const dDays = Math.floor(totalSec / 86400);
  const dHrs = Math.floor((totalSec % 86400) / 3600);
  const dMins = Math.floor((totalSec % 3600) / 60);
  const dSecs = totalSec % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  const displayStr = mode === 'date' || dDays > 0
    ? `${dDays}d ${pad(dHrs)}:${pad(dMins)}:${pad(dSecs)}`
    : `${pad(dHrs)}:${pad(dMins)}:${pad(dSecs)}`;

  return (
    <div ref={boxRef} className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => { setMode('timer'); setRunning(false); setRemainingMs((hours * 3600 + minutes * 60 + seconds) * 1000); }}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${mode === 'timer' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'}`}
          >
            Duration Timer
          </button>
          <button
            type="button"
            onClick={() => { setMode('date'); setRunning(false); }}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${mode === 'date' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'}`}
          >
            Countdown to Date
          </button>
        </div>

        <label className="inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
          <input type="checkbox" checked={soundEnabled} onChange={(e) => setSoundEnabled(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <Volume2 className="w-4 h-4 text-brand-700" />
          <span className="font-medium text-brand-900">Alarm sound at 00:00</span>
        </label>
      </div>

      {mode === 'timer' ? (
        <div className="grid grid-cols-3 gap-4 max-w-md">
          {[
            { label: 'Hours', val: hours, set: (v: number) => { setHours(v); if (!running) setRemainingMs((v * 3600 + minutes * 60 + seconds) * 1000); } },
            { label: 'Minutes', val: minutes, set: (v: number) => { setMinutes(v); if (!running) setRemainingMs((hours * 3600 + v * 60 + seconds) * 1000); } },
            { label: 'Seconds', val: seconds, set: (v: number) => { setSeconds(v); if (!running) setRemainingMs((hours * 3600 + minutes * 60 + v) * 1000); } },
          ].map((f) => (
            <div key={f.label} className="space-y-1">
              <label className="block text-xs font-bold text-brand-900">{f.label}</label>
              <input
                type="number"
                min={0}
                max={f.label === 'Hours' ? 999 : 59}
                value={f.val}
                onChange={(e) => f.set(Math.max(0, Number(e.target.value) || 0))}
                className={`${inputCls} font-mono text-center`}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-sm space-y-1.5">
          <label htmlFor="cd-date" className="block text-xs font-bold text-brand-900">Target Date &amp; Time</label>
          <input id="cd-date" type="datetime-local" value={targetIso} onChange={(e) => setTargetIso(e.target.value)} className={inputCls} />
        </div>
      )}

      <div className={`p-8 rounded-2xl text-center space-y-3 ${finished ? 'bg-emerald-950 text-emerald-300' : 'bg-brand-950 text-white'}`}>
        <div className="text-4xl sm:text-6xl font-mono font-extrabold tabular-nums tracking-tight">
          {displayStr}
        </div>
        {finished && <div className="text-sm font-bold uppercase tracking-wider">Time is up!</div>}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {!running ? (
            <button type="button" onClick={handleStart} className={primaryBtnCls}>
              <Play className="w-4 h-4" /> Start
            </button>
          ) : (
            <button type="button" onClick={handlePause} className={secondaryBtnCls}>
              <Pause className="w-4 h-4" /> Pause
            </button>
          )}
          <button type="button" onClick={handleReset} className={secondaryBtnCls}>
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
          <button
            type="button"
            onClick={() => boxRef.current?.requestFullscreen?.()}
            className={secondaryBtnCls}
          >
            <Maximize2 className="w-4 h-4" /> Fullscreen
          </button>
        </div>
        <CopyButton text={displayStr} label="Copy Time" />
      </div>
    </div>
  );
}
