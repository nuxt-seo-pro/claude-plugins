---
name: Content Audit
description: Use for "audit content", "review page", "fix links", "test sales page", "add callouts", "check SEO", "improve content", or reviewing/improving existing content.
version: 0.4.0
---

# Content Audit

Unified content review and improvement. Detects content type and applies appropriate audit patterns.

## Artifacts

**Reads:**
- `.claude/context/site-config.md` — Site URL, name
- `.claude/context/site-pages.md` — Available pages for linking opportunities
- `.claude/context/writing-style.md` — Per-category voice, structure, terminology
- `.claude/context/market-research.md` — Product context (for sales audits)
- Content files to audit

**Generates:**
- `.claude/context/content-audit.md` — Issues found with file paths and line numbers
- `.claude/context/linking-opportunities.md` — Cross-linking recommendations
- `.claude/context/objection-analysis.md` — Objections by persona (sales audits)

**Requires:** Run `site-setup` first if site-pages.md is missing.

## Audit Types

| Type | Trigger Phrases | Reference |
|------|-----------------|-----------|
| `style` | "check voice", "tone consistency", "terminology", "writing style" | `../content-writing/references/foundations.md` + `writing-style.md` |
| `linking` | "fix links", "internal linking", "broken links", "orphan pages" | `references/linking.md` |
| `components` | "add callouts", "key takeaways", "improve readability", "add warnings" | `references/components.md` |
| `seo` | "check SEO", "keyword optimization", "meta tags", "search ranking", "URL structure" | `references/seo.md` |
| `geo` | "AI optimization", "GEO", "AI citations", "ChatGPT visibility", "Perplexity" | `references/geo.md` |
| `conversion` | "test sales page", "why won't users buy", "objection handling", "persona testing" | `references/conversion.md` |

## Workflow

### 0. Check Prerequisites

Before running any audit, check for required context:

```
Glob: .claude/context/site-config.md
Glob: .claude/context/site-pages.md
```

**If missing:** Stop and prompt user:
```
Site context not configured. Run site-setup first to:
- Set site URL and industry
- Fetch available pages for linking
- Analyze content style patterns

This enables accurate audits (especially linking and style checks).
```

Do not proceed with audit until site-setup completes.

### 1. Detect Audit Type

From user prompt:

```
"fix internal links" → linking
"add callouts to docs" → components
"check SEO on this article" → seo
"optimize for AI search" → geo
"test my sales page" → conversion
```

If unclear or user says "audit this page", run all applicable audits.

### 2. Detect Content Type

From file being audited:

| Signal | Content Type |
|--------|--------------|
| Path contains `/docs/` | docs |
| Path contains `/learn/` or `/blog/` | educational |
| Frontmatter has `pricing` | sales |
| Has hero section, CTAs | landing |
| Has comparison tables, "vs" | comparison |

Load type-specific patterns from `../content-writing/references/types/`.

### 3. Run Audits

Load appropriate references and analyze content:

**Style audit:**

1. Load `../content-writing/references/foundations.md` and check all rules (slop, em dashes, inline code lang tags, etc)
2. Match file path to category (e.g., `/docs/**` → `categories.docs`), then check against `writing-style.md`:
- Voice consistency (formality, perspective, tone)
- Avoided terminology used
- Preferred terminology missing
- Structure matches category pattern
- Code style matches (language, imports, length)

**Linking audit:**
- Broken links
- Missing first-mention links
- Orphan pages
- Generic link text

**Component audit:**
- Missing key takeaways
- Buried warnings
- Quiz opportunities
- Checklist candidates

**SEO audit:**
- Keyword placement
- Meta description
- Heading structure
- URL structure
- Featured snippet opportunities

**GEO audit:**
- Answer-first opening
- Question-format headings
- Schema.org opportunities
- Quotable statistics with sources

**Conversion audit:**
- Persona objections
- Trust gaps
- Pricing clarity
- CTA effectiveness

### 4. Generate Report

Output prioritized fixes with:
- File path and line number
- Issue description
- Specific fix recommendation
- Priority (high/medium/low)

## Output Format

```markdown
## Content Audit: [file or scope]

**Date:** [YYYY-MM-DD]
**Type:** [audit types run]

### High Priority

#### 1. [Issue Title]
**File:** `[path]`
**Line:** ~[number]
**Issue:** [description]
**Fix:** [specific change]

---

### Medium Priority

[...]

---

### Summary

| Category | Count |
|----------|-------|
| Style issues | [X] |
| Broken links | [X] |
| Missing links | [X] |
| Component opportunities | [X] |
| SEO issues | [X] |
| GEO issues | [X] |
| Conversion blockers | [X] |
```

## Applying Fixes

When user asks to fix/apply audit recommendations:

1. Load `../content-writing/references/foundations.md` - all edits must pass these rules
2. Load type-specific patterns from `../content-writing/references/types/[type].md`
3. Apply fixes following those patterns

## Quick Audits

### Style Check Only

```
"check voice consistency on /docs/getting-started"
```

Runs style audit against foundations.md + writing-style.md category patterns.

### Link Check Only

```
"check links on /docs/getting-started"
```

Runs only linking audit, outputs broken/missing links.

### Component Suggestions Only

```
"where should I add callouts in this doc"
```

Runs only component audit, outputs insertion points.

### Full Page Audit

```
"audit this page"
```

Runs all audits appropriate for content type.

## References

- `../content-writing/references/foundations.md` — Base writing rules (slop, em dashes, structure)
- `../content-writing/references/types/*.md` — Type-specific patterns
- `references/linking.md` — Internal linking rules and patterns
- `references/components.md` — Callouts, quizzes, checklists
- `references/seo.md` — SEO validation patterns (URL structure, meta, headings)
- `references/geo.md` — AI citation optimization (ChatGPT, Perplexity, AI Overviews)
- `references/conversion.md` — Persona testing, objection handling
