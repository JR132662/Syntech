import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Syntech Turf – Artificial Turf & Green Wall",
  description:
    "Get a free quote for your artificial turf or green wall project. Syntech Turf serves South Florida. Call (954) 478-5131 or send a message.",
};

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=21113+Johnson+Street+106,Pembroke+Pines,FL+33029&output=embed";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-syntech-offwhite pt-24 pb-20 dark:bg-gray-900">
      <Contact />
      <section className="border-t border-gray-200 bg-syntech-neutral/30 py-12 sm:py-16 dark:border-gray-800 dark:bg-gray-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-syntech-black dark:text-white sm:text-3xl text-center">
            Find us
          </h2>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            21113 Johnson St #106, Pembroke Pines, FL 33029
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <iframe
              src={MAP_EMBED_SRC}
              title="Syntech Turf location – Pembroke Pines, FL"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full sm:h-[400px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
