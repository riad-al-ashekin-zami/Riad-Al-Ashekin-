import React, { useState, useMemo, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import * as yaml from 'js-yaml';
import { md5 } from 'js-md5';
import { Download, RefreshCw, AlertTriangle } from 'lucide-react';
import {
  CopyButton,
  ClearButton,
  ErrorBanner,
  inputCls,
  textareaCls,
  selectCls,
  primaryBtnCls,
  secondaryBtnCls,
  downloadTextFile,
} from './shared';

/* ============================================================================
 * 11) Base64 Encode & Decode (/base64-encode-decode/)
 * ========================================================================== */
function utf8ToBase64(text: string, urlSafe: boolean): string {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) {
    bin += String.fromCharCode(bytes[i]);
  }
  const b64 = btoa(bin);
  return urlSafe ? b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '') : b64;
}

function base64ToUtf8(b64Input: string): string {
  let clean = b64Input.trim().replace(/\s+/g, '');
  clean = clean.replace(/-/g, '+').replace(/_/g, '/');
  const pad = clean.length % 4;
  if (pad === 1) throw new Error('Invalid Base64 length.');
  if (pad > 0) clean += '='.repeat(4 - pad);
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(clean)) {
    throw new Error('Input contains invalid Base64 characters.');
  }
  const bin = atob(clean);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    bytes[i] = bin.charCodeAt(i);
  }
  return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
}

