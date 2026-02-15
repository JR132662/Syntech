import dynamic from "next/dynamic";
import Link from "next/link";
import Hero from "@/components/Hero";

const Benefits = dynamic(() => import("@/components/Benefits"), { ssr: true });
const ProductCategories = dynamic(() => import("@/components/ProductCategories"), { ssr: true });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: true });
const PressSection = dynamic(() => import("@/components/PressSection"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const InstagramSection = dynamic(() => import("@/components/InstagramSection"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const YouTubeEmbed = dynamic(() => import("@/components/YouTubeEmbed"), { ssr: true });

const HOMEPAGE_VIDEO_ID = "0GgnzEUfC0c";

export default function Home() {
  return (
    <main className="pb-20">
      <Hero />
      <Benefits />
      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-syntech-green">
            Video
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-syntech-black sm:text-3xl">
            See Syntech Turf in action
          </h2>
          <YouTubeEmbed
            videoId={HOMEPAGE_VIDEO_ID}
            title="Syntech Turf"
            className="mt-8"
          />
        </div>
      </section>
      <ProductCategories />
      <Clients />
      <PressSection />
      <Testimonials />
      <InstagramSection />
      <section className="border-t border-gray-200 bg-syntech-neutral/50 py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-medium text-gray-700 sm:text-xl">
            Ready to get started? Request your free quote below—no obligation.
          </p>
          <Link
            href="#contact"
            className="mt-4 inline-flex items-center text-syntech-green font-semibold hover:underline"
          >
            Jump to quote form →
          </Link>
        </div>
      </section>
      <Contact />
    </main>
  );
}
