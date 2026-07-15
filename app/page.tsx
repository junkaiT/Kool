import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyKool } from "@/components/home/WhyKool";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BrandsMarquee } from "@/components/home/BrandsMarquee";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <WhyKool />
      <ServicesSection />
      <BrandsMarquee />
      <Testimonials />
      <HomeFAQ />
      <FinalCTA />
    </main>
  );
}