export function Base64Widget() {
  const [direction, setDirection] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState('Hello, SEO & UTF-8! ✓');
  const [urlSafe, setUrlSafe] = useState(false);

  const { output, error } = useMemo(() => {
    if (!input) return { output: '', error: null };
    try {
      if (direction === 'encode') {
        return { output: utf8ToBase64(input, urlSafe), error: null };
      }
      return { output: base64ToUtf8(input), error: null };
    } catch (e) {
      return {
        output: '',
        error: e instanceof Error ? e.message : 'Invalid Base64 input.',
      };
    }
  }, [direction, input, urlSafe]);

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
            Encode to Base64
          </button>
          <button
            type="button"
            onClick={() => setDirection('decode')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer ${
              direction === 'decode' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            Decode Base64
          </button>
        </div>

        {direction === 'encode' && (
          <label className="inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={urlSafe}
              onChange={(e) => setUrlSafe(e.target.checked)}
              className="w-4 h-4 accent-accent-600 rounded"
            />
            <span className="font-medium text-brand-900">URL-safe (- and _, no padding)</span>
          </label>
        )}
      </div>

      <ErrorBanner message={error} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="b64-in" className="block text-xs font-bold text-brand-900">
            {direction === 'encode' ? 'Plain Text' : 'Base64 Input'}
          </label>
          <textarea id="b64-in" rows={6} value={input} onChange={(e) => setInput(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="b64-out" className="block text-xs font-bold text-brand-900">
            {direction === 'encode' ? 'Base64 Output' : 'Decoded Text'}
          </label>
          <textarea id="b64-out" rows={6} readOnly value={output} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <ClearButton onClick={() => setInput('')} />
          <button
            type="button"
            disabled={!output || Boolean(error)}
            onClick={() => {
              setInput(output);
              setDirection(direction === 'encode' ? 'decode' : 'encode');
            }}
            className={secondaryBtnCls}
          >
            Swap Input &amp; Output
          </button>
        </div>
        <CopyButton text={output} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 12) QR Code Generator (/qr-code-generator/)
 * ========================================================================== */
type QrContentType = 'url' | 'text' | 'email' | 'phone' | 'wifi';

export function QrCodeGeneratorWidget() {
  const [contentType, setContentType] = useState<QrContentType>('url');
  const [urlVal, setUrlVal] = useState('https://riadalashekin.com');
  const [textVal, setTextVal] = useState('Hello from QR Code Generator');
  const [emailTo, setEmailTo] = useState('ashekinriad@gmail.com');
  const [emailSubj, setEmailSubj] = useState('Inquiry');
  const [phoneVal, setPhoneVal] = useState('+1-555-0199');
  const [wifiSsid, setWifiSsid] = useState('OfficeNetwork');
  const [wifiPass, setWifiPass] = useState('GuestAccess2026');
  const [wifiEnc, setWifiEnc] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');

  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState('#150d28');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [ecLevel, setEcLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [svgMarkup, setSvgMarkup] = useState('');
  const [pngUrl, setPngUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  const payload = useMemo(() => {
    switch (contentType) {
      case 'url':
        return urlVal.trim();
      case 'text':
        return textVal;
      case 'email':
        return `mailto:${emailTo.trim()}${emailSubj.trim() ? `?subject=${encodeURIComponent(emailSubj.trim())}` : ''}`;
      case 'phone':
        return `tel:${phoneVal.trim()}`;
      case 'wifi':
        return `WIFI:T:${wifiEnc};S:${wifiSsid};P:${wifiEnc === 'nopass' ? '' : wifiPass};;`;
    }
  }, [contentType, urlVal, textVal, emailTo, emailSubj, phoneVal, wifiSsid, wifiPass, wifiEnc]);

  useEffect(() => {
    let cancelled = false;
    if (!payload) {
      setSvgMarkup('');
      setPngUrl('');
      setError('Enter content to generate a QR code.');
      return;
    }
    setError(null);
    const opts = {
      width: size,
      margin: 2,
      errorCorrectionLevel: ecLevel,
      color: { dark: fgColor, light: bgColor },
    };

    Promise.all([QRCode.toString(payload, { ...opts, type: 'svg' }), QRCode.toDataURL(payload, opts)])
      .then(([svg, dataUrl]) => {
        if (!cancelled) {
          setSvgMarkup(svg);
          setPngUrl(dataUrl);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Unable to generate QR code for this input.');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [payload, size, fgColor, bgColor, ecLevel]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        {(['url', 'text', 'email', 'phone', 'wifi'] as QrContentType[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setContentType(t)}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold uppercase cursor-pointer ${
              contentType === t ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 space-y-4">
          {contentType === 'url' && (
            <div className="space-y-1.5">
              <label htmlFor="qr-url" className="block text-xs font-bold text-brand-900">Website URL</label>
              <input id="qr-url" type="url" value={urlVal} onChange={(e) => setUrlVal(e.target.value)} className={inputCls} />
            </div>
          )}
          {contentType === 'text' && (
            <div className="space-y-1.5">
              <label htmlFor="qr-text" className="block text-xs font-bold text-brand-900">Text Content</label>
              <textarea id="qr-text" rows={4} value={textVal} onChange={(e) => setTextVal(e.target.value)} className={textareaCls} />
            </div>
          )}
          {contentType === 'email' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="qr-email" className="block text-xs font-bold text-brand-900">Email Address</label>
                <input id="qr-email" type="email" value={emailTo} onChange={(e) => setEmailTo(e.target.value)} className={inputCls} />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="qr-subj" className="block text-xs font-bold text-brand-900">Subject (Optional)</label>
                <input id="qr-subj" type="text" value={emailSubj} onChange={(e) => setEmailSubj(e.target.value)} className={inputCls} />
              </div>
            </div>
          )}
          {contentType === 'phone' && (
            <div className="space-y-1.5">
              <label htmlFor="qr-phone" className="block text-xs font-bold text-brand-900">Phone Number</label>
              <input id="qr-phone" type="tel" value={phoneVal} onChange={(e) => setPhoneVal(e.target.value)} className={inputCls} />
            </div>
          )}
          {contentType === 'wifi' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="qr-ssid" className="block text-xs font-bold text-brand-900">Network SSID</label>
                <input id="qr-ssid" type="text" value={wifiSsid} onChange={(e) => setWifiSsid(e.target.value)} className={inputCls} />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="qr-wpass" className="block text-xs font-bold text-brand-900">Password</label>
                <input id="qr-wpass" type="text" value={wifiPass} disabled={wifiEnc === 'nopass'} onChange={(e) => setWifiPass(e.target.value)} className={inputCls} />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="qr-wenc" className="block text-xs font-bold text-brand-900">Encryption</label>
                <select id="qr-wenc" value={wifiEnc} onChange={(e) => setWifiEnc(e.target.value as 'WPA' | 'WEP' | 'nopass')} className={`${selectCls} w-full`}>
                  <option value="WPA">WPA / WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">None (Open)</option>
                </select>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="space-y-1.5">
              <label htmlFor="qr-size" className="block text-xs font-bold text-brand-900">Size (px)</label>
              <select id="qr-size" value={size} onChange={(e) => setSize(Number(e.target.value))} className={`${selectCls} w-full`}>
                <option value={192}>192 × 192</option>
                <option value={256}>256 × 256</option>
                <option value={384}>384 × 384</option>
                <option value={512}>512 × 512</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="qr-ec" className="block text-xs font-bold text-brand-900">Error Correction</label>
              <select id="qr-ec" value={ecLevel} onChange={(e) => setEcLevel(e.target.value as 'L' | 'M' | 'Q' | 'H')} className={`${selectCls} w-full`}>
                <option value="L">L (7%)</option>
                <option value="M">M (15%)</option>
                <option value="Q">Q (25%)</option>
                <option value="H">H (30%)</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="qr-fg" className="block text-xs font-bold text-brand-900">Foreground</label>
              <input id="qr-fg" type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="w-full h-10 p-1 rounded-xl border border-brand-200 cursor-pointer" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="qr-bg" className="block text-xs font-bold text-brand-900">Background</label>
              <input id="qr-bg" type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-full h-10 p-1 rounded-xl border border-brand-200 cursor-pointer" />
            </div>
          </div>

          <ErrorBanner message={error} />
        </div>

        <div className="lg:col-span-5 flex flex-col items-center p-6 rounded-2xl bg-brand-50/70 border border-brand-200 space-y-4">
          {pngUrl ? (
            <img src={pngUrl} alt="Generated QR Code" className="w-52 h-52 object-contain rounded-xl border border-brand-200 bg-white p-2" />
          ) : (
            <div className="w-52 h-52 rounded-xl border border-dashed border-brand-300 flex items-center justify-center text-xs text-brand-500">
              QR preview
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-2 w-full">
            <a
              href={pngUrl || '#'}
              download="qr-code.png"
              aria-disabled={!pngUrl}
              className={`${primaryBtnCls} no-underline ${!pngUrl ? 'pointer-events-none opacity-50' : ''}`}
            >
              <Download className="w-4 h-4" />
              <span>Download PNG</span>
            </a>
            <button
              type="button"
              disabled={!svgMarkup}
              onClick={() => downloadTextFile('qr-code.svg', svgMarkup, 'image/svg+xml;charset=utf-8')}
              className={secondaryBtnCls}
            >
              <Download className="w-4 h-4" />
              <span>Download SVG</span>
            </button>
          </div>
          <CopyButton text={svgMarkup} label="Copy SVG Code" className="w-full" disabled={!svgMarkup} />
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 13) UUID Generator (/uuid-generator/)
 * ========================================================================== */
function generateSingleUuidV4(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0'));
  return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10).join('')}`;
}

export function UuidGeneratorWidget() {
  const [quantity, setQuantity] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [noHyphens, setNoHyphens] = useState(false);
  const [rawUuids, setRawUuids] = useState<string[]>(() => Array.from({ length: 5 }, generateSingleUuidV4));
  const [error, setError] = useState<string | null>(null);

  const regenerate = (qty = quantity) => {
    if (!Number.isInteger(qty) || qty < 1 || qty > 1000) {
      setError('Quantity must be a whole number between 1 and 1,000.');
      return;
    }
    setError(null);
    setRawUuids(Array.from({ length: qty }, generateSingleUuidV4));
  };

  const formattedText = useMemo(
    () =>
      rawUuids
        .map((id) => {
          let s = noHyphens ? id.replace(/-/g, '') : id;
          return uppercase ? s.toUpperCase() : s.toLowerCase();
        })
        .join('\n'),
    [rawUuids, uppercase, noHyphens]
  );

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-1.5">
          <label htmlFor="uuid-qty" className="block text-xs font-bold text-brand-900">Quantity (1–1000)</label>
          <input
            id="uuid-qty"
            type="number"
            min={1}
            max={1000}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={`${inputCls} w-36 font-mono tabular-nums`}
          />
        </div>
        <label className="inline-flex items-center gap-2 text-xs sm:text-sm pb-2 cursor-pointer">
          <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">Uppercase</span>
        </label>
        <label className="inline-flex items-center gap-2 text-xs sm:text-sm pb-2 cursor-pointer">
          <input type="checkbox" checked={noHyphens} onChange={(e) => setNoHyphens(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">Remove hyphens</span>
        </label>
        <button type="button" onClick={() => regenerate(quantity)} className={primaryBtnCls}>
          <RefreshCw className="w-4 h-4" />
          <span>Generate UUIDs</span>
        </button>
      </div>

      <ErrorBanner message={error} />

      <div className="space-y-2">
        <label htmlFor="uuid-out" className="block text-xs font-bold text-brand-900">Generated UUID v4 List</label>
        <textarea id="uuid-out" rows={8} readOnly value={formattedText} className={`${textareaCls} bg-brand-50/70`} />
      </div>

      <div className="flex flex-wrap justify-end gap-3">
        <CopyButton text={formattedText} label="Copy All UUIDs" />
      </div>
    </div>
  );
}

/* ============================================================================
 * 14) Hash Generator (/hash-generator/)
 * ========================================================================== */
async function digestHex(algo: string, data: Uint8Array): Promise<string> {
  const buf = await crypto.subtle.digest(algo, data as unknown as BufferSource);
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

export function HashGeneratorWidget() {
  const [input, setInput] = useState('hello world');
  const [uppercase, setUppercase] = useState(false);
  const [hashes, setHashes] = useState<Record<string, string>>({});

  useEffect(() => {
    let cancelled = false;
    if (!input) {
      setHashes({ MD5: '', 'SHA-1': '', 'SHA-256': '', 'SHA-384': '', 'SHA-512': '' });
      return;
    }
    const bytes = new TextEncoder().encode(input);
    const md5Hex = md5(input);
    Promise.all([
      digestHex('SHA-1', bytes),
      digestHex('SHA-256', bytes),
      digestHex('SHA-384', bytes),
      digestHex('SHA-512', bytes),
    ]).then(([sha1, sha256, sha384, sha512]) => {
      if (!cancelled) {
        setHashes({
          MD5: md5Hex,
          'SHA-1': sha1,
          'SHA-256': sha256,
          'SHA-384': sha384,
          'SHA-512': sha512,
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [input]);

  const formatHash = (val: string) => (uppercase ? val.toUpperCase() : val.toLowerCase());

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="hash-input" className="block text-xs font-bold text-brand-900">Input Text</label>
          <label className="inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
            <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
            <span className="font-medium text-brand-900">Uppercase HEX</span>
          </label>
        </div>
        <textarea id="hash-input" rows={4} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type or paste text to hash..." className={textareaCls} />
      </div>

      <div className="space-y-3">
        {(['MD5', 'SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'] as const).map((alg) => {
          const val = formatHash(hashes[alg] || '');
          return (
            <div key={alg} className="p-3.5 rounded-xl bg-brand-50/70 border border-brand-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="min-w-0 flex-1 space-y-1">
                <div className="text-xs font-bold text-brand-700">{alg}</div>
                <div className="text-xs font-mono text-brand-950 break-all">{val || 'Enter text above'}</div>
              </div>
              <CopyButton text={val} disabled={!val} className="shrink-0" />
            </div>
          );
        })}
      </div>

      <div className="flex justify-start">
        <ClearButton onClick={() => setInput('')} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 15) JWT Decoder (/jwt-decoder/)
 * ========================================================================== */
const SAMPLE_JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsZXggUmVlZCIsImlhdCI6MTcwNDA2NzIwMCwiZXhwIjoxODkzNDU2MDAwfQ.signature_placeholder_not_verified';

export function JwtDecoderWidget() {
  const [token, setToken] = useState(SAMPLE_JWT);

  const decoded = useMemo(() => {
    const trimmed = token.trim();
    if (!trimmed) return { error: null, header: '', payload: '', claims: null };
    const parts = trimmed.split('.');
    if (parts.length !== 3) {
      return {
        error: 'Invalid JWT format. A JSON Web Token must have 3 parts separated by dots (header.payload.signature).',
        header: '',
        payload: '',
        claims: null,
      };
    }
    try {
      const headerObj = JSON.parse(base64ToUtf8(parts[0]));
      const payloadObj = JSON.parse(base64ToUtf8(parts[1]));
      const nowSec = Math.floor(Date.now() / 1000);
      const formatTs = (v: unknown) =>
        typeof v === 'number' && Number.isFinite(v) ? new Date(v * 1000).toLocaleString() : null;

      return {
        error: null,
        header: JSON.stringify(headerObj, null, 2),
        payload: JSON.stringify(payloadObj, null, 2),
        claims: {
          iat: formatTs(payloadObj.iat),
          nbf: formatTs(payloadObj.nbf),
          exp: formatTs(payloadObj.exp),
          isExpired: typeof payloadObj.exp === 'number' ? payloadObj.exp < nowSec : null,
        },
      };
    } catch (e) {
      return {
        error: e instanceof Error ? `Unable to decode JWT: ${e.message}` : 'Unable to decode JWT header or payload.',
        header: '',
        payload: '',
        claims: null,
      };
    }
  }, [token]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <span>
          Signature is <strong>NOT verified</strong>. This tool decodes the Base64URL header and payload locally in your browser.
        </span>
      </div>

      <div className="space-y-2">
        <label htmlFor="jwt-in" className="block text-xs font-bold text-brand-900">Encoded JWT</label>
        <textarea id="jwt-in" rows={4} value={token} onChange={(e) => setToken(e.target.value)} placeholder="Paste JWT here..." className={textareaCls} />
      </div>

      <ErrorBanner message={decoded.error} />

      {decoded.claims && (decoded.claims.exp || decoded.claims.iat || decoded.claims.nbf) && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {decoded.claims.iat && (
            <div className="p-3 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Issued At (iat)</div>
              <div className="text-xs font-mono text-brand-950 mt-1">{decoded.claims.iat}</div>
            </div>
          )}
          {decoded.claims.nbf && (
            <div className="p-3 rounded-xl bg-brand-50 border border-brand-200">
              <div className="text-[11px] font-bold text-brand-600 uppercase">Not Before (nbf)</div>
              <div className="text-xs font-mono text-brand-950 mt-1">{decoded.claims.nbf}</div>
            </div>
          )}
          {decoded.claims.exp && (
            <div className={`p-3 rounded-xl border ${decoded.claims.isExpired ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="text-[11px] font-bold uppercase text-brand-700">
                Expires (exp) — {decoded.claims.isExpired ? 'Expired' : 'Active'}
              </div>
              <div className="text-xs font-mono text-brand-950 mt-1">{decoded.claims.exp}</div>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-brand-900">Header JSON</span>
            <CopyButton text={decoded.header} disabled={!decoded.header} />
          </div>
          <pre className="p-4 bg-brand-950 text-emerald-400 rounded-xl text-xs font-mono overflow-x-auto min-h-[140px]">
            {decoded.header || '{}'}
          </pre>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-brand-900">Payload JSON</span>
            <CopyButton text={decoded.payload} disabled={!decoded.payload} />
          </div>
          <pre className="p-4 bg-brand-950 text-emerald-400 rounded-xl text-xs font-mono overflow-x-auto min-h-[140px]">
            {decoded.payload || '{}'}
          </pre>
        </div>
      </div>

      <div className="flex justify-start">
        <ClearButton onClick={() => setToken('')} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 16) Regex Tester (/regex-tester/)
 * ========================================================================== */
export function RegexTesterWidget() {
  const [pattern, setPattern] = useState('([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})');
  const [flags, setFlags] = useState<Record<string, boolean>>({ g: true, i: false, m: false, s: false, u: false });
  const [testText, setTestText] = useState('Contact support@example.com or hello@acme.org for help.');

  const flagStr = ['g', 'i', 'm', 's', 'u'].filter((f) => flags[f]).join('');

  const { matches, error, segments } = useMemo(() => {
    if (!pattern) {
      return { matches: [], error: null, segments: [{ text: testText, matched: false }] };
    }
    try {
      const re = new RegExp(pattern, flagStr);
      const found: Array<{ match: string; index: number; groups: string[] }> = [];
      const segs: Array<{ text: string; matched: boolean }> = [];

      if (flags.g) {
        let lastIdx = 0;
        let m: RegExpExecArray | null;
        let safety = 0;
        while ((m = re.exec(testText)) !== null && safety < 2000) {
          safety++;
          if (m.index > lastIdx) segs.push({ text: testText.slice(lastIdx, m.index), matched: false });
          segs.push({ text: m[0], matched: true });
          found.push({ match: m[0], index: m.index, groups: m.slice(1).map((g) => g ?? '') });
          lastIdx = m.index + m[0].length;
          if (m[0].length === 0) {
            re.lastIndex++;
          }
        }
        if (lastIdx < testText.length) segs.push({ text: testText.slice(lastIdx), matched: false });
      } else {
        const m = re.exec(testText);
        if (m) {
          if (m.index > 0) segs.push({ text: testText.slice(0, m.index), matched: false });
          segs.push({ text: m[0], matched: true });
          if (m.index + m[0].length < testText.length) segs.push({ text: testText.slice(m.index + m[0].length), matched: false });
          found.push({ match: m[0], index: m.index, groups: m.slice(1).map((g) => g ?? '') });
        } else {
          segs.push({ text: testText, matched: false });
        }
      }

      return { matches: found, error: null, segments: segs };
    } catch (e) {
      return {
        matches: [],
        error: e instanceof Error ? `Invalid pattern: ${e.message}` : 'Invalid regular expression.',
        segments: [{ text: testText, matched: false }],
      };
    }
  }, [pattern, flagStr, flags.g, testText]);

  const matchesSummary = matches.map((m, i) => `#${i + 1} [${m.index}]: ${m.match}`).join('\n');

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
        <div className="lg:col-span-8 space-y-1.5">
          <label htmlFor="rx-pat" className="block text-xs font-bold text-brand-900">JavaScript Regular Expression</label>
          <input id="rx-pat" type="text" value={pattern} onChange={(e) => setPattern(e.target.value)} className={`${inputCls} font-mono`} />
        </div>
        <div className="lg:col-span-4 flex flex-wrap gap-2">
          {(['g', 'i', 'm', 's', 'u'] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFlags((prev) => ({ ...prev, [f]: !prev[f] }))}
              className={`min-h-[40px] px-3 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer ${
                flags[f] ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <ErrorBanner message={error} />

      <div className="space-y-2">
        <label htmlFor="rx-test" className="block text-xs font-bold text-brand-900">Test String</label>
        <textarea id="rx-test" rows={4} value={testText} onChange={(e) => setTestText(e.target.value)} className={textareaCls} />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-brand-900">Live Highlighted Matches ({matches.length})</span>
          <CopyButton text={matchesSummary} label="Copy Matches" disabled={matches.length === 0} />
        </div>
        <div className="p-4 rounded-xl bg-brand-50 border border-brand-200 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words leading-relaxed">
          {segments.map((seg, i) =>
            seg.matched ? (
              <mark key={i} className="bg-accent-200 text-brand-950 px-0.5 rounded font-semibold">
                {seg.text || '(empty)'}
              </mark>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </div>
      </div>

      {matches.length > 0 && (
        <div className="overflow-x-auto border border-brand-200 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-brand-50 border-b border-brand-200 text-brand-700 font-bold">
              <tr>
                <th className="py-2.5 px-3">#</th>
                <th className="py-2.5 px-3">Index</th>
                <th className="py-2.5 px-3">Full Match</th>
                <th className="py-2.5 px-3">Capture Groups</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100 font-mono tabular-nums">
              {matches.slice(0, 50).map((m, idx) => (
                <tr key={idx}>
                  <td className="py-2 px-3">{idx + 1}</td>
                  <td className="py-2 px-3">{m.index}</td>
                  <td className="py-2 px-3 text-accent-700 font-semibold">{m.match}</td>
                  <td className="py-2 px-3 text-brand-700">{m.groups.length ? m.groups.join(' | ') : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
 * 17) Cron Expression Generator (/cron-expression-generator/)
 * ========================================================================== */
function parseCronField(field: string, min: number, max: number): Set<number> | null {
  const out = new Set<number>();
  const parts = field.split(',');
  for (const part of parts) {
    const stepSplit = part.split('/');
    if (stepSplit.length > 2) return null;
    const rangeStr = stepSplit[0];
    const step = stepSplit[1] ? Number(stepSplit[1]) : 1;
    if (!Number.isInteger(step) || step < 1) return null;

    if (rangeStr === '*') {
      for (let i = min; i <= max; i += step) out.add(i);
    } else if (rangeStr.includes('-')) {
      const [sStr, eStr] = rangeStr.split('-');
      const s = Number(sStr);
      const e = Number(eStr);
      if (!Number.isInteger(s) || !Number.isInteger(e) || s < min || e > max || s > e) return null;
      for (let i = s; i <= e; i += step) out.add(i);
    } else {
      const v = Number(rangeStr);
      if (!Number.isInteger(v) || v < min || v > max) return null;
      if (stepSplit[1]) {
        for (let i = v; i <= max; i += step) out.add(i);
      } else {
        out.add(v);
      }
    }
  }
  return out.size > 0 ? out : null;
}

function explainCron(expr: string): { explanation: string; nextRuns: string[]; error: string | null } {
  const parts = expr.trim().split(/\s+/);
  if (parts.length !== 5) {
    return { explanation: '', nextRuns: [], error: 'Cron expression must have exactly 5 fields: minute hour day-of-month month day-of-week.' };
  }
  const [minF, hrF, domF, monF, dowF] = parts;
  const mins = parseCronField(minF, 0, 59);
  const hrs = parseCronField(hrF, 0, 23);
  const doms = parseCronField(domF, 1, 31);
  const mons = parseCronField(monF, 1, 12);
  const dows = parseCronField(dowF, 0, 6);

  if (!mins || !hrs || !doms || !mons || !dows) {
    return { explanation: '', nextRuns: [], error: 'One or more cron fields contain invalid numbers or ranges (use 0–6 for weekday).' };
  }

  const desc = [
    minF === '*' ? 'every minute' : minF.startsWith('*/') ? `every ${minF.slice(2)} minutes` : `at minute ${minF}`,
    hrF === '*' ? 'of every hour' : hrF.startsWith('*/') ? `every ${hrF.slice(2)} hours` : `at hour ${hrF}`,
    domF === '*' ? 'every day of month' : `on day ${domF} of the month`,
    monF === '*' ? 'in every month' : `in month ${monF}`,
    dowF === '*' ? 'on any day of the week' : `on weekday ${dowF}`,
  ].join(', ');

  const nextRuns: string[] = [];
  const cursor = new Date();
  cursor.setSeconds(0, 0);
  cursor.setMinutes(cursor.getMinutes() + 1);

  const maxIterations = 525600; // 1 year in minutes
  for (let i = 0; i < maxIterations && nextRuns.length < 5; i++) {
    const m = cursor.getMinutes();
    const h = cursor.getHours();
    const dom = cursor.getDate();
    const mon = cursor.getMonth() + 1;
    const dow = cursor.getDay();

    const domMatch = doms.has(dom);
    const dowMatch = dows.has(dow);
    const dayMatches =
      domF === '*' && dowF === '*'
        ? true
        : domF === '*'
        ? dowMatch
        : dowF === '*'
        ? domMatch
        : domMatch || dowMatch;

    if (mins.has(m) && hrs.has(h) && mons.has(mon) && dayMatches) {
      nextRuns.push(cursor.toLocaleString());
    }
    cursor.setMinutes(cursor.getMinutes() + 1);
  }

  return {
    explanation: `Runs ${desc}.`,
    nextRuns,
    error: null,
  };
}

export function CronGeneratorWidget() {
  const [minute, setMinute] = useState('*/15');
  const [hour, setHour] = useState('*');
  const [dom, setDom] = useState('*');
  const [month, setMonth] = useState('*');
  const [dow, setDow] = useState('1-5');
  const [customExpr, setCustomExpr] = useState('*/15 * * * 1-5');

  const updateFromFields = (m: string, h: string, d: string, mo: string, dw: string) => {
    setMinute(m);
    setHour(h);
    setDom(d);
    setMonth(mo);
    setDow(dw);
    setCustomExpr(`${m} ${h} ${d} ${mo} ${dw}`);
  };

  const handleExprInput = (val: string) => {
    setCustomExpr(val);
    const parts = val.trim().split(/\s+/);
    if (parts.length === 5) {
      setMinute(parts[0]);
      setHour(parts[1]);
      setDom(parts[2]);
      setMonth(parts[3]);
      setDow(parts[4]);
    }
  };

  const { explanation, nextRuns, error } = useMemo(() => explainCron(customExpr), [customExpr]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { label: 'Minute (0-59)', val: minute, set: (v: string) => updateFromFields(v, hour, dom, month, dow) },
          { label: 'Hour (0-23)', val: hour, set: (v: string) => updateFromFields(minute, v, dom, month, dow) },
          { label: 'Day/Month (1-31)', val: dom, set: (v: string) => updateFromFields(minute, hour, v, month, dow) },
          { label: 'Month (1-12)', val: month, set: (v: string) => updateFromFields(minute, hour, dom, v, dow) },
          { label: 'Weekday (0-6)', val: dow, set: (v: string) => updateFromFields(minute, hour, dom, month, v) },
        ].map((f, idx) => (
          <div key={idx} className="space-y-1.5">
            <label className="block text-[11px] font-bold text-brand-800">{f.label}</label>
            <input type="text" value={f.val} onChange={(e) => f.set(e.target.value)} className={`${inputCls} font-mono text-center`} />
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
        <div className="flex-1 space-y-1.5">
          <label htmlFor="cron-expr" className="block text-xs font-bold text-brand-900">5-Field Cron Expression</label>
          <input id="cron-expr" type="text" value={customExpr} onChange={(e) => handleExprInput(e.target.value)} className={`${inputCls} font-mono text-base font-bold`} />
        </div>
        <CopyButton text={customExpr} label="Copy Expression" />
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { label: 'Every 5 mins', v: '*/5 * * * *' },
          { label: 'Hourly', v: '0 * * * *' },
          { label: 'Daily midnight', v: '0 0 * * *' },
          { label: 'Weekdays 9 AM', v: '0 9 * * 1-5' },
        ].map((p) => (
          <button key={p.v} type="button" onClick={() => handleExprInput(p.v)} className={secondaryBtnCls}>
            {p.label}
          </button>
        ))}
      </div>

      <ErrorBanner message={error} />

      {!error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-brand-50/70 border border-brand-200 space-y-1.5">
            <div className="text-xs font-bold text-brand-700 uppercase">Plain-English Summary</div>
            <p className="text-sm font-medium text-brand-950">{explanation}</p>
          </div>
          <div className="p-4 rounded-xl bg-brand-50/70 border border-brand-200 space-y-2">
            <div className="text-xs font-bold text-brand-700 uppercase">Next 5 Run Times (Local Time)</div>
            <ul className="space-y-1 text-xs font-mono tabular-nums text-brand-900 list-none p-0 m-0">
              {nextRuns.length > 0 ? nextRuns.map((r, i) => <li key={i}>{i + 1}. {r}</li>) : <li>No matches within the next 12 months.</li>}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
 * 18) CSV to JSON Converter (/csv-to-json/)
 * ========================================================================== */
function parseCsvRows(text: string, delimiter: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === delimiter) {
      row.push(current);
      current = '';
    } else if (ch === '\r' && next === '\n') {
      row.push(current);
      rows.push(row);
      row = [];
      current = '';
      i++;
    } else if (ch === '\n' || ch === '\r') {
      row.push(current);
      rows.push(row);
      row = [];
      current = '';
    } else {
      current += ch;
    }
  }
  if (inQuotes) {
    throw new Error('Unclosed quote detected in CSV input.');
  }
  if (current.length > 0 || row.length > 0) {
    row.push(current);
    rows.push(row);
  }
  return rows.filter((r) => !(r.length === 1 && r[0] === ''));
}

export function CsvToJsonWidget() {
  const [csvText, setCsvText] = useState('name,role,city\n"Reed, Alex",SEO Strategist,London\nSamira Khan,Developer,Dhaka');
  const [delimiter, setDelimiter] = useState<'auto' | ',' | ';' | '\t'>('auto');
  const [firstRowHeaders, setFirstRowHeaders] = useState(true);
  const [prettyPrint, setPrettyPrint] = useState(true);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const { jsonOut, error } = useMemo(() => {
    if (!csvText.trim()) return { jsonOut: '', error: null };
    try {
      const detected =
        delimiter !== 'auto'
          ? delimiter
          : csvText.includes('\t')
          ? '\t'
          : csvText.split('\n')[0]?.includes(';') && !csvText.split('\n')[0]?.includes(',')
          ? ';'
          : ',';
      const rows = parseCsvRows(csvText, detected);
      if (rows.length === 0) return { jsonOut: '[]', error: null };
      let data: unknown;
      if (firstRowHeaders) {
        const headers = rows[0].map((h, i) => h.trim() || `column_${i + 1}`);
        data = rows.slice(1).map((r) => {
          const obj: Record<string, string> = {};
          headers.forEach((h, i) => {
            obj[h] = r[i] ?? '';
          });
          return obj;
        });
      } else {
        data = rows;
      }
      return { jsonOut: JSON.stringify(data, null, prettyPrint ? 2 : 0), error: null };
    } catch (e) {
      return { jsonOut: '', error: e instanceof Error ? e.message : 'Unable to parse CSV.' };
    }
  }, [csvText, delimiter, firstRowHeaders, prettyPrint]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCsvText(String(reader.result || ''));
    reader.readAsText(file);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <input ref={fileRef} type="file" accept=".csv,text/csv,text/plain" onChange={handleUpload} className="hidden" />
        <button type="button" onClick={() => fileRef.current?.click()} className={secondaryBtnCls}>
          Upload .csv File
        </button>

        <div className="flex items-center gap-2">
          <label htmlFor="csv-delim" className="text-xs font-bold text-brand-900">Delimiter:</label>
          <select id="csv-delim" value={delimiter} onChange={(e) => setDelimiter(e.target.value as 'auto' | ',' | ';' | '\t')} className={selectCls}>
            <option value="auto">Auto-detect</option>
            <option value=",">Comma (,)</option>
            <option value=";">Semicolon (;)</option>
            <option value={'\t'}>Tab</option>
          </select>
        </div>

        <label className="inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
          <input type="checkbox" checked={firstRowHeaders} onChange={(e) => setFirstRowHeaders(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">First row as headers</span>
        </label>

        <label className="inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
          <input type="checkbox" checked={prettyPrint} onChange={(e) => setPrettyPrint(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">Pretty print</span>
        </label>
      </div>

      <ErrorBanner message={error} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="csv-in" className="block text-xs font-bold text-brand-900">CSV Input</label>
          <textarea id="csv-in" rows={8} value={csvText} onChange={(e) => setCsvText(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="csv-out" className="block text-xs font-bold text-brand-900">JSON Output</label>
          <textarea id="csv-out" rows={8} readOnly value={jsonOut} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => setCsvText('')} />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={!jsonOut || Boolean(error)}
            onClick={() => downloadTextFile('converted.json', jsonOut, 'application/json;charset=utf-8')}
            className={secondaryBtnCls}
          >
            <Download className="w-4 h-4" /> Download .json
          </button>
          <CopyButton text={jsonOut} />
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 19) JSON to CSV Converter (/json-to-csv/)
 * ========================================================================== */
function flattenObj(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(out, flattenObj(v as Record<string, unknown>, key));
    } else if (Array.isArray(v)) {
      out[key] = JSON.stringify(v);
    } else {
      out[key] = v === null || v === undefined ? '' : String(v);
    }
  }
  return out;
}

function escapeCsvCell(val: string, delim: string): string {
  if (val.includes(delim) || val.includes('"') || val.includes('\n') || val.includes('\r')) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}

export function JsonToCsvWidget() {
  const [jsonText, setJsonText] = useState(
    '[\n  {"id": 1, "name": "Alex Reed", "meta": {"city": "London", "plan": "Pro"}},\n  {"id": 2, "name": "Samira Khan", "meta": {"city": "Dhaka", "plan": "Team"}}\n]'
  );
  const [delimiter, setDelimiter] = useState<',' | ';' | '\t'>(',');
  const fileRef = useRef<HTMLInputElement | null>(null);

  const { csvOut, headers, rows, error } = useMemo(() => {
    if (!jsonText.trim()) return { csvOut: '', headers: [] as string[], rows: [] as string[][], error: null };
    try {
      const parsed = JSON.parse(jsonText);
      if (!Array.isArray(parsed) || parsed.length === 0 || typeof parsed[0] !== 'object' || parsed[0] === null) {
        return {
          csvOut: '',
          headers: [],
          rows: [],
          error: 'Input must be a non-empty JSON array of objects, for example [{"name": "Alice"}].',
        };
      }
      const flatRows = parsed.map((item) =>
        item && typeof item === 'object' && !Array.isArray(item)
          ? flattenObj(item as Record<string, unknown>)
          : { value: String(item) }
      );
      const headerSet = new Set<string>();
      flatRows.forEach((r) => Object.keys(r).forEach((k) => headerSet.add(k)));
      const hdrs = Array.from(headerSet);
      const tableRows = flatRows.map((r) => hdrs.map((h) => r[h] ?? ''));
      const csvLines = [
        hdrs.map((h) => escapeCsvCell(h, delimiter)).join(delimiter),
        ...tableRows.map((r) => r.map((cell) => escapeCsvCell(cell, delimiter)).join(delimiter)),
      ];
      return { csvOut: csvLines.join('\n'), headers: hdrs, rows: tableRows, error: null };
    } catch (e) {
      return {
        csvOut: '',
        headers: [],
        rows: [],
        error: e instanceof Error ? `Invalid JSON: ${e.message}` : 'Invalid JSON.',
      };
    }
  }, [jsonText, delimiter]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setJsonText(String(reader.result || ''));
    reader.readAsText(file);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <input ref={fileRef} type="file" accept=".json,application/json" onChange={handleUpload} className="hidden" />
        <button type="button" onClick={() => fileRef.current?.click()} className={secondaryBtnCls}>
          Upload .json File
        </button>

        <div className="flex items-center gap-2">
          <label htmlFor="j2c-delim" className="text-xs font-bold text-brand-900">Delimiter:</label>
          <select id="j2c-delim" value={delimiter} onChange={(e) => setDelimiter(e.target.value as ',' | ';' | '\t')} className={selectCls}>
            <option value=",">Comma (,)</option>
            <option value=";">Semicolon (;)</option>
            <option value={'\t'}>Tab</option>
          </select>
        </div>
      </div>

      <ErrorBanner message={error} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="j2c-in" className="block text-xs font-bold text-brand-900">JSON Array Input</label>
          <textarea id="j2c-in" rows={7} value={jsonText} onChange={(e) => setJsonText(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="j2c-out" className="block text-xs font-bold text-brand-900">CSV Output</label>
          <textarea id="j2c-out" rows={7} readOnly value={csvOut} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      {headers.length > 0 && (
        <div className="space-y-2">
          <span className="block text-xs font-bold text-brand-900">Table Preview</span>
          <div className="overflow-x-auto border border-brand-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-brand-50 border-b border-brand-200 text-brand-800 font-bold">
                <tr>
                  {headers.map((h) => (
                    <th key={h} className="py-2.5 px-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {rows.slice(0, 20).map((r, ri) => (
                  <tr key={ri}>
                    {r.map((cell, ci) => (
                      <td key={ci} className="py-2 px-3 whitespace-nowrap font-mono">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => setJsonText('')} />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={!csvOut || Boolean(error)}
            onClick={() => downloadTextFile('converted.csv', '\uFEFF' + csvOut, 'text/csv;charset=utf-8')}
            className={secondaryBtnCls}
          >
            <Download className="w-4 h-4" /> Download .csv
          </button>
          <CopyButton text={csvOut} />
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 20) YAML to JSON Converter (/yaml-to-json/)
 * ========================================================================== */
export function YamlToJsonWidget() {
  const [direction, setDirection] = useState<'yaml-to-json' | 'json-to-yaml'>('yaml-to-json');
  const [input, setInput] = useState('site:\n  name: Example App\n  port: 3000\n  features:\n    - analytics\n    - caching');
  const [indent, setIndent] = useState(2);

  const { output, error } = useMemo(() => {
    if (!input.trim()) return { output: '', error: null };
    try {
      if (direction === 'yaml-to-json') {
        const parsed = yaml.load(input);
        return { output: JSON.stringify(parsed, null, indent), error: null };
      }
      const parsed = JSON.parse(input);
      return { output: yaml.dump(parsed, { indent }), error: null };
    } catch (e: unknown) {
      const errObj = e as { mark?: { line?: number; column?: number }; message?: string };
      const lineInfo = typeof errObj?.mark?.line === 'number' ? ` (Line ${errObj.mark.line + 1})` : '';
      return {
        output: '',
        error: `${errObj?.message || 'Syntax error'}${lineInfo}`,
      };
    }
  }, [direction, input, indent]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setDirection('yaml-to-json')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer ${
              direction === 'yaml-to-json' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            YAML to JSON
          </button>
          <button
            type="button"
            onClick={() => setDirection('json-to-yaml')}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer ${
              direction === 'json-to-yaml' ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'
            }`}
          >
            JSON to YAML
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="yaml-indent" className="text-xs font-bold text-brand-900">Indentation:</label>
          <select id="yaml-indent" value={indent} onChange={(e) => setIndent(Number(e.target.value))} className={selectCls}>
            <option value={2}>2 Spaces</option>
            <option value={4}>4 Spaces</option>
          </select>
        </div>
      </div>

      <ErrorBanner message={error} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="yaml-in" className="block text-xs font-bold text-brand-900">
            {direction === 'yaml-to-json' ? 'YAML Input' : 'JSON Input'}
          </label>
          <textarea id="yaml-in" rows={8} value={input} onChange={(e) => setInput(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-2">
          <label htmlFor="yaml-out" className="block text-xs font-bold text-brand-900">
            {direction === 'yaml-to-json' ? 'JSON Output' : 'YAML Output'}
          </label>
          <textarea id="yaml-out" rows={8} readOnly value={output} className={`${textareaCls} bg-brand-50/70`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ClearButton onClick={() => setInput('')} />
        <CopyButton text={output} />
      </div>
    </div>
  );
}
