import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP, Montserrat } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alpaca-tech.ai"),
  title: {
    default: "AlpacaTech — Beyond Limits in Finance with Data Science",
    template: "%s | AlpacaTech",
  },
  description: "AlpacaTechは、金融業界向けの投資・運用・調査・分析・システム連携に係るソリューションを開発するテクノロジー企業です。 最先端のテクノロジーと金融における知見・ノウハウを融合し、お客様の高い基準を満たすソリューションを提供しています。",
  applicationName: "AlpacaTech",
  openGraph: {
    type: "website",
    siteName: "AlpacaTech",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#164DE5",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
