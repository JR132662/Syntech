import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ – Artificial Turf & Green Walls | South Florida",
  description:
    "Frequently asked questions about artificial turf, putting greens, and green wall installation in South Florida. Syntech Turf answers.",
};

const faqs = [
  {
    q: "How much does artificial turf cost?",
    a: "Cost depends on the size of the area, site prep (e.g. removing existing grass, grading), and the product you choose. We provide free, no-obligation quotes so you get a clear number for your project.",
  },
  {
    q: "How long does installation take?",
    a: "Many residential lawns and smaller projects are completed in a few days. Larger commercial jobs or custom putting greens may take longer. We’ll give you a timeline when we quote.",
  },
  {
    q: "Is artificial turf safe for kids and pets?",
    a: "Yes. Our turf is non-toxic and doesn’t require pesticides or fertilizers. It stays clean and doesn’t turn to mud, so it’s ideal for play areas and pets.",
  },
  {
    q: "Do you service my area?",
    a: "We serve South Florida, including Miami, Fort Lauderdale, Pembroke Pines, Broward County, and surrounding areas. Contact us to confirm we cover your location.",
  },
  {
    q: "What’s included in a free quote?",
    a: "We’ll discuss your project, visit the site if needed, and provide a written quote with scope and pricing. There’s no obligation—you can use it to decide when and how to proceed.",
  },
  {
    q: "How do I maintain artificial turf?",
    a: "Turf is low maintenance: occasional rinsing, brushing to keep blades upright, and removing debris. No mowing, watering, or fertilizing. We’ll give you simple care tips after installation.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-syntech-offwhite pt-24 pb-20">
      <section className="border-b border-gray-200 bg-syntech-neutral/40 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-syntech-green">
            FAQ
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-syntech-black sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Common questions about artificial turf, putting greens, and green walls. Don’t see yours? Request a free quote and we’ll answer in person.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <dl className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                <dt className="font-display text-lg font-semibold text-syntech-black sm:text-xl">
                  {faq.q}
                </dt>
                <dd className="mt-3 text-gray-600 leading-relaxed">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-syntech-green py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready for a free quote?
          </h2>
          <p className="mt-3 text-white/90">
            No obligation. We’ll respond within 24 hours.
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
