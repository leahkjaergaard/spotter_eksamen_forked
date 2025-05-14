import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { BasketProvider } from "./components/BasketProvider";

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spotter",
  description: "Din sundhedsbutik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <Script src="https://unpkg.com/split-type" strategy="beforeInteractive" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BasketProvider>{children}</BasketProvider>
      </body>
    </html>
  );
}
