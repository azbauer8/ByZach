import { getUses } from "@/lib/raindrop"
import ContentList from "@/components/ContentList"

export default async function SoftwareUses() {
  const software = await getUses("Software")
  if (!software) return null
  return <ContentList list={software} isExternal hasImage />
}
