import Image from "next/image"
import ogs from "open-graph-scraper"
import { FaLink } from "react-icons/fa6"

import {
  DiscoveryMetadata,
  getDiscoveriesInCategory,
  getDiscoveryCategories,
} from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
import { Text } from "@/components/ui/text"
import { ContentLayout } from "@/components/Layouts/ContentLayout"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}) {
  const category = getDiscoveryCategories().find(
    (category) => category.slug === params.category
  )
  if (!category) return {}

  const { title, subtitle } = category.metadata

  return {
    title,
    description: subtitle,
  }
}

export async function generateStaticParams() {
  const categories = getDiscoveryCategories()
  return categories.map((category) => ({
    category: category.slug,
  }))
}
export default async function DiscoveryCategory({
  params,
}: {
  params: { category: string }
}) {
  const discoveries = getDiscoveriesInCategory(params.category)
  if (!discoveries) return null

  const category = discoveries[0].metadata.category

  return (
    <ContentLayout title={category} type="discoveries">
      <Text variant="h2">{category}</Text>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {discoveries.map((discovery) => (
          <DiscoveryCard discovery={discovery} key={discovery.slug} />
        ))}
      </div>
    </ContentLayout>
  )
}

async function DiscoveryCard({
  discovery,
}: {
  discovery: { metadata: DiscoveryMetadata }
}) {
  let ogImgUrl: string | undefined = undefined
  if (discovery.metadata.link) {
    const options = { url: discovery.metadata.link }
    const ogImg = await ogs(options)
    ogImgUrl = ogImg?.result?.ogImage?.[0].url
    if (ogImgUrl?.startsWith("/")) {
      ogImgUrl = `${ogImg?.result?.requestUrl}${ogImgUrl.slice(1)}`
    }
  }
  return (
    <a
      className="thumbnail-shadow flex aspect-auto cursor-pointer flex-col gap-4 overflow-hidden rounded-xl p-4 shadow-sm transition-colors"
      href={discovery.metadata.link ?? ""}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="aspect-[1200/630] overflow-hidden rounded-lg">
        <Image
          src={ogImgUrl ?? "/fallback.png"}
          alt={discovery.metadata.title}
          width={1200}
          height={630}
          className="aspect-[1200/630] rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
        />
      </span>
      <div className="space-y-0.5">
        <Text variant="h4">{discovery.metadata.title}</Text>
        <Text affects="muted" className="inline-flex items-center gap-0.5">
          <FaLink size={16} />
          {formatUrl(discovery.metadata.link)}
        </Text>
        <Text>{discovery.metadata.description}</Text>
      </div>
    </a>
  )
}
