import type { Metadata } from "next/types"

import { colophon } from "@/lib/metadata"
import { getMarkdownContent, notionIds } from "@/lib/notion"
import { Markdown } from "@/components/Markdown"
import PageLayout from "@/components/PageLayout"

export const metadata: Metadata = {
  title: colophon.title,
  description: colophon.subtitle,
}

export default async function Colophon() {
  const pageContent = await getMarkdownContent(notionIds.colophon)
  return (
    <PageLayout title={colophon.title} subtitle={colophon.subtitle}>
      <Markdown source={pageContent} />
    </PageLayout>
  )
}
