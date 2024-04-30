import { pageHeaders } from "@/lib/consts"
import { getDiscoveryCategories } from "@/lib/getRaindrop"
import ListColumn from "@/components/ListColumn"

export const revalidate = 60

export default function DiscoveriesLayout({
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

  return (
    <ListColumn
      title={pageHeaders.discoveries.title}
      subtitle={pageHeaders.discoveries.subtitle}
      links={discoveries}
    />
  )
}
