import { pageMetadata, siteMetadata } from "@/lib/metadata"
import {
  getDiscoveryCategories,
  getProjects,
  getSnippets,
  getThoughts,
} from "@/lib/notion"

export default async function sitemap() {
  const projects = await getProjects().then((projects) =>
    projects?.map((project) => ({
      url: `${siteMetadata.here.full}/projects/${project.slug}`,
      lastModified: project.updatedAt,
    }))
  )
  const projectsArray = projects || []

  const usesArray =
    [
      {
        url: `${siteMetadata.here.full}${pageMetadata.uses.link}`,
      },
    ] || []

  const discoveries = await getDiscoveryCategories().then((discoveries) =>
    discoveries?.map((discovery) => ({
      url: `${siteMetadata.here.full}${discovery.link}`,
    }))
  )

  const discArray = discoveries || []

  const thoughts = await getThoughts().then((thought) =>
    thought?.map((thought) => ({
      url: `${siteMetadata.here.full}${pageMetadata.thoughts.link}/${thought.slug}`,
      lastModified: thought.updatedAt,
    }))
  )

  const snippets = await getSnippets().then((snippet) =>
    snippet?.map((snippet) => ({
      url: `${siteMetadata.here.full}${pageMetadata.snippets.link}/${snippet.slug}`,
      lastModified: snippet.updatedAt,
    }))
  )

  const routes = [
    "",
    pageMetadata.projects.link,
    pageMetadata.uses.link,
    pageMetadata.thoughts.link,
    pageMetadata.snippets.link,
    pageMetadata.discoveries.link,
  ].map((route) => ({
    url: `${siteMetadata.here.full}${route}`,
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
