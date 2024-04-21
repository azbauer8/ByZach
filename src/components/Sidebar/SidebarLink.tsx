"use client"

import { usePathname } from "next/navigation"
import { useAtom } from "jotai"
import { PiArrowUpRightBold } from "react-icons/pi"

import { cn } from "@/lib/utils"
import { sidebarAtom } from "@/components/Sidebar/Sidebar"

export default function SidebarLink({
  link,
  isMobile,
  isExternal,
}: {
  link: {
    name: string
    href: string
    icon: JSX.Element
  }
  isMobile?: boolean
  isExternal?: boolean
}) {
  const pathname = usePathname()
  const [, setSidebarOpen] = useAtom(sidebarAtom)
  const active =
    link.href === "/" ? pathname === link.href : pathname.startsWith(link.href)

  return (
    <div
      onClick={() => isMobile && setSidebarOpen(false)}
      className={cn(
        "flex size-full items-center gap-3 rounded-lg px-2 py-1.5 font-medium hover:bg-content2 active:bg-content2",
        active && "bg-content2"
      )}
    >
      <div className={cn(active ? "text-primary" : "text-default3")}>
        {link.icon}
      </div>
      <div className="flex flex-1 items-center justify-between">
        {link.name}
        {isExternal && (
          <PiArrowUpRightBold
            size={14}
            strokeWidth={8}
            className="text-default3"
          />
        )}
      </div>
    </div>
  )
}
