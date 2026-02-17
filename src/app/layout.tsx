import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtaWrapper from "@/components/StickyCtaWrapper";
import { ThemeProvider } from "@/context/ThemeContext";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const themeScript = `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}})();`;

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
  url: siteUrl,
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
  image: `${siteUrl}/logo.png`,
  sameAs: ["https://www.instagram.com/syntechturf"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased dark:bg-gray-900 dark:text-gray-100">
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <StickyCtaWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
