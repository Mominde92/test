"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/constants/products";
import { CountdownTimer } from "@/components/shared/CountdownTimer";
import { ProductCard } from "@/components/shared/ProductCard";

export function FlashSaleSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const firstSlide = slider.firstElementChild as HTMLElement | null;
    const sliderGap = Number.parseFloat(window.getComputedStyle(slider).columnGap) || 28;
    const step = (firstSlide?.offsetWidth ?? 320) + sliderGap;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const isAtStart = slider.scrollLeft <= 4;
    const isAtEnd = slider.scrollLeft >= maxScrollLeft - 4;

    if (direction === "right" && isAtEnd) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction === "left" && isAtStart) {
      slider.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      return;
    }

    slider.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-cream-soft px-5 py-6 md:px-8 lg:py-8">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-5 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 rounded bg-peach" />
              <span className="font-label text-xl font-semibold text-peach">
                Today&apos;s
              </span>
            </div>
            <h2 className="font-section text-[32px] font-normal leading-tight text-ink sm:text-[36px]">
              Flash Sale
            </h2>
          </div>

          <CountdownTimer />

          <div className="flex items-center justify-start gap-3 lg:justify-end">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f5] text-ink hover:bg-magenta hover:text-white sm:h-14 sm:w-14"
              aria-label="Previous flash sale products"
              onClick={() => scrollSlider("left")}
            >
              <ArrowLeft className="h-5 w-5 sm:h-7 sm:w-7" />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f5] text-ink hover:bg-magenta hover:text-white sm:h-14 sm:w-14"
              aria-label="Next flash sale products"
              onClick={() => scrollSlider("right")}
            >
              <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scroll-smooth [scrollbar-width:none] sm:gap-7 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[82vw] max-w-[310px] shrink-0 snap-start sm:w-[330px] sm:max-w-none lg:w-[calc((100%_-_84px)/4)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
