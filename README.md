# [ByZach.dev](https://byzach.dev)

My personal website

- Built with [Next.js 14](https://nextjs.org) and [TypeScript](https://www.typescriptlang.org)
  - Utilizing Next 14's experimental [Partial Prerendering](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model#try-ppr-on-vercel-today) feature
- Styled with [Tailwind](https://tailwindcss.com) and a few components from [shadcn/ui](https://ui.shadcn.com/)
- Using APIs from [Last.fm](https://www.last.fm/api), [Trakt](https://trakt.docs.apiary.io/), and [OMDb](https://www.omdbapi.com/)
- Hosted on [Vercel](https://vercel.com/)

## Get Started

1. Clone this repo

2. Create a `.env.local` file in the root of the project and enter your API keys

   ```shell
   LAST_FM_API=
   TRAKT_API=
   OMDB_API=
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Run it
   ```bash
   npm run dev
   ```
