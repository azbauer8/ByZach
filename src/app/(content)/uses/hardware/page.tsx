import { getUses } from "@/lib/raindrop"
import ImageContentList from "@/components/ImageContentList"

export default async function HardwareUses() {
  const hardware = await getUses("Hardware")
  if (!hardware) return null
  return <ImageContentList list={hardware} isExternal />
}
