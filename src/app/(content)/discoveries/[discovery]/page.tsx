import { Chip } from "@nextui-org/chip"
import { Link } from "@nextui-org/link"
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

  return (
    <ContentWrapper
      title={discovery.title}
      type="discoveries"
      className="content-wrapper space-y-0.5"
    >
      <Chip variant="faded" size="sm">
        {discovery.category}
      </Chip>
      <Typography variant="h2">{discovery.title}</Typography>
      {discovery.link ? (
        <Link
          href={discovery.link ?? ""}
          isExternal
          className="flex items-center gap-1.5"
        >
          <FaLink width={16} height={16} />
          <Typography affects="muted">{formatUrl(discovery.link)}</Typography>
        </Link>
      ) : null}
      <Typography variant="p" affects="muted">
        {discovery.description}
      </Typography>
    </ContentWrapper>
  )
}
