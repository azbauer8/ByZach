import { getUses } from "@/lib/notion"
import ContentList from "@/components/ContentList"
import { Typography } from "@/components/Typography"

export default async function SoftwareUses() {
  const software = await getUses("Software")
  if (!software) return null

  return (
    <div className="space-y-3">
      {Object.entries(software).map(([category, items]) => (
        <div key={category} className="space-y-1">
          <Typography affects="large">{category}</Typography>
          <ContentList list={items} isExternal />
        </div>
      ))}
    </div>
  )
}
