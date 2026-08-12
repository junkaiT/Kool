import type { Metadata } from "next";
import {
  ADDRESS_PARTS,
  ALTERNATE_NAME,
  BUSINESS_NAME,
  EMAIL,
  FACEBOOK_URL,
  FINAL_CTA_IMAGE,
  GOOGLE_BUSINESS_URL,
  LOGO_IMAGE,
  PHONE_TEL,
} from "@/lib/site";

/**
 * Canonical production origin. Every canonical URL, Open Graph URL, sitemap
 * entry and JSON-LD `url` is built from this. The site is also reachable at
 * its Vercel preview domain, but we always point search engines here to avoid
 * duplicate-content splits.
 */
export const SITE_URL = "https://www.kool.com.sg";

/** Default social-share image (a real hero photo, not a placeholder). */
export const DEFAULT_OG_IMAGE = FINAL_CTA_IMAGE;

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

type PageMetaInput = {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/prices". Used for the canonical + OG URL. */
  path: string;
  /** Site-relative or absolute image URL. Defaults to the hero photo. */
  image?: string;
  type?: "website" | "article";
};

/**
 * Build a page's Metadata with a canonical URL and Open Graph / Twitter cards.
 * `metadataBase` is set once in app/layout.tsx, so relative image paths resolve.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS_NAME,
      locale: "en_SG",
      type,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** Trim copy to a meta-description-friendly length on a word boundary. */
function truncate(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}

/** Metadata for a service page, derived from its data object. */
export function serviceMetadata(data: {
  title: string;
  slug: string;
  heroBody: string;
}): Metadata {
  return pageMetadata({
    title: `${data.title} Singapore`,
    description: truncate(data.heroBody),
    path: `/${data.slug}`,
  });
}

/* -------------------------------------------------------------------------- */
/*  JSON-LD structured data builders                                          */
/* -------------------------------------------------------------------------- */

/**
 * Site-wide business identity. Rendered once in the root layout.
 * TODO: add `geo` (lat/lng) once the Google Business Profile is live so this
 * matches GBP exactly.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    alternateName: ALTERNATE_NAME,
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    logo: absoluteUrl(LOGO_IMAGE),
    telephone: PHONE_TEL,
    email: EMAIL,
    priceRange: "$$",
    description:
      "Professional aircon servicing, chemical wash, KoolJet wash, chemical overhaul, installation and repair for homes and businesses across Singapore.",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_PARTS.streetAddress,
      addressLocality: ADDRESS_PARTS.addressLocality,
      postalCode: ADDRESS_PARTS.postalCode,
      addressCountry: ADDRESS_PARTS.addressCountry,
    },
    areaServed: { "@type": "Country", name: "Singapore" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [FACEBOOK_URL, GOOGLE_BUSINESS_URL],
  };
}

/**
 * Brand-level identity, distinct from the LocalBusiness node. Reinforces
 * knowledge-panel/brand signals and ties the logo to the Organization.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    alternateName: ALTERNATE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(LOGO_IMAGE),
    },
    sameAs: [FACEBOOK_URL, GOOGLE_BUSINESS_URL],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-SG",
  };
}

type CrumbInput = { name: string; path: string };

export function breadcrumbSchema(crumbs: CrumbInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

type FaqInput = { q: string; a: string }[];

export function faqPageSchema(items: FaqInput) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Human date like "11 Aug 2026"; converted to ISO for `datePublished`. */
  publishedDate: string;
};

export function articleSchema({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  publishedDate,
}: ArticleSchemaInput) {
  // Human dates like "11 Aug 2026" parse as *local* midnight; formatting via
  // toISOString() would shift the day in non-UTC environments, so read the
  // local Y/M/D components instead to keep the calendar date stable everywhere.
  const parsed = new Date(publishedDate);
  let datePublished: string | undefined;
  if (!Number.isNaN(parsed.getTime())) {
    const y = parsed.getFullYear();
    const m = String(parsed.getMonth() + 1).padStart(2, "0");
    const d = String(parsed.getDate()).padStart(2, "0");
    datePublished = `${y}-${m}-${d}`;
  }
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(image),
    ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
    author: { "@type": "Organization", name: BUSINESS_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: absoluteUrl(DEFAULT_OG_IMAGE) },
    },
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
};

export function serviceSchema({ name, description, path }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "Country", name: "Singapore" },
  };
}
