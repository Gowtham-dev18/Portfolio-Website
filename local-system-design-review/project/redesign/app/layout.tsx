import type { Metadata } from "next";
import { Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spline",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gowthama Viknesh K. — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer building production-grade applications — backend microservices, cloud infrastructure, and polished frontend interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={splineMono.variable}>
      <body>{children}</body>
    </html>
  );
}
