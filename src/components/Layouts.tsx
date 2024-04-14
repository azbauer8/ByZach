import React from "react"
import { twcn } from "@/utils/tailwind/twc"

import "@/styles/prose.css"

import Link from "next/link"
import { cn } from "@/utils/tailwind/cn"
import { FaChevronLeft } from "react-icons/fa6"

import { Typography } from "@/components/ui/typography"
import { SidebarToggle } from "@/components/Sidebar.client"

export const PageLayout = twcn.div`mx-auto max-w-2xl px-4 py-12 md:px-8`

export const ContentListColumn = twcn.div`absolute top-0 max-h-dvh min-h-dvh w-80 -translate-x-full overflow-y-auto border-r-[0.5px] bg-content1 md:sticky md:translate-x-0`

export const StickyHeader = twcn.div`sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between border-b-[0.5px] px-3 py-2 backdrop-blur-lg`

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
      <PageHeader title={title} goBack={type} />
      <PageLayout className={className}>{children}</PageLayout>
    </>
  )
}

export function PageHeader({
  title,
  goBack,
}: {
  title?: string
  goBack?: string
}) {
  return (
    <StickyHeader className={cn(title ? "bg-content1/10" : "bg-background/10")}>
      {goBack ? (
        <Link
          href={`/${goBack}`}
          className="absolute left-2 flex items-center rounded-md p-1.5 text-sm text-primary hover:bg-default/40 md:hidden"
        >
          <FaChevronLeft size={15} />
          Back
        </Link>
      ) : (
        <SidebarToggle />
      )}

      <Typography
        affects="small"
        className="absolute left-1/2 -translate-x-1/2"
      >
        {title}
      </Typography>
    </StickyHeader>
  )
}
