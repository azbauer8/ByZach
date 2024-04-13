import { ListColumnHeader } from "@/app/(content-lists)/ListHeader"
import ProjectsList from "@/app/(content-lists)/projects/ProjectsList"

export const dynamic = "force-static"

export default async function Projects() {
  return (
    <>
      <ListColumnHeader title="Projects" />
      <div className="flex flex-col gap-1 p-3">
        <ProjectsList />
      </div>
    </>
  )
}
