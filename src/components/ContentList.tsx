"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { capitalize, cn, formatDate } from "@/lib/utils"
import { Text } from "@/components/ui/text"
import { MobileSidebarToggle } from "@/components/Sidebar/MobileSidebar"
import { StickyHeader } from "@/components/StickyHeader"

export default function ContentList({
  id,
  type,
  links,
}: {
  id: string
  type: "projects" | "discoveries" | "thoughts" | "uses" | "snippets"
  links: {
    slug: string
    metadata: {
      title: string
      subtitle?: string
      category?: string | null
      dateTime?: string | null
    }
  }[]
}) {
  const path = usePathname()
  const isContentPage = path.split("/").length === 3
  const title = capitalize(type)

  const [scroll, setScroll] = useState(0)
  const onScroll = () => {
    const scrollTop = document.getElementById(id)?.scrollTop
    scrollTop && setScroll(scrollTop)
  }
  return (
    <div
      className={cn(
        isContentPage
          ? "bg-accent absolute top-0 max-h-dvh min-h-dvh w-80 -translate-x-full overflow-y-auto border-r-[0.5px] xl:sticky xl:translate-x-0"
          : "xl:bg-accent max-h-dvh min-h-dvh w-full overflow-y-auto xl:w-80 xl:border-r-[0.5px]"
      )}
      id={id}
      onScroll={onScroll}
    >
      <StickyHeader
        title={title}
        scrollPos={scroll}
        leftContent={<MobileSidebarToggle />}
      />
      <div className="flex flex-col gap-0.5 p-3 pt-0">
        <Text variant="h3" className="pb-2 pl-1">
          {title}
        </Text>
        {links.map((link) => {
          const fullLink = `/${type}/${link.slug}`
          const active = path === fullLink
          return (
            <Link
              key={link.slug}
              href={fullLink}
              className={cn(
                "hover:bg-accent-secondary/55 active:bg-accent-secondary/55 size-full  rounded-lg  px-2 py-1.5",
                active && "bg-accent-secondary"
              )}
              prefetch={true}
            >
              <Text className="font-medium">{link.metadata.title}</Text>
              <Text className="text-foreground-muted">
                {link.metadata.subtitle
                  ? link.metadata.subtitle
                  : link.metadata.category
                    ? link.metadata.category
                    : link.metadata.dateTime
                      ? formatDate(link.metadata.dateTime)
                      : undefined}
              </Text>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
