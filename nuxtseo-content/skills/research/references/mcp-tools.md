# MCP Tools Reference

Nuxt SEO Pro MCP server tools for research. Falls back to WebSearch if unavailable.

## Setup

Run `mcp__nuxt-seo-pro__init_site` before other tools. Use `skipProfile: true` for faster init, `force: true` to refresh stale profiles.

## Tool Reference

### init_site

Register and profile a site. Required first step.

| Parameter | Required | Description |
|-----------|----------|-------------|
| url | yes | Site URL (https://...) |
| skipProfile | no | Skip auto-profiling |
| force | no | Refresh existing profile |

### research_keywords

Keyword suggestions with metrics.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| topic | yes | - | Seed keyword/topic |
| minVolume | no | 10 | Minimum monthly volume |
| maxVolume | no | 10000 | Maximum monthly volume |
| maxDifficulty | no | 60 | Max difficulty (0-100) |
| limit | no | 20 | Max results |
| includeRelated | no | true | Include "related searches" |

### analyze_serp

SERP competition analysis.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| keyword | yes | - | Keyword to analyze |
| depth | no | 10 | Results to analyze (max 20) |

**Returns:** Top results with domain rank, SERP features (AI overview, PAA, featured snippets).

### check_rankings

Current rankings for a domain.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| domain | yes | - | Domain without https:// |
| minPosition | no | 1 | Min rank position |
| maxPosition | no | 20 | Max rank position |
| limit | no | 50 | Max keywords |

### analyze_social_signals

Community activity on GitHub, Reddit, Twitter.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| topic | yes | - | Topic to research |
| platforms | no | all | Filter: ["github", "reddit", "twitter"] |

**Returns:** Activity level, trend direction, top repos/threads.

### estimate_domain_traffic

Competitor traffic estimates.

| Parameter | Required | Description |
|-----------|----------|-------------|
| domain | yes | Domain without https:// |

**Returns:** Monthly traffic, trend, top pages, geo distribution.

### get_sitemap_urls

Fetch site's content inventory.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| siteUrl | no | verified site | Site to fetch |
| limit | no | 15 | Max URLs (max 50) |

### check_domain_availability

Check if domains are available.

| Parameter | Required | Description |
|-----------|----------|-------------|
| domains | yes | Array of domains (max 10) |

## Google Search Console Tools

Real performance data from GSC. Requires site connected in Pro dashboard.

| Tool | Use For |
|------|---------|
| `gsc_status` | Check connection, sync status |
| `gsc_pages` | Top pages with clicks, impressions, position |
| `gsc_keywords` | Top keywords with metrics |
| `gsc_analytics` | Daily time-series for trends |
| `gsc_analysis` | Presets: striking-distance, opportunity, decay, declining |
| `gsc_page_details` | All keywords ranking for a specific page |
| `gsc_keyword_details` | All pages ranking for a specific keyword |

### Analysis Presets

Use `gsc_analysis({ preset: '...' })`:

| Preset | Finds |
|--------|-------|
| `striking-distance` | Keywords in positions 4-20 (quick wins) |
| `opportunity` | High impressions, low CTR |
| `decay` | Declining performance over time |
| `movers-rising` | Keywords gaining ranks |
| `movers-declining` | Keywords losing ranks |

### SEO Debug

For "why isn't this ranking" investigations:

```
gsc_page_details({ pageUrl: 'https://...' })  // what keywords does it rank for?
gsc_keyword_details({ keyword: '...' })        // keyword cannibalization?
gsc_analysis({ preset: 'decay' })              // is it declining?
```

## Fallback: WebSearch

When MCP unavailable:

| Need | WebSearch Query |
|------|-----------------|
| Volume | "[topic] search volume" |
| Competition | "[topic]" (analyze top 10) |
| Competitor content | "site:[domain]" |
| Reddit signals | "site:reddit.com [topic]" |
