"use client"

import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config"
import { cn } from "@/utils/tailwind/cn"
import { atom, useAtom } from "jotai"
import { FaXmark } from "react-icons/fa6"
import { PiSidebarSimple } from "react-icons/pi"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { DynamicHeader } from "@/components/DynamicHeader"
import ThemeToggle from "@/components/ThemeToggle"

const sidebarAtom = atom(false)

export function SidebarToggle() {
  const [, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <>
      <Button
        className="absolute left-2 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <PiSidebarSimple size={22} />
      </Button>
      <div className="hidden lg:block" />
    </>
  )
}

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [scroll, setScroll] = useState(0)
  const onScroll = () => {
    const scrollTop = document.getElementById("sidebar")?.scrollTop
    scrollTop && setScroll(scrollTop)
  }
  return (
    <nav
      className="absolute top-0 z-30 flex max-h-dvh min-h-dvh w-56 min-w-56 max-w-56 -translate-x-full flex-col overflow-y-auto border-r-[0.5px] bg-content1 lg:sticky lg:translate-x-0"
      id="sidebar"
      onScroll={onScroll}
    >
      <DynamicHeader
        title={siteConfig.title}
        rightContent={<ThemeToggle />}
        scrollPos={scroll}
      />
      {children}
    </nav>
  )
}

export function MobileSidebar({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom)
  const [scroll, setScroll] = useState(0)
  const onScroll = () => {
    const scrollTop = document.getElementById("mobile-sidebar")?.scrollTop
    scrollTop && setScroll(scrollTop)
  }
  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent
        className="flex w-80 flex-col overflow-y-auto border-r-[0.5px] sm:w-72 md:w-64 lg:w-56"
        id="mobile-sidebar"
        onScroll={onScroll}
        side="left"
      >
        <DynamicHeader
          title={siteConfig.title}
          rightContent={<ThemeToggle />}
          scrollPos={scroll}
        >
          <Button onClick={() => setSidebarOpen(false)}>
            <FaXmark size={14} />
          </Button>
        </DynamicHeader>
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
        "hover:!border-default1 hover:bg-default2 flex  size-full items-center gap-3 rounded-md border  !border-transparent px-2 py-1.5 hover:text-primary",
        active && "!border-default1 bg-default2 text-primary"
      )}
    >
      <div className={cn(active ? "text-primary" : "text-default3")}>
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
        "hover:!border-default1 hover:bg-default2 flex  size-full items-center gap-3 rounded-md border  !border-transparent px-2 py-1.5 hover:text-primary",
        active && "!border-default1 bg-default2 text-primary"
      )}
    >
      <div className={cn(active ? "text-primary" : "text-default3")}>
        {link.icon}
      </div>
      {link.name}
    </div>
  )
}
