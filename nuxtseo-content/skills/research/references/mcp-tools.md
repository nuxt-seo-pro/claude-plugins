# MCP Tools Reference

Nuxt SEO Pro MCP server tools for research. Falls back to WebSearch if unavailable.

## Tool Reference

### keyword_research

Unified keyword research, SERP analysis, and ranking checks.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| type | no | research | `research`, `serp`, or `rankings` |
| topic | yes (research/serp) | - | Seed keyword/topic |
| domain | yes (rankings) | - | Domain without https:// |
| minVolume | no | 10 | Min monthly volume (research) |
| maxVolume | no | 10000 | Max monthly volume (research) |
| maxDifficulty | no | 60 | Max difficulty 0-100 (research) |
| limit | no | 20 | Max results |
| includeRelated | no | true | Include related searches (research) |
| depth | no | 10 | SERP results to analyze (serp, max 20) |
| minPosition | no | 1 | Min rank position (rankings) |
| maxPosition | no | 20 | Max rank position (rankings) |

**Type examples:**
- `type: 'research'` — keyword suggestions with volume/difficulty
- `type: 'serp'` — top results, SERP features, AI Overview detection
- `type: 'rankings'` — keywords a domain ranks for (competitor analysis)

### domain_info

Domain availability and traffic estimates.

| Parameter | Required | Description |
|-----------|----------|-------------|
| type | yes | `availability` or `traffic` |
| domain | yes (traffic) | Domain without https:// |
| domains | yes (availability) | Array of domains (max 10) |

### competitors

Competitor tracking and auto-discovery.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| type | no | get | `get` or `discover` |
| siteUrl | no | verified site | Site URL |
| includeSelf | no | false | Include own domain (get only) |

### get_sitemap_urls

Fetch site's content inventory.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| siteUrl | no | verified site | Site to fetch |
| limit | no | 15 | Max URLs (max 50) |

### generate_seo

Generate schema.org or OG image templates.

| Parameter | Required | Description |
|-----------|----------|-------------|
| type | yes | `schema-org` or `og-image` |
| schemaType | yes (schema-org) | Article, BlogPosting, Product, FAQPage, HowTo, etc. |
| pageType | yes (og-image) | blog, product, landing, docs, tool, etc. |
| outputFormat | no | `composable` (Vue) or `frontmatter` (markdown) |

### analyze_page

Analyze Vue SFCs or Nuxt Content markdown for SEO issues. Auto-detects file type from path.

| Parameter | Required | Description |
|-----------|----------|-------------|
| filePath | yes | Path to .vue or .md file |
| fileContent | yes | File contents |
| nuxtConfig | no | nuxt.config.ts content (for module detection) |

## Google Search Console Tools

Real performance data from GSC. Requires site connected in Pro dashboard.

### gsc_status

Check connection and sync status.

### gsc_query

Unified GSC data query. Replaces all individual GSC query tools.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| type | yes | - | `pages`, `keywords`, `countries`, `devices`, `timeseries`, `page-detail`, `keyword-detail`, `analysis` |
| period | no | 28d | `7d`, `28d`, `3m`, `6m`, `12m` |
| limit | no | 25 | Max results (max 100) |
| sort | no | clicks | `clicks`, `impressions`, `ctr`, `position` |
| sortDir | no | desc | `asc` or `desc` |
| search | no | - | Filter text |
| pageUrl | yes (page-detail) | - | URL to analyze |
| keyword | yes (keyword-detail) | - | Keyword to analyze |
| preset | yes (analysis) | - | `striking-distance`, `opportunity`, `decay`, `movers-rising`, `movers-declining`, `zero-click` |

**Examples:**
```
gsc_query({ type: 'pages' })                                    // top pages
gsc_query({ type: 'keywords', sort: 'impressions' })            // top keywords by impressions
gsc_query({ type: 'analysis', preset: 'striking-distance' })    // quick wins
gsc_query({ type: 'page-detail', pageUrl: 'https://...' })      // keywords for a page
gsc_query({ type: 'keyword-detail', keyword: '...' })           // pages for a keyword
gsc_query({ type: 'timeseries', period: '3m' })                 // daily trends
```

### gsc_sitemaps

Sitemap management.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| action | no | list | `list`, `submit`, `delete`, `refresh` |
| sitemapUrl | yes (submit/delete) | - | Sitemap URL |

## Fallback: WebSearch

When MCP unavailable:

| Need | WebSearch Query |
|------|-----------------|
| Volume | "[topic] search volume" |
| Competition | "[topic]" (analyze top 10) |
| Competitor content | "site:[domain]" |
| Reddit signals | "site:reddit.com [topic]" |
