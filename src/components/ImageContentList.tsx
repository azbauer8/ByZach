import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
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
    image: string
  }[]
  isExternal?: boolean
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:-mx-3">
      {list.map((item) => (
        <Button
          key={item.slug}
          asChild
          className="ring-divider group z-0 hover:ring-2"
        >
          <Link
            href={item.link}
            target={isExternal ? "_blank" : undefined}
            prefetch={!isExternal}
          >
            <Image
              alt="Card background"
              src={item.image}
              width={1200}
              height={630}
              className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
            />
            <div className="absolute bottom-0 z-10 flex h-[74px] flex-col items-start gap-1 bg-background backdrop-blur-sm group-hover:bg-background/85">
              <Typography affects="small" className="truncate font-medium">
                {item.title}
              </Typography>
              <Typography
                affects="muted"
                className="!text-tiny line-clamp-2 truncate text-wrap"
              >
                {item.subtitle}
              </Typography>
            </div>
          </Link>
        </Button>
      ))}
    </div>
  )
}
