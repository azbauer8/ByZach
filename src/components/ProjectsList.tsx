import Link from "next/link"

import { getProjects } from "@/lib/getContent"
import { cn } from "@/lib/utils"
import { Text, textVariants } from "@/components/ui/text"

export default function Projects({ limit }: { limit?: number }) {
  const projects = getProjects(limit)
  if (!projects) return null

  return (
    <div className="space-y-2">
      <div className="space-y-0.5">
        <Link
          href="/projects"
          className={cn(
            textVariants({ variant: "h3" }),
            "underline-offset-2 hover:text-primary hover:underline active:text-primary  active:underline"
          )}
        >
          Projects
        </Link>
        <Text variant="p" affects="muted">
          My latest work and experiments.
        </Text>
      </div>
      <div className="flex flex-col">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.metadata.link ?? undefined}
            target="_blank"
            rel="noreferrer"
            className="group py-2"
          >
            <div className="flex items-center gap-0.5">
              <Text className="underline decoration-default3/35 decoration-2 underline-offset-2 transition-colors group-hover:decoration-foreground/75">
                {project.metadata.title}
              </Text>
              <span className="translate-y-[-0.5px] text-[0.9em] text-default3 transition-colors group-hover:text-foreground">
                ↗
              </span>
            </div>
            <Text affects="muted">{project.metadata.description}</Text>
          </a>
        ))}
      </div>
    </div>
  )
}
