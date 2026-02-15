"use client";

import Image from "next/image";

const LOGO_WIDTH = 440;
const LOGO_HEIGHT = 200;

export default function ClientLogosCarousel({ logos }: { logos: string[] }) {
  const duplicated = [...logos, ...logos];

  return (
    <div
      className="group relative w-full min-w-0 max-w-full overflow-x-hidden"
      aria-label="Client logos carousel"
    >
      <div
        className="flex w-max flex-nowrap gap-6 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
        aria-hidden
      >
        {duplicated.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="flex flex-shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100 transition hover:ring-syntech-turf/30 hover:shadow-md"
            style={{
              width: LOGO_WIDTH,
              height: LOGO_HEIGHT,
              minWidth: LOGO_WIDTH,
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt="Client"
                fill
                className="object-contain opacity-85 transition hover:opacity-100"
                sizes="440px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
