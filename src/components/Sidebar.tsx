"use client"

import { useEffect, useMemo, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { siteConfig, siteLinks } from "@/config"
import { Button } from "@nextui-org/button"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown"
import { Listbox, ListboxItem } from "@nextui-org/listbox"
import { atom, useAtom } from "jotai"
import { useTheme } from "next-themes"
import {
  FaBrain,
  FaChevronLeft,
  FaFire,
  FaHouse,
  FaLaptopCode,
  FaToolbox,
  FaXmark,
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

const sidebarAtom = atom(false)

export function SidebarToggle() {
  const [, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <>
      <Button
        className="lg:hidden"
        isIconOnly
        size="sm"
        variant="light"
        onPress={() => setSidebarOpen(true)}
        disableRipple
      >
        <PiSidebarSimple size={22} />
      </Button>
      <div className="hidden lg:block" />
    </>
  )
}

export function Sidebar() {
  return (
    <>
      <nav className="absolute top-0 z-30 flex max-h-dvh min-h-dvh w-56 -translate-x-full flex-col overflow-y-auto border-r-[0.5px] bg-content1 transition duration-200 ease-in-out lg:sticky lg:translate-x-0">
        <StickyHeader className="bg-content1/10 pl-3">
          <Typography affects="small">{siteConfig.urlTitle}</Typography>
          <ThemeToggle />
        </StickyHeader>
        <SidebarLinks />
      </nav>
      <MobileSidebar />
    </>
  )
}

export function MobileSidebar() {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <Sheet
      isOpen={sidebarOpen}
      onOpenChange={setSidebarOpen}
      backdrop="opaque"
      side="left"
      className="w-80 sm:w-72 md:w-64 lg:w-56"
    >
      <SheetContent>
        <StickyHeader className="bg-content1/10">
          <div className="flex items-center space-x-1.5">
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="rounded-md p-1.5 hover:bg-content2"
            >
              <FaXmark size={14} />
            </button>
            <Typography affects="small">{siteConfig.title}</Typography>
          </div>
          <ThemeToggle />
        </StickyHeader>
        <SidebarLinks />
      </SheetContent>
    </Sheet>
  )
}

function SidebarLinks() {
  const pathname = usePathname()
  const [, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <div className={cn("flex-1 space-y-1 p-3 pt-3")}>
      <Listbox
        aria-label="Navigation Links"
        variant="faded"
        color="primary"
        className={cn("p-0")}
      >
        {sidebarLinks.map((link) => {
          const active =
            link.href === "/"
              ? pathname === link.href
              : pathname?.startsWith(link.href)
          return (
            <ListboxItem
              key={link.href}
              href={link.href}
              textValue={link.name}
              onPress={() => setSidebarOpen(false)}
              className={cn(
                active && "border-default bg-default-100 text-primary"
              )}
              startContent={
                <div
                  className={cn(active ? "text-primary" : "text-default-500")}
                >
                  {link.icon}
                </div>
              }
            >
              {link.name}
            </ListboxItem>
          )
        })}
      </Listbox>
      <Typography affects="small" className="px-2 pb-2 pt-5">
        Socials
      </Typography>
      <Listbox
        aria-label="Navigation Links"
        variant="faded"
        color="primary"
        className="p-0"
      >
        {siteLinks.social.map((link) => {
          return (
            <ListboxItem
              key={link.href}
              href={link.href}
              textValue={link.name}
              startContent={<div className="text-default-500">{link.icon}</div>}
            >
              <span className="flex gap-0.5">
                {link.name}
                <LuArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 group-active:opacity-100"
                />
              </span>
            </ListboxItem>
          )
        })}
      </Listbox>
      <Typography affects="small" className="px-2 pb-2 pt-5">
        Work
      </Typography>
      <Listbox
        aria-label="Navigation Links"
        variant="faded"
        color="primary"
        className="p-0"
      >
        {siteLinks.work.map((link) => {
          return (
            <ListboxItem
              key={link.href}
              href={link.href}
              textValue={link.name}
              startContent={<div className="text-default-500">{link.icon}</div>}
            >
              <span className="flex gap-0.5">
                {link.name}
                <LuArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 group-active:opacity-100"
                />
              </span>
            </ListboxItem>
          )
        })}
      </Listbox>
    </div>
  )
}

export function GoBack() {
  const router = useRouter()
  const path = usePathname()
  return (
    <>
      <Button
        className="md:hidden"
        isIconOnly
        size="sm"
        variant="light"
        onClick={() =>
          path ? router.push(path.substring(0, path.indexOf("/", 1))) : null
        }
        disableRipple
      >
        <FaChevronLeft />
      </Button>
      <div className="hidden md:block" />
    </>
  )
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()
  const [selectedKeys, setSelectedKeys] = useState(new Set([theme ?? "system"]))

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button size="sm" isIconOnly variant="light" isDisabled>
        <PiMonitorDuotone size={18} />

        <span className="sr-only">Toggle theme loading</span>
      </Button>
    )
  }
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" isIconOnly variant="light" disableRipple>
          {theme === "light" ? (
            <PiSunDuotone size={18} />
          ) : theme === "dark" ? (
            <PiMoonStarsDuotone size={18} />
          ) : theme === "system" ? (
            <PiMonitorDuotone size={18} />
          ) : null}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
      >
        <DropdownItem
          key="light"
          onClick={() => setTheme("light")}
          startContent={<PiSunDuotone size={16} />}
        >
          Light
        </DropdownItem>
        <DropdownItem
          key="dark"
          onClick={() => setTheme("dark")}
          startContent={<PiMoonStarsDuotone size={16} />}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          key="system"
          onClick={() => setTheme("system")}
          startContent={<PiMonitorDuotone size={16} />}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
