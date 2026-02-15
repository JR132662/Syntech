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
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6">
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
              className="object-cover object-center contrast-[1.04]"
              priority={i === 0}
              sizes="(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw"
              quality={92}
            />
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 z-[2]"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.18) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="rounded-2xl bg-white/85 px-6 py-8 shadow-xl backdrop-blur-sm sm:px-10 sm:py-10">
          <h1 className="font-display text-4xl font-bold tracking-tight text-syntech-black sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_1px_2px_rgba(255,255,255,0.9)]">
            Beautiful turf.
            <br />
            <span className="text-syntech-green">Zero maintenance.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-800 sm:text-xl [text-shadow:0_1px_1px_rgba(255,255,255,0.9)]">
            Premium artificial turf and green walls for South Florida. Residential lawns, putting greens, sports fields, and commercial spaces—backed by expert installation and lasting quality.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-syntech-green px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-syntech-green/90 focus:outline-none focus:ring-2 focus:ring-syntech-green focus:ring-offset-2 sm:w-auto"
            >
              Get a free quote
            </Link>
            <Link
              href="tel:9544785131"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-syntech-green px-8 py-4 text-base font-semibold text-syntech-green bg-white transition hover:bg-syntech-turf-light sm:w-auto"
            >
              (954) 478-5131
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-700 [text-shadow:0_1px_1px_rgba(255,255,255,0.9)]">
            Serving Pembroke Pines, Broward & South Florida
          </p>
        </div>
      </div>
    </section>
  );
}
