"use client"

import React, { useState } from "react"
import { siteConfig } from "@/config"

import SidebarLinks from "@/components/Sidebar/SidebarLinks"
import { StickyHeader } from "@/components/StickyHeader"
import ThemeToggle from "@/components/ThemeToggle"

export default function Sidebar() {
  const [scroll, setScroll] = useState(0)
  const onScroll = () => {
    const scrollTop = document.getElementById("sidebar")?.scrollTop
    scrollTop && setScroll(scrollTop)
  }
  return (
    <nav
      className="absolute top-0 z-30 flex max-h-dvh min-h-dvh w-60 min-w-60 max-w-60 -translate-x-full flex-col overflow-y-auto border-r-[0.5px] bg-accent xl:sticky xl:translate-x-0"
      id="sidebar"
      onScroll={onScroll}
    >
      <StickyHeader
        title={siteConfig.title}
        rightContent={<ThemeToggle iconSize={18} />}
        scrollPos={scroll}
      />
      <SidebarLinks />
    </nav>
  )
}
