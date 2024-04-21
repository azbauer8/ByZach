import Projects from "@/components/ProjectsList"
import SnippetsList from "@/components/SnippetsList"
import ThoughtsList from "@/components/ThoughtsList"

export default async function RecentContent() {
  return (
    <div className="space-y-6">
      <Projects />
      <ThoughtsList />
      <SnippetsList />
    </div>
  )
}
