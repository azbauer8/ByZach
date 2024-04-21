import { getProjects, getSnippets, getThoughts } from "@/lib/getContent"
import RecentContentList from "@/app/(home)/RecentContent.list"

export default async function RecentContent() {
  const projects = getProjects()
  const thoughts = getThoughts(5)
  const snippets = getSnippets(5)

  return (
    <div className="space-y-5">
      <RecentContentList
        title="Projects"
        subtitle="My latest work and experiments."
        list={projects}
        isExternal
      />
      <RecentContentList
        title="Thoughts"
        subtitle="Poorly conveyed ideas about technology, design, and the web."
        route="/thoughts"
        list={thoughts}
      />
      <RecentContentList
        title="Snippets"
        subtitle="Bits of code I often refer back to."
        route="/snippets"
        list={snippets}
      />
    </div>
  )
}
