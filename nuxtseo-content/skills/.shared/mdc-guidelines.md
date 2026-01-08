# MDC Guidelines

Markdown patterns for Nuxt Content. MDC (Markdown Components) extends markdown with Vue component syntax.

## Code Blocks

### Basic Syntax

````markdown
```ts
const foo = 'bar'
```
````

### File Labels

Show filename in tab:

````markdown
```ts [nuxt.config.ts]
export default defineNuxtConfig({})
```
````

### Language Tags

Always specify language. Common tags:

| Tag | Use |
|-----|-----|
| `ts` | TypeScript |
| `vue` | Vue SFC |
| `bash` | Shell commands |
| `json` | JSON config |
| `yaml` | YAML/frontmatter |
| `text` | Plain text, filenames |

### Inline Code with Language

For syntax highlighting in inline code:

```markdown
Call `fetchData()`{lang="ts"} to load content.
The `<MyComponent>`{lang="vue"} renders the UI.
Edit `nuxt.config.ts`{lang="text"} to configure.
```

## Code Groups

Group related code examples in tabs. Use when showing:
- Same concept in different contexts (files, frameworks)
- Alternative implementations
- Before/after comparisons

### Syntax

````markdown
::code-group
```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['my-module']
})
```

```vue [app.vue]
<script setup lang="ts">
const data = ref('Hello')
</script>
```
::
````

### When to Use Code Groups

**Use for:**
- Multiple files for one concept
- Framework alternatives (Vue/React/Svelte)
- Package manager variants (npm/pnpm/yarn)
- Config file formats (ts/js/json)

**Don't use for:**
- Single code example
- Unrelated code blocks
- Sequential steps (use numbered list instead)

### Labels

Use descriptive tab labels:

````markdown
::code-group
```ts [Recommended]
const data = await useFetch('/api/data')
```

```ts [Alternative]
const data = await $fetch('/api/data')
```
::
````

Good/bad comparisons:

````markdown
```ts [Bad]
let value = data.value?.items?.[0]?.name ?? 'default'
```

```ts [Good]
const name = data.value?.items?.at(0)?.name ?? 'default'
```
````

## Callouts

### Standard Callouts

Available in all Nuxt Content projects:

```markdown
::tip
Helpful suggestion or best practice.
::

::note
Additional context or clarification.
::

::warning
Common mistake or gotcha to watch for.
::

::danger
Critical issue that will cause problems.
::
```

### Callout Titles

```markdown
::warning{title="Breaking Change"}
This API changed in v2.0.
::
```

### Usage Guidelines

| Type | Use For | Frequency |
|------|---------|-----------|
| `tip` | Best practices, shortcuts, pro tips | 1-2 per page |
| `note` | Clarifications, tangential info | 1-2 per page |
| `warning` | Gotchas, common mistakes | 1 per page |
| `danger` | Critical, breaking issues | Rare (1 per 10 pages) |

**Rules:**
- Max 3 callouts per page
- Never stack callouts back-to-back
- Don't repeat info already in main text

## Components

### Block Components

Double colon prefix, content between tags:

```markdown
::component-name
Content goes here.
::
```

### Inline Components

Single colon, self-closing:

```markdown
:component-name{prop="value"}
```

### Props

Pass props in curly braces:

```markdown
::component{id="unique-id" title="Section Title"}
Content
::
```

### Slots

Named slots with `#`:

```markdown
::card
#title
Card Title

#default
Card content here.
::
```

## Prose Components

### Links

Standard markdown links work:

```markdown
[Link Text](/path/to/page)
[External](https://example.com)
```

Internal links auto-resolve. External links get `target="_blank"` automatically.

### Images

```markdown
![Alt text](/images/screenshot.png)
```

With component syntax for props:

```markdown
::img{src="/images/screenshot.png" alt="Description" width="800"}
::
```

### Tables

Standard markdown tables:

```markdown
| Column 1 | Column 2 |
|----------|----------|
| Value 1  | Value 2  |
```

## Frontmatter

YAML at file start:

```yaml
---
title: Page Title
description: Meta description for SEO
---
```

### Common Fields

```yaml
---
title: Page Title
description: SEO meta description (150-160 chars)
createdAt: 2025-01-15
updatedAt: 2025-01-20
relatedPages:
  - path: /docs/related-feature
    title: Related Feature
---
```

### Related Pages

Never use `## Related` sections. Use frontmatter:

```yaml
relatedPages:
  - path: /docs/feature
    title: Feature Docs
  - path: /learn/topic/article
    title: Learn Article
```

Limited to 2-4 pages.

## File Organization

### Path Conventions

| Path Pattern | Content Type |
|--------------|--------------|
| `content/docs/**` | Technical documentation |
| `content/learn/**` | Educational articles |
| `content/blog/**` | Blog posts |

### Naming

- Use kebab-case: `getting-started.md`
- Use `index.md` for section landing pages
- Numeric prefixes for ordering: `1.introduction.md`
