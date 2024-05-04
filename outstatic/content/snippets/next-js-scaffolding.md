---
title: 'Next.js Scaffolding'
status: 'published'
author:
  name: 'Zach Bauer'
  picture: 'https://avatars.githubusercontent.com/u/8096606?v=4'
slug: 'next-js-scaffolding'
description: 'Basic Next.js project setup including ppr, eslint, and prettier.'
coverImage: ''
publishedAt: '2024-05-04T16:20:08.186Z'
---

---

## Create Next.js app:

```bash
pnpx create-next-app@canary
```

```
What is your project named?  my-app
Would you like to use TypeScript?  Yes
Would you like to use ESLint?  Yes
Would you like to use Tailwind CSS?  Yes
Would you like to use `src/` directory?  Yes
Would you like to use App Router? (recommended)  Yes
Would you like to customize the default import alias (@/*)?  No
```

## Install packages:

```bash
pnpm i -D --save-dev eslint eslint-config-next eslint-config-prettier eslint-plugin-tailwindcss @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```bash
pnpm i -D --save-dev prettier prettier-plugin-tailwindcss @ianvs/prettier-plugin-sort-imports
```

```bash
pnpm i -D knip
```

## Create/Update configs:

```json
"dev": "next dev --turbo",
"format": "prettier --write ./src",
"knip": "knip"
```

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
}

module.exports = nextConfig
```

```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier",
    "plugin:tailwindcss/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "./tsconfig.json"
      }
    }
  ],
  "rules": {
    "@typescript-eslint/ban-ts-comment": "off"
  }
}
```

```json
{
  "endOfLine": "lf",
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "es5",

  "importOrder": [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]"
  ],
  "importOrderParserPlugins": ["typescript", "jsx", "decorators-legacy"],

  "plugins": [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ]
}
```

```json
{
  "$schema": "https://unpkg.com/knip@5/schema.json",
  "entry": ["index.{js,ts}", "src/index.{js,ts}"],
  "project": ["src/**/*.{js,ts}"]
}
```