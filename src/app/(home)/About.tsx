import { siteLinks } from "@/config"

import Anchor from "@/components/ui/anchor"
import { Text } from "@/components/ui/text"

export default function About() {
  return (
    <>
      <div>
        <Text variant="h2">Zach Bauer</Text>
        <Text affects="lead">Full Stack Developer</Text>
      </div>
      <Text variant="p" affects="muted">
        {`Hey there! I'm Zach. I'm currently living in Philly
       and working at `}
        <Anchor href={siteLinks.sig} isExternal>
          SIG
        </Anchor>
        {` developing internal monitoring and operations tools for support teams. In 2021, I graduated from `}
        <Anchor href={siteLinks.pitt} isExternal>
          Pitt
        </Anchor>
        {` with a bachelor's in information science.`}
      </Text>
    </>
  )
}
