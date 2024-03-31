"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function ThoughtItem({
  title,
  link,
  linkTitle,
}: {
  title: string
  link: string
  linkTitle: string
}) {
  const pathname = usePathname()

  return (
    <Link
      href={link}
      prefetch
      className={cn(
        "flex space-x-3 border-b border-accent px-3.5 py-3 text-sm hover:cursor-pointer hover:bg-muted lg:rounded-lg lg:border-none lg:py-2",
        {
          "bg-muted": pathname === link,
        }
      )}
    >
      <div className="flex flex-col justify-center space-y-1">
        <div className="line-clamp-3 font-medium text-foreground">{title}</div>
        <div className="line-clamp-1 text-opacity-60">
          <div className="flex items-center space-x-2">
            {/* <img
              src={icon}
              alt="Favicon for collabfund.com"
              className="h-4 w-4 rounded"
              width="16px"
              height="16px"
            /> */}
            <span>{linkTitle}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
