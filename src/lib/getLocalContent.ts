import fs from "node:fs"
import path from "node:path"
import type keystaticConfig from "@/../keystatic.config"
import type { Entry } from "@keystatic/core/reader"
import projects from "~content/projects"
import slugify from "slugify"

type Metadata = {
  title: string
  dateTime: string | null
}

export type ThoughtMetadata = Entry<
  (typeof keystaticConfig)["collections"]["thoughts"]
>

export type SnippetMetadata = Entry<
  (typeof keystaticConfig)["collections"]["snippets"]
>

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

export function getThought(slug: string) {
  return getThoughts().filter((t) => t.slug === slug)?.[0] ?? undefined
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

export function getSnippet(slug: string) {
  return getSnippets().filter((t) => t.slug === slug)?.[0] ?? undefined
}

export function getProjects(limit?: number) {
  const projectsList = projects.map((project) => ({
    slug: slugify(project.title),
    metadata: {
      title: project.title,
      description: project.description,
      link: project.link,
    },
  }))
  return limit ? projectsList.slice(0, limit) : projectsList
}
