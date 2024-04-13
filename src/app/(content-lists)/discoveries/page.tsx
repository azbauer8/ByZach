import DiscoveriesList from "@/app/(content-lists)/discoveries/DiscoveriesList"
import { ListColumnHeader } from "@/app/(content-lists)/ListHeader"

export const dynamic = "force-static"

export default async function Discoveries() {
  return (
    <>
      <ListColumnHeader title="Discoveries" />
      <div className="flex flex-col gap-1 p-3">
        <DiscoveriesList />
      </div>
    </>
  )
}
