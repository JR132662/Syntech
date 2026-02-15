import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtaWrapper from "@/components/StickyCtaWrapper";

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

const siteUrl = "https://syntechturf.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Syntech Turf | Artificial Turf & Green Wall | Florida",
    template: "%s | Syntech Turf",
  },
  description:
    "Premium artificial turf and green wall solutions in South Florida. Residential, commercial, sports & golf. Get a free quote today.",
  keywords: [
    "artificial turf",
    "synthetic turf",
    "green wall",
    "South Florida",
    "Pembroke Pines",
    "Miami",
    "Fort Lauderdale",
    "turf installation",
    "putting green",
    "residential turf",
    "commercial turf",
  ],
  authors: [{ name: "Syntech Turf", url: siteUrl }],
  creator: "Syntech Turf",
  publisher: "Syntech Turf",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Syntech Turf",
    title: "Syntech Turf | Artificial Turf & Green Wall | Florida",
    description: "Premium artificial turf and green wall solutions in South Florida. Residential, commercial, sports & golf. Get a free quote today.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Syntech Turf",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Syntech Turf | Artificial Turf & Green Wall | Florida",
    description: "Premium artificial turf and green wall solutions in South Florida. Get a free quote today.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "construction",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Syntech Turf",
  description: "Premium artificial turf and green wall solutions in South Florida. Residential, commercial, sports & golf.",
  url: "https://syntechturf.com",
  telephone: "+1-954-478-5131",
  address: {
    "@type": "PostalAddress",
    streetAddress: "21113 Johnson Street, #106",
    addressLocality: "Pembroke Pines",
    addressRegion: "FL",
    postalCode: "33029",
    addressCountry: "US",
  },
  areaServed: "South Florida",
  image: "https://syntechturf.com/logo.png",
  sameAs: ["https://www.instagram.com/syntechturf"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <StickyCtaWrapper />
      </body>
    </html>
  );
}
