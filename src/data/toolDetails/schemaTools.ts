import { ToolRegistryItem } from './types';

export const schemaTools: ToolRegistryItem[] = [
  {
    id: 'structured-data',
    name: 'Structured Data Test',
    slug: 'structured-data-test',
    path: '/tools/structured-data-test/',
    canonicalUrl: 'https://riadalashekin.com/tools/structured-data-test/',
    category: 'schema',
    badge: 'Schema',
    shortDescription: 'Validate and test your structured data with ease. Ensure schema markup is correct for better search engine visibility and rich results.',
    seoTitle: 'Structured Data Test & Schema Validator | Riad Al Ashekin',
    metaDescription: 'Test and validate JSON-LD, Microdata, and Schema.org markup. Detect syntax errors, missing mandatory fields, and verify Google Rich Results readiness.',
    h1: 'Structured Data Test',
    intro: 'Rich results on Google search (stars, FAQs, breadcrumbs, pricing) rely on clean structured data. Paste your JSON-LD script or HTML code below to parse schema entities, validate required properties, and detect critical syntax errors before Googlebot crawls your page.',
    howToUse: [
      'Paste your JSON-LD script block or full HTML source code.',
      'Click Test Structured Data to parse all Schema.org entities.',
      'Review detected types (e.g. Article, FAQPage, Organization, Product).',
      'Examine any identified errors, missing required properties, or warnings.'
    ],
    features: [
      'Validates JSON-LD schema syntax against official Schema.org standards',
      'Detects unescaped quotes, trailing commas, and malformed JSON structures',
      'Extracts nested schemas (e.g. Offer inside Product, Author inside Article)',
      'Simulates Google Rich Results qualification status',
      'Provides copy-ready fixes for invalid code blocks'
    ],
    technicalExplanation: {
      heading: 'How Google Uses Structured Data for Rich Results',
      body: 'Structured data is a standardized format (Schema.org) that provides explicit clues about the meaning of a page. When properly implemented, Google uses this data to enhance standard search snippets with rich features such as review stars, recipe cook times, event dates, and interactive FAQ accordions.',
      points: [
        'Preferred Format: Google officially recommends JSON-LD embedded inside a <script type="application/ld+json"> tag.',
        'Accuracy Mandate: Schema markup must reflect content that is actually visible to human visitors on the page.'
      ]
    },
    examples: {
      title: 'Valid WebSite Schema Example',
      input: '{\n  "@context": "https://schema.org",\n  "@type": "WebSite",\n  "name": "Acme Tools",\n  "url": "https://example.com/"\n}',
      output: 'Entity: WebSite\nStatus: VALID (0 Errors, 0 Warnings)\nFields: name, url',
      notes: 'Clean, error-free JSON-LD that satisfies Google Search Console criteria.'
    },
    faqs: [
      {
        question: 'Does structured data guarantee rich results on Google?',
        answer: 'No. Having valid structured data makes your page eligible for rich results, but Google\'s algorithms decide whether to display rich snippets based on user query context, site authority, and content quality.'
      },
      {
        question: 'Can I include multiple schemas on a single page?',
        answer: 'Yes! You can either include an array of schemas in one JSON-LD block or use multiple <script type="application/ld+json"> tags for different entities (e.g. BreadcrumbList and Article).'
      }
    ],
    relatedToolSlugs: [
      'schema-validator',
      'schema-markup-generator',
      'faq-schema-generator',
      'breadcrumb-schema-generator'
    ],
    legacyPaths: ['/structured-data-test/']
  },
  {
    id: 'schema-markup-generator',
    name: 'Schema Markup Generator',
    slug: 'schema-markup-generator',
    path: '/tools/schema-markup-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/schema-markup-generator/',
    category: 'schema',
    badge: 'JSON-LD',
    shortDescription: 'Universal JSON-LD generator for WebSite, Person, Event, Course, and custom entities with clean schema.org compliance.',
    seoTitle: 'Schema Markup Generator - Create Clean JSON-LD Code | Riad Al Ashekin',
    metaDescription: 'Generate clean, valid JSON-LD structured data for WebSite, Person, Event, Course, and Local Business entities. Ready to copy and paste into HTML.',
    h1: 'Schema Markup Generator',
    intro: 'Easily build Google-compliant JSON-LD structured data without touching complex syntax. Select your schema entity type, fill in the guided fields, and copy the generated schema code directly into your website\'s <head> section.',
    howToUse: [
      'Choose the Schema Type you want to create (WebSite, Person, Event, Course).',
      'Fill in the required information (Name, URL, Image, Description, Dates).',
      'Watch the live JSON-LD script generate automatically in the right pane.',
      'Copy the snippet or click Test with Validator to verify syntax.'
    ],
    features: [
      'Supports WebSite, Person, Event, Course, and SoftwareApplication schemas',
      'Automatic JSON formatting with zero syntax errors or trailing commas',
      'Context-aware fields with built-in validation helpers',
      'Generates script tags ready for immediate HTML placement',
      'One-click clipboard copy and file export'
    ],
    technicalExplanation: {
      heading: 'Why JSON-LD is the Gold Standard for Technical SEO',
      body: 'Unlike legacy Microdata or RDFa formats which require interleaving attributes directly into HTML layout tags, JSON-LD is isolated within a single script tag. This separation prevents frontend styling conflicts and simplifies site maintenance during design updates.',
      points: [
        'Clean Separation: Code resides neatly inside <script type="application/ld+json">.',
        'Knowledge Graph Integration: Helps search engines associate entities, founders, and brands with verified entity databases.'
      ]
    },
    faqs: [
      {
        question: 'Where do I put the generated code on my website?',
        answer: 'Paste the generated code inside the <head> or at the bottom of the <body> section of your HTML document or CMS header injection tool.'
      }
    ],
    relatedToolSlugs: [
      'structured-data-test',
      'schema-validator',
      'organization-schema-generator',
      'faq-schema-generator'
    ]
  },
  {
    id: 'schema-validator',
    name: 'Schema Validator',
    slug: 'schema-validator',
    path: '/tools/schema-validator/',
    canonicalUrl: 'https://riadalashekin.com/tools/schema-validator/',
    category: 'schema',
    badge: 'Syntax Check',
    shortDescription: 'Validate JSON-LD structured data syntax and verify required properties against official Google Rich Results and Schema.org specifications.',
    seoTitle: 'Schema Validator - Free JSON-LD Syntax & Rich Results Checker | Riad Al Ashekin',
    metaDescription: 'Validate your JSON-LD structured data syntax. Detect missing required fields, misplaced brackets, and ensure Schema.org compliance.',
    h1: 'Schema Validator',
    intro: 'Ensure your structured data contains no syntax flaws that could disqualify your website from rich search results. Paste your JSON-LD snippet below to check for syntax errors, validate mandatory Schema.org properties, and verify data formatting.',
    howToUse: [
      'Paste your raw JSON-LD markup into the code validator.',
      'Click Validate Schema to initiate the syntax and rule check.',
      'Inspect the validation tree showing all recognized entities and fields.',
      'Fix any flagged errors with specific line-and-column guidance.'
    ],
    features: [
      'Line and column error identification for broken JSON syntax',
      'Validates mandatory fields against Schema.org 2025/2026 specifications',
      'Checks URL formats, ISO dates, and numerical types',
      'Verifies @context and @type declaration integrity',
      'Auto-formats messy or unminified JSON schemas'
    ],
    technicalExplanation: {
      heading: 'Preventing Schema Silent Failures in Search Engines',
      body: 'A single trailing comma or unclosed quote invalidates an entire JSON-LD script, causing search engines to silently ignore the entire block without warning you on the frontend. Running proactive schema validation prevents costly traffic loss.',
      points: [
        'Strict JSON Syntax: All keys and strings must use double quotes (").',
        'ISO 8601 Dates: Dates must follow standard YYYY-MM-DD or full timestamp format.'
      ]
    },
    faqs: [
      {
        question: 'What is the difference between Schema.org validation and Google Rich Results?',
        answer: 'Schema.org defines the full vocabulary of all theoretical web entities. Google Rich Results is a specific subset of Schema.org that Google actively supports with visual search features.'
      }
    ],
    relatedToolSlugs: [
      'structured-data-test',
      'schema-markup-generator',
      'json-validator',
      'faq-schema-generator'
    ]
  },
  {
    id: 'faq-schema-generator',
    name: 'FAQ Schema Generator',
    slug: 'faq-schema-generator',
    path: '/tools/faq-schema-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/faq-schema-generator/',
    category: 'schema',
    badge: 'FAQPage',
    shortDescription: 'Build clean, error-free FAQPage JSON-LD structured data. Add multiple question-and-answer pairs and copy validated code instantly.',
    seoTitle: 'FAQ Schema Generator - Create Google FAQPage JSON-LD | Riad Al Ashekin',
    metaDescription: 'Generate valid FAQPage JSON-LD structured data for Google search. Add unlimited Q&A pairs, format text, and export validated schema markup.',
    h1: 'FAQ Schema Generator',
    intro: 'Structure your frequently asked questions with clean FAQPage JSON-LD markup. Adding FAQ structured data clarifies key concepts for search engines and enhances your site\'s eligibility for interactive accordion snippets on qualified domains.',
    howToUse: [
      'Type your first Question in the Question input.',
      'Provide the thorough, helpful Answer in the Answer textarea.',
      'Click + Add Another Question to include additional Q&A pairs.',
      'Copy the generated JSON-LD script and insert it into your webpage head.'
    ],
    features: [
      'Unlimited Question and Answer pairs support',
      'Automated sanitization of HTML tags and quotes inside answers',
      'Real-time live JSON-LD preview as you type',
      'One-click clipboard copy of production-ready code',
      'Conforms to Google\'s strict FAQPage guidelines'
    ],
    technicalExplanation: {
      heading: 'Google FAQPage Guidelines & Compliance',
      body: 'Google allows FAQPage schema when a page features a list of questions and answers. All questions and answers declared in your JSON-LD must be verbatim visible on the page to human users. Hidden FAQs violate Google webmaster guidelines.',
      points: [
        'Visible Content Rule: Every question in schema must exist visibly on the page.',
        'No Promotional Spam: Do not use FAQ schema for advertising or user forum comments.'
      ]
    },
    faqs: [
      {
        question: 'Can any website get FAQ rich snippets in Google Search?',
        answer: 'In August 2023, Google restricted FAQ rich snippets primarily to well-known, authoritative government and health websites. However, valid FAQ schema remains essential for entity recognition and AI search engines.'
      }
    ],
    relatedToolSlugs: [
      'schema-markup-generator',
      'structured-data-test',
      'breadcrumb-schema-generator',
      'article-schema-generator'
    ]
  },
  {
    id: 'breadcrumb-schema-generator',
    name: 'Breadcrumb Schema Generator',
    slug: 'breadcrumb-schema-generator',
    path: '/tools/breadcrumb-schema-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/breadcrumb-schema-generator/',
    category: 'schema',
    badge: 'Breadcrumbs',
    shortDescription: 'Generate BreadcrumbList JSON-LD markup to help Google display hierarchical breadcrumb paths in search result snippets.',
    seoTitle: 'Breadcrumb Schema Generator - Create BreadcrumbList JSON-LD | Riad Al Ashekin',
    metaDescription: 'Generate Google-compliant BreadcrumbList JSON-LD schema markup. Replace messy URLs in search snippets with clean hierarchical navigation breadcrumbs.',
    h1: 'Breadcrumb Schema Generator',
    intro: 'Transform messy URL strings in Google search snippets into clean, authoritative breadcrumb trails (e.g. Home > Services > Cloud Migration). Generate valid BreadcrumbList structured data with proper position numbering and entity URLs.',
    howToUse: [
      'Enter the root domain or Home breadcrumb level.',
      'Add intermediate category and sub-category levels with their titles and URLs.',
      'Add the final current page item.',
      'Copy the generated BreadcrumbList script and deploy it to your template.'
    ],
    features: [
      'Generates BreadcrumbList with sequential ListItem position indices',
      'Supports unlimited hierarchical nesting levels',
      'Ensures full absolute canonical URL formatting',
      'Replaces raw URL paths in Google search results with elegant category names',
      'Instant syntax validation'
    ],
    technicalExplanation: {
      heading: 'How Breadcrumb Structured Data Shapes SERP Presentation',
      body: 'Search engines display breadcrumbs to give searchers immediate context about where a page sits within a site\'s taxonomy. Instead of showing https://example.com/cat/subcat/item-12908, Google will render "example.com > Categories > Item Title", significantly boosting user trust and click-through rates.',
      points: [
        'Sequential Indexing: Position numbering must start at 1 and increment consecutively (1, 2, 3...).',
        'Canonical Linking: Breadcrumb item URLs must link to canonical URLs.'
      ]
    },
    faqs: [
      {
        question: 'Should the last breadcrumb item link to the current page?',
        answer: 'Yes, the last ListItem should reflect the current page\'s title and URL to complete the navigational chain.'
      }
    ],
    relatedToolSlugs: [
      'schema-markup-generator',
      'structured-data-test',
      'seo-friendly-url-test',
      'article-schema-generator'
    ]
  },
  {
    id: 'local-business-schema',
    name: 'Local Business Schema Generator',
    slug: 'local-business-schema-generator',
    path: '/tools/local-business-schema-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/local-business-schema-generator/',
    category: 'schema',
    badge: 'Local SEO',
    shortDescription: 'Create rich LocalBusiness JSON-LD markup with address, geo-coordinates, opening hours, phone number, and accepted payments.',
    seoTitle: 'Local Business Schema Generator - Local SEO JSON-LD Tool | Riad Al Ashekin',
    metaDescription: 'Generate rich LocalBusiness JSON-LD structured data. Add business address, phone, opening hours, geo-coordinates, and map links for Local Google SEO.',
    h1: 'Local Business Schema Generator',
    intro: 'Dominate the Google Local Pack and Google Maps by providing unambiguous structured business information. Generate LocalBusiness schema with precise postal addresses, geo-coordinates (latitude/longitude), opening hours, phone numbers, and price ranges.',
    howToUse: [
      'Select your specific business category (e.g. Restaurant, DentalClinic, LegalService, Store).',
      'Enter business name, phone number, website URL, and price range.',
      'Provide the exact physical street address, city, state, postal code, and country.',
      'Specify opening hours and geo-coordinates, then copy your production-ready JSON-LD.'
    ],
    features: [
      'Supports 40+ specialized local business sub-types (MedicalClinic, ProfessionalService, etc.)',
      'PostalAddress and GeoCoordinates schema mapping',
      'OpeningHoursSpecification support for complex operating schedules',
      'sameAs social profile and Google Business Profile cross-linking',
      '100% compliant with Google Local Knowledge Graph standards'
    ],
    technicalExplanation: {
      heading: 'NAP Consistency and Local Knowledge Graphs',
      body: 'Search engines cross-reference Name, Address, and Phone number (NAP) across hundreds of web directories. Implementing LocalBusiness schema on your website acts as the definitive single source of truth for Google\'s Local Knowledge Graph.',
      points: [
        'Geo Precision: Use exact decimal coordinates (e.g. 40.7128, -74.0060) for pinpoint map verification.',
        'Opening Hours: Format times in 24-hour HH:MM notation (e.g. 09:00 to 18:00).'
      ]
    },
    faqs: [
      {
        question: 'Should I put Local Business schema on every page or just the contact/about page?',
        answer: 'Best practice is putting Local Business schema on your Homepage and Contact/Locations page, or creating location-specific schemas on dedicated location landing pages.'
      }
    ],
    relatedToolSlugs: [
      'local-seo-pricing-calculator',
      'organization-schema-generator',
      'schema-markup-generator',
      'structured-data-test'
    ]
  },
  {
    id: 'organization-schema-generator',
    name: 'Organization Schema Generator',
    slug: 'organization-schema-generator',
    path: '/tools/organization-schema-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/organization-schema-generator/',
    category: 'schema',
    badge: 'Knowledge Graph',
    shortDescription: 'Generate Organization schema with logo, official website, sameAs social links, founder details, and contact points.',
    seoTitle: 'Organization Schema Generator - Build Entity JSON-LD | Riad Al Ashekin',
    metaDescription: 'Create Google Knowledge Graph Organization JSON-LD schema. Declare official logos, founder details, corporate headquarters, and sameAs social media profiles.',
    h1: 'Organization Schema Generator',
    intro: 'Establish your brand\'s authoritative presence in the Google Knowledge Graph. Generate Organization structured data that connects your official logo, corporate headquarters, founder credentials, and verified social media profiles into an interconnected entity graph.',
    howToUse: [
      'Enter your official Company Name, legal name, and primary domain URL.',
      'Add the direct URL to your high-resolution company logo.',
      'Input verified social profile URLs (LinkedIn, X/Twitter, YouTube, GitHub) into sameAs.',
      'Copy the generated JSON-LD script into your homepage template.'
    ],
    features: [
      'Generates Organization and Corporation JSON-LD schemas',
      'sameAs array mapping to establish social entity links',
      'ContactPoint declaration for Customer Service and Sales numbers',
      'Founder and foundingDate entity attributes',
      'Validates logo image requirements for Knowledge Panel display'
    ],
    technicalExplanation: {
      heading: 'Connecting Entities via sameAs Annotations',
      body: 'Google\'s Knowledge Graph understands the real world through entities and their relationships. By declaring sameAs links to your Wikidata, Wikipedia, LinkedIn, and Crunchbase profiles, you help Google confidently verify your organization as a distinct, authoritative entity.',
      points: [
        'Logo Dimensions: Logos should be square or rectangular with high resolution (minimum 112x112px).',
        'Single Point of Truth: Organization schema is best placed on the root homepage.'
      ]
    },
    faqs: [
      {
        question: 'How does Organization schema help get a Google Knowledge Panel?',
        answer: 'While schema alone does not guarantee a Knowledge Panel, providing clean Organization markup with sameAs links gives Google the authoritative verification needed to assemble an official branded Knowledge Panel.'
      }
    ],
    relatedToolSlugs: [
      'local-business-schema-generator',
      'article-schema-generator',
      'schema-markup-generator',
      'structured-data-test'
    ]
  },
  {
    id: 'article-schema-generator',
    name: 'Article Schema Generator',
    slug: 'article-schema-generator',
    path: '/tools/article-schema-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/article-schema-generator/',
    category: 'schema',
    badge: 'Editorial',
    shortDescription: 'Generate Article, NewsArticle, and BlogPosting JSON-LD with author, publisher, datePublished, and dateModified attributes.',
    seoTitle: 'Article Schema Generator - BlogPosting & NewsArticle JSON-LD | Riad Al Ashekin',
    metaDescription: 'Generate Article, BlogPosting, and NewsArticle JSON-LD structured data. Optimize author credentials, dateModified timestamps, and hero images for Google Search.',
    h1: 'Article Schema Generator',
    intro: 'Enhance your editorial content with Article structured data. Declare author credentials, publication and modification dates, publisher details, and high-resolution hero images to qualify for Google Top Stories, Google Discover, and rich search cards.',
    howToUse: [
      'Select the article subtype (Article, BlogPosting, or NewsArticle).',
      'Enter headline, article URL, and hero image URL.',
      'Specify Author Name and Author Profile/Social URL.',
      'Provide ISO dates for datePublished and dateModified, then copy the generated code.'
    ],
    features: [
      'Supports Article, BlogPosting, and NewsArticle types',
      'Detailed Author Person entity with sameAs professional credentials',
      'Publisher entity with Organization logo integration',
      'Accurate datePublished and dateModified timestamps',
      'Compliant with Google Top Stories and Google Discover requirements'
    ],
    technicalExplanation: {
      heading: 'Article Schema and Google E-E-A-T Signals',
      body: 'Google evaluates Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Linking your article to a distinct Person entity via the author attribute allows Google to associate the content with the author\'s established industry track record.',
      points: [
        'dateModified Transparency: Always update dateModified when updating substantive guide content.',
        'High-Resolution Images: Google requires images of at least 1200 pixels width with max-image-preview:large enabled.'
      ]
    },
    faqs: [
      {
        question: 'Should I use Article or BlogPosting for my blog articles?',
        answer: 'Both work well; BlogPosting is a specialized subtype of Article designed for standard blog content, while Article is widely accepted for all editorial guides.'
      }
    ],
    relatedToolSlugs: [
      'organization-schema-generator',
      'faq-schema-generator',
      'schema-markup-generator',
      'structured-data-test'
    ]
  },
  {
    id: 'product-schema-generator',
    name: 'Product Schema Generator',
    slug: 'product-schema-generator',
    path: '/tools/product-schema-generator/',
    canonicalUrl: 'https://riadalashekin.com/tools/product-schema-generator/',
    category: 'schema',
    badge: 'eCommerce',
    shortDescription: 'Generate Product and Offer schema markup with price, currency, availability, rating, review count, and SKU for eCommerce.',
    seoTitle: 'Product Schema Generator - eCommerce JSON-LD Rich Snippets | Riad Al Ashekin',
    metaDescription: 'Generate valid Product and Offer JSON-LD schema for eCommerce stores. Display star ratings, review counts, pricing, and stock availability in Google Search.',
    h1: 'Product Schema Generator',
    intro: 'Boost eCommerce sales by displaying star ratings, live pricing, and "In Stock" badges directly in Google search snippets. Build compliant Product and Offer JSON-LD schema with SKU numbers, brand identifiers, and aggregate review data.',
    howToUse: [
      'Enter the Product Name, description, brand, and SKU/GTIN identifier.',
      'Add product image URL and canonical product page URL.',
      'Configure the Offer section: Price, Currency (USD, EUR, GBP), and Availability (InStock, OutOfStock).',
      'Add AggregateRating details (average rating and review count) and export the code.'
    ],
    features: [
      'Full Product and Offer nested JSON-LD structure',
      'AggregateRating integration for search snippet star ratings',
      'ItemAvailability status (InStock, OutOfStock, PreOrder)',
      'SKU, GTIN, and MPN product identifier support',
      'PriceValidUntil discount expiration timestamping'
    ],
    technicalExplanation: {
      heading: 'eCommerce Rich Results and Merchant Center Eligibility',
      body: 'Google Shopping and Google Organic Search rely heavily on Product schema to verify price accuracy and stock availability. Accurate structured data enables free merchant listings and interactive product carousels.',
      points: [
        'Mandatory Price Format: Price must be a valid number without currency symbols (e.g. "49.99" not "$49.99").',
        'AggregateRating Verification: The rating value must be between 1 and 5, based on authentic customer reviews.'
      ]
    },
    faqs: [
      {
        question: 'Will Product schema display star ratings immediately?',
        answer: 'Once Google crawls and validates your Product schema, star ratings typically start displaying in search results within 1 to 2 weeks for authoritative domains.'
      }
    ],
    relatedToolSlugs: [
      'schema-markup-generator',
      'structured-data-test',
      'schema-validator',
      'conversion-rate-calculator'
    ]
  }
];
