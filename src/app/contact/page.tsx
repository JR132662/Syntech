import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Syntech Turf – Artificial Turf & Green Wall",
  description:
    "Get a free quote for your artificial turf or green wall project. Syntech Turf serves South Florida. Call (954) 478-5131 or send a message.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <Contact />
    </main>
  );
}
