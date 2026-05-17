import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/aecc-content";
import { getSiteUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const siteTitle = `${brand.name} — ${brand.fullName}`;
const siteDescription =
  "Advanced Energy Company (AECC), a subsidiary of MASCO Group, delivers integrated power EPC and energy solutions across Saudi Arabia.";
const ogDescription =
  "Leading force in energy project construction and management in the Kingdom of Saudi Arabia since 2008.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${brand.name}`,
  },
  description: siteDescription,
  applicationName: brand.fullName,
  authors: [{ name: brand.fullName }],
  creator: brand.fullName,
  publisher: brand.fullName,
  keywords: [
    "AECC",
    "Advanced Energy Company",
    "MASCO Group",
    "Saudi Arabia",
    "EPC",
    "power substation",
    "transmission lines",
    "renewable energy",
  ],
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_SA",
    url: siteUrl,
    siteName: brand.fullName,
    title: siteTitle,
    description: ogDescription,
    images: [
      {
        url: "/aecc/hero.png",
        width: 1200,
        height: 630,
        alt: `${brand.fullName} — energy infrastructure projects in Saudi Arabia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: ogDescription,
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#007a53",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-dvh bg-white text-foreground">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
