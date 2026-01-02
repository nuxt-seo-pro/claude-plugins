---
name: Educational Content Writing
description: This skill should be used when the user asks to "write article", "create learn content", "blog post about", "educational content", "write tutorial", "explain how to", "guide for", or needs to write educational/blog-style content with SEO optimization.
version: 0.2.0
---

# Educational Content Writing

Educational articles and tutorials optimized for search. Different from docs—more narrative, problem-focused, teaches concepts.

## Core Principles

- Lead with problems, not features
- Target long-tail keywords with clear intent
- Save readers time—that's the universal motivator
- Include code within first 3 scrolls
- Say what NOT to do

## Audience

| Segment | % | Wants |
|---------|---|-------|
| Beginners | 40% | Guidance, guardrails, fear of missing something |
| Intermediate | 35% | "Just works", hates configuration |
| Experienced | 25% | Depth, customization, full control |

**Universal motivator:** Saving time on things they know they should do but can't prioritize.

## Article Structure

```markdown
---
title: How to [Primary Search Term]
description: [Click-worthy description with primary term]
relatedPages:
  - path: /docs/relevant-module
    title: Module Docs
  - path: /learn/related-topic
    title: Related Article
---

[Opening: problem statement + what this solves]

## [H2: First major topic—uses keyword variation]

[Content with code examples]

## [H2: Second topic—another angle]

[Content]

### [H3: Question users ask]

[Direct answer]

## [H2: Common Mistakes] (optional)

[What NOT to do]
```

## SEO Structure

Target long-tail keywords. "how to add meta tags nuxt 4" beats "meta tags".

### Heading Optimization

| Element | Priority | Approach |
|---------|----------|----------|
| H1 / Title | Highest | Primary keyword naturally |
| H2 headings | High | Variations, related terms |
| First paragraph | High | Primary term in first 100 words |
| Meta description | Medium | Include term, focus on clicks |
| H3+ headings | Lower | Questions users ask |

### Example

Search terms: `nuxt meta tags`, `useSeoMeta example`, `dynamic meta tags nuxt`

```markdown
# How to Add Meta Tags in Nuxt

Most Nuxt sites ship with broken meta tags. Here's how to fix that in 2 minutes using `useSeoMeta()`.

## useSeoMeta for Static Pages

[content]

## Dynamic Meta Tags Per Route

[content]

### Why aren't my meta tags updating on navigation?

[answer to common problem]
```

### Natural Placement

- Primary term: 1-2x in first 100 words, then only where natural
- Headings read as navigation, not keyword lists
- If you'd cringe reading it aloud, rewrite

**Don't:**
- Repeat exact phrase in every heading
- Force terms where they don't fit
- Add framework name to every heading when context is obvious

## Opening Patterns

Lead with problems/outcomes, not features.

### Problem + Solution

**Bad:**
> In today's digital landscape, SEO is important. This guide explores meta tags.

**Good:**
> Most Nuxt sites ship with broken meta tags. Here's how to fix that in 2 minutes.

### Surprising Fact + Implication

> Google rewrites 70% of meta descriptions. Here's how to write ones they'll keep.

### Common Mistake + Better Way

> Template meta descriptions are lazy—and Google knows it. Dynamic descriptions take 30 seconds to set up.

## LLM Search Optimization

LLMs append year and use question-based queries. Light touches help:

- Mention year once naturally (intro or where version matters)
- Version numbers: "Nuxt 4", "Vue 3"
- Some H2s as questions users ask
- "Recommended" when genuinely recommending

Don't plaster "(2025)" everywhere or force question headings.

## Time-Saving Framing

Position around saving time:

| Use | Avoid |
|-----|-------|
| "2 minutes to set up" | "easy to configure" |
| "Zero config required" | "simple setup process" |
| "Catches X before it costs you traffic" | "helps detect issues" |
| "One line replaces 10" | "convenient wrapper" |

## Code Examples

### TypeScript Only

```ts
useSeoMeta({
  title: 'Page Title',
  description: 'Description here'
})
```

### Show the Problem First

````markdown
Most sites do this:

```ts [❌ Common Pattern]
useHead({
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    // 10 more lines...
  ]
})
```

One line does the same thing:

```ts [✅ Better]
useSeoMeta({ title, description })
```
````

### Real Examples

Use realistic content, not lorem ipsum:
```ts
useSeoMeta({
  title: 'How to Add Meta Tags in Nuxt',
  description: 'Set meta tags with useSeoMeta(). Full TypeScript support, zero config.'
})
```

## Voice

- Developer-to-developer, casual
- Personal opinions welcome: "I'd recommend...", "This is lazy"
- No hedging: "Do X" not "You may want to consider X"
- Be specific: numbers over vague claims

## Banned Content

**Words:** dive into, crucial, essential, robust, seamless, leverage, utilize, comprehensive, harness, empower, elevate, unlock, game-changer

**Phrases:** "it's important to note", "in today's [X]", "let's explore", "this is where X comes in", "by the end of this guide"

**Patterns:**
- Rhetorical questions ("Ever wondered...?")
- Three-adjective chains ("powerful, flexible, and robust")
- Filler intros before the point
- "In conclusion" endings

## Endings

**Never:**
- "Now you're ready to..."
- "Happy coding!"
- "And that's it!"
- "In conclusion..."

**Do:** Just stop. Or link to the logical next step.

## Internal Linking

- 2-3 related pages in frontmatter
- Inline link first mention of features/modules
- Link to relevant docs for deep dives

```yaml
relatedPages:
  - path: /docs/seo-utils/api/use-seo-meta
    title: useSeoMeta API
  - path: /learn/mastering-meta/descriptions
    title: Writing Meta Descriptions
```

## MCP Tools

Use Nuxt SEO Pro MCP for research and validation:

| Tool | When |
|------|------|
| `mcp__nuxt-seo-pro__research_keywords` | Before writing—find target keywords |
| `mcp__nuxt-seo-pro__analyze_content_page` | After writing—validate SEO |

## Quality Checks

Before publishing:

- [ ] Problem-first opening (not feature-first)
- [ ] Code within first 3 scrolls
- [ ] Primary keyword in H1 and first paragraph
- [ ] H2s use variations naturally
- [ ] States what NOT to do
- [ ] No banned words/phrases
- [ ] relatedPages frontmatter with 2-3 links
- [ ] Verification method included

## Example: Complete Article

See `examples/learn-article.md` for a complete example.
