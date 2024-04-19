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
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        dateTime: fields.datetime({
          label: "Created/Updated At",
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Website", value: "Website" },
            { label: "Desktop App", value: "Desktop App" },
            { label: "VSCode Theme", value: "VSCode Theme" },
          ],
          defaultValue: "Website",
        }),
        link: fields.url({ label: "Link" }),
        descShort: fields.text({ label: "Short Description" }),
        content: fields.mdx({
          label: "Long Description",
        }),
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
            { label: "Dev Tool", value: "Dev Tool" },
            { label: "Resource", value: "Resource" },
            { label: "UI Design", value: "UI Design" },
            { label: "UI Library", value: "UI Library" },
            { label: "React Library", value: "React Library" },
            { label: "Portfolio", value: "Portfolio" },
            { label: "Article", value: "Article" },
          ],
          defaultValue: "React Library",
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
            { label: "Config", value: "Config" },
            { label: "React Hook", value: "React Hook" },
            { label: "Component", value: "Component" },
          ],
          defaultValue: "Component",
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
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        dateTime: fields.datetime({
          label: "Created/Updated At",
        }),
        category: fields.text({
          label: "Category",
        }),
        platform: fields.multiselect({
          label: "Platform",
          options: [
            { label: "Windows", value: "Windows" },
            { label: "MacOS", value: "MacOS" },
            { label: "iOS", value: "iOS" },
          ],
        }),
        cost: fields.select({
          label: "Cost",
          options: [
            { label: "Free", value: "Free" },
            { label: "One-Time Payment", value: "One-Time Payment" },
            { label: "Subscription", value: "Subscription" },
          ],
          defaultValue: "Free",
        }),
        link: fields.url({ label: "Link" }),
        descShort: fields.text({ label: "Short Description" }),
        content: fields.mdx({
          label: "Long Description",
        }),
      },
    }),
  },
})
