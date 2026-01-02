# Example: Composable Documentation

This is an example of well-structured composable documentation.

---

```markdown
---
title: useSeoMeta
description: Set meta tags with full TypeScript support
relatedPages:
  - path: /docs/seo-utils/api/use-head
    title: useHead
  - path: /learn/mastering-meta/descriptions
    title: Writing Meta Descriptions
---

Sets meta tags with full TypeScript support. Flattens the verbose `useHead` meta array into a simple object.

\`\`\`ts
useSeoMeta({
  title: 'My Page',
  description: 'Page description',
  ogImage: 'https://example.com/og.png'
})
\`\`\`

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | `string` | Page title (also sets `og:title`) |
| `description` | `string` | Meta description (also sets `og:description`) |
| `ogImage` | `string` | Open Graph image URL |
| `twitterCard` | `'summary' \| 'summary_large_image'` | Twitter card type |

Full list: [Meta Tags Reference](/docs/seo-utils/api/meta-tags)

## Reactivity

Pass refs for values that change:

\`\`\`ts
const title = ref('Initial Title')

useSeoMeta({
  title,
  description: 'Static description'
})

// Later
title.value = 'Updated Title' // Meta tag updates
\`\`\`

## With Async Data

Use inside `useAsyncData` for dynamic pages:

\`\`\`ts
const { data: post } = await useAsyncData(() => fetchPost())

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.excerpt
})
\`\`\`

## Common Mistakes

### Using `useHead` for simple meta

\`\`\`ts [❌ Verbose]
useHead({
  meta: [
    { name: 'description', content: 'Description' },
    { property: 'og:title', content: 'Title' },
    { property: 'og:description', content: 'Description' }
  ]
})
\`\`\`

\`\`\`ts [✅ Better]
useSeoMeta({
  title: 'Title',
  description: 'Description'
})
\`\`\`

### Forgetting reactivity

\`\`\`ts [❌ Won't update]
const { data } = await useAsyncData(() => fetch())
useSeoMeta({
  title: data.value?.title // Static at call time
})
\`\`\`

\`\`\`ts [✅ Reactive]
useSeoMeta({
  title: () => data.value?.title // Updates when data changes
})
\`\`\`

## Verify

Check meta tags in browser DevTools:
1. Open Elements tab
2. Expand `<head>`
3. Look for `<meta name="description">` and `<meta property="og:*">`

Or use the [Meta Tag Checker](/tools/meta-tag-checker).
```
