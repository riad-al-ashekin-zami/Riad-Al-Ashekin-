import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, Terminal, Download } from 'lucide-react';

interface Props {
  mode: 'tester' | 'generator';
}

export function RobotsTxtTool({ mode }: Props) {
  // Generator state
  const [allowGooglebot, setAllowGooglebot] = useState(true);
  const [allowBingbot, setAllowBingbot] = useState(true);
  const [allowGptBot, setAllowGptBot] = useState(true);
  const [allowPerplexity, setAllowPerplexity] = useState(true);
  const [blockAdmin, setBlockAdmin] = useState(true);
  const [sitemapUrl, setSitemapUrl] = useState('https://riadalashekin.com/sitemap.xml');
  const [customDisallows, setCustomDisallows] = useState('/search\n/cart\n/checkout');

  // Tester state
  const [testRobotsContent, setTestRobotsContent] = useState(`User-agent: *\nDisallow: /admin/\nDisallow: /checkout/\nAllow: /\n\nSitemap: https://riadalashekin.com/sitemap.xml`);
  const [testUrl, setTestUrl] = useState('/admin/dashboard');
  const [testBot, setTestBot] = useState('*');
  const [testResult, setTestResult] = useState<null | { allowed: boolean; rule: string }>(null);

  const [copied, setCopied] = useState(false);

  // Generate output string
  const generateRobots = () => {
    let lines = ['# robots.txt generated via riadalashekin.com/free-robots-txt-generator/'];
    lines.push('User-agent: *');
    if (blockAdmin) {
      lines.push('Disallow: /admin/');
      lines.push('Disallow: /wp-admin/');
    }
    if (customDisallows.trim()) {
      customDisallows.split('\n').map(s => s.trim()).filter(Boolean).forEach(path => {
        lines.push(`Disallow: ${path.startsWith('/') ? path : '/' + path}`);
      });
    }
    lines.push('Allow: /');

    if (!allowGptBot) {
      lines.push('\nUser-agent: GPTBot');
      lines.push('Disallow: /');
    }
    if (!allowPerplexity) {
      lines.push('\nUser-agent: PerplexityBot');
      lines.push('Disallow: /');
    }

    if (sitemapUrl.trim()) {
      lines.push(`\nSitemap: ${sitemapUrl.trim()}`);
    }

    return lines.join('\n');
  };

  const handleTest = () => {
    const lines = testRobotsContent.split('\n');
    let isBlocked = false;
    let matchingRule = 'Implicit Allow (No matching Disallow rule found)';

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.toLowerCase().startsWith('disallow:')) {
        const path = trimmed.split(':')[1]?.trim();
        if (path && testUrl.startsWith(path)) {
          isBlocked = true;
          matchingRule = `Blocked by rule: "${trimmed}"`;
          break;
        }
      }
    }

    setTestResult({
      allowed: !isBlocked,
      rule: matchingRule
    });
  };

  const currentGenerated = generateRobots();

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (content: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      {mode === 'generator' ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Options */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-brand-950 uppercase tracking-wider">Crawler Directives & Bots</h4>
              
              <div className="space-y-3 bg-brand-50/70 p-4 rounded-xl border border-brand-200 text-xs">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-semibold text-brand-800">Block Admin & Staging Paths</span>
                  <input
                    type="checkbox"
                    checked={blockAdmin}
                    onChange={(e) => setBlockAdmin(e.target.checked)}
                    className="rounded text-accent-600 focus:ring-accent-500"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-semibold text-brand-800">Allow AI Crawlers (ChatGPT / GPTBot)</span>
                  <input
                    type="checkbox"
                    checked={allowGptBot}
                    onChange={(e) => setAllowGptBot(e.target.checked)}
                    className="rounded text-accent-600 focus:ring-accent-500"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-semibold text-brand-800">Allow PerplexityBot Search Agent</span>
                  <input
                    type="checkbox"
                    checked={allowPerplexity}
                    onChange={(e) => setAllowPerplexity(e.target.checked)}
                    className="rounded text-accent-600 focus:ring-accent-500"
                  />
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                  Custom Disallow Paths (one per line)
                </label>
                <textarea
                  rows={3}
                  value={customDisallows}
                  onChange={(e) => setCustomDisallows(e.target.value)}
                  className="w-full p-2.5 bg-brand-50/50 border border-brand-200 rounded-xl font-mono text-xs text-brand-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                  XML Sitemap URL
                </label>
                <input
                  type="text"
                  value={sitemapUrl}
                  onChange={(e) => setSitemapUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-brand-50/50 border border-brand-200 rounded-xl font-mono text-xs text-brand-900 focus:bg-white"
                />
              </div>
            </div>

            {/* Live output */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Generated robots.txt</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(currentGenerated)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent-700 bg-accent-50 border border-accent-200 px-2.5 py-1 rounded-lg"
                  >
                    {copied ? <Check className="w-3 h-3 text-growth-600" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <button
                    onClick={() => handleDownload(currentGenerated)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white bg-brand-950 px-2.5 py-1 rounded-lg"
                  >
                    <Download className="w-3 h-3" /> Download
                  </button>
                </div>
              </div>
              <textarea
                readOnly
                rows={12}
                value={currentGenerated}
                className="w-full p-3.5 bg-brand-950 text-brand-100 rounded-xl font-mono text-xs flex-1 select-all focus:outline-none"
              />
            </div>
          </div>
        </div>
      ) : (
        /* Tester Mode */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-2">
                Paste robots.txt Directives
              </label>
              <textarea
                rows={10}
                value={testRobotsContent}
                onChange={(e) => setTestRobotsContent(e.target.value)}
                className="w-full p-3.5 bg-brand-50/50 border border-brand-200 rounded-xl font-mono text-xs text-brand-900 focus:bg-white"
              />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                  Test URL Path (e.g., /admin/users or /blog/hello)
                </label>
                <input
                  type="text"
                  value={testUrl}
                  onChange={(e) => setTestUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-brand-50/50 border border-brand-200 rounded-xl font-mono text-xs text-brand-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                  User Agent
                </label>
                <select
                  value={testBot}
                  onChange={(e) => setTestBot(e.target.value)}
                  className="w-full px-3 py-2 bg-brand-50/50 border border-brand-200 rounded-xl text-xs text-brand-900"
                >
                  <option value="*">All Robots (*)</option>
                  <option value="Googlebot">Googlebot</option>
                  <option value="Bingbot">Bingbot</option>
                  <option value="GPTBot">GPTBot</option>
                </select>
              </div>

              <button
                onClick={handleTest}
                className="w-full py-2.5 bg-brand-950 hover:bg-brand-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
              >
                Inspect Crawl Permission
              </button>

              {testResult && (
                <div className={`p-4 rounded-xl border text-xs leading-relaxed ${testResult.allowed ? 'bg-growth-50/60 border-growth-200 text-growth-900' : 'bg-red-50/60 border-red-200 text-red-900'}`}>
                  <div className="font-bold mb-1 flex items-center gap-1.5">
                    <ShieldCheck className={`w-4 h-4 ${testResult.allowed ? 'text-growth-600' : 'text-red-600'}`} />
                    Status: {testResult.allowed ? 'ALLOWED (200 OK)' : 'BLOCKED (Crawl Denied)'}
                  </div>
                  <div className="font-mono text-[11px] opacity-80">{testResult.rule}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
