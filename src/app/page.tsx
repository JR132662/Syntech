import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";

const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const YouTubeEmbed = dynamic(() => import("@/components/YouTubeEmbed"), { ssr: true });
const ClientLogosCarousel = dynamic(
  () => import("@/components/ClientLogosCarousel").then((m) => m.default),
  { ssr: false }
);

const HOMEPAGE_VIDEO_ID = "0GgnzEUfC0c";

const categories = [
  { title: "Residential lawn", href: "#contact", image: "/images/builders-02.png" },
  { title: "Golf & putting greens", href: "#contact", image: "/images/fort-lauderdale.png" },
  { title: "Sports & multipurpose", href: "#contact", image: "/images/playground-key-biscayne.png" },
  { title: "Green walls", href: "#contact", image: "/images/bal-harbour-ivy.png" },
];

const benefits = [
  { num: "01", title: "Maintenance-free", line: "No mowing, watering, or fertilizing." },
  { num: "02", title: "All-weather", line: "UV-stable, durable in Florida sun and rain." },
  { num: "03", title: "Safe & clean", line: "No chemicals. Ideal for kids and pets." },
  { num: "04", title: "Fast install", line: "Many projects completed in days." },
];

const clientLogos = [
  "/clients/ac-hotels.png", "/clients/nfl.png", "/clients/westin.png", "/clients/peak.png",
  "/clients/city-of-doral.png", "/clients/artefacto.png", "/clients/firstservice.png",
  "/clients/bbt-center.png", "/clients/3h-group.png", "/clients/casaconde.png",
];

const pressLogos = ["/press/wbfs-tv.png", "/press/cbs.png", "/press/florida-decor.png", "/press/florida-design.png"];

const testimonials = [
  { quote: "Great job. Very professional. Work was done in a few days. Looks amazing.", author: "Joe P" },
  { quote: "Absolute professionals! Quality work and knowledgeable field and a hands on owner. The work looks beautiful and it was done incredibly timely.", author: "Tellepsen" },
  { quote: "We love our new lawn and Syntech Turf staff was amazing!", author: "Jo C" },
  { quote: "Very professional and quick service. This company is very knowledgeable and easy to work with.", author: "Baker's Cay" },
  { quote: "The Syntech crew were professional, on time, and thorough. I will continue to use them for additional projects as they are excellent!", author: "Adam G" },
];

