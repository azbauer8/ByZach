"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config"
import { Button } from "@nextui-org/button"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown"
import { atom, useAtom } from "jotai"
import { useTheme } from "next-themes"
import { FaXmark } from "react-icons/fa6"
import {
  PiMonitorDuotone,
  PiMoonStarsDuotone,
  PiSidebarSimple,
  PiSunDuotone,
} from "react-icons/pi"

import { cn } from "@/lib/utils"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Typography } from "@/components/ui/typography"
import StickyHeader from "@/components/StickyHeader"

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

export function MobileSidebar({ children }: { children: React.ReactNode }) {
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
        {children}
      </SheetContent>
    </Sheet>
  )
}

export function SidebarLink({
  link,
}: {
  link: {
    name: string
    href: string
    icon: JSX.Element
  }
}) {
  const pathname = usePathname()
  const active =
    link.href === "/" ? pathname === link.href : pathname?.startsWith(link.href)

  return (
    <div
      className={cn(
        "flex size-full items-center  gap-3 rounded-md border border-transparent px-2  py-1.5 hover:border-default hover:bg-default-100 hover:text-primary",
        active && "border-default bg-default-100 text-primary"
      )}
    >
      <div className={cn(active ? "text-primary" : "text-default-500")}>
        {link.icon}
      </div>
      {link.name}
    </div>
  )
}

export function MobileSidebarLink({
  link,
}: {
  link: {
    name: string
    href: string
    icon: JSX.Element
  }
}) {
  const pathname = usePathname()
  const [, setSidebarOpen] = useAtom(sidebarAtom)
  const active =
    link.href === "/" ? pathname === link.href : pathname?.startsWith(link.href)

  return (
    <div
      onClick={() => setSidebarOpen(false)}
      className={cn(
        "flex size-full items-center  gap-3 rounded-md border border-transparent px-2  py-1.5 hover:border-default hover:bg-default-100 hover:text-primary",
        active && "border-default bg-default-100 text-primary"
      )}
    >
      <div className={cn(active ? "text-primary" : "text-default-500")}>
        {link.icon}
      </div>
      {link.name}
    </div>
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
