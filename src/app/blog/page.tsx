import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Syntech Turf – Artificial Turf & Green Wall",
  description:
    "Tips, news, and insights on artificial turf, green walls, and outdoor living in South Florida.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-syntech-offwhite pt-24 pb-20 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="border-b border-gray-200 pb-8 dark:border-gray-700">
          <p className="text-sm font-medium uppercase tracking-wider text-syntech-green dark:text-syntech-green-light">
            Blog
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-syntech-black dark:text-white sm:text-5xl">
            Tips & insights
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Outdoor living, turf, and green walls in South Florida.
          </p>
        </header>

        <article className="mt-12">
          <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-syntech-neutral dark:bg-gray-800">
            <Image
              src="/images/turf-ph-4.png"
              alt="Residential lawn with artificial turf"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
          <div className="mt-8">
            <h2 className="font-display text-2xl font-bold text-syntech-black dark:text-white sm:text-3xl">
              Why Artificial Turf Is a Smart Investment for Your Home
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              South Florida homeowners are swapping natural grass for artificial turf—and for good reason. Here’s why turf pays off.
            </p>
          </div>

          <div className="prose prose-gray mt-8 max-w-none prose-headings:font-display prose-headings:text-syntech-black dark:prose-headings:text-white prose-a:text-syntech-green dark:prose-a:text-syntech-green-light prose-a:no-underline hover:prose-a:underline">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A lush green lawn has always been a symbol of a well-kept home. In South Florida, though, keeping natural grass healthy means constant watering, fertilizing, mowing, and battling heat and pests. More homeowners are choosing <strong>artificial turf</strong> not just for the look, but because it’s a real investment that saves money and time while boosting curb appeal and property value.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-syntech-black dark:text-white">
              You save on water—and bills
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              Natural grass in our climate can drink thousands of gallons of water a year. Turf needs none. That means lower water bills and less strain on local resources. Over the life of your lawn, the savings add up and often offset a large part of the installation cost.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-syntech-black dark:text-white">
              Less maintenance, more free time
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              No more mowing, edging, or weeding. No fertilizers or pesticides. Turf stays green and even year-round with minimal care—an occasional rinse and a quick brush to keep the blades standing. That’s time and money you can put back into enjoying your yard instead of maintaining it.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-syntech-black dark:text-white">
              Curb appeal that lasts
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              A consistent, green lawn makes a strong first impression. Turf doesn’t brown in the heat or go patchy in the shade. It looks the same in summer and winter, which can make your property more attractive to buyers and, in many markets, support a higher resale value.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-syntech-black dark:text-white">
              Built for the long run
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              Quality artificial turf is built to handle sun, rain, and foot traffic. With proper installation and care, it can last 15–20 years or more. When you spread the cost over that lifespan, the per-year cost is often lower than the ongoing expense of maintaining natural grass.
            </p>

            <p className="mt-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you’re upgrading a residential lawn, a putting green, or a commercial property, turf is more than a cosmetic upgrade—it’s a practical investment that pays off in savings, durability, and curb appeal. Ready to see what it could do for your space? We’d be glad to walk you through options and give you a free quote.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-gray-200 dark:border-gray-700 pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-syntech-green px-8 py-3.5 text-base font-semibold text-white transition hover:bg-syntech-green/90 dark:bg-syntech-green-light dark:text-syntech-black dark:hover:bg-syntech-green-light/90"
            >
              Get a free quote
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-syntech-green dark:text-syntech-green-light font-semibold hover:underline"
            >
              View our portfolio →
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
