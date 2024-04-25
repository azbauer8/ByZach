import { getDiscoveryCategories } from "@/lib/getContent"
import dynamic from "next/dynamic"
const ContentList = dynamic(() => import("@/components/ContentList"))

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Discoveries />
      <div className="flex-1">{children}</div>
    </div>
  )
}

function Discoveries() {
  const discoveries = getDiscoveryCategories()
  if (!discoveries) return null

  return <ContentList id="discoveries" type="discoveries" links={discoveries} />
}
