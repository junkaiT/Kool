export const BUSINESS_NAME = "Kool Aircon";
// Legal registered entity operating the Kool Aircon brand — distinct from the
// trading/brand name above. Shown in the footer copyright line.
export const LEGAL_ENTITY_NAME = "TGQCapital Pte. Ltd.";
// The Google Business Profile is listed under this name. Surfaced as
// schema.org `alternateName` so Google links the site's brand to the GBP.
export const ALTERNATE_NAME = "Kool & Kleen Aircon Servicing";
export const WHATSAPP_NUMBER = "6588152868";
export const WHATSAPP_DISPLAY = "+65 8815 2868";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_TEL = "+6588152868";
export const EMAIL = "hello@kool.com.sg";

// Registered office address. NOTE: this is a registered/virtual office (SBF Center),
// not a customer-facing storefront. Keep this in sync with the Google Business Profile
// once that's set up — a mobile service business is usually listed as a service-area
// business, so the address shown there may differ from this registered one.
export const ADDRESS = "160 Robinson Road, #14-04 Singapore Business Federation Center, Singapore 068914";
// Structured parts for schema.org PostalAddress (see lib/seo.ts).
export const ADDRESS_PARTS = {
  streetAddress: "160 Robinson Road, #14-04 Singapore Business Federation Center",
  addressLocality: "Singapore",
  postalCode: "068914",
  addressCountry: "SG",
} as const;

// Public profiles — used for schema.org `sameAs` and profile cleanup.
export const FACEBOOK_URL = "https://www.facebook.com/koolairconservices/";
export const GOOGLE_BUSINESS_URL = "https://share.google/dYLzahRyim6DPlyNR";

export const COMPANY_TAGLINE = "Cool Air, Cool Life";
export const FINAL_CTA_IMAGE = "/images/home/final-cta.png";
// Brand logo, exported from the inline <Logo> mark. Used for schema.org
// Organization/LocalBusiness `logo`. Swap for a raster PNG if one is produced.
export const LOGO_IMAGE = "/logo.svg";
// TODO: swap for our specific listing/reviews page on AirconServices.sg once it's live —
// currently points at their homepage since our profile is still being set up.
export const AIRCON_SERVICES_URL = "https://airconservices.sg";
export const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJKcfsrSgyKKEROKUI5sv4NhA";

export type Service = {
  slug: string;
  name: string;
  icon: string;
  isNew?: boolean;
};

export const SERVICES: Service[] = [
  { slug: "general-servicing", name: "General Servicing", icon: "❄️" },
  { slug: "chemical-wash", name: "Chemical Wash", icon: "💧" },
  { slug: "chemical-overhaul", name: "Chemical Overhaul", icon: "🔧" },
  { slug: "kooljet", name: "KoolJet Wash", icon: "💦", isNew: true },
  { slug: "installation", name: "Installation", icon: "⚙️" },
  { slug: "commercial", name: "Commercial", icon: "🏢" },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/book", label: "Book Now" },
  { href: "/prices", label: "Prices" },
  { href: "/articles", label: "Articles" },
];

export const FOOTER_COMPANY_LINKS = [
  { href: "/prices", label: "Our prices" },
  { href: "/referral", label: "Referral programme" },
  { href: "/articles", label: "Articles" },
  { href: "/faq", label: "FAQ" },
  { href: "/review", label: "Leave us a Review" },
];
