import { getUses } from "@/lib/raindrop"
import ImageContentList from "@/components/ImageContentList"

export default async function SoftwareUses() {
  const software = await getUses("Software")
  if (!software) return null
  return <ImageContentList list={software} isExternal />
}
