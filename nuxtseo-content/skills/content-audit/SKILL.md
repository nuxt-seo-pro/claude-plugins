---
name: Content Audit
description: Use for "audit content", "review page", "fix links", "test sales page", "add callouts", "check SEO", "improve content", or reviewing/improving existing content.
version: 0.5.0
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
| `linking` | "fix links", "internal linking", "broken links", "orphan pages", "frontmatter links" | `references/linking.md` |
| `components` | "add callouts", "key takeaways", "improve readability", "add warnings" | `references/components.md` |
| `code` | "check code", "code quality", "code examples", "incomplete code", "code grouping" | `references/code-quality.md` |
| `seo` | "check SEO", "keyword optimization", "meta tags", "search ranking", "URL structure" | `references/seo.md` |
| `geo` | "AI optimization", "GEO", "AI citations", "ChatGPT visibility", "Perplexity" | `references/geo.md` |
| `conversion` | "test sales page", "why won't users buy", "objection handling", "persona testing" | `references/conversion.md` |

## Workflow

### 1. Check Prerequisites

```
Glob: .claude/context/site-config.md
Glob: .claude/context/site-pages.md
```

**If missing:** Prompt user to run site-setup first.

### 2. Detect Audit Type & Load References

| Audit Type | Load Reference |
|------------|----------------|
| `style` | `../content-writing/references/foundations.md` + `writing-style.md` |
| `linking` | `references/linking.md` |
| `code` | `references/code-quality.md` |
| `components` | `references/components.md` |
| `seo` | `references/seo.md` |
| `geo` | `references/geo.md` |
| `conversion` | `references/conversion.md` |

**Only load references for the detected audit type.** For "audit this page" or unclear scope, load all.

### 3. Detect Content Type

| Signal | Type | Load |
|--------|------|------|
| `/docs/` path | docs | `../content-writing/references/types/docs.md` |
| `/learn/` or `/blog/` | educational | `../content-writing/references/types/educational.md` |
| Has pricing/CTAs | sales/landing | `../content-writing/references/types/landing.md` |

### 4. Run Audits

Apply rules from loaded references only. Generate report with:
- File path + line number
- Issue description
- Specific fix
- Priority (high/medium/low)

## Applying Fixes

When user asks to apply fixes:
1. Load `../content-writing/references/foundations.md`
2. Load type-specific patterns from `../content-writing/references/types/[type].md`
3. Apply fixes following those patterns
