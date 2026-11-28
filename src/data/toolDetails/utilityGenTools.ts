import { ToolRegistryItem } from './types';

export const utilityGenTools: ToolRegistryItem[] = [
  // 41) Invoice Generator (/invoice-generator/)
  {
    id: 'invoice-generator',
    name: 'Invoice Generator',
    slug: 'invoice-generator',
    path: '/invoice-generator/',
    canonicalUrl: 'https://riadalashekin.com/invoice-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Business Utility',
    shortDescription:
      'Create clean invoices in your browser with line items, optional logo upload, tax and discount percentages, and instant client-side PDF download.',
    seoTitle: 'Invoice Generator - Create & Download Free Invoices as PDF | Riad Al Ashekin',
    metaDescription:
      'Create a simple invoice online and download it as a PDF. Add your logo, line items, tax and discount. No sign-up, nothing stored.',
    h1: 'Invoice Generator - Create & Download Free Invoices as PDF',
    intro:
      'Build itemized client invoices directly in your browser and export an A4 PDF without signing up or saving financial details to any server. Customize sender and client details, currency text, optional logo, tax, discount, and payment notes.',
    howToUse: [
      'Enter your business details in From (Your Details) and your client details in Bill To (Client Details).',
      'Set the Invoice #, Issue Date, Due Date, Currency Prefix (such as USD or $), and upload an optional PNG or JPEG logo.',
      'Edit the Line Items rows with item descriptions, quantities, and unit prices, clicking Add Line for extra rows.',
      'Adjust Discount (%) and Tax (%), add any payment Notes, review the live Subtotal and Total, and click Download PDF or Copy Summary.',
    ],
    features: [
      'Editable sender, recipient, invoice number, issue date, due date, notes, and custom currency prefix',
      'Optional client-side PNG or JPEG logo upload embedded directly inside the generated PDF',
      'Dynamic line items with automatic subtotal, percentage discount, tax calculation, and grand total',
      'Client-side A4 PDF generation using jsPDF plus a one-click Copy Summary button',
    ],
    technicalExplanation: {
      heading: 'Local PDF Generation with Zero Server Storage',
      body: 'Every calculation and PDF layout command runs inside browser memory using jsPDF and FileReader. Your client names, billing amounts, and uploaded logo never touch a remote database.',
    },
    faqs: [
      {
        question: 'Is my invoice data stored on a server?',
        answer:
          'No. Everything you enter—including sender details, client names, line items, and your logo image—stays in your browser tab memory. Nothing is saved to a server or account, and clearing or closing the tab removes the draft.',
      },
      {
        question: 'Can I add tax and discount to an invoice?',
        answer:
          'Yes. Enter any percentage into the Discount (%) and Tax (%) fields. The tool subtracts the discount from the subtotal first, then applies the tax rate to that discounted taxable amount to calculate your total.',
      },
      {
        question: 'Is an invoice created with this tool legally valid?',
        answer:
          'Legal invoicing rules vary by country, state, and tax jurisdiction—such as VAT registration numbers, sequential numbering rules, or mandatory disclosures. Check your local accounting or tax rules and include any required identifiers in the From, Bill To, or Notes fields.',
      },
      {
        question: 'Can I add a custom currency and company logo?',
        answer:
          'Yes. Type any currency text or symbol into the Currency Prefix field (such as $, EUR , or BDT ) and upload a PNG or JPEG image using the Logo field to embed it at the top of the PDF.',
      },
    ],
    relatedToolSlugs: ['freelance-rate-calculator', 'sales-tax-calculator', 'email-signature-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Invoice Generator',
      howToUseSteps: [
        'Fill in the From (Your Details) and Bill To (Client Details) text areas with names, addresses, and contact email addresses.',
        'Update the Invoice #, Issue Date, Due Date, and Currency Prefix fields, and optionally choose a PNG or JPEG file in Logo.',
        'Add or update your billed rows under Line Items by entering each Description, Quantity, and Unit Price; click Add Line to insert additional rows or the trash icon to remove one.',
        'Enter Discount (%) and Tax (%) rates if applicable, customize your Notes text, and click Download PDF to save the A4 invoice or Copy Summary to copy the totals.',
      ],
      checksOrShowsHeading: 'What the Invoice Generator does',
      checksOrShowsIntro:
        'The Invoice Generator performs live billing math and builds an A4 PDF document completely inside your web browser with zero server uploads:',
      checksOrShowsPoints: [
        'Calculates each line item amount as Quantity × Unit Price and sums all rows into Subtotal.',
        'Computes Discount Amount as Subtotal × (Discount % / 100), subtracts it from Subtotal to get the taxable base, applies Tax %, and outputs the final Total.',
        'Embeds an optional uploaded PNG or JPEG company logo at the top-left of the generated PDF alongside the header metadata.',
        'Displays live totals in tabular monospace figures and provides both a Copy Summary text button and a Download PDF button powered locally by jsPDF.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample invoice inputs',
      exampleInput:
        'Currency: USD  | Item 1: SEO Audit (1 × 1200) | Item 2: Implementation (4 × 150) | Discount: 10% | Tax: 5%',
      exampleOutputLabel: 'Calculated summary and PDF totals',
      exampleOutput:
        'Subtotal: USD 1800.00\nDiscount (10%): -USD 180.00\nTax (5% of 1620.00): USD 81.00\nTotal: USD 1701.00',
      exampleNote:
        'Clicking Download PDF exports an A4 file named after your Invoice # (for example INV-2026-001.pdf) directly to your downloads folder.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Is my invoice data stored on a server?',
          answer:
            'No. Everything you enter—including sender details, client names, line items, and your logo image—stays in your browser tab memory. Nothing is saved to a server or account, and clearing or closing the tab removes the draft.',
        },
        {
          question: 'Can I add tax and discount to an invoice?',
          answer:
            'Yes. Enter any percentage into the Discount (%) and Tax (%) fields. The tool subtracts the discount from the subtotal first, then applies the tax rate to that discounted taxable amount to calculate your total.',
        },
        {
          question: 'Is an invoice created with this tool legally valid?',
          answer:
            'Legal invoicing rules vary by country, state, and tax jurisdiction—such as VAT registration numbers, sequential numbering rules, or mandatory disclosures. Check your local accounting or tax rules and include any required identifiers in the From, Bill To, or Notes fields.',
        },
        {
          question: 'Can I add a custom currency and company logo?',
          answer:
            'Yes. Type any currency text or symbol into the Currency Prefix field (such as $, EUR , or BDT ) and upload a PNG or JPEG image using the Logo field to embed it at the top of the PDF.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['freelance-rate-calculator', 'sales-tax-calculator', 'email-signature-generator'],
    },
  },

  // 42) Email Signature Generator (/email-signature-generator/)
  {
    id: 'email-signature-generator',
    name: 'Email Signature Generator',
    slug: 'email-signature-generator',
    path: '/email-signature-generator/',
    canonicalUrl: 'https://riadalashekin.com/email-signature-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Email Utility',
    shortDescription:
      'Design a responsive HTML email signature with 3 layouts, photo URL, and social links, then copy rich HTML for Gmail or Outlook.',
    seoTitle: 'Email Signature Generator - Create an HTML Email Signature | Riad Al Ashekin',
    metaDescription:
      'Create a professional HTML email signature online. Add your name, title, contact details, photo and links, then copy it into Gmail or Outlook.',
    h1: 'Email Signature Generator - Create an HTML Email Signature',
    intro:
      'Build a clean table-based HTML email signature in seconds without touching markup by hand. Switch between three custom layouts, add your contact fields and hosted photo URL, and copy either rich formatted output or raw HTML.',
    howToUse: [
      'Pick one of the three signature styles at the top: Layout 1 (Classic Stack), Layout 2 (Side Divider), or Layout 3 (Compact Inline).',
      'Fill in your Full Name, Job Title, Company, Phone, Email, Website URL, Address, optional Hosted Photo URL, and Social / LinkedIn URL.',
      'Check the Live Preview card as it updates in real time.',
      'Click Copy Rich Signature to paste formatted HTML into Gmail or Outlook signature settings, or click Copy HTML Source for raw table HTML.',
    ],
    features: [
      'Three built-in email-client-safe HTML layouts: Classic Stack, Side Divider, and Compact Inline',
      'Uses nested HTML tables and inline CSS styling compatible with webmail and desktop mail apps',
      'Supports clickable mailto links, website links, social profile links, and optional hosted headshots',
      'Dual copy buttons for Rich Formatted Clipboard (text/html) and Raw HTML Source',
    ],
    technicalExplanation: {
      heading: 'Why Email Signatures Rely on Table Markup and Inline Styles',
      body: 'Email clients strip external stylesheets and modern grid layouts, so building signatures with clean cellpadding/cellspacing tables and inline font/color styles keeps formatting intact across inboxes.',
    },
    faqs: [
      {
        question: 'How do I add the signature in Gmail and Outlook?',
        answer:
          'Click Copy Rich Signature here. In Gmail, open Settings (gear icon) -> See all settings -> General -> Signature, create a signature, and paste with Ctrl+V or Cmd+V. In Outlook, open Settings or Mail Options -> Signatures, create a new signature, paste inside the editor, and save.',
      },
      {
        question: 'Why might my signature photo not appear in emails?',
        answer:
          'Email clients cannot load local files from your computer hard drive. Your photo must be uploaded to a public HTTPS URL (such as your website media folder) pasted into Hosted Photo URL, and recipients who block remote images may need to click Display images.',
      },
      {
        question: 'Does the generated email signature work on mobile?',
        answer:
          'Yes. The generated markup uses compact inline font sizes, standard Arial/Helvetica fallback fonts, and clean table cells without wide fixed containers so it remains legible on phone screens as well as desktop mail apps.',
      },
      {
        question: 'When should I use Copy Rich Signature vs. Copy HTML Source?',
        answer:
          'Use Copy Rich Signature when pasting straight into visual editors like Gmail, Outlook, or Apple Mail. Use Copy HTML Source when an email platform, CRM, or helpdesk asks you to paste raw HTML code directly.',
      },
    ],
    relatedToolSlugs: ['invoice-generator', 'qr-code-generator', 'hex-to-rgb'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Email Signature Generator',
      howToUseSteps: [
        'Select one of the three layouts at the top: Layout 1 Classic Stack, Layout 2 Side Divider, or Layout 3 Compact Inline.',
        'Type your details into the nine input fields: Full Name, Job Title, Company, Phone, Email, Website URL, Address, Hosted Photo URL, and Social / LinkedIn URL.',
        'Verify spacing, links, and layout formatting in the Live Preview panel underneath.',
        'Click Copy Rich Signature to paste into Gmail or Outlook signature settings, or click Copy HTML Source if your mail client accepts raw HTML.',
      ],
      checksOrShowsHeading: 'What the Email Signature Generator does',
      checksOrShowsIntro:
        'The generator produces escaped, table-structured HTML markup formatted specifically for email clients right in your browser:',
      checksOrShowsPoints: [
        'Builds email-safe HTML tables with zero external CSS files so styling renders consistently across common inboxes.',
        'Automatically formats clickable mailto email links and HTTPS links for your website and LinkedIn profile while stripping protocol clutter in anchor labels.',
        'Includes an optional 72×72 pixel rounded portrait block whenever you provide a public Hosted Photo URL.',
        'Writes both text/html and text/plain data to the clipboard via Copy Rich Signature so rich editors preserve links, bolding, and accents.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample signature inputs (Layout 2: Side Divider)',
      exampleInput:
        'Name: Maya Patel | Title: Product Lead | Company: Harbor Ops | Phone: +1-555-0148 | Email: maya@example.com | Website: https://example.com',
      exampleOutputLabel: 'Preview output and HTML link attributes',
      exampleOutput:
        'Rendered signature with 3px violet left divider (#7839ee), bold name heading, mailto:maya@example.com link, and clean website link.',
      exampleNote:
        'Paste directly using Copy Rich Signature into Gmail or Outlook compose/signature settings to preserve clickable links and text colors.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'How do I add the signature in Gmail and Outlook?',
          answer:
            'Click Copy Rich Signature here. In Gmail, open Settings (gear icon) -> See all settings -> General -> Signature, create a signature, and paste with Ctrl+V or Cmd+V. In Outlook, open Settings or Mail Options -> Signatures, create a new signature, paste inside the editor, and save.',
        },
        {
          question: 'Why might my signature photo not appear in emails?',
          answer:
            'Email clients cannot load local files from your computer hard drive. Your photo must be uploaded to a public HTTPS URL (such as your website media folder) pasted into Hosted Photo URL, and recipients who block remote images may need to click Display images.',
        },
        {
          question: 'Does the generated email signature work on mobile?',
          answer:
            'Yes. The generated markup uses compact inline font sizes, standard Arial/Helvetica fallback fonts, and clean table cells without wide fixed containers so it remains legible on phone screens as well as desktop mail apps.',
        },
        {
          question: 'When should I use Copy Rich Signature vs. Copy HTML Source?',
          answer:
            'Use Copy Rich Signature when pasting straight into visual editors like Gmail, Outlook, or Apple Mail. Use Copy HTML Source when an email platform, CRM, or helpdesk asks you to paste raw HTML code directly.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['invoice-generator', 'qr-code-generator', 'hex-to-rgb'],
    },
  },

  // 43) Privacy Policy Generator (/privacy-policy-generator/)
  {
    id: 'privacy-policy-generator',
    name: 'Privacy Policy Generator',
    slug: 'privacy-policy-generator',
    path: '/privacy-policy-generator/',
    canonicalUrl: 'https://riadalashekin.com/privacy-policy-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Template Utility',
    shortDescription:
      'Generate a structured starter privacy policy template from a quick form and export as plain text or HTML. Template only, not legal advice.',
    seoTitle: 'Privacy Policy Generator - Create a Basic Privacy Policy for a Website | Riad Al Ashekin',
    metaDescription:
      'Generate a basic privacy policy for your website or app from a short form. Copy the text or download it. Review it with a lawyer before use.',
    h1: 'Privacy Policy Generator - Create a Basic Privacy Policy for a Website',
    intro:
      'Draft a clear starting privacy policy template for your website or web app from a simple browser form. Choose which data points you collect, list third-party services, and copy or download the text as .txt or .html.',
    howToUse: [
      'Enter your Website / App Name, Website URL, Owner / Company Name, Contact Email, Country / Region, and any Third-Party Tools Used.',
      'Check the boxes matching data your site collects: Contact Forms, Analytics, Cookies, Newsletter, or Payments.',
      'Review the structured five-section starter draft inside the read-only text preview.',
      'Click Copy Policy Text, Download .txt, or Download .html, then review and adapt the draft with legal counsel before publishing.',
    ],
    features: [
      'Visible disclaimer clarifying the output is a starting template only and not legal advice',
      'Collects site name, URL, operator, email, jurisdiction, third-party tools, and five common collection toggles',
      'Live five-section template generator stamped with today’s date',
      'Export options for Copy Policy Text, Download .txt, and Download .html',
    ],
    technicalExplanation: {
      heading: 'Structured Privacy Disclosures Built Client-Side',
      body: 'The form maps your selected collection activities into clear sections covering Introduction, Information Collected, How Information Is Used, Third-Party Services, and Contact Rights without sending any business inputs to a server.',
    },
    faqs: [
      {
        question: 'Is this generated privacy policy legally sufficient on its own?',
        answer:
          'No. This tool produces a basic starting template only and is not legal advice. Privacy requirements under laws such as GDPR, UK GDPR, CCPA/CPRA, or local regulations depend on your exact business model, users, and data flows, so have a qualified lawyer review your final text.',
      },
      {
        question: 'Do I need a privacy policy on my website?',
        answer:
          'Almost every website or app that receives contact form messages, uses analytics scripts, sets cookies, collects newsletter sign-ups, or sells services is required by privacy laws or third-party platforms to publish an accurate, accessible privacy policy.',
      },
      {
        question: 'What should I update when I add new tools to my site?',
        answer:
          'Whenever you install a new analytics tracker, email marketing provider, chat widget, ad script, or payment processor, update your Information Collected and Third-Party Services sections to reflect the new data shared and revise the Last updated date.',
      },
      {
        question: 'Can I edit and export the generated template?',
        answer:
          'Yes. You can download a ready-to-edit .txt file, download a clean HTML document via Download .html, or copy the text with Copy Policy Text and customize any paragraphs inside your CMS or code editor.',
      },
    ],
    relatedToolSlugs: ['fake-data-generator', 'invoice-generator', 'free-robots-txt-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Privacy Policy Generator',
      howToUseSteps: [
        'Fill in the six site identity fields: Website / App Name, Website URL, Owner / Company Name, Contact Email, Country / Region, and Third-Party Tools Used.',
        'Tick the data-collection checkboxes that apply to your website or app: Contact Forms, Analytics, Cookies, Newsletter, and Payments.',
        'Inspect the live five-section privacy policy draft generated inside the preview box below the checkboxes.',
        'Export the draft with Copy Policy Text, Download .txt, or Download .html, and tailor it with a legal professional for your region before going live.',
      ],
      checksOrShowsHeading: 'What the Privacy Policy Generator does',
      checksOrShowsIntro:
        'This tool formats a concise baseline privacy template entirely in browser memory and labels its limits clearly:',
      checksOrShowsPoints: [
        'Displays a permanent template disclaimer noting that the text is not legal advice and should be reviewed for GDPR, CCPA, or local laws.',
        'Populates five standard headings: Introduction, Information We Collect, How We Use Information, Third-Party Services, and Your Rights & Contact.',
        'Tailors Section 2 dynamically from the five data checkboxes you toggle, or adds a minimal request-data fallback when all boxes are unchecked.',
        'Provides one-click plain text copying alongside downloadable .txt and wrapped HTML (.html) files.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample site settings',
      exampleInput:
        'Site: Harbor Notes | URL: https://example.com | Owner: Harbor Studio | Country: United Kingdom | Checked: Contact Forms, Analytics | Third-Party: Plausible Analytics',
      exampleOutputLabel: 'Excerpt from generated policy template',
      exampleOutput:
        'PRIVACY POLICY FOR HARBOR NOTES\n1. Introduction: Harbor Studio operates https://example.com (Harbor Notes) in United Kingdom...\n2. Information We Collect:\n- Information you submit via our contact forms...\n- Usage and analytics data...\n4. Third-Party Services: We may use third-party tools including: Plausible Analytics...',
      exampleNote:
        'Always replace placeholder names and confirm every processor listed accurately matches the scripts active on your production domain.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Is this generated privacy policy legally sufficient on its own?',
          answer:
            'No. This tool produces a basic starting template only and is not legal advice. Privacy requirements under laws such as GDPR, UK GDPR, CCPA/CPRA, or local regulations depend on your exact business model, users, and data flows, so have a qualified lawyer review your final text.',
        },
        {
          question: 'Do I need a privacy policy on my website?',
          answer:
            'Almost every website or app that receives contact form messages, uses analytics scripts, sets cookies, collects newsletter sign-ups, or sells services is required by privacy laws or third-party platforms to publish an accurate, accessible privacy policy.',
        },
        {
          question: 'What should I update when I add new tools to my site?',
          answer:
            'Whenever you install a new analytics tracker, email marketing provider, chat widget, ad script, or payment processor, update your Information Collected and Third-Party Services sections to reflect the new data shared and revise the Last updated date.',
        },
        {
          question: 'Can I edit and export the generated template?',
          answer:
            'Yes. You can download a ready-to-edit .txt file, download a clean HTML document via Download .html, or copy the text with Copy Policy Text and customize any paragraphs inside your CMS or code editor.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['fake-data-generator', 'invoice-generator', 'free-robots-txt-generator'],
    },
  },

  // 44) Business Name Generator (/business-name-generator/)
  {
    id: 'business-name-generator',
    name: 'Business Name Generator',
    slug: 'business-name-generator',
    path: '/business-name-generator/',
    canonicalUrl: 'https://riadalashekin.com/business-name-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Naming Utility',
    shortDescription:
      'Brainstorm up to 50 business and brand name ideas offline from seed keywords using built-in prefixes, suffixes, and word blends.',
    seoTitle: 'Business Name Generator - Brainstorm Brand & Company Names | Riad Al Ashekin',
    metaDescription:
      'Generate business and brand name ideas from your keywords online. Mix prefixes, suffixes and word blends, then check domain ideas.',
    h1: 'Business Name Generator - Brainstorm Brand & Company Names',
    intro:
      'Brainstorm up to 50 brand, startup, or project name ideas in your browser from any seed keyword. Filter by naming style and maximum character length, star favorites in-session, and copy ideas without waiting on external AI APIs.',
    howToUse: [
      'Type a core word or topic into Seed Keyword (such as market, cloud, or craft).',
      'Pick a Naming Style: All Styles, Short, Compound, Blended, or Prefix / Suffix.',
      'Drag the Max Length slider (6 to 28 characters) to hide names longer than you want.',
      'Click the star icon on promising names to save favorites in your current session, then click Copy Favorites or Copy All Ideas.',
    ],
    features: [
      'Combines built-in prefix, suffix, and ending lists locally with zero AI API calls',
      'Five naming style views including Short, Compound, Blended, and Prefix / Suffix',
      'Interactive Max Length slider from 6 to 28 characters and up to 50 ideas at once',
      'Shows matching .com string ideas, in-session star Favorites toggle, and Copy buttons',
    ],
    technicalExplanation: {
      heading: 'Deterministic Local Brand Word Combining',
      body: 'Instead of sending business concepts to an external AI API, the tool strips punctuation from your keyword, extracts a clean root, and applies curated linguistic prefixes, suffixes, and endings directly inside JavaScript.',
    },
    faqs: [
      {
        question: 'Are the generated business names trademarked or available as domains?',
        answer:
          'We do not check trademark databases, business registries, or live DNS/domain registration availability. The .com strings shown below each card are formatting previews only—always search domain registrars and official trademark offices before selecting a name.',
      },
      {
        question: 'How should I choose a good business name?',
        answer:
          'Pick a name that is easy to spell when heard aloud, concise enough to fit cleanly in URLs and logos, clear in its industry feel, and free of confusing hyphens or unintentional meanings in your target markets.',
      },
      {
        question: 'Can I filter generated business names by character length?',
        answer:
          'Yes. Move the Max Length slider anywhere from 6 to 28 characters to filter the generated list down to shorter brandables or multi-word company names immediately.',
      },
      {
        question: 'Does this Business Name Generator use an external AI service?',
        answer:
          'No. All name ideas are produced locally in your browser from built-in prefix, suffix, and blending lists so your seed keywords remain private.',
      },
    ],
    relatedToolSlugs: ['username-generator', 'random-name-picker', 'seo-slug-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Business Name Generator',
      howToUseSteps: [
        'Enter your core product or industry term in the Seed Keyword box.',
        'Choose a Naming Style from the dropdown (All Styles, Short, Compound, Blended, or Prefix / Suffix).',
        'Adjust the Max Length slider (6 to 28 characters) if you want only short brand names or longer combinations.',
        'Click the star icon on cards you like to bookmark favorites in-session, then copy either your starred shortlist or all 50 ideas.',
      ],
      checksOrShowsHeading: 'What the Business Name Generator does',
      checksOrShowsIntro:
        'The generator transforms your keyword with curated static word lists locally inside your browser:',
      checksOrShowsPoints: [
        'Produces up to 50 unique name candidates instantly whenever you change your keyword, style, or length limit.',
        'Offers Short (root plus endings like -ify, -ly, Hub, Lab), Compound (two joined words), Blended (clipped prefix + root + suffix), and spaced Prefix / Suffix options.',
        'Displays a lowercase .com domain formatting idea under each title strictly as a visual preview without claiming registrar availability.',
        'Lets you star and unstar favorites during your session and copy either your favorites or the full list in one click.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample seed and filters',
      exampleInput: 'Seed Keyword: craft | Naming Style: All Styles | Max Length: 18 chars',
      exampleOutputLabel: 'Sample generated name and .com idea cards',
      exampleOutput:
        'CraftLabs -> craftlabs.com\nBrightCraft -> brightcraft.com\nCraify -> craify.com\nNorthCraft -> northcraft.com\nCraftWorks -> craftworks.com',
      exampleNote:
        'Verify domain availability at a registrar and check local trademark records before committing to any final brand name.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Are the generated business names trademarked or available as domains?',
          answer:
            'We do not check trademark databases, business registries, or live DNS/domain registration availability. The .com strings shown below each card are formatting previews only—always search domain registrars and official trademark offices before selecting a name.',
        },
        {
          question: 'How should I choose a good business name?',
          answer:
            'Pick a name that is easy to spell when heard aloud, concise enough to fit cleanly in URLs and logos, clear in its industry feel, and free of confusing hyphens or unintentional meanings in your target markets.',
        },
        {
          question: 'Can I filter generated business names by character length?',
          answer:
            'Yes. Move the Max Length slider anywhere from 6 to 28 characters to filter the generated list down to shorter brandables or multi-word company names immediately.',
        },
        {
          question: 'Does this Business Name Generator use an external AI service?',
          answer:
            'No. All name ideas are produced locally in your browser from built-in prefix, suffix, and blending lists so your seed keywords remain private.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['username-generator', 'random-name-picker', 'seo-slug-generator'],
    },
  },

  // 45) Username Generator (/username-generator/)
  {
    id: 'username-generator',
    name: 'Username Generator',
    slug: 'username-generator',
    path: '/username-generator/',
    canonicalUrl: 'https://riadalashekin.com/username-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Naming Utility',
    shortDescription:
      'Create up to 20 username ideas from your name or keyword with selectable separators (_, ., -), style modes, max length, and optional numbers.',
    seoTitle: 'Username Generator - Create Unique Usernames from Your Name | Riad Al Ashekin',
    metaDescription:
      'Generate username ideas from your name or keywords online. Choose length, numbers and separators, then copy the ones you like.',
    h1: 'Username Generator - Create Unique Usernames from Your Name',
    intro:
      'Generate clean, readable handles from your name or favorite keywords right in your browser. Customize separators, maximum character length, style, and optional number suffixes, then copy individual usernames or the whole batch.',
    howToUse: [
      'Type your first name, full name, or keyword into Name or Keywords.',
      'Select a Separator (Underscore _, Dot ., Hyphen -, or None) and a Style (Clean, Creative, or Compact).',
      'Set Max Length (between 4 and 32 characters) and check or uncheck Include numbers.',
      'Click Generate More Ideas to rotate fresh adjective/noun pairings, and click Copy next to any handle or Copy All Usernames.',
    ],
    features: [
      'Uses your name tokens plus built-in adjective and noun word lists to output up to 20 handles',
      'Supports underscore (_), dot (.), hyphen (-), or joined word formatting with no separator',
      'Customizable max character length (4–32), three style modes, and an Include numbers toggle',
      'One-click Copy on every single username card plus a Copy All Usernames button',
    ],
    technicalExplanation: {
      heading: 'Pattern-Based Handle Generation Without Account Lookups',
      body: 'Your input is normalized to lowercase letters and digits, sliced safely to your maximum length, and combined with clean descriptors and optional numbers locally without querying external social APIs.',
    },
    faqs: [
      {
        question: 'Does this tool check if a username is already taken?',
        answer:
          'No. The Username Generator runs completely offline inside your browser and does not query social networks or gaming platforms. Once you copy a few favorites, test them directly on the website where you plan to sign up.',
      },
      {
        question: 'What makes a memorable username?',
        answer:
          'Short combinations of one name or root word plus a distinct visual noun or adjective are usually easier to remember and type than long strings of random digits. Keeping handles free of repeated symbols also helps people find you faster.',
      },
      {
        question: 'Can I generate usernames without numbers?',
        answer:
          'Yes. Simply uncheck the Include numbers box before clicking Generate More Ideas or copying results. The generator will produce pure word and separator combinations within your chosen character limit.',
      },
      {
        question: 'What separators and character limits can I pick?',
        answer:
          'You can choose Underscore (_), Dot (.), Hyphen (-), or None, and set any maximum character limit between 4 and 32 characters to match platform rules.',
      },
    ],
    relatedToolSlugs: ['business-name-generator', 'random-password-generator', 'random-number-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Username Generator',
      howToUseSteps: [
        'Type your name, initials, or favorite topic into the Name or Keywords box.',
        'Choose a Separator (Underscore _, Dot ., Hyphen -, or None) and select Clean, Creative, or Compact in the Style dropdown.',
        'Set Max Length anywhere from 4 to 32 characters, and toggle Include numbers on or off depending on whether you want two-digit suffixes.',
        'Click Generate More Ideas to rotate fresh adjective and noun combinations, then click Copy beside any individual card or Copy All Usernames at the bottom.',
      ],
      checksOrShowsHeading: 'What the Username Generator does',
      checksOrShowsIntro:
        'The generator produces up to 20 custom username ideas strictly in your browser without querying external social accounts or saving inputs:',
      checksOrShowsPoints: [
        'Normalizes your seed input to lowercase letters and numbers and builds joined, initialed, reversed, and descriptor-paired combinations.',
        'Enforces your Max Length ceiling (4–32 characters) on every suggestion and strips trailing separators cleanly after truncating.',
        'Supports three built-in style patterns: Clean (name paired with adjectives or nouns), Creative (adjective + noun + name combos), and Compact (shortened 4-character prefixes).',
        'Optionally appends random two-digit suffixes when Include numbers is checked, and updates suggestions whenever any setting changes.',
        'Places a dedicated Copy button on every username card alongside a Copy All Usernames button.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample input and options',
      exampleInput: 'Name: Alex Reed | Separator: _ | Style: Clean | Max Length: 18 | Include numbers: Off',
      exampleOutputLabel: 'Sample generated usernames',
      exampleOutput:
        'alex_reed\na_reed\nreed_alex\nalex_fox\nswift_alex\nalex_owl\nbright_alex',
      exampleNote:
        'Check Include numbers or click Generate More Ideas anytime to cycle fresh adjective and noun combinations within your chosen character limit.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Does this tool check if a username is already taken?',
          answer:
            'No. The Username Generator runs completely offline inside your browser and does not query social networks or gaming platforms. Once you copy a few favorites, test them directly on the website where you plan to sign up.',
        },
        {
          question: 'What makes a memorable username?',
          answer:
            'Short combinations of one name or root word plus a distinct visual noun or adjective are usually easier to remember and type than long strings of random digits. Keeping handles free of repeated symbols also helps people find you faster.',
        },
        {
          question: 'Can I generate usernames without numbers?',
          answer:
            'Yes. Simply uncheck the Include numbers box before clicking Generate More Ideas or copying results. The generator will produce pure word and separator combinations within your chosen character limit.',
        },
        {
          question: 'What separators and character limits can I pick?',
          answer:
            'You can choose Underscore (_), Dot (.), Hyphen (-), or None, and set any maximum character limit between 4 and 32 characters to match platform rules.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['business-name-generator', 'random-password-generator', 'random-number-generator'],
    },
  },

  // 46) Random Number Generator (/random-number-generator/)
  {
    id: 'random-number-generator',
    name: 'Random Number Generator',
    slug: 'random-number-generator',
    path: '/random-number-generator/',
    canonicalUrl: 'https://riadalashekin.com/random-number-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Number Utility',
    shortDescription:
      'Pick one or up to 1,000 random integers or decimals between any minimum and maximum using Web Crypto randomness, with duplicate and sort controls.',
    seoTitle: 'Random Number Generator - Pick Random Numbers in Any Range | Riad Al Ashekin',
    metaDescription:
      'Generate random numbers in any range online. Pick one or many, allow or block duplicates, and sort the results.',
    h1: 'Random Number Generator - Pick Random Numbers in Any Range',
    intro:
      'Draw unbiased random integers or decimals inside any lower and upper bounds using your browser’s cryptographic random number API. Generate 1 to 1,000 numbers at once, allow or prevent duplicates, sort results ascending, and copy with one click.',
    howToUse: [
      'Set your Minimum and Maximum boundary values (positive, negative, or decimal).',
      'Enter Quantity (1 to 1,000) and select Number Type: Integers or Decimals (choosing 1 to 6 decimal places).',
      'Toggle Allow duplicates and Sort ascending to match your draw rules.',
      'Click Generate Numbers, review the comma-separated output, and click Copy.',
    ],
    features: [
      'Backed by window.crypto.getRandomValues with rejection sampling for uniform integer draws',
      'Supports whole integers and fixed-precision decimals (1 to 6 decimal places) across negative or positive ranges',
      'Allow duplicates toggle (automatically checks that unique integer draws fit the range size)',
      'Optional ascending sort toggle and one-click Copy button',
    ],
    technicalExplanation: {
      heading: 'Cryptographic Random Sampling in the Browser',
      body: 'Instead of Math.random(), the integer mode uses 32-bit unsigned values from window.crypto.getRandomValues with modulo-bias rejection sampling so every whole integer inside your closed range [min, max] has equal probability.',
    },
    faqs: [
      {
        question: 'How random are the numbers produced here?',
        answer:
          'Every draw uses your browser’s built-in window.crypto.getRandomValues cryptographic random generator rather than predictable Math.random() sequences. Integer selection also avoids modulo bias so values across the range remain uniform.',
      },
      {
        question: 'Can I generate random numbers without repeats?',
        answer:
          'Yes. Leave Allow duplicates unchecked to ensure every number returned in the draw is unique. If your requested quantity exceeds the total whole integers between Minimum and Maximum, the tool displays a clear validation error.',
      },
      {
        question: 'Can I generate decimal numbers in a range?',
        answer:
          'Yes. Switch Number Type to Decimals and choose between 1 and 6 Decimal Places. The generator outputs formatted numbers such as 3.47 or 18.925 inside your minimum and maximum bounds.',
      },
      {
        question: 'How many random numbers can I draw at once?',
        answer:
          'You can generate between 1 and 1,000 numbers in a single click and optionally sort them in ascending order before copying.',
      },
    ],
    relatedToolSlugs: ['random-name-picker', 'uuid-generator', 'random-password-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Random Number Generator',
      howToUseSteps: [
        'Enter your Minimum and Maximum boundary values (positive, negative, or decimal numbers are all supported).',
        'Enter how many results to draw in Quantity (1–1,000), then select Integers or Decimals (picking 1 to 6 Decimal Places when using decimals).',
        'Check or uncheck Allow duplicates and Sort ascending depending on whether you want unique or ordered values.',
        'Click Generate Numbers to run the draw, review the comma-separated output banner, and click Copy to save the numbers.',
      ],
      checksOrShowsHeading: 'What the Random Number Generator does',
      checksOrShowsIntro:
        'The tool validates boundaries and runs unbiased browser random sampling locally without touching any external server:',
      checksOrShowsPoints: [
        'Uses window.crypto.getRandomValues with modulo-bias rejection sampling for integer draws so every whole number inside [Min, Max] has equal probability.',
        'Supports generating between 1 and 1,000 numbers per click in both Integers and fixed-precision Decimals (choosing from 1 to 6 places) modes.',
        'Prevents repeats when Allow duplicates is unchecked and displays a clear error banner if Quantity exceeds available unique integers or if Minimum exceeds Maximum.',
        'Optionally sorts generated values from lowest to highest when Sort ascending is checked, displaying results in a comma-separated list with a Copy button.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample draw settings',
      exampleInput: 'Minimum: 1 | Maximum: 100 | Quantity: 5 | Integers | Allow duplicates: Off | Sort ascending: On',
      exampleOutputLabel: 'Sample returned output',
      exampleOutput: '12, 27, 44, 68, 91',
      exampleNote:
        'Every click on Generate Numbers draws fresh cryptographically random values locally in browser memory; turning Sort ascending on arranges the five unique integers from smallest to largest.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'How random are the numbers produced here?',
          answer:
            'Every draw uses your browser’s built-in window.crypto.getRandomValues cryptographic random generator rather than predictable Math.random() sequences. Integer selection also avoids modulo bias so values across the range remain uniform.',
        },
        {
          question: 'Can I generate random numbers without repeats?',
          answer:
            'Yes. Leave Allow duplicates unchecked to ensure every number returned in the draw is unique. If your requested quantity exceeds the total whole integers between Minimum and Maximum, the tool displays a clear validation error.',
        },
        {
          question: 'Can I generate decimal numbers in a range?',
          answer:
            'Yes. Switch Number Type to Decimals and choose between 1 and 6 Decimal Places. The generator outputs formatted numbers such as 3.47 or 18.925 inside your minimum and maximum bounds.',
        },
        {
          question: 'How many random numbers can I draw at once?',
          answer:
            'You can generate between 1 and 1,000 numbers in a single click and optionally sort them in ascending order before copying.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['random-name-picker', 'uuid-generator', 'random-password-generator'],
    },
  },

  // 47) Placeholder Image Generator (/placeholder-image-generator/)
  {
    id: 'placeholder-image-generator',
    name: 'Placeholder Image Generator',
    slug: 'placeholder-image-generator',
    path: '/placeholder-image-generator/',
    canonicalUrl: 'https://riadalashekin.com/placeholder-image-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Design Utility',
    shortDescription:
      'Generate custom dummy placeholder images in any width, height, color, font size, and label locally on HTML canvas and download as PNG, JPG, or WebP.',
    seoTitle: 'Placeholder Image Generator - Create Dummy Images Any Size | Riad Al Ashekin',
    metaDescription:
      'Create placeholder images in any size, color and text online. Download as PNG, JPG or WebP for mockups and website layouts.',
    h1: 'Placeholder Image Generator - Create Dummy Images Any Size',
    intro:
      'Create crisp wireframe and mockup placeholder images at exact pixel dimensions directly on an HTML5 canvas. Pick custom colors, font size, and overlay labels or choose common web layout presets and download as PNG, JPG, or WebP.',
    howToUse: [
      'Type Width (px) and Height (px) between 16 and 4,000, or click a quick preset such as Banner 1200×630, HD 1280×720, Square 800×800, or Card 600×400.',
      'Select your Background color, Text Color, Font Size, and Format (PNG, JPG, or WebP).',
      'Optionally enter Custom Text; leave it blank to display dimensions automatically (such as 800 × 450).',
      'Click Download Placeholder Image to save the rendered graphic, or Copy Dimensions to copy the WxH size text.',
    ],
    features: [
      'Custom width and height from 16×16 up to 4,000×4,000 pixels plus four generic web presets',
      'Live color pickers for background fill and centered typography plus adjustable font size',
      'Automatic W × H default label or custom text centered horizontally and vertically on canvas',
      'Exports directly from HTML canvas as PNG, JPG, or WebP with zero server upload',
    ],
    technicalExplanation: {
      heading: 'Instant Client-Side Canvas Rendering',
      body: 'Every change draws immediately onto an in-browser <canvas> element at full pixel resolution and encodes the downloaded file locally using canvas.toDataURL().',
    },
    faqs: [
      {
        question: 'What are placeholder images used for?',
        answer:
          'Designers and developers use placeholder images to block out webpage wireframes, card grids, hero containers, and presentation templates before final photography or custom illustrations are ready.',
      },
      {
        question: 'Can I add my own custom text on the placeholder image?',
        answer:
          'Yes. Type any label into the Custom Text box—for example "Hero Banner" or "Product Thumbnail"—and the canvas immediately centers it. Leaving the box blank displays the active Width × Height numbers instead.',
      },
      {
        question: 'Which format should I download: PNG, JPG, or WebP?',
        answer:
          'Choose PNG for sharp flat text and solid color edges without compression artifacts, WebP for smaller modern web mockups, or JPG if a legacy layout system specifically asks for .jpg files.',
      },
      {
        question: 'What is the maximum image size I can generate?',
        answer:
          'You can generate placeholder images from 16×16 pixels up to 4,000×4,000 pixels, with built-in validation warning if numbers fall outside that range.',
      },
    ],
    relatedToolSlugs: ['image-resizer', 'aspect-ratio-calculator', 'image-compressor'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Placeholder Image Generator',
      howToUseSteps: [
        'Click one of the four quick dimension presets (Banner 1200×630, HD 1280×720, Square 800×800, or Card 600×400), or type custom Width (px) and Height (px) numbers from 16 to 4,000.',
        'Select your Background color swatch, Text Color swatch, Font Size (8–200 px), and target export Format (PNG, JPG, or WebP).',
        'Enter optional Custom Text to display over the image, or leave the input blank to show the active Width × Height label centered automatically.',
        'Inspect the scaled canvas preview, click Copy Dimensions to copy the WxH text, or click Download Placeholder Image to save placeholder-WxH.ext.',
      ],
      checksOrShowsHeading: 'What the Placeholder Image Generator does',
      checksOrShowsIntro:
        'The tool draws exact-pixel graphics directly onto an HTML5 canvas inside your browser tab without server uploads:',
      checksOrShowsPoints: [
        'Validates dimensions cleanly between 16 and 4,000 pixels on each side and surfaces an error banner if out-of-range numbers are entered.',
        'Renders your chosen background fill color and centers bold sans-serif text horizontally and vertically at your chosen Font Size.',
        'Provides four starter presets (1200×630, 1280×720, 800×800, and 600×400) alongside live scaled preview rendering inside the card.',
        'Exports lossless PNG, compressed JPG, or WebP directly via canvas.toDataURL alongside a Copy Dimensions button.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample placeholder configuration',
      exampleInput: 'Width: 1200 | Height: 630 | Background: #e2e8f0 | Text Color: #1e293b | Format: PNG | Custom Text: (blank)',
      exampleOutputLabel: 'Generated image specification',
      exampleOutput: 'File: placeholder-1200x630.png | Resolution: 1200 × 630 px | Centered Label: "1200 × 630"',
      exampleNote:
        'All canvas drawing and image encoding happens locally on your device, so even 4,000-pixel banners export immediately without upload delays.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What are placeholder images used for?',
          answer:
            'Designers and developers use placeholder images to block out webpage wireframes, card grids, hero containers, and presentation templates before final photography or custom illustrations are ready.',
        },
        {
          question: 'Can I add my own custom text on the placeholder image?',
          answer:
            'Yes. Type any label into the Custom Text box—for example "Hero Banner" or "Product Thumbnail"—and the canvas immediately centers it. Leaving the box blank displays the active Width × Height numbers instead.',
        },
        {
          question: 'Which format should I download: PNG, JPG, or WebP?',
          answer:
            'Choose PNG for sharp flat text and solid color edges without compression artifacts, WebP for smaller modern web mockups, or JPG if a legacy layout system specifically asks for .jpg files.',
        },
        {
          question: 'What is the maximum image size I can generate?',
          answer:
            'You can generate placeholder images from 16×16 pixels up to 4,000×4,000 pixels, with built-in validation warning if numbers fall outside that range.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['image-resizer', 'aspect-ratio-calculator', 'image-compressor'],
    },
  },

  // 48) Image to PDF Converter (/image-to-pdf/)
  {
    id: 'image-to-pdf',
    name: 'Image to PDF Converter',
    slug: 'image-to-pdf',
    path: '/image-to-pdf/',
    canonicalUrl: 'https://riadalashekin.com/image-to-pdf/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'PDF Utility',
    shortDescription:
      'Combine multiple JPG, PNG, and WebP images into one downloadable PDF in your browser with drag-and-drop page reordering, size, orientation, and margin controls.',
    seoTitle: 'Image to PDF Converter - Combine JPG & PNG Images into One PDF | Riad Al Ashekin',
    metaDescription:
      'Convert JPG, PNG and WebP images to a single PDF online. Reorder pages, choose page size and margins. Files stay in your browser.',
    h1: 'Image to PDF Converter - Combine JPG & PNG Images into One PDF',
    intro:
      'Combine multiple JPG, PNG, or WebP images into a single multi-page PDF without uploading photos to a cloud server. Reorder thumbnails by dragging or arrow buttons, choose A4, Letter, or Fit to Image sizing, set margins, and download immediately.',
    howToUse: [
      'Click Upload Images and select one or more JPG, PNG, or WebP image files.',
      'Drag thumbnails into order—or click the up/down arrows on each card—to arrange your PDF pages.',
      'Select Page Size (A4, Letter, or Fit to Image), Orientation (Portrait or Landscape), and Margin (pt).',
      'Click Create & Download PDF to save images-combined.pdf, or click Copy Page List to copy filenames and sizes.',
    ],
    features: [
      'Reads multiple JPG, PNG, and WebP files locally via FileReader and normalizes WebP through canvas',
      'Interactive page reordering with HTML5 drag-and-drop cards plus accessible Up/Down arrow buttons and Delete',
      'Supports A4, US Letter, and Fit to Image page sizing plus Portrait/Landscape orientation and custom margins',
      'Builds multi-page PDF files directly on your device with jsPDF and includes Copy Page List',
    ],
    technicalExplanation: {
      heading: 'Local Canvas Normalization and Multi-Page PDF Assembly',
      body: 'Each selected image is decoded onto a hidden canvas so PNG transparency, JPEG, and WebP files convert reliably inside jsPDF while keeping image proportions scaled centered within your selected page margins.',
    },
    faqs: [
      {
        question: 'Are my uploaded images sent to a server?',
        answer:
          'No. Files are read directly inside your browser via FileReader and HTML5 canvas, then assembled into a PDF locally with jsPDF. Your images never leave your computer or phone.',
      },
      {
        question: 'Can I change the page order before creating the PDF?',
        answer:
          'Yes. Drag and drop any image card into a new position, or use the up and down arrow buttons on each card to move pages earlier or later before downloading.',
      },
      {
        question: 'Which PDF page size should I choose?',
        answer:
          'Choose A4 or Letter when printing or sharing documents meant for standard paper sheets (your images are scaled proportionally inside your margin). Choose Fit to Image if you want each PDF page to match the exact dimensions and orientation of each photo.',
      },
      {
        question: 'Which image formats can I combine into one PDF?',
        answer:
          'You can mix JPG/JPEG, PNG, and WebP images together in the same PDF batch; non-image files are automatically skipped with a clear status alert.',
      },
    ],
    relatedToolSlugs: ['image-compressor', 'image-to-jpg-converter', 'image-resizer'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Image to PDF Converter',
      howToUseSteps: [
        'Click Upload Images to pick one or multiple JPG, PNG, or WebP images from your device.',
        'Arrange pages by dragging the preview cards or clicking the Move Earlier / Move Later arrows.',
        'Choose A4, Letter, or Fit to Image in Page Size, set Portrait or Landscape orientation (for standard sheets), and enter a Margin in points.',
        'Click Create & Download PDF to generate and download images-combined.pdf directly in your browser.',
      ],
      checksOrShowsHeading: 'What the Image to PDF Converter does',
      checksOrShowsIntro:
        'This tool packages local image batches into clean multi-page PDF documents without external file transfers:',
      checksOrShowsPoints: [
        'Normalizes JPG, PNG, and WebP uploads via HTML canvas and skips non-image files with an inline warning message.',
        'Calculates proportional fit inside standard A4 or Letter bounds minus your chosen Margin so images never stretch or clip.',
        'Adjusts each PDF page dynamically to individual photo dimensions and landscape/portrait ratio when Fit to Image is selected.',
        'Provides Copy Page List to copy numbered filenames and pixel sizes alongside the Create & Download PDF button.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample uploaded batch and layout settings',
      exampleInput: 'Files: 1) receipt.jpg (1200×1600), 2) diagram.webp (1600×900) | Page Size: A4 | Orientation: Portrait | Margin: 24 pt',
      exampleOutputLabel: 'Generated PDF document structure',
      exampleOutput:
        'images-combined.pdf (2 A4 pages)\nPage 1: receipt.jpg scaled proportionally inside 24 pt margins\nPage 2: diagram.webp normalized and centered inside 24 pt margins',
      exampleNote:
        'Switch Page Size to Fit to Image if Page 2 is landscape and you want landscape pages mixed with portrait pages automatically.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Are my uploaded images sent to a server?',
          answer:
            'No. Files are read directly inside your browser via FileReader and HTML5 canvas, then assembled into a PDF locally with jsPDF. Your images never leave your computer or phone.',
        },
        {
          question: 'Can I change the page order before creating the PDF?',
          answer:
            'Yes. Drag and drop any image card into a new position, or use the up and down arrow buttons on each card to move pages earlier or later before downloading.',
        },
        {
          question: 'Which PDF page size should I choose?',
          answer:
            'Choose A4 or Letter when printing or sharing documents meant for standard paper sheets (your images are scaled proportionally inside your margin). Choose Fit to Image if you want each PDF page to match the exact dimensions and orientation of each photo.',
        },
        {
          question: 'Which image formats can I combine into one PDF?',
          answer:
            'You can mix JPG/JPEG, PNG, and WebP images together in the same PDF batch; non-image files are automatically skipped with a clear status alert.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['image-compressor', 'image-to-jpg-converter', 'image-resizer'],
    },
  },

  // 49) Image Cropper (/image-cropper/)
  {
    id: 'image-cropper',
    name: 'Image Cropper',
    slug: 'image-cropper',
    path: '/image-cropper/',
    canonicalUrl: 'https://riadalashekin.com/image-cropper/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Image Utility',
    shortDescription:
      'Crop JPG, PNG, and WebP images locally in your browser with free crop, fixed aspect ratios (1:1, 4:3, 16:9, 9:16, custom), 90° rotate, flip, and original-format export.',
    seoTitle: 'Image Cropper - Crop Images Online to Any Size or Ratio | Riad Al Ashekin',
    metaDescription:
      'Crop JPG, PNG and WebP images online. Use free crop or a fixed aspect ratio, then download the cropped image. No upload to a server.',
    h1: 'Image Cropper - Crop Images Online to Any Size or Ratio',
    intro:
      'Crop, rotate, and flip JPG, PNG, and WebP images cleanly on your own device. Switch between Free Crop and fixed aspect ratios (1:1, 4:3, 16:9, 9:16, or custom), fine-tune X/Y offsets and pixel width/height, and download in your original image format.',
    howToUse: [
      'Choose a JPG, PNG, or WebP image using the file upload control.',
      'Use Rotate 90°, Flip H, or Flip V if your photo needs orientation adjustments first.',
      'Click Free Crop, a preset ratio (1:1, 4:3, 16:9, 9:16), or Custom Ratio, then enter exact X Offset, Y Offset, Crop Width, and Crop Height pixels.',
      'Check the Source and Output Crop dimension summary and click Download Cropped Image (or Copy Crop Dimensions).',
    ],
    features: [
      'Supports Free Crop plus 1:1, 4:3, 16:9, 9:16, and custom W:H ratio locking',
      '90-degree rotation plus horizontal and vertical canvas flips prior to cropping',
      'Exact numeric inputs for X Offset, Y Offset, Crop Width, and Crop Height clamped to image bounds',
      'Renders cropped area on HTML5 canvas and downloads in the original PNG, JPG, or WebP format',
    ],
    technicalExplanation: {
      heading: 'Two-Step Client-Side Canvas Transform and Cropping',
      body: 'The cropper applies rotation and mirroring onto a temporary canvas sized to your oriented image, then extracts the exact pixel rectangle [x, y, width, height] into an output canvas matching your target format.',
    },
    faqs: [
      {
        question: 'Does cropping an image here reduce its quality?',
        answer:
          'PNG exports are lossless. For JPG and WebP files, re-encoding through browser canvas at high quality (0.94) keeps details sharp while trimming unwanted pixels outside the crop rectangle.',
      },
      {
        question: 'Are my photos uploaded to a server when cropping?',
        answer:
          'No. The image file loads into browser memory via FileReader and is transformed and exported exclusively through local HTML5 canvas APIs.',
      },
      {
        question: 'How do I crop an image to an exact pixel size?',
        answer:
          'Leave Free Crop active (or select a matching ratio first) and type your exact target numbers into Crop Width (px) and Crop Height (px), then adjust X Offset and Y Offset to position the rectangle before downloading.',
      },
      {
        question: 'Can I rotate or flip an image before cropping?',
        answer:
          'Yes. Click Rotate 90°, Flip H, or Flip V above the ratio buttons; the source dimensions readout updates automatically so your crop offsets align with the rotated image.',
      },
    ],
    relatedToolSlugs: ['image-resizer', 'aspect-ratio-calculator', 'image-compressor'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Image Cropper',
      howToUseSteps: [
        'Upload a PNG, JPG, or WebP image file from your device using the upload button at the top left.',
        'Click Rotate 90°, Flip H, or Flip V if you need to correct orientation or mirror the photo before cropping.',
        'Select Free Crop, a preset aspect ratio (1:1, 4:3, 16:9, or 9:16), or Custom Ratio, then fine-tune X Offset, Y Offset, Crop Width, and Crop Height in pixels.',
        'Check the live preview rectangle and Source vs. Output Crop dimension readout, then click Copy Crop Dimensions or Download Cropped Image.',
      ],
      checksOrShowsHeading: 'What the Image Cropper does',
      checksOrShowsIntro:
        'The Image Cropper runs orientation transforms and pixel-accurate cropping strictly inside your browser tab via HTML5 canvas:',
      checksOrShowsPoints: [
        'Preserves your uploaded file format—exporting PNG files losslessly and JPG or WebP files at 0.94 quality without transmitting photos to any server.',
        'Applies 90-degree rotation plus horizontal and vertical flips onto an oriented canvas before computing the cropped slice.',
        'Locks Crop Height automatically whenever 1:1, 4:3, 16:9, 9:16, or a Custom Ratio is active, while letting you type any exact pixels under Free Crop.',
        'Clamps X Offset, Y Offset, Crop Width, and Crop Height inside oriented source bounds and includes Copy Crop Dimensions beside Download Cropped Image.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample image upload and 1:1 crop settings',
      exampleInput: 'Source: hero.jpg (1920 × 1080 px) | Ratio: 1:1 | X: 420 px | Y: 0 px | Width: 1080 px | Height: 1080 px',
      exampleOutputLabel: 'Downloaded cropped output',
      exampleOutput: 'File: cropped-1080x1080.jpg | Dimensions: 1080 × 1080 px centered square slice',
      exampleNote:
        'Clicking Rotate 90° swaps the Source dimensions readout from 1920×1080 to 1080×1920 immediately so crop offsets always stay aligned to the rotated canvas.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Does cropping an image here reduce its quality?',
          answer:
            'PNG exports are lossless. For JPG and WebP files, re-encoding through browser canvas at high quality (0.94) keeps details sharp while trimming unwanted pixels outside the crop rectangle.',
        },
        {
          question: 'Are my photos uploaded to a server when cropping?',
          answer:
            'No. The image file loads into browser memory via FileReader and is transformed and exported exclusively through local HTML5 canvas APIs.',
        },
        {
          question: 'How do I crop an image to an exact pixel size?',
          answer:
            'Leave Free Crop active (or select a matching ratio first) and type your exact target numbers into Crop Width (px) and Crop Height (px), then adjust X Offset and Y Offset to position the rectangle before downloading.',
        },
        {
          question: 'Can I rotate or flip an image before cropping?',
          answer:
            'Yes. Click Rotate 90°, Flip H, or Flip V above the ratio buttons; the source dimensions readout updates automatically so your crop offsets align with the rotated image.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['image-resizer', 'aspect-ratio-calculator', 'image-compressor'],
    },
  },

  // 50) Fake Data Generator (/fake-data-generator/)
  {
    id: 'fake-data-generator',
    name: 'Fake Data Generator',
    slug: 'fake-data-generator',
    path: '/fake-data-generator/',
    canonicalUrl: 'https://riadalashekin.com/fake-data-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Data Utility',
    shortDescription:
      'Generate up to 1,000 rows of fictional test names, example.com emails, +1-555-01xx phone numbers, addresses, dates, numbers, and UUIDs locally with JSON and CSV export.',
    seoTitle: 'Fake Data Generator - Generate Test Names, Emails & Addresses | Riad Al Ashekin',
    metaDescription:
      'Generate fake test data online: names, emails, phone numbers, addresses and dates. Export as JSON or CSV for testing and demos.',
    h1: 'Fake Data Generator - Generate Test Names, Emails & Addresses',
    intro:
      'Populate test databases, UI tables, and CSV import scripts safely without touching real personal data. Choose any combination of 10 synthetic field types, pick 1 to 1,000 rows, preview the table in your browser, and copy or download JSON or CSV.',
    howToUse: [
      'Check the fields you need: First Name, Last Name, Email (example.com), Fictional Phone (+1-555-01xx), Street Address, City, Country, Date (YYYY-MM-DD), Number, or UUID v4.',
      'Set Row Count between 1 and 1,000 and click Generate Test Data.',
      'Inspect the generated rows inside the live preview table (displays up to the first 50 rows smoothly).',
      'Export the full dataset using Copy CSV, Copy JSON, Download CSV, or Download JSON.',
    ],
    features: [
      'Ten selectable fields with clearly synthetic values: @example.com emails and +1-555-01xx phone numbers',
      'Row count from 1 to 1,000 generated offline from built-in word lists and crypto randomness',
      'Scrollable table preview showing the first 50 rows while exporting all generated rows',
      'Download .json / .csv files and Copy JSON / Copy CSV clipboard buttons with validation checks',
    ],
    technicalExplanation: {
      heading: 'Safe Placeholder Patterns for Software Testing',
      body: 'Reserved example.com email domains and 555-01xx fictional phone ranges ensure automated QA emails or SMS scripts never collide with real user accounts or live phone numbers.',
    },
    faqs: [
      {
        question: 'Is the generated data real personal information?',
        answer:
          'No. Every record is randomly assembled in your browser from small built-in name and city lists, reserved @example.com email addresses, and strictly fictional +1-555-01xx phone numbers. None of the rows correspond to real people.',
      },
      {
        question: 'What is a fake data generator used for?',
        answer:
          'Developers, QA testers, and analysts use synthetic rows to test form validation, seed local databases, verify spreadsheet CSV imports, and build realistic UI table mockups without risking customer privacy.',
      },
      {
        question: 'Can I export the fake data to CSV and JSON?',
        answer:
          'Yes. After generating rows, click Download CSV or Copy CSV for spreadsheet-ready comma-separated output (with automatic quoting), or use Download JSON and Copy JSON for API and database fixtures.',
      },
      {
        question: 'How many test rows can I generate at once?',
        answer:
          'You can generate between 1 and 1,000 synthetic rows per click. The on-screen table previews the first 50 rows to keep scrolling fast while all generated rows are included in Copy and Download exports.',
      },
    ],
    relatedToolSlugs: ['csv-to-json', 'uuid-generator', 'json-to-csv'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Fake Data Generator',
      howToUseSteps: [
        'Check any combination of the ten field options: First Name, Last Name, Email, Phone, Street Address, City, Country, Date, Number, and UUID v4.',
        'Enter a Row Count from 1 to 1,000 and click Generate Test Data to build a fresh synthetic dataset locally.',
        'Inspect the columns and sample values inside the scrollable preview table (which renders up to the first 50 rows smoothly).',
        'Export all generated rows using Copy CSV, Copy JSON, Download CSV (test-data.csv), or Download JSON (test-data.json).',
      ],
      checksOrShowsHeading: 'What the Fake Data Generator does',
      checksOrShowsIntro:
        'This generator assembles fictional test records strictly inside your browser tab using static built-in lists and Web Crypto randomness with zero external APIs:',
      checksOrShowsPoints: [
        'Draws realistic first names, last names, street addresses, cities, and countries from curated built-in arrays without pulling real personal records.',
        'Builds safe placeholder emails on the reserved example.com domain and fictional phone numbers strictly inside the +1-555-0100 through +1-555-0199 range.',
        'Generates random ISO YYYY-MM-DD dates, whole integers under 10,000, and browser UUID v4 strings on demand.',
        'Validates that at least one field is selected and Row Count sits between 1 and 1,000, then exports all rows as RFC-escaped CSV or 2-space pretty JSON.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample field selection and row count',
      exampleInput: 'Fields: firstName, lastName, email, phone, city | Row Count: 2',
      exampleOutputLabel: 'Sample CSV output',
      exampleOutput:
        'firstName,lastName,email,phone,city\nSamira,Khan,samira.khan412@example.com,+1-555-0142,London\nLiam,Hayes,liam.hayes739@example.com,+1-555-0188,Austin',
      exampleNote:
        'Using @example.com emails and +1-555-01xx phone patterns keeps QA fixtures completely safe against accidental outreach.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Is the generated data real personal information?',
          answer:
            'No. Every record is randomly assembled in your browser from small built-in name and city lists, reserved @example.com email addresses, and strictly fictional +1-555-01xx phone numbers. None of the rows correspond to real people.',
        },
        {
          question: 'What is a fake data generator used for?',
          answer:
            'Developers, QA testers, and analysts use synthetic rows to test form validation, seed local databases, verify spreadsheet CSV imports, and build realistic UI table mockups without risking customer privacy.',
        },
        {
          question: 'Can I export the fake data to CSV and JSON?',
          answer:
            'Yes. After generating rows, click Download CSV or Copy CSV for spreadsheet-ready comma-separated output (with automatic quoting), or use Download JSON and Copy JSON for API and database fixtures.',
        },
        {
          question: 'How many test rows can I generate at once?',
          answer:
            'You can generate between 1 and 1,000 synthetic rows per click. The on-screen table previews the first 50 rows to keep scrolling fast while all generated rows are included in Copy and Download exports.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['csv-to-json', 'uuid-generator', 'json-to-csv'],
    },
  },
];
