"use client"

import { siteConfig } from "@/app/_global/config"
import { Link } from "@nextui-org/react"

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center border-t border-default pt-8">
        <Link
          href={siteConfig.links.github}
          color="foreground"
          underline="always"
        >
          By Zach Bauer, {new Date().getFullYear()}
        </Link>
      </div>
    </footer>
  )
}
