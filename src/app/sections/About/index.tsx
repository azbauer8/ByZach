import { links } from "@/data/links"

import Philly from "@/app/sections/About/Philly"
import IconLink from "@/components/IconLink"
import { siteConfig } from "@/data/site"
import { Link } from "@nextui-org/react"

export default function About() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-pop">Zach Bauer</h1>
        <h2 className="text-lg">Full Stack Developer</h2>
      </div>
      <div>
        <div className="max-w-xl leading-loose">
          {`Hey there! I'm Zach. I'm currently living in `}
          <Philly /> {"and working at "}
          <Link
            href={siteConfig.links.sig}
            aria-label="SIG"
            color="foreground"
            underline="always"
            className="text-pop"
          >
            SIG
          </Link>
          {
            " developing internal monitoring and operations tools for support teams. In 2021, I graduated from "
          }
          <Link
            href={siteConfig.links.pitt}
            aria-label="Pitt"
            color="foreground"
            underline="always"
            className="text-pop"
          >
            Pitt
          </Link>
          {` with a bachelor's in information science.`}
        </div>
        <div className="mt-3">
          {links.about.map((link) => (
            <IconLink key={link.url} link={link} />
          ))}
        </div>
      </div>
    </div>
  )
}
