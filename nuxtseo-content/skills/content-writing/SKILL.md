---
name: Content Writing
description: Write docs, blog posts, tutorials, landing pages, comparison posts, sales pages, or any website content. Specify content type, target keyword, and audience level for best results.
argument-hint: "[type] [topic/keyword]"
version: 0.14.3
---

# Content Writing

Write SEO-optimized content. Detects content type from arguments and loads appropriate patterns.

**Arguments:** `$ARGUMENTS`

## 1. Detect Content Type

| Type | Triggers | Reference |
|------|----------|-----------|
| `docs` | "docs", "API reference", "composable", "config" | `${CLAUDE_SKILL_DIR}/references/types/docs.md` |
| `educational` | "blog", "tutorial", "guide", "how to", "article" | `${CLAUDE_SKILL_DIR}/references/types/educational.md` |
| `landing` | "landing page", "homepage", "marketing" | `${CLAUDE_SKILL_DIR}/references/types/landing.md` |
| `comparison` | "vs", "alternatives to", "compared to" | `${CLAUDE_SKILL_DIR}/references/types/comparison.md` |
| `sales` | "sales page", "pricing page" | `${CLAUDE_SKILL_DIR}/references/types/sales.md` |

**Always read:** `${CLAUDE_SKILL_DIR}/references/foundations.md`
**For markdown content:** `${CLAUDE_SKILL_DIR}/../.shared/mdc-guidelines.md`
**For landing/sales/comparison:** `${CLAUDE_SKILL_DIR}/../.shared/persuasion.md`

If type unclear from arguments, ask which type.

## 2. Load Context

Read these if they exist (skip silently if missing):
- `.claude/context/site-config.md` — audience, personality, banned phrases
- `.claude/context/site-pages.md` — internal linking targets
- `.claude/context/writing-style.md` — per-category voice patterns

If `site-config.md` missing and user hasn't set up yet, suggest running `site-setup` first. Don't block — write with sensible defaults.

## 3. Match Style

| Content Type | Style Category |
|--------------|----------------|
| docs | `categories.docs` |
| educational | `categories.learn` |
| landing/sales | `categories.landing` |
| comparison | `categories.learn` (analytical voice) |

Apply voice, structure, terminology from matched category.

## 4. Write

**Target length:**

| Type | Words |
|------|-------|
| docs | 300-800 |
| educational | 1000-2000 |
| landing | 500-1000 |
| comparison | 1500-2500 |
| sales | 800-1500 |

**From site-config:** Adjust jargon for audience level, apply personality, avoid banned_phrases.

## 5. Validate Before Delivery

Check all of these — fix any failures before delivering:

1. Zero banned words/phrases from `foundations.md`
2. Internal links exist in `site-pages.md` (mark gaps with `[LINK: topic]`)
3. Code blocks have language tags
4. H2s under 60 chars
5. `relatedPages` frontmatter has 2-3 valid paths
6. Accessible link text (no "click here", "learn more" standalone)
7. `createdAt` and `updatedAt` set (run `date +%Y-%m-%d`)

## Error Recovery

| Failure | Action |
|---------|--------|
| site-config.md missing | Write with defaults, note it |
| site-pages.md missing | Use `[LINK: topic]` placeholders |
| writing-style.md missing | Use type-specific reference defaults |
| Stats unverifiable | Mark `[STAT NEEDED: topic]` |
