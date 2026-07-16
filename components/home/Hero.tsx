import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="md:max-w-[1280px] md:mx-auto md:px-10 md:py-16 md:grid md:grid-cols-2 md:gap-14 md:items-center">
        <div className="relative aspect-[2/1] md:order-2 md:rounded-xl overflow-hidden">
          <Image
            src="/images/home/hero-desktop.png"
            alt="Aircon technician Singapore"
            fill
            className="object-cover"
          />
        </div>
        <div className="px-[18px] pt-[22px] pb-[26px] md:p-0 md:order-1">
          <div className="text-[11px] text-muted font-medium tracking-[0.5px] mb-2.5">
            Fast. Affordable. Transparent.
          </div>
          <h1 className="text-2xl md:text-[40px] font-extrabold text-black leading-[1.2] mb-3 md:mb-4 tracking-[-0.4px]">
            We guarantee your aircon is colder. No shortcuts. No mess.
          </h1>
          <p className="text-[13px] md:text-[15px] text-grey leading-[1.65] mb-[18px] md:mb-[26px] max-w-[480px]">
            We service, repair, and install aircons for homes and businesses across Singapore. Every visit ends
            with a cooler unit, a clean space, and proof it worked.
          </p>
          <div className="flex flex-col md:flex-row gap-[9px]">
            <WhatsAppButton>WhatsApp us</WhatsAppButton>
            <Button href="#services" variant="outline">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
