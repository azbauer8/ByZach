import Link from "next/link"
import { siteConfig } from "@/config"
import {
  FaAt,
  FaBrain,
  FaFilePdf,
  FaFire,
  FaGithubAlt,
  FaHouse,
  FaLaptopCode,
  FaLastfm,
  FaLinkedin,
  FaSpotify,
  FaToolbox,
} from "react-icons/fa6"
import { FiArrowUpRight } from "react-icons/fi"
import { SiTrakt } from "react-icons/si"

import { Typography } from "@/components/ui/typography"
import { StickyHeader } from "@/components/Layouts"
import {
  MobileSidebar,
  MobileSidebarLink,
  SidebarLink,
} from "@/components/Sidebar.client"
import ThemeToggle from "@/components/ThemeToggle"

const sidebarLinks = {
  site: [
    {
      name: "Home",
      href: "/",
      icon: <FaHouse size={16} />,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <FaLaptopCode size={16} />,
    },
    {
      name: "Thoughts",
      href: "/thoughts",
      icon: <FaBrain size={16} />,
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
} as const

export default function Sidebar() {
  return (
    <>
      <nav className="absolute top-0 z-30 flex max-h-dvh min-h-dvh w-56 min-w-56 max-w-56 -translate-x-full flex-col overflow-y-auto border-r-[0.5px] bg-content1 lg:sticky lg:translate-x-0">
        <StickyHeader className="bg-content1/10 pl-3">
          <Typography affects="small">{siteConfig.title}</Typography>
          <ThemeToggle />
        </StickyHeader>
        <SidebarLinks />
      </nav>

      <MobileSidebar>
        <SidebarLinks mobile />
      </MobileSidebar>
    </>
  )
}

function SidebarLinks({ mobile }: { mobile?: boolean }) {
  return (
    <div className="flex-1 space-y-5 p-3 text-sm">
      <div className="flex flex-col gap-0.5">
        {sidebarLinks.site.map((link) => (
          <Link href={link.href} key={link.name}>
            {mobile ? (
              <MobileSidebarLink link={link} />
            ) : (
              <SidebarLink link={link} />
            )}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2.5">
        <Typography affects="small" className="pl-2">
          Social
        </Typography>
        <div className="flex flex-col gap-0.5">
          {sidebarLinks.social.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalSidebarLink link={link} />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <Typography affects="small" className="pl-2">
          Work
        </Typography>
        <div className="flex flex-col gap-0.5">
          {sidebarLinks.work.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalSidebarLink link={link} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function ExternalSidebarLink({
  link,
}: {
  link: {
    name: string
    href: string
    icon: JSX.Element
  }
}) {
  return (
    <div className="group flex size-full  items-center gap-3 rounded-md border !border-transparent  px-2 py-1.5 hover:!border-default hover:bg-default-100 hover:text-primary">
      <div className="text-default-500">{link.icon}</div>
      <div className="flex flex-1 items-start">
        {link.name}
        <FiArrowUpRight
          size={13}
          className="opacity-0 group-hover:opacity-100 group-active:opacity-100"
        />
      </div>
    </div>
  )
}
