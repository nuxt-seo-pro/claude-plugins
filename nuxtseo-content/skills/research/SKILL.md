---
name: Research
description: Use for "keyword research", "market research", "competitor analysis", "content gaps", "is there demand for", "what should I write about", "validate product idea", or any pre-work research.
version: 0.3.0
---

# Research

Unified research skill for keyword discovery, market validation, and competitive analysis.

## Artifacts

**Reads:**
- `.claude/context/site-config.md` — Site URL, name, industry
- `.claude/context/site-pages.md` — Existing pages (for content gaps)

**Generates:**
- `.claude/context/target-keywords.md` — Keywords to target
- `.claude/context/market-research.md` — Product/market context
- `.claude/context/competitors.md` — Competitor analysis

**Requires:** Run `site-setup` first if site-config.md is missing.

## Research Types

| Type | Trigger Phrases | Focus |
|------|-----------------|-------|
| `content` | "keyword research", "what to write", "content gaps", "topic ideas" | What articles to create |
| `market` | "is there demand", "validate idea", "market research", "should I build" | Whether to build a product |
| `competitor` | "competitor analysis", "who ranks for", "analyze competitor" | Understanding competition |

## MCP Tools

| Tool | Purpose |
|------|---------|
| `mcp__nuxt-seo-pro__research_keywords` | Keyword suggestions with volume/difficulty |
| `mcp__nuxt-seo-pro__analyze_serp` | Competition analysis, SERP features |
| `mcp__nuxt-seo-pro__check_rankings` | Current rankings for a domain |
| `mcp__nuxt-seo-pro__check_domain_availability` | Domain availability (batch up to 10) |
| `mcp__nuxt-seo-pro__analyze_social_signals` | GitHub, Reddit, Twitter activity |
| `mcp__nuxt-seo-pro__estimate_domain_traffic` | Competitor traffic estimates |
| `mcp__nuxt-seo-pro__get_sitemap_urls` | Existing content inventory |

## Workflow

### 1. Detect Research Type

From user prompt:

```
"what should I write about" → content
"is there demand for X" → market
"who are my competitors" → competitor
"keyword research for booking" → content
"validate my product idea" → market
```

### 2. Gather Context

**For content research:**
- Read existing pages from site-pages.md
- Identify content pillars
- Find gaps

**For market research:**
- Ask for product name, problem solved, target user
- Generate seed keywords

**For competitor research:**
- Identify competitor domains
- Analyze their keyword strategy

### 3. Run Research

Use MCP tools based on research type:

**Content research flow:**
```
1. get_sitemap_urls → understand existing content
2. research_keywords → find opportunities
3. analyze_serp → understand competition
```

**Market research flow:**
```
1. research_keywords → validate search demand
2. analyze_serp → see who ranks
3. analyze_social_signals → community interest
4. check_domain_availability → domain options
```

**Competitor research flow:**
```
1. estimate_domain_traffic → size the competitor
2. check_rankings → their keyword strategy
3. analyze_serp → how they rank
```

### 4. Generate Output

Write appropriate artifact files and present findings.

---

## Content Research

Pre-writing research for what articles to create.

### Keyword Selection Criteria

| Metric | Target | Why |
|--------|--------|-----|
| Volume | 100-1000/month | Long-tail sweet spot |
| Difficulty | <40 | Achievable ranking |
| CPC | Higher = better | Indicates commercial intent |

Pick 3-5 long-tail keywords with decent volume + low difficulty.

### Content Pillars

Content pillars = core topics the site owns. Look for:

1. Top-level `/docs/` sections
2. `/learn/` or `/blog/` category groupings
3. Recurring themes across pages

Questions to answer:
- Does this article support an existing pillar?
- Is there a gap in pillar coverage?
- Should this become a new pillar? (needs 5+ articles to justify)

### Gap Analysis

Compare existing content against opportunities:
- Keywords with no matching content
- Existing pages that could target additional keywords
- User questions without answers

### Output Format

