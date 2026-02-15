import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services – Artificial Turf, Putting Greens & Green Walls | South Florida",
  description:
    "Syntech Turf offers artificial turf installation, custom putting greens, and green walls across South Florida. Residential & commercial. Free quotes.",
};

const services = [
  {
    slug: "artificial-turf",
    title: "Artificial Turf",
    short: "Residential lawns, commercial landscapes, and high-traffic areas. Premium turf that looks and feels natural.",
    image: "/images/turf-ph-4.png",
  },
  {
    slug: "putting-greens",
    title: "Putting Greens",
    short: "Custom backyard putting greens. Professional-grade surfaces for practice and play, built to your specs.",
    image: "/images/playground-key-biscayne.png",
  },
  {
    slug: "green-walls",
    title: "Green Walls",
    short: "Living walls and artificial green walls for interiors and exteriors. Low maintenance, high impact.",
    image: "/images/bal-harbour-ivy.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <section className="border-b border-gray-200 bg-syntech-neutral/40 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-syntech-green">
            Services
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-syntech-black sm:text-5xl">
            What we do
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            From residential lawns to commercial green walls, we deliver turnkey installations across South Florida.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:gap-16 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-syntech-green/30 hover:shadow-lg"
              >
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-syntech-neutral">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h2 className="font-display text-xl font-semibold text-syntech-black sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-gray-600">{service.short}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-syntech-green group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-syntech-green py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready for a free quote?
          </h2>
          <p className="mt-3 text-white/90">
            Tell us about your project. No obligation—we&apos;ll respond within 24 hours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-syntech-green shadow-lg transition hover:bg-syntech-neutral"
          >
            Get your free quote
          </Link>
        </div>
      </section>
    </main>
  );
}
