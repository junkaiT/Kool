export type ArticleSection = { h: string; body: string };

export type PriceComparisonRow = { service: string; economy: string; kool: string; premium: string };
export type PriceComparison = {
  heading: string;
  intro?: string;
  rows: PriceComparisonRow[];
  note?: string;
};

export type ArticleData = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  heroImage?: string;
  /** Optional second photo shown as a visual break after the first section. */
  midImage?: string;
  publishedDate: string;
  readTime: string;
  intro: string;
  /** Optional "at a glance" pricing table shown right after the intro. */
  priceComparison?: PriceComparison;
  sections: ArticleSection[];
  /** Optional external "further reading" link shown at the end of the article. */
  citation?: { label: string; url: string };
  ctaHeading: string;
  ctaBody: string;
};
