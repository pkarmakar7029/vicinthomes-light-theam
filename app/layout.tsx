import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vicint Homes | Professional Builder For Your Dream Home",
    template: "%s | Vicint Homes",
  },
  description:
    "Vicint Marquis is a destination in luxury living in Ranchi, Jharkhand. Professional builder trusted for your dream home. Quality work, 24/7 support.",
  metadataBase: new URL("https://www.vicinthomes.in"),
  openGraph: {
    title: "Vicint Homes | Professional Builder For Your Dream Home",
    description:
      "Vicint Marquis – luxury living in Ranchi. We build your home. Skilled professionals, quality work, 24/7 support.",
    url: "https://www.vicinthomes.in",
    siteName: "Vicint Homes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[color:var(--background-main)] text-[color:var(--text-primary)] font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

