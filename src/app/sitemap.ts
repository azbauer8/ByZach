import { links, pageMetadata } from "@/lib/metadata"
import {
  getDiscoveryCategories,
  getProjects,
  getSnippets,
  getThoughts,
} from "@/lib/notion"

export default async function sitemap() {
  const projects = await getProjects().then((projects) =>
    projects?.map((project) => ({
      url: `${links.here.full}/projects/${project.slug}`,
      lastModified: project.updatedAt,
    }))
  )
  const projectsArray = projects || []

  const usesArray = [{ url: `${links.here.full}${pageMetadata.uses.href}` }]

  const discoveries = await getDiscoveryCategories().then((discoveries) =>
    discoveries?.map((discovery) => ({
      url: `${links.here.full}${discovery.href}`,
    }))
  )

  const discArray = discoveries || []

  const thoughts = await getThoughts().then((thought) =>
    thought?.map((thought) => ({
      url: `${links.here.full}${pageMetadata.thoughts.href}/${thought.slug}`,
      lastModified: thought.updatedAt,
    }))
  )

  const snippets = await getSnippets().then((snippet) =>
    snippet?.map((snippet) => ({
      url: `${links.here.full}${pageMetadata.snippets.href}/${snippet.slug}`,
      lastModified: snippet.updatedAt,
    }))
  )

  const routes = [
    "",
    pageMetadata.projects.href,
    pageMetadata.uses.href,
    pageMetadata.thoughts.href,
    pageMetadata.snippets.href,
    pageMetadata.discoveries.href,
  ].map((route) => ({
    url: `${links.here.full}${route}`,
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
