import { getThoughts } from "@/lib/getContent"
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

function Thoughts() {
  const thoughts = getThoughts()
  if (!thoughts) return null

  return <ContentList type="thoughts" links={thoughts} />
}
