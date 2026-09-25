import React, { useState } from 'react';
import { Bot, Copy, Check, Download, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  mode: 'checker' | 'generator';
}

export function LlmsTxtTool({ mode }: Props) {
  // Generator State
  const [siteName, setSiteName] = useState('Riad Al Ashekin');
  const [summary, setSummary] = useState('Strategic SEO consulting, enterprise technical auditing, and revenue-focused organic acquisition advised by Riad Al Ashekin.');
  const [primaryLinks, setPrimaryLinks] = useState(
    `- [Services](https://riadalashekin.com/services/): Comprehensive technical and growth SEO services\n- [About Me](https://riadalashekin.com/about-me/): Background, credentials, and executive advisory\n- [SEO Tools](https://riadalashekin.com/seo-tools/): Free client-side webmaster utilities\n- [Case Studies](https://riadalashekin.com/seo-portfolio/): Real commercial SaaS and e-commerce outcomes\n- [Contact](https://riadalashekin.com/contact): Direct strategic inquiries`
  );
  const [optionalLinks, setOptionalLinks] = useState(
    `- [Robots.txt Guide](https://riadalashekin.com/ultimate-guide-robots-txt/): Technical deep dive into crawler directives\n- [SEO ROI Calculator](https://riadalashekin.com/seo-roi-calculator/): Project financial returns on organic search`
  );

  // Checker State
  const [testContent, setTestContent] = useState(`# Riad Al Ashekin\n\n> Strategic SEO consulting, enterprise technical auditing, and revenue-focused organic acquisition.\n\n## Core Pages\n\n- [Services](https://riadalashekin.com/services/): Comprehensive search services\n- [About](https://riadalashekin.com/about-me/): Consultant bio\n\n## Optional\n\n- [Tools](https://riadalashekin.com/seo-tools/): Free webmaster utilities`);
  const [checkResult, setCheckResult] = useState<null | { valid: boolean; messages: string[] }>(null);
  const [copied, setCopied] = useState(false);

  const generatedLlmsTxt = `# ${siteName}\n\n> ${summary}\n\n## Core Resources\n\n${primaryLinks}\n\n## Optional Resources\n\n${optionalLinks}\n`;

  const handleValidate = () => {
    const messages: string[] = [];
    let valid = true;

    if (!testContent.startsWith('# ')) {
      valid = false;
      messages.push('Missing H1 heading (# Name) on the first line.');
    } else {
      messages.push('Found valid project H1 name tag.');
    }

    if (!testContent.includes('> ')) {
      valid = false;
      messages.push('Missing blockquote summary (> ...) defining the project context.');
    } else {
      messages.push('Detected descriptive summary blockquote.');
    }

    if (!testContent.includes('- [') || !testContent.includes('](')) {
      valid = false;
      messages.push('No Markdown formatted links (- [Title](URL)) detected.');
    } else {
      messages.push('Valid Markdown link syntax detected.');
    }

    setCheckResult({ valid, messages });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedLlmsTxt], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'llms.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      {mode === 'generator' ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                  Brand / Project Name (H1)
                </label>
                <input
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="w-full px-3 py-2 bg-brand-50/50 border border-brand-200 rounded-xl text-xs text-brand-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                  Concise Model Summary (Blockquote)
                </label>
                <textarea
                  rows={3}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full p-2.5 bg-brand-50/50 border border-brand-200 rounded-xl text-xs text-brand-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                  Core Markdown Links
                </label>
                <textarea
                  rows={4}
                  value={primaryLinks}
                  onChange={(e) => setPrimaryLinks(e.target.value)}
                  className="w-full p-2.5 bg-brand-50/50 border border-brand-200 rounded-xl font-mono text-xs text-brand-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                  Optional / Secondary Links
                </label>
                <textarea
                  rows={3}
                  value={optionalLinks}
                  onChange={(e) => setOptionalLinks(e.target.value)}
                  className="w-full p-2.5 bg-brand-50/50 border border-brand-200 rounded-xl font-mono text-xs text-brand-900 focus:bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Preview /llms.txt</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(generatedLlmsTxt)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent-700 bg-accent-50 border border-accent-200 px-2.5 py-1 rounded-lg"
                  >
                    {copied ? <Check className="w-3 h-3 text-growth-600" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white bg-brand-950 px-2.5 py-1 rounded-lg"
                  >
                    <Download className="w-3 h-3" /> Save File
                  </button>
                </div>
              </div>
              <textarea
                readOnly
                rows={14}
                value={generatedLlmsTxt}
                className="w-full p-3.5 bg-brand-950 text-brand-100 rounded-xl font-mono text-xs flex-1 select-all"
              />
            </div>
          </div>
        </div>
      ) : (
        /* Checker Mode */
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-2">
              Paste Your /llms.txt Content
            </label>
            <textarea
              rows={8}
              value={testContent}
              onChange={(e) => setTestContent(e.target.value)}
              className="w-full p-3.5 bg-brand-50/50 border border-brand-200 rounded-xl font-mono text-xs text-brand-900 focus:bg-white"
            />
          </div>

          <button
            onClick={handleValidate}
            className="w-full sm:w-auto px-6 py-2.5 bg-brand-950 hover:bg-brand-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            Validate Syntax Compliance
          </button>

          {checkResult && (
            <div className={`p-4 rounded-xl border text-xs ${checkResult.valid ? 'bg-growth-50 border-growth-200 text-growth-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
              <div className="flex items-center gap-2 font-bold mb-2">
                {checkResult.valid ? <CheckCircle2 className="w-4 h-4 text-growth-600" /> : <AlertCircle className="w-4 h-4 text-amber-600" />}
                {checkResult.valid ? 'Valid /llms.txt Specification' : 'Syntax Issues Detected'}
              </div>
              <ul className="space-y-1 list-disc list-inside opacity-90">
                {checkResult.messages.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
