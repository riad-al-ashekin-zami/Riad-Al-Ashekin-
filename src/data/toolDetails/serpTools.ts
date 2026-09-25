import { ToolRegistryItem } from './types';

export const serpTools: ToolRegistryItem[] = [
  {
    id: 'meta-checker',
    name: 'Meta Title & Description Checker',
    slug: 'meta-title-description-checker',
    path: '/tools/meta-title-description-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/meta-title-description-checker/',
    category: 'serp',
    badge: 'Popular',
    shortDescription: 'Simulate Google search snippets in real time, audit desktop and mobile pixel limits, and optimize meta titles and descriptions.',
    seoTitle: 'Meta Title & Description Checker - Free Google SERP Simulator | Riad Al Ashekin',
    metaDescription: 'Free online Google SERP simulator to test meta title and meta description pixel length, character counts, and preview how your page appears in search results.',
    h1: 'Meta Title & Description Checker',
    intro: 'Ensure your pages capture maximum click-through rates (CTR) on Google. Enter your title, description, and target URL to see an exact visual simulation with real-time character and pixel measurements across desktop and mobile devices.',
    howToUse: [
      'Enter your webpage title in the Title input field.',
      'Type your meta description summarizing the page value proposition.',
      'Provide your target URL to inspect how the breadcrumb URL renders in search snippets.',
      'Check the live pixel and character gauges to ensure neither element gets truncated by Google.'
    ],
    features: [
      'Google Desktop and Mobile snippet previews updated as you type',
      'Accurate pixel width calculations (580px title limit & 960px description limit)',
      'Character count indicators with optimal SEO threshold warnings',
      'Capitalization and stop-word analysis for high organic CTR',
      'One-click copy of production-ready HTML meta tags'
    ],
    technicalExplanation: {
      heading: 'Understanding Google SERP Snippet Pixel Limits',
      body: 'While many marketers monitor character counts, Google renders search result titles inside a proportional container with a maximum width of roughly 580 to 600 pixels on desktop and mobile. Characters like "W" or "M" consume significantly more horizontal pixels than "I" or "l". If your title tag exceeds the pixel threshold, Google truncates it with an ellipsis (...) or algorithmically rewrites your title using H1 tags or anchor text.',
      points: [
        'Optimal Title Length: 50–60 characters (keep under 580px for 99% device safety).',
        'Optimal Description Length: 120–158 characters (keep under 960px on desktop and 680px on mobile).',
        'Brand Separation: Place your primary keyword at the beginning and suffix the brand name with a clean delimiter.'
      ]
    },
    examples: {
      title: 'High-Converting SERP Snippet Example',
      input: 'Title: Enterprise Cloud Migration Services | Acme Tech\nDescription: Accelerate cloud migration with zero downtime. Trusted by 200+ global enterprises. Schedule a technical roadmap audit today.\nURL: https://example.com/cloud-migration',
      output: 'Desktop: 52 chars (498px) - PASSED\nMobile: 52 chars - PASSED\nHTML: <title>Enterprise Cloud Migration Services | Acme Tech</title>',
      notes: 'Contains a clear value proposition, primary keyword upfront, and a compelling call-to-action.'
    },
    faqs: [
      {
        question: 'Why does Google rewrite my meta title even when it fits within the limit?',
        answer: 'Google rewrites titles when it believes the existing title tag does not accurately match the user query, is keyword-stuffed, repetitive across the site, or differs significantly from the main on-page H1 heading.'
      },
      {
        question: 'Does the meta description directly impact Google rankings?',
        answer: 'Meta descriptions are not a direct algorithmic ranking signal, but they directly determine click-through rate (CTR). Higher CTR drives more qualified visitors and signals strong user relevance.'
      },
      {
        question: 'What is the pixel limit difference between desktop and mobile search snippets?',
        answer: 'Desktop titles cap around 580–600px, while mobile titles allow slightly more vertical wrapping up to two lines before truncating. Descriptions truncate earlier on mobile devices (roughly 680px).'
      }
    ],
    relatedToolSlugs: [
      'meta-title-description-length-checker',
      'serp-snippet-preview',
      'heading-checker',
      'seo-friendly-url-test',
      'character-counter'
    ],
    legacyPaths: ['/meta-title-description-checker/']
  },
  {
    id: 'meta-length-checker',
    name: 'Meta Title & Description Length Checker',
    slug: 'meta-title-description-length-checker',
    path: '/tools/meta-title-description-length-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/meta-title-description-length-checker/',
    category: 'serp',
    badge: 'SERP Preview',
    shortDescription: 'Quickly verify title and description character lengths against Google truncation rules with live color-coded warnings.',
    seoTitle: 'Meta Title & Description Length Checker - Character & Pixel Auditor | Riad Al Ashekin',
    metaDescription: 'Audit your title tag and meta description lengths with live visual gauges. Ensure your snippets avoid truncation on Google search engine result pages.',
    h1: 'Meta Title & Description Length Checker',
    intro: 'Check the exact length of your meta titles and descriptions against Google search display thresholds. Prevent truncated text, broken sentences, and missing call-to-actions before publishing your pages.',
    howToUse: [
      'Paste or type your proposed meta title in the top input.',
      'Paste your meta description in the second box.',
      'Check the real-time progress bars indicating safe, warning, and truncated zones.',
      'Adjust wording until both elements show green optimal status.'
    ],
    features: [
      'Real-time character and pixel measurement',
      'Safe zone guidelines for desktop and mobile displays',
      'Immediate alert if title exceeds 60 characters or 580 pixels',
      'Immediate alert if description exceeds 160 characters or 960 pixels',
      'Instant HTML tag generator for quick copy-pasting'
    ],
    technicalExplanation: {
      heading: 'Why Snippet Length Optimization Matters',
      body: 'Truncated search snippets lower user trust and cut off crucial selling points or brand names. By staying within the optimal character and pixel limits, your title and description display cleanly with complete messaging across all viewport sizes.',
      points: [
        'Green Safe Range: Titles between 50-60 characters; descriptions between 120-155 characters.',
        'Too Short: Titles under 30 characters risk being supplemented or replaced by Google.',
        'Too Long: Titles over 60 characters risk awkward ellipsis cut-offs in SERP snippets.'
      ]
    },
    faqs: [
      {
        question: 'What happens if my title is too short?',
        answer: 'If your title is too short (e.g. "Home" or "Services"), Google will frequently append your brand name or pull headings from your page to construct a more descriptive snippet.'
      },
      {
        question: 'Should I put emojis in my meta title or description?',
        answer: 'Google supports emojis in search snippets, but will filter out irrelevant or spammy emojis. When used tastefully, relevant emojis can improve CTR.'
      }
    ],
    relatedToolSlugs: [
      'meta-title-description-checker',
      'serp-snippet-preview',
      'character-counter',
      'seo-slug-generator'
    ],
    legacyPaths: ['/meta-title-description-length-checker/']
  },
  {
    id: 'chrome-ext',
    name: 'Meta Data Checker Chrome Extension',
    slug: 'meta-data-checker-chrome-extension',
    path: '/tools/meta-data-checker-chrome-extension/',
    canonicalUrl: 'https://riadalashekin.com/tools/meta-data-checker-chrome-extension/',
    category: 'serp',
    badge: 'Extension',
    shortDescription: 'Audit on-page SEO meta tags, canonical links, and social OpenGraph tags directly in your browser with 1 click. Zero DevTools required.',
    seoTitle: 'Meta Data Checker Chrome Extension - On-Page SEO Inspector | Riad Al Ashekin',
    metaDescription: 'Inspect meta tags, canonical URLs, robots directives, and OpenGraph social cards with 1 click using the Meta Data Checker browser extension.',
    h1: 'Meta Data Checker Chrome Extension',
    intro: 'Audit any live webpage in 1 click without opening browser DevTools or viewing raw page source code. Inspect title tags, meta descriptions, canonical URLs, indexing directives, and social media tags instantly.',
    howToUse: [
      'Explore the extension capabilities and feature set below.',
      'Install the extension or test your live page URLs with the on-page inspector.',
      'Instantly view missing meta tags, canonical conflicts, or indexing blockers.'
    ],
    features: [
      '1-Click instant on-page meta tag auditing',
      'Direct canonical URL vs current address verification',
      'Detection of noindex, nofollow, and noarchive bot directives',
      'Full OpenGraph and Twitter card metadata validation',
      'Clean popup UI built for speed and technical clarity'
    ],
    technicalExplanation: {
      heading: 'Instant In-Browser SEO Auditing',
      body: 'Opening DevTools to inspect DOM elements consumes valuable consultant time. Having an instant browser extension reveals critical SEO flags—such as accidental noindex tags on staging-to-production pushes—within milliseconds.',
      points: [
        'Inspect canonical tag mismatches instantly.',
        'Verify heading tags (H1, H2) without inspecting HTML source.',
        'Confirm social sharing tags display the intended OpenGraph image.'
      ]
    },
    faqs: [
      {
        question: 'Does this extension collect or transmit my browsing data?',
        answer: 'No. The extension inspects the local DOM entirely within your browser session. No data is stored, tracked, or sent to external servers.'
      },
      {
        question: 'Can it detect client-side rendered Single Page Application (SPA) meta tags?',
        answer: 'Yes, because it inspects the live DOM after JavaScript execution rather than just the initial HTML server response.'
      }
    ],
    relatedToolSlugs: [
      'meta-title-description-checker',
      'heading-checker',
      'og-checker',
      'robots-meta-checker'
    ],
    legacyPaths: ['/meta-data-checker-chrome-extension/']
  },
  {
    id: 'heading-checker',
    name: 'H1/H2/H3 Heading Checker',
    slug: 'heading-checker',
    path: '/tools/heading-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/heading-checker/',
    category: 'serp',
    badge: 'HTML Paste',
    shortDescription: 'Paste raw HTML to instantly map heading hierarchy, detect missing H1 tags, identify multiple H1s, and check semantic heading order.',
    seoTitle: 'H1/H2/H3 Heading Checker - Free Semantic HTML Heading Auditor | Riad Al Ashekin',
    metaDescription: 'Audit webpage headings instantly. Paste your HTML to detect missing H1s, multiple H1 tags, skipped heading levels, and semantic structural issues.',
    h1: 'H1/H2/H3 Heading Checker',
    intro: 'Headings provide the structural outline that search engine spiders and assistive screen readers rely on to understand your content. Paste your HTML or article markup below to instantly detect missing H1 tags, skipped levels (e.g. jumping from H2 straight to H4), and multiple H1 conflicts.',
    howToUse: [
      'Paste your raw HTML code or article markup into the input editor.',
      'Click Run Audit to parse all heading elements (H1 through H6).',
      'Inspect the visual hierarchy tree and check any identified structural warnings.',
      'Copy the optimized outline or fix the issues in your CMS.'
    ],
    features: [
      'Extracts and organizes all H1, H2, H3, H4, H5, and H6 tags',
      'Identifies missing H1 tags or multiple conflicting H1 declarations',
      'Flags skipped heading levels that harm accessibility and SEO',
      'Provides character counts and keyword visibility for each heading',
      'Runs completely client-side in your browser for privacy'
    ],
    technicalExplanation: {
      heading: 'Semantic Heading Hierarchy and SEO Impact',
      body: 'Google uses headings to grasp the hierarchical themes of a webpage. An H1 should represent the primary topical anchor of the page. Subordinate H2s break the topic into core sections, and H3s provide granular support. Skipping levels breaks the document outline for accessibility tools (WCAG 2.1) and dilutes topical clarity for search engine algorithms.',
      points: [
        'Single H1 Rule: Best practice is maintaining one clear, descriptive H1 matching user search intent.',
        'Logical Progression: Always nest H3s under parent H2s without skipping to H4 or H5 directly.',
        'Keyword Placement: Use natural primary and secondary keywords in H1 and H2 tags without stuffing.'
      ]
    },
    examples: {
      title: 'Valid Heading Hierarchy Example',
      input: '<h1>SEO Consultancy Services</h1>\n<h2>Technical Audits</h2>\n<h3>Core Web Vitals Optimization</h3>\n<h3>Crawl Budget Diagnostics</h3>\n<h2>Content Strategy</h2>',
      output: 'Total Headings: 5\nH1 Count: 1 (Valid)\nSkipped Levels: 0\nHierarchy Status: 100% Semantic Compliance',
      notes: 'Every subtopic flows naturally from the main overarching H1.'
    },
    faqs: [
      {
        question: 'Can a webpage have more than one H1 tag?',
        answer: 'HTML5 technically permits multiple H1s within separate sectioning elements, but Google and accessibility guidelines strongly recommend one prominent H1 per page to maintain clear topical focus.'
      },
      {
        question: 'Does heading order affect ranking?',
        answer: 'Yes, because search engines use heading order to map semantic relationships between entities and concepts. A clean, logical outline improves topical authority.'
      }
    ],
    relatedToolSlugs: [
      'heading-structure-analyzer',
      'seo-content-analyzer',
      'meta-title-description-checker',
      'readability-checker'
    ]
  },
  {
    id: 'heading-structure-analyzer',
    name: 'Heading Structure Analyzer',
    slug: 'heading-structure-analyzer',
    path: '/tools/heading-structure-analyzer/',
    canonicalUrl: 'https://riadalashekin.com/tools/heading-structure-analyzer/',
    category: 'serp',
    badge: 'Hierarchy',
    shortDescription: 'Deep dive into your document outline. Identifies skipped heading levels (e.g. H2 to H4) and provides semantic recommendations.',
    seoTitle: 'Heading Structure Analyzer - Document Outline & Semantic Validator | Riad Al Ashekin',
    metaDescription: 'Analyze your content heading structure. Identify skipped heading levels, evaluate keyword placement, and generate a clean semantic table of contents.',
    h1: 'Heading Structure Analyzer',
    intro: 'A well-structured document outline enhances user retention and signals topical completeness to Google. Paste your HTML or text outline to analyze nesting depth, balance between sections, and semantic consistency.',
    howToUse: [
      'Paste your webpage HTML or Markdown content into the input field.',
      'Review the structured tree view showing nesting and hierarchy depth.',
      'Check recommendations for section balancing and level transitions.',
      'Export the clean table of contents or copy the corrected outline.'
    ],
    features: [
      'Full semantic outline tree generation',
      'Section balance metrics (words per heading)',
      'Detection of empty or orphaned headings',
      'Accessibility audit based on WCAG 2.1 document structure',
      'Instant table-of-contents generation'
    ],
    technicalExplanation: {
      heading: 'Document Outlines and Information Retrieval',
      body: 'Modern search engines evaluate content depth by examining how thoroughly sub-topics are addressed under major headings. Pages with evenly distributed content across logical subheadings consistently earn higher passage ranking and featured snippet placements.',
      points: [
        'Balanced Sections: Aim for 150–350 words per sub-heading to prevent thin sections.',
        'Semantic Integrity: Never use heading tags purely for visual styling or font sizing.'
      ]
    },
    faqs: [
      {
        question: 'How do headings impact featured snippets in Google?',
        answer: 'Google frequently extracts list-style featured snippets directly from consecutive H2 or H3 subheadings that clearly answer a search query.'
      }
    ],
    relatedToolSlugs: [
      'heading-checker',
      'seo-content-analyzer',
      'keyword-prominence-checker',
      'word-counter-pro'
    ]
  },
  {
    id: 'image-alt-checker',
    name: 'Image Alt Text Checker',
    slug: 'image-alt-checker',
    path: '/tools/image-alt-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/image-alt-checker/',
    category: 'serp',
    badge: 'HTML Paste',
    shortDescription: 'Scan pasted HTML markup to detect missing, empty, or duplicate image alt attributes. Ensure 100% accessibility and image SEO.',
    seoTitle: 'Image Alt Text Checker - Free On-Page Image SEO & Accessibility Auditor | Riad Al Ashekin',
    metaDescription: 'Paste HTML to detect missing, empty, or keyword-stuffed image alt attributes. Ensure full accessibility compliance and boost Google Image search rankings.',
    h1: 'Image Alt Text Checker',
    intro: 'Alternative text is vital for visually impaired users using screen readers and is Google\'s primary mechanism for understanding image content. Paste your HTML markup below to instantly detect missing alt tags, decorative image issues, and alt text quality.',
    howToUse: [
      'Paste your raw HTML or webpage section into the input area.',
      'Click Audit Alt Tags to scan all <img> and <picture> elements.',
      'Review images flagged as missing alt, containing empty alt, or duplicate text.',
      'Copy the detailed report to fix issues in your CMS or codebase.'
    ],
    features: [
      'Detects <img> tags with completely missing alt attributes',
      'Differentiates between intentional empty alt="" (decorative) and missing alt',
      'Flags file names used as alt text (e.g. alt="IMG_1024.jpg")',
      'Calculates image accessibility compliance percentage',
      'Recommends descriptive, keyword-rich alternatives'
    ],
    technicalExplanation: {
      heading: 'Image Alt Text Rules for Accessibility and Search',
      body: 'Alt text serves a dual purpose: accessibility (WCAG) and search indexing (Google Images). Screen readers speak the alt text aloud to visually impaired users. When search crawlers index images, they rely on the alt text, surrounding body copy, and filename to understand the image context.',
      points: [
        'Be Descriptive: Describe what is actually visible in the image concisely.',
        'Avoid Redundancy: Do not prefix with "Image of" or "Picture of".',
        'Purely Decorative Images: Use empty alt="" so screen readers gracefully skip them.'
      ]
    },
    examples: {
      title: 'Alt Text Best Practice',
      input: '<img src="laptop.jpg" alt="IMG_302.jpg">\n<img src="chart.png" alt="2026 SEO organic traffic growth line chart showing 42% increase">\n<img src="banner.jpg">',
      output: 'Audited: 3 Images\n1 Missing Alt (<img src="banner.jpg">)\n1 Generic Filename Alt (<img src="laptop.jpg">)\n1 High Quality Alt (<img src="chart.png">)\nCompliance Score: 33%',
      notes: 'Descriptive alt text provides meaningful context without keyword stuffing.'
    },
    faqs: [
      {
        question: 'Does missing alt text trigger Google penalties?',
        answer: 'Missing alt text won\'t trigger a manual action penalty, but it directly prevents your images from ranking in Google Images and harms your site\'s accessibility score.'
      },
      {
        question: 'How long should an image alt text be?',
        answer: 'Keep alt text concise, ideally between 40 and 100 characters. For complex diagrams or infographics, provide a short alt summary and describe the details in the surrounding text.'
      }
    ],
    relatedToolSlugs: [
      'image-seo-analyzer',
      'image-filename-checker',
      'heading-checker',
      'image-compressor'
    ]
  },
  {
    id: 'og-checker',
    name: 'Open Graph Checker',
    slug: 'og-checker',
    path: '/tools/og-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/og-checker/',
    category: 'serp',
    badge: 'Social SEO',
    shortDescription: 'Paste HTML to inspect og:title, og:description, og:image, and og:url tags. View live social card previews for Facebook and LinkedIn.',
    seoTitle: 'Open Graph Checker - Live Social Card Previewer & Validator | Riad Al Ashekin',
    metaDescription: 'Audit your Open Graph meta tags and simulate live social share previews for Facebook, LinkedIn, and messaging apps. Fix missing og:image tags instantly.',
    h1: 'Open Graph Checker',
    intro: 'When your content is shared on social platforms and messaging apps, Open Graph (OG) tags control the visual presentation. Paste your page HTML below to inspect og:title, og:description, og:image, and og:url, and preview exactly how your link appears when shared.',
    howToUse: [
      'Paste your webpage HTML head section or full page source.',
      'Click Inspect OG Tags to extract all Open Graph properties.',
      'Check the live preview card simulating Facebook and LinkedIn shares.',
      'Verify image dimensions, title length, and URL canonicalization.'
    ],
    features: [
      'Extracts og:title, og:description, og:image, og:url, og:type, and og:site_name',
      'Live interactive Facebook and LinkedIn share preview cards',
      'Detects missing og:image tags or relative image URLs that fail to render',
      'Validates recommended 1200x630 pixel social banner proportions',
      'Generates copy-ready Open Graph HTML tags'
    ],
    technicalExplanation: {
      heading: 'The Protocol That Powers Social Distribution',
      body: 'Introduced by Facebook, the Open Graph protocol turns webpages into rich graph objects. Without explicit OG tags, social platforms fall back to scraping arbitrary text and low-resolution images from your page body, resulting in broken or unappealing social cards.',
      points: [
        'Recommended Image Size: 1200 x 630 pixels (1.91:1 aspect ratio) for crisp retina display.',
        'Absolute URLs: Always specify full absolute URLs (https://...) for og:image and og:url.',
        'File Size: Keep social images under 5MB (preferably under 1MB for rapid crawler fetching).'
      ]
    },
    faqs: [
      {
        question: 'Why doesn\'t Facebook update my image after I change the og:image tag?',
        answer: 'Facebook caches social previews aggressively. You must enter the URL into the official Facebook Sharing Debugger to scrape the new metadata and clear the platform cache.'
      }
    ],
    relatedToolSlugs: [
      'twitter-card-checker',
      'meta-title-description-checker',
      'image-dimension-checker',
      'seo-slug-generator'
    ]
  },
  {
    id: 'twitter-card-checker',
    name: 'Twitter/X Card Checker',
    slug: 'twitter-card-checker',
    path: '/tools/twitter-card-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/twitter-card-checker/',
    category: 'serp',
    badge: 'Social SEO',
    shortDescription: 'Validate twitter:card, twitter:title, twitter:image, and player tags from HTML. Preview standard and summary_large_image cards.',
    seoTitle: 'Twitter/X Card Checker - Free Meta Tag Previewer & Validator | Riad Al Ashekin',
    metaDescription: 'Validate your Twitter/X card tags. Test summary_large_image preview cards, verify title character limits, and debug missing twitter:image tags.',
    h1: 'Twitter/X Card Checker',
    intro: 'Drive higher click-through rates on X (Twitter) with rich media preview cards. Paste your webpage HTML below to inspect twitter:card, twitter:title, twitter:description, and twitter:image tags with live visual rendering.',
    howToUse: [
      'Paste your HTML head tags into the input box.',
      'Click Inspect Twitter Cards to parse the metadata.',
      'Toggle between summary and summary_large_image preview modes.',
      'Fix any missing tags using the generated clean code snippet.'
    ],
    features: [
      'Supports summary and summary_large_image card types',
      'Real-time simulation of X (Twitter) desktop and mobile feed cards',
      'Validates twitter:site and twitter:creator handle formats',
      'Checks aspect ratios (2:1 for large images; 1:1 for summary cards)',
      'Fallback detection to standard Open Graph tags when Twitter tags are omitted'
    ],
    technicalExplanation: {
      heading: 'Twitter Card Hierarchy and Fallbacks',
      body: 'If specific twitter:* tags are omitted, X will fall back to Open Graph tags (og:title, og:image). However, defining explicit twitter:card with "summary_large_image" ensures the platform renders a large, full-width feature image rather than a small square thumbnail.',
      points: [
        'summary_large_image: Minimum dimensions 300x157px, ideal 1200x628px.',
        'summary: 1:1 aspect ratio square thumbnail, minimum 144x144px.',
        'Maximum file size: 5MB for JPG, PNG, WEBP, or GIF.'
      ]
    },
    faqs: [
      {
        question: 'Should I implement both Open Graph and Twitter Card tags?',
        answer: 'Yes. Implementing both guarantees optimal rendering across all networks, including Facebook, LinkedIn, X, Slack, iMessage, and Discord.'
      }
    ],
    relatedToolSlugs: [
      'og-checker',
      'meta-title-description-checker',
      'image-dimension-checker',
      'favicon-checker'
    ]
  },
  {
    id: 'robots-meta-checker',
    name: 'Robots Meta Tag Checker',
    slug: 'robots-meta-checker',
    path: '/tools/robots-meta-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/robots-meta-checker/',
    category: 'serp',
    badge: 'HTML Directives',
    shortDescription: 'Paste HTML head tags to inspect robots directives (index, noindex, follow, nofollow, noarchive, nosnippet) and avoid accidental de-indexing.',
    seoTitle: 'Robots Meta Tag Checker - On-Page Directives Auditor | Riad Al Ashekin',
    metaDescription: 'Audit on-page robots meta tags. Verify index, noindex, follow, nofollow, noarchive, and max-snippet directives to ensure proper search engine indexing.',
    h1: 'Robots Meta Tag Checker',
    intro: 'A single misconfigured meta tag can de-index an entire website from Google. Paste your webpage HTML or head section below to audit all robots directives, detect noindex conflicts, and ensure search crawlers can index and follow your pages properly.',
    howToUse: [
      'Paste your webpage HTML head code into the inspector.',
      'Click Inspect Robots Directives to extract all meta name="robots" tags.',
      'Review indexing status: Indexable vs Noindex, and Follow vs Nofollow.',
      'Verify granular directives like max-snippet, max-image-preview, and noarchive.'
    ],
    features: [
      'Detects global robots directives and Googlebot-specific tags',
      'Highlights accidental noindex tags that block search visibility',
      'Inspects rel="canonical" alongside robots directives to detect conflicts',
      'Audits max-image-preview:large directives required for Google Discover',
      'Checks nofollow, noarchive, and nosnippet flags'
    ],
    technicalExplanation: {
      heading: 'Robots Meta Directives vs Robots.txt',
      body: 'A common misconception is that robots.txt prevents indexing. In reality, robots.txt only prevents crawling. If a URL is linked from external sites, Google can index the URL without crawling its contents. To definitively prevent a page from appearing in search results, the page must have an accessible <meta name="robots" content="noindex"> tag.',
      points: [
        'noindex: Tells search engines not to display the page in search results.',
        'nofollow: Tells search engines not to follow any links found on the page.',
        'max-image-preview:large: Instructs Google to display large feature images in Google Discover.'
      ]
    },
    faqs: [
      {
        question: 'What happens if a page has both index and noindex tags?',
        answer: 'Search engines always obey the most restrictive directive. If a page has conflicting tags, Google will treat it as noindex and drop it from search results.'
      }
    ],
    relatedToolSlugs: [
      'noindex-checker',
      'nofollow-link-checker',
      'robots-txt-tester',
      'sitemap-tester'
    ]
  },
  {
    id: 'noindex-checker',
    name: 'Noindex Checker',
    slug: 'noindex-checker',
    path: '/tools/noindex-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/noindex-checker/',
    category: 'serp',
    badge: 'Index Audit',
    shortDescription: 'Quickly verify whether a page or HTML snippet contains active noindex meta tags or X-Robots-Tag headers blocking search bots.',
    seoTitle: 'Noindex Checker - Prevent Accidental De-Indexing | Riad Al Ashekin',
    metaDescription: 'Audit HTML code to confirm whether a page is indexable or blocked by a noindex directive. Essential for staging-to-production deployment QA.',
    h1: 'Noindex Checker',
    intro: 'Accidental noindex tags are one of the most catastrophic SEO mistakes after website redesigns or migrations. Paste your HTML code below to verify whether your pages are fully indexable by Google or blocked by rogue noindex directives.',
    howToUse: [
      'Paste the HTML source code of your page or template.',
      'Click Check Indexability to run an instant scan.',
      'Verify whether the page status is Indexable (Green) or Blocked (Red).',
      'Inspect the exact line of code containing the directive if blocked.'
    ],
    features: [
      'Scans for <meta name="robots" content="noindex">',
      'Scans for search-engine specific tags like <meta name="googlebot" content="noindex">',
      'Identifies case-insensitive and whitespace variations',
      'Explains implications for organic ranking and traffic',
      'Generates correct index,follow tags to replace offending code'
    ],
    technicalExplanation: {
      heading: 'The Mechanics of Search Engine De-Indexing',
      body: 'When Googlebot encounters a noindex tag on a page, it removes the URL from Google Search index within hours or days. Even if the page has thousands of high-authority backlinks, it will not rank for any search terms.',
      points: [
        'Never block a noindexed page in robots.txt: If robots.txt blocks crawling, Googlebot cannot see the noindex tag to remove the page.',
        'Staging Environment Checklist: Always remove staging noindex tags prior to launching a new website.'
      ]
    },
    faqs: [
      {
        question: 'How long does Google take to re-index a page after removing noindex?',
        answer: 'Depending on site crawl frequency and authority, Google can re-index a page within 24 to 72 hours once the noindex tag is removed and the URL is resubmitted via Google Search Console.'
      }
    ],
    relatedToolSlugs: [
      'robots-meta-checker',
      'nofollow-link-checker',
      'robots-txt-tester',
      'sitemap-generator'
    ]
  },
  {
    id: 'nofollow-link-checker',
    name: 'Nofollow Link Checker',
    slug: 'nofollow-link-checker',
    path: '/tools/nofollow-link-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/nofollow-link-checker/',
    category: 'serp',
    badge: 'Link Attributes',
    shortDescription: 'Audit link attributes across pasted HTML. Differentiates between dofollow, rel=\'nofollow\', rel=\'sponsored\', and rel=\'ugc\'.',
    seoTitle: 'Nofollow Link Checker - Audit Link Rel Attributes | Riad Al Ashekin',
    metaDescription: 'Audit links in pasted HTML code. Identify dofollow links, rel="nofollow", rel="sponsored", and rel="ugc" attributes to protect link equity.',
    h1: 'Nofollow Link Checker',
    intro: 'Search engines evaluate the rel attributes of hyperlinks to determine PageRank equity transfer and compliance with Google Webmaster Guidelines. Paste your HTML code below to categorize every link into dofollow, nofollow, sponsored, or user-generated content (UGC).',
    howToUse: [
      'Paste your content HTML or article body into the analyzer.',
      'Click Audit Links to parse all <a> anchor tags.',
      'Review the summary breakdown of Dofollow vs Nofollow links.',
      'Verify that paid or affiliate links correctly include rel="sponsored".'
    ],
    features: [
      'Categorizes links: Dofollow, rel="nofollow", rel="sponsored", and rel="ugc"',
      'Flags un-tagged paid affiliate links that violate Google link spam guidelines',
      'Calculates PageRank equity distribution across internal and external links',
      'Extracts anchor text alongside each link URL',
      'One-click export of link audit results'
    ],
    technicalExplanation: {
      heading: 'Evolution of Link Attributes in Modern SEO',
      body: 'In 2019, Google evolved nofollow from a strict directive into a hint model, while introducing rel="sponsored" for paid/commercial links and rel="ugc" for user-submitted comments or forum posts. Using the appropriate attribute helps Google understand link context without risking manual spam penalties.',
      points: [
        'rel="sponsored": Mandatory for paid links, advertisements, and affiliate programs.',
        'rel="ugc": Recommended for comment sections, forum threads, and user submissions.',
        'Standard Dofollow: Used for editorial links endorsing trusted external resources.'
      ]
    },
    faqs: [
      {
        question: 'Do nofollow links pass any PageRank value?',
        answer: 'Google treats nofollow as a hint, meaning it generally does not pass direct PageRank equity, but it helps Google discover new URLs and understand entity relationships.'
      }
    ],
    relatedToolSlugs: [
      'internal-link-checker',
      'external-link-checker',
      'anchor-text-analyzer',
      'robots-meta-checker'
    ]
  },
  {
    id: 'internal-link-checker',
    name: 'Internal Link Checker',
    slug: 'internal-link-checker',
    path: '/tools/internal-link-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/internal-link-checker/',
    category: 'serp',
    badge: 'HTML Paste',
    shortDescription: 'Analyze internal link architecture from HTML code. Categorizes relative URLs, detects anchors, and calculates internal link density.',
    seoTitle: 'Internal Link Checker - Audit Internal Link Architecture | Riad Al Ashekin',
    metaDescription: 'Paste webpage HTML to audit internal link structure. Analyze anchor texts, link density, relative vs absolute URLs, and internal PageRank flow.',
    h1: 'Internal Link Checker',
    intro: 'Internal links are the highway system of your website. They distribute authority (PageRank), establish topical clusters, and guide search engine bots to your most important commercial pages. Paste your HTML markup below to inspect all internal links and anchor text distributions.',
    howToUse: [
      'Paste your page HTML or content block into the tool.',
      'Enter your site\'s domain (e.g. example.com) to differentiate internal from external links.',
      'Review the list of internal links, target paths, and associated anchor texts.',
      'Identify opportunities to link to high-priority commercial target pages.'
    ],
    features: [
      'Distinguishes internal domain links from external links automatically',
      'Detects relative paths (/services) and absolute paths (https://example.com/services)',
      'Audits anchor text descriptiveness and flags generic "click here" links',
      'Calculates internal link density (links per 100 words)',
      'Detects fragment anchors (#section) and parameters'
    ],
    technicalExplanation: {
      heading: 'How Internal Links Drive Organic Authority',
      body: 'Unlike external backlinks which you cannot directly control, internal linking is 100% within your authority. Strategic internal linking passes PageRank from high-authority pages (such as your homepage) down to deeper commercial landing pages.',
      points: [
        'Descriptive Anchors: Use relevant target keywords in anchor text instead of generic words.',
        'Topical Silos: Link related articles within the same thematic category to build topical authority.'
      ]
    },
    faqs: [
      {
        question: 'How many internal links should a blog post have?',
        answer: 'As a rule of thumb, include 3 to 8 contextual internal links per 1,000 words, pointing to relevant cornerstone guides or related services.'
      }
    ],
    relatedToolSlugs: [
      'external-link-checker',
      'anchor-text-analyzer',
      'nofollow-link-checker',
      'sitemap-generator'
    ]
  },
  {
    id: 'external-link-checker',
    name: 'External Link Checker',
    slug: 'external-link-checker',
    path: '/tools/external-link-checker/',
    canonicalUrl: 'https://riadalashekin.com/tools/external-link-checker/',
    category: 'serp',
    badge: 'HTML Paste',
    shortDescription: 'Extract and inspect all outbound links from pasted HTML. Validates domains, target attributes, and security flags (noopener/noreferrer).',
    seoTitle: 'External Link Checker - Outbound Link Auditor & Security Inspector | Riad Al Ashekin',
    metaDescription: 'Audit all outbound external links from HTML code. Inspect target domains, security attributes (rel="noopener noreferrer"), and outbound equity transfer.',
    h1: 'External Link Checker',
    intro: 'Citing high-authority external sources demonstrates research rigor and builds user trust. However, unvetted external links can leak crawl equity, present security vulnerabilities, or trigger spam flags. Paste your HTML code below to audit all outbound links.',
    howToUse: [
      'Paste your HTML or article content into the editor.',
      'Enter your own domain name to exclude internal links.',
      'Review all outbound destinations, protocols, and rel attributes.',
      'Ensure links opening in new tabs include appropriate security attributes.'
    ],
    features: [
      'Extracts all outbound URLs and target domain names',
      'Audits target="_blank" links for rel="noopener noreferrer" security protection',
      'Identifies insecure HTTP links pointing to non-SSL destinations',
      'Audits rel="nofollow" and rel="sponsored" compliance on affiliate links',
      'Provides anchor text analysis for all outbound connections'
    ],
    technicalExplanation: {
      heading: 'Outbound Links and Reverse Tabnabbing Security',
      body: 'When a link uses target="_blank" without rel="noopener", the target webpage gains partial access to the originating window via window.opener, enabling phishing attacks (reverse tabnabbing). Modern browsers automatically apply noopener, but adding it explicitly remains an industry best practice.',
      points: [
        'Security Best Practice: Always pair target="_blank" with rel="noopener noreferrer".',
        'Cite Authoritative Sources: Linking to reputable academic, industry, or government sources strengthens topical trust.'
      ]
    },
    faqs: [
      {
        question: 'Do external links hurt my page\'s SEO ranking?',
        answer: 'No. Natural, editorial outbound links to authoritative and relevant websites demonstrate that your content is well-researched, which correlates positively with topical trustworthiness.'
      }
    ],
    relatedToolSlugs: [
      'internal-link-checker',
      'nofollow-link-checker',
      'anchor-text-analyzer',
      'seo-content-analyzer'
    ]
  },
  {
    id: 'anchor-text-analyzer',
    name: 'Anchor Text Analyzer',
    slug: 'anchor-text-analyzer',
    path: '/tools/anchor-text-analyzer/',
    canonicalUrl: 'https://riadalashekin.com/tools/anchor-text-analyzer/',
    category: 'serp',
    badge: 'Anchor Audit',
    shortDescription: 'Analyze anchor text distribution across your links. Identifies over-optimized exact match anchors and provides natural link suggestions.',
    seoTitle: 'Anchor Text Analyzer - Link Profile & Optimization Auditor | Riad Al Ashekin',
    metaDescription: 'Audit anchor text distribution across your content. Detect over-optimized exact match anchors, generic anchor text, and maintain a natural link profile.',
    h1: 'Anchor Text Analyzer',
    intro: 'Anchor text gives search engines vital contextual clues about the content of the linked page. However, aggressive exact-match keyword stuffing can trigger algorithmic spam filters. Paste your HTML below to analyze anchor text variety and balance.',
    howToUse: [
      'Paste your HTML content or backlink list into the analyzer.',
      'Click Analyze Anchors to parse and categorize anchor strings.',
      'Review the distribution breakdown: Exact Match, Partial Match, Branded, and Generic.',
      'Refactor repetitive anchor text to ensure a natural, diverse profile.'
    ],
    features: [
      'Categorizes anchors into Exact Match, Partial Match, Branded, URL, and Generic',
      'Identifies over-optimized anchor text patterns that risk algorithmic scrutiny',
      'Flags unhelpful generic anchors like "click here", "read more", or "link"',
      'Generates frequency charts of the most common anchor words',
      'Exports clean anchor text reports in CSV format'
    ],
    technicalExplanation: {
      heading: 'Anchor Text Optimization and Google Penguin',
      body: 'Google\'s core algorithm evaluates anchor text diversity to detect manipulative link building. A natural backlink or internal link profile features a healthy mix of branded terms, partial matches, natural phrases, and exact keywords. Over-concentrating exact match terms across hundreds of links is an algorithmic red flag.',
      points: [
        'Natural Diversity: Blend branded phrases, descriptive variations, and primary terms.',
        'Contextual Relevance: The surrounding sentence should reinforce the anchor concept.'
      ]
    },
    faqs: [
      {
        question: 'What is the ideal ratio for exact-match anchor text?',
        answer: 'For backlinks, exact-match anchors should rarely exceed 2% to 5% of your total profile. For internal links, you have more flexibility, but anchor text should remain descriptive and diverse.'
      }
    ],
    relatedToolSlugs: [
      'internal-link-checker',
      'external-link-checker',
      'keyword-density-checker',
      'seo-content-analyzer'
    ]
  },
  {
    id: 'serp-snippet-preview',
    name: 'SERP Snippet Preview',
    slug: 'serp-snippet-preview',
    path: '/tools/serp-snippet-preview/',
    canonicalUrl: 'https://riadalashekin.com/tools/serp-snippet-preview/',
    category: 'serp',
    badge: 'Live Preview',
    shortDescription: 'Preview how your page will appear in Google desktop and mobile search results with real-time character count and pixel truncation warnings.',
    seoTitle: 'SERP Snippet Preview - Google Search Simulator | Riad Al Ashekin',
    metaDescription: 'Visualize how your webpage snippet appears on Google desktop and mobile search. Test titles, descriptions, favicons, and breadcrumb URLs.',
    h1: 'SERP Snippet Preview',
    intro: 'First impressions matter. Before publishing, simulate exactly how your webpage snippet will look on Google search results. Test desktop vs mobile layouts, favicon rendering, site name display, and breadcrumb paths.',
    howToUse: [
      'Input your target URL, Page Title, and Meta Description.',
      'Optional: Add your site name and favicon URL for realistic rich snippet rendering.',
      'Toggle between Desktop View and Mobile Card View.',
      'Refine your copy to avoid awkward truncation marks (...).'
    ],
    features: [
      'Pixel-perfect simulation of Google\'s latest 2025/2026 SERP layout',
      'Instant toggle between Desktop and Mobile card views',
      'Favicon and site name visual simulator',
      'Live character and pixel length safety meters',
      'Instant HTML snippet export'
    ],
    technicalExplanation: {
      heading: 'Maximizing Organic Click-Through Rate (CTR)',
      body: 'Achieving position #1 on Google is only half the battle. If your search snippet is bland or truncated, users will click on competing results. Crafting compelling, pixel-optimized snippets with numbers, power words, and clear value propositions can double your organic CTR without changing your rank position.',
      points: [
        'Front-load Keywords: Put the primary keyword in the first 3-4 words of your title.',
        'Actionable Descriptions: Include clear verbs (Discover, Learn, Compare, Calculate).'
      ]
    },
    faqs: [
      {
        question: 'Why does Google display a different snippet than what I wrote?',
        answer: 'Google dynamically generates snippet descriptions based on the specific query searched. If your page body contains a sentence that better answers the user\'s query, Google will extract that text instead.'
      }
    ],
    relatedToolSlugs: [
      'meta-title-description-checker',
      'meta-title-description-length-checker',
      'character-counter',
      'seo-slug-generator'
    ]
  }
];
