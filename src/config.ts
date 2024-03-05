import { Asap } from "next/font/google"

export type SiteConfig = typeof siteConfig

const inter = Asap({ subsets: ["latin"] })

export const siteConfig = {
  title: "Zach Bauer",
  description: `Zach Bauer's Personal Website`,
  favicon: "/favicon.png",
  font: inter,
  links: {
    github: "https://github.com/azbauer8/ByZach",
    sig: "https://sig.com/",
    pitt: "https://www.pitt.edu/",
  },
}
