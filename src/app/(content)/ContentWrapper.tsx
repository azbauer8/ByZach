import React from "react"

import { cn } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import { GoBack } from "@/components/Sidebar"

import "@/styles/prose.css"

import StickyHeader from "@/components/StickyHeader"

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
    <StickyHeader className="bg-accent/10">
      <div className="flex items-center space-x-2">
        <GoBack />
        <Typography affects="small">{title}</Typography>
      </div>
    </StickyHeader>
  )
}
