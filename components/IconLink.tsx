import { Link } from "@/data/links"
import { FaGithub, FaSquareLastfm } from "react-icons/fa6"
import { HiDocumentArrowDown } from "react-icons/hi2"
import { MdAlternateEmail } from "react-icons/md"
import { SiTrakt } from "react-icons/si"

import { Button } from "@/components/ui/button"

export default function IconLink({ link }: { link: Link }) {
  return (
    <Button
      asChild
      className="mr-3 bg-transparent p-2 pl-0 text-zinc-800 hover:bg-transparent hover:text-zinc-450 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-transparent dark:hover:text-zinc-450"
    >
      <a href={link.url} aria-label={link.name}>
        {link.name === "GitHub" ? (
          <FaGithub className="mr-2 h-6 w-6" />
        ) : link.name === "Email" ? (
          <MdAlternateEmail className="mr-2 h-6 w-6" />
        ) : link.name === "Resume" ? (
          <HiDocumentArrowDown className="mr-2 h-6 w-6" />
        ) : link.name === "Last.fm" ? (
          <FaSquareLastfm className="mr-2 h-6 w-6" />
        ) : link.name === "Trakt" ? (
          <SiTrakt className="mr-2 h-6 w-6" />
        ) : null}
        {link.name}
      </a>
    </Button>
  )
}
