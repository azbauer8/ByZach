import { Suspense } from "react"
import { cacheLife, cacheTag } from "next/cache"
import type { Metadata } from "next/types"

import { links, pageMetadata } from "@/lib/metadata"
import { getMarkdownContent, notionIds } from "@/lib/notion"
import ContentList from "@/components/ContentList"
import { Markdown } from "@/components/Markdown"
import PageLayout from "@/components/PageLayout"
import Section from "@/components/Section"
import SocialButtons from "@/components/SocialButtons"

import LastFmCard from "./activity/LastfmCard"
import TraktCards from "./activity/TraktCard"

export const metadata: Metadata = {
  title: `${pageMetadata.home.sections.header.title} | ${pageMetadata.home.sections.header.subtitle}`,
}

export default function Home() {
  return (
    <PageLayout
      title={pageMetadata.home.sections.header.title}
      subtitle={pageMetadata.home.sections.header.subtitle}
    >
      <About />
      <SocialButtons
        links={Object.entries(links.professional).map(([, link]) => link)}
      />
      <SiteLinks />
      <Activity />
      <Socials />
    </PageLayout>
  )
}

async function About() {
  "use cache"
  cacheLife("days")
  cacheTag("cache")

  const aboutContent = await getMarkdownContent(notionIds.about)
  return <Markdown source={aboutContent} />
}

function SiteLinks() {
  return (
    <Section
      title={pageMetadata.home.sections.siteLinks.title}
      subtitle={pageMetadata.home.sections.siteLinks.subtitle}
    >
      <ContentList
        noBorder
        noBg
        compact
        list={Object.entries(pageMetadata)
          .map(([, link]) => link)
          .filter(
            (link) =>
              link.title !== pageMetadata.home.title &&
              link.title !== pageMetadata.colophon.title
          )}
      />
    </Section>
  )
}

function Activity() {
  return (
    <Section
      title={pageMetadata.home.sections.activity.title}
      subtitle={pageMetadata.home.sections.activity.subtitle}
    >
      <div className="-mx-2.5 grid grid-cols-1 gap-1 md:grid-cols-3">
        <Suspense fallback={<div>Loading Last.fm...</div>}>
          <LastFmCard />
        </Suspense>
        <Suspense fallback={<div>Loading Trakt...</div>}>
          <TraktCards />
        </Suspense>
      </div>
    </Section>
  )
}

function Socials() {
  return (
    <Section title={pageMetadata.home.sections.activity.socials}>
      <SocialButtons
        links={Object.entries(links.personal).map(([, link]) => link)}
      />
    </Section>
  )
}
