import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-syntech-black via-[#0f2a1a] to-syntech-green pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pt-20">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile: stacked, organized blocks. Desktop: row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Logo className="h-9 w-auto sm:h-10" light />
            <p className="max-w-sm text-sm text-white/80">
              Premium artificial turf & green walls across South Florida. Residential, commercial, sports & golf.
            </p>
            <div className="lg:hidden">
              <SocialIcons variant="light" />
            </div>
          </div>

          {/* Nav: 2-col grid on mobile, flex row on desktop */}
          <nav
            className="grid grid-cols-2 gap-x-6 gap-y-2 sm:gap-x-8 lg:flex lg:flex-wrap lg:gap-x-8 lg:gap-y-2"
            aria-label="Footer navigation"
          >
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 transition hover:text-syntech-turf-light hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + contact: grouped on mobile */}
          <div className="flex flex-col gap-4 lg:items-end lg:gap-2 lg:text-right">
            <Link
              href="/contact"
              className="hidden w-full justify-center rounded-full bg-syntech-turf-light px-6 py-3.5 text-sm font-semibold text-syntech-black transition hover:bg-white sm:w-auto lg:ml-auto lg:inline-flex lg:w-fit"
            >
              Get a quote
            </Link>
            <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 lg:flex-col lg:items-end lg:gap-1">
              <a href="tel:9544785131" className="text-sm font-medium text-white/80 hover:text-syntech-turf-light">
                (954) 478-5131
              </a>
              <span className="hidden text-white/40 sm:inline">·</span>
              <p className="text-sm text-white/70">
                Pembroke Pines, FL
              </p>
            </div>
            <div className="hidden lg:block">
              <SocialIcons variant="light" />
            </div>
          </div>
        </div>

        {/* Bottom: seal + copyright */}
        <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4">
            <Image
              src="/synthetic-turf-council-seal.png"
              alt="Synthetic Turf Council CTI-Landscape"
              width={56}
              height={56}
              className="opacity-90 invert"
            />
            <span className="max-w-[200px] text-xs font-medium text-white/70 sm:text-left">
              Synthetic Turf Council<br />CTI-Landscape certified
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:w-full">
            <p className="text-sm font-medium text-white/70">
              © {new Date().getFullYear()} Syntech Turf. All rights reserved.
              <Link href="/privacy" className="ml-2 text-syntech-turf-light hover:underline">
                Privacy Policy
              </Link>
            </p>
            <p className="text-sm font-medium text-white/70">
              Pembroke Pines, FL · (954) 478-5131
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
