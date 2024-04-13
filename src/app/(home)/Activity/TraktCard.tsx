import { unstable_noStore } from "next/cache"
import Image from "next/image"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

import { TraktEntry } from "@/types/apiData"
import { Typography } from "@/components/ui/typography"

import { LoadingTrakt } from "./ActivityLoading"
import { getTimeDiff } from "./timeCalc"

async function loader() {
  unstable_noStore()
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
      className="flex max-w-xl items-center space-x-5 ring-offset-4 transition hover:opacity-60 active:opacity-60"
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
          <Icon icon="ph:popcorn-duotone" className="size-5" />
          <Typography affects="small">{data.traktData.playingWhen}</Typography>
        </div>
        <Typography variant="h5">{data.traktData.title}</Typography>
        {data.traktData.episode ? (
          <>
            <Typography affects="muted">{`S${data.traktData.season}E${data.traktData.episodeNum}: ${data.traktData.episode}`}</Typography>
          </>
        ) : (
          <>
            <Typography affects="muted" className="italic">
              {data.traktData.tagline}
            </Typography>
          </>
        )}
      </div>
    </a>
  )
}
