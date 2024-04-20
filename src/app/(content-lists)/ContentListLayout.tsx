"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { DynamicHeader } from "@/components/DynamicHeader"
import { SidebarToggle } from "@/components/Sidebar.client"

export default function ContentListLayout({
  id,
  type,
  children,
  isContentPage = false,
}: {
  id: string
  type: string
  children: React.ReactNode
  isContentPage?: boolean
}) {
  const [scroll, setScroll] = useState(0)
  const onScroll = () => {
    const scrollTop = document.getElementById(id)?.scrollTop
    scrollTop && setScroll(scrollTop)
  }
  return (
    <div
      className={cn(
        isContentPage
          ? "absolute top-0 max-h-dvh min-h-dvh w-80 -translate-x-full overflow-y-auto border-r-[0.5px] bg-content1 md:sticky md:translate-x-0"
          : "max-h-dvh min-h-dvh w-full overflow-y-auto md:w-80 md:border-r-[0.5px] md:bg-content1"
      )}
      id={id}
      onScroll={onScroll}
    >
      <DynamicHeader title={type} scrollPos={scroll}>
        <SidebarToggle />
      </DynamicHeader>
      {children}
    </div>
  )
}
