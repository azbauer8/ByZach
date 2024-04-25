import { getSnippets } from "@/lib/getContent"
import dynamic from "next/dynamic"
const ContentList = dynamic(() => import("@/components/ContentList"))

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Snippets />
      <div className="flex-1">{children}</div>
    </div>
  )
}

function Snippets() {
  const snippets = getSnippets()
  if (!snippets) return null

  return <ContentList id="snippets" type="snippets" links={snippets} />
}
