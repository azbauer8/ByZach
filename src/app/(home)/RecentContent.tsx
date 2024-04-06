import Link from "next/link"
import { format } from "date-fns"
import { FaLink } from "react-icons/fa6"

import { getDiscoveries, getProjects, getThoughts } from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"

export default async function RecentContent() {
  const projects = await getProjects(5)
  const thoughts = await getThoughts(5)
  const discoveries = await getDiscoveries(5)

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h4">Projects</Typography>
        <div className="flex flex-col gap-2 py-4">
          {projects?.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex items-center gap-5"
              >
                <Typography className="break-words font-medium group-hover:text-blue-600 group-hover:underline dark:group-hover:text-blue-500">
                  {project.title}
                </Typography>
                <div className="h-1 flex-1 border-b-2 border-dashed " />
                <Typography affects="muted">{project.category}</Typography>
              </Link>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Typography variant="h4">Thoughts</Typography>
        <div className="flex flex-col gap-2 py-4">
          {thoughts?.map((thought) => (
            <Link
              key={thought.slug}
              href={`/thoughts/${thought.slug}`}
              className="group flex items-center gap-5"
            >
              <Typography className="break-words font-medium group-hover:text-blue-600 group-hover:underline dark:group-hover:text-blue-500">
                {thought.title}
              </Typography>
              <div className="h-1 flex-1 border-b-2 border-dashed " />
              <Typography affects="muted">
                {format(new Date(thought.createdAt ?? ""), "PPP")}
              </Typography>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <Typography variant="h4">Discoveries</Typography>
        <div className="flex flex-col gap-2 py-4">
          {discoveries?.map((discovery) => (
            <Link
              key={discovery.slug}
              href={`/discoveries/${discovery.slug}`}
              className="group flex items-center gap-5"
            >
              <Typography className="break-words font-medium group-hover:text-blue-600 group-hover:underline dark:group-hover:text-blue-500">
                {discovery.title}
              </Typography>
              <div className="h-1 flex-1 border-b-2 border-dashed " />
              <Typography affects="muted">
                {formatUrl(discovery.link)}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