export default function Home() {
  const [featuredQuote, ...moreQuotes] = testimonials;

  return (
    <main className="pb-0">
      <Hero />

      {/* Statement strip */}
      <section className="bg-syntech-black py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Turf that performs. Spaces that last.
          </p>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            South Florida&apos;s choice for artificial turf, putting greens & green walls.
          </p>
        </div>
      </section>

      {/* Solutions – bento grid */}
      <section id="products" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-syntech-black dark:text-white sm:text-3xl">
                What we do
              </h2>
              <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
                From backyards to commercial spaces—one team, turnkey installs.
              </p>
            </div>
            <Link
              href="#contact"
              className="shrink-0 text-sm font-semibold text-syntech-turf hover:underline dark:text-syntech-green-light"
            >
              Get a quote →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 sm:aspect-[4/5]"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute bottom-0 left-0 right-0 p-4 font-display text-lg font-semibold text-white sm:p-5 sm:text-xl">
                  {cat.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us – horizontal strip */}
      <section className="border-y border-gray-200 bg-white py-14 sm:py-16 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Why choose us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {benefits.map((b) => (
              <div key={b.num} className="flex gap-4">
                <span className="font-mono text-2xl font-bold text-syntech-turf/80 dark:text-syntech-green-light/90 sm:text-3xl">
                  {b.num}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-syntech-black dark:text-white">{b.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{b.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-syntech-offwhite py-16 sm:py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold tracking-tight text-syntech-black dark:text-white sm:text-2xl">
            See us in action
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            How we transform outdoor spaces across South Florida.
          </p>
          <YouTubeEmbed videoId={HOMEPAGE_VIDEO_ID} title="Syntech Turf" className="mt-6" />
        </div>
      </section>

      {/* Trusted by brands – full width, all visible */}
      <section className="border-t border-gray-200 bg-white py-16 sm:py-20 lg:py-24 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-syntech-black dark:text-white sm:text-3xl">
              Trusted by brands
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Hospitality, sports, municipalities & design firms across South Florida.
            </p>
          </div>

          <div className="mt-12 grid gap-12 sm:mt-16 lg:gap-16">
            {/* As seen in – 4 logos in a row */}
            <div>
              <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                As seen in
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                {pressLogos.map((src) => (
                  <div
                    key={src}
                    className="relative flex min-h-0 min-w-0 items-center justify-center rounded-xl bg-gray-50 py-6 px-4 ring-1 ring-gray-100 transition hover:ring-syntech-turf/20 dark:bg-gray-700/50 dark:ring-gray-600 dark:hover:ring-syntech-green-light/30 sm:py-8 sm:px-6"
                  >
                    <div className="relative h-12 w-full max-w-[140px] sm:h-14">
                      <Image
                        src={src}
                        alt="Press"
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clients – carousel with large logos */}
            <div className="min-w-0 overflow-hidden">
              <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Clients
              </p>
              <ClientLogosCarousel logos={clientLogos} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials – hero quote + grid */}
      <section id="testimonials" className="border-t border-gray-200 bg-white py-16 sm:py-24 lg:py-28 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-syntech-black dark:text-white sm:text-3xl">
            What clients say
          </h2>
          <blockquote className="mt-8 max-w-3xl">
            <p className="font-display text-xl leading-relaxed text-syntech-black dark:text-gray-100 sm:text-2xl lg:text-3xl">
              &ldquo;{featuredQuote.quote}&rdquo;
            </p>
            <footer className="mt-6 text-sm font-semibold text-syntech-turf dark:text-syntech-green-light">
              — {featuredQuote.author}
            </footer>
          </blockquote>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {moreQuotes.map((t) => (
              <blockquote key={t.author} className="border-l-2 border-syntech-turf/30 pl-4 dark:border-syntech-green-light/40">
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-3 text-xs font-semibold text-syntech-turf dark:text-syntech-green-light">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram strip */}
      <section className="border-t border-gray-200 bg-syntech-offwhite py-12 sm:py-16 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-lg font-bold text-syntech-black dark:text-white sm:text-xl">
              Follow <span className="text-syntech-turf dark:text-syntech-green-light">@syntechturf</span>
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Latest projects & tips</p>
          </div>
          <Link
            href="https://www.instagram.com/syntechturf/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-syntech-turf px-6 py-3 text-sm font-semibold text-white transition hover:bg-syntech-green"
          >
            View on Instagram
          </Link>
        </div>
        <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
          <a
            href="https://www.instagram.com/syntechturf/"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:ring-syntech-turf/30 dark:bg-gray-700/50 dark:ring-gray-600 dark:hover:ring-syntech-green-light/30"
          >
            <iframe
              src="https://www.instagram.com/syntechturf/embed"
              title="Syntech Turf on Instagram"
              className="pointer-events-none h-[400px] w-full border-0 sm:h-[480px]"
              allowFullScreen
              loading="lazy"
            />
          </a>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-syntech-turf py-14 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-xl font-bold text-white sm:text-2xl">
            Ready for a free quote?
          </p>
          <p className="mt-2 text-sm text-white/90">
            No obligation. We respond within 24 hours.
          </p>
          <Link
            href="#contact"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-syntech-turf transition hover:bg-gray-100 dark:bg-syntech-turf-light dark:text-syntech-black dark:hover:bg-white"
          >
            Get your quote
          </Link>
        </div>
      </section>

      <Contact />
    </main>
  );
}
