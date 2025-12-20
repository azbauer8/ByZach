import { cacheLife, cacheTag } from "next/cache"

import { pageMetadata } from "@/lib/metadata"
import { getMarkdownContent, getSnippet, getSnippets } from "@/lib/notion"
import { formatDate } from "@/lib/utils"
import { Markdown } from "@/components/Markdown"
import PageLayout from "@/components/PageLayout"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ snippet: string }>
}) {
  const snippet = await getSnippet((await params).snippet)
  if (!snippet) return {}

  const { subtitle, title } = snippet

  return {
    title,
    description: subtitle,
  }
}

export async function generateStaticParams() {
  const snippets = await getSnippets().then((snippet) =>
    snippet?.map((snippet) => ({
      snippet: snippet.slug,
    }))
  )
  return snippets
}

export default async function Snippet({
  params,
}: {
  params: Promise<{ snippet: string }>
}) {
  "use cache"
  cacheLife("days")
  cacheTag("cache")

  const snippet = await getSnippet((await params).snippet)

  if (!snippet) return null

  const mdContent = await getMarkdownContent(snippet.id)
  return (
    <PageLayout
      title={snippet.title ?? pageMetadata.snippets.title}
      subtitle={snippet.subtitle}
      updatedAt={formatDate(snippet.updatedAt)}
      previousPage={{
        href: pageMetadata.snippets.href,
        title: pageMetadata.snippets.title,
      }}
    >
      <Markdown source={mdContent} />
    </PageLayout>
  )
}
