import { getUses } from "@/lib/notion"
import UsesList from "@/app/(content)/uses/UsesList"

export default async function HardwareUses() {
  const hardware = await getUses("Hardware")
  if (!hardware) return null
  return <UsesList list={hardware} />
}
