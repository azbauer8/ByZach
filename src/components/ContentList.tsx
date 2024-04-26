"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { capitalize, cn, formatDate } from "@/lib/utils"
import { Text } from "@/components/ui/text"
import { MobileSidebarToggle } from "@/components/Sidebar/MobileSidebar"
import StickyHeader from "@/components/StickyHeader"

export default function ContentList({
  type,
  links,
}: {
  type: "discoveries" | "thoughts" | "snippets"
  links: {
    slug: string
    entry: {
      title: string
      subtitle?: string
      dateTime?: string | null
    }
  }[]
}) {
  const path = usePathname()
  const isContentPage = path.split("/").length === 3

  const title = capitalize(type)
  return (
    <div
      className={cn(
        isContentPage
          ? "absolute top-0 max-h-dvh min-h-dvh w-80 -translate-x-full overflow-y-auto border-r-[0.5px] bg-accent xl:sticky xl:translate-x-0"
          : "max-h-dvh min-h-dvh w-full overflow-y-auto xl:w-80 xl:border-r-[0.5px] xl:bg-accent"
      )}
    >
      <StickyHeader className="gap-2 bg-background xl:bg-accent">
        <MobileSidebarToggle />
        <Text affects="large">{title}</Text>
      </StickyHeader>
      <div className={"flex flex-col divide-y xl:gap-1 xl:divide-y-0 xl:p-3"}>
        {links.map((link) => {
          const fullLink = `/${type}/${link.slug}`
          const active = path === fullLink
          return (
            <Link
              key={link.slug}
              href={fullLink}
              className={cn(
                "size-full px-3 py-2 hover:bg-accent-secondary/55 active:bg-accent-secondary/55  xl:rounded-lg  xl:px-2 xl:py-1.5",
                active && "bg-accent-secondary"
              )}
            >
              <Text className="font-medium">{link.entry.title}</Text>
              <Text className="text-foreground-muted">
                {link.entry.subtitle
                  ? link.entry.subtitle
                  : link.entry.dateTime
                    ? formatDate(link.entry.dateTime)
                    : undefined}
              </Text>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
