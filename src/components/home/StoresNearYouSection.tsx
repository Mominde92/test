import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  CornerUpRight,
  HeartHandshake,
  MapPin,
} from "lucide-react";

const nearbyStores = [
  { name: "Glow Glam Shop", address: "45a Street shop 211, KSA", distance: "3.1KM" },
  { name: "Aesthetics Faah", address: "45a Street shop 211, KSA", distance: "3.2KM" },
  { name: "Expressions", address: "45a Street shop 211, KSA", distance: "3.1KM" },
  { name: "Sephora", address: "45a Street shop 211, KSA", distance: "3.1KM" },
  { name: "Beauty Bar", address: "45a Street shop 211, KSA", distance: "3.1KM" },
  { name: "Luxe Shop", address: "45a Street shop 211, KSA", distance: "3.1KM" },
];

const mapPins = [
  "left-[6%] top-[72%]",
  "left-[22%] top-[16%]",
  "left-[63%] top-[18%]",
  "left-[81%] top-[26%]",
  "left-[69%] top-[49%]",
  "left-[58%] top-[69%]",
  "left-[23%] top-[84%]",
  "left-[90%] top-[85%]",
  "left-[72%] top-[86%]",
  "left-[51%] top-[74%]",
  "left-[28%] top-[62%]",
];

export function StoresNearYouSection() {
  return (
    <section className="bg-cream-soft px-5 py-10 md:px-8 lg:py-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 rounded bg-peach" />
              <span className="font-label text-xl font-semibold text-peach">
                Nearest Stores
              </span>
            </div>
            <h2 className="w-fit border-b-4 border-[#108ee9] font-section text-[36px] font-normal leading-tight text-ink">
              Stores near You
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f5f5] text-ink hover:bg-magenta hover:text-white"
              aria-label="Previous stores"
            >
              <ArrowLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f5f5] text-ink hover:bg-magenta hover:text-white"
              aria-label="Next stores"
            >
              <ArrowRight className="h-7 w-7" />
            </button>
          </div>
        </div>

        <div className="mb-6 grid gap-6 lg:grid-cols-[1.34fr_0.74fr]">
          <div className="flex h-14 items-center gap-3 rounded-full bg-white px-5 shadow-[0_12px_28px_rgba(17,17,17,0.05)]">
            <MapPin className="h-6 w-6 fill-[#bf3f63] text-[#bf3f63]" />
            <p className="truncate text-base font-semibold text-ink">
              Beauty Glow Store Al Aziziyah street 45A 123 Shop Number
            </p>
          </div>

          <div className="flex h-14 min-w-0 items-center rounded-full bg-white px-4 shadow-[0_12px_28px_rgba(17,17,17,0.05)]">
            <label className="min-w-0 flex-1 px-4 text-sm font-medium text-[#7a756e]">
              <input
                type="text"
                defaultValue="Al Aziziyah Riyadh"
                className="w-full bg-transparent outline-none"
                aria-label="City"
              />
            </label>
            <button
              type="button"
              className="flex h-8 shrink-0 items-center gap-3 border-l border-stone-200 px-5 text-base font-medium text-[#6d6963] hover:text-magenta"
              aria-label="Select distance"
            >
              Distance
              <ChevronDown className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="ml-2 inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-ink px-6 text-base font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-magenta"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.34fr_0.74fr]">
          <div className="relative min-h-[570px] overflow-hidden rounded-[1.25rem] bg-[#eef1ef] shadow-[0_12px_32px_rgba(17,17,17,0.08)]">
            <div className="absolute inset-0 opacity-80">
              <div className="absolute left-0 top-[12%] h-8 w-full rotate-[-12deg] bg-white/70" />
              <div className="absolute left-0 top-[32%] h-8 w-full rotate-[10deg] bg-white/70" />
              <div className="absolute left-0 top-[58%] h-8 w-full rotate-[-8deg] bg-white/70" />
              <div className="absolute left-[12%] top-0 h-full w-8 rotate-[14deg] bg-white/75" />
              <div className="absolute left-[42%] top-0 h-full w-8 rotate-[-13deg] bg-white/75" />
              <div className="absolute left-[73%] top-0 h-full w-8 rotate-[11deg] bg-white/75" />
            </div>

            {mapPins.map((position, index) => (
              <span
                key={position}
                className={`absolute ${position} flex h-8 w-8 items-center justify-center rounded-full text-magenta`}
                aria-label={`Store map pin ${index + 1}`}
              >
                <MapPin className="h-8 w-8 fill-[#bf3f63] text-[#bf3f63] drop-shadow" />
              </span>
            ))}

            <div className="absolute left-[10%] top-[18%] w-[min(340px,80%)] rounded-[1.15rem] bg-white p-5 shadow-soft">
              <h3 className="text-xl font-bold text-ink">Beauty Glow Store</h3>
              <p className="mt-1 text-sm text-muted">
                Al Aziziyah street 45A 123 Shop Number
              </p>
              <div className="relative mt-3 h-36 overflow-hidden rounded-md bg-cream">
                <Image
                  src="/images/stores/glam-bar.png"
                  alt="Beauty Glow Store"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-base font-bold text-ink">
                  <HeartHandshake className="h-5 w-5" />
                  3.5KM
                </span>
                <a
                  href="#directions"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-4 py-2 text-sm font-bold text-ink hover:border-magenta hover:text-magenta"
                >
                  Get Directions
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {nearbyStores.map((store) => (
              <article
                key={store.name}
                className="rounded-[1.1rem] bg-[#f8f8f8] px-4 py-4 transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3">
                  <div className="min-w-0">
                    <h3 className="text-[18px] font-bold leading-tight text-ink">
                      {store.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                      <MapPin className="h-4 w-4" />
                      {store.address}
                    </p>
                  </div>
                  <div className="text-center text-xs text-ink">
                    <HeartHandshake className="mx-auto mb-0.5 h-5 w-5" />
                    {store.distance}
                  </div>
                  <div className="text-center text-xs text-ink">
                    <CornerUpRight className="mx-auto mb-0.5 h-5 w-5" />
                    Get There
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
