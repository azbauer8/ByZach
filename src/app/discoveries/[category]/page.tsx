import { Suspense } from "react"

import {
  getDiscoveriesInCategory,
  getDiscoveryCategories,
} from "@/lib/getContent"
import { Text } from "@/components/ui/text"
import { PageLayout } from "@/components/PageLayout"
import ProductCard from "@/components/ProductCard"

export const dynamicParams = false

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = getDiscoveryCategories().find(
    (category) => category.slug === params.category
  )
  if (!category) return {}

  const { title, subtitle } = category.metadata

  return {
    title,
    description: subtitle,
  }
}

export function generateStaticParams() {
  const categories = getDiscoveryCategories()
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default function DiscoveryCategory({
  params,
}: {
  params: { category: string }
}) {
  const discoveries = getDiscoveriesInCategory(params.category)
  if (!discoveries) return null

  const category = discoveries[0].metadata.category

  return (
    <PageLayout title={category} type="discoveries" hasList>
      <Text variant="h2">{category}</Text>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {discoveries.map((discovery) => (
          <Suspense key={discovery.slug} fallback={<div />}>
            <ProductCard
              key={discovery.slug}
              title={discovery.metadata.title}
              description={discovery.metadata.description ?? ""}
              link={discovery.metadata.link ?? ""}
            />
          </Suspense>
        ))}
      </div>
    </PageLayout>
  )
}
