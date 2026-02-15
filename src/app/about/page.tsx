import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Syntech Turf – Artificial Turf & Green Wall",
  description:
    "Meet the Syntech Turf team. Premier luxury artificial turf and green wall contractor serving builders, designers, architects, and homeowners in South Florida.",
};

const team = [
  {
    name: "Edgar Ortiz",
    role: "Founder and Director of Sales & Operations",
    email: "edgar@syntechturf.com",
    bio: "Edgar has been involved with the construction and landscape industry since 1997. He has worked alongside commercial builders, high end custom home builders and municipalities to create beautifully functional outdoor spaces. Edgar's attention to detail has been instrumental in making our clients visions into reality. When not on a jobsite, Edgar enjoys boating, cycling and spending time with his large family.",
  },
  {
    name: "Milena Diaz",
    role: "Office Manager",
    email: "milena@syntechturf.com",
    bio: "Experienced office manager with a proven track record of optimizing administrative processes, fostering a collaborative work environment, and ensuring the smooth day-to-day operations of the office. Highly organized, detail-oriented, and skilled in office software and communication tools. Committed to efficiency, productivity, and creating a positive workplace culture.",
  },
  {
    name: "Chris Ortiz",
    role: "Regional Sales Representative",
    email: "chris@syntechturf.com",
    bio: "Chris has extensive experience in customer service. He joined the company in 2018 and has worked in every facet of the business, from installation to sales. He works alongside custom home builders and homeowners looking to transform their space. Chris excels in going the extra mile for his clients and manages the project from contract to a finished job and beyond. When he's not servicing his clients, he enjoys playing basketball and riding his personal watercraft.",
  },
  {
    name: "Victor Bonne",
    role: "Project Manager",
    email: "victor@syntechturf.com",
    bio: "Victor has worked as project manager in the construction industry for over 10 years. His ability to problem solve and keep our crews running efficiently are instrumental to turning jobs in on-time and within budget. When not working with our crews, Victor enjoys time on the track with his race car and spending time on the water.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-syntech-offwhite dark:bg-gray-900">
      {/* Hero – no image, gradient */}
      <section className="relative min-h-[45vh] overflow-hidden bg-gradient-to-br from-syntech-black via-[#0f2a1a] to-syntech-green pt-28 pb-20 sm:min-h-[50vh] sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} aria-hidden />
        <div className="relative mx-auto flex min-h-[40vh] max-w-6xl flex-col justify-end px-4 sm:px-6 lg:px-8">
          <div className="h-1 w-16 rounded-full bg-syntech-turf-light" aria-hidden />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            About Syntech Turf
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
            The premier luxury artificial turf and green wall contractor serving South Florida.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="relative border-y border-syntech-neutral bg-gradient-to-b from-syntech-neutral/50 to-white py-20 sm:py-24 dark:border-gray-800 dark:from-gray-800/50 dark:to-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-syntech-turf dark:text-syntech-green-light">
                Our mission
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-syntech-black dark:text-white sm:text-4xl">
                Turnkey quality, hassle-free.
              </h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl">
                We are the premier luxury brand Artificial Turf and Green Wall contractor
                servicing Builders, Designers, Architects, and Homeowners. Our goal is to
                provide a hassle free, turnkey solution, using the highest quality products
                and workmanship available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-syntech-turf dark:text-syntech-green-light">
              The team
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-syntech-black dark:text-white sm:text-4xl">
              People behind the turf
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-10">
            {team.map((member) => (
              <article
                key={member.email}
                className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-syntech-turf/30 hover:shadow-lg hover:shadow-syntech-turf/5 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-syntech-green-light/30 dark:hover:shadow-syntech-green-light/5"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-syntech-turf/10 dark:bg-syntech-green-light/10 transition-transform duration-300 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-syntech-black dark:text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-syntech-green dark:text-syntech-green-light">
                        {member.role}
                      </p>
                    </div>
                    <a
                      href={`mailto:${member.email}`}
                      className="shrink-0 rounded-full bg-syntech-neutral p-2.5 text-syntech-green transition-colors hover:bg-syntech-turf hover:text-white dark:bg-gray-700 dark:text-syntech-green-light dark:hover:bg-syntech-green-light dark:hover:text-syntech-black"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                  <p className="mt-5 text-gray-600 leading-relaxed dark:text-gray-300">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-syntech-neutral bg-syntech-green py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.15),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to transform your space?
          </h2>
          <p className="mt-3 text-white/90">
            Get a free quote and let us bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-syntech-turf shadow-lg transition hover:bg-syntech-neutral hover:shadow-xl dark:hover:bg-gray-100"
          >
            Get a free quote
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
