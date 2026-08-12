import type { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/article/ArticlePageTemplate";
import { pricingGuide } from "@/data/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: pricingGuide.title,
  description: pricingGuide.excerpt,
  path: `/articles/${pricingGuide.slug}`,
  image: pricingGuide.heroImage,
  type: "article",
});

export default function PricingGuideArticlePage() {
  return <ArticlePageTemplate data={pricingGuide} />;
}
