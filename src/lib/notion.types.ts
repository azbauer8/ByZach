export type NotionPage = {
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
  url: string
}
export type NotionDatabase = NotionPage & {
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
}

export type NotionQuery = {
  results: NotionResult[]
}

export type NotionResult = {
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
}

export type FormattedNotionResult = {
  slug: string
  title: string
  subtitle: string
  href: string
  extIcon: string | undefined
  image: string | undefined
  createdAt: string
  updatedAt: string
  category: string
}
