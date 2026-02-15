import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Virtually maintenance-free",
    description: "No mowing, watering, or fertilizing. Save time and water year-round.",
    icon: "🌿",
  },
  {
    title: "Looks great in any weather",
    description: "UV-stabilized turf stays green and durable in Florida sun and rain.",
    icon: "☀️",
  },
  {
    title: "Safe & clean",
    description: "No chemicals, no buried debris. Ideal for kids, pets, and high-traffic areas.",
    icon: "✓",
  },
  {
    title: "Fast, professional install",
    description: "Experienced crew. Many projects completed in days, not weeks.",
    icon: "⚡",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative border-t border-gray-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src="/images/lawn-01.png"
              alt="Well-maintained artificial turf lawn"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-syntech-black sm:text-4xl">
              Why choose Syntech Turf
            </h2>
            <p className="mt-4 max-w-xl text-gray-600">
              Quality materials, expert installation, and a finish that lasts.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="gradient-turf rounded-2xl border border-gray-200 p-6 transition hover:border-syntech-green/40"
                >
                  <div className="text-2xl font-bold text-syntech-green">{item.icon}</div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-syntech-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-syntech-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-syntech-green/90"
              >
                Get a free quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
