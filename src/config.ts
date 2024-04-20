import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

export type SiteConfig = typeof siteConfig

const asap = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const siteConfig = {
  title: "ByZach",
  description: `Zach Bauer's Personal Website`,
  favicon: "/favicon.png",
  font: GeistSans,
  monoFont: GeistMono,
} as const

export const siteLinks = {
  here: "https://byzach.dev",
  source: "https://github.com/azbauer8/ByZach",
  sig: "https://sig.com/",
  pitt: "https://www.pitt.edu/",
} as const
