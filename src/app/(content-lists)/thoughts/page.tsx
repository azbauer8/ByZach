import { ListColumnHeader } from "@/app/(content-lists)/ListHeader"
import ThoughtsList from "@/app/(content-lists)/thoughts/ThoughtsList"

export default async function Thoughts() {
  return (
    <>
      <ListColumnHeader title="Thoughts" />
      <div className="flex flex-col lg:gap-1 lg:p-3">
        <ThoughtsList />
      </div>
    </>
  )
}
