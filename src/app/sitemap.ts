import { siteLinks } from "@/config"

import {
  getDiscoveries,
  getProjects,
  getSnippets,
  getThoughts,
  getUses,
} from "@/lib/getContent"

export default async function sitemap() {
  const projects = getProjects().map((project) => ({
    url: `${siteLinks.here}/projects/${project.slug}`,
    lastModified: project.metadata.dateTime,
  }))

  const uses = getUses().map((use) => ({
    url: `${siteLinks.here}/uses/${use.slug}`,
    lastModified: use.metadata.dateTime,
  }))

  const discoveries = getDiscoveries().map((discovery) => ({
    url: `${siteLinks.here}/discoveries/${discovery.slug}`,
    lastModified: discovery.metadata.dateTime,
  }))

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
    ...uses,
    ...thoughts,
    ...snippets,
    ...discoveries,
  ]
}