---
name: Content Writing
description: Use for "write docs", "write article", "landing page", "comparison post", "sales copy", "blog post", "tutorial", "API docs", or any content creation task.
version: 0.3.0
---

# Content Writing

Unified content creation skill. Detects content type and loads appropriate patterns.

## Artifacts

**Reads:**
- `.claude/context/site-config.md` — Site URL, name, industry
- `.claude/context/site-pages.md` — Available pages for internal linking
- `.claude/context/brand-voice.md` — Tone, terminology overrides
- `.claude/context/target-keywords.md` — Keywords for SEO
- `.claude/context/market-research.md` — Product context (for landing/sales)
- `.claude/context/competitors.md` — Competitor info (for comparisons)

**Requires:** Run `site-setup` first if site-config.md is missing.

## Content Types

| Type | Trigger Phrases | Reference |
|------|-----------------|-----------|
| `docs` | "write docs", "document", "API reference", "technical docs" | `references/types/docs.md` |
| `educational` | "write article", "blog post", "tutorial", "guide", "learn content" | `references/types/educational.md` |
| `landing` | "landing page", "homepage", "marketing copy", "hero section" | `references/types/landing.md` |
| `comparison` | "X vs Y", "compare", "alternatives to", "versus" | `references/types/comparison.md` |
| `sales` | "sales page", "pricing page", "conversion copy" | `references/types/sales.md` |

## Workflow

### 1. Detect Content Type

From user prompt, identify which type:

```
"write docs for useSeoMeta" → docs
"blog post about meta tags" → educational
"landing page for my tool" → landing
"nuxt vs next comparison" → comparison
"sales page for premium tier" → sales
```

If unclear, ask:

```
AskUserQuestion:
  question: "What type of content are you creating?"
  options:
    - label: "Documentation"
      description: "Technical reference, API docs, configuration guides"
    - label: "Educational"
      description: "Blog posts, tutorials, how-to guides"
    - label: "Landing Page"
      description: "Marketing pages, homepage, feature sections"
    - label: "Comparison"
      description: "X vs Y, alternatives, tool comparisons"
```

### 2. Load References

Always load:
- `references/foundations.md` — Core writing rules

Then load type-specific:
- `references/types/{type}.md`

### 3. Check Context

Read available artifacts:
```
.claude/context/site-config.md
.claude/context/site-pages.md
.claude/context/brand-voice.md (if exists)
```

If site-config.md missing, prompt user to run `site-setup` first.

### 4. Write Content

Follow patterns from loaded references:
- Structure from type reference
- Voice/style from foundations
- Internal linking from site-pages.md
- Examples using site-config values

### 5. Quality Check

Before delivering:
- [ ] No banned words (see foundations)
- [ ] Code within first 3 scrolls (if technical)
- [ ] Internal links on first mentions
- [ ] relatedPages frontmatter (2-3 pages)
- [ ] Type-specific checks from reference

## References

- `references/foundations.md` — Voice, banned words, code conventions
- `references/types/docs.md` — Technical documentation patterns
- `references/types/educational.md` — Blog/tutorial patterns + SEO
- `references/types/landing.md` — Marketing copy patterns
- `references/types/comparison.md` — X vs Y patterns
- `references/types/sales.md` — Sales page patterns
