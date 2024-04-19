import { siteLinks } from "@/config"

import { getSnippets } from "@/lib/getContent"
import Badge from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { ContentLayout } from "@/app/(content)/ContentLayout"
import { MDXContent } from "@/app/(content)/MdxContent"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { snippet: string }
}) {
  const snippet = getSnippets().find(
    (snippet) => snippet.slug === params.snippet
  )
  if (!snippet) return {}

  const { description, title } = snippet.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteLinks.here}/snippets/${snippet.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export async function generateStaticParams() {
  const snippets = getSnippets()
  return snippets.map((snippet) => ({
    snippet: snippet.slug,
  }))
}

export default async function Snippet({
  params,
}: {
  params: { snippet: string }
}) {
  const snippet = getSnippets().find(
    (snippet) => snippet.slug === params.snippet
  )
  if (!snippet) return null

  return (
    <ContentLayout title={snippet.metadata.title} type="snippets">
      <div className="space-y-0.5">
        <Badge>{snippet.metadata.category}</Badge>
        <Typography variant="h2">{snippet.metadata.title}</Typography>
        <Typography variant="p" affects="muted">
          {snippet.metadata.description}
        </Typography>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <MDXContent source={snippet.content} />
      </main>
    </ContentLayout>
  )
}
