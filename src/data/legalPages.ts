import { PageData } from '../types';

export const legalPages: PageData[] = [
  {
    slug: '/privacy-policy/',
    canonicalUrl: 'https://riadalashekin.com/privacy-policy/',
    title: 'Privacy Policy | Riad Al Ashekin (riadalashekin.com)',
    metaDescription: 'Read the official privacy policy for riadalashekin.com. Learn how personal information, analytics data, and tool usage is handled transparently.',
    badge: 'Legal Disclosure',
    category: 'legal',
    headline: 'Privacy Policy',
    subtitle: 'Transparent disclosures regarding how information is collected, processed, and safeguarded on riadalashekin.com.',
    readingTime: '5 min read',
    lastUpdated: 'September 2025',
    intro: 'Your privacy is paramount. This Privacy Policy details the types of personal and analytical information collected when you visit riadalashekin.com or use our free webmaster utilities.',
    sections: [
      {
        title: '1. Information We Collect',
        content: 'We collect minimal personal data. When you submit a contact inquiry or book a consultation, we receive your name, email address, company website, and message details solely to respond to your request.',
        bullets: [
          'Direct Inquiries: Contact form submissions and appointment bookings',
          'Client-Side Tools: Our online utilities (Meta Tag Checker, Converters, Calculators) run entirely inside your browser. No uploaded text or images are transferred or stored on external servers',
          'Standard Analytics: Anonymized pageview metrics and referral channels used strictly to maintain website performance'
        ]
      },
      {
        title: '2. Cookies and Tracking Technologies',
        content: 'We use necessary first-party cookies to remember your session preferences and consent status. We do not sell, rent, or monetize your browsing data with third-party data brokers.'
      },
      {
        title: '3. Your Rights Under GDPR & CCPA',
        content: 'You have the right to access, rectify, or request the permanent deletion of any personal communication data you have shared with us. To exercise your rights, contact privacy@riadalashekin.com.'
      }
    ],
    relatedSlugs: ['/terms-of-service/', '/cookie-policy/', '/refund-policy/']
  },
  {
    slug: '/cookie-policy/',
    canonicalUrl: 'https://riadalashekin.com/cookie-policy/',
    title: 'Cookie Policy | Riad Al Ashekin (riadalashekin.com)',
    metaDescription: 'Detailed breakdown of cookies and local storage tokens utilized on riadalashekin.com for performance, accessibility, and session preferences.',
    badge: 'Cookie Disclosure',
    category: 'legal',
    headline: 'Cookie & Tracking Policy',
    subtitle: 'Clear explanations of browser storage and essential cookies used across our digital platforms.',
    readingTime: '4 min read',
    lastUpdated: 'September 2025',
    intro: 'This Cookie Policy explains how riadalashekin.com uses cookies, local browser storage, and similar technologies to enhance your experience.',
    sections: [
      {
        title: 'Categories of Cookies Employed',
        content: 'We maintain strict hygiene regarding browser storage:',
        bullets: [
          'Strictly Essential: Cookies required for security, navigation, and core interface state',
          'Functional Preferences: Local storage tokens that remember user tool choices (such as dark/light preferences or recent calculator inputs)',
          'Anonymized Performance: Aggregated telemetry helping us detect broken links and slow load times'
        ]
      },
      {
        title: 'Managing Your Cookie Preferences',
        content: 'You can disable cookies at any time through your browser settings. All our core SEO tools will continue functioning normally even if cookies are disabled.'
      }
    ],
    relatedSlugs: ['/privacy-policy/', '/terms-of-service/']
  },
  {
    slug: '/terms-of-service/',
    canonicalUrl: 'https://riadalashekin.com/terms-of-service/',
    title: 'Terms of Service | Riad Al Ashekin Strategic SEO Consulting',
    metaDescription: 'Terms and conditions governing the use of riadalashekin.com, proprietary SEO tools, content resources, and consulting advisory engagements.',
    badge: 'Terms of Use',
    category: 'legal',
    headline: 'Terms of Service & Engagement Conditions',
    subtitle: 'The legal framework establishing usage rights for our website, utilities, and professional consulting contracts.',
    readingTime: '5 min read',
    lastUpdated: 'September 2025',
    intro: 'By accessing riadalashekin.com, using our webmaster tools, or engaging our consulting services, you agree to comply with the following Terms of Service.',
    sections: [
      {
        title: '1. Use of Free Tools & Web Assets',
        content: 'Our online tools, calculators, and guides are provided for educational and professional operational use. You agree not to abuse, reverse engineer, or submit malicious payloads against these services.'
      },
      {
        title: '2. Intellectual Property Rights',
        content: 'All published articles, case studies, proprietary methodologies, and tool codebases are the exclusive intellectual property of Riad Al Ashekin, protected under international copyright law.'
      },
      {
        title: '3. Professional Consulting Disclaimers',
        content: 'Consulting recommendations are delivered based on industry best practices and deep technical analysis. Because search engine algorithms remain under third-party control (Google, Microsoft, OpenAI), specific ranking positions cannot be guaranteed as an absolute legal warranty.'
      }
    ],
    relatedSlugs: ['/privacy-policy/', '/refund-policy/']
  },
  {
    slug: '/refund-policy/',
    canonicalUrl: 'https://riadalashekin.com/refund-policy/',
    title: 'Refund & Cancellation Policy | Riad Al Ashekin Consulting',
    metaDescription: 'Transparent policy regarding cancellations, retainer termination, and project deliverables for advisory clients and audit services.',
    badge: 'Client Assurance',
    category: 'legal',
    headline: 'Refund & Service Cancellation Policy',
    subtitle: 'Transparent, fair policies governing service commitments, audit deliverables, and monthly retainers.',
    readingTime: '3 min read',
    lastUpdated: 'September 2025',
    intro: 'We maintain clear, transparent terms regarding our consulting retainers and one-time technical audit agreements.',
    sections: [
      {
        title: 'Monthly Strategic Retainers',
        content: 'Retainers require an initial 3-month commitment to allow sufficient time for technical fixes and ranking momentum to mature. Clients may terminate retainers at any time thereafter with 30 days written notice.'
      },
      {
        title: 'One-Time Audits & Diagnostic Reports',
        content: 'Given the intensive manual engineering and research required to produce custom 80+ point architectural audits, fees for delivered audit reports are non-refundable once the diagnostic sprint has commenced.'
      }
    ],
    relatedSlugs: ['/terms-of-service/', '/seo-pricing/']
  },
  {
    slug: '/privacy-policy-meta-title-description-checker/',
    canonicalUrl: 'https://riadalashekin.com/privacy-policy-meta-title-description-checker/',
    title: 'Privacy Policy: Meta Title & Description Checker Tool',
    metaDescription: 'Specific privacy statement for the Meta Title & Description Checker tool. 100% client-side computation with zero input storage.',
    badge: 'Tool Privacy Policy',
    category: 'legal',
    headline: 'Privacy Policy – Meta Title & Description Checker',
    subtitle: 'Dedicated privacy disclosure for users of the Meta Title & Description SERP Simulator.',
    readingTime: '3 min read',
    lastUpdated: 'September 2025',
    intro: 'This policy explicitly details how data is handled when you interact with our Meta Title & Description Checker and Length Diagnostic utilities.',
    sections: [
      {
        title: 'Zero Server Data Transmission',
        content: 'The Meta Title & Description Checker operates 100% inside your local web browser using JavaScript and HTML canvas. Your input titles, URLs, and meta descriptions are never transmitted, logged, or stored on our servers.',
        bullets: [
          'No logging of confidential staging URLs or pre-launch marketing headlines',
          'No external API calls required for snippet preview calculations',
          'All text is purged immediately when you refresh or close the browser tab'
        ]
      }
    ],
    relatedSlugs: ['/meta-title-description-checker/', '/privacy-policy/']
  },
  {
    slug: '/privacy-policy-wall-stud-calculator/',
    canonicalUrl: 'https://riadalashekin.com/privacy-policy-wall-stud-calculator/',
    title: 'Privacy Policy: Wall Stud Calculator (Web Utility)',
    metaDescription: 'Privacy policy for the Wall Stud Calculator utility. Zero data collection policy for structural and framing dimension inputs.',
    badge: 'Tool Privacy Policy',
    category: 'legal',
    headline: 'Privacy Policy – Wall Stud Calculator',
    subtitle: 'Privacy terms and data protection disclosures for the Wall Stud Framing Calculator web app.',
    readingTime: '3 min read',
    lastUpdated: 'September 2025',
    intro: 'This Privacy Policy explains how measurements, dimensions, and project inputs are handled when using the Wall Stud Calculator.',
    sections: [
      {
        title: 'Client-Side Calculation Only',
        content: 'All framing estimations, lumber quantity projections, and stud spacing formulas execute locally on your client machine. No architectural plans, dimensions, or user identifiers are recorded or saved.'
      }
    ],
    relatedSlugs: ['/privacy-policy/', '/terms-of-service/']
  },
  {
    slug: '/privacy-policy-for-prostate-volume-calculator-chrome-extension',
    canonicalUrl: 'https://riadalashekin.com/privacy-policy-for-prostate-volume-calculator-chrome-extension',
    title: 'Privacy Policy: Prostate Volume Calculator Chrome Extension',
    metaDescription: 'Official privacy policy for the Prostate Volume Calculator Chrome extension. Strict compliance with Chrome Web Store user data guidelines.',
    badge: 'Extension Privacy Policy',
    category: 'legal',
    headline: 'Privacy Policy – Prostate Volume Calculator Chrome Extension',
    subtitle: 'Strict adherence to medical data privacy standards and Google Chrome Web Store developer policies.',
    readingTime: '4 min read',
    lastUpdated: 'September 2025',
    intro: 'This Privacy Policy governs the use of the Prostate Volume Calculator Chrome Extension developed by Riad Al Ashekin.',
    sections: [
      {
        title: 'Zero Health or Personal Data Collection',
        content: 'The extension performs ellipsoidal volume calculations (Length x Width x Height x 0.52) directly in local memory. It does NOT collect, store, or transmit Protected Health Information (PHI) or personal data of any kind.',
        bullets: [
          'No tracking of user browsing history or active tabs',
          'No cookies, telemetry beacons, or external ad networks',
          'Functions completely offline without requiring network connectivity'
        ]
      }
    ],
    relatedSlugs: ['/privacy-policy/', '/terms-of-service/']
  },
  {
    slug: '/privacy-policy-for-random-password-generator/',
    canonicalUrl: 'https://riadalashekin.com/privacy-policy-for-random-password-generator/',
    title: 'Privacy Policy: Random Password Generator Tool',
    metaDescription: 'Privacy disclosure for the Random Password Generator. Explains cryptographically secure client-side generation without server storage.',
    badge: 'Tool Privacy Policy',
    category: 'legal',
    headline: 'Privacy Policy – Random Password Generator',
    subtitle: 'Complete transparency regarding cryptographic generation and zero password storage.',
    readingTime: '3 min read',
    lastUpdated: 'September 2025',
    intro: 'When generating security credentials, absolute privacy is non-negotiable. This document describes the security model of the Random Password Generator utility.',
    sections: [
      {
        title: 'Cryptographic Local Generation',
        content: 'Generated passwords use the browser’s native Web Crypto API (`window.crypto.getRandomValues`). The generated strings are created entirely inside your local device memory and are never transmitted across the network or stored in databases.'
      }
    ],
    relatedSlugs: ['/privacy-policy/', '/terms-of-service/']
  },
  {
    slug: '/privacy-policy-for-lorem-ipsum-generator/',
    canonicalUrl: 'https://riadalashekin.com/privacy-policy-for-lorem-ipsum-generator/',
    title: 'Privacy Policy: Lorem Ipsum Generator Tool',
    metaDescription: 'Privacy policy for the Lorem Ipsum placeholder text generator. Zero tracking or storage of generated dummy text.',
    badge: 'Tool Privacy Policy',
    category: 'legal',
    headline: 'Privacy Policy – Lorem Ipsum Generator',
    subtitle: 'Privacy disclosures for the dummy placeholder text generation utility.',
    readingTime: '2 min read',
    lastUpdated: 'September 2025',
    intro: 'This Privacy Policy describes data handling practices for the Lorem Ipsum Generator tool hosted on riadalashekin.com.',
    sections: [
      {
        title: 'Complete Client-Side Execution',
        content: 'Placeholder paragraphs, sentences, and words are generated instantly in your browser. No usage records, IP logs, or generated text snippets are retained or monitored.'
      }
    ],
    relatedSlugs: ['/privacy-policy/', '/character-counter/']
  }
];
