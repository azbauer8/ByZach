"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function ListItem({
  title,
  link,
  linkTitle,
}: {
  title: string
  link?: string
  linkTitle?: string
  icon?: string
}) {
  const pathname = usePathname()

  return (
    <Link
      href={link}
      prefetch
      className={cn(
        "flex space-x-3 border-b border-accent px-3.5 py-3 text-sm hover:cursor-pointer hover:bg-muted lg:rounded-lg lg:border-none lg:py-2",
        pathname === link && "bg-muted"
      )}
    >
      <div className="flex flex-col justify-center space-y-1 text-muted-foreground">
        <div
          className={cn(
            "line-clamp-3 font-medium",
            pathname === link && "text-foreground"
          )}
        >
          {title}
        </div>
        <div className="line-clamp-1 text-opacity-60">
          <div className="flex items-center space-x-2">
            <span>{linkTitle}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
