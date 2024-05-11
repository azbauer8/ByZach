import { Icon } from "@iconify-icon/react"

export const siteMetadata = {
  title: "ByZach",
  description: `Zach Bauer's Personal Website`,
  favicon: "/favicon.png",
  here: "https://byzach.dev",
  hereShort: "byzach.dev",
}

export const pageMetadata = {
  home: {
    title: "Home",
    subtitle: "",
    link: "/",
    icon: "fa6-solid:hand-peace",
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
    icon: "fa6-solid:laptop",
  },
  thoughts: {
    title: "Thoughts",
    subtitle: "Poorly conveyed ideas about technology, design, and the web.",
    link: "/thoughts",
    icon: "fa6-solid:brain",
  },
  snippets: {
    title: "Snippets",
    subtitle: "Bits of code I often refer back to.",
    link: "/snippets",
    icon: "fa6-solid:code",
  },
  discoveries: {
    title: "Discoveries",
    subtitle: "Useful links I've found around the web.",
    link: "/discoveries",
    icon: "fa6-solid:bookmark",
  },
  uses: {
    title: "Uses",
    subtitle: "Devices, tools, and technologies I use on a daily basis.",
    link: "/uses",
    icon: "fa6-solid:hammer",
  },
}

export const externalLinks = {
  professional: [
    {
      name: "GitHub",
      href: "https://github.com/azbauer8",
      icon: "fa6-brands:github",
    },
    {
      name: "Email",
      href: "mailto:hi@byzach.dev",
      icon: "fa6-solid:at",
    },
    {
      name: "Resume",
      href: "/Resume.pdf",
      icon: "fa6-solid:file-pdf",
    },
  ],
  personal: [
    {
      name: "Spotify",
      href: "https://open.spotify.com/user/31krvuuup255gx2tkfuueknhctwy",
      icon: "fa6-brands:spotify",
    },
    {
      name: "Last.fm",
      href: "https://www.last.fm/user/zacharlatanz",
      icon: "fa6-brands:square-lastfm",
    },
    {
      name: "Trakt",
      href: "https://trakt.tv/users/zacharlatan",
      icon: "simple-icons:trakt",
    },
  ],
}
