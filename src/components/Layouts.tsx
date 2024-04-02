import React from "react"

import { cn } from "@/lib/utils"
import { Dots } from "@/components/ui/bg-patterns"
import { GoBack, SidebarToggle } from "@/components/Sidebar"

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Dots className="flex max-h-dvh min-h-dvh w-full flex-col overflow-y-auto">
      <div className="z-10">
        <ColumnHeader title="Home" />
        <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 md:px-8">
          {children}
        </div>
      </div>
    </Dots>
  )
}

export function ListLayout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Dots className="size-full">
      <div className="relative max-h-dvh min-h-dvh w-full overflow-y-auto border-r border-border bg-accent transition-all duration-200 ease-in-out lg:w-80 xl:w-96">
        <ColumnHeader title={title} />
        <div className="lg:space-y-1 lg:p-3">{children}</div>
      </div>
    </Dots>
  )
}

export function ContentLayout({
  title,
  type,
  list,
  children,
}: {
  title: string
  type: string
  list: JSX.Element
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full bg-background">
      <div className="absolute h-dvh -translate-x-full overflow-y-auto border-r border-border bg-accent  transition duration-200 ease-in-out lg:relative lg:w-80 lg:translate-x-0 xl:w-96">
        <ColumnHeader title={type} />
        <div className="lg:space-y-1 lg:p-3">{list}</div>
      </div>
      <div className="h-dvh flex-1 overflow-y-auto">
        <ColumnHeader title={title} isContent />
        <div className="mx-auto max-w-3xl px-5 py-12 2xl:px-0">{children}</div>
      </div>
    </div>
  )
}

export default function ColumnHeader({
  title,
  isContent,
}: {
  title: string
  isContent?: boolean
}) {
  return (
    <div
      className={cn(
        "filter-blur sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between border-b border-border px-3 py-2 backdrop-blur-lg backdrop-filter",
        title === "Home" ? "bg-background/10" : "bg-accent/10"
      )}
    >
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-0.5">
          <SidebarToggle />
          {isContent && <GoBack />}
        </div>
        <h2 className="text-sm font-bold">{title}</h2>
      </div>
    </div>
  )
}
