---
name: Research
description: Keyword research, market research, competitor analysis, content gap discovery, demand validation, traffic estimates, or any pre-writing research task.
argument-hint: "[type] [topic/keyword/domain]"
version: 0.13.0
context: fork
---

# Research

Keyword discovery, market validation, and competitive analysis. Runs in isolated context to keep MCP results contained.

**Arguments:** `$ARGUMENTS`

## Research Types

| Type | Triggers | MCP Flow |
|------|----------|----------|
| `content` | "keyword research", "what to write", "content gaps" | `get_sitemap_urls` → `keyword_research(type=research)` → `keyword_research(type=serp)` |
| `market` | "is there demand", "validate idea", "should I build" | `keyword_research(type=research)` → `keyword_research(type=serp)` → WebSearch `site:reddit.com` |
| `competitor` | "competitor analysis", "who ranks for" | `domain_info(type=traffic)` → `keyword_research(type=rankings)` → `keyword_research(type=serp)` |

**MCP tools:** When `nuxt-seo-pro` available, use directly. See `${CLAUDE_SKILL_DIR}/references/mcp-tools.md` for API.
**Fallback:** WebSearch if MCP unavailable.

## Context

Read if they exist:
- `.claude/context/site-config.md` — site URL, industry
- `.claude/context/site-pages.md` — existing content (for gap analysis)

## Content Research

Pick 3-5 long-tail keywords:

| Metric | Target | Why |
|--------|--------|-----|
| Volume | 100-1000/month | Long-tail sweet spot |
| Difficulty | <40 | Achievable ranking |
| CPC | Higher = better | Commercial intent |

Compare existing content against keyword opportunities to find gaps.

## Market Research

**Demand signals:** High volume + low difficulty = underserved. Many related keywords = broad interest. Question keywords = people need education.

**Reddit validation:** WebSearch `site:reddit.com [topic]` for active communities, recurring pain points, "I wish there was..." posts.

**Domain check:** `domain_info(type=availability)` for up to 10 domains.

## Competitor Research

Extract: traffic trend, top pages, keyword strategy, gaps they DON'T rank for.

## GSC-Backed Research

When Google Search Console connected via `nuxt-seo-pro`:

| Tool | Purpose |
|------|---------|
| `gsc_query({ type: 'keywords' })` | Keywords you already rank for |
| `gsc_query({ type: 'analysis', preset: 'striking-distance' })` | Quick wins: positions 4-20 |
| `gsc_query({ type: 'analysis', preset: 'opportunity' })` | High impressions, low CTR |
| `gsc_query({ type: 'page-detail', pageUrl })` | All keywords for a specific page |

## SEO Debug

When asked "why isn't this ranking" — investigate systematically:
1. `keyword_research(type=serp)` — what IS ranking?
2. Compare content vs top 3 results
3. Check meta tags, schema
4. `domain_info(type=traffic)` — authority comparison
5. `gsc_query(type=page-detail)` — real ranking data

## Output

Generate artifacts in `.claude/context/`:

| Research Type | Artifact | Format |
|---------------|----------|--------|
| content | `target-keywords.md` | Keywords table + long-tail + questions |
| market | `market-research.md` | Demand + signals + opportunities + risks |
| competitor | `competitors.md` | Traffic + content comparison + keyword gaps |

See `${CLAUDE_SKILL_DIR}/references/output-formats.md` for templates.
