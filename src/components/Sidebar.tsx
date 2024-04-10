import Link from "next/link"
import { siteConfig, siteLinks } from "@/config"
import {
  FaBrain,
  FaFire,
  FaHouse,
  FaLaptopCode,
  FaToolbox,
} from "react-icons/fa6"
import { LuArrowUpRight } from "react-icons/lu"

import { Typography } from "@/components/ui/typography"
import {
  MobileSidebar,
  MobileSidebarLink,
  SidebarLink,
  ThemeToggle,
} from "@/components/Sidebar.client"
import StickyHeader from "@/components/StickyHeader"

const sidebarLinks = [
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
] as const

export default function Sidebar() {
  return (
    <>
      <nav className="absolute top-0 z-30 flex max-h-dvh min-h-dvh w-56 -translate-x-full flex-col overflow-y-auto border-r-[0.5px] bg-content1 transition duration-200 ease-in-out lg:sticky lg:translate-x-0">
        <StickyHeader className="bg-content1/10 pl-3">
          <Typography affects="small">{siteConfig.urlTitle}</Typography>
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
    <div className="flex-1 space-y-5 p-3 pt-3 text-sm">
      <div className="flex flex-col gap-0.5">
        {sidebarLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            {mobile ? (
              <MobileSidebarLink link={link} />
            ) : (
              <SidebarLink link={link} />
            )}
          </Link>
        ))}
      </div>
      <ExternalSidebarLinks />
    </div>
  )
}

function ExternalSidebarLinks() {
  return (
    <>
      <div className="flex flex-col gap-2.5">
        <Typography affects="small" className="pl-2">
          Social
        </Typography>
        <div className="flex flex-col gap-0.5">
          {siteLinks.social.map((link) => (
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
          {siteLinks.work.map((link) => (
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
    </>
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
    <div className="group flex size-full  items-center gap-3 rounded-md border border-transparent  px-2 py-1.5 hover:border-default hover:bg-default-100 hover:text-primary">
      <div className="text-default-500">{link.icon}</div>
      <div className="flex flex-1 items-start gap-0.5">
        {link.name}
        <LuArrowUpRight
          size={13}
          className="rotate-12 opacity-0 group-hover:opacity-100 group-active:opacity-100"
        />
      </div>
    </div>
  )
}
