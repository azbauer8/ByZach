import { Asap } from "next/font/google"
import {
  FaAt,
  FaFilePdf,
  FaGithubAlt,
  FaLastfm,
  FaLinkedin,
  FaSpotify,
} from "react-icons/fa6"
import { SiTrakt } from "react-icons/si"

export type SiteConfig = typeof siteConfig

const inter = Asap({ subsets: ["latin"], variable: "--font-sans" })

export const siteConfig = {
  title: "ByZach",
  urlTitle: "byzach.dev",
  description: `Zach Bauer's Personal Website`,
  favicon: "/favicon.png",
  font: inter,
  links: {
    here: "https://byzach.dev",
    source: "https://github.com/azbauer8/ByZach",
    sig: "https://sig.com/",
    pitt: "https://www.pitt.edu/",
    social: [
      {
        name: "GitHub",
        href: "https://github.com/azbauer8",
        icon: <FaGithubAlt size={16} />,
      },
      {
        name: "Spotify",
        href: "https://open.spotify.com/user/31krvuuup255gx2tkfuueknhctwy",
        icon: <FaSpotify size={16} />,
      },
      {
        name: "Last.fm",
        href: "https://www.last.fm/user/zacharlatanz",
        icon: <FaLastfm size={16} />,
      },
      {
        name: "Trakt",
        href: "https://trakt.tv/users/zacharlatan",
        icon: <SiTrakt size={16} />,
      },
    ],
    work: [
      {
        name: "Email",
        href: "mailto:hi@byzach.dev",
        icon: <FaAt size={16} />,
      },
      {
        name: "Resume",
        href: "/Resume.pdf",
        icon: <FaFilePdf size={16} />,
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/zach-bauer8/",
        icon: <FaLinkedin size={16} />,
      },
    ],
  },
} as const
