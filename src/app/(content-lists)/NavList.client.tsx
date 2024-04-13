"use client"

import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

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
        "flex size-full items-center  gap-3 rounded-md border !border-transparent px-2  py-1.5 hover:!border-default hover:bg-default-100 hover:text-primary",
        active && "!border-default bg-default-100 text-primary"
      )}
    >
      {children}
    </div>
  )
}
