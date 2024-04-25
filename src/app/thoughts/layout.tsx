import { getThoughts } from "@/lib/getContent"
import dynamic from "next/dynamic"
const ContentList = dynamic(() => import("@/components/ContentList"))

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

  return <ContentList id="thoughts" type="thoughts" links={thoughts} />
}
