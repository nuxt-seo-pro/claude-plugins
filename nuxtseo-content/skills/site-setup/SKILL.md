---
name: Site Setup
description: Use for "setup site", "configure site", "initialize project", or when site-config.md is missing. Required before using writing skills.
version: 0.1.0
---

# Site Setup

Initialize site context for all writing skills. Run once per project.

## Artifacts

**Reads:**
- `nuxt.config.ts` — Extract site URL, name from `site:` key

**Generates:**
- `.claude/context/site-config.md` — Site URL, name, industry
- `.claude/context/site-pages.md` — Available pages from llms.txt/sitemap

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

### 2. Ask User for Missing Info

If `nuxt.config.ts` doesn't have site config, or fields are missing:

**Site URL:** Ask as free text if not found

**Site Name:** Ask as free text if not found

**Industry:** Always ask (multiple choice):

| Option | Description |
|--------|-------------|
| SaaS / Developer Tools | Software products, APIs, dev tools |
| E-commerce | Online stores, marketplaces |
| Agency / Consulting | Service businesses |
| Content / Media | Blogs, news, entertainment |
| Education | Courses, tutorials, learning platforms |
| Finance / Fintech | Banking, payments, investing |
| Healthcare | Medical, wellness, fitness |
| Other | Custom industry |

### 3. Fetch Available Pages

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

### 4. Generate Artifacts

**site-config.md:**
```yaml
url: https://example.com
name: Site Name
tagline: One-line description
industry: saas
```

**site-pages.md:**
```markdown
# Available Pages

Source: llms.txt (or sitemap.xml)
Fetched: YYYY-MM-DD

## Pages

| Path | Title/Description |
|------|-------------------|
| /docs/getting-started | Getting started guide |
| /docs/api/overview | API reference |
| /learn/tutorials/intro | Introduction tutorial |
```

## Usage

Run setup when:
- Starting work on a new project
- Any skill reports `site-config.md` missing
- Site structure has changed significantly (re-fetch pages)

## Example Flow

```
1. Read nuxt.config.ts
   → Found: url=https://nuxtseo.com, name=Nuxt SEO

2. Ask user for industry
   → User selects: "SaaS / Developer Tools"

3. Fetch https://nuxtseo.com/llms.txt
   → Found 45 pages

4. Write .claude/context/site-config.md
5. Write .claude/context/site-pages.md

Setup complete. Writing skills can now reference site context.
```
