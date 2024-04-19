import { siteLinks } from "@/config"
import { FaLink } from "react-icons/fa6"

import { getDiscoveries } from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
import Badge from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { ContentLayout } from "@/components/Layouts"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { discovery: string }
}) {
  const discovery = getDiscoveries().find(
    (discovery) => discovery.slug === params.discovery
  )
  if (!discovery) return null

  const { dateTime, description, title } = discovery.metadata
  const ogImage = `${siteLinks.here}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      dateTime,
      url: `${siteLinks.here}/discoveries/${discovery.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
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

  return (
    <ContentLayout title={discovery.metadata.title} type="discoveries">
      <div className="space-y-0.5">
        <Badge>{discovery.metadata.category}</Badge>
        <Typography variant="h2">{discovery.metadata.title}</Typography>
        {discovery.metadata.link ? (
          <a
            href={discovery.metadata.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5"
          >
            <FaLink width={16} height={16} />
            <Typography affects="muted">
              {formatUrl(discovery.metadata.link)}
            </Typography>
          </a>
        ) : null}
        <Typography variant="p" affects="muted">
          {discovery.metadata.description}
        </Typography>
      </div>
    </ContentLayout>
  )
}
