import NextLink from "next/link"
import { Button } from "@nextui-org/button"
import { PiArrowUpRightBold } from "react-icons/pi"

import { Typography } from "@/components/Typography"

export default function ContentList({
  list,
  isExternal,
}: {
  list: {
    slug: string
    title: string
    subtitle: string
    link: string
  }[]
  isExternal?: boolean
}) {
  return (
    <div className="grid grid-cols-1 gap-0.5 md:-mx-3 md:grid-cols-2 md:gap-x-1 md:gap-y-3">
      {list.map((item) => (
        <Button
          key={item.slug}
          as={NextLink}
          variant="light"
          href={item.link}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          prefetch={!isExternal}
          className="group -mx-3 h-auto flex-col items-start justify-start gap-1 px-3 py-2 text-base md:mx-0"
          disableRipple
        >
          <div className="flex w-full items-center justify-between gap-4">
            <Typography className="truncate font-medium">
              {item.title}
            </Typography>
            {isExternal && (
              <PiArrowUpRightBold className="text-default-500 transition-colors group-hover:text-foreground" />
            )}
          </div>
          <Typography
            affects="muted"
            className="line-clamp-2 truncate text-wrap"
          >
            {item.subtitle}
          </Typography>
        </Button>
      ))}
    </div>
  )
}
