"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn, formatDate } from "@/lib/utils"
import ButtonLink from "@/components/Primitives/ButtonLink"
import { Typography } from "@/components/Primitives/Typography"

export default function ListColumn({
  type,
  links,
}: {
  type: "Discoveries" | "Thoughts" | "Snippets"
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

  return (
    <div
      className={cn(
        isContentPage
          ? "absolute top-0 h-dvh w-80 -translate-x-full overflow-y-auto border-r-[0.5px] bg-accent xl:sticky xl:translate-x-0"
          : "w-full overflow-y-auto pb-12 pt-9 xl:h-dvh xl:w-80 xl:border-r-[0.5px] xl:bg-accent xl:pt-0"
      )}
    >
      <div className="space-y-2 p-3">
        <Typography variant="h3" className="pl-1">
          {type}
        </Typography>
        <div className={"flex flex-col gap-1"}>
          {links.map((link) => {
            const fullLink = `/${type.toLowerCase()}/${link.slug.toLowerCase()}`
            const active = path === fullLink
            return (
              <ButtonLink
                key={link.slug}
                as={Link}
                variant={active ? "flat" : "light"}
                href={fullLink}
                active={active}
                className="flex-col items-start gap-0 text-base"
              >
                <Typography className="font-medium">
                  {link.entry.title}
                </Typography>
                <Typography className="text-sm text-default-500">
                  {link.entry.subtitle
                    ? link.entry.subtitle
                    : link.entry.dateTime
                      ? formatDate(link.entry.dateTime)
                      : undefined}
                </Typography>
              </ButtonLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}
