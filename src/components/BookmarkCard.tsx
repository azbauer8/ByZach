import Image from "next/image"
import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { FaLink } from "react-icons/fa6"

import { Typography } from "@/components/Primitives/Typography"

export default function BookmarkCard({
  title,
  description,
  link,
  shortLink,
  img,
}: {
  title: string
  description: string
  link: string
  shortLink: string
  img: string
}) {
  return (
    <Card
      className="flex aspect-auto cursor-pointer flex-col overflow-hidden border"
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      isPressable
      disableRipple
      isHoverable
    >
      <CardHeader className="z-0 flex-col items-start gap-0.5">
        <Typography variant="h5" className="line-clamp-1">
          {title}
        </Typography>
        <Typography
          affects="muted"
          className="inline-flex items-center gap-0.5 text-sm"
        >
          <FaLink size={16} />
          {shortLink}
        </Typography>
        <Typography className="line-clamp-2 text-sm leading-snug text-foreground/75">
          {description}
        </Typography>
      </CardHeader>
      <CardBody className="aspect-[1200/630] place-content-end overflow-hidden">
        <Image
          src={img !== "" ? img : "/fallback.png"}
          alt={title}
          width={1200}
          height={630}
          className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
          loading="eager"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        />
      </CardBody>
    </Card>
  )
}
