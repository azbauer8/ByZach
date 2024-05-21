import { getUses } from "@/lib/notion"
import UsesList from "@/app/(content)/uses/UsesList"

export default async function SoftwareUses() {
  const software = await getUses("Software")
  if (!software) return null

  return <UsesList list={software} />
}
