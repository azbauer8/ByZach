"use client"

import { usePathname } from "next/navigation"
import { cn } from "@/utils/tailwind/cn"

export default function NavLink({
  link,
  children,
}: {
  link: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const active = pathname === link
  return (
    <div
      className={cn(
        "hover:!border-default1 hover:bg-default2 flex  size-full items-center gap-3 rounded-md border  !border-transparent px-2 py-1.5 hover:text-primary",
        active && "!border-default1 bg-default2 text-primary"
      )}
    >
      {children}
    </div>
  )
}
