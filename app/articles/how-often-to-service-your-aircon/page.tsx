import type { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/article/ArticlePageTemplate";
import { servicingFrequency } from "@/data/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: servicingFrequency.title,
  description: servicingFrequency.excerpt,
  path: `/articles/${servicingFrequency.slug}`,
  image: servicingFrequency.heroImage,
  type: "article",
});

export default function ServicingFrequencyArticlePage() {
  return <ArticlePageTemplate data={servicingFrequency} />;
}
