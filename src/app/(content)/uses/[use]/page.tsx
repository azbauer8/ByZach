import { formatUrl } from "@/utils/format"
import { getUse, getUses } from "@/utils/getContent"
import { DocumentRenderer } from "@keystatic/core/renderer"
import { FaLink } from "react-icons/fa6"

import Badge from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { ContentWrapper } from "@/app/(content)/ContentWrapper"

export const dynamic = "force-static"

export const dynamicParams = false
export async function generateStaticParams() {
  const uses = await getUses()
  return (
    uses?.map((use) => ({
      use: use.slug,
    })) ?? []
  )
}
export default async function Use({ params }: { params: { use: string } }) {
  const use = await getUse(params.use)
  if (!use) return null

  return (
    <ContentWrapper
      title={use.title}
      type="uses"
      className="content-wrapper flex flex-col gap-5"
    >
      <div className="space-y-0.5 pb-5">
        <Badge>{use.category}</Badge>
        <Typography variant="h2">{use.title}</Typography>
        {use.link ? (
          <a
            href={use.link ?? ""}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5"
          >
            <FaLink width={16} height={16} />
            <Typography affects="muted">{formatUrl(use.link)}</Typography>
          </a>
        ) : null}
        <Typography variant="p" affects="muted">
          {use.shortDesc}
        </Typography>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <DocumentRenderer document={await use.content()} />
      </main>
    </ContentWrapper>
  )
}
