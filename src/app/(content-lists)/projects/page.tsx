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
        <Link key={project.slug} href={`/projects/${project.slug}`}>
          <NavLink link={`/projects/${project.slug}`}>
            <div className="flex flex-col gap-1">
              <h1 className="font-medium">{project.title}</h1>
              <div className="flex items-center gap-1.5">
                {project.icon ? (
                  <Image
                    src={project.icon}
                    alt={project.title ?? ""}
                    width={16}
                    height={16}
                  />
                ) : null}
                <h3 className="text-sm text-muted-foreground">
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
