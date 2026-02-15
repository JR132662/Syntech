import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Green Wall Installation | South Florida – Living Walls & Artificial Green Walls",
  description:
    "Green wall and living wall installation in South Florida. Interior and exterior artificial green walls. Low maintenance, high impact. Free quote. Syntech Turf.",
};

export default function GreenWallsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <section className="relative border-b border-gray-200 bg-syntech-neutral/40 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-syntech-green">
            Service
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-syntech-black sm:text-5xl">
            Green Walls
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Living walls and artificial green walls for interiors and exteriors. Transform lobbies, patios, and facades with lush, low-maintenance greenery.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-syntech-neutral">
              <Image
                src="/images/bal-harbour-ivy.png"
                alt="Green wall installation in South Florida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-syntech-black sm:text-3xl">
                Why green walls?
              </h2>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li className="flex gap-3"><span className="text-syntech-green font-bold">✓</span> Instant impact—dramatic look for commercial and residential</li>
                <li className="flex gap-3"><span className="text-syntech-green font-bold">✓</span> Low maintenance compared to living plants</li>
                <li className="flex gap-3"><span className="text-syntech-green font-bold">✓</span> Works indoors and outdoors, any climate</li>
                <li className="flex gap-3"><span className="text-syntech-green font-bold">✓</span> Custom sizes and designs to fit your space</li>
                <li className="flex gap-3"><span className="text-syntech-green font-bold">✓</span> Ideal for offices, hotels, retail, and homes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-syntech-black sm:text-3xl">
            Get a free quote for your green wall
          </h2>
          <p className="mt-4 text-gray-600">
            Tell us your project. We&apos;ll respond within 24 hours with a no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-syntech-green px-8 py-3.5 text-base font-semibold text-white transition hover:bg-syntech-green/90"
          >
            Request free quote
          </Link>
        </div>
      </section>
    </main>
  );
}
