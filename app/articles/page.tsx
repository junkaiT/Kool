import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ARTICLES } from "@/data/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aircon Tips & Guides",
  description:
    "Practical guides on aircon servicing, pricing, and maintenance for Singapore homes — how often to service, what a service involves, and what you should actually pay.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <main>
      <section className="px-[18px] py-10 text-center">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <div className="text-[11px] font-bold text-teal uppercase tracking-[1.5px] mb-2.5">Articles</div>
          <h1 className="text-[26px] font-extrabold text-black mb-2.5">Aircon tips and guides</h1>
          <p className="text-sm text-grey leading-[1.7] mb-6">
            Helpful articles about aircon maintenance, pricing, and getting the most from your aircon in Singapore.
          </p>
        </div>
      </section>

      <section className="px-[18px] pb-10 md:px-0 md:pb-16">
        <div className="max-w-[1280px] mx-auto md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="bg-white border border-border rounded-[10px] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[2/1]">
                {a.heroImage ? (
                  <Image src={a.heroImage} alt={a.title} fill className="object-cover" />
                ) : (
                  <ImagePlaceholder height="100%" className="rounded-none" />
                )}
              </div>
              <div className="p-4 flex flex-col gap-1.5">
                <div className="text-[10px] font-bold text-teal uppercase tracking-[1px]">{a.category}</div>
                <div className="text-sm font-bold text-black leading-[1.4]">{a.title}</div>
                <p className="text-xs text-grey leading-[1.55]">{a.excerpt}</p>
                <div className="text-[11px] text-blue mt-1.5">Read more →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
