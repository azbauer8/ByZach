"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { MobileSidebarToggle } from "@/components/Sidebar/MobileSidebarToggle"
import { StickyHeader } from "@/components/StickyHeader"

export default function ContentListLayout({
  id,
  type,
  children,
}: {
  id: string
  type: string
  children: React.ReactNode
}) {
  const path = usePathname()
  const isContentPage = path.split("/").length === 3
  const [scroll, setScroll] = useState(0)
  const onScroll = () => {
    const scrollTop = document.getElementById(id)?.scrollTop
    scrollTop && setScroll(scrollTop)
  }
  return (
    <div
      className={cn(
        isContentPage
          ? "absolute top-0 max-h-dvh min-h-dvh w-80 -translate-x-full overflow-y-auto border-r-[0.5px] bg-content1 xl:sticky xl:translate-x-0"
          : "max-h-dvh min-h-dvh w-full overflow-y-auto xl:w-80 xl:border-r-[0.5px] xl:bg-content1"
      )}
      id={id}
      onScroll={onScroll}
    >
      <StickyHeader title={type} scrollPos={scroll}>
        <MobileSidebarToggle />
      </StickyHeader>
      {children}
    </div>
  )
}
