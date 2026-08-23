import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Kool Aircon (operated by TGQCapital Pte. Ltd.) collects, uses, and protects your personal data across our website, booking flow, and WhatsApp/Telegram communications.",
  path: "/privacy",
});

const sectionHeading = "text-lg font-bold text-black mb-2.5 tracking-[-0.2px]";
const paragraph = "text-sm text-grey leading-[1.7] mb-4";
const list = "text-sm text-grey leading-[1.7] mb-4 list-disc pl-5 space-y-1.5";

export default function PrivacyPage() {
  return (
    <main>
      <section className="border-b border-border px-[18px] pt-8 pb-6">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <div className="text-[11px] font-bold text-teal uppercase tracking-[1.5px] mb-2.5">Legal</div>
          <h1 className="text-[26px] font-extrabold text-black mb-2 tracking-[-0.4px]">Privacy Policy</h1>
          <p className="text-sm text-grey leading-[1.65]">Last updated: 23 August 2026</p>
        </div>
      </section>

      <section className="px-[18px] py-8">
        <div className="max-w-[1280px] mx-auto md:px-10 md:max-w-[760px]">
          <h2 className={sectionHeading}>1. Who this policy covers</h2>
          <p className={paragraph}>
            This Privacy Policy explains how Kool Aircon (operated by TGQCapital Pte. Ltd., a company registered in
            Singapore) collects, uses, and protects your personal data. It applies to our website at kool.com.sg, our
            online booking service, and our WhatsApp and Telegram customer communications.
          </p>
          <p className={paragraph}>
            By using our website, booking a service, or messaging us on WhatsApp or Telegram, you agree to the
            practices described in this policy.
          </p>

          <h2 className={sectionHeading}>2. What personal data we collect</h2>
          <ul className={list}>
            <li>Your name, phone number, and address or postal code, when you submit our online booking form or message us on WhatsApp or Telegram.</li>
            <li>Details of the service you&apos;ve booked or enquired about — service type, number of units, and appointment dates.</li>
            <li>The content of messages you send us over WhatsApp or Telegram.</li>
            <li>Standard website analytics data collected automatically when you browse our site (see Cookies and Tracking below).</li>
          </ul>

          <h2 className={sectionHeading}>3. How we collect it</h2>
          <p className={paragraph}>We collect personal data in two ways:</p>
          <ul className={list}>
            <li>Directly from you — through our online booking form, WhatsApp messages, Telegram messages, or phone calls.</li>
            <li>
              Automatically — through Google Analytics (GA4) and the Meta Pixel, both of which run on our website to
              help us understand site usage and measure the performance of our ads.
            </li>
          </ul>

          <h2 className={sectionHeading}>4. How we use your data</h2>
          <p className={paragraph}>We use your personal data to:</p>
          <ul className={list}>
            <li>Schedule, confirm, and carry out your aircon servicing or installation appointment.</li>
            <li>Communicate with you about your booking, including automated confirmations and service reminders sent over WhatsApp or Telegram.</li>
            <li>Issue invoices, which we process through Xero.</li>
            <li>Understand how our website is used and measure the performance of our advertising, using Google Analytics and Meta Pixel.</li>
          </ul>

          <h2 className={sectionHeading}>5. Who we share your data with</h2>
          <p className={paragraph}>
            We do not sell your personal data to anyone. We share it only with the following parties, and only as
            needed to run our business:
          </p>
          <ul className={list}>
            <li><strong className="text-black">Meta / WhatsApp Business Platform</strong> — to send and receive messages with you.</li>
            <li><strong className="text-black">Google (Calendar, Sheets)</strong> — for internal scheduling and operations. These tools are used by our team only and are not customer-facing.</li>
            <li><strong className="text-black">Xero</strong> — for invoicing.</li>
            <li>
              <strong className="text-black">Google Analytics and Meta Ads</strong> — for aggregated website analytics
              and ad performance measurement. This data is used in aggregate and is not sold or shared beyond these
              platforms.
            </li>
          </ul>

          <h2 className={sectionHeading}>6. Cookies and tracking</h2>
          <p className={paragraph}>Our website uses:</p>
          <ul className={list}>
            <li>Google Analytics (GA4) cookies, to understand how visitors use our site.</li>
            <li>The Meta Pixel, to measure the performance of our advertising.</li>
          </ul>
          <p className={paragraph}>
            You can control or block cookies through your browser settings. Blocking cookies may affect how parts of
            our website work, but will not prevent you from booking a service by WhatsApp or phone.
          </p>

          <h2 className={sectionHeading}>7. How long we keep your data</h2>
          <p className={paragraph}>
            We retain booking and contact records for 3 years from your last interaction with us, to support service
            history, warranty claims, and standard business recordkeeping. After this period, we securely delete or
            anonymise your data, unless we&apos;re required to keep it for longer by law.
          </p>

          <h2 className={sectionHeading}>8. Your rights</h2>
          <p className={paragraph}>Under Singapore&apos;s Personal Data Protection Act (PDPA), you have the right to:</p>
          <ul className={list}>
            <li>Access the personal data we hold about you.</li>
            <li>Request that we correct inaccurate data.</li>
            <li>
              Withdraw your consent to our use of your data, or request that we delete it — subject to our legal and
              contractual obligations, such as active warranty or service records we&apos;re required to keep.
            </li>
          </ul>
          <p className={paragraph}>To exercise any of these rights, contact us using the details below.</p>

          <h2 className={sectionHeading}>9. Contact us</h2>
          <p className={paragraph}>
            If you have any questions about this Privacy Policy or how we handle your personal data, contact us at{" "}
            <a href="mailto:j.tan@tgqcapital.com" className="text-blue font-semibold">
              j.tan@tgqcapital.com
            </a>
            .
          </p>

          <h2 className={sectionHeading}>10. Changes to this policy</h2>
          <p className={paragraph}>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal
            reasons. The date at the top of this page shows when it was last updated.
          </p>
          <p className={paragraph}>
            Our services are directed at adults arranging aircon servicing for their homes or businesses. We do not
            knowingly collect personal data from children.
          </p>
        </div>
      </section>
    </main>
  );
}
