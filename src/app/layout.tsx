import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/aecc-content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.fullName}`,
  description:
    "Advanced Energy Company (AECC), a subsidiary of MASCO Group, delivers integrated power EPC and energy solutions across Saudi Arabia.",
  openGraph: {
    title: `${brand.name} — ${brand.fullName}`,
    description:
      "Leading force in energy project construction and management in the Kingdom of Saudi Arabia.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
