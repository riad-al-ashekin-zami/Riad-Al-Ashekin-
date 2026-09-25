import React, { useState } from 'react';
import { Code2, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

const SAMPLE_SCHEMAS = {
  Organization: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Riad Al Ashekin Strategic SEO",
  "url": "https://riadalashekin.com",
  "logo": "https://riadalashekin.com/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Riad Al Ashekin",
    "jobTitle": "Strategic SEO Consultant"
  },
  "sameAs": [
    "https://linkedin.com/in/riadalashekin",
    "https://twitter.com/riadalashekin"
  ]
}`,
  LocalBusiness: `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Riad Al Ashekin - SEO Consultant Sylhet",
  "image": "https://riadalashekin.com/office.jpg",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sylhet",
    "addressCountry": "BD"
  },
  "telephone": "+8801700000000",
  "url": "https://riadalashekin.com"
}`,
  Article: `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Ultimate Guide to Robots.txt",
  "author": {
    "@type": "Person",
    "name": "Riad Al Ashekin"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Riad Al Ashekin"
  },
  "datePublished": "2025-09-20"
}`
};

export function StructuredDataTester() {
  const [jsonInput, setJsonInput] = useState(SAMPLE_SCHEMAS.Organization);
  const [validationResult, setValidationResult] = useState<null | { valid: boolean; type?: string; fields?: string[]; error?: string }>(null);
  const [copied, setCopied] = useState(false);

  const handleValidate = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      if (!parsed['@context'] || !parsed['@type']) {
        setValidationResult({
          valid: false,
          error: 'Missing required "@context" (https://schema.org) or "@type" property.'
        });
        return;
      }
      setValidationResult({
        valid: true,
        type: parsed['@type'],
        fields: Object.keys(parsed)
      });
    } catch (e: any) {
      setValidationResult({
        valid: false,
        error: `JSON Syntax Error: ${e.message}`
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-brand-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-brand-700">Load Preset:</span>
          {(['Organization', 'LocalBusiness', 'Article'] as const).map((schemaType) => (
            <button
              key={schemaType}
              type="button"
              onClick={() => {
                setJsonInput(SAMPLE_SCHEMAS[schemaType]);
                setValidationResult(null);
              }}
              className="text-xs px-2.5 py-1 bg-brand-50 hover:bg-brand-100 text-brand-700 rounded-lg border border-brand-200 font-medium"
            >
              {schemaType}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-xs font-bold text-accent-700 bg-accent-50 px-2.5 py-1 rounded-lg border border-accent-200"
        >
          {copied ? <Check className="w-3 h-3 text-growth-600" /> : <Copy className="w-3 h-3" />}
          Copy JSON-LD
        </button>
      </div>

      <div>
        <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-2">
          JSON-LD Script Code
        </label>
        <textarea
          rows={12}
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="w-full p-3.5 bg-brand-950 text-brand-100 rounded-xl font-mono text-xs focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handleValidate}
          className="px-6 py-2.5 bg-brand-950 hover:bg-brand-900 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
        >
          Validate Schema Syntax
        </button>
      </div>

      {validationResult && (
        <div className={`p-4 rounded-xl border text-xs ${validationResult.valid ? 'bg-growth-50/70 border-growth-200 text-growth-900' : 'bg-red-50/70 border-red-200 text-red-900'}`}>
          <div className="flex items-center gap-2 font-bold mb-1.5">
            {validationResult.valid ? <CheckCircle2 className="w-4 h-4 text-growth-600" /> : <AlertCircle className="w-4 h-4 text-red-600" />}
            {validationResult.valid ? `Valid Schema.org Entity: ${validationResult.type}` : 'Schema Validation Error'}
          </div>
          {validationResult.valid ? (
            <p className="opacity-90">
              Validated schema attributes: {validationResult.fields?.join(', ')}. Ready for embedding inside <code className="bg-growth-100 px-1 py-0.5 rounded">&lt;script type="application/ld+json"&gt;</code>.
            </p>
          ) : (
            <p className="font-mono text-[11px]">{validationResult.error}</p>
          )}
        </div>
      )}
    </div>
  );
}
