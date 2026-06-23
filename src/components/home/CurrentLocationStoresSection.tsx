import Image from "next/image";
import { Clock, Package, Store as StoreIcon } from "lucide-react";
import { stores } from "@/constants/stores";
import { RatingStars } from "@/components/shared/RatingStars";

export function CurrentLocationStoresSection() {
  return (
    <section className="bg-cream-soft px-5 pb-8 pt-5 md:px-8 lg:pb-9 lg:pt-6">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-5">
          <h2 className="max-w-3xl font-section text-[32px] font-normal leading-tight text-ink sm:text-[36px]">
            Based on your Current Location
          </h2>
        </div>

        <div className="grid gap-x-9 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
          {stores.map((store) => (
            <article
              key={store.id}
              className="flex min-h-[132px] overflow-hidden rounded-md bg-[#fffaf1] shadow-[0_8px_20px_rgba(17,17,17,0.08)] transition hover:-translate-y-1 hover:shadow-soft sm:h-[146px]"
            >
              <div className="relative w-[42%] max-w-[155px] shrink-0 overflow-hidden bg-cream sm:h-full sm:w-[190px] sm:max-w-none">
                <Image
                  src={store.image ?? store.logo}
                  alt={store.name}
                  fill
                  className="object-cover"
                  sizes="190px"
                />
                <span className="absolute left-2 top-2 rounded bg-[#04b839] px-2 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:text-[10px]">
                  Open
                </span>
              </div>

              <div className="min-w-0 flex-1 px-3 py-3 sm:px-4 sm:py-4">
                <h3 className="truncate text-[16px] font-bold leading-tight text-ink sm:text-[18px]">
                  {store.name}
                </h3>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 sm:mt-2">
                  <RatingStars rating={store.rating} reviewCount={store.reviewCount} />
                </div>

                <div className="mt-2 grid gap-1.5 text-[11px] font-medium text-[#8b867e] sm:mt-3 sm:gap-2 sm:text-xs">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <StoreIcon className="h-3.5 w-3.5 text-peach sm:h-4 sm:w-4" />
                    <span>{store.storeCount ?? 1} Stores</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Package className="h-3.5 w-3.5 text-peach sm:h-4 sm:w-4" />
                    <span>{(store.productCount ?? 0).toLocaleString()} Products</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="h-3.5 w-3.5 text-peach sm:h-4 sm:w-4" />
                    <span>{store.workingHours ?? "8:00 AM - 11:00 PM"}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