```markdown
## Content Research: [topic]

**Date:** [YYYY-MM-DD]

### Target Keywords

| Keyword | Volume | Difficulty | Intent |
|---------|--------|------------|--------|
| [primary] | [X] | [X] | [informational/transactional] |

### Competition

- **Top rankers:** [domains]
- **SERP features:** [featured snippet, PAA, etc.]
- **Dominant format:** [tutorial/reference/list]

### Content Gaps

- [gap 1] — opportunity because [reason]

### Recommended Approach

- Content type: [tutorial/reference/guide]
- Angle: [unique perspective]
```

---

## Market Research

Validate product ideas before building.

### Demand Signals

| Signal | What it Means |
|--------|--------------|
| High volume, low difficulty | Underserved demand |
| Many related keywords | Broad market interest |
| Question keywords | People need education/solutions |
| Brand keywords | Existing players to study |

### Social Signals

| Signal | Implication |
|--------|-------------|
| `activityLevel: high` (100+) | Active community, validated demand |
| `activityLevel: medium` (20-100) | Moderate interest, worth exploring |
| `activityLevel: low` (<20) | Niche or emerging topic |
| `trend: growing` | Good timing |
| `trend: declining` | Market saturation risk |

### Domain Strategy

| TLD | Best For |
|-----|----------|
| `.com` | Mass market, highest recognition |
| `.dev` | Developer tools, requires HTTPS |
| `.io` | Tech startups, developer audience |
| `.app` | Mobile/web apps, requires HTTPS |

### Output Format

```markdown
## Market Research: [Product Idea]

**Date:** [YYYY-MM-DD]

### Search Demand

| Keyword | Volume | Difficulty | Intent |
|---------|--------|------------|--------|
| [keyword] | [X] | [X] | [problem/solution] |

**Total addressable search volume:** ~[X]/month

### Competition

**Direct competitors:**
- [Competitor 1] — [what they do]

### Social Signals

**Activity level:** [high/medium/low] | **Trend:** [growing/stable/declining]

### Domain Options

| Domain | Available | Notes |
|--------|-----------|-------|
| [option.dev] | Yes/No | [recommendation] |

### Recommendation

[Build / Validate further / Pass]

[Reasoning in 2-3 sentences]
```

---

## Competitor Research

Deep-dive on specific competitors.

### Traffic Analysis

- **Monthly traffic** — How big are they?
- **Trend** — Growing or declining?
- **Top pages** — What drives traffic?
- **Domain rank** — How authoritative?

### Keyword Strategy

- **Head terms** — Broad keywords they own
- **Long-tail** — Specific queries bringing traffic
- **Gaps** — What they DON'T rank for

### Output Format

```markdown
## Competitor Analysis: [domain]

**Date:** [YYYY-MM-DD]

### Overview

| Metric | Value |
|--------|-------|
| Monthly traffic | [X] |
| Domain rank | [X] |
| Trend | [growing/stable/declining] |

### Top Pages

| URL | Traffic | Keywords |
|-----|---------|----------|
| [path] | [X] | [primary keyword] |

### Keyword Strategy

**Head terms:** [list]
**Long-tail strength:** [description]
**Gaps:** [what they don't rank for]

### Weaknesses

- [weakness 1]
- [weakness 2]

### Opportunities

- [opportunity to beat them on X]
```

---

## Fallback: WebSearch

If MCP tools unavailable:

```
1. Search "[topic] search volume" or use free tools like Ubersuggest
2. Search "[topic]" and analyze top 10 results manually
3. Search "site:[domain]" to see existing content
```

## Research Markers

When drafting, mark unknowns:

```markdown
[VERIFY: claim about X - check official docs]
[STAT NEEDED: specific statistic to find]
[SOURCE NEEDED: claim requires authoritative source]
[OUTDATED: info from YYYY - needs update]
```

## Source Priority

1. Official docs (Google Search Central, MDN, framework docs)
2. Primary research (Google studies, industry reports)
3. Notable ecosystem voices (core team, library authors)
4. Authoritative blogs (web.dev, developers.google.com)
5. Reputable tech sites (Moz, Ahrefs)

**Avoid:** tutorialspoint, w3schools, Medium without known authors, content >2 years old for SEO.
