import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { FaqAccordion } from "@/components/FaqAccordion";
import { NumberedSteps } from "@/components/NumberedStep";
import { ProofTabs } from "@/components/service/ProofTabs";
import { StatsBar } from "@/components/service/StatsBar";
import { WHATSAPP_DISPLAY, FINAL_CTA_IMAGE } from "@/lib/site";
import type { ServicePageData } from "@/data/services/types";

const CHIPS = ["Fast Booking", "Experienced Technicians", "Service Guarantee", "No Hard Selling"];

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const { pricing } = data;

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-bg border-b border-border py-2.5 text-[11px] text-muted">
        <div className="max-w-[1280px] mx-auto px-[18px] md:px-10 flex gap-1.5 items-center">
          <span>Home</span>
          <span>›</span>
          <span>Services</span>
          <span>›</span>
          <span className="text-dark font-semibold">{data.breadcrumbLabel}</span>
        </div>
      </div>

      {/* Hero + pricing */}
      <section className="border-b border-border">
        <div className="max-w-[1280px] mx-auto px-[18px] pt-[18px] md:px-10 md:py-12 md:grid md:grid-cols-[1fr_360px_1fr] md:gap-10 md:items-start">
          <div>
            <div className="text-[11px] text-muted font-medium tracking-[0.5px] mb-2">
              Aircon servicing · Singapore
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-black leading-[1.2] mb-3 md:mb-3.5 tracking-[-0.4px]">
              {data.title}
            </h1>
            <div className="mb-3.5 rounded-lg overflow-hidden md:hidden">
              {data.heroImage ? (
                <div className="relative aspect-[2/1]">
                  <Image src={data.heroImage} alt={data.title} fill className="object-cover" />
                </div>
              ) : (
                <ImagePlaceholder height="auto" className="aspect-[2/1]" />
              )}
            </div>
            <p className="text-[13px] md:text-sm text-grey leading-[1.65] mb-3.5">
              {data.heroBody}
              {data.bestFor && (
                <>
                  <br />
                  <br />
                  <em>{data.bestFor}</em>
                </>
              )}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="text-[10px] text-grey bg-bg border border-border rounded-full px-2.5 py-[3px]"
                >
                  ✓ {chip}
                </span>
              ))}
            </div>
            <WhatsAppButton>Book on WhatsApp Now</WhatsAppButton>
          </div>

          {/* Pricing panel */}
          <div className="bg-bg border border-border rounded-[10px] overflow-hidden my-4 md:my-0 md:sticky md:top-20">
            <div className="bg-blue px-4 py-3.5">
              <div className="text-[9px] font-semibold text-white/70 uppercase tracking-[1.5px] mb-1">
                {pricing.label}
              </div>
              {pricing.isCustomQuote ? (
                <div className="text-xl font-extrabold text-white">{pricing.displayPrice}</div>
              ) : (
                <div className="text-2xl font-extrabold text-white leading-none">
                  from <strong className="text-[30px]">{pricing.displayPrice}</strong>{" "}
                  <span className="text-xs font-normal">{pricing.unit}</span>
                </div>
              )}
            </div>
            <div className="px-4 py-2">
              {pricing.rows?.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-[7px] border-b border-border last:border-b-0 text-xs text-grey"
                >
                  <span>{row.label}</span>
                  <span className="text-[13px] font-bold text-black">{row.price}</span>
                </div>
              ))}
              {pricing.note && <div className="text-[11px] text-muted italic py-2">{pricing.note}</div>}
            </div>
            <WhatsAppButton className="w-full justify-center rounded-none py-3.5">
              Book on WhatsApp Now
            </WhatsAppButton>
            <div className="text-[11px] text-muted text-center py-2.5">Or call {WHATSAPP_DISPLAY}</div>
          </div>

          <div className="hidden md:block rounded-xl overflow-hidden">
            {data.heroImage ? (
              <div className="relative aspect-[2/1]">
                <Image src={data.heroImage} alt={data.title} fill className="object-cover" />
              </div>
            ) : (
              <ImagePlaceholder height="auto" className="aspect-[2/1]" />
            )}
          </div>
        </div>
      </section>

      <ProofTabs />

      {/* When it matters */}
      <section className="border-b border-border py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-[18px] md:px-10">
          <h2 className="text-lg font-extrabold text-black mb-3 tracking-[-0.2px]">{data.whenHeading}</h2>
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-3.5">
            {data.whenCards.map((card) => (
              <div
                key={card.h}
                className="bg-bg border border-border rounded-[10px] p-3.5 flex md:flex-col gap-3 items-start md:flex-1"
              >
                <div className="text-2xl shrink-0 md:mb-2">{card.icon}</div>
                <div>
                  <div className="text-[13px] font-bold text-black mb-1">{card.h}</div>
                  <p className="text-xs text-grey leading-[1.55]">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-b border-border px-[18px] py-6 md:px-0 md:py-12">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <h2 className="text-lg font-extrabold text-black mb-3.5 tracking-[-0.2px]">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3.5">
            {data.included.map((step, i) => (
              <div key={step.h} className="bg-white border border-border rounded-[10px] overflow-hidden">
                <div className="relative aspect-[2/1]">
                  {step.image ? (
                    <Image src={step.image} alt={step.h} fill className="object-cover" />
                  ) : (
                    <ImagePlaceholder height="100%" className="rounded-none" />
                  )}
                </div>
                <div className="p-3.5 flex gap-3 items-start">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-teal text-white font-bold text-xs flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-black mb-1">{step.h}</div>
                    <p className="text-xs text-grey leading-[1.55]">
                      {step.body ?? <span className="italic text-muted">Copy coming soon.</span>}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3.5 px-3.5 py-2.5 bg-teal-bg border-l-[3px] border-teal rounded">
            <div className="text-[11px] font-bold text-black mb-1">Also on every Kool service</div>
            <div className="text-[11px] text-grey">
              ΔT measurement · WhatsApp report · Bio-enzyme chemicals · 48-hr guarantee
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-border py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-[18px] md:px-10">
          <h2 className="text-lg font-extrabold text-black mb-3 tracking-[-0.2px]">How it works</h2>
          <NumberedSteps steps={data.howItWorks} />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-bg px-[18px] py-6 md:px-0 md:py-12">
        <div className="max-w-[1280px] mx-auto md:px-10 md:grid md:grid-cols-[1fr_2fr] md:gap-12">
          <div>
            <h2 className="text-xl md:text-[22px] font-extrabold text-black mb-1.5 tracking-[-0.2px]">
              {data.faqHeading}
            </h2>
            <p className="text-[13px] md:text-sm text-grey leading-[1.6] md:leading-[1.7] mb-4 md:mb-5">
              Have a question? We reply on WhatsApp within the hour.
            </p>
            <WhatsAppButton variant="outline" showIcon={false} className="text-[13px] px-[18px] py-2.5">
              WhatsApp a question
            </WhatsAppButton>
          </div>
          <div>
            <FaqAccordion items={data.faq} defaultOpen={[0]} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-b border-border px-[18px] py-6 md:px-0 md:py-10">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <h2 className="text-lg font-extrabold text-black tracking-[-0.2px]">You might also need</h2>
            <Link href="/#services" className="text-[13px] text-blue">
              See all services →
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-3.5">
            {data.related.map((r) => (
              <Link
                key={r.name}
                href={r.href}
                className="bg-bg border border-border rounded-[9px] px-[15px] py-[13px] flex flex-col gap-[3px] md:flex-1"
              >
                <div className="text-[13px] font-bold text-black">{r.name}</div>
                <div className="text-[11px] text-muted">{r.desc}</div>
                <div className="text-[11px] text-blue mt-1">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-bg px-[18px] py-6 md:px-0 md:py-12">
        <div className="max-w-[1280px] mx-auto md:hidden relative rounded-xl overflow-hidden aspect-[2/1] mb-4">
          <Image src={FINAL_CTA_IMAGE} alt="Kool Aircon technician" fill className="object-cover" />
        </div>
        <div className="max-w-[1280px] mx-auto md:px-10 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div>
            <h2 className="text-xl font-extrabold text-black mb-2 tracking-[-0.3px] md:text-[26px]">
              {data.ctaHeading}
            </h2>
            <p className="text-[13px] md:text-sm text-grey leading-[1.65] mb-4">{data.ctaBody}</p>
            <WhatsAppButton>Book on WhatsApp Now</WhatsAppButton>
            <p className="text-xs text-muted mt-2.5">Or call {WHATSAPP_DISPLAY}</p>
          </div>
          <div>
            <div className="hidden md:block relative rounded-xl overflow-hidden aspect-[2/1] mb-3">
              <Image src={FINAL_CTA_IMAGE} alt="Kool Aircon technician" fill className="object-cover" />
            </div>
            <StatsBar className="mt-5 md:mt-0" />
          </div>
        </div>
      </section>
    </main>
  );
}
