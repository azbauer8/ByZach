import { Metadata } from "next/types"
import { siteConfig } from "@/config"

import { Anchor, Typography } from "@/components/ui/typography"
import { HomeLayout } from "@/components/Layouts"
import Activity from "@/app/(home)/Activity"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <HomeLayout>
      <div>
        <Typography variant="h2">Zach Bauer</Typography>
        <Typography affects="lead">Full Stack Developer</Typography>
      </div>
      <Typography variant="p" affects="muted">
        {`Hey there! I'm Zach. I'm currently living in Philly
   and working at `}
        <Anchor href={siteConfig.links.sig}>SIG</Anchor>
        {` developing internal monitoring and operations tools for support teams. In 2021, I graduated from `}
        <Anchor href={siteConfig.links.pitt}>Pitt</Anchor>
        {` with a bachelor's in information science.`}
      </Typography>
      <Activity />
    </HomeLayout>
  )
}
