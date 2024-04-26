import { siteLinks } from "@/config"

import { getProjects, getSnippets, getThoughts } from "@/lib/getContent"
import { getDiscoveryCategories, getSoftwareUses } from "@/lib/raindrop"

export default async function sitemap() {
  const projects = getProjects().map((project) => ({
    url: `${siteLinks.here}/projects/${project.slug}`,
    lastModified: project.metadata.dateTime,
  }))

  const uses = await getSoftwareUses().then((uses) =>
    uses?.map((use) => ({
      url: `${siteLinks.here}/uses/${use._id}`,
      lastModified: use.lastUpdate,
    }))
  )
  const usesArray = uses || []

  const discoveries = await getDiscoveryCategories().then((discoveries) =>
    discoveries?.map((discovery) => ({
      url: `${siteLinks.here}/discoveries/${discovery.slug}`,
    }))
  )

  const discArray = discoveries || []

  const thoughts = getThoughts().map((thought) => ({
    url: `${siteLinks.here}/thoughts/${thought.slug}`,
    lastModified: thought.metadata.dateTime,
  }))

  const snippets = getSnippets().map((snippet) => ({
    url: `${siteLinks.here}/snippets/${snippet.slug}`,
    lastModified: snippet.metadata.dateTime,
  }))

  const routes = [
    "",
    "/projects",
    "/uses",
    "/thoughts",
    "/snippets",
    "/discoveries",
  ].map((route) => ({
    url: `${siteLinks.here}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [
    ...routes,
    ...projects,
    ...usesArray,
    ...thoughts,
    ...snippets,
    ...discArray,
  ]
}
