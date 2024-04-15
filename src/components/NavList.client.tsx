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
        "flex size-full items-center  gap-3 rounded-md border !border-transparent px-2  py-1.5 hover:!border-default1 hover:bg-content2 active:!border-default1 active:bg-content2",
        active && "!border-default1 bg-content2 text-primary"
      )}
    >
      {children}
    </div>
  )
}
