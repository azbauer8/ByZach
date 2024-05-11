import Link from "next/link"
import { FaLink } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import ImageWithFallback from "@/components/ImageWithFallback"
import { Typography } from "@/components/Typography"

export default function ImageContentList({
  list,
  isExternal,
}: {
  list: {
    title?: string | undefined
    slug?: string | undefined
    subtitle: string
    link: string
    shortLink: string
    image: string
  }[]
  isExternal?: boolean
}) {
  return (
    <div className="flex flex-col gap-3 md:-mx-3">
      {list.map((item) => (
        <Button
          variant="ghost"
          key={item.slug}
          asChild
          className="flex justify-between overflow-hidden border-border p-0 text-base"
        >
          <Link
            href={item.link}
            target={isExternal ? "_blank" : undefined}
            prefetch={!isExternal}
          >
            <div className="flex h-full flex-col justify-between gap-2 p-2">
              <div className="flex flex-col gap-1">
                <Typography className="truncate font-medium text-foreground">
                  {item.title}
                </Typography>
                <Typography
                  affects="muted"
                  className="line-clamp-2 truncate text-wrap text-sm"
                >
                  {item.subtitle}
                </Typography>
              </div>
              <Typography className="line-clamp-2 inline-flex items-center gap-1.5 truncate text-wrap text-sm">
                <FaLink />
                {item.shortLink}
              </Typography>
            </div>
            <ImageWithFallback
              alt={item.title ?? item.subtitle}
              src={item.image}
              width={104}
              height={104}
              className="aspect-square min-w-[104px] animate-reveal bg-contain bg-center bg-no-repeat object-cover"
            />
          </Link>
        </Button>
      ))}
    </div>
  )
}
