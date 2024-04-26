import Image from "next/image"
import { FaLink } from "react-icons/fa6"

import { Text } from "@/components/ui/text"

export default async function ProductCard({
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
    <a
      className="flex aspect-auto cursor-pointer flex-col gap-4 overflow-hidden rounded-xl p-4 shadow-card transition-shadow duration-300  ease-in-out hover:shadow-card-hover active:shadow-card-hover"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="aspect-[1200/630] overflow-hidden rounded-lg">
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
      </span>
      <div className="space-y-0.5">
        <Text variant="h4">{title}</Text>
        <Text affects="muted" className="inline-flex items-center gap-0.5">
          <FaLink size={16} />
          {shortLink}
        </Text>
        <Text className="leading-snug">{description}</Text>
      </div>
    </a>
  )
}
