import { Skeleton } from "@nextui-org/react"

export function LoadingLastFm() {
  return (
    <div className="flex max-w-xl items-center space-x-5">
      <Skeleton className="w-[144px] h-[144px] flex-none items-center justify-center self-center rounded-lg animate-pulse" />
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
      <Skeleton className="w-[144px] h-[216px] flex-none items-center justify-center self-center rounded-lg animate-pulse" />
      <div className="my-auto grow space-y-3">
        <Skeleton className="h-4 w-[100px] rounded-md" />
        <Skeleton className="h-4 w-[150px] rounded-md" />
        <Skeleton className="h-4 w-[125px] rounded-md" />
      </div>
    </div>
  )
}
