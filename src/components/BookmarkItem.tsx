import { Button } from "@nextui-org/button"

import { Typography } from "@/components/Primitives/Typography"

export default function BookmarkItemList({
  items,
}: {
  items: {
    title: string
    description: string
    link: string
    shortLink: string
    img: string
  }[]
}) {
  return (
    <div className="grid grid-cols-1 gap-0.5 md:-mx-3 md:grid-cols-2 md:gap-x-1 md:gap-y-3">
      {items.map((item) => (
        <Button
          key={item.link}
          as="a"
          variant="light"
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="group -mx-3 h-auto flex-col items-start justify-start gap-1 px-3 py-2 text-base md:mx-0"
          disableRipple
        >
          <Typography className="font-medium">{item.title}</Typography>
          <Typography
            affects="muted"
            className="line-clamp-2 truncate text-wrap"
          >
            {item.description}
          </Typography>
        </Button>
      ))}
    </div>
  )
}
