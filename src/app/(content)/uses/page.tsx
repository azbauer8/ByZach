import { getUses } from "@/lib/notion"
import ContentList from "@/components/ContentList"

export default async function SoftwareUses() {
  const software = await getUses("Software")
  if (!software) return null
  return <ContentList list={software} isExternal />
}
