import React, { useState, useMemo, useRef, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { Download, Plus, Trash2, Star, ArrowUp, ArrowDown, RotateCw, FlipHorizontal, FlipVertical } from 'lucide-react';
import {
  CopyButton,
  ClearButton,
  ErrorBanner,
  inputCls,
  textareaCls,
  selectCls,
  primaryBtnCls,
  secondaryBtnCls,
  cryptoRandomInt,
  downloadTextFile,
} from './shared';

/* ============================================================================
 * 41) Invoice Generator (/invoice-generator/)
 * ========================================================================== */
interface InvoiceItem {
  id: number;
  description: string;
  qty: number;
  price: number;
}

export function InvoiceGeneratorWidget() {
  const [fromText, setFromText] = useState('Studio North LLC\n120 Market St, Suite 400\nbilling@example.com');
  const [toText, setToText] = useState('Client Co.\n45 Elm Street\naccounts@example.org');
  const [invoiceNumber, setInvoiceNumber] = useState('INV-2026-001');
  const [issueDate, setIssueDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState(() => new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0]);
  const [currency, setCurrency] = useState('USD ');
  const [taxRate, setTaxRate] = useState(10);
  const [discountRate, setDiscountRate] = useState(0);
  const [notes, setNotes] = useState('Payment due within 14 days. Thank you for your business.');
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, description: 'Technical SEO Audit & Roadmap', qty: 1, price: 1200 },
    { id: 2, description: 'Schema & Crawl Optimization (Hours)', qty: 5, price: 150 },
  ]);

  const subtotal = items.reduce((s, it) => s + Math.max(0, it.qty) * Math.max(0, it.price), 0);
  const discountAmt = subtotal * (Math.max(0, discountRate) / 100);
  const taxable = Math.max(0, subtotal - discountAmt);
  const taxAmt = taxable * (Math.max(0, taxRate) / 100);
  const total = taxable + taxAmt;

  const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogoDataUrl(String(reader.result || ''));
    reader.readAsDataURL(file);
  };

  const downloadPdf = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    let y = 48;
    if (logoDataUrl) {
      try {
        const format = logoDataUrl.includes('image/png') ? 'PNG' : 'JPEG';
        doc.addImage(logoDataUrl, format, 48, y - 10, 70, 35);
      } catch {
        // skip invalid image
      }
    }
    doc.setFontSize(22);
    doc.text('INVOICE', 400, y + 10);
    doc.setFontSize(10);
    doc.text(`Invoice #: ${invoiceNumber}`, 400, y + 28);
    doc.text(`Issue Date: ${issueDate}`, 400, y + 42);
    doc.text(`Due Date: ${dueDate}`, 400, y + 56);

    y += 70;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('From:', 48, y);
    doc.text('Bill To:', 300, y);
    doc.setFont('helvetica', 'normal');
    doc.text(fromText.split('\n'), 48, y + 16);
    doc.text(toText.split('\n'), 300, y + 16);

    y += 76;
    doc.setFillColor(244, 243, 248);
    doc.rect(48, y, 500, 22, 'F');
    doc.setFont('helvetica', 'bold');
    doc.text('Description', 56, y + 15);
    doc.text('Qty', 340, y + 15);
    doc.text('Unit Price', 400, y + 15);
    doc.text('Amount', 485, y + 15);

    y += 36;
    doc.setFont('helvetica', 'normal');
    for (const it of items) {
      const lineTotal = Math.max(0, it.qty) * Math.max(0, it.price);
      doc.text(it.description.slice(0, 48), 56, y);
      doc.text(String(it.qty), 340, y);
      doc.text(`${currency}${it.price.toFixed(2)}`, 400, y);
      doc.text(`${currency}${lineTotal.toFixed(2)}`, 485, y);
      y += 22;
    }

    y += 18;
    doc.line(330, y, 548, y);
    y += 18;
    doc.text(`Subtotal: ${currency}${subtotal.toFixed(2)}`, 390, y);
    y += 16;
    if (discountRate > 0) {
      doc.text(`Discount (${discountRate}%): -${currency}${discountAmt.toFixed(2)}`, 390, y);
      y += 16;
    }
    doc.text(`Tax (${taxRate}%): ${currency}${taxAmt.toFixed(2)}`, 390, y);
    y += 20;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(`Total: ${currency}${total.toFixed(2)}`, 390, y);

    if (notes.trim()) {
      y += 38;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text('Notes:', 48, y);
      doc.setFont('helvetica', 'normal');
      doc.text(doc.splitTextToSize(notes, 490), 48, y + 15);
    }
    doc.save(`${invoiceNumber || 'invoice'}.pdf`);
  };

  const summaryText = `Invoice ${invoiceNumber} | Total: ${currency}${total.toFixed(2)} (Subtotal ${currency}${subtotal.toFixed(2)}, Discount -${currency}${discountAmt.toFixed(2)}, Tax ${currency}${taxAmt.toFixed(2)})`;

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="inv-from" className="block text-xs font-bold text-brand-900">From (Your Details)</label>
          <textarea id="inv-from" rows={3} value={fromText} onChange={(e) => setFromText(e.target.value)} className={textareaCls} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="inv-to" className="block text-xs font-bold text-brand-900">Bill To (Client Details)</label>
          <textarea id="inv-to" rows={3} value={toText} onChange={(e) => setToText(e.target.value)} className={textareaCls} />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="space-y-1">
          <label htmlFor="inv-num" className="block text-xs font-bold text-brand-900">Invoice #</label>
          <input id="inv-num" type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className={inputCls} />
        </div>
        <div className="space-y-1">
          <label htmlFor="inv-iss" className="block text-xs font-bold text-brand-900">Issue Date</label>
          <input id="inv-iss" type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} className={inputCls} />
        </div>
        <div className="space-y-1">
          <label htmlFor="inv-due" className="block text-xs font-bold text-brand-900">Due Date</label>
          <input id="inv-due" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className={inputCls} />
        </div>
        <div className="space-y-1">
          <label htmlFor="inv-cur" className="block text-xs font-bold text-brand-900">Currency Prefix</label>
          <input id="inv-cur" type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} className={inputCls} />
        </div>
        <div className="space-y-1">
          <label htmlFor="inv-logo" className="block text-xs font-bold text-brand-900">Logo (Optional)</label>
          <input id="inv-logo" type="file" accept="image/png,image/jpeg" onChange={handleLogo} className="text-xs w-full pt-1.5" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-brand-900">Line Items</span>
          <button
            type="button"
            onClick={() => setItems((p) => [...p, { id: Date.now(), description: 'Consulting Service', qty: 1, price: 100 }])}
            className={secondaryBtnCls}
          >
            <Plus className="w-3.5 h-3.5" /> Add Line
          </button>
        </div>

        {items.map((it) => (
          <div key={it.id} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
            <input
              type="text"
              aria-label="Item description"
              value={it.description}
              onChange={(e) => setItems((p) => p.map((x) => (x.id === it.id ? { ...x, description: e.target.value } : x)))}
              className={`${inputCls} sm:col-span-6`}
            />
            <input
              type="number"
              aria-label="Quantity"
              min={0}
              value={it.qty}
              onChange={(e) => setItems((p) => p.map((x) => (x.id === it.id ? { ...x, qty: Number(e.target.value) } : x)))}
              className={`${inputCls} font-mono sm:col-span-2`}
            />
            <input
              type="number"
              aria-label="Unit price"
              min={0}
              step="any"
              value={it.price}
              onChange={(e) => setItems((p) => p.map((x) => (x.id === it.id ? { ...x, price: Number(e.target.value) } : x)))}
              className={`${inputCls} font-mono sm:col-span-3`}
            />
            <button
              type="button"
              disabled={items.length <= 1}
              onClick={() => setItems((p) => p.filter((x) => x.id !== it.id))}
              aria-label="Remove item"
              className="p-2 text-brand-500 hover:text-red-600 disabled:opacity-40 cursor-pointer sm:col-span-1 justify-self-end"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1">
          <label htmlFor="inv-disc" className="block text-xs font-bold text-brand-900">Discount (%)</label>
          <input id="inv-disc" type="number" min={0} max={100} value={discountRate} onChange={(e) => setDiscountRate(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1">
          <label htmlFor="inv-tax" className="block text-xs font-bold text-brand-900">Tax (%)</label>
          <input id="inv-tax" type="number" min={0} value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1">
          <label htmlFor="inv-notes" className="block text-xs font-bold text-brand-900">Notes</label>
          <input id="inv-notes" type="text" value={notes} onChange={(e) => setNotes(e.target.value)} className={inputCls} />
        </div>
      </div>

      <div className="p-5 rounded-xl bg-brand-50 border border-brand-200 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1 text-xs font-mono tabular-nums text-brand-800">
          <div>Subtotal: {currency}{subtotal.toFixed(2)}</div>
          <div>Discount ({discountRate}%): -{currency}{discountAmt.toFixed(2)}</div>
          <div>Tax ({taxRate}%): {currency}{taxAmt.toFixed(2)}</div>
          <div className="text-lg font-bold text-brand-950">Total: {currency}{total.toFixed(2)}</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <CopyButton text={summaryText} label="Copy Summary" />
          <button type="button" onClick={downloadPdf} className={primaryBtnCls}>
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 42) Email Signature Generator (/email-signature-generator/)
 * ========================================================================== */
function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function EmailSignatureWidget() {
  const [name, setName] = useState('Riad Al Ashekin');
  const [title, setTitle] = useState('Business & Technology Consultant');
  const [company, setCompany] = useState('Riad Al Ashekin Advisory');
  const [phone, setPhone] = useState('+880-1700-000000');
  const [email, setEmail] = useState('ashekinriad@gmail.com');
  const [website, setWebsite] = useState('https://riadalashekin.com');
  const [address, setAddress] = useState('Dhaka, Bangladesh');
  const [photoUrl, setPhotoUrl] = useState('');
  const [linkedin, setLinkedin] = useState('https://www.linkedin.com/in/riad-al-ashekin-zami');
  const [layout, setLayout] = useState<'classic' | 'accent-bar' | 'compact'>('classic');
  const [copiedRich, setCopiedRich] = useState(false);

  const signatureHtml = useMemo(() => {
    const imgCell = photoUrl.trim()
      ? `<td style="padding-right:14px;vertical-align:top;"><img src="${esc(photoUrl)}" alt="${esc(name)}" width="72" height="72" style="border-radius:10px;object-fit:cover;display:block;" /></td>`
      : '';
    const linkRow = [
      website ? `<a href="${esc(website)}" style="color:#6927da;text-decoration:none;">${esc(website.replace(/^https?:\/\//, ''))}</a>` : '',
      linkedin ? `<a href="${esc(linkedin)}" style="color:#6927da;text-decoration:none;">LinkedIn</a>` : '',
    ].filter(Boolean).join(' · ');

    if (layout === 'compact') {
      return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#150d28;line-height:1.45;"><tr>${imgCell}<td><strong style="font-size:14px;color:#150d28;">${esc(name)}</strong> · ${esc(title)}, ${esc(company)}<br/><span>${esc(phone)} · <a href="mailto:${esc(email)}" style="color:#6927da;text-decoration:none;">${esc(email)}</a></span>${address ? `<br/><span style="color:#524670;font-size:12px;">${esc(address)}</span>` : ''}${linkRow ? `<br/>${linkRow}` : ''}</td></tr></table>`;
    }
    const borderStyle = layout === 'accent-bar' ? 'border-left:3px solid #7839ee;padding-left:14px;' : '';
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#150d28;line-height:1.5;"><tr>${imgCell}<td style="${borderStyle}"><div style="font-size:15px;font-weight:bold;color:#150d28;">${esc(name)}</div><div style="font-size:13px;color:#524670;">${esc(title)} — <strong>${esc(company)}</strong></div><div style="margin-top:6px;font-size:12px;color:#2e2447;">${phone ? `Tel: ${esc(phone)}<br/>` : ''}${email ? `Email: <a href="mailto:${esc(email)}" style="color:#6927da;text-decoration:none;">${esc(email)}</a><br/>` : ''}${address ? `${esc(address)}<br/>` : ''}${linkRow}</div></td></tr></table>`;
  }, [name, title, company, phone, email, website, address, photoUrl, linkedin, layout]);

  const copyRichHtml = async () => {
    try {
      if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
        const htmlBlob = new Blob([signatureHtml], { type: 'text/html' });
        const textBlob = new Blob([`${name}\n${title} - ${company}\n${phone}\n${email}\n${website}`], { type: 'text/plain' });
        await navigator.clipboard.write([new ClipboardItem({ 'text/html': htmlBlob, 'text/plain': textBlob })]);
        setCopiedRich(true);
        setTimeout(() => setCopiedRich(false), 1800);
        return;
      }
    } catch {
      // fallback below
    }
    const div = document.createElement('div');
    div.innerHTML = signatureHtml;
    div.style.position = 'fixed';
    div.style.opacity = '0';
    document.body.appendChild(div);
    const range = document.createRange();
    range.selectNodeContents(div);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    document.execCommand('copy');
    sel?.removeAllRanges();
    document.body.removeChild(div);
    setCopiedRich(true);
    setTimeout(() => setCopiedRich(false), 1800);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'classic' as const, label: 'Layout 1: Classic Stack' },
          { id: 'accent-bar' as const, label: 'Layout 2: Side Divider' },
          { id: 'compact' as const, label: 'Layout 3: Compact Inline' },
        ].map((l) => (
          <button key={l.id} type="button" onClick={() => setLayout(l.id)} className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${layout === l.id ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'}`}>
            {l.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'Full Name', val: name, set: setName },
          { label: 'Job Title', val: title, set: setTitle },
          { label: 'Company', val: company, set: setCompany },
          { label: 'Phone', val: phone, set: setPhone },
          { label: 'Email', val: email, set: setEmail },
          { label: 'Website URL', val: website, set: setWebsite },
          { label: 'Address', val: address, set: setAddress },
          { label: 'Hosted Photo URL (Optional)', val: photoUrl, set: setPhotoUrl },
          { label: 'Social / LinkedIn URL', val: linkedin, set: setLinkedin },
        ].map((f) => (
          <div key={f.label} className="space-y-1">
            <label className="block text-xs font-bold text-brand-900">{f.label}</label>
            <input type="text" value={f.val} onChange={(e) => f.set(e.target.value)} className={inputCls} />
          </div>
        ))}
      </div>

      <div className="p-6 rounded-xl bg-brand-50/70 border border-brand-200 space-y-2">
        <div className="text-xs font-bold text-brand-700 uppercase">Live Preview</div>
        <div className="p-4 bg-white rounded-xl border border-brand-200 overflow-x-auto">
          <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#150d28', lineHeight: 1.5 }} className={layout === 'accent-bar' ? 'border-l-[3px] border-[#7839ee] pl-3.5' : ''}>
            <div className="font-bold text-[15px]">{name}</div>
            <div className="text-[#524670]">{title} — <strong>{company}</strong></div>
            <div className="mt-1.5 text-xs text-[#2e2447]">
              {phone && <div>Tel: {phone}</div>}
              {email && <div>Email: <span className="text-[#6927da]">{email}</span></div>}
              {address && <div>{address}</div>}
              <div className="text-[#6927da]">{[website.replace(/^https?:\/\//, ''), linkedin ? 'LinkedIn' : ''].filter(Boolean).join(' · ')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={copyRichHtml} className={primaryBtnCls}>
          {copiedRich ? 'Copied Signature for Gmail/Outlook' : 'Copy Rich Signature'}
        </button>
        <CopyButton text={signatureHtml} label="Copy HTML Source" />
      </div>
    </div>
  );
}

/* ============================================================================
 * 43) Privacy Policy Generator (/privacy-policy-generator/)
 * ========================================================================== */
export function PrivacyPolicyWidget() {
  const [siteName, setSiteName] = useState('Example Website');
  const [siteUrl, setSiteUrl] = useState('https://example.com');
  const [ownerName, setOwnerName] = useState('Example Studio LLC');
  const [email, setEmail] = useState('privacy@example.com');
  const [country, setCountry] = useState('United States');
  const [collectContact, setCollectContact] = useState(true);
  const [collectAnalytics, setCollectAnalytics] = useState(true);
  const [collectCookies, setCollectCookies] = useState(true);
  const [collectNewsletter, setCollectNewsletter] = useState(false);
  const [collectPayments, setCollectPayments] = useState(false);
  const [thirdParties, setThirdParties] = useState('Google Analytics, Formspree');

  const policyText = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    const items: string[] = [];
    if (collectContact) items.push('- Information you submit via our contact forms (such as your name, email address, and message).');
    if (collectAnalytics) items.push('- Usage and analytics data (such as pages visited, browser type, and approximate region).');
    if (collectCookies) items.push('- Cookies and similar local storage data used for essential preferences and site analytics.');
    if (collectNewsletter) items.push('- Email address and subscription preferences when you opt in to newsletters.');
    if (collectPayments) items.push('- Billing details processed securely through third-party payment processors.');

    return [
      `PRIVACY POLICY FOR ${siteName.toUpperCase()}`,
      `Last updated: ${today}`,
      '',
      `1. Introduction`,
      `${ownerName} ("we", "our", or "us") operates ${siteUrl} (${siteName}) in ${country}. This Privacy Policy explains what data we collect, how we use it, and how you can contact us.`,
      '',
      `2. Information We Collect`,
      items.length ? items.join('\n') : '- We collect minimal technical request data required to deliver web pages.',
      '',
      `3. How We Use Information`,
      `- To operate and maintain ${siteName}`,
      `- To respond to inquiries sent to us`,
      `- To monitor website usage and improve site reliability`,
      '',
      `4. Third-Party Services`,
      thirdParties.trim()
        ? `We may use third-party tools including: ${thirdParties.trim()}. These providers process data under their own privacy policies.`
        : `We do not list external analytics or payment processors at this time.`,
      '',
      `5. Your Rights & Contact`,
      `You may request access to, correction of, or deletion of personal data we hold about you by contacting ${email}.`,
    ].join('\n');
  }, [siteName, siteUrl, ownerName, email, country, collectContact, collectAnalytics, collectCookies, collectNewsletter, collectPayments, thirdParties]);

  const htmlPolicy = `<article>\n<h1>Privacy Policy for ${esc(siteName)}</h1>\n<pre>${esc(policyText)}</pre>\n</article>`;

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950">
        <strong>Template Disclaimer:</strong> This generator produces a basic starting template only and does not constitute legal advice. Review your policy with a qualified lawyer for GDPR, CCPA, or local compliance.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'Website / App Name', val: siteName, set: setSiteName },
          { label: 'Website URL', val: siteUrl, set: setSiteUrl },
          { label: 'Owner / Company Name', val: ownerName, set: setOwnerName },
          { label: 'Contact Email', val: email, set: setEmail },
          { label: 'Country / Region', val: country, set: setCountry },
          { label: 'Third-Party Tools Used', val: thirdParties, set: setThirdParties },
        ].map((f) => (
          <div key={f.label} className="space-y-1">
            <label className="block text-xs font-bold text-brand-900">{f.label}</label>
            <input type="text" value={f.val} onChange={(e) => f.set(e.target.value)} className={inputCls} />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 p-4 rounded-xl bg-brand-50/60 border border-brand-200 text-xs sm:text-sm">
        {[
          { label: 'Contact Forms', val: collectContact, set: setCollectContact },
          { label: 'Analytics', val: collectAnalytics, set: setCollectAnalytics },
          { label: 'Cookies', val: collectCookies, set: setCollectCookies },
          { label: 'Newsletter', val: collectNewsletter, set: setCollectNewsletter },
          { label: 'Payments', val: collectPayments, set: setCollectPayments },
        ].map((c) => (
          <label key={c.label} className="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={c.val} onChange={(e) => c.set(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
            <span className="font-medium text-brand-900">{c.label}</span>
          </label>
        ))}
      </div>

      <textarea rows={10} readOnly value={policyText} className={`${textareaCls} bg-brand-50/70`} aria-label="Generated privacy policy" />

      <div className="flex flex-wrap justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => downloadTextFile('privacy-policy.txt', policyText)} className={secondaryBtnCls}>
            <Download className="w-4 h-4" /> Download .txt
          </button>
          <button type="button" onClick={() => downloadTextFile('privacy-policy.html', htmlPolicy, 'text/html;charset=utf-8')} className={secondaryBtnCls}>
            <Download className="w-4 h-4" /> Download .html
          </button>
        </div>
        <CopyButton text={policyText} label="Copy Policy Text" />
      </div>
    </div>
  );
}

/* ============================================================================
 * 44) Business Name Generator (/business-name-generator/)
 * ========================================================================== */
const PREFIXES = ['Bright', 'North', 'Peak', 'Clear', 'Swift', 'Core', 'Prime', 'Oak', 'Harbor', 'Pulse', 'Verve', 'Craft', 'True', 'Anchor', 'Bridge'];
const SUFFIXES = ['Labs', 'Works', 'Studio', 'Flow', 'Desk', 'Hub', 'Forge', 'Scale', 'Nest', 'Point', 'Grid', 'Base', 'Box', 'Leaf', 'Line', 'Craft', 'Pulse'];
const BLEND_TAILS = ['ify', 'ly', 'able', 'ora', 'ara', 'ix', 'io', 'ist'];

export function BusinessNameGeneratorWidget() {
  const [keyword, setKeyword] = useState('market');
  const [style, setStyle] = useState<'all' | 'short' | 'compound' | 'blended' | 'affix'>('all');
  const [maxLen, setMaxLen] = useState(20);
  const [favorites, setFavorites] = useState<string[]>([]);

  const ideas = useMemo(() => {
    const clean = keyword.trim().replace(/[^a-zA-Z0-9]/g, '');
    const cap = clean ? clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase() : 'Brand';
    const root = cap.slice(0, Math.max(3, Math.floor(cap.length * 0.7)));
    const pool = new Set<string>();

    const add = (s: string) => {
      if (s.length <= maxLen) pool.add(s);
    };

    if (style === 'all' || style === 'short') {
      BLEND_TAILS.forEach((t) => add(`${root}${t}`));
      ['Co', 'Go', 'Up', 'Pro', 'On', 'Hq', 'Lab', 'Io'].forEach((s) => add(`${root}${s}`));
    }
    if (style === 'all' || style === 'compound') {
      SUFFIXES.forEach((s) => add(`${cap}${s}`));
      PREFIXES.forEach((p) => add(`${p}${cap}`));
    }
    if (style === 'all' || style === 'blended') {
      PREFIXES.forEach((p) => BLEND_TAILS.forEach((t) => add(`${p.slice(0, 3)}${root.toLowerCase()}${t}`)));
      SUFFIXES.forEach((s) => add(`${root}${s.toLowerCase()}`));
    }
    if (style === 'all' || style === 'affix') {
      PREFIXES.forEach((p) => add(`${p} ${cap}`));
      SUFFIXES.forEach((s) => add(`${cap} ${s}`));
    }

    // Pad with compound combinations until up to 50 ideas
    for (const p of PREFIXES) {
      for (const s of SUFFIXES) {
        if (pool.size >= 50) break;
        add(`${p}${cap}${s}`);
      }
      if (pool.size >= 50) break;
    }

    return Array.from(pool).slice(0, 50);
  }, [keyword, style, maxLen]);

  const toggleFav = (name: string) => {
    setFavorites((prev) => (prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]));
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="bn-kw" className="block text-xs font-bold text-brand-900">Seed Keyword</label>
          <input id="bn-kw" type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="e.g. cloud, craft, green" className={inputCls} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="bn-style" className="block text-xs font-bold text-brand-900">Naming Style</label>
          <select id="bn-style" value={style} onChange={(e) => setStyle(e.target.value as 'all' | 'short' | 'compound' | 'blended' | 'affix')} className={`${selectCls} w-full`}>
            <option value="all">All Styles (50 ideas)</option>
            <option value="short">Short</option>
            <option value="compound">Compound</option>
            <option value="blended">Blended</option>
            <option value="affix">Prefix / Suffix</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="bn-max" className="block text-xs font-bold text-brand-900">Max Length ({maxLen} chars)</label>
          <input id="bn-max" type="range" min={6} max={28} value={maxLen} onChange={(e) => setMaxLen(Number(e.target.value))} className="w-full accent-accent-600 mt-2" />
        </div>
      </div>

      <p className="text-xs text-brand-600">Domain strings shown below (e.g. example.com) are formatting ideas only; domain and trademark availability are not checked here.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {ideas.map((idea) => {
          const domainIdea = `${idea.toLowerCase().replace(/\s+/g, '')}.com`;
          const isFav = favorites.includes(idea);
          return (
            <div key={idea} className="p-3.5 rounded-xl bg-brand-50/70 border border-brand-200 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className="text-sm font-bold text-brand-950 truncate">{idea}</div>
                <div className="text-[11px] font-mono text-brand-500 truncate">{domainIdea}</div>
              </div>
              <button
                type="button"
                onClick={() => toggleFav(idea)}
                aria-label={isFav ? `Remove ${idea} from favorites` : `Save ${idea} to favorites`}
                className="p-2 rounded-lg hover:bg-white cursor-pointer"
              >
                <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-500' : 'text-brand-400'}`} />
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        {favorites.length > 0 ? (
          <CopyButton text={favorites.join('\n')} label={`Copy ${favorites.length} Favorites`} />
        ) : (
          <span className="text-xs text-brand-500">Click the star icon to save favorites in this session.</span>
        )}
        <CopyButton text={ideas.join('\n')} label="Copy All Ideas" />
      </div>
    </div>
  );
}

/* ============================================================================
 * 45) Username Generator (/username-generator/)
 * ========================================================================== */
const USER_ADJ = ['swift', 'clever', 'bright', 'calm', 'bold', 'neat', 'vivid', 'keen', 'urban', 'solar'];
const USER_NOUN = ['fox', 'wolf', 'owl', 'spark', 'craft', 'byte', 'pilot', 'maker', 'pine', 'wave'];

export function UsernameGeneratorWidget() {
  const [seed, setSeed] = useState('alex reed');
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [separator, setSeparator] = useState<'_' | '.' | '-' | ''>('_');
  const [maxLength, setMaxLength] = useState(18);
  const [style, setStyle] = useState<'clean' | 'playful' | 'compact'>('clean');
  const [tick, setTick] = useState(0);

  const usernames = useMemo(() => {
    void tick;
    const tokens = seed.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().split(/\s+/).filter(Boolean);
    const first = tokens[0] || 'user';
    const second = tokens[1] || '';
    const out = new Set<string>();

    const push = (raw: string) => {
      const trimmed = raw.slice(0, maxLength).replace(/[._-]+$/, '');
      if (trimmed.length >= 3) out.add(trimmed);
    };

    if (second) {
      push(`${first}${separator}${second}`);
      push(`${first.slice(0, 1)}${separator}${second}`);
      push(`${second}${separator}${first}`);
    }
    USER_ADJ.forEach((adj, idx) => {
      const noun = USER_NOUN[(idx + tick) % USER_NOUN.length];
      const num = includeNumbers ? String(10 + ((idx * 17 + tick * 7) % 89)) : '';
      if (style === 'clean') {
        push(`${first}${separator}${noun}${num}`);
        push(`${adj}${separator}${first}${num}`);
      } else if (style === 'playful') {
        push(`${adj}${separator}${noun}${separator}${first}${num}`);
        push(`the${separator}${adj}${separator}${first}`);
      } else {
        push(`${first.slice(0, 5)}${noun.slice(0, 4)}${num}`);
        push(`${adj.slice(0, 4)}${first}${num}`);
      }
    });
    return Array.from(out).slice(0, 20);
  }, [seed, includeNumbers, separator, maxLength, style, tick]);

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="ug-seed" className="block text-xs font-bold text-brand-900">Name or Keywords</label>
          <input id="ug-seed" type="text" value={seed} onChange={(e) => setSeed(e.target.value)} className={inputCls} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="ug-sep" className="block text-xs font-bold text-brand-900">Separator</label>
          <select id="ug-sep" value={separator} onChange={(e) => setSeparator(e.target.value as '_' | '.' | '-' | '')} className={`${selectCls} w-full`}>
            <option value="_">Underscore (_)</option>
            <option value=".">Dot (.)</option>
            <option value="-">Hyphen (-)</option>
            <option value="">None</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="ug-style" className="block text-xs font-bold text-brand-900">Style</label>
          <select id="ug-style" value={style} onChange={(e) => setStyle(e.target.value as 'clean' | 'playful' | 'compact')} className={`${selectCls} w-full`}>
            <option value="clean">Clean</option>
            <option value="playful">Creative</option>
            <option value="compact">Compact</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="ug-max" className="block text-xs font-bold text-brand-900">Max Length ({maxLength})</label>
          <input id="ug-max" type="number" min={4} max={32} value={maxLength} onChange={(e) => setMaxLength(Math.max(4, Number(e.target.value) || 18))} className={`${inputCls} font-mono`} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
          <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
          <span className="font-medium text-brand-900">Include numbers</span>
        </label>
        <button type="button" onClick={() => setTick((t) => t + 1)} className={primaryBtnCls}>
          Generate More Ideas
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {usernames.map((u) => (
          <div key={u} className="p-3 rounded-xl bg-brand-50/70 border border-brand-200 flex items-center justify-between gap-2">
            <span className="text-xs sm:text-sm font-mono font-bold text-brand-950 truncate">{u}</span>
            <CopyButton text={u} />
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <CopyButton text={usernames.join('\n')} label="Copy All Usernames" />
      </div>
    </div>
  );
}

/* ============================================================================
 * 46) Random Number Generator (/random-number-generator/)
 * ========================================================================== */
export function RandomNumberGeneratorWidget() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [quantity, setQuantity] = useState(5);
  const [numberType, setNumberType] = useState<'integer' | 'decimal'>('integer');
  const [decimals, setDecimals] = useState(2);
  const [allowDuplicates, setAllowDuplicates] = useState(false);
  const [sortResults, setSortResults] = useState(true);
  const [results, setResults] = useState<string[]>(['12', '27', '44', '68', '91']);
  const [error, setError] = useState<string | null>(null);

  const generate = () => {
    setError(null);
    if (min > max) {
      setError('Minimum value must be less than or equal to maximum value.');
      return;
    }
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 1000) {
      setError('Quantity must be between 1 and 1,000.');
      return;
    }
    if (numberType === 'integer') {
      const lo = Math.ceil(min);
      const hi = Math.floor(max);
      const span = hi - lo + 1;
      if (span <= 0) {
        setError('No whole integers exist within the chosen min/max bounds.');
        return;
      }
      if (!allowDuplicates && quantity > span) {
        setError(`Cannot pick ${quantity} unique integers from a range of ${span} numbers.`);
        return;
      }
      const nums: number[] = [];
      const seen = new Set<number>();
      while (nums.length < quantity) {
        const pick = lo + cryptoRandomInt(span);
        if (!allowDuplicates && seen.has(pick)) continue;
        seen.add(pick);
        nums.push(pick);
      }
      if (sortResults) nums.sort((a, b) => a - b);
      setResults(nums.map(String));
    } else {
      const dec = Math.max(1, Math.min(6, decimals));
      const nums: number[] = [];
      const seen = new Set<string>();
      let safety = 0;
      while (nums.length < quantity && safety < quantity * 20) {
        safety++;
        const buf = new Uint32Array(1);
        window.crypto.getRandomValues(buf);
        const frac = buf[0] / 4294967296;
        const val = Number((min + frac * (max - min)).toFixed(dec));
        const key = val.toFixed(dec);
        if (!allowDuplicates && seen.has(key)) continue;
        seen.add(key);
        nums.push(val);
      }
      if (sortResults) nums.sort((a, b) => a - b);
      setResults(nums.map((n) => n.toFixed(dec)));
    }
  };

  const outText = results.join(', ');

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="rn-min" className="block text-xs font-bold text-brand-900">Minimum</label>
          <input id="rn-min" type="number" step="any" value={min} onChange={(e) => setMin(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="rn-max" className="block text-xs font-bold text-brand-900">Maximum</label>
          <input id="rn-max" type="number" step="any" value={max} onChange={(e) => setMax(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="rn-qty" className="block text-xs font-bold text-brand-900">Quantity</label>
          <input id="rn-qty" type="number" min={1} max={1000} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="rn-type" className="block text-xs font-bold text-brand-900">Number Type</label>
          <select id="rn-type" value={numberType} onChange={(e) => setNumberType(e.target.value as 'integer' | 'decimal')} className={`${selectCls} w-full`}>
            <option value="integer">Integers</option>
            <option value="decimal">Decimals</option>
          </select>
        </div>
        {numberType === 'decimal' && (
          <div className="space-y-1.5">
            <label htmlFor="rn-dec" className="block text-xs font-bold text-brand-900">Decimal Places</label>
            <input id="rn-dec" type="number" min={1} max={6} value={decimals} onChange={(e) => setDecimals(Number(e.target.value))} className={`${inputCls} font-mono`} />
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={allowDuplicates} onChange={(e) => setAllowDuplicates(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
            <span className="font-medium text-brand-900">Allow duplicates</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={sortResults} onChange={(e) => setSortResults(e.target.checked)} className="w-4 h-4 accent-accent-600 rounded" />
            <span className="font-medium text-brand-900">Sort ascending</span>
          </label>
        </div>
        <button type="button" onClick={generate} className={primaryBtnCls}>Generate Numbers</button>
      </div>

      <ErrorBanner message={error} />

      <div className="p-5 rounded-xl bg-brand-950 text-white flex flex-wrap items-center justify-between gap-4">
        <div className="text-lg sm:text-xl font-mono font-bold tabular-nums break-all">{outText || '—'}</div>
        <CopyButton text={outText} />
      </div>
    </div>
  );
}

/* ============================================================================
 * 47) Placeholder Image Generator (/placeholder-image-generator/)
 * ========================================================================== */
export function PlaceholderImageWidget() {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(450);
  const [bgColor, setBgColor] = useState('#e2e8f0');
  const [textColor, setTextColor] = useState('#1e293b');
  const [customText, setCustomText] = useState('');
  const [fontSize, setFontSize] = useState(42);
  const [format, setFormat] = useState<'image/png' | 'image/jpeg' | 'image/webp'>('image/png');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const labelText = customText.trim() ? customText : `${width} × ${height}`;
  const validSize = width >= 16 && width <= 4000 && height >= 16 && height <= 4000;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !validSize) return;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = textColor;
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(labelText, width / 2, height / 2);
  }, [width, height, bgColor, textColor, labelText, fontSize, validSize]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas || !validSize) return;
    const ext = format === 'image/png' ? 'png' : format === 'image/jpeg' ? 'jpg' : 'webp';
    const url = canvas.toDataURL(format, 0.92);
    const a = document.createElement('a');
    a.href = url;
    a.download = `placeholder-${width}x${height}.${ext}`;
    a.click();
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { label: 'Banner 1200×630', w: 1200, h: 630 },
          { label: 'HD 1280×720', w: 1280, h: 720 },
          { label: 'Square 800×800', w: 800, h: 800 },
          { label: 'Card 600×400', w: 600, h: 400 },
        ].map((p) => (
          <button key={p.label} type="button" onClick={() => { setWidth(p.w); setHeight(p.h); }} className={secondaryBtnCls}>
            {p.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="space-y-1">
          <label htmlFor="pi-w" className="block text-xs font-bold text-brand-900">Width (px)</label>
          <input id="pi-w" type="number" min={16} max={4000} value={width} onChange={(e) => setWidth(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1">
          <label htmlFor="pi-h" className="block text-xs font-bold text-brand-900">Height (px)</label>
          <input id="pi-h" type="number" min={16} max={4000} value={height} onChange={(e) => setHeight(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1">
          <label htmlFor="pi-bg" className="block text-xs font-bold text-brand-900">Background</label>
          <input id="pi-bg" type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-full h-10 p-1 rounded-xl border border-brand-200 cursor-pointer" />
        </div>
        <div className="space-y-1">
          <label htmlFor="pi-fg" className="block text-xs font-bold text-brand-900">Text Color</label>
          <input id="pi-fg" type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-full h-10 p-1 rounded-xl border border-brand-200 cursor-pointer" />
        </div>
        <div className="space-y-1">
          <label htmlFor="pi-fs" className="block text-xs font-bold text-brand-900">Font Size</label>
          <input id="pi-fs" type="number" min={8} max={200} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className={`${inputCls} font-mono`} />
        </div>
        <div className="space-y-1">
          <label htmlFor="pi-fmt" className="block text-xs font-bold text-brand-900">Format</label>
          <select id="pi-fmt" value={format} onChange={(e) => setFormat(e.target.value as 'image/png' | 'image/jpeg' | 'image/webp')} className={`${selectCls} w-full`}>
            <option value="image/png">PNG</option>
            <option value="image/jpeg">JPG</option>
            <option value="image/webp">WebP</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="pi-txt" className="block text-xs font-bold text-brand-900">Custom Text (leave blank for W × H)</label>
        <input id="pi-txt" type="text" value={customText} onChange={(e) => setCustomText(e.target.value)} placeholder={`${width} × ${height}`} className={inputCls} />
      </div>

      {!validSize && <ErrorBanner message="Width and height must each be between 16 and 4,000 pixels." />}

      <div className="p-4 rounded-xl bg-brand-50 border border-brand-200 flex justify-center overflow-hidden">
        <canvas ref={canvasRef} className="max-w-full max-h-80 h-auto rounded-lg shadow-sm" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <CopyButton text={`${width}x${height}`} label="Copy Dimensions" />
        <button type="button" onClick={handleDownload} disabled={!validSize} className={primaryBtnCls}>
          <Download className="w-4 h-4" /> Download Placeholder Image
        </button>
      </div>
    </div>
  );
}

/* ============================================================================
 * 48) Image to PDF Converter (/image-to-pdf/)
 * ========================================================================== */
interface UploadedImg {
  id: number;
  name: string;
  dataUrl: string;
  width: number;
  height: number;
}

export function ImageToPdfWidget() {
  const [images, setImages] = useState<UploadedImg[]>([]);
  const [pageSize, setPageSize] = useState<'a4' | 'letter' | 'fit'>('a4');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [margin, setMargin] = useState(24);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const files: File[] = Array.from(e.target.files || []);
    for (const f of files) {
      if (!f.type.startsWith('image/')) {
        setError(`Skipped non-image file: ${f.name}`);
        continue;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const rawUrl = String(reader.result || '');
        const img = new Image();
        img.onload = () => {
          // Normalize through canvas to JPEG/PNG so WebP works cleanly in jsPDF
          const c = document.createElement('canvas');
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          const ctx = c.getContext('2d');
          ctx?.drawImage(img, 0, 0);
          const safeUrl = f.type === 'image/png' ? c.toDataURL('image/png') : c.toDataURL('image/jpeg', 0.92);
          setImages((prev) => [
            ...prev,
            { id: Date.now() + Math.random(), name: f.name, dataUrl: safeUrl, width: img.naturalWidth, height: img.naturalHeight },
          ]);
        };
        img.src = rawUrl;
      };
      reader.readAsDataURL(f);
    }
  };

  const moveItem = (from: number, to: number) => {
    if (to < 0 || to >= images.length) return;
    setImages((prev) => {
      const copy = [...prev];
      const [item] = copy.splice(from, 1);
      copy.splice(to, 0, item);
      return copy;
    });
  };

  const buildPdf = () => {
    if (images.length === 0) {
      setError('Upload at least one JPG, PNG, or WebP image.');
      return;
    }
    const first = images[0];
    const doc =
      pageSize === 'fit'
        ? new jsPDF({
            unit: 'pt',
            format: [first.width + margin * 2, first.height + margin * 2],
            orientation: first.width > first.height ? 'landscape' : 'portrait',
          })
        : new jsPDF({ unit: 'pt', format: pageSize, orientation });

    images.forEach((im, idx) => {
      if (idx > 0) {
        if (pageSize === 'fit') {
          doc.addPage([im.width + margin * 2, im.height + margin * 2], im.width > im.height ? 'landscape' : 'portrait');
        } else {
          doc.addPage(pageSize, orientation);
        }
      }
      const pw = doc.internal.pageSize.getWidth();
      const ph = doc.internal.pageSize.getHeight();
      const maxW = Math.max(20, pw - margin * 2);
      const maxH = Math.max(20, ph - margin * 2);
      const scale = Math.min(maxW / im.width, maxH / im.height);
      const drawW = im.width * scale;
      const drawH = im.height * scale;
      const x = (pw - drawW) / 2;
      const y = (ph - drawH) / 2;
      const fmtType = im.dataUrl.startsWith('data:image/png') ? 'PNG' : 'JPEG';
      doc.addImage(im.dataUrl, fmtType, x, y, drawW, drawH);
    });

    doc.save('images-combined.pdf');
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
        <div>
          <input ref={fileRef} type="file" multiple accept="image/png,image/jpeg,image/webp" onChange={handleFiles} className="hidden" />
          <button type="button" onClick={() => fileRef.current?.click()} className={`${primaryBtnCls} w-full`}>
            Upload Images
          </button>
        </div>
        <div className="space-y-1">
          <label htmlFor="ipdf-size" className="block text-xs font-bold text-brand-900">Page Size</label>
          <select id="ipdf-size" value={pageSize} onChange={(e) => setPageSize(e.target.value as 'a4' | 'letter' | 'fit')} className={`${selectCls} w-full`}>
            <option value="a4">A4</option>
            <option value="letter">Letter</option>
            <option value="fit">Fit to Image</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="ipdf-ori" className="block text-xs font-bold text-brand-900">Orientation</label>
          <select id="ipdf-ori" value={orientation} disabled={pageSize === 'fit'} onChange={(e) => setOrientation(e.target.value as 'portrait' | 'landscape')} className={`${selectCls} w-full`}>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="ipdf-mar" className="block text-xs font-bold text-brand-900">Margin (pt)</label>
          <input id="ipdf-mar" type="number" min={0} max={120} value={margin} onChange={(e) => setMargin(Math.max(0, Number(e.target.value) || 0))} className={`${inputCls} font-mono`} />
        </div>
      </div>

      <ErrorBanner message={error} />

      {images.length === 0 ? (
        <div className="p-8 rounded-xl border border-dashed border-brand-300 text-center text-xs sm:text-sm text-brand-600">
          Upload multiple JPG, PNG, or WebP images. Drag cards (or use the arrow buttons) to reorder pages before creating your PDF.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((im, idx) => (
            <div
              key={im.id}
              draggable
              onDragStart={() => setDragIndex(idx)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (dragIndex !== null && dragIndex !== idx) moveItem(dragIndex, idx);
                setDragIndex(null);
              }}
              className="p-3 rounded-xl bg-brand-50/70 border border-brand-200 space-y-2 cursor-move"
            >
              <img src={im.dataUrl} alt={im.name} className="w-full h-36 object-contain bg-white rounded-lg border border-brand-100" />
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-brand-900 truncate">#{idx + 1} {im.name}</span>
                <div className="flex items-center gap-1 shrink-0">
                  <button type="button" onClick={() => moveItem(idx, idx - 1)} disabled={idx === 0} aria-label="Move earlier" className="p-1.5 rounded hover:bg-white disabled:opacity-40 cursor-pointer"><ArrowUp className="w-3.5 h-3.5" /></button>
                  <button type="button" onClick={() => moveItem(idx, idx + 1)} disabled={idx === images.length - 1} aria-label="Move later" className="p-1.5 rounded hover:bg-white disabled:opacity-40 cursor-pointer"><ArrowDown className="w-3.5 h-3.5" /></button>
                  <button type="button" onClick={() => setImages((p) => p.filter((x) => x.id !== im.id))} aria-label="Remove image" className="p-1.5 rounded text-red-600 hover:bg-white cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <CopyButton text={images.map((im, i) => `${i + 1}. ${im.name} (${im.width}x${im.height})`).join('\n')} label="Copy Page List" disabled={images.length === 0} />
        <button type="button" onClick={buildPdf} disabled={images.length === 0} className={primaryBtnCls}>
          <Download className="w-4 h-4" /> Create &amp; Download PDF
        </button>
      </div>
    </div>
  );
}

/* ============================================================================
 * 49) Image Cropper (/image-cropper/)
 * ========================================================================== */
export function ImageCropperWidget() {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [origMime, setOrigMime] = useState<'image/png' | 'image/jpeg' | 'image/webp'>('image/png');
  const [natW, setNatW] = useState(0);
  const [natH, setNatH] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [ratioMode, setRatioMode] = useState<'free' | '1:1' | '4:3' | '16:9' | '9:16' | 'custom'>('free');
  const [customRw, setCustomRw] = useState(3);
  const [customRh, setCustomRh] = useState(2);
  const [crop, setCrop] = useState({ x: 0, y: 0, w: 300, h: 300 });
  const [error, setError] = useState<string | null>(null);

  const imgElemRef = useRef<HTMLImageElement | null>(null);

  const orientedW = rotation % 180 === 0 ? natW : natH;
  const orientedH = rotation % 180 === 0 ? natH : natW;

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Select a valid JPG, PNG, or WebP image file.');
      return;
    }
    const mime = file.type === 'image/jpeg' ? 'image/jpeg' : file.type === 'image/webp' ? 'image/webp' : 'image/png';
    setOrigMime(mime);
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result || '');
      const im = new Image();
      im.onload = () => {
        imgElemRef.current = im;
        setImgSrc(url);
        setNatW(im.naturalWidth);
        setNatH(im.naturalHeight);
        setRotation(0);
        setFlipH(false);
        setFlipV(false);
        setCrop({ x: 0, y: 0, w: im.naturalWidth, h: im.naturalHeight });
      };
      im.src = url;
    };
    reader.readAsDataURL(file);
  };

  const applyAspectRatio = (mode: typeof ratioMode, rwCustom = customRw, rhCustom = customRh) => {
    setRatioMode(mode);
    if (!orientedW || !orientedH || mode === 'free') return;
    const [rw, rh] =
      mode === '1:1' ? [1, 1] : mode === '4:3' ? [4, 3] : mode === '16:9' ? [16, 9] : mode === '9:16' ? [9, 16] : [Math.max(1, rwCustom), Math.max(1, rhCustom)];
    const targetRatio = rw / rh;
    let w = crop.w || orientedW;
    let h = Math.round(w / targetRatio);
    if (h > orientedH) {
      h = orientedH;
      w = Math.round(h * targetRatio);
    }
    if (w > orientedW) {
      w = orientedW;
      h = Math.round(w / targetRatio);
    }
    setCrop({
      x: Math.min(crop.x, Math.max(0, orientedW - w)),
      y: Math.min(crop.y, Math.max(0, orientedH - h)),
      w: Math.max(1, w),
      h: Math.max(1, h),
    });
  };

  const downloadCropped = () => {
    if (!imgElemRef.current || crop.w <= 0 || crop.h <= 0) return;
    const temp = document.createElement('canvas');
    temp.width = orientedW;
    temp.height = orientedH;
    const tctx = temp.getContext('2d');
    if (!tctx) return;
    tctx.save();
    tctx.translate(orientedW / 2, orientedH / 2);
    tctx.rotate((rotation * Math.PI) / 180);
    tctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
    tctx.drawImage(imgElemRef.current, -natW / 2, -natH / 2);
    tctx.restore();

    const out = document.createElement('canvas');
    out.width = crop.w;
    out.height = crop.h;
    const octx = out.getContext('2d');
    octx?.drawImage(temp, crop.x, crop.y, crop.w, crop.h, 0, 0, crop.w, crop.h);

    const ext = origMime === 'image/jpeg' ? 'jpg' : origMime === 'image/webp' ? 'webp' : 'png';
    const a = document.createElement('a');
    a.href = out.toDataURL(origMime, 0.94);
    a.download = `cropped-${crop.w}x${crop.h}.${ext}`;
    a.click();
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleUpload} className="text-xs font-semibold" />
        {imgSrc && (
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setRotation((r) => (r + 90) % 360)} className={secondaryBtnCls}><RotateCw className="w-4 h-4" /> Rotate 90°</button>
            <button type="button" onClick={() => setFlipH((f) => !f)} className={secondaryBtnCls}><FlipHorizontal className="w-4 h-4" /> Flip H</button>
            <button type="button" onClick={() => setFlipV((f) => !f)} className={secondaryBtnCls}><FlipVertical className="w-4 h-4" /> Flip V</button>
          </div>
        )}
      </div>

      <ErrorBanner message={error} />

      {imgSrc && (
        <>
          <div className="flex flex-wrap gap-2">
            {(['free', '1:1', '4:3', '16:9', '9:16', 'custom'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => applyAspectRatio(m)}
                className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer ${ratioMode === m ? 'bg-accent-600 text-white' : 'bg-brand-50 text-brand-800 border border-brand-200'}`}
              >
                {m === 'free' ? 'Free Crop' : m === 'custom' ? 'Custom Ratio' : m}
              </button>
            ))}
          </div>

          {ratioMode === 'custom' && (
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-bold">Custom Ratio:</span>
              <input type="number" min={1} value={customRw} onChange={(e) => { const v = Math.max(1, Number(e.target.value) || 1); setCustomRw(v); applyAspectRatio('custom', v, customRh); }} className={`${inputCls} w-20 font-mono`} />
              <span>:</span>
              <input type="number" min={1} value={customRh} onChange={(e) => { const v = Math.max(1, Number(e.target.value) || 1); setCustomRh(v); applyAspectRatio('custom', customRw, v); }} className={`${inputCls} w-20 font-mono`} />
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="space-y-1">
              <label htmlFor="cr-x" className="block text-xs font-bold text-brand-900">X Offset (px)</label>
              <input id="cr-x" type="number" min={0} max={Math.max(0, orientedW - 1)} value={crop.x} onChange={(e) => setCrop((p) => ({ ...p, x: Math.max(0, Math.min(orientedW - p.w, Number(e.target.value) || 0)) }))} className={`${inputCls} font-mono`} />
            </div>
            <div className="space-y-1">
              <label htmlFor="cr-y" className="block text-xs font-bold text-brand-900">Y Offset (px)</label>
              <input id="cr-y" type="number" min={0} max={Math.max(0, orientedH - 1)} value={crop.y} onChange={(e) => setCrop((p) => ({ ...p, y: Math.max(0, Math.min(orientedH - p.h, Number(e.target.value) || 0)) }))} className={`${inputCls} font-mono`} />
            </div>
            <div className="space-y-1">
              <label htmlFor="cr-w" className="block text-xs font-bold text-brand-900">Crop Width (px)</label>
              <input id="cr-w" type="number" min={1} max={orientedW} value={crop.w} onChange={(e) => setCrop((p) => ({ ...p, w: Math.max(1, Math.min(orientedW - p.x, Number(e.target.value) || 1)) }))} className={`${inputCls} font-mono`} />
            </div>
            <div className="space-y-1">
              <label htmlFor="cr-h" className="block text-xs font-bold text-brand-900">Crop Height (px)</label>
              <input id="cr-h" type="number" min={1} max={orientedH} value={crop.h} onChange={(e) => setCrop((p) => ({ ...p, h: Math.max(1, Math.min(orientedH - p.y, Number(e.target.value) || 1)) }))} className={`${inputCls} font-mono`} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-brand-50 border border-brand-200 flex flex-col items-center gap-3">
            <div className="relative inline-block max-w-full overflow-hidden rounded-lg border border-brand-300">
              <img
                src={imgSrc}
                alt="Crop preview"
                className="max-h-80 w-auto block"
                style={{ transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})` }}
              />
            </div>
            <div className="text-xs font-mono text-brand-700">
              Source: {orientedW} × {orientedH} px · Output Crop: <strong>{crop.w} × {crop.h} px</strong>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <CopyButton text={`${crop.w}x${crop.h} (x:${crop.x}, y:${crop.y})`} label="Copy Crop Dimensions" />
            <button type="button" onClick={downloadCropped} className={primaryBtnCls}>
              <Download className="w-4 h-4" /> Download Cropped Image
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* ============================================================================
 * 50) Fake Data Generator (/fake-data-generator/)
 * ========================================================================== */
const FIRST_NAMES = ['Alex', 'Samira', 'Jordan', 'Nadia', 'Liam', 'Tariq', 'Elena', 'Noah', 'Maya', 'Omar', 'Chloe', 'Rohan'];
const LAST_NAMES = ['Reed', 'Khan', 'Patel', 'Walker', 'Rahman', 'Bennett', 'Silva', 'Chen', 'Hayes', 'Keller', 'Das', 'Miller'];
const STREETS = ['Oak Ave', 'Maple St', 'Cedar Ln', 'Market Rd', 'Harbor Blvd', 'Elm Way', 'Pine Ct', 'River Dr'];
const CITIES = ['Austin', 'London', 'Toronto', 'Dhaka', 'Dublin', 'Singapore', 'Sydney', 'Seattle'];
const COUNTRIES = ['United States', 'United Kingdom', 'Canada', 'Bangladesh', 'Ireland', 'Singapore', 'Australia'];

type DataFieldKey = 'firstName' | 'lastName' | 'email' | 'phone' | 'street' | 'city' | 'country' | 'date' | 'number' | 'uuid';

const ALL_DATA_FIELDS: Array<{ id: DataFieldKey; label: string }> = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'email', label: 'Email (example.com)' },
  { id: 'phone', label: 'Fictional Phone (+1-555-01xx)' },
  { id: 'street', label: 'Street Address' },
  { id: 'city', label: 'City' },
  { id: 'country', label: 'Country' },
  { id: 'date', label: 'Date (YYYY-MM-DD)' },
  { id: 'number', label: 'Number' },
  { id: 'uuid', label: 'UUID v4' },
];

export function FakeDataGeneratorWidget() {
  const [selectedFields, setSelectedFields] = useState<DataFieldKey[]>(['firstName', 'lastName', 'email', 'phone', 'city']);
  const [rowsCount, setRowsCount] = useState(10);
  const [records, setRecords] = useState<Array<Record<string, string | number>>>([]);
  const [error, setError] = useState<string | null>(null);

  const generateData = () => {
    setError(null);
    if (selectedFields.length === 0) {
      setError('Select at least one field to generate.');
      return;
    }
    if (!Number.isInteger(rowsCount) || rowsCount < 1 || rowsCount > 1000) {
      setError('Row count must be between 1 and 1,000.');
      return;
    }
    const out: Array<Record<string, string | number>> = [];
    for (let i = 0; i < rowsCount; i++) {
      const fn = FIRST_NAMES[cryptoRandomInt(FIRST_NAMES.length)];
      const ln = LAST_NAMES[cryptoRandomInt(LAST_NAMES.length)];
      const row: Record<string, string | number> = {};
      for (const f of selectedFields) {
        switch (f) {
          case 'firstName': row.firstName = fn; break;
          case 'lastName': row.lastName = ln; break;
          case 'email': row.email = `${fn.toLowerCase()}.${ln.toLowerCase()}${cryptoRandomInt(900) + 100}@example.com`; break;
          case 'phone': row.phone = `+1-555-01${String(cryptoRandomInt(100)).padStart(2, '0')}`; break;
          case 'street': row.street = `${cryptoRandomInt(900) + 100} ${STREETS[cryptoRandomInt(STREETS.length)]}`; break;
          case 'city': row.city = CITIES[cryptoRandomInt(CITIES.length)]; break;
          case 'country': row.country = COUNTRIES[cryptoRandomInt(COUNTRIES.length)]; break;
          case 'date': {
            const yr = 2020 + cryptoRandomInt(7);
            const mo = String(cryptoRandomInt(12) + 1).padStart(2, '0');
            const dy = String(cryptoRandomInt(28) + 1).padStart(2, '0');
            row.date = `${yr}-${mo}-${dy}`;
            break;
          }
          case 'number': row.number = cryptoRandomInt(10000); break;
          case 'uuid': row.uuid = typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `00000000-0000-4000-8000-${String(i).padStart(12, '0')}`; break;
        }
      }
      out.push(row);
    }
    setRecords(out);
  };

  useEffect(() => {
    generateData();
  }, []);

  const jsonString = useMemo(() => JSON.stringify(records, null, 2), [records]);
  const csvString = useMemo(() => {
    if (records.length === 0) return '';
    const hdrs = Object.keys(records[0]);
    const escCell = (v: unknown) => {
      const s = String(v ?? '');
      return s.includes(',') || s.includes('"') ? `"${s.replace(/"/g, '""')}"` : s;
    };
    return [hdrs.join(','), ...records.map((r) => hdrs.map((h) => escCell(r[h])).join(','))].join('\n');
  }, [records]);

  const toggleField = (id: DataFieldKey) => {
    setSelectedFields((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap gap-3 p-4 rounded-xl bg-brand-50/60 border border-brand-200 text-xs sm:text-sm">
        {ALL_DATA_FIELDS.map((f) => (
          <label key={f.id} className="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={selectedFields.includes(f.id)} onChange={() => toggleField(f.id)} className="w-4 h-4 accent-accent-600 rounded" />
            <span className="font-medium text-brand-900">{f.label}</span>
          </label>
        ))}
      </div>

      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-1.5">
          <label htmlFor="fd-rows" className="block text-xs font-bold text-brand-900">Row Count (1–1000)</label>
          <input id="fd-rows" type="number" min={1} max={1000} value={rowsCount} onChange={(e) => setRowsCount(Number(e.target.value))} className={`${inputCls} w-36 font-mono`} />
        </div>
        <button type="button" onClick={generateData} className={primaryBtnCls}>Generate Test Data</button>
      </div>

      <ErrorBanner message={error} />

      {records.length > 0 && (
        <div className="overflow-x-auto max-h-72 border border-brand-200 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-brand-50 border-b border-brand-200 sticky top-0 text-brand-800 font-bold">
              <tr>
                {Object.keys(records[0]).map((k) => (
                  <th key={k} className="py-2.5 px-3 whitespace-nowrap">{k}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100 font-mono">
              {records.slice(0, 50).map((r, i) => (
                <tr key={i}>
                  {Object.keys(records[0]).map((k) => (
                    <td key={k} className="py-2 px-3 whitespace-nowrap">{String(r[k])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <button type="button" disabled={!records.length} onClick={() => downloadTextFile('test-data.json', jsonString, 'application/json;charset=utf-8')} className={secondaryBtnCls}>
            <Download className="w-4 h-4" /> Download JSON
          </button>
          <button type="button" disabled={!records.length} onClick={() => downloadTextFile('test-data.csv', csvString, 'text/csv;charset=utf-8')} className={secondaryBtnCls}>
            <Download className="w-4 h-4" /> Download CSV
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <CopyButton text={csvString} label="Copy CSV" disabled={!records.length} />
          <CopyButton text={jsonString} label="Copy JSON" disabled={!records.length} />
        </div>
      </div>
    </div>
  );
}
