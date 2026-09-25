export type PageCategory = 
  | 'tools'
  | 'services'
  | 'rankings'
  | 'guides'
  | 'about-contact'
  | 'categories'
  | 'legal'
  | 'downloads';

export interface PageSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface PageFaq {
  question: string;
  answer: string;
}

export interface PageData {
  slug: string; // Exact slug requested e.g. "/best-8-seo-experts-in-sylhet/" or "/contact"
  canonicalUrl: string;
  title: string;
  metaDescription: string;
  badge: string;
  category: PageCategory;
  headline: string;
  subtitle: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  featuredImageCaption?: string;
  readingTime?: string;
  lastUpdated?: string;
  intro: string;
  sections: PageSection[];
  keyTakeaways?: string[];
  faqs?: PageFaq[];
  interactiveToolType?: 
    | 'meta-checker'
    | 'character-counter'
    | 'comma-separator'
    | 'robots-tester'
    | 'robots-generator'
    | 'llms-checker'
    | 'llms-generator'
    | 'seo-roi-calculator'
    | 'local-seo-calculator'
    | 'image-converter'
    | 'structured-data-test'
    | 'url-test'
    | 'sitemap-tester'
    | 'appointment'
    | 'contact'
    | 'pdf-viewer';
  toolConfig?: Record<string, unknown>;
  toolDetailId?: string;
  relatedSlugs?: string[];
}
