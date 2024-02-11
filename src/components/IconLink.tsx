import { Link as LinkType } from "@/data/links"
import { Button, Link } from "@nextui-org/react"

export default function IconLink({ link }: { link: LinkType }) {
  return (
    <Button
      as={Link}
      href={link.url}
      aria-label={link.name}
      startContent={link.icon}
      variant="light"
      className="gap-0"
    >
      {link.name}
    </Button>
  )
}
