import slugify from "slugify"

import {
  getDiscoveriesInCategory,
  getDiscoveryCategories,
} from "@/lib/raindrop"
import ImageContentList from "@/components/ImageContentList"
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

  const { title, subtitle } = category

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

  const category = discoveries[0].category

  return (
    <PageContent
      title={category}
      previousPage={{ link: "/discoveries", title: "Discoveries" }}
    >
      <ImageContentList list={discoveries} isExternal />
    </PageContent>
  )
}
