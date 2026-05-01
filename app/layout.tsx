import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { data } from "@/lib/data";

const { business, hero } = data;

export const metadata: Metadata = {
  title: `${business.name} - ${business.tagline}`,
  description: business.description,
  openGraph: {
    title: `${business.name} - ${business.tagline}`,
    description: business.description,
    url: business.website,
    siteName: business.name,
    images: [
      {
        url: hero.backgroundImages[0],
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${business.name} - ${business.tagline}`,
    description: business.description,
    images: [hero.backgroundImages[0]],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    description: business.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "954 E Main St",
      addressLocality: "Stamford",
      addressRegion: "CT",
      postalCode: "06902",
      addressCountry: "USA"
    },
    telephone: business.phone,
    url: business.website,
    image: hero.backgroundImages[0],
    servesCuisine: "Latin American"
  };

  return (
    <html lang="en">
      <body>
{/* KORA_TRACKING_GTM_NEXT_START */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WBNZJP9H');`,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WBNZJP9H"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* KORA_TRACKING_GTM_NEXT_END */}
        <script
          id="kora-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}