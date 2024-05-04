---
title: 'Disable Windows Explorer Auto-Discovery'
status: 'draft'
author:
  name: 'Zach Bauer'
  picture: 'https://avatars.githubusercontent.com/u/8096606?v=4'
slug: 'disable-windows-explorer-auto-discovery'
description: 'Add/modify the regedit key below to get a noticeable performance boost in file explorer. Windows is stupid, idk.'
coverImage: ''
publishedAt: '2024-05-04T15:27:41.380Z'
---

---

```bash
[HKEY_CURRENT_USER\SOFTWARE\Classes\Local Settings\Software\Microsoft\Windows\Shell\Bags\AllFolders\Shell]
"FolderType"="NotSpecified"
```