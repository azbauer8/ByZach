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
        "px-3.5 py-3 hover:cursor-pointer lg:rounded-lg lg:border-none lg:py-2",
        pathname === link
          ? "bg-focus hover:bg-focus active:bg-focus"
          : "hover:bg-content2 active:bg-content2"
      )}
    >
      {children}
    </div>
  )
}
