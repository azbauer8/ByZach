"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { PiArrowUpRightBold } from "react-icons/pi"

import ButtonLink from "@/components/Primitives/ButtonLink"

export default function SidebarLink({
  link,
  isExternal,
}: {
  link: {
    name: string
    href: string
    icon: JSX.Element
  }
  isExternal?: boolean
}) {
  const pathname = usePathname()
  const active =
    link.href === "/" ? pathname === link.href : pathname.startsWith(link.href)

  return (
    <ButtonLink
      as={Link}
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      active={active}
      variant={active ? "flat" : "light"}
      startContent={link.icon}
      endContent={
        isExternal && (
          <PiArrowUpRightBold
            size={14}
            strokeWidth={8}
            className="ml-auto text-default-500"
          />
        )
      }
    >
      {link.name}
    </ButtonLink>
  )
}
