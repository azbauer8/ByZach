import Link from "next/link"
import { formatDate } from "@/utils/format"
import { getDiscoveries, getProjects, getThoughts } from "@/utils/getContent"

import { Typography } from "@/components/ui/typography"

export default async function RecentContent() {
  const projects = getProjects(5)
  const thoughts = getThoughts(5)
  const discoveries = getDiscoveries(5)

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h4">Projects</Typography>
        <div className="flex flex-col gap-2 py-4">
          {projects?.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex items-center  justify-between gap-5"
            >
              <Typography className="break-words font-medium underline-offset-2 group-hover:text-focus group-hover:underline group-active:text-focus group-active:underline">
                {project.metadata.title}
              </Typography>
              <Typography
                affects="muted"
                className="underline-offset-2 group-hover:underline group-active:underline"
              >
                {project.metadata.category}
              </Typography>
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
              className="group flex items-center  justify-between gap-5"
            >
              <Typography className="break-words font-medium underline-offset-2 group-hover:text-focus group-hover:underline group-active:text-focus group-active:underline">
                {thought.metadata.title}
              </Typography>
              <Typography
                affects="muted"
                className="underline-offset-2 group-hover:underline group-active:underline"
              >
                {formatDate(thought.metadata.dateTime)}
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
              className="group flex items-center  justify-between gap-5"
            >
              <Typography className="break-words font-medium underline-offset-2 group-hover:text-focus group-hover:underline group-active:text-focus group-active:underline">
                {discovery.metadata?.title}
              </Typography>
              <Typography
                affects="muted"
                className="underline-offset-2 group-hover:underline group-active:underline"
              >
                {discovery.metadata?.category}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
