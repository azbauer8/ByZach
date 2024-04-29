import { getThoughts } from "@/lib/getLocalContent"
import ListColumn from "@/components/ListColumn"

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

function Thoughts() {
  const thoughts = getThoughts().map((thought) => ({
    slug: thought.slug,
    entry: {
      title: thought.metadata.title,
      dateTime: thought.metadata.dateTime,
    },
  }))

  return <ListColumn type="Thoughts" links={thoughts} />
}
