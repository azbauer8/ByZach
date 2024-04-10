import { Chip } from "@nextui-org/chip"
import { Link } from "@nextui-org/link"
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
  return (
    <ContentWrapper
      title={use.title}
      type="uses"
      className="content-wrapper flex flex-col gap-5"
    >
      <div className="space-y-0.5 pb-5">
        <Chip variant="faded" size="sm">
          {use.category}
        </Chip>
        <Typography variant="h2">{use.title}</Typography>
        {use.link ? (
          <Link
            href={use.link ?? ""}
            isExternal
            className="flex items-center gap-1.5"
          >
            <FaLink width={16} height={16} />
            <Typography affects="muted">{formatUrl(use.link)}</Typography>
          </Link>
        ) : null}
        <Typography variant="p" affects="muted">
          {use.descShort}
        </Typography>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <TinaMarkdown content={use.descLong} />
      </main>
    </ContentWrapper>
  )
}
