import "server-only"

import { cache } from "react"
import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import type { MdBlock } from "notion-to-md/build/types"

import type {
  FormattedNotionResult,
  NotionDatabase,
  NotionPage,
  NotionQuery,
} from "@/lib/notion.types"
import { slugify, unslugify } from "@/lib/utils"

export const notionIds = {
  about: "4c31db80-a8e1-4134-a802-a90b8bd88f7d",
  colophon: "92f6f19a-0bf4-449b-8a12-642f7c685694",
  projects: "7d4cc30d-8b5a-4798-b34f-b3c7372f71f3",
  discoveries: "751aedae-1d44-4bf1-b202-8394e0a163ca",
  uses: "1221a5cd-c4a6-4bd9-8fb1-cad16eb7fe57",
  thoughts: "66d04f50-2ff6-44b3-a1b0-e7e53676563f",
  snippets: "2cd9a005-66e5-40e5-8bbf-10a5c27c73d1",
}

export const getMarkdownContent = cache(async (pageId: string) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const n2m = new NotionToMarkdown({
    notionClient: notion,
    config: {
      parseChildPages: false,
    },
  })
  const mdblocks = await n2m.pageToMarkdown(pageId)
  // fixes syntax highlighting for jsx code
  const formattedBlocks = mdblocks
    .map((block) => {
      if (block.type === "code") {
        const { parent } = block
        if (parent.startsWith("```typescript") && parent.includes("/>")) {
          return { ...block, parent: parent.replace("```typescript", "```tsx") }
        }
        if (parent.startsWith("```javascript") && parent.includes("/>")) {
          return { ...block, parent: parent.replace("```javascript", "```jsx") }
        }
      }
      return block
    })
    .filter((block) => block !== undefined)

  return n2m.toMarkdownString(formattedBlocks).parent
})

export const getPageInfo = cache(async (pageId: string) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.pages.retrieve({
    page_id: pageId,
  })) as unknown as NotionPage
  return response
})

export const getThoughts = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.query({
    database_id: notionIds.thoughts,
  })) as unknown as NotionQuery | null

  if (!response) return null

  return response.results
    .map((thought) => ({
      id: thought.id,
      slug: thought.properties.Slug.formula.string,
      title: thought.properties.Title.title[0].plain_text,
      subtitle: thought.properties.Description.rich_text[0].plain_text,
      extIcon: thought.icon?.external.url,
      image: thought.cover?.external.url,
      createdAt: thought.created_time,
      updatedAt: thought.last_edited_time,
      link: `/thoughts/${thought.properties.Slug.formula.string}`,
    }))
    .sort(
      (a, b) =>
        new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf()
    )
}

export const getThought = async (slug: string) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.query({
    database_id: notionIds.thoughts,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })) as unknown as NotionQuery | null

  if (!response) return null

  const thought = response.results[0]

  return {
    id: thought.id,
    slug: thought.properties.Slug.formula.string,
    title: thought.properties.Title.title[0].plain_text,
    subtitle: thought.properties.Description.rich_text[0].plain_text,
    extIcon: thought.icon?.external.url,
    image: thought.cover?.external.url,
    createdAt: thought.created_time,
    updatedAt: thought.last_edited_time,
    link: `/thoughts/${thought.properties.Slug.formula.string}`,
  }
}

export const getSnippets = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.query({
    database_id: notionIds.snippets,
  })) as unknown as NotionQuery | null

  if (!response) return null

  return response.results
    .map((snippet) => ({
      id: snippet.id,
      slug: snippet.properties.Slug.formula.string,
      title: snippet.properties.Title.title[0].plain_text,
      subtitle: snippet.properties.Description.rich_text[0].plain_text,
      extIcon: snippet.icon?.external.url,
      image: snippet.cover?.external.url,
      createdAt: snippet.created_time,
      updatedAt: snippet.last_edited_time,
      link: `/snippets/${snippet.properties.Slug.formula.string}`,
    }))
    .sort(
      (a, b) =>
        new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf()
    )
}

