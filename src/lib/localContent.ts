import { formatDate } from "@/lib/utils"

import "server-only"

import { getDocumentBySlug, getDocuments } from "outstatic/server"

export function getLocalContent(collection: string, limit?: number) {
  const content = getDocuments(collection, [
    "title",
    "publishedAt",
    "description",
    "slug",
    "author",
    "coverImage",
  ]) as CMSContent[]
  const formattedContent = content.map((entry) => ({
    ...entry,
    subtitle: entry?.description ?? formatDate(entry.publishedAt),
    updatedAt: entry.publishedAt,
    link: `/${collection}/${entry.slug}`,
  }))
  return limit ? formattedContent.slice(0, limit) : formattedContent
}

export function getLocalContentEntry(collection: string, slug: string) {
  const entry = getDocumentBySlug(collection, slug, [
    "title",
    "publishedAt",
    "description",
    "slug",
    "author",
    "content",
    "coverImage",
  ]) as CMSContent
  return {
    ...entry,
    subtitle: entry?.description ?? formatDate(entry.publishedAt),
    updatedAt: entry.publishedAt,
    link: `/${collection}/${entry.slug}`,
  }
}

type CMSContent = {
  title: string
  slug: string
  publishedAt: string
  description?: string
  status: "published" | "draft"
  author: {
    name: string
    picture: string
  }
  content: string
  coverImage: string
}
