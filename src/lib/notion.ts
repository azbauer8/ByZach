import "server-only"

import { cache } from "react"
import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"

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
  return n2m.toMarkdownString(mdblocks).parent
})

export const getThoughts = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.query({
    database_id: notionIds.thoughts,
  })) as unknown as NotionQuery | null

  if (!response) return null

  return response.results.map((thought) => ({
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

  return response.results.map((snippet) => ({
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

  return response.results.map((project) => ({
    slug: project.properties.Slug.formula.string,
    title: project.properties.Title.title[0].plain_text,
    subtitle: project.properties.Description.rich_text[0].plain_text,
    link: project.properties.Link.url,
    extIcon: project.icon?.external.url,
    image: project.cover?.external.url,
    createdAt: project.created_time,
    updatedAt: project.last_edited_time,
  }))
})

export const getDiscoveryCategories = cache(async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.retrieve({
    database_id: notionIds.discoveries,
  })) as unknown as NotionDatabase | null

  if (!response) return null

  const result = []
  for (const option of response.properties.Tags.multi_select.options) {
    const entries = await getDiscoveriesInCategory(option.name)
    const slug = slugify(option.name.toLowerCase())
    result.push({
      slug,
      title: option.name,
      subtitle: entries?.length
        ? entries.length > 1
          ? `${entries.length} discoveries`
          : `${entries.length} discovery`
        : "",
      link: `/discoveries/${slug}`,
    })
  }
  return result
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

  return response.results.map((discovery) => ({
    slug: discovery.properties.Slug.formula.string,
    title: discovery.properties.Title.title[0].plain_text,
    subtitle:
      discovery.properties?.Description?.rich_text?.[0]?.plain_text ?? "",
    link: discovery.properties.Link.url,
    extIcon: discovery.icon?.external.url,
    image: discovery.cover?.external.url,
    category: discovery.properties.Tags.multi_select[0].name,
    createdAt: discovery.created_time,
    updatedAt: discovery.last_edited_time,
  }))
})

export const getUses = cache(async (type: "Software" | "Hardware") => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const response = (await notion.databases.query({
    database_id: notionIds.uses,
    filter: {
      property: "Tags",
      multi_select: {
        contains: type,
      },
    },
  })) as unknown as NotionQuery | null

  if (!response) return null
  return response.results.map((use) => ({
    slug: use.properties.Slug.formula.string,
    title: use.properties.Title.title[0].plain_text,
    subtitle: use.properties.Description.rich_text[0].plain_text,
    link: use.properties.Link.url,
    extIcon: use.icon?.external.url,
    image: use.cover?.external.url,
    createdAt: use.created_time,
    updatedAt: use.last_edited_time,
    category: use.properties.Tags.multi_select[0].name,
  }))
})

type NotionDatabase = {
  id: string
  created_time: string
  last_edited_time: string
  title: [
    {
      type: "text"
      plain_text: string
      href: null
    },
  ]
  description: []
  properties: {
    Description: {
      id: string
      name: "Description"
      type: "rich_text"
    }
    Link: {
      id: string
      name: "Link"
      type: "url"
    }
    Tags: {
      id: string
      name: "Tags"
      type: "multi_select"
      multi_select: {
        options: {
          id: string
          name: string
          color: string
          description?: string
        }[]
      }
    }
    Title: {
      id: string
      name: "Title"
      type: "title"
    }
  }
  url: string
}

type NotionQuery = {
  results: {
    id: string
    created_time: string
    last_edited_time: string
    cover: { type: string; external: { url: string } } | null
    icon: { type: string; external: { url: string } } | null
    properties: {
      Description: {
        id: string
        type: "rich_text"
        rich_text: {
          type: "text"
          text: {
            content: string
            link: string | null
          }
          plain_text: string
          link: string | null
        }[]
      }
      Link: { id: string; type: "url"; url: string }
      Tags: {
        id: string
        type: "multi_select"
        multi_select: {
          id: string
          name: string
          color: string
        }[]
      }
      Title: {
        id: string
        type: "title"
        title: {
          type: "text"
          text: { content: string; link: string | null }
          plain_text: string
          href: string | null
        }[]
      }
      Slug: {
        id: string
        type: "formula"
        formula: { type: "string"; string: string }
      }
    }
    url: string
  }[]
}
