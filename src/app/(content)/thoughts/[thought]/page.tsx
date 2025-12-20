import { cacheLife, cacheTag } from "next/cache"

import { pageMetadata } from "@/lib/metadata"
import { getMarkdownContent, getThought, getThoughts } from "@/lib/notion"
import { formatDate } from "@/lib/utils"
import { Markdown } from "@/components/Markdown"
import PageLayout from "@/components/PageLayout"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ thought: string }>
}) {
  const thought = await getThought((await params).thought)

  if (!thought) return {}
  const { title, subtitle } = thought

  return {
    title,
    description: subtitle,
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
  params: Promise<{ thought: string }>
}) {
  "use cache"
  cacheLife("days")
  cacheTag("cache")

  const thought = await getThought((await params).thought)
  if (!thought) return null

  const mdContent = await getMarkdownContent(thought.id)
  return (
    <PageLayout
      title={thought.title ?? pageMetadata.thoughts.title}
      subtitle={thought.subtitle}
      updatedAt={formatDate(thought.updatedAt)}
      previousPage={{
        href: pageMetadata.thoughts.href,
        title: pageMetadata.thoughts.title,
      }}
    >
      <Markdown source={mdContent} />
    </PageLayout>
  )
}
