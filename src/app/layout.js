import "./globals.css";
import Script from "next/script";
import { BasketProvider } from "./components/BasketProvider";
import { DM_Sans, Roboto } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Spotter",
  description: "Sundhed med mening",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${dmSans.variable} ${roboto.variable}`}>
      <head>
        <Script src="https://unpkg.com/split-type" strategy="beforeInteractive" />
      </head>
      <body className="antialiased">
        <BasketProvider>{children}</BasketProvider>
      </body>
    </html>
  );
}
