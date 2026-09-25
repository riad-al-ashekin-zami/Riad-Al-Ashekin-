import { ToolRegistryItem } from './types';

export const calculatorTools: ToolRegistryItem[] = [
  {
    id: 'seo-roi-calc',
    name: 'SEO ROI Calculator',
    slug: 'seo-roi-calculator',
    path: '/tools/seo-roi-calculator/',
    canonicalUrl: 'https://riadalashekin.com/tools/seo-roi-calculator/',
    category: 'calculator',
    badge: 'Financial',
    shortDescription: 'Estimate the return on your SEO investment with this simple calculator. Input traffic, conversion rate, and average order value to see revenue projections.',
    seoTitle: 'SEO ROI Calculator - Forecast Return on SEO Investment | Riad Al Ashekin',
    metaDescription: 'Calculate the return on investment (ROI) of your SEO campaigns. Model organic revenue growth based on search traffic, conversion rates, and client values.',
    h1: 'SEO ROI Calculator',
    intro: 'Quantify the financial return of your organic search investments. Calculate expected pipeline revenue, customer acquisition cost (CAC), and net profit by modeling search traffic gains, conversion rates, and customer lifetime value (LTV).',
    howToUse: [
      'Enter your Current Monthly Organic Traffic and Projected Traffic Growth (%).',
      'Input your Website Conversion Rate (e.g. 2.5%).',
      'Enter your Average Order Value (AOV) or Customer Lifetime Value (LTV).',
      'Input your Monthly SEO Investment to see Projected ROI Percentage and Net Profit.'
    ],
    features: [
      'Calculates Projected Revenue, Net Profit, and ROI Percentage',
      'Interactive sliders for sensitivity modeling (Pessimistic, Realistic, Optimistic)',
      'Break-even timeline estimation (months to recoup investment)',
      'Customer Acquisition Cost (CAC) comparison against paid Google Ads',
      'Printable and exportable executive summary report'
    ],
    technicalExplanation: {
      heading: 'The Compounding Mathematics of Organic Search ROI',
      body: 'Unlike paid search (PPC) where lead generation immediately stops the moment ad spend ceases, organic SEO is an equity asset. High-ranking content and domain authority compound over time, driving customer acquisition costs toward near-zero as organic volume scales.',
      points: [
        'ROI Formula: Net Profit from SEO = ((Projected Traffic * Conversion Rate * Customer Value) - Total SEO Cost) / Total SEO Cost * 100.',
        'Compounding Lift: High rankings produce recurring monthly traffic without per-click media charges.'
      ]
    },
    examples: {
      title: 'Sample Enterprise SEO Projection',
      input: 'Traffic: 50,000 visitors/mo (+40% lift = 70,000)\nConversion Rate: 2.0%\nAOV: $250\nSEO Retainer: $5,000/mo ($60,000/yr)',
      output: 'Incremental Monthly Revenue: $100,000\nAnnual Gross Profit: $1,200,000\nNet Annual ROI: 1,900%',
      notes: 'Demonstrates how small percentage gains in organic traffic yield massive enterprise revenue.'
    },
    faqs: [
      {
        question: 'How long does it typically take to see a positive ROI from SEO?',
        answer: 'Most businesses achieve positive cash-flow ROI from SEO within 6 to 9 months, with compounding accelerating significantly in year two.'
      }
    ],
    relatedToolSlugs: [
      'seo-growth-calculator',
      'local-seo-pricing-calculator',
      'conversion-rate-calculator',
      'roas-calculator'
    ],
    legacyPaths: ['/seo-roi-calculator/']
  },
  {
    id: 'local-seo-calc',
    name: 'Local SEO Pricing Calculator',
    slug: 'local-seo-pricing-calculator',
    path: '/tools/local-seo-pricing-calculator/',
    canonicalUrl: 'https://riadalashekin.com/tools/local-seo-pricing-calculator/',
    category: 'calculator',
    badge: 'Pricing',
    shortDescription: 'Calculate expected investment and service tier pricing for localized business campaigns. Tailor monthly estimates based on industry competitiveness.',
    seoTitle: 'Local SEO Pricing Calculator - Estimate Campaign Budgets | Riad Al Ashekin',
    metaDescription: 'Estimate monthly retainer pricing and deliverables for Local SEO campaigns based on location count, industry competition, and target market size.',
    h1: 'Local SEO Pricing Calculator',
    intro: 'Estimate realistic campaign budgets for local business search dominance. Calculate monthly retainer ranges based on the number of business locations, population density, industry competition, and Google Business Profile optimization needs.',
    howToUse: [
      'Select your Industry Vertical (Dental, Legal, Home Services, Retail).',
      'Specify the Number of Physical Locations or target service areas.',
      'Choose the Local Market Size (Metro Area, Mid-Sized City, Small Town).',
      'Review the recommended monthly investment tiers and deliverable scope.'
    ],
    features: [
      'Calculates Starter, Growth, and Dominance monthly retainer tiers',
      'Factors in local citation building, Google Business Profile management, and review generation',
      'Accounts for regional competition indices across 25+ industries',
      'Outlines expected timeline to rank in the Google Local 3-Pack',
      'Exports transparent scope breakdown'
    ],
    technicalExplanation: {
      heading: 'The Three Pillars of Local Pack Ranking',
      body: 'Google\'s Local Algorithm ranks businesses on three primary signals: Relevance (how well the profile matches the search), Distance (proximity of the searcher to the business), and Prominence (review velocity, backlink authority, and local citations).',
      points: [
        'Google Business Profile (GBP): Primary ranking factor for the map 3-pack.',
        'Local Citations: Consistent Name, Address, and Phone (NAP) across major aggregators.'
      ]
    },
    faqs: [
      {
        question: 'What is the average monthly cost of Local SEO?',
        answer: 'For a single-location business in a mid-sized market, professional local SEO typically ranges from $750 to $2,500 per month depending on competitive intensity.'
      }
    ],
    relatedToolSlugs: [
      'local-business-schema-generator',
      'location-keyword-generator',
      'seo-roi-calculator',
      'conversion-rate-calculator'
    ],
    legacyPaths: ['/local-seo-pricing-calculator/']
  },
  {
    id: 'seo-traffic-calculator',
    name: 'SEO Traffic Calculator',
    slug: 'seo-traffic-calculator',
    path: '/tools/seo-traffic-calculator/',
    canonicalUrl: 'https://riadalashekin.com/tools/seo-traffic-calculator/',
    category: 'calculator',
    badge: 'Forecasting',
    shortDescription: 'Estimate monthly organic search traffic based on target keyword search volume, expected rankings, and estimated click-through rates.',
    seoTitle: 'SEO Traffic Calculator - Forecast Organic Search Volume | Riad Al Ashekin',
    metaDescription: 'Calculate estimated organic search visitors from target keyword lists. Forecast traffic by position rankings, search volumes, and CTR curves.',
    h1: 'SEO Traffic Calculator & Forecaster',
    intro: 'Forecast expected organic visitors before investing in content production. Model monthly traffic yields by entering search volumes, expected ranking positions (1 to 10), and empirical click-through rate curves.',
    howToUse: [
      'Enter the Total Monthly Search Volume for your target keyword basket.',
      'Select your Projected Ranking Position (Position 1, 2, 3, 4–10).',
      'Adjust the CTR model slider if featured snippets or ads appear on the SERP.',
      'Review estimated monthly visits, annual traffic, and equivalent Google Ads value.'
    ],
    features: [
      'Pre-calibrated organic CTR benchmarks for Google positions 1 through 10',
      'Accounts for SERP feature CTR degradation (Ads, Featured Snippets, AI Overviews)',
      'Estimates paid media equivalence (cost to buy the same traffic via PPC)',
      'Interactive volume-to-traffic curve visualizer',
      'Exportable organic traffic forecast models'
    ],
    technicalExplanation: {
      heading: 'Translating Search Volume into Actual Clicks',
      body: 'Having 10,000 monthly search volume for a keyword does not mean 10,000 visitors. Position #1 captures approximately 28% to 32% of clicks, position #2 captures ~15%, and positions below #5 capture under 4%. Accurately forecasting traffic requires applying realistic CTR decay curves.',
      points: [
        'SERP Crowding: Paid ads and Google AI Overviews reduce organic position #1 CTR by up to 30%.',
        'Long-Tail Multiplier: Top-ranking pages typically rank for 5x to 20x more long-tail variants than just the primary seed query.'
      ]
    },
    faqs: [
      {
        question: 'What percentage of searchers click on the #1 organic result?',
        answer: 'On clean search result pages without heavy ads, position 1 captures roughly 28% to 32% of total clicks. On mobile, this can be slightly lower due to screen real estate occupied by ads.'
      }
    ],
    relatedToolSlugs: [
      'organic-ctr-calculator',
      'seo-roi-calculator',
      'seo-growth-calculator',
      'roas-calculator'
    ]
  },
  {
    id: 'organic-ctr-calculator',
    name: 'Organic CTR Calculator',
    slug: 'organic-ctr-calculator',
    path: '/tools/organic-ctr-calculator/',
    canonicalUrl: 'https://riadalashekin.com/tools/organic-ctr-calculator/',
    category: 'calculator',
    badge: 'CTR Curve',
    shortDescription: 'Model expected CTR curves across Google positions 1 through 10 based on industry benchmarks and featured snippet adjustments.',
    seoTitle: 'Organic CTR Calculator - Google Ranking CTR Curve Modeler | Riad Al Ashekin',
    metaDescription: 'Model expected Click-Through Rates (CTR) across Google search rankings 1 to 10. Evaluate the traffic impact of moving from position 4 to position 1.',
    h1: 'Organic CTR Calculator',
    intro: 'Understand the exponential value of top Google rankings. Calculate the traffic multiplier of improving keyword positions (e.g. advancing from position 6 to position 1) using verified empirical CTR distribution models.',
    howToUse: [
      'Enter the monthly search volume for a keyword or topic.',
      'Select your Current Ranking Position and Target Ranking Position.',
      'Review the CTR comparison chart showing the traffic difference between positions.',
      'Inspect the Traffic Gain Multiplier.'
    ],
    features: [
      'Standard Google Desktop & Mobile organic CTR distribution curves',
      'Adjustable modifiers for Brand vs Non-Brand search queries',
      'Featured Snippet and Knowledge Panel CTR dampening adjustments',
      'Traffic lift calculation between any two ranking positions',
      'Visual comparative bar chart'
    ],
    technicalExplanation: {
      heading: 'The Power-Law Curve of Google Search Rankings',
      body: 'Google organic clicks follow a strict power-law distribution. The top 3 organic results capture over 54% of all clicks, while the entire second page of Google receives less than 0.7% of total clicks. Moving a keyword from position 4 to position 1 delivers up to a 400% increase in organic traffic.',
      points: [
        'Position 1: ~31.7% CTR',
        'Position 2: ~15.8% CTR',
        'Position 3: ~9.8% CTR',
        'Position 10: ~1.8% CTR'
      ]
    },
    faqs: [
      {
        question: 'How do branded searches affect CTR curves?',
        answer: 'For branded searches (e.g. "Nike shoes" or "Stripe login"), the top result often captures 50% to 65% of total clicks because the user\'s navigational intent is explicitly focused on that specific company.'
      }
    ],
    relatedToolSlugs: [
      'seo-traffic-calculator',
      'seo-roi-calculator',
      'serp-snippet-preview',
      'conversion-rate-calculator'
    ]
  },
  {
    id: 'conversion-rate-calculator',
    name: 'Conversion Rate Calculator',
    slug: 'conversion-rate-calculator',
    path: '/tools/conversion-rate-calculator/',
    canonicalUrl: 'https://riadalashekin.com/tools/conversion-rate-calculator/',
    category: 'calculator',
    badge: 'CRO Metrics',
    shortDescription: 'Calculate your organic conversion rate from total visitors and goal completions, with statistical significance checks.',
    seoTitle: 'Conversion Rate Calculator - CRO & Conversion Percentage Tool | Riad Al Ashekin',
    metaDescription: 'Calculate conversion rate percentages, cost per conversion, and lead generation targets. Perfect for Conversion Rate Optimization (CRO) and SEO audits.',
    h1: 'Conversion Rate Calculator',
    intro: 'Drive more revenue from your existing traffic. Calculate exact conversion percentages from total website visitors and goal completions (sales, form leads, demo bookings), and determine the traffic needed to hit target revenue goals.',
    howToUse: [
      'Enter Total Visitors / Sessions in the first field.',
      'Enter Total Conversions (leads, purchases, signups) in the second field.',
      'Click Calculate Conversion Rate to see your percentage rate and benchmark comparisons.',
      'Input target revenue goals to calculate required traffic volume.'
    ],
    features: [
      'Computes exact conversion rate to two decimal places',
      'Compares performance against global eCommerce and B2B industry benchmarks (1.8% - 3.5%)',
      'Calculates Cost Per Acquisition (CPA) and Revenue Per Visitor (RPV)',
      'Goal forecaster: computes traffic needed to achieve desired conversion targets',
      'Responsive interactive gauges'
    ],
    technicalExplanation: {
      heading: 'The Intersection of SEO and CRO',
      body: 'Traffic without conversion produces vanity metrics. Improving your conversion rate from 1% to 2% doubles your business revenue without needing a single additional visitor. High-intent SEO traffic converts at significantly higher rates than display or social media ads.',
      points: [
        'Conversion Formula: (Total Conversions / Total Unique Visitors) * 100.',
        'Intent Alignment: Ensure landing page CTAs match the search intent that brought visitors to the page.'
      ]
    },
    faqs: [
      {
        question: 'What is a good conversion rate for organic search traffic?',
        answer: 'For eCommerce, a standard organic conversion rate is 2.0% to 3.2%. For B2B lead generation with high-intent keywords, conversion rates often range between 3% and 7%.'
      }
    ],
    relatedToolSlugs: [
      'seo-roi-calculator',
      'roas-calculator',
      'seo-traffic-calculator',
      'utm-builder'
    ]
  },
  {
    id: 'roas-calculator',
    name: 'ROAS Calculator',
    slug: 'roas-calculator',
    path: '/tools/roas-calculator/',
    canonicalUrl: 'https://riadalashekin.com/tools/roas-calculator/',
    category: 'calculator',
    badge: 'Financial',
    shortDescription: 'Calculate Return on Ad Spend (ROAS) and compare organic inbound profitability against paid media acquisition costs.',
    seoTitle: 'ROAS Calculator - Return on Ad Spend & Marketing Efficiency | Riad Al Ashekin',
    metaDescription: 'Calculate Return on Ad Spend (ROAS) and break-even thresholds. Compare paid ad profitability against organic inbound acquisition channels.',
    h1: 'ROAS Calculator',
    intro: 'Evaluate the profitability of your marketing spend. Calculate Return on Ad Spend (ROAS), break-even ROAS thresholds, and compare the unit economics of paid media acquisition against organic inbound search.',
    howToUse: [
      'Enter Total Revenue Generated from the campaign.',
      'Enter Total Ad Spend (or total campaign budget).',
      'Enter your Profit Margin (%) to calculate Break-Even ROAS.',
      'Review your ROAS multiple (e.g. 4.5x or 450%) and net profitability.'
    ],
    features: [
      'Calculates ROAS ratio (e.g. 5:1) and percentage (500%)',
      'Break-Even ROAS calculator based on gross product margins',
      'Net Profit calculation after deducting advertising costs',
      'Comparative organic search equity equivalent',
      'Clean financial summary display'
    ],
    technicalExplanation: {
      heading: 'Understanding ROAS vs ROI in Growth Marketing',
      body: 'ROAS measures gross revenue generated for every dollar spent directly on advertising (Revenue / Spend). ROI measures net profit after all costs (including agency retainers, COGS, and overhead). Understanding both prevents scaling unprofitable ad campaigns.',
      points: [
        'Break-Even ROAS: 1 / Profit Margin %. (If your margin is 25%, your break-even ROAS is 400% or 4.0x).',
        'Organic Advantage: Organic search channels carry no per-click costs, boosting overall blended marketing efficiency.'
      ]
    },
    faqs: [
      {
        question: 'What is considered a strong ROAS benchmark?',
        answer: 'A 4:1 ROAS (400%) is widely regarded as a healthy benchmark for digital campaigns, generating $4 in revenue for every $1 invested.'
      }
    ],
    relatedToolSlugs: [
      'seo-roi-calculator',
      'conversion-rate-calculator',
      'seo-growth-calculator',
      'local-seo-pricing-calculator'
    ]
  },
  {
    id: 'seo-growth-calculator',
    name: 'SEO Growth Calculator',
    slug: 'seo-growth-calculator',
    path: '/tools/seo-growth-calculator/',
    canonicalUrl: 'https://riadalashekin.com/tools/seo-growth-calculator/',
    category: 'calculator',
    badge: 'Compounding',
    shortDescription: 'Forecast compound organic growth over 6, 12, and 24 months factoring in monthly publishing cadence and domain authority gains.',
    seoTitle: 'SEO Growth Calculator - Compound Organic Traffic Modeling | Riad Al Ashekin',
    metaDescription: 'Model compound organic search growth over 6, 12, and 24 months. Forecast traffic and lead velocity based on monthly content velocity and authority gains.',
    h1: 'SEO Compound Growth Calculator',
    intro: 'Model how consistent content publishing, link acquisition, and technical optimization compound organic traffic over 6, 12, and 24 months. Visualize growth curves and forecast when your organic channel reaches escape velocity.',
    howToUse: [
      'Enter Current Monthly Visitors.',
      'Select your Monthly Content Publishing Cadence (e.g. 4, 8, 16 articles/mo).',
      'Choose your Estimated Compound Growth Rate (Conservative 5%, Moderate 10%, Aggressive 15%).',
      'View the projected 6, 12, and 24-month trajectory charts.'
    ],
    features: [
      'Forecasts traffic, lead volume, and cumulative revenue over 24 months',
      'Compound interest curve visualizer for organic marketing assets',
      'Custom publishing velocity and backlink velocity multipliers',
      'Compares organic growth against equivalent linear paid ad spend',
      'Exportable spreadsheet forecast data'
    ],
    technicalExplanation: {
      heading: 'The S-Curve of Organic Search Acceleration',
      body: 'SEO does not grow in a straight line. New sites typically experience a flat "sandbox" period during the first 3 to 6 months as Google assesses trust. Once domain authority reaches a critical threshold, indexation velocity and rankings accelerate exponentially into a compounding S-curve.',
      points: [
        'Content Velocity: Publishing high-quality cluster articles at a steady cadence signals topical authority to Google.',
        'Backlink Compounding: Top-ranking informational pages naturally earn passive editorial backlinks from researchers and journalists.'
      ]
    },
    faqs: [
      {
        question: 'Why does SEO compound while paid ads do not?',
        answer: 'A high-ranking blog article published today continues delivering visitors next year without additional cost. When you publish another article next month, its traffic adds on top of the first, creating compounding growth.'
      }
    ],
    relatedToolSlugs: [
      'seo-roi-calculator',
      'seo-traffic-calculator',
      'roas-calculator',
      'conversion-rate-calculator'
    ]
  }
];
