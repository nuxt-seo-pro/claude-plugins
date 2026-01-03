---
name: Content Audit
description: Use for "audit content", "fix internal links", "migrate related sections", "check broken links", "improve internal linking", "relatedPages frontmatter", or content structure improvements.
version: 0.1.0
---

# Content Audit

Systematic content improvement: internal linking, frontmatter migration, broken link detection, and cross-linking patterns.

## Artifacts

**Reads:**
- Sitemap or content directory structure
- Existing content files

**Generates:**
- `.claude/context/content-audit.md` — Issues found with file paths and line numbers
- `.claude/context/linking-opportunities.md` — Cross-linking recommendations

## When to Use

- After writing multiple articles (batch linking)
- When restructuring content organization
- Before launch to catch broken links
- When migrating from `## Related` sections to frontmatter

## Audit Categories

### 1. Internal Linking

Every page should link to 2-5 related pages.

**Check for:**
- Orphan pages (no inbound links)
- Missing first-mention links (features/concepts not linked)
- Broken anchors (`#section` that doesn't exist)
- Generic link text ("click here", "this page")

**Linking methods:**
1. **Inline links** — First mention of features/concepts
2. **`relatedPages` frontmatter** — Rendered at page end

### 2. Related Section Migration

Migrate `## Related` markdown sections to `relatedPages` frontmatter.

**Before:**
```markdown
## Related

- [Feature Guide](/learn/topic/feature)
- [API Reference](/docs/api/feature)
```

**After:**
```yaml
---
relatedPages:
  - path: /learn/topic/feature
    title: Feature Guide
  - path: /docs/api/feature
    title: API Reference
---
```

Then delete the `## Related` section.

### 3. Cross-Linking Patterns

**Educational → Reference:**
When articles mention a feature, link to its docs:
- Feature name → `/docs/[feature]/getting-started`
- API mention → `/docs/api/[endpoint]`

**Reference → Educational:**
When docs explain a concept, link to the learn article:
- Concept explanation → `/learn/[topic]/[concept]`

**Feature cross-references:**
Identify features commonly used together and ensure they link to each other.

### 4. Broken Link Detection

**Check for:**
- Links to non-existent paths
- Links to non-existent anchors
- Outdated paths (renamed/moved pages)
- External links that 404

## Workflow

### 1. Gather Content Inventory

```
1. Get sitemap or glob content/**/*.md
2. Build path → file map
3. Extract all internal links from each file
```

### 2. Validate Links

For each link:
- Does target path exist?
- If anchor, does that heading exist in target?
- Is link text descriptive (not "click here")?

### 3. Find Linking Opportunities

For each page:
- What concepts are mentioned but not linked?
- What related pages exist that aren't linked?
- Is there a `## Related` section to migrate?

### 4. Generate Report

```markdown
## Content Audit Report

**Date:** [YYYY-MM-DD]
**Files scanned:** [count]

### Broken Links

| File | Line | Link | Issue |
|------|------|------|-------|
| `path/to/file.md` | 93 | `/path#anchor` | Anchor doesn't exist |

### Missing Links

| File | Mention | Should Link To |
|------|---------|----------------|
| `path/to/file.md` | "Booking API" | `/docs/api/bookings` |

### Related Section Migrations

| File | Links to Migrate |
|------|------------------|
| `path/to/file.md` | 3 links |

### Orphan Pages

Pages with no inbound links:
- `/path/to/orphan.md`
```

## Output Format

```markdown
## Content Audit: [scope]

**Date:** [YYYY-MM-DD]

### High Priority Fixes

#### 1. Broken Link
**File:** `[path]`
**Line:** ~[number]
**Issue:** [description]
**Fix:** [specific change]

---

### Medium Priority - Cross-Linking

#### [File name]
**File:** `[path]`
**After line:** ~[number]
**Add:** `[markdown link]`

---

### Related Section Migrations

| File | Current Links | Action |
|------|---------------|--------|
| `[path]` | [count] links | Migrate to frontmatter, delete section |

---

### Summary

| Category | Count |
|----------|-------|
| Broken links | [X] |
| Missing links | [X] |
| Migrations needed | [X] |
| Orphan pages | [X] |
```

## Linking Rules

### When to Inline Link
- First mention of another feature/module
- Prerequisites ("Requires [Site Config](/docs/site-config)")
- Alternatives ("For simpler cases, use [X](/docs/x)")

### Link Text Quality

| Good | Bad |
|------|-----|
| `Configure [robots.txt](/docs/robots)` | `[Click here](/docs/robots) for robots` |
| `See [OG Image docs](/docs/og-image)` | `See the docs [here](/docs/og-image)` |
| `The [Sitemap module](/docs/sitemap)` | `[This](/docs/sitemap) handles sitemaps` |

### Avoid
- Linking same page twice in one section
- Linking every mention (first mention only)
- "click here", "this page", "here"
- Adding `## Related` H2 sections (use frontmatter)

## References

- `references/linking-patterns.md` — Cross-linking patterns by content type
