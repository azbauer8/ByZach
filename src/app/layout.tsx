import { siteConfig, siteLinks } from "@/config"

import "@/styles/global.css"

import { Metadata, Viewport } from "next"
import { Asap } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistMono } from "geist/font/mono"

import { cn } from "@/lib/utils"
import Providers from "@/components/Providers"
import MobileSidebar from "@/components/Sidebar/MobileSidebar"
import Sidebar from "@/components/Sidebar/Sidebar"

const asap = Asap({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FEFEFE" },
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.title,
  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
  },
  alternates: {
    canonical: siteLinks.here,
  },
  metadataBase: new URL(siteLinks.here),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteLinks.here,
    siteName: siteConfig.title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  consolewa.log("hello world")

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "flex bg-background font-sans text-foreground antialiased",
          asap.variable,
          GeistMono.variable
        )}
      >
        <Providers>
          <Sidebar />
          <MobileSidebar />
          <div className="flex-1">{children}</div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
