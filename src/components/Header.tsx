"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#4A4D4F] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo className="h-9 w-auto shrink-0" />

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
                className={`group relative px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/90 transition hover:text-syntech-turf focus:outline-none focus:ring-2 focus:ring-syntech-turf focus:ring-offset-2 focus:ring-offset-[#4A4D4F] ${
                  isActive ? "text-syntech-turf" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-syntech-turf transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-4 shrink-0">
          <SocialIcons variant="light" />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-syntech-turf px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-syntech-green-light hover:text-white focus:outline-none focus:ring-2 focus:ring-syntech-turf focus:ring-offset-2 focus:ring-offset-[#4A4D4F]"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile: when menu open, show social + close; when closed, show hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          {open && (
            <div className="flex items-center gap-2">
              <SocialIcons
                variant="light"
                className="[&_a]:h-9 [&_a]:w-9 [&_a]:rounded-full [&_a]:bg-white/20 [&_a]:border-0 [&_a]:text-white"
              />
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#4A4D4F] hover:bg-white/15"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          {!open && (
            <button
              type="button"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-white/90 transition hover:bg-white/10 hover:text-white"
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

      {/* Mobile dropdown: full-width bars, light green / Contact teal-grey */}
      {open && (
        <div className="border-t border-white/10 bg-[#4A4D4F] lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const useDarkBar = isActive;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block w-full px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider text-white transition ${
                    useDarkBar
                      ? "bg-[#3d4846] hover:bg-[#35403e]"
                      : "bg-syntech-turf hover:bg-syntech-turf/95"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
