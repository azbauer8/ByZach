import { siteLinks } from "@/config"
import { FaLink } from "react-icons/fa6"

import { getUses } from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
import Badge from "@/components/ui/badge"
import { Text } from "@/components/ui/text"
import { ContentLayout } from "@/components/Layouts/ContentLayout"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { use: string }
}) {
  const use = getUses().find((use) => use.slug === params.use)
  if (!use) return {}
  const { description, title } = use.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteLinks.here}/uses/${use.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export async function generateStaticParams() {
  const uses = getUses()
  return uses.map((use) => ({
    use: use.slug,
  }))
}

export default async function Use({ params }: { params: { use: string } }) {
  const use = getUses().find((use) => use.slug === params.use)
  if (!use) return null

  return (
    <ContentLayout title={use.metadata.title} type="uses">
      <div className="space-y-0.5">
        <Badge>{use.metadata.type}</Badge>
        <Text variant="h2">{use.metadata.title}</Text>
        {use.metadata.link ? (
          <a
            href={use.metadata.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5"
          >
            <FaLink width={16} height={16} />
            <Text affects="muted">{formatUrl(use.metadata.link)}</Text>
          </a>
        ) : null}
        <Text variant="p" affects="muted">
          {use.metadata.description}
        </Text>
      </div>
    </ContentLayout>
  )
}
