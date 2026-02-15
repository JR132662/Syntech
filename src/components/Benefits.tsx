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
    <section id="benefits" className="relative bg-syntech-offwhite py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-syntech-turf">
              Why choose us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-syntech-black sm:text-4xl lg:text-[2.5rem]">
              Quality that lasts
            </h2>
            <p className="mt-5 max-w-lg text-base text-gray-500 leading-relaxed sm:text-lg">
              Quality materials, expert installation, and a finish that lasts.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl bg-gray-50/80 p-6 transition hover:bg-syntech-turf-light/30"
                >
                  <span className="text-xl font-medium text-syntech-turf">{item.icon}</span>
                  <h3 className="mt-4 font-display text-base font-semibold text-syntech-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-syntech-turf px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-syntech-green focus:outline-none focus:ring-2 focus:ring-syntech-turf focus:ring-offset-2"
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
