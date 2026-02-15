import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio | Syntech Turf – Artificial Turf & Green Wall",
  description:
    "View our artificial turf and green wall projects across South Florida. Residential, commercial, sports, and golf installations.",
};

const portfolioItems = [
  { src: "/images/architect-01.png", title: "Architectural project", location: "South Florida" },
  { src: "/images/architect-03.png", title: "Custom residence", location: "South Florida" },
  { src: "/images/builders-02.png", title: "Builder collaboration", location: "South Florida" },
  { src: "/images/builders-03.png", title: "New construction", location: "South Florida" },
  { src: "/images/designers-02.png", title: "Green wall & outdoor living", location: "South Florida" },
  { src: "/images/turf-ph-3.png", title: "Waterfront turf", location: "Coastal Florida" },
  { src: "/images/turf-ph-4.png", title: "Residential lawn", location: "South Florida" },
  { src: "/images/turf-ph-5.png", title: "Pool & patio", location: "South Florida" },
  { src: "/images/artefacto.png", title: "Artefacto exterior", location: "Commercial" },
  { src: "/images/bal-harbour-ivy.png", title: "Bal Harbour ivy wall", location: "Bal Harbour" },
  { src: "/images/landmark.png", title: "Landmark Construction", location: "South Florida" },
  { src: "/images/d-asign.png", title: "D Asign project", location: "South Florida" },
  { src: "/images/fort-lauderdale.png", title: "Fort Lauderdale residence", location: "Fort Lauderdale" },
  { src: "/images/residence-bob.png", title: "Residential installation", location: "South Florida" },
  { src: "/images/playground-key-biscayne.png", title: "Key Biscayne playground", location: "Key Biscayne" },
  { src: "/images/pathway-06.png", title: "Garden pathway", location: "South Florida" },
  { src: "/images/slider-05.png", title: "Backyard turf", location: "South Florida" },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-syntech-offwhite dark:bg-gray-900">
      {/* Hero */}
      <section className="relative min-h-[45vh] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/designers-02.png"
            alt="Syntech Turf portfolio – green wall and outdoor living"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-syntech-black/55" />
        </div>
        <div className="relative mx-auto flex min-h-[45vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-12 sm:px-6 lg:px-8">
          <div className="h-1 w-16 bg-syntech-turf" aria-hidden />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
            Turf, green walls, and outdoor living across South Florida.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-syntech-neutral bg-syntech-neutral/30 py-12 sm:py-14 dark:border-gray-800 dark:bg-gray-800/30">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-syntech-green dark:text-syntech-green-light">
            Our work
          </span>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
            Residential lawns, putting greens, sports fields, and green walls—from the coast to commercial.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {portfolioItems.map((item) => (
              <article
                key={item.src}
                className="group relative overflow-hidden rounded-2xl bg-syntech-neutral shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-syntech-turf/10 dark:bg-gray-800 dark:hover:shadow-syntech-green-light/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-syntech-black/70 via-syntech-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="font-display font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">{item.location}</p>
                  </div>
                </div>
                <div className="relative p-4 sm:p-5 transition-colors duration-300 group-hover:bg-white/90 dark:group-hover:bg-gray-700/90">
                  <h3 className="font-display font-semibold text-syntech-black dark:text-white transition-opacity duration-200 sm:group-hover:opacity-0">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-opacity duration-200 sm:group-hover:opacity-0">{item.location}</p>
                  <Link
                    href="/contact"
                    className="absolute inset-x-4 bottom-4 top-4 flex items-center justify-center rounded-xl bg-syntech-green px-4 py-3 text-sm font-semibold text-white opacity-0 shadow-md transition-all duration-200 sm:group-hover:opacity-100 sm:bottom-5 sm:inset-x-5 sm:top-5"
                  >
                    Schedule a quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-syntech-neutral bg-syntech-green py-16 sm:py-20 dark:border-gray-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.15),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready for your project?
          </h2>
          <p className="mt-3 text-white/90">
            Get a free quote and join our portfolio.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-syntech-green shadow-lg transition hover:bg-syntech-neutral hover:shadow-xl dark:hover:bg-gray-100"
          >
            Get a quote for your project
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
