import Image from "next/image"
import { Button } from "@nextui-org/button"
import { Skeleton } from "@nextui-org/skeleton"
import { PiWaveformBold } from "react-icons/pi"

import { getLastFm } from "@/lib/getActivity"
import { Text } from "@/components/ui/text"

export default async function LastFmCard() {
  const data = await getLastFm()
  if (!data) return <LastFmFallback />
  const { latestTrack, playingWhen } = data

  return (
    <Button
      as="a"
      variant="light"
      disableRipple
      className="-mx-3 flex h-auto items-center space-x-5 rounded-lg px-3 py-2"
      href={latestTrack.url}
    >
      <Image
        src={latestTrack.image[3]["#text"]}
        alt={latestTrack.album["#text"]}
        width={144}
        height={144}
        loading="eager"
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        sizes="100vw"
        className="w-1/5 flex-none animate-reveal items-center justify-center self-center rounded-lg"
      />

      <div className="my-auto grow space-y-0.5">
        <div className="flex flex-row items-center space-x-1 text-emerald-600/95 dark:text-emerald-500">
          {playingWhen === "Now Playing" ? (
            <Image src="/bars.svg" alt="Now Playing" width={14} height={14} />
          ) : (
            <PiWaveformBold className="size-5" />
          )}
          <Text affects="small">{playingWhen}</Text>
        </div>
        <Text variant="h5">{latestTrack.name}</Text>
        <Text affects="muted" className="text-sm">
          {latestTrack.artist["#text"]}
        </Text>
      </div>
    </Button>
  )
}

function LastFmFallback() {
  return (
    <div className="flex max-w-xl items-center space-x-5">
      <Skeleton className="aspect-square w-1/4 flex-none animate-pulse items-center justify-center self-center rounded-lg" />
      <div className="my-auto grow space-y-3">
        <Skeleton className="h-4 w-[100px] rounded-lg" />
        <Skeleton className="h-4 w-[150px] rounded-lg" />
        <Skeleton className="h-4 w-[125px] rounded-lg" />
      </div>
    </div>
  )
}
