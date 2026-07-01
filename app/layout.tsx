import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SITE_URL = "https://geta.my";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GETA — From the kampung to the summit.",
  description:
    "GETA reimagines the humble black rubber kampung shoe as bright, fashionable trail gear. Built for Malaysian terrain, named after the mountains we climb.",
  keywords: ["GETA", "kasut getah", "kampung shoe", "Malaysia hiking", "outdoor fashion"],
  openGraph: {
    title: "GETA — From the kampung to the summit.",
    description:
      "The RM15 legend, reimagined. Bright, fashionable trail shoes built for Malaysian terrain.",
    url: SITE_URL,
    siteName: "GETA",
    images: [{ url: "/images/og.png", width: 1200, height: 675, alt: "GETA" }],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GETA — From the kampung to the summit.",
    description: "The RM15 legend, reimagined. Trail shoes built for Malaysian terrain.",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hanken.variable} ${spaceMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
