export interface SeoToolItem {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: 'serp' | 'crawler' | 'schema' | 'content' | 'url' | 'calculator' | 'image' | 'dev' | 'utility';
  badge?: string;
  isInteractiveWidget?: boolean;
}

export const ALL_SEO_TOOLS_DATA: SeoToolItem[] = [
  // --- Existing Core Tools with Dedicated Pages ---
  {
    id: 'meta-checker',
    title: 'Meta Title & Description Checker',
    description: "Check if your meta titles and descriptions are the right length and optimized for search engines. Ensure they're attractive, relevant, and within Google's pixel limit.",
    slug: '/meta-title-description-checker/',
    category: 'serp',
    badge: 'Popular'
  },
  {
    id: 'robots-tester',
    title: 'Robots.txt Tester / Checker',
    description: "Test your robots.txt file to see which URLs are blocked from search engine crawlers. Verify if your site is properly guiding bots and protecting sensitive pages from indexing.",
    slug: '/robots-txt-tester/',
    category: 'crawler',
    badge: 'Crawl Test'
  },
  {
    id: 'robots-generator',
    title: 'Robots.txt Generator',
    description: "Easily create a custom robots.txt file to control how search engines crawl your site. Prevent indexing of private pages and guide bots to important content with no coding needed.",
    slug: '/free-robots-txt-generator/',
    category: 'crawler',
    badge: 'Generator'
  },
  {
    id: 'seo-roi-calc',
    title: 'SEO ROI Calculator',
    description: "Estimate the return on your SEO investment with this simple calculator. Input traffic, conversion rate, and average order value to see how SEO impacts your revenue over time.",
    slug: '/seo-roi-calculator/',
    category: 'calculator',
    badge: 'Financial'
  },
  {
    id: 'local-seo-calc',
    title: 'Local SEO Pricing Calculator',
    description: "Calculate expected investment and service tier pricing for localized business campaigns. Tailor monthly estimates based on industry competitiveness and target locations.",
    slug: '/local-seo-pricing-calculator/',
    category: 'calculator',
    badge: 'Pricing'
  },
  {
    id: 'chrome-ext',
    title: 'Meta Data Checker Chrome Extension',
    description: "Audit on-page SEO meta tags, canonical links, and social OpenGraph tags directly in your browser with 1 click. Zero DevTools required.",
    slug: '/meta-data-checker-chrome-extension/',
    category: 'serp',
    badge: 'Extension'
  },
  {
    id: 'meta-length-checker',
    title: 'Meta Title & Description Length Checker',
    description: "A simple tool to check meta title and description lengths with live Google snippet previews—perfect for SEO audits and optimizing search results.",
    slug: '/meta-title-description-length-checker/',
    category: 'serp',
    badge: 'SERP Preview'
  },
  {
    id: 'sitemap-tester',
    title: 'XML Sitemap Tester & Checker',
    description: "A user-friendly tool to test and validate your XML sitemap with live previews—ideal for detecting errors, improving SEO, and ensuring optimal crawlability for search engines.",
    slug: '/sitemap-tester/',
    category: 'crawler',
    badge: 'Validator'
  },
  {
    id: 'llms-generator',
    title: 'Llms.txt Generator',
    description: "Easily generate an llms.txt file to manage AI crawler access on your site. Control permissions, protect content, and ensure compliance in seconds.",
    slug: '/free-llms-txt-generator/',
    category: 'crawler',
    badge: 'AI Crawler'
  },
  {
    id: 'llms-checker',
    title: 'Llms.txt Checker',
    description: "Use our llms.txt validator to confirm your file is accessible and correctly set up. Free, reliable, and easy-to-use tool for webmasters.",
    slug: '/free-llms-txt-checker/',
    category: 'crawler',
    badge: 'AI Validator'
  },
  {
    id: 'webp-to-jpg',
    title: 'WebP to JPG Converter',
    description: "Quickly convert WebP images to high-quality JPG format. Fast, secure, and easy-to-use—perfect for compatibility across all platforms and devices.",
    slug: '/webp-to-jpg-converter/',
    category: 'image',
    badge: 'Converter'
  },
  {
    id: 'webp-to-png',
    title: 'WebP to PNG Converter',
    description: "Convert your WebP files into transparent PNGs in seconds. Maintain image quality while ensuring universal format support for web and design needs.",
    slug: '/webp-to-png-converter/',
    category: 'image',
    badge: 'Converter'
  },
  {
    id: 'image-to-jpg',
    title: 'Image to JPG Converter',
    description: "Easily transform any image into JPG format. Simple, reliable, and optimized for sharing, storage, or use across websites and applications.",
    slug: '/image-to-jpg-converter/',
    category: 'image',
    badge: 'Converter'
  },
  {
    id: 'image-to-png',
    title: 'Image to PNG Converter',
    description: "Turn images into crisp PNGs with just one click. Preserve transparency and clarity for web, design, and professional projects.",
    slug: '/image-to-png-converter/',
    category: 'image',
    badge: 'Converter'
  },
  {
    id: 'url-test',
    title: 'SEO Friendly URL Test',
    description: "Check if your URLs are optimized for search engines. Instantly analyze structure, length, and keywords to improve SEO performance.",
    slug: '/seo-friendly-url-test/',
    category: 'url',
    badge: 'URL Audit'
  },
  {
    id: 'structured-data',
    title: 'Structured Data Test',
    description: "Validate and test your structured data with ease. Ensure schema markup is correct for better search engine visibility and rich results.",
    slug: '/structured-data-test/',
    category: 'schema',
    badge: 'Schema'
  },
  {
    id: 'comma-separator',
    title: 'Comma Separator Tool',
    description: "Quickly format text or numbers with commas. Ideal for data entry, lists, and making information clear and easy to read.",
    slug: '/comma-separator/',
    category: 'dev',
    badge: 'Formatter'
  },
  {
    id: 'character-counter',
    title: 'Character Counter Tool',
    description: "Count characters, words, and spaces in your text instantly. Perfect for SEO, content writing, and social media post optimization.",
    slug: '/character-counter/',
    category: 'content',
    badge: 'Text Tool'
  },

  // --- Sitemaps & Technical Crawlers ---
  {
    id: 'sitemap-generator',
    title: 'Sitemap Generator',
    description: "Generate compliant XML sitemaps with custom change frequencies, priorities, and clean lastmod tags ready for Google Search Console.",
    slug: 'tool:sitemap-generator',
    category: 'crawler',
    badge: 'XML Tool',
    isInteractiveWidget: true
  },
  {
    id: 'sitemap-url-extractor',
    title: 'Sitemap URL Extractor',
    description: "Paste an XML sitemap or URL list to instantly extract, count, and export all clean URLs without XML tags or metadata.",
    slug: 'tool:sitemap-url-extractor',
    category: 'crawler',
    badge: 'Extraction',
    isInteractiveWidget: true
  },
  {
    id: 'hreflang-generator',
    title: 'Hreflang Generator',
    description: "Generate accurate multilingual and multi-regional hreflang annotations for international SEO. Supports ISO language and country codes.",
    slug: 'tool:hreflang-generator',
    category: 'crawler',
    badge: 'i18n SEO',
    isInteractiveWidget: true
  },

  // --- On-Page HTML & Heading Checkers ---
  {
    id: 'heading-checker',
    title: 'H1/H2/H3 Heading Checker',
    description: "Paste raw HTML to instantly map heading hierarchy, detect missing H1 tags, identify multiple H1s, and check heading order.",
    slug: 'tool:heading-checker',
    category: 'serp',
    badge: 'HTML Paste',
    isInteractiveWidget: true
  },
  {
    id: 'heading-structure-analyzer',
    title: 'Heading Structure Analyzer',
    description: "Deep dive into your document outline. Identifies skipped heading levels (e.g. H2 to H4) and provides semantic recommendations.",
    slug: 'tool:heading-structure-analyzer',
    category: 'content',
    badge: 'Hierarchy',
    isInteractiveWidget: true
  },
  {
    id: 'image-alt-checker',
    title: 'Image Alt Text Checker',
    description: "Scan pasted HTML markup to detect missing, empty, or duplicate image alt attributes. Ensure 100% accessibility and image SEO.",
    slug: 'tool:image-alt-checker',
    category: 'serp',
    badge: 'HTML Paste',
    isInteractiveWidget: true
  },
  {
    id: 'og-checker',
    title: 'Open Graph Checker',
    description: "Paste HTML to inspect og:title, og:description, og:image, and og:url tags. View live social card previews for Facebook and LinkedIn.",
    slug: 'tool:og-checker',
    category: 'serp',
    badge: 'Social SEO',
    isInteractiveWidget: true
  },
  {
    id: 'twitter-card-checker',
    title: 'Twitter/X Card Checker',
    description: "Validate twitter:card, twitter:title, twitter:image, and player tags from HTML. Preview standard and summary_large_image cards.",
    slug: 'tool:twitter-card-checker',
    category: 'serp',
    badge: 'Social SEO',
    isInteractiveWidget: true
  },
  {
    id: 'robots-meta-checker',
    title: 'Robots Meta Tag Checker',
    description: "Paste HTML head tags to inspect robots directives (index, noindex, follow, nofollow, noarchive, nosnippet) and avoid accidental de-indexing.",
    slug: 'tool:robots-meta-checker',
    category: 'serp',
    badge: 'HTML Directives',
    isInteractiveWidget: true
  },
  {
    id: 'noindex-checker',
    title: 'Noindex Checker',
    description: "Quickly verify whether a page or HTML snippet contains active noindex meta tags or X-Robots-Tag headers blocking search bots.",
    slug: 'tool:noindex-checker',
    category: 'serp',
    badge: 'Index Audit',
    isInteractiveWidget: true
  },
  {
    id: 'nofollow-link-checker',
    title: 'Nofollow Link Checker',
    description: "Audit link attributes across pasted HTML. Differentiates between dofollow, rel='nofollow', rel='sponsored', and rel='ugc'.",
    slug: 'tool:nofollow-link-checker',
    category: 'serp',
    badge: 'Link Attributes',
    isInteractiveWidget: true
  },
  {
    id: 'internal-link-checker',
    title: 'Internal Link Checker',
    description: "Analyze internal link architecture from HTML code. Categorizes relative URLs, detects anchors, and calculates internal link density.",
    slug: 'tool:internal-link-checker',
    category: 'serp',
    badge: 'HTML Paste',
    isInteractiveWidget: true
  },
  {
    id: 'external-link-checker',
    title: 'External Link Checker',
    description: "Extract and inspect all outbound links from pasted HTML. Validates domains, target attributes, and security flags (noopener/noreferrer).",
    slug: 'tool:external-link-checker',
    category: 'serp',
    badge: 'HTML Paste',
    isInteractiveWidget: true
  },
  {
    id: 'anchor-text-analyzer',
    title: 'Anchor Text Analyzer',
    description: "Analyze anchor text distribution across your links. Identifies over-optimized exact match anchors and provides natural link suggestions.",
    slug: 'tool:anchor-text-analyzer',
    category: 'serp',
    badge: 'Anchor Audit',
    isInteractiveWidget: true
  },
  {
    id: 'serp-snippet-preview',
    title: 'SERP Snippet Preview',
    description: "Preview how your page will appear in Google desktop and mobile search results with real-time character count and pixel truncation warnings.",
    slug: 'tool:serp-snippet-preview',
    category: 'serp',
    badge: 'Live Preview',
    isInteractiveWidget: true
  },

  // --- Schema & Structured Data ---
  {
    id: 'schema-markup-generator',
    title: 'Schema Markup Generator',
    description: "Universal JSON-LD generator for WebSite, Person, Event, Course, and custom entities with clean schema.org compliance.",
    slug: 'tool:schema-markup-generator',
    category: 'schema',
    badge: 'JSON-LD',
    isInteractiveWidget: true
  },
  {
    id: 'schema-validator',
    title: 'Schema Validator',
    description: "Validate JSON-LD structured data syntax and verify required properties against official Google Rich Results and Schema.org specifications.",
    slug: 'tool:schema-validator',
    category: 'schema',
    badge: 'Syntax Check',
    isInteractiveWidget: true
  },
  {
    id: 'faq-schema-generator',
    title: 'FAQ Schema Generator',
    description: "Build clean, error-free FAQPage JSON-LD structured data. Add multiple question-and-answer pairs and copy validated code instantly.",
    slug: 'tool:faq-schema-generator',
    category: 'schema',
    badge: 'FAQPage',
    isInteractiveWidget: true
  },
  {
    id: 'breadcrumb-schema-generator',
    title: 'Breadcrumb Schema Generator',
    description: "Generate BreadcrumbList JSON-LD markup to help Google display hierarchical breadcrumb paths in search result snippets.",
    slug: 'tool:breadcrumb-schema-generator',
    category: 'schema',
    badge: 'Breadcrumbs',
    isInteractiveWidget: true
  },
  {
    id: 'local-business-schema',
    title: 'Local Business Schema Generator',
    description: "Create rich LocalBusiness JSON-LD markup with address, geo-coordinates, opening hours, phone number, and accepted payments.",
    slug: 'tool:local-business-schema',
    category: 'schema',
    badge: 'Local SEO',
    isInteractiveWidget: true
  },
  {
    id: 'organization-schema-generator',
    title: 'Organization Schema Generator',
    description: "Generate Organization schema with logo, official website, sameAs social links, founder details, and contact points.",
    slug: 'tool:organization-schema-generator',
    category: 'schema',
    badge: 'Knowledge Graph',
    isInteractiveWidget: true
  },
  {
    id: 'article-schema-generator',
    title: 'Article Schema Generator',
    description: "Generate Article, NewsArticle, and BlogPosting JSON-LD with author, publisher, datePublished, and dateModified attributes.",
    slug: 'tool:article-schema-generator',
    category: 'schema',
    badge: 'Editorial',
    isInteractiveWidget: true
  },
  {
    id: 'product-schema-generator',
    title: 'Product Schema Generator',
    description: "Generate Product and Offer schema markup with price, currency, availability, rating, review count, and SKU for eCommerce.",
    slug: 'tool:product-schema-generator',
    category: 'schema',
    badge: 'eCommerce',
    isInteractiveWidget: true
  },

  // --- Content & Keyword Tools ---
  {
    id: 'keyword-density-checker',
    title: 'Keyword Density Checker',
    description: "Paste your article content to calculate 1-word, 2-word, and 3-word phrase density percentages to prevent keyword stuffing.",
    slug: 'tool:keyword-density-checker',
    category: 'content',
    badge: 'Content Audit',
    isInteractiveWidget: true
  },
  {
    id: 'keyword-prominence-checker',
    title: 'Keyword Prominence Checker',
    description: "Measure where your target keywords appear: title, first 100 words, subheadings, and concluding paragraph for optimal topical weight.",
    slug: 'tool:keyword-prominence-checker',
    category: 'content',
    badge: 'Topical Weight',
    isInteractiveWidget: true
  },
  {
    id: 'keyword-frequency-checker',
    title: 'Keyword Frequency Checker',
    description: "Count raw term frequencies, unique words, and lexical diversity across long-form blog articles and technical documentation.",
    slug: 'tool:keyword-frequency-checker',
    category: 'content',
    badge: 'Text Metrics',
    isInteractiveWidget: true
  },
  {
    id: 'readability-checker',
    title: 'Readability Checker',
    description: "Calculate Flesch Reading Ease score, Flesch-Kincaid Grade Level, average sentence length, and syllable counts for clear user engagement.",
    slug: 'tool:readability-checker',
    category: 'content',
    badge: 'Flesch Score',
    isInteractiveWidget: true
  },
  {
    id: 'word-counter-pro',
    title: 'Word Counter',
    description: "Live real-time word counter, character counter (with and without spaces), reading time estimate, and speaking time calculator.",
    slug: 'tool:word-counter-pro',
    category: 'content',
    badge: 'Real-time',
    isInteractiveWidget: true
  },
  {
    id: 'keyword-combiner',
    title: 'Keyword Combiner',
    description: "Combine multiple lists of keywords, prefixes, locations, and service modifiers to generate hundreds of commercial search phrases.",
    slug: 'tool:keyword-combiner',
    category: 'content',
    badge: 'Permutations',
    isInteractiveWidget: true
  },
  {
    id: 'keyword-clustering-tool',
    title: 'Keyword Clustering Tool',
    description: "Group related keywords into topical silos and content clusters based on shared modifiers, stems, and search intention.",
    slug: 'tool:keyword-clustering-tool',
    category: 'content',
    badge: 'Topic Silos',
    isInteractiveWidget: true
  },
  {
    id: 'search-intent-classifier',
    title: 'Search Intent Classifier',
    description: "Classify keyword lists into Informational, Navigational, Commercial Investigation, or Transactional intent automatically.",
    slug: 'tool:search-intent-classifier',
    category: 'content',
    badge: 'Intent AI',
    isInteractiveWidget: true
  },
  {
    id: 'long-tail-keyword-generator',
    title: 'Long-Tail Keyword Generator',
    description: "Expand seed keywords into low-competition, highly targeted long-tail search queries with buying intent modifiers.",
    slug: 'tool:long-tail-keyword-generator',
    category: 'content',
    badge: 'Long-Tail',
    isInteractiveWidget: true
  },
  {
    id: 'question-keyword-generator',
    title: 'Question Keyword Generator',
    description: "Generate questions (Who, What, Where, When, Why, How, Can, Is) around your target topic to capture People Also Ask and voice search.",
    slug: 'tool:question-keyword-generator',
    category: 'content',
    badge: 'PAA Finder',
    isInteractiveWidget: true
  },
  {
    id: 'keyword-modifier-generator',
    title: 'Keyword Modifier Generator',
    description: "Add commercial modifiers like 'best', 'top', 'cheap', 'near me', 'review', and 'comparison' to multiply keyword discovery.",
    slug: 'tool:keyword-modifier-generator',
    category: 'content',
    badge: 'Commercial',
    isInteractiveWidget: true
  },
  {
    id: 'location-keyword-generator',
    title: 'Location Keyword Generator',
    description: "Generate local SEO keyword variants combining your primary service with targeted cities, states, neighborhoods, and postcodes.",
    slug: 'tool:location-keyword-generator',
    category: 'content',
    badge: 'Local SEO',
    isInteractiveWidget: true
  },
  {
    id: 'city-service-keyword-generator',
    title: 'City + Service Keyword Generator',
    description: "Rapidly pair a list of services with a list of cities/towns to create structured localized landing page keyword targets.",
    slug: 'tool:city-service-keyword-generator',
    category: 'content',
    badge: 'Bulk Local',
    isInteractiveWidget: true
  },
  {
    id: 'seo-content-analyzer',
    title: 'SEO Content Analyzer',
    description: "Comprehensive on-page content review: evaluates word count, heading balance, paragraph length, keyword presence, and readability.",
    slug: 'tool:seo-content-analyzer',
    category: 'content',
    badge: 'Deep Audit',
    isInteractiveWidget: true
  },
  {
    id: 'duplicate-content-checker',
    title: 'Duplicate Content Checker',
    description: "Compare two text articles side-by-side to identify duplicate paragraphs, matching phrases, and calculate overlap percentage.",
    slug: 'tool:duplicate-content-checker',
    category: 'content',
    badge: 'Comparison',
    isInteractiveWidget: true
  },
  {
    id: 'text-similarity-checker',
    title: 'Text Similarity Checker',
    description: "Calculate mathematical similarity between two text snippets using Levenshtein distance and Jaccard similarity index.",
    slug: 'tool:text-similarity-checker',
    category: 'content',
    badge: 'Cosine/Jaccard',
    isInteractiveWidget: true
  },
  {
    id: 'word-frequency-analyzer',
    title: 'Word Frequency Analyzer',
    description: "Generate a full frequency histogram of all words in a document, filtering out common stop words to highlight core subject terms.",
    slug: 'tool:word-frequency-analyzer',
    category: 'content',
    badge: 'Histogram',
    isInteractiveWidget: true
  },
  {
    id: 'text-diff-checker',
    title: 'Text Diff Checker',
    description: "Highlight exact character, word, and line additions, deletions, and modifications between two versions of copy.",
    slug: 'tool:text-diff-checker',
    category: 'content',
    badge: 'Diff Viewer',
    isInteractiveWidget: true
  },

  // --- URL & UTM Tracking Tools ---
  {
    id: 'seo-slug-generator',
    title: 'SEO Slug Generator',
    description: "Convert article titles and headlines into clean, lowercase, hyphenated URL slugs stripped of stop words and special characters.",
    slug: 'tool:seo-slug-generator',
    category: 'url',
    badge: 'URL Slug',
    isInteractiveWidget: true
  },
  {
    id: 'utm-builder',
    title: 'UTM Builder',
    description: "Build clean, standard Google Analytics campaign tracking URLs with utm_source, utm_medium, utm_campaign, utm_term, and utm_content.",
    slug: 'tool:utm-builder',
    category: 'url',
    badge: 'Campaigns',
    isInteractiveWidget: true
  },
  {
    id: 'url-encoder',
    title: 'URL Encoder',
    description: "Safely encode special characters, spaces, and non-ASCII symbols into RFC 3986 percent-encoded URI parameters.",
    slug: 'tool:url-encoder',
    category: 'url',
    badge: 'Percent-Encode',
    isInteractiveWidget: true
  },
  {
    id: 'url-decoder',
    title: 'URL Decoder',
    description: "Decode obfuscated, percent-encoded (%20, %2F, %3F) query parameters back into human-readable plain text and URLs.",
    slug: 'tool:url-decoder',
    category: 'url',
    badge: 'Decode URI',
    isInteractiveWidget: true
  },
  {
    id: 'url-parser',
    title: 'URL Parser',
    description: "Break down any complex URL into protocol, host, port, path segments, search parameters, hash fragments, and domain extension.",
    slug: 'tool:url-parser',
    category: 'url',
    badge: 'Inspector',
    isInteractiveWidget: true
  },
  {
    id: 'url-cleaner',
    title: 'URL Cleaner',
    description: "Strip tracking garbage (fbclid, gclid, utm_*, ref) and query bloat from links to restore clean, canonical destination URLs.",
    slug: 'tool:url-cleaner',
    category: 'url',
    badge: 'Strip Tracking',
    isInteractiveWidget: true
  },

  // --- Calculators & ROI ---
  {
    id: 'seo-traffic-calculator',
    title: 'SEO Traffic Calculator',
    description: "Estimate monthly organic search traffic based on target keyword search volume, expected rankings, and estimated click-through rates.",
    slug: 'tool:seo-traffic-calculator',
    category: 'calculator',
    badge: 'Forecasting',
    isInteractiveWidget: true
  },
  {
    id: 'organic-ctr-calculator',
    title: 'Organic CTR Calculator',
    description: "Model expected CTR curves across Google positions 1 through 10 based on industry benchmarks and featured snippet adjustments.",
    slug: 'tool:organic-ctr-calculator',
    category: 'calculator',
    badge: 'CTR Curve',
    isInteractiveWidget: true
  },
  {
    id: 'conversion-rate-calculator',
    title: 'Conversion Rate Calculator',
    description: "Calculate your organic conversion rate from total visitors and goal completions, with statistical significance checks.",
    slug: 'tool:conversion-rate-calculator',
    category: 'calculator',
    badge: 'CRO Metrics',
    isInteractiveWidget: true
  },
  {
    id: 'roas-calculator',
    title: 'ROAS Calculator',
    description: "Calculate Return on Ad Spend (ROAS) and compare organic inbound profitability against paid media acquisition costs.",
    slug: 'tool:roas-calculator',
    category: 'calculator',
    badge: 'Financial',
    isInteractiveWidget: true
  },
  {
    id: 'seo-growth-calculator',
    title: 'SEO Growth Calculator',
    description: "Forecast compound organic growth over 6, 12, and 24 months factoring in monthly publishing cadence and domain authority gains.",
    slug: 'tool:seo-growth-calculator',
    category: 'calculator',
    badge: 'Compounding',
    isInteractiveWidget: true
  },

  // --- Image & Media Tools ---
  {
    id: 'image-compressor',
    title: 'Image Compressor',
    description: "Client-side image compression: reduce file sizes of JPEG, PNG, and WebP images while preserving high visual fidelity.",
    slug: 'tool:image-compressor',
    category: 'image',
    badge: 'Core Web Vitals',
    isInteractiveWidget: true
  },
  {
    id: 'avif-converter',
    title: 'AVIF Converter',
    description: "Convert photos into next-gen AVIF format for up to 50% smaller payloads than WebP, speeding up LCP performance.",
    slug: 'tool:avif-converter',
    category: 'image',
    badge: 'Next-Gen',
    isInteractiveWidget: true
  },
  {
    id: 'jpg-to-webp',
    title: 'JPG → WebP',
    description: "Convert standard JPG photographs into modern WebP format with custom compression quality settings.",
    slug: 'tool:jpg-to-webp',
    category: 'image',
    badge: 'Converter',
    isInteractiveWidget: true
  },
  {
    id: 'png-to-webp',
    title: 'PNG → WebP',
    description: "Convert transparent PNG illustrations and graphics into ultra-lightweight WebP files with alpha channel preservation.",
    slug: 'tool:png-to-webp',
    category: 'image',
    badge: 'Converter',
    isInteractiveWidget: true
  },
  {
    id: 'jpg-to-avif',
    title: 'JPG → AVIF',
    description: "Upgrade legacy JPG images to AVIF format for cutting-edge compression efficiency on modern web browsers.",
    slug: 'tool:jpg-to-avif',
    category: 'image',
    badge: 'Next-Gen',
    isInteractiveWidget: true
  },
  {
    id: 'png-to-avif',
    title: 'PNG → AVIF',
    description: "Convert transparent PNG graphics directly into AVIF format with superior color banding prevention.",
    slug: 'tool:png-to-avif',
    category: 'image',
    badge: 'Next-Gen',
    isInteractiveWidget: true
  },
  {
    id: 'image-resizer',
    title: 'Image Resizer',
    description: "Resize image dimensions (width and height in pixels) maintaining exact aspect ratio, ideal for responsive srcset setups.",
    slug: 'tool:image-resizer',
    category: 'image',
    badge: 'Dimensions',
    isInteractiveWidget: true
  },
  {
    id: 'image-dimension-checker',
    title: 'Image Dimension Checker',
    description: "Inspect uploaded images to verify exact pixel dimensions, aspect ratio, color depth, and MIME type.",
    slug: 'tool:image-dimension-checker',
    category: 'image',
    badge: 'Inspector',
    isInteractiveWidget: true
  },
  {
    id: 'exif-remover',
    title: 'EXIF Metadata Remover',
    description: "Strip sensitive camera EXIF data (GPS coordinates, device model, camera settings, timestamp) from photos before web upload.",
    slug: 'tool:exif-remover',
    category: 'image',
    badge: 'Privacy',
    isInteractiveWidget: true
  },
  {
    id: 'image-seo-analyzer',
    title: 'Image SEO Analyzer',
    description: "Audit images from pasted HTML or uploaded files for alt text quality, responsive sizing, format optimization, and descriptive filenames.",
    slug: 'tool:image-seo-analyzer',
    category: 'image',
    badge: 'HTML/Image',
    isInteractiveWidget: true
  },
  {
    id: 'image-filename-checker',
    title: 'Image Filename Checker',
    description: "Verify that image filenames follow SEO best practices: hyphen-separated, descriptive keywords, lowercase, with zero generic strings.",
    slug: 'tool:image-filename-checker',
    category: 'image',
    badge: 'Naming',
    isInteractiveWidget: true
  },
  {
    id: 'favicon-generator',
    title: 'Favicon Generator',
    description: "Upload your logo to generate complete favicon packs: 16x16, 32x32, 180x180 Apple Touch, and 192x192 Android manifest icons.",
    slug: 'tool:favicon-generator',
    category: 'image',
    badge: 'Branding',
    isInteractiveWidget: true
  },
  {
    id: 'favicon-checker',
    title: 'Favicon Checker',
    description: "Inspect uploaded HTML or site files to verify proper declaration of rel='icon', rel='apple-touch-icon', and webmanifest links.",
    slug: 'tool:favicon-checker',
    category: 'image',
    badge: 'HTML Audit',
    isInteractiveWidget: true
  },
  {
    id: 'svg-optimizer',
    title: 'SVG Optimizer',
    description: "Clean and minify SVG vector code: removes unnecessary editor metadata, comments, empty tags, and minifies path coordinates.",
    slug: 'tool:svg-optimizer',
    category: 'image',
    badge: 'SVG Clean',
    isInteractiveWidget: true
  },

  // --- Code & Formatting Utilities ---
  {
    id: 'json-formatter',
    title: 'JSON Formatter',
    description: "Format, beautify, and indent raw JSON payloads with customizable 2-space or 4-space indentation and syntax highlighting.",
    slug: 'tool:json-formatter',
    category: 'dev',
    badge: 'Beautifier',
    isInteractiveWidget: true
  },
  {
    id: 'json-validator',
    title: 'JSON Validator',
    description: "Validate JSON syntax with line-and-column error highlighting for malformed brackets, missing commas, or quote issues.",
    slug: 'tool:json-validator',
    category: 'dev',
    badge: 'Syntax Check',
    isInteractiveWidget: true
  },
  {
    id: 'xml-formatter',
    title: 'XML Formatter',
    description: "Pretty-print messy XML feeds, sitemaps, and RSS documents with clean tag indentation and structured line wraps.",
    slug: 'tool:xml-formatter',
    category: 'dev',
    badge: 'XML Clean',
    isInteractiveWidget: true
  },
  {
    id: 'xml-validator',
    title: 'XML Validator',
    description: "Check XML documents for well-formedness, tag closures, attribute quotes, and valid syntax before deploying to crawlers.",
    slug: 'tool:xml-validator',
    category: 'dev',
    badge: 'XML Lint',
    isInteractiveWidget: true
  },
  {
    id: 'html-minifier',
    title: 'HTML Minifier',
    description: "Minify HTML markup by removing whitespace, line breaks, and comment blocks to decrease HTML document payload sizes.",
    slug: 'tool:html-minifier',
    category: 'dev',
    badge: 'Minify',
    isInteractiveWidget: true
  },
  {
    id: 'css-minifier',
    title: 'CSS Minifier',
    description: "Compress CSS stylesheets: strips comments, whitespace, and collapses declarations for faster rendering.",
    slug: 'tool:css-minifier',
    category: 'dev',
    badge: 'CSS Clean',
    isInteractiveWidget: true
  },
  {
    id: 'js-minifier',
    title: 'JavaScript Minifier',
    description: "Minify JavaScript code snippets to reduce script file sizes and improve page speed scores.",
    slug: 'tool:js-minifier',
    category: 'dev',
    badge: 'JS Clean',
    isInteractiveWidget: true
  },
  {
    id: 'markdown-to-html',
    title: 'Markdown → HTML',
    description: "Convert GitHub-flavored Markdown text into clean, semantic HTML markup with headings, code blocks, lists, and tables.",
    slug: 'tool:markdown-to-html',
    category: 'dev',
    badge: 'Parser',
    isInteractiveWidget: true
  },
  {
    id: 'html-to-markdown',
    title: 'HTML → Markdown',
    description: "Convert HTML markup into clean Markdown syntax for CMS import, documentation, and content repos.",
    slug: 'tool:html-to-markdown',
    category: 'dev',
    badge: 'Converter',
    isInteractiveWidget: true
  },
  {
    id: 'html-cleaner',
    title: 'HTML Cleaner',
    description: "Sanitize pasted HTML code: strips inline styles, empty span tags, tracking attributes, and Microsoft Word formatting garbage.",
    slug: 'tool:html-cleaner',
    category: 'dev',
    badge: 'Sanitizer',
    isInteractiveWidget: true
  },

  // --- Utility tools (50 New Browser Utilities) ---
  {
    id: 'case-converter',
    title: 'Case Converter',
    description: 'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case in your browser.',
    slug: '/case-converter/',
    category: 'utility',
    badge: 'Text Utility'
  },
  {
    id: 'remove-duplicate-lines',
    title: 'Remove Duplicate Lines',
    description: 'Delete repeated lines from any list with options for case sensitivity, trimming spaces, keeping first occurrence, and removing empty lines.',
    slug: '/remove-duplicate-lines/',
    category: 'utility',
    badge: 'List Utility'
  },
  {
    id: 'sort-lines',
    title: 'Sort Lines',
    description: 'Sort lines of text alphabetically (A–Z, Z–A), numerically, by line length, or randomly in your browser.',
    slug: '/sort-lines/',
    category: 'utility',
    badge: 'List Utility'
  },
  {
    id: 'remove-line-breaks',
    title: 'Remove Line Breaks',
    description: 'Clean up hard line breaks copied from PDFs or emails, preserve paragraphs, or join lines with a custom separator.',
    slug: '/remove-line-breaks/',
    category: 'utility',
    badge: 'Text Utility'
  },
  {
    id: 'remove-extra-spaces',
    title: 'Remove Extra Spaces',
    description: 'Remove double spaces, leading/trailing spaces, tabs, non-breaking spaces, and blank lines from text.',
    slug: '/remove-extra-spaces/',
    category: 'utility',
    badge: 'Text Utility'
  },
  {
    id: 'find-and-replace-text',
    title: 'Find and Replace Text',
    description: 'Find and replace words, phrases, or regex patterns in text with case-sensitive, whole-word, and match-count display.',
    slug: '/find-and-replace-text/',
    category: 'utility',
    badge: 'Text Utility'
  },
  {
    id: 'reverse-text',
    title: 'Reverse Text',
    description: 'Flip text backwards by character, reverse word order, reverse line order, or reverse letters inside each word.',
    slug: '/reverse-text/',
    category: 'utility',
    badge: 'Text Utility'
  },
  {
    id: 'text-to-binary',
    title: 'Text to Binary Converter',
    description: 'Convert UTF-8 plain text into 8-bit binary bytes or decode binary back to readable text.',
    slug: '/text-to-binary/',
    category: 'utility',
    badge: 'Encoding'
  },
  {
    id: 'morse-code-translator',
    title: 'Morse Code Translator',
    description: 'Translate text to International Morse code and back with browser Web Audio tone playback and speed control.',
    slug: '/morse-code-translator/',
    category: 'utility',
    badge: 'Encoding'
  },
  {
    id: 'random-name-picker',
    title: 'Random Name Picker',
    description: 'Pick one or multiple random winners from any name list using browser cryptographic randomness.',
    slug: '/random-name-picker/',
    category: 'utility',
    badge: 'Picker Utility'
  },
  {
    id: 'base64-encode-decode',
    title: 'Base64 Encode & Decode',
    description: 'Encode UTF-8 text to Base64 or decode Base64 strings back to text with URL-safe (- and _) support.',
    slug: '/base64-encode-decode/',
    category: 'utility',
    badge: 'Dev Utility'
  },
  {
    id: 'qr-code-generator',
    title: 'QR Code Generator',
    description: 'Create custom QR codes for URLs, text, email, phone, and Wi-Fi networks and download as PNG or SVG.',
    slug: '/qr-code-generator/',
    category: 'utility',
    badge: 'QR Builder'
  },
  {
    id: 'uuid-generator',
    title: 'UUID Generator',
    description: 'Generate 1 to 1,000 random UUID v4 identifiers using Web Crypto randomness with uppercase and no-hyphens options.',
    slug: '/uuid-generator/',
    category: 'utility',
    badge: 'Dev Utility'
  },
  {
    id: 'hash-generator',
    title: 'Hash Generator',
    description: 'Compute MD5, SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic digests in your browser.',
    slug: '/hash-generator/',
    category: 'utility',
    badge: 'Dev Utility'
  },
  {
    id: 'jwt-decoder',
    title: 'JWT Decoder',
    description: 'Decode a JSON Web Token locally to inspect formatted header, payload claims, readable timestamps, and expiry status.',
    slug: '/jwt-decoder/',
    category: 'utility',
    badge: 'Dev Utility'
  },
  {
    id: 'regex-tester',
    title: 'Regex Tester',
    description: 'Test JavaScript regular expressions live with inline match highlighting, g/i/m/s/u flags, and capture groups.',
    slug: '/regex-tester/',
    category: 'utility',
    badge: 'Dev Utility'
  },
  {
    id: 'cron-expression-generator',
    title: 'Cron Expression Generator',
    description: 'Build 5-field cron schedules visually, read any cron expression in plain English, and view the next 5 run times.',
    slug: '/cron-expression-generator/',
    category: 'utility',
    badge: 'Dev Utility'
  },
  {
    id: 'csv-to-json',
    title: 'CSV to JSON Converter',
    description: 'Convert CSV files or pasted spreadsheet text to JSON objects or arrays in your browser with delimiter detection.',
    slug: '/csv-to-json/',
    category: 'utility',
    badge: 'Data Utility'
  },
  {
    id: 'json-to-csv',
    title: 'JSON to CSV Converter',
    description: 'Flatten nested JSON arrays into Excel-compatible CSV in your browser with live table preview and file download.',
    slug: '/json-to-csv/',
    category: 'utility',
    badge: 'Data Utility'
  },
  {
    id: 'yaml-to-json',
    title: 'YAML to JSON Converter',
    description: 'Convert YAML to JSON and JSON back to YAML in your browser with indentation controls and line-number error messages.',
    slug: '/yaml-to-json/',
    category: 'utility',
    badge: 'Data Utility'
  },
  {
    id: 'unix-timestamp-converter',
    title: 'Unix Timestamp Converter',
    description: 'Convert Unix epoch timestamps (seconds or milliseconds) into UTC, local time, and ISO 8601 dates.',
    slug: '/unix-timestamp-converter/',
    category: 'utility',
    badge: 'Time Utility'
  },
  {
    id: 'hex-to-rgb',
    title: 'HEX to RGB Converter',
    description: 'Convert HEX (3/6/8-digit), RGB(A), and HSL(A) colors with a native color picker, swatch, and WCAG contrast ratios.',
    slug: '/hex-to-rgb/',
    category: 'utility',
    badge: 'Color Utility'
  },
  {
    id: 'css-gradient-generator',
    title: 'CSS Gradient Generator',
    description: 'Design linear and radial CSS gradients visually with angle sliders, multi-stop color controls, and CSS copy.',
    slug: '/css-gradient-generator/',
    category: 'utility',
    badge: 'CSS Builder'
  },
  {
    id: 'box-shadow-generator',
    title: 'CSS Box Shadow Generator',
    description: 'Build multi-layer CSS box-shadow styles visually with sliders for offset, blur, spread, opacity, and inset shadows.',
    slug: '/box-shadow-generator/',
    category: 'utility',
    badge: 'CSS Builder'
  },
  {
    id: 'html-entity-encoder',
    title: 'HTML Entity Encoder & Decoder',
    description: 'Escape reserved HTML characters or non-ASCII symbols to numeric entities, and decode HTML entities back to text.',
    slug: '/html-entity-encoder/',
    category: 'utility',
    badge: 'Dev Utility'
  },
  {
    id: 'percentage-calculator',
    title: 'Percentage Calculator',
    description: 'Calculate X% of Y, find what percentage X is of Y, and compute percentage increase or decrease live.',
    slug: '/percentage-calculator/',
    category: 'utility',
    badge: 'Calculator'
  },
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    description: 'Calculate exact chronological age in years, months, and days plus total weeks, days, and next birthday countdown.',
    slug: '/age-calculator/',
    category: 'utility',
    badge: 'Calculator'
  },
  {
    id: 'date-difference-calculator',
    title: 'Date Difference Calculator',
    description: 'Count days, weeks, calendar duration, and Monday–Friday business days between two dates, or add/subtract days.',
    slug: '/date-difference-calculator/',
    category: 'utility',
    badge: 'Calculator'
  },
  {
    id: 'emi-calculator',
    title: 'Loan EMI Calculator',
    description: 'Compute monthly loan EMI, total interest, total payment, and a full month-by-month amortization schedule.',
    slug: '/emi-calculator/',
    category: 'utility',
    badge: 'Finance Math'
  },
  {
    id: 'compound-interest-calculator',
    title: 'Compound Interest Calculator',
    description: 'Project future value, cumulative interest, and year-by-year growth with custom compounding and monthly additions.',
    slug: '/compound-interest-calculator/',
    category: 'utility',
    badge: 'Finance Math'
  },
  {
    id: 'profit-margin-calculator',
    title: 'Profit Margin Calculator',
    description: 'Compute gross profit, margin %, markup %, and target selling price from cost, price, margin, or markup.',
    slug: '/profit-margin-calculator/',
    category: 'utility',
    badge: 'Business Math'
  },
  {
    id: 'discount-calculator',
    title: 'Discount Calculator',
    description: 'Compute final sale price and total savings from percentage or fixed discounts, stacked offers, and sales tax.',
    slug: '/discount-calculator/',
    category: 'utility',
    badge: 'Shopping Math'
  },
  {
    id: 'sales-tax-calculator',
    title: 'Sales Tax & VAT Calculator',
    description: 'Add any sales tax or VAT percentage to a net price, or reverse-calculate pre-tax price and tax from a gross total.',
    slug: '/sales-tax-calculator/',
    category: 'utility',
    badge: 'Tax Math'
  },
  {
    id: 'break-even-calculator',
    title: 'Break-Even Calculator',
    description: 'Find break-even units, break-even revenue, contribution margin, target-profit units, and a revenue vs. cost chart.',
    slug: '/break-even-calculator/',
    category: 'utility',
    badge: 'Business Math'
  },
  {
    id: 'cpm-calculator',
    title: 'CPM Calculator',
    description: 'Solve for CPM (Cost per 1,000 impressions), Total Ad Cost, or Total Impressions given any two values.',
    slug: '/cpm-calculator/',
    category: 'utility',
    badge: 'Ad Math'
  },
  {
    id: 'cpc-calculator',
    title: 'CPC Calculator',
    description: 'Solve for Cost per Click (CPC), Total Ad Spend, or Total Clicks from any two metrics, plus optional CTR.',
    slug: '/cpc-calculator/',
    category: 'utility',
    badge: 'Ad Math'
  },
  {
    id: 'freelance-rate-calculator',
    title: 'Freelance Hourly Rate Calculator',
    description: 'Calculate freelance hourly, 8-hour daily, and fixed project rates from your income target, overhead, taxes, and hours.',
    slug: '/freelance-rate-calculator/',
    category: 'utility',
    badge: 'Pricing Math'
  },
  {
    id: 'aspect-ratio-calculator',
    title: 'Aspect Ratio Calculator',
    description: 'Calculate simplified aspect ratios and proportionally locked width or height in pixels with common presets.',
    slug: '/aspect-ratio-calculator/',
    category: 'utility',
    badge: 'Media Math'
  },
  {
    id: 'time-zone-converter',
    title: 'Time Zone Converter',
    description: 'Convert any date and time across multiple global IANA time zones with automatic Daylight Saving Time offsets.',
    slug: '/time-zone-converter/',
    category: 'utility',
    badge: 'Time Utility'
  },
  {
    id: 'countdown-timer',
    title: 'Countdown Timer',
    description: 'Run a timestamp-accurate duration timer or date countdown with fullscreen mode and browser audio alert chimes.',
    slug: '/countdown-timer/',
    category: 'utility',
    badge: 'Timer Utility'
  },
  {
    id: 'invoice-generator',
    title: 'Invoice Generator',
    description: 'Create clean invoices online with line items, optional logo, tax and discount percentages, and client-side PDF download.',
    slug: '/invoice-generator/',
    category: 'utility',
    badge: 'Business Utility'
  },
  {
    id: 'email-signature-generator',
    title: 'Email Signature Generator',
    description: 'Create a responsive HTML email signature with 3 layouts, photo URL, and links, then copy it into Gmail or Outlook.',
    slug: '/email-signature-generator/',
    category: 'utility',
    badge: 'Email Utility'
  },
  {
    id: 'privacy-policy-generator',
    title: 'Privacy Policy Generator',
    description: 'Generate a basic starting privacy policy template from a short form and export as .txt or .html.',
    slug: '/privacy-policy-generator/',
    category: 'utility',
    badge: 'Template Utility'
  },
  {
    id: 'business-name-generator',
    title: 'Business Name Generator',
    description: 'Generate up to 50 business and brand name ideas offline from seed keywords using prefixes, suffixes, and word blends.',
    slug: '/business-name-generator/',
    category: 'utility',
    badge: 'Naming Utility'
  },
  {
    id: 'username-generator',
    title: 'Username Generator',
    description: 'Generate unique username ideas from your name or keywords with separator, style, length, and number options.',
    slug: '/username-generator/',
    category: 'utility',
    badge: 'Naming Utility'
  },
  {
    id: 'random-number-generator',
    title: 'Random Number Generator',
    description: 'Generate random integers or decimals in any range with Web Crypto randomness, duplicate blocking, and sorting.',
    slug: '/random-number-generator/',
    category: 'utility',
    badge: 'Number Utility'
  },
  {
    id: 'placeholder-image-generator',
    title: 'Placeholder Image Generator',
    description: 'Create dummy placeholder images in any size, color, font size, and text online and download as PNG, JPG, or WebP.',
    slug: '/placeholder-image-generator/',
    category: 'utility',
    badge: 'Design Utility'
  },
  {
    id: 'image-to-pdf',
    title: 'Image to PDF Converter',
    description: 'Combine multiple JPG, PNG, and WebP images into one downloadable PDF with drag-to-reorder and margin controls.',
    slug: '/image-to-pdf/',
    category: 'utility',
    badge: 'PDF Utility'
  },
  {
    id: 'image-cropper',
    title: 'Image Cropper',
    description: 'Crop JPG, PNG, and WebP images in your browser using free crop or fixed aspect ratios plus rotate and flip tools.',
    slug: '/image-cropper/',
    category: 'utility',
    badge: 'Image Utility'
  },
  {
    id: 'fake-data-generator',
    title: 'Fake Data Generator',
    description: 'Generate up to 1,000 rows of fictional test names, example.com emails, addresses, and dates with JSON and CSV export.',
    slug: '/fake-data-generator/',
    category: 'utility',
    badge: 'Data Utility'
  }
];

import { getToolById } from './toolDetails';

// Automatically bind every tool in ALL_SEO_TOOLS_DATA to its dedicated SEO-friendly URL
ALL_SEO_TOOLS_DATA.forEach(tool => {
  const detail = getToolById(tool.id);
  if (detail) {
    tool.slug = detail.path;
  } else if (tool.slug.startsWith('tool:')) {
    tool.slug = `/tools/${tool.slug.replace(/^tool:/, '')}/`;
  }
});

