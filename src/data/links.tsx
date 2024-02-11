import { FaGithub, FaSquareLastfm } from "react-icons/fa6"
import { HiDocumentArrowDown } from "react-icons/hi2"
import { MdAlternateEmail } from "react-icons/md"
import { SiTrakt } from "react-icons/si"

export type Link = {
  name: string
  url: string
  icon: JSX.Element
}

export const links = {
  about: [
    {
      name: "GitHub",
      url: "https://github.com/azbauer8",
      icon: <FaGithub className="mr-2 h-6 w-6" />,
    },
    {
      name: "Email",
      url: "mailto:hi@byzach.dev",
      icon: <MdAlternateEmail className="mr-2 h-6 w-6" />,
    },
    {
      name: "Resume",
      url: "/Resume.pdf",
      icon: <HiDocumentArrowDown className="mr-2 h-6 w-6" />,
    },
  ],
  socials: [
    {
      name: "Last.fm",
      url: "https://www.last.fm/user/zacharlatanz",
      icon: <FaSquareLastfm className="mr-2 h-6 w-6" />,
    },
    {
      name: "Trakt",
      url: "https://trakt.tv/users/zacharlatan",
      icon: <SiTrakt className="mr-2 h-6 w-6" />,
    },
  ],
}
