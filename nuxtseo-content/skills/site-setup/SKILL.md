---
name: Site Setup
description: Use for "setup site", "configure site", "initialize project", or when site-config.md is missing. Required before using writing skills.
version: 0.2.0
---

# Site Setup

Initialize site context for all writing skills. Run once per project.

## Artifacts

**Reads:**
- `nuxt.config.ts` — Extract site URL, name from `site:` key
- `components/content/` — Check available MDC components
- Sample pages — For style analysis

**Generates:**
- `.claude/context/site-config.md` — Site URL, name, industry
- `.claude/context/site-pages.md` — Available pages from llms.txt/sitemap
- `.claude/context/writing-style.md` — Per-category voice and structure patterns

## Workflow

### 1. Extract from nuxt.config.ts

Check for existing site configuration:

```ts
export default defineNuxtConfig({
  site: {
    url: 'https://example.com',
    name: 'Site Name',
    // other fields...
  }
})
```

Extract:
- `site.url` — Site URL
- `site.name` — Site name
- `site.description` — Site tagline (if present)

### 2. Check for Existing Style Guide

Before asking questions, check if project has existing style docs:

```
Glob: STYLE.md, WRITING.md, .github/STYLE.md, docs/CONTRIBUTING.md
```

If found, read and extract:
- Voice/tone guidelines
- Terminology preferences
- Formatting rules

Ask user: "Found [file]. Use this as style reference?"

### 3. Ask User for Missing Info

Gather context that can't be inferred. Use AskUserQuestion with multiple questions per call when possible.

**Required (if not in nuxt.config.ts):**

| Field | Type | When to Ask |
|-------|------|-------------|
| Site URL | free text | Not in `site.url` |
| Site Name | free text | Not in `site.name` |

**Always ask:**

| Field | Type | Options |
|-------|------|---------|
| Industry | single choice | SaaS/Dev Tools, E-commerce, Agency, Content/Media, Education, Finance, Healthcare, Other |
| Target Audience | single choice | Developers, Technical Users, Business Users, General Consumers, Mixed |
| Audience Level | single choice | Beginner, Intermediate, Advanced, Mixed |

**Conditional questions:**

| Condition | Field | Options |
|-----------|-------|---------|
| New site / no content to analyze | Brand Personality | Professional, Friendly, Authoritative, Playful, Minimalist |
| Has landing pages | Primary CTA | Sign Up, Start Free Trial, Book Demo, Contact Sales, Learn More |
| Has docs + learn sections | Content Goal | Educate users, Drive conversions, Support existing users, Build authority |

**Optional (offer to skip):**

| Field | Type | Purpose |
|-------|------|---------|
| Competitors | free text (comma-separated) | For positioning, comparison content |
| Differentiator | free text | What makes this product/content unique |
| Banned phrases | free text | Terms to never use (beyond standard banned words) |

### 4. Fetch Available Pages

Once site URL is known, fetch page index:

**Primary: llms.txt**
```
GET {site.url}/llms.txt
```

Parse as markdown, extract links with descriptions.

**Fallback: sitemap.xml**
```
GET {site.url}/sitemap.xml
```

Parse `<loc>` elements for URLs.

### 5. Categorize Pages

Group fetched URLs into content categories by pattern:

| Pattern | Category | Typical Voice |
|---------|----------|---------------|
| `/`, `/features`, `/pricing`, `/about` | landing | benefit-focused, punchy |
| `/docs/**`, `/api/**`, `/reference/**` | docs | technical, direct |
| `/learn/**`, `/tutorials/**`, `/guides/**` | learn | educational, explanatory |
| `/blog/**`, `/articles/**` | blog | conversational, narrative |
| `/app/**`, `/dashboard/**` | app | skip (UI copy) |

Classification rules:
1. Match URL against patterns in order
2. First match wins
3. Unmatched URLs go to "other"
4. Track count per category

### 6. Analyze Content Style

For each category with 3+ pages, analyze existing content to extract style patterns.

**Ask user:**
```
AskUserQuestion:
  question: "Analyze existing content for style guidelines?"
  options:
    - label: "Yes (Recommended)"
      description: "Sample pages to extract voice, structure, terminology"
    - label: "Skip"
      description: "Use default patterns only"
```

**If yes:**

1. Select 3-5 sample pages per category (prefer recently updated, longer content)
2. Fetch each page via WebFetch
3. Extract patterns:

