/** @format */

import "./globals.css";

import type { Metadata } from "next";
import { Sora as SoraFont } from "next/font/google";

const Sora = SoraFont({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Motoindo",
  description: "Motoindo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Sora.className}`}>{children}</body>
    </html>
  );
}
