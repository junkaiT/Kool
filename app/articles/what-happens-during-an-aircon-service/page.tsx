import type { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/article/ArticlePageTemplate";
import { whatHappensDuringAService } from "@/data/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: whatHappensDuringAService.title,
  description: whatHappensDuringAService.excerpt,
  path: `/articles/${whatHappensDuringAService.slug}`,
  image: whatHappensDuringAService.heroImage,
  type: "article",
});

export default function WhatHappensArticlePage() {
  return <ArticlePageTemplate data={whatHappensDuringAService} />;
}
