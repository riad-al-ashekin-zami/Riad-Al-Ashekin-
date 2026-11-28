import React, { useState, useEffect, useMemo } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import {
  CopyButton,
  ClearButton,
  ErrorBanner,
  inputCls,
  textareaCls,
  selectCls,
  primaryBtnCls,
  secondaryBtnCls,
} from './shared';

/* ============================================================================
 * 21) Unix Timestamp Converter (/unix-timestamp-converter/)
 * ========================================================================== */
function toLocalInputStr(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function UnixTimestampWidget() {
  const [nowSec, setNowSec] = useState(() => Math.floor(Date.now() / 1000));
  const [tsInput, setTsInput] = useState(() => String(Math.floor(Date.now() / 1000)));
  const [dateInput, setDateInput] = useState(() => toLocalInputStr(new Date()));

  useEffect(() => {
    const id = setInterval(() => setNowSec(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(id);
  }, []);

  const tsDecoded = useMemo(() => {
    const trimmed = tsInput.trim();
    if (!trimmed) return { error: null, unit: '', utc: '', local: '', iso: '' };
    if (!/^-?\d+$/.test(trimmed)) {
      return { error: 'Enter a valid integer Unix timestamp in seconds or milliseconds.', unit: '', utc: '', local: '', iso: '' };
    }
    const num = Number(trimmed);
    const isMs = Math.abs(num) >= 1e12;
    const ms = isMs ? num : num * 1000;
    const d = new Date(ms);
    if (Number.isNaN(d.getTime())) {
      return { error: 'Timestamp is out of valid JavaScript Date range.', unit: '', utc: '', local: '', iso: '' };
    }
    return {
      error: null,
      unit: isMs ? 'Milliseconds (auto-detected)' : 'Seconds (auto-detected)',
      utc: d.toUTCString(),
      local: d.toLocaleString(),
      iso: d.toISOString(),
    };
  }, [tsInput]);

  const dateEncoded = useMemo(() => {
    if (!dateInput) return { error: null, sec: '', ms: '' };
    const d = new Date(dateInput);
    if (Number.isNaN(d.getTime())) {
      return { error: 'Enter a valid date and time.', sec: '', ms: '' };
    }
    return {
      error: null,
      sec: String(Math.floor(d.getTime() / 1000)),
      ms: String(d.getTime()),
    };
  }, [dateInput]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="p-4 rounded-xl bg-brand-950 text-white flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold text-brand-300 uppercase">Current Unix Epoch Time (Seconds)</div>
          <div className="text-2xl sm:text-3xl font-mono font-bold tabular-nums mt-1">{nowSec}</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setTsInput(String(nowSec))} className={primaryBtnCls}>
            Use Current Timestamp
          </button>
          <CopyButton text={String(nowSec)} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-brand-50/60 border border-brand-200 space-y-4">
          <h3 className="text-sm font-bold text-brand-950">Timestamp to Date</h3>
          <div className="space-y-1.5">
            <label htmlFor="unix-in" className="block text-xs font-bold text-brand-900">Unix Timestamp (seconds or ms)</label>
            <input id="unix-in" type="text" value={tsInput} onChange={(e) => setTsInput(e.target.value)} className={`${inputCls} font-mono`} />
          </div>
          <ErrorBanner message={tsDecoded.error} />
          {!tsDecoded.error && tsDecoded.iso && (
            <div className="space-y-2 text-xs">
              <div className="text-brand-600 font-semibold">{tsDecoded.unit}</div>
              <div className="p-2.5 bg-white rounded-lg border border-brand-200 flex items-center justify-between gap-2">
                <div><span className="font-bold text-brand-700">UTC:</span> <span className="font-mono">{tsDecoded.utc}</span></div>
                <CopyButton text={tsDecoded.utc} />
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-brand-200 flex items-center justify-between gap-2">
                <div><span className="font-bold text-brand-700">Local:</span> <span className="font-mono">{tsDecoded.local}</span></div>
                <CopyButton text={tsDecoded.local} />
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-brand-200 flex items-center justify-between gap-2">
                <div><span className="font-bold text-brand-700">ISO 8601:</span> <span className="font-mono">{tsDecoded.iso}</span></div>
                <CopyButton text={tsDecoded.iso} />
              </div>
            </div>
          )}
        </div>

        <div className="p-5 rounded-xl bg-brand-50/60 border border-brand-200 space-y-4">
          <h3 className="text-sm font-bold text-brand-950">Date &amp; Time to Timestamp</h3>
          <div className="space-y-1.5">
            <label htmlFor="unix-dt" className="block text-xs font-bold text-brand-900">Local Date &amp; Time</label>
            <input id="unix-dt" type="datetime-local" step="1" value={dateInput} onChange={(e) => setDateInput(e.target.value)} className={inputCls} />
          </div>
          <ErrorBanner message={dateEncoded.error} />
          {!dateEncoded.error && dateEncoded.sec && (
            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-brand-200 flex items-center justify-between gap-2">
                <div><span className="font-bold text-brand-700">Seconds:</span> <span className="font-mono tabular-nums">{dateEncoded.sec}</span></div>
                <CopyButton text={dateEncoded.sec} />
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-brand-200 flex items-center justify-between gap-2">
                <div><span className="font-bold text-brand-700">Milliseconds:</span> <span className="font-mono tabular-nums">{dateEncoded.ms}</span></div>
                <CopyButton text={dateEncoded.ms} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 22) HEX to RGB Converter (/hex-to-rgb/)
 * ========================================================================== */
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const sNorm = s / 100;
  const lNorm = l / 100;
  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lNorm - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn: h = (gn - bn) / d + (gn < bn ? 6 : 0); break;
      case gn: h = (bn - rn) / d + 2; break;
      case bn: h = (rn - gn) / d + 4; break;
    }
    h *= 60;
  }
  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

function parseColorString(raw: string): { r: number; g: number; b: number; a: number } | null {
  const s = raw.trim();
  const hexMatch = s.match(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/);
  if (hexMatch) {
    const hex = hexMatch[1];
    if (hex.length === 3) {
      return {
        r: parseInt(hex[0] + hex[0], 16),
        g: parseInt(hex[1] + hex[1], 16),
        b: parseInt(hex[2] + hex[2], 16),
        a: 1,
      };
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const a = hex.length === 8 ? Number((parseInt(hex.slice(6, 8), 16) / 255).toFixed(2)) : 1;
    return { r, g, b, a };
  }
  const rgbMatch = s.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([0-9.]+))?\s*\)$/i);
  if (rgbMatch) {
    const r = Number(rgbMatch[1]), g = Number(rgbMatch[2]), b = Number(rgbMatch[3]);
    const a = rgbMatch[4] !== undefined ? Number(rgbMatch[4]) : 1;
    if (r <= 255 && g <= 255 && b <= 255 && a >= 0 && a <= 1) return { r, g, b, a };
  }
  const hslMatch = s.match(/^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%(?:\s*,\s*([0-9.]+))?\s*\)$/i);
  if (hslMatch) {
    const h = Number(hslMatch[1]) % 360, sat = Number(hslMatch[2]), lig = Number(hslMatch[3]);
    const a = hslMatch[4] !== undefined ? Number(hslMatch[4]) : 1;
    if (sat <= 100 && lig <= 100 && a >= 0 && a <= 1) {
      const [r, g, b] = hslToRgb(h, sat, lig);
      return { r, g, b, a };
    }
  }
  return null;
}

