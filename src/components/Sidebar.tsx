"use client"

import { Fragment } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { siteConfig, siteLinks } from "@/config"
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
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
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

export const sidebarAtom = atom(false)

export function SidebarToggle() {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-fit p-2 lg:hidden"
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      <PiSidebarSimple size={22} />
    </Button>
  )
}

export function Sidebar() {
  return (
    <>
      <nav className="absolute top-0 z-30 flex max-h-dvh min-h-dvh w-56 -translate-x-full flex-col gap-5 border-r border-border bg-accent p-3 transition duration-200 ease-in-out lg:sticky lg:translate-x-0">
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
  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent
        side="left"
        className="flex w-80 flex-col border-border bg-accent sm:w-72 md:w-64 lg:w-56"
      >
        <SheetHeader className="pb-0">
          <div className="flex w-full items-center justify-between">
            <SheetTitle>{siteConfig.urlTitle}</SheetTitle>
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

  const [SheetCloseWrapper, shetCloseWrapperProps] = mobile
    ? [SheetClose, { asChild: true }]
    : [Fragment, {}]

  return (
    <div className={cn("flex-1 space-y-1 overflow-y-auto")}>
      {sidebarLinks.map((link) => (
        <SheetCloseWrapper {...shetCloseWrapperProps} key={link.href}>
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-focused active:bg-focused",
              {
                "bg-muted hover:bg-muted active:bg-muted":
                  link.href === "/"
                    ? pathname === link.href
                    : pathname?.startsWith(link.href),
              }
            )}
            prefetch
          >
            {link.icon}
            <span className="flex-1">{link.name}</span>
          </Link>
        </SheetCloseWrapper>
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
          className="group flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-focused active:bg-focused"
        >
          {link.icon}
          <span className="flex gap-0.5">
            {link.name}
            <LuArrowUpRight
              size={12}
              className="opacity-0 group-hover:opacity-100 group-active:opacity-100"
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
          className="group flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-focused active:bg-focused"
        >
          {link.icon}
          <span className="flex gap-0.5">
            {link.name}
            <LuArrowUpRight
              size={12}
              className="opacity-0 group-hover:opacity-100 group-active:opacity-100"
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
      asChild
      variant="outline"
      className="gap-1.5 hover:bg-focused hover:text-foreground active:bg-focused active:text-foreground"
    >
      <a href={siteLinks.source} target="_blank">
        <FaGithub className="size-4" />
        Source
      </a>
    </Button>
  )
}

export function GoBack() {
  const router = useRouter()
  const path = usePathname()
  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-fit p-2 lg:hidden"
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-fit p-1.5 hover:bg-focused active:bg-focused"
        >
          {theme === "light" ? (
            <PiSunDuotone size={16} />
          ) : theme === "dark" ? (
            <PiMoonStarsDuotone size={16} />
          ) : (
            <PiMonitorDuotone size={16} />
          )}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="gap-1.5 text-xs"
        >
          <PiSunDuotone size={16} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="gap-1.5 text-xs"
        >
          <PiMoonStarsDuotone size={16} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="gap-1.5 text-xs"
        >
          <PiMonitorDuotone size={16} />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
