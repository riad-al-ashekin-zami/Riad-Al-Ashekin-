import { ToolRegistryItem } from './types';

export const urlTools: ToolRegistryItem[] = [
  {
    id: 'url-test',
    name: 'SEO Friendly URL Test',
    slug: 'seo-friendly-url-test',
    path: '/tools/seo-friendly-url-test/',
    canonicalUrl: 'https://riadalashekin.com/tools/seo-friendly-url-test/',
    category: 'url',
    badge: 'URL Audit',
    shortDescription: 'Check if your URLs are optimized for search engines. Instantly analyze structure, length, and keywords to improve SEO performance.',
    seoTitle: 'SEO Friendly URL Test - URL Structure & Optimization Checker | Riad Al Ashekin',
    metaDescription: 'Audit your website URLs for SEO friendliness. Check character length, hyphens, stop words, uppercase letters, directory depth, and query strings.',
    h1: 'SEO Friendly URL Test',
    intro: 'Clean, descriptive URLs improve search engine crawlability and boost user click-through rates. Paste any URL below to audit its structural health against Google\'s official URL structure guidelines.',
    howToUse: [
      'Enter or paste your webpage URL into the test box.',
      'Click Test URL to run the multi-point SEO audit.',
      'Review structural metrics: character length, directory folder depth, hyphen usage, and stop words.',
      'Inspect recommendations to streamline the URL before publishing.'
    ],
    features: [
      'Checks URL character length against the recommended 75-character limit',
      'Detects underscores, uppercase letters, and non-ASCII characters',
      'Flags unnecessary URL parameters, tracking tokens, and session IDs',
      'Audits folder directory depth (keeps under 3 levels)',
      'Provides copy-ready clean URL slug recommendations'
    ],
    technicalExplanation: {
      heading: 'Google URL Structure Best Practices',
      body: 'Google recommends simple, descriptive URLs with words separated by hyphens (-) rather than underscores (_). URLs should convey unambiguous topical meaning to users before they click, without excessive folder nesting or cryptic parameter IDs.',
      points: [
        'Hyphens vs Underscores: Google\'s crawler treats hyphens as word separators, while underscores are treated as word joiners (e.g. "seo-tools" = "seo tools", but "seo_tools" = "seotools").',
        'Lowercase Convention: Always use lowercase letters to avoid duplicate content canonical issues on case-sensitive web servers.'
      ]
    },
    examples: {
      title: 'URL Audit Comparison',
      input: 'Test: https://example.com/Cat_1/sub/item.php?id=9201&ref=tw',
      output: 'Score: 42/100 (Poor)\nIssues: Underscores, parameters, uppercase, excessive depth\nSuggested Clean URL: https://example.com/items/seo-tools/',
      notes: 'Human-readable URLs improve user trust and organic CTR.'
    },
    faqs: [
      {
        question: 'Should I change my old URLs if they aren\'t fully SEO friendly?',
        answer: 'Only if the existing URL is severely broken. Changing established URLs with existing backlinks requires 301 redirects, which can temporarily disrupt rankings. Prioritize clean URLs for new pages.'
      },
      {
        question: 'How long should an SEO-friendly URL be?',
        answer: 'Keep URLs concise, ideally between 50 and 75 characters. Short, focused URLs are easier to share, read, and remember.'
      }
    ],
    relatedToolSlugs: [
      'seo-slug-generator',
      'url-cleaner',
      'url-parser',
      'meta-title-description-checker'
    ],
    legacyPaths: ['/seo-friendly-url-test/']
  },
  {
    id: 'seo-slug-generator',
    name: 'SEO Slug Generator',
    slug: 'seo-slug-generator',
    path: '/tools/seo-slug-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/seo-slug-generator/',
    category: 'url',
    badge: 'URL Slug',
    shortDescription: 'Convert article titles and headlines into clean, lowercase, hyphenated URL slugs stripped of stop words and special characters.',
    seoTitle: 'SEO Slug Generator - Create Clean URL Permalinks | Riad Al Ashekin',
    metaDescription: 'Convert article titles into clean, lowercase, hyphenated SEO slugs. Remove stop words, strip punctuation, and create optimized permalinks in seconds.',
    h1: 'SEO Slug Generator',
    intro: 'Transform lengthy, messy article titles into concise, keyword-focused URL slugs. Remove unnecessary stop words, strip special characters, convert accents to standard Latin characters, and generate clean permalinks.',
    howToUse: [
      'Paste your article headline or webpage title in the input box.',
      'Choose options: Remove common stop words (the, of, and) and set maximum word count.',
      'Watch your clean, hyphenated URL slug generate in real-time.',
      'Copy the generated slug directly to your CMS permalink field.'
    ],
    features: [
      'Converts titles into lowercase, hyphen-separated permalinks',
      'Strips special characters, symbols, quotes, and punctuation',
      'Removes common English stop words for maximum keyword density',
      'Transliterates accented characters (é becomes e, ñ becomes n)',
      'Instant one-click copy'
    ],
    technicalExplanation: {
      heading: 'Anatomy of an Optimized URL Slug',
      body: 'A URL slug should be an economical representation of the page\'s core subject. Removing filler words like "how-to", "the", and "in-order-to" leaves the high-intent keywords intact, improving crawl clarity and making links easier to read on social platforms.',
      points: [
        'Keep It Under 5 Words: Aim for 3 to 5 descriptive words matching the primary search intent.',
        'Future-Proofing: Avoid placing specific years (e.g. 2025) into the permanent URL slug so you can update content annually without changing the link.'
      ]
    },
    examples: {
      title: 'Title to Slug Transformation',
      input: 'Title: "10 Simple Ways How You Can Improve Your SEO Rankings in 2026!"',
      output: 'Clean Slug: improve-seo-rankings',
      notes: 'Concise, timeless, and contains only the primary commercial keywords.'
    },
    faqs: [
      {
        question: 'Should I put dates or numbers in my URL slug?',
        answer: 'Avoid numbers and dates in permalinks whenever possible. If you write "10-seo-tips" and later expand the article to 25 tips, the URL becomes outdated.'
      }
    ],
    relatedToolSlugs: [
      'seo-friendly-url-test',
      'url-cleaner',
      'meta-title-description-checker',
      'utm-builder'
    ]
  },
  {
    id: 'utm-builder',
    name: 'UTM Builder',
    slug: 'utm-builder',
    path: '/tools/utm-builder/',
    canonicalUrl: 'https://riadalashekin.com/tools/utm-builder/',
    category: 'url',
    badge: 'Campaigns',
    shortDescription: 'Build clean, standard Google Analytics campaign tracking URLs with utm_source, utm_medium, utm_campaign, utm_term, and utm_content.',
    seoTitle: 'UTM Builder - Google Analytics Campaign URL Generator | Riad Al Ashekin',
    metaDescription: 'Generate custom campaign tracking links with UTM parameters for Google Analytics 4 (GA4). Track utm_source, medium, campaign, term, and content accurately.',
    h1: 'UTM Campaign URL Builder',
    intro: 'Accurately attribute marketing revenue in Google Analytics 4 (GA4). Build standardized campaign tracking URLs with utm_source, utm_medium, utm_campaign, utm_content, and utm_term parameters without syntax or encoding errors.',
    howToUse: [
      'Enter your destination Webpage URL (e.g. https://example.com/demo).',
      'Specify the Campaign Source (e.g. newsletter, linkedin, google).',
      'Specify the Campaign Medium (e.g. email, cpc, organic_social).',
      'Add Campaign Name, Term, or Content to differentiate ad creatives.',
      'Copy the generated tracking link or shortened version.'
    ],
    features: [
      'Generates fully validated GA4-compliant campaign URLs',
      'Enforces lowercase formatting to prevent fragmented analytics reporting',
      'Auto-encodes spaces and special characters safely',
      'Pre-populated dropdowns for standard marketing mediums (cpc, email, referral)',
      'One-click copy of tracking link'
    ],
    technicalExplanation: {
      heading: 'Standardizing UTM Conventions to Prevent Data Fragmentation',
      body: 'Google Analytics is strictly case-sensitive. If one team member tags a campaign as "LinkedIn" and another as "linkedin", GA4 will record them as two completely separate channels. Enforcing lowercase, hyphenated naming conventions preserves clean attribution data.',
      points: [
        'utm_source: The platform sending traffic (e.g. google, twitter, sub_newsletter).',
        'utm_medium: The marketing channel vehicle (e.g. cpc, email, social, affiliate).',
        'utm_campaign: The strategic initiative name (e.g. spring_launch_2026).'
      ]
    },
    faqs: [
      {
        question: 'Should I use UTM parameters on internal website links?',
        answer: 'NEVER use UTM tracking tags on internal links. Doing so resets the user\'s active analytics session and overwrites the original inbound marketing attribution.'
      }
    ],
    relatedToolSlugs: [
      'url-cleaner',
      'url-parser',
      'seo-slug-generator',
      'conversion-rate-calculator'
    ]
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder',
    slug: 'url-encoder',
    path: '/tools/url-encoder/',
    canonicalUrl: 'https://riadalashekin.com/tools/url-encoder/',
    category: 'url',
    badge: 'Percent-Encode',
    shortDescription: 'Safely encode special characters, spaces, and non-ASCII symbols into RFC 3986 percent-encoded URI parameters.',
    seoTitle: 'URL Encoder - Online Percent-Encoding Tool | Riad Al Ashekin',
    metaDescription: 'Safely encode special characters, symbols, and query parameters into RFC 3986 percent-encoded strings. Prevent broken links and API parameter errors.',
    h1: 'URL Encoder Tool',
    intro: 'Prevent broken hyperlinks and API request failures by safely percent-encoding special characters, spaces, symbols, and non-ASCII strings into standard RFC 3986 compliant URI formats.',
    howToUse: [
      'Paste your raw URL string, query parameter, or text into the input field.',
      'Choose encoding mode: encodeURI (full URL) or encodeURIComponent (parameter value).',
      'Review the percent-encoded output in real-time.',
      'Copy the encoded string with one click.'
    ],
    features: [
      'Supports standard RFC 3986 percent-encoding',
      'Differentiates between full URI encoding and parameter component encoding',
      'Safely encodes spaces as %20, ampersands as %26, and slashes as %2F',
      'Supports UTF-8 multi-byte characters and international alphabets',
      'Instant copy and reverse decode toggle'
    ],
    technicalExplanation: {
      heading: 'The Mechanics of Percent-Encoding (RFC 3986)',
      body: 'Certain characters are reserved in URI syntax because they serve structural purposes (such as ?, &, =, /, and #). When these characters appear as literal values within query parameters, they must be represented as a percent sign (%) followed by two hexadecimal digits.',
      points: [
        'encodeURI vs encodeURIComponent: Use encodeURI for full URLs to preserve protocol slashes; use encodeURIComponent for individual query parameter values.'
      ]
    },
    faqs: [
      {
        question: 'Why do spaces become %20 or + in URLs?',
        answer: 'In standard percent-encoding, a space is encoded as %20. In application/x-www-form-urlencoded query strings (like form submissions), spaces are often represented as a plus (+).'
      }
    ],
    relatedToolSlugs: [
      'url-decoder',
      'url-parser',
      'url-cleaner',
      'seo-friendly-url-test'
    ]
  },
  {
    id: 'url-decoder',
    name: 'URL Decoder',
    slug: 'url-decoder',
    path: '/tools/url-decoder/',
    canonicalUrl: 'https://riadalashekin.com/tools/url-decoder/',
    category: 'url',
    badge: 'Decode URI',
    shortDescription: 'Decode obfuscated, percent-encoded (%20, %2F, %3F) query parameters back into human-readable plain text and URLs.',
    seoTitle: 'URL Decoder - Decode Percent-Encoded URLs & Strings | Riad Al Ashekin',
    metaDescription: 'Decode percent-encoded strings (%20, %2F, %3F) back into readable plain text. Inspect tracking links, API parameters, and redirect destinations.',
    h1: 'URL Decoder Tool',
    intro: 'Turn cryptic, percent-encoded strings (%20, %26, %3F) back into clean, readable text. Easily inspect query parameters, reveal redirect destinations, and troubleshoot encoded webhook payloads.',
    howToUse: [
      'Paste your encoded URL or string into the decoder box.',
      'Click Decode URL to convert percent sequences into human-readable characters.',
      'Inspect the clean, decoded destination address.',
      'Copy the output or export it to your clipboard.'
    ],
    features: [
      'Decodes all RFC 3986 percent-encoded character sequences',
      'Converts + signs to spaces when decoding query string payloads',
      'Handles nested double-encoded URL strings gracefully',
      'Supports UTF-8 international characters and emojis',
      'Real-time instant decoding'
    ],
    technicalExplanation: {
      heading: 'Debugging Double-Encoded URLs',
      body: 'A common developer bug occurs when a parameter is encoded twice by accident, turning a space into %20, and then turning the % into %2520. Identifying and fixing double-encoding errors restores broken deep links and tracking scripts.',
      points: [
        'Hexadecimal Decoding: Reverses %XX pairs into their corresponding ASCII or UTF-8 character codes.'
      ]
    },
    faqs: [
      {
        question: 'Can this tool decode encoded redirect URLs in Google search results?',
        answer: 'Yes! If you copy a Google redirect link (google.com/url?q=...), pasting the parameter into this decoder reveals the actual destination URL.'
      }
    ],
    relatedToolSlugs: [
      'url-encoder',
      'url-parser',
      'url-cleaner',
      'seo-friendly-url-test'
    ]
  },
  {
    id: 'url-parser',
    name: 'URL Parser',
    slug: 'url-parser',
    path: '/tools/url-parser/',
    canonicalUrl: 'https://riadalashekin.com/tools/url-parser/',
    category: 'url',
    badge: 'Inspector',
    shortDescription: 'Break down any complex URL into protocol, host, port, path segments, search parameters, hash fragments, and domain extension.',
    seoTitle: 'URL Parser - Break Down URLs into Components | Riad Al Ashekin',
    metaDescription: 'Parse any URL into its component parts: Protocol, Host, Domain, Port, Path, Query Parameters, and Hash Fragment. Inspect link architecture easily.',
    h1: 'URL Parser & Inspector',
    intro: 'Deconstruct complex, nested web addresses into clear architectural components. Inspect protocols, subdomains, root domains, port numbers, path segments, individual query key-value parameters, and hash fragments.',
    howToUse: [
      'Paste any complex URL into the input field.',
      'Click Parse URL to decompose the link.',
      'Review the structured table breaking down Protocol, Host, Path, and Parameters.',
      'Inspect each query parameter as an individual key-value pair.'
    ],
    features: [
      'Separates Protocol (http/https), Subdomain, Root Domain, and TLD',
      'Breaks URL Path into distinct directory segments (/category/subcategory)',
      'Decodes and lists every query parameter as a discrete key-value pair',
      'Displays hash fragments (#section) and port designations',
      'Export parsed parameter tables in JSON or CSV format'
    ],
    technicalExplanation: {
      heading: 'Standard URL Anatomy according to WHATWG URL Standards',
      body: 'Modern web standards decompose a URL into several distinct conceptual buckets: the scheme/protocol, the authority (username, password, host, port), the path (path segments), the query string (search params), and the fragment identifier.',
      points: [
        'Root vs Subdomain: Differentiates between blog.example.com and example.com for DNS and cookie scoping.',
        'Parameter Isolation: Isolates marketing tracking tags from functional application routing params.'
      ]
    },
    faqs: [
      {
        question: 'Do search engines crawl URL hash fragments (#)?',
        answer: 'Search engines generally ignore everything after the hash fragment (#) because fragments are processed on the client side to scroll to a specific section.'
      }
    ],
    relatedToolSlugs: [
      'url-cleaner',
      'seo-friendly-url-test',
      'url-encoder',
      'utm-builder'
    ]
  },
  {
    id: 'url-cleaner',
    name: 'URL Cleaner',
    slug: 'url-cleaner',
    path: '/tools/url-cleaner/',
    canonicalUrl: 'https://riadalashekin.com/tools/url-cleaner/',
    category: 'url',
    badge: 'Strip Tracking',
    shortDescription: 'Strip tracking garbage (fbclid, gclid, utm_*, ref) and query bloat from links to restore clean, canonical destination URLs.',
    seoTitle: 'URL Cleaner - Strip Tracking Parameters & Query Bloat | Riad Al Ashekin',
    metaDescription: 'Clean URLs by stripping UTM parameters, fbclid, gclid, igshid, ref tags, and query bloat. Restore canonical links for sharing and backlink building.',
    h1: 'URL Cleaner & Parameter Stripper',
    intro: 'Remove bloated tracking tokens, social click IDs, and session parameters from links before sharing or publishing. Strip utm_source, fbclid, gclid, igshid, and ref tags to restore clean, permanent canonical URLs.',
    howToUse: [
      'Paste a messy link full of tracking parameters into the input box.',
      'Select which parameters to remove (Default strips all known marketing tokens).',
      'Inspect the clean, canonical link in the output box.',
      'Copy the clean URL with one click.'
    ],
    features: [
      'Strips Google Analytics UTM parameters (utm_source, utm_medium, utm_campaign)',
      'Removes social advertising click IDs (fbclid, gclid, ttclid, msclkid, igshid)',
      'Strips affiliate ref tokens and session tracking hashes',
      'Preserves essential application query parameters',
      'Bulk URL cleaning support for lists'
    ],
    technicalExplanation: {
      heading: 'Canonical URL Cleanliness and Link Equity Consolidation',
      body: 'When external websites link to your content with arbitrary tracking parameters attached, search engines can mistakenly index multiple versions of the same page unless canonical tags are properly enforced. Stripping tracking garbage preserves clean links that pass equity cleanly.',
      points: [
        'Clean Sharing: Prevents leaking private advertising campaign names or audience IDs when sharing links publicly.'
      ]
    },
    faqs: [
      {
        question: 'Does stripping UTM parameters break the webpage?',
        answer: 'No. UTM parameters are purely for analytics reporting and have no effect on webpage routing or content rendering.'
      }
    ],
    relatedToolSlugs: [
      'url-parser',
      'seo-friendly-url-test',
      'seo-slug-generator',
      'utm-builder'
    ]
  }
];
