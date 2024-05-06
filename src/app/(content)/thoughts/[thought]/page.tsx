import { siteMetadata } from "@/siteData"

import { getCMSContent, getCMSContentEntry } from "@/lib/dato"
import { Markdown } from "@/components/Markdown"
import PageContent from "@/components/PageContent"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { thought: string }
}) {
  const thought = await getCMSContentEntry("Thoughts", params.thought)

  if (!thought) return {}
  const { title } = thought

  return {
    title,
    openGraph: {
      title,
      type: "article",
      url: `${siteMetadata.here}${thought.link}`,
      publishedTime: thought.updatedAt || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  }
}

export async function generateStaticParams() {
  const thoughts = await getCMSContent("Thoughts")
  return thoughts?.map((thought) => ({
    thought: thought.slug,
  }))
}

export default async function Thought({
  params,
}: {
  params: { thought: string }
}) {
  const thought = await getCMSContentEntry("Thoughts", params.thought)
  if (!thought) return null

  return (
    <PageContent
      title={thought.title ?? "Thoughts"}
      subtitle={thought.subtitle}
      previousPage={{ link: "/thoughts", title: "Thoughts" }}
    >
      <Markdown source={thought.content} />
    </PageContent>
  )
}
