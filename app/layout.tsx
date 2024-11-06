import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";

const robotoLocalFonts = Roboto({
  weight: ["100", "900", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Morning Context: Internet, Business and Chaos",
  description:
    "The Morning Context publishes the best reportage and analysis on technology, business and chaos in India. Subscribe to get timely, in-depth stories every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoLocalFonts.className}`}>{children}</body>
    </html>
  );
}
