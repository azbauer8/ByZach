import { getSnippets, getThoughts } from "@/lib/getContent"
import { formatDate } from "@/lib/utils"
import Projects from "@/components/ProjectsList"
import RecentContentList from "@/app/(home)/RecentContent.list"

export default async function RecentContent() {
  const thoughts = getThoughts(6)
  const snippets = getSnippets(6)

  return (
    <div className="space-y-6">
      <Projects />
      <RecentContentList
        title="Thoughts"
        subtitle="Poorly conveyed ideas about technology, design, and the web."
        route="thoughts"
        list={thoughts.map((thought) => ({
          slug: thought.slug,
          title: thought.metadata.title,
          subtitle: formatDate(thought.metadata.dateTime),
        }))}
      />

      <RecentContentList
        title="Snippets"
        subtitle="Bits of code I often refer back to."
        route="snippets"
        list={snippets.map((snippet) => ({
          slug: snippet.slug,
          title: snippet.metadata.title,
          subtitle: snippet.metadata.category,
        }))}
      />
    </div>
  )
}
