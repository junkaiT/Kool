import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BrandsMarquee } from "@/components/home/BrandsMarquee";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aircon Servicing Singapore — Fast, Affordable, Transparent",
  description:
    "Kool Aircon: professional aircon servicing, chemical wash, KoolJet wash and installation across Singapore. Transparent pricing, same-day slots, 48-hour service guarantee. Book online or WhatsApp us.",
  path: "/",
});

// WhyKool is still hidden pre-launch — it leans on claims we can't back up
// yet (wind-flow measurement device, WhatsApp report). Testimonials is back:
// it now shows real named customer quotes recovered from the old WordPress
// site instead of the unverifiable Google-rating placeholder it used to have.
export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <BrandsMarquee />
      <Testimonials />
      <HomeFAQ />
      <FinalCTA />
    </main>
  );
}
