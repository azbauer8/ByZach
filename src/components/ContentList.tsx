import Link from "next/link"

import { imageSources } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import DynamicImage from "@/components/DynamicImage"
import { ExternalLinkIcon, type Icon } from "@/components/Icons"
import { Typography } from "@/components/Typography"

type ContentListProps = {
  list: {
    title: string
    subtitle: string
    href: string
    icon?: Icon
    extIcon?: string
    image?: string
  }[]
  isExternal?: boolean
  compact?: boolean
  noBorder?: boolean
  noBg?: boolean
}

export default function ContentList({
  list,
  isExternal,
  compact,
  noBorder,
  noBg,
}: ContentListProps) {
  return (
    <div
      className={cn(
        "-mx-2.5 grid grid-cols-1 gap-3",
        compact && "md:grid-cols-2"
      )}
    >
      {list.map((item) => (
        <Button
          key={item.href}
          asChild
          variant={noBorder ? "ghost" : "outline"}
          className={cn(
            "group flex h-auto flex-col items-start justify-start gap-1 p-2.5 text-base",
            noBg ? "bg-transparent" : "bg-accent"
          )}
        >
          <Link href={item.href} target={isExternal ? "_blank" : undefined}>
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {item?.icon && <item.icon />}
                {item?.extIcon && (
                  <DynamicImage
                    src={item.extIcon}
                    alt={item.title}
                    fallbackSrc={imageSources.iconFallback}
                    width={20}
                    height={20}
                    className="rounded-none"
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
            </Typography>{" "}
          </Link>
        </Button>
      ))}
    </div>
  )
}
