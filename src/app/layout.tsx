import { siteConfig, siteLinks } from "@/config"

import "@/styles/global.css"

import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { cn } from "@/lib/utils"
import NavDrawer from "@/components/Global/NavDrawer"
import Providers from "@/components/Global/Providers"
import Sidebar from "@/components/Global/Sidebar/Sidebar"

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background font-sans text-foreground antialiased",
          asap.variable,
          sourceCode.variable
        )}
      >
        <Providers>
          <div className="flex">
            <Sidebar />
            <div className="flex-1">{children}</div>
          </div>
          <NavDrawer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
