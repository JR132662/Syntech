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
    <section className="relative overflow-hidden border-t border-gray-200 bg-syntech-neutral/50 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(45,125,74,0.05),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-syntech-green">
            Our Clients
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-syntech-black sm:text-4xl">
            Driving technology for leading brands
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5">
          {clientLogos.map((client) => (
            <div
              key={client.src}
              className="group flex flex-col items-center justify-center"
            >
              <div className="relative flex h-24 w-full items-center justify-center rounded-xl border border-gray-200/80 bg-white p-4 transition duration-300 hover:border-syntech-green/30 hover:shadow-md sm:h-28 sm:p-6">
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain object-center p-2 transition duration-300 group-hover:opacity-90"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <span className="mt-3 text-center text-xs font-medium text-gray-500 sm:text-sm">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
