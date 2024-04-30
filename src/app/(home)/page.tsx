import type { Metadata } from "next/types"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"

import { pageHeaders, siteLinks } from "@/lib/consts"
import PageLayout from "@/components/PageLayout"
import { Typography } from "@/components/Primitives/Typography"
import RecentContent from "@/app/(home)/RecentContent"

import LastFmCard from "./LastfmCard"
import TraktCard from "./TraktCard"

export const metadata: Metadata = {
  title: `${pageHeaders.about.title} | ${pageHeaders.about.subtitle}`,
}

export default function Home() {
  return (
    <PageLayout
      title={pageHeaders.about.title}
      subtitle={pageHeaders.about.subtitle}
    >
      <About />
      <RecentContent />
      <Activity />
      <Socials />
    </PageLayout>
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
          underline="hover"
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
          underline="hover"
          isExternal
        >
          Pitt
        </Link>
        {` with a bachelor's in information science.`}
      </Typography>
      <div className="-mx-3 flex flex-wrap items-center gap-1">
        {siteLinks.professional.map((link) => (
          <Button
            key={link.name}
            href={link.href}
            as={Link}
            isExternal
            variant="light"
            startContent={link.icon}
            disableRipple
            className="px-3"
          >
            {link.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

function Activity() {
  return (
    <div className="space-y-0.5">
      <Typography variant="h3">{pageHeaders.activity.title}</Typography>
      <Typography variant="p" affects="muted">
        {pageHeaders.activity.subtitle}
      </Typography>
      <LastFmCard />
      <TraktCard />
    </div>
  )
}

function Socials() {
  return (
    <div className="space-y-2">
      <Typography variant="h3">{pageHeaders.activity.socials}</Typography>
      <div className="-mx-3 flex flex-wrap items-center gap-1">
        {siteLinks.personal.map((link) => (
          <Button
            key={link.name}
            href={link.href}
            as={Link}
            isExternal
            variant="light"
            startContent={link.icon}
            disableRipple
            className="px-3"
          >
            {link.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
