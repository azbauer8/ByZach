import { getTimeDiff } from "./timeCalc"

export function formatTraktData(data: any) {
  let title,
    url = "",
    episode,
    season,
    epiNumber,
    tagline

  const latestWatch = data instanceof Array ? data[0] : data
  const playingWhen = latestWatch.watched_at
    ? getTimeDiff(latestWatch.watched_at)
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
