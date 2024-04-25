import fs from "node:fs"
import path from "node:path"
import type keystaticConfig from "@/../keystatic.config"
import type { Entry } from "@keystatic/core/reader"
import slugify from "slugify"

import { unslugify } from "@/lib/utils"

type Metadata = {
  title: string
  dateTime: string | null
}

export type ThoughtMetadata = Entry<
  (typeof keystaticConfig)["collections"]["thoughts"]
>

export type ProjectMetadata = Entry<
  (typeof keystaticConfig)["collections"]["projects"]
>

export type DiscoveryMetadata = Entry<
  (typeof keystaticConfig)["collections"]["discoveries"]
>

export type SnippetMetadata = Entry<
  (typeof keystaticConfig)["collections"]["snippets"]
>

export type UseMetadata = Entry<(typeof keystaticConfig)["collections"]["uses"]>

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match?.[1]
  const content = fileContent.replace(frontmatterRegex, "").trim()
  const frontMatterLines = frontMatterBlock?.trim().split("\n")
  const metadata: Partial<Metadata> = {}

  if (frontMatterLines) {
    for (const line of frontMatterLines) {
      const [key, ...valueArr] = line.split(": ")
      const value = valueArr
        .join(": ")
        .trim()
        .replace(/^['"](.*)['"]$/, "$1")
      metadata[key.trim() as keyof Metadata] = value
    }
  }

  return { metadata, content }
}

function getMDXFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}

function getJSONFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".json")
}

function readJSONFiles(filePath: fs.PathOrFileDescriptor) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"))
}

export function getProjects(limit?: number) {
  const dir = path.join(process.cwd(), "content/projects")
  const jsonFiles = getJSONFiles(dir)
    .map((file) => {
      const metadata = readJSONFiles(path.join(dir, file))
      const slug = path.basename(file, path.extname(file))
      return {
        metadata: metadata as ProjectMetadata,
        slug,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.dateTime ?? "").getTime() -
        new Date(a.metadata.dateTime ?? "").getTime()
    )
  return limit ? jsonFiles.slice(0, limit) : jsonFiles
}

export function getThoughts(limit?: number) {
  const dir = path.join(process.cwd(), "content/thoughts")
  const mdxFiles = getMDXFiles(dir)
    .map((file) => {
      const { metadata, content } = readMDXFile(path.join(dir, file))
      const slug = path.basename(file, path.extname(file))
      return {
        metadata: metadata as ThoughtMetadata,
        slug,
        content,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.dateTime ?? "").getTime() -
        new Date(a.metadata.dateTime ?? "").getTime()
    )
  return limit ? mdxFiles.slice(0, limit) : mdxFiles
}

export function getDiscoveriesInCategory(slug: string) {
  const dir = path.join(process.cwd(), "content/discoveries")
  const jsonFiles = getJSONFiles(dir)
    .map((file) => {
      const metadata = readJSONFiles(path.join(dir, file))
      const slug = path.basename(file, path.extname(file))
      return {
        metadata: metadata as DiscoveryMetadata,
        slug,
      }
    })
    .filter(
      (discovery) =>
        discovery.metadata.category.toLowerCase() ===
        unslugify(slug).toLowerCase()
    )
    .sort(
      (a, b) =>
        new Date(b.metadata.dateTime ?? "").getTime() -
        new Date(a.metadata.dateTime ?? "").getTime()
    )
  return jsonFiles
}

export function getDiscoveryCategories() {
  const dir = path.join(process.cwd(), "content/discoveries")
  const jsonFiles = getJSONFiles(dir)
    .map((file) => {
      const metadata = readJSONFiles(path.join(dir, file))
      const slug = path.basename(file, path.extname(file))
      return {
        metadata: metadata as DiscoveryMetadata,
        slug,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.dateTime ?? "").getTime() -
        new Date(a.metadata.dateTime ?? "").getTime()
    )

  const groupedDiscoveries = Object.entries(
    jsonFiles.reduce(
      (x, y) => {
        x[y.metadata.category].push(y)
        return x
      },
      {} as { [key: string]: { metadata: DiscoveryMetadata }[] }
    )
  ).map(([key, value]) => ({
    slug: slugify(key.toLowerCase()),
    metadata: {
      title: key,
      subtitle: `${value.length} discoveries`,
    },
  }))

  return groupedDiscoveries
}

export function getSnippets(limit?: number) {
  const dir = path.join(process.cwd(), "content/snippets")
  const mdxFiles = getMDXFiles(dir)
    .map((file) => {
      const { metadata, content } = readMDXFile(path.join(dir, file))
      const slug = path.basename(file, path.extname(file))
      return {
        metadata: metadata as SnippetMetadata,
        slug,
        content,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.dateTime ?? "").getTime() -
        new Date(a.metadata.dateTime ?? "").getTime()
    )
  return limit ? mdxFiles.slice(0, limit) : mdxFiles
}

export function getUses(limit?: number) {
  const dir = path.join(process.cwd(), "content/uses")
  const jsonFiles = getJSONFiles(dir)
    .map((file) => {
      const metadata = readJSONFiles(path.join(dir, file))
      const slug = path.basename(file, path.extname(file))
      return {
        metadata: metadata as UseMetadata,
        slug,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.dateTime ?? "").getTime() -
        new Date(a.metadata.dateTime ?? "").getTime()
    )
  return limit ? jsonFiles.slice(0, limit) : jsonFiles
}
