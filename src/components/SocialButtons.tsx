import { Button, Link } from "@nextui-org/react"

export default function SocialButtons({
  links,
}: {
  links: {
    name: string
    href: string
    icon: JSX.Element
  }[]
}) {
  return (
    <div className="-mx-3 flex flex-wrap items-center gap-1">
      {links.map((link) => (
        <Button
          key={link.name}
          href={link.href}
          as={Link}
          isExternal
          variant="light"
          startContent={
            <div className="text-default-500 group-hover:text-foreground">
              {link.icon}
            </div>
          }
          disableRipple
          className="group px-3 text-default-500 hover:bg-default/40 hover:text-foreground hover:opacity-100"
        >
          {link.name}
        </Button>
      ))}
    </div>
  )
}
