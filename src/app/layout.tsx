import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syntech Turf | Artificial Turf & Green Wall | Florida",
  description:
    "Premium artificial turf and green wall solutions in South Florida. Residential, commercial, sports & golf. Get a free quote today.",
  openGraph: {
    title: "Syntech Turf | Artificial Turf & Green Wall",
    description: "Premium artificial turf and green wall solutions. Get a free quote.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
