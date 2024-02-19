import { siteConfig } from "@/config"

import { Providers } from "./_layout/Providers"

import "@/styles.css"

import { Metadata } from "next"
import clsx from "clsx"

import Footer from "./_layout/Footer"
import { ThemeToggle } from "./_layout/ThemeToggle"

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
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
        className={clsx(
          "bg-background text-foreground antialiased",
          siteConfig.font.className
        )}
      >
        <Providers>
          <div className="mx-auto mb-10 max-w-3xl space-y-5">
            <nav className="flex w-full justify-end px-6 py-5">
              <ThemeToggle />
            </nav>
            <div className="m-5 space-y-8 lg:m-0">
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
