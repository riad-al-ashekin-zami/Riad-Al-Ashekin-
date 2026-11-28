import { ToolRegistryItem } from './types';

export const devTools: ToolRegistryItem[] = [
  {
    id: 'comma-separator',
    name: 'Comma Separator Tool',
    slug: 'comma-separator',
    path: '/comma-separator/',
    canonicalUrl: 'https://riadalashekin.com/comma-separator/',
    category: 'dev',
    badge: 'Formatter',
    shortDescription: 'Quickly format lists of keywords, numbers, emails, and text items with commas, quotes, or custom delimiters for SEO and SQL queries.',
    seoTitle: 'Comma Separator Tool - Convert Column Lists to Comma-Separated | Riad Al Ashekin',
    metaDescription: 'Convert column text and lists into comma-separated strings or SQL IN queries. Add quotes, remove duplicates, and customize delimiters instantly.',
    h1: 'Comma Separator Tool',
    intro: 'Transform messy column data, spreadsheets, or keyword lists into clean comma-delimited strings in one click. Add quotes for SQL IN statements, strip duplicates, sort alphabetically, and format data for Google Ads or database queries.',
    howToUse: [
      'Paste your column list (one item per line) into the input box.',
      'Select your delimiter: Comma, Semicolon, Pipe (|), or Custom.',
      'Choose optional formatting: Wrap with single/double quotes or remove duplicates.',
      'Copy the formatted string or download it directly.'
    ],
    features: [
      'Converts column lists to comma-separated values (CSV) instantly',
      'Quotes wrapping for SQL queries (\'item1\', \'item2\', \'item3\')',
      'Custom delimiter support (pipe |, tab, space, semicolon ;)',
      'Automated deduplication and alphabetical sorting',
      'Instant one-click clipboard copy'
    ],
    technicalExplanation: {
      heading: 'Formatting Keyword Lists for Ad Platforms and Databases',
      body: 'Copying lists from spreadsheets often results in newline-separated strings that cannot be pasted directly into SQL queries or PPC campaign editors. This tool quickly converts raw line breaks into properly escaped and delimited strings.',
      points: [
        'Deduplication: Automatically strips identical duplicate values.',
        'Trim Whitespace: Cleans leading and trailing spaces around each item.'
      ]
    },
    examples: {
      title: 'Column to Delimited Conversion',
      input: 'apple\nbanana\norange\napple',
      output: 'apple, banana, orange',
      notes: 'Clean, de-duplicated comma-separated list ready for database insertion.'
    },
    faqs: [
      {
        question: 'How do I turn a column of values into a comma-separated list?',
        answer: 'Paste your column of items into the Input Items (Column or List) box with one entry per line. Leave the Delimiter set to Comma (,) and the Separated Result box updates right away, ready for the Copy button.'
      },
      {
        question: 'Can it use other separators besides commas?',
        answer: 'Yes. The Delimiter menu lets you switch between Comma (,), Semicolon (;), Pipe (|), and Space ( ). You can also check Wrap with quotes ("item") to place double quotes around each entry.'
      },
      {
        question: 'Does it remove duplicates?',
        answer: 'Yes. The Remove duplicates checkbox is enabled by default and strips exact duplicate entries automatically. Uncheck it if you need to keep every repeated item in your list.'
      },
      {
        question: 'Does the Comma Separator Tool store or upload my list?',
        answer: 'No. All splitting, trimming, deduplication, and formatting run directly in your browser using JavaScript, so your text never leaves your device.'
      }
    ],
    relatedToolSlugs: [
      'keyword-combiner',
      'character-counter',
      'word-counter-pro',
      'json-formatter'
    ],
    legacyPaths: ['/comma-separator/'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Comma Separator Tool',
      howToUseSteps: [
        'Paste your column of keywords, tags, or values into the Input Items (Column or List) box, or click the trash icon to clear the sample entries first.',
        'Choose your output separator from the Delimiter dropdown: Comma (,), Semicolon (;), Pipe (|), or Space ( ).',
        'Check Wrap with quotes ("item") if you need double quotes around every value, and keep Remove duplicates checked if you want exact repeats stripped.',
        'Review the live item count and formatted text in the Separated Result box, then click Copy to copy the list to your clipboard.'
      ],
      checksOrShowsHeading: 'What the Comma Separator Tool does',
      checksOrShowsIntro: 'The tool splits raw lists on line breaks, commas, or semicolons in your browser and outputs clean delimited text:',
      checksOrShowsPoints: [
        'Four delimiter options: Formats items separated by Comma (,), Semicolon (;), Pipe (|), or Space ( ).',
        'Whitespace trimming and blank-line skipping: Strips extra spaces around each entry and ignores empty lines automatically.',
        'Duplicate removal toggle: Removes exact duplicate entries when Remove duplicates is checked, which is enabled by default.',
        'Double-quote wrapping toggle: Wraps each formatted item in double quotation marks ("item") when Wrap with quotes is checked.',
        'Live item counter and Copy button: Displays the formatted item count in the toolbar and copies the Separated Result with one click.'
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample column input',
      exampleInput: 'technical seo\nkeyword research\nschema markup\ntechnical seo',
      exampleOutputLabel: 'Separated Result (Comma, Remove duplicates on)',
      exampleOutput: 'technical seo, keyword research, schema markup (3 items formatted)',
      exampleNote: 'Switching the Delimiter to Pipe (|) updates the output to technical seo| keyword research| schema markup without changing your original input list.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'How do I turn a column of values into a comma-separated list?',
          answer: 'Paste your column of items into the Input Items (Column or List) box with one entry per line. Leave the Delimiter set to Comma (,) and the Separated Result box updates right away, ready for the Copy button.'
        },
        {
          question: 'Can it use other separators besides commas?',
          answer: 'Yes. The Delimiter menu lets you switch between Comma (,), Semicolon (;), Pipe (|), and Space ( ). You can also check Wrap with quotes ("item") to place double quotes around each entry.'
        },
        {
          question: 'Does it remove duplicates?',
          answer: 'Yes. The Remove duplicates checkbox is enabled by default and strips exact duplicate entries automatically. Uncheck it if you need to keep every repeated item in your list.'
        },
        {
          question: 'Does the Comma Separator Tool store or upload my list?',
          answer: 'No. All splitting, trimming, deduplication, and formatting run directly in your browser using JavaScript, so your text never leaves your device.'
        }
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: [
        'keyword-combiner',
        'character-counter',
        'word-counter-pro'
      ]
    }
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    slug: 'json-formatter',
    path: '/json-formatter/',
    canonicalUrl: 'https://riadalashekin.com/json-formatter/',
    category: 'dev',
    badge: 'Beautifier',
    shortDescription: 'Format, beautify, and indent raw JSON payloads with customizable 2-space or 4-space indentation and syntax highlighting.',
    seoTitle: 'JSON Formatter - Beautify & Pretty-Print JSON Online | Riad Al Ashekin',
    metaDescription: 'Beautify, format, and indent raw JSON strings online. Clean nested JSON-LD schema, API payloads, and configuration files with syntax color highlighting.',
    h1: 'JSON Formatter & Beautifier',
    intro: 'Turn minified, unreadable JSON strings and API responses into beautifully structured, indented data. Customize indentation levels, inspect nested keys, and validate syntax with syntax highlighting.',
    howToUse: [
      'Paste raw JSON code into the editor.',
      'Select indentation: 2 spaces, 4 spaces, or tabs.',
      'Click Beautify JSON to format the code structure.',
      'Copy the formatted JSON or download it as a .json file.'
    ],
    features: [
      'Beautifies minified JSON with 2-space, 4-space, or tab indentation',
      'Validates syntax and detects missing brackets or quotes',
      'Interactive collapsible tree view for inspecting deep objects',
      'One-click JSON minification toggle',
      'Zero server upload—100% private'
    ],
    technicalExplanation: {
      heading: 'Standardizing JSON-LD Schema for Easy Auditing',
      body: 'Minified JSON-LD scripts are virtually impossible to audit by eye for missing schema properties or nested array errors. Pretty-printing the JSON reveals the hierarchical relationship between objects, making debugging immediate.',
      points: [
        'RFC 8259 Standard: Validates strictly against standard JSON data interchange formats.'
      ]
    },
    faqs: [
      {
        question: 'Does formatting change the meaning of the JSON data?',
        answer: 'No. Adding whitespace and line breaks purely aids human readability; parsers interpret the data identically.'
      }
    ],
    relatedToolSlugs: [
      'json-validator',
      'schema-validator',
      'structured-data-test',
      'xml-formatter'
    ]
  },
  {
    id: 'json-validator',
    name: 'JSON Validator',
    slug: 'json-validator',
    path: '/json-validator/',
    canonicalUrl: 'https://riadalashekin.com/json-validator/',
    category: 'dev',
    badge: 'Syntax Check',
    shortDescription: 'Validate JSON syntax with line-and-column error highlighting for malformed brackets, missing commas, or quote issues.',
    seoTitle: 'JSON Validator - Free Online JSON Syntax Checker | Riad Al Ashekin',
    metaDescription: 'Validate JSON code with precise line and column error reporting. Detect trailing commas, unescaped quotes, and syntax errors instantly.',
    h1: 'JSON Validator',
    intro: 'Identify exact line-and-column syntax errors in your JSON data. Detect trailing commas, unescaped quotes, unclosed braces, and type mismatches before deploying code to APIs or web applications.',
    howToUse: [
      'Paste your JSON code snippet into the validator.',
      'Click Validate JSON to execute syntax parsing.',
      'Inspect the validation status badge (Valid vs Error).',
      'View precise line number, column position, and suggested corrections if errors exist.'
    ],
    features: [
      'Pinpoints exact line and column numbers for syntax failures',
      'Detects illegal trailing commas that break strict parsers',
      'Validates nested arrays, objects, and unicode strings',
      'Auto-fixes common formatting quirks with one click',
      'Instant feedback'
    ],
    technicalExplanation: {
      heading: 'Strict JSON Syntax vs JavaScript Object Literals',
      body: 'Unlike JavaScript object literals, JSON requires all property names to be wrapped in double quotes ("), disallows single quotes for strings, and forbids trailing commas after the final element in an array or object.',
      points: [
        'JSON Parser Safety: Prevents runtime JSON.parse() crashes in production software.'
      ]
    },
    faqs: [
      {
        question: 'Why does a trailing comma break JSON?',
        answer: 'The official JSON specification (RFC 8259) forbids trailing commas. Browsers and search engines will throw a SyntaxError and reject the entire payload.'
      }
    ],
    relatedToolSlugs: [
      'json-formatter',
      'schema-validator',
      'xml-validator',
      'structured-data-test'
    ]
  },
  {
    id: 'xml-formatter',
    name: 'XML Formatter',
    slug: 'xml-formatter',
    path: '/xml-formatter/',
    canonicalUrl: 'https://riadalashekin.com/xml-formatter/',
    category: 'dev',
    badge: 'XML Clean',
    shortDescription: 'Pretty-print messy XML feeds, sitemaps, and RSS documents with clean tag indentation and structured line wraps.',
    seoTitle: 'XML Formatter - Beautify & Pretty-Print XML Sitemaps | Riad Al Ashekin',
    metaDescription: 'Format and pretty-print XML sitemaps, RSS feeds, and XML documents online. Clean tag indentation, line wraps, and validate XML syntax.',
    h1: 'XML Formatter & Beautifier',
    intro: 'Minified or single-line XML sitemaps and RSS feeds are difficult to read and inspect. Pretty-print messy XML code with clean, hierarchical tag indentation, structured line breaks, and syntax coloring.',
    howToUse: [
      'Paste raw or single-line XML code into the input area.',
      'Click Format XML to auto-indent opening, closing, and self-closing tags.',
      'Inspect the clean hierarchical tree structure.',
      'Copy the formatted XML for site deployment or documentation.'
    ],
    features: [
      'Indent XML sitemaps, RSS feeds, and data documents with 2-space hierarchy',
      'Preserves XML declarations (<?xml version="1.0"?>) and namespaces',
      'Formats self-closing tags (<url/>) properly',
      'Validates tag nesting balance',
      'One-click copy to clipboard'
    ],
    technicalExplanation: {
      heading: 'Auditing XML Sitemaps with Proper Indentation',
      body: 'Inspecting large XML sitemaps for incorrect <lastmod> date formats or missing <loc> tags requires clean formatting. Well-structured indentation allows webmasters to spot structural anomalies instantly.',
      points: [
        'XML Well-Formedness: Every opening tag must have a matching closing tag or self-closing syntax.'
      ]
    },
    faqs: [
      {
        question: 'Does formatting an XML sitemap change how search engines crawl it?',
        answer: 'No. Search engine crawlers read XML tags regardless of line breaks or spaces. Formatting makes XML sitemaps and feeds easier for people to read and check.'
      },
      {
        question: 'How does the XML Formatter indent nested tags?',
        answer: 'The tool splits markup between closing and opening brackets (><) onto separate lines and indents child tags by two spaces per nesting level.'
      },
      {
        question: 'Why does Processed Output sometimes show a percentage savings?',
        answer: 'When your input contains long runs of spacing that shrink after reformatting, the header compares character counts between Input Raw Code and Processed Output and displays the percentage difference.'
      },
      {
        question: 'Is my XML code sent to a server when I paste it here?',
        answer: 'No. Formatting runs inside your browser with no server upload.'
      }
    ],
    relatedToolSlugs: [
      'xml-validator',
      'sitemap-tester',
      'json-formatter',
      'html-cleaner'
    ],
    belowSectionGuide: {
      howToUseHeading: 'How to use the XML Formatter',
      howToUseSteps: [
        'Paste compressed or single-line XML markup into the Input Raw Code textarea.',
        'Read the Processed Output panel below the editor, which updates automatically as you type without clicking a submit button.',
        'Scan the two-space indented tag hierarchy to inspect opening tags, closing tags, and nested elements such as <url> and <loc>.',
        'Click Copy Output to copy the formatted text from the preview panel to your clipboard.'
      ],
      checksOrShowsHeading: 'What the XML Formatter does',
      checksOrShowsIntro: 'The XML Formatter runs locally in your browser and provides a fast way to split compact XML strings into indented lines:',
      checksOrShowsPoints: [
        'Live two-space indentation: Splits adjacent tags onto new lines and adds two spaces of indentation inside opening non-self-closing tags.',
        'Prefilled sitemap sample: Displays a placeholder XML sitemap example in Input Raw Code so you can see the expected structure right away.',
        'Character-count comparison: Shows a percentage reduction next to Processed Output whenever the formatted result has fewer characters than the raw input.',
        'One-click clipboard copy: Provides a Copy Output button above the dark preview panel so you can grab the indented markup immediately.'
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample input',
      exampleInput: '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://example.com/</loc><lastmod>2026-03-01</lastmod></url></urlset>',
      exampleOutputLabel: 'Returned output',
      exampleOutput: '<<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://example.com/</loc>\n    <lastmod>2026-03-01</lastmod>\n  </url>\n</urlset>>',
      exampleNote: 'The simple tag splitter wraps each line segment in angle brackets, so double-check the very first and last bracket characters before saving the copied output into a live sitemap file.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Does formatting an XML sitemap change how search engines crawl it?',
          answer: 'No. Search engine crawlers read XML tags regardless of line breaks or spaces. Formatting makes XML sitemaps and feeds easier for people to read and check.'
        },
        {
          question: 'How does the XML Formatter indent nested tags?',
          answer: 'The tool splits markup between closing and opening brackets (><) onto separate lines and indents child tags by two spaces per nesting level.'
        },
        {
          question: 'Why does Processed Output sometimes show a percentage savings?',
          answer: 'When your input contains long runs of spacing that shrink after reformatting, the header compares character counts between Input Raw Code and Processed Output and displays the percentage difference.'
        },
        {
          question: 'Is my XML code sent to a server when I paste it here?',
          answer: 'No. Formatting runs inside your browser with no server upload.'
        }
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: [
        'xml-validator',
        'sitemap-tester',
        'json-formatter'
      ]
    }
  },
  {
    id: 'xml-validator',
    name: 'XML Validator',
    slug: 'xml-validator',
    path: '/xml-validator/',
    canonicalUrl: 'https://riadalashekin.com/xml-validator/',
    category: 'dev',
    badge: 'XML Lint',
    shortDescription: 'Check XML documents for well-formedness, tag closures, attribute quotes, and valid syntax before deploying to crawlers.',
    seoTitle: 'XML Validator - Check XML Well-Formedness & Sitemap Errors | Riad Al Ashekin',
    metaDescription: 'Validate XML files for syntax errors, missing closing tags, unquoted attributes, and well-formedness. Ensure Googlebot crawls sitemaps smoothly.',
    h1: 'XML Validator & Linting Tool',
    intro: 'Ensure your XML sitemaps, RSS feeds, and configuration files are 100% well-formed. Detect unclosed tags, unescaped ampersands (&), unquoted attributes, and namespace errors before submitting them to Google Search Console.',
    howToUse: [
      'Paste your XML markup into the validator box.',
      'Click Validate XML to check well-formedness.',
      'Review the error log detailing line and column positions of broken tags.',
      'Fix flagged issues and re-validate.'
    ],
    features: [
      'Validates strict XML well-formedness using native browser XML DOM parser',
      'Flags unescaped characters (e.g. & instead of &amp;)',
      'Identifies mismatched tag closures (<url>...</link>)',
      'Verifies root element and namespace declarations',
      'Instant, accurate error reporting'
    ],
    technicalExplanation: {
      heading: 'Common XML Sitemap Sins that Block Google Indexation',
      body: 'Unlike HTML where browsers attempt to render broken tags leniently, XML parsers are strictly binary: a single unescaped ampersand (&) in a URL query parameter will cause search engines to reject the entire sitemap.',
      points: [
        'Entity Escaping: Ampersands must always be encoded as &amp; in XML attributes and text nodes.',
        'Root Closure: The document must have a single root element (such as <urlset>).'
      ]
    },
    faqs: [
      {
        question: 'What makes an XML document well-formed?',
        answer: 'A well-formed XML file has one single root element, every opening tag has a matching closing tag or self-closing slash, attribute values sit inside quotes, and special characters such as & and < are escaped.'
      },
      {
        question: 'Why can an unescaped ampersand break an XML sitemap?',
        answer: 'XML treats & as the start of a character entity. A raw & inside a URL query string should be written as &amp; so XML parsers read the document without errors.'
      },
      {
        question: 'What does the interactive XML Validator box on this page do?',
        answer: 'It provides a client-side Input Text / Code / URLs editor paired with an Output Results panel and Copy Output button so you can paste, inspect, edit, and copy XML markup locally without uploading your file.'
      },
      {
        question: 'Does the XML Validator send my XML code to a remote server?',
        answer: 'No. Anything you paste stays inside your browser session with zero data transmission.'
      }
    ],
    relatedToolSlugs: [
      'xml-formatter',
      'sitemap-tester',
      'json-validator',
      'sitemap-generator'
    ],
    belowSectionGuide: {
      howToUseHeading: 'How to use the XML Validator',
      howToUseSteps: [
        'Paste your XML sitemap, RSS snippet, or configuration code into the Input Text / Code / URLs box.',
        'Review your markup in the monospace Output Results panel below to check opening and closing tags, attribute quotes, and unescaped & characters.',
        'Edit any broken tag pairs or special characters directly in the input box.',
        'Click Copy Output (shown once text is entered) to copy the cleaned XML snippet.'
      ],
      checksOrShowsHeading: 'What the XML Validator does',
      checksOrShowsIntro: 'The interactive utility on this page gives you a private browser workspace to stage, inspect, and copy XML markup:',
      checksOrShowsPoints: [
        'Client-side XML editor: Accepts any XML snippet or sitemap excerpt inside Input Text / Code / URLs with zero server transmission.',
        'Live Output Results preview: Displays your entered XML in a high-contrast monospace block for clean visual inspection.',
        'Copy Output button: Appears whenever text is present so you can copy updated markup back into your project.',
        'No external uploads: Does not submit your XML code to a remote parser or store your files.'
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample input',
      exampleInput: '<url><loc>https://example.com/?a=1&amp;b=2</loc></url>',
      exampleOutputLabel: 'Output Results panel',
      exampleOutput: '<url><loc>https://example.com/?a=1&amp;b=2</loc></url>',
      exampleNote: 'Reviewing XML snippets side by side in monospace helps you spot unclosed </loc> tags or raw & characters before uploading your sitemap.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What makes an XML document well-formed?',
          answer: 'A well-formed XML file has one single root element, every opening tag has a matching closing tag or self-closing slash, attribute values sit inside quotes, and special characters such as & and < are escaped.'
        },
        {
          question: 'Why can an unescaped ampersand break an XML sitemap?',
          answer: 'XML treats & as the start of a character entity. A raw & inside a URL query string should be written as &amp; so XML parsers read the document without errors.'
        },
        {
          question: 'What does the interactive XML Validator box on this page do?',
          answer: 'It provides a client-side Input Text / Code / URLs editor paired with an Output Results panel and Copy Output button so you can paste, inspect, edit, and copy XML markup locally without uploading your file.'
        },
        {
          question: 'Does the XML Validator send my XML code to a remote server?',
          answer: 'No. Anything you paste stays inside your browser session with zero data transmission.'
        }
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: [
        'xml-formatter',
        'sitemap-tester',
        'sitemap-generator'
      ]
    }
  },
  {
    id: 'html-minifier',
    name: 'HTML Minifier',
    slug: 'html-minifier',
    path: '/html-minifier/',
    canonicalUrl: 'https://riadalashekin.com/html-minifier/',
    category: 'dev',
    badge: 'Minify',
    shortDescription: 'Minify HTML markup by removing whitespace, line breaks, and comment blocks to decrease HTML document payload sizes.',
    seoTitle: 'HTML Minifier - Compress & Minify HTML Code Online | Riad Al Ashekin',
    metaDescription: 'Minify HTML code by removing redundant whitespace, comments, and line breaks. Shrink document payload sizes and boost Google PageSpeed performance.',
    h1: 'HTML Minifier',
    intro: 'Reduce document payload sizes and boost Time to First Byte (TTFB) and Largest Contentful Paint (LCP). Minify HTML code by stripping redundant whitespace, line breaks, and comments while preserving essential DOM structure.',
    howToUse: [
      'Paste your unminified HTML code into the input area.',
      'Select options: Remove comments, collapse whitespace, strip empty attributes.',
      'Click Minify HTML to compress the markup.',
      'Copy the minified HTML code or view size savings.'
    ],
    features: [
      'Strips unnecessary spaces, tabs, and line breaks',
      'Removes HTML comments (<!-- comment -->)',
      'Preserves preformatted blocks (<pre>, <code>, <textarea>)',
      'Calculates original vs minified file size and percentage saved',
      '100% private in-browser compression'
    ],
    technicalExplanation: {
      heading: 'HTML Minification and Time to First Byte (TTFB)',
      body: 'Every byte saved on initial HTML document delivery translates into faster socket transmission and quicker parser-blocking tokenization by the browser rendering engine, directly improving PageSpeed scores.',
      points: [
        'Pre Tag Protection: Essential whitespace inside <pre> and <textarea> elements is preserved.',
        'Gzip / Brotli Synergy: Minifying before compression reduces the ultimate compressed wire transfer size.'
      ]
    },
    faqs: [
      {
        question: 'Will minifying HTML break my website JavaScript or styling?',
        answer: 'No. Our minifier safely collapses inter-tag whitespace while preserving script contents, style blocks, and preformatted elements.'
      }
    ],
    relatedToolSlugs: [
      'css-minifier',
      'js-minifier',
      'html-cleaner',
      'svg-optimizer'
    ]
  },
  {
    id: 'css-minifier',
    name: 'CSS Minifier',
    slug: 'css-minifier',
    path: '/css-minifier/',
    canonicalUrl: 'https://riadalashekin.com/css-minifier/',
    category: 'dev',
    badge: 'CSS Clean',
    shortDescription: 'Compress CSS stylesheets: strips comments, whitespace, and collapses declarations for faster rendering.',
    seoTitle: 'CSS Minifier - Compress & Minify CSS Stylesheets | Riad Al Ashekin',
    metaDescription: 'Minify CSS stylesheets online. Remove comments, whitespace, trailing semicolons, and compress color codes to speed up page rendering.',
    h1: 'CSS Minifier',
    intro: 'CSS is a render-blocking resource—browsers must download and parse all stylesheets before painting the first pixel. Minify your CSS code to strip comments, redundant spaces, and shorten hex colors to optimize First Contentful Paint (FCP).',
    howToUse: [
      'Paste your CSS code into the editor.',
      'Click Minify CSS to eliminate whitespace and comments.',
      'Review the compressed stylesheet and byte savings percentage.',
      'Copy the minified CSS directly into your production bundle.'
    ],
    features: [
      'Removes CSS comments (/* comment */) and unnecessary whitespace',
      'Shortens hex color codes (#ffffff to #fff)',
      'Removes redundant trailing semicolons before closing braces',
      'Eliminates render-blocking stylesheet latency',
      'One-click copy to clipboard'
    ],
    technicalExplanation: {
      heading: 'Render-Blocking CSS and First Contentful Paint (FCP)',
      body: 'Because CSS affects layout and visual styles, modern browsers halt page rendering until all referenced stylesheets are parsed. Minifying CSS reduces transmission time and accelerates DOM styling.',
      points: [
        'Critical CSS: Minifying critical above-the-fold CSS enables rapid mobile rendering.'
      ]
    },
    faqs: [
      {
        question: 'Does CSS minification change how styles look?',
        answer: 'No. It only removes comments and unnecessary formatting whitespace; CSS rules and cascade specificity remain 100% identical.'
      }
    ],
    relatedToolSlugs: [
      'html-minifier',
      'js-minifier',
      'svg-optimizer',
      'html-cleaner'
    ]
  },
  {
    id: 'js-minifier',
    name: 'JavaScript Minifier',
    slug: 'js-minifier',
    path: '/js-minifier/',
    canonicalUrl: 'https://riadalashekin.com/js-minifier/',
    category: 'dev',
    badge: 'JS Clean',
    shortDescription: 'Minify JavaScript code snippets to reduce script file sizes and improve page speed scores.',
    seoTitle: 'JavaScript Minifier - Compress JS Code Online | Riad Al Ashekin',
    metaDescription: 'Minify JavaScript code online. Remove comments, spaces, line breaks, and unnecessary characters to reduce JS bundle sizes and boost speed.',
    h1: 'JavaScript Minifier',
    intro: 'Heavy JavaScript files slow down page loading and cause high Total Blocking Time (TBT). Minify your JavaScript snippets by stripping comments, whitespace, and formatting characters to speed up execution.',
    howToUse: [
      'Paste your JavaScript code into the input box.',
      'Click Minify JavaScript to compress the code.',
      'Inspect the minified script and size reduction metrics.',
      'Copy the production-ready script with one click.'
    ],
    features: [
      'Strips single-line (//) and multi-line (/* */) comments',
      'Collapses whitespace and unnecessary line breaks safely',
      'Reduces JavaScript execution and network transfer latency',
      'Calculates exact file size reduction percentage',
      'Instant client-side execution'
    ],
    technicalExplanation: {
      heading: 'Total Blocking Time (TBT) and JavaScript Payloads',
      body: 'Large JavaScript files require extended download, compilation, and evaluation times on mobile CPUs. Minifying scripts reduces network download latency, enabling earlier hydration and better Interaction to Next Paint (INP) scores.',
      points: [
        'INP Optimization: Lighter script bundles keep the browser main thread responsive to user interactions.'
      ]
    },
    faqs: [
      {
        question: 'What does JavaScript minification do?',
        answer: 'Minification removes comments, line breaks, and extra spaces from JavaScript code so the file has fewer characters to download and parse without changing what the script intends to run.'
      },
      {
        question: 'Is this minifier safe for all JavaScript?',
        answer: 'It works well for standard snippets that end statements cleanly with semicolons and do not contain // inside string literals like URLs. Because it strips // comments and collapses spaces with pattern matching rather than a full syntax parser, avoid pasting scripts with missing semicolons or unescaped // text inside strings.'
      },
      {
        question: 'What is the difference between minification and gzip compression?',
        answer: 'Minification rewrites the source text itself by stripping comments and whitespace before deployment. Gzip and Brotli are server-level file compressions applied during network transfer on top of already minified code.'
      },
      {
        question: 'Does the JavaScript Minifier rename variables or functions?',
        answer: 'No. It removes single-line comments, multi-line comments, and redundant whitespace while keeping all variable, parameter, and function names readable.'
      }
    ],
    relatedToolSlugs: [
      'html-minifier',
      'css-minifier',
      'json-formatter',
      'svg-optimizer'
    ],
    belowSectionGuide: {
      howToUseHeading: 'How to use the JavaScript Minifier',
      howToUseSteps: [
        'Paste your unminified JavaScript snippet into the Input Raw Code textarea, or keep the default placeholder function to preview how it works.',
        'Watch the Processed Output box update live below the editor without clicking a separate submit button.',
        'Check the percentage label next to Processed Output to see how many characters were saved.',
        'Click Copy Output (visible when you enter code) to copy the minified JavaScript snippet to your clipboard.'
      ],
      checksOrShowsHeading: 'What the JavaScript Minifier does',
      checksOrShowsIntro: 'The tool compacts JavaScript snippets directly in your browser using lightweight text cleanup rules:',
      checksOrShowsPoints: [
        'Multi-line comment removal: Strips block comments wrapped between /* and */.',
        'Single-line comment removal: Strips // comments from each line.',
        'Whitespace collapsing: Replaces line breaks, tabs, and repeated spaces with single spaces and trims leading or trailing whitespace.',
        'Byte savings indicator: Calculates and displays the percentage reduction between your input length and the processed output.',
        'Copy Output button: Copies the compacted JavaScript string to your clipboard with one click.'
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Input Raw Code',
      exampleInput: 'function greet(name) {\n  // Build greeting\n  return "Hello, " + name;\n}',
      exampleOutputLabel: 'Processed Output (31% smaller)',
      exampleOutput: 'function greet(name) { return "Hello, " + name; }',
      exampleNote: 'The comment and line breaks are removed while keeping the function and parameter names unchanged.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What does JavaScript minification do?',
          answer: 'Minification removes comments, line breaks, and extra spaces from JavaScript code so the file has fewer characters to download and parse without changing what the script intends to run.'
        },
        {
          question: 'Is this minifier safe for all JavaScript?',
          answer: 'It works well for standard snippets that end statements cleanly with semicolons and do not contain // inside string literals like URLs. Because it strips // comments and collapses spaces with pattern matching rather than a full syntax parser, avoid pasting scripts with missing semicolons or unescaped // text inside strings.'
        },
        {
          question: 'What is the difference between minification and gzip compression?',
          answer: 'Minification rewrites the source text itself by stripping comments and whitespace before deployment. Gzip and Brotli are server-level file compressions applied during network transfer on top of already minified code.'
        },
        {
          question: 'Does the JavaScript Minifier rename variables or functions?',
          answer: 'No. It removes single-line comments, multi-line comments, and redundant whitespace while keeping all variable, parameter, and function names readable.'
        }
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: [
        'html-minifier',
        'css-minifier',
        'json-formatter'
      ]
    }
  },
  {
    id: 'markdown-to-html',
    name: 'Markdown to HTML Converter',
    slug: 'markdown-to-html',
    path: '/markdown-to-html/',
    canonicalUrl: 'https://riadalashekin.com/markdown-to-html/',
    category: 'dev',
    badge: 'Parser',
    shortDescription: 'Convert GitHub-flavored Markdown text into clean, semantic HTML markup with headings, code blocks, lists, and tables.',
    seoTitle: 'Markdown to HTML Converter - Convert MD to Clean HTML | Riad Al Ashekin',
    metaDescription: 'Convert GitHub-Flavored Markdown into semantic HTML markup. Clean headings, tables, code blocks, and lists ready to paste into your CMS.',
    h1: 'Markdown to HTML Converter',
    intro: 'Convert Markdown notes, documentation, or blog drafts into clean, semantic HTML markup. Supports GitHub-Flavored Markdown (GFM), including tables, task lists, code blocks, blockquotes, and links.',
    howToUse: [
      'Paste your Markdown text in the left editor.',
      'Watch the live HTML code and visual preview render simultaneously.',
      'Choose output format: HTML source code or Rendered Rich Text.',
      'Copy HTML with one click to paste into your CMS or webpage template.'
    ],
    features: [
      'Full GitHub Flavored Markdown (GFM) support (tables, checklists, strike-through)',
      'Generates semantic HTML5 tags (<article>, <h1>, <blockquote>, <table>)',
      'Syntax highlighted code block conversion',
      'Live side-by-side preview',
      'Instant copy of clean HTML code'
    ],
    technicalExplanation: {
      heading: 'Semantic HTML and Search Engine Crawling',
      body: 'Search engines rely on semantic HTML tags to understand document structure. Converting Markdown into proper <h2>, <ul>, and <table> elements ensures search bots correctly parse headings, data tables, and bullet lists.',
      points: [
        'Heading Integrity: Preserves # through ###### as standard H1 to H6 headings.',
        'Link Attributes: Adds clean href tags without clutter.'
      ]
    },
    faqs: [
      {
        question: 'Does this converter support Markdown tables?',
        answer: 'Yes! It fully supports GitHub-flavored Markdown table syntax (| Header |) and converts them into semantic HTML <table> structures.'
      }
    ],
    relatedToolSlugs: [
      'html-to-markdown',
      'html-cleaner',
      'html-minifier',
      'readability-checker'
    ]
  },
  {
    id: 'html-to-markdown',
    name: 'HTML to Markdown Converter',
    slug: 'html-to-markdown',
    path: '/html-to-markdown/',
    canonicalUrl: 'https://riadalashekin.com/html-to-markdown/',
    category: 'dev',
    badge: 'Converter',
    shortDescription: 'Convert HTML markup into clean Markdown syntax for CMS import, documentation, and content repos.',
    seoTitle: 'HTML to Markdown Converter - Convert HTML to MD Online | Riad Al Ashekin',
    metaDescription: 'Convert HTML code into clean Markdown. Strip messy tags, convert headings, tables, and lists into lightweight Markdown for CMS import.',
    h1: 'HTML to Markdown Converter',
    intro: 'Transform messy HTML code, CMS exports, or copied web pages into clean, portable Markdown. Converts headings, hyperlinks, lists, images, tables, and blockquotes into standard Markdown formatting.',
    howToUse: [
      'Paste your raw HTML code or rich text snippet into the input box.',
      'Click Convert to Markdown to process tags.',
      'Inspect the clean Markdown output in the right pane.',
      'Copy the Markdown text or download it as a .md file.'
    ],
    features: [
      'Converts HTML headings (h1-h6) to # Markdown syntax',
      'Translates ordered and unordered lists and nested items',
      'Converts HTML tables into clean Markdown tables',
      'Strips script tags, style blocks, and inline attributes',
      'Instant clipboard copy'
    ],
    technicalExplanation: {
      heading: 'Migrating Legacy CMS Content to Modern Headless Platforms',
      body: 'Migrating from legacy systems (like WordPress or Drupal) to modern static site generators (like Next.js, Astro, or Hugo) often requires converting raw database HTML into clean Markdown or MDX files.',
      points: [
        'Tag Normalization: Eliminates unnecessary <div> and <span> wrappers while preserving content structure.'
      ]
    },
    faqs: [
      {
        question: 'What happens to inline CSS styles when converting HTML to Markdown?',
        answer: 'Inline styles (style="...") are stripped away because standard Markdown focuses purely on semantic content rather than inline styling.'
      }
    ],
    relatedToolSlugs: [
      'markdown-to-html',
      'html-cleaner',
      'html-minifier',
      'text-diff-checker'
    ]
  },
  {
    id: 'html-cleaner',
    name: 'HTML Cleaner',
    slug: 'html-cleaner',
    path: '/html-cleaner/',
    canonicalUrl: 'https://riadalashekin.com/html-cleaner/',
    category: 'dev',
    badge: 'Sanitizer',
    shortDescription: 'Sanitize pasted HTML code: strips inline styles, empty span tags, tracking attributes, and Microsoft Word formatting garbage.',
    seoTitle: 'HTML Cleaner - Sanitize & Clean Dirty HTML Code | Riad Al Ashekin',
    metaDescription: 'Sanitize dirty HTML code. Strip inline styles, Microsoft Word formatting garbage, empty tags, and tracking classes for clean web publishing.',
    h1: 'HTML Cleaner & Code Sanitizer',
    intro: 'Copying and pasting text from Microsoft Word, Google Docs, or email templates creates messy HTML full of inline styles, proprietary MsoNormal classes, and nested empty tags. Clean and sanitize your HTML into pristine markup in seconds.',
    howToUse: [
      'Paste dirty HTML or rich text into the editor.',
      'Select cleaning rules: Remove inline styles, strip spans, remove Word classes.',
      'Click Clean HTML to sanitize the code.',
      'Copy the pristine, semantic markup.'
    ],
    features: [
      'Strips inline style attributes (style="color: red; font-size: 12pt")',
      'Eliminates Microsoft Word junk tags (class="MsoNormal", <o:p>)',
      'Removes empty tags (<span></span>, <p>&nbsp;</p>)',
      'Normalizes quote marks, dashes, and special HTML entities',
      'Produces clean semantic markup ready for any CMS'
    ],
    technicalExplanation: {
      heading: 'Why Dirty HTML Hurts Search Crawling and CSS Maintainability',
      body: 'Content pasted from desktop word processors often introduces hundreds of lines of inline styles that override site CSS stylesheets and clutter HTML document structure. Sanitizing markup ensures clean rendering and optimal crawl efficiency.',
      points: [
        'CSS Consistency: Stripping inline styles ensures content inherits the website\'s primary design system.'
      ]
    },
    faqs: [
      {
        question: 'Does this tool remove images or links when cleaning HTML?',
        answer: 'No. Links (<a>) and images (<img>) are preserved; only unnecessary inline styling attributes and messy wrappers are removed.'
      }
    ],
    relatedToolSlugs: [
      'html-minifier',
      'markdown-to-html',
      'html-to-markdown',
      'text-diff-checker'
    ]
  },
  {
    id: 'random-password-generator',
    name: 'Random Password Generator',
    slug: 'random-password-generator',
    path: '/random-password-generator/',
    canonicalUrl: 'https://riadalashekin.com/random-password-generator/',
    category: 'dev',
    badge: 'Security',
    shortDescription: 'Generate strong, cryptographically secure passwords with customizable length, symbols, numbers, and uppercase characters.',
    seoTitle: 'Random Password Generator - Secure & Strong Password Creator | Riad Al Ashekin',
    metaDescription: 'Generate strong, cryptographically secure passwords. Customize character length, uppercase, numbers, and symbols with client-side Web Crypto API.',
    h1: 'Random Password Generator',
    intro: 'Protect your web hosting accounts, CMS dashboards, and database credentials with cryptographically secure passwords. Generated 100% locally in your browser using the browser\'s native Web Cryptography API—never sent across the network.',
    howToUse: [
      'Choose password length using the slider (8 to 64 characters; 16+ recommended).',
      'Toggle character sets: Uppercase (A-Z), Lowercase (a-z), Numbers (0-9), Symbols (!@#$).',
      'Click Generate Password to produce a new secure string.',
      'Click Copy to securely copy the password to your clipboard.'
    ],
    features: [
      'Powered by window.crypto.getRandomValues for cryptographic entropy',
      'Password strength meter (Entropy in bits)',
      'Custom character sets and exclusion of ambiguous characters (0, O, l, 1)',
      '100% client-side execution with zero logging',
      'One-click copy with temporary notification'
    ],
    technicalExplanation: {
      heading: 'True Cryptographic Randomness vs Math.random()',
      body: 'Standard JavaScript Math.random() is pseudo-random and predictable. This tool utilizes the window.crypto API, which draws entropy directly from operating system hardware noise, guaranteeing cryptographic resistance against brute-force attacks.',
      points: [
        'Entropy Bits: A 16-character password with mixed symbols provides over 95 bits of cryptographic entropy.'
      ]
    },
    faqs: [
      {
        question: 'Are my generated passwords stored anywhere on your server?',
        answer: 'Never. All generation occurs locally within your device\'s browser memory. No passwords are ever transmitted or stored.'
      }
    ],
    relatedToolSlugs: [
      'exif-remover',
      'url-encoder',
      'character-counter',
      'comma-separator'
    ],
    legacyPaths: ['/random-password-generator/', '/privacy-policy-for-random-password-generator/']
  },
  {
    id: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    slug: 'lorem-ipsum-generator',
    path: '/lorem-ipsum-generator/',
    canonicalUrl: 'https://riadalashekin.com/lorem-ipsum-generator/',
    category: 'dev',
    badge: 'Dummy Text',
    shortDescription: 'Generate customizable placeholder dummy text in paragraphs, sentences, or words for UI mockups and web layout design.',
    seoTitle: 'Lorem Ipsum Generator - Placeholder Dummy Text Tool | Riad Al Ashekin',
    metaDescription: 'Generate dummy placeholder text for web design mockups, wireframes, and prototypes. Customize paragraphs, sentences, words, and HTML markup.',
    h1: 'Lorem Ipsum Generator',
    intro: 'Fill web design mockups, prototypes, and staging templates with classic Latin placeholder text. Generate custom paragraphs, sentences, or word counts with optional HTML paragraph tag wrapping.',
    howToUse: [
      'Select whether to generate Paragraphs, Sentences, or Words.',
      'Specify the quantity (e.g. 3 paragraphs).',
      'Toggle "Start with Lorem ipsum dolor sit amet..." if desired.',
      'Copy the generated text directly into your design tool or code.'
    ],
    features: [
      'Generates paragraphs, sentences, or word lists on demand',
      'Option to wrap output in semantic HTML <p> tags',
      'Authentic classical Latin literature vocabulary',
      'Instant generation with zero page reload',
      'One-click copy to clipboard'
    ],
    technicalExplanation: {
      heading: 'The Role of Dummy Text in UI/UX Design',
      body: 'Using realistic placeholder text allows designers and clients to evaluate typography, line height, and visual layout without being distracted by readable copy. The natural distribution of letters mimics real reading rhythm.',
      points: [
        'Typographic Harmony: Reveals balance, tracking, and leading in custom fonts.'
      ]
    },
    faqs: [
      {
        question: 'Where does the standard Lorem Ipsum passage originate?',
        answer: 'It originates from sections 1.10.32 and 1.10.33 of Cicero\'s "De Finibus Bonorum et Malorum" (The Extremes of Good and Evil), written in 45 BC.'
      }
    ],
    relatedToolSlugs: [
      'word-counter-pro',
      'character-counter',
      'markdown-to-html',
      'html-cleaner'
    ],
    legacyPaths: ['/lorem-ipsum-generator/', '/privacy-policy-for-lorem-ipsum-generator/']
  },
  {
    id: 'wall-stud-calculator',
    name: 'Wall Stud Calculator',
    slug: 'wall-stud-calculator',
    path: '/wall-stud-calculator/',
    canonicalUrl: 'https://riadalashekin.com/wall-stud-calculator/',
    category: 'calculator',
    badge: 'Framing',
    shortDescription: 'Calculate the exact number of framing studs, top/bottom plates, and drywall sheets needed for residential and commercial wall construction.',
    seoTitle: 'Wall Stud Calculator - Framing Studs & Drywall Estimator | Riad Al Ashekin',
    metaDescription: 'Calculate the number of wall framing studs, top plates, bottom plates, and waste factor for 16-inch or 24-inch on-center framing projects.',
    h1: 'Wall Stud & Framing Calculator',
    intro: 'Accurately estimate lumber requirements for residential and commercial framing projects. Calculate the exact number of vertical studs, top and bottom plates, corners, and extra allowance for windows and doors.',
    howToUse: [
      'Enter the Total Wall Length in feet (or inches).',
      'Select Stud Spacing: 16 inches on-center (standard) or 24 inches on-center.',
      'Specify the Number of Corners and Wall Intersections.',
      'Add doors and windows count, then view total studs and plates needed.'
    ],
    features: [
      'Supports 16-inch and 24-inch on-center (OC) framing standards',
      'Calculates top plates, bottom sole plates, and vertical studs',
      'Includes lumber waste percentage buffer (recommended 10%–15%)',
      'Accounts for corner framing posts and partition intersections',
      'Estimates drywall 4x8 sheet requirements'
    ],
    technicalExplanation: {
      heading: 'Standard On-Center Framing Formulas',
      body: 'Standard residential construction places studs 16 inches on-center (OC) to align with standard 48-inch drywall sheets and sheathing edges. Each wall run requires: (Wall Length / Stud Spacing) + 1 starter stud + extra studs for corners and openings.',
      points: [
        'Plates: Standard walls use a single bottom sole plate and a double top plate (3 linear lengths of lumber per wall).',
        'Waste Factor: Always order 10% extra to account for warped, bowed, or knotted lumber.'
      ]
    },
    faqs: [
      {
        question: 'Why are studs spaced 16 inches apart instead of 12 or 20?',
        answer: '16 inches divides evenly into standard 4-foot (48-inch) and 8-foot (96-inch) plywood and drywall panels, ensuring every panel seam lands directly on the center of a stud.'
      }
    ],
    relatedToolSlugs: [
      'seo-roi-calculator',
      'local-seo-pricing-calculator',
      'character-counter',
      'word-counter-pro'
    ],
    legacyPaths: ['/wall-stud-calculator/', '/privacy-policy-wall-stud-calculator/']
  },
  {
    id: 'prostate-volume-calculator',
    name: 'Prostate Volume Calculator',
    slug: 'prostate-volume-calculator',
    path: '/prostate-volume-calculator/',
    canonicalUrl: 'https://riadalashekin.com/prostate-volume-calculator/',
    category: 'calculator',
    badge: 'Clinical',
    shortDescription: 'Calculate prostate volume and PSA density using ultrasound or MRI ellipsoid dimensions (height, width, length).',
    seoTitle: 'Prostate Volume Calculator - Ellipsoid Volume & PSA Density | Riad Al Ashekin',
    metaDescription: 'Calculate prostate volume in cubic centimeters (cc/mL) and PSA density using standard prolate ellipsoid formulas from ultrasound or MRI measurements.',
    h1: 'Prostate Volume & PSA Density Calculator',
    intro: 'Calculate estimated prostate volume in cubic centimeters (cc/mL) and PSA density using ultrasound (TRUS) or MRI ellipsoid dimensions (Width x Height x Length x 0.52). Designed for healthcare practitioners and clinical evaluations.',
    howToUse: [
      'Enter Transverse dimension (Width) in centimeters (cm).',
      'Enter Anteroposterior dimension (Height) in centimeters (cm).',
      'Enter Cephalocaudal dimension (Length) in centimeters (cm).',
      'Optionally enter total serum PSA level (ng/mL) to compute PSA Density (PSAD).'
    ],
    features: [
      'Uses standard prolate ellipsoid formula: (W * H * L * π / 6 ≈ 0.523)',
      'Calculates total volume in cubic centimeters (cc) and milliliters (mL)',
      'PSA Density calculation (Total PSA / Volume)',
      'Clinical reference classification indicator (<30cc Normal, 30-50cc Mild BPH, >50cc Moderate/Severe)',
      'Completely private—no health information is stored or transmitted'
    ],
    technicalExplanation: {
      heading: 'The Ellipsoid Mathematical Formula in Urological Imaging',
      body: 'In diagnostic radiology and urology, the standard formula for estimating prostate volume from transrectal ultrasound (TRUS) or pelvic MRI is the prolate ellipsoid formula: Volume = Width * Height * Length * (π / 6), where π/6 is approximately 0.52.',
      points: [
        'PSA Density: A PSA density greater than 0.15 ng/mL/cc raises clinical suspicion for prostate pathology even when total PSA is in the borderline 4–10 ng/mL range.'
      ]
    },
    faqs: [
      {
        question: 'What is considered a normal prostate volume?',
        answer: 'A normal young adult prostate is typically around 20 to 25 cc (cubic centimeters). Benign Prostatic Hyperplasia (BPH) commonly enlarges the gland to 30 to 80+ cc in older men.'
      }
    ],
    relatedToolSlugs: [
      'seo-roi-calculator',
      'conversion-rate-calculator',
      'character-counter',
      'word-counter-pro'
    ],
    legacyPaths: ['/prostate-volume-calculator/', '/privacy-policy-for-prostate-volume-calculator-chrome-extension/']
  }
];
