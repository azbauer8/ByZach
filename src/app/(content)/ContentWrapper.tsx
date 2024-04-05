import React from "react"

import { cn } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import { GoBack } from "@/components/Sidebar"

export function ContentWrapper({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="h-dvh flex-1 overflow-y-auto">
      <ContentHeader title={title} />
      <div className={cn("space-y-12", className)}>{children}</div>
    </div>
  )
}

function ContentHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between border-b border-border bg-accent/10 px-3 py-2 backdrop-blur-lg">
      <div className="flex items-center space-x-2">
        <GoBack />
        <Typography affects="small">{title}</Typography>
      </div>
    </div>
  )
}
