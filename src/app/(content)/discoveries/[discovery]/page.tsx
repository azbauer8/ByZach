import { formatUrl } from "@/utils/format"
import { getDiscoveries } from "@/utils/getContent"
import { FaLink } from "react-icons/fa6"

import Badge from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { ContentWrapper } from "@/components/Layouts"

export const dynamicParams = false

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
    <ContentWrapper title={discovery.metadata.title} type="discoveries">
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
    </ContentWrapper>
  )
}
