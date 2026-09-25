import { ToolRegistryItem } from './types';

export const crawlerTools: ToolRegistryItem[] = [
  {
    id: 'robots-tester',
    name: 'Robots.txt Tester / Checker',
    slug: 'robots-txt-tester',
    path: '/tools/robots-txt-tester/',
    canonicalUrl: 'https://riadalashekin.com/tools/robots-txt-tester/',
    category: 'crawler',
    badge: 'Crawl Test',
    shortDescription: 'Test your robots.txt file to see which URLs are blocked from search engine crawlers. Verify if your site is properly guiding bots.',
    seoTitle: 'Robots.txt Tester & Validator - Test Bot Crawl Access | Riad Al Ashekin',
    metaDescription: 'Free robots.txt tester and validator. Test specific URLs against user-agents like Googlebot, Bingbot, and GPTBot to prevent accidental crawl blocks.',
    h1: 'Robots.txt Tester & Validator',
    intro: 'A robots.txt file provides vital instructions to web search crawlers about which URLs on your site can or cannot be accessed. Test your robots.txt directives in real-time against specific bot user-agents (Googlebot, Bingbot, GPTBot) to ensure search bots can crawl your key landing pages.',
    howToUse: [
      'Paste your robots.txt file content into the code editor.',
      'Enter a test URL path (e.g. /blog/my-post or /admin/settings).',
      'Select the User-Agent you wish to test (e.g. Googlebot, Bingbot, ClaudeBot).',
      'Click Test URL to see an immediate Allowed or Disallowed verdict along with the matching directive line.'
    ],
    features: [
      'Simulates Googlebot, Bingbot, Baiduspider, Yandex, GPTBot, and ClaudeBot',
      'Pinpoints the exact line number of the matching Allow or Disallow rule',
      'Supports wildcards (* and $) according to standard RFC 9309 robots specifications',
      'Validates Sitemap directives and syntax errors',
      'Instant copy and clean formatting of tested robots.txt files'
    ],
    technicalExplanation: {
      heading: 'The Mechanics of the Robots Exclusion Protocol (RFC 9309)',
      body: 'In 2022, the Robots Exclusion Protocol was formally standardized as RFC 9309. Robots.txt rules are processed from top to bottom, but the most specific matching rule takes precedence. If both an Allow and Disallow rule match a URL with equal length, the Allow rule generally wins in Googlebot\'s implementation.',
      points: [
        'Crawl Budget Protection: Block resource-intensive faceted navigation, search query filters, and cart endpoints.',
        'Never block CSS/JS files: Googlebot must render your pages to understand responsive layouts and JavaScript content.'
      ]
    },
    examples: {
      title: 'Testing Cart Disallow Rule',
      input: 'User-agent: *\nDisallow: /checkout/\nDisallow: /admin/\nAllow: /blog/\n\nTest URL: /checkout/payment',
      output: 'Status: BLOCKED\nMatching Directive: Line 2: Disallow: /checkout/\nUser-Agent: Googlebot',
      notes: 'Confirms that checkout funnel URLs are successfully hidden from bot crawl queues.'
    },
    faqs: [
      {
        question: 'Does robots.txt remove a page from Google Search results?',
        answer: 'No. Robots.txt prevents crawling, not indexing. If an external site links to a blocked URL, Google may still index the URL without crawling the page content. To prevent indexing, use a <meta name="robots" content="noindex"> tag.'
      },
      {
        question: 'Where must the robots.txt file be located?',
        answer: 'The file must always be hosted at the root of the domain: https://example.com/robots.txt. Subdirectory robots.txt files (e.g. example.com/sub/robots.txt) are completely ignored by search bots.'
      }
    ],
    relatedToolSlugs: [
      'free-robots-txt-generator',
      'sitemap-tester',
      'robots-meta-checker',
      'free-llms-txt-checker'
    ],
    legacyPaths: ['/robots-txt-tester/']
  },
  {
    id: 'robots-generator',
    name: 'Robots.txt Generator',
    slug: 'free-robots-txt-generator',
    path: '/tools/free-robots-txt-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/free-robots-txt-generator/',
    category: 'crawler',
    badge: 'Generator',
    shortDescription: 'Easily create a custom robots.txt file to control how search engines crawl your site. Protect private pages and guide bots to important content.',
    seoTitle: 'Robots.txt Generator - Create Optimized Robots Files | Riad Al Ashekin',
    metaDescription: 'Generate a clean, standardized robots.txt file for your website in seconds. Customize permissions for Googlebot, Bingbot, and AI crawlers with zero coding.',
    h1: 'Robots.txt Generator',
    intro: 'Create a fully compliant, production-ready robots.txt file tailored to your website architecture. Protect sensitive administration directories, control AI scraping bots, and declare your official XML sitemap location with ease.',
    howToUse: [
      'Specify default access rules for all search engine bots (User-agent: *).',
      'Add directories you want to protect or hide from search indexing (e.g. /admin/, /cart/).',
      'Toggle permissions for AI bots (OpenAI, Anthropic, Common Crawl).',
      'Add your XML sitemap URL and download the generated robots.txt file.'
    ],
    features: [
      'Pre-configured templates for WordPress, Shopify, Next.js, and custom frameworks',
      'Granular control for Googlebot, Bingbot, GPTBot, ClaudeBot, and CCBot',
      'Instant declaration of XML sitemap endpoints',
      'Clean syntax conforming to standard RFC 9309',
      'One-click download or direct clipboard copy'
    ],
    technicalExplanation: {
      heading: 'Structuring an Optimized Robots.txt File',
      body: 'A well-structured robots.txt optimizes your crawl budget by ensuring search crawlers spend their allocated crawl resources on high-value organic revenue pages, rather than getting trapped in infinite pagination loops, internal search results, or administration panels.',
      points: [
        'User-agent grouping: Group rules logically starting with User-agent: * before specific bot exceptions.',
        'Sitemap declaration: Always include the full absolute URL to your primary XML sitemap.'
      ]
    },
    faqs: [
      {
        question: 'How do I block AI crawlers while allowing Googlebot?',
        answer: 'You can add explicit Disallow: / blocks for User-agent: GPTBot, CCBot, and ClaudeBot, while keeping User-agent: Googlebot set to Allow: /.'
      }
    ],
    relatedToolSlugs: [
      'robots-txt-tester',
      'sitemap-generator',
      'free-llms-txt-generator',
      'noindex-checker'
    ],
    legacyPaths: ['/free-robots-txt-generator/', '/robots-txt-generator/']
  },
  {
    id: 'sitemap-tester',
    name: 'XML Sitemap Tester & Checker',
    slug: 'sitemap-tester',
    path: '/tools/sitemap-tester/',
    canonicalUrl: 'https://riadalashekin.com/tools/sitemap-tester/',
    category: 'crawler',
    badge: 'Validator',
    shortDescription: 'A user-friendly tool to test and validate your XML sitemap with live previews—detecting errors and ensuring optimal crawlability.',
    seoTitle: 'XML Sitemap Tester & Validator - Free Sitemap QA Tool | Riad Al Ashekin',
    metaDescription: 'Validate your XML sitemap for syntax errors, broken links, non-canonical URLs, and formatting issues before submitting to Google Search Console.',
    h1: 'XML Sitemap Tester & Checker',
    intro: 'An XML sitemap is a roadmap of your website that leads search engines to all your important content. Paste your sitemap XML code or URL list below to validate syntax, verify XML schemas, check lastmod dates, and detect non-indexable URLs.',
    howToUse: [
      'Paste your XML sitemap code or list of URLs into the input area.',
      'Click Validate Sitemap to parse tag structures and URL elements.',
      'Review the total URL count, changefreq, priority, and lastmod distribution.',
      'Check flagged warnings for missing protocols, trailing slash errors, or invalid XML tags.'
    ],
    features: [
      'Validates against official sitemaps.org 0.9 XML schema protocols',
      'Parses <urlset>, <url>, <loc>, <lastmod>, <changefreq>, and <priority>',
      'Detects HTTP vs HTTPS protocol inconsistencies and mixed content',
      'Warns if total URL count exceeds the 50,000 URLs per sitemap limit',
      'Exports clean, validated XML code ready for deployment'
    ],
    technicalExplanation: {
      heading: 'XML Sitemap Standards and Google Best Practices',
      body: 'Google Search Console strictly enforces sitemaps.org standards. A single malformed tag or unescaped ampersand (& instead of &amp;) can cause search engines to reject the entire sitemap. Furthermore, only canonical, 200 OK indexable pages should be included in sitemaps—never include 301 redirects, 404s, or noindexed URLs.',
      points: [
        '50,000 URL Limit: A single sitemap file cannot exceed 50,000 URLs or 50MB uncompressed.',
        'W3C Datetime Format: lastmod must use YYYY-MM-DD or full ISO 8601 timestamps.'
      ]
    },
    faqs: [
      {
        question: 'Does Google still use <priority> and <changefreq> tags?',
        answer: 'Google has officially stated that Googlebot mostly ignores <priority> and <changefreq>, but heavily relies on accurate <lastmod> dates to prioritize recrawling updated content.'
      }
    ],
    relatedToolSlugs: [
      'sitemap-generator',
      'sitemap-url-extractor',
      'robots-txt-tester',
      'xml-validator'
    ],
    legacyPaths: ['/sitemap-tester/']
  },
  {
    id: 'sitemap-generator',
    name: 'Sitemap Generator',
    slug: 'sitemap-generator',
    path: '/tools/sitemap-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/sitemap-generator/',
    category: 'crawler',
    badge: 'XML Tool',
    shortDescription: 'Generate compliant XML sitemaps with custom change frequencies, priorities, and clean lastmod tags ready for Google Search Console.',
    seoTitle: 'XML Sitemap Generator - Free Online Sitemap Creator | Riad Al Ashekin',
    metaDescription: 'Generate clean, standard XML sitemaps for your website. Paste your URLs, configure lastmod timestamps, and download validated sitemap.xml files.',
    h1: 'XML Sitemap Generator',
    intro: 'Generate an error-free, W3C-compliant XML sitemap in seconds. Paste your list of website URLs, configure crawl priorities and change frequencies, and export a ready-to-upload sitemap.xml file formatted according to official sitemaps.org guidelines.',
    howToUse: [
      'Paste your website URLs (one URL per line) into the input box.',
      'Select your preferred Change Frequency (daily, weekly, monthly).',
      'Choose a default Priority value (e.g. 0.8 for standard pages, 1.0 for home).',
      'Click Generate XML Sitemap to download or copy your sitemap.xml file.'
    ],
    features: [
      'Conforms to official Sitemaps.org 0.9 schema',
      'Automated ISO 8601 lastmod date timestamping',
      'Configurable changefreq and priority defaults',
      'Auto-sanitizes URLs, escaping special XML characters (&amp;, &lt;, &gt;)',
      'One-click sitemap.xml file download'
    ],
    technicalExplanation: {
      heading: 'Why Sitemaps Accelerate Indexation of New Content',
      body: 'For large sites, eCommerce catalogs, or newly launched domains with limited backlink equity, an XML sitemap is the most reliable mechanism for alerting Googlebot to newly created or refreshed URLs. Submitting your sitemap through Google Search Console guarantees rapid discovery.',
      points: [
        'Clean URLs Only: Exclude parameterized session URLs, tracking codes, and internal search pages.',
        'Proper Escaping: URLs containing query strings must escape ampersands as &amp;.'
      ]
    },
    faqs: [
      {
        question: 'How do I submit my new sitemap to Google?',
        answer: 'Log into Google Search Console, navigate to Indexing > Sitemaps, enter the sitemap URL (e.g. sitemap.xml), and click Submit.'
      }
    ],
    relatedToolSlugs: [
      'sitemap-tester',
      'sitemap-url-extractor',
      'free-robots-txt-generator',
      'xml-formatter'
    ]
  },
  {
    id: 'sitemap-url-extractor',
    name: 'Sitemap URL Extractor',
    slug: 'sitemap-url-extractor',
    path: '/tools/sitemap-url-extractor/',
    canonicalUrl: 'https://riadalashekin.com/tools/sitemap-url-extractor/',
    category: 'crawler',
    badge: 'Extraction',
    shortDescription: 'Paste an XML sitemap or URL list to instantly extract, count, and export all clean URLs without XML tags or metadata.',
    seoTitle: 'Sitemap URL Extractor - Extract Plain URLs from XML Sitemaps | Riad Al Ashekin',
    metaDescription: 'Extract clean plain text URL lists from XML sitemaps. Strip <loc> tags, remove XML boilerplate, and export clean URL lists for crawler audits.',
    h1: 'Sitemap URL Extractor',
    intro: 'Need to audit all URLs inside an XML sitemap without dealing with XML markup? Paste any sitemap XML code below to strip out <loc> and <urlset> tags, extract plain URLs, filter by directory, and export clean lists for Screaming Frog or spreadsheet audits.',
    howToUse: [
      'Paste your raw XML sitemap code or text into the extractor.',
      'Click Extract URLs to parse all <loc> nodes.',
      'Review the clean list of extracted URLs and total count.',
      'Copy to clipboard or download as a clean .txt or .csv list.'
    ],
    features: [
      'Instantly strips XML tags (<url>, <loc>, <lastmod>)',
      'De-duplicates repeated URLs automatically',
      'Decodes XML entities (&amp; becomes &)',
      'Provides URL count and domain segmentation',
      'Exports to plain text, CSV, or JSON format'
    ],
    technicalExplanation: {
      heading: 'Auditing Sitemaps for Migration and Architecture Projects',
      body: 'During site migrations, CMS replatforming, or competitive SEO research, extracting plain URL lists from XML sitemaps is the first step toward building 301 redirect maps and cross-referencing log files against indexable URLs.',
      points: [
        'Speed up crawling audits: Import clean URL lists into crawling tools.',
        'Redirect mapping: Identify discontinued legacy URLs before domain updates.'
      ]
    },
    faqs: [
      {
        question: 'Can this tool extract URLs from sitemap index files?',
        answer: 'Yes, it extracts all URLs inside <loc> nodes, whether they point to individual webpage URLs or sub-sitemap XML files.'
      }
    ],
    relatedToolSlugs: [
      'sitemap-tester',
      'sitemap-generator',
      'url-parser',
      'url-cleaner'
    ]
  },
  {
    id: 'hreflang-generator',
    name: 'Hreflang Generator',
    slug: 'hreflang-generator',
    path: '/tools/hreflang-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/hreflang-generator/',
    category: 'crawler',
    badge: 'i18n SEO',
    shortDescription: 'Generate accurate multilingual and multi-regional hreflang annotations for international SEO. Supports ISO language and country codes.',
    seoTitle: 'Hreflang Generator - Multi-Language & Regional SEO Tool | Riad Al Ashekin',
    metaDescription: 'Generate error-free hreflang annotations for international SEO. Supports ISO 639-1 languages, ISO 3166-1 regions, and x-default fallbacks.',
    h1: 'Hreflang Generator',
    intro: 'Hreflang tags ensure Google serves the correct language or regional version of your content to international searchers. Generate reciprocal hreflang link tags with valid ISO 639-1 language codes, ISO 3166-1 country codes, and x-default fallbacks in seconds.',
    howToUse: [
      'Enter your primary URL and target language/region.',
      'Add regional and language variations (e.g. en-US, en-GB, fr-FR, es-ES).',
      'Set an x-default fallback URL for unmatched global visitors.',
      'Copy the generated HTML <link rel="alternate" hreflang="..."> tags to your page head.'
    ],
    features: [
      'Validates ISO 639-1 language codes and ISO 3166-1 Alpha 2 country codes',
      'Generates x-default fallback annotations for international homepages',
      'Enforces reciprocal self-referencing hreflang link rules',
      'Generates both HTML head tags and XML sitemap hreflang formats',
      'Live validation prevents common casing and order errors'
    ],
    technicalExplanation: {
      heading: 'The Critical Rule of Reciprocal Hreflang Tags',
      body: 'Hreflang tags must always be reciprocal. If page A links to page B via hreflang, page B MUST link back to page A with matching annotations. If the reciprocal link is missing, Google ignores both annotations to prevent rogue third parties from claiming foreign language authority over your URLs.',
      points: [
        'Case Sensitivity: Language codes must be lowercase (e.g. "en"), country codes uppercase (e.g. "US"). Example: en-US.',
        'x-default: Essential for selector pages or international landing pages serving unlocalized audiences.'
      ]
    },
    faqs: [
      {
        question: 'Should the page include a self-referencing hreflang tag?',
        answer: 'Yes, absolutely. Every localized page must include an hreflang tag pointing to itself as well as all other regional language counterparts.'
      }
    ],
    relatedToolSlugs: [
      'sitemap-generator',
      'robots-txt-tester',
      'meta-title-description-checker',
      'url-test'
    ]
  },
  {
    id: 'llms-generator',
    name: 'Llms.txt Generator',
    slug: 'free-llms-txt-generator',
    path: '/tools/free-llms-txt-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/free-llms-txt-generator/',
    category: 'crawler',
    badge: 'AI Crawler',
    shortDescription: 'Easily generate an llms.txt file to manage AI crawler access on your site. Control permissions, protect content, and ensure compliance in seconds.',
    seoTitle: 'Llms.txt Generator - Create AI-Ready Site Context Files | Riad Al Ashekin',
    metaDescription: 'Generate an llms.txt and llms-full.txt file to feed high-quality, structured context to Large Language Models (LLMs) and AI search agents.',
    h1: 'Llms.txt Generator',
    intro: 'As AI search engines like ChatGPT Search, Perplexity, and Claude evolve, the emerging /llms.txt standard helps AI systems quickly discover, understand, and ingest your website documentation and primary value propositions in clean Markdown format.',
    howToUse: [
      'Enter your site name, domain, and a concise summary of what your business does.',
      'Add key resource links and primary documentation guides.',
      'Optional: Add secondary resources to be compiled into llms-full.txt.',
      'Download or copy your clean /llms.txt Markdown file.'
    ],
    features: [
      'Follows the official /llms.txt Markdown standard for AI web agents',
      'Generates core project overview, key docs, and secondary resource sections',
      'Formatted for high token efficiency and zero noise',
      'Compatible with Perplexity, Cursor, Anthropic, and OpenAI ingestion crawlers',
      'Instant download or copy'
    ],
    technicalExplanation: {
      heading: 'The /llms.txt Standard for Modern AI Engine Discovery',
      body: 'Similar to how robots.txt guides search spiders, llms.txt is a plain text Markdown file located at the root of a domain (example.com/llms.txt) that provides LLMs with curated, clean information about a website without having to scrape messy DOM layouts or parse JavaScript.',
      points: [
        'Token Optimization: Strips away navigation menus, footers, and scripts to save LLM context window tokens.',
        'Authoritative Context: Ensures AI assistants quote accurate facts, pricing models, and documentation.'
      ]
    },
    faqs: [
      {
        question: 'Where should I host the llms.txt file?',
        answer: 'Place it in the public root folder of your website so it is accessible at https://yourdomain.com/llms.txt.'
      }
    ],
    relatedToolSlugs: [
      'free-llms-txt-checker',
      'free-robots-txt-generator',
      'markdown-to-html',
      'sitemap-generator'
    ],
    legacyPaths: ['/free-llms-txt-generator/']
  },
  {
    id: 'llms-checker',
    name: 'Llms.txt Checker',
    slug: 'free-llms-txt-checker',
    path: '/tools/free-llms-txt-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/free-llms-txt-checker/',
    category: 'crawler',
    badge: 'AI Validator',
    shortDescription: 'Use our llms.txt validator to confirm your file is accessible and correctly set up. Free, reliable, and easy-to-use tool for webmasters.',
    seoTitle: 'Llms.txt Checker - Validate AI Context Files | Riad Al Ashekin',
    metaDescription: 'Validate your llms.txt Markdown syntax, header formats, and resource links. Ensure your website is optimized for AI search agents and LLM scrapers.',
    h1: 'Llms.txt Checker',
    intro: 'Validate your existing llms.txt file before deploying it live. Paste your Markdown content below to check header hierarchy, link formatting, blockquote summaries, and ensure AI search bots can parse your site context cleanly.',
    howToUse: [
      'Paste your llms.txt file content into the editor.',
      'Click Validate llms.txt to inspect structure and syntax.',
      'Check validation alerts for missing H1 titles, missing summaries, or invalid Markdown links.',
      'Export the corrected file ready for your web server.'
    ],
    features: [
      'Validates H1 project title and blockquote summary requirements',
      'Checks standard sections (Docs, Guides, Optional Resources)',
      'Verifies URL syntax inside Markdown links [Title](URL)',
      'Estimates token count and readability efficiency for LLMs',
      'One-click format cleanup'
    ],
    technicalExplanation: {
      heading: 'Formatting Rules for High AI Model Ingestion',
      body: 'AI model agents parse llms.txt looking for clear H2 sections such as ## Documentation, ## Core Concepts, and ## API References. Providing concise one-line descriptions following each link helps the agent determine which subpages to fetch.',
      points: [
        'Clean Markdown: Keep formatting simple with standard unordered lists.',
        'Relative vs Absolute URLs: Prefer absolute URLs so AI agents can fetch target documents directly.'
      ]
    },
    faqs: [
      {
        question: 'Is llms.txt recognized by search engines like Google?',
        answer: 'Google currently uses standard web crawling (Googlebot), but AI-driven search models and autonomous research agents actively query /llms.txt to synthesize company overviews.'
      }
    ],
    relatedToolSlugs: [
      'free-llms-txt-generator',
      'robots-txt-tester',
      'markdown-to-html',
      'html-to-markdown'
    ],
    legacyPaths: ['/free-llms-txt-checker/']
  }
];
