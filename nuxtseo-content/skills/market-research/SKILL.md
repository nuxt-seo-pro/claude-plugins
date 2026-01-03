---
name: Market Research
description: Use for "research product idea", "validate demand", "market research", "analyze competitors", "check domain", "is there demand for X", or understanding market potential before building.
version: 0.2.0
---

# Market Research

Validate product ideas by analyzing search demand, competition, and market signals using DataForSEO.

## Artifacts

This skill generates persistent context for other skills:

| Artifact | Purpose |
|----------|---------|
| `.claude/context/market-research.md` | Core product/market context |
| `.claude/context/competitors.md` | Detailed competitor analysis |

**Before running:** Check if artifacts exist. If updating, read existing first.
**After running:** Write/update artifacts so other skills can reference them.

## When to Use

- User has a product idea and wants to validate demand
- Need to understand if people are searching for solutions
- Checking competition landscape before building
- Identifying keyword opportunities for a product niche
- Deep-diving on specific competitors
- Checking domain name availability

## MCP Tools

| Tool | Purpose |
|------|---------|
| `mcp__nuxt-seo-pro__research_keywords` | Find what people search for related to the idea |
| `mcp__nuxt-seo-pro__analyze_serp` | See who ranks, what solutions exist |
| `mcp__nuxt-seo-pro__check_rankings` | Analyze competitor keyword rankings |
| `mcp__nuxt-seo-pro__check_domain_availability` | Check domain availability (batch up to 10) |
| `mcp__nuxt-seo-pro__analyze_social_signals` | GitHub repos, Reddit threads, sentiment |
| `mcp__nuxt-seo-pro__estimate_domain_traffic` | Competitor traffic and top pages |

## Workflow

### 0. Check Existing Context

Before starting, check for existing artifacts:

```bash
ls .claude/context/market-research.md 2>/dev/null
```

If exists, read it to understand prior research. Ask user if they want to:
- Update existing research
- Start fresh
- Research a different product

### 1. Gather Product Context

If no existing context, use `AskUserQuestion` to gather essentials:

**Required questions:**
```
1. What's the product/idea name?
2. What problem does it solve? (one sentence)
3. Who is the target user? (developer type, role, etc.)
```

**Optional follow-ups (if user has info):**
```
4. Any known competitors?
5. What makes this different from alternatives?
6. Preferred domain name ideas?
```

Don't skip this step. Research without context wastes API calls.

### 2. Define the Product Space

From user answers, define:
- What problem does it solve?
- Who would use it?
- What would someone search to find it?

Generate 3-5 seed keywords that potential users might search:
- Problem keywords: "how to [problem]"
- Solution keywords: "[tool type] for [use case]"
- Comparison keywords: "[existing tool] alternative"

### 3. Research Search Demand

```
mcp__nuxt-seo-pro__research_keywords
  topic: "[seed keyword]"
  limit: 30
  minVolume: 10
  maxDifficulty: 60
```

Run for each seed keyword. Look for:

| Signal | What it Means |
|--------|--------------|
| High volume, low difficulty | Underserved demand |
| Many related keywords | Broad market interest |
| Question keywords | People need education/solutions |
| Brand keywords | Existing players to study |

### 4. Analyze Competition

For top keywords, check who ranks:

```
mcp__nuxt-seo-pro__analyze_serp
  keyword: "[high potential keyword]"
  depth: 10
```

Evaluate:
- **Who ranks?** — Big players vs small sites
- **Domain authority** — High DR = harder to compete
- **Content type** — Are they products or content sites?
- **SERP features** — Featured snippets, PAA = educational intent

### 5. Study Competitors

For any product-focused domains found:

```
mcp__nuxt-seo-pro__check_rankings
  domain: "competitor.com"
  limit: 50
```

Learn:
- What keywords drive their traffic?
- What pages rank best?
- Where do they NOT rank? (gaps)

### 6. Synthesize Findings

**Positive signals:**
- 100+ monthly searches for problem keywords
- Multiple related keywords with combined 500+ volume
- Few direct product competitors
- Content sites ranking (vs established SaaS)
- Question keywords indicate education gap

**Negative signals:**
- Very low search volume (<50 total)
- All results are major players (high DR)
- Existing tools dominate with strong brands
- No commercial intent keywords

### 7. Social Signal Research

Search demand is one signal. Validate with community activity:

```
mcp__nuxt-seo-pro__analyze_social_signals
  topic: "[product idea or problem]"
```

#### Interpreting Results

| Signal | What it Means |
|--------|---------------|
| `activityLevel: high` (100+) | Active community, validated demand |
| `activityLevel: medium` (20-100) | Moderate interest, worth exploring |
| `activityLevel: low` (<20) | Niche or emerging topic |
| `trend: growing` | Good timing, recent activity increasing |
| `trend: declining` | May indicate market saturation |

#### GitHub Signals

| Signal | Implication |
|--------|-------------|
| Repos with 100+ stars | Validated interest |
| Recent `lastCommit` dates | Active space |
| Many repos | People building in this area |

#### Reddit Signals

| Signal | Implication |
|--------|-------------|
| High upvotes | Pain is real |
| `sentiment: positive` | People want solutions |
| Active subreddits | Community exists |

#### Twitter/X

Currently placeholder — search X directly for recent mentions if needed.

### 8. Competitor Deep-Dive

For each significant competitor found:

#### Traffic Overview

```
mcp__nuxt-seo-pro__estimate_domain_traffic
  domain: "competitor.com"
```

Understand their scale:
- **Monthly traffic** — How big are they?
- **Trend** — Growing or declining?
- **Top pages** — What content drives traffic?
- **Domain rank** — How authoritative?

#### Keyword Strategy

