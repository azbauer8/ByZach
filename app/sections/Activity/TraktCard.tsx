import Image from "next/image"
import { PiPopcornDuotone } from "react-icons/pi"

import { getTimeDiff } from "@/lib/timeCalc"

async function loader() {
  try {
    let response = await fetch(
      `https://api.trakt.tv/users/zacharlatan/watching?extended=full`,
      {
        next: { revalidate: 60 },
        headers: {
          "Content-Type": "application/json",
          "trakt-api-key": `${process.env.TRAKT_API}`,
          "trakt-api-version": "2",
        },
      }
    )
    if (response.status == 204) {
      response = await fetch(
        `https://api.trakt.tv/users/zacharlatan/history?extended=full`,
        {
          next: { revalidate: 60 },
          headers: {
            "Content-Type": "application/json",
            "trakt-api-key": `${process.env.TRAKT_API}`,
            "trakt-api-version": "2",
          },
        }
      )
    }
    const traktData = await response.json()

    const imdbId =
      traktData instanceof Array
        ? traktData[0].type === "episode"
          ? traktData[0].show.ids.imdb
          : traktData[0].movie.ids.imdb
        : traktData.type === "episode"
          ? traktData.show.ids.imdb
          : traktData.movie.ids.imdb

    const imdbData = await fetch(
      `http://omdbapi.com/?apikey=${process.env.OMDB_API}&i=${imdbId}`
    )

    const { Poster } = await imdbData.json()

    return { traktData: traktData, poster: Poster }
  } catch (error) {
    console.error("Error fetching Trakt data:", error)
    return
  }
}

export default async function TraktCard() {
  const data = await loader()

  const traktData = formatTraktData(data?.traktData)

  return (
    <a
      className="flex max-w-xl items-center space-x-5 ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40 dark:ring-offset-zinc-900 dark:focus:ring-red-400/40"
      href={traktData.url || undefined}
    >
      {data ? (
        <Image
          src={data.poster}
          alt={traktData.title}
          priority
          width={0}
          height={0}
          sizes="100vw"
          className="w-1/4 flex-none items-center justify-center self-center rounded-lg"
        />
      ) : (
        <Image
          src={"/trakt_placeholder.svg"}
          alt="Placeholder poster"
          width={0}
          height={0}
          sizes="100vw"
          className="w-1/4 flex-none items-center justify-center self-center rounded-lg"
        />
      )}

      <div className="my-auto grow space-y-0.5">
        <div className="flex flex-row items-center space-x-1 text-red-400">
          <PiPopcornDuotone className="h-5 w-5" />
          <p className="text-sm font-medium">{traktData.playingWhen}</p>
        </div>
        {traktData.episode ? (
          <>
            <p className="font-pop text-lg font-semibold">{traktData.title}</p>
            <p className="font-default text-lg">{`S${traktData.season}E${traktData.epiNumber}: ${traktData.episode}`}</p>
          </>
        ) : (
          <>
            <p className="font-pop text-lg font-semibold">{traktData.title}</p>
            <p className="font-default text-lg italic">{traktData.tagline}</p>
          </>
        )}
      </div>
    </a>
  )
}

function formatTraktData(data: any) {
  let title,
    url = "",
    episode,
    season,
    epiNumber,
    tagline

  const latestWatch = data instanceof Array ? data[0] : data
  const playingWhen = latestWatch.watched_at
    ? getTimeDiff(latestWatch.watched_at, "trakt")
    : "Currently Watching"

  // show
  if (latestWatch.type === "episode") {
    title = latestWatch.show.title
    episode = latestWatch.episode.title
    url = `https://trakt.tv/shows/${latestWatch.show.ids.slug}`
    season = latestWatch.episode.season
    epiNumber = latestWatch.episode.number
  }
  // movie
  else {
    title = latestWatch.movie.title
    url = `https://trakt.tv/movies/${latestWatch.movie.ids.slug}`
    tagline = latestWatch.movie.tagline
  }
  return {
    title,
    url,
    episode,
    season,
    epiNumber,
    tagline,
    playingWhen,
  }
}
