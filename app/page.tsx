import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BrandsMarquee } from "@/components/home/BrandsMarquee";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

// WhyKool and Testimonials are temporarily hidden pre-launch — both lean on
// claims we can't back up yet (wind-flow measurement device, WhatsApp report,
// real Google reviews). Components are untouched in components/home/; just
// re-add the imports + JSX below to bring them back once ready.
export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <BrandsMarquee />
      <HomeFAQ />
      <FinalCTA />
    </main>
  );
}
