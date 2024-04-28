"use client"

import useScrollPosition from "@/lib/useScroll"
import { cn } from "@/lib/utils"
import { Text } from "@/components/ui/text"

export default function ContentHeader({
  title,
  leftContent,
  rightContent,
  scrollPos,
  isContentHeader,
}: {
  title: string
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
  scrollPos?: number
  isContentHeader?: boolean
}) {
  const windowScroll = useScrollPosition()

  const scroll = scrollPos ?? windowScroll

  const bg = isContentHeader ? "bg-background" : "bg-accent"

  const breakpoint = isContentHeader ? 50 : 6

  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between  px-3 py-2",
        isContentHeader && "xl:hidden",
        scroll >= breakpoint && `border-b ${bg}`
      )}
    >
      {leftContent}
      <Text
        affects="small"
        className={cn(
          "absolute left-1/2 h-full max-w-[50vw] -translate-x-1/2 content-center truncate transition-all duration-200 ease-in-out",
          scroll >= breakpoint
            ? "translate-y-0 opacity-100"
            : "-translate-y-[10px] opacity-0"
        )}
      >
        {title}gggg
      </Text>
      <div className="absolute right-3">{rightContent}</div>
    </div>
  )
}
