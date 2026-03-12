import type { Metadata } from "next";
import { Oswald, Source_Sans_3, Lora } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MLN 122 | Kinh tế Chính trị Mác-Lênin",
  description: "Digital Archive - Kinh tế Chính trị Mác-Lênin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${oswald.variable} ${sourceSans.variable} ${lora.variable} antialiased`}
        style={{ fontFamily: "var(--font-source-sans), Arial, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
