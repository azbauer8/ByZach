import DiscoveriesList from "@/app/(content-lists)/discoveries/DiscoveriesList"
import { ListColumnHeader } from "@/app/(content-lists)/ListHeader"

export default async function Discoveries() {
  return (
    <>
      <ListColumnHeader title="Discoveries" />
      <div className="flex flex-col lg:gap-1 lg:p-3">
        <DiscoveriesList />
      </div>
    </>
  )
}
