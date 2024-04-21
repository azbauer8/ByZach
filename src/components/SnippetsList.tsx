import Link from "next/link"

import { getSnippets } from "@/lib/getContent"
import { cn } from "@/lib/utils"
import { Text, textVariants } from "@/components/ui/text"

export default function SnippetsList() {
  const snippets = getSnippets(5)
  if (!snippets) return null

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
          Snippets
        </Link>
        <Text variant="p" affects="muted">
          Bits of code I often refer back to.
        </Text>
      </div>
      <div className="flex flex-col">
        {snippets.map((snippet) => (
          <Link
            key={snippet.slug}
            href={`/snippets/${snippet.slug}`}
            className="group py-2"
          >
            <Text className="underline decoration-default3/35 decoration-2 underline-offset-2 transition-colors group-hover:decoration-foreground/75">
              {snippet.metadata.title}
            </Text>
            <Text affects="muted">{snippet.metadata.category}</Text>
          </Link>
        ))}
      </div>
    </div>
  )
}
