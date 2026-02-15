"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-syntech-offwhite/95 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 sm:px-6">
        <p className="hidden text-sm text-gray-600 sm:block">
          Free quote · No obligation
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-syntech-turf px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-syntech-green hover:shadow-md"
        >
          Get your free quote
        </Link>
        <a
          href="tel:9544785131"
          className="text-sm font-medium text-syntech-green hover:text-syntech-green/90"
        >
          (954) 478-5131
        </a>
      </div>
    </div>
  );
}
