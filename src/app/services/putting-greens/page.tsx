import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Custom Putting Greens | South Florida – Backyard Golf Installation",
  description:
    "Custom putting green installation in South Florida. Backyard practice greens, professional-grade surfaces. Free quote. Syntech Turf.",
};

export default function PuttingGreensPage() {
  return (
    <main className="min-h-screen bg-syntech-offwhite pt-24 pb-20 dark:bg-gray-900">
      <section className="relative border-b border-gray-200 bg-syntech-neutral/40 py-16 sm:py-20 dark:border-gray-800 dark:bg-gray-800/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-syntech-green dark:text-syntech-green-light">
            Service
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-syntech-black dark:text-white sm:text-5xl">
            Custom Putting Greens
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Professional-grade backyard putting greens built to your specs. Practice at home with a surface that performs like the course—without the maintenance.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-syntech-neutral dark:bg-gray-800">
              <Image
                src="/images/playground-key-biscayne.png"
                alt="Custom putting green in South Florida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-syntech-black dark:text-white sm:text-3xl">
                Why a backyard putting green?
              </h2>
              <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3"><span className="text-syntech-green dark:text-syntech-green-light font-bold">✓</span> Practice on your schedule—no drive to the course</li>
                <li className="flex gap-3"><span className="text-syntech-green dark:text-syntech-green-light font-bold">✓</span> True roll and speed options to match your game</li>
                <li className="flex gap-3"><span className="text-syntech-green dark:text-syntech-green-light font-bold">✓</span> Custom size, shape, and contour to fit your space</li>
                <li className="flex gap-3"><span className="text-syntech-green dark:text-syntech-green-light font-bold">✓</span> Low maintenance—no watering or mowing</li>
                <li className="flex gap-3"><span className="text-syntech-green dark:text-syntech-green-light font-bold">✓</span> Adds value and appeal to your property</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-16 sm:py-20 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-syntech-black dark:text-white sm:text-3xl">
            Get a free quote for your putting green
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Tell us your space and goals. We&apos;ll respond within 24 hours with a no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-syntech-green px-8 py-3.5 text-base font-semibold text-white transition hover:bg-syntech-green/90 dark:bg-syntech-green-light dark:text-syntech-black dark:hover:bg-syntech-green-light/90"
          >
            Request free quote
          </Link>
        </div>
      </section>
    </main>
  );
}
