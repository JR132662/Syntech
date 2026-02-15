"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-28">
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

      {/* Mobile: centered, compact layout. Desktop: left-aligned, full content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center sm:text-left">
        <p className="animate-hero-in text-sm font-semibold uppercase tracking-[0.25em] text-syntech-turf-light/90 sm:text-sm [animation-delay:0ms]">
          South Florida
        </p>
        <h1 className="animate-hero-in mt-5 font-display text-5xl font-bold tracking-tight text-white sm:mt-4 sm:text-6xl md:text-7xl lg:text-8xl [animation-delay:100ms]">
          Beautiful{" "}
          <span
            className="inline-block font-display bg-gradient-to-b from-syntech-green-light to-syntech-turf bg-clip-text font-extrabold tracking-tight text-transparent"
            style={{
              textShadow: "0 0 20px rgba(124,179,66,0.5), 0 0 40px rgba(124,179,66,0.25), 0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            turf.
          </span>
          <br />
          <span className="text-syntech-turf-light">Zero maintenance.</span>
        </h1>
        {/* Mobile: single short line. Desktop: full paragraph */}
        <p className="animate-hero-in mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:mx-0 sm:mt-6 sm:hidden [animation-delay:250ms]">
          Turf, putting greens & green walls—residential & commercial.
        </p>
        <p className="animate-hero-in mt-4 hidden max-w-xl text-base leading-relaxed text-white/85 sm:mx-0 sm:mt-6 sm:block sm:text-left sm:text-lg [animation-delay:250ms]">
          Artificial turf, putting greens & green walls. Expert installation, lasting quality—residential & commercial.
        </p>

        {/* Mobile: one primary CTA + phone as text link below. Desktop: two buttons + location */}
        <div className="animate-hero-in mt-10 flex flex-col items-center gap-5 sm:mt-10 sm:items-start sm:flex-row sm:gap-5 [animation-delay:400ms]">
          <Link
            href="/contact"
            className="inline-flex w-full max-w-[320px] items-center justify-center rounded-full bg-syntech-turf-light px-10 py-5 text-lg font-semibold text-syntech-black shadow-lg transition hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-syntech-turf-light focus:ring-offset-2 focus:ring-offset-transparent sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:text-base"
          >
            Get a free quote
          </Link>
          <Link
            href="tel:9544785131"
            className="hidden items-center justify-center rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent sm:inline-flex"
          >
            (954) 478-5131
          </Link>
        </div>
        <p className="animate-hero-in mt-6 text-center text-base font-medium text-white/70 sm:mt-8 sm:text-left sm:text-sm [animation-delay:550ms]">
          <Link
            href="tel:9544785131"
            className="underline decoration-white/30 underline-offset-2 hover:text-white/90 hover:decoration-white/50 sm:no-underline sm:hover:decoration-transparent"
          >
            (954) 478-5131
          </Link>
          <span className="hidden sm:inline"> · Pembroke Pines · Broward & South Florida</span>
        </p>
      </div>
    </section>
  );
}
