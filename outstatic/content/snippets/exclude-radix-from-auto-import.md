---
title: 'Exclude Radix from Auto Import'
status: 'draft'
author:
  name: 'Zach Bauer'
  picture: 'https://avatars.githubusercontent.com/u/8096606?v=4'
slug: 'exclude-radix-from-auto-import'
description: 'Add this to your VS Code settings file.'
coverImage: ''
publishedAt: '2024-05-04T15:28:19.945Z'
---

---

```json
"typescript.preferences.autoImportFileExcludePatterns": [
    "@radix-ui/!(icons)"
]
"javascript.preferences.autoImportFileExcludePatterns": [
    "@radix-ui/!(icons)"
]
```