"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { siteConfig, siteLinks } from "@/config"
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react"
import { atom, useAtom } from "jotai"
import { useTheme } from "next-themes"
import {
  FaBrain,
  FaChevronLeft,
  FaFire,
  FaGithub,
  FaHouse,
  FaLaptopCode,
  FaToolbox,
} from "react-icons/fa6"
import { LuArrowUpRight } from "react-icons/lu"
import {
  PiMonitorDuotone,
  PiMoonStarsDuotone,
  PiSidebarSimple,
  PiSunDuotone,
} from "react-icons/pi"

import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet"
import { Typography } from "@/components/ui/typography"

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

const sidebarAtom = atom(false)

export function SidebarToggle() {
  const [, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <Button className="lg:hidden" onPress={() => setSidebarOpen(true)}>
      <PiSidebarSimple size={22} />
    </Button>
  )
}

export function Sidebar() {
  return (
    <>
      <nav className="absolute top-0 z-30 flex max-h-dvh min-h-dvh w-56 -translate-x-full flex-col gap-5 border-r-[0.5px] border-separator bg-secondary p-3 transition duration-200 ease-in-out lg:sticky lg:translate-x-0">
        <div className="flex items-center justify-between pl-3">
          <Typography affects="small">{siteConfig.urlTitle}</Typography>
          <ThemeToggle />
        </div>
        <SidebarLinks />
        <SourceCode />
      </nav>
      <MobileSidebar />
    </>
  )
}

export function MobileSidebar() {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom)
  console.log("🚀 ~ MobileSidebar ~ sidebarOpen:", sidebarOpen)
  return (
    <Sheet
      isOpen={sidebarOpen}
      onOpenChange={setSidebarOpen}
      backdrop="blur"
      side="left"
    >
      <SheetContent className="flex w-80 flex-col border-r-[0.5px] border-separator bg-secondary sm:w-72 md:w-64 lg:w-56">
        <SheetHeader className="pb-0">
          <div className="flex w-full items-center justify-between">
            {siteConfig.urlTitle}
            <ThemeToggle />
          </div>
        </SheetHeader>
        <SidebarLinks mobile />
        <SourceCode />
      </SheetContent>
    </Sheet>
  )
}

function SidebarLinks({ mobile }: { mobile?: boolean }) {
  const pathname = usePathname()
  const [, setSidebarOpen] = useAtom(sidebarAtom)

  return (
    <div className={cn("flex-1 space-y-1 overflow-y-auto")}>
      {sidebarLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium text-muted hover:bg-tertiary active:bg-tertiary",
            {
              "bg-tint hover:bg-tint active:bg-tint":
                link.href === "/"
                  ? pathname === link.href
                  : pathname?.startsWith(link.href),
            }
          )}
          onClick={() => mobile && setSidebarOpen(false)}
          prefetch
        >
          {link.icon}
          <span className="flex-1 text-foreground">{link.name}</span>
        </Link>
      ))}
      <Typography affects="small" className="px-2 pb-2 pt-5">
        Socials
      </Typography>
      {siteLinks.social.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium text-muted hover:bg-tertiary active:bg-tertiary"
        >
          {link.icon}
          <span className="flex gap-0.5 text-foreground">
            {link.name}
            <LuArrowUpRight
              size={12}
              className="text-muted opacity-0 group-hover:opacity-100 group-active:opacity-100"
            />
          </span>
        </a>
      ))}
      <Typography affects="small" className="px-2 pb-2 pt-5">
        Work
      </Typography>
      {siteLinks.work.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium text-muted hover:bg-tertiary active:bg-tertiary"
        >
          {link.icon}
          <span className="flex gap-0.5 text-foreground">
            {link.name}
            <LuArrowUpRight
              size={12}
              className="text-muted opacity-0 group-hover:opacity-100 group-active:opacity-100"
            />
          </span>
        </a>
      ))}
    </div>
  )
}

function SourceCode() {
  return (
    <Button
      as="a"
      className="gap-1.5 hover:bg-tertiary active:bg-tertiary"
      href={siteLinks.source}
      target="_blank"
    >
      <FaGithub className="size-4" />
      Source
    </Button>
  )
}

export function GoBack() {
  const router = useRouter()
  const path = usePathname()
  return (
    <Button
      className="lg:hidden"
      onClick={() =>
        path ? router.push(path.substring(0, path.indexOf("/", 1))) : null
      }
    >
      <FaChevronLeft />
    </Button>
  )
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button>
          {theme === "light" ? (
            <PiSunDuotone size={16} />
          ) : theme === "dark" ? (
            <PiMoonStarsDuotone size={16} />
          ) : (
            <PiMonitorDuotone size={16} />
          )}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem
          onClick={() => setTheme("light")}
          className="gap-1.5 text-xs"
        >
          <PiSunDuotone size={16} />
          Light
        </DropdownItem>
        <DropdownItem
          onClick={() => setTheme("dark")}
          className="gap-1.5 text-xs"
        >
          <PiMoonStarsDuotone size={16} />
          Dark
        </DropdownItem>
        <DropdownItem
          onClick={() => setTheme("system")}
          className="gap-1.5 text-xs"
        >
          <PiMonitorDuotone size={16} />
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
