import { siteMetadata } from "@/lib/metadata"

import "@/layout/styles.css"

import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Source_Sans_3 } from "next/font/google"
import DotPattern from "@/layout/DotPattern"
import Footer from "@/layout/Footer"
import NavDrawer from "@/layout/NavDrawer"
import Providers from "@/layout/Providers"
import TopNav from "@/layout/TopNav"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { cn } from "@/lib/utils"

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
    canonical: siteMetadata.here.full,
  },
  metadataBase: new URL(siteMetadata.here.full),
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
    url: siteMetadata.here.full,
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-accent font-sans text-foreground antialiased dark:bg-[#0a0a0a] md:py-5",
          asap.variable,
          sourceCode.variable
        )}
      >
        <Providers>
          <div className="z-10 mx-auto flex max-w-3xl flex-col gap-2">
            <TopNav />
            <div className="min-h-dvh bg-background px-5 py-5 pb-16 shadow-md md:min-h-fit md:rounded-lg md:border md:pb-5">
              {children}
            </div>
            <Footer />
          </div>
          <NavDrawer />
          <DotPattern />
        </Providers>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
