import { getUses } from "@/lib/raindrop"
import ContentList from "@/components/ContentList"

export default async function HardwareUses() {
  const hardware = await getUses("Hardware")
  if (!hardware) return null
  return <ContentList list={hardware} isExternal hasImage />
}
