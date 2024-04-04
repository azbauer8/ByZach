"use client"

import { usePathname } from "next/navigation"

import { Typography } from "@/components/ui/typography"
import { SidebarToggle } from "@/components/Sidebar"
import Discoveries from "@/app/(content-lists)/discoveries/page"
import Projects from "@/app/(content-lists)/projects/page"
import Thoughts from "@/app/(content-lists)/thoughts/page"
import Uses from "@/app/(content-lists)/uses/page"

export function ContentListColumn() {
  const pathname = usePathname()
  const title = pathname?.split("/")[2]
  let list: JSX.Element | undefined = undefined
  if (pathname?.startsWith("/projects")) {
    list = <Projects />
  } else if (pathname?.startsWith("/thoughts")) {
    list = <Thoughts />
  } else if (pathname?.startsWith("/discoveries")) {
    list = <Discoveries />
  } else if (pathname?.startsWith("/uses")) {
    list = <Uses />
  }

  return (
    <>
      <div className="sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between border-b border-border bg-accent/10 px-3 py-2 backdrop-blur-lg">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-0.5">
            <SidebarToggle />
          </div>
          <Typography affects="small">{title}</Typography>
        </div>
      </div>
      {list && <div className="lg:space-y-1 lg:p-3">{list}</div>}
    </>
  )
}
