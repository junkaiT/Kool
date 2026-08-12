/**
 * Analytics + conversion tracking helpers (Google Analytics 4 + Google Ads),
 * driven by public env vars. Everything here is a no-op until the IDs are set,
 * so the tracking is dormant and safe to ship before the accounts exist.
 *
 * Set in .env.local (local) and the Vercel dashboard (production):
 *   NEXT_PUBLIC_GA_ID           GA4 Measurement ID  (G-XXXXXXXXXX)
 *   NEXT_PUBLIC_GOOGLE_ADS_ID   Google Ads ID       (AW-XXXXXXXXXX)
 *   NEXT_PUBLIC_ADS_LABEL_*     Google Ads conversion labels (per action)
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

/** Google Ads conversion labels, one per tracked action (all optional). */
const ADS_LABELS = {
  booking: process.env.NEXT_PUBLIC_ADS_LABEL_BOOKING,
  whatsapp: process.env.NEXT_PUBLIC_ADS_LABEL_WHATSAPP,
  call: process.env.NEXT_PUBLIC_ADS_LABEL_CALL,
} as const;

/** True once at least one tag ID is configured — gates loading gtag.js. */
export const analyticsEnabled = Boolean(GA_ID || GOOGLE_ADS_ID);

type Params = Record<string, unknown>;

function gtag(...args: unknown[]): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  w.gtag?.(...args);
}

/** GA4 page_view — sent manually on client-side route changes. */
export function pageview(path: string): void {
  if (GA_ID) gtag("event", "page_view", { page_path: path });
}

/** Fire a GA4 event. No-op if gtag hasn't loaded. */
export function trackEvent(name: string, params: Params = {}): void {
  gtag("event", name, params);
}

/** Fire a Google Ads conversion for a given action, if its label is set. */
function adsConversion(action: keyof typeof ADS_LABELS, params: Params = {}): void {
  const label = ADS_LABELS[action];
  if (GOOGLE_ADS_ID && label) {
    gtag("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${label}`, ...params });
  }
}

/* -------- Tracked actions: one call sends the GA4 event + Ads conversion -------- */

export function trackWhatsAppClick(params: Params = {}): void {
  trackEvent("whatsapp_click", params);
  adsConversion("whatsapp", params);
}

export function trackPhoneClick(params: Params = {}): void {
  trackEvent("phone_call_click", params);
  adsConversion("call", params);
}

export function trackBookingComplete(params: Params = {}): void {
  trackEvent("booking_complete", params);
  adsConversion("booking", { currency: "SGD", ...params });
}
