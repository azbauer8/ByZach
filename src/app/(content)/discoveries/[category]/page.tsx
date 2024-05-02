import slugify from "slugify"

import {
  getDiscoveriesInCategory,
  getDiscoveryCategories,
} from "@/lib/getRaindrop"
import BookmarkItemList from "@/components/BookmarkItem"
import PageContent from "@/components/PageContent"

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
    <PageContent
      title={category}
      previousPage={{ link: "/discoveries", title: "Discoveries" }}
    >
      <BookmarkItemList
        items={discoveries.map((discovery) => ({
          title: discovery.title,
          description:
            discovery.note !== "" ? discovery.note : discovery.excerpt,
          link: discovery.link,
          shortLink: discovery.domain,
          img: discovery.cover,
        }))}
      />
    </PageContent>
  )
}
