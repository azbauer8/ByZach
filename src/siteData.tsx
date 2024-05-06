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

export const siteMetadata = {
  title: "ByZach",
  description: `Zach Bauer's Personal Website`,
  favicon: "/favicon.png",
  here: "https://byzach.dev",
  hereShort: "byzach.dev",
}

export const pageMetadata = {
  home: {
    title: "Home",
    subtitle: "",
    link: "/",
    icon: <FaHandPeace size={16} />,
    sections: {
      header: {
        title: "Zach Bauer",
        subtitle: "Full Stack Developer",
      },
      about: `
        Hey there! I'm Zach. I'm currently working at [SIG](https://sig.com/) developing fullstack applications and internal tools for support teams. In my free time, I like messing around with new technologies. Mostly web dev stuff, but I'm interested in getting into mobile and desktop development too.
        \n\n
        This site is mainly for my own benefit to collect my scattered thoughts and findings in one place. But maybe you'll find something interesting!
      `,
      siteLinks: {
        title: "Links",
      },
      activity: {
        title: "Activity",
        subtitle: "I enjoy consuming media, sometimes.",
        socials: "Follow me on",
      },
    },
  },
  projects: {
    title: "Projects",
    subtitle: "My latest work and experiments.",
    link: "/projects",
    icon: <FaLaptop size={16} />,
  },
  thoughts: {
    title: "Thoughts",
    subtitle: "Poorly conveyed ideas about technology, design, and the web.",
    link: "/thoughts",
    icon: <FaBrain size={16} />,
  },
  snippets: {
    title: "Snippets",
    subtitle: "Bits of code I often refer back to.",
    link: "/snippets",
    icon: <FaCode size={16} />,
  },
  discoveries: {
    title: "Discoveries",
    subtitle: "Useful links I've found around the web.",
    link: "/discoveries",
    icon: <FaBookmark size={16} />,
  },
  uses: {
    title: "Uses",
    subtitle: "Devices, tools, and technologies I use on a daily basis.",
    link: "/uses",
    icon: <FaHammer size={16} />,
  },
}

export const externalLinks = {
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
}
