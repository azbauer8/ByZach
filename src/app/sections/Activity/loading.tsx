import { Skeleton } from "@/components/ui/skeleton"

export function Loading() {
  return (
    <div className="space-y-5">
      <div className="flex max-w-xl items-center space-x-5">
        <Skeleton className="w-[144px] h-[144px] flex-none items-center justify-center self-center rounded-lg animate-pulse" />
        <div className="my-auto grow space-y-3">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[125px]" />
        </div>
      </div>
      <div className="flex max-w-xl items-center space-x-5">
        <Skeleton className="w-[144px] h-[216px] flex-none items-center justify-center self-center rounded-lg animate-pulse" />
        <div className="my-auto grow space-y-3">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[125px]" />
        </div>
      </div>
    </div>
  )
}
