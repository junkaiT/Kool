import Image from "next/image";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_DISPLAY, FINAL_CTA_IMAGE } from "@/lib/site";
import { ARTICLES } from "@/data/articles";
import type { ArticleData } from "@/data/articles/types";

export function ArticlePageTemplate({ data }: { data: ArticleData }) {
  const related = ARTICLES.filter((a) => a.slug !== data.slug);

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-bg border-b border-border py-2.5 text-[11px] text-muted">
        <div className="max-w-[1280px] mx-auto px-[18px] md:px-10 flex gap-1.5 items-center">
          <Link href="/articles">Articles</Link>
          <span>›</span>
          <span className="text-dark font-semibold">{data.title}</span>
        </div>
      </div>

      {/* Article body */}
      <section className="border-b border-border px-[18px] pt-[18px] pb-6 md:px-0 md:py-12">
        <div className="max-w-[1280px] mx-auto md:px-10 md:max-w-[760px]">
          <div className="text-[11px] font-bold text-teal uppercase tracking-[1.5px] mb-2.5">{data.category}</div>
          <h1 className="text-2xl md:text-[32px] font-extrabold text-black leading-[1.25] mb-3 tracking-[-0.4px]">
            {data.title}
          </h1>
          <div className="text-xs text-muted mb-4">
            {data.publishedDate} · {data.readTime}
          </div>

          <div className="rounded-xl overflow-hidden mb-5">
            {data.heroImage ? (
              <div className="relative aspect-[2/1]">
                <Image src={data.heroImage} alt={data.title} fill className="object-cover" />
              </div>
            ) : (
              <ImagePlaceholder height="auto" className="aspect-[2/1]" />
            )}
          </div>

          <p className="text-sm md:text-base text-grey leading-[1.75] mb-6 whitespace-pre-line">{data.intro}</p>

          {data.sections.map((s, i) => (
            <div key={s.h}>
              <div className="mb-6">
                <h2 className="text-lg md:text-xl font-extrabold text-black mb-2.5 tracking-[-0.2px]">{s.h}</h2>
                <p className="text-sm md:text-base text-grey leading-[1.75] whitespace-pre-line">{s.body}</p>
              </div>
              {i === 0 && (
                <div className="rounded-xl overflow-hidden mb-6">
                  {data.midImage ? (
                    <div className="relative aspect-[2/1]">
                      <Image src={data.midImage} alt={data.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <ImagePlaceholder height="auto" className="aspect-[2/1]" />
                  )}
                </div>
              )}
            </div>
          ))}

          {data.citation && (
            <div className="mt-2 px-3.5 py-3 bg-bg border-l-[3px] border-teal rounded text-[13px] text-grey">
              Further reading:{" "}
              <a href={data.citation.url} target="_blank" rel="noopener" className="text-blue font-semibold">
                {data.citation.label} →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg px-[18px] py-6 md:px-0 md:py-12">
        <div className="max-w-[1280px] mx-auto md:px-10 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div>
            <h2 className="text-xl font-extrabold text-black mb-2 tracking-[-0.3px] md:text-[26px]">
              {data.ctaHeading}
            </h2>
            <p className="text-[13px] md:text-sm text-grey leading-[1.65] mb-4">{data.ctaBody}</p>
            <WhatsAppButton>Book on WhatsApp Now</WhatsAppButton>
            <p className="text-xs text-muted mt-2.5">Or call {WHATSAPP_DISPLAY}</p>
          </div>
          <div className="hidden md:block relative rounded-xl overflow-hidden aspect-[2/1]">
            <Image src={FINAL_CTA_IMAGE} alt="Kool Aircon technician" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="px-[18px] py-6 md:px-0 md:py-10">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <h2 className="text-lg font-extrabold text-black mb-4 tracking-[-0.2px]">More articles</h2>
          <div className="flex flex-col md:flex-row gap-2 md:gap-3.5">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="bg-bg border border-border rounded-[9px] px-[15px] py-[13px] flex flex-col gap-[3px] md:flex-1"
              >
                <div className="text-[13px] font-bold text-black">{a.title}</div>
                <div className="text-[11px] text-muted">{a.excerpt}</div>
                <div className="text-[11px] text-blue mt-1">Read more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
