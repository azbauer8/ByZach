import { collection, config, fields } from "@keystatic/core"

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "zach-bauer/byzach",
  },
  collections: {
    thoughts: collection({
      label: "Thoughts",
      slugField: "title",
      path: "content/thoughts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        dateTime: fields.datetime({
          label: "Created/Updated At",
        }),
        content: fields.mdx({
          label: "Post Content",
        }),
      },
    }),
    snippets: collection({
      label: "Snippets",
      slugField: "title",
      path: "content/snippets/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        dateTime: fields.datetime({
          label: "Created/Updated At",
        }),
        description: fields.text({ label: "Description" }),
        content: fields.mdx({
          label: "Snippet Content",
        }),
      },
    }),
  },
})
