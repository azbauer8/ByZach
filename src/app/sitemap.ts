import { siteMetadata } from "@/lib/metadata"
import {
  getDiscoveryCategories,
  getProjects,
  getSnippets,
  getThoughts,
} from "@/lib/notion"

export default async function sitemap() {
  const projects = await getProjects().then((projects) =>
    projects?.map((project) => ({
      url: `${siteMetadata.here}/projects/${project.slug}`,
      lastModified: project.updatedAt,
    }))
  )
  const projectsArray = projects || []

  const usesArray =
    [
      {
        url: `${siteMetadata.here}/uses`,
      },
      {
        url: `${siteMetadata.here}/uses/hardware`,
      },
    ] || []

  const discoveries = await getDiscoveryCategories().then((discoveries) =>
    discoveries?.map((discovery) => ({
      url: `${siteMetadata.here}${discovery.link}`,
    }))
  )

  const discArray = discoveries || []

  const thoughts = await getThoughts().then((thought) =>
    thought?.map((thought) => ({
      url: `${siteMetadata.here}/thoughts/${thought.slug}`,
      lastModified: thought.updatedAt,
    }))
  )

  const snippets = await getSnippets().then((snippet) =>
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
