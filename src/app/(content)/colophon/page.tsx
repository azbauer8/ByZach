import type { Metadata } from "next/types"

import { pageMetadata } from "@/lib/metadata"
import { getMarkdownContent, getPageInfo, notionIds } from "@/lib/notion"
import { formatDate } from "@/lib/utils"
import { Markdown } from "@/components/Markdown"
import PageLayout from "@/components/PageLayout"

export const metadata: Metadata = {
  title: pageMetadata.colophon.title,
  description: pageMetadata.colophon.subtitle,
}

export default async function Colophon() {
  const pageContent = await getMarkdownContent(notionIds.colophon)
  const pageInfo = await getPageInfo(notionIds.colophon)
  return (
    <PageLayout
      title={pageMetadata.colophon.title}
      subtitle={pageMetadata.colophon.subtitle}
      updatedAt={formatDate(pageInfo.last_edited_time)}
    >
      <Markdown source={pageContent} />
    </PageLayout>
  )
}
