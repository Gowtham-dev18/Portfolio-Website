import type { Metadata } from "next";
import { Lexend_Deca, DM_Mono, Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const edosz = localFont({
  src: "./fonts/edosz.ttf",
  variable: "--font-edo",
});

const valty = localFont({
  src: "./fonts/Valty_DEMO.otf",
  variable: "--font-valty",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gowthama Viknesh K — Full Stack Engineer",
  description: "Full Stack Software Engineer building production-grade applications — from backend microservices and cloud infra to polished frontend interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${lexendDeca.variable} ${dmMono.variable} ${edosz.variable} ${valty.variable} ${notoSansJP.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Dark / night mode — disabled
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const theme = storedTheme || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })()
            `,
          }}
        />
        */}
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
