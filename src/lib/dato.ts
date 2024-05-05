import { cache } from "react"

import { revalidationInterval } from "@/lib/consts"
import { formatDate } from "@/lib/utils"

type CMSContent = {
  id: string
  slug: string
  title: string
  description: string
  content: string
  _updatedAt: string
}

export async function getCMSContent(
  collection: "Snippets" | "Thoughts",
  limit?: number
) {
  const queryCollection =
    collection === "Snippets" ? "allSnippets" : "allThoughts"
  const thoughts = (await performRequest({
    query: `
query {
  ${queryCollection}(orderBy: _updatedAt_DESC) {
    id
    slug
    title
    description
    content
    _updatedAt
  }
}`,
  })) as CMSContent[] | undefined

  if (!thoughts) return

  return thoughts
    .map((entry) => ({
      ...entry,
      link: `/${collection.toLowerCase()}/${entry.slug}`,
      updatedAt: entry._updatedAt,
      subtitle:
        entry?.description && entry.description !== ""
          ? entry.description
          : formatDate(entry._updatedAt),
    }))
    .slice(0, limit)
}

export async function getCMSContentEntry(
  collection: "Snippets" | "Thoughts",
  slug: string
) {
  const queryCollection = collection === "Snippets" ? "snippet" : "thought"
  const entry = (await performRequest({
    query: `
query {
  ${queryCollection}(filter: {slug: {eq: "${slug}"}}) {
    id
    slug
    title
    description
    content
    _updatedAt
  }
}`,
  })) as CMSContent | undefined

  if (!entry) return

  return {
    ...entry,
    link: `/${collection.toLowerCase()}/${entry.slug}`,
    updatedAt: entry._updatedAt,
    subtitle:
      entry.description !== ""
        ? entry.description
        : formatDate(entry._updatedAt),
  }
}

const dedupedFetch = cache(async (serializedInit: string) => {
  const response = await fetch(
    "https://graphql.datocms.com/",
    JSON.parse(serializedInit)
  )
  const responseBody: {
    data: {
      allSnippets?: CMSContent[]
      allThoughts?: CMSContent[]
      thought?: CMSContent
      snippet?: CMSContent
    }
  } = await response.json()
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`
    )
  }
  return responseBody
})

export async function performRequest({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate = revalidationInterval,
}: {
  query: string
  variables?: Record<string, unknown>
  includeDrafts?: boolean
  excludeInvalid?: boolean
  visualEditingBaseUrl?: string
  revalidate?: number
}) {
  const { data } = await dedupedFetch(
    JSON.stringify({
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
        ...(excludeInvalid ? { "X-Exclude-Invalid": "true" } : {}),
        ...(visualEditingBaseUrl
          ? {
              "X-Visual-Editing": "vercel-v1",
              "X-Base-Editing-Url": visualEditingBaseUrl,
            }
          : {}),
      },
      body: JSON.stringify({ query, variables, revalidate }),
      next: { revalidate },
    })
  )
  return (
    data?.allSnippets ?? data?.allThoughts ?? data?.thought ?? data?.snippet
  )
}
