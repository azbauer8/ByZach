import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import { PiPopcornDuotone } from "react-icons/pi"

import fetchImdb from "@/lib/fetchImdb"
import fetchTrakt from "@/lib/fetchTrakt"

import traktPlaceholder from "../assets/trakt_placeholder.svg"
import { Skeleton } from "./ui/skeleton"

const TraktCard = () => {
  let playingWhen,
    title,
    url = "",
    episode,
    season,
    epiNumber,
    latestWatch,
    tagline
  const { isSuccess, isLoading, data } = useQuery({
    queryKey: ["trakt"],
    queryFn: () => fetchTrakt(),
  })
  const {
    isSuccess: isSuccessImdb,
    data: dataImdb,
    isLoading: isLoadingImdb,
  } = useQuery({
    queryKey: ["imdb"],
    queryFn: () => {
      const imdbId =
        data instanceof Array
          ? data[0].type === "episode"
            ? data[0].show.ids.imdb
            : data[0].movie.ids.imdb
          : data.type === "episode"
            ? data.show.ids.imdb
            : data.movie.ids.imdb
      return fetchImdb(imdbId)
    },
    enabled: !!data,
  })

  // history
  if (isSuccess && data instanceof Array) {
    latestWatch = data[0]
    playingWhen = getTimeDiff(latestWatch.watched_at)
  }
  // watching
  else if (isSuccess) {
    latestWatch = data
    playingWhen = "Currently Watching"
  }

  // show
  if (isSuccess && latestWatch.type === "episode") {
    title = latestWatch.show.title
    episode = latestWatch.episode.title
    url = `https://trakt.tv/shows/${latestWatch.show.ids.slug}`
    season = latestWatch.episode.season
    epiNumber = latestWatch.episode.number
  }
  // movie
  else if (isSuccess) {
    title = latestWatch.movie.title
    url = `https://trakt.tv/movies/${latestWatch.movie.ids.slug}`
    tagline = latestWatch.movie.tagline
  }

  return (
    <a
      className={`flex max-w-xl items-center space-x-5 ${
        isSuccess
          ? "ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40 dark:ring-offset-zinc-900 dark:focus:ring-red-400/40"
          : undefined
      }`}
      href={url || undefined}
    >
      {isSuccessImdb && dataImdb ? (
        <Image
          src={dataImdb}
          alt={title}
          priority
          width={0}
          height={0}
          sizes="100vw"
          className="w-1/4 flex-none items-center justify-center self-center rounded-lg"
        />
      ) : (
        <Image
          src={traktPlaceholder}
          alt="Placeholder poster"
          width={0}
          height={0}
          sizes="100vw"
          className={`w-1/4 flex-none items-center justify-center self-center rounded-lg ${
            isLoadingImdb ? `animate-pulse` : ""
          }`}
        />
      )}
      <>
        {isLoading ? (
          <div className="my-auto grow space-y-3">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[125px]" />
          </div>
        ) : (
          <div className="my-auto grow space-y-0.5">
            <div className="flex flex-row items-center space-x-1 text-red-400">
              <PiPopcornDuotone className="h-5 w-5" />
              <p className="text-sm font-medium">{playingWhen}</p>
            </div>
            {episode ? (
              <>
                <p className="font-pop text-lg font-semibold">{title}</p>
                <p className="font-default text-lg">{`S${season}E${epiNumber}: ${episode}`}</p>
              </>
            ) : (
              <>
                <p className="font-pop text-lg font-semibold">{title}</p>
                <p className="font-default text-lg italic">{tagline}</p>
              </>
            )}
          </div>
        )}
      </>
    </a>
  )
}

function getTimeDiff(givenDate: string) {
  const givenDatetime = new Date(`${givenDate}`)
  const currentDatetime = new Date()

  const timeDifferenceInMilliseconds =
    currentDatetime.valueOf() - givenDatetime.valueOf()

  const timeDifferenceInSeconds = timeDifferenceInMilliseconds / 1000

  const secondsInMinute = 60
  const secondsInHour = secondsInMinute * 60
  const secondsInDay = secondsInHour * 24

  const daysAgo = Math.floor(timeDifferenceInSeconds / secondsInDay)
  const hoursAgo = Math.floor(
    (timeDifferenceInSeconds % secondsInDay) / secondsInHour
  )
  const minutesAgo = Math.floor(
    ((timeDifferenceInSeconds % secondsInDay) % secondsInHour) / secondsInMinute
  )

  if (daysAgo === 0 && hoursAgo === 0) {
    if (minutesAgo < 10) {
      return "Currently Watching"
    }
    return `${minutesAgo} mins ago`
  } else if (daysAgo === 0) {
    if (hoursAgo === 1) {
      return `${hoursAgo} hour ago`
    }
    return `${hoursAgo} hours ago`
  } else {
    if (daysAgo === 1) {
      return `${daysAgo} day ago`
    }
    return `${daysAgo} days ago`
  }
}

export default TraktCard
