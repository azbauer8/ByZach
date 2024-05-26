import { siteMetadata } from "@/lib/metadata"
import { getMarkdownContent, getThought, getThoughts } from "@/lib/notion"
import { formatDate } from "@/lib/utils"
import { Markdown } from "@/components/Markdown"
import PageLayout from "@/components/PageLayout"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { thought: string }
}) {
  const thought = await getThought(params.thought)

  if (!thought) return {}
  const { title, subtitle } = thought

  return {
    title,
    description: subtitle,
    openGraph: {
      title,
      description: subtitle,
      type: "article",
      url: `${siteMetadata.here}${thought.link}`,
      publishedTime: thought.updatedAt || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: subtitle,
    },
  }
}

export async function generateStaticParams() {
  const thoughts = await getThoughts()
  return thoughts
    ? thoughts.map((thought) => ({
        thought: thought.slug,
      }))
    : []
}

export default async function Thought({
  params,
}: {
  params: { thought: string }
}) {
  const thought = await getThought(params.thought)
  if (!thought) return null

  const mdContent = await getMarkdownContent(thought.id)
  return (
    <PageLayout
      title={thought.title ?? "Thoughts"}
      subtitle={thought.subtitle}
      updatedAt={formatDate(thought.updatedAt)}
      previousPage={{ link: "/thoughts", title: "Thoughts" }}
    >
      <Markdown source={mdContent} />
    </PageLayout>
  )
}
