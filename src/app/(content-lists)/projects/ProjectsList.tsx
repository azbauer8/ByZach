import { getProjects } from "@/utils/getContent"

import NavList from "@/app/(content-lists)/NavList"

export default async function ProjectsList() {
  const projects = getProjects()
  if (!projects) return null

  return <NavList type="projects" links={projects} />
}
