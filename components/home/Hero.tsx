import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function Hero() {
  return (
    <section className="border-b border-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-full h-[220px] object-cover md:hidden"
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=440&fit=crop&q=80"
        alt="Aircon technician Singapore"
      />
      <div className="md:max-w-[1280px] md:mx-auto md:px-10 md:py-16 md:grid md:grid-cols-2 md:gap-14 md:items-center">
        <div className="px-[18px] pt-[22px] pb-[26px] md:p-0">
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
        <div className="hidden md:block">
          <ImagePlaceholder height="360px" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}
