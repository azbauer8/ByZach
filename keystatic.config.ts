import { collection, config, fields } from "@keystatic/core"

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    thoughts: collection({
      label: "Thoughts",
      slugField: "title",
      path: "content/thoughts/*",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        datetime: fields.datetime({
          label: "Created/Updated At",
        }),
        body: fields.document({
          label: "Post Body",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/site/images",
            publicPath: "/site/images",
            schema: {
              title: fields.text({
                label: "Caption",
                description:
                  "The text to display under the image in a caption.",
              }),
            },
          },
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
        datetime: fields.datetime({
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
        content: fields.document({
          label: "Long Description",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/site/images",
            publicPath: "/site/images",
            schema: {
              title: fields.text({
                label: "Caption",
                description:
                  "The text to display under the image in a caption.",
              }),
            },
          },
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
        datetime: fields.datetime({
          label: "Created/Updated At",
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Dev Tools", value: "Dev Tools" },
            { label: "Resources", value: "Resources" },
            { label: "UI Design", value: "UI Design" },
            { label: "UI Libraries", value: "UI Libraries" },
            { label: "React Libraries", value: "React Libraries" },
            { label: "Portfolios", value: "Portfolios" },
            { label: "Articles", value: "Articles" },
          ],
          defaultValue: "React Libraries",
        }),
        link: fields.url({ label: "Link" }),
        description: fields.text({ label: "Description" }),
      },
    }),
    uses: collection({
      label: "Uses",
      slugField: "title",
      path: "content/uses/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        datetime: fields.datetime({
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
        shortDesc: fields.text({ label: "Short Description" }),
        content: fields.document({
          label: "Long Description",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/site/images",
            publicPath: "/site/images",
            schema: {
              title: fields.text({
                label: "Caption",
                description:
                  "The text to display under the image in a caption.",
              }),
            },
          },
        }),
      },
    }),
  },
})
