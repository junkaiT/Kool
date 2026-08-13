"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  GA_ID,
  GOOGLE_ADS_ID,
  META_PIXEL_ID,
  analyticsEnabled,
  pageview,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/analytics";

/**
 * Loads gtag.js (GA4 + Google Ads) and the Meta Pixel, and wires site-wide
 * tracking:
 *  - a page_view (GA4 + Meta) on every client-side route change
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

  const googleId = GA_ID || GOOGLE_ADS_ID;

  return (
    <>
      {googleId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
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
      )}

      {META_PIXEL_ID && (
        <>
          {/* Meta Pixel base code — inits only; PageView is fired from the
              route-change effect above so SPA navigations are counted once. */}
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}
