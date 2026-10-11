import type { Metadata } from "next";
import { Noto_Serif_Bengali, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PriceTicker from "./components/PriceTicker/PriceTicker";
import { Toaster } from "sonner";

const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});
;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "বাজার দর | Bazar Dor",
    template: "%s | বাজার দর",
  },
  description:
    "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দৈনিক বাজারদর, মূল্য পরিবর্তন ও বিভিন্ন পণ্যের বর্তমান দাম জানুন।",
  applicationName: "বাজার দর",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${NotoSerifBengali.className} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="sticky top-0 z-50">
          <Navbar />
          <PriceTicker />
        </div>
        <main>
          {children}
        </main>
        <Toaster position="top-center" richColors />
        <Footer />
      </body>
    </html>
  );
}
