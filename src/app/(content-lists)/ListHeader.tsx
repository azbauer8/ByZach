"use client"

import { usePathname } from "next/navigation"

import { capitalize, cn } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import { SidebarToggle } from "@/components/Sidebar"
import StickyHeader from "@/components/StickyHeader"

export function ListColumnHeader() {
  const pathname = usePathname()
  const title =
    pathname === "/"
      ? "Home"
      : pathname
        ? capitalize(pathname.split("/")[1])
        : ""
  return (
    <StickyHeader
      className={cn(
        title && title === "Home" ? "bg-background/10" : "bg-accent/10"
      )}
    >
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-0.5">
          <SidebarToggle />
        </div>
        <Typography affects="small">{title}</Typography>
      </div>
    </StickyHeader>
  )
}
