import { Suspense } from "react"
import { cacheLife, cacheTag } from "next/cache"
import type { Metadata } from "next/types"

import { links, pageMetadata } from "@/lib/metadata"
import { getMarkdownContent, notionIds } from "@/lib/notion"
import { Skeleton } from "@/components/ui/skeleton"
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
        <Suspense
          fallback={
            <div className="flex items-center gap-6 px-2.5 py-2">
              <Skeleton className="aspect-square w-full max-w-[25%]" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-18" />
                <Skeleton className="h-4 w-30" />
                <Skeleton className="h-4 w-22" />
              </div>
            </div>
          }
        >
          <LastFmCard />
        </Suspense>

        <Suspense
          fallback={
            <>
              <div className="flex items-center gap-6 px-2.5 py-2">
                <Skeleton className="aspect-2/3 w-full max-w-[25%]" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-18" />
                  <Skeleton className="h-4 w-30" />
                  <Skeleton className="h-4 w-22" />
                </div>
              </div>
              <div className="flex items-center gap-6 px-2.5 py-2">
                <Skeleton className="aspect-2/3 w-full max-w-[25%]" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-18" />
                  <Skeleton className="h-4 w-30" />
                  <Skeleton className="h-4 w-22" />
                </div>
              </div>
            </>
          }
        >
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
