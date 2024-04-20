"use client"

import React from "react"

import useScrollPosition from "@/lib/useScroll"
import { cn } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"

export function DynamicHeader({
  title,
  children,
  rightContent,
  scrollPos,
  isContentHeader,
  breakpoint = 6,
}: {
  title: string
  children?: React.ReactNode
  rightContent?: React.ReactNode
  scrollPos?: number
  isContentHeader?: boolean
  breakpoint?: number
}) {
  const windowScroll = useScrollPosition()

  const scroll = scrollPos ?? windowScroll

  const bg = isContentHeader ? "bg-background/10" : "bg-content1/10"

  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between  px-3 py-2",
        scroll >= breakpoint && `border-b-[0.5px] ${bg} backdrop-blur-lg`
      )}
    >
      {children}
      <Typography
        affects="small"
        className={cn(
          "absolute left-1/2 -translate-x-1/2 transition-all duration-200 ease-in-out",
          scroll >= breakpoint
            ? "translate-y-0 opacity-100"
            : "-translate-y-[10px] opacity-0"
        )}
      >
        {title}
      </Typography>
      <div className="absolute right-3">{rightContent}</div>
    </div>
  )
}
