import Image from "next/image"
import NextLink from "next/link"
import { Card, CardFooter } from "@nextui-org/card"

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
        <Card
          key={item.slug}
          isPressable
          as={NextLink}
          href={item.link}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          prefetch={!isExternal}
          disableRipple
          className="group ring-divider hover:ring-2"
        >
          <Image
            alt="Card background"
            src={item.image}
            width={1200}
            height={630}
            className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
          />
          <CardFooter className="absolute bottom-0 z-10 flex h-[74px] flex-col items-start gap-1 bg-background backdrop-blur-sm group-hover:bg-background/85">
            <Typography affects="small" className="truncate font-medium">
              {item.title}
            </Typography>
            <Typography
              affects="muted"
              className="line-clamp-2 truncate text-wrap !text-tiny"
            >
              {item.subtitle}
            </Typography>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
