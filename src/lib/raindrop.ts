import { unslugify } from "@/lib/utils"

import "server-only"

import slugify from "slugify"

const collectionIds = {
  uses: 43494387,
  discoveries: 43494386,
  projects: 43642995,
}

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
  },
  next: {
    revalidate: 60 * 60 * 24 * 2,
  },
}

const url = "https://api.raindrop.io/rest/v1"

export async function getProjects(limit?: number) {
  const response = await fetch(
    `${url}/raindrops/${collectionIds.projects}`,
    options
  )
  if (!response.ok) {
    return undefined
  }
  const projects: Raindrops = await response.json()
  const projectItems = projects?.items
    .sort(
      (a, b) =>
        new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
    )
    .map((project) => ({
      slug: project?._id?.toString(),
      title: project.title,
      subtitle: project.note !== "" ? project.note : project.excerpt,
      link: project.link,
      shortLink: project.domain,
      lastUpdate: project.lastUpdate,
      image: project.cover,
    }))
  return limit ? projectItems.slice(0, limit) : projectItems
}

export async function getDiscoveryCategories() {
  const response = await fetch(
    `${url}/tags/${collectionIds.discoveries}`,
    options
  )
  if (!response.ok) {
    return undefined
  }
  const categories: RaindropTags = await response.json()
  return categories.items.map((category) => ({
    slug: slugify(category._id),
    title: category._id,
    subtitle: `${category.count} discoveries`,
    link: `/discoveries/${slugify(category._id).toLowerCase()}`,
  }))
}

export async function getDiscoveriesInCategory(category: string) {
  const response = await fetch(
    `${url}/raindrops/${collectionIds.discoveries}?${new URLSearchParams({
      search: `"#${unslugify(category)}"`,
    })}`,
    options
  )
  if (!response.ok) {
    return undefined
  }
  const discoveries: Raindrops = await response.json()
  return discoveries.items
    .sort(
      (a, b) =>
        new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
    )
    .map((discovery) => ({
      slug: discovery._id.toString(),
      title: discovery.title,
      subtitle: discovery.note !== "" ? discovery.note : discovery.excerpt,
      link: discovery.link,
      shortLink: discovery.domain,
      category: discovery.tags[0],
      image: discovery.cover,
    }))
}

export async function getUses(type: "Software" | "Hardware") {
  const response = await fetch(
    `${url}/raindrops/${collectionIds.uses}?${new URLSearchParams({
      search: `"#${type}"`,
    })}`,
    options
  )
  if (!response.ok) {
    return undefined
  }
  const uses: Raindrops = await response.json()
  return uses.items
    .sort(
      (a, b) =>
        new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
    )
    .map((use) => ({
      slug: use._id.toString(),
      title: use.title,
      subtitle: use.note !== "" ? use.note : use.excerpt,
      link: use.link,
      shortLink: use.domain,
      lastUpdate: use.lastUpdate,
      image: use.cover,
    }))
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
