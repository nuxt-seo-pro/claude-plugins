---
name: Content Audit
description: This skill should be used when the user asks to "audit content", "review page", "fix links", "check code examples", "test sales page", "add callouts", "check SEO", "check meta tags", "AI optimization", "GEO audit", "conversion testing", "improve content", or review/improve existing content quality. For best results, specify which audit type (style, linking, seo, geo, code, components, conversion) and provide file paths.
version: 0.11.0
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
Read: .claude/context/site-config.md
Read: .claude/context/site-pages.md
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

**For general audits ("audit this page", "improve content", "review"):** Run ALL audit types as separate passes. Do NOT skip any:

| Pass | Check | Reference |
|------|-------|-----------|
| 1 | **Style** - banned words, hedging, voice consistency | `foundations.md` |
| 2 | **Broken links** - validate all internal/external links resolve | `references/linking.md` |
| 3 | **Missing internal links** - concepts mentioned without links to their docs | `references/linking.md` |
| 4 | **SEO issues** - meta tags, URL structure, OG tags | `references/seo.md` |
| 5 | **Missing citations** - stats/claims without sources, use WebSearch to find | `references/seo.md` |
| 6 | **GEO optimization** - question headings, quotable facts, schema.org | `references/geo.md` |
| 7 | **Code quality** - incomplete examples, missing error handling | `references/code-quality.md` |
| 8 | **Components** - missing callouts, warnings, key takeaways | `references/components.md` |

**For specific audits:** Only run the requested audit type.

Generate `.claude/context/content-audit.md`:

```yaml
file: /content/docs/auth.md
passes_completed:
  - style: 2 issues
  - broken-links: 1 issue
  - internal-links: 0 issues
  - seo: 1 issue
  - citations: 0 issues (no uncited claims)
  - geo: 1 issue
  - code: 0 issues (no code blocks)
  - components: 0 issues

issues:
  - line: 45
    type: linking
    priority: high
    issue: Broken link to /docs/guide/sessions
    fix: Update to /docs/auth/sessions

  - line: 112
    type: seo
    priority: medium
    issue: Stat "80% of users" has no citation
    fix: Add source - WebSearch found "Source Name, 2024"
```

**Required fields:**
- `passes_completed` - list ALL 7+ passes with issue count (proves each was run)
- `issues` - file path, line number, type, priority, specific fix

## Applying Fixes

When user asks to apply fixes:
1. Load `../content-writing/references/foundations.md`
2. Load type-specific patterns from `../content-writing/references/types/[type].md`
3. Apply fixes following those patterns
4. Update `updatedAt` frontmatter to today's date (run `date +%Y-%m-%d`)

## Long-Running Audits (Multiple Pages)

For auditing many pages, use scratchpad tracking:

### 1. Create Scratchpad

Write `.claude/scratchpad.md`:

```md
## Goal
Audit all pages in /docs/guide/

## Pages
- [ ] /docs/guide/installation.md
- [ ] /docs/guide/configuration.md
- [ ] /docs/guide/deployment.md

## Current
Working on: installation.md

## Status
In progress
```

### 2. Update As You Work

Mark pages complete, track blockers:

```md
## Pages
- [x] /docs/guide/installation.md (3 issues fixed)
- [ ] /docs/guide/configuration.md (in progress)
- [ ] /docs/guide/deployment.md

## Blocked
configuration.md: Need user input on deprecated API section
```

### 3. Mark Done

When all pages complete:

```md
## Status
DONE - Audited 3 pages, fixed 8 issues total
```

Stop hooks check for `DONE` to know when to stop iterating.

## Success Criteria

Audit passes when ALL are true:

| Check | How to Verify |
|-------|---------------|
| Zero banned words | Grep content against foundations.md banned list |
| All internal links resolve | Each link path exists in site-pages.md |
| All external links live | WebFetch returns 200 (sample 3-5 if many) |
| Code blocks have language | Every ``` has lang specified |
| H2s under 60 chars | Check heading lengths |
| No orphan pages | Page has 2+ incoming links from site-pages.md |
| relatedPages populated | Frontmatter has 2-3 related pages |

For specific audit types, only relevant criteria apply.

## Next Steps (Cross-Skill Handoff)

After audit, suggest relevant follow-up:

| Situation | Suggest |
|-----------|---------|
| Many issues found | "Apply fixes now, or save audit to `.claude/context/content-audit.md`?" |
| SEO issues found | "Run `research` skill to find better target keywords?" |
| Missing content gaps | "Use `content-writing` skill to create missing pages?" |
| Conversion issues | "Run `research` with market type to validate positioning?" |
| Style inconsistent | "Re-run `site-setup` to refresh writing-style.md?" |
