import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS_NAME } from "@/lib/site";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const DEFAULT_TITLE = "Kool Aircon — Professional Aircon Servicing Singapore";
const DEFAULT_DESCRIPTION =
  "Professional aircon servicing, chemical wash, KoolJet wash, chemical overhaul, installation and repair for homes and businesses across Singapore.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    // Per-page titles render as "Prices | Kool Aircon", etc.
    template: "%s | Kool Aircon",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: BUSINESS_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: BUSINESS_NAME,
    locale: "en_SG",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // Set NEXT_PUBLIC_GSC_VERIFICATION once Google Search Console is connected.
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={[organizationSchema(), webSiteSchema(), localBusinessSchema()]} />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
