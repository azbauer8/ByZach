import { PageHeader } from "@/components/StickyHeader"
import UsesList from "@/app/(content-lists)/uses/UsesList"

export default async function Uses() {
  return (
    <>
      <PageHeader title="Uses" />
      <div className="flex flex-col gap-1 p-3">
        <UsesList />
      </div>
    </>
  )
}
