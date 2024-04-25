import { Metadata } from "next/types"
import { siteLinks } from "@/config"

import { Text } from "@/components/ui/text"
import { PageLayout } from "@/components/PageLayout"
import dynamic from "next/dynamic"
const Tabs = dynamic(() => import("@/app/uses/UsesTabs"))

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
    <PageLayout title="Uses" hasList={false}>
      <Text variant="h2">Uses</Text>
      <Tabs />
      {children}
    </PageLayout>
  )
}
