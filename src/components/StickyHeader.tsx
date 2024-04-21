"use client"

import React from "react"

import useScrollPosition from "@/lib/useScroll"
import { cn } from "@/lib/utils"
import { Text } from "@/components/ui/text"

export function StickyHeader({
  title,
  children,
  rightContent,
  scrollPos,
  isContentHeader,
  className,
}: {
  title: string
  children?: React.ReactNode
  rightContent?: React.ReactNode
  scrollPos?: number
  isContentHeader?: boolean
  className?: string
}) {
  const windowScroll = useScrollPosition()

  const scroll = scrollPos ?? windowScroll

  const bg = isContentHeader ? "bg-background/10" : "bg-content1/10"

  const breakpoint = isContentHeader ? 50 : 6

  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between  px-3 py-2",
        isContentHeader && "xl:hidden",
        scroll >= breakpoint && `border-b-[0.5px] ${bg} backdrop-blur-lg`,
        className
      )}
    >
      {children}
      <Text
        affects="small"
        className={cn(
          "absolute left-1/2 -translate-x-1/2 transition-all duration-200 ease-in-out",
          scroll >= breakpoint
            ? "translate-y-0 opacity-100"
            : "-translate-y-[10px] opacity-0"
        )}
      >
        {title}
      </Text>
      <div className="absolute right-3">{rightContent}</div>
    </div>
  )
}
