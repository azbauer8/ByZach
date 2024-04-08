import { defineConfig } from "tinacms"

export default defineConfig({
  branch: "main",

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  cmsCallback(cms) {
    cms.Time
  },

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public/tina",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "Thoughts",
        name: "thoughts",
        path: "content/thoughts",
        format: "mdx",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "createdAt",
            label: "Created At",
          },
          {
            type: "rich-text",
            label: "Post Body",
            name: "body",
            isBody: true,
            // templates: [
            //   {
            //     name: "NewsletterSignup",
            //     label: "Newsletter Sign Up",
            //     fields: [
            //       {
            //         name: "children",
            //         label: "CTA",
            //         type: "rich-text",
            //       },
            //       {
            //         name: "buttonText",
            //         label: "Button Text",
            //         type: "string",
            //       },
            //     ],
            //   },
            // ],
          },
        ],
      },
      {
        label: "Projects",
        name: "projects",
        path: "content/projects",
        format: "mdx",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Category",
            name: "category",
          },
          {
            type: "string",
            label: "Link",
            name: "link",
          },
          {
            type: "string",
            label: "Short Description",
            name: "descShort",
          },
          {
            type: "rich-text",
            label: "Long Description",
            name: "descLong",
            isBody: true,
          },
        ],
      },
      {
        label: "Discoveries",
        name: "discoveries",
        path: "content/discoveries",
        format: "json",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Link",
            name: "link",
          },
          {
            type: "string",
            label: "Category",
            name: "category",
          },
          {
            type: "string",
            label: "Description",
            name: "description",
          },
        ],
      },
      {
        label: "Uses",
        name: "uses",
        path: "content/uses",
        format: "mdx",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "platform",
            label: "Platform",
            list: true,
            options: [
              {
                value: "windows",
                label: "Windows",
              },
              {
                value: "mac",
                label: "MacOS",
              },
              {
                value: "ios",
                label: "iOS",
              },
            ],
          },
          {
            type: "string",
            name: "cost",
            label: "Cost",
            list: true,
            options: [
              {
                value: "free",
                label: "Free",
              },
              {
                value: "otp",
                label: "One-Time Payment",
              },
              {
                value: "subscription",
                label: "Subscription",
              },
            ],
          },
          {
            type: "string",
            label: "Category",
            name: "category",
          },
          {
            type: "string",
            label: "Link",
            name: "link",
          },
          {
            type: "string",
            label: "Short Description",
            name: "descShort",
          },
          {
            type: "rich-text",
            label: "Long Description",
            name: "descLong",
            isBody: true,
          },
        ],
      },
    ],
  },
})
