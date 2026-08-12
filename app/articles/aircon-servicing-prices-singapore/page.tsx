import { ArticlePageTemplate } from "@/components/article/ArticlePageTemplate";
import { pricingGuide } from "@/data/articles";

export default function PricingGuideArticlePage() {
  return <ArticlePageTemplate data={pricingGuide} />;
}
