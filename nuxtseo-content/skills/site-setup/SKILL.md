---
name: site-setup
description: Initialize site context for content writing. Creates site-config.md, site-pages.md, and writing-style.md. Run once per project before using other skills.
argument-hint: "[site-url]"
version: 0.14.3
---

# Site Setup

Initialize project context. Run once, then other skills use the generated artifacts.

**Arguments:** `$ARGUMENTS` (optional site URL override)

## Artifacts Generated

All written to `.claude/context/`:
- `site-config.md` — URL, name, industry, audience, personality, CTA, competitors
- `site-pages.md` — available pages from llms.txt/sitemap/project scan
- `writing-style.md` — per-category voice, structure, terminology

See `${CLAUDE_SKILL_DIR}/references/artifact-templates.md` for output formats.

## Workflow

### 1. Extract from nuxt.config.ts

Look for `site.url`, `site.name`, `site.description`.

### 2. Check for Existing Style Guide

Glob: `STYLE.md`, `WRITING.md`, `.github/STYLE.md`, `docs/CONTRIBUTING.md`
If found, ask: "Use this as style reference?"

### 3. Gather Info

**Auto-detect (don't ask if found):** Site URL, Site Name

**Always ask:**

| Field | Options |
|-------|---------|
| Industry | SaaS/Dev Tools, E-commerce, Agency, Content/Media, Education, Other |
| Target Audience | Developers, Technical Users, Business Users, General Consumers |
| Audience Level | Beginner, Intermediate, Advanced, Mixed |

**Conditional:**

| Condition | Field |
|-----------|-------|
| New site / no content | Brand Personality (Professional/Friendly/Authoritative/Playful) |
| Has landing pages | Primary CTA |
| Has docs + learn | Content Goal |

**Optional (offer to skip):** Competitors, differentiator, banned phrases.

### 4. Fetch Pages

Try in order (stop at first success):
1. `GET {url}/llms-full.txt`
2. `GET {url}/llms.txt`
3. `GET {url}/sitemap.xml` — parse `<loc>` elements
4. Scan project: `pages/**/*.vue` + `content/**/*.md`

Convert: `content/1.learn/2.seo/meta-tags.md` to `/learn/seo/meta-tags`

### 5. Categorize

| Pattern | Category |
|---------|----------|
| `/`, `/features`, `/pricing` | landing |
| `/docs/**`, `/api/**` | docs |
| `/learn/**`, `/tutorials/**` | learn |
| `/blog/**`, `/articles/**` | blog |

### 6. Analyze Style (Optional)

Ask: "Analyze existing content for style guidelines?"

If yes, sample 3-5 pages per category with 3+ pages. Extract patterns per `${CLAUDE_SKILL_DIR}/references/style-analysis.md`.

### 7. Detect Components

Glob `components/content/*.vue`. Record standard (tip, note, warning, danger, code-group) and custom components. Templates at `${CLAUDE_SKILL_DIR}/../.shared/component-templates/` if custom ones are missing.

### 8. Write Artifacts

Generate all three files to `.claude/context/`.

## Partial Refresh

- "Just refresh pages" — steps 4-5 only
- "Just refresh style" — step 6 only
- "Add category" — ask, analyze, append to writing-style.md