```
mcp__nuxt-seo-pro__check_rankings
  domain: "competitor.com"
  limit: 100
```

Map their keywords:
- **Head terms** — What broad keywords do they own?
- **Long-tail** — What specific queries bring traffic?
- **Gaps** — What DON'T they rank for?

#### Product Analysis

Visit their site and document:

| Aspect | Notes |
|--------|-------|
| Pricing | Free/paid, tiers |
| Features | Core offering |
| Positioning | How they describe themselves |
| Weaknesses | Bad UX, missing features, complaints |
| Strengths | What they do well |

#### Social Presence

| Platform | Handle | Followers | Activity |
|----------|--------|-----------|----------|
| Twitter | @handle | X | Active/dormant |
| GitHub | org/repo | X stars | Last commit |
| Discord | link | X members | Active? |

### 9. Domain Research

Check domain availability using WHOIS data:

```
mcp__nuxt-seo-pro__check_domain_availability
  domains: ["option1.dev", "option2.io", "option3.com"]
```

Batch up to 10 domains per request.

#### Interpreting Results

| Field | Use |
|-------|-----|
| `available: true` | Ready to register |
| `available: false` | Taken — check `expiration` for potential future availability |
| `registrar` | Who owns it (useful for competitor research) |
| `created` | When registered (market timing insight) |

#### Domain Strategy

When evaluating options:

| TLD | Best For |
|-----|----------|
| `.com` | Mass market, highest recognition |
| `.dev` | Developer tools, requires HTTPS |
| `.io` | Tech startups, developer audience |
| `.app` | Mobile/web apps, requires HTTPS |

**Note:** Checking availability does not reserve the domain. Register promptly if needed.

### 10. Generate Artifacts

After completing research, write persistent artifacts:

```bash
# Create context directory if needed
mkdir -p .claude/context
```

**Write `.claude/context/market-research.md`:**

```markdown
# Market Research: [Product Name]

**Generated:** [date]
**Last updated:** [date]

## Product

**Name:** [name]
**One-liner:** [description]
**Problem solved:** [problem]
**Target audience:** [who]

## Market

**Total addressable search volume:** [X]/month

**Primary keywords:**
- [keyword 1] ([volume], difficulty [X])
- [keyword 2] ([volume], difficulty [X])

**Competitors:**
- [Competitor 1] — [what they do]
- [Competitor 2] — [what they do]

## Positioning

**Differentiator:** [what makes it different]
**Key benefits:**
1. [benefit 1]
2. [benefit 2]
3. [benefit 3]

## Recommendation

[Build / Validate / Pass] — [one sentence reasoning]
```

**Write `.claude/context/competitors.md`** (if significant competitors found):

```markdown
# Competitors: [Product Name]

**Generated:** [date]

## [Competitor 1]

**URL:** [url]
**What they do:** [description]

**Traffic keywords:**
- [keyword 1] — position [X]
- [keyword 2] — position [X]

**Strengths:** [list]
**Weaknesses:** [list]
**Pricing:** [model]

## [Competitor 2]

[...]

## Gaps to Exploit

- [Gap 1] — they don't [X]
- [Gap 2] — users complain about [X]
```

**Tell the user** where artifacts were saved so they know other skills will reference them.

## Output Format

```markdown
## Market Research: [Product Idea]

**Date:** [YYYY-MM-DD]
**Idea:** [one-line description]

### Search Demand

| Keyword | Volume | Difficulty | Intent |
|---------|--------|------------|--------|
| [keyword] | [X] | [X] | [problem/solution/comparison] |

**Total addressable search volume:** ~[X]/month

### Competition Landscape

**Direct competitors:**
- [Competitor 1] — [what they do, DR]
- [Competitor 2] — [what they do, DR]

**Content competitors:**
- [Site] — ranks for [keywords]

### Social Signals

**Activity level:** [high/medium/low] | **Trend:** [growing/stable/declining]

| Platform | Signal | Implication |
|----------|--------|-------------|
| GitHub | [X repos, Y total stars] | [active/dormant space] |
| Reddit | [X threads, sentiment] | [pain validated/not] |

### Competitor Deep-Dive: [Top Competitor]

| Aspect | Finding |
|--------|---------|
| Monthly traffic | [X] ([trend]) |
| Domain rank | [X] |
| Top pages | [list top 3] |
| Traffic keywords | [top 5 keywords] |
| Pricing | [model] |
| Strengths | [what they do well] |
| Weaknesses | [gaps/complaints] |

### Market Signals

| Signal | Finding | Implication |
|--------|---------|-------------|
| Search volume | [high/medium/low] | [what it means] |
| Competition | [high/medium/low] | [what it means] |
| Social proof | [high/medium/low] | [what it means] |
| Intent type | [informational/transactional] | [what it means] |

### Domain Options

| Domain | Available | Notes |
|--------|-----------|-------|
| [option1.dev] | Yes/No | [expiration if taken, recommendation] |

### Opportunities

- [Opportunity 1] — [why]
- [Opportunity 2] — [why]

### Risks

- [Risk 1] — [mitigation]
- [Risk 2] — [mitigation]

### Recommendation

[Build / Validate further / Pivot / Pass]

[Reasoning in 2-3 sentences]
```

## Example: FrontendAI

Seed keywords to research:
- "claude code mcp"
- "ai coding assistant vue"
- "nuxt ai tools"
- "claude skills"
- "mcp server [framework]"
- "ai frontend development"

Look for:
- Are devs searching for AI-assisted frontend tooling?
- What specific frameworks have demand?
- Are there existing MCP/skill providers?
- What problems do devs search for that AI could solve?

## References

- `references/market-signals.md` — Interpreting search data for product decisions
- `../skill-artifacts.md` — Artifact pattern for cross-skill context
