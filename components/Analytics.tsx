"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  GA_ID,
  GOOGLE_ADS_ID,
  analyticsEnabled,
  pageview,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/analytics";

/**
 * Loads gtag.js (GA4 + Google Ads) and wires site-wide tracking:
 *  - a GA4 page_view on every client-side route change
 *  - a delegated click listener that catches WhatsApp (wa.me) and phone (tel:)
 *    links anywhere on the site, so individual buttons don't need touching.
 *
 * Renders nothing and fires nothing until an ID is configured (see lib/analytics).
 */
export function Analytics() {
  const pathname = usePathname();

  // GA4 page_view on route change (config below uses send_page_view:false).
  useEffect(() => {
    if (analyticsEnabled && pathname) pageview(pathname);
  }, [pathname]);

  // One delegated listener handles WhatsApp + phone clicks across the whole site.
  useEffect(() => {
    if (!analyticsEnabled) return;
    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href") ?? "";
      if (!href) return;
      if (href.startsWith("tel:")) {
        trackPhoneClick({ link_url: href });
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackWhatsAppClick({ link_url: href });
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!analyticsEnabled) return null;

  const bootstrapId = GA_ID || GOOGLE_ADS_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${bootstrapId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}', { send_page_view: false });` : ""}
          ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
