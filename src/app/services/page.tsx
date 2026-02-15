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
    <main className="min-h-screen bg-syntech-offwhite pt-24 pb-20 dark:bg-gray-900">
      <section className="border-b border-gray-200/80 bg-syntech-neutral/30 py-14 sm:py-16 dark:border-gray-800 dark:bg-gray-800/30">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-syntech-turf dark:text-syntech-green-light">
            Services
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-syntech-black dark:text-white sm:text-4xl md:text-5xl">
            What we do
          </h1>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            From residential lawns to commercial green walls, we deliver turnkey installations across South Florida.
          </p>
        </div>
      </section>

      {/* What we offer – wider cards, sleek layout */}
      <section className="border-b border-gray-200/80 py-16 sm:py-20 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-syntech-turf dark:text-syntech-green-light">
              What we offer
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-syntech-black dark:text-white sm:text-3xl">
              Three ways we transform outdoor space
            </h2>
          </div>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group relative overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-syntech-turf/30 hover:shadow-[0_12px_40px_-12px_rgba(45,125,74,0.15)] dark:border-gray-700/90 dark:bg-gray-800 dark:hover:border-syntech-green-light/30 dark:hover:shadow-[0_12px_40px_-12px_rgba(124,179,66,0.12)]"
              >
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="relative aspect-[5/3] overflow-hidden bg-syntech-neutral/50 dark:bg-gray-700">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h2 className="font-display text-xl font-semibold tracking-tight text-syntech-black dark:text-white sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                      {service.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-syntech-turf dark:text-syntech-green-light transition-all group-hover:gap-2.5">
                      Learn more
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="relative overflow-hidden border-b border-gray-200/80 bg-gradient-to-b from-syntech-neutral/50 to-white py-20 sm:py-24 dark:border-gray-800 dark:from-gray-800/50 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(45,125,74,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(124,179,66,0.08),transparent_60%)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto h-1 w-16 rounded-full bg-syntech-turf dark:bg-syntech-green-light" aria-hidden />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-syntech-green dark:text-syntech-green-light">
              Our process
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-syntech-black dark:text-white sm:text-4xl">
              How we work
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              From first contact to final walkthrough—clear steps, no surprises.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              { step: 1, title: "Get a quote", body: "Tell us your project. We’ll respond within 24 hours with a no-obligation quote." },
              { step: 2, title: "Site visit & design", body: "We visit your property, measure, and finalize the scope and timeline." },
              { step: 3, title: "Prep & install", body: "Our crew preps the area and installs your turf or green wall—many jobs done in days." },
              { step: 4, title: "Walkthrough & enjoy", body: "We do a final walkthrough with you. Then you enjoy a low-maintenance, lasting result." },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative flex flex-col rounded-2xl border border-gray-200/80 border-b-2 border-b-syntech-turf bg-white p-6 shadow-sm transition-all duration-300 hover:border-syntech-turf/40 hover:shadow-lg dark:border-gray-700 dark:border-b-syntech-green-light dark:bg-gray-800 dark:hover:border-syntech-green-light/40 sm:p-8"
              >
                <div className="relative">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-syntech-turf text-xl font-bold text-white shadow-md shadow-syntech-turf/20 dark:bg-syntech-green-light dark:shadow-syntech-green-light/20">
                    {item.step}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-syntech-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {item.body}
                  </p>
                </div>
              </div>
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
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-syntech-turf shadow-lg transition hover:bg-syntech-neutral dark:hover:bg-gray-100"
          >
            Get your free quote
          </Link>
        </div>
      </section>
    </main>
  );
}
