import { siteLinks } from "@/config"
import { Link } from "@nextui-org/link"

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
      </Text>
    </>
  )
}
