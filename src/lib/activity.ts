import "server-only"

export async function getLastFm() {
  try {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=zacharlatanz&api_key=${process.env.LAST_FM_API}&format=json`,
      { next: { revalidate: 10 } }
    )
    const data: LastFmData | undefined = await response.json()
    if (!data) return
    const latestTrack = data.recenttracks.track[0]
    const playingWhen = latestTrack["@attr"]?.nowplaying
      ? "Now Playing"
      : getTimeDiff(latestTrack.date["#text"], "lastfm")

    return {
      latestTrack,
      playingWhen,
    }
  } catch (e) {
    return
  }
}

export async function getTrakt() {
  try {
    const response = await fetch(
      "https://api.trakt.tv/users/zacharlatan/history?extended=full",
      {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-key": `${process.env.TRAKT_API}`,
          "trakt-api-version": "2",
        },
        next: { revalidate: 10 },
      }
    )
    const traktData: TraktEntry[] | undefined = await response.json()
    if (!traktData) return
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
      tmdbId:
        latest?.type === "episode"
          ? latest.show?.ids.tmdb
          : latest.movie?.ids.tmdb,
    }
    const latestPoster = await getTraktPoster(
      latestData.tmdbId,
      latestData.type
    )
    if (!latestPoster) return { data: latestData, poster: undefined }
    return {
      data: latestData,
      poster: latestPoster,
    }
  } catch (e) {
    return
  }
}

async function getTraktPoster(
  tmdbId: number | undefined,
  type: "movie" | "episode"
) {
  const baseUrl = "https://api.themoviedb.org/3/configuration"
  const imageUrl = `https://api.themoviedb.org/3/${type === "episode" ? "tv" : "movie"}/${tmdbId}/images`
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API}`,
    },
    next: { revalidate: 10 },
  }
  try {
    const baseData: TraktPosterBase | undefined = await fetch(
      baseUrl,
      options
    ).then((res) => res.json())

    const posterData: TraktPosterData | undefined = await fetch(
      imageUrl,
      options
    ).then((res) => res.json())

    return `${baseData?.images.base_url}w500/${posterData?.posters[0].file_path}`
  } catch (e) {}
}

function getTimeDiff(givenDate: string, type: "lastfm" | "trakt") {
  const givenDatetime =
    type === "trakt" ? new Date(`${givenDate}`) : new Date(`${givenDate} UTC`)
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
    if (type === "trakt" && minutesAgo < 10) {
      return "Currently Watching"
    }
    if (minutesAgo === 1) {
      return `${minutesAgo} min ago`
    }
    return `${minutesAgo} mins ago`
  }
  if (daysAgo === 0) {
    if (hoursAgo === 1) {
      return `${hoursAgo} hour ago`
    }
    return `${hoursAgo} hours ago`
  }
  if (daysAgo === 1) {
    return `${daysAgo} day ago`
  }
  return `${daysAgo} days ago`
}

type LastFmData = {
  recenttracks: {
    track: LastFmTrack[]
  }
}

type LastFmTrack = {
  name: string
  url: string
  date: { "#text": string }
  "@attr"?: { nowplaying: "true" }
  artist: {
    "#text": string
  }
  album: {
    "#text": string
  }
  image: [
    {
      size: "small"
      "#text": string
    },
    {
      size: "medium"
      "#text": string
    },
    {
      size: "large"
      "#text": string
    },
    {
      size: "extralarge"
      "#text": string
    },
  ]
}

type TraktEntry = {
  id: number
  watched_at: string
  action: "scrobble" | "watch" | "checkin"
  type: "movie" | "episode"
  movie?: {
    title: string
    tagline: string
    overview: string
    year: number
    ids: {
      trakt: number
      tmdb: number
      slug: string
      imdb: string
    }
  }
  episode?: {
    title: string
    season: number
    number: number
    ids: {
      trakt: number
      tmdb: number
      slug: string
      imdb: string
    }
  }
  show?: {
    title: string
    year: number
    ids: {
      trakt: number
      tmdb: number
      slug: string
      imdb: string
    }
  }
}

type TraktPosterBase = {
  images: {
    base_url: string
    secure_base_url: string
    backdrop_sizes: ["w300", "w780", "w1280", "original"]
    logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"]
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"]
    profile_sizes: ["w45", "w185", "h632", "original"]
    still_sizes: ["w92", "w185", "w300", "original"]
  }
}

type TraktPosterData = {
  id: number
  posters: TraktPosterDataEntry[]
  backdrops: TraktPosterDataEntry[]
  logos: TraktPosterDataEntry
}

type TraktPosterDataEntry = {
  aspect_ratio: number
  height: number
  iso_639_1: string | null
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}
