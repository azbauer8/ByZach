import {
  getDiscoveriesInCategory,
  getDiscoveryCategories,
} from "@/lib/getContent"
import { Text } from "@/components/ui/text"
import { ContentLayout } from "@/components/Layouts/ContentLayout"
import ProductCard from "@/components/ProductCard"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}) {
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

export async function generateStaticParams() {
  const categories = getDiscoveryCategories()
  return categories.map((category) => ({
    category: category.slug,
  }))
}
export default async function DiscoveryCategory({
  params,
}: {
  params: { category: string }
}) {
  const discoveries = getDiscoveriesInCategory(params.category)
  if (!discoveries) return null

  const category = discoveries[0].metadata.category

  return (
    <ContentLayout title={category} type="discoveries">
      <Text variant="h2">{category}</Text>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {discoveries.map((discovery) => (
          <ProductCard
            key={discovery.slug}
            title={discovery.metadata.title}
            description={discovery.metadata.description ?? ""}
            link={discovery.metadata.link ?? ""}
          />
        ))}
      </div>
    </ContentLayout>
  )
}
