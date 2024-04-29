import {
  FaAt,
  FaBrain,
  FaCode,
  FaFilePdf,
  FaFire,
  FaGithub,
  FaHouseChimney,
  FaLinkedin,
  FaSpotify,
  FaSquareLastfm,
  FaToolbox,
} from "react-icons/fa6"
import { SiTrakt } from "react-icons/si"

const sidebarLinks = {
  site: [
    {
      name: "Home",
      href: "/",
      icon: <FaHouseChimney size={16} />,
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
      icon: <FaFire size={16} />,
    },
    {
      name: "Uses",
      href: "/uses",
      icon: <FaToolbox size={16} />,
    },
  ],
  professional: [
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
      name: "GitHub",
      href: "https://github.com/azbauer8",
      icon: <FaGithub size={16} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/zach-bauer8/",
      icon: <FaLinkedin size={16} />,
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

export default sidebarLinks
