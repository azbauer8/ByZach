import type { Metadata } from "next/types"

import { pageMetadata } from "@/lib/metadata"
import { getUses } from "@/lib/notion"
import ContentList from "@/components/ContentList"
import PageLayout from "@/components/PageLayout"
import Section from "@/components/Section"

export const metadata: Metadata = {
  title: pageMetadata.uses.title,
  description: pageMetadata.uses.subtitle,
}

export default async function Uses() {
  const software = await getUses("Software")
  if (!software) return null
  return (
    <PageLayout
      title={pageMetadata.uses.title}
      subtitle={pageMetadata.uses.subtitle}
    >
      {Object.entries(software).map(([category, items]) => (
        <Section key={category} title={category}>
          <ContentList list={items} isExternal compact />
        </Section>
      ))}
    </PageLayout>
  )
}
