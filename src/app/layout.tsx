/** @format */

import "./globals.css";

import type { Metadata } from "next";
import { Sora as SoraFont } from "next/font/google";

import NProgress from "./NProgress";

const Sora = SoraFont({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "MotoIndo",
  description: "MotoIndo, Membangun Ekosistem Keamanan Terintegrasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Sora.className}>
        {children}
        <NProgress />
      </body>
    </html>
  );
}
