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
    <section className="relative overflow-hidden border-t border-gray-200 bg-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(45,125,74,0.06),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-syntech-green">
            Press & media
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-syntech-black sm:text-4xl">
            As seen in
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-600 text-sm sm:text-base">
            Featured on TV and in fine home design magazines across South Florida.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {pressItems.map((item) => (
            <div
              key={item.src}
              className="group flex flex-col"
            >
              <div className="relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-syntech-neutral p-5 transition duration-300 hover:border-syntech-green/40 hover:shadow-md sm:min-h-[260px] sm:p-6">
                <div className="relative h-32 w-full flex-1 shrink-0 sm:h-40">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain object-center transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="mt-4 flex min-h-[52px] flex-shrink-0 items-center justify-between gap-2 border-t border-gray-200 pt-4">
                  <span className="text-sm font-semibold text-syntech-black">
                    {item.label}
                  </span>
                  <span className="shrink-0 rounded-full bg-syntech-turf-light px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-syntech-green">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">
          Trusted by builders, designers, and homeowners across Miami & Fort Lauderdale
        </p>
      </div>
    </section>
  );
}
