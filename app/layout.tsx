import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Playfair_Display } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import '@/components/style.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "Sweet Odyssey | %s",
    default: "Sweet Odyssey",
  },
  description: "Sweet Odyssey lab project for HCI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          roboto.variable,
          roboto_condensed.variable,
          playfairDisplay.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}