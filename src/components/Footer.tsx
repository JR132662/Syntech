import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#4A4D4F] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <Logo className="h-8 w-auto" />
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 transition hover:text-syntech-turf hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-full bg-syntech-turf px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-syntech-green-light"
          >
            Get a quote
          </Link>
        </div>
        <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/synthetic-turf-council-seal.png"
              alt="Synthetic Turf Council CTI-Landscape"
              width={56}
              height={56}
              className="opacity-95"
            />
            <span className="text-xs font-medium text-white/90 max-w-[180px]">
              Synthetic Turf Council<br />CTI-Landscape certified
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:w-full">
            <p className="text-sm font-medium text-white/90">
              © {new Date().getFullYear()} Syntech Turf. All rights reserved.
            </p>
            <p className="text-sm font-medium text-white/90">
              Pembroke Pines, FL · (954) 478-5131
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
