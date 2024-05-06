import { siteMetadata } from "@/siteData"

import { getCMSContent, getCMSContentEntry } from "@/lib/dato"
import { Markdown } from "@/components/Markdown"
import PageContent from "@/components/PageContent"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { snippet: string }
}) {
  const snippet = await getCMSContentEntry("Snippets", params.snippet)
  if (!snippet) return {}

  const { description, title } = snippet

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteMetadata.here}${snippet.link}`,
      publishedTime: snippet.updatedAt || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export async function generateStaticParams() {
  const snippets = await getCMSContent("Snippets").then((snippet) =>
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
  const snippet = await getCMSContentEntry("Snippets", params.snippet)
  if (!snippet) return null

  return (
    <PageContent
      title={snippet.title ?? ""}
      subtitle={snippet.subtitle}
      previousPage={{ link: "/snippets", title: "Snippets" }}
    >
      <Markdown source={snippet.content} />
    </PageContent>
  )
}
