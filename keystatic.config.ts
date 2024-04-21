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
      format: { contentField: "body" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        dateTime: fields.datetime({
          label: "Created/Updated At",
        }),
        body: fields.mdx({
          label: "Post Body",
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        dateTime: fields.datetime({
          label: "Created/Updated At",
        }),
        link: fields.url({ label: "Link" }),
        description: fields.text({ label: "Short Description" }),
      },
    }),
    discoveries: collection({
      label: "Discoveries",
      slugField: "title",
      path: "content/discoveries/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        dateTime: fields.datetime({
          label: "Created/Updated At",
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Dev Tools", value: "Dev Tools" },
            { label: "Apps", value: "Apps" },
            { label: "Icons", value: "Icons" },
            { label: "Fonts", value: "Fonts" },
            { label: "Wallpapers", value: "Wallpapers" },
            { label: "UI Libraries", value: "UI Libraries" },
            { label: "Resource Catalogs", value: "Resource Catalogs" },
            { label: "Articles", value: "Articles" },
            { label: "Portfolios", value: "Portfolios" },
          ],
          defaultValue: "Dev Tools",
        }),
        link: fields.url({ label: "Link" }),
        description: fields.text({ label: "Description" }),
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
        category: fields.select({
          label: "Category",
          options: [
            { label: "VS Code", value: "VS Code" },
            { label: "Configs", value: "Configs" },
            { label: "React Hooks", value: "React Hooks" },
            { label: "React Components", value: "React Components" },
          ],
          defaultValue: "React Components",
        }),
        description: fields.text({ label: "Description" }),
        content: fields.mdx({
          label: "Snippet Content",
        }),
      },
    }),
    uses: collection({
      label: "Uses",
      slugField: "title",
      path: "content/uses/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        dateTime: fields.datetime({
          label: "Created/Updated At",
        }),
        type: fields.select({
          label: "Type",
          options: [
            { label: "Software", value: "Software" },
            { label: "Hardware", value: "Hardware" },
          ],
          defaultValue: "Software",
        }),
        link: fields.url({ label: "Link" }),
        description: fields.text({ label: "Description" }),
      },
    }),
  },
})
