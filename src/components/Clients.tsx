import Image from "next/image";

const clientLogos = [
  { src: "/clients/ac-hotels.png", alt: "AC Hotels", name: "AC Hotels" },
  { src: "/clients/nfl.png", alt: "NFL", name: "NFL" },
  { src: "/clients/westin.png", alt: "Westin Hotels & Resorts", name: "Westin Hotels & Resorts" },
  { src: "/clients/peak.png", alt: "Peak Athletic Performance", name: "Peak 360" },
  { src: "/clients/city-of-doral.png", alt: "City of Doral", name: "City of Doral" },
  { src: "/clients/artefacto.png", alt: "Artefacto", name: "Artefacto" },
  { src: "/clients/firstservice.png", alt: "FirstService", name: "FirstService" },
  { src: "/clients/bbt-center.png", alt: "BB&T Center", name: "BB&T Center" },
  { src: "/clients/3h-group.png", alt: "3H Group Hotels", name: "3H Group Hotels" },
  { src: "/clients/casaconde.png", alt: "Casaconde & Associates", name: "Casaconde & Associates" },
];

export default function Clients() {
  return (
    <section className="relative bg-syntech-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-syntech-turf">
            Our clients
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-syntech-black sm:text-4xl">
            Trusted by leading brands
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-base text-gray-500">
            Driving quality for hospitality, sports, and municipal partners across South Florida.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-16 lg:grid-cols-5 lg:gap-8">
          {clientLogos.map((client) => (
            <div
              key={client.src}
              className="group flex flex-col items-center"
            >
              <div className="relative h-20 w-full sm:h-24">
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition group-hover:ring-syntech-turf/20 sm:p-5">
                  <div className="relative h-full w-full">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      fill
                      className="object-contain object-center p-2 opacity-80 transition group-hover:opacity-100"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                </div>
              </div>
              <span className="mt-3 text-center text-xs font-medium text-gray-400 sm:text-sm">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
