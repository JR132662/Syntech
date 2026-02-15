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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
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

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-white/90 transition hover:bg-white/10 hover:text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#4A4D4F] lg:hidden">
          <nav className="flex flex-col gap-0.5 px-4 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wider text-white/90 hover:bg-white/10 hover:text-syntech-turf"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
              <SocialIcons variant="light" />
              <Link
                href="/contact"
                className="rounded-full bg-syntech-turf px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
