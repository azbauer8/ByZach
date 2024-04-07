import { siteLinks } from "@/config"
import { Link } from "@nextui-org/link"

import { Typography } from "@/components/ui/typography"

export default function About() {
  return (
    <>
      <div>
        <Typography variant="h2">Zach Bauer</Typography>
        <Typography affects="lead">Full Stack Developer</Typography>
      </div>
      <Typography variant="p" affects="muted">
        {`Hey there! I'm Zach. I'm currently living in Philly
       and working at `}
        <Link href={siteLinks.sig} underline="hover">
          SIG
        </Link>
        {` developing internal monitoring and operations tools for support teams. In 2021, I graduated from `}
        <Link href={siteLinks.pitt} underline="hover">
          Pitt
        </Link>
        {` with a bachelor's in information science.`}
      </Typography>
    </>
  )
}
