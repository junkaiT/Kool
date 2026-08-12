import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/site";
import { ARTICLES } from "@/data/articles";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/book", priority: 0.9 },
    { path: "/prices", priority: 0.9 },
    { path: "/articles", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/referral", priority: 0.4 },
  ];

  const serviceRoutes = SERVICES.map((s) => ({
    path: `/${s.slug}`,
    priority: 0.8,
  }));

  const articleRoutes = ARTICLES.map((a) => ({
    path: `/articles/${a.slug}`,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes].map(
    ({ path, priority }) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "weekly",
      priority,
    }),
  );
}
