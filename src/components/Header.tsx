"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const HERO_SCROLL_THRESHOLD = 380;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > HERO_SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = !scrolledPastHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm transition-colors ${
        overHero
          ? "border-white/10 bg-transparent"
          : "border-gray-200/80 bg-syntech-offwhite/95"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo className="h-9 w-auto shrink-0 sm:h-10" dark={scrolledPastHero} />

        <nav className="hidden lg:flex lg:items-center lg:gap-1 lg:flex-1 lg:justify-center">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-4 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-syntech-turf focus:ring-offset-2 focus:ring-offset-white ${
                  overHero
                    ? isActive
                      ? "text-syntech-turf-light"
                      : "text-white/90 hover:text-white"
                    : isActive
                      ? "text-syntech-green"
                      : "text-syntech-black hover:text-syntech-turf"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full transition-opacity ${
                    overHero ? "bg-syntech-turf-light" : "bg-syntech-turf"
                  } ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-4 shrink-0">
          <SocialIcons variant={overHero ? "light" : "default"} />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-syntech-turf px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-syntech-green focus:outline-none focus:ring-2 focus:ring-syntech-turf focus:ring-offset-2 focus:ring-offset-white"
          >
            Get a Quote
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {open && (
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-syntech-turf transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-syntech-turf focus:ring-offset-2"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          {!open && (
            <button
              type="button"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-syntech-turf transition hover:bg-white/10"
              onClick={() => setOpen(true)}
              aria-expanded={false}
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </button>
          )}
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-white/85 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block w-full px-6 py-4 text-left text-sm font-medium transition ${
                    isActive
                      ? "bg-syntech-turf/20 text-syntech-green"
                      : "text-syntech-black hover:bg-syntech-turf/10 hover:text-syntech-turf"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-row items-center justify-between gap-4 border-t border-white/20 px-4 py-4 sm:px-6">
            <SocialIcons variant="default" />
            <Link
              href="/contact"
              className="rounded-full bg-syntech-turf px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-syntech-green"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
