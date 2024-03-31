import { siteConfig } from "@/config"

import "@/styles.css"

import { Metadata } from "next"

import { cn } from "@/lib/utils"
import { Providers } from "@/components/Providers"
import { MobileSidebar, Sidebar } from "@/components/Sidebar"

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
          "relative flex h-full min-h-dvh w-full bg-background font-sans text-foreground antialiased",
          siteConfig.font.variable
        )}
      >
        <Providers>
          <Sidebar />
          <MobileSidebar />
          <div className="flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
