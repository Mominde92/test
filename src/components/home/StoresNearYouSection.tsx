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
    <section className="bg-cream-soft px-5 py-6 md:px-8 lg:py-8">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 rounded bg-peach" />
              <span className="font-label text-xl font-semibold text-peach">
                Nearest Stores
              </span>
            </div>
            <h2 className="w-fit border-b-4 border-[#108ee9] font-section text-[32px] font-normal leading-tight text-ink sm:text-[36px]">
              Stores near You
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f5] text-ink hover:bg-magenta hover:text-white sm:h-14 sm:w-14"
              aria-label="Previous stores"
            >
              <ArrowLeft className="h-5 w-5 sm:h-7 sm:w-7" />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f5] text-ink hover:bg-magenta hover:text-white sm:h-14 sm:w-14"
              aria-label="Next stores"
            >
              <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7" />
            </button>
          </div>
        </div>

        <div className="mb-4 grid gap-5 lg:grid-cols-[1.34fr_0.74fr]">
          <div className="flex min-h-12 items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-[0_12px_28px_rgba(17,17,17,0.05)] sm:h-14 sm:gap-3 sm:rounded-full sm:px-5 sm:py-0">
            <MapPin className="h-5 w-5 shrink-0 fill-[#bf3f63] text-[#bf3f63] sm:h-6 sm:w-6" />
            <p className="line-clamp-2 text-sm font-semibold text-ink sm:truncate sm:text-base">
              Beauty Glow Store Al Aziziyah street 45A 123 Shop Number
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_12px_28px_rgba(17,17,17,0.05)] sm:h-14 sm:flex-row sm:items-center sm:rounded-full sm:py-0">
            <label className="min-w-0 flex-1 text-sm font-medium text-[#7a756e] sm:px-4">
              <input
                type="text"
                defaultValue="Al Aziziyah Riyadh"
                className="h-9 w-full rounded-full bg-[#fffaf1] px-3 outline-none sm:h-auto sm:rounded-none sm:bg-transparent sm:px-0"
                aria-label="City"
              />
            </label>
            <button
              type="button"
              className="flex h-9 shrink-0 items-center justify-between gap-3 rounded-full bg-[#fffaf1] px-3 text-sm font-medium text-[#6d6963] hover:text-magenta sm:h-8 sm:border-l sm:border-stone-200 sm:bg-transparent sm:px-5 sm:text-base"
              aria-label="Select distance"
            >
              Distance
              <ChevronDown className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-magenta sm:ml-2 sm:h-11 sm:text-base"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.34fr_0.74fr]">
          <div className="relative min-h-[430px] overflow-hidden rounded-[1.25rem] bg-[#eef1ef] shadow-[0_12px_32px_rgba(17,17,17,0.08)] sm:min-h-[570px]">
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

            <div className="absolute left-4 top-16 w-[min(310px,calc(100%-32px))] rounded-[1.15rem] bg-white p-4 shadow-soft sm:left-[10%] sm:top-[18%] sm:w-[min(340px,80%)] sm:p-5">
              <h3 className="text-lg font-bold text-ink sm:text-xl">Beauty Glow Store</h3>
              <p className="mt-1 text-xs text-muted sm:text-sm">
                Al Aziziyah street 45A 123 Shop Number
              </p>
              <div className="relative mt-3 h-28 overflow-hidden rounded-md bg-cream sm:h-36">
                <Image
                  src="/images/stores/glam-bar.png"
                  alt="Beauty Glow Store"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-2 sm:mt-4 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-ink sm:gap-2 sm:text-base">
                  <HeartHandshake className="h-5 w-5" />
                  3.5KM
                </span>
                <a
                  href="#directions"
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1.5 text-xs font-bold text-ink hover:border-magenta hover:text-magenta sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
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
                <div className="grid grid-cols-[1fr_auto] items-center gap-3 sm:grid-cols-[1fr_auto_auto]">
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
                  <div className="hidden text-center text-xs text-ink sm:block">
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
