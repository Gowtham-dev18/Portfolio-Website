import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import StarField from "@/components/StarField";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "700"],
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
    <html lang="en" className={`${jetBrainsMono.variable} ${spaceGrotesk.variable} ${edosz.variable}`} suppressHydrationWarning>
      <head>
        {/* No-FOUC: apply stored dark theme before paint (default light) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.dataset.theme='dark';}catch(e){}`,
          }}
        />
      </head>
      <body>
        {/* Fixed space starfield — visible only in dark mode, sits behind everything */}
        <StarField />
        {/* Full-screen intro overlay — dragon flies into the navbar slot on finish */}
        <Preloader />
        {/* Navbar is fixed and lives OUTSIDE smooth-wrapper so GSAP transforms don't affect it */}
        <Navbar />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
