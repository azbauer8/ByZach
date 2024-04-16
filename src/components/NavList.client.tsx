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
        "flex size-full items-center  gap-3 rounded-md px-2  py-1.5  hover:bg-content2 active:bg-content2",
        active && "bg-content2 text-primary"
      )}
    >
      {children}
    </div>
  )
}
