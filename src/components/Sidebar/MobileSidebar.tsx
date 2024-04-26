"use client"

import React from "react"
import { siteConfig } from "@/config"
import { atom, useAtom } from "jotai"
import { PiSidebarSimpleDuotone, PiXBold } from "react-icons/pi"

import Button from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Text } from "@/components/ui/text"
import SidebarLinks from "@/components/Sidebar/SidebarLinks"
import StickyHeader from "@/components/StickyHeader"

export const mobileSidebarState = atom(false)

export default function MobileSidebar() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useAtom(mobileSidebarState)
  return (
    <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
      <SheetContent
        className="flex w-80 flex-col overflow-y-auto border-r-[0.5px] sm:w-60"
        side="left"
      >
        <StickyHeader className="justify-end bg-accent">
          <Text
            affects="small"
            className="absolute left-1/2 max-w-[50vw] -translate-x-1/2 truncate"
          >
            {siteConfig.title}
          </Text>
          <Button
            onClick={() => setMobileSidebarOpen(false)}
            aria-label="Close sidebar"
            tabIndex={-1}
          >
            <PiXBold size={14} />
          </Button>
        </StickyHeader>

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
        className="xl:hidden"
        onClick={() => setMobileSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <PiSidebarSimpleDuotone size={24} />
      </Button>
      <div className="hidden xl:block" />
    </>
  )
}
