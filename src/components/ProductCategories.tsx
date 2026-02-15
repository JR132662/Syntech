import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Residential lawn",
    description: "Natural-looking turf for yards, pools, and landscapes. St. Augustine, Zoysia, Everglades & more.",
    cta: "Get a quote",
    href: "#contact",
    image: "/images/builders-02.png",
  },
  {
    title: "Golf & putting greens",
    description: "Professional-grade greens. Augusta, Pebble Beach, First Cut—used by PGA pros.",
    cta: "Get a quote",
    href: "#contact",
    image: "/images/fort-lauderdale.png",
  },
  {
    title: "Sports & multipurpose",
    description: "Fields for football, soccer, multipurpose. NCAA and pro-grade options.",
    cta: "Get a quote",
    href: "#contact",
    image: "/images/playground-key-biscayne.png",
  },
  {
    title: "Green walls",
    description: "Permaleaf® green walls and foliage. Weather-resistant, fade-resistant, stunning.",
    cta: "Get a quote",
    href: "#contact",
    image: "/images/bal-harbour-ivy.png",
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="relative bg-syntech-offwhite py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-syntech-turf">
            Solutions
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-syntech-black sm:text-4xl">
            Turf & green wall solutions
          </h2>
          <p className="mt-5 text-base text-gray-500 leading-relaxed">
            From backyard lawns to commercial green walls—we have the product and expertise.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-gray-50/80 transition hover:bg-gray-50 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold text-syntech-black">
                  {cat.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-500 leading-relaxed">{cat.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-syntech-turf transition group-hover:gap-2">
                  {cat.cta}
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-syntech-turf px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-syntech-green focus:outline-none focus:ring-2 focus:ring-syntech-turf focus:ring-offset-2"
          >
            Get a free quote for your project
          </Link>
        </div>
      </div>
    </section>
  );
}
