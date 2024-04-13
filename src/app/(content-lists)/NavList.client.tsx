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
        "hover:!border-default hover:bg-default-100 hover:text-primary  flex size-full items-center gap-3 rounded-md  border !border-transparent py-1.5 px-2",
        active && "!border-default bg-default-100 text-primary"
      )}
    >
      {children}
    </div>
  )
}
