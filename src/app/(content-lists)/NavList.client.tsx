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
        "hover:bg-default-100 flex size-full  items-center gap-3 rounded-md border !border-transparent  px-2 py-1.5 hover:!border-default hover:text-primary",
        active && "bg-default-100 !border-default text-primary"
      )}
    >
      {children}
    </div>
  )
}
