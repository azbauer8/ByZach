import { Button, Link } from "@nextui-org/react"
import { FaSquareLastfm } from "react-icons/fa6"
import { SiTrakt } from "react-icons/si"

const socialLinks = [
  {
    name: "Last.fm",
    url: "https://www.last.fm/user/zacharlatanz",
    icon: <FaSquareLastfm className="mr-2 h-6 w-6" />,
  },
  {
    name: "Trakt",
    url: "https://trakt.tv/users/zacharlatan",
    icon: <SiTrakt className="mr-2 h-6 w-6" />,
  },
]

export default function Socials() {
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-bold text-pop">Follow me on</h1>
      <div className="mb-5 space-y-0">
        <div className="flex flex-wrap">
          {socialLinks.map((link) => (
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
