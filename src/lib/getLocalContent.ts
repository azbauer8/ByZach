import { cache } from "react"
import type { Entry } from "@keystatic/core/reader"
import { createReader } from "@keystatic/core/reader"
import keystaticConfig from "~/keystatic.config"
import projects from "~content/projects"

import "server-only"

import slugify from "slugify"

export type Thought = {
  slug: string
  entry: Entry<(typeof keystaticConfig)["collections"]["thoughts"]>
}

export type Snippet = {
  slug: string
  entry: Entry<(typeof keystaticConfig)["collections"]["snippets"]>
}

const reader = createReader(process.cwd(), keystaticConfig)

export const getThoughts = cache(async (limit?: number) => {
  const thoughts = await reader.collections.thoughts.all()
  return limit ? thoughts.slice(0, limit) : thoughts
})

export const getThought = cache(async (slug: string) => {
  const thought = await reader.collections.thoughts.read(slug)
  return thought
})

export const getSnippets = cache(async (limit?: number) => {
  const snippets = await reader.collections.snippets.all()
  return limit ? snippets.slice(0, limit) : snippets
})
export const getSnippet = cache(async (slug: string) => {
  const snippet = await reader.collections.snippets.read(slug)
  return snippet
})

export function getProjects(limit?: number) {
  const projectsList = projects.map((project) => ({
    slug: slugify(project.title),
    entry: {
      title: project.title,
      description: project.description,
      link: project.link,
    },
  }))
  return limit ? projectsList.slice(0, limit) : projectsList
}
