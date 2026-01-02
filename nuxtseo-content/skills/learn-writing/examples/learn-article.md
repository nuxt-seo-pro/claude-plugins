# Example: Learn Article

This is an example of a well-structured educational article.

---

```markdown
---
title: How to Add Meta Tags in Nuxt
description: Set meta tags with useSeoMeta() in Nuxt 4. Full TypeScript support, zero config, works with SSR.
relatedPages:
  - path: /docs/seo-utils/api/use-seo-meta
    title: useSeoMeta API
  - path: /learn/mastering-meta/descriptions
    title: Writing Meta Descriptions
  - path: /learn/mastering-meta/og-images
    title: Open Graph Images
---

Most Nuxt sites ship with broken meta tags—missing descriptions, wrong OG images, duplicate titles. Here's how to fix that in 2 minutes.

## The Problem with useHead

You've probably seen code like this:

\`\`\`ts [❌ Common Pattern]
useHead({
  title: 'My Page',
  meta: [
    { name: 'description', content: 'Page description' },
    { property: 'og:title', content: 'My Page' },
    { property: 'og:description', content: 'Page description' },
    { property: 'og:image', content: 'https://example.com/og.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'My Page' },
    // ...10 more lines
  ]
})
\`\`\`

That's 15 lines to set 4 pieces of information. And you have to repeat the title and description for Open Graph.

## useSeoMeta: One Line, Full Coverage

\`\`\`ts [✅ Better]
useSeoMeta({
  title: 'My Page',
  description: 'Page description',
  ogImage: 'https://example.com/og.png'
})
\`\`\`

That's it. Three lines. It automatically:
- Sets the page `<title>`
- Sets `meta name="description"`
- Sets all Open Graph tags (`og:title`, `og:description`, `og:image`)
- Sets Twitter card tags

## Dynamic Meta Tags Per Route

For blog posts or product pages, you need meta tags from your data:

\`\`\`ts
const { data: post } = await useAsyncData(() =>
  queryContent(route.params.slug).findOne()
)

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.description,
  ogImage: () => post.value?.image
})
\`\`\`

The arrow functions make it reactive—meta tags update when data changes.

### Why aren't my meta tags updating on navigation?

If you're not seeing meta tags update when navigating between pages, you probably wrote this:

\`\`\`ts [❌ Static—won't update]
useSeoMeta({
  title: post.value?.title
})
\`\`\`

Instead of this:

\`\`\`ts [✅ Reactive—updates on navigation]
useSeoMeta({
  title: () => post.value?.title
})
\`\`\`

The getter function is required for reactivity. Without it, the value is captured once when the component mounts.

## TypeScript Support

`useSeoMeta` has full TypeScript support. You get autocomplete for all 100+ meta tag properties:

\`\`\`ts
useSeoMeta({
  // ↓ Autocomplete shows all options
  ogType: 'article',
  articleAuthor: 'Jane Smith',
  articlePublishedTime: '2025-01-15'
})
\`\`\`

Typos get caught at build time:

\`\`\`ts
useSeoMeta({
  og_image: 'url' // ❌ Error: did you mean 'ogImage'?
})
\`\`\`

## Common Mistakes

### Setting meta tags in `nuxt.config.ts` only

Global meta tags in `nuxt.config.ts` are defaults. They don't change per page. Use `useSeoMeta` in each page/layout for dynamic content.

### Forgetting the description

Google rewrites 70% of missing or bad meta descriptions. Every page needs one:

\`\`\`ts
useSeoMeta({
  title: 'Product Page',
  description: 'Buy the thing. Free shipping, 30-day returns.' // Don't skip this
})
\`\`\`

### Duplicate meta tags

If you set meta tags in both a layout and a page, you might get duplicates. Use `key` to dedupe:

\`\`\`ts
// In layout
useSeoMeta({
  title: 'Site Name',
  titleTemplate: '%s | Site Name'
})

// In page—this replaces the layout's title
useSeoMeta({
  title: 'Page Title'
})
\`\`\`

## Verify It Works

1. Run your dev server: `npm run dev`
2. Open the page in browser
3. Right-click → View Page Source
4. Search for `<meta name="description"`

Or use the [Meta Tag Checker](/tools/meta-tag-checker) to validate all pages at once.
```
