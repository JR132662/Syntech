"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden px-4 pt-28 pb-24 sm:px-6 sm:pt-32 sm:pb-28">
      {/* Bold gradient – no images */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-syntech-black via-[#0f2a1a] to-syntech-green" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Diagonal accent stripe */}
        <div
          className="absolute -right-[40%] -top-[20%] h-[140%] w-[80%] rotate-12 bg-gradient-to-br from-syntech-turf/40 via-syntech-turf/20 to-transparent"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-syntech-black/80 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-syntech-turf-light/90 sm:text-sm">
          South Florida
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Beautiful turf.
          <br />
          <span className="text-syntech-turf-light">Zero maintenance.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Artificial turf, putting greens & green walls. Expert installation, lasting quality—residential & commercial.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-syntech-turf-light px-8 py-4 text-base font-semibold text-syntech-black shadow-lg transition hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-syntech-turf-light focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Get a free quote
          </Link>
          <Link
            href="tel:9544785131"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            (954) 478-5131
          </Link>
        </div>
        <p className="mt-8 text-sm font-medium text-white/70">
          Pembroke Pines · Broward & South Florida
        </p>
      </div>
    </section>
  );
}
