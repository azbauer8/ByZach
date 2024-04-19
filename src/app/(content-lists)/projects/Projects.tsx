import { getProjects } from "@/lib/getContent"
import ContentListLayout from "@/app/(content-lists)/ContentListLayout"
import NavList from "@/app/(content-lists)/NavList"

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
