---
name: Site Setup
description: Use for "setup site", "configure site", "initialize project", or when site-config.md is missing. Required before using writing skills.
version: 0.6.0
---

# Site Setup

Initialize site context for all writing skills. Run once per project.

## Artifacts

**Reads:**
- `nuxt.config.ts` - Extract site URL, name from `site:` key
- `components/content/` - Check available MDC components
- Sample pages - For style analysis

**Generates:**
- `.claude/context/site-config.md` - Site URL, name, industry
- `.claude/context/site-pages.md` - Available pages from llms.txt/sitemap
- `.claude/context/writing-style.md` - Per-category voice and structure patterns

See `references/artifact-templates.md` for output formats.

## Workflow

### 1. Extract from nuxt.config.ts

```ts
export default defineNuxtConfig({
  site: {
    url: 'https://example.com',
    name: 'Site Name',
  }
})
```

Extract `site.url`, `site.name`, `site.description` if present.

### 2. Check for Existing Style Guide

```
Glob: STYLE.md, WRITING.md, .github/STYLE.md, docs/CONTRIBUTING.md
```

If found, ask: "Found [file]. Use this as style reference?"

### 3. Ask User for Missing Info

**Required (if not in nuxt.config.ts):**

| Field | When to Ask |
|-------|-------------|
| Site URL | Not in `site.url` |
| Site Name | Not in `site.name` |

**Always ask:**

| Field | Options |
|-------|---------|
| Industry | SaaS/Dev Tools, E-commerce, Agency, Content/Media, Education, Other |
| Target Audience | Developers, Technical Users, Business Users, General Consumers |
| Audience Level | Beginner, Intermediate, Advanced, Mixed |

**Conditional:**

| Condition | Field | Options |
|-----------|-------|---------|
| New site / no content | Brand Personality | Professional, Friendly, Authoritative, Playful |
| Has landing pages | Primary CTA | Sign Up, Start Free Trial, Book Demo, Learn More |
| Has docs + learn | Content Goal | Educate users, Drive conversions, Build authority |

**Optional (offer to skip):**
- Competitors (comma-separated domains)
- Differentiator (what makes this unique)
- Banned phrases (beyond standard banned words)

### 4. Fetch Available Pages

**Primary:** `GET {site.url}/llms.txt` - parse as markdown

**Fallback 1:** `GET {site.url}/sitemap.xml` - parse `<loc>` elements

**Fallback 2:** Scan project if not deployed:
```
Glob: pages/**/*.vue → extract routes
Glob: content/**/*.md → extract content paths
```

Convert paths: `content/1.learn/2.seo/meta-tags.md` → `/learn/seo/meta-tags`

### 5. Categorize Pages

| Pattern | Category |
|---------|----------|
| `/`, `/features`, `/pricing` | landing |
| `/docs/**`, `/api/**` | docs |
| `/learn/**`, `/tutorials/**` | learn |
| `/blog/**`, `/articles/**` | blog |
| `/app/**`, `/dashboard/**` | skip (UI copy) |

### 6. Analyze Content Style (Optional)

Ask: "Analyze existing content for style guidelines?"

If yes, for each category with 3+ pages:
1. Sample 3-5 pages (prefer recent, longer content)
2. Fetch via WebFetch
3. Extract patterns: voice, headings, code style, terminology

### 7. Detect Available Components

```
Glob: components/content/*.vue
```

**Standard (Nuxt UI Pro):** tip, note, warning, danger, code-group

**Custom (check if exist):**

| Component | File | Content Types |
|-----------|------|---------------|
| `::key-takeaways` | `KeyTakeaways.vue` | /learn/, /blog/ only |
| `::quick-check` | `QuickCheck.vue` | /learn/, /blog/ only |
| `::checklist` | `Checklist.vue` | /learn/, /blog/ only |

If missing, install from `../.shared/component-templates/`.

**Never use custom components in /docs/.**

### 8. Generate Artifacts

Write to `.claude/context/`:
- `site-config.md` - All gathered context
- `site-pages.md` - Pages (grouped if 100+)
- `writing-style.md` - Per-category patterns

## When to Run

- Starting work on a new project
- Any skill reports `site-config.md` missing
- Site structure changed significantly (re-fetch pages)
