import { siteConfig, siteLinks } from "@/config"

import "@/styles/global.css"
import { Asap } from "next/font/google"
import { GeistMono } from "geist/font/mono"


import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"
const Providers = dynamic(() => import("@/components/Providers"))
const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"))
const MobileSidebar = dynamic(() => import("@/components/Sidebar/MobileSidebar"))

const asap = Asap({
  subsets: ["latin"],
  variable: "--font-sans",
})


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
      <head>
      <meta name="theme-color" id="themeColor" content="#FEFEFE"/>
      </head>
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
