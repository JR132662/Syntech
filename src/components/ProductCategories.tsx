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
    <section id="products" className="relative border-t border-gray-200 bg-syntech-neutral py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-syntech-black sm:text-4xl">
            Turf & green wall solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            From backyard lawns to commercial green walls—we have the product and expertise.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-syntech-green/40 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-syntech-black">
                  {cat.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-gray-600">{cat.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-syntech-green transition group-hover:translate-x-1">
                  {cat.cta}
                  <span className="ml-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-syntech-green px-8 py-3.5 text-base font-semibold text-white transition hover:bg-syntech-green/90"
          >
            Get a free quote for your project
          </Link>
        </div>
      </div>
    </section>
  );
}
