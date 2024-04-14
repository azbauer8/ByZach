"use client"

import React, { useState } from "react"
import { cn } from "@/utils/tailwind/cn"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import { Typography } from "@/components/ui/typography"

export function DynamicHeader({
  title,
  children,
  rightContent,
  scrollPos,
}: {
  title: string
  children?: React.ReactNode
  rightContent?: React.ReactNode
  scrollPos?: number
}) {
  const [windowScroll, setWindowScroll] = useState(window?.scrollY ?? 0)
  useScrollPosition(({ currPos }) => {
    setWindowScroll(Math.abs(currPos.y))
  }, [])

  const scroll = scrollPos !== undefined ? scrollPos : windowScroll

  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between bg-content1/10 px-3 py-2 backdrop-blur-lg",
        scroll >= 77 && "border-b-[0.5px]"
      )}
    >
      {children}
      <Typography
        affects="small"
        className={cn(
          "absolute left-1/2 -translate-x-1/2 transition-opacity duration-200 ease-in-out",
          scroll >= 77 ? "opacity-100" : "opacity-0"
        )}
      >
        {title}
      </Typography>
      <div className="absolute right-3">{rightContent}</div>
    </div>
  )
}
