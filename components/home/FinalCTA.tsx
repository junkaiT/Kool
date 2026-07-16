import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_DISPLAY, FINAL_CTA_IMAGE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="border-b border-border bg-bg px-[18px] py-8 md:px-0 md:py-16">
      <div className="max-w-[1280px] mx-auto md:px-10 md:grid md:grid-cols-2 md:gap-14 md:items-center">
        <div className="relative rounded-xl overflow-hidden aspect-[2/1] mb-4 md:mb-0 md:order-2">
          <Image src={FINAL_CTA_IMAGE} alt="Kool Aircon technician" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-[21px] md:text-3xl font-extrabold text-black leading-[1.25] mb-2 tracking-[-0.3px]">
            Your aircon could be colder by tonight.
          </h2>
          <p className="text-[13px] md:text-[15px] text-grey leading-[1.65] mb-[18px]">
            Book in 5 minutes via WhatsApp. Same-day slots available.
          </p>
          <div className="flex gap-3 flex-wrap">
            <WhatsAppButton>Book on WhatsApp</WhatsAppButton>
          </div>
          <p className="text-xs text-muted mt-2.5 md:text-left">Or call {WHATSAPP_DISPLAY} · Mon–Sun, 8am–8pm</p>
        </div>
      </div>
    </section>
  );
}
