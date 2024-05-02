import {
  FaAt,
  FaBookmark,
  FaBrain,
  FaCode,
  FaFilePdf,
  FaGithub,
  FaHammer,
  FaHandPeace,
  FaLaptop,
  FaSpotify,
  FaSquareLastfm,
} from "react-icons/fa6"
import { SiTrakt } from "react-icons/si"

export const siteConfig = {
  title: "ByZach",
  description: `Zach Bauer's Personal Website`,
  favicon: "/favicon.png",
} as const

export const pageHeaders = {
  about: {
    title: "Zach Bauer",
    subtitle: "Full Stack Developer",
  },
  activity: {
    title: "Activity",
    subtitle: "I enjoy consuming media, sometimes.",
    socials: "Follow me on",
  },
  projects: {
    title: "Projects",
    subtitle: "My latest work and experiments.",
  },
  thoughts: {
    title: "Thoughts",
    subtitle: "Poorly conveyed ideas about technology, design, and the web.",
  },
  snippets: {
    title: "Snippets",
    subtitle: "Bits of code I often refer back to.",
  },
  discoveries: {
    title: "Discoveries",
    subtitle: "Useful links I've found around the web.",
  },
  uses: {
    title: "Uses",
    subtitle: "Devices, tools, and technologies I use on a daily basis.",
  },
} as const

export const siteLinks = {
  here: "https://byzach.dev",
  hereShort: "byzach.dev",
  source: "https://github.com/azbauer8/ByZach",
  sig: "https://sig.com/",
  pitt: "https://www.pitt.edu/",
  professional: [
    {
      name: "GitHub",
      href: "https://github.com/azbauer8",
      icon: <FaGithub size={16} />,
    },
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
  ],
  personal: [
    {
      name: "Spotify",
      href: "https://open.spotify.com/user/31krvuuup255gx2tkfuueknhctwy",
      icon: <FaSpotify size={16} />,
    },
    {
      name: "Last.fm",
      href: "https://www.last.fm/user/zacharlatanz",
      icon: <FaSquareLastfm size={16} />,
    },
    {
      name: "Trakt",
      href: "https://trakt.tv/users/zacharlatan",
      icon: <SiTrakt size={16} />,
    },
  ],
} as const

export const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <FaHandPeace size={16} />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <FaLaptop size={16} />,
  },
  {
    name: "Thoughts",
    href: "/thoughts",
    icon: <FaBrain size={16} />,
  },
  {
    name: "Snippets",
    href: "/snippets",
    icon: <FaCode size={16} />,
  },
  {
    name: "Discoveries",
    href: "/discoveries",
    icon: <FaBookmark size={16} />,
  },
  {
    name: "Uses",
    href: "/uses",
    icon: <FaHammer size={16} />,
  },
] as const
