import { unstable_noStore } from "next/cache"
import Image from "next/image"
import { PiPopcornBold } from "react-icons/pi"

import { TraktEntry } from "@/types/apiData"
import { Typography } from "@/components/ui/typography"
import { getTimeDiff } from "@/app/(home)/Activity/activityCalc"

import { LoadingTrakt } from "./Activity.loading"

async function getTrakt() {
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
    return {
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
      tmdbId:
        latest?.type === "episode"
          ? latest.show?.ids.tmdb
          : latest.movie?.ids.tmdb,
    }
  } catch (e) {
    return
  }
}

async function getTraktPoster(tmdbId: number | undefined) {
  unstable_noStore()
  const baseUrl = "https://api.themoviedb.org/3/configuration"
  const imageUrl = `https://api.themoviedb.org/3/tv/${tmdbId}/images`
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API}`,
    },
  }
  try {
    const baseData = await fetch(baseUrl, options)
      .then((res) => res.json())
      .catch((err) => console.error("error:" + err))

    const posterData = await fetch(imageUrl, options)
      .then((res) => res.json())
      .catch((err) => console.error("error:" + err))

    return `${baseData.images.base_url}w500/${posterData.posters[0].file_path}`
  } catch (e) {}
}

export default async function TraktCard() {
  const data = await getTrakt()
  if (!data) return <LoadingTrakt />
  const poster = await getTraktPoster(data?.tmdbId)

  return (
    <a
      className="flex max-w-xl items-center space-x-5 ring-offset-4 transition hover:opacity-60 active:opacity-60"
      href={data.url}
    >
      <Image
        src={poster ?? "/trakt_placeholder.svg"}
        alt={data.title}
        width={144}
        height={216}
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        sizes="100vw"
        className="w-1/4 flex-none items-center justify-center self-center rounded-lg"
      />

      <div className="my-auto grow space-y-0.5">
        <div className="flex flex-row items-center space-x-1 text-red-500/95 dark:text-red-400">
          <PiPopcornBold className="size-5" />
          <Typography affects="small">{data.playingWhen}</Typography>
        </div>
        <Typography variant="h5">{data.title}</Typography>
        {data.episode ? (
          <>
            <Typography affects="muted">{`S${data.season}E${data.episodeNum}: ${data.episode}`}</Typography>
          </>
        ) : (
          <>
            <Typography affects="muted" className="italic">
              {data.tagline}
            </Typography>
          </>
        )}
      </div>
    </a>
  )
}
