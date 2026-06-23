import Image from "next/image";
import { Clock, Package, Store as StoreIcon } from "lucide-react";
import { stores } from "@/constants/stores";
import { RatingStars } from "@/components/shared/RatingStars";

export function CurrentLocationStoresSection() {
  return (
    <section className="bg-cream-soft px-5 pb-12 pt-8 md:px-8 lg:pb-14">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-7">
          <h2 className="max-w-3xl font-section text-[36px] font-normal leading-tight text-ink">
            Based on your Current Location
          </h2>
        </div>

        <div className="grid gap-x-9 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
          {stores.map((store) => (
            <article
              key={store.id}
              className="flex h-[146px] overflow-hidden rounded-md bg-[#fffaf1] shadow-[0_8px_20px_rgba(17,17,17,0.08)] transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative h-full w-[190px] shrink-0 overflow-hidden bg-cream">
                <Image
                  src={store.image ?? store.logo}
                  alt={store.name}
                  fill
                  className="object-cover"
                  sizes="190px"
                />
                <span className="absolute left-3 top-3 rounded bg-[#04b839] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm">
                  Open
                </span>
              </div>

              <div className="min-w-0 flex-1 px-4 py-4">
                <h3 className="truncate text-[18px] font-bold leading-tight text-ink">
                  {store.name}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <RatingStars rating={store.rating} reviewCount={store.reviewCount} />
                </div>

                <div className="mt-3 grid gap-2 text-xs font-medium text-[#8b867e]">
                  <div className="flex items-center gap-2">
                    <StoreIcon className="h-4 w-4 text-peach" />
                    <span>{store.storeCount ?? 1} Stores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-peach" />
                    <span>{(store.productCount ?? 0).toLocaleString()} Products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-peach" />
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
