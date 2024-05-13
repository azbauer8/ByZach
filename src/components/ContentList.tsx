import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon } from "@/components/Icons"
import { Typography } from "@/components/Typography"

export default function ContentList({
  list,
  isExternal,
  compact,
  noBorder,
  noBg,
}: {
  list: {
    title: string
    subtitle: string
    link: string
    icon?: JSX.Element
    extIcon?: string
    image?: string
  }[]
  isExternal?: boolean
  compact?: boolean
  noBorder?: boolean
  noBg?: boolean
}) {
  return (
    <div
      className={cn(
        "-mx-3 grid grid-cols-1 gap-3",
        compact && "md:grid-cols-2"
      )}
    >
      {list.map((item) => (
        <Button
          key={item.link}
          asChild
          variant={noBorder ? "ghost" : "outline"}
          className={cn(
            "group flex h-auto flex-col items-start gap-1 p-2.5 text-base",
            noBg ? "bg-transparent" : "bg-accent"
          )}
        >
          <Link
            href={item.link}
            target={isExternal ? "_blank" : undefined}
            prefetch={!isExternal}
          >
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {item?.icon && item.icon}
                {item?.extIcon && (
                  <Image
                    src={item.extIcon}
                    alt={item.title}
                    width={20}
                    height={20}
                  />
                )}

                <Typography className="truncate font-medium text-foreground">
                  {item.title}
                </Typography>
              </div>
              {isExternal && (
                <ExternalLinkIcon className="text-foreground-muted transition-colors group-hover:text-foreground" />
              )}
            </div>
            <Typography
              affects="muted"
              className="line-clamp-2 truncate text-wrap text-sm"
            >
              {item.subtitle}
            </Typography>
          </Link>
        </Button>
      ))}
    </div>
  )
}
