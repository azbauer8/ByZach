import { siteLinks } from "@/lib/consts"
import { getLocalContent, getLocalContentEntry } from "@/lib/localContent"
import { Markdown } from "@/components/Markdown"
import PageContent from "@/components/PageContent"

export const dynamicParams = false

export function generateMetadata({ params }: { params: { thought: string } }) {
  const thought = getLocalContentEntry("thoughts", params.thought)

  if (!thought) return {}
  const { title } = thought

  return {
    title,
    openGraph: {
      title,
      type: "article",
      url: `${siteLinks.here}${thought.link}`,
      publishedTime: thought.publishedAt || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  }
}

export function generateStaticParams() {
  const thoughts = getLocalContent("thoughts")
  return thoughts.map((thought) => ({
    thought: thought.slug,
  }))
}

export default function Thought({ params }: { params: { thought: string } }) {
  const thought = getLocalContentEntry("thoughts", params.thought)
  if (!thought) return null

  return (
    <PageContent
      title={thought.title}
      subtitle={thought.subtitle}
      previousPage={{ link: "/thoughts", title: "Thoughts" }}
    >
      <Markdown source={thought.content} />
    </PageContent>
  )
}
