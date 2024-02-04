import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

export default function LoadingActivity() {
	return (
		<div className="space-y-5">
			<div className="flex max-w-xl items-center space-x-5">
				<Image
					src="/lastfm_placeholder.png"
					alt="Placeholder album art"
					width={0}
					height={0}
					sizes="100vw"
					className="w-1/4 flex-none items-center justify-center self-center rounded-lg animate-pulse"
				/>
				<div className="my-auto grow space-y-3">
					<Skeleton className="h-4 w-[100px]" />
					<Skeleton className="h-4 w-[150px]" />
					<Skeleton className="h-4 w-[125px]" />
				</div>
			</div>
			<div className="flex max-w-xl items-center space-x-5">
				<Image
					src="/trakt_placeholder.svg"
					alt="Placeholder album art"
					width={0}
					height={0}
					sizes="100vw"
					className="w-1/4 flex-none items-center justify-center self-center rounded-lg animate-pulse"
				/>
				<div className="my-auto grow space-y-3">
					<Skeleton className="h-4 w-[100px]" />
					<Skeleton className="h-4 w-[150px]" />
					<Skeleton className="h-4 w-[125px]" />
				</div>
			</div>
		</div>
	)
}
