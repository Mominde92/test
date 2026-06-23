import Image from "next/image";
import { categories } from "@/constants/categories";

export function CategorySection() {
  return (
    <section className="bg-cream-soft px-5 py-10 md:px-8 lg:py-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex flex-col items-start gap-3 sm:mb-9">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex h-5 w-5 rounded bg-peach" />
            <span className="font-label text-xl font-semibold text-peach">
              Categories
            </span>
          </div>
          <h2 className="font-section text-[36px] font-normal leading-tight text-ink">
            Browse By Category
          </h2>
        </div>

        <div className="-mx-5 overflow-x-auto px-5 pb-3 md:mx-0 md:px-0">
          <div className="flex min-w-max gap-5 md:min-w-0 md:justify-between md:gap-6">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.slug}`}
                className="group w-[132px] shrink-0 text-center sm:w-[150px] md:w-[156px]"
              >
                <div className="relative aspect-[1.05/1] overflow-hidden rounded-[1.35rem] bg-white shadow-card transition duration-200 group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:shadow-soft">
                  {/* Replace category placeholder paths with final screenshot-matched category assets. */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 132px, 156px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <p className="mt-4 text-sm font-semibold text-ink transition group-hover:text-magenta sm:text-base">
                  {category.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
