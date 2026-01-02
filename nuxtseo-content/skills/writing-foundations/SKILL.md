---
name: Writing Foundations
description: This skill should be used when the user asks to "improve writing", "fix AI slop", "review content quality", "check writing style", "edit for voice", or needs general writing guidance without a specific content type.
version: 0.2.0
---

# Writing Foundations

Core writing principles for developer content. Use this skill for general writing guidance, or load alongside `docs-writing` or `learn-writing` for type-specific patterns.

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

### State What NOT to Do

Real experts know pitfalls. Include:
- Common mistakes
- When something is overkill
- Anti-patterns

## Banned Content

See `references/banned-words.md` for full list.

**Banned words:** dive into, crucial, essential, vital, robust, seamless, leverage, utilize, ensure, comprehensive, harness, empower, elevate, unlock, game-changer, delve, realm, landscape, plethora, myriad

**Banned phrases:**
- "it's important to note"
- "in today's [X]"
- "let's explore"
- "this is where X comes in"
- "at its core"
- "when it comes to"
- "by the end of this guide"

**Banned patterns:**
- Rhetorical questions ("Ever wondered how...?")
- Three-adjective chains ("powerful, flexible, and robust")
- Filler intros before the point
- Superlatives without proof

### Quick Fixes

| Slop | Fix |
|------|-----|
| It's important to note that... | [just state it] |
| This allows you to... | You can... |
| In order to... | To... |
| provides a way to | lets you |
| is designed to | does |
| is intended to return | returns |

## Code Conventions

### Languages

- **TypeScript** for all JS examples (not JavaScript)
- **Vue SFC** for component examples
- **Bash** for terminal commands

### Code Blocks

````markdown
```ts
// TypeScript code
useSeoMeta({ title: 'Page' })
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

### Inline Code

Use language tags for inline code:
- Functions: `useSeoMeta()`{lang="ts"}
- Components: `<OgImage>`{lang="vue"}
- Files: `nuxt.config.ts`{lang="text"}
- Config keys: `sitemap`{lang="yaml"}

### Code Groups

For multiple approaches:
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
// Avoid this pattern
useHead({ meta: [{ name: 'description', content: 'x' }] })
```

```ts [✅ Good]
// Use this instead
useSeoMeta({ description: 'x' })
```
````

## Internal Linking

Every page should link to 2-5 related pages.

### Methods

1. **Inline links** — First mention of features/concepts
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
- No "Related" or "See also" H2 sections

## Quality Tests

See `references/quality-tests.md` for details.

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

## Pre-Publish Checklist

**Structure:**
- [ ] Opener makes use case obvious
- [ ] Code within first 3 scrolls
- [ ] Parameters in tables, not prose

**Links:**
- [ ] `relatedPages` frontmatter with 2-3 pages
- [ ] Inline links on first mention
- [ ] No "click here" link text

**Content:**
- [ ] States what NOT to do
- [ ] Includes verification method
- [ ] No banned words/phrases
- [ ] Passes quality tests

## References

- `references/banned-words.md` — Complete AI slop list
- `references/quality-tests.md` — Detailed testing guidance
