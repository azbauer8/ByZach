import { Badge } from "@nextui-org/react"
import { FaLink } from "react-icons/fa6"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { getUse, getUses } from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import { ContentWrapper } from "@/app/(content)/ContentWrapper"

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
  const linkTitle = formatUrl(use.link)
  return (
    <ContentWrapper title={use.title} className="content-wrapper">
      <div className="space-y-2 pb-8 pt-12">
        <Badge variant="flat">{use.category}</Badge>
        <Typography variant="h2">{use.title}</Typography>
        <a
          href={use.link ?? ""}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 decoration-secondary underline-offset-2 hover:underline active:underline"
        >
          <FaLink width={16} height={16} />
          <Typography affects="muted">{linkTitle}</Typography>
        </a>
      </div>
      <main className="prose">
        <TinaMarkdown content={use.description} />
      </main>
    </ContentWrapper>
  )
}
