---
name: Content Audit
description: Use for "audit content", "review page", "fix links", "test sales page", "add callouts", "check SEO", "improve content", or reviewing/improving existing content.
version: 0.3.0
---

# Content Audit

Unified content review and improvement. Detects content type and applies appropriate audit patterns.

## Artifacts

**Reads:**
- `.claude/context/site-config.md` — Site URL, name
- `.claude/context/site-pages.md` — Available pages for linking opportunities
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
| `linking` | "fix links", "internal linking", "broken links", "orphan pages" | `references/linking.md` |
| `components` | "add callouts", "key takeaways", "improve readability", "add warnings" | `references/components.md` |
| `seo` | "check SEO", "keyword optimization", "meta tags", "search ranking", "URL structure" | `references/seo.md` |
| `geo` | "AI optimization", "GEO", "AI citations", "ChatGPT visibility", "Perplexity" | `references/geo.md` |
| `conversion` | "test sales page", "why won't users buy", "objection handling", "persona testing" | `references/conversion.md` |

## Workflow

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
| Broken links | [X] |
| Missing links | [X] |
| Component opportunities | [X] |
| SEO issues | [X] |
| GEO issues | [X] |
| Conversion blockers | [X] |
```

## Quick Audits

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

- `references/linking.md` — Internal linking rules and patterns
- `references/components.md` — Callouts, quizzes, checklists
- `references/seo.md` — SEO validation patterns (URL structure, meta, headings)
- `references/geo.md` — AI citation optimization (ChatGPT, Perplexity, AI Overviews)
- `references/conversion.md` — Persona testing, objection handling
