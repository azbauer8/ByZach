import { siteConfig } from "@/config"

import "@/styles/global.css"

import { Metadata } from "next"

import { cn } from "@/lib/utils"
import { Providers } from "@/components/Providers"
import Sidebar from "@/components/Sidebar"

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.favicon,
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
          "bg-background text-foreground flex font-sans antialiased",
          siteConfig.font.variable
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
