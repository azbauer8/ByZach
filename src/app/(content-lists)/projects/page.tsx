import { ListColumnHeader } from "@/app/(content-lists)/ListHeader"
import ProjectsList from "@/app/(content-lists)/projects/ProjectsList"

export default async function Projects() {
  return (
    <>
      <ListColumnHeader title="Projects" />
      <div className="flex flex-col lg:gap-1 lg:p-3">
        <ProjectsList />
      </div>
    </>
  )
}
