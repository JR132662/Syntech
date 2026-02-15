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
    <footer className="border-t border-gray-200 bg-syntech-neutral pb-20 pt-16 sm:pb-24 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex flex-col gap-6">
            <Logo className="h-9 w-auto sm:h-10" />
            <p className="max-w-sm text-sm text-gray-600">
              Premium artificial turf & green walls across South Florida. Residential, commercial, sports & golf.
            </p>
            <SocialIcons variant="default" />
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 sm:gap-x-10">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-syntech-black transition hover:text-syntech-turf hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 text-right lg:text-right">
            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-syntech-turf px-6 py-3 text-sm font-semibold text-white transition hover:bg-syntech-green lg:ml-auto"
            >
              Get a quote
            </Link>
            <a href="tel:9544785131" className="text-sm font-medium text-gray-600 hover:text-syntech-turf">
              (954) 478-5131
            </a>
            <p className="text-sm text-gray-500">
              Pembroke Pines, FL
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-gray-200/80 pt-10">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/synthetic-turf-council-seal.png"
              alt="Synthetic Turf Council CTI-Landscape"
              width={56}
              height={56}
              className="opacity-90"
            />
            <span className="max-w-[200px] text-left text-xs font-medium text-gray-600">
              Synthetic Turf Council<br />CTI-Landscape certified
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:w-full">
            <p className="text-sm font-medium text-gray-600">
              © {new Date().getFullYear()} Syntech Turf. All rights reserved.
              <Link href="/privacy" className="ml-2 text-syntech-turf hover:underline">
                Privacy Policy
              </Link>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Pembroke Pines, FL · (954) 478-5131
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
