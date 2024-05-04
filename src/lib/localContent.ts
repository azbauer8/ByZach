import fs from "node:fs"
import path from "node:path"

import { formatDate } from "@/lib/utils"

import "server-only"

export function getLocalContent(collection: string, limit?: number) {
  const dir = path.join(process.cwd(), `content/${collection}`)
  const mdxFiles = getMDXFiles(dir)
    .map((file) => {
      const { metadata, content } = readMDXFile(path.join(dir, file))
      return {
        ...metadata,
        subtitle:
          metadata?.description && metadata.description !== ""
            ? metadata.description
            : formatDate(metadata.publishedAt),
        link: `/${collection}/${metadata.slug}`,
        updatedAt: metadata.publishedAt,
        content,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt ?? "").getTime() -
        new Date(a.publishedAt ?? "").getTime()
    )
  return limit ? mdxFiles.slice(0, limit) : mdxFiles
}

export function getLocalContentEntry(collection: string, slug: string) {
  return (
    getLocalContent(collection).filter((t) => t.slug === slug)?.[0] ?? undefined
  )
}

type Metadata = {
  title: string
  status: string
  slug: string
  description: string
  coverImage: string
  publishedAt: string
}

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
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md")
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}
