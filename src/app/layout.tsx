import { siteConfig, siteLinks } from "@/config"

import "@/styles/global.css"

import { Metadata } from "next"

import { cn } from "@/lib/utils"
import { Providers } from "@/components/Providers"
import Sidebar from "@/components/Sidebar/Sidebar"

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
          "flex bg-background font-sans text-foreground antialiased",
          siteConfig.font.variable,
          siteConfig.monoFont.variable
        )}
      >
        <Providers>
          <Sidebar />
          <div className="flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
