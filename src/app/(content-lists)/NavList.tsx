"use client"

import { usePathname } from "next/navigation"
import { Listbox, ListboxItem } from "@nextui-org/listbox"
import { format } from "date-fns"

import { cn } from "@/lib/utils"

export default function NavList({
  type,
  links,
}: {
  type: "projects" | "discoveries" | "thoughts" | "uses"
  links: {
    slug: string | undefined
    title: string | undefined
    category?: string | null | undefined
    createdAt?: string | null | undefined
  }[]
}) {
  const pathname = usePathname()
  return (
    <Listbox
      aria-label="Navigation Links"
      variant="faded"
      color="primary"
      className="p-0"
    >
      {links.map((link) => {
        const fullLink = `/${type}/${link.slug}`
        const active = pathname === fullLink
        return (
          <ListboxItem
            key={link.slug ?? ""}
            href={`/${type}/${link.slug}` ?? ""}
            className={cn(
              active && "border-default bg-default-100 text-primary"
            )}
            textValue={link.title}
          >
            <div className="flex flex-col gap-1">
              <h1 className="font-medium">{link.title}</h1>
              <h3 className="text-sm text-default-500">
                {link.category ?? format(new Date(link.createdAt ?? ""), "PPP")}
              </h3>
            </div>
          </ListboxItem>
        )
      })}
    </Listbox>
  )
}
