import { siteConfig } from "@/config"
import { Button, Link } from "@nextui-org/react"
import { FaGithub } from "react-icons/fa6"
import { HiDocumentArrowDown } from "react-icons/hi2"
import { MdAlternateEmail } from "react-icons/md"

import Philly from "@/app/sections/About/Philly"

const aboutLinks = [
  {
    name: "GitHub",
    url: "https://github.com/azbauer8",
    icon: <FaGithub className="mr-2 size-6" />,
  },
  {
    name: "Email",
    url: "mailto:hi@byzach.dev",
    icon: <MdAlternateEmail className="mr-2 size-6" />,
  },
  {
    name: "Resume",
    url: "/Resume.pdf",
    icon: <HiDocumentArrowDown className="mr-2 size-6" />,
  },
]

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
          {aboutLinks.map((link) => (
            <Button
              key={link.url}
              as={Link}
              href={link.url}
              aria-label={link.name}
              startContent={link.icon}
              variant="light"
              className="gap-0"
            >
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
