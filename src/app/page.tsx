import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductCategories from "@/components/ProductCategories";
import Clients from "@/components/Clients";
import PressSection from "@/components/PressSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="pb-20">
      <Hero />
      <Benefits />
      <ProductCategories />
      <Clients />
      <PressSection />
      <Testimonials />
      <Contact />
    </main>
  );
}
