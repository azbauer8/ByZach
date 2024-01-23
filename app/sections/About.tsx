import { links } from "@/data/links"

import IconLink from "@/components/IconLink"
import Philly from "@/components/Philly"

export default function About() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Zach Bauer</h1>
        <h2 className="font-default text-lg">Full Stack Developer</h2>
      </div>
      <div>
        <div className="max-w-xl leading-loose">
          {`Hey there! I'm Zach. I'm currently living in `}
          <Philly /> {`and working at `}
          <a href="https://sig.com/" aria-label="SIG" className="link">
            SIG
          </a>
          {` developing internal monitoring and operations tools for support teams. In 2021, I graduated from `}
          <a href="https://www.pitt.edu/" aria-label="Pitt" className="link">
            Pitt
          </a>
          {` with a bachelor's in information science.`}
        </div>
        <div className="mt-3">
          {links.about.map((link, index) => (
            <IconLink key={index} link={link} />
          ))}
        </div>
      </div>
    </div>
  )
}
