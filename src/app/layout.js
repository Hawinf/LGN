import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "LANDSNATURE | Premium Coconut Products Manufacturer & Exporter Indonesia",

  description:
    "Leading Indonesian manufacturer and exporter of premium coconut charcoal briquettes, coconut milk cream, virgin coconut oil, and high-quality coconut products for the global market.",

  keywords: [
    "coconut products",
    "coconut charcoal briquettes",
    "coconut briquettes supplier",
    "coconut exporter",
    "coconut manufacturer",
    "virgin coconut oil",
    "coconut milk cream",
    "Indonesia coconut supplier",
    "wholesale coconut products",
    "global exporter"
  ],

  openGraph: {
    title:
      "Premium Coconut Products Manufacturer & Global Exporter",
    description:
      "Supplying premium coconut charcoal briquettes, coconut milk cream, and coconut oil worldwide.",
    type: "website",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
