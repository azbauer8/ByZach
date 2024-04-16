import Link from "next/link"
import { siteConfig } from "@/config"
import {
  FaAt,
  FaBrain,
  FaCode,
  FaFilePdf,
  FaFire,
  FaGithub,
  FaHouseChimney,
  FaLaptopCode,
  FaLinkedin,
  FaSpotify,
  FaSquareLastfm,
  FaToolbox,
} from "react-icons/fa6"
import { SiTrakt } from "react-icons/si"

import { Typography } from "@/components/ui/typography"
import {
  MobileSidebar,
  SidebarLink,
  SidebarWrapper,
} from "@/components/Sidebar.client"

const sidebarLinks = {
  site: [
    {
      name: "Home",
      href: "/",
      icon: <FaHouseChimney size={16} />,
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

  social: [
    {
      name: "GitHub",
      href: "https://github.com/azbauer8",
      icon: <FaGithub size={16} />,
    },
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
      <SidebarWrapper>
        <SidebarLinks />
      </SidebarWrapper>

      <MobileSidebar>
        <SidebarLinks mobile />
      </MobileSidebar>
    </>
  )
}

function SidebarLinks({ mobile }: { mobile?: boolean }) {
  return (
    <div className="flex-1 space-y-2 p-3 pt-0 text-sm">
      <Typography variant="h3" className="pl-1">
        {siteConfig.title}
      </Typography>
      <div className="space-y-5">
        <div className="flex flex-col gap-0.5">
          {sidebarLinks.site.map((link) => (
            <Link href={link.href} key={link.name}>
              <SidebarLink link={link} isMobile={mobile} />
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
                <SidebarLink link={link} isExternal />
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
                <SidebarLink link={link} isExternal />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
