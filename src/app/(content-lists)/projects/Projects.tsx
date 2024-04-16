import { getProjects } from "@/utils/getContent"

import ContentListLayout from "@/components/Layouts.client"
import NavList from "@/components/NavList"

export default async function Projects({
  isContentPage,
}: {
  isContentPage?: boolean
}) {
  const projects = getProjects()
  if (!projects) return null

  return (
    <ContentListLayout
      id="projects"
      type="Projects"
      isContentPage={isContentPage}
    >
      <NavList type="projects" links={projects} />
    </ContentListLayout>
  )
}
