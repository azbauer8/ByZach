"use client"

import { usePathname } from "next/navigation"

import { capitalize, cn } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import { SidebarToggle } from "@/components/Sidebar"

export function ListColumnHeader() {
  const pathname = usePathname()
  const title =
    pathname === "/"
      ? "Home"
      : pathname
        ? capitalize(pathname.split("/")[1])
        : ""
  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between border-b border-border px-3 py-2 backdrop-blur-lg",
        title && title === "Home" ? "bg-background/10" : "bg-accent/10"
      )}
    >
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-0.5">
          <SidebarToggle />
        </div>
        <Typography affects="small">{title}</Typography>
      </div>
    </div>
  )
}
