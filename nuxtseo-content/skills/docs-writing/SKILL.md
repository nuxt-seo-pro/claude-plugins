---
name: Documentation Writing
description: This skill should be used when the user asks to "write docs", "document feature", "create API docs", "technical documentation", "document this module", "write reference docs", "document composable", or needs to write reference documentation.
version: 0.2.0
---

# Documentation Writing

Technical reference documentation. Model after Stripe, Anthropic, and Claude Code docs.

## Artifacts

**Reads:**
- `.claude/context/brand-voice.md` — Terminology, tone
- `.claude/context/target-keywords.md` — Keywords for SEO

**Before writing:** Check for artifacts. Use established terminology when it exists.

## Core Principles

- Task-oriented titles: "Create a sitemap" not "Understanding sitemaps"
- Code within first 3 scrolls
- Tables for parameters, not prose
- State limitations clearly
- Assume reader intelligence—skip obvious setup
- Say what NOT to do and when it's overkill

## Page Structure

```markdown
---
title: [Action-oriented title]
description: [What it does in one line]
relatedPages:
  - path: /docs/related-module
    title: Related Feature
  - path: /learn/topic
    title: Related Guide
---

[1-2 sentence opener: what it does + primary use case]

[Code for the 80% case—no heading needed if single block]

## Setup

[Only if multiple steps required]

## Configuration

[Options table]

## [Topic Sections]

[Deeper content, edge cases, advanced usage]
```

## Title Patterns

| Good | Bad |
|------|-----|
| Create a sitemap | Understanding sitemaps |
| Configure robots.txt | Working with robots.txt |
| Debug OG images | Troubleshooting OG image issues |
| Generate dynamic meta tags | Meta tag generation guide |

## Opening Sentences

Open with facts, not introductions.

**Bad:**
> Meta descriptions are an important part of SEO. In this guide, we'll explore how to configure them in Nuxt.

**Good:**
> Meta descriptions don't affect rankings. They affect clicks. Set them with `useSeoMeta()`.

**Bad:**
> The sitemap module provides a way to generate XML sitemaps for your Nuxt application.

**Good:**
> Generates `/sitemap.xml` automatically from your routes. Zero config required.

## Documentation Types

### Composable Docs

```markdown
---
title: useSeoMeta
---

Sets meta tags with full TypeScript support.

\`\`\`ts
useSeoMeta({
  title: 'Page Title',
  description: 'Page description'
})
\`\`\`

## Parameters

| Param | Type | Description |
|-------|------|-------------|
| `title` | `string` | Page title |
| `description` | `string` | Meta description |

## Reactivity

Pass refs for reactive values:

\`\`\`ts
const title = ref('Initial')
useSeoMeta({ title })
\`\`\`
```

### Config Docs

```markdown
---
title: Sitemap Configuration
---

Configure sitemap generation in `nuxt.config.ts`.

\`\`\`ts
export default defineNuxtConfig({
  sitemap: {
    // options
  }
})
\`\`\`

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Generate sitemap |
| `urls` | `string[]` | `[]` | Additional URLs |
```

### Component Docs

```markdown
---
title: OgImage Component
---

Renders dynamic OG images at build time.

\`\`\`vue
<template>
  <OgImage />
</template>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Image title |
| `description` | `string` | — | Image description |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Custom image content |
```

## Parameter Tables

Always tables, never prose.

**Good:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Generate sitemap |
| `hostname` | `string` | — | Site URL (required in production) |

**Bad:**
> The enabled prop is a boolean that defaults to true and controls whether the sitemap is generated. The hostname prop is a string that specifies your site URL...

## Code Examples

### TypeScript Only

```ts
// Always TypeScript, never JavaScript
useSeoMeta({ title: 'Page' })
```

### Code Groups for Alternatives

````markdown
::code-group
```ts [Recommended]
useSeoMeta({ title: 'Page' })
```

```ts [Alternative]
useHead({ title: 'Page' })
```
::
````

### Good/Bad Comparisons

````markdown
```ts [❌ Bad]
useHead({
  meta: [{ name: 'description', content: 'x' }]
})
```

```ts [✅ Good]
useSeoMeta({ description: 'x' })
```
````

### Real URLs

Use real domains, not example.com:
```ts
useSeoMeta({
  ogUrl: 'https://nuxtseo.com/docs/sitemap'
})
```

## What to Include

### Verification Section

Show how to test it works:
```markdown
## Verify

Check `http://localhost:3000/sitemap.xml` shows your pages.
```

### Limitations

State limitations inline where relevant:
```markdown
Dynamic routes require `nitro.prerender.routes` or explicit `urls` config.
```

### When to Skip

Tell readers when something is overkill:
```markdown
Skip this unless you need per-route control. The defaults handle 90% of cases.
```

## What NOT to Include

- "Best practices" sections
- "✅ When to use" / "❌ When not to use" blocks
- Dedicated "Decision" sections—opener makes use case clear
- "Quick Setup"—just call it "Setup"
- "Related" H2 sections—use frontmatter
- Filler introductions

## Voice

- Developer-to-developer, casual but accurate
- State opinions: "This is lazy", "Overkill for most sites"
- No hedging: "Do X" not "You may want to consider X"
- Be specific: "Google rewrites 70%" not "search engines may modify"

## Banned Content

**Words:** dive into, crucial, essential, robust, seamless, leverage, utilize, comprehensive, harness, empower, elevate, unlock, game-changer

**Phrases:** "it's important to note", "in today's [X]", "let's explore", "this is where X comes in"

**Patterns:** rhetorical questions, three-adjective chains, filler intros

## Internal Linking

- 2-3 related pages in frontmatter
- Inline link first mention of features
- Mix docs and learn content

```yaml
relatedPages:
  - path: /docs/og-image/composables/define-og-image
    title: defineOgImage
  - path: /learn/mastering-meta/og-images
    title: OG Image Guide
```

## Example: Complete Doc Page

See `examples/composable-doc.md` for a complete example.
