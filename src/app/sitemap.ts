import { siteLinks } from "@/config"

import { getProjects, getSnippets, getThoughts } from "@/lib/getLocalContent"
import { getDiscoveryCategories, getSoftwareUses } from "@/lib/getRaindrop"

export default async function sitemap() {
  const projects = getProjects().map((project) => ({
    url: `${siteLinks.here}/projects/${project.slug}`,
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

  const thoughts = await getThoughts().then((thought) =>
    thought.map((thought) => ({
      url: `${siteLinks.here}/thoughts/${thought.slug}`,
      lastModified: thought.entry.dateTime,
    }))
  )

  const snippets = await getSnippets().then((snippet) =>
    snippet.map((snippet) => ({
      url: `${siteLinks.here}/snippets/${snippet.slug}`,
      lastModified: snippet.entry.dateTime,
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
