import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductCategories from "@/components/ProductCategories";
import Clients from "@/components/Clients";
import PressSection from "@/components/PressSection";
import Testimonials from "@/components/Testimonials";
import InstagramSection from "@/components/InstagramSection";
import Contact from "@/components/Contact";
import YouTubeEmbed from "@/components/YouTubeEmbed";

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
      <Contact />
    </main>
  );
}
