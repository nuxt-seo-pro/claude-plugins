---
name: Research
description: Use for "keyword research", "market research", "competitor analysis", "content gaps", "is there demand for", "what should I write about", "validate product idea", or any pre-work research.
version: 0.6.0
---

# Research

Unified research skill for keyword discovery, market validation, and competitive analysis.

## Artifacts

**Reads:**
- `.claude/context/site-config.md` - Site URL, name, industry
- `.claude/context/site-pages.md` - Existing pages (for content gaps)

**Generates:**
- `.claude/context/target-keywords.md` - Keywords to target
- `.claude/context/market-research.md` - Product/market context
- `.claude/context/competitors.md` - Competitor analysis

**Requires:** Run `site-setup` first if site-config.md is missing.

**Optional:** `nuxt-seo-pro` MCP server for keyword/SERP data. Falls back to WebSearch if unavailable.

## MCP Tools

**First-time setup:** Run `mcp__nuxt-seo-pro__init_site` before other pro tools. Use `forceProfile: true` to refresh stale site profiles.

| Tool | Purpose |
|------|---------|
| `mcp__nuxt-seo-pro__init_site` | Register site, profile type/industry/audience |
| `mcp__nuxt-seo-pro__research_keywords` | Keyword suggestions with volume/difficulty. Use `verbose: true` for full data (trends, SERP features) |
| `mcp__nuxt-seo-pro__analyze_serp` | Competition analysis, SERP features |
| `mcp__nuxt-seo-pro__check_rankings` | Current rankings for a domain |
| `mcp__nuxt-seo-pro__analyze_social_signals` | GitHub, Reddit, Twitter activity |
| `mcp__nuxt-seo-pro__estimate_domain_traffic` | Competitor traffic estimates |
| `mcp__nuxt-seo-pro__get_sitemap_urls` | Existing content inventory |
| `mcp__nuxt-seo-pro__check_domain_availability` | Domain availability (batch up to 10) |

## Research Types

| Type | Triggers | Flow |
|------|----------|------|
| `content` | "keyword research", "what to write", "content gaps" | get_sitemap_urls → research_keywords → analyze_serp |
| `market` | "is there demand", "validate idea", "should I build" | research_keywords → analyze_serp → analyze_social_signals |
| `competitor` | "competitor analysis", "who ranks for" | estimate_domain_traffic → check_rankings → analyze_serp |

## Content Research

Pre-writing research for what articles to create.

### Keyword Selection

| Metric | Target | Why |
|--------|--------|-----|
| Volume | 100-1000/month | Long-tail sweet spot |
| Difficulty | <40 | Achievable ranking |
| CPC | Higher = better | Indicates commercial intent |

Pick 3-5 long-tail keywords with decent volume + low difficulty.

### Gap Analysis

Compare existing content (from site-pages.md) against keyword opportunities:
- Keywords with no matching content
- Existing pages that could target additional keywords
- User questions without answers

## Market Research

Validate product ideas before building.

### Demand Signals

| Signal | Implication |
|--------|-------------|
| High volume, low difficulty | Underserved demand |
| Many related keywords | Broad market interest |
| Question keywords | People need education/solutions |
| `activityLevel: high` (100+) | Active community, validated demand |
| `trend: growing` | Good timing |

### Reddit Validation

Use `analyze_social_signals` with `platforms: ["reddit"]` or WebSearch `site:reddit.com [topic]`:
- Active subreddits = community exists
- Recurring questions = pain points to address
- Product complaints = opportunities to solve
- "I wish there was..." posts = direct demand signals

### Domain Check

Use `check_domain_availability` for up to 10 domains. Prefer `.com` for mass market, `.dev`/`.io` for developer tools.

## Competitor Research

Deep-dive on specific competitors.

### What to Extract

- **Traffic** - Monthly visits, trend (growing/declining)
- **Top pages** - What drives their traffic
- **Keyword strategy** - Head terms they own, long-tail strength
- **Gaps** - What they DON'T rank for (your opportunity)

## Fallback: WebSearch

If MCP tools unavailable:
1. Search "[topic] search volume" or use free tools (Ubersuggest)
2. Search "[topic]" and analyze top 10 results manually
3. Search "site:[domain]" to see competitor content

## Research Markers

When drafting, mark unknowns:

```markdown
[VERIFY: claim about X]
[STAT NEEDED: specific statistic]
[SOURCE NEEDED: requires authoritative source]
```
