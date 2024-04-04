import Image from "next/image"
import Link from "next/link"

import { getProjects } from "@/lib/getContent"
import { Typography } from "@/components/ui/typography"
import NavLink from "@/components/NavLink"

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
                  width={25}
                  height={25}
                />
              ) : null}
              <div className="flex flex-col">
                <h1 className="font-semibold">{project.title}</h1>
                <h3 className="text-xs">{project.category}</h3>
              </div>
            </div>
          </NavLink>
        </Link>
      ))}
    </>
  )
}