export const getSnippet = async (slug: string) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.query({
    database_id: notionIds.snippets,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })) as unknown as NotionQuery | null

  if (!response) return null

  const snippet = response.results[0]

  return {
    id: snippet.id,
    slug: snippet.properties.Slug.formula.string,
    title: snippet.properties.Title.title[0].plain_text,
    subtitle: snippet.properties.Description.rich_text[0].plain_text,
    extIcon: snippet.icon?.external.url,
    image: snippet.cover?.external.url,
    createdAt: snippet.created_time,
    updatedAt: snippet.last_edited_time,
    link: `/snippets/${snippet.properties.Slug.formula.string}`,
  }
}

export const getProjects = cache(async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.query({
    database_id: notionIds.projects,
  })) as unknown as NotionQuery | null

  if (!response) return null

  return response.results
    .map((project) => ({
      slug: project.properties.Slug.formula.string,
      title: project.properties.Title.title[0].plain_text,
      subtitle: project.properties.Description.rich_text[0].plain_text,
      link: project.properties.Link.url,
      extIcon: project.icon?.external.url,
      image: project.cover?.external.url,
      createdAt: project.created_time,
      updatedAt: project.last_edited_time,
    }))
    .sort(
      (a, b) =>
        new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf()
    )
})

export const getDiscoveryCategories = cache(async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.retrieve({
    database_id: notionIds.discoveries,
  })) as unknown as NotionDatabase | null

  if (!response) return null

  const categories = []
  for (const option of response.properties.Tags.multi_select.options) {
    const entries = await getDiscoveriesInCategory(option.name)
    const slug = slugify(option.name.toLowerCase())
    categories.push({
      slug,
      title: option.name,
      subtitle: entries?.length
        ? entries.length > 1
          ? `${entries.length} discoveries`
          : `${entries.length} discovery`
        : "",
      link: `/discoveries/${slug}`,
      entries: entries?.length ?? 0,
    })
  }
  return categories.sort((a, b) => b.entries - a.entries)
})

export const getDiscoveriesInCategory = cache(async (category: string) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.query({
    database_id: notionIds.discoveries,
    filter: {
      property: "Tags",
      multi_select: {
        contains: unslugify(category),
      },
    },
  })) as unknown as NotionQuery | null

  if (!response) return null

  return response.results
    .map((discovery) => ({
      slug: discovery.properties.Slug.formula.string,
      title: discovery.properties.Title.title[0].plain_text,
      subtitle: discovery.properties?.Description?.rich_text?.[0]?.plain_text,
      link: discovery.properties.Link.url,
      extIcon: discovery.icon?.external.url,
      image: discovery.cover?.external.url,
      category: discovery.properties.Tags.multi_select[0].name,
      createdAt: discovery.created_time,
      updatedAt: discovery.last_edited_time,
    }))
    .sort(
      (a, b) =>
        new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf()
    )
})

export const getUses = cache(async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.query({
    database_id: notionIds.uses,
    filter: {
      property: "Tags",
      multi_select: {
        contains: "Software",
      },
    },
  })) as unknown as NotionQuery | null

  if (!response) return null

  const groupedUses = response.results.reduce(
    (acc, item) => {
      const category =
        item.properties.Tags.multi_select.find((tag) => tag.name !== "Software")
          ?.name ?? "General"
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push({
        slug: item.properties.Slug.formula.string,
        title: item.properties.Title.title[0].plain_text,
        subtitle: item.properties.Description.rich_text[0].plain_text,
        link: item.properties.Link.url,
        extIcon: item.icon?.external.url,
        image: item.cover?.external.url,
        createdAt: item.created_time,
        updatedAt: item.last_edited_time,
        category:
          item.properties.Tags.multi_select.find(
            (tag) => tag.name !== "Software"
          )?.name ?? "General",
      })
      return acc
    },
    {} as Record<string, FormattedNotionResult[]>
  )

  const groupedAndSortedUses: Record<string, FormattedNotionResult[]> = {}

  const sortedKeys = Object.keys(groupedUses).sort()

  for (const key of sortedKeys) {
    const values = groupedUses[key]
    groupedAndSortedUses[key] = values.sort(
      (a, b) =>
        new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf()
    )
  }

  return groupedAndSortedUses
})
