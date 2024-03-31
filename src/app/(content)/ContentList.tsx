"use client"

import { usePathname } from "next/navigation"

import Discoveries from "@/app/(content-lists)/discoveries/page"
import Projects from "@/app/(content-lists)/projects/page"
import Thoughts from "@/app/(content-lists)/thoughts/page"
import Uses from "@/app/(content-lists)/uses/page"

export default function ContentList() {
  const pathname = usePathname()

  if (pathname.includes("/projects")) return <Projects />
  if (pathname.includes("/thoughts")) return <Thoughts />
  if (pathname.includes("/discoveries")) return <Discoveries />
  if (pathname.includes("/uses")) return <Uses />
}
