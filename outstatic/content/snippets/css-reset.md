---
title: 'CSS Reset'
status: 'draft'
author:
  name: 'Zach Bauer'
  picture: 'https://avatars.githubusercontent.com/u/8096606?v=4'
slug: 'css-reset'
description: ''
coverImage: ''
publishedAt: '2024-05-04T15:26:57.390Z'
---

---

## Vanilla CSS

```css
* {
  /* Include padding and border in size calculation. */
  box-sizing: border-box;
  /* Position based on immediate parent and allow adjusting top/right/bottom/left */
  position: relative;
  /* Prevent grid and flex ítems from spill ing out of their container. */
  min-width: 0;
}
body {
  /* Ensure that the body fills the entire viewport. */
  min-height: 100dvh;
}

hl,
h2,
h3,
h4,
h5,
h6 {
  /* Balance headings across multiple lines into an even block. */
  text-wrap: Balance;
}

p {
  /* Prevent text orphans (single words on last line). */
  text-wrap: pretty;
}
```

## TailwindCSS

Some styling above is already included in Tailwind's preflight module.

```css
@layer base {
  * {
    @apply relative min-w-0;
  }
  body {
    @apply min-h-dvh;
  }
  h1,
  h2,
  h3,
  h4 {
    @apply text-balance;
  }
  p {
    @apply text-pretty;
  }
}
```