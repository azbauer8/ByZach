import type { Metadata } from "next/types"
import { Link } from "@nextui-org/link"

import { pageHeaders, siteLinks } from "@/lib/consts"
import PageContent from "@/components/PageContent"
import SocialButtons from "@/components/SocialButtons"
import { Typography } from "@/components/Typography"
import RecentContent from "./RecentContent"

import LastFmCard from "./LastfmCard"
import TraktCard from "./TraktCard"

export const metadata: Metadata = {
  title: `${pageHeaders.about.title} | ${pageHeaders.about.subtitle}`,
}

export default function Home() {
  return (
    <PageContent
      title={pageHeaders.about.title}
      subtitle={pageHeaders.about.subtitle}
      className="space-y-8"
    >
      <About />
      <RecentContent />
      <Activity />
      <Socials />
    </PageContent>
  )
}

function About() {
  return (
    <div className="space-y-2">
      <Typography variant="p" affects="muted">
        {`Hey there! I'm Zach. I'm currently living in Philly
         and working at `}
        <Link
          href={siteLinks.sig}
          color="foreground"
          underline="none"
          isExternal
        >
          SIG
        </Link>
        {
          " developing internal monitoring and operations tools for support teams. In 2021, I graduated from "
        }
        <Link
          href={siteLinks.pitt}
          color="foreground"
          underline="none"
          isExternal
        >
          Pitt
        </Link>
        {` with a bachelor's in information science.`}
      </Typography>
      <SocialButtons links={siteLinks.professional} />
    </div>
  )
}

function Activity() {
  return (
    <div className="space-y-4">
      <Typography className="font-semibold leading-none">
        {pageHeaders.activity.title}
      </Typography>
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
        {pageHeaders.activity.socials}
      </Typography>
      <SocialButtons links={siteLinks.personal} />
    </div>
  )
}
