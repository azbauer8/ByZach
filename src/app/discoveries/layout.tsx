import { getDiscoveryCategories } from "@/lib/raindrop"
import ContentList from "@/components/ContentList"

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

async function Discoveries() {
  const discoveries = await getDiscoveryCategories()
  if (!discoveries) return null

  return <ContentList type="discoveries" links={discoveries} />
}
