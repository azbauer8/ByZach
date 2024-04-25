export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: "ByZach",
  description: `Zach Bauer's Personal Website`,
  favicon: "/favicon.png",
} as const

export const siteLinks = {
  here: "https://byzach.dev",
  source: "https://github.com/azbauer8/ByZach",
  sig: "https://sig.com/",
  pitt: "https://www.pitt.edu/",
} as const
