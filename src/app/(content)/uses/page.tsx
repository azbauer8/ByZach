import { getSoftwareUses } from "@/lib/raindrop"
import ContentList from "@/components/ContentList"

export default async function SoftwareUses() {
  const software = await getSoftwareUses()
  if (!software) return null
  return <ContentList list={software} isExternal />
}
