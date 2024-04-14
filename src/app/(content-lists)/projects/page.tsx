import { getProjects } from "@/utils/getContent"

import { PageHeader } from "@/components/Layouts"
import NavList from "@/components/NavList"

export default async function Projects() {
  const projects = getProjects()
  if (!projects) return null

  return (
    <>
      <PageHeader title="Projects" />
      <NavList type="projects" links={projects} />
    </>
  )
}
