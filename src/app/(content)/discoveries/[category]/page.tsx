import { pageMetadata } from "@/lib/metadata"
import { getDiscoveriesInCategory, getDiscoveryCategories } from "@/lib/notion"
import ContentList from "@/components/ContentList"
import PageLayout from "@/components/PageLayout"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}) {
  const category = await getDiscoveryCategories().then((categories) =>
    categories?.find((category) => category.slug === params.category)
  )
  if (!category) return {}

  return {
    title: category.title,
    description: category.subtitle,
  }
}

export async function generateStaticParams() {
  const categories = await getDiscoveryCategories()
  return categories
    ? categories.map((category) => ({
        category: category.slug,
      }))
    : []
}

export default async function DiscoveryCategory({
  params,
}: {
  params: { category: string }
}) {
  const discoveries = await getDiscoveriesInCategory(params.category)
  if (!discoveries) return null

  const category = discoveries[0]?.category

  return (
    <PageLayout
      title={category}
      previousPage={{
        href: pageMetadata.discoveries.href,
        title: pageMetadata.discoveries.title,
      }}
    >
      <ContentList list={discoveries} isExternal compact />
    </PageLayout>
  )
}
