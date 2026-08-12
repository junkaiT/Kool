export type ArticleSection = { h: string; body: string };

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
  sections: ArticleSection[];
  /** Optional external "further reading" link shown at the end of the article. */
  citation?: { label: string; url: string };
  ctaHeading: string;
  ctaBody: string;
};
