/** @format */

import './globals.css';

import { Metadata } from 'next';
import { Sora as SoraFont } from 'next/font/google';

import { GoogleAnalytics } from '@next/third-parties/google';

import NProgress from './NProgress';

const Sora = SoraFont({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "MotoIndo | HT Motorola Indonesia",
  description: "MotoIndo | HT Motorola Indonesia",
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
        <GoogleAnalytics gaId="G-D9F04NQCVD" />
      </body>
    </html>
  );
}
