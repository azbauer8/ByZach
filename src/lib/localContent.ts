import fs from "node:fs"
import path from "node:path"
import type keystaticConfig from "@/../keystatic.config"
import type { Entry } from "@keystatic/core/reader"

import { formatDate } from "@/lib/utils"

import "server-only"

type Metadata = {
  title: string
  dateTime: string | null
}

type ThoughtMetadata = Entry<
  (typeof keystaticConfig)["collections"]["thoughts"]
>

type SnippetMetadata = Entry<
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
        ...(metadata as ThoughtMetadata),
        subtitle: metadata.dateTime ? formatDate(metadata.dateTime) : "",
        link: `/thoughts/${slug}`,
        slug,
        content,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.dateTime ?? "").getTime() -
        new Date(a.dateTime ?? "").getTime()
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
        ...(metadata as SnippetMetadata),
        subtitle: metadata.dateTime ? formatDate(metadata.dateTime) : "",
        link: `/snippets/${slug}`,
        slug,
        content,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.dateTime ?? "").getTime() -
        new Date(a.dateTime ?? "").getTime()
    )
  return limit ? mdxFiles.slice(0, limit) : mdxFiles
}

export function getSnippet(slug: string) {
  return getSnippets().filter((t) => t.slug === slug)?.[0] ?? undefined
}
