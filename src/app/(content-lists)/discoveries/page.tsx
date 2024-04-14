import { PageHeader } from "@/components/StickyHeader"
import DiscoveriesList from "@/app/(content-lists)/discoveries/DiscoveriesList"

export default async function Discoveries() {
  return (
    <>
      <PageHeader title="Discoveries" />
      <div className="flex flex-col gap-1 p-3">
        <DiscoveriesList />
      </div>
    </>
  )
}
