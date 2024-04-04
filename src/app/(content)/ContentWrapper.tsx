import React from "react"

import { Typography } from "@/components/ui/typography"
import { GoBack, SidebarToggle } from "@/components/Sidebar"

export function ContentWrapper({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="h-dvh flex-1 overflow-y-auto">
      <ContentHeader title={title} />
      <div className="mx-auto max-w-3xl px-5 py-12 2xl:px-0">{children}</div>
    </div>
  )
}

function ContentHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between border-b border-border bg-accent/10 px-3 py-2 backdrop-blur-lg">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-0.5">
          <SidebarToggle />
          <GoBack />
        </div>
        <Typography affects="small">{title}</Typography>
      </div>
    </div>
  )
}
