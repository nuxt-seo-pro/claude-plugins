---
name: Content Audit
description: Audit content quality — check writing style, broken links, SEO, accessibility, code examples, AI search optimization, or conversion. Specify audit type and file paths for focused results.
argument-hint: "[audit-type] [file-path]"
version: 0.14.1
---

# Content Audit

Review and improve existing content. Detects audit type from arguments or runs all passes for general audits.

**Arguments:** `$ARGUMENTS`

## Audit Types

| Type | Triggers | Reference |
|------|----------|-----------|
| `style` | "check voice", "tone", "terminology" | `${CLAUDE_SKILL_DIR}/../content-writing/references/foundations.md` |
| `accessibility` | "a11y", "alt text", "link text" | `${CLAUDE_SKILL_DIR}/../.shared/accessibility.md` |
| `linking` | "fix links", "broken links", "internal linking" | `${CLAUDE_SKILL_DIR}/references/linking.md` |
| `components` | "add callouts", "key takeaways" | `${CLAUDE_SKILL_DIR}/references/components.md` |
| `code` | "check code", "code quality" | `${CLAUDE_SKILL_DIR}/references/code-quality.md` |
| `seo` | "check SEO", "meta tags", "URL structure" | `${CLAUDE_SKILL_DIR}/references/seo.md` |
| `geo` | "AI optimization", "GEO", "AI citations" | `${CLAUDE_SKILL_DIR}/references/geo.md` |
| `conversion` | "test sales page", "objection handling" | `${CLAUDE_SKILL_DIR}/references/conversion.md` |

**Only load references for detected audit type.** For "audit this page" or unclear scope, load all and run all 9 passes.

## Context

Read if they exist:
- `.claude/context/site-config.md`
- `.claude/context/site-pages.md`
- `.claude/context/writing-style.md`

**MCP tools:** Use `analyze_page` (auto-detects `.vue`/`.md`), `check_meta_tags`, `validate_schema`, `debug_social_share` from nuxt-seo-pro when available.

## General Audit (All 9 Passes)

Run sequentially when no specific type requested:

| Pass | Check |
|------|-------|
| 1 | **Style** — banned words, hedging, voice consistency |
| 2 | **Accessibility** — link text, alt text, heading hierarchy |
| 3 | **Broken links** — validate internal/external links resolve |
| 4 | **Missing internal links** — concepts mentioned without links |
| 5 | **SEO** — meta tags, URL structure, OG tags |
| 6 | **Citations** — stats/claims without sources |
| 7 | **GEO** — question headings, quotable facts, schema.org |
| 8 | **Code quality** — incomplete examples, missing lang tags |
| 9 | **Components** — missing callouts, warnings, key takeaways |

**Fix priority:** style > broken links > accessibility > SEO > code > citations > GEO > components

## Output Format

Generate `.claude/context/content-audit.md`:

```yaml
file: /content/docs/auth.md
passes_completed:
  - style: 2 issues
  - accessibility: 0 issues
  - broken-links: 1 issue
  # ... all 9 passes listed

issues:
  - line: 45
    type: linking
    priority: high
    issue: Broken link to /docs/guide/sessions
    fix: Update to /docs/auth/sessions
```

**Required:** `passes_completed` lists ALL passes with counts. `issues` has file path, line, type, priority, specific fix.

## Applying Fixes

When user says to apply:
1. Load `foundations.md` + type-specific patterns
2. Apply fixes per priority order
3. Update `updatedAt` frontmatter

## GSC-Backed Audits

| Tool | Enhancement |
|------|-------------|
| `gsc_query({ type: 'page-detail', pageUrl })` | Actual keywords vs target keyword |
| `gsc_query({ type: 'analysis', preset: 'decay' })` | Pages losing rankings (audit first) |
| `gsc_query({ type: 'analysis', preset: 'striking-distance' })` | Pages close to page 1 |

## Multi-Page Audits

For many pages, track progress in `.claude/scratchpad.md`:

```md
## Goal
Audit all pages in /docs/guide/

## Pages
- [x] installation.md (3 issues fixed)
- [ ] configuration.md (in progress)
- [ ] deployment.md
```
