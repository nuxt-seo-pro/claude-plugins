---
name: Research
description: This skill should be used when the user asks for "keyword research", "market research", "competitor analysis", "content gaps", "is there demand for", "what should I write about", "validate product idea", "who ranks for", "traffic estimate", or any pre-writing research task. For best results, specify research type (content, market, competitor), target keyword/topic, and competitor domains if known.
version: 0.10.1
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

When `nuxt-seo-pro` MCP available, use `init_site` first, then research/analysis tools. See `references/mcp-tools.md` for full API.

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

## Output Formats

See `references/output-formats.md` for artifact templates (target-keywords.md, market-research.md, competitors.md).

## After Research

| Research Type | Next Step |
|---------------|-----------|
| content | Write target-keywords.md, suggest content-writing skill |
| market | Write market-research.md, summarize findings to user |
| competitor | Write competitors.md, identify content gaps |

## Next Steps (Cross-Skill Handoff)

After research, suggest relevant follow-up:

| Situation | Suggest |
|-----------|---------|
| Keywords identified | "Start writing with `content-writing` skill?" |
| Content gaps found | "Create content plan in `.claude/plans/content-calendar.md`?" |
| Competitor analysis done | "Audit existing pages with `content-audit` to find improvements?" |
| Market validated | "Write landing page with `content-writing` skill?" |

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
1. analyze_serp for [keyword] - what's ranking?
2. Compare our content vs top 3 results
3. Check our meta tags, schema
4. estimate_domain_traffic - our authority vs theirs

### Findings
[Document evidence for each hypothesis]

### Recommendation
[Specific action based on findings]
```

Ask user before deep investigation: "Want me to investigate why [page] isn't ranking for [keyword]?"
