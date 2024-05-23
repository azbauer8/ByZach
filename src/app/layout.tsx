import { siteMetadata } from "@/lib/metadata"

import "@/styles/global.css"

import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ViewTransitions } from "next-view-transitions"

import { cn } from "@/lib/utils"
import Footer from "@/components/layout/Footer"
import NavDock from "@/components/layout/NavDock"
import NavDrawer from "@/components/layout/NavDrawer"
import Providers from "@/components/layout/Providers"

const asap = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
})

const sourceCode = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FEFEFE" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
}

export const metadata: Metadata = {
  description: siteMetadata.description,
  applicationName: siteMetadata.title,
  icons: {
    icon: siteMetadata.favicon,
    shortcut: siteMetadata.favicon,
  },
  alternates: {
    canonical: siteMetadata.here,
  },
  metadataBase: new URL(siteMetadata.here),
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
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.here,
    siteName: siteMetadata.title,
    locale: "en_US",
    type: "website",
  },
}

export const revalidate = 172800 // 2 days

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-accent font-sans text-foreground antialiased dark:bg-[#0a0a0a] md:pb-20 md:pt-5",
            asap.variable,
            sourceCode.variable
          )}
        >
          {/* grid background on desktop */}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ededea_1px,transparent_1px),linear-gradient(to_bottom,#ededea_1px,transparent_1px)] bg-[size:14px_14px] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]" />

          <Providers>
            <div className="relative mx-auto flex min-h-dvh max-w-3xl flex-col bg-background px-5 pb-20 pt-12 shadow-md md:min-h-fit md:rounded-lg md:border md:py-5">
              {children}
              <Footer />
            </div>
            <NavDrawer />
            <NavDock />
          </Providers>

          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  )
}
