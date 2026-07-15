import Image from "next/image";

const BRANDS = [
  "Daikin",
  "Mitsubishi",
  "Samsung",
  "Panasonic",
  "LG",
  "Fujitsu",
  "Sharp",
  "Toshiba",
  "Sanyo",
];

function BrandSet({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex items-center gap-10 px-5" aria-hidden={ariaHidden || undefined}>
      {BRANDS.map((brand) => (
        <Image
          key={brand}
          className="h-11 w-auto object-contain opacity-55 grayscale transition-[opacity,filter] duration-200 hover:opacity-100 hover:grayscale-0"
          src={`/images/${brand}.png`}
          alt={ariaHidden ? "" : brand}
          width={140}
          height={44}
        />
      ))}
    </div>
  );
}

export function BrandsMarquee() {
  return (
    <section className="border-b border-border overflow-hidden py-[22px] md:py-8">
      <div className="text-[11px] font-semibold text-[#bbb] uppercase tracking-[1.5px] text-center mb-3.5">
        We service all major brands
      </div>
      <div className="flex w-max animate-marquee">
        <BrandSet />
        <BrandSet ariaHidden />
      </div>
    </section>
  );
}