| Aspect | What to Look For |
|--------|------------------|
| Voice | Formal vs casual, use of "you", humor level |
| Headings | Sentence case vs title case, how-to prefixes, question format |
| Code | TypeScript vs JS, imports shown, snippet length |
| Structure | Intro style, section depth, conclusion pattern |
| Terminology | Recurring terms, avoided words |

4. Generate per-category style config

### 7. Detect Available Components

Check which MDC components exist in the project:

```
Glob: components/content/*.vue
```

**Standard (always available with Nuxt UI Pro):**
- `::tip`, `::note`, `::warning`, `::danger` — All content types
- `::code-group` — All content types

**Custom (blog/tutorial pages only):**

| Component | File to Check | Use For |
|-----------|---------------|---------|
| `::key-takeaways` | `KeyTakeaways.vue` | Long educational articles only |
| `::quick-check` | `QuickCheck.vue` | Tutorials teaching concepts |
| `::checklist` | `Checklist.vue` | Setup guides, launch checklists |

**IMPORTANT:** Custom interactive/summary components are for `/learn/`, `/blog/`, `/tutorials/` only. For `/docs/`, use standard callouts (`::tip`, `::warning`, etc.) and `::code-group` — but not key-takeaways, quick-checks, or checklists.

Record available components in site-config.md so writing/audit skills know what's available.

### 8. Generate Artifacts

**site-config.md:**
```yaml
url: https://example.com
name: Site Name
tagline: One-line description
industry: saas

# Audience
audience: developers
level: intermediate

# Brand (from user input or analysis)
personality: professional
primary_cta: start-free-trial
content_goal: educate

# Optional
competitors:
  - competitor1.com
  - competitor2.com
differentiator: "Only solution that does X"
banned_phrases:
  - "industry-leading"
  - "best-in-class"

# Reference
style_guide: docs/CONTRIBUTING.md  # if found

# Available components
components:
  standard:  # always available with Nuxt UI Pro
    - tip
    - note
    - warning
    - danger
    - code-group
  custom:  # for /learn/, /blog/, /tutorials/ only
    - key-takeaways  # remove if not installed
    - quick-check
    - checklist
```

**site-pages.md:**

CRITICAL: Never drop URLs. Every page from source must be represented.

**Under 100 pages:** List all individually with full descriptions.

```markdown
# Available Pages

Source: llms.txt (or sitemap.xml)
Fetched: YYYY-MM-DD
Total: 45 pages

## Pages

| Path | Title/Description |
|------|-------------------|
| /docs/getting-started | Getting started guide |
| /docs/api/overview | API reference |
| /learn/tutorials/intro | Introduction tutorial |
```

**100+ pages:** Group by URL pattern to reduce context. List unique pages, then summarize patterns.

```markdown
# Available Pages

Source: llms.txt
Fetched: YYYY-MM-DD
Total: 247 pages (38 listed, 209 grouped)

## Unique Pages

| Path | Title/Description |
|------|-------------------|
| / | Homepage |
| /pricing | Pricing page |
| /about | About the company |

## Grouped by Pattern

### /docs/modules/{module}/**
124 pages following pattern. Examples:
- /docs/modules/sitemap/getting-started
- /docs/modules/sitemap/api/config
- /docs/modules/robots/getting-started
- /docs/modules/robots/api/rules
- /docs/modules/og-image/getting-started
- /docs/modules/og-image/api/components
- /docs/modules/schema-org/getting-started
- /docs/modules/link-checker/api/config
- /docs/modules/seo-utils/getting-started
- /docs/modules/seo-utils/api/composables

### /learn/{topic}/**
85 pages following pattern. Examples:
- /learn/seo/meta-tags
- /learn/seo/open-graph
- /learn/seo/structured-data
- /learn/performance/core-web-vitals
- /learn/performance/image-optimization
- /learn/indexing/robots-txt
- /learn/indexing/sitemaps
- /learn/indexing/canonical-urls
- /learn/crawling/javascript-seo
- /learn/crawling/internal-linking
```

Pattern grouping rules:
- Identify repeating URL segments (e.g., `/docs/modules/*/`)
- Group pages sharing the same prefix pattern
- Show ~10 example URLs per group to convey variety
- Keep total page count accurate

**writing-style.md:**

Generated from content analysis. Each category gets its own section.

