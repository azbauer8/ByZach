import iconFallback from "~/public/fallback_icon.png"
import fallback from "~/public/fallback.png"
import lastfmFallback from "~/public/lastfm_placeholder.png"
import nowPlaying from "~/public/now_playing.svg"
import traktFallback from "~/public/trakt_placeholder.png"

import {
  DiscoveriesIcon,
  EmailIcon,
  GithubIcon,
  HomeIcon,
  LastfmIcon,
  ProjectsIcon,
  ResumeIcon,
  SnippetsIcon,
  SpotifyIcon,
  ThoughtsIcon,
  TraktIcon,
  UsesIcon,
} from "@/components/Icons"

export const imageSources = {
  fallback,
  iconFallback,
  lastfmFallback,
  traktFallback,
  nowPlaying,
}

export const siteMetadata = {
  title: "ByZach",
  description: `Zach Bauer's Personal Website`,
  footer: "Created by Zach Bauer",
  favicon: "/favicon.png",
  here: {
    full: "https://byzach.dev",
    short: "byzach.dev",
  },
  source: {
    title: "Source",
    link: "https://github.com/azbauer8/ByZach",
  },
}

export const pageMetadata = {
  home: {
    title: "Home",
    subtitle: "",
    link: "/",
    icon: HomeIcon,
    sections: {
      header: {
        title: "Zach Bauer",
        subtitle: "Full Stack Developer",
      },
      siteLinks: {
        title: "Links",
        subtitle: "Peruse the site, if you so desire.",
      },
      activity: {
        title: "Activity",
        subtitle: "I enjoy consuming media, sometimes.",
        socials: "Follow me on",
      },
    },
  },
  colophon: {
    title: "Colophon",
    subtitle: "An overview of how I built this site.",
    link: "/colophon",
    icon: HomeIcon,
  },
  projects: {
    title: "Projects",
    subtitle: "My latest work and experiments.",
    link: "/projects",
    icon: ProjectsIcon,
  },
  thoughts: {
    title: "Thoughts",
    subtitle: "Poorly conveyed ideas about web dev and design.",
    link: "/thoughts",
    icon: ThoughtsIcon,
  },
  snippets: {
    title: "Snippets",
    subtitle: "Bits of code I often refer back to.",
    link: "/snippets",
    icon: SnippetsIcon,
  },
  discoveries: {
    title: "Discoveries",
    subtitle: "Useful links I've found around the web.",
    link: "/discoveries",
    icon: DiscoveriesIcon,
  },
  uses: {
    title: "Uses",
    subtitle: "Tools and technologies I use on a daily basis.",
    link: "/uses",
    icon: UsesIcon,
  },
}

export const externalLinks = {
  professional: [
    {
      name: "GitHub",
      href: "https://github.com/azbauer8",
      icon: GithubIcon,
    },
    {
      name: "Email",
      href: "mailto:hi@byzach.dev",
      icon: EmailIcon,
    },
    {
      name: "Resume",
      href: "/Resume.pdf",
      icon: ResumeIcon,
    },
  ],
  personal: [
    {
      name: "Spotify",
      href: "https://open.spotify.com/user/31krvuuup255gx2tkfuueknhctwy",
      icon: SpotifyIcon,
    },
    {
      name: "Last.fm",
      href: "https://www.last.fm/user/zacharlatanz",
      icon: LastfmIcon,
    },
    {
      name: "Trakt",
      href: "https://trakt.tv/users/zacharlatan",
      icon: TraktIcon,
    },
  ],
}
