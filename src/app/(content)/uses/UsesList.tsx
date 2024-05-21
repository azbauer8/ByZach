import type { FormattedNotionResult } from "@/lib/notion.types"
import ContentList from "@/components/ContentList"
import { Typography } from "@/components/Typography"

export default async function UsesList({
  list,
}: {
  list: Record<string, FormattedNotionResult[]>
}) {
  return (
    <div className="space-y-8">
      {Object.entries(list).map(([category, items]) => (
        <div key={category} className="space-y-3">
          <Typography variant="h4">{category}</Typography>
          <ContentList list={items} isExternal compact />
        </div>
      ))}
    </div>
  )
}
