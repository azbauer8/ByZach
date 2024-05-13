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

export const siteMetadata = {
  title: "ByZach",
  description: `Zach Bauer's Personal Website`,
  favicon: "/favicon.png",
  here: "https://byzach.dev",
  hereShort: "byzach.dev",
  source: "https://github.com/azbauer8/ByZach",
}

export const pageMetadata = {
  home: {
    title: "Home",
    subtitle: "",
    link: "/",
    icon: <HomeIcon />,
    sections: {
      header: {
        title: "Zach Bauer",
        subtitle: "Full Stack Developer",
      },
      about: `
        Hey there! I'm Zach. I'm currently working at [SIG](https://sig.com/) developing fullstack applications and internal tools for support teams. In my free time, I like messing around with new technologies. Mostly web dev stuff, but I'm interested in getting into mobile and desktop development too.
        \n\n
        This site is mainly for my own benefit to collect my scattered thoughts and findings in one place. But maybe you'll find something interesting!
      `,
      siteLinks: {
        title: "Links",
      },
      activity: {
        title: "Activity",
        subtitle: "I enjoy consuming media, sometimes.",
        socials: "Follow me on",
      },
    },
  },
  projects: {
    title: "Projects",
    subtitle: "My latest work and experiments.",
    link: "/projects",
    icon: <ProjectsIcon />,
  },
  thoughts: {
    title: "Thoughts",
    subtitle: "Poorly conveyed ideas about web dev and design.",
    link: "/thoughts",
    icon: <ThoughtsIcon />,
  },
  snippets: {
    title: "Snippets",
    subtitle: "Bits of code I often refer back to.",
    link: "/snippets",
    icon: <SnippetsIcon />,
  },
  discoveries: {
    title: "Discoveries",
    subtitle: "Useful links I've found around the web.",
    link: "/discoveries",
    icon: <DiscoveriesIcon />,
  },
  uses: {
    title: "Uses",
    subtitle: "Devices, tools, and technologies I use on a daily basis.",
    link: "/uses",
    icon: <UsesIcon />,
  },
}

export const externalLinks = {
  professional: [
    {
      name: "GitHub",
      href: "https://github.com/azbauer8",
      icon: <GithubIcon />,
    },
    {
      name: "Email",
      href: "mailto:hi@byzach.dev",
      icon: <EmailIcon />,
    },
    {
      name: "Resume",
      href: "/Resume.pdf",
      icon: <ResumeIcon />,
    },
  ],
  personal: [
    {
      name: "Spotify",
      href: "https://open.spotify.com/user/31krvuuup255gx2tkfuueknhctwy",
      icon: <SpotifyIcon />,
    },
    {
      name: "Last.fm",
      href: "https://www.last.fm/user/zacharlatanz",
      icon: <LastfmIcon />,
    },
    {
      name: "Trakt",
      href: "https://trakt.tv/users/zacharlatan",
      icon: <TraktIcon />,
    },
  ],
}
