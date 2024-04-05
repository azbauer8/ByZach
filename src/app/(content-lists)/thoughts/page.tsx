import Link from "next/link"
import { format } from "date-fns"

import { getThoughts } from "@/lib/getContent"
import NavLink from "@/components/NavLink"

export default async function Thoughts() {
  const thoughts = await getThoughts()
  if (!thoughts) return null

  return (
    <>
      {thoughts.map((thought) => (
        <Link key={thought.slug} href={`/thoughts/${thought.slug}`} prefetch>
          <NavLink link={`/thoughts/${thought.slug}`}>
            <div className="flex flex-col gap-1">
              <h1 className="line-clamp-3 font-medium">{thought.title}</h1>
              <h3 className="line-clamp-1 text-sm text-muted-foreground">
                {format(new Date(thought.createdAt ?? ""), "PPP")}
              </h3>
            </div>
          </NavLink>
        </Link>
      ))}
    </>
  )
}
