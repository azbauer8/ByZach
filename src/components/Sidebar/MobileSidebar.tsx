"use client"

import React, { useState } from "react"
import { siteConfig } from "@/config"
import { atom, useAtom } from "jotai"
import { PiSidebarSimpleDuotone, PiXBold } from "react-icons/pi"

import Button from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import SidebarLinks from "@/components/Sidebar/SidebarLinks"
import StickyHeader from "@/components/StickyHeader"

export const mobileSidebarState = atom(false)

export default function MobileSidebar() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useAtom(mobileSidebarState)
  const [scroll, setScroll] = useState(0)
  const onScroll = () => {
    const scrollTop = document.getElementById("mobile-sidebar")?.scrollTop
    scrollTop && setScroll(scrollTop)
  }
  return (
    <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
      <SheetContent
        className="flex w-80 flex-col overflow-y-auto border-r-[0.5px] sm:w-60"
        id="mobile-sidebar"
        onScroll={onScroll}
        side="left"
      >
        <StickyHeader
          title={siteConfig.title}
          scrollPos={scroll}
          leftContent={
            <Button
              onClick={() => setMobileSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <PiXBold size={14} />
            </Button>
          }
        />

        <SidebarLinks mobile />
      </SheetContent>
    </Sheet>
  )
}

export function MobileSidebarToggle() {
  const [, setMobileSidebarOpen] = useAtom(mobileSidebarState)
  return (
    <>
      <Button
        className="absolute left-2 xl:hidden"
        onClick={() => setMobileSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <PiSidebarSimpleDuotone size={24} />
      </Button>
      <div className="hidden xl:block" />
    </>
  )
}
