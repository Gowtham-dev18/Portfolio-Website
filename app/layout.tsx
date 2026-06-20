import type { Metadata } from "next";
import { Spline_Sans_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const edosz = localFont({
  src: "./fonts/edosz.ttf",
  variable: "--font-edosz",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gowthama Viknesh K — Full Stack Engineer",
  description:
    "Full Stack Software Engineer building production-grade applications — from backend microservices and cloud infra to polished frontend interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${splineSansMono.variable} ${edosz.variable}`} suppressHydrationWarning>
      <body>
        {/* Full-screen intro overlay — dragon flies into the navbar slot on finish */}
        <Preloader />
        {/* Navbar is fixed and lives OUTSIDE smooth-wrapper so GSAP transforms don't affect it */}
        <Navbar />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
