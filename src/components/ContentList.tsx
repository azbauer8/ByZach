import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon } from "@/components/Icons"
import ImageWithFallback from "@/components/ImageWithFallback"
import { Typography } from "@/components/Typography"

export default function ContentList({
  list,
  isExternal,
  compact,
  hasImage,
  noBorder,
}: {
  list: {
    title: string
    subtitle: string
    link: string
    icon?: JSX.Element
    image?: string
  }[]
  isExternal?: boolean
  compact?: boolean
  hasImage?: boolean
  noBorder?: boolean
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 md:-mx-3",
        compact && "md:grid-cols-2"
      )}
    >
      {list.map((item) => (
        <Button
          key={item.link}
          asChild
          variant={noBorder ? "ghost" : "outline"}
          className="group -mx-3 flex h-auto items-start justify-between gap-3 overflow-hidden p-0 text-base md:mx-0"
        >
          <Link
            href={item.link}
            target={isExternal ? "_blank" : undefined}
            prefetch={!isExternal}
          >
            <div className="flex flex-1 flex-col gap-1 p-2.5">
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {item?.icon && item.icon}
                  <Typography className="truncate font-medium text-foreground">
                    {item.title}
                  </Typography>
                </div>
                {isExternal && !hasImage && (
                  <ExternalLinkIcon className="text-foreground-muted transition-colors group-hover:text-foreground" />
                )}
              </div>
              <Typography
                affects="muted"
                className="line-clamp-2 truncate text-wrap text-sm"
              >
                {item.subtitle}
              </Typography>
            </div>
            {hasImage && (
              <ImageWithFallback
                alt={item.title}
                src={item.image ?? "/fallback.png"}
                width={128}
                height={85}
                className="aspect-square !min-h-full min-w-[80px] max-w-[80px] animate-reveal bg-contain bg-center bg-no-repeat object-cover md:aspect-[3/2] md:min-w-[128px] md:max-w-none"
              />
            )}
          </Link>
        </Button>
      ))}
    </div>
  )
}
