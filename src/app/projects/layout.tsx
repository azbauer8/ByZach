import { getProjects } from "@/lib/getContent"
import ContentList from "@/components/ContentList"
import ContentListLayout from "@/components/ContentListLayout"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Projects />
      <div className="flex-1">{children}</div>
    </div>
  )
}

function Projects() {
  const projects = getProjects()
  if (!projects) return null

  return (
    <ContentListLayout id="projects" type="Projects">
      <ContentList type="projects" links={projects} />
    </ContentListLayout>
  )
}
