import { getSnippets } from "@/utils/getContent"

import Badge from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { ContentWrapper } from "@/components/Layouts"
import { MDXContent } from "@/components/MdxContent"

export const dynamicParams = false
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
    <ContentWrapper title={snippet.metadata.title} type="snippets">
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
    </ContentWrapper>
  )
}
