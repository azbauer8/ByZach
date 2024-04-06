import React from "react"

import { cn } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import { GoBack } from "@/components/Sidebar"

import "@/styles/prose.css"

import { SidebarToggle } from "@/components/Sidebar"
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
    <>
      <ContentHeader title={title} />
      <div className={cn("space-y-12", className)}>{children}</div>
    </>
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

export function ContentListColumn({
  title,
  list,
}: {
  title: string
  list: JSX.Element
}) {
  return (
    <div className="absolute h-dvh -translate-x-full overflow-y-auto border-r border-border bg-accent  transition duration-200 ease-in-out lg:relative lg:w-80 lg:translate-x-0 xl:w-96">
      <StickyHeader className=" bg-accent/10">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-0.5">
            <SidebarToggle />
          </div>
          <Typography affects="small">{title}</Typography>
        </div>
      </StickyHeader>
      <div className="flex flex-col lg:gap-1 lg:p-3"> {list}</div>
    </div>
  )
}
