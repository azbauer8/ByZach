import { Chip } from "@nextui-org/chip"
import { FaLink } from "react-icons/fa6"

import { getDiscoveries, getDiscovery } from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import { ContentWrapper } from "@/app/(content)/ContentWrapper"

export const dynamicParams = false
export async function generateStaticParams() {
  const discoveries = await getDiscoveries()
  return (
    discoveries?.map((discovery) => ({
      discovery: discovery.slug,
    })) ?? []
  )
}
export default async function Discovery({
  params,
}: {
  params: { discovery: string }
}) {
  const discovery = await getDiscovery(params.discovery)
  const linkTitle = formatUrl(discovery.link)

  return (
    <ContentWrapper title={discovery.title} className="content-wrapper">
      <div className="space-y-2 pb-8 pt-12">
        <Chip variant="faded">{discovery.category}</Chip>
        <Typography variant="h2">{discovery.title}</Typography>
        <a
          href={discovery.link ?? ""}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 decoration-content1 underline-offset-2 hover:underline active:underline"
        >
          <FaLink width={16} height={16} />
          <Typography affects="muted">{linkTitle}</Typography>
        </a>
        <Typography variant="p" affects="muted">
          {discovery.description}
        </Typography>
      </div>
    </ContentWrapper>
  )
}
