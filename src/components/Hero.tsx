"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroSlides = [
  "/images/hero1.png",
  "/images/hero2.png",
];

const SLIDE_DURATION_MS = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20 sm:px-6">
      <div className="absolute inset-0">
        {heroSlides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 1 : 0,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw"
              quality={92}
            />
          </div>
        ))}
      </div>
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 z-[2] bg-black/40" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <div className="h-1 w-16 mx-auto rounded-full bg-syntech-turf sm:w-20" aria-hidden />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-syntech-turf-light sm:text-sm">
          Premium artificial turf & green walls
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]">
          Beautiful turf.
          <br />
          <span className="text-syntech-turf-light">Zero maintenance.</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-white/90 sm:mt-6 sm:text-xl [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">
          South Florida&apos;s choice for residential lawns, putting greens, sports fields, and commercial spaces. Expert installation, lasting quality.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Link
            href="#contact"
            className="group inline-flex w-full items-center justify-center rounded-full bg-syntech-green px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-syntech-green/30 transition hover:bg-syntech-turf hover:shadow-xl hover:shadow-syntech-turf/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            Get a free quote
          </Link>
          <Link
            href="tel:9544785131"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            (954) 478-5131
          </Link>
        </div>
        <p className="mt-4 text-xs font-medium text-white/80 sm:mt-6 sm:text-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
          Serving Pembroke Pines, Broward & South Florida
        </p>
      </div>

      {/* Slide indicators */}
      <div className="relative z-10 mt-8 flex justify-center gap-2" aria-hidden>
        {heroSlides.map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full transition-all duration-300 sm:h-2.5 sm:w-2.5"
            style={{
              backgroundColor: i === current ? "var(--syntech-turf-light)" : "rgba(255,255,255,0.5)",
              transform: i === current ? "scale(1.25)" : "scale(1)",
            }}
            aria-hidden
          />
        ))}
      </div>
    </section>
  );
}
