import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

import "./globals.css"

import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zach Bauer",
  description: `Zach Bauer's Personal Website`,
}

export const revalidate = 1

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>
          <div className="mx-auto max-w-3xl space-y-5">
            <Header />
            <div className="m-5 space-y-8 md:m-0">
              <main>
                {children}
                <SpeedInsights />
                <Analytics />
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
