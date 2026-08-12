import { ArticlePageTemplate } from "@/components/article/ArticlePageTemplate";
import { whatHappensDuringAService } from "@/data/articles";

export default function WhatHappensArticlePage() {
  return <ArticlePageTemplate data={whatHappensDuringAService} />;
}
