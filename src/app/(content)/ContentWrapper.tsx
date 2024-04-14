import React from "react"
import { cn } from "@/utils/tailwind/cn"

import "@/styles/prose.css"

import { PageHeader } from "@/components/StickyHeader"

export function ContentWrapper({
  title,
  type,
  children,
  className,
}: {
  title: string
  type: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <>
      <PageHeader title={title} type={type} />
      <div className={cn("space-y-2 pb-8 pt-12", className)}>{children}</div>
    </>
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
    <div className="absolute top-0 max-h-dvh min-h-dvh w-80 -translate-x-full overflow-y-auto border-r-[0.5px] bg-content1 md:sticky md:translate-x-0">
      <PageHeader title={title} />
      <div className="flex flex-col gap-1 p-3"> {list}</div>
    </div>
  )
}
