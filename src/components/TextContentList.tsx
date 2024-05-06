import NextLink from "next/link"
import { Button } from "@nextui-org/button"
import { PiArrowUpRightBold } from "react-icons/pi"

import { cn } from "@/lib/utils"
import { Typography } from "@/components/Typography"

export default function TextContentList({
  list,
  isExternal,
  longForm,
}: {
  list: {
    title?: string | undefined
    slug?: string | undefined
    subtitle: string
    link: string
    icon?: JSX.Element
  }[]
  isExternal?: boolean
  longForm?: boolean
}) {
  return (
    <div
      className={cn(
        "grid gap-3 md:-mx-3",
        longForm ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
      )}
    >
      {list.map((item) => (
        <Button
          key={item?.slug ?? item?.title}
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
            <div className="flex items-center gap-2">
              {item?.icon && (
                <div className="text-default-500 group-hover:text-foreground">
                  {item.icon}
                </div>
              )}
              <Typography className="truncate font-medium">
                {item.title}
              </Typography>
            </div>
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