```yaml
# Writing Style Guide

Generated: YYYY-MM-DD
Source: Analyzed X pages across Y categories

categories:
  docs:
    patterns:
      - /docs/**
      - /api/**
    sample_pages:
      - /docs/getting-started
      - /docs/api/config
      - /docs/composables/use-seo-meta
    voice:
      formality: technical
      perspective: second-person  # "you"
      tone: direct
    structure:
      intro: problem-solution  # brief problem, then solution
      sections: task-oriented  # organized by what user wants to do
      depth: 2-3 levels  # h2 and h3, rarely h4
      conclusion: none  # docs don't need conclusions
    code:
      language: typescript
      show_imports: true
      snippet_length: short  # 5-15 lines typical
    terminology:
      prefer:
        - composable
        - module
        - config
      avoid:
        - plugin
        - package

  learn:
    patterns:
      - /learn/**
    sample_pages:
      - /learn/seo/meta-tags
      - /learn/performance/core-web-vitals
    voice:
      formality: conversational
      perspective: second-person
      tone: educational
    structure:
      intro: context-first  # explain why this matters
      sections: concept-to-practice  # theory then examples
      depth: 2-3 levels
      conclusion: summary  # brief wrap-up, key-takeaways only for 1500+ word articles
    code:
      language: typescript
      show_imports: true
      snippet_length: medium  # 10-25 lines with comments
    terminology:
      prefer:
        - search engines
        - crawlers
      avoid:
        - bots
        - spiders

  landing:
    patterns:
      - /
      - /features
      - /pricing
    sample_pages:
      - /
      - /features
    voice:
      formality: casual
      perspective: second-person
      tone: benefit-focused
    structure:
      intro: hook  # bold claim or question
      sections: benefit-blocks
      depth: 1-2 levels
      conclusion: cta
    code:
      language: typescript
      show_imports: false
      snippet_length: minimal  # 3-5 lines max
```

If style analysis was skipped, generate with defaults only:

```yaml
# Writing Style Guide

Generated: YYYY-MM-DD
Source: defaults (analysis skipped)

categories:
  docs:
    patterns: ["/docs/**", "/api/**"]
    voice: { formality: technical, tone: direct }
  learn:
    patterns: ["/learn/**", "/tutorials/**"]
    voice: { formality: conversational, tone: educational }
  landing:
    patterns: ["/", "/features", "/pricing"]
    voice: { formality: casual, tone: benefit-focused }
```

## Usage

Run setup when:
- Starting work on a new project
- Any skill reports `site-config.md` missing
- Site structure has changed significantly (re-fetch pages)

## Example Flow

**Existing site with content:**
```
1. Read nuxt.config.ts → url=https://nuxtseo.com, name=Nuxt SEO
2. Check for style guide → Found docs/CONTRIBUTING.md
   Ask: "Use as style reference?" → Yes
3. Ask (batch):
   - Industry → "SaaS / Developer Tools"
   - Target Audience → "Developers"
   - Audience Level → "Intermediate"
4. Fetch llms.txt → 247 pages
5. Categorize:
   - docs: 124 pages
   - learn: 85 pages
   - landing: 5 pages
6. Conditional questions:
   - Has docs + learn → Content Goal → "Educate users"
   - Has landing → Primary CTA → "Start Free Trial"
7. Optional questions:
   - Competitors → "nextjs.org, remix.run" (or skip)
   - Differentiator → "Full SEO toolkit for Nuxt" (or skip)
8. Ask: "Analyze existing content?" → Yes
9. Sample and analyze pages per category
10. Write:
    - site-config.md (all gathered context)
    - site-pages.md (grouped format)
    - writing-style.md (per-category + style guide ref)
```

**New site (no content to analyze):**
```
1. Read nuxt.config.ts → url missing
   Ask: "Site URL?" → "https://myapp.dev"
   Ask: "Site Name?" → "MyApp"
2. Check for style guide → None found
3. Ask (batch):
   - Industry → "SaaS / Developer Tools"
   - Target Audience → "Developers"
   - Audience Level → "Beginner"
   - Brand Personality → "Friendly" (asked because no content)
4. Fetch llms.txt → 404, try sitemap → 0 pages
5. Ask: "What content types will you create?"
   → Docs, Landing pages
6. Conditional questions:
   - Primary CTA → "Sign Up"
   - Content Goal → "Drive conversions"
7. Skip content analysis (nothing to analyze)
8. Write:
    - site-config.md (user-provided context)
    - site-pages.md (empty, will populate later)
    - writing-style.md (defaults based on personality)
```

**Quick setup (minimal questions):**
```
1. Read nuxt.config.ts → url, name found
2. No style guide found
3. Ask only required:
   - Industry → "Education"
   - Target Audience → "General Consumers"
   - Audience Level → "Beginner"
4. Fetch pages, categorize
5. Skip optional questions (user chose "Skip")
6. Skip content analysis
7. Write artifacts with defaults
```
