"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/constants/products";
import { ProductCard } from "@/components/shared/ProductCard";

export function FeaturedProductsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const cardWidth = slider.querySelector("article")?.clientWidth ?? 320;
    slider.scrollBy({
      left: direction === "left" ? -(cardWidth + 28) : cardWidth + 28,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-cream-soft px-5 py-14 md:px-8 lg:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 rounded bg-peach" />
              <span className="font-label text-xl font-semibold text-peach">
                Trending
              </span>
            </div>
            <h2 className="font-section text-[36px] font-normal leading-tight text-ink">
              Featured Products
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f5f5] text-ink hover:bg-magenta hover:text-white"
              aria-label="Previous featured products"
              onClick={() => scrollSlider("left")}
            >
              <ArrowLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f5f5] text-ink hover:bg-magenta hover:text-white"
              aria-label="Next featured products"
              onClick={() => scrollSlider("right")}
            >
              <ArrowRight className="h-7 w-7" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="-mx-5 flex snap-x snap-mandatory gap-7 overflow-x-auto px-5 pb-4 scroll-smooth [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-[290px] shrink-0 snap-start sm:w-[330px] lg:w-[calc((100%_-_84px)/4)]"
            >
              <ProductCard product={product} showCompareCta={index === 1 || index === 6} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
