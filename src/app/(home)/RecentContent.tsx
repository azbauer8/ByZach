import {
  getDiscoveries,
  getProjects,
  getSnippets,
  getThoughts,
} from "@/lib/getContent"
import { formatDate } from "@/lib/utils"
import RecentContentList from "@/app/(home)/RecentContent.list"

export default async function RecentContent() {
  const projects = getProjects(6)
  const thoughts = getThoughts(6)
  const discoveries = getDiscoveries(6)
  const snippets = getSnippets(6)

  return (
    <div className="space-y-6">
      <RecentContentList
        title="Projects"
        subtitle="My latest work and experiments."
        route="projects"
        list={projects.map((project) => ({
          slug: project.slug,
          title: project.metadata.title,
          subtitle: project.metadata.category,
        }))}
      />
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

      <RecentContentList
        title="Discoveries"
        subtitle="Websites, articles, and projects I've found to be useful."
        route="discoveries"
        list={discoveries.map((discovery) => ({
          slug: discovery.slug,
          title: discovery.metadata.title,
          subtitle: discovery.metadata.category,
        }))}
      />
    </div>
  )
}
