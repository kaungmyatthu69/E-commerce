import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MyJewel",
  description: "E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${dmSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <ReactQueryProvider>
          <NavBar />
          {children}
          <Footer />
        </ReactQueryProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
