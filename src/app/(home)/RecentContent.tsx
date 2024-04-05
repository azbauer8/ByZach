import Link from "next/link"

import { getDiscoveries, getProjects, getThoughts } from "@/lib/getContent"
import { Typography } from "@/components/ui/typography"

export default async function RecentContent() {
  const projects = await getProjects(5)
  const thoughts = await getThoughts(5)
  const discoveries = await getDiscoveries(5)

  return (
    <div>
      <Typography variant="h4">Projects</Typography>
      {projects?.map((project) => (
        <Link key={project.slug} prefetch href={`/projects/${project.slug}`}>
          <Typography key={project.slug}>{project.title}</Typography>
        </Link>
      ))}
      <Typography variant="h4">Thoughts</Typography>
      {thoughts?.map((thought) => (
        <Link key={thought.slug} prefetch href={`/thoughts/${thought.slug}`}>
          <Typography key={thought.slug}>{thought.title}</Typography>
        </Link>
      ))}
      <Typography variant="h4">Discoveries</Typography>
      {discoveries?.map((discovery) => (
        <Link
          key={discovery.slug}
          prefetch
          href={`/discoveries/${discovery.slug}`}
        >
          <Typography key={discovery.slug}>{discovery.title}</Typography>
        </Link>
      ))}
    </div>
  )
}
