import type { Metadata } from "next";
import QRCode from "qrcode";
import { GOOGLE_REVIEW_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leave Us a Review | Kool Aircon",
  description:
    "Enjoyed our aircon service? Leave us a quick Google review — it takes less than a minute and means the world to our team.",
};

export default async function ReviewPage() {
  const qrDataUrl = await QRCode.toDataURL(GOOGLE_REVIEW_URL, {
    errorCorrectionLevel: "M",
    margin: 2,
    width: 280,
    color: { dark: "#111111", light: "#ffffff" },
  });

  return (
    <main className="min-h-[80vh] bg-bg flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-[360px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-hidden">

        {/* Brand header */}
        <div className="bg-[#111] px-8 py-6 text-center">
          <div className="text-[18px] font-extrabold text-blue tracking-tight leading-none mb-1">
            KooL
          </div>
          <div className="text-[9px] text-teal font-semibold uppercase tracking-[0.15em]">
            Aircon Servicing · Singapore
          </div>
        </div>

        {/* Card body */}
        <div className="px-8 py-8 flex flex-col items-center gap-5 text-center">

          <div>
            <h1 className="text-[20px] font-bold text-black leading-tight">
              Enjoyed our service?
            </h1>
            <p className="text-[13px] text-grey mt-2 leading-relaxed">
              A quick Google review helps our small team
              <br />
              reach more homeowners like you.
            </p>
          </div>

          {/* Stars */}
          <div className="flex gap-1" aria-label="5 stars">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="text-[30px] text-amber leading-none">★</span>
            ))}
          </div>

          {/* QR code */}
          <div className="border-2 border-border rounded-xl p-3 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrDataUrl}
              alt="QR code — scan to open the Google review page"
              width={220}
              height={220}
            />
          </div>

          <p className="text-[12px] text-muted">
            Scan with your phone camera
          </p>

          {/* Primary CTA */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue text-white text-[13px] font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <GoogleG />
            Leave a Google Review
          </a>
        </div>

        {/* URL fallback */}
        <div className="border-t border-border px-8 py-4 text-center">
          <p className="text-[9px] text-muted font-mono break-all leading-relaxed">
            {GOOGLE_REVIEW_URL}
          </p>
        </div>
      </div>
    </main>
  );
}

function GoogleG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
