import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ReducedMotionProvider } from "@/components/reduced-motion-provider";
import { AppErrorBoundary } from "@/components/app-error-boundary";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";
import { PWAInstallPrompt } from "@/components/pwa-install-prompt";
import { SkipLink } from "@/components/skip-link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahad - Portfolio",
  description: "Frontend Web Developer",
  manifest: "/manifest.json",
  // Performance optimization hints
  other: {
    "X-DNS-Prefetch-Control": "on",
  },
  // Apple touch icon
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ahad Portfolio",
  },
  // Format detection
  formatDetection: {
    telephone: false,
  },
  // Open Graph metadata
  openGraph: {
    title: "Ahad Ahamed Akash - Portfolio",
    description: "Frontend Web Developer specializing in React, Next.js, and modern web technologies",
    type: "website",
    url: "https://ahadahamedakash.com",
    siteName: "Ahad Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahad Ahamed Akash - Portfolio",
      },
    ],
  },
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Ahad Ahamed Akash - Portfolio",
    description: "Frontend Web Developer specializing in React, Next.js, and modern web technologies",
    images: ["/twitter-image.png"],
    creator: "@ah1033ad",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ahad Portfolio" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://www.linkedin.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://github.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Skip Link for Accessibility */}
        <SkipLink />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ReducedMotionProvider>
            <AppErrorBoundary>
              <Suspense fallback={<LoadingSpinner text="Loading navigation..." />}>
                <Navbar />
              </Suspense>
              <Suspense fallback={<LoadingSpinner text="Loading page..." />}>
                {children}
              </Suspense>
              <Suspense fallback={<LoadingSpinner text="Loading footer..." />}>
                <Footer />
              </Suspense>
            </AppErrorBoundary>
            {/* PWA Support */}
            <ServiceWorkerRegistration />
            <PWAInstallPrompt />
            {/* Performance Analytics */}
            <Analytics />
            <SpeedInsights />
          </ReducedMotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
