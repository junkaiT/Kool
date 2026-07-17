export const WHATSAPP_NUMBER = "6596687419";
export const WHATSAPP_DISPLAY = "+65 9668 7419";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_TEL = "+6596687419";
export const EMAIL = "hello@kool.com.sg";
export const ADDRESS = "73 Upper Paya Lebar Road, Singapore";
export const COMPANY_TAGLINE = "Cool Air, Cool Life";
export const FINAL_CTA_IMAGE = "/images/home/final-cta.png";

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
];
