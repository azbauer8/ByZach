import Image from "next/image"
import { Button } from "@nextui-org/button"
import { PiWaveformBold } from "react-icons/pi"

import { getLastFm } from "@/lib/getActivity"
import { Skeleton } from "@/components/Primitives/Skeleton"
import { Typography } from "@/components/Primitives/Typography"

export default async function LastFmCard() {
  const data = await getLastFm()
  if (!data) return <LastFmFallback />
  const { latestTrack, playingWhen } = data

  return (
    <Button
      as="a"
      variant="light"
      className="-mx-3 flex h-auto items-center space-x-5 rounded-lg px-3 py-2 text-base md:mx-0"
      href={latestTrack.url}
      disableRipple
    >
      <Image
        src={latestTrack.image[3]["#text"] ?? "/lastfm_placeholder.png"}
        alt={latestTrack.album["#text"]}
        width={144}
        height={144}
        loading="eager"
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        sizes="100vw"
        className="aspect-square max-w-[25%] flex-none animate-reveal items-center justify-center self-center rounded-lg"
      />
      <div className="my-auto grow">
        <div className="flex flex-row items-center space-x-1 text-emerald-600/95 dark:text-emerald-500">
          {playingWhen === "Now Playing" ? (
            <Image src="/bars.svg" alt="Now Playing" width={14} height={14} />
          ) : (
            <PiWaveformBold className="size-5" />
          )}
          <Typography affects="small">{playingWhen}</Typography>
        </div>
        <Typography variant="h5">{latestTrack.name}</Typography>
        <Typography affects="muted">{latestTrack.artist["#text"]}</Typography>
      </div>
    </Button>
  )
}

function LastFmFallback() {
  return (
    <div className="flex max-w-xl items-center space-x-5">
      <Image
        src="/lastfm_placeholder.png"
        alt="Album Cover Placeholder"
        width={144}
        height={144}
        loading="eager"
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        sizes="100vw"
        className="w-1/4 flex-none animate-reveal items-center justify-center self-center rounded-lg"
      />
      <div className="my-auto grow space-y-3">
        <Skeleton className="h-4 w-[100px]" disableAnimation />
        <Skeleton className="h-4 w-[150px]" disableAnimation />
        <Skeleton className="h-4 w-[125px]" disableAnimation />
      </div>
    </div>
  )
}
