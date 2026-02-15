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
      {/* Overlay: subtle vignette + light gradient for readability */}
      <div
        className="absolute inset-0 z-[2]"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.2) 100%)",
        }}
      />
      <div className="absolute inset-0 z-[2] bg-white/20" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="relative rounded-2xl border border-white/60 bg-white/95 px-6 py-10 shadow-2xl shadow-syntech-black/10 backdrop-blur-md sm:px-12 sm:py-12">
          <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 -translate-y-0 rounded-b-full bg-syntech-turf" aria-hidden />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-syntech-green">
            Premium artificial turf & green walls
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-syntech-black sm:text-5xl md:text-6xl lg:text-7xl">
            Beautiful turf.
            <br />
            <span className="text-syntech-green">Zero maintenance.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-gray-700 sm:text-xl">
            South Florida&apos;s choice for residential lawns, putting greens, sports fields, and commercial spaces. Expert installation, lasting quality.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex w-full items-center justify-center rounded-full bg-syntech-green px-8 py-4 text-base font-semibold text-white shadow-lg shadow-syntech-green/25 transition hover:bg-syntech-turf hover:shadow-xl hover:shadow-syntech-green/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-syntech-green focus:ring-offset-2 sm:w-auto"
            >
              Get a free quote
            </Link>
            <Link
              href="tel:9544785131"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-syntech-green bg-white px-8 py-4 text-base font-semibold text-syntech-green transition hover:bg-syntech-turf-light hover:border-syntech-turf focus:outline-none focus:ring-2 focus:ring-syntech-green focus:ring-offset-2 sm:w-auto"
            >
              (954) 478-5131
            </Link>
          </div>
          <p className="mt-6 text-sm font-medium text-gray-600">
            Serving Pembroke Pines, Broward & South Florida
          </p>
        </div>

        {/* Slide indicators */}
        <div className="mt-8 flex justify-center gap-2" aria-hidden>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              className="h-2 w-2 rounded-full transition-all duration-300 sm:h-2.5 sm:w-2.5"
              style={{
                backgroundColor: i === current ? "var(--syntech-turf)" : "rgba(255,255,255,0.6)",
                transform: i === current ? "scale(1.25)" : "scale(1)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
