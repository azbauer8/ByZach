import { getProjects } from "@/utils/getContent"

import ContentListWrapper from "@/components/ContentListWrapper"
import NavList from "@/components/NavList"

export default async function ProjectsPage() {
  return <Projects />
}

export async function Projects({ isContentPage }: { isContentPage?: boolean }) {
  const projects = getProjects()
  if (!projects) return null

  return (
    <ContentListWrapper
      id="projects"
      type="Projects"
      isContentPage={isContentPage}
    >
      <NavList type="projects" links={projects} />
    </ContentListWrapper>
  )
}
