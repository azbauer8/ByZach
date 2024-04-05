import Image from "next/image"
import Link from "next/link"

import { getProjects } from "@/lib/getContent"
import NavLink from "@/app/(content-lists)/NavLink"

export default async function Projects() {
  const projects = await getProjects()
  if (!projects) return null

  return (
    <>
      {projects.map((project) => (
        <Link key={project.slug} href={`/projects/${project.slug}`} prefetch>
          <NavLink link={`/projects/${project.slug}`}>
            <div className="flex items-center gap-2">
              {project.icon ? (
                <Image
                  src={project.icon}
                  alt={project.title ?? ""}
                  width={35}
                  height={35}
                />
              ) : null}
              <div className="flex flex-col gap-1">
                <h1 className="font-medium">{project.title}</h1>
                <h3 className="text-xs text-muted-foreground">
                  {project.category}
                </h3>
              </div>
            </div>
          </NavLink>
        </Link>
      ))}
    </>
  )
}
