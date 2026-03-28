import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://chessvine.com";
const siteName = "Chessvine";
const siteDescription =
  "AI-powered chess game analysis platform. Upload your PGN files, get detailed insights, practice puzzles, and improve your chess game. Checkmate your limits with Chessvine.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chessvine - Checkmate your limits | AI Chess Analysis Platform",
    template: "%s | Chessvine",
  },
  description: siteDescription,
  keywords: [
    "chess analysis",
    "chess AI",
    "PGN analyzer",
    "chess game analysis",
    "chess training",
    "chess puzzles",
    "chess improvement",
    "chess insights",
    "chess strategy",
    "chess tactics",
    "online chess",
    "chess platform",
  ],
  authors: [{ name: "Chessvine Team" }],
  creator: "Chessvine",
  publisher: "Chessvine",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/app-logo.png", type: "image/png", sizes: "32x32" },
      { url: "/app-logo.png", type: "image/png", sizes: "16x16" },
      { url: "/app-logo.png", type: "image/png", sizes: "192x192" },
      { url: "/app-logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/app-logo.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/app-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Chessvine - Checkmate your limits | AI Chess Analysis Platform",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        width: 1200,
        height: 630,
        alt: "Chessvine - AI Chess Analysis Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chessvine - Checkmate your limits | AI Chess Analysis Platform",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        alt: "Chessvine - AI Chess Analysis Platform",
      },
    ],
    creator: "@chessvine",
    site: "@chessvine",
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
  alternates: {
    canonical: siteUrl,
  },
  category: "Chess Analysis",
  manifest: "/manifest.json",
  verification: {
    // Add verification codes here when available
    // google: "verification-code",
    // yandex: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
