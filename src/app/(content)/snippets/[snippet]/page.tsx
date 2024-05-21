import { siteMetadata } from "@/lib/metadata"
import { getMarkdownContent, getSnippet, getSnippets } from "@/lib/notion"
import { formatDate } from "@/lib/utils"
import { Markdown } from "@/components/Markdown"
import PageLayout from "@/components/PageLayout"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { snippet: string }
}) {
  const snippet = await getSnippet(params.snippet)
  if (!snippet) return {}

  const { subtitle, title } = snippet

  return {
    title,
    description: subtitle,
    openGraph: {
      title,
      description: subtitle,
      type: "article",
      url: `${siteMetadata.here}${snippet.link}`,
      publishedTime: snippet.updatedAt || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: subtitle,
    },
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
  params: { snippet: string }
}) {
  const snippet = await getSnippet(params.snippet)
  if (!snippet) return null

  const mdContent = await getMarkdownContent(snippet.id)
  return (
    <PageLayout
      title={snippet.title ?? ""}
      subtitle={snippet.subtitle}
      updatedAt={formatDate(snippet.updatedAt)}
      previousPage={{ link: "/snippets", title: "Snippets" }}
    >
      <Markdown source={mdContent} />
    </PageLayout>
  )
}
