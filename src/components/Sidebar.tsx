"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { siteConfig } from "@/config"
import { ArrowLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { useAtom } from "jotai"
import {
  FaBrain,
  FaFire,
  FaHouse,
  FaLaptopCode,
  FaToolbox,
} from "react-icons/fa6"

import { sidebarAtom } from "@/lib/store"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"

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

export function SidebarToggle() {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-fit p-2 lg:hidden"
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      <HamburgerMenuIcon />
    </Button>
  )
}

export function Sidebar() {
  return (
    <nav className="absolute flex max-h-dvh min-h-dvh w-56 -translate-x-full flex-col gap-7 border-r border-border bg-accent p-3 transition duration-200 ease-in-out lg:relative lg:translate-x-0">
      <div className="flex items-center justify-between pl-3">
        <h1 className="text-sm font-bold">{siteConfig.urlShortened}</h1>
        <ThemeToggle />
      </div>
      <SidebarLinks />
    </nav>
  )
}

export function MobileSidebar() {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent
        side="left"
        className="w-80 border-border bg-accent sm:w-72 md:w-64 lg:w-56"
      >
        <SheetHeader>
          <div className="flex w-full items-center justify-between">
            <SheetTitle>{siteConfig.urlShortened}</SheetTitle>
            <ThemeToggle />
          </div>
        </SheetHeader>
        <SidebarLinks mobile />
      </SheetContent>
    </Sheet>
  )
}

function SidebarLinks({ mobile }: { mobile?: boolean }) {
  const pathname = usePathname()
  const [, setSidebarOpen] = useAtom(sidebarAtom)

  return (
    <div className="flex-1 space-y-1 overflow-y-auto">
      {sidebarLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          prefetch
          className={cn(
            "flex items-center space-x-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
            {
              "bg-muted text-foreground":
                link.href === "/"
                  ? pathname === link.href
                  : pathname.includes(link.href),
            }
          )}
          onClick={() => mobile && setSidebarOpen(false)}
        >
          {link.icon}
          <span className="flex-1">{link.name}</span>
        </Link>
      ))}
    </div>
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
      onClick={() => router.push(path.substring(0, path.indexOf("/", 1)))}
    >
      <ArrowLeftIcon />
    </Button>
  )
}
