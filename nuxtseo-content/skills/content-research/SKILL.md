---
name: Content Research
description: Use for "keyword research", "content gaps", "content strategy", "content plan", "what should I write about", "SEO research", "topic research", or pre-writing research.
version: 0.2.0
---

# Content Research

Pre-writing research for keyword discovery, content gaps, and competitive analysis.

## Artifacts

**Reads:**
- `.claude/context/site-config.md` — Site URL, name, industry for research context
- `.claude/context/market-research.md` — Product context, existing keyword research

**Generates:**
- `.claude/context/target-keywords.md` — Keywords to target across content

**Before running:** Check for site-config.md. If missing, ask user for site URL, name, and industry. Use `{site.*}` values in keyword research.

## MCP Tools

| Tool | Purpose | Requires init_site |
|------|---------|-------------------|
| `mcp__nuxt-seo-pro__research_keywords` | Keyword suggestions with volume/difficulty | No |
| `mcp__nuxt-seo-pro__analyze_serp` | Competition analysis, SERP features | No |
| `mcp__nuxt-seo-pro__check_rankings` | Current rankings for a domain | No |
| `mcp__nuxt-seo-pro__get_sitemap_urls` | Existing content inventory | Yes |
| `mcp__nuxt-seo-pro__profile_site` | Site type, industry, audience | Yes |

**Site-specific tools:** If using `get_sitemap_urls` or `profile_site`, ensure user has run `init_site` first. If not initialized, skip these tools and proceed with keyword research.

### Example MCP Workflow

```
1. mcp__nuxt-seo-pro__get_sitemap_urls → understand existing content
2. mcp__nuxt-seo-pro__research_keywords with topic → find keyword opportunities
3. mcp__nuxt-seo-pro__analyze_serp for top keywords → understand competition
```

## Fallback: WebSearch

If MCP tools unavailable, use WebSearch:

```
1. Search "[topic] search volume" or use free tools like Ubersuggest
2. Search "[topic]" and analyze top 10 results manually
3. Search "site:[domain]" to see existing content
```

## Workflow

### 1. Gather Context

| Context | MCP Tool | Fallback |
|---------|----------|----------|
| Existing pages | `get_sitemap_urls` | `site:[domain]` search |
| Site type/audience | `profile_site` | Read homepage/about |
| Current rankings | `check_rankings` | Search brand name |

### 2. Identify Content Pillars

Content pillars = core topics the site owns. Look for:

1. Top-level `/docs/` sections
2. `/learn/` or `/blog/` category groupings
3. Recurring themes across pages

Questions to answer:
- Does this article support an existing pillar?
- Is there a gap in pillar coverage?
- Should this become a new pillar? (needs 5+ articles to justify)

See `references/content-pillars.md` for patterns.

### 3. Keyword Research

**Selection criteria:**
| Metric | Target | Why |
|--------|--------|-----|
| Volume | 100-1000/month | Long-tail sweet spot |
| Difficulty | <40 | Achievable ranking |
| CPC | Higher = better | Indicates commercial intent |

Pick 3-5 long-tail keywords with decent volume + low difficulty.

**MCP example:**
```
mcp__nuxt-seo-pro__research_keywords
  topic: "{site.industry} booking software"
  limit: 20
```

### 4. Competition Analysis

Understand what currently ranks:
- Who's in top 10?
- What SERP features exist (featured snippets, PAA)?
- What content format dominates (tutorial, reference, list)?

**MCP example:**
```
mcp__nuxt-seo-pro__analyze_serp
  keyword: "online booking for {site.industry}"
```

### 5. Gap Analysis

Compare existing content against opportunities:
- Keywords with no matching content
- Existing pages that could target additional keywords
- User questions without answers

Track opportunities:
```markdown
## Content Opportunities

- [ ] **[Article Title]** (`/path/to/article`)
  - Target: "[keyword]" ([volume]/mo, difficulty [X])
  - Cover: [topics to include]
  - Link from: [existing pages]
```

## Research Markers

Use when drafting to mark unknowns:

```markdown
[VERIFY: claim about X - check official docs]
[STAT NEEDED: specific statistic to find]
[SOURCE NEEDED: claim requires authoritative source]
[OUTDATED: info from YYYY - needs update]
[CONFLICTING: sources disagree - investigate]
```

## Source Priority

See `references/source-priority.md` for full details.

1. Official docs (Google Search Central, MDN, framework docs)
2. Primary research (Google studies, industry reports)
3. Notable ecosystem voices (core team, library authors)
4. Authoritative blogs (web.dev, developers.google.com)
5. Reputable tech sites (Moz, Ahrefs)

**Avoid:** tutorialspoint, w3schools, Medium without known authors, content >2 years old for SEO.

## Output Format

```markdown
## Research Summary

**Topic:** [topic]
**Date:** [YYYY-MM-DD]

### Target Keywords

| Keyword | Volume | Difficulty | Intent |
|---------|--------|------------|--------|
| [primary] | [X] | [X] | [informational/transactional] |
| [secondary] | [X] | [X] | [intent] |

### Competition

- **Top rankers:** [domains]
- **SERP features:** [featured snippet, PAA, etc.]
- **Dominant format:** [tutorial/reference/list]

### Content Gaps

- [gap 1] — opportunity because [reason]
- [gap 2] — [reason]

### Recommended Approach

- Content type: [tutorial/reference/guide]
- Angle: [unique perspective]
- Target length: [word count estimate]
```

## References

- `references/source-priority.md` — Source hierarchy with examples
- `references/content-pillars.md` — Pillar analysis patterns
