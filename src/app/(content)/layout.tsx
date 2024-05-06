import type { Metadata } from "next"
import { siteMetadata } from "@/siteData"

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
