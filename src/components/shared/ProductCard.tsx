import Image from "next/image";
import { Eye, Heart, Store } from "lucide-react";
import type { Product } from "@/types";
import { RatingStars } from "./RatingStars";

type ProductCardProps = {
  product: Product;
  showCompareCta?: boolean;
};

export function ProductCard({ product, showCompareCta = false }: ProductCardProps) {
  const discount = product.discountPercent ?? 40;
  const storeCount = product.storeCount ?? 10;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-[#fffaf1] shadow-[0_8px_22px_rgba(17,17,17,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[1.16/1] overflow-hidden bg-cream">
        <span className="absolute left-3 top-3 z-10 rounded bg-[#ef4444] px-3 py-1.5 text-xs font-medium text-white shadow-sm sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-sm">
          -{discount}%
        </span>

        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 sm:right-4 sm:top-4">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink shadow-sm hover:bg-magenta hover:text-white sm:h-10 sm:w-10"
            aria-label={`Add ${product.name} to favorites`}
          >
            <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink shadow-sm hover:bg-magenta hover:text-white sm:h-10 sm:w-10"
            aria-label={`View ${product.name}`}
          >
            <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-200 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-16">
          <RatingStars
            rating={product.rating}
            reviewCount={product.reviewCount}
            size="md"
            tone="light"
          />
        </div>

        {showCompareCta ? (
          <button
            type="button"
            className="absolute inset-x-0 bottom-0 z-10 h-10 bg-magenta text-sm font-bold text-white hover:bg-magenta-dark"
          >
            Compare →
          </button>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-4 pt-3 sm:px-4 sm:pb-5 sm:pt-4">
        <p className="text-xs font-semibold text-[#9a948c] sm:text-sm">{product.brand}</p>
        <h3 className="mt-1 min-h-6 font-body text-[15px] font-semibold leading-tight text-ink sm:min-h-7 sm:text-[18px]">
          {product.name}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-3 pt-3 sm:gap-4">
          <p className="text-[19px] font-extrabold leading-none text-ink sm:text-[23px]">
            {Number.isInteger(product.price) ? product.price : product.price.toFixed(2)}
            <span className="ml-1 text-xs font-bold uppercase">{product.currency}</span>
          </p>

          <div className="flex items-center gap-1 text-xs font-medium text-[#77736c] sm:gap-1.5 sm:text-sm">
            <Store className="h-4 w-4" />
            {storeCount} Stores
          </div>
        </div>
      </div>
    </article>
  );
}
