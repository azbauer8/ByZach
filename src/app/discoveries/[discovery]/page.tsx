import Image from "next/image"
import ogs from "open-graph-scraper"
import { FaLink } from "react-icons/fa6"

import { getDiscoveries } from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
import Badge from "@/components/ui/badge"
import { Text } from "@/components/ui/text"
import { ContentLayout } from "@/components/ContentLayout"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { discovery: string }
}) {
  const discovery = getDiscoveries().find(
    (discovery) => discovery.slug === params.discovery
  )
  if (!discovery) return {}

  const { description, title } = discovery.metadata

  return {
    title,
    description,
  }
}

export async function generateStaticParams() {
  const discoveries = getDiscoveries()
  return discoveries.map((discovery) => ({
    discovery: discovery.slug,
  }))
}
export default async function Discovery({
  params,
}: {
  params: { discovery: string }
}) {
  const discovery = getDiscoveries().find(
    (discovery) => discovery.slug === params.discovery
  )
  if (!discovery) return null

  let ogImgUrl: string | undefined = undefined

  if (discovery.metadata.link) {
    const options = { url: discovery.metadata.link }
    const ogImg = await ogs(options)
    ogImgUrl = ogImg?.result?.ogImage?.[0].url
  }

  return (
    <ContentLayout title={discovery.metadata.title} type="discoveries">
      <div className="space-y-0.5">
        <Badge>{discovery.metadata.category}</Badge>
        <Text variant="h2">{discovery.metadata.title}</Text>
        {discovery.metadata.link ? (
          <a
            href={discovery.metadata.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5"
          >
            <FaLink width={16} height={16} />
            <Text affects="muted">{formatUrl(discovery.metadata.link)}</Text>
          </a>
        ) : null}
        <Image
          src={ogImgUrl ?? ""}
          alt={discovery.metadata.title}
          width={1200}
          height={630}
          className="rounded-lg"
        />
        <Text variant="p" affects="muted">
          {discovery.metadata.description}
        </Text>
      </div>
    </ContentLayout>
  )
}
