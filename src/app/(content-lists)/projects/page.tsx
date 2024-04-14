import { PageHeader } from "@/components/StickyHeader"
import ProjectsList from "@/app/(content-lists)/projects/ProjectsList"

export default async function Projects() {
  return (
    <>
      <PageHeader title="Projects" />
      <div className="flex flex-col gap-1 p-3">
        <ProjectsList />
      </div>
    </>
  )
}
