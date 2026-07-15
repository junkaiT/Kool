import type { Step } from "@/components/NumberedStep";

export type WhenCard = { icon: string; h: string; body: string };
export type IncludedItem = { icon: string; h: string; body: string };
export type FaqItem = { q: string; a: string };
export type RelatedCard = { name: string; desc: string; href: string };

export type PricingRow = { label: string; price: string };

export type ServicePricing = {
  label: string;
  displayPrice: string;
  unit?: string;
  isCustomQuote?: boolean;
  rows?: PricingRow[];
  note?: string;
};

export type ServicePageData = {
  slug: string;
  breadcrumbLabel: string;
  title: string;
  heroBody: string;
  bestFor?: string;
  pricing: ServicePricing;
  whenHeading: string;
  whenCards: WhenCard[];
  included: IncludedItem[];
  howItWorks: Step[];
  faqHeading: string;
  faq: FaqItem[];
  related: RelatedCard[];
  ctaHeading: string;
  ctaBody: string;
};
