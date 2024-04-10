import React from "react"

import { cn } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"

import "@/styles/prose.css"

import { GoBack, SidebarToggle } from "@/components/Sidebar.client"
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
      <div className={cn("space-y-2 pb-8 pt-12", className)}>{children}</div>
    </>
  )
}

function ContentHeader({ title }: { title: string }) {
  return (
    <StickyHeader className="bg-content1/10">
      <GoBack />
      <Typography affects="small">{title}</Typography>
      <div />
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
    <div className="absolute top-0 max-h-dvh min-h-dvh w-80 -translate-x-full overflow-y-auto border-r-[0.5px]  bg-content1 transition duration-200 ease-in-out md:sticky md:translate-x-0">
      <StickyHeader className=" bg-content1/10">
        <SidebarToggle />
        <Typography affects="small">{title}</Typography>
        <div />
      </StickyHeader>
      <div className="flex flex-col gap-1 p-3"> {list}</div>
    </div>
  )
}
