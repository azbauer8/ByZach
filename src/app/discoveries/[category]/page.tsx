import slugify from "slugify"

import {
  getDiscoveriesInCategory,
  getDiscoveryCategories,
} from "@/lib/getRaindrop"
import ProductCard from "@/components/BookmarkCard"
import PageLayout from "@/components/PageLayout"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}) {
  const category = await getDiscoveryCategories().then((categories) =>
    categories?.find(
      (category) => category.slug.toLowerCase() === params.category
    )
  )
  if (!category) return {}

  const { title, subtitle } = category.entry

  return {
    title,
    description: subtitle,
  }
}

export async function generateStaticParams() {
  const categories = await getDiscoveryCategories()
  return categories?.map((category) => ({
    category: slugify(category.slug.toLowerCase()),
  }))
}

export default async function DiscoveryCategory({
  params,
}: {
  params: { category: string }
}) {
  const discoveries = await getDiscoveriesInCategory(params.category)
  if (!discoveries) return null

  const category = discoveries[0].tags[0]

  return (
    <PageLayout
      title={category}
      previousPage={{ link: "/discoveries", title: "Discoveries" }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {discoveries.map((discovery) => (
          <ProductCard
            key={discovery._id}
            title={discovery.title}
            description={
              discovery.note !== "" ? discovery.note : discovery.excerpt
            }
            link={discovery.link}
            shortLink={discovery.domain}
            img={discovery.cover}
          />
        ))}
      </div>
    </PageLayout>
  )
}
