import type { Metadata } from "next";
import { Work_Sans, Noto_Sans_Thai } from "next/font/google";
import PrelineScript from "@/components/PrelineScript";
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

export const metadata: Metadata = {
  title: "APPrice",
  description: "Car Appraisal With AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansThai.variable} ${workSans.variable}`}>
        <Navbar />
        <div className="mt-[75px] sm:mt-[135px] h-auto flex flex-col bg-white">
          {children}
        </div>
        <Footer />
      </body>

      <PrelineScript />
    </html>
  );
}
