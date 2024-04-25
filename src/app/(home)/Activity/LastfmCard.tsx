import Image from "next/image"
import { PiWaveformBold } from "react-icons/pi"

import type { LastFmData } from "@/types/apiData"
import { Text } from "@/components/ui/text"
import { getTimeDiff } from "@/app/(home)/Activity/activityCalc"

import { LoadingLastFm } from "./Activity.loading"

async function loader() {
  try {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=zacharlatanz&api_key=${process.env.LAST_FM_API}&format=json`,
      { next: { revalidate: 10 } }
    )
    return (await response.json()) as LastFmData
  } catch (e) {
    return
  }
}

export default async function LastFmCard() {
  const data = await loader()

  if (!data) return <LoadingLastFm />

  const latestTrack = data.recenttracks.track[0]
  const playingWhen = latestTrack["@attr"]?.nowplaying
    ? "Now Playing"
    : getTimeDiff(latestTrack.date["#text"], "lastfm")

  return (
    <a
      className={
        "flex max-w-xl items-center space-x-5 ring-offset-4 transition hover:opacity-60 active:opacity-60"
      }
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
        className="w-1/4 flex-none animate-reveal items-center justify-center self-center rounded-lg"
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
        <Text affects="muted">{latestTrack.artist["#text"]}</Text>
      </div>
    </a>
  )
}
