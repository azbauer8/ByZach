import { unslugify } from "@/lib/utils"

import "server-only"

import slugify from "slugify"

const collectionIds = { uses: 43494387, discoveries: 43494386 }

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
  },
  next: { revalidate: 60 },
}

const url = "https://api.raindrop.io/rest/v1"

export async function getDiscoveryCategories() {
  try {
    const response = await fetch(
      `${url}/tags/${collectionIds.discoveries}`,
      options
    )
    const categories: RaindropTags = await response.json()
    return categories.items.map((category) => ({
      slug: slugify(category._id),
      entry: {
        title: category._id,
        subtitle: `${category.count} discoveries`,
      },
    }))
  } catch (error) {
    console.info(error)
    return null
  }
}

export async function getDiscoveriesInCategory(category: string) {
  try {
    const response = await fetch(
      `${url}/raindrops/${collectionIds.discoveries}?${new URLSearchParams({
        search: `"#${unslugify(category)}"`,
      })}`,
      options
    )
    const discoveries: Raindrops = await response.json()
    return discoveries.items
  } catch (error) {
    console.info("error")
    return null
  }
}

export async function getSoftwareUses() {
  try {
    const response = await fetch(
      `${url}/raindrops/${collectionIds.uses}`,
      options
    )
    const uses: Raindrops = await response.json()
    return uses.items
  } catch (error) {
    console.info("error")
    return null
  }
}

type Raindrops = {
  result: boolean
  items: {
    _id: number
    link: string
    title: string
    excerpt: string
    note: string
    type: "link"
    cover: string
    important: boolean
    removed: boolean
    created: string
    lastUpdate: string
    domain: string
    sort: number
    collectionId: number
    tags: string[]
  }[]
}

type RaindropTags = {
  result: boolean
  items: {
    _id: string
    count: number
  }[]
}
