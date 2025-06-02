import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Faten Selmi - Software Engineer & Frontend Developer",
  description:
    "Experienced Software Engineer, Frontend Developer, and Project Manager from Tunisia. Specializing in React, Next.js, Vue.js, and modern web technologies. Available for remote and local opportunities.",
  keywords:
    "Faten Selmi, Software Engineer, Frontend Developer, Project Manager, React, Next.js, Vue.js, Tunisia, Web Development",
  authors: [{ name: "Faten Selmi" }],
  creator: "Faten Selmi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fatenselmi.vercel.app",
    title: "Faten Selmi - Software Engineer & Frontend Developer",
    description:
      "Experienced Software Engineer, Frontend Developer, and Project Manager from Tunisia.",
    siteName: "Faten Selmi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faten Selmi - Software Engineer & Frontend Developer",
    description:
      "Experienced Software Engineer, Frontend Developer, and Project Manager from Tunisia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
