"use client"

import React, { useState } from "react"
import { siteConfig } from "@/config"
import { useAtom } from "jotai"
import { PiXBold } from "react-icons/pi"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { sidebarAtom } from "@/components/Sidebar/SidebarClientWrapper"
import { StickyHeader } from "@/components/StickyHeader"
import ThemeToggle from "@/components/ThemeToggle"

export default function MobileSidebar({
  children,
}: {
  children: React.ReactNode
}) {
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
        <StickyHeader
          title={siteConfig.title}
          rightContent={<ThemeToggle iconSize={18} />}
          scrollPos={scroll}
        >
          <Button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <PiXBold size={14} />
          </Button>
        </StickyHeader>
        {children}
      </SheetContent>
    </Sheet>
  )
}
