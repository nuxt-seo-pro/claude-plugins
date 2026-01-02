---
name: Educational Content Writing
description: This skill should be used when the user asks to "write article", "create learn content", "blog post about", "educational content", "write tutorial", or needs to write educational/blog-style content. Provides SEO-optimized structure for learn pages and articles.
version: 0.1.0
---

# Educational Content Writing

Educational content for `/learn/` pages and blog posts. Reference `writing-foundations` for voice, banned words, and quality tests.

## Audience

Three segments, all developers:

| Segment | % | Wants |
|---------|---|-------|
| Beginners | 40% | Guidance, guardrails, fear of missing something |
| Intermediate | 35% | "Just works", hates configuration |
| Experienced | 25% | Depth, customization, data ownership |

Universal motivator: **saving time** on things they know they should do but can't prioritize.

## SEO Structure

Target long-tail keywords—specific phrases with clear intent. "how to add meta tags nuxt 4" beats "meta tags".

### Heading Optimization

| Element | Priority | How to use |
|---------|----------|------------|
| H1 / Title | Highest | Primary term naturally |
| H2 headings | High | Variations/related terms |
| First paragraph | High | Primary term in opening |
| Meta description | Medium | Include term, focus on clicks |
| H3+ headings | Lower | Long-tail variations, questions |

### Example Structure

Search terms: `how to add meta tags nuxt 4`, `useSeoMeta example`, `nuxt dynamic meta tags per page`

```markdown
# How to Add Meta Tags in Nuxt               ← primary term

Adding meta tags in Nuxt 4 takes one composable...

## useSeoMeta for static meta tags           ← specific method

## Dynamic meta tags per page                ← long-tail variation

### Meta tags not updating on navigation?    ← problem users search
```

## Natural Placement

- Primary term: 1-2x in first 100 words, then only where natural
- Headings should read as navigation, not keyword lists
- If you'd cringe reading it aloud, rewrite

**Don't:**
- Repeat exact phrase in every heading
- Force terms where they don't fit
- Add "Nuxt" to every heading when context is obvious

## LLM Search Optimization

LLMs often append year and use question-based queries. Light touches help:

- Mention year once naturally (intro or where version matters)
- Version numbers where relevant: "Nuxt 4", "Vue 3"
- Some H2s as questions users/LLMs ask
- "Recommended" when genuinely recommending

Don't plaster "(2025)" everywhere or force question headings.

## Problem-First Openings

Lead with problems/outcomes, not features.

**Bad:**
> In today's digital landscape, SEO is important. This guide explores meta tags.

**Good:**
> Most Nuxt sites ship with broken meta tags. Here's how to fix that in 2 minutes.

### Opening Patterns

- [Problem] + [quick solution]
- [Surprising fact] + [implication]
- [Common mistake] + [better approach]

## Article Structure

```markdown
---
title: [Primary search term as natural title]
description: [Include primary term, focus on click appeal]
relatedPages:
  - path: /docs/module/feature
    title: Feature Docs
  - path: /learn/related/topic
    title: Related Article
---

[Opening: problem + what this covers]

## [H2: Variation/related term]

[Content with code examples]

## [H2: Another angle]

[Content]

### [H3: Question users ask]

[Answer]
```

## Time-Saving Framing

Position content around saving time:

- "Catches X before it costs you traffic"
- "Zero config"
- "One install"
- "2 minutes to set up"

## Word Substitutions for Learn Content

| Use | Avoid |
|-----|-------|
| guardrails, safety net | features, tools |
| catches [X] before... | detects [X] |
| zero config | easy setup |
| one install | full suite |

## Personality (Use Sparingly)

- "I'd recommend..."
- "One of my favourite ways..."
- "Template descriptions are lazy"
- Reference @harlan_zw, Unlighthouse, RequestIndexing where relevant

## MCP Tools

Use Nuxt SEO Pro MCP for research and validation:

| Tool | Use For |
|------|---------|
| `research_keywords` | Find target keywords before writing |
| `analyze_content_page` | Validate SEO after writing |

## Required Frontmatter

```yaml
---
title: How to [Primary Search Term]
description: [Click-worthy description with primary term]
relatedPages:
  - path: /docs/relevant-module
    title: Module Docs
  - path: /learn/related-topic
    title: Related Article
---
```
