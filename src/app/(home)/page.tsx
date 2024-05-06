import type { Metadata } from "next/types"
import { externalLinks, pageMetadata } from "@/siteData"

import { Markdown } from "@/components/Markdown"
import PageContent from "@/components/PageContent"
import SocialButtons from "@/components/SocialButtons"
import TextContentList from "@/components/TextContentList"
import { Typography } from "@/components/Typography"

import LastFmCard from "./LastfmCard"
import TraktCard from "./TraktCard"

export const metadata: Metadata = {
  title: `${pageMetadata.home.sections.header.title} | ${pageMetadata.home.sections.header.subtitle}`,
}

export default function Home() {
  return (
    <PageContent
      title={pageMetadata.home.sections.header.title}
      subtitle={pageMetadata.home.sections.header.subtitle}
      className="space-y-8"
    >
      <About />
      <SiteLinks />
      <Activity />
      <Socials />
    </PageContent>
  )
}

function About() {
  return (
    <div className="space-y-2">
      <Markdown source={pageMetadata.home.sections?.about ?? ""} />
      <SocialButtons links={externalLinks.professional} />
    </div>
  )
}

function SiteLinks() {
  return (
    <div className="space-y-4">
      <Typography className="font-semibold leading-none">
        {pageMetadata.home.sections.siteLinks.title}
      </Typography>
      <TextContentList
        list={Object.entries(pageMetadata)
          .map(([, link]) => link)
          .filter((link) => link.title !== "Home")}
      />
    </div>
  )
}

function Activity() {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <Typography className="font-semibold leading-none">
          {pageMetadata.home.sections.activity.title}
        </Typography>
        <Typography affects="muted">
          {pageMetadata.home.sections.activity.subtitle}
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-0.5 md:-mx-3 md:grid-cols-2">
        <LastFmCard />
        <TraktCard />
      </div>
    </div>
  )
}

function Socials() {
  return (
    <div className="space-y-2">
      <Typography className="font-semibold leading-none">
        {pageMetadata.home.sections.activity.socials}
      </Typography>
      <SocialButtons links={externalLinks.personal} />
    </div>
  )
}
