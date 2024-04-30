"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn, formatDate } from "@/lib/utils"
import ButtonLink from "@/components/Primitives/ButtonLink"
import { Typography } from "@/components/Primitives/Typography"

export default function ListColumn({
  title,
  subtitle,
  links,
}: {
  title: string
  subtitle: string
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
        <div className="space-y-1.5 pl-1">
          <Typography variant="h3">{title}</Typography>
          <Typography affects="lead" className="xl:hidden">
            {subtitle}
          </Typography>
        </div>
        <div className={"-mx-3 flex flex-col xl:mx-0 xl:gap-1"}>
          <hr className="opacity-50 xl:hidden" />
          {links.map((link) => {
            const fullLink = `/${title.toLowerCase()}/${link.slug.toLowerCase()}`
            const active = path === fullLink
            return (
              <>
                <ButtonLink
                  key={link.slug}
                  as={Link}
                  variant={active ? "flat" : "light"}
                  href={fullLink}
                  active={active}
                  className="flex-col items-start gap-0 rounded-none px-4 py-2 text-base xl:rounded-lg xl:px-2 xl:py-1.5"
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
                <hr className="opacity-50 xl:hidden" />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
