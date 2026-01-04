# Writing Foundations

Core writing principles for all content types.

## Voice

Developer-to-developer. Casual but accurate.

- First person plural for shared experience ("we")
- Second person for instructions ("you")
- Contractions allowed
- Exclamation marks rare
- Vary sentence length. Some short. Others longer when explaining.

### No Hedging

| Instead of | Write |
|------------|-------|
| You may want to consider | Do X |
| It's recommended that | Do X |
| This might potentially | This will |
| Could possibly help | Helps |

### Be Specific

| Instead of | Write |
|------------|-------|
| Search engines may modify | Google rewrites 70% |
| Most sites have issues | 73% of sites fail Core Web Vitals |
| It can improve performance | Reduces LCP by 40% |

## Banned Content

### Banned Words

dive into, crucial, essential, vital, robust, seamless, leverage, utilize, ensure, comprehensive, harness, empower, elevate, unlock, game-changer, delve, realm, landscape, plethora, myriad

### Banned Phrases

- "it's important to note"
- "in today's [X]"
- "let's explore"
- "this is where X comes in"
- "at its core"
- "when it comes to"
- "by the end of this guide"

### Banned Patterns

- Rhetorical questions ("Ever wondered how...?")
- Three-adjective chains ("powerful, flexible, and robust")
- Filler intros before the point
- Superlatives without proof
- Em dashes (—) - use hyphen (-) only for naturally hyphenated words

### Quick Fixes

| Slop | Fix |
|------|-----|
| It's important to note that... | [just state it] |
| This allows you to... | You can... |
| In order to... | To... |
| provides a way to | lets you |
| is designed to | does |
| is intended to return | returns |

## Persuasion Frameworks

Use when structuring content that needs to convince.

### PAS (Problem-Agitate-Solve)

Best for: Feature announcements, tool landing pages, "why use this" sections.

1. **Problem** — State the pain clearly
2. **Agitate** — Make it worse, show consequences
3. **Solve** — Present your solution

### AIDA (Attention-Interest-Desire-Action)

Best for: Landing pages, email sequences, product announcements.

1. **Attention** — Hook with surprising stat or bold claim
2. **Interest** — Expand with relevant details
3. **Desire** — Show benefits, social proof
4. **Action** — Clear CTA

### 4 U's (Headlines)

| U | Meaning | Example |
|---|---------|---------|
| **Useful** | Solves a problem | "Fix broken meta tags" |
| **Urgent** | Time pressure | "Before your next deploy" |
| **Unique** | Different angle | "The lazy way to SEO" |
| **Ultra-specific** | Concrete details | "Add SEO in 2 minutes" |

## Code Conventions

### Dates

Run `date +%Y-%m-%d` to get current date. When modifying content files:
- Add `createdAt`/`updatedAt` if missing
- Bump `updatedAt` to today if present
- Frontmatter: `createdAt: YYYY-MM-DD`, `updatedAt: YYYY-MM-DD`
- useSeoMeta: `articlePublishedTime`, `articleModifiedTime`

### Languages

- **TypeScript** for all JS examples (not JavaScript)
- **Vue SFC** for component examples
- **Bash** for terminal commands

### Code Blocks

````markdown
```ts
// TypeScript code - use site config values
useSeoMeta({
  title: 'Page Title',
  ogUrl: '{site.url}/page'
})
```

```vue
<script setup lang="ts">
// Vue SFC
</script>
```

```bash
npx nuxi module add @nuxtjs/sitemap
```
````

**In examples:** Replace `{site.url}`, `{site.name}` with values from site-config.md.

### Inline Code

Use language tags:
- Functions: `useSeoMeta()`{lang="ts"}
- Components: `<OgImage>`{lang="vue"}
- Files: `nuxt.config.ts`{lang="text"}
- Config keys: `sitemap`{lang="yaml"}

### Code Groups

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
useHead({ meta: [{ name: 'description', content: 'x' }] })
```

```ts [✅ Good]
useSeoMeta({ description: 'x' })
```
````

## Nuxt SEO Patterns

### Meta Hierarchy

Priority: page > layout > app. Set defaults in `app.vue`, override per-page:

```ts
// app.vue - defaults (uses template params from site config)
useSeoMeta({
  titleTemplate: '%s %separator %siteName',
  ogSiteName: '{site.name}'
})

// pages/about.vue - overrides
useSeoMeta({
  title: 'About Us',
  description: 'Who we are and what we do.'
})
```

**Common separators:** `|` `-` `—` `•` `·`

### Schema.org

Use `useSchemaOrg()` for structured data. Auto-imported, no imports needed:

```vue
<script setup lang="ts">
// Article pages
useSchemaOrg([
  defineArticle({
    headline: 'How to Add Meta Tags in Nuxt',
    description: 'Complete guide to managing meta tags.',
    datePublished: '2025-01-15',
    author: {
      '@type': 'Person',
      name: 'Author Name'
    }
  })
])
</script>
```

```vue
<script setup lang="ts">
// FAQ sections
useSchemaOrg([
  defineFAQPage({
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I add meta tags in Nuxt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use useSeoMeta() in any component—auto-imported and SSR-ready.'
        }
      }
    ]
  })
])
</script>
```

### Route Rules

Configure rendering per-route in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  routeRules: {
    '/blog/**': { prerender: true },  // SSG for blog
    '/docs/**': { isr: 3600 }         // ISR with 1hr cache
  }
})
```

## Internal Linking

Every page should link to 2-5 related pages.

### Methods

1. **Inline links** — First mention of features/concepts (preferred)
2. **`relatedPages` frontmatter** — Rendered at page end

```yaml
relatedPages:
  - path: /docs/module/feature
    title: Feature Name
  - path: /learn/topic/article
    title: Article Title
```

### Link Text

| Good | Bad |
|------|-----|
| Configure [robots.txt](/docs/robots) | [Click here](/docs/robots) |
| See [OG Image docs](/docs/og-image) | See the docs [here](/docs/og-image) |

### Rules

- Link first mention only
- Never "click here" or "this page"
- No "Related" or "See also" H2 sections (use frontmatter)
- No arrow links (`→`, `->`, `>>`)
- No link dumps at page end

## Quality Tests

1. **"So what?" test** — Reader shouldn't think "so what?" after any sentence
2. **Read aloud test** — If it sounds like a press release, rewrite
3. **Delete test** — If removing a sentence loses no meaning, remove it
4. **Information density** — Every sentence adds new info

## Endings

**Never write:**
- "Now you're ready to..."
- "Happy coding!"
- "And that's it!"
- "In conclusion..."

**Do:** Just stop. Or link to next logical action.

## Gap Markers

Mark unknowns rather than hallucinating:

```markdown
[STAT NEEDED: % of sites with X]
[VERIFY: does this work in Nuxt 4?]
[EXAMPLE NEEDED: real-world use case]
[LINK: internal link to related page]
```
