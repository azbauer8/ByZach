"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@nextui-org/button"

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
      <StickyHeader className="gap-2 bg-background xl:hidden xl:bg-accent">
        <MobileSidebarToggle />
        <Text
          affects="small"
          className="absolute left-1/2 h-full max-w-[50vw] -translate-x-1/2 content-center truncate"
        >
          {title}
        </Text>
      </StickyHeader>
      <div className="p-3 xl:space-y-2">
        <Text variant="h3" className="hidden pl-1 xl:block">
          {title}
        </Text>
        <div className={"flex flex-col gap-1"}>
          {links.map((link) => {
            const fullLink = `/${type}/${link.slug.toLowerCase()}`
            const active = path === fullLink
            return (
              <Button
                key={link.slug}
                as={Link}
                variant={active ? "solid" : "light"}
                disableRipple
                href={fullLink}
                className="h-auto flex-col items-start justify-start gap-0 px-2 py-1.5 text-base"
              >
                <Text className="font-medium">{link.entry.title}</Text>
                <Text className="text-sm text-foreground-muted">
                  {link.entry.subtitle
                    ? link.entry.subtitle
                    : link.entry.dateTime
                      ? formatDate(link.entry.dateTime)
                      : undefined}
                </Text>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
