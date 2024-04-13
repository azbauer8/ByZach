import fs from "fs"
import path from "path"

type Metadata = {
  title: string
  dateTime: string | null
}

type ProjectMetadata = Metadata & {
  category: string
  link: string
  descShort: string
}

type DiscoveryMetadata = Metadata & {
  category: string
  link: string
  description: string
}
type UseMetadata = Metadata & {
  category: string
  link: string
  platform: string
  cost: string
  descShort: string
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match?.[1]
  const content = fileContent.replace(frontmatterRegex, "").trim()
  const frontMatterLines = frontMatterBlock?.trim().split("\n")
  const metadata: Partial<Metadata> = {}

  frontMatterLines?.forEach((line) => {
    const [key, ...valueArr] = line.split(": ")
    const value = valueArr
      .join(": ")
      .trim()
      .replace(/^['"](.*)['"]$/, "$1")
    metadata[key.trim() as keyof Metadata] = value
  })

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
  const mdxFiles = getMDXFiles(dir).map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))
    return {
      metadata: metadata as ProjectMetadata,
      slug,
      content,
    }
  })
  return limit ? mdxFiles.slice(0, limit) : mdxFiles
}

export function getThoughts(limit?: number) {
  const dir = path.join(process.cwd(), "content/thoughts")
  const mdxFiles = getMDXFiles(dir).map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))
    return {
      metadata: metadata as Metadata,
      slug,
      content,
    }
  })
  return limit ? mdxFiles.slice(0, limit) : mdxFiles
}

export function getDiscoveries(limit?: number) {
  const dir = path.join(process.cwd(), "content/discoveries")
  const jsonFiles = getJSONFiles(dir).map((file) => {
    const metadata = readJSONFiles(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))
    return {
      metadata: metadata as DiscoveryMetadata,
      slug,
    }
  })
  return limit ? jsonFiles.slice(0, limit) : jsonFiles
}

export function getUses(limit?: number) {
  const dir = path.join(process.cwd(), "content/uses")
  const mdxFiles = getMDXFiles(dir).map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))
    return {
      metadata: metadata as UseMetadata,
      slug,
      content,
    }
  })
  return limit ? mdxFiles.slice(0, limit) : mdxFiles
}
