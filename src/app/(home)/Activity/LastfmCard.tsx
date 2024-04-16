import { unstable_noStore } from "next/cache"
import Image from "next/image"
import { PiWaveformBold } from "react-icons/pi"

import { LastFmData } from "@/types/apiData"
import { Typography } from "@/components/ui/typography"
import { getTimeDiff } from "@/app/(home)/Activity/activityCalc"

import { LoadingLastFm } from "./Activity.loading"

async function loader() {
  unstable_noStore()
  try {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=zacharlatanz&api_key=${process.env.LAST_FM_API}&format=json`
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
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        sizes="100vw"
        className="w-1/4 flex-none items-center justify-center self-center rounded-lg"
      />

      <div className="my-auto grow space-y-0.5">
        <div className="flex flex-row items-center space-x-1 text-emerald-500">
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
    </a>
  )
}
