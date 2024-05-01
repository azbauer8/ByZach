import NextLink from "next/link"
import { Button } from "@nextui-org/button"
import { PiArrowUpRightBold } from "react-icons/pi"

import { formatDate } from "@/lib/utils"
import { Typography } from "@/components/Primitives/Typography"

export default function ContentList({
  route,
  list,
  isExternal,
  itemSubtitle,
}: {
  route?: string
  list: {
    slug: string
    entry: {
      title: string
      link?: string
      dateTime?: string | null
      description?: string
      subtitle?: string
    }
  }[]
  itemSubtitle: "description" | "subtitle" | "dateTime"
  isExternal?: boolean
}) {
  return (
    <div className="grid grid-cols-1 gap-0.5 md:-mx-3 md:grid-cols-2">
      {list.map((item) => (
        <Button
          key={item.slug}
          as={NextLink}
          variant="light"
          href={item.entry.link ?? `${route}/${item.slug.toLowerCase()}`}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          prefetch={!isExternal}
          className="group -mx-3 h-auto flex-col items-start gap-1 px-3 py-2 text-base md:mx-0"
          disableRipple
        >
          <div className="flex w-full items-center justify-between">
            <Typography className="font-medium">{item.entry.title}</Typography>
            {isExternal && (
              <PiArrowUpRightBold className="text-default-500 transition-colors group-hover:text-foreground group-active:text-foreground" />
            )}
          </div>
          <Typography affects="muted" className="text-wrap">
            {itemSubtitle === "description"
              ? item.entry.description
              : itemSubtitle === "subtitle"
                ? item.entry.subtitle
                : formatDate(item.entry.dateTime)}
          </Typography>
        </Button>
      ))}
    </div>
  )
}
