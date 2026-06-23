import Image from "next/image";
import { MapPin, Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="overflow-hidden border-b border-[#ece4d8] bg-[#fffaf1]">
      <div className="relative mx-auto min-h-[auto] max-w-[1600px] px-5 py-14 md:px-8 md:py-16 xl:flex xl:min-h-[720px] xl:items-center xl:px-0 xl:py-12">
        <Image
          src="/images/Group 1171284377.png"
          alt="Premium lipstick product"
          fill
          priority
          className="hidden object-cover object-center xl:block"
          sizes="1610px"
        />

        <div className="relative z-10 mx-auto max-w-[430px] xl:mx-0 xl:ml-[clamp(95px,11.7vw,188px)] xl:-translate-y-4">
          <div className="mb-3 flex h-[38px] w-full max-w-[405px] items-center rounded-md bg-[#fff0e2] px-4 text-ink">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <Search className="h-[22px] w-[22px] text-ink" strokeWidth={1.8} />
              <input
                type="search"
                className="w-full bg-transparent text-sm font-medium text-ink outline-none placeholder:text-stone-400"
                aria-label="Search beauty products"
              />
            </div>
            <div className="ml-3 inline-flex shrink-0 items-center gap-1 border-l border-[#e8d8c8] pl-3 text-xs font-semibold text-[#5d5851]">
              <MapPin className="h-3.5 w-3.5 fill-ink text-ink" />
              Al Aziz Riyadh
            </div>
          </div>

          <div className="mb-2 h-6 w-[2px] bg-peach" />

          <h1 className="font-heading text-[44px] font-normal uppercase leading-[1.08] tracking-[0.015em] text-ink sm:text-[58px] xl:text-[clamp(56px,4vw,64px)]">
            Discover Your
            <span className="block">Perfect Shade</span>
          </h1>

          <p className="mt-5 max-w-[420px] text-[18px] font-medium leading-[1.55] text-[#222] sm:text-[21px]">
            Discover and compare the prices for makeup, skincare and beauty products from
            trusted store near you.
          </p>

          <button
            type="button"
            className="mt-6 h-[70px] w-full max-w-[368px] rounded-md bg-magenta text-[21px] font-bold text-white shadow-card hover:-translate-y-0.5 hover:bg-magenta-dark hover:shadow-soft"
          >
            Compare Now
          </button>
        </div>

        <div className="relative mx-auto mt-8 flex min-h-[330px] w-full min-w-0 items-center justify-center sm:min-h-[430px] xl:hidden">
          <div className="relative h-[330px] w-full min-w-0 sm:h-[470px] xl:h-[650px]">
            <Image
              src="/images/Group 1171284377.png"
              alt="Premium lipstick product"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1280px) 100vw, 1000px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
