import { ListColumnHeader } from "@/app/(content-lists)/ListHeader"
import ThoughtsList from "@/app/(content-lists)/thoughts/ThoughtsList"

export default async function Thoughts() {
  return (
    <>
      <ListColumnHeader title="Thoughts" />
      <div className="flex flex-col gap-1 p-3">
        <ThoughtsList />
      </div>
    </>
  )
}
