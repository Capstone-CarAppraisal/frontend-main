"use client";

import { useEffect } from "react";
import type { Metadata } from "next";
import { Work_Sans, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Navbar/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  display: "swap",
  variable: "--font-noto-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <html lang="en">
      <body className={`${notoSansThai.variable} ${workSans.variable}`}>
        <div className="flex flex-col bg-white">
          <Navbar />
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
