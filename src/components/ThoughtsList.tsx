import Link from "next/link"

import { getThoughts } from "@/lib/getContent"
import { cn, formatDate } from "@/lib/utils"
import { Text, textVariants } from "@/components/ui/text"

export default function ThoughtsList() {
  const thoughts = getThoughts(5)
  if (!thoughts) return null

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
          Thoughts
        </Link>
        <Text variant="p" affects="muted">
          Poorly conveyed ideas about technology, design, and the web.
        </Text>
      </div>
      <div className="flex flex-col">
        {thoughts.map((thought) => (
          <Link
            key={thought.slug}
            href={`/thoughts/${thought.slug}`}
            className="group py-2"
          >
            <Text className="underline decoration-default3/35 decoration-2 underline-offset-2 transition-colors group-hover:decoration-foreground/75">
              {thought.metadata.title}
            </Text>
            <Text affects="muted">{formatDate(thought.metadata.dateTime)}</Text>
          </Link>
        ))}
      </div>
    </div>
  )
}
