import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amna Tariq — Full-Stack Software Engineer",
  description:
    "Portfolio of Amna Tariq, a full-stack software engineer building web, mobile, and AI/AR-powered products.",
  keywords: [
    "Amna Tariq",
    "Full-Stack Developer",
    "Software Engineer Portfolio",
    "Next.js Developer",
    "React Developer Pakistan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-base text-porcelain font-body antialiased selection:bg-gold selection:text-base">
        {children}
      </body>
    </html>
  );
}
