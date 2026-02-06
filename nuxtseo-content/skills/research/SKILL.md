---
name: Research
description: This skill should be used when the user asks for "keyword research", "market research", "competitor analysis", "content gaps", "is there demand for", "what should I write about", "validate product idea", "who ranks for", "traffic estimate", or any pre-writing research task. For best results, specify research type (content, market, competitor), target keyword/topic, and competitor domains if known.
version: 0.12.0
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

When `nuxt-seo-pro` MCP available, use research/analysis tools directly. See `references/mcp-tools.md` for full API.

## Research Types

| Type | Triggers | Flow |
|------|----------|------|
| `content` | "keyword research", "what to write", "content gaps" | get_sitemap_urls → keyword_research(type=research) → keyword_research(type=serp) |
| `market` | "is there demand", "validate idea", "should I build" | keyword_research(type=research) → keyword_research(type=serp) → WebSearch site:reddit.com |
| `competitor` | "competitor analysis", "who ranks for" | domain_info(type=traffic) → keyword_research(type=rankings) → keyword_research(type=serp) |

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

### Reddit Validation

Use WebSearch `site:reddit.com [topic]`:
- Active subreddits = community exists
- Recurring questions = pain points to address
- Product complaints = opportunities to solve
- "I wish there was..." posts = direct demand signals

### Domain Check

Use `domain_info(type=availability)` for up to 10 domains. Prefer `.com` for mass market, `.dev`/`.io` for developer tools.

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

## Output Formats

See `references/output-formats.md` for artifact templates (target-keywords.md, market-research.md, competitors.md).

## After Research

| Research Type | Output | Next Step |
|---------------|--------|-----------|
| content | `target-keywords.md` | "Start writing with `content-writing` skill?" |
| market | `market-research.md` | "Write landing page with `content-writing` skill?" |
| competitor | `competitors.md` | "Audit existing pages with `content-audit` to find improvements?" |

## GSC-Backed Research

When Google Search Console is connected via `nuxt-seo-pro`, supplement keyword research with real data:

| Tool | Use For |
|------|---------|
| `gsc_query({ type: 'keywords' })` | Discover keywords you already rank for |
| `gsc_query({ type: 'analysis', preset: 'striking-distance' })` | Find quick-win keywords in positions 4-20 |
| `gsc_query({ type: 'analysis', preset: 'opportunity' })` | High impressions, low CTR keywords to optimize |
| `gsc_query({ type: 'page-detail', pageUrl: '...' })` | See all keywords a page ranks for |

Combine GSC data with `keyword_research(type=research)` to find gaps between what you rank for and what's available.

## Long-Running Research

For multi-topic research, use scratchpad tracking:

```md
## Goal
Research keywords for all /docs/ categories

## Topics
- [ ] authentication (in progress)
- [ ] database
- [ ] deployment

## Status
In progress
```

## SEO Debug Mode

When user asks "why isn't this ranking" or "why no traffic":

### Hypothesis-Driven Investigation

```md
## Investigation: [URL] not ranking for [keyword]

### Hypotheses
1. [ ] Content doesn't match search intent
2. [ ] Missing key subtopics competitors cover
3. [ ] Technical SEO issues (meta, schema)
4. [ ] Not enough backlinks/authority
5. [ ] Keyword too competitive

### Investigation Steps
1. keyword_research(type=serp) for [keyword] - what's ranking?
2. Compare our content vs top 3 results
3. Check our meta tags, schema
4. domain_info(type=traffic) - our authority vs theirs
5. gsc_query(type=page-detail) for real ranking data (if GSC connected)

### Findings
[Document evidence for each hypothesis]

### Recommendation
[Specific action based on findings]
```

Ask user before deep investigation: "Want me to investigate why [page] isn't ranking for [keyword]?"

## Error Recovery

| Failure | Fallback |
|---------|----------|
| MCP tools unavailable | Use WebSearch (see Fallback section) |
| WebSearch rate limited | Ask user to provide seed keywords manually |
| No keyword data returned | Try broader seed terms (1-2 words), check spelling |
