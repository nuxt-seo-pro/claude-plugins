---
name: Site Setup
description: Use when user says "setup site", "configure site", "initialize project", "new project", "set up for writing", or when site-config.md is missing. Creates site-config.md, site-pages.md, writing-style.md in .claude/context/.
version: 0.11.0
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

**Primary:** `GET {site.url}/llms-full.txt` - parse as markdown (full content inventory)

**Fallback 1:** `GET {site.url}/llms.txt` - parse as markdown (summary)

**Fallback 2:** `GET {site.url}/sitemap.xml` - parse `<loc>` elements

**Fallback 3:** Scan project if not deployed:
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
3. Extract patterns per `references/style-analysis.md`: voice, structure, terminology

### 7. Detect Available Components

```
Glob: components/content/*.vue
```

**Standard (always available):** tip, note, warning, danger, code-group

**Custom:** List all `.vue` files found in `components/content/`. Convert filenames to MDC syntax: `KeyTakeaways.vue` → `::key-takeaways`.

**Templates available:** If custom components are missing but would be useful, the plugin ships templates at `skills/.shared/component-templates/` (KeyTakeaways.vue, QuickCheck.vue, Checklist.vue). Offer to copy them.

Record all found components in site-config.md. Note which are custom (educational content only - `/learn/`, `/blog/`) vs standard (all content).

**Never use custom interactive components in /docs/.**

### 8. Generate Artifacts

Write to `.claude/context/`:
- `site-config.md` - All gathered context
- `site-pages.md` - Pages (grouped if 100+)
- `writing-style.md` - Per-category patterns

## When to Run

- Starting work on a new project
- Any skill reports `site-config.md` missing
- Site structure changed significantly (re-fetch pages)

## When to Re-Run (Refresh Context)

| Signal | Action |
|--------|--------|
| Added many new pages | Re-run to update site-pages.md |
| Changed site URL/name | Re-run to update site-config.md |
| Inconsistent voice in audits | Re-run with style analysis to refresh writing-style.md |
| New content category added | Re-run to add category patterns |
| 30+ days since last run | Consider refresh for accuracy |

### Partial Refresh

For targeted updates without full re-run:

```
"Just refresh site-pages.md" → Skip to step 4-5 only
"Just refresh writing-style.md" → Skip to step 6 only
"Add new category patterns" → Ask for category, analyze samples, append to writing-style.md
```

## Next Steps (Cross-Skill Handoff)

After setup, suggest relevant follow-up:

| Situation | Suggest |
|-----------|---------|
| Setup complete | "Ready to write content with `content-writing` skill?" |
| Has existing content | "Audit existing pages with `content-audit`?" |
| New project | "Run `research` to find target keywords first?" |
| Many pages found | "Create content plan in `.claude/plans/`?" |
