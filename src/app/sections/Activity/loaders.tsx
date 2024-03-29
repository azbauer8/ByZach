import { Skeleton } from "@nextui-org/react"

export function LoadingLastFm() {
  return (
    <div className="flex max-w-xl items-center space-x-5">
      <Skeleton className="size-[144px] flex-none animate-pulse items-center justify-center self-center rounded-lg" />
      <div className="my-auto grow space-y-3">
        <Skeleton className="h-4 w-[100px] rounded-md" />
        <Skeleton className="h-4 w-[150px] rounded-md" />
        <Skeleton className="h-4 w-[125px] rounded-md" />
      </div>
    </div>
  )
}

export function LoadingTrakt() {
  return (
    <div className="flex max-w-xl items-center space-x-5">
      <Skeleton className="h-[216px] w-[144px] flex-none animate-pulse items-center justify-center self-center rounded-lg" />
      <div className="my-auto grow space-y-3">
        <Skeleton className="h-4 w-[100px] rounded-md" />
        <Skeleton className="h-4 w-[150px] rounded-md" />
        <Skeleton className="h-4 w-[125px] rounded-md" />
      </div>
    </div>
  )
}
