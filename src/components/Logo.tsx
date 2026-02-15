import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  /** When true, show dark version for use on light backgrounds (e.g. after scrolling past hero) */
  dark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`relative inline-flex shrink-0 ${className}`}
      aria-label="Syntech Turf Home"
    >
      <span
        className={`relative block h-9 w-32 sm:h-10 sm:w-36 transition-[filter] duration-200 ${
          dark ? "brightness-0" : ""
        }`}
      >
        <Image
          src="/logo.png"
          alt="Syntech Turf"
          fill
          className="object-contain object-left"
          sizes="(max-width: 640px) 128px, 144px"
          priority
        />
      </span>
    </Link>
  );
}
