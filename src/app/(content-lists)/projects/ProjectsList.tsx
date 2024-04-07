import { getProjects } from "@/lib/getContent"
import NavList from "@/app/(content-lists)/NavList"

export default async function ProjectsList() {
  const projects = await getProjects()
  if (!projects) return null

  return <NavList type="projects" links={projects} />
}
