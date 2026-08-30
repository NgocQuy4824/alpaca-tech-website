import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP, Montserrat } from "next/font/google";
import { SITE_URL, BRAND_NAME } from "@/lib/i18n/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const SITE_TITLE = "Digital Products, Data Platforms & AI";
const SITE_DESCRIPTION =
  "SV Digital Software designs and builds digital products, data platforms and AI solutions — combining cutting-edge engineering with deep domain expertise to deliver software that meets the highest standards.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} — ${SITE_TITLE}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: BRAND_NAME,
  keywords: [
    "digital software",
    "software development",
    "data platform",
    "AI solutions",
    "generative AI",
    "cloud engineering",
    "digital transformation",
    BRAND_NAME,
  ],
  openGraph: {
    type: "website",
    siteName: BRAND_NAME,
    locale: "en_US",
    alternateLocale: ["vi_VN", "lo_LA"],
    title: `${BRAND_NAME} — ${SITE_TITLE}`,
    description:
      "SV Digital Software designs and builds digital products, data platforms and AI solutions.",
    url: `${SITE_URL}/en`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} — ${SITE_TITLE}`,
    description:
      "SV Digital Software designs and builds digital products, data platforms and AI solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_NAME,
  legalName: `${BRAND_NAME} Co., Ltd.`,
  url: SITE_URL,
  description:
    "SV Digital Software designs and builds digital products, data platforms and AI solutions.",
  foundingDate: "2022-07-08",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 King Street, Westminster",
    addressLocality: "London",
    postalCode: "SW1Y 6QY",
    addressCountry: "GB",
  },
  sameAs: ["https://www.linkedin.com/", "https://www.instagram.com/", "https://www.facebook.com/"],
  knowsAbout: [
    "Software Development",
    "Data Platforms",
    "Artificial Intelligence",
    "Generative AI",
    "Cloud Engineering",
    "Digital Transformation",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
