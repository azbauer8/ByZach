---
title: 'Tailwind responsive font sizes'
status: 'published'
author:
  name: 'Zach Bauer'
  picture: 'https://avatars.githubusercontent.com/u/8096606?v=4'
slug: 'tailwind-responsive-font-sizes'
description: 'Tailwind font sizes recreated to adapt to the screen size.'
coverImage: ''
publishedAt: '2024-05-04T16:20:27.626Z'
---

```js
module.exports = {

  //...other configs

  theme: {
    fontSize: {
      xs: [".75rem"],
      sm: [
        "clamp(0.75rem, 0.6631rem + 0.3311vw, 0.875rem)",
        "clamp(1.125rem, 1.0381rem + 0.3311vw, 1.25rem)",
      ],
      base: [
        "clamp(0.875rem, 0.7881rem + 0.3311vw, 1rem)",
        "clamp(1.25rem, 1.0762rem + 0.6623vw, 1.5rem)",
      ],
      lg: [
        "clamp(1rem, 0.9131rem + 0.3311vw, 1.125rem)",
        "clamp(1.5rem, 1.3262rem + 0.6623vw, 1.75rem)",
      ],
      xl: [
        "clamp(1.125rem, 1.0381rem + 0.3311vw, 1.25rem)",
        "clamp(1.5rem, 1.3262rem + 0.6623vw, 1.75rem)",
      ],
      "2xl": [
        "clamp(1.25rem, 1.0762rem + 0.6623vw, 1.5rem)",
        "clamp(1.75rem, 1.5762rem + 0.6623vw, 2rem)",
      ],
      "3xl": [
        "clamp(1.5rem, 1.2392rem + 0.9934vw, 1.875rem)",
        "clamp(2rem, 1.8262rem + 0.6623vw, 2.25rem)",
      ],
      "4xl": [
        "clamp(1.875rem, 1.6142rem + 0.9934vw, 2.25rem)",
        "clamp(2.25rem, 2.0762rem + 0.6623vw, 2.5rem)",
      ],
      "5xl": ["clamp(2.25rem, 1.7285rem + 1.9868vw, 3rem)", 1],
      "6xl": ["clamp(3rem, 2.4785rem + 1.9868vw, 3.75rem)", 1],
      "7xl": ["clamp(3.75rem, 3.2285rem + 1.9868vw, 4.5rem)", 1],
      "8xl": ["clamp(4.5rem, 3.4570rem + 3.9735vw, 6rem)", 1],
      "9xl": ["clamp(6rem, 4.6093rem + 5.2980vw, 8rem)", 1],
    },
  },

}
```