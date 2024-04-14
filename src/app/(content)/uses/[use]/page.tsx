import { formatUrl } from "@/utils/format"
import { getUses } from "@/utils/getContent"
import { FaLink } from "react-icons/fa6"

import Badge from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { MDXContent } from "@/components/MdxContent"
import { ContentWrapper } from "@/app/(content)/ContentWrapper"

export const dynamicParams = false
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
    <ContentWrapper
      title={use.metadata.title}
      type="uses"
      className="flex flex-col gap-5"
    >
      <div className="space-y-0.5 pb-5">
        <Badge>{use.metadata.category}</Badge>
        <Typography variant="h2">{use.metadata.title}</Typography>
        {use.metadata.link ? (
          <a
            href={use.metadata.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5"
          >
            <FaLink width={16} height={16} />
            <Typography affects="muted">
              {formatUrl(use.metadata.link)}
            </Typography>
          </a>
        ) : null}
        <Typography variant="p" affects="muted">
          {use.metadata.descShort}
        </Typography>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <MDXContent source={use.content} />
      </main>
    </ContentWrapper>
  )
}
