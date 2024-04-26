import { getThoughts } from "@/lib/getLocalContent"
import ContentList from "@/components/ContentList"

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Thoughts />
      <div className="flex-1">{children}</div>
    </div>
  )
}

async function Thoughts() {
  const thoughts = await getThoughts().then((thoughts) =>
    thoughts.map((thought) => ({
      slug: thought.slug,
      entry: { title: thought.entry.title, dateTime: thought.entry.dateTime },
    }))
  )

  return <ContentList type="thoughts" links={thoughts} />
}
