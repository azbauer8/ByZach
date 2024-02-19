import Image from "next/image"
import { PiPopcornDuotone } from "react-icons/pi"

import { TraktEntry } from "@/types/apiData"

import { LoadingTrakt } from "./loaders"
import { getTimeDiff } from "./timeCalc"

async function loader() {
  try {
    const response = await fetch(
      "https://api.trakt.tv/users/zacharlatan/history?extended=full",
      {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-key": `${process.env.TRAKT_API}`,
          "trakt-api-version": "2",
        },
      }
    )
    const traktData: TraktEntry[] = await response.json()
    const latest = traktData[0]
    const latestData = {
      type: latest.type,
      title: latest.show
        ? latest.show.title
        : latest.movie
          ? latest.movie.title
          : "",
      url: latest.show
        ? `https://trakt.tv/shows/${latest.show.ids.slug}`
        : `https://trakt.tv/movies/${latest.movie?.ids.slug}`,

      playingWhen: latest.watched_at
        ? getTimeDiff(latest.watched_at, "trakt")
        : "Currently Watching",
      tagline: latest.movie?.tagline,
      episode: latest.episode?.title ?? undefined,
      season: latest.episode?.season ?? undefined,
      episodeNum: latest.episode?.number ?? undefined,
    }

    const imdbId =
      latest.type === "episode" ? latest.show?.ids.imdb : latest.movie?.ids.imdb

    const imdbData = await fetch(
      `http://omdbapi.com/?apikey=${process.env.OMDB_API}&i=${imdbId}`
    )

    const { Poster }: { Poster: string } = await imdbData.json()

    return { traktData: latestData, poster: Poster }
  } catch (e) {
    return
  }
}

export default async function TraktCard() {
  const data = await loader()

  if (!data) return <LoadingTrakt />

  return (
    <a
      className="flex max-w-xl items-center space-x-5 ring-offset-4 transition hover:opacity-60"
      href={data.traktData.url}
    >
      <Image
        src={data.poster}
        alt={data.traktData.title}
        width={144}
        height={216}
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        sizes="100vw"
        className="w-1/4 flex-none items-center justify-center self-center rounded-lg"
      />

      <div className="my-auto grow space-y-0.5">
        <div className="flex flex-row items-center space-x-1 text-red-400">
          <PiPopcornDuotone className="size-5" />
          <p className="text-sm font-medium">{data.traktData.playingWhen}</p>
        </div>
        {data.traktData.episode ? (
          <>
            <p className="text-lg font-semibold text-pop">
              {data.traktData.title}
            </p>
            <p className="text-lg">{`S${data.traktData.season}E${data.traktData.episodeNum}: ${data.traktData.episode}`}</p>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold text-pop">
              {data.traktData.title}
            </p>
            <p className="text-lg italic">{data.traktData.tagline}</p>
          </>
        )}
      </div>
    </a>
  )
}
