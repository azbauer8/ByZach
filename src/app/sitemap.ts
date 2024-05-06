import { siteMetadata } from "@/siteData"
import slugify from "slugify"

import { getCMSContent } from "@/lib/dato"
import { getDiscoveryCategories, getProjects, getUses } from "@/lib/raindrop"

export default async function sitemap() {
  const projects = await getProjects().then((projects) =>
    projects?.map((project) => ({
      url: `${siteMetadata.here}/projects/${slugify(project.title)}`,
      lastModified: project.lastUpdate,
    }))
  )
  const projectsArray = projects || []

  const uses = await getUses("Software").then((uses) =>
    uses?.map((use) => ({
      url: `${siteMetadata.here}/uses/${slugify(use.title)}`,
      lastModified: use.lastUpdate,
    }))
  )
  const usesArray = uses || []

  const discoveries = await getDiscoveryCategories().then((discoveries) =>
    discoveries?.map((discovery) => ({
      url: `${siteMetadata.here}/discoveries/${discovery.slug}`,
    }))
  )

  const discArray = discoveries || []

  const thoughts = await getCMSContent("Thoughts").then((thought) =>
    thought?.map((thought) => ({
      url: `${siteMetadata.here}/thoughts/${thought.slug}`,
      lastModified: thought.updatedAt,
    }))
  )

  const snippets = await getCMSContent("Snippets").then((snippet) =>
    snippet?.map((snippet) => ({
      url: `${siteMetadata.here}/snippets/${snippet.slug}`,
      lastModified: snippet.updatedAt,
    }))
  )

  const routes = [
    "",
    "/projects",
    "/uses",
    "/thoughts",
    "/snippets",
    "/discoveries",
  ].map((route) => ({
    url: `${siteMetadata.here}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [
    ...routes,
    ...projectsArray,
    ...usesArray,
    ...(thoughts ?? []),
    ...(snippets ?? []),
    ...discArray,
  ]
}
