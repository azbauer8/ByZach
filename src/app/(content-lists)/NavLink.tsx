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

  return (
    <div
      className={cn(
        "nomobile:hover:bg-focused border-b border-accent px-3.5 py-3 hover:cursor-pointer active:bg-focused lg:rounded-lg lg:border-none lg:py-2",
        pathname === link && "bg-muted hover:bg-muted"
      )}
    >
      {children}
    </div>
  )
}
