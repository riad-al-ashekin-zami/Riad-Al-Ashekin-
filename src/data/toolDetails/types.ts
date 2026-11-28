export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolExample {
  title: string;
  input: string;
  output: string;
  notes?: string;
}

export interface ToolTechnicalExplanation {
  heading: string;
  body: string;
  points?: string[];
}

export interface ToolBelowSectionGuide {
  howToUseHeading: string;
  howToUseSteps: string[];
  checksOrShowsHeading: string;
  checksOrShowsIntro: string;
  checksOrShowsPoints: string[];
  exampleHeading: string;
  exampleInputLabel?: string;
  exampleInput: string;
  exampleOutputLabel?: string;
  exampleOutput: string;
  exampleNote?: string;
  faqHeading: string;
  faqs: ToolFaq[];
  relatedHeading: string;
  relatedSlugs: [string, string, string];
}

export interface ToolRegistryItem {
  id: string;
  name: string;
  slug: string; // e.g. "meta-title-description-checker"
  path: string; // e.g. "/tools/meta-title-description-checker/"
  canonicalUrl: string; // e.g. "https://riadalashekin.com/tools/meta-title-description-checker/"
  category: 'serp' | 'crawler' | 'schema' | 'content' | 'url' | 'calculator' | 'image' | 'dev';
  badge: string;
  shortDescription: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  howToUse: string[];
  features: string[];
  technicalExplanation: ToolTechnicalExplanation;
  examples?: ToolExample;
  faqs: ToolFaq[];
  relatedToolSlugs: string[];
  legacyPaths?: string[];
  belowSectionGuide?: ToolBelowSectionGuide;
}
