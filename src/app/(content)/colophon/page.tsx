import { colophon } from "@/siteData"

import { getMarkdownContent, notionIds } from "@/lib/notion"
import { Markdown } from "@/components/Markdown"
import PageLayout from "@/components/PageLayout"

export default async function Colophon() {
  const pageContent = await getMarkdownContent(notionIds.colophon)
  return (
    <PageLayout title={colophon.title} subtitle={colophon.subtitle}>
      <Markdown source={pageContent} />
    </PageLayout>
  )
}
