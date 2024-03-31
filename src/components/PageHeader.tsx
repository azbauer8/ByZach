"use client"

import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { GoBack, SidebarToggle } from "@/components/Sidebar"

export default function PageHeader({
  title,
  isContent,
}: {
  title?: string
  isContent?: boolean
}) {
  const pathname = usePathname()
  const secondSlashIndex = pathname.indexOf("/", pathname.indexOf("/") + 1)
  const pageTitle =
    title ??
    pathname.charAt(1).toUpperCase() +
      pathname.slice(2, secondSlashIndex !== -1 ? secondSlashIndex : undefined)
  return (
    <div
      className={cn(
        "filter-blur sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between border-b border-border px-3 py-2 backdrop-blur-lg backdrop-filter",
        title === "Home" ? "bg-background/10" : "bg-accent/10"
      )}
    >
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-0.5">
          <SidebarToggle />
          {isContent && <GoBack />}
        </div>
        <h2 className="text-sm font-bold">{pageTitle}</h2>
      </div>
    </div>
  )
}
