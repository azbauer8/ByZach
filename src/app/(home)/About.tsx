import { siteLinks } from "@/config"

import { InlineAnchor } from "@/components/ui/anchor"
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
        <InlineAnchor href={siteLinks.sig}>SIG</InlineAnchor>
        {
          " developing internal monitoring and operations tools for support teams. In 2021, I graduated from "
        }
        <InlineAnchor href={siteLinks.pitt}>Pitt</InlineAnchor>
        {` with a bachelor's in information science.`}
      </Text>
    </>
  )
}
