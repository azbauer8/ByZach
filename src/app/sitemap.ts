import slugify from "slugify"

import { siteLinks } from "@/lib/consts"
import { getSnippets, getThoughts } from "@/lib/getLocalContent"
import {
  getDiscoveryCategories,
  getProjects,
  getSoftwareUses,
} from "@/lib/getRaindrop"

export default async function sitemap() {
  const projects = await getProjects().then((projects) =>
    projects?.map((project) => ({
      url: `${siteLinks.here}/projects/${slugify(project.title)}`,
      lastModified: project.lastUpdate,
    }))
  )
  const projectsArray = projects || []

  const uses = await getSoftwareUses().then((uses) =>
    uses?.map((use) => ({
      url: `${siteLinks.here}/uses/${slugify(use.title)}`,
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
    ...projectsArray,
    ...usesArray,
    ...thoughts,
    ...snippets,
    ...discArray,
  ]
}
