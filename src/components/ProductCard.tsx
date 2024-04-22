import Image from "next/image"
import ogs from "open-graph-scraper"
import { FaLink } from "react-icons/fa6"

import { formatUrl } from "@/lib/utils"
import { Text } from "@/components/ui/text"

export default async function ProductCard({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link: string
}) {
  let ogImgUrl: string | undefined = undefined
  const options = { url: link }
  const ogImg = await ogs(options)
  ogImgUrl = ogImg.result?.ogImage?.[0].url
  if (ogImgUrl?.startsWith("/")) {
    ogImgUrl = `${ogImg?.result?.requestUrl}${ogImgUrl.slice(1)}`
  }

  return (
    <a
      className="flex aspect-auto cursor-pointer flex-col gap-4 overflow-hidden rounded-xl p-4 shadow-card transition-shadow duration-300  ease-in-out hover:shadow-card-hover active:shadow-card-hover"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="aspect-[1200/630] overflow-hidden rounded-lg">
        <Image
          src={ogImgUrl ?? "/fallback.png"}
          alt={title}
          width={1200}
          height={630}
          className="aspect-[1200/630] rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
        />
      </span>
      <div className="space-y-0.5">
        <Text variant="h4">{title}</Text>
        <Text affects="muted" className="inline-flex items-center gap-0.5">
          <FaLink size={16} />
          {formatUrl(link)}
        </Text>
        <Text className="leading-snug">{description}</Text>
      </div>
    </a>
  )
}
