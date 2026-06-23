import Image from "next/image";
import type { Store } from "@/types";
import { RatingStars } from "./RatingStars";

type StoreCardProps = {
  store: Store;
};

export function StoreCard({ store }: StoreCardProps) {
  return (
    <article className="flex items-center gap-4 rounded-card bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-14 w-14 overflow-hidden rounded-full bg-cream">
        <Image src={store.logo} alt={`${store.name} logo`} fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-heading text-xl font-semibold">{store.name}</h3>
        <p className="text-sm text-muted">{store.deliveryLabel}</p>
        <RatingStars rating={store.rating} />
      </div>
    </article>
  );
}
