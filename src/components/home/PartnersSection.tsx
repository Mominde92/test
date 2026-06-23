import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="bg-[#fffaf1] px-0 py-0">
      <div className="relative mx-auto h-[88px] w-full max-w-[1600px] overflow-hidden bg-[#fffaf1] sm:h-[120px] lg:h-[188px]">
        <Image
          src="/images/partners/brand-strip.png"
          alt="Partner brands: amazon, shopify, attentive, zapier, Layers, Catalog"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
