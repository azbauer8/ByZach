import type { Metadata } from "next/types"
import { siteLinks } from "@/config"

import { Text } from "@/components/ui/text"
import { ContentLayout } from "@/components/ContentLayout"
import UsesTabs from "@/app/uses/UsesTabs"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Uses",
  description: "Devices, tools, and technologies I use on a daily basis.",
  openGraph: {
    title: "Uses",
    description: "Devices, tools, and technologies I use on a daily basis.",
    url: `${siteLinks.here}/uses`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Uses",
    description: "Devices, tools, and technologies I use on a daily basis.",
  },
}

export default function UsesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ContentLayout title="Uses">
      <Text variant="h2">Uses</Text>
      <UsesTabs />
      {children}
    </ContentLayout>
  )
}
