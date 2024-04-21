export type LastFmData = {
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

export type TraktEntry = {
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
