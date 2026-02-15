import Image from "next/image";

const pressItems = [
  {
    src: "/press/wbfs-tv.png",
    alt: "my33 WBFS-TV Miami Fort Lauderdale",
    label: "WBFS-TV 33",
    tag: "TV",
  },
  {
    src: "/press/cbs.png",
    alt: "CBS",
    label: "CBS",
    tag: "TV",
  },
  {
    src: "/press/florida-decor.png",
    alt: "Florida Decor Magazine - Fine Home Design & Remodeling",
    label: "Florida Decor",
    tag: "Magazine",
  },
  {
    src: "/press/florida-design.png",
    alt: "Florida Design Magazine - Alfresco Refresh Palm Beach",
    label: "Florida Design",
    tag: "Magazine",
  },
];

export default function PressSection() {
  return (
    <section className="relative bg-syntech-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-syntech-turf">
            Press & media
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-syntech-black sm:text-4xl">
            As seen in
          </h2>
          <p className="mt-5 text-base text-gray-500 leading-relaxed">
            Featured on TV and in fine home design magazines across South Florida.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {pressItems.map((item) => (
            <div
              key={item.src}
              className="group flex flex-col"
            >
              <div className="flex flex-col overflow-hidden rounded-2xl bg-gray-50/80 p-6 transition hover:bg-gray-50 hover:shadow-md sm:flex-col">
                <div className="relative h-24 w-full sm:h-28">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain object-left transition group-hover:opacity-90"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-4">
                  <span className="font-semibold text-syntech-black text-sm">
                    {item.label}
                  </span>
                  <span className="shrink-0 rounded-full bg-syntech-turf-light px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-syntech-turf">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          Trusted by builders, designers, and homeowners across Miami & Fort Lauderdale
        </p>
      </div>
    </section>
  );
}