function relativeLuminance(r: number, g: number, b: number): number {
  const lin = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

export function HexToRgbWidget() {
  const [colorInput, setColorInput] = useState('#7839EE');

  const parsed = useMemo(() => parseColorString(colorInput), [colorInput]);

  const formats = useMemo(() => {
    if (!parsed) return null;
    const { r, g, b, a } = parsed;
    const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase();
    const hex6 = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    const hex8 = `${hex6}${toHex(Math.round(a * 255))}`;
    const rgbStr = a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
    const [h, s, l] = rgbToHsl(r, g, b);
    const hslStr = a < 1 ? `hsla(${h}, ${s}%, ${l}%, ${a})` : `hsl(${h}, ${s}%, ${l}%)`;
    const lum = relativeLuminance(r, g, b);
    const contrastWhite = ((1 + 0.05) / (lum + 0.05)).toFixed(2);
    const contrastBlack = ((lum + 0.05) / (0 + 0.05)).toFixed(2);
    return { hex6, hex8, rgbStr, hslStr, contrastWhite, contrastBlack };
  }, [parsed]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex-1 min-w-[220px] space-y-1.5">
          <label htmlFor="col-input" className="block text-xs font-bold text-brand-900">
            Color Input (HEX 3/6/8-digit, rgb(), rgba(), hsl(), hsla())
          </label>
          <input id="col-input" type="text" value={colorInput} onChange={(e) => setColorInput(e.target.value)} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="col-picker" className="block text-xs font-bold text-brand-900">Picker</label>
          <input
            id="col-picker"
            type="color"
            value={formats?.hex6 || '#7839EE'}
            onChange={(e) => setColorInput(e.target.value.toUpperCase())}
            className="w-16 h-10 p-1 rounded-xl border border-brand-200 cursor-pointer"
          />
        </div>
      </div>

      {!parsed && (
        <ErrorBanner message="Invalid color format. Try #7839EE, #F09, #7839EE80, rgb(120, 57, 238), or hsl(260, 84%, 58%)." />
      )}

      {formats && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-3">
            <div
              className="h-36 rounded-2xl border border-brand-200 flex items-center justify-center font-mono text-sm font-bold shadow-inner"
              style={{ backgroundColor: formats.rgbStr, color: Number(formats.contrastWhite) >= 4.5 ? '#FFFFFF' : '#111111' }}
            >
              {formats.hex6}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-brand-50 border border-brand-200">
                <div className="font-bold text-brand-600">Contrast vs White</div>
                <div className="text-lg font-mono font-bold tabular-nums text-brand-950">{formats.contrastWhite}:1</div>
              </div>
              <div className="p-3 rounded-xl bg-brand-50 border border-brand-200">
                <div className="font-bold text-brand-600">Contrast vs Black</div>
                <div className="text-lg font-mono font-bold tabular-nums text-brand-950">{formats.contrastBlack}:1</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {[
              { label: 'HEX (6-digit)', val: formats.hex6 },
              { label: 'HEX (8-digit with Alpha)', val: formats.hex8 },
              { label: 'RGB / RGBA', val: formats.rgbStr },
              { label: 'HSL / HSLA', val: formats.hslStr },
            ].map((row) => (
              <div key={row.label} className="p-3.5 rounded-xl bg-brand-50/70 border border-brand-200 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-bold text-brand-600 uppercase">{row.label}</div>
                  <div className="text-sm font-mono font-semibold text-brand-950">{row.val}</div>
                </div>
                <CopyButton text={row.val} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
 * 23) CSS Gradient Generator (/css-gradient-generator/)
 * ========================================================================== */
interface GradStop {
  id: number;
  color: string;
  position: number;
}

export function CssGradientWidget() {
  const [gradType, setGradType] = useState<'linear' | 'radial'>('linear');
  const [angle, setAngle] = useState(135);
  const [stops, setStops] = useState<GradStop[]>([
    { id: 1, color: '#241547', position: 0 },
    { id: 2, color: '#7839ee', position: 50 },
    { id: 3, color: '#38bdf8', position: 100 },
  ]);

  const sortedStops = useMemo(() => [...stops].sort((a, b) => a.position - b.position), [stops]);
  const stopStr = sortedStops.map((s) => `${s.color} ${s.position}%`).join(', ');
  const cssVal =
    gradType === 'linear' ? `linear-gradient(${angle}deg, ${stopStr})` : `radial-gradient(circle, ${stopStr})`;
  const cssRule = `background: ${cssVal};`;

  const addStop = () => {
    setStops((prev) => [...prev, { id: Date.now(), color: '#10b981', position: 75 }]);
  };

  const removeStop = (id: number) => {
    if (stops.length <= 2) return;
    setStops((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="h-48 w-full rounded-2xl border border-brand-200 shadow-inner" style={{ background: cssVal }} />

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setGradType('linear')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
              gradType === 'linear' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            Linear
          </button>
          <button
            type="button"
            onClick={() => setGradType('radial')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
              gradType === 'radial' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            Radial
          </button>
        </div>

        {gradType === 'linear' && (
          <div className="flex items-center gap-3 flex-1 min-w-[200px]">
            <label htmlFor="grad-angle" className="text-xs font-bold text-brand-900 whitespace-nowrap">
              Angle: {angle}°
            </label>
            <input
              id="grad-angle"
              type="range"
              min={0}
              max={360}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="flex-1 accent-accent-600"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {[
            { name: 'Violet Dusk', t: 'linear' as const, a: 135, s: [{ id: 1, color: '#1e1b4b', position: 0 }, { id: 2, color: '#7c3aed', position: 100 }] },
            { name: 'Oceanic Slate', t: 'linear' as const, a: 90, s: [{ id: 1, color: '#0f172a', position: 0 }, { id: 2, color: '#0284c7', position: 100 }] },
            { name: 'Warm Dawn', t: 'radial' as const, a: 135, s: [{ id: 1, color: '#f59e0b', position: 0 }, { id: 2, color: '#be123c', position: 100 }] },
          ].map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => { setGradType(preset.t); setAngle(preset.a); setStops(preset.s); }}
              className={secondaryBtnCls}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-brand-900">Color Stops</span>
          <button type="button" onClick={addStop} className={secondaryBtnCls}>
            <Plus className="w-3.5 h-3.5" /> Add Stop
          </button>
        </div>
        {stops.map((stop) => (
          <div key={stop.id} className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-brand-50/60 border border-brand-200">
            <input
              type="color"
              value={stop.color}
              aria-label="Color stop value"
              onChange={(e) => setStops((prev) => prev.map((s) => (s.id === stop.id ? { ...s, color: e.target.value } : s)))}
              className="w-10 h-9 p-0.5 rounded-lg border border-brand-200 cursor-pointer"
            />
            <span className="text-xs font-mono text-brand-800 w-16">{stop.color}</span>
            <input
              type="range"
              min={0}
              max={100}
              value={stop.position}
              aria-label="Color stop position percentage"
              onChange={(e) => setStops((prev) => prev.map((s) => (s.id === stop.id ? { ...s, position: Number(e.target.value) } : s)))}
              className="flex-1 min-w-[120px] accent-accent-600"
            />
            <span className="text-xs font-mono tabular-nums w-10 text-right">{stop.position}%</span>
            <button
              type="button"
              disabled={stops.length <= 2}
              onClick={() => removeStop(stop.id)}
              className="p-2 text-brand-500 hover:text-red-600 disabled:opacity-40 cursor-pointer"
              aria-label="Remove stop"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-brand-950 text-emerald-400 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <code className="break-all">{cssRule}</code>
        <CopyButton text={cssRule} className="shrink-0" />
      </div>
    </div>
  );
}

/* ============================================================================
 * 24) CSS Box Shadow Generator (/box-shadow-generator/)
 * ========================================================================== */
interface ShadowLayer {
  id: number;
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
  inset: boolean;
}

function hexToRgba(hex: string, opacity: number): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16) || 0;
  const g = parseInt(clean.slice(2, 4), 16) || 0;
  const b = parseInt(clean.slice(4, 6), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function CssBoxShadowWidget() {
  const [layers, setLayers] = useState<ShadowLayer[]>([
    { id: 1, x: 0, y: 12, blur: 28, spread: -4, color: '#150d28', opacity: 0.18, inset: false },
  ]);

  const shadowValue = layers
    .map((l) => `${l.inset ? 'inset ' : ''}${l.x}px ${l.y}px ${l.blur}px ${l.spread}px ${hexToRgba(l.color, l.opacity)}`)
    .join(', ');
  const cssRule = `box-shadow: ${shadowValue};`;

  const updateLayer = (id: number, patch: Partial<ShadowLayer>) => {
    setLayers((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="p-10 sm:p-14 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center">
        <div
          className="w-56 h-36 rounded-2xl bg-white border border-brand-100 flex items-center justify-center text-sm font-bold text-brand-900"
          style={{ boxShadow: shadowValue }}
        >
          Preview Card
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-brand-900">Shadow Layers ({layers.length})</span>
        <button
          type="button"
          onClick={() =>
            setLayers((prev) => [...prev, { id: Date.now(), x: 0, y: 4, blur: 10, spread: 0, color: '#7839ee', opacity: 0.15, inset: false }])
          }
          className={secondaryBtnCls}
        >
          <Plus className="w-3.5 h-3.5" /> Add Layer
        </button>
      </div>

      <div className="space-y-4">
        {layers.map((l, idx) => (
          <div key={l.id} className="p-4 rounded-xl bg-brand-50/60 border border-brand-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-800">Layer {idx + 1}</span>
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center gap-2 text-xs cursor-pointer">
                  <input type="checkbox" checked={l.inset} onChange={(e) => updateLayer(l.id, { inset: e.target.checked })} className="w-4 h-4 accent-accent-600 rounded" />
                  <span className="font-semibold text-brand-900">Inset</span>
                </label>
                {layers.length > 1 && (
                  <button type="button" onClick={() => setLayers((p) => p.filter((x) => x.id !== l.id))} className="text-xs text-red-600 font-semibold cursor-pointer">
                    Remove
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              {[
                { key: 'x' as const, label: `Horizontal X (${l.x}px)`, min: -60, max: 60 },
                { key: 'y' as const, label: `Vertical Y (${l.y}px)`, min: -60, max: 60 },
                { key: 'blur' as const, label: `Blur (${l.blur}px)`, min: 0, max: 100 },
                { key: 'spread' as const, label: `Spread (${l.spread}px)`, min: -40, max: 40 },
              ].map((sl) => (
                <label key={sl.key} className="block space-y-1">
                  <span className="font-bold text-brand-800">{sl.label}</span>
                  <input
                    type="range"
                    min={sl.min}
                    max={sl.max}
                    value={l[sl.key]}
                    onChange={(e) => updateLayer(l.id, { [sl.key]: Number(e.target.value) })}
                    className="w-full accent-accent-600"
                  />
                </label>
              ))}
              <label className="block space-y-1">
                <span className="font-bold text-brand-800">Opacity ({l.opacity})</span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={l.opacity}
                  onChange={(e) => updateLayer(l.id, { opacity: Number(e.target.value) })}
                  className="w-full accent-accent-600"
                />
              </label>
              <label className="block space-y-1">
                <span className="font-bold text-brand-800">Color</span>
                <input
                  type="color"
                  value={l.color}
                  onChange={(e) => updateLayer(l.id, { color: e.target.value })}
                  className="w-full h-9 p-0.5 rounded-lg border border-brand-200 cursor-pointer"
                />
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-brand-950 text-emerald-400 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <code className="break-all">{cssRule}</code>
        <CopyButton text={cssRule} className="shrink-0" />
      </div>
    </div>
  );
}

/* ============================================================================
 * 25) HTML Entity Encoder & Decoder (/html-entity-encoder/)
 * ========================================================================== */
const NAMED_REVERSE: Record<string, string> = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&apos;': "'",
  '&nbsp;': '\u00A0', '&copy;': '©', '&reg;': '®', '&trade;': '™', '&mdash;': '—', '&ndash;': '–', '&hellip;': '…',
};

function encodeHtmlEntities(str: string, allNonAscii: boolean): string {
  const reserved: Record<string, string> = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  };
  return Array.from(str)
    .map((ch) => {
      if (reserved[ch]) return reserved[ch];
      const cp = ch.codePointAt(0) ?? 0;
      if (allNonAscii && cp > 127) return `&#${cp};`;
      return ch;
    })
    .join('');
}

function decodeHtmlEntities(str: string): string {
  return str.replace(/&(?:#(\d+)|#x([0-9a-fA-F]+)|[a-zA-Z]+);/g, (full, dec, hex) => {
    if (dec) return String.fromCodePoint(parseInt(dec, 10));
    if (hex) return String.fromCodePoint(parseInt(hex, 16));
    return NAMED_REVERSE[full] ?? full;
  });
}

export function HtmlEntityWidget() {
  const [direction, setDirection] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState('<div class="card">5 > 3 & "Free" © 2026</div>');
  const [encodeAllNonAscii, setEncodeAllNonAscii] = useState(false);

  const output = useMemo(() => {
    if (!input) return '';
    return direction === 'encode' ? encodeHtmlEntities(input, encodeAllNonAscii) : decodeHtmlEntities(input);
  }, [direction, input, encodeAllNonAscii]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setDirection('encode')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer ${
              direction === 'encode' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            Encode to Entities
          </button>
          <button
            type="button"
            onClick={() => setDirection('decode')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer ${
              direction === 'decode' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            Decode Entities
          </button>
        </div>

        {direction === 'encode' && (
          <label className="inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={encodeAllNonAscii}
              onChange={(e) => setEncodeAllNonAscii(e.target.checked)}
              className="w-4 h-4 accent-accent-600 rounded"
            />
            <span className="font-medium text-brand-900">Encode all non-ASCII characters (numeric)</span>
          </label>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="ent-in" className="block text-xs font-bold text-brand-900">Input</label>
          <textarea id="ent-in" rows={6} value={input} onChange={(e) => setInput(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="ent-out" className="block text-xs font-bold text-brand-900">Output</label>
          <textarea id="ent-out" rows={6} readOnly value={output} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => setInput('')} />
        <CopyButton text={output} />
      </div>
    </div>
  );
}
