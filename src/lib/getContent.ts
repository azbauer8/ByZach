import keystaticConfig from "@/../keystatic.config"
import { createReader } from "@keystatic/core/reader"

const reader = createReader(process.cwd(), keystaticConfig)

export async function getProjects(limit?: number) {
  const projects = await reader.collections.projects.all()

  const mappedProjects = projects.map((project) => ({
    slug: project.slug,
    title: project.entry.title,
    category: project.entry.category,
    link: project.entry.link,
    datetime: project.entry.datetime,
  }))

  return limit ? mappedProjects.slice(0, limit) : mappedProjects
}

export async function getProject(fileName: string) {
  const project = await reader.collections.projects.read(fileName)
  return project
}

export async function getThoughts(limit?: number) {
  const thoughts = await reader.collections.thoughts.all()

  const mappedThoughts = thoughts.map((thought) => ({
    slug: thought.slug,
    title: thought.entry.title,
    dateTime: thought.entry.datetime,
  }))

  return limit ? mappedThoughts.slice(0, limit) : mappedThoughts
}

export async function getThought(fileName: string) {
  const thought = await reader.collections.thoughts.read(fileName)
  return thought
}

export async function getDiscoveries(limit?: number) {
  const discoveries = await reader.collections.discoveries.all()
  const mappedDiscoveries = discoveries.map((discovery) => ({
    slug: discovery.slug,
    title: discovery.entry.title,
    link: discovery.entry.link,
    category: discovery.entry.category,
  }))

  return limit ? mappedDiscoveries.slice(0, limit) : mappedDiscoveries
}

export async function getDiscovery(fileName: string) {
  const discovery = await reader.collections.discoveries.read(fileName)
  return discovery
}

export async function getUses(limit?: number) {
  const uses = await reader.collections.uses.all()
  const mappedUses = uses.map((use) => ({
    slug: use.slug,
    title: use.entry.title,
    category: use.entry.category,
  }))

  return limit ? mappedUses.slice(0, limit) : mappedUses
}

export async function getUse(fileName: string) {
  const use = await reader.collections.uses.read(fileName)
  return use
}
