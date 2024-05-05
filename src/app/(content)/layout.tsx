import type { Metadata } from "next"

import { siteConfig } from "@/lib/consts"

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
