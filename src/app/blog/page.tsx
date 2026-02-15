import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Syntech Turf – Artificial Turf & Green Wall",
  description:
    "Tips, news, and insights on artificial turf, green walls, and outdoor living in South Florida.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-syntech-black sm:text-5xl">
          Blog
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Tips, news, and insights on artificial turf, green walls, and outdoor living.
          New posts coming soon.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-syntech-green px-8 py-3.5 text-base font-semibold text-white transition hover:bg-syntech-green/90"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </main>
  );
}
