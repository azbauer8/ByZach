import { Inter } from "next/font/google"

export type SiteConfig = typeof siteConfig

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const siteConfig = {
  title: "ByZach",
  description: `Zach Bauer's Personal Website`,
  favicon: "/favicon.png",
  url: "https://byzach.dev",
  urlShortened: "byzach.dev",
  font: inter,
  links: {
    github: "https://github.com/azbauer8/ByZach",
    sig: "https://sig.com/",
    pitt: "https://www.pitt.edu/",
  },
} as const
